"use client";

import { Button } from "@/components/ui/button";

export default function Home() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const handleQr = () => {
    console.log("QR Kodu Okut");
  };
  return (
    <main className="overflow-hidden flex flex-col items-center gap-10">
      <div className=" py-5">
        <h1 className="text-center pb-3 text-2xl">Camasir Makineleri</h1>
        <div className="flex gap-4 flex-wrap items-center justify-center">
          {arr.map((i) => (
            <Button key={i} className=" px-10 py-2">
              {i}
            </Button>
          ))}
        </div>
      </div>
      <div className=" py-5">
        <h1 className="text-center py-4 text-2xl">Kurutma Makineleri</h1>
        <div className="flex gap-4 flex-wrap items-center justify-center">
          {arr.map((i) => (
            <Button key={i} className=" px-10 py-2">
              {i}
            </Button>
          ))}
        </div>
      </div>

      <Button onClick={handleQr} className="bg-blue-400 w-40 ">
        Qr Kodu Okut
      </Button>
    </main>
  );
}
