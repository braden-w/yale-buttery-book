<template>
  <div
    :id="props.buttery?.calendarID"
    :style="`{height:${calendarHeight}}`"
  ></div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { Buttery, TimeRemaining, TimeUntil } from 'src/shared/types-butteries';

const props = defineProps({
  buttery: {
    type: Object as PropType<Buttery & Partial<TimeRemaining & TimeUntil>>,
    required: true,
  },
});

// --- Begin Calendar Logic ---
import '@fullcalendar/core/vdom';
import { Calendar } from '@fullcalendar/core';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import timeGridPlugin from '@fullcalendar/timegrid';

const calendarHeight = 300;
</script>
