import React from 'react';
import type { ReactNode } from 'react';
import type { LayoutContextProps } from './LayoutContext';
import { LayoutContext } from './LayoutContext';
import './LayoutProvider.css';

// // Layout Context Setup
// export const LayoutContext = createContext<LayoutContextProps>({
//   layout: 'flex',
//   spacing: '',
//   positioning: '',
//   context: {},
// });

interface LayoutProviderProps extends Partial<LayoutContextProps> {
  children: ReactNode;
}

export const LayoutProvider: React.FC<LayoutProviderProps> = ({
  children,
  layout = 'flex',
  spacing = '',
  positioning = '',
  context = {},
}) => {
  return (
    <LayoutContext.Provider value={{ layout, spacing, positioning, context }}>
      <div>{children}</div>
    </LayoutContext.Provider>
  );
};
