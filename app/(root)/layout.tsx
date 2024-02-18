import { PropsWithChildren } from "react";

import Sidebar from "@/components/shared/sidebar";
import MobileNav from "@/components/shared/mobile-nav";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <main className="root">
      <Sidebar />
      <MobileNav />

      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>
    </main>
  );
};

export default Layout;
