const tasks = [
    "Fazer compras",
    "Renovar CNH",
    "Pagar contas",
    "Estudar React",
    "Fazer Minilab",
  ];

function ToDoList() {
    return (
        <div className="list">
            <ul class="list-group">
                {tasks.map((task, index) => (   
                    <li key={index} class="list-group-item">
                        <input class="form-check-input me-1" type="checkbox" /> {task}
                    </li>
                    )
                )}
            </ul>
        </div>
    )
};

export default ToDoList;
