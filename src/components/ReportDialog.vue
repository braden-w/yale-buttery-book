<template>
  <q-dialog v-model="reportOpen" seamless position="bottom">
    <q-card style="width: 100%;">
      <q-card-section>
        <div class="row">
          <div class="text-h6">Report an Issue</div>
          <q-space></q-space>
          <q-btn round flat icon="close" @click="closeReportDialog"></q-btn>
        </div>
        <div class="text-caption">
          We'll do our best to respond within the night! This form emails us at
          <a style="color:inherit" href="mailto:yalebutterybook@gmail.com">
            yalebutterybook@gmail.com
          </a>
        </div>
      </q-card-section>
      <q-separator />
      <q-form @submit="submitReportDialog()">
        <q-card-section>
          <q-select
            v-model="reportCollege"
            :options="residentialColleges"
            label="Topic"
          >
          </q-select>
          <q-input v-model="reportMessage" label="Message" />
          <q-input
            v-model="reportContact"
            placeholder="Email, phone, etc. for us to reach out!"
            stack-label
            label="Contact Info"
            lazy-rules
            :rules="[
              val =>
                (val !== null && val !== '' && isValidEmailOrPhone(val)) ||
                'Please enter a valid email or phone number so we can get back to you!!'
            ]"
          />
        </q-card-section>
        <q-card-actions>
          <q-space></q-space>
          <q-btn
            label="Close"
            padding="xs lg"
            flat
            @click="closeReportDialog()"
          >
          </q-btn>
          <q-btn label="Submit" color="accent" padding="xs lg" type="submit">
          </q-btn>
        </q-card-actions>
      </q-form>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import useReportDialog from 'src/components/useReportDialog';
import { residentialColleges } from 'src/shared/butteries';

function isValidEmailOrPhone(text: string): boolean {
  return (
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(text) ||
    /^\d{10}$/.test(text)
  );
}

const {
  reportOpen,
  reportCollege,
  reportMessage,
  reportContact,
  closeReportDialog,
  submitReportDialog
} = useReportDialog();
</script>
