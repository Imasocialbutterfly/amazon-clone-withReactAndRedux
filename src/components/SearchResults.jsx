import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { callAPI } from "../utils/CallApi";
import ProductDetails from "./ProductDetails";
import { ZA_CURRENCY } from "../utils/constants";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState(null);

  const searchTerm = searchParams.get("searchTerm");
  const category = searchParams.get("category");

  const getSearchResults = () => {
    callAPI(`data/search.json`).then((searchResults) => {
      const categoryResults = searchResults[category];
      if (searchTerm) {
        const results = categoryResults.filter((product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setProducts(results);
      } else {
        setProducts(categoryResults);
      }
    });
  };

  // const getSearchResults = async () => {
  //   try {
  //     const response = await callAPI("data/search.json");
  //     const categoryResults = response.data;

  //     if (searchTerm) {
  //       const results = categoryResults.filter((product) =>
  //         product.title.toLowerCase().includes(searchTerm.toLowerCase())
  //       );
  //       setProducts(results);
  //     } else {
  //       setProducts(categoryResults);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching search results:", error);
  //   }
  // };

  useEffect(() => {
    getSearchResults();
  }, [searchParams]);

  return (
    <div className="min-w-[1220px] max-w-[1300px] m-auto:">
      {products &&
        products.map((product, key) => {
          return (
            <Link key={key} to={`/product/${product.id}`}>
              <div className="h-[250px] grid grid-cols-12 rounded mt-1 mb-1">
                <div className="col-span-2 bg-gray-200">
                  <img className="m-auto" src={product.image_small} />
                </div>
                <div className="col-span-10 bg-gray-50 border-gray-100 hover:bg-gray-100">
                  <div className="font-mediem text-black p-2">
                    <ProductDetails product={product} ratings={true} />
                    <div className="text-xl xl:text-2xl pt-1">
                      {ZA_CURRENCY.format(product.price)}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default SearchResults;
