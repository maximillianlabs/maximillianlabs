"use client";

import { Toaster } from "sonner";

export function AppToaster() {
  return (
    <Toaster
      position="top-center"
      richColors
      closeButton
      toastOptions={{
        classNames: {
          toast:
            "font-sans shadow-lg border border-zinc-200/80 bg-white text-zinc-900",
          title: "font-medium",
          description: "text-zinc-600",
        },
      }}
    />
  );
}
