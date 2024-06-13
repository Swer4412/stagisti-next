"use client";
import { Image } from "@mantine/core";
import { useEffect, useState, useRef, Suspense } from "react";
import useIsSmallDevice from "../hooks/useIsSmallDevice";

function ImageElement({ link }: { link: string }) {
  const [scale, setScale] = useState(1);
  const isSmallDevice = useIsSmallDevice();

  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current!;
    img.style.transform = `scale(${scale})`;
    img.style.transformOrigin = "center";

    // Set cursor style based on scale value
    img.style.cursor = scale === 1 ? "zoom-in" : "zoom-out";
  }, [scale]);

  const toggleScale = () => {
    setScale((prevScale) => (prevScale === 1 ? 1.5 : 1));
  };

  const resetScale = () => {
    setScale(1);
  };

  return (
    //E niente le immagini da ora in poi sborderanno perché di si
    <div>
      <Image
        src={link}
        ref={imgRef}
        mb="xl"
        radius='md'
        fit="contain"
        maw={600}
        mah={450}
        style={isSmallDevice ? undefined : { 'width': 'auto' }}
        className="hover:cursor-zoom-in duration-200 shadow-lg opacity-100 flex-shrink object-contain"
        onClick={isSmallDevice ? undefined : toggleScale}
        onMouseLeave={isSmallDevice ? undefined : resetScale}
      />
    </div>
  );
}

export default ImageElement;
