"use client";

import About_us from "@/src/components/aboutus";
import Advantage from "@/src/components/advantage";
import Footer from "@/src/components/footer";
import Header, {
  featureGroups,
  mobileNavItems,
  resourceItems,
  solutionItems,
  whyItems,
} from "@/src/components/header";
import Introduction from "@/src/components/introduction";
import Plans from "@/src/components/plans";
import Price from "@/src/components/price";
import NewYarmagCleanSvg from "@/src/components/svg/NewYarmagCleanSvg";
import Work_w_us from "@/src/components/work_w_us";

import {
  Accordion,
  Affix,
  AppShell,
  Badge,
  Burger,
  Button,
  Card,
  Container,
  Divider,
  Flex,
  Group,
  SimpleGrid,
  Stack,
  Text,
  Title,
  Transition,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure, useIntersection, useMediaQuery, useWindowScroll } from "@mantine/hooks";
import { IconArrowBadgeUp } from "@tabler/icons-react";
import { useEffect, useState } from "react";

const sectionAnchor = { scrollMarginTop: 90 };

export const data = [
  {
    value: "Монсөхийг ашиглаж эхлэхэд ямар мэдээлэл хэрэгтэй вэ?",
    description:
      "Объектын мэдээлэл, өрх/өмчлөгчийн мэдээлэл, СӨХ-ийн ажилтнууд, төлбөрийн ангилал, эхний үлдэгдэл зэрэг үндсэн мэдээллээр бүртгэл үүсгэнэ.",
  },
  {
    value: "Оршин суугч төлбөрөө апп дээрээс төлж болох уу?",
    description:
      "Болно. Оршин суугч төлбөрийн нэхэмжлэлээ харах, төлөх, төлбөрийн түүхээ шалгах боломжтой байхаар зохион байгуулна.",
  },
  {
    value: "СӨХ-ийн тайлан, зар мэдээ ил тод харагдах уу?",
    description:
      "Тийм. Санхүүгийн тайлан, зар мэдээ, засвар үйлчилгээний мэдээлэл, санал асуулгыг нэг платформ дээр төвлөрүүлж болно.",
  },
];

const items = data.map((item, index) => (
  <Accordion.Item key={index} value={item.value}>
    <Accordion.Control>{item.value}</Accordion.Control>
    <Accordion.Panel>{item.description}</Accordion.Panel>
  </Accordion.Item>
));

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  const isMobile = useMediaQuery("(max-width: 969px)");

  return (
    <Stack gap={8} align={isMobile ? "flex-start" : "center"} px={20}>
      <Text fz={13} fw={800} c="brand" tt="uppercase" style={{ letterSpacing: "0.08em" }}>
        {eyebrow}
      </Text>
      <Title
        order={2}
        fz={isMobile ? 28 : 42}
        fw={800}
        ta={isMobile ? "left" : "center"}
        style={{ color: "var(--text-primary)", lineHeight: 1.15 }}
      >
        {title}
      </Title>
      <Text
        size="md"
        ta={isMobile ? "left" : "center"}
        style={{ color: "var(--text-secondary)", maxWidth: 720, lineHeight: 1.7 }}
      >
        {description}
      </Text>
    </Stack>
  );
}

function InfoCard({
  id,
  label,
  description,
  badge,
}: {
  id: string;
  label: string;
  description: string;
  badge?: string;
}) {
  return (
    <Card
      id={id}
      radius="xl"
      padding="xl"
      style={{
        ...sectionAnchor,
        minHeight: 170,
        backgroundColor: "var(--bg-secondary)",
        border: "1px solid var(--mantine-color-brand-3)",
      }}
    >
      <Stack gap={10}>
        {badge && (
          <Badge color="brand" variant="light" w="fit-content">
            {badge}
          </Badge>
        )}
        <Text fz={22} fw={800} c="brand" style={{ lineHeight: 1.2 }}>
          {label}
        </Text>
        <Text size="sm" style={{ color: "var(--text-primary)", lineHeight: 1.65 }}>
          {description}
        </Text>
      </Stack>
    </Card>
  );
}

function FeatureSections() {
  return (
    <Stack id="features" py={80} gap={70} style={sectionAnchor}>
      <SectionHeader
        eyebrow="Боломжууд"
        title="PayHOA шиг ангилсан Монсөхийн боломжууд"
        description="Санхүү, харилцаа холбоо, удирдлага, бүтээгдэхүүн гэсэн үндсэн бүлгүүдээр СӨХ болон хотхоны өдөр тутмын ажлыг нэг дор төвлөрүүлнэ."
      />

      {featureGroups.map((group) => (
        <Stack key={group.id} id={group.id} px={20} gap={22} style={sectionAnchor}>
          <Group justify="space-between" align="flex-end">
            <Stack gap={4}>
              <Text fz={30} fw={800} c="brand">
                {group.title}
              </Text>
              <Text size="sm" style={{ color: "var(--text-secondary)" }}>
                {group.viewAllLabel}
              </Text>
            </Stack>
          </Group>

          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing={18}>
            {group.items.map((item) => (
              <InfoCard
                key={item.id}
                id={item.id}
                label={item.label}
                description={item.description}
                badge={group.title}
              />
            ))}
          </SimpleGrid>
        </Stack>
      ))}
    </Stack>
  );
}

