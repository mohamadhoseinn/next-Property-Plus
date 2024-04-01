"use client";
import {
  useRouter,
  usePathname,
  useSearchParams,
  useParams,
} from "next/navigation";
function PropertyPage() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const params = useParams();

  console.log({ cc: searchParams });

  return (
    <button onClick={() => router.push("/properties")}>
      pathName: {pathname}
      {/* pathName: /properties/09 */}
      <br />
      searchParams: {name}
      {/* searchParams: amir */}
      <br />
      params: {params?.id}
      {/*      params: {params?.id}*/}
    </button>
  );
}

export default PropertyPage;
