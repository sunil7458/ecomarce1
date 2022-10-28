import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Footer from "../component/Footer";
import axios from "axios";
import FetchData from "./FetchData";
const HomePage = () => {
  const [data, setdata] = useState();
  const [filterdata, setfilterdata] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    const fetch = async () => {
      const datas = await axios.get("https://dummyjson.com/products?limit=100");
      setdata(datas?.data?.products);
      console.log(datas?.data?.products);
    };
    fetch();
  }, []);

  const filterdropdown = [
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
    "furniture",
    "mens-watches",
    "tops",
    "womens-dresses",
    "mens-shirts",
    "mens-shoes",
    "womens-bags",
    "sunglasses",
  ];




  return (
    <div>
      <Nav />

      <div className="banner ">
        <h1 className="flex justify-center bg-blue-500 capitalize md:text-3xl text-sm tracking-[5px] md:p-3 p-1 ">
          use code Myfirst on checkout 10%
        </h1>

        <span className=" font-bold mt-7 text-3xl text-center flex justify-center">
          Product Filter Out
        </span>
        <div className="flex justify-center items-center  mt-10 flex-col space-y-5 ">
          <select onChange={(e) => setSort(e.target.value)}   className =  "p-2 w-[10%] focus:outline-none">
            <option value="asn">low to rating</option>
            <option value="dsn">high to rating</option>
          </select>
          <select onChange={(e) => setSort(e.target.value)}   className =  "p-2 w-[10%] focus:outline-none">
            <option value="priceasn">low to price</option>
            <option value="pricedsn">high to price</option>
          </select>

          <select onChange={(e) => setSort(e.target.value)}   className =  "p-2 w-[10%] focus:outline-none">
            <option value="disasn">low to discount</option>
            <option value="disdsn">high to discount</option>
          </select>

          <select
            className="w-[50%] p-4 border border-gray-600 focus:outline-none   "
            onChange={(e) => setfilterdata(e.target.value)}
          >
            <option value="">All Products</option>
            {filterdropdown?.map((data, index) => {
              return (
                <option key={index} value={data}>
                  {data}
                </option>
              );
            })}
          </select>
        </div>

        <FetchData sort={sort} filterdata={filterdata} data={data} />

        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
