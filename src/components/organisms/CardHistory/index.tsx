import { Button } from '../../atoms/Button';
import { Card } from '../../atoms/Card';
import { CardActions } from '../../atoms/CardActions';
import { CardContent } from '../../atoms/CardContent';
import { Typography } from '../../atoms/Typograpy';
import { demo_data } from './demo_data';

interface recode {
  title: string;
  type: string;
  time: number;
  rank: number;
  date: number;
  comment: string;
}

export const CardHistory: React.VFC = () => {
  const card_data: recode[] = demo_data();
  return (
    <div>
      {card_data.map((data, index) => (
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h3" gutterBottom>
              {data.title}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography>{data.type}</Typography>
          </CardContent>
          <CardContent>
            <Typography>{data.time}</Typography>
          </CardContent>
          <CardContent>
            <Typography>{data.rank}</Typography>
          </CardContent>
          <CardContent>
            <Typography>{data.date}</Typography>
          </CardContent>
          <CardContent>
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
