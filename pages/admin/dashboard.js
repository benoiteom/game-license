import React, { useEffect, useState } from "react";
import { useSession, getSession, signIn } from 'next-auth/client';
import { ref as ref_db, child, get } from "firebase/database";
import { ref as ref_st, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../firebase';

import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";

export default function Dashboard({ games }) {
  const [session] = useSession();
  const [verifyStatus, setVerifyStatus] = useState('DONE');
  const [tableStatus, setTableStatus] = useState('DONE');
  const [image, setImage] = useState(null);

  if (!session) {
    signIn();
    return <p></p>
  } else {
    return (
      <>
        <Sidebar />
        <div className="relative md:ml-64 bg-blueGray-100">
          <h2 className="absolute left-0 px-12 top-50-px text-gray-100 uppercase font-semibold z-2"><span className="text-gray-400">Welcome</span> {session.user.name}</h2>
          <HeaderStats />
          <div className="px-4 md:px-10 mx-auto w-full -m-24">
            <div className="flex flex-wrap mt-4">
              <div className="w-full mb-12 xl:mb-0 px-4">
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
                        <input type="text" placeholder="Name" id="name" className="py-2.5 placeholder-blueGray-400 text-black relative bg-white rounded-lg text-base border-2 border-blueGray-500 outline-none focus:outline-none w-full"/>
                    </div>
                    <div className="pt-0 mb-4 float-left w-1/3 mr-1/6">
                        <input type="text" placeholder="Genre" id="genre" className="py-2.5 placeholder-blueGray-400 text-black relative bg-white rounded-lg text-base border-2 border-blueGray-500 outline-none focus:outline-none w-full"/>
                    </div>
                    <div className="pt-0 mb-4 float-left w-1/3 mr-1/6">
                        <input type="text" placeholder="Copyright" id="copyright" className="py-2.5 placeholder-blueGray-400 text-black relative bg-white rounded-lg text-base border-2 border-blueGray-500 outline-none focus:outline-none w-full"/>
                    </div>
                    <div className="pt-0 mb-3 float-right w-1/3 mr-1/6" style={{marginRight: '17.1616%'}}>
                        <textarea placeholder="Details" id="details" className="py-2.5 h-36 placeholder-blueGray-400 text-black relative bg-white rounded-lg text-base border-2 border-blueGray-500 outline-none focus:outline-none w-full"/>
                    </div>
                    <div className="pt-0 mb-4 float-left w-1/3 mr-1/6">
                        <input type="text" placeholder="Color" id="color" className="py-2.5 placeholder-blueGray-400 text-black relative bg-white rounded-lg text-base border-2 border-blueGray-500 outline-none focus:outline-none w-full"/>
                    </div>
                    <div className="pt-0 mb-4 float-left w-1/3 mr-1/6">
                        <p className="text-gray-100 w-full" style={{color: 'white'}}><b>Logo Image:</b> <input className="w-full" type="file" id="image" name="left" accept="image/*" onChange={(e) => setImage(e.target.files[0])} /></p>
                    </div>
                    <div className="pt-0 mb-4 float-left w-1/3 mr-1/6">
                        <input type="text" placeholder="Developer" id="developer" className="py-2.5 placeholder-blueGray-400 text-black relative bg-white rounded-lg text-base border-2 border-blueGray-500 outline-none focus:outline-none w-full"/>
                    </div>
                    <div className="pt-0 mb-4 float-left w-1/3 mr-1/6">
                        <button
                          className="py-2.5 text-white font-semibold relative bg-blueGray-500 rounded-lg text-base border-2 border-blueGray-500 outline-none focus:outline-none w-full uppercase"
                          onClick={async () => {
                            setVerifyStatus('WORKING')

                            const storageRef = ref_st(storage, document.getElementById('name').value);
                            uploadBytes(storageRef, image).then(async (snapshot) => {
                              console.log('Uploaded a blob ' + document.getElementById('name').value);
                              getDownloadURL(storageRef).then(async (firebase_url) => {

                              let verify_game = {
                                name: document.getElementById('name').value,
                                copyright: document.getElementById('copyright').value,
                                genre: document.getElementById('genre').value,
                                details: document.getElementById('details').value,
                                image: firebase_url,
                                color: document.getElementById('color').value,
                                developer: document.getElementById('developer').value,
                              }
                              const res = await fetch('/api/admin/verify', {
                                method: 'POST',
                                body: JSON.stringify({ verify_game }),
                                headers: {
                                  'Content-Type': 'application/json'
                                },
                              })
                              const data = await res.json();
                              setVerifyStatus('DONE')
                              document.getElementById('name').value = ''
                              document.getElementById('copyright').value = ''
                              document.getElementById('genre').value = ''
                              document.getElementById('details').value = ''
                              document.getElementById('image').value = ''
                              document.getElementById('color').value = ''
                              document.getElementById('developer').value = ''
                            });
                          })
                          }}
                        >{verifyStatus}</button>
                    </div>
                    
                </div>
              </div>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full mb-12 xl:mb-0 px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                  <div className="flex flex-wrap items-center">
                    <div className="relative w-full px-4 py-2 max-w-full flex-grow flex-1">
                      <h3 className="font-semibold float-left text-base text-blueGray-700">
                        Unverified Games
                      </h3>
                      <p className="font-semibold float-right text-base text-blueGray-700">
                        Status: {tableStatus}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="block w-full overflow-x-auto">
                  <table className="items-center w-full bg-transparent border-collapse">
                    <thead>
                      <tr>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Name
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Genre
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Copyright
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      { Object.keys(games).map((game, i, arr) => (
                        <tr key={i}>
                          <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-left">
                            {game.split('--')[0]}
                          </th>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                            {games[game].genre}
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                            {games[game].copyright[2] != null ? 'unsure' : games[game].copyright[1] != null ? ' not copyright free' : games[game].copyright[0] != null ? ' copyright free' : null}
                          </td>
                          <td className="border-t-0 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                            <button
                              className="bg-sky-400 rounded px-4 py-1 text-white font-semibold"
                              onClick={() => {
                                document.getElementById('name').value = game.split('--')[0];
                                document.getElementById('genre').value = games[game].genre;
                                document.getElementById('copyright').value = games[game].copyright[2] != null ? 'unsure' : games[game].copyright[1] != null ? ' not copyright free' : games[game].copyright[0] != null ? ' copyright free' : null;
                                document.getElementById('details').value = games[game].details;
                              }}
                            >Verify</button>
                            <button
                              className="bg-red-400 rounded px-4 py-1 ml-2 text-white font-semibold"
                              onClick={async () => {
                                setTableStatus('WORKING')
                                let deleted_game = {
                                  name: game,
                                  genre: games[game].genre,
                                  type: 'unverified'
                                }
                                const res = await fetch('/api/admin/delete', {
                                  method: 'POST',
                                  body: JSON.stringify({ deleted_game }),
                                  headers: {
                                    'Content-Type': 'application/json'
                                  },
                                })
                                const data = await res.json();
                                delete games[game];
                                setTableStatus('DONE')
                              }}
                            >Delete</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const dbRef = ref_db(db);
  let snapshot = await get(child(dbRef, `unverified`));
  let games = null;
  if (snapshot.exists())
    games = snapshot.val();
  return { props: { session, data: session ? true : false, games } }
}
