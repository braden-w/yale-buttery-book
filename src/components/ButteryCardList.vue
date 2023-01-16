<template>
  <q-list>
    <ButteryCard
      v-for="(buttery, index) in props.butteries"
      :key="index"
      :buttery="buttery"
    />
  </q-list>
</template>

<script setup lang="ts">
import { Buttery, TimeRemaining, TimeUntil } from 'src/shared/types-butteries';
import { PropType } from 'vue';
import ButteryCard from './ButteryCard.vue';

const props = defineProps({
  butteries: {
    type: Array as PropType<(Buttery & Partial<TimeRemaining & TimeUntil>)[]>,
    default: () => [],
  },
});
</script>
