"use client";

import { Stack, Text, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export default function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  const isMobile = useMediaQuery("(max-width: 969px)");

  return (
    <Stack gap={8} align={isMobile ? "flex-start" : "center"} px={20}>
      <Text fz={13} fw={800} c="brand" tt="uppercase" style={{ letterSpacing: "0.08em" }}>
        {eyebrow}
      </Text>
      <Title
        order={2}
        fz={isMobile ? 28 : 42}
        fw={800}
        ta={isMobile ? "left" : "center"}
        style={{ color: "var(--text-primary)", lineHeight: 1.15 }}
      >
        {title}
      </Title>
      <Text
        size="md"
        ta={isMobile ? "left" : "center"}
        style={{ color: "var(--text-secondary)", maxWidth: 720, lineHeight: 1.7 }}
      >
        {description}
      </Text>
    </Stack>
  );
}
