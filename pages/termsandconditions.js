import React from "react";

import NavbarSmall from "components/Navbars/NavbarSmall.js";
import Footer from "components/Footers/Footer.js";


export default function About() {
  return (
    <>
      <NavbarSmall transparent />
      <main className="profile-page">
        <section className="relative block" style={{height: '400px'}}>
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover bg-black"          >
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-12">
                <div className="mt-12">
                    <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                        Terms and Conditions
                    </h3>
                    <div className="text-md text-gray-400 leading-normal mt-0 mb-4 font-bold uppercase">
                        Don't Sue Us Please
                    </div>
                    <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        Game License is a community supported resource and is not to be treated as law. The information we provide is 
                        verified to the best of our extent, but we cannot guarantee that it is entirely true. If you should receive a 
                        copyright strike after seeing that a game is copyright free on our site, you may not take any action against us, 
                        and we instead ask that you mark the game as having incorrect information so we can fix the error as soon as 
                        possible.
                    </p>
                </div>
                <div className="mt-10 mb-20 pt-10 border-t border-blueGray-200">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full">
                        <h3 className="text-4xl font-semibold leading-normal text-blueGray-700 mb-2">
                            Privacy Policy
                        </h3>
                        <div className="text-md text-gray-400 leading-normal mt-0 mb-4 font-bold uppercase">
                            Your Info is Safe
                        </div>
                        <p className="text-lg leading-relaxed text-blueGray-700">
                            We ask that you (optionally) provide your name and email when submitting a game so we can contact you if 
                            we need more information or are having trouble finding the game. Once the game has been verified, your information 
                            is deleted from our servers. We will not use your information for any purpose other than what is stated above.
                        </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
