import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddPassword } from "../redux/actions";
import { ResetPassword } from "../redux/actions";

const PASSWORDSTRINGS =
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$";

const LENGTH = 20;

const Generatepasswordbtn = () => {
  const dispatch = useDispatch();
  const length = useSelector((state) => state.length);

  const generateRandomPassword = () => {
      if (length > 0) {
        dispatch(ResetPassword());
      let rPass;
      for (let i = 0; i < 10; i++) {
        rPass = Array(length)
          .fill(PASSWORDSTRINGS)
          .map(function (x) {
            return x[Math.floor(Math.random() * x.length)];
          })
          .join("");
        dispatch(AddPassword(rPass));
      }
    }
  };
  return (
    <div className="btn-container container">
      <button
        className="btn-generate-password mt-3"
        onClick={generateRandomPassword}
      >
        Generate Password
      </button>
    </div>
  );
};

export default Generatepasswordbtn;
