"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Timer from "./timer";
import { useState, useEffect } from "react";

export default function Home({ washingArr }: any) {
  const [washingArray, setWashingArray] = useState([]);

  useEffect(() => {
    setWashingArray(washingArr);
    console.log(washingArr.length);
  }, [washingArr]);

  return (
    <main className="overflow-hidden flex flex-col items-center gap-10 ">
      <div className=" py-5 ">
        <h1 className="text-center pb-3 text-2xl">Camasir Makineleri</h1>
        <div className="flex gap-4 flex-wrap items-center justify-center">
          {washingArray?.map((item: any) => {
            const date1: any = new Date(item.updatedAt);
            const date2: any = new Date();

            // Calculate the time difference in milliseconds
            const timeDifference = date2 - date1;

            // Convert the time difference to seconds, minutes, or hours as needed
            const secondsDifference = (timeDifference / 1000).toString();
            const intseconds = parseInt(secondsDifference);

            return item.isEmpty ? (
              <Button key={item.number} className=" px-10 py-2">
                {item.number}
              </Button>
            ) : (
              <div key={item.id}>
                <Timer item={item} time={90 - intseconds} />
              </div>
            );
          })}
        </div>
      </div>

      <Button className="bg-blue-400 w-40 ">
        <Link href="/scanner">Qr Kodu Okut</Link>
      </Button>
    </main>
  );
}
