import { getApp, getApps, initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig";
import { getAuth } from "firebase/auth";

export const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth();
