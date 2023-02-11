import { createContext, PropsWithChildren, useEffect } from "react";

export const RecentlyViewedContext = createContext(null);

export const RecentlyViewedProvider = ({ children }: PropsWithChildren) => {
  return (
    <RecentlyViewedContext.Provider value={null}>
      {children}
    </RecentlyViewedContext.Provider>
  );
};
