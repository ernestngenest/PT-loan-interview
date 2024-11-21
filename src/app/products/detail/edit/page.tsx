import EditProductPage from "@/components/Product/Detail/Edit/EditProductPage";
import { Header } from "@/components/Product/Header";
import React from "react";

export default function EditProductDetail() {
  return (
    <div className="w-full">
      <Header />
      <EditProductPage />
    </div>
  );
}
