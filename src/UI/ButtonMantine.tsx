import { Button } from '@mantine/core';
import type { ReactNode } from 'react';

type ButtonMantineProps = {
  children: ReactNode;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  onClick?: () => void;
  color?: string;
  h?: string | number;
  w?: string | number;
  p?: string | number;
}

export default function ButtonMantine({children, size = 'xs',onClick, color = "primary.8", h='auto', w='auto', p='auto'}: ButtonMantineProps) {
  return <Button variant="filled" color={color} size={size} onClick={onClick} h={h} w={w} p={p}>{children}</Button>;
}