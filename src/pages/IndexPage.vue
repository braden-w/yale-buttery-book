<template>
  <q-page>
    <q-pull-to-refresh
      @refresh="pullRefresh"
      icon="breakfast_dining"
      color="white"
      bg-color="primary"
      class="q-pa-md"
    >
      <q-input
        class="q-mb-md"
        filled
        dense
        debounce="300"
        @click="$router.push('/menus')"
        placeholder="I'm Feeling Like Eating..."
        style="width: 100%"
        model-value=""
      >
        <template #append>
          <q-icon name="search" />
        </template>
      </q-input>

      <q-banner
        inline-actions
        dense
        rounded
        class="q-mb-md bg-accent text-white"
        v-if="banner && !$q.platform.is.capacitor"
        style="width: 100%"
      >
        <template #avatar>
          <q-icon name="shopping_bag" />
        </template>
        <div class="text-subtitle2 text-center">
          Yale Buttery Book is now available on the App Store!
        </div>
        <template #action>
          <q-btn flat label="Install" @click="openInstallDialog" />
          <q-btn flat icon="close" @click="banner = false" />
        </template>
      </q-banner>

      <q-card flat class="q-mb-md">
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

      <q-card flat>
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
import InstallDialog from 'src/components/InstallDialog.vue';
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

const openInstallDialog = () => {
  $q.dialog({
    component: InstallDialog,
  });
};

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
