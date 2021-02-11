import { useGoogleLogin } from "react-google-login";
import { useAuth } from "../context/auth-context";
import { authenticate } from "../utils/api-client";

export default function useAuthAction() {
  const user = useAuth();
  const { signIn } = useGoogleLogin({
    onSuccess: authenticate,
    clientId:
      "317215786691-6l3eb9g9s36dbsb61ojddl2nodr2at94.apps.googleusercontent.com",
  });

  function handleAuthAction(authAction, data) {
    if (user) {
      authAction(data);
    } else {
      signIn();
    }
  }

  return handleAuthAction;
}
