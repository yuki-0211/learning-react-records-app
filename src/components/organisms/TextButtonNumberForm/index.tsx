import { MouseEventHandler} from "react";
import { ButtonIcon } from "../../atoms/ButtonIcon";
import { StyleDivider } from "../../atoms/StyleDivider";
import { StyleIcon } from "../../atoms/StyleIcon";
import { StylePaper } from "../../atoms/StylePaper";
import { TextInputBase } from "../../atoms/TextInputBase";

interface Props {
  count:string | undefined
  onClickIncrease: () => void;
  onClickDecrease:  () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  inputProps:object
}

export const TextButtonNumberForm: React.VFC<Props> = ({
  count,
  onClickIncrease,
  onClickDecrease,
  onChange,
  inputProps
}) => {
  return (
    <StylePaper sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 270 }}>
      <TextInputBase value={count} onChange={onChange} inputProps={inputProps} sx={{ ml: 1, flex: 1 }}/>
      <ButtonIcon onClick={onClickIncrease}>
        <StyleIcon>add_circle</StyleIcon>
      </ButtonIcon>
      <StyleDivider orientation="vertical" sx={{ height: 28, m: 0.5 }}/>
      <ButtonIcon onClick={onClickDecrease}>
        <StyleIcon>do_not_disturb_on</StyleIcon>
      </ButtonIcon>

    </StylePaper>
  );
};