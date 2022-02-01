import { CardHistory } from '../components/organisms/CardHistory';
import { TextButtonNumberForm } from '../components/organisms/TextButtonNumberForm';
import { InputRecode } from '../components/template/InputRecode';
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
      />
      {state.count}
      <InputRecode />
      <CardHistory />
    </div>
  );
};
