import React from "react";

const Newsletter = () => {
  return (
    <div className=" w-[100%] lg:flex-row flex flex-col justify-center items-center my-16 ">
      <div className="  w-[50%] flex flex-col justify-center  font-bold text-[30px]">
        Want tips & tricks to optimize your flow?{" "}
        <span className="text-[15px]"> Sign up to our newsletter</span>
      </div>
      <div className="flex flex-col">
        <div className=" w-[90%] flex my-3">
          <input
            className="p-3 text-black w-[50%] mr-4 rounded-md"
            type="email"
            placeholder="Enter E-mail"
          ></input>
          <button className="text-black font-bold hover:text-white transition-all duration-[400ms] bg-[#00df9a] w-[40%] rounded-md ">
            Sign Up
          </button>
        </div>
        <p>
          We care about the protection of your data! Read our{" "}
          <span className="text-[#00df9a] underline">Privacy Policy</span>
        </p>
      </div>
    </div>
  );
};

export default Newsletter;
