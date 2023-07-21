import { useState, useEffect } from 'react';

const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const handleMatchesChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    mediaQueryList.addListener(handleMatchesChange);

    return () => {
      mediaQueryList.removeListener(handleMatchesChange);
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;