// SignUp.jsx

import mobile from "../imgs/mobile.svg";
import desktop from "../imgs/desktop.svg";
import iconList from "../imgs/icon-success.svg";
// import { useState } from "react";

const SignUp = ({ setEmail, toggleIsSubmitted }) => {
  const handleSubmitForm = (e) => {
    e.preventDefault();
    const emailForm = new FormData(e.currentTarget);
    // setEmail(emailForm.get("email"));
    // toggleIsSubmitted();
    console.log(emailForm.get("email"));
  };

  console.log(setEmail,toggleIsSubmitted);

  return (
    <div className="bg-white rounded-lg flex gap-2 flex-col-reverse sm:flex-row sm:min-h-0 sm:w-1/2 text-darkGrey text-xs pb-40 sm:pb-0">
      <div className="p-4  sm:w-3/5">
        <h1 className=" sm:text-4xl text-3xl text-center  py-4">
          Stay Updated!
        </h1>
        <p className="py-4">
          Join 60,000+ product managers receiving monthly updates on:
        </p>

        <div className="space-y-2">
          <div className="flex gap-3">
            <img className="h-8" src={iconList} alt="" />
            <p>Product discovery and building what matters</p>
          </div>

          <div className="flex gap-3">
            <img className="h-8" src={iconList} alt="" />
            <p>Measuring to ensure updates are a success</p>
          </div>

          <div className="flex gap-3">
            <img className="h-8" src={iconList} alt="" />
            <p>And much more!</p>
          </div>
        </div>

        {/* Form */}

        <div className="my-8">
          <div className="flex justify-between">
            <p>Email address</p> <span>Valid Email required</span>
          </div>
          <form onSubmit={handleSubmitForm}>
            <label htmlFor="email" className="block"></label>
            <input
              className="border border-grey w-full p-2 my-2 rounded-md opacity-65"
              placeholder="email@company.com"
              type="email"
              name="email"
              id="email"
            />
            <button
              className="bg-darkGrey text-white p-2 w-full rounded-md hover:bg-tomato"
              onClick={toggleIsSubmitted}
              type="submit"
            >
              Subscribe to monthly newsletter
            </button>
          </form>
        </div>
      </div>
      <div className="sm:w-2/5 sm:pr-2">
        <img className="sm:hidden w-full" src={mobile} alt="" />
        <img className="hidden sm:block h-[100%]" src={desktop} alt="" />
      </div>
    </div>
  );
};
export default SignUp;
