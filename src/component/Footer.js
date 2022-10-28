import React from 'react'

const Footer = () => {
  return (
    <>
    
    <footer
        className="bg-[#141414]  mt-16 p-2 w-full
      "
      >
        <div className="">
          <span className="flex justify-center text-white  text-[12px]  pt-6">
            Get exclusive updates about our new product launches and deals
          </span>
          <div className="flex justify-center mt-10 ">
            <div className="email    bg-black text-white lg:w-[30%] md:w-[50%] w-[100%] lg:p-2 p-2 flex justify-between  rounded-lg  items-center  ">
              <div className="space-x-2  items-center flex  ">
                <label>Email</label>
                <input
                  type="text"
                  className="none  bg-black text-white  border-none w-full   outline-none "
                />
              </div>
              <button className="text-center bg-gray-500 rounded-md w-24 p-2  lg:text-lg text-[15px] ">
                Submit
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center  mt-16">
          <hr className="lg:w-[80%] w-full"></hr>
        </div>

        <div className="flex justify-center   mt-16">
          <span className="md:text-md text-sm text-center text-white  lg:w-[40%] w-full ">
            Tann stands for the colour brown & Trim stands for the minute
            details. At Tann Trim, we design simple, chic yet thoughtful
            products for the life lived in motion.
          </span>
        </div>

        <div className=" flex justify-center items-baseline ">
          <div className="  flex gap-32  mt-16  flex-col lg:w-[60%] w-full    justify-center item-baseline lg:flex-row">
            <div className="useful  text-white  flex flex-col  space-y-3 items-center text-center  w-full">
              <span className="font-[700]  ">usefullinks</span>
              <ul className="flex lg:flex-col flex-row items-center text-center  p-2 ">
                <li className=" lg:text-[16px]  text-[12px] tracker-[10px] font-[100]">
                  Cookie Policy
                </li>
                <li className=" lg:text-[16px] text-[12px] tracker-[10px] font-[100]">
                  Terms & Conditions
                </li>
                <li className=" lg:text-[16px] text-[12px] font-[100]">
                  Privacy Policy
                </li>
                <li className=" lg:text-[16px] text-[12px] font-[100]">
                  Return Policy
                </li>
                <li className=" lg:text-[16px] text-[12px] font-[100]">
                  About Us
                </li>
                <li className=" lg:text-[16px] text-[12px] font-[100]">
                  Shipping Policy
                </li>
              </ul>
            </div>
            <div className=" flex flex-col text-white space-y-3 w-full justify-center items-center">
              <span className="lg:text-[20px] text-[12px]">Help</span>
              <span className="lg:text-[20px] text-[12px]">Contact us</span>
            </div>

            <div className="text-white  space-y-3 ">
              <div className="icons    text-center w-full justify-center items-center">
                101-C, Hari Nagar, Ashram Delhi - 110014 India
              </div>

              <div className=" w-full justify-center items-center text-center">
                Email : support@tantrim.com Phone number: +91-9354516620
                (weekdays 10:30am - 5:30pm)
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center text-center  mb-16">
          <div className="last part  text-white   flex flex-col space-y-3">
            <h1 className="lg:text-2xl text-[10px] text-slate-100 tracking-[10px]  font-[100]  hidden lg:block  capitalize">
              TANN TRIM
            </h1>

            <span>
              All rights reserved © 2022 Tann Trim Pvt. Ltd. CIN:
              U52339DL2021PTC380909
            </span>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer