<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <!-- <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        /> -->

        <q-btn
          class="text-h6 text-weight-light"
          no-caps
          flat
          to="/"
          icon="breakfast_dining"
          label="Yale Buttery Book"
        />
        <q-avatar>
          <!-- TODO: <img src="../../public/Icon.png" alt="" /> -->
        </q-avatar>
        <!-- <q-btn
          v-if="$q.screen.gt.md"
          color="accent"
          icon="download"
          label="Add to Home Screen"
          @click="installDialog.open"
        />
        <q-btn v-else round flat icon="download" @click="installDialog.open" /> -->
        <q-space />
        <InstallDialog />
        <ReportDialog />
        <q-btn
          round
          flat
          icon="code"
          href="https://github.com/braden-w/yale-buttery-book"
          target="_blank"
        >
          <svg width="98" height="96" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
              fill="#fff"
            />
          </svg>
        </q-btn>
        <q-btn round flat icon="info" to="/about" />
        <!-- <q-btn
          v-if="$q.screen.lt.sm"
          icon="search"
          color="accent"
          to="/menus"
        />
        <q-btn
          v-else-if="$q.screen.lt.md"
          icon="search"
          color="accent"
          label="Menus"
          to="/menus"
        />
        <q-btn
          v-else
          icon="search"
          color="accent"
          label="Browse Menus"
          to="/menus"
        /> -->

        <q-toggle
          color="blue-grey-5"
          v-model="$q.dark.mode"
          @click="$q.dark.toggle()"
        >
        </q-toggle>
      </q-toolbar>
    </q-header>

    <!-- <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>
          Navigation
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer> -->

    <q-page-container>
      <router-view />
      <div class="text-center">&copy; Buttery Book 2022</div>
      <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-btn fab icon="campaign" @click="reportGeneral()" color="accent"
          >Suggest</q-btn
        >
      </q-page-sticky>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import InstallDialog from 'src/components/InstallDialog.vue';
import ReportDialog from 'src/components/ReportDialog.vue';
import { residentialColleges } from 'src/shared/butteries';

const $q = useQuasar();
function reportGeneral() {
  $q.dialog({
    component: ReportDialog,
    componentProps: {
      placeHolderCollege: residentialColleges[0],
      placeHolderMessage: 'It would be great if...',
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
</script>
