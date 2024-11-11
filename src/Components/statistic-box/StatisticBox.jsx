import React, { useEffect, useState } from "react";

export default function StatisticBox() {
  const dbStatisticBox = [{ id: 1, number: 2534, title: "Project Complected" }];
  const [num, setNum] = useState(1);

  useEffect(() => {
    if (num < 50) {
      const test = setInterval(() => {
        setNum((e) => e + 1);
      }, 1  );

      return () => clearInterval(test);
    }
  }, [num]);

  return (
    <div>
      <span>{num}</span>
      <span></span>
    </div>
  );
}
