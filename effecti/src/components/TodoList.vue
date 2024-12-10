<template>
  <div class="list bg-primary-subtle d-flex flex-column  col-12 col-md-6 col-lg-6   mx-auto" >
    <h1 class="badge fs-3 ">To do List</h1>
    


    <div class="filter d-flex flex-row justify-content-center">
      <select name="">
        <option value="high">All</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      <button class="border-0" @click="addForm">add</button>
      <div   v-if="open"  >
        <FormItem  :item="item" @save="save" @cancel="open = false"/>

      </div>
    </div>
    <ul>
      <TaskItem  v-for="listItem in list" v-bind:key="listItem.id" :item="listItem" @edit="editItem"  @delete="deleteItem"/>
    </ul>
  </div>
</template>

<script>
import TaskItem from './TaskItem.vue'
import FormItem from './FormItem.vue'

const open = false;
  

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
    }

  },

  computed: {
    list () {
      return this.$store.state.list
    }
  },
  data: () => ({
    item: {},
    open
  } )
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
