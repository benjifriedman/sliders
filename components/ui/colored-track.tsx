"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

const ColoredTrack = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Track>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Track> & {
    value: number[];
  }
>((props, ref) => {
  return (
    <SliderPrimitive.Track ref={ref} className="track-base">
      <SliderPrimitive.Range
        className="range-base"
        data-value={props.value[0]}
      />
    </SliderPrimitive.Track>
  );
});

ColoredTrack.displayName = "ColoredTrack";

export default ColoredTrack;
