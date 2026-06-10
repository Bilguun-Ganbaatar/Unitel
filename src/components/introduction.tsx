"use client";

import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import { ActionIcon, Box, Button, Flex, Group, Image, Stack, Text } from "@mantine/core";
import { useIntersection, useMediaQuery } from "@mantine/hooks";
import AutoScroll from "embla-carousel-auto-scroll";

import {
  IconBrandAndroid,
  IconBrandApple,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandYoutube,
} from "@tabler/icons-react";

import { useEffect, useRef, useState } from "react";

export default function Introduction() {
  const isMobile = useMediaQuery("(max-width: 600px)");

  const { ref: heroRef, entry: heroEntry } = useIntersection({
    threshold: 0.2,
  });
  const [heroVisible, setHeroVisible] = useState(false);

  const { ref: gridRef, entry: gridEntry } = useIntersection({
    threshold: 0.2,
  });
  const [gridVisible, setGridVisible] = useState(false);

  const autoScroll = useRef(AutoScroll({ speed: 1 }));

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
        justify="center"
        py={isMobile ? 40 : 60}
        px={20}
        style={{
          opacity: heroVisible ? 1 : 0,
          transform: heroVisible ? "translateY(0)" : "translateY(40px)",
          transition: "0.6s ease",
        }}
      >
        <Flex
          w="100%"
          justify="space-between"
          align="center"
          gap="xl"
          direction={{ base: "column", md: "row" }}
        >
          {/* TEXT */}
          <Stack w={{ base: "100%", md: "50%" }}>
            <Text
              fz={{ base: 28, sm: 34, md: 46 }}
              fw={600}
              style={{ lineHeight: 1.15, color: "var(--text-primary)" }}
            >
              Таны{" "}
              <Text component="span" c="brand" inherit>
                дижитал
              </Text>{" "}
              хөрш
            </Text>

            <Text size="md" style={{ lineHeight: 1.7, color: "var(--text-primary)" }}>
              Монсөх нь хотхонд суурилсан сошиал платформ юм. Гэр болон түүнтэй холбоотой бүх
              харилцааг нэгтгэсэн Монгол сошиал сүлжээнд тавтай морил.
            </Text>
          </Stack>

          <Stack w={{ base: "100%", md: "45%" }}>
            <Button
              size="md"
              radius={20}
              variant="outline"
              fullWidth
              leftSection={<IconBrandApple size={17} />}
            >
              iOS татах
            </Button>

            <Button
              size="md"
              radius={20}
              variant="filled"
              fullWidth
              leftSection={<IconBrandAndroid size={17} />}
            >
              Android татах
            </Button>

            <Group justify="center" gap="sm">
              <ActionIcon
                size="lg"
                variant="filled"
                color="#1877F2"
                component="a"
                href="https://facebook.com"
                target="_blank"
              >
                <IconBrandFacebook />
              </ActionIcon>

              <ActionIcon
                size="lg"
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
                href="https://youtube.com"
                target="_blank"
              >
                <IconBrandYoutube />
              </ActionIcon>
            </Group>
          </Stack>
        </Flex>
      </Group>

      <Stack
        ref={gridRef}
        px={20}
        pb={40}
        style={{
          opacity: gridVisible ? 1 : 0,
          transform: gridVisible ? "translateY(0)" : "translateY(40px)",
          transition: "0.6s ease",
        }}
      >
        <Text fz={20} fw={700} mb="xs">
          Нэгдсэн{" "}
          <Text component="span" c="brand" inherit>
            Байр, Хотхонууд
          </Text>
        </Text>

        <Box
          style={{
            width: "100vw",
            marginLeft: "calc(50% - 50vw)",
          }}
        >
          <Carousel
            withControls={false}
            withIndicators={false}
            plugins={[autoScroll.current]}
            onMouseEnter={() => autoScroll.current.stop()}
            onMouseLeave={() => autoScroll.current.play()}
            slideSize="auto"
            slideGap={{ base: "sm", md: "md" }}
            emblaOptions={{
              align: "start",
              loop: true,
              dragFree: true,
            }}
          >
            {[...Array(18)].map((_, i) => (
              <Carousel.Slide key={i}>
                <Button
                  bg="transparent"
                  h={100}
                  w="100%"
                  radius={20}
                  p={0}
                  style={{ border: "none" }}
                >
                  <Image
                    src="/s/apartments.png"
                    w="100%"
                    h={100}
                    fit="cover"
                    style={{ borderRadius: 20 }}
                  />
                </Button>
              </Carousel.Slide>
            ))}
          </Carousel>
        </Box>
      </Stack>

      <Box
        style={{
          position: "relative",
          width: isMobile ? 160 : 200,
          margin: "0 auto",
        }}
      >
        <Image src="/s/mobile-frame.webp" fit="contain" />

        <Image
          src="/s/screenshot.png"
          style={{
            position: "absolute",
            top: "2%",
            left: "5%",
            width: "90%",
            height: "96%",
            objectFit: "cover",
            borderRadius: isMobile ? 18 : 25,
          }}
        />
      </Box>
    </Stack>
  );
}
