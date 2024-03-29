import { Button, Modal } from "flowbite-react";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { UserContext } from "../../../../Contexts/AuthContexts";

const BookingConfirmModal = ({ book, setBook, ConfirmBooking }) => {
    const {user} = useContext(UserContext)

    // Handling Confirm button 
    const [disabe, setDisable] = useState(false)


    // Handling submit
    const handleSumbit = (e) =>{
        setDisable(true)
        e.preventDefault()
        const form = e.target;
        const phone = form.phone.value;
        const location = form.location.value;
        const bookingData = {
            phone,
            location,
            productId: book._id,
            buyer:user.email
        }
        const token = localStorage.getItem('token')

        // Sending the data to the database
        fetch(`${process.env.REACT_APP_server}/bookings`,{
            method:"PUT",
            headers:{
                "content-type":"application/json",
                "token" : token
            },
            body: JSON.stringify(bookingData)
        })
        .then(res=>res.json())
        .then(data=>{
           if(data.insertedId){
            toast.success("Booking a meet with sellr has been confirmed")
            
           }
           else{
            toast.error(data.message)
           }
           
          //  setBook(null)
          //  form.reset()
        })
        .catch(err=>{
            console.log(err);
            toast.error("Something went wrong please try again letter")
            setDisable(false)
        })
       
    }

    // Handling Cancel
    const handleCalcel = () =>{
        setDisable(false)
        setBook(null)
    }
  return (
    <div>
      {/* The button to open modal */}
      {/* <label htmlFor="bookingConfirm" className="btn">open modal</label> */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="bookingConfirm" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box relative">
        <label htmlFor="bookingConfirm" className="btn btn-sm btn-circle absolute right-2 top-2" onClick={()=>setBook(null)}>✕</label>
          <h3 className="font-bold text-lg mb-4">
            Confirm Booking of <span className="text-2xl">{book?.name}</span>
          </h3>
          <div>
            <img src={book?.full_image} alt="" />
          </div>
          <div>
            <h3 className="font-bold text-3xl mt-5">
                {
                    book?.name
                }
            </h3>
          </div>
          <p className="py-4">
        {
            book?.description            
        }
          </p>

          <form action="" onSubmit={handleSumbit}>
                    <div className="form-control w-full ">
                        <label className="label">
                        <span className="label-text">Name</span> 
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full " defaultValue={user?.displayName} readOnly/>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                        <span className="label-text">Email</span> 
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full " defaultValue={user?.email} readOnly/>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                        <span className="label-text">Phone Number</span> 
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full " name="phone" required/>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                        <span className="label-text">Meeting Location</span> 
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full " name="location" required/>
                    </div>
                    <div className="mt-4">
                        <h2 className="text-xl font-bold">
                            Poduct info
                        </h2>
                        <div>
                        <span className="font-bold">Brand:</span>{" "}
                        {book?.brand? <>{book?.brand}</> : "No Data"} <br/>
                        </div>
                        <div>
                        <span className="font-bold">Model Name:</span>{" "}
                        {book?.name? <>{book?.name}</> : "No Data"} <br/>
                        </div>
                        <div>
                        <span className="font-bold">Mobile:</span>{" "}
                        {book?.mobile? <>{book?.mobile}</> : "No Data"} <br/>
                        </div>
                        <div>
                        <span className="font-bold">Condition:</span>{" "}
                        {book?.condition? <>{book?.condition}</> : "No Data"} <br/>
                        </div>
                        <div>
                        <span className="font-bold">Brougth:</span>{" "}
                        {book?.year? <>{book?.year}</> : "No Data"} <br/>
                        </div>
                        <div>
                        <span className="font-bold">Original Price:</span>{" "}
                        {book?.price? <>{book?.price}</> : "No Data"} <br/>
                        </div>
                        <div>
                        <span className="font-bold">Resell Price:</span>{" "}
                        {book?.resellPrice? <>{book?.resellPrice}</> : "No Data"} <br/>
                        </div>
                        
                    </div>


                    <div className="modal-action">
            
            <label htmlFor="bookingConfirm">
            <button
              htmlFor="bookingConfirm"
              className={`btn btn-primary ${!disabe ? "" : "btn-disabled"}`}
              onClick={ConfirmBooking}

              
            >
                Confirm
             
            </button>
            </label>

            <label
              htmlFor="bookingConfirm"
              className="btn"
              onClick={handleCalcel}
            >
              {
                !disabe ? "Cancel" : "Close"
              }
            </label>
          </div>
          </form>
         
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmModal;
