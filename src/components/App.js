import React from "react";
import Input from "./Input";
import Row from "./Row";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      rows: 2,
      columns: [3, 2],
      spaceBetweenRows: 10,
      spaceBetweenBoxes: 10
    };
  }
  setNumOfRows = rows => {
    const newValue = parseInt(rows);
    isFinite(newValue) &&
      this.setState({
        rows: newValue
      });
  };
  setNumOfColumns = columns => {
    const newColumns = columns.split(",").map(x => parseInt(x));
    newColumns.every(x => isFinite(x)) &&
      this.setState({
        columns: newColumns
      });
  };
  setSpaceBetweenRows = space => {
    const newSpace = parseInt(space)
    isFinite(newSpace) && this.setState({
      spaceBetweenRows: newSpace
    });
  };
  setSpaceBetweenBoxes = space => {
    const newSpace = parseInt(space)
    isFinite(newSpace) && this.setState({
      spaceBetweenBoxes: newSpace
    });
  };
  render() {
    return (
      <div>
        <div className="row">
          <Input fn={this.setNumOfRows} />
          <Input fn={this.setNumOfColumns} />
        </div>
        <div className="row">
          <Input fn={this.setSpaceBetweenRows} />
          <Input fn={this.setSpaceBetweenBoxes} />
        </div>
        <div>
          {Array.from(Array(this.state.rows).keys()).map(key => (
            <Row
              key={key}
              columns={this.state.columns[key] || 0}
              width={800}
              spaceBetweenRows={this.state.spaceBetweenRows}
              spaceBetweenBoxes={this.state.spaceBetweenBoxes}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
