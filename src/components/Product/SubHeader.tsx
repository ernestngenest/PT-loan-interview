import React from "react";
import { HomeIcon } from "../icons/HomeIcon";
import { UserIcon } from "../icons/UserIcon";
import { CreditCardIcon } from "../icons/CreditCardIcon";
import { PiggyBankIcon } from "../icons/PiggyBankIcon";
import { BuildingIcon } from "../icons/BuildingIcon";

export default function SubHeader() {
  return (
    <>
      <div className="w-full flex justify-center border-b border-gray-300 mb-4">
        <button className="text-blue-500 font-semibold px-8 py-3 border-b-2 border-blue-500">
          Bank
        </button>
        <button className="text-gray-700 font-semibold px-8 py-3">
          Developer
        </button>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-6 px-6">
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow">
          <HomeIcon />
          <span className="text-gray-700">KPR dan Multiguna</span>
        </div>
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow">
          <UserIcon />
          <span className="text-gray-700">Refinancing</span>
        </div>
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow">
          <CreditCardIcon />
          <span className="text-gray-700 text-center">
            Kredit Modal Usaha dan Investasi
          </span>
        </div>
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow">
          <PiggyBankIcon />
          <span className="text-gray-700">Deposito</span>
        </div>
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow">
          <BuildingIcon />
          <span className="text-gray-700 text-center">
            Take Over dan Bridging Loan
          </span>
        </div>
      </div>
    </>
  );
}
