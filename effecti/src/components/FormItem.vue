<template>
    <dialog open>
        <input type="hidden" v-model="id" />
        <label for="title">
            <span>Title*</span>
            <input type="text" v-model="title" />
        </label>
        <label for="description">
            <span>description</span>
            <textarea type="text" v-model="description"></textarea>
        </label>
        <label for="priority">
            <span>Priority</span>
            <select name="" v-model="priority">
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
            </select>
            <button type="button"  @click.prevent="$emit('cancel')">cancel</button>
            <button type="button" @click.prevent="save" >save</button>
        </label>
    </dialog>
</template>

<script>
   export default { 
   name: 'FormItem',
   props: ['item'],
   data : () => ({
    id: null,
    title: '',
    description: '',
    priority: '',
    completed: false
   }),
   created() {
    this.$data.id = this.$props.item.id
    this.$data.title = this.$props.item.title
    this.$data.description = this.$props.item.description
    this.$data.priority = this.$props.item.priority
   },
   methods: {
    save() {
        this.$emit('save', this.$data)
    }
  }
   
}



</script>


