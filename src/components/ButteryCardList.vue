<template>
  <div>
    <q-list bordered class="rounded-borders">
      <ButteryCard
        v-for="(buttery, index) in props.butteries"
        :key="index"
        :buttery="buttery"
      />
      <div v-if="props.butteries.length === 0">
        <q-expansion-item>
          <template #header>
            <q-item>
              <q-item-section avatar>
                <q-avatar font-size="30px" icon="schedule" size="40px" />
              </q-item-section>
              <q-item-section>
                <q-item-label overline>{{
                  props.emptyMessage.overline
                }}</q-item-label>
                <q-item-label>{{ props.emptyMessage.header }}</q-item-label>
                <q-item-label caption>
                  {{ props.emptyMessage.text }}
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-space />
          </template>
        </q-expansion-item>
      </div>
    </q-list>
  </div>
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
