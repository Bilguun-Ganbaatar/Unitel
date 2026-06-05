"use client";

import { Stack, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export default function AboutUs() {
  const isMobile = useMediaQuery("(max-width: 969px)");

  return (
    <Stack
      align="center"
      py={isMobile ? 60 : 0}
      h={isMobile ? "auto" : 450}
      justify="center"
      px={isMobile ? 20 : 0}
    >
      <Text fz={isMobile ? 35 : 55} fw={700} style={{ color: "#0bb0c1" }} ta="center">
        Мон сөхийг хөгжүүлэгч
      </Text>
      <Text
        size="md"
        style={{ color: "var(--text-primary)" }}
        w={isMobile ? "100%" : 500}
        ta="center"
      >
        Халмон трейдчууд бид програм хангамж, платформ хөгжүүлэлт болон дата менежментийн олон
        төслүүдээрээ харилцагч, үйлчлүүлэгчдийнхээ үнэ цэнийг нэмэгдүүлж, дижитал соёлыг бүтээн
        байгуулахад нь тусалдаг.
      </Text>
    </Stack>
  );
}
