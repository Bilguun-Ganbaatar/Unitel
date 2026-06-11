"use client";

import Introduction from "@/src/components/introduction";
import NewYarmagCleanSvg from "@/src/components/svg/NewYarmagCleanSvg";
import { sectionAnchor } from "@/src/data/monsohNavigation";

export default function HeroSection() {
  return (
    <div
      id="taniltsuulga"
      style={{
        ...sectionAnchor,
        position: "relative",
        overflow: "hidden",
        minHeight: "760px",
        width: "100vw",
        marginLeft: "calc(50% - 50vw)",
        marginRight: "calc(50% - 50vw)",
      }}
    >
      <NewYarmagCleanSvg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        <Introduction />
      </div>
    </div>
  );
}
