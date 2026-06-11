"use client";

import { Badge, Card, Stack, Text } from "@mantine/core";
import { sectionAnchor } from "@/src/data/monsohNavigation";

export default function InfoCard({
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
