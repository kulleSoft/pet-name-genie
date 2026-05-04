import { useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';

export function useFavorites() {
  const [favorites, setFavorites] = useLocalStorage<string[]>('petnomes:favorites', []);
  const isFav = useCallback((n: string) => favorites.includes(n), [favorites]);
  const toggle = useCallback(
    (n: string) => setFavorites((favorites.includes(n) ? favorites.filter((x) => x !== n) : [n, ...favorites])),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [favorites],
  );
  const remove = useCallback((n: string) => setFavorites(favorites.filter((x) => x !== n)), [favorites, setFavorites]);
  return { favorites, isFav, toggle, remove };
}

export function useHistory() {
  const [history, setHistory] = useLocalStorage<string[]>('petnomes:history', []);
  const push = useCallback(
    (names: string[]) => {
      const merged = [...names, ...history];
      const dedup = Array.from(new Set(merged)).slice(0, 60);
      setHistory(dedup);
    },
    [history, setHistory],
  );
  const clear = useCallback(() => setHistory([]), [setHistory]);
  return { history, push, clear };
}
