"use client";

import { useState, useEffect } from "react";

export default function CurrentDate() {
  const [date, setDate] = useState("");

  useEffect(() => {
    const updateDate = () => {
      const now = new Date();
      const dateString = now.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
      setDate(dateString);
    };

    updateDate();
    const interval = setInterval(updateDate, 60000); // প্রতি মিনিটে চেক করে (দিন বদলালে আপডেট)

    return () => clearInterval(interval);
  }, []);

  return <div className="ml-1">{date}</div>;
}
