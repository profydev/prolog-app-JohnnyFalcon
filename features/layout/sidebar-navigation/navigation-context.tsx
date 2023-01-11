import React, { useState, useEffect } from "react";

type NavigationContextProviderProps = {
  children: React.ReactNode;
};

const defaultContext = {
  isSidebarCollapsed: false,
  isMobile: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleSidebar: () => {},
};

export const NavigationContext = React.createContext(defaultContext);

export function NavigationProvider({
  children,
}: NavigationContextProviderProps) {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(
    defaultContext.isSidebarCollapsed
  );
  const [isMobile, setIsMobile] = useState(defaultContext.isMobile);

  useEffect(() => {
    const details = navigator.userAgent;

    const regexp = /android|iphone|kindle|ipad/i;

    const isMobileDevice = regexp.test(details);

    if (isMobileDevice) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }

    const handleWindowResize = () => {
      if (window.innerWidth <= 1024) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <NavigationContext.Provider
      value={{
        isMobile,
        isSidebarCollapsed,
        toggleSidebar: () => setSidebarCollapsed((isCollapsed) => !isCollapsed),
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}
