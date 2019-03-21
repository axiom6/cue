

export default {
  template:`
    <li>
      {{ todo.text }}
      <button @click="$emit('remove', todo.id)">
        X
      </button>
    </li>`,
  props: {
    todo: {
      type: Object,
      required: true
    }
  }
}