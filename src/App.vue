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
      editType="fullRow"
      @row-editing-stopped="onRowEditingStopped"
      enableCellChangeFlash
    ></ag-grid-vue>
    <add-user-button @addUser="addUser" ref="addUserBtn"></add-user-button>
  </div>
</template>

<script>
import { AgGridVue } from "ag-grid-vue";
import rowData, { getBlankUser, isBlankUser } from "./rowData.js";
import AvatarRenderer from "./components/Avatar/AvatarRenderer.vue";
import AvatarEditor from "./components/Avatar/AvatarEditor.vue";
import AccountDetailsRenderer from "./components/AccountDetails/AccountDetailsRenderer.vue";
import AccountDetailsEditor from "./components/AccountDetails/AccountDetailsEditor.vue";
import ActionsRenderer from "./components/Actions/ActionsRenderer.vue";
import ActionsEditor from "./components/Actions/ActionsEditor.vue";
import AddUserButton from "./components/AddUserButton.vue";

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
    AvatarEditor,
    AccountDetailsRenderer,
    AccountDetailsEditor,
    ActionsRenderer,
    ActionsEditor,
    AddUserButton
  },
  methods: {
    onGridReady(params) {
      this.gridApi = params.api;
      this.columnApi = params.api;
    },
    getRowNodeId(data) {
      return data.id;
    },
    onRowEditingStopped(params) {
      let user = params.data;
      if (isBlankUser(user)) {
        this.$store.commit("deleteUser", {
          user,
          force: true
        });
      }
    },
    addUser() {
      let firstNode = this.gridApi.getDisplayedRowAtIndex(0);
      if (this.isNodeBlank(firstNode)) {
        this.startEditingNode(firstNode);
      } else {
        let user = getBlankUser();
        this.$store.commit("addUser", user);
      }
    },
    isNodeBlank(node) {
      return isBlankUser(node.data);
    },
    startEditingNode(node) {
      this.gridApi.startEditingCell({
        rowIndex: node.rowIndex,
        colKey: "avatarUrl"
      });
      this.gridApi.flashCells({ rowNodes: [node] });
    }
  },
  beforeMount() {
    this.columnDefs = [
      {
        field: "avatarUrl",
        cellRendererFramework: "AvatarRenderer",
        cellEditorFramework: "AvatarEditor",
        width: 170,
        editable: true
      },
      {
        cellRendererFramework: "AccountDetailsRenderer",
        cellEditorFramework: "AccountDetailsEditor",
        valueGetter: params => params.data,
        editable: true,
        width: 300
      },
      {
        headerName: "Actions",
        cellRendererFramework: "ActionsRenderer",
        cellEditorFramework: "ActionsEditor",
        valueSetter: params => null,
        editable: true,
        width: 130
      }
    ];

    this.rowData = rowData;
  },
  updated() {
    this.$nextTick(function() {
      let firstNode = this.gridApi.getDisplayedRowAtIndex(0);
      if (this.isNodeBlank(firstNode)) {
        this.startEditingNode(firstNode);
      }
    });
  }
};
</script>

<style lang="scss">
@import "./scss/_variables.scss";

$header-height: 0px;
$row-border-width: 0px;
$hover-color: rgb(240, 240, 240);
$editor-background-color: inherit;
$border-color: white;

@import "../node_modules/ag-grid-community/src/styles/ag-grid.scss";
@import "../node_modules/ag-grid-community/src/styles/ag-theme-balham/sass/ag-theme-balham.scss";

.ag-theme-balham {
  box-shadow: 0 0 15px $dark-grey;
}

.ag-theme-balham .ag-cell {
  display: flex;
  align-items: center;
}

.ag-theme-balham .ag-cell.ag-cell-inline-editing {
  height: inherit;
  border: none;
  padding: 0 10px;
}

.ag-theme-balham .ag-cell-data-changed {
  background-color: $medium-grey !important;
}

.app {
  width: 100%;
  position: relative;
}

button {
  position: absolute;
  top: 100%;
  left: 100%;
  transform: translate(-110px, -110px);
  z-index: 999;
}
</style>
