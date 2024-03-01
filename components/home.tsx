"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home({ washingArray }: any) {
  return (
    <main className="overflow-hidden flex flex-col items-center gap-10 ">
      <div className=" py-5 ">
        <h1 className="text-center pb-3 text-2xl">Camasir Makineleri</h1>
        <div className="flex gap-4 flex-wrap items-center justify-center">
          {washingArray?.map((item: any) =>
            item.isEmpty ? (
              <Button key={item.number} className=" px-10 py-2">
                {item.number}
              </Button>
            ) : (
              <Button
                variant="danger"
                key={item.number}
                className=" px-10 py-2"
              >
                25:00
              </Button>
            )
          )}
        </div>
      </div>

      <Button className="bg-blue-400 w-40 ">
        <Link href="/scanner">Qr Kodu Okut</Link>
      </Button>
    </main>
  );
}
