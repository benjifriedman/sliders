"use client";

import { Slider } from "@/components/ui/slider";

export default function SliderColumn({
  width,
  order,
}: {
  width: string;
  order: number;
}) {
  const multiplier = order % 2 === 0 ? -1 : 1;

  // Generate array of values from 0 to 71.2 with step of 0.4
  const values = Array.from(
    { length: 80 }, // (71.2 / 0.4) + 1 = 179 elements
    (_, i) => i * 0.4
  );

  return (
    <div style={{ width: width }}>
      {values.map((value) => (
        <Slider
          key={value}
          defaultValue={[50 + multiplier * 50 * Math.sin(value)]}
          max={100}
          step={1}
        />
      ))}
    </div>
  );
}
