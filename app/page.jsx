"use client"
import ListProduct from "@/components/products/ListProducts";
import { axiosClient } from "@/helper/helper";
import { PRODUCTS } from "@/helper/routes";
import { useEffect, useState } from "react";

export default function Home() {

  const [allProduct, setAllProduct] = useState([])
  console.log(allProduct)

  const getAllProduct = async () => {
    const response = await axiosClient().get(PRODUCTS)
    console.log(response)
    if (response?.status === 200) {
      setAllProduct(response?.data)
    }
  };

  useEffect(() =>{
    getAllProduct()
  },[])

  return (
    <>
      <ListProduct product={allProduct}/>
    </>
  );
}
