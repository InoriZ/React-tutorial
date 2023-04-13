import React from "react";
import { SideBarItemProps } from "./types";

export default function TopBoxTittle(props: SideBarItemProps) {
  const { name, } = props;
  return <div className="side-bar-items">{name}</div>;
}
