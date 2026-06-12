"use client";

import { featureGroups, resourceItems, solutionItems, whyItems } from "@/src/data/monsohNavigation";
import {
  Accordion,
  AppShell,
  Box,
  Button,
  Divider,
  Flex,
  Group,
  Image,
  Menu,
  ScrollArea,
  SimpleGrid,
  Stack,
  Text,
  useComputedColorScheme,
} from "@mantine/core";
import "@mantine/core/styles.css";
import { useMediaQuery } from "@mantine/hooks";
import { IconChevronDown } from "@tabler/icons-react";
import type { ReactNode } from "react";
import ThemeToggle from "./ThemeToggle";

interface HeaderProps {
  opened: boolean;
  toggle: () => void;
  scrollTo: (id: string) => void;
}

function useSolidColors() {
  const colorScheme = useComputedColorScheme("light", { getInitialValueInEffect: true });
  const isDark = colorScheme === "dark";

  return {
    isDark,
    headerBg: isDark ? "#101113" : "#ffffff",
    panelBg: isDark ? "#101113" : "#ffffff",
    borderColor: isDark ? "rgba(45, 212, 191, 0.45)" : "rgba(18, 184, 134, 0.42)",
    shadow: isDark ? "0 24px 80px rgba(0,0,0,0.75)" : "0 24px 80px rgba(0,0,0,0.16)",
  };
}

function MenuLink({
  label,
  description,
  onClick,
}: {
  label: string;
  description?: string;
  onClick: () => void;
}) {
  return (
    <Menu.Item onClick={onClick} py={8} px={10} style={{ borderRadius: 10 }}>
      <Stack gap={2}>
        <Text fw={700} size="sm" style={{ color: "var(--text-primary)" }}>
          {label}
        </Text>
        {description && (
          <Text size="xs" style={{ color: "var(--text-secondary)", lineHeight: 1.35 }}>
            {description}
          </Text>
        )}
      </Stack>
    </Menu.Item>
  );
}

function NavDropdown({
  label,
  children,
  width = 720,
}: {
  label: string;
  children: ReactNode;
  width?: number;
}) {
  const { panelBg, borderColor, shadow } = useSolidColors();

  return (
    <Menu
      trigger="hover"
      openDelay={80}
      closeDelay={180}
      position="bottom-start"
      offset={10}
      withinPortal
      zIndex={200000}
    >
      <Menu.Target>
        <Button
          variant="subtle"
          radius="xl"
          rightSection={<IconChevronDown size={14} />}
          styles={{
            root: {
              color: "var(--text-primary)",
              fontWeight: 700,
              height: 38,
              paddingInline: 14,
            },
          }}
        >
          {label}
        </Button>
      </Menu.Target>

      <Menu.Dropdown
        p={16}
        style={{
          width: `min(${width}px, calc(100vw - 32px))`,
          backgroundColor: panelBg,
          opacity: 1,
          backdropFilter: "none",
          WebkitBackdropFilter: "none",
          border: `1px solid ${borderColor}`,
          borderRadius: 18,
          boxShadow: shadow,
          zIndex: 200000,
          overflow: "hidden",
        }}
      >
        {children}
      </Menu.Dropdown>
    </Menu>
  );
}

function BurgerButton({ opened, onClick }: { opened: boolean; onClick: () => void }) {
  const { isDark, borderColor } = useSolidColors();
  const lineColor = isDark ? "#ffffff" : "#111827";

  return (
    <button
      type="button"
      aria-label={opened ? "Цэс хаах" : "Цэс нээх"}
      aria-expanded={opened}
      onClick={onClick}
      style={{
        width: 44,
        height: 44,
        minWidth: 44,
        borderRadius: 999,
        border: `1px solid ${borderColor}`,
        backgroundColor: isDark ? "#101113" : "#ffffff",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
        flexShrink: 0,
        padding: 0,
        boxShadow: isDark ? "0 8px 22px rgba(0,0,0,0.35)" : "0 8px 22px rgba(0,0,0,0.08)",
      }}
    >
      <span
        style={{
          display: "block",
          width: 19,
          height: 2,
          borderRadius: 99,
          backgroundColor: lineColor,
          transform: opened ? "translateY(7px) rotate(45deg)" : "translateY(0) rotate(0deg)",
          transition: "transform 0.18s ease, background-color 0.18s ease",
        }}
      />
      <span
        style={{
          display: "block",
          width: 19,
          height: 2,
          borderRadius: 99,
          backgroundColor: lineColor,
          opacity: opened ? 0 : 1,
          transform: opened ? "scaleX(0)" : "scaleX(1)",
          transition: "opacity 0.18s ease, transform 0.18s ease, background-color 0.18s ease",
        }}
      />
      <span
        style={{
          display: "block",
          width: 19,
          height: 2,
          borderRadius: 99,
          backgroundColor: lineColor,
          transform: opened ? "translateY(-7px) rotate(-45deg)" : "translateY(0) rotate(0deg)",
          transition: "transform 0.18s ease, background-color 0.18s ease",
        }}
      />
    </button>
  );
}

