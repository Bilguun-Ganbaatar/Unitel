"use client";

import { Stack, ActionIcon } from "@mantine/core";
import { IconBrandFacebook, IconBrandTwitter, IconBrandYoutube } from "@tabler/icons-react";

export default function SocialButtons() {
  return (
    <Stack
      gap="sm"
      style={{
        position: "fixed",
        right: 20,
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 9999,
      }}
    >
      <ActionIcon
        component="a"
        href="https://www.facebook.com/unitelofficial"
        target="_blank"
        size="xl"
        radius="xl"
        variant="filled"
        color="blue"
      >
        <IconBrandFacebook size={18} />
      </ActionIcon>

      <ActionIcon
        component="a"
        href="https://x.com/unitelofficial"
        target="_blank"
        size="xl"
        radius="xl"
        variant="filled"
      >
        <IconBrandTwitter size={18} />
      </ActionIcon>

      <ActionIcon
        component="a"
        href="https://www.youtube.com/user/unitelofficial"
        target="_blank"
        size="xl"
        radius="xl"
        variant="filled"
        color="red"
      >
        <IconBrandYoutube size={18} />
      </ActionIcon>
    </Stack>
  );
}
