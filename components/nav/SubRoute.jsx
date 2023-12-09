import Link from "next/link";
import React, { useState, useEffect } from "react";

export const SubRoute = ({ Route, subRoute, setLoading, pathName }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div
        className={`border-b-2 px-2 cursor-pointer flex items-center border-transparent hover:border-green-300 transition ease-out duration-300 ${
          open &&
          "bg-green-50 border-green-200 rounded-sm hover:border-green-400"
        } ${
          Route.route === pathName &&
          "pointer-events-none border-green-300 opacity-90"
        }`}
        onClick={() => subRoute && setOpen(!open)}
      >
        <h5>
          {subRoute ? (
            Route.title
          ) : (
            <Link href={Route.route} onClick={() => setLoading(true)}>
              {Route.title}
            </Link>
          )}
        </h5>

        {subRoute &&
          (!open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          ))}
      </div>

      {open && (
        <div className=" showDiv fixed flex flex-col mt-3 p-3 bg-white border-2 rounded-md border-slate-200">
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
