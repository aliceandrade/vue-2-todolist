<template>

     <li class=" d-flex flex-row justify-content-between gap-1">
        <input type="checkbox" :checked="item.completed" @change="$emit('completedItem', item)">
        <span class="flex-grow-1 text-left">{{ item.title }}</span>
        <span class=" text-left">{{ priorities[item.priority] }}</span>
        <button type="button" @click.prevent="$emit('edit', item)" class="border-0" aria-label="edit"><i class="bi bi-pencil"></i> </button>
        <button type="button" @click.prevent="$emit('delete', item)" class="border-0" aria-label="delete" ><i class="bi bi-eraser"></i></button>
      </li>
</template>

<script>
    export default {
    name: 'TaskItem',
    props: ['item'],
    data: () => ({
      priorities: {
        1: 'high',
        2: 'medium',
        3: 'low'
      }
    })
}

</script>
