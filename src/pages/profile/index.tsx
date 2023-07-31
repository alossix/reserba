import { Typography } from "@mui/material";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const ProfilePage: React.FC = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;
    if (!session) router.push("/sign-in");
  }, [session, router, status]);

  return (
    <>
      Profile page
      <Typography variant="h1">{session?.user?.name}</Typography>
      <button onClick={() => signOut({ callbackUrl: "/" })}>Sign out</button>
    </>
  );
};

export default ProfilePage;
