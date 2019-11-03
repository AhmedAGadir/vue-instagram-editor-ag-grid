<template>
  <div class="app">
    <md-field md-inline>
      <label>Search</label>
      <md-input v-model="input"></md-input>
    </md-field>
    <ag-grid-vue
      style="height: 900px;"
      class="ag-theme-balham"
      :columnDefs="columnDefs"
      :rowData="rowData"
      rowHeight="150"
      headerHeight="0"
      suppressCellSelection
      @grid-ready="onGridReady"
    ></ag-grid-vue>
  </div>
</template>

<script>
import { AgGridVue } from "ag-grid-vue";
import rowData from "./rowData.js";
import AvatarRenderer from "./components/AvatarRenderer.vue";
import AccountDetailsRenderer from "./components/AccountDetailsRenderer.vue";
import RemoveCellRenderer from "./components/RemoveCellRenderer.vue";

export default {
  name: "App",
  data() {
    return {
      columnDefs: null,
      rowData: null,
      gridApi: null,
      columnApi: null,
      input: null
    };
  },
  components: {
    AgGridVue,
    AvatarRenderer,
    AccountDetailsRenderer,
    RemoveCellRenderer
  },
  watch: {
    input: function(value) {
      this.gridApi.setQuickFilter(value);
    }
  },
  methods: {
    onGridReady(params) {
      this.gridApi = params.api;
      this.columnApi = params.api;
    }
  },
  beforeMount() {
    this.columnDefs = [
      {
        field: "avatarUrl",
        cellRendererFramework: "AvatarRenderer",
        width: 150
      },
      {
        field: "accountDetails",
        cellRendererFramework: "AccountDetailsRenderer",
        width: 390
      },
      {
        headerName: "Actions",
        cellRendererFramework: "RemoveCellRenderer",
        width: 60
      }
    ];

    this.rowData = rowData;
  }
};
</script>

<style lang="scss">
$header-height: 0px;
$row-border-width: 0px;
// $cell-horizontal-padding: 0px;
$hover-color: rgb(240, 240, 243);

@import "../node_modules/ag-grid-community/src/styles/ag-grid.scss";
@import "../node_modules/ag-grid-community/src/styles/ag-theme-balham/sass/ag-theme-balham.scss";

.ag-theme-balham .ag-cell {
  display: flex;
  align-items: center;
}

.app {
  width: 100%;
}
</style>
