import {
  Pagination as MuiPagination,
  PaginationProps as MuiPaginationProps,
} from '@mui/material';

interface PaginationProps extends MuiPaginationProps {}

export const Pagination: React.VFC<PaginationProps> = ({
  count,
  variant,
  color,
  defaultPage,
  onChange,
  sx,
}) => {
  return (
    <MuiPagination
      count={count}
      variant={variant}
      color={color}
      defaultPage={defaultPage}
      onChange={onChange}
      sx={sx}
    />
  );
};
