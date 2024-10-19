import { IEvent } from "@/types/event.type";

export const getEvents = () => events;

const events: IEvent[] = [
  {
    id: 1,
    eventName: "Convención otako",
    date: "24-12-24",
    hour: "16:00",
    place: "Bloque 19 UdeA",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, ullam.",
  },
  {
    id: 2,
    eventName: "Review de Fábrica Escuela",
    date: "14-10-24",
    hour: "12:00",
    place: "Laboratorio Integrado de Sistemas",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, ullam.",
  },
  {
    id: 3,
    eventName: "Paseíto insano",
    date: "19-11-24",
    hour: "6:00",
    place: "CC Monterrey",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, ullam.",
  },
];
