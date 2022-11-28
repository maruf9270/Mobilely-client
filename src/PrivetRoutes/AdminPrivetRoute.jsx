import React, { Children, useContext } from "react";
import { toast } from "react-toastify";
import BigSpinner from "../Components/BigSpinner";
import { UserContext } from "../Contexts/AuthContexts";
import { useAdmin } from "../Hooks/useAdmin";

const AdminPrivetRoute = ({ children }) => {
  const { user, loading, logOut } = useContext(UserContext);
  const [admin, adminLoading] = useAdmin(user?.email);

  if (adminLoading || loading) {
    return <BigSpinner></BigSpinner>;
  }
  if (user?.uid && admin) {
    return children;
  } else {
    return () =>
      logOut().then((res) => {
        toast.error("Unauthorized Access");
      });
  }
};

export default AdminPrivetRoute;
