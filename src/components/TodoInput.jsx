import { Input, Button } from 'antd'
import './index.scss'
import { useEffect, useRef } from 'react'
import { flushSync } from 'react-dom'

export default function TodoInput({ todo, setTodo, todoText, setTodoText, dateText }) {
  const todoRef = useRef(todo)

  useEffect(() => {
    todoRef.current = todo
  }, [todo])

  const handleInputChange = (e) => {
    setTodoText(e.target.value)
  }

  const inputSubmit = (e) => {
    e.preventDefault()
    if (todoText === '') alert('请输入内容')
    else if (dateText === '') alert('请选择日期')
    else {
      const newTodo = {
        id: Date.now(),
        text: todoText,
        date: dateText,
        done: false
      }
      if (todoRef.current.some((item) => 
        item.text === newTodo.text && item.date === newTodo.date
      )) alert('任务已存在')
      else {
        alert('提交成功')
        flushSync(() => {
          setTodo([...todoRef.current, newTodo])
        })
        setTodoText('')
      }
    }
  }

  return (
    <div>
      <Input className='todo-input' onChange={handleInputChange} value={todoText}/>
      <Button htmlType='submit' type='primary' className='submit-button' 
        onClick={inputSubmit}
      >
        添加
      </Button>
    </div>
  )
}