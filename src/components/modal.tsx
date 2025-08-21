import { Button, Card, DatePicker, Input } from "antd";
import { FunctionComponent } from "react";


interface ModalProps {
    onClose: () => void
}

const backgroundStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'fixed',
    zIndex: 1,
    top: 0,
    left: 0
}

const cardStyle: React.CSSProperties = {
    position:'absolute',
    top: '50%',
    left: '50%',
    translate: '-50% -50%',
    zIndex:2
}
 
const Modal: FunctionComponent<ModalProps> = ({onClose}) => {
    return ( <div style={backgroundStyle}> 
        <Card title="" style={cardStyle}>
        <Input placeholder="Name"/> <DatePicker/> <Input type="number" placeholder="number"/> <Button onClick={() => onClose()}>Close</Button>
        </Card>
        </div> );
}
 
export default Modal;