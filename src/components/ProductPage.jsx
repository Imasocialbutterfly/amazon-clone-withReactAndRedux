import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { callAPI } from "../utils/CallApi";
import ProductDetails from "./ProductDetails";
import { ZA_CURRENCY } from "../utils/constants";
import { addToCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [qauntity, setQauntity] = useState("1");
  const dispatch = useDispatch();

  const getProduct = () => {
    callAPI(`data/products.json`).then((productResults) => {
      setProduct(productResults[id]);
    });
  };

  const addQauntityToProduct = () => {
    setProduct((product.qauntity = qauntity));
    return product;
  };

  useEffect(() => {
    getProduct();
  }, []);

  if (!product?.title) return <h1>Loading Product ...</h1>;

  return (
    product && (
      <div className="h-screen bg-amazonclone-background">
        <div className="min-w-[1000px] max-w-[1500px] m-auto p-4">
          <div className=" grid grid-cols-10 gap-2">
            <div className=" col-span-3 p-8 rounded bg-white m-auto">
              <img src={`${product.image}`} />
            </div>
            <div className="col-span-5 p-4 rounded bg-white divide-y divide-gray-400">
              <div className="mb-3">
                <ProductDetails product={product} ratings={true} />
              </div>
              <div className="text-base xl:text-lg mt-3">
                {product.descriptiom}
              </div>
            </div>
            <div className="col-span-2 p-4 rounded bg-white">
              <div className="text-xl xl:text-2xl  text-right font-semibold text-red-700">
                {ZA_CURRENCY.format(product.price)}
              </div>
              <div className="text-base xl:text-lg text-right font-semibold text-gray-500">
                RRP:{" "}
                <span className="line-through">
                  {ZA_CURRENCY.format(product.oldPrice)}
                </span>
              </div>
              <div className="text-sm xl:text-baae font-semibold text-blue-500 mt-3">
                FREE Returns
              </div>
              <div className="text-sm xl:text-baae font-semibold text-blue-500 mt-1">
                FREE Delivery
              </div>
              <div className="text-base xl:text-lg font-semibold text-green-700 mt-1">
                In Stock
              </div>
              <div className="text-base xl:text-lg font-semibold">
                Qauntity:
                <select
                  onChange={(e) => setQauntity(e.target.value)}
                  className="p-2 bg-white border rounded-md focus:border-indigo-600"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <Link to={"/checkout"}>
                <button
                  onClick={() => dispatch(addToCart(addQauntityToProduct()))}
                  className="btn"
                >
                  Add to cart
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductPage;
