<template>
  <q-expansion-item group="butteries" class="q-ma-sm">
    <template #header>
      <q-item-section avatar class="q-mr-md">
        <q-avatar
          :color="
            butteriesWithDarkMode.includes(props.buttery.nickname)
              ? 'white'
              : ''
          "
        >
          <img
            :src="`/buttery_shields_svgs/${props.buttery?.pictureUrl}.svg`"
            :alt="props.buttery?.pictureUrl"
          />
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label overline>{{ props.buttery?.name }}</q-item-label>
        <q-item-label>{{ props.buttery?.nickname }}</q-item-label>
        <q-item-label caption>
          {{ props.buttery?.textTime }}
          <br />
          <span class="text-warning">
            {{ props.buttery?.opensIn }}
          </span>
        </q-item-label>
      </q-item-section>

      <q-space />
      <q-btn
        v-if="$q.screen.width >= 455"
        flat
        label="Report Issue"
        @click.stop="reportClosed(props.buttery)"
      >
      </q-btn>
      <q-btn
        v-else
        flat
        icon="feedback"
        @click.stop="reportClosed(props.buttery)"
      >
      </q-btn>
    </template>

    <!-- Make a flex column div with gap 2 -->
    <div
      class="q-py-md"
      style="display: flex; flex-direction: column; gap: 1rem"
    >
      <q-banner class="bg-primary text-white" style="width: 100%" rounded>
        <template #avatar>
          <q-icon name="breakfast_dining" color="white" />
        </template>
        <div class="text-subtitle2 text-center">
          Buttery Book Recommends: {{ props.buttery?.recommend }}
        </div>
      </q-banner>

      <q-tabs
        v-model="tab"
        indicator-color="primary"
        align="justify"
        switch-indicator
      >
        <q-tab name="photo" label="Photo" />
        <q-tab name="menu" label="Menu" />
        <q-tab name="calendar" label="Calendar" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="photo">
          <!-- Center the image -->
          <div class="row justify-center">
            <q-img
              style="max-width: 640px; max-height: 80vh"
              fit="contain"
              :src="`/menu_photos/${props.buttery?.pictureUrl}.jpg`"
              :alt="props.buttery?.pictureUrl"
              draggable
              v-viewer
            >
            </q-img>
          </div>
        </q-tab-panel>

        <q-tab-panel name="menu">
          <MenusTable :search="props.buttery.name" />
        </q-tab-panel>

        <q-tab-panel name="calendar">
          <q-card>
            <q-card-section>
              <div class="text-h5 text-center">
                {{ props.buttery.nickname }} Schedule
              </div>
            </q-card-section>
            <ButteryCardCalendar :buttery="buttery" />
          </q-card>
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </q-expansion-item>
</template>

<script setup lang="ts">
import { ref, PropType } from 'vue';
import { Buttery, TimeRemaining, TimeUntil } from 'src/shared/types-butteries';
import MenusTable from 'src/components/MenusTable.vue';
import ButteryCardCalendar from 'src/components/ButteryCardCalendar.vue';
import { useQuasar } from 'quasar';
import ReportDialog from 'src/components/ReportDialog.vue';

const props = defineProps({
  buttery: {
    type: Object as PropType<Buttery & Partial<TimeRemaining & TimeUntil>>,
    required: true,
  },
});

const tab = ref('photo');

const $q = useQuasar();
function reportClosed(buttery: Buttery) {
  $q.dialog({
    component: ReportDialog,
    componentProps: {
      placeHolderCollege: buttery.name,
      placeHolderMessage: 'Closed for today.',
    },
  })
    .onOk(() => {
      console.log('OK');
    })
    .onCancel(() => {
      console.log('Cancel');
    })
    .onDismiss(() => {
      console.log('Called on OK or Cancel');
    });
}

const butteriesWithDarkMode = ['The Acorn', 'Beanjamin'];
</script>
