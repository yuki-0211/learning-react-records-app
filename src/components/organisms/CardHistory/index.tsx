import { Satellite } from '@mui/icons-material';
import { useContext } from 'react';
import { useDialog } from '../../../hooks/useDialog';
import { cardHistoryContext } from '../../../providers/CardHistory';
import { Box } from '../../atoms/Box';
import { Button } from '../../atoms/Button';
import { Card } from '../../atoms/Card';
import { CardActions } from '../../atoms/CardActions';
import { CardContent } from '../../atoms/CardContent';
import { Rating } from '../../atoms/Rating';
import { Typography } from '../../atoms/Typograpy';
import { DialogInputRecord } from '../DialogInputRecord';
import { EditButton } from '../EditButton';

export const CardHistory: React.VFC = () => {
  const ctx = useContext(cardHistoryContext);
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
            <EditButton URL="test" data={data}>
              edit
            </EditButton>
            <Button>delete</Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};
