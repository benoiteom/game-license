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
                        About Us
                    </h3>
                    <div className="text-md text-gray-400 leading-normal mt-0 mb-4 font-bold uppercase">
                        Our Fundamentals
                    </div>
                    <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        Here at Open License, our mission is to solve the problem of licensed music. The current system is outdated, 
                        and creates a lose-lose scenario for both streamers and music producers alike. The streamers are not allowed to 
                        play music and the artists are not paid for their work. By creating this database of games known to have copyrighted 
                        music, we are first supporting streamers and helping prevent copyright strikes. Eventually, we hope to find a way to 
                        benefit composers and artists as well, and creating a collaborative, win-win enviroment for all. We hope you'll join 
                        us in our journey!
                    </p>
                </div>
                <div className="mt-10 pt-10 border-t border-blueGray-200">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full">
                        <h3 className="text-4xl font-semibold leading-normal text-blueGray-700 mb-2">
                            Contact Us
                        </h3>
                        <div className="text-md text-gray-400 leading-normal mt-0 mb-4 font-bold uppercase">
                            Get In Touch
                        </div>
                        <p className="text-lg leading-relaxed text-blueGray-700">
                            Any questions, comments, or concers? We'd love to hear from you! Feel free to reach out to us at gamelicense@gmail.com 
                            or send us a message through one of our social media platforms.
                        </p>
                    </div>
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full">
                        <h3 className="text-4xl font-semibold leading-normal text-blueGray-700 mb-2">
                            Donate
                        </h3>
                        <div className="text-md text-gray-400 leading-normal mt-0 mb-4 font-bold uppercase">
                            Support our cause
                        </div>
                        <p className="text-lg leading-relaxed text-blueGray-700">
                            We currently support donations through PayPal at <u>gamelicense@gmail.com</u> and will be adding more options soon. Thank you so much!
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
