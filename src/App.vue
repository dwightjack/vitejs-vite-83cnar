<script setup lang="ts">
import ProductList from './components/ProductList.vue';

const list = [
  {
    id: 1,
    description: 'Item 1',
    price: 1.5,
    status: null
  },
  {
    id: 2,
    description: 'Item 2',
    price: 20.0,
    status: null
  },
  {
    id: 3,
    description: 'Item 3',
    price: 1.99,
    status: null
  },
  {
    id: 4,
    description: 'Item 4',
    price: 10,
    status: 'sold out' as const,
  },
];
</script>

<template>
  <div id="app">
    <product-list :list="list"></product-list>
  </div>
</template>
