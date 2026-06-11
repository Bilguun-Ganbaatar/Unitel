"use client";

import {
  AppShell,
  Burger,
  Button,
  Divider,
  Flex,
  Group,
  Image,
  Menu,
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

export const featureGroups = [
  {
    title: "Санхүү",
    id: "features-financial",
    items: [
      {
        label: "Нэхэмжлэл & төлбөр",
        description: "Төлбөрөө хурдан, хялбар авах",
        id: "feature-invoicing-payments",
      },
      {
        label: "Нягтлан бодох бүртгэл",
        description: "Энгийн, найдвартай санхүүгийн бүртгэл",
        id: "feature-accounting",
      },
      {
        label: "Төсөв & тайлан",
        description: "Удирдах зөвлөлд зориулсан мэргэжлийн тайлан",
        id: "feature-budgets-reports",
      },
      {
        label: "Банкны холболт",
        description: "Гүйлгээ гараар шивэх ажлыг багасгана",
        id: "feature-bank-integrations",
      },
      {
        label: "Өглөг & нийлүүлэгч",
        description: "Зөвшөөрөл, төлбөрийг автомат урсгалд оруулах",
        id: "feature-payables-vendors",
      },
      {
        label: "Санхүүгийн бүртгэлийн үйлчилгээ",
        description: "СӨХ-ийн санхүүгийн бүртгэлд мэргэжлийн дэмжлэг",
        id: "feature-bookkeeping-services",
      },
    ],
    viewAllLabel: "Санхүүгийн бүх боломж",
  },
  {
    title: "Харилцаа холбоо",
    id: "features-communications",
    items: [
      {
        label: "Нийтэд мэдээлэл хүргэх",
        description: "Мессеж, имэйл, дуудлагаар оршин суугчдад хүрэх",
        id: "feature-mass-communication",
      },
      {
        label: "Мэдэгдлийн булан",
        description: "Зар, мэдэгдлийг нэг дор эмх цэгцтэй хүргэх",
        id: "feature-mailroom",
      },
      {
        label: "Хэлэлцүүлгийн самбар",
        description: "Хотхоны дотоод форум, санал солилцоо",
        id: "feature-message-boards",
      },
      {
        label: "Вэб хуудас бүтээгч",
        description: "СӨХ, хотхонд зориулсан танилцуулга вэб хуудас",
        id: "feature-website-builder",
      },
    ],
    viewAllLabel: "Харилцаа холбооны бүх боломж",
  },
  {
    title: "Удирдлага",
    id: "features-management",
    items: [
      {
        label: "Зөрчил бүртгэл",
        description: "Дотоод журам, зөрчлийг хялбар бүртгэж хянах",
        id: "feature-violations",
      },
      {
        label: "Хүсэлтийн маягт",
        description: "Засвар, санал, хүсэлтийг inbox-оос салгах",
        id: "feature-request-forms",
      },
      {
        label: "Баримт бичгийн сан",
        description: "Гэрээ, дүрэм, тайлангаа хадгалж хуваалцах",
        id: "feature-document-storage",
      },
      {
        label: "Санал асуулга & судалгаа",
        description: "Цаасгүй санал хураалт, оршин суугчдын судалгаа",
        id: "feature-voting-surveys",
      },
      {
        label: "Оршин суугчийн портал",
        description: "Оршин суугч бүрт зориулсан нэг нэгдсэн төв",
        id: "feature-owner-portals",
      },
      {
        label: "Шилжилтийн баримт",
        description: "Лавлагаа, өмчлөл шилжилтийн бичиг баримтыг цэгцлэх",
        id: "feature-resale-documents",
      },
    ],
    viewAllLabel: "Удирдлагын бүх боломж",
  },
  {
    title: "Бүтээгдэхүүн",
    id: "features-product",
    items: [
      {
        label: "Интеграци",
        description: "Хэрэгтэй системүүдийг нэг дор холбох",
        id: "feature-integrations",
      },
      {
        label: "Аюулгүй байдал",
        description: "Өгөгдөл хамгаалалт, найдвартай хандалт",
        id: "feature-security",
      },
      {
        label: "Дэмжлэг & нэвтрүүлэлт",
        description: "Систем нэвтрүүлэх болон хэрэглэгчийн тусламж",
        id: "feature-support-onboarding",
      },
    ],
    viewAllLabel: "Бүтээгдэхүүний бүх боломж",
  },
];

export const solutionItems = [
  {
    label: "Өөрөө удирддаг СӨХ",
    description: "Удирдах зөвлөл, СӨХ-ийн ажилтнуудад зориулсан өдөр тутмын удирдлага",
    id: "solution-self-managed",
  },
  {
    label: "Менежментийн компаниуд",
    description: "Олон хотхон, олон объект удирддаг байгууллагад зориулсан шийдэл",
    id: "solution-property-management",
  },
];

export const whyItems = [
  {
    label: "Бидний тухай",
    description: "Монсөхийг Монгол хотхон, СӨХ-ийн бодит хэрэгцээнд зориулж хөгжүүлсэн.",
    id: "why-about-us",
  },
  {
    label: "Амжилтын түүхүүд",
    description: "Хотхон, СӨХ-үүд өдөр тутмын ажлаа хэрхэн хялбарчилж байгаа жишээ.",
    id: "why-success-stories",
  },
  {
    label: "Түгээмэл асуултууд",
    description: "Нэвтрүүлэлт, төлбөр, хэрэглээтэй холбоотой хамгийн нийтлэг асуултууд.",
    id: "faq",
  },
  {
    label: "Хэвлэл мэдээлэл",
    description: "Монсөхийн тухай мэдээ, танилцуулга, шинэчлэлүүд.",
    id: "why-press",
  },
];

export const resourceItems = [
  {
    label: "Нөөцийн төв",
    description: "СӨХ-ийн дижитал шилжилтэд хэрэгтэй бүх мэдээлэл.",
    id: "resource-hub",
  },
  {
    label: "Блог",
    description: "Хотхон, төлбөр, харилцаа холбоо, удирдлагын зөвлөмжүүд.",
    id: "resource-blog",
  },
  {
    label: "Нэр томьёоны тайлбар",
    description: "СӨХ, хотхон, санхүүгийн хэрэглэгддэг ойлголтуудыг энгийнээр.",
    id: "resource-glossary",
  },
  {
    label: "Мэдлэгийн сан",
    description: "Систем ашиглах заавар, алхамчилсан тусламж.",
    id: "resource-knowledge-base",
  },
  {
    label: "Холбоо барих",
    description: "Борлуулалт, дэмжлэгийн багтай холбогдох.",
    id: "contact",
  },
];

export const mobileNavItems = [
  { label: "Нүүр", id: "taniltsuulga" },
  ...featureGroups.flatMap((group) => [
    { label: group.title, id: group.id },
    ...group.items.map((item) => ({ label: `• ${item.label}`, id: item.id })),
  ]),
  ...solutionItems.map((item) => ({ label: item.label, id: item.id })),
  { label: "Үнийн санал", id: "pricing" },
  ...whyItems.map((item) => ({ label: item.label, id: item.id })),
  ...resourceItems.map((item) => ({ label: item.label, id: item.id })),
  { label: "Төлбөр төлөх", id: "make-payment" },
  { label: "Нэвтрэх", id: "login" },
  { label: "Бүртгүүлэх", id: "sign-up" },
];

interface HeaderProps {
  opened: boolean;
  toggle: () => void;
  scrollTo: (id: string) => void;
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
  const colorScheme = useComputedColorScheme("light", { getInitialValueInEffect: true });
  const isDark = colorScheme === "dark";
  const dropdownBg = isDark ? "#101113" : "#ffffff";
  const dropdownBorder = isDark ? "rgba(45, 212, 191, 0.55)" : "rgba(18, 184, 134, 0.55)";

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
          background: dropdownBg,
          backgroundColor: dropdownBg,
          backgroundImage: "none",
          opacity: 1,
          backdropFilter: "none",
          WebkitBackdropFilter: "none",
          border: `1px solid ${dropdownBorder}`,
          borderRadius: 18,
          boxShadow: isDark ? "0 28px 90px rgba(0,0,0,0.85)" : "0 28px 90px rgba(0,0,0,0.24)",
          zIndex: 200000,
          overflow: "hidden",
        }}
      >
        {children}
      </Menu.Dropdown>
    </Menu>
  );
}

