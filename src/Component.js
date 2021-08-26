function Component({item,id,deleteItem}) {
    
  return (
    <div>
      
      <div className="todo">
        <div>{item}</div>
        <div>
          <button onClick={() => deleteItem(id)}> X </button>
        </div>
      </div>
    </div>
  );
}
export default Component;
