import type { Habit } from "@/features/habits/types";

export const PREDEFINED_HABITS: Habit[] = [
  {
    id: '1',
    name: 'Morning Exercise',
    description: 'Do 15 minutes of stretching and cardio.',
    type: 'predefined',
    createdAt: '2025-07-02T10:00:00.000+08:00',
    updatedAt: '',
  },
  {
    id: '2',
    name: 'Read a Book',
    description: 'Read at least 10 pages of any book.',
    type: 'predefined',
    createdAt: '2025-07-05T15:30:00.000+08:00',
    updatedAt: '',
  },
  {
    id: '3',
    name: 'Meditate',
    description: 'Spend 10 minutes meditating in a quiet space.',
    type: 'predefined',
    createdAt: '2025-07-09T09:45:00.000+08:00',
    updatedAt: '',
  },
  {
    id: '4',
    name: 'Drink Water',
    description: 'Drink 8 glasses of water throughout the day.',
    type: 'predefined',
    createdAt: '2025-07-13T17:15:00.000+08:00',
    updatedAt: '',
  },
  {
    id: '5',
    name: 'Learn Programming',
    description: 'Practice coding challenges for 30 minutes.',
    type: 'predefined',
    createdAt: '2025-07-17T22:00:00.000+08:00',
    updatedAt: '',
  },
];