export default function Header({ opened, toggle, scrollTo }: HeaderProps) {
  const isMobile = useMediaQuery("(max-width: 1160px)");
  const colorScheme = useComputedColorScheme("light", { getInitialValueInEffect: true });
  const isDark = colorScheme === "dark";

  const navButton = {
    color: "var(--text-primary)",
    fontWeight: 700,
    height: 38,
    paddingInline: 14,
  };

  return (
    <AppShell.Header
      withBorder={false}
      style={{
        background: isDark ? "#101113" : "#ffffff",
        backgroundColor: isDark ? "#101113" : "#ffffff",
        backgroundImage: "none",
        opacity: 1,
        backdropFilter: "none",
        WebkitBackdropFilter: "none",
        borderBottom: "1px solid var(--mantine-color-brand-4)",
        boxShadow: isDark ? "0 8px 28px rgba(0,0,0,0.45)" : "0 8px 28px rgba(0,0,0,0.08)",
        zIndex: 200000,
        isolation: "isolate",
      }}
    >
      <Flex h="100%" px={isMobile ? 16 : 40} justify="space-between" align="center" wrap="nowrap">
        <Image
          src="/full-logo-dark-mode.png"
          w={150}
          h={56}
          fit="contain"
          style={{ cursor: "pointer" }}
          onClick={() => scrollTo("taniltsuulga")}
        />

        {isMobile ? (
          <Group gap={8} wrap="nowrap" style={{ flexShrink: 0 }}>
            <Button
              size="sm"
              radius="xl"
              color="brand"
              fw={800}
              onClick={() => scrollTo("sign-up")}
            >
              Бүртгүүлэх
            </Button>
            <ThemeToggle />
            <Burger
              opened={opened}
              onClick={toggle}
              aria-label={opened ? "Цэс хаах" : "Цэс нээх"}
              color="var(--text-primary)"
            />
          </Group>
        ) : (
          <>
            <Group gap={4} wrap="nowrap">
              <NavDropdown label="Боломжууд" width={920}>
                <SimpleGrid cols={4} spacing={18}>
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

                      {group.items.map((item) => (
                        <MenuLink
                          key={item.id}
                          label={item.label}
                          description={item.description}
                          onClick={() => scrollTo(item.id)}
                        />
                      ))}

                      <Divider my={4} />
                      <MenuLink
                        label={group.viewAllLabel}
                        description="Бүгдийг харах"
                        onClick={() => scrollTo(group.id)}
                      />
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

              <NavDropdown label="Яагаад Монсөх?" width={420}>
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
  );
}
