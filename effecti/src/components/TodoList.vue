<template>
  <div class="list bg-primary-subtle d-flex flex-column  col-12 col-md-6 col-lg-6   mx-auto" >
    <h1 class="badge fs-3 ">To do List</h1>
    <div class="filter d-flex flex-row justify-content-center">
      <select class="form-select w-25" v-model="filterPriority">
        <option value="">All</option>
        <option value="3">Low</option>
        <option value="2">Medium</option>
        <option value="1">High</option>
      </select>
      <button class="border-0 btn btn-secondary" @click="addForm">add</button>
      <div   v-if="open"  >
        <FormItem :item="item" @save="save" @cancel="open = false" />
      </div>
    </div>
    <ul>
      <TaskItem
        v-for="listItem in list"
        :key="listItem.id"
        :item="listItem"
        @edit="editItem"
        @completedItem="completedItem"
        @delete="deleteItem"
      />
    </ul>
  </div>
</template>

<script>
import TaskItem from './TaskItem.vue'
import FormItem from './FormItem.vue'

const open = false

export default {
  name: 'TodoList',
  components: {TaskItem, FormItem},
  methods: {
    deleteItem(item) {
      this.$store.commit('deleteItem', item)
    },
    editItem(item) {
      this.$data.item = item
      this.$data.open = true
    },
    save(item){
      this.$store.commit('saveItem', item)
      this.$data.open = false
    },
    addForm() {
      this.$data.item = {}
      this.$data.open = true
    },
    completedItem(item) {
      this.$store.commit('completedItem', item)
    },
  },
  computed: {
    list () {
      return this.$store.state.list.slice(0)
        .sort((a, b) => a.priority - b.priority)
        .filter(e => !e.completed)
        .filter(e => {
          if (this.$data.filterPriority === '') {
            return true
          }
          return e.priority == this.$data.filterPriority
        })
    }
  },
  data: () => ({
    item: {},
    open,
    filterPriority: ''
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
