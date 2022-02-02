import { Box } from '../../atoms/Box';
import { List } from '../../atoms/List';
import { ListItemButton } from '../../atoms/ListItemButton';
import { ListItemIcon } from '../../atoms/ListItemIcon';
import { ListItemText } from '../../atoms/ListItemText/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';

interface Props {
  onClick: (open: boolean) => void;
  onKeyDown: (open: boolean) => void;
  list: string[];
}

export const MenuList: React.VFC<Props> = ({ onClick, onKeyDown, list }) => (
  <Box
    role="presentation"
    onClick={onClick(false)}
    onKeyDown={onKeyDown(false)}
  >
    <List>
      {list.map((text, index) => (
        <ListItemButton key={text}>
          <ListItemIcon>
            <MenuIcon />
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItemButton>
      ))}
    </List>
  </Box>
);
