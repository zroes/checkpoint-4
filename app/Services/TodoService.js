import { appState } from "../AppState.js";
import { Todo } from "../Models/Todo.js";
import { Pop } from "../Utils/Pop.js";
import { sandboxAPI } from "./axiosService.js"

class TodoService {
  async deleteItem(id) {
    let itemIndex = appState.todoList.findIndex(i => i.id == id)
    appState.todoList.splice(itemIndex, 1)
    appState.emit('todoList')
    const res = await sandboxAPI.delete(`/api/zack/todos/${id}`)

  }
  async complete(id) {
    console.log(appState.todoList);
    let item = appState.todoList.find(i => i.id == id)
    item.completed = !item.completed
    appState.emit('todoList')
    try {
      const res = await sandboxAPI.put(`/api/zack/todos/${id}`, item)
    } catch (error) {
      Pop.error('unable to contact api')
      console.error(error)
      item.completed = !item.completed
      appState.emit('todoList')
    }
  }
  async getTodoList() {
    const res = await sandboxAPI.get('/api/zack/todos')
    appState.todoList = res.data.map(item => new Todo(item))
  }
  async addTodoListItem(formValue) {
    // console.log(formValue);
    const res = await sandboxAPI.post('/api/zack/todos', { 'description': formValue })
    console.log(res.data);
    appState.todoList.push(new Todo(res.data))
    appState.emit('todoList')
  }

}

export const todoService = new TodoService()