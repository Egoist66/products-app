import { Button, Flex, Text, Title } from '@mantine/core';
import { useEffect } from 'react';
import { Link } from 'react-router';

export default function NotFoundPage() {
  useEffect(() => {
    document.title = '404 — Products App';
  }, []);

  return (
    <section className="not-found-page">
      <Flex
        gap="xl"
        direction="column"
        align="center"
        justify="center"
        mih="50vh"
        maw="600px"
        style={{ margin: '0 auto', padding: '0 16px' }}
      >
        <Title order={1} size="7rem" fw={700}>
          404
        </Title>
        <Text size="lg" c="dimmed" ta="center">
         Page not Found 😔
        </Text>
        <Button c={'white'} component={Link} to="/" variant="filled" size="md">
          На главную
        </Button>
      </Flex>
    </section>
  );
}
