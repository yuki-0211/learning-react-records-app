import { useCallback, useState } from 'react';

export const useSwipeableTemporaryDrawer = () => {
  const [state, setState] = useState<boolean>(false);
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
  const onChange = useCallback((open: boolean) => toggleDrawer(open), []);
  return { state, onChange };
};
