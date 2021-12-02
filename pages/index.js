/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";


function Index({ games }) {

  const [searchTerm, setSearchTerm] = useState('');
  
  return (
    <>
      <IndexNavbar fixed />
      <div className="bottom-auto right-0 w-full absolute" style={{transform: 'scaleY(-1)', top: 'calc(32px + 42px - 1px + 30px)' }} >
        <svg
          className="absolute top-0 overflow-hidden "
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          height='40px'
          width='100%'
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon className="text-red-500 fill-current" points="2560 0 2560 100 0 100" ></polygon>
        </svg>
      </div>
      <section className="header relative pt-16 items-center flex my-36">
        <div className="container mx-auto items-left flex flex-wrap">
          <div className="w-full md:w-12/12 lg:w-10/12 xl:w-10/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-5xl text-black">
                Keep your streams free of DMCA strikes
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-500 md:w-10/12 lg:w-8/12 xl:w-8/12">
                A community led resource to determine whether in-game music is copyright free, and help you understand what you can and can't do
              </p>
            </div>
          </div>
          <div className="my-20 w-full">
            <form>
              <div className="pt-0 float-left w-1/2 ml-1/6" style={{marginLeft: '16.6666%', width: '50%'}}>
                <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                  <i className="fas fa-search"></i>
                </span>
                <input type="text" placeholder="Find a game" onChange={e => setSearchTerm(e.target.value)} id="game_input" className="px-3 py-2.5 placeholder-blueGray-400 text-black relative bg-white rounded-lg text-base border-2 border-blueGray-500 outline-none focus:outline-none w-full pl-10"/>
              </div>
              <Link href={{ pathname: '/search', query: { term: searchTerm } }} >
                <button type="submit" className="float-left ml-1 text-white font-bold w-1/6 text-center py-2.5 rounded-lg outline-none focus:outline-none mr-1 mb-1 border-2 bg-blueGray-700 border-blueGray-700 uppercase text-base shadow hover:shadow-lg">
                  Search
                </button>
              </Link>
            </form>
            <div className="relative">
              {searchTerm ?
                <div className="absolute ml-1/6 w-1/2 shadow-lg" style={{top: '55px', left:'16.6666%', zIndex: '11', borderRadius: '.5rem'}}>
                  {games.filter(game => game.name.toLowerCase().includes(searchTerm.toLowerCase())).map((game, i, arr) => (
                    <div>
                      {i < 4 ?
                        <Link href={`/game/${game.name}`}>
                          <div key={i} className={`border-blueGray-500 bg-white hover:bg-gray-200 ${i != arr.length - 1 && i != 3 ? "border-b-0" : null} border-2 px-4 py-3 relative cursor-pointer`}
                            style={i == 0 && i == arr.length - 1 ? {borderRadius: '.5rem .5rem .5rem .5rem'} : (i == 0 ? {borderRadius: '.5rem .5rem 0px 0px'} : (i == arr.length - 1 || i == 3 ? {borderRadius: '0px 0px .5rem .5rem'} : {borderRadius: '0px'}))} >
                            <p className="relative">{game.name}</p>
                          </div>
                        </Link>
                      : null }
                    </div>
                  ))}
                </div>
              : null }
            </div>
          </div>
          {/* <div className="pattern-checks-lg text-black" style={{width: '400px', height: '200px', position: 'absolute', zIndex: '-1', left: '0', bottom: '-220px'}} /> */}
          {/* <div className="pattern-checks-lg text-black" style={{width: '300px', height: '250px', position: 'absolute', zIndex: '-1', right: '0', top: '-200px'}} /> */}
          
        </div>
      </section>

      <section className="mt-48 md:mt-40 pb-40 relative bg-black">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20 z-10"
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
              className="text-black fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20 z-0"
          style={{ transform: "scaleX(-1)", }}
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
              className="text-sky-400 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-32">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-sitemap text-xl"></i>
              </div>
              <h3 className="text-3xl text-gray-100 mb-2 font-semibold leading-normal">
                How it Works
              </h3>
              <p className="text-lg font-light text-gray-200 leading-relaxed mt-4 mb-4">
                We work alongside the streaming community to find and maintian a list of games with copyright information for all to use. 
                Eventually, we hope to provide a way to license this music for your stream in a cheaper and simpler way.
              </p>
              <Link href="/about">
                <a className="font-bold text-gray-400 hover:text-gray-600 ease-linear transition-all duration-150">
                  Learn more{" "}
                  <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
                </a>
              </Link>
            </div>

            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-48">
              <div className="relative flex flex-col min-w-0 w-full mb-6 md:mt-0">
                <img
                  alt="..."
                  src="/img/HiW_2.png"
                  className="w-full align-middle rounded absolute shadow-lg max-w-100-px left-145-px -top-29-px z-3"
                />
                <img
                  alt="..."
                  src="/img/HiW_3.png"
                  className="w-full align-middle rounded-lg absolute shadow-lg max-w-210-px left-260-px -top-160-px"
                />
                <img
                  alt="..."
                  src="/img/HiW_1.png"
                  className="w-full align-middle rounded-lg absolute shadow-lg max-w-180-px left-40-px -top-225-px z-2"
                />
                <img
                  alt="..."
                  src="/img/HiW_5.png"
                  className="w-full align-middle rounded-lg absolute shadow-2xl max-w-200-px -left-50-px top-25-px"
                />
                <img
                  alt="..."
                  src="/img/HiW_4.png"
                  className="w-full align-middle rounded absolute shadow-xl max-w-120-px left-195-px top-95-px"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center pt-40 mb-24">
            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
              <div className="justify-center flex flex-wrap relative">
                <div className="my-4 w-full lg:w-6/12 px-4">
                  <Link href="/game/Valorant">
                    <div className="shadow-lg rounded-lg text-center p-8 cursor-pointer" style={{backgroundColor: '#FF4655'}}>
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-1 bg-white"
                        src="/img/Logo_Valorant.png"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Valorant
                      </p>
                    </div>
                  </Link>
                  <Link href="/game/Halo Infinite">
                    <div className="shadow-lg rounded-lg text-center p-8 mt-8 cursor-pointer" style={{backgroundColor: '#6AA4DC'}}>
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-1 bg-white"
                        src="/img/Logo_Halo.png"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Halo Infinite
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                  <Link href="/game/Battlefield 2042">
                    <div className="bhadow-lg rounded-lg text-center p-8 cursor-pointer" style={{backgroundColor: '#016A73'}}>
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-0 bg-white"
                        src="/img/Logo_Battlefield.png"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Battlefield 2042
                      </p>
                    </div>
                  </Link>
                  <Link href="game/Back 4 Blood">
                    <div className="shadow-lg rounded-lg text-center p-8 mt-8 cursor-pointer" style={{backgroundColor: '#FF0000'}}>
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="/img/Logo_b4b.png"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Back 4 Blood
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48 mb-12">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-gamepad text-xl"></i>
              </div>
              <h3 className="text-3xl text-gray-100 mb-2 font-semibold leading-normal">
                Popular Games
              </h3>
              <p className="text-lg text-gray-200 font-light leading-relaxed mt-4 mb-4">
                Browse some of our most requested games, search by genre and keyword, or if you can't find it add the game yourself!
              </p>
              <div className="block pb-6">
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Action
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Sports
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Adventure
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Battle Royale
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Role-Playing
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Racing
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Fighting
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  FPS
                </span>
              </div>
              <Link href="/search?term=">
                <a className="font-bold text-gray-400 hover:text-blueGray-600 ease-linear transition-all duration-150">
                  See more{" "}
                  <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>

        {/* <div className="container mx-auto px-4 pb-32 pt-48">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-file-alt text-xl"></i>
                </div>
                <h3 className="text-3xl font-semibold">
                  Complex Documentation
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  This extension comes a lot of fully coded examples that help
                  you get started faster. You can adjust the colors and also the
                  programming language. You can change the text and images and
                  you're good to go.
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fas fa-fingerprint"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Built by Developers for Developers
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fab fa-html5"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Carefully crafted code for Components
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="far fa-paper-plane"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Dynamic Javascript Components
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src="/img/documentation.png"
              />
            </div>
          </div>
        </div>

        <div className="justify-center text-center flex flex-wrap mt-24">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl">Beautiful Example Pages</h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
              Notus NextJS is a completly new product built using our past
              experience in web templates. Take the examples we made for you and
              start playing with them.
            </p>
          </div>
        </div> */}
      </section>

      {/* <section className="block relative z-1 bg-blueGray-600">
        <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4  -mt-24">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Login Page
                  </h5>
                  <Link href="/auth/login">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/login.jpg"
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Profile Page
                  </h5>
                  <Link href="/profile">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/profile.jpg"
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Landing Page
                  </h5>
                  <Link href="/landing">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/landing.jpg"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="py-20 bg-blueGray-600 overflow-hidden">
        <div className="container mx-auto pb-64">
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-code-branch text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal text-white">
                Open Source
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-400">
                Since{" "}
                <a
                  href="https://tailwindcss.com/?ref=creative"
                  className="text-blueGray-300"
                  target="_blank"
                >
                  Tailwind CSS
                </a>{" "}
                is an open source project we wanted to continue this movement
                too. You can give this version a try to feel the design and also
                test the quality of the code!
              </p>
              <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-400">
                Get it free on Github and please help us spread the news with a
                Star!
              </p>
              <a
                href="https://github.com/creativetimofficial/notus-nextjs?ref=nnjs-index"
                target="_blank"
                className="github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
              >
                Github Star
              </a>
            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative">
              <i className="fab fa-github text-blueGray-700 absolute text-55 -top-150-px -right-100 left-auto opacity-80"></i>
            </div>
          </div>
        </div>
      </section> */}

      <section className="pb-16 bg-blueGray-200 relative pt-32">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
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

        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
              <p className="text-4xl text-center">
                <span role="img" aria-label="love">❤️</span>
              </p>
              <h3 className="font-semibold text-3xl">
                Want to support us?
              </h3>
              <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
                All funds received will go towards running and improving the Game License platform for the community. If you would prefer to donate your time please consider adding a few games. All support is greatly appreciated!
              </p>
              <div className="sm:block flex flex-col mt-10">
                <Link href='/add-game'>
                  <a className="sm:ml-1 cursor-pointer uppercase font-bold text-black font-semibold px-12 py-4 rounded outline-none focus:outline-none mr-1 mb-1 border-2 border-blueGray-700 text-blueGray-700 text-md shadow">
                    <span>Add A Game</span>
                  </a>
                </Link>
                <Link href='/about'>
                  <a className="sm:ml-1 cursor-pointer uppercase font-bold text-white font-semibold px-12 py-4 rounded outline-none focus:outline-none mr-1 mb-1 border-2 border-blueGray-700 bg-blueGray-700 text-md shadow">
                    <span>Donate</span>
                  </a>
                </Link>
              </div>
              <div className="text-center mt-16"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )};
// }

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/games')
  const games = await res.json()
  return {
    props: {
      games,
    },
  }
}

export default Index;
