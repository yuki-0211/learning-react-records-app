import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box, BoxProps } from '.';

export default {
  title: 'Example/Box',
  component: Box,
  decorators: [
    (Story) => {
      return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Story />
        </ThemeProvider>
      );
    },
  ],
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />;

export const Primary = Template.bind({});
const primaryProps: BoxProps = {
  color: 'primary',
  children: 'test',
};
Primary.args = primaryProps;
