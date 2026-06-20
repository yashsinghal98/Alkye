'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';

export type RespData = {
  id: string | number;
  image_url: string;
  short_description: string;
  [key: string]: unknown;
};

type RespContextType = {
  items: RespData[];
  setItems: React.Dispatch<React.SetStateAction<RespData[]>>;
};

const RespContext = createContext<RespContextType | undefined>(undefined);

export default function RespProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<RespData[]>([]);

  useEffect(() => {
    if (items.length > 0) return;

    async function loadItems() {
      try {
        const response = await fetch('https://alkyetest-738240239910.us-central1.run.app/myapp/list/');
        if (!response.ok) {
          throw new Error(`Unable to load data: ${response.status}`);
        }

        const json = await response.json();
        setItems(json);
      } catch (error) {
        console.error('RespProvider load error:', error);
      }
    }

    loadItems();
  }, [items.length]);

  const value = useMemo(() => ({ items, setItems }), [items]);

  return <RespContext.Provider value={value}>{children}</RespContext.Provider>;
}

export function useRespContext() {
  const context = useContext(RespContext);
  if (!context) {
    throw new Error('useRespContext must be used within a RespProvider');
  }
  return context;
}
