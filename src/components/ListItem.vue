<script lang="ts" setup>
import { integer, number, string } from 'vue-types';
import Availability from './Availability.vue';
import { statusType } from '../types';

defineProps({
  id: integer().isRequired,
  // namespaced validators as well
  description: string().def('').isRequired,
  price: number().def(0),
  status: statusType(),
});

</script>
<template>
  <li>
    {{ id }} - {{ description }} - $ {{ price }} (<Availability
      :status="status ?? null"
    />)
  </li>
</template>
