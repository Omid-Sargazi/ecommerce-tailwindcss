import React from "react";
import { useGetProductsApiByNameQuery } from "./features/productsApi";

const Home = () => {
  const { data, error, isLoading } = useGetProductsApiByNameQuery();
  console.log(data, "data");
  return (
    <div>
      {error ? (
        <>oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>{}</>
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;
