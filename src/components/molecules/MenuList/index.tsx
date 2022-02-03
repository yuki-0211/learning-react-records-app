import { Box } from '../../atoms/Box';
import { List } from '../../atoms/List';
import { ListItemButton } from '../../atoms/ListItemButton';
import { ListItemIcon } from '../../atoms/ListItemIcon';
import { ListItemText } from '../../atoms/ListItemText/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

interface Props {
  onClick: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
  onKeyDown: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
  onClickButton: (
    url: string
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
  list: {
    name: string;
    icon: JSX.Element;
    url: string;
  }[];
}

export const MenuList: React.VFC<Props> = ({
  onClick,
  onKeyDown,
  onClickButton,
  list,
}) => (
  <Box
    role="presentation"
    onClick={onClick(false)}
    onKeyDown={onKeyDown(false)}
  >
    <List>
      {list.map((text, index) => (
        <ListItemButton key={text.name} onClick={onClickButton(text.url)}>
          <ListItemIcon>{text.icon}</ListItemIcon>
          <ListItemText primary={text.name} />
        </ListItemButton>
      ))}
    </List>
  </Box>
);
