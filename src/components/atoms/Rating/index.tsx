import {
  Rating as MuiRating,
  RatingProps as MuiRatingProps,
} from '@mui/material';

interface RatingProps extends MuiRatingProps {}

export const Rating: React.VFC<RatingProps> = (props) => {
  return <MuiRating {...props} />;
};
