"use client";

import { QrScanner } from "@yudiel/react-qr-scanner";
import { useRouter } from "next/navigation";

const ScannerPage = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <QrScanner
        containerStyle={{ backgroundColor: "black" }}
        videoStyle={{ backgroundColor: "black" }}
        onDecode={(result) => {
          console.log(result);
          router.push("/");
          return;
        }}
        onError={(error) => console.log(error?.message)}
        audio={false}
      />
    </div>
  );
};

export default ScannerPage;
