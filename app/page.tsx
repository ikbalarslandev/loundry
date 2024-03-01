import Home from "@/components/home";
import { getWashingMachines, getDryingMachines } from "@/data/getAll";

export default async function HomePage() {
  const washingArray = await getWashingMachines();

  return <Home washingArr={washingArray} />;
}
