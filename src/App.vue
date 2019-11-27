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
      suppressClickEdit
      editType="fullRow"
    ></ag-grid-vue>
    <button @click="addUser">
      <i class="fas fa-user-plus"></i>
    </button>
  </div>
</template>

<script>
import { AgGridVue } from "ag-grid-vue";
import rowData, { getBlankUser } from "./rowData.js";
import AvatarRenderer from "./components/AvatarRenderer.vue";
import AccountDetailsRenderer from "./components/AccountDetailsRenderer.vue";
import AccountDetailsEditor from "./components/AccountDetailsEditor.vue";
import ActionsRenderer from "./components/ActionsRenderer.vue";

export default {
  name: "App",
  data() {
    return {
      columnDefs: null,
      gridApi: null,
      columnApi: null,
      addingUser: false
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
    AccountDetailsEditor,
    ActionsRenderer
  },
  methods: {
    onGridReady(params) {
      this.gridApi = params.api;
      this.columnApi = params.api;
    },
    getRowNodeId(data) {
      return data.id;
    },
    addUser() {
      this.addingUser = true;
      let rowDataCopy = this.rowData.map(row => ({
        ...row,
        accountDetails: {
          ...row.accountDetails
        }
      }));
      let user = getBlankUser();
      rowDataCopy.unshift(user);
      this.rowData = rowDataCopy;
      this.gridApi.setRowData(this.rowData);
    }
  },
  beforeMount() {
    this.columnDefs = [
      {
        field: "avatarUrl",
        cellRendererFramework: "AvatarRenderer",
        width: 170,
        editable: true
      },
      {
        field: "accountDetails",
        cellRendererFramework: "AccountDetailsRenderer",
        cellEditorFramework: "AccountDetailsEditor",
        editable: true,
        width: 300
      },
      {
        headerName: "Actions",
        cellRendererFramework: "ActionsRenderer",
        width: 130
      }
    ];

    this.rowData = rowData;
  },
  updated() {
    this.$nextTick(function() {
      if (this.addingUser) {
        this.gridApi.startEditingCell({
          rowIndex: 0,
          colKey: "accountDetails"
        });
        this.addingUser = false;
      }
    });
  }
};
</script>

<style lang="scss">
$header-height: 0px;
$row-border-width: 0px;
$hover-color: rgb(240, 240, 240);
$editor-background-color: inherit;
$border-color: white;

@import "../node_modules/ag-grid-community/src/styles/ag-grid.scss";
@import "../node_modules/ag-grid-community/src/styles/ag-theme-balham/sass/ag-theme-balham.scss";

.ag-theme-balham {
  box-shadow: 0 0 15px darkgrey;
}

.ag-theme-balham .ag-cell {
  display: flex;
  align-items: center;
}

.ag-theme-balham .ag-cell.ag-cell-inline-editing {
  height: inherit;
  border: none;
}

.app {
  width: 100%;
  background: white;
  position: relative;
}

button {
  position: absolute;
  top: 100%;
  left: 100%;
  width: 80px;
  height: 80px;
  transform: translate(-110px, -110px);
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  border: none;
  background: rgb(235, 233, 235);
}

button:hover {
  background: rgb(248, 248, 248);
}

button:active {
  outline: none;
  border: none;
  box-shadow: none;
}

button i {
  font-size: 22px;
  color: darkgrey;
}

button:active i {
  color: #c78bd2;
}
</style>
