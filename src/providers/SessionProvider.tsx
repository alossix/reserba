import { SessionProvider as Provider } from "next-auth/react";

type SessionProviderProps = {
  children: React.ReactNode;
};

const SessionProvider = ({ children }: SessionProviderProps) => {
  return <Provider>{children}</Provider>;
};

export default SessionProvider;
