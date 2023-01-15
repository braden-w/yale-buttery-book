<template>
  <q-input
    class="q-mb-md"
    filled
    dense
    debounce="300"
    v-model="filter"
    placeholder="Search Menus..."
    ref="searchInput"
  >
    <template #append>
      <q-icon name="search" />
    </template>
    <template #after>
      <q-btn flat icon="refresh" @click="getTableData"></q-btn>
      <q-btn
        flat
        :icon="showSettings ? 'expand_less' : 'expand_more'"
        @click="toggleSettings"
      >
      </q-btn>
    </template>
  </q-input>
  <q-card v-if="showSettings" class="q-ma-xs" style="width: 100%">
    <div class="row justify-between">
      <q-toggle
        v-model="grid"
        :icon="grid ? 'view_day' : 'table_chart'"
        :label="grid ? 'Card' : 'Grid'"
      />
      <q-btn-toggle
        v-model="separator"
        toggle-color="accent"
        rounded
        flat
        :options="separatorOptions"
      />
      <q-option-group
        v-model="visibleColumns"
        :options="toggleColumnNames"
        color="accent"
        inline
        type="checkbox"
      />
    </div>
  </q-card>

  <q-table
    :grid="grid"
    grid-header
    :rows="tableData"
    :columns="columns"
    :filter="filter"
    :separator="separator"
    row-key="Name"
    :loading="loading"
    rows-per-page-label="Snacks per page"
    :pagination="pagination"
    :visible-columns="visibleColumns"
  >
    <template #header="props">
      <q-tr :props="props">
        <!-- <q-th auto-width></q-th> -->
        <q-th v-for="col in props.cols" :key="col.name" :props="props">
          {{ col.label }}
        </q-th>
        <!-- <q-th auto-width /> -->
      </q-tr>
    </template>
    <template #body="props">
      <q-tr :props="props">
        <!-- <q-td auto-width>
          <q-btn
            v-if="props['In Stock'] === 'FALSE'"
            size="xs"
            color="negative"
            flat
            round
            dense
            icon="remove_shopping_cart"
          >
            <q-tooltip
              anchor="center right"
              self="center left"
              :offset="[10, 10]"
              >Out of Stock</q-tooltip
            >
          </q-btn>
          <q-btn
            v-else
            size="xs"
            color="accent"
            flat
            round
            dense
            icon="shopping_cart"
          >
            <q-tooltip
              anchor="center right"
              self="center left"
              :offset="[10, 10]"
              >In Stock</q-tooltip
            >
          </q-btn>
        </q-td> -->
        <q-td key="Name" :props="props">
          <div class="text-subtitle2">{{ props.row.Name }}</div>
        </q-td>
        <q-td key="Price" :props="props">
          <q-badge :color="priceGradient(props.row.Price)">
            <div class="text-subtitle2 text-bold">{{ props.row.Price }}</div>
          </q-badge>
        </q-td>
        <q-td key="Residential College" :props="props">
          <div class="text-subtitle2">
            {{ props.row['Residential College'] }}
          </div>
        </q-td>
        <q-td key="Category" :props="props">
          <div class="text-subtitle2">
            {{ props.row['Category'] }}
          </div>
        </q-td>
        <!-- <q-td auto-width>
          <q-btn
            size="xs"
            color="accent"
            round
            dense
            @click="props.expand = !props.expand"
            :icon="props.expand ? 'remove' : 'description'"
          />
        </q-td> -->
      </q-tr>
      <q-tr v-show="props.expand" :props="props">
        <q-td colspan="100%">
          <q-card>
            <!-- {{
                props.row['In Stock'] === 'FALSE' ? 'Out of Stock' : 'In Stock'
              }} -->
            <p v-if="props.row.Description">
              Description: {{ props.row.Description }}
            </p>
            <p v-if="props.row.Ingredients">
              Ingredients: {{ props.row.Ingredients }}
            </p>
          </q-card>
        </q-td>
      </q-tr>
    </template>
  </q-table>
</template>

<script setup lang="ts">
import { ref, Ref, onMounted } from 'vue';
import axios from 'axios';
export interface MenuItem {
  Name: string;
  Price?: boolean;
  'Residential College'?: string;
  Category?: string;
}

const props = defineProps({
  search: {
    type: String,
    default: '',
  },
});

const pagination = ref({
  sortBy: 'desc',
  descending: false,
  page: 1,
  rowsPerPage: 300,
});
const tableData: Ref<MenuItem[]> = ref([]);
const columns = [
  {
    name: 'Name',
    label: 'Name',
    field: 'Name',
    align: 'left',
    required: true,
    sortable: true,
  },
  {
    name: 'Price',
    label: 'Price',
    field: 'Price',
    sortable: true,
  },
  {
    name: 'Residential College',
    label: 'Residential College',
    field: 'Residential College',
    sortable: true,
  },
  {
    name: 'Category',
    // required: true,
    label: 'Category',
    field: 'Category',
    // align: 'left',
    sortable: true,
  },
];

const toggleColumnNames = columns.map((column) => ({
  label: column.field,
  value: column.field,
}));
const visibleColumns = ref(columns.map((column) => column.field));

const loading = ref(true);
async function getTableData() {
  loading.value = true;
  const res = await axios({
    url: 'https://opensheet.elk.sh/1NZyxbnUMkChmZC3umrW8vJdyus6PdPyRq8GbDLZiglU/Dashboard',
    method: 'get',
  });
  tableData.value = res.data as MenuItem[];
  loading.value = false;
}

void getTableData();

// setInterval(() => {
//   void getTableData();

const showSettings = ref(false); // }, 10000);
function toggleSettings() {
  showSettings.value = !showSettings.value;
}

const filter = ref(props.search);
const grid = ref(false);
const separator = ref('vertical') as Ref<
  'vertical' | 'horizontal' | 'cell' | 'none'
>;
const separatorOptions = [
  { label: 'Horizontal', value: 'horizontal', icon: 'view_headline' },
  { label: 'Vertical', value: 'vertical', icon: 'calendar_view_week' },
  { label: 'Grid', value: 'cell', icon: 'view_comfy' },
  { label: 'None', value: 'none', icon: 'grid_off' },
];

function priceGradient(price: string) {
  const priceNum = parseFloat(price);
  if (priceNum < 2) {
    return 'green';
  } else if (priceNum < 4) {
    return 'orange';
  } else {
    return 'red';
  }
}

const searchInput = ref() as Ref<HTMLInputElement>;
onMounted(() => {
  searchInput.value.focus();
});
</script>
