import React from 'react'
import ReactDOM from 'react-dom/client'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import App from './App.tsx'
import "./index.css"
import "./variables.scss"

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import DashBoard from "./components/dashboard/dahsboard.component.tsx";
import ProjectViewComponent from "./components/project-view/project-view.component.tsx";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
            cacheTime: Infinity,
        },
    },
});

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "",
                element: <DashBoard/>,
            },
            {
                path: "project/:id",
                element: <ProjectViewComponent/>
            }
        ]
    },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router}></RouterProvider>
        </QueryClientProvider>
    </React.StrictMode>,
)
