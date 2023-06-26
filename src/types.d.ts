declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}

declare module '*.svg' {
  const content: string;
  export default content;
}

/**
 * @description Pick을 사용해 Props 타입 확장 시 번들링 후 React 컴포넌트에서 Optional 타입의 prop을 명시적으로 지정해야 하는 문제를 해결하기 위한 타입
 */
type OptionalPick<T, K extends keyof T> = Omit<T, Exclude<keyof T, K>>;

type HTMLTags =
  | 'section'
  | 'dt'
  | 'dd'
  | 'dl'
  | 'ul'
  | 'button'
  | 'div'
  | 'input';

type HTMLElementProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>;

type HTMLTagProps<T extends HTMLTags> = T extends 'dl'
  ? React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDListElement>,
      HTMLDListElement
    >
  : T extends 'ul'
  ? React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLUListElement>,
      HTMLUListElement
    >
  : T extends 'button'
  ? React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >
  : T extends 'div'
  ? React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >
  : T extends 'input'
  ? React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >
  : HTMLElementProps;

type OptionalPick<T, K extends keyof T> = Omit<T, Exclude<keyof T, K>>;
