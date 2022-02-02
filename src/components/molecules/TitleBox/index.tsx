import { Box } from '../../atoms/Box';

interface Props {
  title: string;
}

export const TitleBox: React.VFC<Props> = ({ title }) => {
  return (
    <div>
      <Box
        sx={{
          width: 270,
          height: 40,
        }}
      />
      <Box
        sx={{
          mx: 4,
          p: '2px 4px',
          alignItems: 'center',
          width: 270,
          height: 30,
        }}
      >
        {title}
      </Box>
    </div>
  );
};
