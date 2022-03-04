import React from "react";
import Admin from "../Form/index";

const ProtectedRoute = ({Component}) => {
    const [isAuthenticated, setLoggedIn] = React.useState(true);
  // const [confirmation, setConfirmation] = React.useState(true);
  React.useEffect(() => {
    (async () => {
      let user = null;

      try {
        user = JSON.parse(localStorage.getItem("admin_user"));
        if (user.token) {
          setLoggedIn(true); 
        } else {
           setLoggedIn(false);
        }
      } catch (e) {
        setLoggedIn(false);
      }
    })();
  });

  return isAuthenticated  ?  <Component />  : <Admin />
};

export default ProtectedRoute;