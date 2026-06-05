"use client";

import { Group, Image, Stack, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

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

export default function Advantage() {
  const isMobile = useMediaQuery("(max-width: 969px)");

  return (
    <Stack py={80} gap={60}>
      <Stack>
        <Text fz={isMobile ? 35 : 55} fw={700} style={{ color: "#0bb0c1" }} ta="center">
          Халуун дулаан, харилцан итгэлцсэн, хялбар шийдэл
        </Text>
        <Text size="md" style={{ color: "var(--text-primary)" }} ta="center" mt={16}>
          Халуун дулаанаар айл бүрийг холбох сошиал платформ. Харилцан итгэлцсэн ил тод, хотхоны
          мэдээлэл, тайлан, шилэн СӨХ, Хялбар энгийн онлайн төлбөр, мобайл паркинг.
        </Text>
      </Stack>

      {features.map((feature, i) => (
        <Group
          key={i}
          justify="space-around"
          align="center"
          style={{ flexDirection: isMobile ? "column" : feature.imgLeft ? "row" : "row-reverse" }}
        >
          <Image
            src="/s/apartments.png"
            radius="lg"
            w={{ base: 200, md: 320 }}
            h={{ base: 200, md: 320 }}
            fit="cover"
          />

          <Stack align="start" w={isMobile ? "90%" : 500}>
            <Text fz={isMobile ? 28 : 36} fw={600} style={{ color: "#0bb0c1" }}>
              {feature.title}
            </Text>
            <Text size="md" style={{ color: "var(--text-primary)" }}>
              {feature.description}
            </Text>
          </Stack>
        </Group>
      ))}
    </Stack>
  );
}
