import { TextButtonNumberForm } from '../components/organisms/TextButtonNumberForm';
import { useTextButtonNumberForm } from '../hooks/useTextButtonNumberForm';

export const Recoder = () => {
  const { state, decrement, increment, onChange } = useTextButtonNumberForm();

  return (
    <div>
      <TextButtonNumberForm
        count={state.count}
        onClickDecrease={decrement}
        onClickIncrease={increment}
        onChange={onChange}
        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
      />
      {state.count}
    </div>
  );
};
