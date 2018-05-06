import * as React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

interface IIcon{
  onClick?: () => void
}

export const HomeIcon = (props: IIcon) => (
  <SvgIcon {...props}>
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </SvgIcon>
);

export default HomeIcon;