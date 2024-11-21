"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  CreditCard,
  Building2,
  Package,
  BanknoteIcon as Bank,
} from "lucide-react";
import dynamic from "next/dynamic";
import BankApprovalChart from "./BankApprovalChart";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { ApexOptions } from "apexcharts";

export default function MainContent() {
  const metrics = [
    { title: "CONTACT", value: "51", icon: CreditCard, color: "text-blue-500" },
    { title: "LOAN", value: "56", icon: Building2, color: "text-blue-500" },
    { title: "PRODUCT", value: "80", icon: Package, color: "text-blue-500" },
    { title: "BANK", value: "30", icon: Bank, color: "text-blue-500" },
  ];

  const chartOptions: ApexOptions = {
    chart: {
      type: "radialBar" as const,
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "70%",
        },
        track: {
          background: "#e5e7eb",
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            fontSize: "24px",
            show: true,
            formatter: (val: number) => `${val}%`,
          },
        },
      },
    },
    colors: ["#3b82f6"],
    stroke: {
      lineCap: "round",
    },
  };

  const notifications = [
    {
      time: "2 hrs",
      title: "admin_branch has updated",
      subtitle: "Harry Handoko - Contact | MYCRM",
    },
    {
      time: "2 hrs",
      title: "admin_branch has updated",
      subtitle: "Harry Handoko - Application | MYCRM",
    },
    {
      time: "4 hrs",
      title: "admin_branch has updated",
      subtitle: "Harry Handoko - Application | MYCRM",
    },
    {
      time: "4 hrs",
      title: "admin_branch has updated",
      subtitle: "Harry Handoko - Contact | MYCRM",
    },
  ];

  return (
    <div className="p-6 space-y-6 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <Card key={index}>
            <CardContent className="flex items-center p-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-50">
                <metric.icon className={`w-6 h-6 ${metric.color}`} />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">
                  {metric.title}
                </p>
                <p className="text-2xl font-bold text-blue-500">
                  {metric.value}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h3 className="font-semibold text-center">
                    PINJAMAN DISETUJUI
                  </h3>
                  <Chart
                    options={chartOptions}
                    series={[40]}
                    type="radialBar"
                    height={300}
                  />
                  <p className="text-sm text-center text-muted-foreground">
                    2/5 Pinjaman telah disetujui
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-center">TARGET</h3>
                  <Chart
                    options={chartOptions}
                    series={[280]}
                    type="radialBar"
                    height={300}
                  />
                  <p className="text-sm text-center text-muted-foreground">
                    Rp14.000.000.000,00 / Rp5.000.000.000
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="lg:col-span-1">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">NOTIFICATION</h3>
            </div>
            <div className="space-y-4">
              {notifications.map((notification, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="min-w-[48px] text-sm text-muted-foreground">
                    {notification.time}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                      <p className="text-sm font-medium">
                        {notification.title}
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground ml-4">
                      {notification.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <div className="lg:col-span-2">
          <BankApprovalChart />
        </div>
      </div>
    </div>
  );
}
