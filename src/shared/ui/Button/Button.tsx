// Общая кнопка (заглушка).
// Стили и пропсы настроите позже под себя.

import type { ButtonHTMLAttributes } from 'react';

export const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <button {...props} />;
};

