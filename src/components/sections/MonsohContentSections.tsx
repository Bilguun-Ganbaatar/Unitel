"use client";

import {
  featureGroups,
  resourceItems,
  sectionAnchor,
  solutionItems,
  whyItems,
} from "@/src/data/monsohNavigation";
import { Divider, SimpleGrid, Stack, Text } from "@mantine/core";
import InfoCard from "./InfoCard";
import SectionHeader from "./SectionHeader";

export function FeatureSections() {
  return (
    <Stack id="features" py={80} gap={70} style={sectionAnchor}>
      <SectionHeader
        eyebrow="Боломжууд"
        title="Мон-Сөхийн боломжууд"
        description="Санхүү, харилцаа холбоо, удирдлага, бүтээгдэхүүн гэсэн үндсэн бүлгүүдээр СӨХ болон хотхоны өдөр тутмын ажлыг нэг дор төвлөрүүлнэ."
      />

      {featureGroups.map((group) => (
        <Stack key={group.id} id={group.id} px={20} gap={22} style={sectionAnchor}>
          <Stack gap={8}>
            <Text
              size="sm"
              fw={800}
              c="brand"
              style={{
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              {group.viewAllLabel}
            </Text>

            <Text fz={30} fw={800} style={{ color: "var(--text-primary)" }}>
              {group.title}
            </Text>
          </Stack>

          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing={18}>
            {group.items.map((item) => (
              <InfoCard
                key={item.id}
                id={item.id}
                label={item.label}
                description={item.description}
                badge={group.title}
                image={item.image}
              />
            ))}
          </SimpleGrid>
        </Stack>
      ))}
    </Stack>
  );
}

export function SolutionsSection() {
  return (
    <Stack id="solutions" py={70} px={20} gap={28} style={sectionAnchor}>
      <Divider color="var(--mantine-color-brand-4)" />
      <SectionHeader
        eyebrow="Шийдлүүд"
        title="Ямар байгууллагад тохирох вэ?"
        description="Өөрөө удирддаг СӨХ болон олон объект удирддаг менежментийн компаниудад тохирсон хоёр үндсэн шийдэл."
      />
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={20}>
        {solutionItems.map((item) => (
          <InfoCard key={item.id} id={item.id} label={item.label} description={item.description} />
        ))}
      </SimpleGrid>
    </Stack>
  );
}

export function WhyMonsohSection() {
  return (
    <Stack id="why-monsoh" py={70} px={20} gap={28} style={sectionAnchor}>
      <Divider color="var(--mantine-color-brand-4)" />
      <SectionHeader
        eyebrow="Яагаад Мон-Сөх?"
        title="СӨХ, хотхоны ажлыг илүү ил тод, хурдан болгоно"
        description="Бидний тухай, амжилтын түүх, түгээмэл асуулт, хэвлэл мэдээллийн мэдээллийг нэг дор харуулна."
      />
      <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing={18}>
        {whyItems.map((item) => (
          <InfoCard
            key={item.id}
            id={item.id === "faq" ? "why-faq-preview" : item.id}
            label={item.label}
            description={item.description}
          />
        ))}
      </SimpleGrid>
    </Stack>
  );
}

export function ResourcesSection() {
  return (
    <Stack id="resources" py={70} px={20} gap={28} style={sectionAnchor}>
      <Divider color="var(--mantine-color-brand-4)" />
      <SectionHeader
        eyebrow="Нөөц"
        title="Хэрэглэгчид хэрэгтэй мэдээллээ нэг дороос авна"
        description="Нөөцийн төв, блог, нэр томьёо, мэдлэгийн сан, холбоо барих хэсгүүдийг тусдаа очих section болгон бэлдсэн."
      />
      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing={18}>
        {resourceItems.map((item) => (
          <InfoCard
            key={item.id}
            id={item.id === "contact" ? "resource-contact-preview" : item.id}
            label={item.label}
            description={item.description}
          />
        ))}
      </SimpleGrid>
    </Stack>
  );
}

export function PlatformActionsSection() {
  return (
    <Stack py={70} px={20} gap={28} style={sectionAnchor}>
      <Divider color="var(--mantine-color-brand-4)" />
      <SectionHeader
        eyebrow="Платформ"
        title="Төлбөр төлөх, нэвтрэх, бүртгүүлэх"
        description="Header-ийн баруун талын үндсэн үйлдлүүдэд зориулсан хэсэг."
      />
      <SimpleGrid cols={{ base: 1, sm: 3 }} spacing={18}>
        <InfoCard
          id="make-payment"
          label="Төлбөр төлөх"
          description="Оршин суугч СӨХ, ус, цахилгаан, үйлчилгээний төлбөрөө нэг дороос шалгаж төлөх хэсэг."
        />
        <InfoCard
          id="login"
          label="Нэвтрэх"
          description="Оршин суугч, СӨХ-ийн ажилтан, админ эрхээр системдээ нэвтрэх хэсэг."
        />
        <InfoCard
          id="sign-up"
          label="Бүртгүүлэх"
          description="СӨХ, хотхон, менежментийн компани Мон-Сөх ашиглаж эхлэх хүсэлтээ илгээх хэсэг."
        />
      </SimpleGrid>
    </Stack>
  );
}
