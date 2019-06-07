import * as React from "react";

import { SidebarFooter } from "./SidebarFooter";
import { SidebarList } from "./SidebarList";

import "./index.scss";

export class Sidebar extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="sidebar">
        <SidebarList />
        <SidebarFooter />
      </div>
    );
  }
}
