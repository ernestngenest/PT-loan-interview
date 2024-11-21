"use client";

import * as React from "react";
import {
  ChevronDown,
  CreditCard,
  Home,
  MessageCircle,
  Phone,
  ShoppingBag,
  Building2,
  HelpCircle,
  GitBranch,
  BarChart2,
  MessageSquare,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function SideBar() {
  const [activeItem, setActiveItem] = React.useState<string | null>(null);
  const [isOpen, setIsOpen] = React.useState(false);

  const menuItems = [
    { name: "Dashboard", icon: Home, href: "/" },
    { name: "Contact", icon: Phone, href: "/contact" },
    { name: "Loan", icon: CreditCard, href: "/loan" },
    {
      name: "Product",
      icon: ShoppingBag,
      hasDropdown: true,
      dropdownItems: [
        { name: "Bank Product", href: "/products" },
        { name: "Product", href: "/products" },
        { name: "Category Product", href: "/products" },
      ],
    },
    { name: "Bank", icon: Building2, href: "/bank" },
    { name: "Credit Scoring", icon: BarChart2, href: "/credit-scoring" },
    { name: "FAQ's", icon: HelpCircle, href: "/faqs" },
    { name: "Pipeline", icon: GitBranch, href: "/pipeline" },
    {
      name: "Pipeline Developer",
      icon: GitBranch,
      href: "/pipeline-developer",
    },
    { name: "Marketing Tools", icon: MessageCircle, href: "/marketing-tools" },
    {
      name: "Whatsapp",
      icon: MessageSquare,
      hasDropdown: true,
      dropdownItems: [
        { name: "Chat", href: "/whatsapp/chat" },
        { name: "Status", href: "/whatsapp/status" },
        { name: "Calls", href: "/whatsapp/calls" },
      ],
    },
  ];

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 rounded-md md:hidden"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed top-0 left-0 h-screen w-64 flex-col border-r bg-white z-40 transition-transform duration-300 ease-in-out",
          "md:translate-x-0 md:relative",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="pt-0 p-6">
          <div className="mb-8 flex justify-center">
            <img src="/logo.png" alt="loan" />
          </div>
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <React.Fragment key={item.name}>
                {item.hasDropdown ? (
                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <Button
                        variant="ghost"
                        className={cn(
                          "w-full justify-between font-normal",
                          activeItem === item.name && "bg-blue-500 text-white"
                        )}
                        onClick={() => setActiveItem(item.name)}
                      >
                        <span className="flex items-center">
                          <item.icon className="mr-3 h-4 w-4" />
                          {item.name}
                        </span>
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pl-9 pt-1">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <Button
                          key={dropdownItem.name}
                          variant="ghost"
                          className="w-full justify-start font-normal"
                          asChild
                          onClick={() => setIsOpen(false)}
                        >
                          <Link href={dropdownItem.href || "#"}>
                            {dropdownItem.name}
                          </Link>
                        </Button>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                ) : (
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-start font-normal",
                      activeItem === item.name && "bg-blue-500 text-white"
                    )}
                    onClick={() => {
                      setActiveItem(item.name);
                      setIsOpen(false);
                    }}
                    asChild
                  >
                    <Link href={item.href || "#"} className="flex items-center">
                      <item.icon className="mr-3 h-4 w-4" />
                      {item.name}
                    </Link>
                  </Button>
                )}
              </React.Fragment>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
