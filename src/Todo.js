function Todo({item,id,deleteTodo}) {
    
  return (
    <div>
      <div className="todo">
        <div>{item}</div>
        <div>
          <button onClick={() => deleteTodo(id)}> X </button>
        </div>
      </div>
    </div>
  );
}
export default Todo;
