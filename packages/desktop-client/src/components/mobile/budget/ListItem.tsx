import React, {
  type ComponentProps,
  type ReactNode,
  type CSSProperties,
} from 'react';

import { theme } from '@actual-app/components/theme';
import { View } from '@actual-app/components/view';

const ROW_HEIGHT = 50;

type ListItemProps = ComponentProps<typeof View> & {
  children?: ReactNode;
  style: CSSProperties;
};

export const ListItem = ({ children, style, ...props }: ListItemProps) => {
  return (
    <View
      style={{
        height: ROW_HEIGHT,
        borderBottomWidth: 1,
        borderColor: theme.tableBorder,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 5,
        paddingRight: 5,
        zIndex: 1,
        ...style,
      }}
      {...props}
    >
      {children}
    </View>
  );
};
