import React, { useState } from "react";
import Link from 'next/link';
import { ref, child, get } from "firebase/database";
import { db } from '../firebase';

import NavbarSmall from "components/Navbars/NavbarSmall.js";
import Footer from "components/Footers/Footer.js";


export default function Search({ games }) {

  const [searchTerm, setSearchTerm] = useState('#null#');
  const [newTerm, setNewTerm] = useState('');

  if (typeof window !== "undefined" && searchTerm == '#null#') {
    let term = window.location.search;
    setSearchTerm(term.replace('?term=', '').replace('+', ' '));
  }

  return (
    <>
      <NavbarSmall transparent />
      <main className="profile-page">
        <section className="relative block" style={{height: '320px'}}>
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover bg-black" >
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
                    {/* <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                        Search
                    </h3>
                    <div className="text-md text-gray-400 leading-normal mt-0 mb-4 font-bold uppercase">
                        Find a Game
                    </div> */}
                    <form className='overflow-hidden'>
                      <div className="pt-0 float-left w-2/3 md:w-6/12" style={{marginLeft: '16.6666%'}}>
                        <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-4">
                          <i className="fas fa-search"></i>
                        </span>
                        <input type="text" placeholder="Find a game" onChange={e => setNewTerm(e.target.value)} id="game_input" className="px-3 py-2.5 my-1 placeholder-blueGray-400 text-black relative bg-white rounded-lg text-base border-2 border-blueGray-500 outline-none focus:outline-none w-full pl-10"/>
                      </div>
                      <Link href={{ pathname: '/search', query: { term: newTerm } }} >
                        <button type="submit" className="hidden md:block float-left ml-1 my-1 text-white font-bold md:w-1/6 w-0 text-center py-2.5 rounded-lg outline-none focus:outline-none mr-1 mb-1 border-2 bg-blueGray-700 border-blueGray-700 uppercase text-base shadow">
                          Search
                        </button>
                      </Link>
                    </form>
                    <div className="w-full mt-20" style={{borderRadius: '.5rem'}}>
                      {Object.keys(games).filter(game => game.toLowerCase().includes(searchTerm.toLowerCase())).map((game, i, arr) => (
                        <Link href={`/game/${game}`}>
                          <div key={i} className={`border-blueGray-500 shadow-lg bg-white hover:bg-gray-200 border-2 px-4 py-4 mb-4 cursor-pointer`}
                            style={{borderRadius: '.5rem .5rem .5rem .5rem'}} >
                            <div className="overflow-hidden">
                              <p className="font-semibold float-left capitalize">{game}</p>
                              <div className="overflow-hidden hidden md:block">
                                { games[game].copyright == 'unsure' ?
                                <p className="font-semibold float-right text-gray-400 uppercase">Under Review</p>
                                : games[game].copyright == 'copyright free' ?
                                <p className="font-semibold float-right text-sky-400 uppercase">Copyright Free</p>
                                : games[game].copyright == 'not copyright free' ?
                                <p className="font-semibold float-right text-red-500 uppercase">Not Copyright Free</p>
                                : null }
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="w-full mt-20" style={{borderRadius: '.5rem'}}>
                      {Object.keys(games).filter(game => game.toLowerCase().includes(searchTerm.toLowerCase())).length == 0 ?
                          <div className={`text-center px-4 py-4 mb-24`}
                            style={{borderRadius: '.5rem .5rem .5rem .5rem'}} >
                            <p className="font-semibold">No Games Found</p>
                          </div>
                      : null }
                    </div>
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full">
                        <h3 className="text-4xl font-semibold leading-normal text-blueGray-700 mb-2">
                            Can't Find it?
                        </h3>
                        <div className="text-md text-gray-400 leading-normal mt-0 mb-4 font-bold uppercase">
                            Add A Game
                        </div>
                        <p className="text-lg leading-relaxed text-blueGray-700">
                            If you don't see your game listed help us out by adding it. Thanks!
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

export async function getStaticProps() {
  const dbRef = ref(db);
  let snapshot = await get(child(dbRef, `games`));
  let games = null;
  if (snapshot.exists())
    games = snapshot.val();
  return { props: { games } }
}
