import React from "react";
import { SideBarItemProps } from "./types";
import Icon from "@mui/material/Icon";


export default function SideBarItem(props: SideBarItemProps) {
  const { name, icon, link } = props;
  return <a href={link} className="side-bar-items"><Icon>{icon}</Icon>&nbsp;{name}</a>;
}
