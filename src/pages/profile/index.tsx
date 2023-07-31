import { Typography } from "@mui/material";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const ProfilePage: React.FC = () => {
  const router = useRouter();
  const session = useSession();

  if (!session.data?.user) {
    router.push("/sign-in");
  }
  return (
    <>
      Profile page
      <Typography variant="h1">{session.data?.user?.name}</Typography>
    </>
  );
};

export default ProfilePage;
