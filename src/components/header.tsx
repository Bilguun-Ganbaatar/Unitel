"use client";

import Link from "next/link";
import { useState } from "react";
import { Group, Button, Menu, Burger, Drawer, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export default function Header() {
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <>
      <Group justify="space-between" p="md">
        <Link
          href="/home"
          style={{
            textDecoration: "none",
            color: "inherit",
            fontSize: "32px",
            fontWeight: "bold",
          }}
        >
          UNITEL
        </Link>

        <Group visibleFrom="md">
          <Menu trigger="hover">
            <Menu.Target>
              <Button variant="subtle">Бүтээгдэхүүн</Button>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item>Дараа төлбөрт үйлчилгээ</Menu.Item>
              <Menu.Item>Хосолсон төлбөрт үйлчилгээ</Menu.Item>
              <Menu.Item>Урьдчилсан төлбөрт үйлчилгээ</Menu.Item>
              <Menu.Item>Дата үйлчилгээ</Menu.Item>
              <Menu.Item>Гэр интернэт үйлчилгээ</Menu.Item>
              <Menu.Item>Олон улсын үйлчилгээ</Menu.Item>
              <Menu.Item>Tourism</Menu.Item>
              <Menu.Item>Нэмэлт үйлчилгээ</Menu.Item>
            </Menu.Dropdown>
          </Menu>

          <Link href="/home/bonus">
            <Button variant="subtle">Урамшуулал</Button>
          </Link>

          <Link href="/home/phone">
            <Button variant="subtle">Гар утас</Button>
          </Link>

          <Link href="/home/bill">
            <Button color="lime">НӨАТ</Button>
          </Link>
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="md" />
      </Group>

      <Drawer opened={opened} onClose={close} title="UNITEL" hiddenFrom="md">
        <Stack>
          <Link href="/home" onClick={close}>
            Нүүр
          </Link>

          <Link href="/home/bonus" onClick={close}>
            Урамшуулал
          </Link>

          <Link href="/home/phone" onClick={close}>
            Гар утас
          </Link>

          <Link href="/home/bill" onClick={close}>
            НӨАТ
          </Link>
        </Stack>
      </Drawer>
    </>
  );
}
