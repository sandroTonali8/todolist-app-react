import InfiniteScroll from 'react-infinite-scroll-component'
import { Button, Divider, Radio } from 'antd'
import { useState, useEffect } from 'react'

export default function TodoList({ todo }) {
  const [ todoCur, setTodoCur ] = useState([])

  useEffect(() => {
    if (todo && todo.length > 0) {
      setTodoCur(todo)
    }
  }, [todo])

  const handleDone = (id) => {
    setTodoCur(todoCur.map(item => 
      item.id === id ? { ...item, done: !item.done } : item
    ))
  }

  return (
    <div className='list-container'>
      <InfiniteScroll
        dataLength={todoCur.length}
      >
        <div>
          {todoCur.map(todoItem => (
            <div className='every-todo' key={todoItem.id}>
              <span>
                <div>
                  <h4>
                    {todoItem.date}
                  </h4>
                  {todoItem.text}
                </div>
                <div className='right-elements'>
                  <Radio onClick={() => handleDone(todoItem.id)} checked={todoItem.done}/>
                  <Button>
                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="8" cy="8" r="8" fill="#4d4d62"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M5.32587 5.18571C5.7107 4.90301 6.28333 4.94814 6.60485 5.28651L8 6.75478L9.39515 5.28651C9.71667 4.94814 10.2893 4.90301 10.6741 5.18571C11.059 5.4684 11.1103 5.97188 10.7888 6.31026L9.1832 7.99999L10.7888 9.68974C11.1103 10.0281 11.059 10.5316 10.6741 10.8143C10.2893 11.097 9.71667 11.0519 9.39515 10.7135L8 9.24521L6.60485 10.7135C6.28333 11.0519 5.7107 11.097 5.32587 10.8143C4.94102 10.5316 4.88969 10.0281 5.21121 9.68974L6.8168 7.99999L5.21122 6.31026C4.8897 5.97188 4.94102 5.4684 5.32587 5.18571Z" fill="white"/>
                    </svg>
                  </Button>
                </div>
              </span>
              <Divider/>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  )
}