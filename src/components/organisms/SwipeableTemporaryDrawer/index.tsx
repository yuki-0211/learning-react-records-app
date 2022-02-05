import { Fragment, useContext } from 'react';
import { SwipeableDrawer } from '../../atoms/SwipeableDrawer';
import { AppBarBasic } from '../../molecules/AppBarBasic';
import { MenuList } from '../../molecules/MenuList';
import { swipeableTemporaryDrawerContext } from '../../../context/swipeableTemproraryDrawer';

interface page {
  name: string;
  icon: JSX.Element;
  url: string;
}
interface Props {
  list: page[];
}
export const SwipeableTemporaryDrawer: React.VFC<Props> = ({ list }) => {
  const ctx = useContext(swipeableTemporaryDrawerContext);

  let pageName: string = 'Not Found';
  list.forEach((page) => {
    if (page.url === ctx.url) {
      pageName = page.name;
    }
  });

  return (
    <Fragment key="left">
      <AppBarBasic onClick={ctx.onChange(true)} pageName={pageName} />
      <SwipeableDrawer
        anchor="left"
        open={ctx.state}
        onClose={ctx.onChange(false)}
        onOpen={ctx.onChange(true)}
      >
        <MenuList
          onClick={ctx.onChange}
          onKeyDown={ctx.onChange}
          onClickButton={ctx.onClick}
          list={list}
        />
      </SwipeableDrawer>
    </Fragment>
  );
};
