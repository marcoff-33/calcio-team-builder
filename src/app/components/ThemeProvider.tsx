"use client";

import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <ThemeProvider attribute="class" enableSystem={true} defaultTheme="light">
      {children}
    </ThemeProvider>
  );
}

export default Providers;
