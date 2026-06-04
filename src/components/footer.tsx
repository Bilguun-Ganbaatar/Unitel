"use client";

import { Container, Group, Image, Stack, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export default function Footer() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Container
      strategy="grid"
      size={1200}
      style={{
        backgroundColor: "var(--bg-primary)",
        borderTop: "1px solid #0bb0c1",
      }}
    >
      <Group
        justify="space-between"
        align="flex-start"
        py={40}
        px={isMobile ? 20 : 0}
        style={{ flexDirection: isMobile ? "column" : "row" }}
        gap={30}
      >
        <Image src="/full-logo-dark-mode.png" w={150} h={100} />
        <Stack gap={10}>
          <Text fw={600} style={{ color: "#0bb0c1" }}>
            Холбоо барих
          </Text>
          <a style={{ color: "#0bb0c1" }} href="mailto:khalmon@gmail.com">
            khalmon@gmail.com
          </a>
          <a style={{ color: "#0bb0c1" }} href="tel:98112882">
            98112882
          </a>
          <a
            style={{ color: "#0bb0c1", maxWidth: 300 }}
            href="https://maps.app.goo.gl/vYwEZousrsuCbYHV9?g_st=ic"
            target="_blank"
            rel="noopener noreferrer"
          >
            Шинэ айл барилгын материалын худалдааны төв, 2 давхар А8-р павилон, 2-р хороо,
            Улаанбаатар 11000
          </a>
        </Stack>
      </Group>
    </Container>
  );
}
