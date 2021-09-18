import clsx from "clsx";
import Link from "next/link";
import React, { useState } from "react";
import { Image } from "next/image";
import axiosInstance from '../../@axios';


function Signup() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
        console.log("in consle")
    }
    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    }
    const handleChangeRepeatPassword = (event) => {
        setRepeatPassword(event.target.value);
    }
    const handleChangeName = (event) => {
        setName(event.target.value);
    }
    const handleChangePhone = (event) => {
        setPhone(event.target.value);
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        console.log("in here")
        const payload = {
            email: email,
            password: password,
            name: name,
            phone: phone
        }
        console.log(payload)
        if (email !== "" && password != ""){
            const url = `/api/users/signup`
            await axiosInstance.post(url,payload).then((res) => console.log(res))
        }
    }

    return (
    <div>
      <nav
        className={
          "col-span-4 lg:col-span-6 z-10 px-10 xl:px-20 2xl:px-40 relative top-0 bg-white"
        }
      >
        <ul className="flex items-center justify-between px-8 py-6">
          {/* Left Brand */}
          <li>
            <h1 className="p-0 m-0 text-3xl">
              <Link href="/">
                <a className="transition ease-in-out duration-250 dark:text-gray-100 dark:hover:text-primary-300">
                  {"Finvest"}
                </a>
              </Link>
            </h1>
          </li>
          {/* Right Links */}
          <li>
            <ul className="flex items-center justify-between xl:space-x-4 lg:space-x-1">
              <li className="flex items-center px-4 py-2 bg-gray-100 rounded-full">
                <a
                  href="/signin"
                  className="rounded-3xl px-4 py-2"
                  style={{ color: "#595959" }}
                >
                  {" "}
                  Sign In{" "}
                </a>
              </li>
              <li>
                <a
                  className="rounded-3xl px-4 py-2 mr-2"
                  href="/signup"
                  style={{ color: "white", backgroundColor: "#6D28D9" }}
                >
                  {" "}
                  Sign Up{" "}
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <div className="grid grid-cols-2 mt-24 ">
        <div className="col-span-1 lg:col-span-1 z-10 px-10 xl:px-20 2xl:px-40 ml-6">
          <p className="text-6xl" style={{ color: "#595959" }}>
            {" "}
            <span style={{ color: "#6D28D9" }}>Investing</span> has never been
            so easy!
          </p>
          <p
            className="mt-8 mb-8 font-light w-64 text-lg"
            style={{ color: "#595959" }}
          >
            {" "}
            If you don't have an account, you can register here:{" "}
          </p>
          <a
            href="/signup"
            className="p-2 rounded-3xl text-2xl  font-light py-2 px-8"
            style={{ backgroundColor: "#6D28D9", color: "white" }}
          >
            Register Here
          </a>
        </div>
        <div className="grid col-span-1">
          <div className="grid justify-center mb-8">
            <p className="text-4xl mr-8" style={{ color: "#595959" }}>
              Sign up
            </p>
          </div>
          <div className="grid col-span-1 ml-12">
            <form onSubmit = {handleSubmit}>
              <label
                className="text-xl mb-2 font-light ml-8"
                style={{ color: "#595959", display: "block" }}
              >
                E-mail
              </label>
              <input
                className="rounded-lg w-3/4 text-2xl mb-4 ml-8 font-extralight p-2"
                style={{ border: "1px solid gray" }}
                type="text"
                onChange = {handleChangeEmail}
                value = {email}
              ></input>
              <label
                className="text-xl mb-2 font-light ml-8"
                style={{ color: "#595959", display: "block" }}
              >
                Name
              </label>
              <input
                className="rounded-lg w-3/4 text-2xl mb-4 ml-8 font-extralight p-2"
                style={{ border: "1px solid gray" }}
                type="text"
                onChange = {handleChangeName}
                value = {name}
              ></input>
              <label
                className="text-xl mb-2 font-light ml-8"
                style={{ color: "#595959", display: "block" }}
              >
                Phone
              </label>
              <input
                className="rounded-lg w-3/4 text-2xl mb-4 ml-8 font-extralight p-2"
                style={{ border: "1px solid gray" }}
                type="text"
                onChange = {handleChangePhone}
                value = {phone}
              ></input>
              <label
                className="text-xl font-light ml-8"
                style={{ color: "#595959", display: "block" }}
              >
                Password
              </label>
              <input
                className="rounded-lg w-3/4 text-4xl mb-4 ml-8"
                style={{ border: "1px solid gray" }}
                type="password"
                onChange = {handleChangePassword}
                value = {password}
              ></input>
              <label
                className="text-xl font-light ml-8"
                style={{ color: "#595959", display: "block" }}
              >
                Confirm Password
              </label>
              <input
                className="rounded-lg w-3/4 text-4xl mb-4 ml-8"
                style={{ border: "1px solid gray" }}
                type="password"
                onChange = {handleChangeRepeatPassword}
                value = {repeatPassword}
              ></input>
              <div className="grid justify-center">
                <button
                  href="/signup"
                  className="p-2 rounded-3xl text-2xl  font-light py-2 px-8 mt-2 w-80 mr-12 mb-4"
                  style={{ backgroundColor: "#6D28D9", color: "white" }}
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <img className="ml-10" src="image 5.svg"></img> */}
    </div>
  );
}

export default Signup;
