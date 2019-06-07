import * as React from "react";

import "./index.scss";

import { algorithmContents } from "utils/constants";
import { SidebarItem } from "../SidebarItem";

export class SidebarList extends React.Component<{}, {}> {
  public render() {
    if (algorithmContents.length === 0) {
      return null;
    }

    return (
      <div className="sidebar-list">
        {algorithmContents.map((content) => (
          <SidebarItem
            key={content.name}
            label={content.label}
            dropdownItems={content.dropdownItems}
          />
        ))}
      </div>
    );
  }
}
