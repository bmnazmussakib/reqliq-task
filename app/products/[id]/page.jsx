"use client";
import ProductDetails from "@/components/products/ProductDetails";
import { axiosClient } from "@/helper/helper";
import { PRODUCTS } from "@/helper/routes";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function PageDetailsPage({ params }) {
    console.log(params.id)
  const [product, setProduct] = useState();

  const getProductDetails = async () => {
    const response = await axiosClient().get(`${PRODUCTS}/${params.id}`)
    // console.log(response?.data)
    if (response?.status === 200) {
      setProduct(response?.data)
    }
  };

  useEffect(() => {
    getProductDetails();
  }, []);

  return <ProductDetails product={product} />;
}
