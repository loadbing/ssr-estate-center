import { createProperty } from "@/app/actions/createProperty/createProperty";
import PropertiesForm from "@/components/propertiesForm";

const Create = async () => {
  return (
    <section id="create">
      <PropertiesForm labelButton="Crear" sendData={createProperty}/>
    </section>
  );
}

export default Create
