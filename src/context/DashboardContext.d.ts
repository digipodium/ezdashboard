import React, { ReactNode } from "react";
import { AppDashboardInterface } from "../types/ContextTypes";
declare const DashboardContext: React.Context<AppDashboardInterface>;
export declare const DashboardProvider: ({ children }: {
    children: ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export default DashboardContext;
