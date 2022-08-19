<template>
  <q-page>
    <div class="row">
      <q-space></q-space>
      <q-card style="width: 400px">
        <q-card-section>
          <div class="text-h6">Install the App On Android</div>
        </q-card-section>
        <q-separator />
        <q-card-section>
          <p>
            In Chrome, tap the <q-icon name="more_vert" /> button, then 'Install
            App'.
          </p>
          <q-card>
            <q-img :src="require('../assets/android_install_instructions.png')">
            </q-img>
          </q-card>
        </q-card-section>
        <q-card-section>
          <p>
            Alternatively, just tap the 'Add to Home Screen' banner below.
          </p>
        </q-card-section>
      </q-card>
      <q-space></q-space>
    </div>
  </q-page>
</template>

<script setup lang="ts"></script>
