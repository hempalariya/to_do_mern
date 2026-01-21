import React, { useEffect, useState } from "react";
import NavButton from "./NavButton";

import { HiUserCircle } from "react-icons/hi";
import UserMenu from "./UserMenu";

export default function Nav() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user)

  useEffect(() => {
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [user]);

  function handleLogout() {
    localStorage.removeItem('user')
    setIsLoggedIn(false);
  }

  return (
    <nav className="flex gap-5">
      {!isLoggedIn && (
        <>
          <NavButton to={"/register"}>Register</NavButton>
          <NavButton to={"/login"}>Login</NavButton>
        </>
      )}
      {isLoggedIn && (
        <div className="relative">
          <HiUserCircle className="text-3xl cursor-pointer"/>
          <UserMenu user = {user} handleLogout={handleLogout}/>
        </div>
      )}
    </nav>
  );
}
