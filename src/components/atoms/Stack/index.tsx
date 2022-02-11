import { Stack as MuiStack, StackProps as MuiStackProps } from '@mui/material';

interface StackProps extends MuiStackProps {}

export const Stack: React.VFC<StackProps> = (props) => {
  return <MuiStack {...props} />;
};
