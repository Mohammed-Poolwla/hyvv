import { useToast, UseToastOptions } from "@chakra-ui/react";
import { useCallback } from "react";

const useCustomToast = () => {
  const toast = useToast();

  const showToast = useCallback(
    (options: UseToastOptions) => {
      toast({
        isClosable: true,
        position: "top-right",
        duration: 3000,
        ...options,
      });
    },
    [toast]
  );

  return showToast;
};

export default useCustomToast;
