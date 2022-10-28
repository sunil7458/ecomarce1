import React from "react";
import Product from "./Product";

const FetchData = ({ filterdata, data, sort }) => {
  console.log(filterdata, "kjhg");
  return (
    <div>
      <div className="product space-y-9  grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-full  items-baseline lg:gap-0 gap-4 p-4 ">
        {data
          ?.filter((dat) => {
            if (filterdata === "") {
              return dat;
            } else {
              return dat.category === filterdata;
            }
          })
          .sort(function (a, b) {
            if (sort === "asn") {
              return parseFloat(a.rating) - parseFloat(b.rating); //ascending
            } else if (sort === "dsn") {
              return parseFloat(b.rating) - parseFloat(a.rating); //descending
            } else if (sort === "priceasn") {
              return parseFloat(a.price) - parseFloat(b.price); //ascending
            } else if (sort === "pricedsn") {
              return parseFloat(b.price) - parseFloat(a.price); //descending
            } else if (sort === "disasn") {
              return (
                parseFloat(a.discountPercentage) -
                parseFloat(b.discountPercentage)
              ); //ascending
            } else if (sort === "disdsn") {
              return (
                parseFloat(b.discountPercentage) -
                parseFloat(a.discountPercentage)
              ); //descending
            } else {
              return a;
            }
          })
          ?.map((d, index) => {
            return (
              <Product
                title={d.title}
                price={d.price}
                rating={d.rating}
                stock={d.stock}
                thumbnail={d.thumbnail}
                discountPercentage = {d.discountPercentage}

              />
            );
          })}
      </div>
    </div>
  );
};

export default FetchData;
