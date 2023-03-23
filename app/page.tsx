import { Inter } from "@next/font/google";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Header from "./components/Header";
import RestaurantCard from "./components/RestorantsCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <main>
          <Header />
          <RestaurantCard />
        </main>
      </main>
    </main>
  );
}
