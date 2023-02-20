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
          <ButteryCardVerifiedTooltips :verified="props.buttery.verified" />
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
      <q-btn-dropdown
        flat
        :label="isMobile() ? undefined : 'Edit Status'"
        dropdown-icon="edit_note"
        no-icon-animation
      >
        <template #label>
          <q-tooltip anchor="top middle" self="bottom middle">
            Verify Open, Verify Closed, or Report Issue
          </q-tooltip>
        </template>
        <q-list>
          <q-item clickable v-close-popup @click="reportOpen(props.buttery)">
            <q-item-section avatar>
              <q-avatar text-color="blue" icon="verified" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Verified Open for Today</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-close-popup @click="reportClosed(props.buttery)">
            <q-item-section avatar>
              <q-avatar text-color="red" icon="cancel" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Verified Closed for Today</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-close-popup @click="reportIssue(props.buttery)">
            <q-item-section avatar>
              <q-avatar text-color="amber" icon="feedback" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Report Other Issue</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
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
            <ButteryCardImage :buttery="props.buttery" />
          </div>
        </q-tab-panel>

        <q-tab-panel name="menu">
          <MenusTable
            :filterId="props.buttery.id"
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
import ButteryCardCalendar from 'src/components/ButteryCard/ButteryCardCalendar.vue';
import ButteryCardVerifiedTooltips from 'src/components/ButteryCard/ButteryCardVerifiedTooltips.vue';
import ButteryCardImage from 'src/components/ButteryCard/ButteryCardImage.vue';
import ReportDialog from 'src/components/ReportDialog.vue';
import { isMobile } from 'src/shared/screen';
import { useQuasar } from 'quasar';
import { useMutation, useQueryClient } from '@tanstack/vue-query';

const props = defineProps({
  buttery: {
    type: Object as PropType<Buttery>,
    required: true,
  },
});

const tab = ref('photo');

const $q = useQuasar();
const queryClient = useQueryClient();

const markOpen = async (buttery: Buttery) =>
  await fetch(`/api/verify?id=${buttery.id}&value=OPEN`);
const markClosed = async (buttery: Buttery) =>
  await fetch(`/api/verify?id=${buttery.id}&value=CLOSED`);

const { mutate: reportOpen } = useMutation({
  mutationFn: markOpen,
  onMutate: async (buttery: Buttery) => {
    const loadingNotification = $q.notify({
      message: `Marking ${buttery.id} as open...`,
      classes: 'yale-blue-1',
      spinner: true,
    });
    await queryClient.cancelQueries({ queryKey: ['butteries'] });
    const previousButteries = queryClient.getQueryData(['butteries']);
    queryClient.setQueryData(
      ['butteries'],
      (old: Buttery[] | undefined): Buttery[] | undefined => {
        return old?.map((b): Buttery => {
          if (b.id === buttery.id) {
            return { ...b, verified: 'OPEN' };
          }
          return b;
        });
      }
    );
    return { previousButteries, loadingNotification };
  },
  onSuccess: (_response, buttery) => {
    $q.notify({
      message: `Thank you, ${buttery.nickname} is now marked as open! `,
      classes: 'yale-blue-1',
      icon: 'campaign',
    });
  },
  onError: (_err, _newButteries, context) => {
    context?.loadingNotification();
    queryClient.setQueryData(['butteries'], context?.previousButteries);
  },
  onSettled: (_, _error, _buttery, context) => {
    context?.loadingNotification();
  },
});

const { mutate: reportClosed } = useMutation({
  mutationFn: markClosed,
  onMutate: async (buttery: Buttery) => {
    const loadingNotification = $q.notify({
      message: `Marking ${buttery.id} as closed...`,
      classes: 'yale-blue-1',
      spinner: true,
    });
    await queryClient.cancelQueries({ queryKey: ['butteries'] });
    const previousButteries = queryClient.getQueryData(['butteries']);
    queryClient.setQueryData(
      ['butteries'],
      (old: Buttery[] | undefined): Buttery[] | undefined => {
        return old?.map((b): Buttery => {
          if (b.id === buttery.id) {
            return { ...b, verified: 'CLOSED' };
          }
          return b;
        });
      }
    );
    return { previousButteries, loadingNotification };
  },
  onSuccess: (_response, buttery) => {
    $q.notify({
      message: `Thank you, ${buttery.nickname} is now marked as closed! `,
      classes: 'yale-blue-1',
      icon: 'campaign',
    });
  },
  onError: (_err, _newButteries, context) => {
    context?.loadingNotification();
    queryClient.setQueryData(['butteries'], context?.previousButteries);
  },
  onSettled: (_, _error, _buttery, context) => {
    context?.loadingNotification();
  },
});

function reportIssue(buttery: Buttery) {
  $q.dialog({
    component: ReportDialog,
    componentProps: {
      placeHolderCollege: buttery.id,
      placeHolderMessage: 'General issue with the buttery: ',
    },
  });
}

const butteriesWithDarkMode = ['The Acorn', 'The Beanjamin'];
</script>
