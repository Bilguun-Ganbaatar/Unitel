"use client";

import {
  Badge,
  Button,
  Card,
  Divider,
  Group,
  List,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { useIntersection, useMediaQuery } from "@mantine/hooks";
import { IconCheck, IconX } from "@tabler/icons-react";
import { useEffect, useState } from "react";

const plans = [
  {
    name: "Жижиг",
    price: "180,000₮",
    subtitle: "50 хүртэл өрх",
    featured: false,
    features: [
      { text: "Сошиал & Чат", included: true },
      { text: "Хотхоны мэдээлэл", included: true },
      { text: "Онлайн төлбөр", included: true },
      { text: "Паркинг систем", included: false },
      { text: "Контор модуль", included: false },
      { text: "Дэд хотхон", included: false },
    ],
  },
  {
    name: "Дунд",
    price: "280,000₮",
    subtitle: "50–150 өрх",
    featured: true,
    features: [
      { text: "Сошиал & Чат", included: true },
      { text: "Хотхоны мэдээлэл", included: true },
      { text: "Онлайн төлбөр", included: true },
      { text: "Паркинг систем", included: true },
      { text: "Контор модуль", included: false },
      { text: "Дэд хотхон", included: false },
    ],
  },
  {
    name: "Том",
    price: "420,000₮",
    subtitle: "150+ өрх",
    featured: false,
    features: [
      { text: "Сошиал & Чат", included: true },
      { text: "Хотхоны мэдээлэл", included: true },
      { text: "Онлайн төлбөр", included: true },
      { text: "Паркинг систем", included: true },
      { text: "Контор модуль", included: true },
      { text: "Дэд хотхон", included: true },
    ],
  },
];

export default function Plans() {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const { ref, entry } = useIntersection({ threshold: 0.1 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (entry?.isIntersecting) setVisible(true);
  }, [entry?.isIntersecting]);

  return (
    <Stack
      ref={ref}
      px={20}
      py={60}
      gap={40}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      <div style={{ height: "0.5px", background: "var(--mantine-color-brand-6)" }} />

      <Stack gap={8} align={isMobile ? "flex-start" : "center"}>
        <Text
          fz={13}
          fw={500}
          c="brand"
          style={{ textTransform: "uppercase", letterSpacing: "0.05em" }}
        >
          Үнийн санал
        </Text>
        <Title
          order={2}
          fz={isMobile ? 28 : 38}
          fw={500}
          ta={isMobile ? "left" : "center"}
          style={{ color: "var(--text-primary)" }}
        >
          Таны СӨХ-нд тохирох төлөвлөгөө
        </Title>
        <Text
          size="md"
          ta={isMobile ? "left" : "center"}
          style={{ color: "var(--text-primary)", maxWidth: 500 }}
        >
          Бүх багцад НӨАТ орсон бөгөөд суурилуулалт үнэгүй.
        </Text>
      </Stack>

      <SimpleGrid cols={{ base: 1, sm: 3 }} spacing={20}>
        {plans.map((plan) => (
          <Card
            key={plan.name}
            radius="lg"
            padding="xl"
            style={{
              border: plan.featured
                ? "1.5px solid var(--mantine-color-brand-6)"
                : "0.5px solid var(--mantine-color-brand-3)",
              backgroundColor: plan.featured ? "rgba(11,176,193,0.06)" : "var(--bg-secondary)",
              position: "relative",
            }}
          >
            {plan.featured && (
              <Badge
                color="brand"
                variant="filled"
                size="sm"
                style={{ position: "absolute", top: 16, right: 16 }}
              >
                Эрэлттэй
              </Badge>
            )}

            <Stack gap={4} mb={8}>
              <Text fw={600} fz={18} style={{ color: "var(--text-primary)" }}>
                {plan.name}
              </Text>
              <div
                style={{
                  width: 32,
                  height: 3,
                  borderRadius: 99,
                  backgroundColor: "var(--mantine-color-brand-6)",
                }}
              />
            </Stack>

            <Group align="baseline" gap={6} mb={4}>
              <Text fz={32} fw={700} c="brand">
                {plan.price}
              </Text>
              <Text size="sm" style={{ color: "var(--text-primary)" }}>
                /сар
              </Text>
            </Group>
            <Text size="sm" style={{ color: "var(--text-primary)" }} mb={20}>
              {plan.subtitle}
            </Text>

            <Divider color="var(--mantine-color-brand-3)" mb={16} />

            <List spacing={10} mb={28}>
              {plan.features.map((f) => (
                <List.Item
                  key={f.text}
                  icon={
                    <ThemeIcon
                      size={18}
                      radius="xl"
                      color={f.included ? "brand" : "gray"}
                      variant={f.included ? "filled" : "light"}
                    >
                      {f.included ? <IconCheck size={11} /> : <IconX size={11} />}
                    </ThemeIcon>
                  }
                >
                  <Text
                    size="sm"
                    style={{
                      color: f.included ? "var(--text-primary)" : "var(--text-secondary)",
                      textDecoration: f.included ? "none" : "line-through",
                    }}
                  >
                    {f.text}
                  </Text>
                </List.Item>
              ))}
            </List>

            <Button
              fullWidth
              radius="md"
              color="brand"
              variant={plan.featured ? "filled" : "outline"}
            >
              Эхлэх
            </Button>
          </Card>
        ))}
      </SimpleGrid>

      <Text size="xs" ta="center" style={{ color: "var(--text-secondary)" }}>
        * Үнэ нь өрхийн тооноос хамаарч өөрчлөгдөж болно. Дэлгэрэнгүй мэдээлэл авахыг хүсвэл
        холбогдоно уу.
      </Text>
    </Stack>
  );
}
