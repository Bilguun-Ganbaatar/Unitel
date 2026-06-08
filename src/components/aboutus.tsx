"use client";

import { Stack, Text } from "@mantine/core";
import { useIntersection, useMediaQuery } from "@mantine/hooks";
import { useEffect, useRef, useState } from "react";

export default function AboutUs() {
  const isMobile = useMediaQuery("(max-width: 969px)");
  const ref = useRef<HTMLDivElement>(null);
  const { ref: intersectionRef, entry } = useIntersection({ threshold: 0.3 });
  const [visible, setVisible] = useState(false);

  const setRef = (el: HTMLDivElement | null) => {
    ref.current = el;
    intersectionRef(el);
  };

  useEffect(() => {
    if (entry?.isIntersecting) setVisible(true);
  }, [entry?.isIntersecting]);

  return (
    <Stack
      ref={setRef}
      align="center"
      py={isMobile ? 60 : 0}
      h={isMobile ? "auto" : 450}
      justify="center"
      px={isMobile ? 20 : 0}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      <Text fz={isMobile ? 35 : 55} fw={700} c={"brand"} ta="center">
        Мон сөхийг хөгжүүлэгч
      </Text>
      <Text size="md" style={{ color: "var(--text-primary)" }}>
        Халмон трейдчууд бид програм хангамж, платформ хөгжүүлэлт болон дата менежментийн олон
        төслүүдээрээ харилцагч, үйлчлүүлэгчдийнхээ үнэ цэнийг нэмэгдүүлж, дижитал соёлыг бүтээн
        байгуулахад нь тусалдаг.
      </Text>
    </Stack>
  );
}
