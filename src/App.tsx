import * as React from 'react';
import type { FunctionComponent } from 'react';
import { Space, Table, TableProps, Button } from "antd";

interface DataType {
  name: string;
  date: {
    day: number;
    month: number;
    year: number
  };
  num: number
  key: number
}


const App: FunctionComponent = () => {

  const [data, setData]  = React.useState<DataType[]>([])

  const handleDelete = (id:number) => {
    setData(prev => prev.filter(e => e.key !== id))
  }

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

  return (<div>

    <Table<DataType> columns={columns} dataSource={data} />

  </div>);
}

export default App;
