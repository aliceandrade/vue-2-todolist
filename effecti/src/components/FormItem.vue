<template>
    <dialog open>
    <form action="">
        <label for="title">
            <span>Title*</span><input type="text" id="title">
        </label>
        <label for="description">
            <span>description</span><input type="text" id="description">
        </label>
        <label for="priority">
            <span>Priority</span>
            <select name="" id="priority">
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
            </select>
            <button type="button"  @click.prevent="$emit('cancel')">cancel</button>
            <button type="button">save</button>
        </label>
    </form>
    </dialog>
</template>

<script>
   export default {
   name: 'FormItem',
   props: ['item']
}

</script>