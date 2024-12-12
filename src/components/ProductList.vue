<script lang="ts" setup>
import { arrayOf, object } from 'vue-types';
import ListItem from './ListItem.vue';

type Item = Omit<InstanceType<typeof ListItem>, `$${string}`>;

defineProps({
  list: arrayOf(object<Item>()),
});
</script>
<template>
  <div>
    <h4>Products list</h4>
    <ul>
      <list-item
        v-for="item in list"
        :key="item.id"
        :id="item.id"
        :description="item.description"
        :price="item.price"
        :status="item.status"
      />
    </ul>
  </div>
</template>
