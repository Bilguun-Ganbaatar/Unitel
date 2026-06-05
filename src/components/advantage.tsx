"use client";

import { Group, Image, Stack, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const features = [
  {
    title: "Сошиал & Чат",
    description:
      "Амьдарч буй хотхондоо нэгдэж, хөршүүдээ даган (follow) сошиал болон чатын системээр нэгдэж, халуун дулаан харилцаа итгэлцлийг бий болгох боломжийг үүсгэнэ.",
    imgLeft: true,
  },
  {
    title: "Хотхон",
    description:
      "Хотхоны үйл ажиллагаа, Сөхийн ил тод тайлан, санал хүсэлт, Агуулах, зогсоол бүртгэл зэрэг бүгд ил байдаг нь хөршүүд, СӨХ хоорондын харилцан итгэлцлийг дэмжинэ.",
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
          gap={40}
          style={{ flexDirection: isMobile ? "column" : feature.imgLeft ? "row" : "row-reverse" }}
        >
          <Image src="/s/apartments.png" w={isMobile ? "80%" : 300} />
          <Stack align="center" w={isMobile ? "90%" : 500}>
            <Text fz={isMobile ? 28 : 40} fw={600} style={{ color: "#0bb0c1" }} ta="center">
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
