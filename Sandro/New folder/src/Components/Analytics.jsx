import React from "react";
import Laptop from "../Assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src={Laptop} alt="/" className="w-[500px] mx-auto my-4"></img>
        <div className="text-black flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:-3xl text-2xl font-bold py-2">Manage Data Analytics Centrally</h1>
          <p className="md:mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum iusto
            aperiam cumque rem exercitationem dicta! Ex tempore atque impedit
            reprehenderit dignissimos culpa obcaecati blanditiis molestias,
            nesciunt quisquam corporis corrupti fuga?
          </p>
          <button className='text-black hover:text-white transition-all duration-[400ms] bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:m-0 py-3'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
