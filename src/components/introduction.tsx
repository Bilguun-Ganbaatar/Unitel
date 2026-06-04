"use client";

import { Button, Group, Image, Stack, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export default function Introduction() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <Group
        justify="space-around"
        align="center"
        h={isMobile ? "auto" : 450}
        py={isMobile ? 40 : 0}
        style={{ flexDirection: isMobile ? "column" : "row" }}
      >
        <Stack maw={isMobile ? "100%" : 550} px={isMobile ? 20 : 0}>
          <Text fz={isMobile ? 35 : 55} fw={700} style={{ color: "#0bb0c1" }} inline>
            Таны Дижитал хөрш
          </Text>
          <Text size="md" style={{ color: "var(--text-primary)" }}>
            Монсөх нь хотхонд суурилсан Сошиал Платформ юм. Гэр болон түүнтэй холбоотой бүх
            харилцааг нэгтгэн бүтээсэн Монгол сошиал сүлжээнд тавтай морил.
          </Text>
          <Group justify="space-around">
            <Button size="md" radius={20} variant="outline" flex={1}>
              iOS утсанд татах
            </Button>
            <Button size="md" radius={20} variant="outline" flex={1}>
              {/* <Button size="md" classNames={{ root: classes.darkButton }}> */}
              Android утсанд татах
            </Button>
          </Group>
        </Stack>

        <iframe
          width={isMobile ? "100%" : 500}
          height={isMobile ? 200 : 300}
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          allowFullScreen
          style={{ borderRadius: "12px", border: "none", padding: isMobile ? "0 20px" : 0 }}
        />
      </Group>

      <Stack px={isMobile ? 20 : 0} pb={40}>
        <Text fz={20} fw={700} style={{ color: "var(--text-primary)" }}>
          Нэгдсэн Байр, Хотхонууд
        </Text>
        <Group justify={isMobile ? "center" : "space-around"} gap={10} wrap="wrap">
          {[...Array(6)].map((_, i) => (
            <Button key={i} h={100} w={160} radius={20} p={0} style={{ border: "none" }}>
              <Image src="/s/apartments.png" w={160} h={100} style={{ borderRadius: 20 }} />
            </Button>
          ))}
        </Group>
      </Stack>
    </>
  );
}
