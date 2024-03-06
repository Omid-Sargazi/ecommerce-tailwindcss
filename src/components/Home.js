import React from "react";
import { addToCart } from "./features/cartSlice";
import { UseDispatch, useDispatch } from "react-redux";
import { useGetProductsApiByNameQuery } from "./features/productsApi";

const Home = () => {
  const { data, error, isLoading } = useGetProductsApiByNameQuery();
  console.log(data, "data");
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className=" py-8 px-16">
      {error ? (
        <>oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h2 className=" text-[40px] text-center">New Arrivals</h2>
          <div className=" flex-col md:flex-row items-center flex justify-between flex-wrap mt-8">
            {data?.map((product) => (
              <div
                className=" w-[250px] max-w-full h-[500px] flex flex-col justify-between mt-4 mb-4 p-4 shadow-xl rounded-xl"
                key={product.id}
              >
                <h3 className=" text-2xl">{product.title.substring(0, 10)}</h3>
                <img
                  width="100%"
                  className=" w-[80%] object-contain h-[70%] mt-4 ml-auto mr-auto"
                  src={product.image}
                  alt={product.title.substring(0, 10)}
                />
                <div className=" flex items-center justify-between">
                  <span>{product.description.substring(0, 15)}</span>
                  <span className=" text-xl">${product.price}</span>
                </div>
                <button
                  onClick={() => handleAddToCart(product)}
                  className=" px-4 py-3 w-full h-15 rounded-lg mt-8 cursor-pointer bg-[#4b70e2] hover:bg-[#5a67e0] text-white"
                >
                  Add to cart
                </button>
              </div>
            ))}
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;
