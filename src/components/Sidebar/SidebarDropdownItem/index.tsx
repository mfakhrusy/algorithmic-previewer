import * as React from "react";

import "./index.scss";

interface ISidebarDropdownItemProps {
  label: string;
}

export class SidebarDropdownItem extends React.Component<ISidebarDropdownItemProps, {}> {
  public render() {
    const { label } = this.props;
    return (
      <div className="sidebar-dropdown-item">
        {label}
      </div>
    );
  }
}
