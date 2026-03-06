/* eslint-disable react-refresh/only-export-components */
import type { BaseHTMLAttributes, FC, ReactNode } from "react";
import { createContext, useContext, useState } from "react";

export type TabVariant = "tab" | "button";
export type ColorVariant = "green" | "red";

interface TabsContextType {
  variant: TabVariant;
  activeTab: string;
  setActiveTab: (value: string) => void;
}
const TabsContext = createContext<TabsContextType | undefined>(undefined);

/* ======== Root ======== */
interface TabsRootProps {
  defaultValue: string;
  variant?: TabVariant;
  children: ReactNode;
}
const TabsRoot: FC<TabsRootProps> = ({ defaultValue, variant = "tab", children }) => {
  const [activeTab, setActiveTab] = useState<string>(defaultValue);

  return (
    <TabsContext.Provider value={{ variant, activeTab, setActiveTab }}>
      {children}
    </TabsContext.Provider>
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
  color?: ColorVariant;
  children: ReactNode;
}
const TabsTrigger: FC<TabsTriggerProps> = ({ value, color, className, children }) => {
  const ctx = useContext(TabsContext);

  if (!ctx) throw new Error("Tab.Trigger must be used inside the Tab.Root");

  const trigger_variant: Record<TabVariant, { li: string; span: string }> = {
    tab: {
      li: `border-b border-solid border-block data-[active=true]:tab-active data-[active=false]:tab-inactive data-[active=true]:after:bg-dark data-[active=false]:after:bg-dark`,
      span: "group-hover:bg-block3 data-[active=true]:text-dark",
    },
    button: {
      li: "",
      span: "bg-block3 text-dark group-hover:bg-block data-[active=true]:bg-main",
    },
  };

  const colorVariant: Record<ColorVariant, { li: string; span: string }> = {
    green: {
      li: "data-[active=true]:after:!bg-admin_green data-[active=false]:after:!bg-admin_green",
      span: "data-[active=true]:!text-admin_green",
    },
    red: {
      li: "data-[active=true]:after:!bg-admin_red data-[active=false]:after:!bg-admin_red",
      span: "data-[active=true]:!text-admin_red",
    },
  };

  return (
    <li
      role="tab-trigger"
      aria-selected={ctx.activeTab === value}
      onClick={() => ctx.setActiveTab(value)}
      data-active={ctx.activeTab === value}
      data-testid={`tab-trigger-${value}`}
      className={`group list-none tab p-2 whitespace-nowrap text-sm leading-6 font-medium cursor-pointer select-none text-block transform transition-colors duration-500 ease-in-out ${trigger_variant[ctx.variant].li} ${color && colorVariant[color].li} ${className}`}
    >
      <span
        data-active={ctx.activeTab === value}
        className={`flex justify-center items-center gap-2 px-5 py-1.5 rounded-md outline-none border-none ${trigger_variant[ctx.variant].span} ${color && colorVariant[color].span}`}
      >
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
