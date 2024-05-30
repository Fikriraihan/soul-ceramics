"use client";
import React from "react";
import { Icon } from "@iconify/react";

interface Props {
  trigger: any;
  title: string;
  content: React.ReactNode;
  drawerName: string;
}

export default function Drawer({ trigger, title, content, drawerName }: Props) {
  return (
    <div className="drawer drawer-end z-10">
      <input id={drawerName} type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor={drawerName} className="drawer-button cursor-pointer">
          {trigger}
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor={drawerName} aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-1/3 min-h-full bg-white flex flex-col">
          <div className="w-full mb-4 flex justify-between items-center">
            <h6>{title}</h6>
            <label htmlFor={drawerName} className="btn-ghost">
              <Icon icon="ic:round-close" />
            </label>
          </div>
          <div className="flex-grow overflow-y-auto">{content}</div>
        </ul>
      </div>
    </div>
  );
}
