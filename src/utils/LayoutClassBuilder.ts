type ClassValue = string | undefined | null;

export interface LayoutProps {
  layout?: string;
  flexDirection?: string;
  spacing?: string;
  positioning?: string;
  gridTemplate?: string;
  justifyContent?: string;
  justifyItems?: string;
  alignItems?: string;
  alignContent?: string;
  background?: string;
  width?: string;
  variant?: string;
}

export class LayoutClassBuilder {
  static build(props: LayoutProps): string {
    const {
      layout,
      flexDirection,
      spacing,
      positioning,
      gridTemplate,
      justifyContent,
      justifyItems,
      alignItems,
      alignContent,
      background,
      width,
      variant,
    } = props;

    return [
      'layout-root',
      layout,
      this.prefixed(`flex-direction`, flexDirection),
      spacing,
      positioning,
      this.prefixed(`bg`, background),
      this.prefixed(`width`, width),
      variant ? `grid-${variant}` : null,
      this.prefixed(`grid-template`, gridTemplate),
      this.prefixed(`justify-content`, justifyContent),
      this.prefixed(`justify-items`, justifyItems),
      this.prefixed(`align-items`, alignItems),
      this.prefixed(`align-content`, alignContent),
    ]
      .filter(this.isValid)
      .join(' ');
  }

  static isValid(value: ClassValue): value is string {
    return typeof value === 'string' && value.trim() !== '';
  }

  static prefixed(prefix: string, value: ClassValue): string | null {
    return value ? `${prefix}-${value}` : null;
  }
}
