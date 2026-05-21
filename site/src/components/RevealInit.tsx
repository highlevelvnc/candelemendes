"use client";

import { useEffect } from "react";
import { initScrollReveal } from "@/lib/scrollReveal";

export default function RevealInit() {
  useEffect(() => {
    initScrollReveal();
  }, []);
  return null;
}
