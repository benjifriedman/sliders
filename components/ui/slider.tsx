"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, defaultValue = [50], ...props }, ref) => {
  const [value, setValue] = React.useState(defaultValue);

  const handleMouseMove = (event: React.MouseEvent) => {
    const track = event.currentTarget;
    const rect = track.getBoundingClientRect();
    const newValue = Math.min(
      Math.max(((event.clientX - rect.left) / rect.width) * 100, 0),
      100
    );
    setValue([newValue]);
  };

  // const colorArray = [
  //   "bg-red-500",
  //   "bg-orange-500",
  //   "bg-yellow-500",
  //   "bg-green-500",
  //   "bg-blue-500",
  //   "bg-indigo-500",
  //   "bg-purple-500",
  //   "bg-pink-500",
  //   "bg-rose-500",
  //   "bg-teal-500",
  //   "bg-cyan-500",
  //   "bg-emerald-500",
  //   "bg-lime-500",
  //   "bg-amber-500",
  //   "bg-orange-500",
  //   "bg-red-500",
  //   "bg-pink-500",
  //   "bg-purple-500",
  //   "bg-indigo-500",
  //   "bg-blue-500",
  //   "bg-teal-500",
  //   "bg-cyan-500",
  //   "bg-emerald-500",
  //   "bg-lime-500",
  //   "bg-amber-500",
  //   "bg-yellow-500",
  // ];

  const colorArray = [
    // Warm colors
    "bg-red-500",
    // Cool colors
    "bg-blue-500",
    // Warm colors
    "bg-orange-500",
    // Cool colors
    "bg-teal-500",
    // Warm colors
    "bg-yellow-500",
    // Cool colors
    "bg-indigo-500",
    // Warm colors
    "bg-rose-500",
    // Cool colors
    "bg-cyan-500",
    // Earth tones
    "bg-emerald-500",
    // Vibrant colors
    "bg-purple-500",
    // Earth tones
    "bg-lime-500",
    // Vibrant colors
    "bg-pink-500",
    // Earth tones
    "bg-amber-500",
  ];

  // const color1 = colorArray[Math.floor(Math.random() * colorArray.length)];
  // const color2 = colorArray[Math.floor(Math.random() * colorArray.length)];

  // const valueIndex = Math.floor(defaultValue[0] / 10) % colorArray.length;
  // const color1 = colorArray[valueIndex];
  // const color2 = colorArray[(valueIndex + 1) % colorArray.length];

  // New color selection logic
  const baseIndex = Math.floor((defaultValue[0] * colorArray.length) / 100);
  const color1 = colorArray[baseIndex];
  // Jump to roughly opposite side of the color array for maximum contrast
  const color2 =
    colorArray[
      (baseIndex + Math.floor(colorArray.length / 2)) % colorArray.length
    ];

  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cn(
        "relative flex w-full touch-none select-none items-center my-2",
        className
      )}
      value={value}
      onValueChange={setValue}
      max={100}
      {...props}
    >
      {/* <SliderPrimitive.Track
        className="relative h-6 w-full grow overflow-hidden rounded-full bg-blue-500"
        onMouseMove={handleMouseMove}
      > */}
      <SliderPrimitive.Track
        className={`relative h-6 w-full grow overflow-hidden ${color2}`}
        onMouseMove={handleMouseMove}
      >
        {/* <SliderPrimitive.Range
          className="absolute h-full bg-red-500"
          style={{ width: `${value[0]}%` }}
        /> */}
        <SliderPrimitive.Range
          className={`absolute h-full ${color1}`}
          style={{ width: `${value[0]}%` }}
        />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className="block h-8 w-4  border border-white dark:border-black dark:shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white dark:focus-visible:ring-black disabled:pointer-events-none disabled:opacity-50 dark:bg-black bg-white" />
    </SliderPrimitive.Root>
  );
});
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
