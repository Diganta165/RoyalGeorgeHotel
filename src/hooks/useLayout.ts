import { LayoutContext } from '../context/Layout/LayoutContext';
import React, { createContext, useContext } from 'react';

export const useLayout = () => useContext(LayoutContext);
