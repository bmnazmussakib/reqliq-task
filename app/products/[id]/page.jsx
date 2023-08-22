"use client";
import ProductDetails from "@/components/products/ProductDetails";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function PageDetailsPage({ params }) {
    console.log(params.id)
  const [product, setProduct] = useState();

//   const getProductDetails = async () => {
//     let response = await axios.get(`${process.env.API_URI}/api/products/${params.id}`);
//     setProduct(response?.data);
//   };

//   useEffect(() => {
//     getProductDetails();
//   }, []);

  return <ProductDetails/>;
}
