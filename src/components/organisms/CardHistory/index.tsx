import { useContext } from 'react';
import { cardHistoryContext } from '../../../providers/CardHistory';
import { Box } from '../../atoms/Box';
import { Card } from '../../atoms/Card';
import { CardActions } from '../../atoms/CardActions';
import { CardContent } from '../../atoms/CardContent';
import { Rating } from '../../atoms/Rating';
import { Typography } from '../../atoms/Typograpy';
import { DeleteButton } from '../DeleteButton';
import { EditButton } from '../EditButton';

export const CardHistory: React.VFC = () => {
  /*
  Display the learning record on cards.
  */

  const ctx = useContext(cardHistoryContext);
  const URL = '/records';

  return (
    <Box>
      {ctx.cardData.map((data, index) => (
        <Card
          variant="outlined"
          sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}
          key={index}
        >
          <CardContent sx={{ gridRow: '1', gridColumn: 'span 3' }}>
            <Typography variant="h4" gutterBottom>
              {data.title}
            </Typography>
          </CardContent>
          <CardContent sx={{ gridRow: '1', gridColumn: 'span 1' }}>
            <Typography>{data.date}</Typography>
          </CardContent>
          <CardContent sx={{ gridRow: '2', gridColumn: 'span 1' }}>
            <Box sx={{ display: 'flex' }}>
              <Typography variant="h4">{data.time}</Typography>
              <Typography>hours</Typography>
            </Box>
          </CardContent>
          <CardContent sx={{ gridRow: '2', gridColumn: 'span 1' }}>
            <Rating value={data.rank} readOnly />
          </CardContent>
          <CardContent sx={{ gridRow: '2', gridColumn: 'span 1' }}>
            <Typography>{data.type}</Typography>
          </CardContent>
          <CardContent sx={{ gridRow: '2', gridColumn: 'span 1' }}>
            <Typography>{data.comment}</Typography>
          </CardContent>
          <CardActions sx={{ gridRow: '3', gridColumn: 'span 1' }}>
            <EditButton data={data} URL={URL}>
              edit
            </EditButton>
            <DeleteButton data={data} URL={URL}>
              delete
            </DeleteButton>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};
