import React from "react";

// reactstrap components
// import { Spinner } from "reactstrap";

// core components

export default function PageChange(props) {
  return (
    <div>
      {/* <div
        className="bg-cover fixed z-40 w-full h-full top-0 left-0"
        style={{
          backgroundImage: "url('/img/img-1-1000x600.jpg')",
        }}
      ></div> */}
      <div className="top-0 left-0 w-full h-full block z-50 fixed bg-black bg-opacity-50"></div>
      <div className="mx-auto max-w-sm text-center fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="block mb-4">
          <i className="fas fa-circle-notch animate-spin text-white mx-auto text-6xl"></i>
        </div>
        <h4 className="text-lg font-medium text-white">
          Loading...
        </h4>
      </div>
    </div>
  );
}
