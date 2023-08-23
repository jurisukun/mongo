"use client";
import React from "react";
import { Poppins, Roboto } from "next/font/google";
import axios from "axios";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin-ext"],
  weight: "700",
});

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const login = async (e) => {
  axios
    .get("http://localhost:3001/auth/login", {
      params: {
        username: e.username.value,
        password: e.password.value,
      },
    })
    .then((res) => {
      //redirect to home page
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
      alert(err.response.data.message);
    });
};

export default function Login() {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center rounded-lg bg-slate-50 ">
      <div className="h-[50%] w-[80%] min-w-[300px] max-w-[600px] shadow-xl justify-center items-center flex flex-col rounded-lg ">
        <div className="flex justify-center">
          <h1 className={`${poppins.className} text-2xl tracking-wide`}>
            Login
          </h1>
        </div>
        <div className="w-[80%] h-[60%] flex justify-center items-center border-2 rounded-md my-3">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              login(e.target);
            }}
            className="flex flex-col w-full md:gap-2"
          >
            <div className="md:flex-row flex-col flex w-full justify-center items-center md:gap-4 p-4">
              <label
                className={`${roboto.className} md:w-[100px] text-end tracking-wide text-lg`}
              >
                Username
              </label>
              <input
                className="w-[80%] min-w-[200px] border-slate-200 border-2 rounded-md p-1"
                type="text"
                id="username"
                placeholder="Username"
                required
              />
            </div>
            <div className="md:flex-row flex-col flex w-full justify-center items-center md:gap-4 p-4">
              <label
                className={`${roboto.className} md:w-[100px] text-end tracking-wide text-lg`}
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className=" w-[80%] min-w-[200px] border-slate-200 border-2 rounded-md p-1"
                required
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="border-2 bg-emerald-400 min-w-[100px] rounded-md p-1 text-white font-semibold tracking-wide text-lg"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
        <div>
          <h1>Register</h1>
        </div>
      </div>
    </div>
  );
}
