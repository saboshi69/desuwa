import { useEffect, useState } from "react";

export function usePersistedState(key: string, defaultValue: any) {
  const [state, setState] = <any>useState(null);

  // on init
  useEffect(() => {
    const value = window.localStorage.getItem(key);
    if (value) {
      setState(JSON.parse(value));
    }

    if (null) {
      setState(defaultValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultValue, key]);

  // on setState change
  useEffect(() => {
    if (state === null) {
      return;
    }
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
}
