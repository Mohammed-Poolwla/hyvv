import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Button: {
      variants: {
        outline: {
          borderColor: "#ececec",
          backgroundColor: "#fff",
        },
      },
    },
    Tag: {
      baseStyle: {
        borderRadius: "100px",
      },
    },
    InputLeftAddon: {
      baseStyle: {
        borderRadius: "100px",
      },
    },
    Input: {
      variants: {
        outline: {
          field: {
            borderWidth: "1px",
            borderColor: "#DEDEDE",
          },
        },
        filled: {
          field: {
            backgroundColor: "#f8f8f8",
            borderWidth: "1px",
            borderColor: "#eaeaea",
            _hover: {
              borderWidth: "1px",
              backgroundColor: "#f8f8f8",
            },
          },
        },
      },
      defaultProps: {
        focusBorderColor: "main.100",
        placeholderTextColor: "#7f8393",
      },
    },
    NumberInput: {
      defaultProps: {
        focusBorderColor: "main.100",
        placeholderTextColor: "#7f8393",
      },
    },
    Textarea: {
      defaultProps: {
        focusBorderColor: "main.100",
      },
    },
    Divider: {
      baseStyle: {
        borderColor: "#e8e8e8",
      },
    },
  },
  colors: {
    main: {
      50: "#EDF5F7",
      100: "#bfd8de",
      200: "#92bcc6",
      300: "#66a0af",
      400: "#398498",
      500: "#08657E",
      600: "#06535E",
      700: "#05434B",
      800: "#043339",
      900: "#032D32",
    },
  },
});
export default theme;
