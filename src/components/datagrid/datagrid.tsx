import React from "react";
// import ReactDOM from "react-dom";
import ReactDataGrid, {Column} from "react-data-grid";
import {ProgressBar} from "react-bootstrap";
// import { findRenderedComponentWithType } from "react-dom/test-utils";

interface GridProgressValue {
  value: number
}

interface GridColumn extends Column<any> {

}

// class GridRow extends Row {
//   id?: number,
//   name?: string,
//   title?: string,
//   complete?: number
// }

const ProgressBarFormatter = ({value}: GridProgressValue) => {
  return <ProgressBar now={value} label={`${value}%`} />;
};

const columns: GridColumn[] = [
  { key: "id", name: "ID", editable: true },
  { key: "title", name: "Title", editable: true },
  { key: "complete", name: "Complete", editable: true, formatter: ProgressBarFormatter }
];

const rows = [
  { id: 0, title: "Task 1", complete: 20 },
  { id: 1, title: "Task 2", complete: 40 },
  { id: 2, title: "Task 3", complete: 60 }
];

interface DataGridRowUpdatedEvent {
  fromRow: number,
  toRow: number,
  updated?: any,
}

interface DataGridRow {}
interface DataGridColumn {}

interface DataGridState {
  rows: DataGridRow[],
  columns: DataGridColumn[]
}

class DataGrid extends React.Component {
  state = { rows };

  onGridRowsUpdated = ({ fromRow, toRow, updated }: DataGridRowUpdatedEvent) => {
    console.log("grid row updated event");
    this.setState( (state: DataGridState) => {
      const rows = state.rows.slice();
      for (let i: number = fromRow; i <= toRow; i++) {
        rows[i] = { ...rows[i], ...updated };
      }
      return { rows };
    });
  };

  render() {
    // const DataGridComp = new ReactDataGrid(props);
    return <ReactDataGrid
        columns={columns}
        rowGetter={i => this.state.rows[i]}
        rowsCount={rows.length}
        onGridRowsUpdated={this.onGridRowsUpdated}
        enableCellSelect={true}
      />
    ;
  }
}

export { DataGrid };
