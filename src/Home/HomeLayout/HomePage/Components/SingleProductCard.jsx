import { useQuery } from "@tanstack/react-query";
import { Button, Card } from "flowbite-react";
import React, { useEffect, useState } from "react";

const SingleProductCard = ({ data, setBook,setReport, handleReport }) => {

  const [seller, setData] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_server}/product/seller/${data.user.email}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [data]);
  return (
    <div>
      <div className="min-w-[280px] max-w-[300px]">
        <Card>
          <div className="flex items-center space-x-2 relative">
            <img
              src={seller.image}
              alt=""
              className="object-cover object-center w-8 h-8 rounded-full shadow-sm bg-gray-500 border-gray-300"
            />
            <div className="-space-y-1">
              <h2 className="text-sm font-semibold leading-none">
                {seller.name}
                {seller.varified ? (
                  <img
                    src="https://i.ibb.co/Q8tqPRq/check-2.png"
                    className="w-4 inline"
                    alt=""
                  />
                ) : (
                  ""
                )}
              </h2>

              <span className="inline-block text-xs leading-none text-gray-600">
                {seller.varified ? "Varified" : "Unvarified"}
              </span>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img src={data.thumbnail} alt="" />
          </div>

          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {data.name}
          </h5>

          <div>
            <span className="font-bold">Posted:</span>{" "}
            {data.AddDate ? data.AddDate : "No Date"} <br />
            <span className="font-bold">Address:</span>{" "}
            {data.address ? data.address : "No Data"} <br />
            <span className="font-bold">Original Price:</span> {data.price}{" "}
            <br />
            <span className="font-bold">Used For:</span>{" "}
            {data.used ? <>{data.used} years</> : "No Data"} <br/>
            <span className="font-bold">Codition:</span>{" "}
            {data.used ? <>{data.condition}</> : "No Data"} <br/>

            
          </div>

          <div>
            <p>
              {data?.description ? (
                data.description.length > 200 ? (
                  <>{data.description.slice(0, 100)}....</>
                ) : (
                  data.description
                )
              ) : (
                ""
              )}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              TK: {data.resellPrice ? data.resellPrice : "No DAta"}
            </span>
            <label
              onClick={() => setBook(data)}
              htmlFor="bookingConfirm"
              className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
             Book
            </label>
          </div>
          <label className="btn btn-xs btn-ghost" htmlFor="reportConfirm" onClick={()=>setReport(data)}>Report to Admin</label>
        </Card>
      </div>
    </div>
  );
};

export default SingleProductCard;
