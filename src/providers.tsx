'use client';

import { Container, MantineProvider } from '@mantine/core';

export function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MantineProvider>
      <Container strategy="grid" size={"lg"}>
      {children}
      </Container>
    </MantineProvider>
  );

}