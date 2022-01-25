import { ButtonProps, InputBase } from "@mui/material";
import { Ref } from "react";
import { ButtonIcon } from "../../atoms/ButtonIcon";
import { StyleDivider } from "../../atoms/StyleDivider";
import { StyleIcon } from "../../atoms/StyleIcon";
import { StylePaper } from "../../atoms/StylePaper";

interface Props extends ButtonProps {
  onClickIncrease: () => void;
  onClickDecrease: () => void;
  ref: Ref<HTMLInputElement>
}

export const TextChangeNumber: React.VFC<Props> = ({
  onClickIncrease,
  onClickDecrease,
  ref
}) => {
  return (
    <StylePaper>
      <InputBase ref={ref}/>
      <ButtonIcon onClick={onClickIncrease}>
        <StyleIcon>
          add_circle
        </StyleIcon>
      </ButtonIcon>
      <StyleDivider orientation="vertical"/>
      <ButtonIcon onClick={onClickDecrease}>
        <StyleIcon>
          do_not_disturb_on
        </StyleIcon>
      </ButtonIcon>

    </StylePaper>
  );
};