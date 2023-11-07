/* eslint-disable no-unused-vars */
import React from 'react';

export type RouteContextValue = {
  currentRoute: string | undefined;
  setCurrentRoute: (name: string) => void;
};

export type RouteContextProviderProps = {
  children: React.ReactNode;
};
