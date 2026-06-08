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
  extraPhone: Yup.string()
    .transform((v) => (v === "" ? undefined : v))
    .matches(/^\d{8}$/, "Утасны дугаар 8 оронтой тоо байх ёстой.")
    .optional(),
  payment: Yup.string().required("Сонгоно уу."),
  households: Yup.mixed()
    .test("required", "Өрхийн тоо оруулна уу.", (v) => v !== "" && v !== undefined && v !== null)
    .test("format", "Зөвхөн тоо оруулна уу.", (v) => {
      if (v === undefined || v === null || v === "") return true;
      return /^\d+$/.test(String(v));
    }),
});

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
    validate: yupResolver(schema),
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
            hideControls
            {...form.getInputProps("phone")}
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
