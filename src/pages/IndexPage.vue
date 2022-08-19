<template>
  <q-page>
    <q-pull-to-refresh
      @refresh="pullRefresh"
      icon="breakfast_dining"
      color="white"
      bg-color="primary"
    >
      <q-card class="q-mb-md">
        <q-input
          standout
          dense
          debounce="300"
          @click="$router.push('/menus')"
          placeholder="I'm Feeling Like Eating..."
          style="width: 100%"
        >
          <template #append>
            <q-icon name="search" />
          </template>
        </q-input>
      </q-card>

      <q-card
        v-if="banner && !$q.platform.is.capacitor"
        class="q-mb-md"
        style="width: 100%"
      >
        <q-toolbar class="bg-accent text-white">
          Yale Buttery Book is now available on the App Store!
          <q-space />
          <q-btn flat color="white" label="Install" to="/install" />
          <q-btn flat icon="close" color="white" @click="banner = false" />
        </q-toolbar>
      </q-card>

      <q-card class="q-mb-md">
        <q-card-section class="text-h5">Currently Open</q-card-section>
        <q-card-section>
          <ButteryCardList
            :butteries="OpenButteryCardList"
            :emptyMessage="{
              overline: 'Oops!',
              header: 'No Butteries Open',
              text: 'Maybe try snackpass :(',
            }"
          />
        </q-card-section>
      </q-card>
      <q-card>
        <q-card-section class="text-h5">Currently Closed</q-card-section>
        <q-card-section>
          <ButteryCardList
            :butteries="ClosedButteryCardList"
            :emptyMessage="{
              overline: 'Yay!',
              header: 'No Butteries Closed',
              text: 'Today is a good day!',
            }"
          />
        </q-card-section>
      </q-card>
    </q-pull-to-refresh>
  </q-page>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import ButteryCardList from 'src/components/ButteryCardList.vue';
import { useQuasar } from 'quasar';
import { useButterySchedule } from './useButterySchedule';
import { onBeforeRouteLeave } from 'vue-router';

const {
  OpenButteryCardList,
  ClosedButteryCardList,
  refresh,
  startSync,
  stopSync,
} = useButterySchedule();

startSync();

async function pullRefresh(done: () => void): Promise<void> {
  await refresh();
  done();
}

const banner = ref(true);

// --- App Visibility Toggles Sync ---
const $q = useQuasar();
watch(
  () => $q.appVisible,
  (val) => {
    console.log(val ? 'App became visible' : 'App went in the background');
    if (val) {
      startSync();
    } else {
      stopSync();
    }
  }
);

// --- Routing ---
onBeforeRouteLeave(() => {
  stopSync();
});
</script>
