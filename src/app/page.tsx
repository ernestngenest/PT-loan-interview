import React from "react";
import Header from "../components/Dashboard/Header";
import Profile from "@/components/Dashboard/Profile";
import MainContent from "@/components/Dashboard/MainContent";
export const dynamic = "force-dynamic";
export default function page() {
  return (
    <div className="w-full">
      <Header />
      <Profile />
      <MainContent />
      {/* <BankApprovalChart /> */}
    </div>
  );
}
