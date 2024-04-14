import PropertyAddPage from "@/components/PropertyCard";

const fetchProperties = async () => {
  try {
    const response = await fetch(
      ` ${process.env.NEXT_PUBLIC_API_DOMAIN}/properties`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    return response.json();
  } catch (error) {
    console.log(error);
  }
};

async function Properties() {
  const properties = await fetchProperties();
  //sort properties by data
  properties?.sort((a: { createdAt: string }, b: { createdAt: string }) => {
    return new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf();
  });

  properties.sort;
  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        {!properties.length ? (
          <p>No properties found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties?.map((property: { _id: string }) => {
              return <PropertyAddPage key={property._id} {...property} />;
            })}
          </div>
        )}
      </div>
    </section>
  );
}

export default Properties;
