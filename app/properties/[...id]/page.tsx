"use client";
import { useState, useEffect, useCallback } from "react";
import { useParams } from "next/navigation";
import { fetchProperty } from "@/utils/requests";
import PropertyHeaderImage from "@/components/PropertyHeaderImage";

type Property = {
  images: string[];
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
        <PropertyHeaderImage image={property?.images[0]} />
      )}
    </>
  );
}

export default PropertyPage;
