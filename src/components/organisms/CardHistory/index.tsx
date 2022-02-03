import { useCardHistory } from '../../../hooks/useCardHistory';
import { Box } from '../../atoms/Box';
import { Button } from '../../atoms/Button';
import { Card } from '../../atoms/Card';
import { CardActions } from '../../atoms/CardActions';
import { CardContent } from '../../atoms/CardContent';
import { Typography } from '../../atoms/Typograpy';
import { demo_data } from './demo_data';

interface Record {
  title: string;
  type: string;
  time: number;
  rank: number;
  date: number;
  comment: string;
}

export const CardHistory: React.VFC = () => {
  const { state: card_data } = useCardHistory(demo_data(), '/records');
  return (
    <div>
      {card_data.map((data, index) => (
        <Card
          variant="outlined"
          sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}
        >
          <CardContent>
            <Typography variant="h4" gutterBottom>
              {data.title}
            </Typography>
            <Box
              sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}
            >
              <Typography variant="h4">{data.time}</Typography>
              <Typography>hours</Typography>
            </Box>
          </CardContent>
          <CardContent>
            <Typography>{data.type}</Typography>
            <Typography>{data.rank}</Typography>
          </CardContent>
          <CardContent>
            <Typography>{data.date}</Typography>
            <Typography>{data.comment}</Typography>
          </CardContent>
          <CardActions>
            <Button>delete</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};
