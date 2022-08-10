import { DashBoardSideBarData } from ".././data/DashBoardSideBarData";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { getToken, removeToken } from "../../services/LocalStorageService";
import { useDispatch } from "react-redux";
import { unSetUserToken } from "../../features/authSlice";
import { unSetUserInfo } from "../../features/userSlice";
import { useGetLoggedUserQuery } from "../../services/userAuthApi";
import { useEffect, useState } from "react";
import { setUserInfo } from "../../features/userSlice";

const DashBoardSideBar = () => {
  const handleLogout = () =>{
    dispatch(unSetUserInfo({ name: '' }))
    dispatch(unSetUserToken({ access_token: null }))
    removeToken()
    navigate('/login')
  }
  const navigate = useNavigate()
  const {access_token} = getToken()
  const {data, isSuccess} = useGetLoggedUserQuery(access_token)
  const [userData, setUserData] = useState({
    name: "",
  })

  const dispatch = useDispatch()

  useEffect(() => {
    if (data && isSuccess) {
      setUserData({
        name: data.name,
      })
    }
  }, [data, isSuccess])

  useEffect(() => {
    if (data && isSuccess) {
      dispatch(setUserInfo({
        name: data.name,
      }))
    }
  }, [data, isSuccess, dispatch])

  console.log(data)

 

  return (
    <div className=" ">
      <div className="w-[301px] h-screen  text-white flex pl-[60px]  text-[24px] justify-center flex-col bg-[#402A2E]">
        <div className=" text-[32px] font-semibold">
          <h1>Hi {userData.name}! </h1>
        </div>
        <div className=" justify-between   flex-col flex">
          <div className="pt-10 pb-[60px]">
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
        
            <h1 className="cursor-pointer" onClick={handleLogout}>Log Out</h1>
          
        </div>
      </div>
    </div>
  );
};

export default DashBoardSideBar;

