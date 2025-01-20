import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import LocalMallRoundedIcon from "@mui/icons-material/LocalMallRounded";
const UserType = () => {
  return (
    <>
      <ul className="gap-4 text-slate-400 hidden tablet:flex">
        <li className="text-lg hover:text-blue-400 transition cursor-pointer">
          <AccountCircleIcon />
        </li>
        <li className="text-lg hover:text-blue-400 transition cursor-pointer">
          <FavoriteRoundedIcon />
        </li>
        <li className="text-lg hover:text-blue-400 transition cursor-pointer">
          <LocalMallRoundedIcon />
        </li>
      </ul>
    </>
  );
};

export default UserType;
