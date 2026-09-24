import type { SVGProps, ReactElement } from "react";

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, "dangerouslySetInnerHTML"> {
  /** Native fits: 16 | 20 | 24 each use their own hand-tuned stroke. Any other
   *  value renders the nearest fit at the requested pixel size. Default 24. */
  size?: number;
  /** Override the fit's optical stroke width. No effect on *Solid components. */
  strokeWidth?: number;
}

/** Returns ReactElement rather than JSX.Element: the global JSX namespace does not exist
 *  under React 19's automatic runtime, so JSX.Element fails a strict typecheck there. */
export type IconComponent = (props: IconProps) => ReactElement;
