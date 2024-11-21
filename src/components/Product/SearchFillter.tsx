"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SearchFilter() {
  return (
    <div className="w-full px-4 sm:px-6 py-4 bg-white">
      <div className="flex flex-col sm:flex-row gap-4 w-full">
        <div className="relative w-full sm:max-w-xl">
          <Input
            placeholder="Cari berdasarkan nama"
            className="w-full bg-white pl-10"
          />
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <Select>
          <SelectTrigger className="w-full min-w-[280px] max-w-lg bg-white">
            <SelectValue placeholder="Kredit Pemilikan..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="kpr">Kredit Pemilikan Rumah</SelectItem>
            <SelectItem value="refinancing">Refinancing</SelectItem>
            <SelectItem value="deposito">Deposito</SelectItem>
          </SelectContent>
        </Select>
        <div className="flex items-center gap-4 shrink-0">
          <Button variant="outline" className="flex items-center gap-2">
            <img src="/icons/Sorting.svg" alt="sort" className="w-5 h-5" />
            <span>Sort</span>
          </Button>
          <Button className="bg-[#00A3FF] hover:bg-[#00A3FF]/90">
            <span className="mr-2">+</span>
            Tambah Product
          </Button>
        </div>
      </div>
    </div>
  );
}
