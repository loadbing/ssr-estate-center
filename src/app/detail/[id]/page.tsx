import { getPropertyById } from "@/app/server/getPropertyById/getPropertyById";
import PropertyDetail from "./propertyDetail";
import { cookies } from "next/headers";

type DetailPageProps = {
  params: Promise<{ id: string }>
}

const Detail = async ({ params }: DetailPageProps) => {
  const { id } = await params;
  const property = await getPropertyById(id)
  const cookieStore = await cookies()
  const isAdmin = !!cookieStore.get('user')

  return (
    <section id="detail">
      <PropertyDetail property={property} isAdmin={isAdmin} />
    </section>
  );
}

export default Detail
