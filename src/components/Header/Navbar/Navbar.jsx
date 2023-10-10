import React from "react";

const Navbar = () => {
  return (
    <nav className="h-12 w-full flex fixed  px-10 justify-between items-center bg-white text-black ]">
      <logo>===</logo>
      <div className="flex gap-5">
        <a href="">github</a>
        <a href="">linkedln</a>
        <a href="">email</a>
      </div>
    </nav>
  );
};

export default Navbar;
