import { AppBar } from '../../atoms/AppBar';
import { Box } from '../../atoms/Box';
import { IconButton } from '../../atoms/IconButton';
import { Toolbar } from '../../atoms/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import { Typography } from '../../atoms/Typograpy';

interface Props {
  pageName: string;
  onClick: (event: React.KeyboardEvent | React.MouseEvent) => void;
}

export const AppBarBasic: React.VFC<Props> = ({ pageName, onClick }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ boxShadow: 0 }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={onClick}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            {pageName}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
