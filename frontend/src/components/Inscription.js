import React, { useState } from "react";
import axios from "axios";
export default function Inscription() {
  const [name, setname] = useState("");
  const [mail, setmail] = useState("");
  const [work, setwork] = useState("");
  const [password, setpassword] = useState("");
  const [genre, setgenre] = useState("");
  const [date, setdate] = useState("");
  const validate = () => {
    axios("localhost:5000/inscription", {
      method: "POST",
      data: {
        user_name: name,
        user_mail: mail,
        user_work: work,
        user_password: password,
        user_genre: genre,
        user_date: date,
      },
      "content-type": "text/json",
    })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <div className="relative py-16">
      <div className="container relative m-auto px-6 text-gray-500 md:px-12 xl:px-40">
        <div className="m-auto space-y-8 md:w-8/12 lg:w-6/12 xl:w-6/12">
          <label htmlFor="nom" className="text-gray-600 dark:text-gray-300">
            Nom
          </label>
          <input
            onChange={(e) => setname(e.target.value)}
            type="text"
            name="nom"
            id="nom"
            className="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
          />

          <label htmlFor="mail" className="text-gray-600 dark:text-gray-300">
            Email
          </label>
          <input
            onChange={(e) => setmail(e.target.value)}
            type="email"
            name="mail"
            id="mail"
            className="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
          />

          <label htmlFor="work" className="text-gray-600 dark:text-gray-300">
            profession
          </label>
          <input
            onChange={(e) => setwork(e.target.value)}
            type="text"
            name="work"
            id="work"
            className="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
          />

          <label htmlFor="mdp" className="text-gray-600 dark:text-gray-300">
            mot de passe
          </label>
          <input
            onChange={(e) => setpassword(e.target.value)}
            type="password"
            name="mdp"
            id="mdp"
            className="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
          />

          <label htmlFor="genre">Genre</label>
          <select
            name="genre"
            id="genre"
            onChange={(e) => setgenre(e.target.value)}
          >
            <option value="no-value">--Non definie--</option>
            <option value="homme">Homme</option>
            <option value="femme">Femme</option>
          </select>

          <label htmlFor="date" className="text-gray-600 dark:text-gray-300">
            Date de naissance
          </label>
          <input
            onChange={(e) => setdate(e.target.value)}
            type="date"
            name="date"
            id="date"
            className="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
          />
          <button
            onClick={() => validate}
            className="rounded relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full bg-slate-700 before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
          >
            Enregistrer
          </button>
        </div>
      </div>
    </div>
  );
}