function MobileNavButton({
  label,
  id,
  description,
  go,
  strong = false,
}: {
  label: string;
  id: string;
  description?: string;
  go: (id: string) => void;
  strong?: boolean;
}) {
  return (
    <Button
      variant={strong ? "light" : "subtle"}
      color="brand"
      fullWidth
      justify="flex-start"
      radius="md"
      h="auto"
      py={10}
      px={12}
      onClick={() => go(id)}
      styles={{
        root: {
          color: strong ? "var(--mantine-color-brand-7)" : "var(--text-primary)",
          border: strong ? "1px solid var(--mantine-color-brand-3)" : "none",
        },
        label: { width: "100%" },
      }}
    >
      <Stack gap={2} align="flex-start" w="100%">
        <Text fw={800} size="sm">
          {label}
        </Text>
        {description && (
          <Text size="xs" style={{ color: "var(--text-secondary)", lineHeight: 1.35 }}>
            {description}
          </Text>
        )}
      </Stack>
    </Button>
  );
}

function MobileMenu({ opened, scrollTo }: { opened: boolean; scrollTo: (id: string) => void }) {
  const { panelBg, borderColor, shadow } = useSolidColors();

  if (!opened) return null;

  const go = (id: string) => scrollTo(id);

  return (
    <Box
      style={{
        position: "fixed",
        top: 70,
        left: 0,
        right: 0,
        width: "100vw",
        height: "calc(100dvh - 70px)",
        backgroundColor: panelBg,
        borderTop: `1px solid ${borderColor}`,
        boxShadow: shadow,
        zIndex: 199999,
        overflow: "hidden",
      }}
    >
      <ScrollArea h="100%" type="auto" offsetScrollbars>
        <Stack gap={16} px={18} py={18} maw={720} mx="auto" w="100%">
          <SimpleGrid cols={3} spacing={8}>
            <Button radius="xl" color="brand" variant="light" onClick={() => go("make-payment")}>
              Төлбөр
            </Button>
            <Button radius="xl" color="brand" variant="outline" onClick={() => go("login")}>
              Нэвтрэх
            </Button>
            <Button radius="xl" color="brand" onClick={() => go("sign-up")}>
              Бүртгүүлэх
            </Button>
          </SimpleGrid>

          <Accordion
            multiple
            defaultValue={["features"]}
            variant="separated"
            radius="lg"
            styles={{
              item: {
                backgroundColor: panelBg,
                border: `1px solid ${borderColor}`,
              },
              control: {
                color: "var(--text-primary)",
                fontWeight: 900,
                fontSize: 15,
              },
              panel: { color: "var(--text-primary)" },
              chevron: { color: "var(--text-primary)" },
            }}
          >
            <Accordion.Item value="features">
              <Accordion.Control>Боломжууд</Accordion.Control>
              <Accordion.Panel>
                <Stack gap={18}>
                  {featureGroups.map((group) => (
                    <Stack key={group.id} gap={8}>
                      <Text
                        fw={900}
                        size="xs"
                        c="brand"
                        tt="uppercase"
                        style={{ letterSpacing: "0.08em", cursor: "pointer" }}
                        onClick={() => go(group.id)}
                      >
                        {group.title}
                      </Text>
                      <Stack gap={6}>
                        {group.items.map((item) => (
                          <MobileNavButton
                            key={item.id}
                            label={item.label}
                            id={item.id}
                            description={item.description}
                            go={go}
                          />
                        ))}
                      </Stack>
                    </Stack>
                  ))}
                </Stack>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="solutions">
              <Accordion.Control>Шийдлүүд</Accordion.Control>
              <Accordion.Panel>
                <Stack gap={6}>
                  {solutionItems.map((item) => (
                    <MobileNavButton
                      key={item.id}
                      label={item.label}
                      id={item.id}
                      description={item.description}
                      go={go}
                    />
                  ))}
                </Stack>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="pricing">
              <Accordion.Control>Үнийн санал</Accordion.Control>
              <Accordion.Panel>
                <Stack gap={6}>
                  <MobileNavButton
                    label="Үнийн тооцоолуур"
                    id="pricing"
                    description="Хотхоны мэдээллээ оруулаад үнийн санал харах"
                    go={go}
                    strong
                  />
                  <MobileNavButton
                    label="Багцууд"
                    id="plans"
                    description="Жижиг, дунд, том СӨХ-д тохирсон багцууд"
                    go={go}
                  />
                </Stack>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="why">
              <Accordion.Control>Яагаад Мон-Сөх?</Accordion.Control>
              <Accordion.Panel>
                <Stack gap={6}>
                  {whyItems.map((item) => (
                    <MobileNavButton
                      key={item.id}
                      label={item.label}
                      id={item.id}
                      description={item.description}
                      go={go}
                    />
                  ))}
                </Stack>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="resources">
              <Accordion.Control>Нөөц</Accordion.Control>
              <Accordion.Panel>
                <Stack gap={6}>
                  {resourceItems.map((item) => (
                    <MobileNavButton
                      key={item.id}
                      label={item.label}
                      id={item.id}
                      description={item.description}
                      go={go}
                    />
                  ))}
                </Stack>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </Stack>
      </ScrollArea>
    </Box>
  );
}

