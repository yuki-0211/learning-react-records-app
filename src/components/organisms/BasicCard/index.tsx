import { Button } from '../../atoms/Button';
import { Card } from '../../atoms/Card';
import { CardActions } from '../../atoms/CardActions';
import { CardContent } from '../../atoms/CardContent';
import { Typograpys } from '../../atoms/Typograpy';

interface recode {
  title: string;
  time: number;
  rank: number;
  date: number;
  comment: string;
}

export const BasicCard = () => {
  return (
    <Card>
      <CardContent>
        <Typograpys>Test Card Title</Typograpys>
        <Typograpys>Test Card name</Typograpys>
        <Typograpys>Test Card time</Typograpys>
      </CardContent>
      <CardActions>
        <Button>delete</Button>
      </CardActions>
    </Card>
  );
};
