import React, { useEffect, useState } from 'react';
import { Trans } from "next-i18next";


const TaggedTranslation = ({ text }: { text: string }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && <Trans components={{
        span: <span />,
      }}>{text}</Trans>}
    </>
  )
}

export default TaggedTranslation;