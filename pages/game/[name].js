import React, { useState } from "react";

import NavbarSmall from "components/Navbars/NavbarSmall.js";
import Footer from "components/Footers/Footer.js";

function Game({ game }) {
  let [modal, setModal] = useState('hidden');
  let [submitError, setSubmitError] = useState('SUBMIT');
  let [mistakeButton, setMistakeButton] = useState('REPORT A MISTAKE');

  return (
    <>
      <NavbarSmall transparent />
      <main className="profile-page">
        <section className="relative block" style={{height: '400px'}}>
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{backgroundColor: game.color}}
          >
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
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        src={game.image}
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute" style={{maxWidth: '200px', marginLeft: '-100px', marginTop: '-100px'}}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      <button
                        className="bg-red-700 active:bg-blueGray-600 uppercase text-white font-bold hover:shadow-md shadow text-sm px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => {setModal('block')}}
                      >
                        {mistakeButton}
                      </button>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          {game.developer}
                        </span>
                        <span className="text-sm text-blueGray-400">
                          {game.genre}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12 mb-20">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                    {game.name}
                  </h3>
                  <div className="text-lg leading-normal mt-0 mb-2 font-bold uppercase" style={{color: game.color}}>
                    {game.copyright}
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        {game.details}
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

      <div class={`${modal} min-w-screen min-h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-10 outline-none focus:outline-none bg-transparent`} id="modal-id">
        <div class="absolute bg-black min-w-screen min-h-screen opacity-50 inset-0 z-0"></div>
          <div class="min-w-140-px w-1/3 opacity-100 max-w-lg rounded-lg p-5 relative mx-auto my-auto shadow-lg bg-white">
            <div class="">
              <div class="text-center p-3 flex-auto justify-center">
                {/* <i className="fas fa-question mr-2 text-lg text-blueGray-400"></i> */}
                <h2 class="text-xl font-bold py-4 ">Something look wrong?</h2>
                <textarea id="error_message" className="border p-4 bg-gray-100" style={{ boxSizing: 'border-box', width: '90%', height: '150px' }} placeholder="Thanks for letting us know" />
            </div>
            <div class="p-3  mt-2 text-center space-x-4 md:block">
                <button class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-md hover:bg-gray-100" onClick={() => {setModal('hidden')}}>CANCEL</button>
                <button
                  class="mb-2 md:mb-0 bg-red-700 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-md hover:bg-red-600"
                  onClick={async () => {
                    setSubmitError('WORKING')
                    let error = {
                      game: game.name,
                      message: document.getElementById('error_message').value
                    }
                    const res = await fetch('/api/games/error', {
                      method: 'POST',
                      body: JSON.stringify({ error }),
                      headers: {
                        'Content-Type': 'application/json'
                      },
                    })
                    const data = await res.json();
                    setModal('hidden');
                    setSubmitError('SUBMIT');
                    setMistakeButton('Thank You!');
                  }}
                >{submitError}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps(context) {
    const res = await fetch('http://localhost:3000/api/games/' + context.params.name);
    const game = await res.json();

    return { props: { game: game } }
}

export async function getStaticPaths() {
    const res = await fetch('http://localhost:3000/api/games')
    const games = await res.json();
    let paths = [];
    for (let game of games) {
        paths.push({ params: { name: game.name }});
    }
  
    return { paths: paths, fallback: false }
}

export default Game;
