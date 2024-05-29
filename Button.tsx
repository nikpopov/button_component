import React from 'react';
import ButtonUI, { ButtonProps } from '@material-ui/core/Button';
import IconButton, { IconButtonProps } from '@material-ui/core/IconButton';
import { Fab } from '@material-ui/core';

interface OwnBaseProps {
  withIcon?: boolean;
  invert?: boolean;
  fab?: boolean;
  size?: string;
  variant?: string;
  children: NonNullable<React.ReactNode>;
}

type OwnProps = (OwnBaseProps & ButtonProps) | (OwnBaseProps & IconButtonProps);

export const Button: React.FC<OwnProps> = ({
  withIcon,
  fab,
  invert,
  children,
  ...rest
}): JSX.Element => {
  if (fab) {
    return (
      <Fab className={!invert ? 'icon-fab' : 'icon-invert'} {...(rest as IconButtonProps)}>
        {children}
      </Fab>
    );
  }

  return withIcon ? (
    <IconButton className={!invert ? 'icon' : 'icon-invert'} {...(rest as IconButtonProps)}>
      {children}
    </IconButton>
  ) : (
    <ButtonUI {...(rest as ButtonProps)} className={!invert ? 'button' : 'button-invert'}>
      {children}
    </ButtonUI>
  );
};
