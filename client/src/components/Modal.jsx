import React from "react";
import Button from "./Button";

export default function Modal({ children, handleModelClose }) {
  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 bg-stone-500/50 flex items-center justify-center z-40">
      <div className="bg-amber-50 p-5 rounded-2xl z-50 relative">
        <Button className={'text-sm absolute right-5 top-5'}onClick={handleModelClose}>Close</Button>
        {children}
        </div>
    </div>
  );
}
