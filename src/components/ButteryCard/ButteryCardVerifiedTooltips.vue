<template>
  <q-badge v-if="props.verified === 'OPEN'" rounded color="blue">
    <q-icon name="check" size="0.75em" />
    <q-tooltip
      class="text-body2"
      :anchor="!isMobile() ? 'center right' : undefined"
      :self="!isMobile() ? 'center left' : undefined"
      :model-value="isTooltipVisible"
      @click.stop="toggleTooltip"
    >
      Buttery Staff verifies that today is open
    </q-tooltip>
  </q-badge>
  <q-badge v-else-if="props.verified === 'CLOSED'" rounded color="red">
    <q-icon name="close" size="0.75em" />
    <q-tooltip
      class="text-body2"
      :anchor="!isMobile() ? 'center right' : undefined"
      :self="!isMobile() ? 'center left' : undefined"
      :model-value="isTooltipVisible"
      @click.stop="toggleTooltip"
    >
      Buttery Staff verifies that today is closed
    </q-tooltip>
  </q-badge>
  <q-badge v-else rounded color="amber">
    <q-icon name="" size="0.75em" />
    <q-tooltip
      class="text-body2"
      :anchor="!isMobile() ? 'center right' : undefined"
      :self="!isMobile() ? 'center left' : undefined"
      :model-value="isTooltipVisible"
      @click.stop="toggleTooltip"
    >
      Buttery Staff has not yet verified today, going by default schedule
    </q-tooltip>
  </q-badge>
</template>

<script setup lang="ts">
import { ref, PropType } from 'vue';
import { Buttery } from 'src/shared/butteries';
import { isMobile } from 'src/shared/screen';

const props = defineProps({
  verified: {
    type: String as PropType<Buttery['verified']>,
    required: true,
  },
});

const isTooltipVisible = ref(false);
const toggleTooltip = () => {
  isTooltipVisible.value = !isTooltipVisible.value;
};
</script>
