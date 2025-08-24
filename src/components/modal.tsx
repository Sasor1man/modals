import { Button, Card, DatePicker, Input, Flex, InputNumber } from "antd";
import { FunctionComponent, useRef, useState } from "react";


interface ModalProps {
    onClose: () => void,
    handleApply: (form: React.RefObject<HTMLFormElement>, validationFucn: (form: React.RefObject<HTMLFormElement>) => {name: string, date: string, num:string} | undefined )  => void
}

type Status = '' | 'error'

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
    position: 'absolute',
    top: '50%',
    left: '50%',
    translate: '-50% -50%',
    zIndex: 2
}

const Modal: FunctionComponent<ModalProps> = ({ onClose, handleApply}) => {

    const formRef = useRef<HTMLFormElement>(null)
    const [nameStatus, setNameStatus] = useState<Status>('')
    const [dateStatus, setDateStatus] = useState<Status>('')
    const [numStatus, setNumStatus] = useState<Status>('')

    const validation = (form: React.RefObject<HTMLFormElement>) => {
        const current = form.current

        const nameInput = current.elements.namedItem('name') as HTMLInputElement
        const dataInput = current.elements.namedItem('data') as HTMLInputElement
        const numInput = current.elements.namedItem('num') as HTMLInputElement

        const name = nameInput.value
        const date = dataInput.value
        const num = numInput.value

        name === '' ? setNameStatus('error') : setNameStatus('')
        date === '' ? setDateStatus('error') : setDateStatus('')
        num === '' ? setNumStatus('error') : setNumStatus('')

        if (name !== '' && date !== '' && num !== '') return {name, date, num}
    }

    

    return (<div style={backgroundStyle}>
        <form ref={formRef}>
            <Card title="" style={cardStyle}>
                <Input placeholder="Name" name="name" status={nameStatus}/> <DatePicker name="data" status={dateStatus} /> <InputNumber type="number" placeholder="number" name="num" status={numStatus}/>
                <Flex justify="space-between">
                    <Button onClick={() => onClose()}>Close</Button>
                    <Button onClick={() => handleApply(formRef as React.RefObject<HTMLFormElement>, validation)}>Apply</Button>
                </Flex>
            </Card>
        </form>
    </div>);
}

export default Modal;