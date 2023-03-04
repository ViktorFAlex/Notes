import { useState, useMemo } from 'react';
import { AppApiContext } from '../../../contexts';
import buildAppApi from '../../../api/buildAppApi';

const AppApiProvider = ({ children }: { children: React.ReactNode }) => {
  const appApi = buildAppApi();

  return <AppApiContext.Provider value={appApi}>{children}</AppApiContext.Provider>;
};

export default AppApiProvider;
