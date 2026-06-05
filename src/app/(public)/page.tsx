"use client";

import About_us from "@/src/components/aboutus";
import Advantage from "@/src/components/advantage";
import Footer from "@/src/components/footer";
import Header from "@/src/components/header";
import Introduction from "@/src/components/introduction";
import Work_w_us from "@/src/components/work_w_us";
import { AppShell, Burger, Button, Container, Flex, Stack } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";

const navItems = [
  { label: "Танилцуулга", id: "taniltsuulga" },
  { label: "Давуу тал", id: "davuu-tal" },
  { label: "Хамтрах", id: "hamtrah" },
  { label: "Бидний тухай", id: "bidnii-tuhai" },
];

export default function HomePage() {
  const [opened, { toggle, close }] = useDisclosure();
  const isMobile = useMediaQuery("(max-width: 969px)");

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
        width: 260,
        breakpoint: "md",
        collapsed: { desktop: true, mobile: !opened },
      }}
    >
      <Header opened={opened} toggle={toggle} scrollTo={scrollTo} />{" "}
      <AppShell.Navbar py={20} px={20}>
        <Flex justify={"space-between"}>
          <Stack gap={8} align="flex-start">
            {navItems.map((item) => (
              <Button
                justify="flex-start"
                key={item.label}
                variant="subtle"
                fullWidth
                style={{ color: "var(--text-primary)" }}
                onClick={() => scrollTo(item.id)}
              >
                {item.label}
              </Button>
            ))}
            <Button>Холбогдох</Button>
          </Stack>
          <Burger opened={opened} onClick={toggle} />
        </Flex>
      </AppShell.Navbar>
      <AppShell.Main>
        <Container
          strategy="grid"
          size={1200}
          p={0}
          style={{ backgroundColor: "var(--bg-primary)" }}
        >
          <div id="taniltsuulga">
            <Introduction />
          </div>
          <div id="davuu-tal">
            <Advantage />
          </div>
          <div id="hamtrah">
            <Work_w_us />
          </div>
          <div id="bidnii-tuhai">
            <About_us />
          </div>
        </Container>
        <Footer />
      </AppShell.Main>
    </AppShell>
  );
}
