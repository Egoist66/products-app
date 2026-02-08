import { useDisclosure } from "@mantine/hooks";

export const useModal = () => {
      const [opened, { open, close }] = useDisclosure(false);

      return { opened, open, close };
}