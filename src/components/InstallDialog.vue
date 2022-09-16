<template>
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card style="width: 400px">
      <q-card-section>
        <div class="text-h6">Install the App</div>

        <div class="text-caption">We are now published to the App Store!</div>
      </q-card-section>
      <q-tabs
        v-model="tab"
        class="text-grey"
        active-color="white"
        indicator-color="primary"
        inline-label
      >
        <q-tab name="ios" icon="apple" label="iOS" />
        <q-tab name="android" icon="android" label="Android" />
      </q-tabs>
      <q-separator />

      <q-tab-panels v-model="tab">
        <q-tab-panel name="ios">
          <p>We are now published to the App Store!</p>
          <div class="row">
            <q-space></q-space>
            <a
              href="https://apps.apple.com/us/app/yale-buttery-book/id1595499598"
              target="_blank"
            >
              <img src="~assets/DownloadToAppStore.svg" />
            </a>
            <q-space> </q-space>
          </div>

          <!-- <p>
            In Safari, tap the
            <q-icon name="ios_share" />
            button, then 'Add to Home Screen'.
          </p>

          <q-card>
            <q-img src="~assets/iOS_install_instructions.png">
            </q-img>
          </q-card> -->
        </q-tab-panel>
        <q-tab-panel name="android">
          <p>
            In Chrome, tap the <q-icon name="more_vert" /> button, then 'Install
            App'.
          </p>
          <q-card>
            <q-img src="~assets/android_install_instructions.png"> </q-img>
          </q-card>
          <p>Alternatively, just tap the 'Add to Home Screen' banner below.</p>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useDialogPluginComponent } from 'quasar';
const tab = ref('ios');
defineEmits([...useDialogPluginComponent.emits]);
</script>
