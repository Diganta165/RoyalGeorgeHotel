import React from 'react';
import './Section.css';
import { useLayout } from '../../hooks/useLayout';
import { SectionClassBuilder } from '../../utils/SectionClassBuilder';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  as?: React.ElementType;
  width?:
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | '11'
    | '12'
    | '100'
    | '';

  //height in rem
  height?:
    | '0'
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | '11'
    | '12'
    | '';

  border?: string;
  borderColor?: string;
  borderRadius?: 'sm' | 'md' | 'lg' | 'xl' | '';
  borderWidth?: string;

  themeName?: string;

  paddingLeft?: 'sm' | 'md' | 'lg' | 'xl' | '';
  paddingRight?: 'sm' | 'md' | 'lg' | 'xl' | '';
  paddingTop?: 'sm' | 'md' | 'lg' | 'xl' | '';
  paddingBottom?: 'sm' | 'md' | 'lg' | 'xl' | '';

  marginLeft?: 'sm' | 'md' | 'lg' | 'xl' | '';
  marginRight?: 'sm' | 'md' | 'lg' | 'xl' | '';
  marginTop?: 'sm' | 'md' | 'lg' | 'xl' | '';
  marginBottom?: 'sm' | 'md' | 'lg' | 'xl' | '';

  layout?: string;
  flexDirection?: 'vertical' | 'horizontal';

  gridTemplate?: string;
  gridArea?: string;
  alignItems?: string;
  alignContent?: string;
  justifyItems?: string;
  justifyContent?: string;

  gap?: string;
  background?: string;
  padding?: string;
  className?: string;
  colSpan?: string;
  rowSpan?: string;
  justifySelf?: string;
  alignSelf?: string;
  positioning?: string;
  overLay?: 'sticky' | '';
}

const Section: React.FC<SectionProps> = ({ id, as, children, ...props }) => {
  const { context } = useLayout();
  const className = SectionClassBuilder.build(props, context.section || {});
  const Component = (as ?? 'div') as React.ElementType;

  return (
    <Component id={id} className={`${className}`}>
      {children}
    </Component>
  );
};

export default Section;
