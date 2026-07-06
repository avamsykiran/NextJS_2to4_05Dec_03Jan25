import { Alert } from "react-bootstrap";

const MsgBox = ({msg,variant}:{msg:string,variant:"info"|"danger"}) => (
    <Alert variant={variant} className="p-2 mx-auto m-2 text-bold">
        {msg}
    </Alert>
);

export default MsgBox;