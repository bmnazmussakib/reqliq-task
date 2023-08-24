import { addToCart } from "@/features/cartSlice";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import StarRatings from "react-star-ratings";
// import BreadCrumbs from "../layouts/BreadCrumbs";
// import NewReview from "../reviews/NewReview";
// import Reviews from "../reviews/Reviews";

const ProductDetails = ({ product }) => {
  const cartItems = useSelector((state) => state.cart);

  console.log("cartItems: ", cartItems);

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    // console.log(product)
    dispatch(addToCart(product));
  };

  const imgRef = useRef(null);

  const setImgUrl = (url) => {
    imgRef.current = url;
  };

  // const breadCrumbs = [
  //   {
  //     name: 'Home',
  //     url: '/'
  //   },
  //   {
  //     name: `${product?.name?.substring(0,100)}...`,
  //     url: `/products/${product?._id}`
  //   }
  // ]

  return (
    <>
      <section className="bg-white py-10">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-5">
            <aside>
              <div className="border border-gray-200 shadow-sm p-3 text-center rounded mb-5">
                <img
                  className="object-cover inline-block"
                  src={product?.image}
                  alt="Product title"
                  width="340"
                  height="340"
                />
              </div>
              {/* <div className="space-x-2 overflow-auto text-center whitespace-nowrap">
                {product?.images?.map((img) => {
                  return (
                    <a
                      className="inline-block border border-gray-200 p-1 rounded-md hover:border-blue-500 cursor-pointer"
                      onClick={() => setImgUrl(img)}
                    >
                      <img
                        className="w-14 h-14"
                        src={img}
                        alt="Product title"
                        width="500"
                        height="500"
                      />
                    </a>
                  );
                })}
              </div> */}
            </aside>
            <main>
              <h2 className="font-semibold text-2xl mb-4">{product?.title}</h2>
              <p className="mb-4 font-semibold text-xl">$ {product?.price}</p>
              <p className="mb-4 text-gray-500">{product?.description}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                <button
                  className="px-4 py-2 inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
                  onClick={() => handleAddToCart(product)}
                >
                  <i className="fa fa-shopping-cart mr-2"></i>
                  Add to cart
                </button>
              </div>
            </main>
          </div>

          {/* <NewReview /> */}
          <hr />

          <div className="font-semibold">
            <h1 className="text-gray-500 review-title mb-6 mt-10 text-2xl">
              Other Customers Reviews
            </h1>
            {/* <Reviews /> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
