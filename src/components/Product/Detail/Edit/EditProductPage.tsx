"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function EditProductPage() {
  const [formData, setFormData] = useState({
    bank: "Mandiri",
    productType: "Kredit Pemilikan Rumah Secondary (KPR Secondary)",
    promotional: false,
    collateral: {
      ruko: true,
      rumah: true,
      kendaraan: false,
      slipGaji: false,
      rukan: true,
      apartemen: true,
      sertifikat: false,
    },
    targetMarket: {
      pengusaha: true,
      profesional: false,
      asn: false,
      tni: false,
      karyawan: true,
      milenial: false,
      polri: false,
      lainnya: false,
    },
    loanToValue: 1,
    penaltyFee: 0,
    interestRate: 3.65,
    fixRate: 3.88,
    fixRateYear: 3,
    maxTenor: 12,
    komisi: 1,
    appraisal: 1,
    floating: 1,
    description:
      "Mandiri KPR adalah kredit pemilikan rumah (KPR) bank mandiri yang diberikan secara perseorangan untuk membeli rumah tinggal/apartemen/ruko/rukan, baik melalui developer atau tidak.",
    url: "null",
  });

  const handleIncrement = (key: string, step: number = 1) => {
    setFormData((prev) => ({
      ...prev,
      [key]: Number((prev[key] + step).toFixed(2)),
    }));
  };

  const handleDecrement = (key: string, step: number = 1) => {
    setFormData((prev) => ({
      ...prev,
      [key]: Number((prev[key] - step).toFixed(2)),
    }));
  };

  return (
    <div className="p-6">
      <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-4">
        <div className="flex items-center gap-2">
          <Link href="/products/detail" className="flex items-center gap-2">
            <div className="p-2 rounded-full bg-blue-200 hover:bg-blue-300 transition-colors">
              <ChevronLeft className="w-5 h-5 text-white" />
            </div>
            <span className="text-black text-sm sm:text-base">
              Back to Products Detail
            </span>
          </Link>
        </div>
      </header>
      <Card>
        <CardHeader>
          <CardTitle>Edit Product</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Select
              value={formData.bank}
              onValueChange={(value) =>
                setFormData({ ...formData, bank: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Bank" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Mandiri">Mandiri</SelectItem>
                {/* bisa tambah value disini */}
              </SelectContent>
            </Select>

            <Select
              value={formData.productType}
              onValueChange={(value) =>
                setFormData({ ...formData, productType: value })
              }
            >
              <div className="mt-4">
                <SelectTrigger>
                  <SelectValue placeholder="Select Product Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Kredit Pemilikan Rumah Secondary (KPR Secondary)">
                    Kredit Pemilikan Rumah Secondary (KPR Secondary)
                  </SelectItem>
                  {/* bisa tambah product type disini */}
                </SelectContent>
              </div>
            </Select>
            <div className="flex items-center mt-4">
              <Checkbox
                checked={formData.promotional}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, promotional: checked })
                }
                id="promotional"
                className="data-[state=checked]:bg-blue-200 data-[state=checked]:border-blue-200"
              />
              <label htmlFor="promotional" className="ml-2">
                Promotional Product
              </label>
            </div>
            <Calendar className="mt-4" />
            <div className="mt-4">
              <h3 className="font-semibold">Jaminan</h3>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {Object.entries(formData.collateral).map(([key, value]) => (
                  <div key={key} className="flex items-center">
                    <Checkbox
                      id={`collateral-${key}`}
                      checked={value}
                      className="data-[state=checked]:bg-blue-200 data-[state=checked]:border-blue-200"
                      onCheckedChange={(checked) =>
                        setFormData({
                          ...formData,
                          collateral: {
                            ...formData.collateral,
                            [key]: checked,
                          },
                        })
                      }
                    />
                    <label
                      htmlFor={`collateral-${key}`}
                      className="ml-2 capitalize"
                    >
                      {key}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold">Target Market</h3>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {Object.entries(formData.targetMarket).map(([key, value]) => (
                  <div key={key} className="flex items-center">
                    <Checkbox
                      id={`target-market-${key}`}
                      checked={value}
                      className="data-[state=checked]:bg-blue-200 data-[state=checked]:border-blue-200"
                      onCheckedChange={(checked) =>
                        setFormData({
                          ...formData,
                          targetMarket: {
                            ...formData.targetMarket,
                            [key]: checked,
                          },
                        })
                      }
                    />
                    <label
                      htmlFor={`target-market-${key}`}
                      className="ml-2 capitalize"
                    >
                      {key}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            {[
              { label: "Loan to Value", key: "loanToValue", step: 0.01 },
              { label: "Penalty Fee", key: "penaltyFee", step: 0.01 },
              { label: "Interest Rate", key: "interestRate", step: 0.01 },
              { label: "Fix Rate", key: "fixRate", step: 0.01 },
              { label: "Fix Rate (Year)", key: "fixRateYear", step: 1 },
              { label: "Max Tenor (Year)", key: "maxTenor", step: 1 },
              { label: "Komisi", key: "komisi", step: 0.01 },
              { label: "Appraisal", key: "appraisal", step: 0.01 },
              { label: "Floating", key: "floating", step: 0.01 },
            ].map((item) => (
              <div key={item.key} className="flex items-center mt-4">
                <Button
                  variant="outline"
                  className="mr-2 hover:bg-blue-200 hover:text-blue-800 border-blue-200"
                  onClick={() => handleDecrement(item.key, item.step)}
                  aria-label={`Decrease ${item.label}`}
                >
                  -
                </Button>
                <Input
                  type="text"
                  value={formData[item.key]}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [item.key]: parseFloat(e.target.value) || 0,
                    })
                  }
                  className="w-16 text-center"
                />
                <Button
                  variant="outline"
                  className="ml-2 hover:bg-blue-200 hover:text-blue-800 border-blue-200"
                  onClick={() => handleIncrement(item.key, item.step)}
                  aria-label={`Increase ${item.label}`}
                >
                  +
                </Button>
                <span className="ml-2">{item.label}</span>
              </div>
            ))}
            <div className="mt-4">
              <h3 className="font-semibold">Keterangan</h3>
              <Textarea
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="mt-2"
              />
            </div>
            <div className="mt-4">
              <h3 className="font-semibold">URL</h3>
              <Input
                type="text"
                value={formData.url}
                onChange={(e) =>
                  setFormData({ ...formData, url: e.target.value })
                }
                className="mt-2"
              />
            </div>
          </div>
        </CardContent>
        <div className="flex justify-end p-4">
          <Button>UPDATE</Button>
        </div>
      </Card>
    </div>
  );
}
