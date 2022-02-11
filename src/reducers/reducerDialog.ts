interface Store {
  isOpen: boolean;
}
type AcctionType = { type: 'open' } | { type: 'close' };

export const reducerDialog = (state: Store, action: AcctionType) => {
  switch (action.type) {
    case 'open':
      return { isOpen: true };
    case 'close':
      return { isOpen: false };
    default:
      return state;
  }
};
