function TaskList({ tasks, onDelete }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, textAlign: "center" }}>
      {tasks.map((task, index) => (
        <li key={index} style={{ margin: "10px 0" }}>
          {task}
          <button
            onClick={() => onDelete(index)}
            style={{
              marginLeft: "10px",
              background: "red",
              color: "white",
              border: "none",
              padding: "5px 10px",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
export default TaskList;