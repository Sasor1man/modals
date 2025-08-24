import * as React from 'react';
import type { FunctionComponent } from 'react';
import { Space, Table, TableProps, Button } from "antd";
import Modal from './components/modal';
import { createPortal } from 'react-dom';
import { DataType } from './types/datatype';

const App: FunctionComponent = () => {

  const [data, setData]  = React.useState<DataType[]>([])
  const [showModal, setShowModal] = React.useState(false)


  const handleDelete = (id:number) => {
    setData(prev => prev.filter(e => e.key !== id))
  }

  const handleApply = (form: React.RefObject<HTMLFormElement>, validationFucn: (form: React.RefObject<HTMLFormElement>) => {name: string, date: string, num:string} | undefined ) => {
        const arrForSave = validationFucn(form)
        if (arrForSave) {
            const {date, name, num} = arrForSave
            const dateArr = date.split('-')
            const validatedDate = {
                day : Number(dateArr[0]),
                month: Number(dateArr[1]),
                year: Number(dateArr[2])
            }
            const data: DataType = {
                name,
                date: validatedDate,
                num: Number(num),
                key
            }
            setData(prev => [...prev, data])
            setShowModal(false)
        }
    }

  const key: number = data.length

  const columns: TableProps<DataType>['columns'] = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: (date) => <p>{date.day}.{date.month}.{date.year}</p>
    },
    {
      title: 'Number',
      dataIndex: 'num',
      key: 'num',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size={'middle'}>
          <Button color='primary' variant='solid'>Change</Button>
          <Button color='danger' variant='solid' onClick={() => handleDelete(record.key)}>Delete</Button>
        </Space>
      )
    }
  ]

  return (<div >
    <Button variant='solid' color='pink' block onClick={() => setShowModal(true)}>Add</Button>

    <Table<DataType> columns={columns} dataSource={data} />

    {showModal && createPortal (<Modal onClose={() => setShowModal(false)} handleApply={handleApply}/>, document.body)}

  </div>);
}

export default App;
