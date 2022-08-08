import React from 'react'

const FeedBackPage = () => {
  return (
    <>
    
    <div className="ml-[220px]  flex h-screen flex-col justify-center gap-7 ">
      <h1 className="text-[56px] font-semibold">Welcome</h1>
      <p className="text-[32px] mb-[70px] font-medium">Your feedback is essential to helping us make webit great!</p>
      <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="h-[56px] rounded-md bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-gray-500 block w-[808px] p-2.5 pr-20 mb-[10px]"
                  placeholder="Give us feedback to make webit better"
                />
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="h-[104px] rounded-md bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-gray-500 block w-[808px] p-2.5 pr-20 "
                  placeholder="Explain in more detail (optional)"
                />
                <button className="w-[193px] text-lg text-white rounded-md  h-[56px] bg-[#402A2E] flex items-center justify-center gap-3">
                  <p>Submit</p>
                </button>
    </div>
   
  </>
  )
}

export default FeedBackPage