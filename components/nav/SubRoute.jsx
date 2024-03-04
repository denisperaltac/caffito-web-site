import { authUser } from "@/redux/features/userLogSlice";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useDispatch } from "react-redux";

export const SubRoute = ({ Route, subRoute, setLoading, pathName, icon }) => {
  const dispatch = useDispatch();
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
            ? "pointer-events-none opacity-70 bg-slate-200 rounded"
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
          className="showDiv fixed flex flex-col mt-3 p-3 bg-white border-2 rounded-md border-slate-500 z-10"
        >
          {Route.subRoutes.map((e) =>
            e.route === "/cerrar-sesion" ? (
              <Link
                href={"/"}
                key={e.route}
                className={`transition flex items-center gap-2  ease-out duration-300 hover:bg-green-100 hover:border-green-200 border-2 w-full p-1 px-2 rounded-md mb-1 
            ${
              e.route === pathName &&
              "pointer-events-none bg-green-100 border-green-200 opacity-70"
            }
          }`}
                onClick={() => {
                  setOpen(!open);
                  setLoading(true);
                  dispatch(
                    authUser({
                      Role: "",
                      Name: "",
                    })
                  );
                }}
              >
                {e.icon && e.icon}
                <p className="pl-2 pt-[2px] text-small text-center align-middle items-center">
                  <p>{e.name}</p>
                </p>
              </Link>
            ) : (
              <Link
                href={e.route}
                key={e.route}
                className={`transition flex items-center gap-2  ease-out duration-300 hover:bg-green-100 hover:border-green-200 border-2 w-full p-1 px-2 rounded-md mb-1 
              ${
                e.route === pathName &&
                "pointer-events-none bg-green-100 border-green-200 opacity-70"
              }
            }`}
                onClick={() => {
                  setOpen(!open);
                  setLoading(true);
                }}
              >
                {e.icon && e.icon}
                <p className="pl-2 pt-[2px] text-small text-center align-middle items-center">
                  <p>{e.name}</p>
                </p>
              </Link>
            )
          )}
        </div>
      )}
    </div>
  );
};
