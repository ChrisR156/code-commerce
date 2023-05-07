import React from "react";
import Single from "../Assets/single.png";
import Double from "../Assets/double.png";
import Triple from '../Assets/triple.png'

const Cards = () => {
  return (
    <div className="h-screen w-[100%] bg-white flex justify-center items-center">
      <div className="flex flex-col md:flex-row w-[100%] justify-center">
        <div className="h-[300px] md:h-[400px] w-[250px] md:w-[350px] rounded-2xl shadow-xl bg-white hover:scale-105 duration-300 hover:bg-[#fcfcfc]">
        <img className="w-24 mt-[-3rem] mb-2 mx-auto" src={Single} alt="/" />
          <div className="wrapper h-[90%] w-[100%] flex items-center justify-center flex-col">
            <div className="h-[30px] md:h-[40px] w-[100px] md:w-[140px] mb-4 text-center text-black font-bold text-2xl ">Single User</div>
            <div className="h-[30px] md:h-[40px] w-[100px] md:w-[140px] mb-10 text-center text-black font-bold text-[35px] ">$ 149</div>
            <div className="h-[20px] w-[80%]  border-b border-gray-200 pb-2 flex justify-center items-center mb-2 text-center text-black font-bold text-[15px] ">500 GB Storage</div>
            <div className="h-[20px] w-[80%]  border-b border-gray-200 pb-2 flex justify-center items-center mb-2 text-center text-black font-bold text-[15px] ">1 User Allowed</div>
            <div className="h-[20px] w-[80%]  border-b border-gray-200 pb-2 flex justify-center items-center mb-4 text-center text-black font-bold text-[15px] ">Send up to 2 GB</div>
            <button className='text-black hover:text-white duration-[400ms] bg-[#00df9a] w-[200px] rounded-md font-bold my-6 mx-auto py-3'>Start Trial</button>
          </div>
        </div>
        <div className="h-[300px] md:h-[400px] w-[250px] md:w-[350px] rounded-2xl shadow-xl mx-8 bg-white hover:scale-105 duration-300 hover:bg-[#fcfcfc]">
          <img className="w-24 mt-[-3rem] mb-2 mx-auto" src={Double} alt="/" />
          <div className="wrapper h-[90%] w-[100%] flex items-center justify-center flex-col">
            <div className="h-[30px] md:h-[40px] w-[100px] md:w-[140px] mb-4 text-center text-black font-bold text-2xl ">Partnership</div>
            <div className="h-[30px] md:h-[40px] w-[100px] md:w-[140px] mb-10 text-center text-black font-bold text-[35px] ">$ 199</div>
            <div className="h-[20px] w-[80%]  border-b border-gray-200 pb-2 flex justify-center items-center mb-2 text-center text-black font-bold text-[15px] ">1 TB Storage</div>
            <div className="h-[20px] w-[80%]  border-b border-gray-200 pb-2 flex justify-center items-center mb-2 text-center text-black font-bold text-[15px] ">3 Users Allowed</div>
            <div className="h-[20px] w-[80%]  border-b border-gray-200 pb-2 flex justify-center items-center mb-4 text-center text-black font-bold text-[15px] ">Send up to 10 GB</div>
            <button className='text-[#00df9a] hover:text-white duration-[400ms] bg-black w-[200px] rounded-md font-bold my-6 mx-auto py-3'>Start Trial</button>
          </div>
        </div>

        <div className="h-[300px] md:h-[400px] w-[250px] md:w-[350px] rounded-2xl shadow-xl bg-white hover:scale-105 duration-300 hover:bg-[#fcfcfc]">
        <img className="w-24 mt-[-3rem] mb-2 mx-auto" src={Triple} alt="/" />
          <div className="wrapper h-[90%] w-[100%] flex items-center justify-center flex-col">
            <div className="h-[30px] md:h-[40px] w-[100px] md:w-[140px] mb-4 text-center text-black font-bold text-2xl ">Group Account</div>
            <div className="h-[30px] md:h-[40px] w-[100px] md:w-[140px] mb-10 text-center text-black font-bold text-[35px] ">$ 299</div>
            <div className="h-[20px] w-[80%]  border-b border-gray-200 pb-2 flex justify-center items-center mb-2 text-center text-black font-bold text-[15px] ">5 TB Storage</div>
            <div className="h-[20px] w-[80%]  border-b border-gray-200 pb-2 flex justify-center items-center mb-2 text-center text-black font-bold text-[15px] ">10 Users Allowed</div>
            <div className="h-[20px] w-[80%]  border-b border-gray-200 pb-2 flex justify-center items-center mb-4 text-center text-black font-bold text-[15px] ">Send up to 20 GB</div>
            <button className='text-black hover:text-white duration-[400ms] bg-[#00df9a] w-[200px] rounded-md font-bold my-6 mx-auto py-3'>Start Trial</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
