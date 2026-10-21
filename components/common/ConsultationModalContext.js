"use client";

import { createContext, useContext, useMemo, useState } from "react";

const ConsultationModalContext = createContext(null);

export function ConsultationModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const value = useMemo(
    () => ({
      isOpen,
      openModal: () => setIsOpen(true),
      closeModal: () => setIsOpen(false),
    }),
    [isOpen]
  );

  return (
    <ConsultationModalContext.Provider value={value}>
      {children}
    </ConsultationModalContext.Provider>
  );
}

export function useConsultationModal() {
  const ctx = useContext(ConsultationModalContext);
  if (!ctx) {
    throw new Error("useConsultationModal must be used within a ConsultationModalProvider");
  }
  return ctx;
}
