<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="yale-blue-1">
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
          class="yale-accent-1"
          icon="download"
          label="Add to Home Screen"
          @click="installDialog.open"
        />
        <q-btn v-else round flat icon="download" @click="installDialog.open" /> -->
        <q-space />
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

<style lang="scss">
.yale-blue-1 {
  background-color: #00356b;
}
.yale-blue-2 {
  background-color: #286dc0;
}
.yale-blue-3 {
  background-color: #63aaff;
}
.yale-gray-1 {
  background-color: #222222;
}
.yale-gray-2 {
  background-color: #4a4a4a;
}
.yale-gray-3 {
  background-color: #978d85;
}
.yale-gray-4 {
  background-color: #dddddd;
}
.yale-gray-5 {
  background-color: #f9f9f9;
}
.yale-accent-1 {
  background-color: #5f712d;
}
.yale-accent-2 {
  background-color: #bd5319;
}
</style>

<script setup lang="ts">
// import EssentialLink from 'components/EssentialLink.vue';
// import { ref } from 'vue';
import { residentialColleges } from 'src/shared/butteries';

// const linksList = [
//   {
//     title: 'Home',
//     caption: 'All Colleges',
//     icon: 'school',
//     path: '/'
//   },
//   {
//     title: 'Browse',
//     caption: 'All Menus',
//     icon: 'search',
//     path: '/menus'
//   },
//   {
//     title: 'About',
//     caption: 'About DCommune',
//     icon: 'info',
//     path: '/about'
//   }
// ];

// const leftDrawerOpen = ref(false);

function reportGeneral() {
  return null;
}

// const essentialLinks = linksList;
// function toggleLeftDrawer() {
//   leftDrawerOpen.value = !leftDrawerOpen.value;
// }
</script>
