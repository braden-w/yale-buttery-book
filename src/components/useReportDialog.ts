import 'dotenv/config';
import { useQuasar } from 'quasar';
import { ref } from 'vue';
import { createClient } from '@supabase/supabase-js';
import axios from 'axios';

const reportOpen = ref(false);
const reportCollege = ref('');
const reportMessage = ref('');
const reportContact = ref('');
export default function useReport() {
  function openReportDialog() {
    reportOpen.value = true;
  }

  function closeReportDialog() {
    reportOpen.value = false;
  }

  function setReportCollege(college: string) {
    reportCollege.value = college;
  }

  function setReportMessage(message: string) {
    reportMessage.value = message;
  }

  const $q = useQuasar();
  const supabase = createClient(
    'https://bzxtraaudgvbftmyavuc.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjI1MTY3NiwiZXhwIjoxOTUxODI3Njc2fQ.9_aPpsI9Wu2TPf7HH0JF0iMUrAh94s86Zy7Jn7U1GJ4'
  );

  function isEmail(email: string) {
    const isEmailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return isEmailRegex.test(email);
  }

  async function submitReportDialog() {
    const report_date = new Date().toDateString();
    const report_time = new Date().toTimeString();
    const loadingNotification = $q.notify({
      message: 'Sending report...',
      classes: 'yale-blue-1',
      spinner: true,
    });
    // const { data } =
    await supabase.from('Reports').insert({
      name: reportCollege.value,
      report_message: reportMessage.value,
      report_contact: reportContact.value,
      report_date,
      report_time,
    });
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
      auth: {
        username: 'api',
        password: process.env.MAILGUN_PASSWORD as string,
      },
    });
    if (email.status === 200) {
      console.log('email sent', email);
    } else {
      console.log('email failed', email);
    }

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

  return {
    reportOpen,
    reportCollege,
    reportMessage,
    reportContact,
    openReportDialog,
    closeReportDialog,
    setReportCollege,
    setReportMessage,
    submitReportDialog,
  };
}
