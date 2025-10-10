import React from 'react';
import { useLayout } from '../../hooks/useLayout';
import './Unit.css';
import { UnitClassBuilder } from '../../utils/UnitClassBuilder';

interface UnitProps {
  children?: React.ReactNode;
  className?: string;
  layout?: string;
  as?: React.ElementType;

  gridTemplate?: string;
  gridArea?: string;

  flexDirection?: string;
  flexWrap?: string;
  flexBasis?: string;
  flexGrow?: '1' | '2' | '3' | '4' | '';
  flexShrink?: '1' | '2' | '3' | '4' | '';
  flex?: '1' | '2' | '3' | '4' | '';

  // width in rem
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
    | '13'
    | '14'
    | '15'
    | '16'
    | '17'
    | '18'
    | '19'
    | '20'
    | '21'
    | '22'
    | '23'
    | '24'
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
    | '100'
    | '';

  h1?: string;
  h2?: string;
  h3?: string;
  p?: string;

  borderColor?: string;

  borderWidth?: string;
  borderRadius?: 'sm' | 'md' | 'lg' | 'xl' | '';

  paddingLeft?: 'sm' | 'md' | 'lg' | 'xl' | '';
  paddingRight?: 'sm' | 'md' | 'lg' | 'xl' | '';
  paddingTop?: 'sm' | 'md' | 'lg' | 'xl' | '';
  paddingBottom?: 'sm' | 'md' | 'lg' | 'xl' | '';

  marginLeft?: 'sm' | 'md' | 'lg' | 'xl' | '';
  marginRight?: 'sm' | 'md' | 'lg' | 'xl' | '';
  marginTop?: 'sm' | 'md' | 'lg' | 'xl' | '';
  marginBottom?: 'sm' | 'md' | 'lg' | 'xl' | '';

  justifyContent?: string;
  justifyItems?: string;

  alignContent?: string;
  alignItems?: string;

  justifySelf?: string;
  alignSelf?: string;

  colSpan?: string;
  rowSpan?: string;

  gap?: string;
  background?: string;
  positioning?: string;
  overLay?: 'sticky';

  srcLink?: string;
  alt?: string;

  fontFamily?: string;
  fontSize?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  fontWeight?: string;
  textAlign?: string;
  color?: string;
  opacity?: string;

  boxShadow?: string;
  zIndex?: string;

  href?: string;
  type?: string;
  for?: string;
  id?: string;
}

const Unit: React.FC<UnitProps> = ({ children, as, srcLink, ...props }) => {
  const { context } = useLayout();
  const className = UnitClassBuilder.build(props, context.unit || {});
  const Component = (as ?? 'div') as React.ElementType;
  const src = (srcLink ?? '') as string;

  if (Component === 'a') {
    return <a className={className} href={props.href}></a>;
  }

  if (Component === 'img') {
    return <img className={className} src={src} alt={props.alt} />;
  }

  if (Component === 'input') {
    return <input className={className} type={props.type} />;
  }

  return <Component className={`${className}`}>{children}</Component>;
};

export default Unit;
