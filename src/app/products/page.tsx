import { Header } from "@/components/Product/Header";
import { ProductCard } from "@/components/Product/ProductCard";
import { SearchFilter } from "@/components/Product/SearchFillter";
import SubHeader from "@/components/Product/SubHeader";
export const dynamic = "force-dynamic";
export default function ProductListingPage() {
  const products = [
    {
      bankLogo: "/placeholder.svg?height=50&width=50",
      productName: "Mandiri Bunga Special Tengah Imlek 2023",
      rating: 4,
      interestRate: 3.8,
      loanTerm: 20,
      target: "Karyawan, Pengusaha",
    },
    // Add more products as needed
  ];

  return (
    <div className="w-full">
      <Header />
      <SubHeader />
      <SearchFilter />
      <div className="p-4">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
}
