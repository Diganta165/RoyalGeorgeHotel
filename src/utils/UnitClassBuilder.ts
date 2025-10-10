import type { LayoutUnitSettings } from '../context/Layout/LayoutContext';

type ClassValue = string | undefined | null;

interface UnitProps extends LayoutUnitSettings {
  className?: string;
}

export class UnitClassBuilder {
  static build(props: UnitProps, context: LayoutUnitSettings = {}): string {
    const get = <T extends keyof LayoutUnitSettings>(
      key: T
    ): string | undefined => props[key] || context[key];

    const toClass = (prefix: string, value?: string) =>
      value ? `${prefix}-${value}` : null;

    return [
      'unit',
      props.className ?? context.className,
      get('layout'),
      get('positioning'),
      get('overLay'),
      toClass('flex', get('flex')),
      toClass('flex-direction', get('flexDirection')),
      toClass('flex-wrap', get('flexWrap')),
      toClass('flex-basis', get('flexBasis')),
      toClass('flex-shrink', get('flexShrink')),
      toClass('flex-grow', get('flexGrow')),

      toClass('grid-template', get('gridTemplate')),
      toClass('grid-area', get('gridArea')),

      toClass('width', get('width')),
      toClass('height', get('height')),

      toClass('border-color', get('borderColor')),
      toClass('border-width', get('borderWidth')),
      toClass('border-radius', get('borderRadius')),

      toClass('h1', get('themeName')),
      toClass('h2', get('themeName')),
      toClass('h3', get('themeName')),
      toClass('p', get('themeName')),

      toClass('col-span', get('colSpan')),
      toClass('row-span', get('rowSpan')),

      toClass('gap', get('gap')),

      toClass('justify-content', get('justifyContent')),
      toClass('justify-items', get('justifyItems')),
      toClass('align-content', get('alignContent')),
      toClass('align-items', get('alignItems')),

      toClass('align-self', get('alignSelf')),
      toClass('justify-self', get('justifySelf')),

      toClass('padding-left', get('paddingLeft')),
      toClass('padding-right', get('paddingRight')),
      toClass('padding-top', get('paddingTop')),
      toClass('padding-bottom', get('paddingBottom')),

      toClass('margin-left', get('marginLeft')),
      toClass('margin-right', get('marginRight')),
      toClass('margin-top', get('marginTop')),
      toClass('margin-bottom', get('marginBottom')),

      toClass('bg', get('background')),
      toClass('font-family', get('fontFamily')),
      toClass('font-size', get('fontSize')),
      toClass('font-weight', get('fontWeight')),
      toClass('text-align', get('textAlign')),
      toClass('text-color', get('color')),
      toClass('opacity', get('opacity')),
      toClass('box-shadow', get('boxShadow')),
      toClass('z-index', get('zIndex')),
    ]
      .filter(this.isValid)
      .join(' ');
  }

  static isValid(value: ClassValue): value is string {
    return typeof value === 'string' && value.trim() !== '';
  }
}
