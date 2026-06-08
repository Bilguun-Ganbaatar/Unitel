"use client";

import About_us from "@/src/components/aboutus";
import Advantage from "@/src/components/advantage";
import Footer from "@/src/components/footer";
import Header from "@/src/components/header";
import Introduction from "@/src/components/introduction";
import Price from "@/src/components/price";
import Work_w_us from "@/src/components/work_w_us";

import {
  Accordion,
  Affix,
  AppShell,
  Burger,
  Button,
  Container,
  Flex,
  Stack,
  Text,
  Transition,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure, useIntersection, useMediaQuery, useWindowScroll } from "@mantine/hooks";
import { IconArrowBadgeUp } from "@tabler/icons-react";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Танилцуулга", id: "taniltsuulga" },
  { label: "Давуу тал", id: "davuu-tal" },
  { label: "Хамтрах", id: "hamtrah" },
  { label: "Бидний тухай", id: "bidnii-tuhai" },
];

export const data = [
  {
    value: "Системийг ашиглаж эхлэхэд ямар мэдээлэл хэрэгтэй вэ? ",
    description:
      "Системийг ашиглаж эхлэхийн тулд объектын мэдээлэл, өмчлөгчийн мэдээлэл, СӨХ-ны гэрээт ажилтнуудын мэдээлэл, засварчин, байцаагч г.м шаардлагатай мэдээллүүдийн дагуу СӨХ-ны бүртгэлийг үүсгэнэ.",
  },
  {
    value: "Системийг ашиглаж эхлэхэд ямар мэдээлэл хэрэгтэй вэ?",
    description:
      "Системийг ашиглаж эхлэхийн тулд объектын мэдээлэл, өмчлөгчийн мэдээлэл, СӨХ-ны гэрээт ажилтнуудын мэдээлэл, засварчин, байцаагч г.м шаардлагатай мэдээллүүдийн дагуу СӨХ-ны бүртгэлийг үүсгэнэ.",
  },
  {
    value: " Системийг ашиглаж эхлэхэд ямар мэдээлэл хэрэгтэй вэ?",
    description:
      "Системийг ашиглаж эхлэхийн тулд объектын мэдээлэл, өмчлөгчийн мэдээлэл, СӨХ-ны гэрээт ажилтнуудын мэдээлэл, засварчин, байцаагч г.м шаардлагатай мэдээллүүдийн дагуу СӨХ-ны бүртгэлийг үүсгэнэ.",
  },
];

const items = data.map((item, index) => (
  <Accordion.Item key={index} value={item.value}>
    <Accordion.Control>{item.value}</Accordion.Control>
    <Accordion.Panel>{item.description}</Accordion.Panel>
  </Accordion.Item>
));

export default function HomePage() {
  const [opened, { toggle, close }] = useDisclosure();
  const isMobile = useMediaQuery("(max-width: 969px)");
  const [scroll, scrollToasd] = useWindowScroll();

  const theme = useMantineTheme();

  const { ref: faqRef, entry: faqEntry } = useIntersection({ threshold: 0.2 });
  const [faqVisible, setFaqVisible] = useState(false);

  useEffect(() => {
    if (faqEntry?.isIntersecting) setFaqVisible(true);
  }, [faqEntry?.isIntersecting]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: "smooth" });
    }
    close();
  };

  return (
    <AppShell
      layout="alt"
      header={{ height: 70 }}
      navbar={{
        width: 260,
        breakpoint: "md",
        collapsed: { desktop: true, mobile: !opened },
      }}
    >
      <Header opened={opened} toggle={toggle} scrollTo={scrollTo} />
      <AppShell.Navbar py={20} px={20}>
        <Flex justify="space-between">
          <Stack gap={8} align="flex-start">
            {navItems.map((item) => (
              <Button
                justify="flex-start"
                key={item.label}
                variant="subtle"
                fullWidth
                style={{ color: "var(--text-primary)" }}
                onClick={() => scrollTo(item.id)}
              >
                {item.label}
              </Button>
            ))}
            <Button>Холбогдох</Button>
          </Stack>
          <Burger opened={opened} onClick={toggle} />
        </Flex>
      </AppShell.Navbar>

      <AppShell.Main>
        <Container
          strategy="grid"
          size={1000}
          p={0}
          style={{ backgroundColor: "var(--bg-primary)" }}
        >
          <div id="taniltsuulga">
            <Introduction />
          </div>
          <div id="bidnii-tuhai">
            <About_us />
          </div>
          <div id="product">
            <Work_w_us />
          </div>
          <div id="davuu-tal">
            <Advantage />
          </div>
          <div id="price">
            <Price />
          </div>

          <Stack
            ref={faqRef}
            justify="center"
            mb={50}
            px={isMobile ? 20 : 40}
            style={{
              opacity: faqVisible ? 1 : 0,
              transform: faqVisible ? "translateY(0)" : "translateY(40px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            <Text fz={isMobile ? 35 : 55} fw={700} c="brand" inline>
              Түгээмэл асуултууд
            </Text>
            <Accordion
              styles={{
                control: {
                  color: theme.colors[theme.primaryColor][8],
                },
              }}
            >
              {items}
            </Accordion>
          </Stack>
        </Container>

        <Footer />
      </AppShell.Main>

      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="fade-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              style={{
                ...transitionStyles,
                borderRadius: "50%",
                width: 48,
                height: 48,
                padding: 0,
              }}
              onClick={() => scrollToasd({ y: 0 })}
            >
              <IconArrowBadgeUp size={28} color="white" />
            </Button>
          )}
        </Transition>
      </Affix>
    </AppShell>
  );
}
