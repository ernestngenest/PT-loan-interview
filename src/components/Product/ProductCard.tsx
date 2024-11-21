"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type ProductData = {
  bankLogo: string;
  bankName: string;
  rating: number;
  usersYearly: number;
  title: string;
  details: {
    fixRate: number;
    target: string;
    maxTenor: number;
    jaminan: string;
    loanToValue: number;
    komisi: number;
  };
};

const productData: ProductData = {
  bankLogo: "/logo/mandiri.png",
  bankName: "Mandiri Logo",
  rating: 3,
  usersYearly: 220,
  title: "Mandiri Bunga Special Tengah Imlek 2023",
  details: {
    fixRate: 3.88,
    target: "Karyawan, Pengusaha",
    maxTenor: 12,
    jaminan: "Ruko, Rukan, Rumah, Apartemen",
    loanToValue: 1,
    komisi: 1,
  },
};

export function ProductCard() {
  return (
    <div className="flex flex-col md:flex-row p-4 border rounded-lg gap-4 transition-all duration-200 hover:shadow-lg hover:border-gray-300">
      <div className="flex flex-col justify-between items-center md:min-w-[200px]">
        <div className="flex items-center">
          <Image
            src={productData.bankLogo}
            alt={productData.bankName}
            width={150}
            height={150}
            className="object-contain w-24 md:w-32 h-32 md:h-48"
          />
        </div>
        <div className="flex items-center gap-1 flex-wrap justify-center">
          <div className="text-sm text-gray-600">Rating:</div>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < productData.rating
                    ? "fill-yellow-400 text-yellow-400"
                    : "fill-gray-200 text-gray-200"
                }`}
              />
            ))}
          </div>
          <div className="hidden md:block h-8 w-[1px] bg-gray-200 mx-2"></div>
          <div className="text-sm text-gray-600 text-center md:text-left mt-2 md:mt-0">
            <span>{productData.usersYearly}</span>
            <div className="text-xs">Users yearly</div>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <h2 className="text-lg font-semibold mb-4 md:mb-10 text-center md:text-left">
          {productData.title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div className="flex items-center gap-2">
            <img src="/icons/fix-rate.svg" alt="fix rate" className="w-5 h-5" />
            <div>
              <div className="text-sm text-gray-600">Fix Rate (Year)</div>
              <div className="font-semibold">{productData.details.fixRate}</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <img src="/icons/target.svg" alt="target" className="w-5 h-5" />
            <div>
              <div className="text-sm text-gray-600">Target</div>
              <div className="font-semibold">{productData.details.target}</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <img
              src="/icons/max-tenor.png"
              alt="max tenor"
              className="w-5 h-5"
            />
            <div>
              <div className="text-sm text-gray-600">Max Tenor</div>
              <div className="font-semibold">
                {productData.details.maxTenor}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <img src="/icons/jaminan.svg" alt="jaminan" className="w-5 h-5" />
            <div>
              <div className="text-sm text-gray-600">Jaminan</div>
              <div className="font-semibold line-clamp-2">
                {productData.details.jaminan}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <img
              src="/icons/loan-to-value.png"
              alt="loan to value"
              className="w-5 h-5"
            />
            <div>
              <div className="text-sm text-gray-600">Loan to Value</div>
              <div className="font-semibold">
                {productData.details.loanToValue}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <img src="/icons/komisi.svg" alt="komisi" className="w-5 h-5" />
            <div>
              <div className="text-sm text-gray-600">Komisi</div>
              <div className="font-semibold">{productData.details.komisi}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center md:min-w-[100px] w-full md:w-auto mt-4 md:mt-0">
        <Link href="/products/detail" className="w-full">
          <Button
            variant="outline"
            className="text-blue-600 border-blue-600 hover:bg-blue-50 w-full"
          >
            Detail
          </Button>
        </Link>
      </div>
    </div>
  );
}
