import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useSwipeableTemporaryDrawer = () => {
  const [state, setState] = useState<boolean>(false);
  const [url, setUrl] = useState<string>('/');
  const navigate = useNavigate();

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState(open);
    };
  const routeClick =
    (url: string) => (event: React.KeyboardEvent | React.MouseEvent) => {
      setUrl(url);
      navigate(url);
    };
  const onChange = useCallback((open: boolean) => toggleDrawer(open), []);
  const onClick = useCallback((url: string) => routeClick(url), []);
  return { state, onChange, url, onClick };
};
