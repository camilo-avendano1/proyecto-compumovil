import { ICreateEventForm } from "@/types/create-event-form.type";
import { FormProvider, useForm } from "react-hook-form";

interface Props {
  children: React.ReactNode;
}

const CreateEventFormProvider = ({ children }: Props) => {
  const defaultValue: ICreateEventForm = {
    name: "",
    description: "",
    date: "",
    hour: "",
    place: "",
  };

  const methods = useForm({ defaultValues: defaultValue });
  return <FormProvider {...methods}>{children}</FormProvider>;
};

export default CreateEventFormProvider;
