import { AxiosRequestConfig } from "axios"
import { useDialog } from "../../../hooks/useDialog";
import { getRequest } from "../../../lib/axios";
import { Button } from "../../atoms/Button"

interface Props{
  URL: string;
  config: AxiosRequestConfig<any>;
}

export const EditButton:React.VFC<Props> = ({URL,config}) =>{
  const {open, close } = useDialog();
    const onClick = () =>{
        open()
        getRequest({URL:URL,config:})

    }
    return(
        <Button/>
    )

}