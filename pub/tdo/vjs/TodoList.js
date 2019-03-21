
import BaseInputText from './BaseInputText.js'
import TodoListItem  from './TodoListItem.js'

let nextTodoId = 1;

export default {
  template:`
    <div>
      <BaseInputText 
        v-model="newTodoText"
        placeholder="New todo"
        @keydown.enter="addTodo">
      </BaseInputText>
      <ul v-if="todos.length">
        <TodoListItem
          v-for="todo in todos"
          :key="todo.id"
          :todo="todo"
          @remove="removeTodo">
        </TodoListItem>
      </ul>
      <p v-else>
        Nothing left in the list. Add a new todo in the input above.
      </p>
    </div>`,
	components: {
		BaseInputText, TodoListItem
	},
  data () {
    return {
			newTodoText: '',
      todos: [
				{
					id: nextTodoId++,
					text: 'Learn Vue'
				},
				{
					id: nextTodoId++,
					text: 'Learn about single-file components'
				},
				{
					id: nextTodoId++,
					text: 'Fall in love'
				}
			]
    }
  },
	methods: {
		addTodo () {
			const trimmedText = this.newTodoText.trim();
			if (trimmedText) {
				this.todos.push({
					id: nextTodoId++,
					text: trimmedText
				});
				this.newTodoText = ''
			}
		},
		removeTodo (idToRemove) {
			this.todos = this.todos.filter(todo => {
				return todo.id !== idToRemove
			})
		}
	}
}
