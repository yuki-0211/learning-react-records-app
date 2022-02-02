import { SelectChangeEvent } from '@mui/material';
import { ReactNode, useCallback, useState } from 'react';

export const useSelect = () => {
  const [state, setState] = useState<string>('');
  const onChange = useCallback(
    (event: SelectChangeEvent<string>, child: ReactNode) =>
      setState(event.target.value),
    []
  );
  return { state, onChange };
};
