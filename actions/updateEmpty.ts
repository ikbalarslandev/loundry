"use server";

import { db } from "@/lib/db";

export const UpdateMachineAvailability = async (title: string) => {
  try {
    await db.machines.update({
      where: {
        name: title,
      },
      data: {
        isEmpty: false,
      },
    });

    setTimeout(async () => {
      await db.machines.update({
        where: {
          name: title,
        },
        data: {
          isEmpty: true,
        },
      });
    }, 2000); // 20 seconds in milliseconds
  } catch (error) {
    return { error: "Something went wrong!" };
  }
};
