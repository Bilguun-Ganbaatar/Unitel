"use client";

import About_us from "@/src/components/aboutus";
import Advantage from "@/src/components/advantage";
import Footer from "@/src/components/footer";
import Header from "@/src/components/header";
import Plans from "@/src/components/plans";
import Price from "@/src/components/price";
import FaqSection from "@/src/components/sections/FaqSection";
import HeroSection from "@/src/components/sections/HeroSection";
import {
  FeatureSections,
  PlatformActionsSection,
  ResourcesSection,
  SolutionsSection,
  WhyMonsohSection,
} from "@/src/components/sections/MonsohContentSections";
import ScrollTopButton from "@/src/components/sections/ScrollTopButton";
import Work_w_us from "@/src/components/work_w_us";
import { sectionAnchor } from "@/src/data/monsohNavigation";

import { AppShell, Container } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export default function HomePage() {
  const [opened, { toggle, close }] = useDisclosure(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);

    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: "smooth" });
    }

    close();
  };

  return (
    <AppShell layout="alt" header={{ height: 70 }}>
      <Header opened={opened} toggle={toggle} scrollTo={scrollTo} />

      <AppShell.Main>
        <Container
          strategy="grid"
          size={1000}
          p={0}
          style={{ backgroundColor: "var(--bg-primary)" }}
        >
          <HeroSection />
          <FeatureSections />
          <SolutionsSection />

          <div id="bidnii-tuhai" style={sectionAnchor}>
            <About_us />
          </div>

          <div id="product" style={sectionAnchor}>
            <Work_w_us />
          </div>

          <div id="davuu-tal" style={sectionAnchor}>
            <Advantage />
          </div>

          <div id="pricing" style={sectionAnchor}>
            <div id="price" style={sectionAnchor}>
              <Price />
            </div>
            <div id="plans" style={sectionAnchor}>
              <Plans />
            </div>
          </div>

          <WhyMonsohSection />
          <ResourcesSection />
          <PlatformActionsSection />
          <FaqSection />
        </Container>

        <div id="contact" style={sectionAnchor}>
          <Footer />
        </div>
      </AppShell.Main>

      <ScrollTopButton />
    </AppShell>
  );
}
