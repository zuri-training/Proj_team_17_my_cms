import { DashBoardSideBarData } from ".././data/DashBoardSideBarData";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const DashBoardSideBar = () => {
  return (
    <div className=" top-0 left-0 fixed">
      <div className="w-[301px] h-screen  text-white flex pl-[60px]  text-[24px] justify-center flex-col bg-[#402A2E]">
        <div className=" text-[32px] flex font-semibold">
          <h1>Name</h1>
        </div>
        <div>
          <div className="pt-5 pb-[60px]">
            {DashBoardSideBarData.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex pb-2 text-lg  items-center gap-5 justify-start text-center cursor-pointer "
                >
                  <div className=" my-4 ">
                    <Link to={item.path}>
                      <span className="focus:bg-red-500">{item.icon}</span>
                    </Link>
                  </div>
                  <div className=" ">
                    <Link to={item.path}>
                      <span>{item.title}</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className=" text-[24px] flex mt-[] items-center gap-8">
          <FontAwesomeIcon
            className="font-3xl cursor-pointer"
            icon={faSignOut}
          />
          <Link to="/">
            <h1>Log Out</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashBoardSideBar;
