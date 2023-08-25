import { Typography } from "@mui/material";
import React, { useCallback, useState } from "react";
import { Controlled as ControlledZoom } from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function FancyBox({ n }: { n: number }) {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleZoomChange = useCallback((shouldZoom: any) => {
    setIsZoomed(shouldZoom);
  }, []);
  return (
    <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
      <div className="w-full">
        <img
          src={`/images/Template-${n}-min.png`}
          alt="Template"
          className="w-full"
        />
        <Typography className="text-xl md:text-2xl py-2 overflow-hidden text-gray-200">
          Template {n}
        </Typography>
      </div>
    </ControlledZoom>
  );
}
