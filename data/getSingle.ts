import { db } from "@/lib/db";

export const getMachineByName = async (name: string) => {
  try {
    const machine = await db.machines.findUnique({ where: { name } });

    return machine;
  } catch {
    return null;
  }
};
