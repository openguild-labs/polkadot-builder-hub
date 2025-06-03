"use client";

import { authClient } from "@/lib/auth-client"; //import the auth client
import { Button } from "@/components/ui/button";
import GoBack from "@/components/go-back";
import Image from "next/image";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
    <div className="flex flex-col gap-8 p-4 max-w-md mx-auto h-[600px]">
      <GoBack />
      <Card>
        <CardHeader className="flex flex-col gap-6 items-center">
          <Image src="/polkadot.svg" alt="logo" width={150} height={50} />
          <CardTitle className="text-3xl">Sign In</CardTitle>
          <CardDescription>Sign in to your account to continue</CardDescription>
        </CardHeader>
        <CardFooter>
          <Button
            className="hover:cursor-pointer w-full"
            onClick={signInWithGithub}
            size="lg"
          >
            <Image
              src="/github.svg"
              alt="github"
              width={20}
              height={20}
              className="invert"
            />
            Sign In with Github
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
