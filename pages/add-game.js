import React from "react";

import Game from "layouts/AddGame";

export default class AddGame extends React.Component {

  async submitNewGame() {

    if (document.getElementById('game_name').value == "" || document.getElementById('game_name').value == null) {
      document.getElementById('submit_button').innerHTML = "Need Game Name";
      return;
    }

    document.getElementById('submit_button').innerHTML = "Loading...";

    let game = {
      name: document.getElementById('game_name').value,
      copyright: [document.getElementById('copyright_free').checked ? "copyright free" : null, document.getElementById('not_copyright_free').checked ? "not copyright free" : null, document.getElementById('copyright_unsure').checked ? "copyright unsure" : null],
      genre: document.getElementById('game_genre').value,
      details: document.getElementById('copyright_details').value,
      user_name: document.getElementById('user_name').value,
      user_email: document.getElementById('user_email').value,
      user_comments: document.getElementById('user_comments').value,
      user_contact: document.getElementById('user_contact').checked
    }

    const res = await fetch('/api/games/submit', {
      method: 'POST',
      body: JSON.stringify({ game }),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    const data = await res.json();

    document.getElementById('submit_button').innerHTML = "Success!";
  }

  render() {
  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-black text-mb text-center mb-6 font-bold uppercase mt-8">
                  Submit a Game
                </div>
                <form>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Game Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Please enter the full name"
                      id="game_name"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Game Genre
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="FPS, Adventure, Sports, etc"
                      id="game_genre"
                    />
                  </div>

                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                        id="copyright_free"
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-600">
                        This game is copyright free
                      </span>
                    </label>
                  </div>

                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                        id="not_copyright_free"
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-600">
                        This game is NOT copyright free
                      </span>
                    </label>
                  </div>

                  <div>
                    <label className="inline-flex items-center cursor-pointer mb-3">
                      <input
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                        id="copyright_unsure"
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-600">
                        I'm not sure but would like to know
                      </span>
                    </label>
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Details on copyrighted material
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Include source of info if possible"
                      id="copyright_details"
                    />
                  </div>

                  <div className="relative w-full mb-3 mt-10">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="First Last"
                      id="user_name"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                      id="user_email"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Anything Else
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Comments, questions..."
                      id="user_comments"
                    />
                  </div>

                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                        id="user_contact"
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-600">
                        I can be contacted if needed about this game
                      </span>
                    </label>
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-gray-200 active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                      onClick={this.submitNewGame}
                      id="submit_button"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )};
}

AddGame.layout = Game;
