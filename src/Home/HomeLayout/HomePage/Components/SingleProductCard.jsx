import { useQuery } from "@tanstack/react-query";
import { Button, Card } from "flowbite-react";
import React, { useEffect, useState } from "react";

const SingleProductCard = ({ data, setBook,setReport, handleReport }) => {
  console.log(data);
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
            <label className="btn" htmlFor="reportConfirm" onClick={()=>setReport(data)}>Report</label>
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

          <div className="mt-2.5 mb-5 flex items-center">
            <svg
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
              5.0
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              ${data.resellPrice ? data.resellPrice : "No DAta"}
            </span>
            <label
              onClick={() => setBook(data)}
              htmlFor="bookingConfirm"
              className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to cart
            </label>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SingleProductCard;
