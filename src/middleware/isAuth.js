import * as React from "react";
import { useEffect } from "react";
import Router from "next/router";
import Swal from "sweetalert2";
import checkToken from "./checkToken";

const Cookies = require("js-cookie");

function IsAuth(Component) {
  return (props) => {
    const jwtToken = Cookies.get("jwtToken");
    let status;
    checkToken(jwtToken)
      .then((stats) => {
        status = stats;
      })
      .catch((err) => {
        console.log(err);
      });

    useEffect(() => {
      if (!jwtToken || status === true) {
        Swal.fire({
          icon: "error",
          title: "You're not Allowed!",
          text: "No session found to access this page or your session was ended!",
        });
        Cookies.remove("jwtToken");
        Cookies.remove("isAuth");
        Router.push("/home");
      }
    }, []);

    return (
      <>
        <Component {...props} />
      </>
    );
  };
}

export default IsAuth;
