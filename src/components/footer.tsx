"use client";

import Link from "next/link";
import { Group, Text } from "@mantine/core";

export default function Footer() {
  return (
    <footer
      style={{
        marginTop: "50px",
        padding: "20px 0",
      }}
    >
      <Group justify="center" gap="xs">
        <Link href="/about" style={{ fontSize: "14px", color: "#666" }}>
          Бидний тухай
        </Link>

        <Text c="dimmed">|</Text>

        <Link href="/about" style={{ fontSize: "14px", color: "#666" }}>
          Тогтвортой хөгжил
        </Link>

        <Text c="dimmed">|</Text>

        <Link href="/about" style={{ fontSize: "14px", color: "#666" }}>
          Салбарын байршил
        </Link>

        <Text c="dimmed">|</Text>

        <Link href="/about" style={{ fontSize: "14px", color: "#666" }}>
          Хэвлэлийн мэдээ
        </Link>

        <Text c="dimmed">|</Text>

        <Link href="/about" style={{ fontSize: "14px", color: "#666" }}>
          Хүний нөөц
        </Link>

        <Text c="dimmed">|</Text>

        <Link href="/about" style={{ fontSize: "14px", color: "#666" }}>
          Холбоо барих
        </Link>

        <Text c="dimmed">|</Text>

        <Link href="/about" style={{ fontSize: "14px", color: "#666" }}>
          Лого
        </Link>

        <Text c="dimmed" size="sm">
          © 2006-2026 Юнител групп
        </Text>
      </Group>
    </footer>
  );
}
