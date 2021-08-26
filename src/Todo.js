import CreateIcon from "@material-ui/icons/Create";
import IconButton from "@material-ui/core/IconButton";

function Todo({ item, id, deleteTodo }) {
  return (
    <div>
      <div className="todo" style={{ background: item.color }}>
        <div>{item.name}</div>
        <div>
          <button onClick={() => deleteTodo(id)}> X </button>
        </div>
        <div>
          <IconButton>
            <CreateIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
export default Todo;
