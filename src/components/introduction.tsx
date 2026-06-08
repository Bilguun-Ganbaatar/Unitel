"use client";

import { Button, Grid, Group, Image, Stack, Text } from "@mantine/core";
import { useIntersection, useMediaQuery } from "@mantine/hooks";
import { useEffect, useState } from "react";

export default function Introduction() {
  const isMobile = useMediaQuery("(max-width: 600px)");

  const { ref: heroRef, entry: heroEntry } = useIntersection({ threshold: 0.2 });
  const [heroVisible, setHeroVisible] = useState(false);

  const { ref: gridRef, entry: gridEntry } = useIntersection({ threshold: 0.2 });
  const [gridVisible, setGridVisible] = useState(false);

  useEffect(() => {
    if (heroEntry?.isIntersecting) setHeroVisible(true);
  }, [heroEntry?.isIntersecting]);

  useEffect(() => {
    if (gridEntry?.isIntersecting) setGridVisible(true);
  }, [gridEntry?.isIntersecting]);

  return (
    <Stack>
      <Group
        ref={heroRef}
        justify="space-around"
        align="center"
        py={isMobile ? 40 : 60}
        px={20}
        wrap="wrap"
        style={{
          opacity: heroVisible ? 1 : 0,
          transform: heroVisible ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        <Stack maw={isMobile ? "100%" : 480}>
          <Text fz={isMobile ? 35 : 55} fw={700} c="brand" inline>
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
              Android утсанд татах
            </Button>
          </Group>
        </Stack>

        <iframe
          width={isMobile ? "100%" : 460}
          height={isMobile ? 220 : 300}
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          allowFullScreen
          style={{ borderRadius: "12px", border: "none" }}
        />
      </Group>

      <Stack
        ref={gridRef}
        px={20}
        pb={40}
        style={{
          opacity: gridVisible ? 1 : 0,
          transform: gridVisible ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        <Text fz={20} fw={700} style={{ color: "var(--text-primary)" }}>
          Нэгдсэн Байр, Хотхонууд
        </Text>
        <Grid>
          {[...Array(6)].map((_, i) => (
            <Grid.Col key={i} span={{ base: 6, sm: 4, md: 2 }}>
              <Button
                bg="transparent"
                h={100}
                w="100%"
                radius={20}
                p={0}
                style={{ border: "none" }}
              >
                <Image src="/s/apartments.png" w="100%" h={100} style={{ borderRadius: 20 }} />
              </Button>
            </Grid.Col>
          ))}
        </Grid>
      </Stack>
    </Stack>
  );
}
