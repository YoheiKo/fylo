import { useState, useEffect } from "react";

export default function useClientSideState<T>(
  key: string,
  defaultValue: T
): [T, (value: T) => void] {
  const [state, setState] = useState<T>(() => {
    if (typeof window !== "undefined") {
      const storedValue = localStorage.getItem(key);
      if (storedValue) {
        try {
          return JSON.parse(storedValue);
        } catch (error) {
          return storedValue;
        }
      }
    }
    return defaultValue;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(key, JSON.stringify(state));
      } catch (error) {
        localStorage.setItem(key, String(state));
      }
    }
  }, [key, state]);

  return [state, setState];
}
