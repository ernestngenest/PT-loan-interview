"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ChevronLeft, Edit, Trash } from "lucide-react";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function BankProductDetail() {
  return (
    <div className="p-2 sm:p-6">
      <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-4">
        <div className="flex items-center gap-2">
          <Link href="/products" className="flex items-center gap-2">
            <div className="p-2 rounded-full bg-blue-200 hover:bg-blue-300 transition-colors">
              <ChevronLeft className="w-5 h-5 text-white" />
            </div>
            <span className="text-black text-sm sm:text-base">
              Back to Products
            </span>
          </Link>
        </div>
        <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto">
          <Link href="/products/detail/edit" className="flex-1 sm:flex-none">
            <Button
              variant="outline"
              className="flex items-center gap-2 w-full justify-center text-sm"
            >
              <Edit className="w-4 h-4" />
              <span className="hidden sm:inline">Edit Product</span>
              <span className="sm:hidden">Edit</span>
            </Button>
          </Link>
          <Button
            variant="destructive"
            className="flex items-center gap-2 flex-1 sm:flex-none justify-center text-sm"
          >
            <Trash className="w-4 h-4" />
            <span className="hidden sm:inline">Delete Product</span>
            <span className="sm:hidden">Delete</span>
          </Button>
        </div>
      </header>

      <Card className="w-full">
        <CardHeader className="p-4 sm:p-6">
          <CardTitle className="text-lg sm:text-xl">Product</CardTitle>
        </CardHeader>
        <CardContent className="p-4 sm:p-6 space-y-4">
          {[
            { label: "Bank", value: "Mandiri" },
            { label: "Nama Product", value: "Bunga Special Tengah Imlek 2023" },
            { label: "Jaminan", value: "Ruko, Rukan, Rumah, Apartemen" },
            { label: "Target Market", value: "Karyawan, Pengusaha" },
            { label: "Komisi", value: "1 %" },
            { label: "Appraisal", value: "1 %" },
            { label: "Floating", value: "1 %" },
            { label: "Loan to Value", value: "1 %" },
            { label: "Penalty Fee", value: "-" },
            { label: "Interest Rate", value: "3.65 %" },
            { label: "Fix Rate %", value: "3.88 %" },
            { label: "Fix Rate (year)", value: "3" },
            { label: "Max Tenor (year)", value: "12" },
            { label: "URL", value: "null" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4"
            >
              <Label
                htmlFor={`input-${index}`}
                className="sm:w-1/4 text-left sm:text-right text-sm"
              >
                {item.label}
              </Label>
              <Input
                id={`input-${index}`}
                value={item.value}
                readOnly
                className="w-full sm:w-3/4 bg-gray-100 text-sm"
              />
            </div>
          ))}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 pt-2">
            <Label
              htmlFor="keterangan"
              className="w-full sm:w-1/4 text-left sm:text-right text-sm"
            >
              Keterangan
            </Label>
            <Textarea
              id="keterangan"
              value="Mandiri KPR adalah kredit pemilikan rumah (KPR) bank mandiri yang diberikan secara perseorangan untuk membeli rumah tinggal/apartemen/ruko/rukan, baik melalui developer atau tidak."
              readOnly
              className="w-full sm:w-3/4 bg-gray-100 h-24 text-sm"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
