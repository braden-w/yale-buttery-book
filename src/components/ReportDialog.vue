<template>
  <q-dialog ref="dialogRef" @hide="onDialogHide" seamless position="bottom">
    <q-card style="width: 100%">
      <q-card-section>
        <div class="row">
          <div class="text-h6">Report an Issue</div>
          <q-space></q-space>
          <q-btn round flat icon="close" @click="closeReportDialog()"></q-btn>
        </div>
        <div class="text-caption">
          We'll do our best to respond within the night! This form emails us at
          <a style="color: inherit" href="mailto:yalebutterybook@gmail.com">
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
              (val) =>
                (val !== null && val !== '' && isValidEmailOrPhone(val)) ||
                'Please enter a valid email or phone number so we can get back to you!!',
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
import axios from 'axios';
import { createClient } from '@supabase/supabase-js';
import { useQuasar } from 'quasar';
import { ref } from 'vue';
import { residentialColleges } from 'src/shared/butteries';
import { useDialogPluginComponent } from 'quasar';

const props = defineProps({
  placeHolderCollege: {
    type: String,
    required: false,
  },
  placeHolderMessage: {
    type: String,
    required: false,
  },
});

defineEmits([...useDialogPluginComponent.emits]);

const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } =
  useDialogPluginComponent();

const reportCollege = ref(props.placeHolderCollege);
const reportMessage = ref(props.placeHolderMessage);
const reportContact = ref('');

// const openReportDialog = () => (dialogRef.value = true);
const closeReportDialog = onDialogCancel;
// const setReportCollege = (college: string) => (reportCollege.value = college);
// const setReportMessage = (message: string) => (reportMessage.value = message);

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const $q = useQuasar();
const isEmail = (email: string) =>
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
const isValidEmailOrPhone = (text: string): boolean =>
  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(text) ||
  /^\d{10}$/.test(text);

async function submitReportDialog() {
  onDialogOK();
  const report_date = new Date().toDateString();
  const report_time = new Date().toTimeString();

  const feedbackUploadToSupabase = async () => {
    const { data, error } = await supabase.from('reports').insert({
      name: reportCollege.value,
      report_message: reportMessage.value,
      report_contact: reportContact.value,
      report_date,
      report_time,
    });
    if (data) console.log('database write success', data);
    else console.error('database write failed', error);
    return { data, error };
  };
  const feedbackSendEmail = async () => {
    const email = await axios({
      method: 'post',
      url: 'https://api.mailgun.net/v3/yalebutterybook.com/messages',
      params: {
        from: 'Yale Buttery Book <yalebutterybook@gmail.com>',
        to: isEmail(reportContact.value)
          ? reportContact.value
          : 'yalebutterybook@gmail.com',
        cc: 'braden.wong@yale.edu',
        subject: `Yale Buttery Book Report: ${reportMessage.value}`,
        text: `To whom it may concern,

This email confirms receipt of your report on ${report_date} at ${report_time} with the following details:

        College: ${reportCollege.value}
        Message: ${reportMessage.value}
        Contact: ${reportContact.value}

We'll respond to you shortly.

Warmly,
Yale Buttery Book Team`,
      },
      auth: { username: 'api', password: import.meta.env.VITE_MAILGUN_API_KEY },
    });
    if (email.status === 200) console.log('email sent', email);
    else console.error('email failed', email);
    return email.status === 200;
  };

  const loadingNotification = $q.notify({
    message: 'Sending report...',
    classes: 'yale-blue-1',
    spinner: true,
  });

  const [{ data, error }, emailSent] = await Promise.all([
    feedbackUploadToSupabase(),
    feedbackSendEmail(),
  ]);
  if (error && !emailSent) {
    $q.notify({
      message: 'Error sending report',
      caption: `Details: ${error?.message}` ?? 'Error sending email',
      color: 'negative',
      icon: 'error',
    });
  }
  loadingNotification();
  closeReportDialog();
  $q.notify({
    message: 'Thank you, issue reported!',
    caption: reportMessage.value,
    classes: 'yale-blue-1',
    icon: 'campaign',
  });
}
</script>
