import * as React from "react";
import * as ReactDOM from "react-dom";

export default class App extends React.Component<{}, {}> {
  render(): JSX.Element {
    return <div>HelloWorld!</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));