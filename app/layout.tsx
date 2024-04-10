import { Metadata } from "next";

import Navbar from "@/components/Navbar";

import "@/assets/styles/globals.css";

export const metadata: Metadata = {
  title: "PropertyPulse | Find The Prefect Rental",
  description: "Find your dream rental property",
  keywords: "rental, find rentals, find properties",
};

const MainLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
