import Link from "next/link";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import axiosInstance from "../../@axios";
import Router from 'next/router'

function Jswallet() {
  const [merchantType, setMerchantType] = useState("");
  const [traceNo, setTraceNo] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [date, setDate] = useState("");
  const [cnic, setCnic] = useState("");
  const [cnicIssueDate, setCnicIssueDate] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneNetwork, setPhoneNetwork] = useState("");

  const handleChangeMerchantType = (event) => {
    setMerchantType(event.target.value);
  };
  const handleChangeTraceNo = (event) => {
    setTraceNo(event.target.value);
  };
  const handleChangeCompanyName = (event) => {
    setCompanyName(event.target.value);
  };
  const handleChangeCnic = (event) => {
    setCnic(event.target.value);
  };
  const handleChangeCnicIssueDate = (event) => {
    setCnicIssueDate(event.target.value);
  };
  const handleChangePhone = (event) => {
    setPhone(event.target.value);
  };
  const handleChangePhoneNetwork = (event) => {
    setPhoneNetwork(event.target.value);
  };

  const handleSubmit = async (e) => {
    // const payload = {
    //   email: email,
    //   password: password,
    // };
    // console.log(payload);
    // if (email !== "" && password != "") {
    //   const url = `/api/users/signin`;
    //   await axiosInstance.post(url, payload).then((res) => console.log(res));
    // }

    Router.push('/signin')
    return {
      redirect: {
        destination: '/signin',
        permanent: false,
      },
    }
  };

  return (
    <div className ="mb-2">
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
                  className="rounded-3xl px-4 py-2 mr-2"
                  href="/signin"
                >
                  {" "}
                  Sign In{" "}
                </a>
              </li>
              <li>
                <a href="/signup"> Sign Up </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <div className = "z-10 px-10 xl:px-20 2xl:px-40">
        <p className = "text-4xl mb-2 font-medium ml-8" style ={{color: "#595959"}}>Create Your</p>
        <p className = "text-4xl mb-2 font-medium ml-8" style = {{color: "#6D28D9"}} >JS Wallet</p>
      </div>

      <div className="grid grid-cols-1 mt-24 justify-center">
        <form onSubmit = {handleSubmit}>
          <div className="grid grid-cols-2 lg:col-span-2 z-10 px-10 xl:px-20 2xl:px-40 ml-6">
            <div className="col-span-1">
              <label
                className="text-xl mb-2 font-light ml-8"
                style={{ color: "#595959", display: "block" }}
              >
                MerchantType
              </label>
              <input
                className="rounded-lg w-3/4 text-2xl mb-4 ml-8 font-extralight p-2"
                style={{ border: "1px solid gray" }}
                type="text"
                onChange={handleChangeMerchantType}
              ></input>
              <label
                className="text-xl mb-2 font-light ml-8"
                style={{ color: "#595959", display: "block" }}
              >
                Company Name
              </label>
              <input
                className="rounded-lg w-3/4 text-2xl mb-4 ml-8 font-extralight p-2"
                style={{ border: "1px solid gray" }}
                type="text"
                onChange={handleChangeCompanyName}
              ></input>
              <label
                className="text-xl mb-2 font-light ml-8"
                style={{ color: "#595959", display: "block" }}
              >
                CNIC
              </label>
              <input
                className="rounded-lg w-3/4 text-2xl mb-4 ml-8 font-extralight p-2"
                style={{ border: "1px solid gray" }}
                type="text"
                onChange={handleChangeCnic}
              ></input>
            </div>
            <div className="col-span-1">
              <label
                className="text-xl mb-2 font-light ml-8"
                style={{ color: "#595959", display: "block" }}
              >
                Trace Number
              </label>
              <input
                className="rounded-lg w-3/4 text-2xl mb-4 ml-8 font-extralight p-2"
                style={{ border: "1px solid gray" }}
                type="text"
                onChange={handleChangeTraceNo}
              ></input>
              <label
                className="text-xl mb-2 font-light ml-8"
                style={{ color: "#595959", display: "block" }}
              >
                CNIC issue date
              </label>
              <input
                className="rounded-lg w-3/4 text-2xl mb-4 ml-8 font-extralight p-2"
                style={{ border: "1px solid gray" }}
                type="text"
                onChange={handleChangeCnicIssueDate}
              ></input>
              <label
                className="text-xl mb-2 font-light ml-8"
                style={{ color: "#595959", display: "block" }}
              >
                MerchantType
              </label>
              <input
                className="rounded-lg w-3/4 text-2xl mb-4 ml-8 font-extralight p-2"
                style={{ border: "1px solid gray" }}
                type="text"
                onChange={handleChangeMerchantType}
              ></input>
            </div>
            <div className="grid justify-center ">
            </div>
          </div>
          <div className = "grid justify-center mr-36">
          <label
            className="text-xl mb-2 font-light ml-8"
            style={{ color: "#595959", display: "block" }}
          >
            Mobile Number
          </label>
          <input
            className=" grid-cols-1 rounded-lg w-3/4 text-2xl mb-4 ml-8 font-extralight p-2 w-full mr-2"
            style={{ border: "1px solid gray" }}
            type="text"
            onChange={handleChangePhone}
          ></input>
           <button
                href="/signup"
                className="p-2 rounded-3xl text-2xl  font-light py-2 px-8 mt-2 w-80 ml-20"
                style={{ backgroundColor: "#6D28D9", color: "white" }}
                type="submit"
              >
                Submit
              </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Jswallet;
