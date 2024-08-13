import { useState, useEffect } from 'react';


export type CheckType = 'IS_LESS_THAN' | 'IS_GREATER_THAN';


const useCheckWindowSize = (type: CheckType, size: number) => {
  const [value, setValue] = useState<boolean | undefined>(undefined);


  useEffect(() => {
    if (typeof window === "undefined") return;

    const onResize = () => setValue(type === 'IS_GREATER_THAN'
      ? window.innerWidth >= size
      : window.innerWidth < size
    )

    onResize();
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [size, type]);

  return value;
};


export default useCheckWindowSize;
/*
  Usage Example:

  const isDesktop = useCheckWindowSize('IS_GREATER_THAN', MEDIA_SIZES.desktop);

  const isMobile = useCheckWindowSize('IS_LESS_THAN', MEDIA_SIZES.miniTablet)
*/
