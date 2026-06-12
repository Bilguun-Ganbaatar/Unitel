"use client";

import { sectionAnchor } from "@/src/data/monsohNavigation";
import { Badge, Card, Image, Stack, Text } from "@mantine/core";

export default function InfoCard({
  id,
  label,
  description,
  badge,
  image,
}: {
  id: string;
  label: string;
  description: string;
  badge?: string;
  image?: string;
}) {
  return (
    <Card
      id={id}
      radius="lg"
      padding="lg"
      style={{
        scrollMarginTop: sectionAnchor.scrollMarginTop,
        backgroundColor: "var(--bg-secondary)",
        border: "1px solid var(--mantine-color-brand-3)",
        overflow: "hidden",
      }}
    >
      {image && <Image src={image} h={150} fit="cover" radius="md" mb={16} alt={label} />}

      <Stack gap={8}>
        {badge && (
          <Badge color="brand" variant="light" w="fit-content">
            {badge}
          </Badge>
        )}

        <Text fw={800} fz={20} style={{ color: "var(--text-primary)" }}>
          {label}
        </Text>

        <Text size="sm" style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>
          {description}
        </Text>
      </Stack>
    </Card>
  );
}
