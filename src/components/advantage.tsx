"use client";

import { Box, Group, Image, Stack, Text } from "@mantine/core";
import { useIntersection, useMediaQuery } from "@mantine/hooks";
import { useEffect, useState } from "react";

const features = [
  {
    title: "Smart Property Management",
    description: (
      <>
        Ус, цахилгаан, СӨХ төлбөр нэг дор <br /> Автомат нэхэмжлэх систем <br />
        Төлбөрийн түүх & хяналт <br /> Санхүүгийн ил тод тайлан
      </>
    ),
    imgLeft: true,
  },
  {
    title: "Parking & Garage System",
    description: (
      <>
        Ашиглагдаагүй гараж түрээслүүлэх <br /> Оршин суугч хоорондын түрээс <br /> Орлогын хяналт
        <br /> Зогсоолын ухаалаг менежмент
      </>
    ),
    imgLeft: false,
  },
  {
    title: "Контор",
    description:
      "Контор буюу бидний ус дулааны үйлчилгээг үзүүлдэг харьяа байгууллагаа энэхүү аппаас харах, холбогдох, хянах, төлбөрөө төлөх, дуудлага өгөх боломжтой.",
    imgLeft: true,
  },
  {
    title: "Паркин",
    description:
      "Аппдаа өөрийн болон зочныхоо машины дугаарыг оруулаад Хотхонруу чипгүй нэвтрэх, Харин төлбөртэй зогсоолуудаас хаана сул зогсоол байгааг харах, аппаасаа төлбөр төлөх боломжтой.",
    imgLeft: false,
  },
];

function FeatureItem({
  feature,
  isMobile,
}: {
  feature: (typeof features)[0];
  isMobile: boolean | undefined;
}) {
  const { ref, entry } = useIntersection({ threshold: 0.2 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (entry?.isIntersecting) setVisible(true);
  }, [entry?.isIntersecting]);

  return (
    <Group
      ref={ref}
      justify="space-around"
      align="center"
      mx={isMobile ? 20 : 0}
      style={{
        flexDirection: isMobile ? "column" : feature.imgLeft ? "row" : "row-reverse",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
        borderBottom: isMobile ? "2px solid var(--mantine-color-brand-6)" : "none",
        paddingBottom: isMobile ? 24 : 0,
      }}
    >
      <Box style={{ position: "relative", width: 200 }}>
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
            borderRadius: 25,
          }}
        />
      </Box>
      <Stack align="start" w={isMobile ? "90%" : 500}>
        <Text fz={isMobile ? 28 : 36} fw={600} c={"brand"}>
          {feature.title}
        </Text>
        <Text size="md" style={{ color: "var(--text-primary)" }}>
          {feature.description}
        </Text>
      </Stack>
    </Group>
  );
}

export default function Advantage() {
  const isMobile = useMediaQuery("(max-width: 969px)");
  const { ref: headerRef, entry: headerEntry } = useIntersection({ threshold: 0.3 });
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    if (headerEntry?.isIntersecting) setHeaderVisible(true);
  }, [headerEntry?.isIntersecting]);

  return (
    <Stack py={80} gap={60}>
      <Stack
        ref={headerRef}
        px={20}
        style={{
          opacity: headerVisible ? 1 : 0,
          transform: headerVisible ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        <Text fz={isMobile ? 30 : 50} fw={700} c="brand" ta={isMobile ? "left" : "center"}>
          Халуун дулаан, харилцан итгэлцсэн, хялбар шийдэл
        </Text>
        <Text
          size="md"
          style={{ color: "var(--text-primary)" }}
          ta={isMobile ? "left" : "center"}
          mt={16}
        >
          Халуун дулаанаар айл бүрийг холбох сошиал платформ. Харилцан итгэлцсэн ил тод, хотхоны
          мэдээлэл, тайлан, шилэн СӨХ, Хялбар энгийн онлайн төлбөр, мобайл паркинг.
        </Text>
      </Stack>

      {features.map((feature, i) => (
        <FeatureItem key={i} feature={feature} isMobile={isMobile} />
      ))}
    </Stack>
  );
}
