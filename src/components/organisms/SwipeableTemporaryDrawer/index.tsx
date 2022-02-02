import { Fragment, useState } from 'react';
import { SwipeableDrawer } from '../../atoms/SwipeableDrawer';
import { AppBarBasic } from '../../molecules/AppBarBasic';
import { MenuList } from '../../molecules/MenuList';
import { demoData } from './demoData';
import { useSwipeableTemporaryDrawer } from '../../../hooks/useSwipeableTemporaryDrawer';

export default function SwipeableTemporaryDrawer() {
  const { state, onChange, url, onClick } = useSwipeableTemporaryDrawer();

  const list = demoData();

  return (
    <Fragment key="left">
      <AppBarBasic onClick={onChange(true)} pageName={url} />
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
}
