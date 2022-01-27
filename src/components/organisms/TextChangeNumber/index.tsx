import { MouseEventHandler, RefObject } from "react";
import { ButtonIcon } from "../../atoms/ButtonIcon";
import { StyleDivider } from "../../atoms/StyleDivider";
import { StyleIcon } from "../../atoms/StyleIcon";
import { StylePaper } from "../../atoms/StylePaper";
import { TextInputBase } from "../../atoms/TextInputBase";

interface Props {
  count:number
  onClickIncrease: MouseEventHandler<HTMLButtonElement>;
  onClickDecrease:  MouseEventHandler<HTMLButtonElement>;
  ref: RefObject<HTMLInputElement>
}

export const TextChangeNumber: React.VFC<Props> = ({
  count,
  onClickIncrease,
  onClickDecrease,
  ref
}) => {
  return (
    <StylePaper sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 270 }}>
      <TextInputBase ref={ref} value={count} sx={{ ml: 1, flex: 1 }}/>
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