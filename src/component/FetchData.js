import React from "react";
import Product from "./Product";

const FetchData = ({ filterdata, data , sort }) => {

    console.log(filterdata , "kjhg")
  return (
    <div>
      <div className="product space-y-9  grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-full  items-baseline lg:gap-0 gap-4 p-4 ">
        {data?.filter((dat) => {
            if (filterdata === "") {
              return dat;
            } else {
              return dat.category === filterdata;
            }
          })
          .sort(function(a, b) {
            if(sort === "asn"){
                return parseFloat(a.rating) - parseFloat(b.rating);
            }else if(sort === "dsn"){
                return parseFloat(b.rating) - parseFloat(a.rating);
            }else{
                return a
            }
            
        })?.map((d, index) => {
            return (
              <Product
                title={d.title}
                price={d.price}
                rating={d.rating}
                stock={d.stock}
                thumbnail= {d.thumbnail}
              />
            );
          })}
      </div>
    </div>
  );
};

export default FetchData;
