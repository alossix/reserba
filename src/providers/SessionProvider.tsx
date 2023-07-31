// import { Session } from "next-auth";
import { SessionProvider as Provider } from "next-auth/react";

type SessionProviderProps = {
  children: React.ReactNode;
  //   session: Session | null;
};

const SessionProvider = ({ children }: SessionProviderProps) => {
  return <Provider>{children}</Provider>;
};

export default SessionProvider;
