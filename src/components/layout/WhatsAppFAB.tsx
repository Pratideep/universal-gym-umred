"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { waLink } from "@/lib/site";

export function WhatsAppFAB() {
  const [labelOpen, setLabelOpen] = useState(false);

  useEffect(() => {
    const dismissed =
      typeof window !== "undefined" &&
      window.sessionStorage.getItem("wa-fab-dismissed") === "1";
    if (dismissed) return;
    const t = setTimeout(() => setLabelOpen(true), 3000);
    return () => clearTimeout(t);
  }, []);

  const dismiss = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setLabelOpen(false);
    try {
      window.sessionStorage.setItem("wa-fab-dismissed", "1");
    } catch {}
  };

  return (
    <div className="fixed bottom-20 lg:bottom-6 right-4 lg:right-6 z-40 flex items-center gap-2">
      <AnimatePresence>
        {labelOpen && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.9 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="flex items-center gap-2 rounded-full bg-surface-card text-ink-800 shadow-lift pl-4 pr-2 py-2"
          >
            <a
              href={waLink()}
              target="_blank"
              rel="noopener"
              className="text-sm font-semibold"
            >
              Chat with us
            </a>
            <button
              onClick={dismiss}
              aria-label="Dismiss"
              className="grid h-7 w-7 place-items-center rounded-full hover:bg-surface-alt text-ink-500"
            >
              <X size={14} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <a
        href={waLink()}
        target="_blank"
        rel="noopener"
        aria-label="Chat on WhatsApp"
        className="grid h-14 w-14 place-items-center rounded-full bg-green-500 text-white shadow-2xl shadow-green-500/30 hover:scale-110 active:scale-95 transition animate-pulse-glow"
      >
        <MessageCircle size={26} />
      </a>
    </div>
  );
}
