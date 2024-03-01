"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
const Timer = ({ item }: any) => {
  const date1: any = new Date(item.updatedAt);
  const date2: any = new Date();

  // Calculate the time difference in milliseconds
  const timeDifference = date2 - date1;

  // Convert the time difference to seconds, minutes, or hours as needed
  const secondsDifference = (timeDifference / 1000).toString();
  const intseconds = parseInt(secondsDifference);

  const [timer, setTimer] = useState(10); // Initial timer value in seconds

  useEffect(() => {
    let interval: any;

    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer: any) => prevTimer - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timer]);
  return timer > 0 ? (
    <Button variant="danger" key={item.number} className=" px-10 py-2">
      {`${Math.floor(timer / 60) < 10 ? "0" : ""}${Math.floor(timer / 60)}:${
        timer % 60 < 10 ? "0" : ""
      }${timer % 60}`}
    </Button>
  ) : (
    <Button key={item.number} className=" px-10 py-2">
      {item.number}
    </Button>
  );
};

export default Timer;
