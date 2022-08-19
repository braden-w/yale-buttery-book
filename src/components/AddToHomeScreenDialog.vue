<template>
  <q-dialog v-model="isOpen">
    <q-card>
      <q-card-section>
        <div class="text-h6">Add to Home Screen</div>

        <div class="text-caption">
          For now, as we publish to the app store!
        </div>
      </q-card-section>
      <q-tabs v-model="tab" class="text-teal" inline-label>
        <q-tab name="ios" icon="apple" label="iOS" />
        <q-tab name="android" icon="android" label="Android" />
      </q-tabs>
      <q-separator />

      <q-tab-panels v-model="tab">
        <q-tab-panel name="ios">
          <p>
            We are now published to the App Store!
          </p>
          <div class="row">
            <q-space></q-space>
            <q-btn
              type="a"
              flat
              icon="apple"
              href="https://apps.apple.com/us/app/yale-buttery-book/id1595499598"
              target="_blank"
            >
              Install
            </q-btn>
            <q-space> </q-space>
          </div>

          <!-- <p>
            In Safari, tap the
            <q-icon name="ios_share" />
            button, then 'Add to Home Screen'.
          </p>

          <q-card>
            <q-img :src="require('../assets/iOS_install_instructions.png')">
            </q-img>
          </q-card> -->
        </q-tab-panel>
        <q-tab-panel name="android">
          <p>
            In Chrome, tap the <q-icon name="more_vert" /> button, then 'Install
            App'.
          </p>
          <q-card>
            <q-img :src="require('../assets/android_install_instructions.png')">
            </q-img>
          </q-card>
          <p>
            Alternatively, just tap the 'Add to Home Screen' banner below.
          </p>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import useInstallDialog from 'src/components/useInstallDialog';
import { ref } from 'vue';
const tab = ref('ios');
const { isOpen } = useInstallDialog();
</script>
