"use client";

import React from "react";
// import Filters from "../layouts/Filter";
import Link from "next/link";
import ProductItem from "./ProductItem";
// import StarRatings from "react-star-ratings";
import Image from "next/image";
import { PRODUCTS } from "@/helper/routes";

export default function ListProduct({ product }) {
  // console.log(data);
  return (
    <>
      <section className="py-12">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col md:flex-row mx-4">
            {/* <Filters /> */}

            <main className="md:w-2/3 lg:w-3/4 px-3">
              {product?.map((product) => {
                // <ProductItem />
                const {id, title, price, images, description, category} = product;
                return (
                  <article className="border border-gray-200 overflow-hidden bg-white shadow-sm rounded mb-5">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/4 flex p-3">
                        <div
                          style={{
                            width: "50%",
                            height: "50%",
                            position: "relative",
                          }}
                        >
                          <Image
                          src={images? images[0]:"/images/default_product.png"}
                          alt="product anme"
                          height="250"
                          width="250"
                          />
                        </div>
                      </div>
                      <div className="md:w-2/4">
                        <div className="p-4 text-black">
                          <Link href={`${PRODUCTS}/${id}`} className="hover:text-blue-600">
                          {product && title}
                          </Link>
                          {/* <div className="flex flex-wrap items-center space-x-2 mb-2">
                            <div className="ratings">
                              <div className="my-1">
                                <StarRatings
                                  rating={product && ratings}
                                  starRatedColor="#ffb829"
                                  numberOfStars={5}
                                  starDimension="18px"
                                  starSpacing="1px"
                                  name="rating"
                                />
                              </div>
                            </div>
                            <b className="text-gray-300">•</b>
                            <span className="ml-1 text-yellow-500">{product && ratings}</span>
                          </div> */}
                          <p className="text-gray-500 mb-2">
                          {product && description.substring(0, 100)}...
                          </p>
                        </div>
                      </div>
                      <div className="md:w-1/4 border-t lg:border-t-0 lg:border-l border-gray-200">
                        <div className="p-5">
                          <span className="text-xl font-semibold text-black">
                          $ {product && price}
                          </span>

                          <p className="text-green-500">Free Shipping</p>
                          <div className="my-3">
                            <a className="px-4 py-2 inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 cursor-pointer">
                              {" "}
                              Add to Cart{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </main>
          </div>
        </div>
      </section>
    </>
  );
}
