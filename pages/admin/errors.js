import React, { useEffect, useState } from "react";
import { useSession, getSession, signIn } from 'next-auth/client';

import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";


export default function Dashboard({ data, errors }) {
  const [session] = useSession();
  const [verifyStatus, setVerifyStatus] = useState('DONE');
  const [tableStatus, setTableStatus] = useState('DONE');


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
            {/* <div className="flex flex-wrap mt-4">
              <div className="w-full mb-12 xl:mb-0 px-4">
              </div>
            </div> */}
            <div className="flex flex-wrap">
              <div className="w-full mb-12 xl:mb-0 px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                  <div className="flex flex-wrap items-center">
                    <div className="relative w-full px-4 py-2 max-w-full flex-grow flex-1">
                      <h3 className="font-semibold float-left text-base text-blueGray-700">
                        Errors
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
                          Game
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Message
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      { Object.keys(errors).map((error, i, arr) => (
                        <tr key={i}>
                          <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-left">
                            {error}
                          </th>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                            {errors[error]}
                          </td>
                          <td className="border-t-0 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                            <button
                              className="bg-sky-400 rounded px-4 py-1 ml-2 text-white font-semibold"
                              onClick={async () => {
                                setTableStatus('WORKING')
                                let deleted_error = {
                                  game: error,
                                  message: errors[error],
                                }
                                const res = await fetch('/api/admin/resolve-error', {
                                  method: 'POST',
                                  body: JSON.stringify({ deleted_error }),
                                  headers: {
                                    'Content-Type': 'application/json'
                                  },
                                })
                                const data = await res.json();
                                delete errors[error];
                                setTableStatus('DONE')
                              }}
                            >Resolve</button>
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

// Dashboard.layout = Admin;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const res = await fetch('http://localhost:3000/api/admin/errors');
  const errors = await res.json();
  return {
    props: {
      session,
      data: session ? true : false,
      errors
    }
  }
}
