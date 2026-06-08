"use client";

import {
  Button,
  Container,
  Divider,
  Modal,
  NumberInput,
  Select,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";

function calculatePrice(households: number, payment: string): number {
  const base = 180000;
  return base;
}

export default function Pricing() {
  const [opened, { open, close }] = useDisclosure(false);

  const form = useForm({
    initialValues: {
      name: "",
      phone: "",
      extraPhone: "",
      payment: "",
      households: "",
    },
    validate: {
      name: (v) => (v.trim().length === 0 ? "СӨХ нэр оруулна уу." : null),
      phone: (v) =>
        v.trim().length === 0
          ? "Утасны дугаар оруулна уу."
          : !/^\d{8}$/.test(v)
          ? "Утасны дугаар зөв оруулна уу."
          : null,
      extraPhone: (v) =>
        v.trim().length === 0 ? null : !/^\d{8}$/.test(v) ? "Утасны дугаар зөв оруулна уу." : null,
      payment: (v) => (!v ? "Сонгоно уу." : null),
      households: (v) =>
        v.trim().length === 0
          ? "Өрхийн тоо оруулна уу."
          : !/^\d+$/.test(v)
          ? "Зөвхөн тоо оруулна уу."
          : null,
    },
  });

  const handleSubmit = form.onSubmit(() => {
    open();
  });

  const price = calculatePrice(Number(form.values.households), form.values.payment);

  return (
    <Container strategy="grid" size={800} p={0} h={700}>
      <form onSubmit={handleSubmit}>
        <Stack>
          <Title order={1} style={{ color: "var(--text-primary)" }}>
            Монсөх - Үнийн санал
          </Title>
          <Text size="md" style={{ color: "var(--text-secondary)" }}>
            Та өөрийн СӨХ-ны мэдээллийг оруулан системийн үнийн саналтай танилцаарай.
          </Text>

          <TextInput
            placeholder="СӨХ-ийн нэр"
            radius="lg"
            size="lg"
            {...form.getInputProps("name")}
          />
          <NumberInput
            placeholder="Утасны дугаар"
            radius="lg"
            size="lg"
            {...form.getInputProps("phone")}
            hideControls
          />
          <TextInput
            placeholder="Нэмэлт утасны дугаар"
            radius="lg"
            size="lg"
            {...form.getInputProps("extraPhone")}
          />
          <Select
            placeholder="Дундаж төлбөр"
            radius="lg"
            size="lg"
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
            radius="lg"
            size="lg"
            {...form.getInputProps("households")}
          />
          <Button type="submit" size="lg" radius="lg" fw={700}>
            Үргэлжлүүлэх
          </Button>
        </Stack>
      </form>

      <Modal opened={opened} onClose={close} centered radius="lg" withCloseButton={false}>
        <Stack align="center" gap={12}>
          <Title order={2} style={{ color: "var(--text-primary)" }}>
            {form.values.name.toUpperCase()} ТАНЫ
          </Title>
          <Text ta="center" style={{ color: "var(--text-secondary)" }}>
            Программ хангамж болон санхүүгийн цогц үйлчилгээг багтсан нийт төлбөрийн хэмжээ
          </Text>
          <Text fz={28} fw={700} style={{ color: "#0bb0c1" }}>
            {price.toLocaleString()}₮
          </Text>
          <Divider w="100%" />
          <Text size="sm" ta="center" style={{ color: "var(--text-secondary)" }}>
            ЭНЭХҮҮ ҮНЭНД НӨАТ ОРСОН БОЛНО
          </Text>
          <Button variant="outline" radius="lg" onClick={close}>
            Хаах
          </Button>
        </Stack>
      </Modal>
    </Container>
  );
}
