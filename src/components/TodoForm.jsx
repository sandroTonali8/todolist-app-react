import { Form, Card, DatePicker } from 'antd'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import './index.scss'
import { useState } from 'react'

export default function TodoForm() {
  const [ todoText, setTodoText ] = useState('')
  const [ todo, setTodo ] = useState([])
  const [ dateText, setDateText ] = useState('')

  const handleDateChange = (date) => {
    if (date === null) setDateText('')
    else setDateText(date.format('YYYY-MM-DD'))
  }
  
  return (
    <div className='card-container'>
      <Card 
        className='form-container'
        bordered={false}
      >
        <Form className='todo-form'>
          <Form.Item
            name='日期'
            label='日期'
            rules={[{
              required: true,
              message: '请选择日期!',
            }]}
          >
            <DatePicker onChange={handleDateChange} value={dateText}/>
          </Form.Item>
          <Form.Item>
            <TodoInput
              todo={todo} setTodo={setTodo} 
              todoText={todoText} setTodoText={setTodoText}
              dateText={dateText}
            />
          </Form.Item>
          <Form.Item>
            <TodoList todo={todo}/>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}