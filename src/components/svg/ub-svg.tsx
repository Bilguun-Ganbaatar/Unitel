"use client";

import { useComputedColorScheme, useMantineTheme } from "@mantine/core";
import type { SVGProps } from "react";

const UbSvg = (props: SVGProps<SVGSVGElement>) => {
  const theme = useMantineTheme();
  const colorScheme = useComputedColorScheme("light", { getInitialValueInEffect: true });
  const isDark = colorScheme === "dark";
  const brand = theme.colors[theme.primaryColor];

  const palette = {
    sky: isDark ? theme.colors.dark[7] : "#fbf2dc",
    ink: isDark ? theme.colors.dark[1] : "#a87569",
    softInk: isDark ? theme.colors.dark[2] : "#c09a8c",
    roof: isDark ? brand[5] : "#c53f67",
    gold: isDark ? brand[3] : "#ffd081",
    goldDeep: isDark ? brand[4] : "#f4bc5f",
    wall: isDark ? theme.colors.dark[5] : "#fff6e7",
    glass: isDark ? theme.colors.dark[4] : "#ffda95",
    base: isDark ? brand[6] : "#c53f67",
  };

  const line = {
    stroke: palette.ink,
    strokeWidth: 1,
    vectorEffect: "non-scaling-stroke" as const,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  const softLine = {
    ...line,
    stroke: palette.softInk,
    strokeWidth: 0.85,
  };

  const WindowGrid = ({
    x,
    y,
    cols,
    rows,
    cellWidth,
    cellHeight,
    gap = 5,
  }: {
    x: number;
    y: number;
    cols: number;
    rows: number;
    cellWidth: number;
    cellHeight: number;
    gap?: number;
  }) => (
    <g>
      {Array.from({ length: rows }).map((_, row) =>
        Array.from({ length: cols }).map((__, col) => (
          <rect
            key={`${row}-${col}`}
            x={x + col * (cellWidth + gap)}
            y={y + row * (cellHeight + gap)}
            width={cellWidth}
            height={cellHeight}
            fill="none"
            {...softLine}
          />
        )),
      )}
    </g>
  );

  const VerticalBars = ({
    x,
    y,
    count,
    height,
    gap,
  }: {
    x: number;
    y: number;
    count: number;
    height: number;
    gap: number;
  }) => (
    <g>
      {Array.from({ length: count }).map((_, index) => (
        <line
          key={index}
          x1={x + index * gap}
          y1={y}
          x2={x + index * gap}
          y2={y + height}
          {...softLine}
        />
      ))}
    </g>
  );

  const HorizontalBars = ({
    x,
    y,
    count,
    width,
    gap,
  }: {
    x: number;
    y: number;
    count: number;
    width: number;
    gap: number;
  }) => (
    <g>
      {Array.from({ length: count }).map((_, index) => (
        <line
          key={index}
          x1={x}
          y1={y + index * gap}
          x2={x + width}
          y2={y + index * gap}
          {...softLine}
        />
      ))}
    </g>
  );

  const Column = ({ x, y, h }: { x: number; y: number; h: number }) => (
    <g>
      <rect x={x} y={y} width={14} height={h} fill={palette.wall} {...line} />
      <rect x={x - 2} y={y - 5} width={18} height={5} fill={palette.wall} {...line} />
      <rect x={x - 3} y={y + h} width={20} height={5} fill={palette.wall} {...line} />
    </g>
  );

  const SmallTemple = ({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) => (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <path d="M0 46 C22 56 70 56 93 46 C79 67 15 67 0 46Z" fill={palette.gold} {...line} />
      <path d="M9 39 H84 L75 46 H18Z" fill={palette.goldDeep} {...line} />
      <rect x={14} y={48} width={67} height={54} fill={palette.wall} {...line} />
      <rect x={22} y={61} width={14} height={29} fill={palette.glass} {...softLine} />
      <rect x={58} y={61} width={14} height={29} fill={palette.glass} {...softLine} />
      <rect x={41} y={66} width={14} height={36} fill={palette.wall} {...line} />
      <path d="M40 66 Q48 56 56 66" fill="none" {...line} />
    </g>
  );

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={1000}
      height={372}
      viewBox="0 0 1000 383"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Ulaanbaatar skyline illustration"
      {...props}
    >
      <rect width={1134} height={422} fill={palette.sky} />

      <g>
        <path d="M26 397 C88 389 198 394 270 394 C318 394 318 382 365 382" fill="none" {...line} />

        <path d="M28 282 C45 183 99 76 207 62 L207 397 H28Z" fill="none" {...line} />
        <rect x={207} y={82} width={7} height={315} fill="none" {...line} />
        <HorizontalBars x={37} y={103} count={17} width={169} gap={12} />

        <path d="M241 120 L357 141 V397 H241Z" fill="none" {...line} />
        <path d="M274 178 L357 169 V397 H274Z" fill={palette.gold} {...line} />
        <VerticalBars x={281} y={179} count={12} height={210} gap={6} />
        <HorizontalBars x={242} y={134} count={5} width={113} gap={9} />
        <rect x={242} y={125} width={7} height={7} fill={palette.wall} {...line} />

        <path d="M53 279 L149 254 L274 303 H25Z" fill={palette.roof} {...line} />
        <path
          d="M25 303 L149 265 L274 303"
          fill="none"
          stroke={palette.sky}
          strokeWidth={4}
          vectorEffect="non-scaling-stroke"
        />
        <rect x={25} y={303} width={245} height={91} fill={palette.wall} {...line} />
        <path d="M124 303 Q148 278 176 303" fill="none" {...line} />
        <rect x={125} y={327} width={49} height={67} fill="none" {...line} />
        <WindowGrid x={132} y={335} cols={3} rows={5} cellWidth={10} cellHeight={7} gap={4} />
        {[32, 64, 210, 240].map((x) => (
          <Column key={x} x={x} y={319} h={67} />
        ))}
        {[96, 183].map((x) => (
          <g key={x}>
            <Column x={x} y={319} h={67} />
            <rect x={x + 2} y={339} width={10} height={24} fill={palette.gold} {...softLine} />
            <path d={`M${x + 2} 339 Q${x + 7} 328 ${x + 12} 339`} fill="none" {...softLine} />
          </g>
        ))}
        <rect x={98} y={371} width={14} height={22} fill="none" {...line} />
        <WindowGrid x={101} y={374} cols={2} rows={3} cellWidth={4} cellHeight={4} gap={2} />

        <rect x={272} y={309} width={64} height={88} fill={palette.gold} {...line} />
        <WindowGrid x={276} y={314} cols={7} rows={11} cellWidth={6} cellHeight={6} gap={2} />

        <rect x={327} y={292} width={48} height={105} fill={palette.wall} {...line} />
        <rect x={323} y={274} width={57} height={19} fill={palette.wall} {...line} />
        <rect x={330} y={280} width={36} height={11} fill={palette.gold} {...softLine} />
        <Column x={337} y={305} h={73} />
        <Column x={361} y={305} h={73} />
        <rect x={329} y={382} width={43} height={6} fill={palette.wall} {...softLine} />

        <path
          d="M378 262 H401 C407 262 408 253 408 244 H423 C423 253 425 262 433 262 H447 L452 268 H373Z"
          fill={palette.roof}
          {...line}
        />
        <rect x={367} y={269} width={88} height={128} fill={palette.wall} {...line} />
        <rect x={386} y={313} width={38} height={84} fill={palette.gold} {...line} />
        <path d="M394 397 V338 Q405 317 416 338 V397" fill={palette.wall} {...line} />
        <Column x={374} y={286} h={91} />
        <Column x={433} y={286} h={91} />

        <rect x={455} y={292} width={58} height={105} fill={palette.wall} {...line} />
        <rect x={451} y={274} width={64} height={19} fill={palette.wall} {...line} />
        <rect x={458} y={280} width={37} height={11} fill={palette.gold} {...softLine} />
        <Column x={466} y={305} h={72} />
        <Column x={491} y={305} h={72} />
      </g>

      <g>
        <rect x={513} y={263} width={205} height={134} fill={palette.wall} {...line} />
        <path d="M496 265 H735" fill="none" {...line} />
        <path d="M535 314 H704" fill="none" {...line} />
        <WindowGrid x={556} y={317} cols={3} rows={5} cellWidth={28} cellHeight={16} gap={0} />
        <WindowGrid x={659} y={317} cols={2} rows={5} cellWidth={29} cellHeight={16} gap={0} />
        {[554, 598, 657].map((x) => (
          <g key={x}>
            <rect x={x} y={298} width={15} height={20} fill={palette.wall} {...line} />
            <path d={`M${x - 4} 299 H${x + 19} L${x + 15} 305 H${x}`} fill="none" {...line} />
          </g>
        ))}

        <path d="M534 240 H712 L707 264 H539Z" fill={palette.wall} {...line} />
        <rect x={549} y={227} width={150} height={13} fill={palette.wall} {...line} />
        <VerticalBars x={557} y={229} count={14} height={33} gap={10} />

        <path
          d="M502 209 C544 232 667 232 722 209 C708 244 518 244 502 209Z"
          fill={palette.gold}
          {...line}
        />
        <path d="M531 176 H692 L684 211 H539Z" fill={palette.wall} {...line} />
        <rect x={544} y={181} width={135} height={29} fill={palette.wall} {...line} />
        <VerticalBars x={552} y={184} count={17} height={22} gap={7.5} />
        <HorizontalBars x={544} y={188} count={4} width={135} gap={6} />
        <rect x={534} y={176} width={10} height={36} fill={palette.wall} {...line} />
        <rect x={679} y={176} width={10} height={36} fill={palette.wall} {...line} />

        <path
          d="M533 153 C554 180 671 180 697 153 C690 191 539 191 533 153Z"
          fill={palette.gold}
          {...line}
        />
        <path d="M582 147 H649 L641 119 H590Z" fill={palette.roof} {...line} />
        <rect x={553} y={169} width={125} height={39} fill={palette.wall} {...line} />
        <VerticalBars x={559} y={174} count={18} height={27} gap={6.5} />
        <circle cx={616} cy={130} r={7} fill={palette.wall} {...line} />
        <path d="M610 143 H622 L620 154 H612Z" fill={palette.wall} {...line} />
        <path d="M612 123 Q616 109 621 123" fill="none" {...line} />
        <path d="M578 148 Q571 141 572 132 Q582 136 578 148Z" fill={palette.wall} {...line} />
        <path d="M654 148 Q661 141 660 132 Q650 136 654 148Z" fill={palette.wall} {...line} />
        <path d="M530 153 L503 126" fill="none" {...line} />
        <path d="M696 153 L724 126" fill="none" {...line} />
        <circle cx={503} cy={126} r={2} fill={palette.gold} {...line} />
        <circle cx={724} cy={126} r={2} fill={palette.gold} {...line} />

        <SmallTemple x={706} y={272} scale={1.05} />
        <path
          d="M714 278 C735 293 792 293 811 278 C804 302 724 302 714 278Z"
          fill="none"
          {...line}
        />
        <path d="M724 274 Q728 264 732 274" fill="none" {...line} />
      </g>

      <g>
        <path d="M796 286 C823 296 858 295 884 286 L884 397 H796Z" fill={palette.wall} {...line} />
        <path
          d="M782 276 C806 296 865 296 896 276 C889 315 795 315 782 276Z"
          fill={palette.roof}
          {...line}
        />
        <rect x={809} y={313} width={70} height={84} fill={palette.wall} {...line} />
        <WindowGrid x={817} y={328} cols={4} rows={2} cellWidth={13} cellHeight={11} gap={5} />

        <path d="M881 288 H1102 V397 H881Z" fill={palette.wall} {...line} />
        <path
          d="M880 290 C935 305 1051 305 1102 290 C1094 327 896 327 880 290Z"
          fill={palette.gold}
          {...line}
        />
        <path
          d="M884 262 C939 282 1042 282 1099 262 C1084 304 902 304 884 262Z"
          fill={palette.gold}
          {...line}
        />
        <path
          d="M889 235 C932 260 1012 260 1058 235 C1046 274 902 274 889 235Z"
          fill={palette.gold}
          {...line}
        />
        <rect x={909} y={292} width={89} height={105} fill={palette.wall} {...line} />
        <rect x={915} y={310} width={69} height={12} fill="none" {...softLine} />
        <WindowGrid x={917} y={327} cols={4} rows={2} cellWidth={15} cellHeight={11} gap={2} />
        <rect x={930} y={344} width={39} height={53} fill={palette.gold} {...line} />
        <rect x={1000} y={292} width={79} height={105} fill={palette.wall} {...line} />
        <Column x={1018} y={318} h={59} />
        <Column x={1055} y={318} h={59} />
        <path d="M918 236 V224 H923 V236" fill={palette.roof} {...line} />
        <path d="M954 236 V226 H960 V236" fill={palette.roof} {...line} />
        <path d="M984 236 V220 H990 V236" fill={palette.roof} {...line} />
        <path d="M936 238 Q943 225 949 238" fill={palette.roof} {...line} />
        <path d="M946 237 Q950 229 954 237" fill={palette.roof} {...line} />

        <rect x={955} y={148} width={151} height={249} fill="none" {...line} />
        <path d="M981 148 C1000 118 1036 110 1104 110 H1104 V397" fill="none" {...line} />
        <WindowGrid x={972} y={148} cols={6} rows={14} cellWidth={5} cellHeight={8} gap={2} />
        <WindowGrid x={1020} y={148} cols={4} rows={9} cellWidth={15} cellHeight={7} gap={10} />
        <rect x={1104} y={135} width={10} height={262} fill={palette.gold} {...line} />
        <HorizontalBars x={1104} y={142} count={27} width={10} gap={9} />
        <rect x={1114} y={139} width={8} height={22} fill={palette.roof} />
      </g>

      <rect x={0} y={397} width={1134} height={9} fill={palette.goldDeep} />
      <rect x={0} y={406} width={1134} height={16} fill={palette.base} />
    </svg>
  );
};

export default UbSvg;
