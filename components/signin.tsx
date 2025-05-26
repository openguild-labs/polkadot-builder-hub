"use client";

import { authClient } from "@/lib/auth-client"; //import the auth client
import { Button } from "@/components/ui/button";

async function signInWithGithub() {
  await authClient.signIn.social({
    /**
     * The social provider ID
     * @example "github", "google", "apple"
     */
    provider: "github",
    /**
     * A URL to redirect after the user authenticates with the provider
     * @default "/"
     */
    callbackURL: "/teammate-finder",
    /**
     * A URL to redirect if an error occurs during the sign in process
     */
    errorCallbackURL: "/error",
    /**
     * A URL to redirect if the user is newly registered
     */
    newUserCallbackURL: "/teammate-finder",
    /**
     * disable the automatic redirect to the provider.
     * @default false
     */
    disableRedirect: false,
  });
}

export default function SignIn() {
  return (
    <div>
      <h1>Sign In</h1>
      <Button className="hover:cursor-pointer" onClick={signInWithGithub}>Sign In with Github</Button>
    </div>
  );
}
