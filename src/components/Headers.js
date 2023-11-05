import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../App.css";
function Headers(props) {
  const navigation = [
    { name: "Dashbord", href: "/dash" },
    { name: "Typetask", href: "/typetask" },
  ];
  const left_side_bar = [
    { name: "Topshiriqlar turi", href: "/tasks" },
    { name: "Topshiriqlar ro'yhati", href: "/lstasks" },
  ];
  return (
    <div className="pl-2 pt-1 ">
      <div className="bg-gray-300 p-3 font-semibold text-xl text-white  ">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className=" bg-gray-300 ml-3 rounded p-2  no-underline hover:bg-gray-500 hover:text-white"
          >
            {item.name}
          </NavLink>
        ))}
      </div>
      {/* left site  */}
      <div className="flex flex-row bg-slate-100">
        <div className="min-w-[220px]">
          {left_side_bar.map((item) => (
            <div className="flex justify-between">
              <div>
                <img
                  src="/images/icons8-folder-64.png"
                  alt=""
                  style={{ width: 20, height: 20 }}
                />
              </div>
              <div>
                <NavLink
                  key={item.name}
                  to={item.href}
                  className=" no-underline grow "
                >
                  {item.name}
                </NavLink>
              </div>
              <div className="">
                <img
                  src="/images/icons8-down-30.png"
                  alt=""
                  style={{ width: 20, height: 20 }}
                />
              </div>
            </div>
          ))}
        </div>
        {/* center site */}

        <div className="w-full  bg-white "> {props.children}</div>

        {/* rigth site */}
        <div className="min-w-[220px] min-h-screen bg-stone-200">right</div>
      </div>
      <div className="bg-gray-400 text-center text-white p-2 text-xl">
        Asaka 2023
      </div>
    </div>
  );
}

export default Headers;
