<template>
    <dialog open class="d-flex text-left gap-2 flex-column border-1 bg-success-subtle">
        <input type="hidden" v-model="id" />
        <label class="d-flex flex-column" for="title">
            <span  class="text-start">Title*</span>
            <input type="text" class="form-control" v-model="title" />
        </label>
        <label class="d-flex flex-column" for="description">
            <span class="text-left  text-start">description</span>
            <textarea type="text" class="form-control" v-model="description"></textarea>
        </label>
        <label class="d-flex flex-column" for="priority">
            <span class="text-start">Priority</span>
            <select class="form-select" name="" v-model="priority">
              <option value="1">High</option>
              <option value="2">Medium</option>
              <option value="3">Low</option>
            </select>
            <button class="mt-2 btn btn-primary" type="button"  @click.prevent="$emit('cancel')">cancel</button>
            <button class="mt-2 btn btn-primary" type="button" @click.prevent="save" >save</button>
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