function SolutionsSection() {
  return (
    <Stack id="solutions" py={70} px={20} gap={28} style={sectionAnchor}>
      <Divider color="var(--mantine-color-brand-4)" />
      <SectionHeader
        eyebrow="Шийдлүүд"
        title="Ямар байгууллагад тохирох вэ?"
        description="PayHOA-ийн Solutions хэсэгтэй адил хоёр үндсэн хэрэглэгчийн бүлэг болгож, Монсөхөд тохируулан зохион байгуулсан."
      />
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={20}>
        {solutionItems.map((item) => (
          <InfoCard key={item.id} id={item.id} label={item.label} description={item.description} />
        ))}
      </SimpleGrid>
    </Stack>
  );
}

function WhyMonsohSection() {
  return (
    <Stack id="why-monsoh" py={70} px={20} gap={28} style={sectionAnchor}>
      <Divider color="var(--mantine-color-brand-4)" />
      <SectionHeader
        eyebrow="Яагаад Монсөх?"
        title="СӨХ, хотхоны ажлыг илүү ил тод, хурдан болгоно"
        description="Бидний тухай, амжилтын түүх, FAQ, хэвлэл мэдээлэл гэсэн PayHOA-ийн Why хэсгийн бүтэцтэй адил байдлаар байрлуулсан."
      />
      <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing={18}>
        {whyItems.map((item) => (
          <InfoCard
            key={item.id}
            id={item.id === "faq" ? "why-faq-preview" : item.id}
            label={item.label}
            description={item.description}
          />
        ))}
      </SimpleGrid>
    </Stack>
  );
}

function ResourcesSection() {
  return (
    <Stack id="resources" py={70} px={20} gap={28} style={sectionAnchor}>
      <Divider color="var(--mantine-color-brand-4)" />
      <SectionHeader
        eyebrow="Нөөц"
        title="Хэрэглэгчид хэрэгтэй мэдээллээ нэг дороос авна"
        description="Нөөцийн төв, блог, нэр томьёо, мэдлэгийн сан, холбоо барих хэсгүүдийг тусдаа очих section болгон бэлдсэн."
      />
      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing={18}>
        {resourceItems.map((item) => (
          <InfoCard
            key={item.id}
            id={item.id === "contact" ? "resource-contact-preview" : item.id}
            label={item.label}
            description={item.description}
          />
        ))}
      </SimpleGrid>
    </Stack>
  );
}

function PlatformActionsSection() {
  return (
    <Stack py={70} px={20} gap={28} style={sectionAnchor}>
      <Divider color="var(--mantine-color-brand-4)" />
      <SectionHeader
        eyebrow="Платформ"
        title="Төлбөр төлөх, нэвтрэх, бүртгүүлэх"
        description="Header-ийн баруун талын PayHOA CTA товчнуудтай адил гурван үндсэн үйлдэлд зориулсан хэсэг."
      />
      <SimpleGrid cols={{ base: 1, sm: 3 }} spacing={18}>
        <InfoCard
          id="make-payment"
          label="Төлбөр төлөх"
          description="Оршин суугч СӨХ, ус, цахилгаан, үйлчилгээний төлбөрөө нэг дороос шалгаж төлөх хэсэг."
        />
        <InfoCard
          id="login"
          label="Нэвтрэх"
          description="Оршин суугч, СӨХ-ийн ажилтан, админ эрхээр системдээ нэвтрэх хэсэг."
        />
        <InfoCard
          id="sign-up"
          label="Бүртгүүлэх"
          description="СӨХ, хотхон, менежментийн компани Монсөх ашиглаж эхлэх хүсэлтээ илгээх хэсэг."
        />
      </SimpleGrid>
    </Stack>
  );
}

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
        width: 300,
        breakpoint: "md",
        collapsed: { desktop: true, mobile: !opened },
      }}
    >
      <Header opened={opened} toggle={toggle} scrollTo={scrollTo} />
      <AppShell.Navbar py={20} px={20}>
        <Flex justify="space-between" align="flex-start" gap={10}>
          <Stack gap={4} align="stretch" style={{ flex: 1 }}>
            {mobileNavItems.map((item) => (
              <Button
                justify="flex-start"
                key={`${item.id}-${item.label}`}
                variant="subtle"
                size="sm"
                fullWidth
                style={{ color: "var(--text-primary)" }}
                onClick={() => scrollTo(item.id)}
              >
                {item.label}
              </Button>
            ))}
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
          <div
            id="taniltsuulga"
            style={{
              ...sectionAnchor,
              position: "relative",
              overflow: "hidden",
              minHeight: "760px",
              width: "100vw",
              marginLeft: "calc(50% - 50vw)",
              marginRight: "calc(50% - 50vw)",
            }}
          >
            <NewYarmagCleanSvg
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                zIndex: 0,
              }}
            />

            <div style={{ position: "relative", zIndex: 1 }}>
              <Introduction />
            </div>
          </div>

          <FeatureSections />
          <SolutionsSection />

          <div id="bidnii-tuhai" style={sectionAnchor}>
            <About_us />
          </div>

          <div id="product" style={sectionAnchor}>
            <Work_w_us />
          </div>

          <div id="davuu-tal" style={sectionAnchor}>
            <Advantage />
          </div>

          <div id="pricing" style={sectionAnchor}>
            <div id="price" style={sectionAnchor}>
              <Price />
            </div>
            <div id="plans" style={sectionAnchor}>
              <Plans />
            </div>
          </div>

          <WhyMonsohSection />
          <ResourcesSection />
          <PlatformActionsSection />

          <Stack
            id="faq"
            ref={faqRef}
            justify="center"
            mb={50}
            px={isMobile ? 20 : 40}
            style={{
              ...sectionAnchor,
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

        <div id="contact" style={sectionAnchor}>
          <Footer />
        </div>
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
