import { User } from "firebase/auth";

export type InterfaceLanguages = "ca" | "de" | "en" | "es" | "fr" | "it";

export type AppUser = Pick<
  User,
  "email" | "displayName" | "uid" | "emailVerified"
> & {
  firstName?: string;
  interfaceLanguage: InterfaceLanguages;
  lastName?: string;
  userCreatedDate: Date;
  userLastSignIn: Date;
};
