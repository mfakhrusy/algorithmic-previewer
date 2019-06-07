import * as React from "react";

import { Sidebar } from "components/Sidebar";

import "./index.scss";

export class App extends React.Component<{}, {}> {
  public render() {
    return (
      <div>
        <Sidebar />
      </div>
    );
  }
}
