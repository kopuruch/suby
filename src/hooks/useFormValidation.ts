import { useMemo } from "react";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';


type Form = Record<string, any>;
type Schema<T extends Form> = {
  [Prop in keyof T]: Yup.StringSchema;
}

const useFormValidation = <T extends Form>() => {
  const resolver = (schema: Schema<T>) => yupResolver<Yup.ObjectSchema<any>>(Yup.object().shape(schema));

  const required = Yup.string()
    .required('Is required');

  const email = Yup.string()
    .required('Is required')
    .email('Invalid email');

  const data = useMemo(() => ({
    resolver,
    required,
    email,
  }), []);

  return data;
}

export default useFormValidation;