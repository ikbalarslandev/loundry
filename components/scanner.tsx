"use client";

import { QrScanner } from "@yudiel/react-qr-scanner";
import { useRouter } from "next/navigation";
import { UpdateMachineAvailability } from "@/actions/updateEmpty";

const Scanner = () => {
  const router = useRouter();
  if (typeof window === "undefined") return null;

  return (
    <div className="flex flex-col h-screen items-center justify-center ">
      <QrScanner
        containerStyle={{ backgroundColor: "black" }}
        videoStyle={{ backgroundColor: "black" }}
        onDecode={(result) => {
          console.log(result);
          UpdateMachineAvailability(result);
          router.push("/");
          return;
        }}
        onError={(error) => console.log(error?.message)}
        audio={false}
        constraints={{
          facingMode: "environment",
        }}
      />
    </div>
  );
};

export default Scanner;
