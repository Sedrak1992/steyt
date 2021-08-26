function Todo({item,id,deleteTodo}) {
    
  return (
    <div>
      <div className="todo" style={{background: item.color}}>
        <div>{item.name}</div>
        <div>
          <button onClick={() => deleteTodo(id)}> X </button>
        </div>
      </div>
    </div>
  );
}
export default Todo;
