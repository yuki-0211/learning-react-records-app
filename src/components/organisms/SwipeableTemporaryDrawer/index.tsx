import { Fragment } from 'react';
import { SwipeableDrawer } from '../../atoms/SwipeableDrawer';
import { AppBarBasic } from '../../molecules/AppBarBasic';
import { MenuList } from '../../molecules/MenuList';
import { useSwipeableTemporaryDrawer } from '../../../hooks/useSwipeableTemporaryDrawer';

interface page {
  name: string;
  icon: JSX.Element;
  url: string;
}
interface Props {
  list: page[];
}
export const SwipeableTemporaryDrawer: React.VFC<Props> = ({ list }) => {
  const { state, onChange, url, onClick } = useSwipeableTemporaryDrawer();

  let pageName: string = 'Not Found';
  list.forEach((page, index) => {
    if (page.url === url) {
      pageName = page.name;
    }
  });

  return (
    <Fragment key="left">
      <AppBarBasic onClick={onChange(true)} pageName={pageName} />
      <SwipeableDrawer
        anchor="left"
        open={state}
        onClose={onChange(false)}
        onOpen={onChange(true)}
      >
        <MenuList
          onClick={onChange}
          onKeyDown={onChange}
          onClickButton={onClick}
          list={list}
        />
      </SwipeableDrawer>
    </Fragment>
  );
};
