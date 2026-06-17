import { TextInput } from '@mantine/core';
import type {ChangeEvent, ReactNode} from "react";

type InputMantineProps = {
    placeholder?: string;
    value?: string
    label?: string;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    w?: string | number;
    leftSection?: ReactNode;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}


export default function InputMantine({placeholder,value, label,size = 'sm',w, onChange, leftSection}:InputMantineProps ) {
  return (
    <TextInput
      placeholder={placeholder}
      leftSection = {leftSection}
      value = {value}
      label={label}
      size={size}
      w={w}
      onChange={onChange}

    />
  );
}