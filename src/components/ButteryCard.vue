<template>
  <q-expansion-item
    group="butteries"
    :style="{ margin: isMobile() ? '0 -1rem 0.75rem' : '0 0.5rem 0.75rem 0' }"
  >
    <template #header>
      <q-item-section avatar :class="!isMobile() ? 'q-mr-md' : ''">
        <q-avatar
          :color="
            butteriesWithDarkMode.includes(props.buttery.id) ? 'white' : ''
          "
        >
          <img
            :src="`/buttery-shields/${props.buttery.id}.svg`"
            :alt="props.buttery.id"
          />
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label overline>
          {{ props.buttery.id }}
          <q-badge
            v-if="props.buttery.verified === 'OPEN'"
            rounded
            color="blue"
          >
            <q-icon name="check" size="0.75em" />
            <q-tooltip
              class="text-body2"
              :anchor="!isMobile() ? 'center right' : undefined"
              :self="!isMobile() ? 'center left' : undefined"
              @click.stop
            >
              Buttery Staff verifies that today is open
            </q-tooltip>
          </q-badge>
          <q-badge
            v-else-if="props.buttery.verified === 'CLOSED'"
            rounded
            color="red"
          >
            <q-icon name="close" size="0.75em" />
            <q-tooltip
              class="text-body2"
              :anchor="!isMobile() ? 'center right' : undefined"
              :self="!isMobile() ? 'center left' : undefined"
              @click.stop
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
              @click.stop
            >
              Buttery Staff has not yet verified today, going by default
              schedule
            </q-tooltip>
          </q-badge>
        </q-item-label>
        <q-item-label>
          {{ props.buttery.nickname }}
        </q-item-label>
        <q-item-label caption>
          <span>{{ props.buttery.textTime }}</span>
          <br />
          <span class="text-warning">
            {{ props.buttery.opensIn }}
          </span>
        </q-item-label>
      </q-item-section>
      <q-space />
      <q-btn
        v-if="!isMobile()"
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
          Buttery Book Recommends: {{ props.buttery.recommend }}
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
              :src="`${props.buttery.menu_photo_url}`"
              :alt="props.buttery.id"
              v-viewer="{
                inline: false,
                button: true,
                navbar: false,
                title: true,
                toolbar: true,
                tooltip: true,
                movable: true,
                zoomable: true,
                rotatable: true,
                scalable: true,
                transition: true,
                fullscreen: true,
                keyboard: true,
              }"
            >
            </q-img>
          </div>
        </q-tab-panel>

        <q-tab-panel name="menu">
          <MenusTable
            :filterCollege="props.buttery.id"
            :visibleColumns="['Name', 'Price', 'Category']"
          />
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
import { Buttery } from 'src/shared/butteries';
import MenusTable from 'src/components/MenusTable/MenusTable.vue';
import ButteryCardCalendar from 'src/components/ButteryCardCalendar.vue';
import { useQuasar } from 'quasar';
import ReportDialog from 'src/components/ReportDialog.vue';
import { isMobile } from 'src/shared/screen';

const props = defineProps({
  buttery: {
    type: Object as PropType<Buttery>,
    required: true,
  },
});

const tab = ref('photo');

const $q = useQuasar();
function reportClosed(buttery: Buttery) {
  $q.dialog({
    component: ReportDialog,
    componentProps: {
      placeHolderCollege: buttery.id,
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

const butteriesWithDarkMode = ['The Acorn', 'The Beanjamin'];
</script>
