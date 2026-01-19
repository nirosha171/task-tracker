import { useState } from "react";

function AddTask({ onAdd }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    onAdd(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: "center", marginTop: 20 }}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task..."
        style={{ padding: "10px", width: "200px" }}
      />
      <button
        type="submit"
        style={{
          padding: "10px 15px",
          marginLeft: "10px",
          background: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Add
      </button>
    </form>
  );
}
export default AddTask;