import React from 'react';

import { IModalConfigDefault } from "@Interfaces/modal";
import { IModalProps } from "../../Modal.types";


const Default = (props: IModalProps<IModalConfigDefault>) => {
  const {
    config: {
      content,
    },
  } = props;

  return (
    <>{content}</>
  )
}

export default Default;