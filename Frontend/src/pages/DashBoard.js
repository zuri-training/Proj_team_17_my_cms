import React from "react";
import DashBoardSideBar from "../components/layout/DashBoardSideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import nopost from '../assets/img/nopost.svg';


const DashBoard = () => {
  return (
    <>
   
      <div className="flex text-center  justify-center">
        <div className="w-[301px]  h-screen">
          <DashBoardSideBar/>
        </div>
        <div className="text-center  flex flex-col ">
         
        <div className="flex justify-center items-center  w-full gap-6 m-8">
       
          <div className="flex gap-4 justify-center items">
          <div className="h-[56px]  flex items-center justify-center text-lg text-white  w-[56px] rounded-full bg-gray-700">
              <FontAwesomeIcon icon={faSearch} />
            </div>
            <input
              id="search"
              name="search"
              type="search"
              required
              className=" h-[56px] rounded-md bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-gray-500 block w-[782px] p-2.5 pr-20 "
              placeholder="Search Post"
            />
            <div className="w-[100px] text-lg text-white rounded-md h-[56px] bg-[#402A2E] flex items-center justify-center gap-3">
              <FontAwesomeIcon icon={faSearch} />
              <h1>Search</h1>
            </div>
            
          </div>
          
       </div>
       <div className="flex flex-col  justify-center items-center ">
       <img src={nopost} alt="nopost" img/>
       <div className="w-[173px] text-lg text-white  h-[56px] bg-[#402A2E] flex items-center justify-center gap-3">
              <FontAwesomeIcon icon={faPlus} />
              <h1>New Post</h1>
            </div>
       </div>
       
      </div>
      
      </div>
      
    </>
  );
};

export default DashBoard;

