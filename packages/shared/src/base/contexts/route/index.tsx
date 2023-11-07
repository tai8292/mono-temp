import React, { useState } from 'react';
import { RouteContextProviderProps, RouteContextValue } from './types';

const RouteContext = React.createContext<RouteContextValue>({} as any);

export const useRouteContext = (): RouteContextValue =>
  React.useContext(RouteContext);

const RouteContextProvider = ({
  children,
}: RouteContextProviderProps): React.ReactElement => {
  const [currentRoute, setCurrentRoute] = useState<string | undefined>();

  return (
    <RouteContext.Provider value={{ currentRoute, setCurrentRoute }}>
      {children}
    </RouteContext.Provider>
  );
};

export default RouteContextProvider;
