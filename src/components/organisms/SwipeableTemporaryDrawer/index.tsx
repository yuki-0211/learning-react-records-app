import { Fragment, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

import { ListItemButton } from '../../atoms/ListItemButton';
import { ListItemIcon } from '../../atoms/ListItemIcon';
import { ListItemText } from '../../atoms/ListItemText/ListItemText';
import { List } from '../../atoms/List';
import { Box } from '../../atoms/Box';
import { SwipeableDrawer } from '../../atoms/SwipeableDrawer';
import { AppBarBasic } from '../../molecules/AppBarBasic';

type Anchor = 'left';

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
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

  return (
    <div>
      {(['left'] as const).map((anchor) => (
        <Fragment key={anchor}>
          <AppBarBasic onClick={toggleDrawer(anchor, true)} pageName="Recode" />
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </Fragment>
      ))}
    </div>
  );
}
