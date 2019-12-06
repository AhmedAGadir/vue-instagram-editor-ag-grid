<template>
  <div class="app">
    <ag-grid-vue
      style="height: 900px;"
      class="ag-theme-balham"
      :columnDefs="columnDefs"
      :rowData="rowData"
      rowHeight="150"
      headerHeight="0"
      @grid-ready="onGridReady"
      deltaRowDataMode
      :getRowNodeId="getRowNodeId"
      editType="fullRow"
      @row-editing-stopped="onRowEditingStopped"
      enableCellChangeFlash
      suppressCellSelection
    ></ag-grid-vue>
    <add-user-button @clicked="addUser"></add-user-button>
  </div>
</template>

<script>
import { AgGridVue } from "ag-grid-vue";
import rowData, {
  createGhostUser,
  isGhostUser,
  isBlankUser
} from "./rowData.js";
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
    addUser() {
      let ghostNodes = this.getGhostNodes();
      if (ghostNodes.length > 0) {
        this.startEditingNode(ghostNodes[0]);
      } else {
        this.$store.commit("addGhostUser", createGhostUser());
      }
    },
    startEditingNode(node) {
      this.gridApi.startEditingCell({
        rowIndex: node.rowIndex,
        colKey: "avatarUrl"
      });
      this.gridApi.flashCells({ rowNodes: [node] });
    },
    onRowEditingStopped(params) {
      console.log("row editing stopped");
      let user = params.data;
      console.log("isBlankUser(user)", isBlankUser(user));
      console.log("isGhostUser(user)", isGhostUser(user));
      if (isBlankUser(user)) {
        this.$store.commit("deleteUser", { user, force: true });
      } else if (isGhostUser(user)) {
        this.$store.commit("commitGhostUser", user);
      }
    },
    getGhostNodes() {
      let nodes = [];
      this.gridApi.forEachNode(node => {
        if (node.data.ghost) {
          nodes.push(node);
        }
      });
      return nodes;
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
        field: "accountDetails",
        cellRendererFramework: "AccountDetailsRenderer",
        cellEditorFramework: "AccountDetailsEditor",
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
      let ghostNodes = this.getGhostNodes();
      if (ghostNodes.length > 0) {
        this.startEditingNode(ghostNodes[0]);
      }
    });
  }
};
</script>

<style lang="scss">
@import "./scss/_variables.scss";

/* We dont want to show the column header */
$header-height: 0px;
/* Minimalistic approach*/
$row-border-width: 0px;
$border-color: white;
/* Beautifying */
$hover-color: rgb(240, 240, 240);
$editor-background-color: inherit;

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
