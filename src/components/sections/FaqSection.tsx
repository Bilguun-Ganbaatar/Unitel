"use client";

import { Accordion, Stack, Text, useMantineTheme } from "@mantine/core";
import { useIntersection, useMediaQuery } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { faqData, sectionAnchor } from "@/src/data/monsohNavigation";

export default function FaqSection() {
  const isMobile = useMediaQuery("(max-width: 969px)");
  const theme = useMantineTheme();
  const { ref: faqRef, entry: faqEntry } = useIntersection({ threshold: 0.2 });
  const [faqVisible, setFaqVisible] = useState(false);

  useEffect(() => {
    if (faqEntry?.isIntersecting) setFaqVisible(true);
  }, [faqEntry?.isIntersecting]);

  return (
    <Stack
      id="faq"
      ref={faqRef}
      justify="center"
      mb={50}
      px={isMobile ? 20 : 40}
      style={{
        ...sectionAnchor,
        opacity: faqVisible ? 1 : 0,
        transform: faqVisible ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      <Text fz={isMobile ? 35 : 55} fw={700} c="brand" inline>
        Түгээмэл асуултууд
      </Text>
      <Accordion
        styles={{
          control: {
            color: theme.colors[theme.primaryColor][8],
          },
        }}
      >
        {faqData.map((item) => (
          <Accordion.Item key={item.value} value={item.value}>
            <Accordion.Control>{item.value}</Accordion.Control>
            <Accordion.Panel>{item.description}</Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </Stack>
  );
}
