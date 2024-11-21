import React from "react";
import Header from "../components/Dashboard/Header";
import Profile from "@/components/Dashboard/Profile";
import MainContent from "@/components/Dashboard/MainContent";

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
