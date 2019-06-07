import * as React from "react";

import "./index.scss";

import { IAlgorithmContentDropdownItem } from "utils/constants";
import { SidebarDropdownItem } from "../SidebarDropdownItem";

interface ISidebarItemProps {
  label: string;
  dropdownItems: IAlgorithmContentDropdownItem[];
}

export class SidebarItem extends React.Component<ISidebarItemProps, {}> {
  public render() {
    const { label, dropdownItems } = this.props;
    return (
      <div className="sidebar-item">
        {label}
        {dropdownItems.length !== 0 ? (
          <div className="sidebar-item__dropdown">
            {dropdownItems.map((item) => (
              <SidebarDropdownItem key={item.name} label={item.label} />
            ))}
          </div>
        ) : null}
      </div>
    );
  }
}
