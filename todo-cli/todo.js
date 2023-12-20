const todoList = () => {
  const all = [];

  const add = (todoItem) => {
    all.push(todoItem);
  };

  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    const today = new Date().toISOString().split("T")[0];
    return all.filter((item) => !item.completed && item.dueDate < today);
  };

  const dueToday = () => {
    const today = new Date().toISOString().split("T")[0];
    return all.filter(
      (item) => (item.dueDate === today && !item.completed) || item.completed,
    );
  };

  const dueLater = () => {
    const today = new Date().toISOString().split("T")[0];
    return all.filter((item) => !item.completed && item.dueDate > today);
  };

  const toDisplayableList = (list, includeDate) => {
    return list
      .map((item) => {
        const checkbox = `[${item.completed ? "x" : " "}]`;
        const title = item.title;
        const dueDate =
          includeDate && item.dueDate ? ` ${item.dueDate.split("T")[0]}` : "";
        return `${checkbox} ${title}${dueDate}`;
      })
      .join("\n");
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

module.exports = todoList;
