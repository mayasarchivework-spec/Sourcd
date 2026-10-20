"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Theme = "dark" | "light";

export default function ModeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const saved = localStorage.getItem("sourcd-theme");
    const initialTheme: Theme = saved === "light" ? "light" : "dark";

    document.documentElement.dataset.theme = initialTheme;
    setTheme(initialTheme);
  }, []);

  function toggleTheme() {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";

    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("sourcd-theme", nextTheme);
    setTheme(nextTheme);
  }

  return (
    <button
      type="button"
      className="mode-toggle__button app-nav-control"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      onClick={toggleTheme}
    >
      <Image src="/sun.svg" alt="" width={20} height={20} />
    </button>
  );
}
