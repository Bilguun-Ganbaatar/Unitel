"use client";

import { Switch, rem, useComputedColorScheme, useMantineColorScheme } from "@mantine/core";
import { IconMoonStars, IconSun } from "@tabler/icons-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && computedColorScheme === "dark";

  return (
    <Switch
      checked={isDark}
      onChange={() => setColorScheme(isDark ? "light" : "dark")}
      color="brand"
      size="md"
      thumbIcon={
        isDark ? (
          <IconMoonStars style={{ color: "gray", width: rem(12), height: rem(12) }} stroke={2.5} />
        ) : (
          <IconSun style={{ width: rem(12), height: rem(12) }} stroke={2.5} />
        )
      }
    />
  );
}
