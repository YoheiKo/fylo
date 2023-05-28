import "../styles/globals.css";
import { useState, useEffect } from "react";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    const userPrefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (userPrefersDark) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div>
      <Component {...pageProps} theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}
export default MyApp;
