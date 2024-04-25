import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

interface PropertyHeaderImage {
  image: string;
}

function PropertyHeaderImage({ image }: PropertyHeaderImage) {
  console.log({ image });

  return (
    <>
      <section>
        <div className="container-xl m-auto">
          <div className="grid grid-cols-1">
            <Image
              src={`/images/properties/${image}`}
              alt=""
              className="object-cover h-[400px] w-full"
              width={0}
              height={0}
              sizes="100vh"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default PropertyHeaderImage;
