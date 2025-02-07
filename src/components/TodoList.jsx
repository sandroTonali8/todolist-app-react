import InfiniteScroll from 'react-infinite-scroll-component'
import { Divider } from 'antd'

export default function TodoList({ todo }) {
  return (
    <div className='list-container'>
      <InfiniteScroll
        dataLength={todo.length}
      >
        <div>
          {todo.map(todo => (
            <>
              <span key={todo.id}>{todo.date} - {todo.text}</span>
              <Divider className='divider'/>
            </>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  )
}