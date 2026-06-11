"use client";

import { ActionIcon, Container, Group, Image, Stack, Text, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconBrandFacebook, IconBrandInstagram, IconBrandYoutube } from "@tabler/icons-react";
import Link from "next/link";

export default function Footer() {
  const isMobile = useMediaQuery("(max-width: 969px)");
  const theme = useMantineTheme();
  const brandColor = theme.colors[theme.primaryColor][6];

  return (
    <Container
      strategy="grid"
      size={1100}
      style={{
        backgroundColor: "var(--bg-primary)",
        borderTop: "1px solid var(--mantine-color-brand-6)",
      }}
    >
      <Stack>
        <Group
          justify="space-between"
          align="flex-start"
          py={40}
          px={isMobile ? 20 : 0}
          style={{
            flexDirection: isMobile ? "column" : "row",
            borderBottom: "1px solid var(--mantine-color-brand-6)",
          }}
          gap={30}
        >
          <Stack maw={isMobile ? "100%" : 400}>
            <Image
              src="/full-logo-dark-mode.png"
              w={150}
              h={80}
              style={{ cursor: "pointer" }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            />
            <Text fz={20} fw={600} c="brand">
              Холбоо барих
            </Text>
            <Link href="contact@khalmon.mn" style={{ textDecoration: "none", color: brandColor }}>
              contact@khalmon.mn
            </Link>
            <Link href="tel:70112882" style={{ textDecoration: "none", color: brandColor }}>
              70112882
            </Link>
            <Link
              href="https://maps.app.goo.gl/vYwEZousrsuCbYHV9?g_st=ic"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: brandColor }}
            >
              Шинэ айл барилгын материалын худалдааны төв, 2 давхар А8-р павилон, 2-р хороо,
              Улаанбаатар 11000
            </Link>
          </Stack>

          <Stack gap={10}>
            <Text fz={isMobile ? 20 : 25} fw={700} c="brand">
              Апп татах
            </Text>
            <Link href="https://apps.apple.com/mn/app/facebook/id284882215" target="_blank">
              <Image src="/Appstore.svg" fit="contain" w={isMobile ? 120 : 150} />
            </Link>
            <Link href="https://apps.apple.com/mn/app/facebook/id284882215" target="_blank">
              <Image src="/Playstore.svg" fit="contain" w={isMobile ? 120 : 150} />
            </Link>
          </Stack>
        </Group>

        <Group
          h={isMobile ? "auto" : 50}
          py={isMobile ? 16 : 0}
          px={isMobile ? 20 : 0}
          justify="space-between"
          style={{ flexDirection: isMobile ? "column" : "row" }}
          gap={12}
        >
          <Text c="grey" size={isMobile ? "sm" : "md"}>
            © 2026. Халмон Трейд ХХК
          </Text>
          <Group justify="center" gap="sm">
            <ActionIcon
              size="lg"
              variant="filled"
              color="#1877F2"
              component="a"
              href="https://www.facebook.com/khalmontrade"
              target="_blank"
            >
              <IconBrandFacebook />
            </ActionIcon>

            <ActionIcon
              size="lg"
              component="a"
              href="https://www.instagram.com/khalmontrade/"
              target="_blank"
              rel="noopener noreferrer"
              variant="filled"
              styles={{
                root: {
                  background:
                    "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
                  color: "white",
                  border: 0,
                  transition: "0.2s",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                },
              }}
            >
              <IconBrandInstagram />
            </ActionIcon>

            <ActionIcon
              size="lg"
              variant="filled"
              color="#FF0000"
              component="a"
              href="https://www.youtube.com/@byambadelgerodgerel195"
              target="_blank"
            >
              <IconBrandYoutube />
            </ActionIcon>
          </Group>
        </Group>
      </Stack>
    </Container>
  );
}
