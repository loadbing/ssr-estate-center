import { getPropertyById } from "@/app/server/getPropertyById/getPropertyById";
import PropertyDetail from "./propertyDetail";

type DetailPageProps = {
  params: Promise<{ id: string }>
}

const Detail = async ({ params }: DetailPageProps) => {
  const { id } = await params;
  const property = await getPropertyById(id)

  return (
    <section id="detail">
      <PropertyDetail property={property} />
    </section>
  );
}

export default Detail
