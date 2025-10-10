import React from 'react';
import { LayoutProvider } from '../../context/Layout/LayoutProvider';
import { LayoutClassBuilder } from '../../utils/LayoutClassBuilder';
import type {
  LayoutUnitSettings,
  LayoutSectionSettings,
} from '../../context/Layout/LayoutContext';

import './Layout.css'; // optional CSS module or global

interface LayoutProps {
  children: React.ReactNode;
  layout?: string;
  flexDirection?: string;
  width?: string;
  paddingLeft?: string;
  spacing?: string;
  positioning?: string;
  gridTemplate?: string;
  justifyContent?: string;
  justifyItems?: string;
  alignItems?: string;
  alignContent?: string;
  background?: string;
  context?: Record<string, LayoutUnitSettings | LayoutSectionSettings>;
}

const Layout: React.FC<LayoutProps> = ({ children, ...props }) => {
  const className = LayoutClassBuilder.build(props);

  // const layoutJustifyContent = justifyContent
  //   ? `justify-content-${justifyContent}` // e.g. justify-content-center
  //   : ''; // default to empty string

  // const layoutJustifyItems = justifyItems
  //   ? `justify-items-${justifyItems}` // e.g. justify-items-center
  //   : ''; // default to empty string

  // const layoutAlignContent = alignContent
  //   ? `align-content-${alignContent}` // e.g. align-content-center
  //   : ''; // default to empty string

  // const layoutAlignItems = alignItems
  //   ? `align-items-${alignItems}` // e.g. align-items-center
  //   : ''; // default to empty string

  return (
    <LayoutProvider
      layout={props.layout || 'flex'}
      spacing={props.spacing || 'gap-md'}
      positioning={props.positioning || ''}
      context={props.context || {}}
    >
      <div className={className}>{children}</div>
    </LayoutProvider>
  );
};

export default Layout;
