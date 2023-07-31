import { app, auth } from "@/services/firebase/firebaseService";
import { doc, getFirestore, setDoc } from "@firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";
import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const firestore = getFirestore(app);

export const authOptions: AuthOptions = {
  pages: {
    signIn: "/sign-in",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials): Promise<any> {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          (credentials as any).email || "",
          (credentials as any).password || ""
        ).catch((error: any) => console.log(error));

        const user = userCredential?.user;

        if (user) {
          const userData = {
            id: user.uid,
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
          };

          try {
            await setDoc(doc(firestore, "users", user.uid), userData);
          } catch (error) {
            console.error("Error writing to Firestore: ", error);
          }
          return userData;
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      session.user = user;
      return session;
    },
    async jwt({ token: tokenPayload, user }) {
      return {
        ...tokenPayload,
        user,
      };
    },
  },
};

export default NextAuth(authOptions);
