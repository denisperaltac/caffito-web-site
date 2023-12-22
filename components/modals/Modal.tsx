import React, { Children } from "react";
import { RxCross1 } from "react-icons/rx";
import Btn from "../btn/Btn";

export default function Modal({
  open,
  setOpen,
  title,
  onSubmit,
  children,
}: any) {
  return (
    <>
      {open ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none showDiv">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl ">{title}</h3>
                  <button className="text-3xl" onClick={() => setOpen(false)}>
                    <RxCross1 className="iconHover" />
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">{children}</div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <Btn
                    text="Close"
                    type="close"
                    action={() => setOpen(false)}
                  />

                  {onSubmit && (
                    <Btn
                      text="Save"
                      type="save"
                      action={() => {
                        onSubmit && onSubmit();
                        setOpen(false);
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
