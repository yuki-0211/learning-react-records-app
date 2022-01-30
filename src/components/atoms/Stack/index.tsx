import { Stack as MuiStack, StackProps as MuiStackProps } from '@mui/material';

interface StackProps extends MuiStackProps {}

export const Stack: React.VFC<StackProps> = ({
  spacing = 1,
  direction = 'column',
  alignItems = 'center',
  justifyContent = 'center',
  sx,
  children,
}) => {
  return (
    <MuiStack
      spacing={spacing}
      direction={direction}
      alignItems={alignItems}
      justifyContent={justifyContent}
      sx={sx}
    >
      {children}
    </MuiStack>
  );
};
