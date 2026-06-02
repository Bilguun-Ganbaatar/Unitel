"use client";

import { Carousel } from "@mantine/carousel";
import Header from "@/src/components/header";
import "@mantine/carousel/styles.css";
import Link from "next/link";
import { Image, Button, getSize } from "@mantine/core";
import { ActionIcon, Stack } from "@mantine/core";
import { IconBrandFacebook, IconBrandTwitter, IconBrandYoutube } from "@tabler/icons-react";
import { Text } from "@mantine/core";
import { Group } from "@mantine/core";
import Footer from "@/src/components/footer";
import { Grid } from "@mantine/core";

export default function HomePage() {
  const actions = [
    { title: "DATA", subtitle: "Багц авах" },
    { title: "Нэгж", subtitle: "Авах" },
    { title: "Төлбөр", subtitle: "Шалгах, Төлөх" },
    { title: "Шинэ дугаар", subtitle: "Захиалах, Авах" },
    { title: "Сим карт", subtitle: "Сэргээх" },
    { title: "Роуминг", subtitle: "Нээх, Хаах" },
  ];
  return (
    <>
      <Header />
      <Stack
        gap="sm"
        style={{
          position: "fixed",
          right: 20,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 9999,
        }}
      >
        <ActionIcon
          component="a"
          href="https://www.facebook.com/unitelofficial"
          target="_blank"
          size="xl"
          radius="xl"
          variant="filled"
          color="blue"
        >
          <IconBrandFacebook size={18} />
        </ActionIcon>

        <ActionIcon
          component="a"
          href="https://x.com/unitelofficial"
          target="_blank"
          size="xl"
          radius="xl"
          variant="filled"
        >
          <IconBrandTwitter size={18} />
        </ActionIcon>

        <ActionIcon
          component="a"
          href="https://www.youtube.com/user/unitelofficial"
          target="_blank"
          size="xl"
          radius="xl"
          variant="filled"
          color="red"
        >
          <IconBrandYoutube size={18} />
        </ActionIcon>
      </Stack>
      <Carousel
        withIndicators
        height={390}
        style={{
          width: "100vw",
          marginLeft: "calc(50% - 50vw)",
        }}
      >
        <Carousel.Slide>
          <div style={{ position: "relative" }}>
            <Image src="/immerce.jpg" alt="Banner" h={390} w="100%" fit="cover" />

            <Link href="/promotion">
              <Button
                color="lime"
                style={{
                  position: "absolute",
                  left: 1100,
                  bottom: 50,
                  zIndex: 10,
                }}
              >
                Дэлгэрэнгүй
              </Button>
            </Link>
          </div>
        </Carousel.Slide>

        <Carousel.Slide>
          <div style={{ position: "relative" }}>
            <Image src="/immerce.jpg" alt="Banner" h={390} w="100%" fit="cover" />

            <Link href="/promotion">
              <Button
                color="lime"
                style={{
                  position: "absolute",
                  left: 1100,
                  bottom: 50,
                  zIndex: 10,
                }}
              >
                Дэлгэрэнгүй
              </Button>
            </Link>
          </div>
        </Carousel.Slide>

        <Carousel.Slide>
          <div style={{ position: "relative" }}>
            <Image src="/immerce.jpg" alt="Banner" h={390} w="100%" fit="cover" />

            <Link href="/promotion">
              <Button
                color="lime"
                style={{
                  position: "absolute",
                  left: 1100,
                  bottom: 50,
                  zIndex: 10,
                }}
              >
                Дэлгэрэнгүй
              </Button>
            </Link>
          </div>
        </Carousel.Slide>
      </Carousel>

      <Grid py="xl">
        {actions.map((item) => (
          <Grid.Col key={item.title} span={{ base: 6, sm: 4, md: 3, lg: 2 }}>
            <Button href="/data" component="a" variant="subtle" h="auto" w="100%">
              <Stack gap={2} align="center">
                <Image src="/telephone.png" w={60} h={60} />

                <Text fw={700}>{item.title}</Text>

                <Text c="dimmed" size="sm">
                  {item.subtitle}
                </Text>
              </Stack>
            </Button>
          </Grid.Col>
        ))}
      </Grid>

      <Footer />
    </>
  );
}
