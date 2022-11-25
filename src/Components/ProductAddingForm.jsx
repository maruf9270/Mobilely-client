import { CalendarIcon, FlagIcon, RssIcon } from "@heroicons/react/20/solid";
import React, { useContext, useEffect, useState } from "react";
import DatePicker from 'react-datepicker'
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../Contexts/AuthContexts";
import format from 'date-fns/format'

const ProductAddingForm = () => {
    const {user} = useContext(UserContext)
    const navigate = useNavigate()

    // Handling product brands
  const [brands, setbrands] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_server}/brands`)
      .then((res) => res.json())
      .then((data) => setbrands(data));
  }, []);

    // Sending data to the server
     const send = (props) =>{
        fetch(`${process.env.REACT_APP_server}/product/${user?.email}`,{
            method:"post",
            headers:{
                "content-type":"application/json"
                ,"token":"maruf"
            },
            body: JSON.stringify(props)
        })
        .then(res=>res.json())
        .then(data=>{
            toast.success("Product added successfully")
            navigate('/dashboard')
        })
        console.log(props);
     }
    // handling form
    const handlesumbit = (e) =>{
        e.preventDefault()
        const form = e.target
        const brand = form.brand.value;
        const name = form.name.value;
        const price = form.price.value;
        const condition = form.condition.value;
        const mobile = form.mobile.value;
        const address = form.address.value;
        const image = form.image.files[0];
        const description = form.description.value
        const year = form.purchase.value
        const resellPrice = form.resellPrice.value
        const used = form.used.value;
        const date = new Date()
        const AddDate = format( date,"PP")
        console.log(name,price,condition,mobile,address,image,description);
        
        // Sending the image data to the server
        const formdata= new FormData();
        formdata.append("image",image)

        fetch(`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imagebb}`,{
            method:"POST",
            body:formdata
        })
        .then(res=>res.json())
        .then(data=>{
        
            const full_image= data.data.display_url;
            const thumbnail = data.data.thumb.url;
            const product = {
                user:{
                    name: user?.displayName ? user?.displayName: "No Name",
                    email: user?.email
                },
                brand,
                name,
                price,
                mobile,
                address,
                condition,
                year,
                full_image,
                thumbnail,
                resellPrice,
                AddDate,
                advertised: false,
                sold: false,
                used
            }
            send(product)
        })

       
    }

  return (
    <div className="w-full">
      {/* Category section */}
      <form action="" onSubmit={handlesumbit}>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Brand</span>
          </label>
          <select className="select select-bordered" name="brand">
            {brands?.map((b) => (
              <option key={b._id} value={b.brand}>
                {b.brand}
              </option>
            ))}
          </select>
        </div>
        {/* Product name */}
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <input
            type="text"
            placeholder="Product Name"
            className="input input-bordered w-full "
            name="name"
            required
          />
        </div>

        {/* Price and condition */}
        <div className="flex w-full h-full md:flex-row flex-wrap">
          <div className="flex">
            <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Original Price</span>
                </label>
                <input
                  type="number"
                  placeholder="Purchasing price"
                  className="input input-bordered w-full "
                  name="price"
                  required
                />
              </div>
            </div>
            

           <div>
           <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Resell Price</span>
                </label>
                <input
                  type="number"
                  placeholder="Resell price"
                  className="input input-bordered w-full "
                  name="resellPrice"
                  required
                />
              </div>
            </div>
           </div>


          </div>




          <div className="flex flex-row ">

{/* condition of the mobile */}
        <div >
              <div className="form-control  mx-4">
                <label className="label">
                  <span className="label-text">Condition</span>
                </label>
                <select className="select select-bordered rounded-md font-bold" name="condition">
                  <option disabled selected>
                    Pick one
                  </option>
                  <option>Excellent</option>
                  <option>Good</option>
                  <option>Fair</option>
                </select>
              </div>
            </div>


            <div className="form-control ">
              <label className="label">
                <span className="label-text">Mobile</span>
              </label>
              <input
                type="number"
                placeholder="Mobile Number"
                className="input input-bordered"
                name="mobile"
                required
              />
            </div>
          </div>
        </div>

        {/* Location section */}
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input
            type="address"
            placeholder="Address"
            className="input input-bordered w-full "
            name="address"
            required
          />
      </div>

        {/*//! image section starts from here */}
       <div className="flex">
        <div className="form-control w-full max-w-xs">
            <label className="label">
                <span className="label-text">Image</span>
            </label>
            <input
                type="file"
                className="file-input file-input-bordered w-full max-w-xs"
                name="image"
                accept="image/*"
            />
            </div>
            <div>
                    <div className="form-control w-full ">
                <label className="label">
                    <span className="label-text">Purchase year</span>
                </label>
                <input
                    type="number"
                    placeholder="Purchase Year"
                    className="input input-bordered w-full "
                    name="purchase"
                    required
                />
                </div>
            </div>
       </div>



       <div>
                    <div className="form-control w-full ">
                <label className="label">
                    <span className="label-text">Used for</span>
                </label>
                <input
                    type="number"
                    placeholder="Used Year"
                    className="input input-bordered w-full "
                    name="used"
                    required
                />
                </div>
            </div>
       {/* <div>
       <div className='shadow-md rounded-md my-2 p-3 flex justify-between items-center'>
                <div>
                  <p className='block text-sm text-gray-500'>From</p>
                  <DatePicker selected={new Date()} className='w-2/3' />
                </div>

                <CalendarIcon className='h5 w-5' />
              </div>
       </div> */}

        {/* text area section starts */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Description"
            name="description"
          ></textarea>
        </div>
        <div>
            <button className="btn btn-primary my-5 mx-auto" type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default ProductAddingForm;
