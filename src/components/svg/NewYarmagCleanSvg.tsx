"use client";

<<<<<<< HEAD
import { useComputedColorScheme } from "@mantine/core";
=======
>>>>>>> 4f91e76 (sync)
import type { SVGProps } from "react";

type NewYarmagCleanSvgProps = SVGProps<SVGSVGElement> & {
  imageHref?: string;
  darkOverlayOpacity?: number;
};

const NewYarmagCleanSvg = ({
  imageHref = "/newyarmag-clean.png",
  darkOverlayOpacity = 0.16,
  ...props
}: NewYarmagCleanSvgProps) => {
  const colorScheme = useComputedColorScheme("light", { getInitialValueInEffect: true });
  const isDark = colorScheme === "dark";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 1672 941"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="New Yarmag residential complex illustration"
      {...props}
    >
      <image
        href={imageHref}
        x="0"
        y="0"
        width="1672"
        height="941"
        preserveAspectRatio="xMidYMid slice"
      />

      {isDark && (
        <rect
          width="1672"
          height="941"
          fill="black"
          opacity={darkOverlayOpacity}
          pointerEvents="none"
        />
      )}
    </svg>
  );
};

export default NewYarmagCleanSvg;
