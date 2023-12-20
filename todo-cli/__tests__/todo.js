const todoList = require('../todo');

const {all, markAsComplete, add } = todoList();

describe("TodoList Test Suite", () => {
    test("Should add new todo", () => {
        expect(all.length).toBe(0);
        add(
            {
                title:"Test todo",
                completed: false,
                dueDate: new Date().toLocaleDateString("en-CA")
            }
        );
        expect(all.length).toBe(1);
    })
})