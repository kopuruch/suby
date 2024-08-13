import React, { useState, useEffect, RefObject } from 'react';


const useInView = (ref: RefObject<HTMLElement>) => {
  const [isInView, setInView] = useState(false);

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        setInView(entry.isIntersecting)
      });
    };

    const observer = new IntersectionObserver(observerCallback);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isInView;
}

export default useInView;
