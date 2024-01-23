import { useColorMode } from "@chakra-ui/react";
import { lightTheme, darkTheme } from "@rainbow-me/rainbowkit";
import { useState, useEffect } from "react";

export function ACZChakraTheme() {
  const [theme, setTheme] = useState(() => lightTheme());
  const { colorMode } = useColorMode();

  useEffect(() => {    
    setTheme(colorMode === "light" ? lightTheme() : darkTheme());
  }, [colorMode]);

  return { theme };
}
