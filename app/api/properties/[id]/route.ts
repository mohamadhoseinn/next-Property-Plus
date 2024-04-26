import connectDB from "@/config/database";
import Property from "@/models/Property";

// GET api/properties/:id
export const GET = async (request, { params }: { params: { id: string } }) => {
  try {
    await connectDB();

    const property = await Property.findById(params?.id);

    if (!property) return new Response("Proerty Not Found", { status: 404 });

    return new Response(JSON.stringify(property), { status: 200 });
  } catch (error) {
    return new Response("Somting Went Wrong", {
      status: 500,
    });
  }
};
