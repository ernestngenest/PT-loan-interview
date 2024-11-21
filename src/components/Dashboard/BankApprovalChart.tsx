"use client";
import React from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import { Card, CardContent } from "@/components/ui/card";

const Chart = dynamic(
  () => import("react-apexcharts").then((mod) => mod.default),
  { ssr: false }
);

interface LegendFormatterOptions {
  seriesIndex: number;
  w: {
    globals: {
      series: number[];
    };
  };
}

const BankApprovalChart: React.FC = () => {
  const chartOptions: ApexOptions = {
    chart: {
      type: "donut",
      background: "transparent",
      fontFamily: "inherit",
    },
    labels: ["BRI", "Artha Graha", "BTN", "Mandiri", "KEB Hana Bank"],
    colors: ["#5D4E75", "#40E0D0", "#87CEEB", "#008080", "#6A5ACD"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: true,
      position: "bottom",
      fontSize: "14px",
      fontFamily: "inherit",
      offsetY: 0,
      markers: {
        strokeWidth: 0,
        size: 12,
        offsetY: 0,
      },
      itemMargin: {
        horizontal: 15,
        vertical: 5,
      },
      formatter: function (seriesName: string, opts: LegendFormatterOptions) {
        return `${seriesName} - ${opts.w.globals.series[opts.seriesIndex]}%`;
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: "75%",
          labels: {
            show: false,
          },
        },
      },
    },
    title: {
      text: "Top 5 Bank Approval Tertinggi",
      align: "center",
      style: {
        fontSize: "16px",
        fontWeight: "600",
        fontFamily: "inherit",
        color: "#1a1a1a",
      },
      margin: 20,
    },
    stroke: {
      width: 0,
    },
    tooltip: {
      enabled: true,
      y: {
        formatter: function (value: number): string {
          return `${value}%`;
        },
      },
      custom: function ({
        series,
        seriesIndex,
        w,
      }: {
        series: number[];
        seriesIndex: number;
        w: { config: { labels: string[] } };
      }): string {
        return `<div class="custom-tooltip">
          <span>${w.config.labels[seriesIndex]}: ${series[seriesIndex]}%</span>
        </div>`;
      },
      style: {
        fontSize: "14px",
        fontFamily: "inherit",
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            height: 300,
          },
          legend: {
            position: "bottom",
            offsetY: 0,
            height: 100,
          },
        },
      },
    ],
  };

  const series: number[] = [30, 25, 20, 15, 10];

  return (
    <div className="lg:col-span-2 flex justify-center bg-gray-100 w-full">
      <Card className="w-full">
        <CardContent className="p-2 sm:p-6">
          <div className="space-y-4 flex flex-col items-center">
            <div className="relative w-full max-w-[500px] h-[300px] sm:h-[400px] flex justify-center items-center">
              <Chart
                options={chartOptions}
                series={series}
                type="donut"
                height="100%"
                width="100%"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BankApprovalChart;
