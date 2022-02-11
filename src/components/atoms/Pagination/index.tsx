import {
  Pagination as MuiPagination,
  PaginationProps as MuiPaginationProps,
} from '@mui/material';

interface PaginationProps extends MuiPaginationProps {}

export const Pagination: React.VFC<PaginationProps> = (props) => {
  return <MuiPagination {...props} />;
};
