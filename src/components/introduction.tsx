"use client";

import { Button, Grid, Group, Image, Stack, Text } from "@mantine/core";
import { useIntersection, useMediaQuery } from "@mantine/hooks";
import { IconBrandAndroid, IconBrandApple } from "@tabler/icons-react";
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
          <Text
            fz={isMobile ? 32 : 46}
            fw={600}
            style={{ color: "var(--text-primary)", lineHeight: 1.15 }}
          >
            Таны{" "}
            <Text component="span" c="brand" inherit>
              дижитал
            </Text>{" "}
            хөрш
          </Text>

          <Text size="md" style={{ color: "var(--text-primary)", lineHeight: 1.7 }}>
            Монсөх нь хотхонд суурилсан сошиал платформ юм. Гэр болон түүнтэй холбоотой бүх
            харилцааг нэгтгэсэн Монгол сошиал сүлжээнд тавтай морил.
          </Text>

          <Group gap={12} wrap="wrap">
            <Button
              size="md"
              radius={20}
              variant="outline"
              flex={1}
              leftSection={<IconBrandApple size={17} />}
            >
              iOS татах
            </Button>
            <Button
              size="md"
              radius={20}
              variant="filled"
              flex={1}
              leftSection={<IconBrandAndroid size={17} />}
            >
              Android татах
            </Button>
          </Group>
        </Stack>

        <iframe
          width={isMobile ? "100%" : 440}
          height={isMobile ? 220 : 290}
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          allowFullScreen
          style={{
            borderRadius: 16,
          }}
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
        <Text fz={20} fw={700} style={{ color: "var(--text-primary)", lineHeight: 1.15 }}>
          Нэгдсэн{" "}
          <Text component="span" c="brand" inherit>
            Байр, Хотхонууд
          </Text>
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
