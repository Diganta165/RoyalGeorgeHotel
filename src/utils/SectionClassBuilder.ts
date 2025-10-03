import type { LayoutSectionSettings } from '../context/Layout/LayoutContext';

type ClassValue = string | undefined | null;

interface SectionProps {
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
  positioning?: string;
  className?: string;
  colSpan?: string;
  rowSpan?: string;
  border?: string;
  borderColor?: string;
  borderRadius?: string;
  borderWidth?: string;
  justifyContent?: string;
  justifyItems?: string;
  alignContent?: string;
  alignItems?: string;
  justifySelf?: string;
  alignSelf?: string;
  paddingLeft?: string;
  paddingRight?: string;
  paddingTop?: string;
  paddingBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  marginTop?: string;
  marginBottom?: string;
  gap?: string;
  background?: string;
  padding?: string;
  overLay?: 'sticky' | '';
  flexDirection?: 'horizontal' | 'vertical';
}

export class SectionClassBuilder {
  static build(
    props: SectionProps,
    context: LayoutSectionSettings = {}
  ): string {
    const get = (prop: keyof SectionProps): string | undefined =>
      props[prop] || context[prop];

    const toClass = (prefix: string, value?: string) =>
      value ? `${prefix}-${value}` : null;

    return [
      'section',
      toClass('bg', get('background')),
      get('layout'),

      toClass('flex-direction', get('flexDirection')),

      toClass('grid-template', get('gridTemplate')),
      toClass('grid-area', get('gridArea')),

      get('positioning'),
      get('overLay'),

      toClass('col-span', get('colSpan')),
      toClass('row-span', get('rowSpan')),

      toClass('border-color', get('borderColor')),

      toClass('align-self', get('alignSelf')),
      toClass('justify-self', get('justifySelf')),
      toClass('justify-content', get('justifyContent')),
      toClass('justify-items', get('justifyItems')),
      toClass('align-content', get('alignContent')),
      toClass('align-items', get('alignItems')),
      toClass('padding-left', get('paddingLeft')),
      toClass('padding-right', get('paddingRight')),
      toClass('padding-top', get('paddingTop')),
      toClass('padding-bottom', get('paddingBottom')),

      toClass('margin-left', get('marginLeft')),
      toClass('margin-right', get('marginRight')),
      toClass('margin-top', get('marginTop')),
      toClass('margin-bottom', get('marginBottom')),

      toClass('height', get('height')),
      toClass('width', get('width')),
      toClass('gap', get('gap')),
      get('className'),
    ]
      .filter(this.isValid)
      .join(' ');
  }

  static isValid(value: ClassValue): value is string {
    return typeof value === 'string' && value.trim() !== '';
  }
}
