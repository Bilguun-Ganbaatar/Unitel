"use client";

import { AppShell, Burger, Button, Group, Image } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "Танилцуулга", id: "taniltsuulga" },
  { label: "Давуу тал", id: "davuu-tal" },
  { label: "Хамтрах", id: "hamtrah" },
  { label: "Бидний тухай", id: "bidnii-tuhai" },
];

interface HeaderProps {
  opened: boolean;
  toggle: () => void;
}

export default function Header({ opened, toggle }: HeaderProps) {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: "smooth" });
    }
    if (opened) toggle();
  };

  return (
    <AppShell.Header
      withBorder={false}
      style={{
        backgroundColor: "var(--bg-header)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: "1px solid var(--accent)",
      }}
    >
      <Group h="100%" px={40} justify="space-between" align="center" wrap="nowrap">
        <Image src="/full-logo-dark-mode.png" w={200} h={100} fit="contain" />

        {isMobile ? (
          <Group gap="sm" wrap="nowrap">
            <ThemeToggle />
            <Burger opened={opened} onClick={toggle} color="var(--text-primary)" />
          </Group>
        ) : (
          <>
            <Group>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  variant="subtle"
                  style={{ color: "var(--text-primary)" }}
                  styles={{
                    root: {
                      "&:hover": {
                        backgroundColor: "var(--accent)",
                        color: "white",
                      },
                    },
                  }}
                  onClick={() => scrollTo(item.id)}
                >
                  {item.label}
                </Button>
              ))}
            </Group>
            <Group gap="sm" wrap="nowrap">
              <Button style={{ backgroundColor: "var(--accent)", color: "var(--text-primary)" }}>
                Холбогдох
              </Button>
              <ThemeToggle />
            </Group>
          </>
        )}
      </Group>
    </AppShell.Header>
  );
}
