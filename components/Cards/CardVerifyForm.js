import React from "react";

export default function CardLineChart() {

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-blueGray-100 mb-1 text-xs font-semibold">
                Fill Form
              </h6>
              <h2 className="text-white text-xl font-semibold">Verify Game</h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
            <div className="pt-0 mb-4 float-left w-1/3 mr-1/6">
                <input type="text" placeholder="Name" id="game_input" className="py-2.5 placeholder-blueGray-400 text-black relative bg-white rounded-lg text-base border-2 border-blueGray-500 outline-none focus:outline-none w-full"/>
            </div>
            <div className="pt-0 mb-4 float-left w-1/3 mr-1/6">
                <input type="text" placeholder="Genre" id="game_input" className="py-2.5 placeholder-blueGray-400 text-black relative bg-white rounded-lg text-base border-2 border-blueGray-500 outline-none focus:outline-none w-full"/>
            </div>
            <div className="pt-0 mb-4 float-left w-1/3 mr-1/6">
                <input type="text" placeholder="Copyright" id="game_input" className="py-2.5 placeholder-blueGray-400 text-black relative bg-white rounded-lg text-base border-2 border-blueGray-500 outline-none focus:outline-none w-full"/>
            </div>
            <div className="pt-0 mb-4 float-left w-1/3 mr-1/6">
                <input type="text" placeholder="Details" id="game_input" className="py-2.5 placeholder-blueGray-400 text-black relative bg-white rounded-lg text-base border-2 border-blueGray-500 outline-none focus:outline-none w-full"/>
            </div>
            <div className="pt-0 mb-4 float-left w-1/3 mr-1/6">
                <input type="text" placeholder="Image" id="game_input" className="py-2.5 placeholder-blueGray-400 text-black relative bg-white rounded-lg text-base border-2 border-blueGray-500 outline-none focus:outline-none w-full"/>
            </div>
            <div className="pt-0 mb-4 float-left w-1/3 mr-1/6">
                <input type="text" placeholder="Color" id="game_input" className="py-2.5 placeholder-blueGray-400 text-black relative bg-white rounded-lg text-base border-2 border-blueGray-500 outline-none focus:outline-none w-full"/>
            </div>
            <div className="pt-0 mb-4 float-left w-1/3 mr-1/6">
                <input type="text" placeholder="Developer" id="game_input" className="py-2.5 placeholder-blueGray-400 text-black relative bg-white rounded-lg text-base border-2 border-blueGray-500 outline-none focus:outline-none w-full"/>
            </div>
            <div className="pt-0 mb-4 float-left w-1/3 mr-1/6">
                <button className="py-2.5 text-white font-semibold relative bg-blueGray-500 rounded-lg text-base border-2 border-blueGray-500 outline-none focus:outline-none w-full uppercase">Submit</button>
            </div>
            
        </div>
      </div>
    </>
  );
}
