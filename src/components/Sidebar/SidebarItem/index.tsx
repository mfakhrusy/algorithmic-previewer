import * as React from "react";

import "./index.scss";

import { IAlgorithmContentDropdownItem } from "utils/constants";
import { SidebarDropdownItem } from "../SidebarDropdownItem";

interface ISidebarItemProps {
  label: string;
  dropdownItems: IAlgorithmContentDropdownItem[];
}

interface ISidebarItemState {
  showDropdown: boolean;
}

export class SidebarItem extends React.Component<ISidebarItemProps, ISidebarItemState> {
  constructor(props: ISidebarItemProps) {
    super(props);

    this.state = {
      showDropdown: false,
    };
  }

  public render() {
    const { label, dropdownItems } = this.props;
    const { showDropdown } = this.state;

    return (
      <div
        className="sidebar-item"
      >
        <div
          className="sidebar-item__label"
          onClick={this.expandDropdown}
        >
          {label}
        </div>
        {dropdownItems.length !== 0 ? (
          <div className={`sidebar-item__dropdown ${showDropdown ? "is--shown" : "is--hidden"}`}>
            {dropdownItems.map((item) => (
              <SidebarDropdownItem key={item.name} label={item.label} />
            ))}
          </div>
        ) : null}
      </div>
    );
  }

  private expandDropdown = () => {
    const { dropdownItems } = this.props;
    const { showDropdown } = this.state;

    if (dropdownItems.length > 0) {
      this.setState({ showDropdown: !showDropdown });
    }
  }
}
