<template>
  <div>
    <!-- <q-expansion-item :icon="`img:assets/${props.buttery?.picture_url}`"> -->
    <q-expansion-item group="butteries">
      <template #header>
        <q-item>
          <q-item-section avatar>
            <q-avatar>
              <img
                :src="
                  butteriesWithDarkMode.includes(props.buttery.pictureUrl) &&
                  $q.dark.isActive
                    ? `/buttery_shields/${props.buttery.pictureUrl}Dark.png`
                    : `/buttery_shields/${props.buttery?.pictureUrl}.png`
                "
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
        </q-item>
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
      <q-item-section side>
        <div class="q-pa-md q-gutter-sm" style="width: 100%">
          <q-banner class="bg-primary">
            <template #avatar>
              <q-icon name="breakfast_dining" color="white" />
            </template>
            <div class="text-subtitle2 text-center">
              Buttery Book Recommends: {{ props.buttery?.recommend }}
            </div>
          </q-banner>
        </div>
      </q-item-section>

      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="white"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="photo" label="Photo" />
          <q-tab name="menu" label="Menu" />
          <q-tab name="calendar" label="Calendar" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="photo">
            <q-img
              style="max-height: 80%"
              :src="`/menu_photos/${props.buttery?.pictureUrl}.jpg`"
              :alt="props.buttery?.pictureUrl"
              draggable
            >
            </q-img>
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
      </q-card>
    </q-expansion-item>
  </div>
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

const butteriesWithDarkMode = ['Acorn', 'Beanjamin'];
</script>
