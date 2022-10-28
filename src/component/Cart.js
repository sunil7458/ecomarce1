import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Nav from "./Nav";
import { UsestateValue } from "../Context/State";
import { getTotalbasket } from "../Context/Reducer";

const Cart = () => {
  const [{ basket }, dispatch] = UsestateValue();
  const remov = (id) => {
    dispatch({
      type: "REMOVE_TO_CART",
      payLoad: {
        id: id,
      },
    });
  };
  return (
    <div>
      <div>
        <Nav />

        <div className="cart_noitem flex md:justify-center items-center mt-10 p-4 ">
          {basket?.length === 0 ? (
            <div className="flex justify-center text-white text-5xl   mt-20">
              <span>There is no item</span>
            </div>
          ) : (
            <div className="orderederd_items text-white flex justify-between items-baseline  md:w-[70%] w-full gap-4 flex-col lg:flex-row p-4 lg:p-0">
              <div className="w-full lg:w-[70%] ">
                <span className="flex  justify-center">items are added</span>
                {basket?.map((data, ind) => {
                  console.log(basket);

                  return (
                    <div className="flex justify-center mt-5">
                      <div className="w-full">
                        <div className="box flex  w-full h-40 bg-[#141414] space-x-2 rounded-md justify-between">
                          {/* <div className="flex justify-between"> */}
                            <div className="flex  space-x-4 ">
                              <img
                                src={data.thumbnail}
                                className="w-36 h-40 object-cover"
                                alt="ll"
                              />

                              <div>
                                <span className="lg:text-[18px]  text-ellipsis ">
                                  {data.title}
                                </span>
                              </div>
                            </div>
                            <div className="flex flex-col space-y-4">
                              <div>
                                <span>{data.rating}</span>
                                <span className="text-white">{data.discountPercentage}</span>
                              </div>
                              <FontAwesomeIcon  icon={faTrash} onClick ={remov}/>
                            </div>
                          {/* </div> */}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className=" w-full ">
                <div className="bg-red-200 text-black p-2  flex justify-center w-full">
                  My first App
                </div>

                <input
                  type="text"
                  className=" bg-[#141414]  mt-5 p-2 rounded-lg w-full "
                  placeholder="Enter a Coupen"
                />

                <div className=" mt-6">
                  <span className="">Cart Summary</span>
                  <div className="space-y-8 mt-5">
                    <div className="flex justify-between">
                      <span>Subtotals</span>
                      <span>{getTotalbasket(basket)}</span>
                    </div>

                    <div className="flex justify-between">
                      <span>Coupon Discount</span>
                      <span>0</span>
                    </div>

                    <div className="flex justify-between">
                      <span>Shipping Charges</span>
                      <span>0</span>
                    </div>

                    <div className="flex justify-between">
                      <span>Personalisation</span>
                      <span>0</span>
                    </div>

                    <div className="flex justify-between">
                      <span>Tax</span>
                      <span>0</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="font-[500 ] text-2xl">Total Amount</span>
                      <span>{getTotalbasket(basket)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
