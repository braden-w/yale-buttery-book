<template>
  <div>Hello</div>
</template>

<script setup lang="ts">
import { Buttery, TimeRemaining, TimeUntil } from 'src/shared/types-butteries';
import { PropType } from 'vue';

const props = defineProps({
  butteries: {
    type: Array as PropType<(Buttery & Partial<TimeRemaining & TimeUntil>)[]>,
    default: () => [],
  },
  emptyMessage: {
    type: Object as PropType<{
      overline: string;
      header: string;
      text: string;
    }>,
    default: () => ({}),
  },
});
</script>
