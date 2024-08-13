import React from "react";

import classes from "./PendingLoader.module.scss";

const PendingLoader = () => {
  return (
    <div className={classes.pendingLoader} title="7">
      <svg
        version="1.1"
        id="Layer_1"
        x="0px"
        y="0px"
        width="32px"
        height="32px"
        viewBox="0 0 32 32"
      >
        <rect x="0" y="10" width="4" height="10" fill="#956F40" opacity="0.2">
          <animate
            attributeName="opacity"
            attributeType="XML"
            values="0.2; 1; .2"
            begin="0s"
            dur="0.9s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="height"
            attributeType="XML"
            values="10; 20; 10"
            begin="0s"
            dur="0.9s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y"
            attributeType="XML"
            values="10; 5; 10"
            begin="0s"
            dur="0.9s"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="8" y="10" width="4" height="10" fill="#333" opacity="0.2">
          <animate
            attributeName="opacity"
            attributeType="XML"
            values="0.2; 1; .2"
            begin="0.15s"
            dur="0.9s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="height"
            attributeType="XML"
            values="10; 20; 10"
            begin="0.15s"
            dur="0.9s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y"
            attributeType="XML"
            values="10; 5; 10"
            begin="0.15s"
            dur="0.9s"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="16" y="10" width="4" height="10" fill="#333" opacity="0.2">
          <animate
            attributeName="opacity"
            attributeType="XML"
            values="0.2; 1; .2"
            begin="0.3s"
            dur="0.9s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="height"
            attributeType="XML"
            values="10; 20; 10"
            begin="0.3s"
            dur="0.9s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y"
            attributeType="XML"
            values="10; 5; 10"
            begin="0.3s"
            dur="0.9s"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="24" y="10" width="4" height="10" fill="#333" opacity="0.2">
          <animate
            attributeName="opacity"
            attributeType="XML"
            values="0.2; 1; .2"
            begin="0.45s"
            dur="0.9s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="height"
            attributeType="XML"
            values="10; 20; 10"
            begin="0.45s"
            dur="0.9s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y"
            attributeType="XML"
            values="10; 5; 10"
            begin="0.45s"
            dur="0.9s"
            repeatCount="indefinite"
          />
        </rect>
      </svg>
    </div>
  );
};

export default PendingLoader;
