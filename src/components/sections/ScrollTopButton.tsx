"use client";

import { Affix, Button, Transition } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { IconArrowBadgeUp } from "@tabler/icons-react";

export default function ScrollTopButton() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Affix position={{ bottom: 20, right: 20 }}>
      <Transition transition="fade-up" mounted={scroll.y > 0}>
        {(transitionStyles) => (
          <Button
            style={{
              ...transitionStyles,
              borderRadius: "50%",
              width: 48,
              height: 48,
              padding: 0,
            }}
            onClick={() => scrollTo({ y: 0 })}
          >
            <IconArrowBadgeUp size={28} color="white" />
          </Button>
        )}
      </Transition>
    </Affix>
  );
}
