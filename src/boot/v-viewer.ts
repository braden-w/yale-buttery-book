import { boot } from 'quasar/wrappers';
import 'viewerjs/dist/viewer.css';
import VueViewer from 'v-viewer';

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app }) => {
  app.use(VueViewer);
});
