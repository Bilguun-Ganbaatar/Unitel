"use client";

import {
  Button,
  Divider,
  Group,
  Modal,
  NumberInput,
  Select,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { IconHeadset, IconShieldCheck } from "@tabler/icons-react";
import { yupResolver } from "mantine-form-yup-resolver";
import * as Yup from "yup";

const schema = Yup.object().shape({
  name: Yup.string().required("СӨХ нэр оруулна уу."),
  phone: Yup.mixed()
    .test("required", "Утасны дугаар оруулна уу.", (v) => v !== "" && v !== undefined && v !== null)
    .test("format", "Утасны дугаар 8 оронтой тоо байх ёстой.", (v) => {
      if (v === undefined || v === null || v === "") return true;
      return /^\d{8}$/.test(String(v));
    }),
  payment: Yup.string().required("Сонгоно уу."),
  households: Yup.mixed()
    .test("required", "Өрхийн тоо оруулна уу.", (v) => v !== "" && v !== undefined && v !== null)
    .test("format", "Зөвхөн тоо оруулна уу.", (v) => {
      if (v === undefined || v === null || v === "") return true;
      return /^\d+$/.test(String(v));
    }),
});

function calculatePrice(): number {
  return 180000;
}

export default function Pricing() {
  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery("(max-width: 969px)");

  const form = useForm({
    initialValues: { name: "", phone: "", payment: "", households: "" },
    validate: yupResolver(schema),
  });

  const handleSubmit = form.onSubmit(() => open());
  const price = calculatePrice();

  return (
    <Stack px={20} py={60} gap={40}>
      <div style={{ height: "0.5px", background: "var(--mantine-color-brand-6)" }} />

      <Group gap={60} wrap="wrap" justify="space-between">
        <Stack maw={isMobile ? "100%" : 320} gap={16}>
          <Text fz={isMobile ? 26 : 34} fw={500} c="brand">
            Таны СӨХ-нд зориулсан үнэ
          </Text>

          <Text size="sm" style={{ color: "var(--text-primary)", lineHeight: 1.7 }}>
            Өөрийн хотхоны мэдээллийг оруулаад системийн үнийн саналтай танилцаарай.
          </Text>

          <Stack gap={10}>
            <Group gap={8}>
              <IconShieldCheck size={16} color="var(--mantine-color-brand-6)" />
              <Text size="sm" style={{ color: "var(--text-primary)" }}>
                НӨАТ орсон үнэ
              </Text>
            </Group>
            <Group gap={8}>
              <IconHeadset size={16} color="var(--mantine-color-brand-6)" />
              <Text size="sm" style={{ color: "var(--text-primary)" }}>
                Суурилуулалт үнэгүй
              </Text>
            </Group>
          </Stack>
        </Stack>

        <form onSubmit={handleSubmit} style={{ flex: 1, minWidth: 280, maxWidth: 5200 }}>
          <Stack gap={14}>
            <TextInput
              placeholder="СӨХ-ийн нэр"
              radius="md"
              size={isMobile ? "md" : "lg"}
              {...form.getInputProps("name")}
            />
            <NumberInput
              placeholder="Утасны дугаар"
              radius="md"
              size={isMobile ? "md" : "lg"}
              hideControls
              {...form.getInputProps("phone")}
            />
            <Select
              placeholder="Дундаж төлбөр"
              radius="md"
              size={isMobile ? "md" : "lg"}
              data={[
                "30,000₮ хүртэл",
                "30,000₮ - 45,000₮",
                "45,000₮ - 60,000₮",
                "60,000₮ - 100,000₮",
                "100,000₮ дээш",
              ]}
              {...form.getInputProps("payment")}
            />
            <NumberInput
              thousandSeparator="'"
              hideControls
              placeholder="Өрхийн тоо"
              radius="md"
              size={isMobile ? "md" : "lg"}
              {...form.getInputProps("households")}
            />
            <Button type="submit" size={isMobile ? "md" : "lg"} radius="md" color="brand" fw={500}>
              Үргэлжлүүлэх
            </Button>
          </Stack>
        </form>
      </Group>

      <Modal opened={opened} onClose={close} centered radius="lg" withCloseButton={false}>
        <Stack align="center" gap={12}>
          <Title order={2} style={{ color: "var(--text-primary)" }}>
            {form.values.name.toUpperCase()} ТАНЫ
          </Title>
          <Text ta="center" style={{ color: "var(--text-primary)" }}>
            Программ хангамж болон санхүүгийн цогц үйлчилгээг багтсан нийт төлбөрийн хэмжээ
          </Text>
          <Text fz={28} fw={700} c="brand">
            {price.toLocaleString()}₮
          </Text>
          <Divider w="100%" />
          <Text size="sm" ta="center" style={{ color: "var(--text-primary)" }}>
            ЭНЭХҮҮ ҮНЭНД НӨАТ ОРСОН БОЛНО
          </Text>
          <Button variant="outline" radius="md" color="brand" onClick={close}>
            Хаах
          </Button>
        </Stack>
      </Modal>
    </Stack>
  );
}
