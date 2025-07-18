import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const App = lazy(() => import('@/App'));
const Home = lazy(() => import('@/pages/home'));
const StatsPage = lazy(() => import('@/pages/stats'));
const HabitDetailPage = lazy(() => import('@/pages/habit-detail'));
const ErrorPage = lazy(() => import('@/pages/error'));
const SettingsPage = lazy(() => import('@/pages/settings'));

export const router = createBrowserRouter([
    {
        path: '/', element: <App/>,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Home/> },
            { path: 'stats', element: <StatsPage /> },
            { path: 'habit/:id', element: <HabitDetailPage /> },
            { path: 'settings', element: <SettingsPage /> }
        ]
    }
])