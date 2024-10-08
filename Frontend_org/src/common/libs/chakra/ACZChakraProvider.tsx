import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";

export function ACZChakraProvider({ children }: any) {
  const theme = extendTheme({
    colors: {
      blue: {
        0: "rgb(245,248,255)",
        5: "rgb(211,225,255)",
        10: "rgb(176,202,255)",
        15: "rgb(146,182,255)",
        20: "rgb(115,162,255)",
        30: "rgb(70,132,255)",
        40: "rgb(38,110,255)",
        50: "rgb(16,94,255)",
        60: "rgb(0,82,255)",
        70: "rgb(0,75,235)",
        80: "rgb(0,62,193)",
        90: "rgb(0,41,130)",
        99: "rgb(0,24,77)",
      },
      gray: {
        0: "rgb(255,255,255)",
        5: "rgb(238,240,243)",
        10: "rgb(222,225,231)",
        15: "rgb(206,210,219)",
        20: "rgb(191,196,207)",
        30: "rgb(163,169,182)",
        40: "rgb(137,144,158)",
        50: "rgb(113,120,134)",
        60: "rgb(91,97,110)",
        70: "rgb(70,75,85)",
        80: "rgb(50,53,61)",
        90: "rgb(30,32,37)",
        99: "rgb(10,11,13)",
      },
      line: "rgba(91,97,110,0.2)",
      lineDark: "rgba(137,144,158,0.2)",
    },
    styles: {
      global: {
        "html, body": {
          _light: { bg: "gray.0" },
          _dark: { bg: "black" },
        },
        a: {},
      },
    },
    semanticTokens: {
      colors: {
        border: {
          default: "line",
          _dark: "lineDark",
        },
      },
    },
    config: {
      initialColorMode: "light",
      useSystemColorMode: true,
      cssVarPrefix: "cds",
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      {children}
    </ChakraProvider>
  );
}
