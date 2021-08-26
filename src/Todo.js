function Todo({item,id,deleteTodus}) {
    
  return (
    <div>
      <div className="todo">
        <div>{item}</div>
        <div>
          <button onClick={() => deleteTodus(id)}> X </button>
        </div>
      </div>
    </div>
  );
}
export default Todo;
