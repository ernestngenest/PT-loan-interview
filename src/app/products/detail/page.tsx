"use client";

import BankProductDetail from "@/components/Product/Detail/BankProductDetail";
import { Header } from "@/components/Product/Header";
export const dynamic = "force-dynamic";
export default function ProductDetail() {
  return (
    <div className="w-full">
      <Header />
      <BankProductDetail />
    </div>
  );
}
