<script setup lang="ts">
import ProductList from './components/ProductList.vue';
import { reactive } from 'vue';

const list = [
  {
    id: 1,
    description: 'Item 1',
    price: 1.5,
  },
  {
    id: 2,
    description: 'Item 2',
    price: 20.0,
  },
  {
    id: 3,
    description: 'Item 3',
    price: 1.99,
  },
  {
    id: 4,
    description: 'Item 4',
    status: 'sold out',
  },
];
</script>

<template>
  <div id="app">
    <product-list :list="list"></product-list>
  </div>
</template>
