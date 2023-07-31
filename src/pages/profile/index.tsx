import { Typography } from "@mui/material";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const ProfilePage: React.FC = () => {
  const router = useRouter();
  const session = useSession();

  useEffect(() => {
    if (!session?.data?.user) {
      router.push("/sign-in");
    }
  }, [session, router]);

  return (
    <>
      Profile page
      <Typography variant="h1">{session.data?.user?.name}</Typography>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  );
};

export default ProfilePage;
