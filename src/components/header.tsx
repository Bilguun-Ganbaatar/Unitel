"use client";

import { AppShell, Burger, Button, Flex, Group, Image } from "@mantine/core";
import "@mantine/core/styles.css";
import { useMediaQuery } from "@mantine/hooks";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "Нүүр хуудас ", id: "taniltsuulga" },
  { label: "Бидний тухай", id: "bidnii-tuhai" },
  { label: "Бүтээгдхүүн", id: "product" },
  { label: "Давуу тал", id: "davuu-tal" },
];

interface HeaderProps {
  opened: boolean;
  toggle: () => void;
  scrollTo: (id: string) => void;
}

export default function Header({ opened, toggle, scrollTo }: HeaderProps) {
  const isMobile = useMediaQuery("(max-width: 969px)");

  return (
    <AppShell.Header
      withBorder={false}
      style={{
        backgroundColor: "var(--bg-header)",
        backdropFilter: "blur(90px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: "1px solid var(--accent)",
      }}
    >
      <Flex h="100%" px={isMobile ? 20 : 40} justify="space-between" align="center" wrap="nowrap">
        <Image src="/full-logo-dark-mode.png" w={200} h={100} fit="contain" />

        {isMobile ? (
          <Group gap="sm" wrap="nowrap">
            <ThemeToggle />
            <Burger opened={opened} onClick={toggle} />
          </Group>
        ) : (
          <>
            <Group>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  variant="subtle"
                  style={{ color: "var(--text-primary)" }}
                  onClick={() => scrollTo(item.id)}
                >
                  {item.label}
                </Button>
              ))}
            </Group>
            <Group gap="sm" wrap="nowrap">
              <Button>Холбогдох</Button>
              <ThemeToggle />
            </Group>
          </>
        )}
      </Flex>
    </AppShell.Header>
  );
}

export { navItems };
