import { createContext } from 'react';

export interface LayoutUnitSettings {
  className?: string;
  layout?: string;
  positioning?: string;
  overLay?: 'sticky' | 'fixed' | '';

  colSpan?: string;
  rowSpan?: string;

  justifyContent?: string;
  justifyItems?: string;

  alignContent?: string;
  alignItems?: string;

  justifySelf?: string;
  alignSelf?: string;

  gap?: string;
  flexDirection?: string;
  flexWrap?: string;
  flexBasis?: string;

  flexGrow?: '1' | '2' | '3' | '4' | '';
  flexShrink?: '1' | '2' | '3' | '4' | '';
  flex?: '1' | '2' | '3' | '4' | '5' | '';

  gridTemplate?: string;
  gridArea?: string;

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

  border?: string;
  borderColor?: string;
  borderRadius?: 'sm' | 'md' | 'lg' | 'xl' | '';
  borderWidth?: string;

  themeName?: string;

  paddingLeft?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '';
  paddingRight?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '';
  paddingTop?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '';
  paddingBottom?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '';

  marginLeft?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '';
  marginRight?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '';
  marginTop?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '';
  marginBottom?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '';

  background?: string;
  padding?: string;
  boxShadow?: string;
  zIndex?: string;
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string;
  textAlign?: string;
  color?: string;
  opacity?: string;
}

export interface LayoutSectionSettings {
  layout?: string;
  gridTemplate?: string;
  gridArea?: string;
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
    | '';

  className?: string;
  colSpan?: string;
  rowSpan?: string;
  justifyContent?: string;
  justifyItems?: string;
  alignContent?: string;
  alignItems?: string;
  justifySelf?: string;
  alignSelf?: string;
  gap?: string;

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

  background?: string;
  flexDirection?: string;
  padding?: string;
  positioning?: string;
  overLay?: 'sticky' | '';
}

export interface LayoutContextProps {
  layout: string;
  spacing?: string;
  positioning?: string;
  context: {
    unit?: LayoutUnitSettings;
    section?: LayoutSectionSettings;
    [key: string]: LayoutUnitSettings | LayoutSectionSettings | undefined;
  };
}

export const LayoutContext = createContext<LayoutContextProps>({
  layout: 'flex',
  spacing: '',
  positioning: '',
  context: {},
});
