import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { toast } from "react-toastify";
import SmallSpinner from "../../../Components/SmallSpinner";
import DeleteModal from "./DeleteModal";
import ProsuctTable from "./ProsuctTable";

const ReportedItems = () => {
  const {
    data: reportedItems = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["reportedItems"],
    queryFn: () =>
      fetch(`${process.env.REACT_APP_server}/reports`, {
        headers: { token: localStorage.getItem("token") },
      }).then((res) => res.json()),
  });

  const [deletereported, setDelete] = useState(null);
  const handleDelete = () => {
    fetch(
      `${process.env.REACT_APP_server}/deletereported/${deletereported._id}`,
      {
        method: "delete",
        headers: {
          token: localStorage.getItem("token"),
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        toast.success("Deleted Repored Successfully");
        refetch();
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong");
      });
  };

  return (
    <div className="border border-stone-300 w-[98%] md:p-5 rounded-md md:mx-4 sm:mx-auto">
      <h5 className=" text-center font-bold text-2xl my-6 ">Reported Items</h5>
      {isLoading ? (
        <SmallSpinner></SmallSpinner>
      ) : reportedItems.length > 0 ? (
        <ProsuctTable
          reportedItems={reportedItems}
          setDelete={setDelete}
        ></ProsuctTable>
      ) : (
        <div className="text-3xl font-bold text-center">
          No Reported Item Found
        </div>
      )}
      <DeleteModal
        handleDelete={handleDelete}
        setDelete={setDelete}
        deletereported={deletereported}
      ></DeleteModal>
    </div>
  );
};

export default ReportedItems;
