import { List } from 'antd'

export default function TodoList({ todo }) {
  console.log(todo)
  return (
    <List
      bordered
      dataSource={todo}
      renderItem={(item) => {
        <List.Item>
          {item}
        </List.Item>
      }}
    />
  )
}