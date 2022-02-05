import { useContext } from 'react';
import { cardHistoryContext } from '../../../contexts/Recode/cardHistory';
import { Box } from '../../atoms/Box';
import { Button } from '../../atoms/Button';
import { Card } from '../../atoms/Card';
import { CardActions } from '../../atoms/CardActions';
import { CardContent } from '../../atoms/CardContent';
import { Typography } from '../../atoms/Typograpy';

export const CardHistory: React.VFC = () => {
  const ctx = useContext(cardHistoryContext);
  return (
    <div>
      {ctx.cardData.map((data, index) => (
        <Card
          variant="outlined"
          sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}
          key={index}
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
