<template>
  <div class="app">
    <ag-grid-vue
      style="height: 900px;"
      class="ag-theme-balham"
      :columnDefs="columnDefs"
      :rowData="rowData"
      rowHeight="150"
      suppressCellSelection
      @grid-ready="onGridReady"
      headerHeight="0"
      deltaRowDataMode
      :getRowNodeId="getRowNodeId"
    ></ag-grid-vue>
  </div>
</template>

<script>
import { AgGridVue } from "ag-grid-vue";
import rowData from "./rowData.js";
import AvatarRenderer from "./components/AvatarRenderer.vue";
import AccountDetailsRenderer from "./components/AccountDetailsRenderer.vue";
import ActionsRenderer from "./components/ActionsRenderer.vue";

export default {
  name: "App",
  data() {
    return {
      columnDefs: null,
      gridApi: null,
      columnApi: null
    };
  },
  computed: {
    rowData: {
      get() {
        return this.$store.getters.rowData;
      },
      set(data) {
        this.$store.commit("setRowData", data);
      }
    }
  },
  components: {
    AgGridVue,
    AvatarRenderer,
    AccountDetailsRenderer,
    ActionsRenderer
  },
  methods: {
    onGridReady(params) {
      this.gridApi = params.api;
      this.columnApi = params.api;
    },
    getRowNodeId(data) {
      return data.id;
    }
  },
  beforeMount() {
    this.columnDefs = [
      {
        field: "avatarUrl",
        cellRendererFramework: "AvatarRenderer",
        width: 170
      },
      {
        field: "accountDetails",
        cellRendererFramework: "AccountDetailsRenderer",
        width: 300
      },
      {
        headerName: "Actions",
        cellRendererFramework: "ActionsRenderer",
        width: 130
      }
    ];

    this.rowData = rowData;
  }
};
</script>

<style lang="scss">
$header-height: 0px;
$row-border-width: 0px;
$hover-color: rgb(240, 240, 240);

@import "../node_modules/ag-grid-community/src/styles/ag-grid.scss";
@import "../node_modules/ag-grid-community/src/styles/ag-theme-balham/sass/ag-theme-balham.scss";

.ag-theme-balham .ag-cell {
  display: flex;
  align-items: center;
}

.app {
  width: 100%;
  background: white;
}
</style>
