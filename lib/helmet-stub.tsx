import type { ReactNode } from "react";

export const Helmet = (_props: { children?: ReactNode; [key: string]: any }) => null;
export const HelmetProvider = ({ children }: { children: ReactNode }) => <>{children}</>;
export default { Helmet, HelmetProvider };
