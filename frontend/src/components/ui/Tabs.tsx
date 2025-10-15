/* eslint-disable react-refresh/only-export-components */
import type { BaseHTMLAttributes, FC, ReactNode } from "react";
import { createContext, useContext, useState } from "react";

interface TabsContextType {
  activeTab: string;
  setActiveTab: (value: string) => void;
}
const TabsContext = createContext<TabsContextType | undefined>(undefined);

/* ======== Root ======== */
interface TabsRootProps {
  defaultValue: string;
  children: ReactNode;
}
const TabsRoot: FC<TabsRootProps> = ({ defaultValue, children }) => {
  const [activeTab, setActiveTab] = useState<string>(defaultValue);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>{children}</TabsContext.Provider>
  );
};

/* ======== List ======== */
interface TabsListProps extends BaseHTMLAttributes<HTMLUListElement> {
  children: ReactNode;
}
const TabsList: FC<TabsListProps> = ({ children }) => {
  return (
    <ul role="tab-list" className="overflow-hidden w-full">
      <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden [scrollbar-width:none] flex flex-nowrap shrink-0 gap-0">
        {children}
      </div>
    </ul>
  );
};

/* ======== Trigger ======== */
interface TabsTriggerProps extends BaseHTMLAttributes<HTMLDivElement> {
  value: string;
  color?: string;
  children: ReactNode;
}
const TabsTrigger: FC<TabsTriggerProps> = ({ value, color = "block", className, children }) => {
  const ctx = useContext(TabsContext);

  if (!ctx) throw new Error("Tab.Trigger must be used inside the Tab.Root");

  return (
    <li
      role="tab-trigger"
      aria-selected={ctx.activeTab === value}
      onClick={() => ctx.setActiveTab(value)}
      data-active={ctx.activeTab === value}
      className={`group list-none tab p-2 whitespace-nowrap text-sm leading-6 font-medium cursor-pointer select-none border-b border-solid border-block text-block data-[active=true]:text-${color} data-[active=true]:tab-active data-[active=true]:after:bg-${color} data-[active=false]:tab-inactive data-[active=false]:after:bg-${color} ${className}`}
    >
      <span className="flex justify-center items-center gap-2 px-5 py-1.5 rounded-md outline-none border-none group-hover:bg-block3 ">
        {children}
      </span>
    </li>
  );
};

/* ======== Content ======== */
interface TabsContentProps extends BaseHTMLAttributes<HTMLDivElement> {
  value: string;
  children: ReactNode;
}
const TabsContent: FC<TabsContentProps> = ({ value, children }) => {
  const ctx = useContext(TabsContext);

  if (!ctx) throw new Error("Tab.Content must be used inside the Tab.Root");

  return ctx.activeTab === value ? (
    <div
      role="tab-content"
      id={`tab-${value}`}
      aria-labelledby={`tab-${value}`}
      className="w-full pt-5"
    >
      {children}
    </div>
  ) : (
    <div></div>
  );
};

export const Tabs = {
  Root: TabsRoot,
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsContent,
};
