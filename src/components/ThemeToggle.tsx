"use client";

import { Switch, useComputedColorScheme, useMantineColorScheme } from "@mantine/core";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", { getInitialValueInEffect: true });
  const [mounted, setMounted] = useState(false);
  const isDark = mounted && computedColorScheme === "dark";

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Switch
      defaultChecked
      color="cyan"
      onChange={() => setColorScheme(isDark ? "light" : "dark")}
    />
  );
}
