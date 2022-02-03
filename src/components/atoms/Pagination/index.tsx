import {
  Pagination as MuiPagination,
  PaginationProps as MuiPaginationProps,
} from '@mui/material';

export const Pagination: React.VFC<MuiPaginationProps> = ({
  count,
  variant,
  color,
  defaultPage,
  onChange,
}) => {
  return (
    <MuiPagination
      count={count}
      variant={variant}
      color={color}
      defaultPage={defaultPage}
      onChange={onChange}
    />
  );
};
