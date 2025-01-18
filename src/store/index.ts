// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from './projectsSlice';

const loadProjectsFromLocalStorage = () => {
    try {
        const storedData = localStorage.getItem('projects');
        if (storedData) {
            return JSON.parse(storedData);
        }
    } catch (error) {
        console.error("Ошибка при чтении данных из localStorage:", error);
    }
    return [];
};

const preloadedState = {
    projects: {
        items: loadProjectsFromLocalStorage(),
    },
};

export const store = configureStore({
    reducer: {
        projects: projectsReducer,
    },
    preloadedState,
});

store.subscribe(() => {
    localStorage.setItem(
        'projects',
        JSON.stringify(store.getState().projects.items)
    );
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
