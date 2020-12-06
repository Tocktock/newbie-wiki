import React, { useState } from "react";

const SignUpForm: React.FC = (props) => {
  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg ">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="park@example.com"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="**********"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password Check
          </label>
          <input
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="**********"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign In
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
        <div className="w-full flex flex-col items-center">
          <button className="w-full mt-4 block text-center bg-yellow-400">
            KaKao login
          </button>
          <button className="w-full mt-4 block text-center bg-blue-200">
            Google login
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;

{
  /* <form className="w-full flex flex-col sm:max-w-sm md:max-w-md lg:max-w-lg ">
<div>
  <div className="email"></div>
  <label htmlFor="email" className="block">
    Email
  </label>
  <input
    type="email"
    name="email"
    className="w-full outline-none focus:shadow-outline border border-gray-300 rounded-lg block py-2 px-4 appearance-none leading-normal"
  />
  <div className="error__email"></div>
</div>
<div>
  <label htmlFor="password" className="block">
    password
  </label>
  <input
    type="password"
    name="password"
    className="w-full outline-none"
  />
  <label htmlFor="submmit" className="block"></label>
  <div className="error__password"></div>
</div>
<button className="mt-6 w-1/5 bg-blue-300 text-center rounded-md">
  <span>SignIn</span>
</button>
</form> */
}
