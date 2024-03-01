import { db } from "@/lib/db";

export const getWashingMachines = async () => {
  try {
    const washing = await db.machines.findMany({ where: { type: "WASHING" } });
    const sortedWashing = washing.sort((a, b) => a.number - b.number);

    return sortedWashing;
  } catch {
    return null;
  }
};

export const getDryingMachines = async () => {
  try {
    const drying = await db.machines.findMany({ where: { type: "DRYING" } });

    return drying;
  } catch {
    return null;
  }
};
