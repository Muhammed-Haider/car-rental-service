"use client";

import React, { createContext, useState, useContext } from 'react';

const HighlightContext = createContext();

export const useHighlight = () => useContext(HighlightContext);

export const HighlightProvider = ({ children }) => {
  const [highlight, setHighlight] = useState(false);

  const triggerHighlight = () => {
    setHighlight(true);
    setTimeout(() => setHighlight(false), 2000); // Highlight for 2 seconds
  };

  return (
    <HighlightContext.Provider value={{ highlight, triggerHighlight }}>
      {children}
    </HighlightContext.Provider>
  );
};
