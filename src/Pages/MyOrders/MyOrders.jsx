import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import BigSpinner from "../../Components/BigSpinner";
import SmallSpinner from "../../Components/SmallSpinner";
import { UserContext } from "../../Contexts/AuthContexts";
import OrderTable from "./Components/OrderTable";

const MyOrders = () => {
  const { user, loading } = useContext(UserContext);
  const emaeil = user?.email;

  const { data: myOrders = [], isLoading } = useQuery({
    queryKey: ["MyOrders"],
    queryFn: () =>
      fetch(`${process.env.REACT_APP_server}/orders/${emaeil}`, {
        headers: { token: localStorage.getItem("token") },
      }).then((res) => res.json()),
    enabled: !!emaeil,
  });

  return (
    <div className=" max-w-screen-xl mx-auto p-5  min-h-[600px] ">
      {isLoading ? (
        <BigSpinner></BigSpinner>
      ) : (
        <OrderTable myOrders={myOrders}></OrderTable>
      )}
    </div>
  );
};

export default MyOrders;
