"use client";

import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import {
  ActionIcon,
  Box,
  Button,
  Flex,
  Group,
  Image,
  Stack,
  Text,
  useComputedColorScheme,
} from "@mantine/core";
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

  const colorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
  const isDark = colorScheme === "dark";

  const panelBg = isDark ? "rgba(0, 0, 0, 0.46)" : "rgba(255, 255, 255, 0.68)";
  const panelBorder = isDark ? "rgba(255,255,255,0.16)" : "rgba(255,255,255,0.55)";
  const textColor = isDark ? "#ffffff" : "#111111";
  const mutedTextColor = isDark ? "rgba(255,255,255,0.86)" : "rgba(0,0,0,0.78)";

  const { ref: heroRef, entry: heroEntry } = useIntersection({
    threshold: 0.2,
  });
  const [heroVisible, setHeroVisible] = useState(false);

  const { ref: gridRef, entry: gridEntry } = useIntersection({
    threshold: 0.2,
  });
  const [gridVisible, setGridVisible] = useState(false);

  const autoScroll = useRef(
    AutoScroll({
      speed: 1,
      startDelay: 0,
    }),
  );

  useEffect(() => {
    if (heroEntry?.isIntersecting) setHeroVisible(true);
  }, [heroEntry?.isIntersecting]);

  useEffect(() => {
    if (gridEntry?.isIntersecting) setGridVisible(true);
  }, [gridEntry?.isIntersecting]);

  return (
    <Stack gap={0}>
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
          maw={1120}
          mx="auto"
          justify="space-between"
          align="center"
          gap="xl"
          direction={{ base: "column", md: "row" }}
        >
          <Stack
            w={{ base: "100%", md: "50%" }}
            p={{ base: 18, md: 24 }}
            style={{
              borderRadius: 24,
              background: panelBg,
              border: `1px solid ${panelBorder}`,
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              boxShadow: isDark ? "0 18px 50px rgba(0,0,0,0.36)" : "0 18px 50px rgba(0,0,0,0.10)",
            }}
          >
            <Text
              fz={{ base: 25, sm: 33, md: 45 }}
              fw={800}
              style={{
                lineHeight: 1.12,
                color: textColor,
                textShadow: isDark
                  ? "0 3px 14px rgba(0,0,0,0.45)"
                  : "0 2px 12px rgba(255,255,255,0.45)",
              }}
            >
              <Text component="span" c="brand" inherit>
                Технологийн шийдэл, Тогтвортой хөгжил
              </Text>
            </Text>

            <Text
              size="md"
              style={{
                lineHeight: 1.7,
                color: mutedTextColor,
                textShadow: isDark ? "0 2px 10px rgba(0,0,0,0.35)" : "none",
              }}
            >
              Мон-Сөх нь хотхонд суурилсан сошиал платформ юм. Гэр болон түүнтэй холбоотой бүх
              харилцааг нэгтгэсэн Монгол сошиал сүлжээнд тавтай морил.
            </Text>
          </Stack>

          <Stack w={{ base: "100%", md: "45%" }} p={{ base: 16, md: 20 }} gap="sm">
            <Button
              size="md"
              radius={20}
              variant="light"
              color="brand"
              fullWidth
              leftSection={<IconBrandApple size={17} />}
              styles={{
                root: {
                  fontWeight: 700,
                },
              }}
            >
              iOS татах
            </Button>

            <Button
              size="md"
              radius={20}
              variant="filled"
              fullWidth
              leftSection={<IconBrandAndroid size={17} />}
              styles={{
                root: {
                  fontWeight: 700,
                },
              }}
            >
              Android татах
            </Button>

            <Group justify="center" gap="sm" mt={4}>
              <ActionIcon
                size="lg"
                variant="filled"
                color="#1877F2"
                component="a"
                href="https://www.facebook.com/khalmontrade"
                target="_blank"
                rel="noopener noreferrer"
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
                rel="noopener noreferrer"
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
        maw={1120}
        w="100%"
        mx="auto"
        style={{
          opacity: gridVisible ? 1 : 0,
          transform: gridVisible ? "translateY(0)" : "translateY(40px)",
          transition: "0.6s ease",
        }}
      >
        <Text
          fz={20}
          fw={800}
          mb="xs"
          px={14}
          py={8}
          style={{
            display: "inline-block",
            width: "fit-content",
            borderRadius: 14,
            background: panelBg,
            border: `1px solid ${panelBorder}`,
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            color: textColor,
            textShadow: isDark ? "0 2px 10px rgba(0,0,0,0.35)" : "none",
          }}
        >
          Нэгдсэн{" "}
          <Text component="span" c="brand" inherit>
            Байр, Хотхонууд
          </Text>
        </Text>

        <Box
          style={{
            width: "100vw",
            marginLeft: "calc(50% - 50vw)",
            overflow: "hidden",
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
                  w={isMobile ? 120 : 145}
                  radius={20}
                  p={0}
                  style={{
                    border: "none",
                    boxShadow: isDark
                      ? "0 12px 28px rgba(0,0,0,0.45)"
                      : "0 12px 28px rgba(0,0,0,0.18)",
                  }}
                >
                  <Image
                    src="/s/apartments.png"
                    w="100%"
                    h={100}
                    fit="cover"
                    style={{
                      borderRadius: 20,
                    }}
                  />
                </Button>
              </Carousel.Slide>
            ))}
          </Carousel>
        </Box>
      </Stack>

      <Box
        maw={1120}
        w="100%"
        mx="auto"
        px={20}
        pb={40}
        style={{
          position: "relative",
          zIndex: 1,
        }}
      >
        <Image
          src="/web.png"
          w="100%"
          fit="contain"
          style={{
            borderRadius: isMobile ? 18 : 25,
            boxShadow: isDark ? "0 18px 60px rgba(0,0,0,0.45)" : "0 18px 60px rgba(0,0,0,0.12)",
          }}
        />
      </Box>
    </Stack>
  );
}
