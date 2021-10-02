
const TodoItems = ({ todos, deleteTodo }) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={ todo.id } onClick={() => deleteTodo(todo.id)}>
                    <span>{ todo.content }</span>
                </div>
            )
        })  
    ) : (
        <p className="collection-item center">You have no todos left, Yay!</p>
    )
    return (
        <div className="todos collection">
            { todoList }
        </div>
    )
}

export default TodoItems;