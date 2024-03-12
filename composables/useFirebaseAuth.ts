import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  type Auth,
  type User,
} from "firebase/auth";

export default function () {
  const { $auth } = useNuxtApp();

  const user = useState<User | null>("google_user", () => null);

  const registerUser = async (
    email: string,
    password: string
  ): Promise<boolean> => {
    try {
      const newUser = await createUserWithEmailAndPassword(
        $auth as Auth,
        email,
        password
      );
      if (newUser) {
        user.value = newUser.user;
        return true;
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message);
      }
      return false;
    }
    return false;
  };

  const loginWithEmailAndPassword = async (
    email: string,
    password: string
  ): Promise<User | null> => {
    try {
      const loggedUser = await signInWithEmailAndPassword(
        $auth as Auth,
        email,
        password
      );
      if (loggedUser) {
        user.value = loggedUser.user;
        return loggedUser.user;
      }
      return null;
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
      console.log(error);
      return null;
    }
  };

  return {
    user,
    registerUser,
    loginWithEmailAndPassword,
  };
}
