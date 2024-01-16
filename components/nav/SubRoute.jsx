import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

export const SubRoute = ({ Route, subRoute, setLoading, pathName, icon }) => {
  const [open, setOpen] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        componentRef.current &&
        !componentRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [componentRef]);

  return (
    <div ref={componentRef}>
      <div
        className={`border-b-2 px-2 cursor-pointer flex items-center align-middle	 hover:border-green-300 transition ease-out duration-300 ${
          open &&
          "bg-green-50 border-green-200 rounded-sm hover:border-green-400"
        } ${
          Route.route === pathName
            ? "pointer-events-none border-green-200 opacity-90"
            : "border-transparent"
        } ${
          Route.subRoutes?.find((e) => e.route === pathName) && "bg-green-100"
        }`}
        onClick={() => subRoute && setOpen(!open)}
      >
        <div>
          {subRoute ? (
            <div className="flex items-center">
              {icon && icon}
              <p className="pl-2 pt-[2px] text-small text-center align-middle items-center">
                {Route.title}
              </p>
              {subRoute && (open ? <BsChevronUp /> : <BsChevronDown />)}
            </div>
          ) : (
            <Link
              href={Route.route}
              className="flex items-center"
              onClick={() => {
                setOpen(false);
                setLoading(true);
              }}
            >
              {icon && icon}
              <p className="pl-2 pt-[2px] text-small text-center align-middle items-center">
                {Route.title}
              </p>
            </Link>
          )}
        </div>
      </div>

      {open && (
        <div
          id="openSubRoutes"
          className="showDiv fixed flex flex-col mt-3 p-3 bg-white border-2 rounded-md border-slate-200 z-10"
        >
          {Route.subRoutes.map((e) => (
            <Link
              onClick={() => {
                setOpen(!open);
                setLoading(true);
              }}
              href={e.route}
              key={e.route}
              className={`transition ease-out duration-300 hover:bg-green-100 hover:border-green-200 border-2 w-full p-1 px-2 rounded-md mb-1 
              ${
                e.route === pathName &&
                "pointer-events-none bg-green-100 border-green-200 opacity-70"
              }
            }`}
            >
              <p>{e.name}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
