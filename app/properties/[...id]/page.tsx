"use client";
import { useState, useEffect, useCallback } from "react";
import { useParams } from "next/navigation";
import { fetchProperty } from "@/utils/requests";
import PropertyHeaderImage from "@/components/PropertyHeaderImage";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import PropertyDetails from "@/components/PropertyDetailes";

type Location = {
  city: string;
  state: string;
  street: string;
};

type Rates = {
  weekly: number;
  monthly: number;
  nightly: number;
};

type Property = {
  images: string[];
  type: string;
  name: string;
  location: Location;
  rates: Rates;
  beds: number;
  baths: number;
  square_feet: number;
  description: string;
};

function PropertyPage() {
  const id = useParams()?.id?.[0];

  const [property, setProperty] = useState<null | Property>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchPropertyData = useCallback(async () => {
    if (!id) return;
    try {
      const propertyData = await fetchProperty(id);
      setProperty(propertyData);
    } catch (error) {
      console.error("Error fetcing property: ", error);
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    if (property === null) {
      fetchPropertyData();
    }
  }, [fetchPropertyData, property]);

  if (!isLoading && !property) {
    return (
      <h1 className="text-center text-2xl font-bold mt-10">
        Propery Not Found
      </h1>
    );
  }

  return (
    <>
      {!isLoading && property && (
        <>
          <PropertyHeaderImage image={property?.images[0]} />

          {/* <!-- Go Back --> */}
          <section>
            <div className="container m-auto py-6 px-6">
              <Link
                href="/properties"
                className="text-blue-500 hover:text-blue-600 flex items-center"
              >
                <FaArrowLeft className="fas fa-arrow-left mr-2"></FaArrowLeft>{" "}
                Back to Properties
              </Link>
            </div>
          </section>
          <PropertyDetails
            type={property.type}
            name={property.name}
            location={property.location}
            rates={property.rates}
            beds={property.beds}
            baths={property.baths}
            square_feet={property.square_feet}
            description={property.description}
          />
        </>
      )}
    </>
  );
}

export default PropertyPage;
