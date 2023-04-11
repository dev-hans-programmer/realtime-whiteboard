import { configureStore } from '@reduxjs/toolkit';
import whiteboardReducer from './features/whiteboard/whiteboardSlice';

export const store = configureStore({
   reducer: {
      whiteboard: whiteboardReducer,
   },
});