export default function Header({ opened, toggle, scrollTo }: HeaderProps) {
  const isMobile = useMediaQuery("(max-width: 1160px)");
  const { headerBg, shadow } = useSolidColors();

  const navButton = {
    color: "var(--text-primary)",
    fontWeight: 700,
    height: 38,
    paddingInline: 14,
  };

  return (
    <>
      <AppShell.Header
        withBorder={false}
        style={{
          width: "100vw",
          left: 0,
          right: 0,
          backgroundColor: headerBg,
          opacity: 1,
          backdropFilter: "none",
          WebkitBackdropFilter: "none",
          borderBottom: "1px solid var(--mantine-color-brand-4)",
          boxShadow: shadow,
          zIndex: 200000,
          isolation: "isolate",
        }}
      >
        <Flex
          h="100%"
          w="100%"
          maw={1280}
          mx="auto"
          px={{ base: 14, md: 40 }}
          justify="space-between"
          align="center"
          wrap="nowrap"
        >
          <Image
            src="/full-logo-dark-mode.png"
            w={isMobile ? 116 : 150}
            h={isMobile ? 46 : 56}
            fit="contain"
            style={{ cursor: "pointer", flexShrink: 0 }}
            onClick={() => scrollTo("taniltsuulga")}
          />

          {isMobile ? (
            <Group gap={8} wrap="nowrap" style={{ flexShrink: 0 }}>
              <ThemeToggle />
              <BurgerButton opened={opened} onClick={toggle} />
            </Group>
          ) : (
            <>
              <Group gap={4} wrap="nowrap">
                <NavDropdown label="Боломжууд" width={1180}>
                  <SimpleGrid cols={5} spacing={18} verticalSpacing={18}>
                    {featureGroups.map((group) => (
                      <Stack key={group.title} gap={6}>
                        <Text
                          fw={800}
                          size="xs"
                          tt="uppercase"
                          c="brand"
                          style={{ letterSpacing: "0.08em", cursor: "pointer" }}
                          onClick={() => scrollTo(group.id)}
                        >
                          {group.title}
                        </Text>

                        <MenuLink
                          label={group.viewAllLabel}
                          description="Бүгдийг харах"
                          onClick={() => scrollTo(group.id)}
                        />

                        <Divider my={4} />

                        {group.items.map((item) => (
                          <MenuLink
                            key={item.id}
                            label={item.label}
                            description={item.description}
                            onClick={() => scrollTo(item.id)}
                          />
                        ))}
                      </Stack>
                    ))}
                  </SimpleGrid>
                </NavDropdown>

                <NavDropdown label="Шийдлүүд" width={390}>
                  <Stack gap={6}>
                    {solutionItems.map((item) => (
                      <MenuLink
                        key={item.id}
                        label={item.label}
                        description={item.description}
                        onClick={() => scrollTo(item.id)}
                      />
                    ))}
                  </Stack>
                </NavDropdown>

                <Button
                  variant="subtle"
                  radius="xl"
                  styles={{ root: navButton }}
                  onClick={() => scrollTo("pricing")}
                >
                  Үнийн санал
                </Button>

                <NavDropdown label="Яагаад Мон-Сөх?" width={420}>
                  <Stack gap={6}>
                    {whyItems.map((item) => (
                      <MenuLink
                        key={item.id}
                        label={item.label}
                        description={item.description}
                        onClick={() => scrollTo(item.id)}
                      />
                    ))}
                  </Stack>
                </NavDropdown>

                <NavDropdown label="Нөөц" width={420}>
                  <Stack gap={6}>
                    {resourceItems.map((item) => (
                      <MenuLink
                        key={item.id}
                        label={item.label}
                        description={item.description}
                        onClick={() => scrollTo(item.id)}
                      />
                    ))}
                  </Stack>
                </NavDropdown>
              </Group>

              <Group gap="sm" wrap="nowrap">
                <Button
                  variant="subtle"
                  radius="xl"
                  styles={{ root: { ...navButton, color: "var(--mantine-color-brand-7)" } }}
                  onClick={() => scrollTo("make-payment")}
                >
                  Төлбөр төлөх
                </Button>
                <Button
                  variant="outline"
                  radius="xl"
                  color="brand"
                  fw={700}
                  onClick={() => scrollTo("login")}
                >
                  Нэвтрэх
                </Button>
                <Button radius="xl" color="brand" fw={700} onClick={() => scrollTo("sign-up")}>
                  Бүртгүүлэх
                </Button>
                <ThemeToggle />
              </Group>
            </>
          )}
        </Flex>
      </AppShell.Header>

      {isMobile && <MobileMenu opened={opened} scrollTo={scrollTo} />}
    </>
  );
}
