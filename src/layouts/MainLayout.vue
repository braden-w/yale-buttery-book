<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
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
          class="yale-accent-1"
          icon="download"
          label="Add to Home Screen"
          @click="installDialog.open"
        />
        <q-btn v-else round flat icon="download" @click="installDialog.open" /> -->
        <q-space />
        <InstallDialog />
        <q-dialog v-model="reportOpen" seamless position="bottom">
          <q-card style="width: 100%">
            <q-card-section>
              <div class="row">
                <div class="text-h6">Report an Issue</div>
                <q-space></q-space>
                <q-btn
                  round
                  flat
                  icon="close"
                  @click="closeReportDialog"
                ></q-btn>
              </div>
              <div class="text-caption">
                We'll do our best to respond within the night! This form emails
                us at
                <a
                  style="color: inherit"
                  href="mailto:yalebutterybook@gmail.com"
                >
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
                      (val !== null &&
                        val !== '' &&
                        isValidEmailOrPhone(val)) ||
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
                <q-btn
                  label="Submit"
                  color="accent"
                  padding="xs lg"
                  type="submit"
                >
                </q-btn>
              </q-card-actions>
            </q-form>
          </q-card>
        </q-dialog>
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
import { createClient } from '@supabase/supabase-js';
import axios from 'axios';
import { useQuasar } from 'quasar';
import InstallDialog from 'src/components/InstallDialog.vue';
import { ref } from 'vue';
import { residentialColleges } from 'src/shared/butteries';

const reportOpen = ref(false);
const reportCollege = ref('');
const reportMessage = ref('');
const reportContact = ref('');

const openReportDialog = () => (reportOpen.value = true);
const closeReportDialog = () => (reportOpen.value = false);
const setReportCollege = (college: string) => (reportCollege.value = college);
const setReportMessage = (message: string) => (reportMessage.value = message);

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
  };

  const loadingNotification = $q.notify({
    message: 'Sending report...',
    classes: 'yale-blue-1',
    spinner: true,
  });

  feedbackUploadToSupabase();
  feedbackSendEmail();
  loadingNotification();
  closeReportDialog();
  // if (error) {
  //   $q.notify({
  //     message: 'Error sending report',
  //     caption: error.message,
  //     color: 'negative',
  //     icon: 'error'
  //   });
  // } else {
  $q.notify({
    message: 'Thank you, issue reported!',
    caption: reportMessage.value,
    classes: 'yale-blue-1',
    icon: 'campaign',
  });
  // }
}

function reportGeneral() {
  openReportDialog();
  setReportCollege(residentialColleges[0]);
  setReportMessage('It would be great if...');
}
</script>
