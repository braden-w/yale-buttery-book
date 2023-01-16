<template>
  <q-dialog ref="dialogRef">
    <q-card style="width: 400px" flat>
      <q-card-section>
        <div class="text-h6">Install the App</div>
        <div class="text-caption">We are now published to the App Store!</div>
      </q-card-section>
      <q-separator />
      <div class="q-pa-md q-gutter-sm">
        <div class="row">
          <q-space></q-space>

          <a
            href="https://apps.apple.com/us/app/yale-buttery-book/id1595499598"
            target="_blank"
          >
            <img src="~assets/DownloadToAppStore.svg" />
          </a>

          <q-space> </q-space>
          <q-btn color="accent" icon="android" to="android" label="Android">
          </q-btn>
          <q-space></q-space>
        </div>
      </div>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { useDialogPluginComponent } from 'quasar';
defineEmits([...useDialogPluginComponent.emits]);
</script>
