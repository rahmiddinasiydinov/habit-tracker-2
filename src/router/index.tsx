import App from '@/App';
import ErrorPage from '@/pages/error';
import Home from '@/pages/home';
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const StatsPage = lazy(() => import('@/pages/stats'));
const HabitDetailPage = lazy(() => import('@/pages/habit-detail'));
const SettingsPage = lazy(() => import('@/pages/settings'));

export const router = createBrowserRouter([
    {
        path: '/', element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Home /> },
            { path: 'stats', element: <StatsPage /> },
            { path: 'habit/:id', element: <HabitDetailPage /> },
            { path: 'settings', element: <SettingsPage /> }
        ]
    }
])
