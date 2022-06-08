import Head from "next/head";
import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGoogle,
  FaRegEnvelope,
  FaLock,
} from "react-icons/fa";

function index() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
        <Head>
          <title>Login Page</title>
        </Head>

        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <div className="bg-white rounded-2xl shadow-2xl flex flex-row w-2/3 max-w-4xl">
            {/* Sign in section */}
            <div className="w-3/5 p-5">
              <div className="text-left font-bold">
                <span className="text-blue-500">NAME</span>
              </div>
              <div className="py-10">
                <h2 className="text-3xl font-bold text-blue-500">
                  Sign In To Account
                </h2>
                <div className="border-2 w-10 border-blue-500 inline-block mb-2"></div>
                <div className="flex justify-center my-2">
                  <a
                    href="#"
                    className="border-2 border-gray-200 rounded-full p-3 mx-1"
                  >
                    <FaFacebookF className="text-sm" />
                  </a>
                  <a
                    href="#"
                    className="border-2 border-gray-200 rounded-full p-3 mx-1"
                  >
                    <FaLinkedinIn className="text-sm" />
                  </a>
                  <a
                    href="#"
                    className="border-2 border-gray-200 rounded-full p-3 mx-1"
                  >
                    <FaGoogle className="text-sm" />
                  </a>
                </div>
                {/* Sosmed login section */}
                <p className="text-gray-400 my-3">or use your email account</p>
                <div className="flex flex-col items-center">
                  <div className="bg-gray-100 w-64 p-2 flex mb-3 ">
                    <FaRegEnvelope className="text-gray-400 m-2" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="bg-gray-100 outline-none text-sm flex-1"
                    />
                  </div>

                  <div className="bg-gray-100 w-64 p-2 flex mb-3">
                    <FaLock className="text-gray-400 m-2" />
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="bg-gray-100 outline-none text-sm flex-1"
                    />
                  </div>
                  <div className="flex justify-between w-64 mb-5">
                    <label className="flex items-center text-xs">
                      <input type="checkbox" name="remember" className="mr-1" />
                      Remember Me
                    </label>
                    <a href="#" className="text-xs">
                      Forgot Password
                    </a>
                  </div>
                  <a
                    href="#"
                    className="border-2 border-blue-500 text-blue-500  rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-500 hover:text-white"
                  >
                    Sign In
                  </a>
                </div>
              </div>
            </div>
            {/* Sign Up section */}
            <div className="w-2/5 bg-blue-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
              <h2 className="text-3xl font-bold mb-2">Hello, Sobat LRS</h2>
              <div className="border-2 w-10 border-white inline-block mb-2"></div>
              <p className="mb-2">
                Selamat Datang Di Aplikasi Database Karyawan
              </p>
              <a
                href="#"
                className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-blue-500"
              >
                Sign Up
              </a>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default index;
