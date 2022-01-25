import {ThemeProvider} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme  from "./theme"
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ButtonProps } from '@mui/material'
import { ButtonCharacter } from '.';

export default {
  title: "Example/ButtonCharacter",
  component: ButtonCharacter,
  decorators: [
    (Story) => {
      return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Story />
        </ThemeProvider>
      )
    },
  ],
} as ComponentMeta<typeof ButtonCharacter>

const Template: ComponentStory<typeof ButtonCharacter> = (args) => <ButtonCharacter {...args} />;

export const Primary = Template.bind({});
const primaryProps: ButtonProps ={
  color: "primary",
  variant: "contained",
  children: "test"
}
Primary.args= primaryProps