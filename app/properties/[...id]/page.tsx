"use client";
import { useState, useEffect, useCallback } from "react";
import { useParams } from "next/navigation";
import { fetchProperty } from "@/utils/requests";

function PropertyPage() {
  const id = useParams()?.id?.[0];

  const [property, setProperty] = useState<null | Object>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchPropertyData = useCallback(async () => {
    if (!id) return;
    try {
      const propertyData = await fetchProperty(id);
      setProperty(propertyData);
    } catch (error) {
      console.error("Error fetcing property: ", error);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    if (property === null) {
      fetchPropertyData();
    }
  }, [fetchPropertyData, property]);

  return <div>Hello Property</div>;
}

export default PropertyPage;
