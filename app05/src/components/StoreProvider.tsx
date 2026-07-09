'use client';

import { AppStore, makeStore } from '@/lib/state/store';
import { setTheme } from '@/lib/state/themeSlice';
import { useRef, useEffect, useState } from 'react';
import { Provider } from 'react-redux';

export default function StoreProvider({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<AppStore | null>(null);
  const [mounted, setMounted] = useState(false);

  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem('app-theme') as 'light' | 'dark';
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');

    // Sync baseline setting straight into Redux Store state
    storeRef.current?.dispatch(setTheme(initialTheme));
    
    // Wire parameter onto the HTML layout tag root for React-Bootstrap tracking
    document.documentElement.setAttribute('data-bs-theme', initialTheme);
    setMounted(true);
  }, []);

  // Prevent layout shifts during baseline execution matching phases
  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{children}</div>;
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}

