import { FC } from "react";
import styled from "@emotion/styled";
import { Icons } from "./Icons";
import { css } from "@emotion/react";

export type AvalibleIcons = keyof typeof Icons;

export type Props = {
  /** Icon name */
  name: AvalibleIcons;
  /** Width and height */
  size?: number;
} & React.SVGProps<SVGSVGElement>;

export const Icon: FC<Props> = ({ name, size = 2, ...rest }) => {
  const Icon = styled(Icons[name])`
    color: ${({ theme }) => theme.font.regular};
  `;
  const sizeInRem = `${size}rem`;
  const sizes = { width: sizeInRem, height: sizeInRem };

  return <Icon role="img" aria-label={name} {...sizes} {...rest} />;
};
