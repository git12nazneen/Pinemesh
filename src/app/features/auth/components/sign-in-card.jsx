"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import Link from "next/link";
import { signIn } from "next-auth/react";
import LetterPullup from "@/components/ui/letter-pullup";
import Image from "next/image";


export function UserAuthForm({ className, ...props }) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  async function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    // Email-based sign-in (if you have email authentication enabled in NextAuth)
    const email = (event.target).email.value;
    const result = await signIn("email", { email, redirect: false });

    if (!result?.ok) {
      console.error("Error signing in:", result?.error);
    }

    setIsLoading(false);
  }

  return (
    <div>
      <div className="py-7 text-center">
        <div className="flex justify-center items-center"><Link href="/">
          <Image
            src="/logo1.png"
            width={60}
            height={10}
            alt="Logo"
          />
        </Link></div>
        <LetterPullup words="Welcome BloodLagbe"></LetterPullup>
        <p className="text-base text-muted-foreground">
          Sign in to start saving someone&apos;s life
        </p>
      </div>
      <div className={cn("grid gap-2", className)} {...props}>
        <form onSubmit={onSubmit}>
          <div className="grid gap-2">
            <div className="grid gap-1">
              <Label className="sr-only" htmlFor="email">
                Email
              </Label>
              <Input
                id="email"
                placeholder="name@example.com"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                disabled={isLoading}
              />
            </div>
            <div className="grid gap-1">
              <Label className="sr-only" htmlFor="password">
                Password
              </Label>
              <Input
                id="password"
                placeholder="Enter your password"
                type="password"
                autoCapitalize="none"
                autoComplete="current-password"
                autoCorrect="off"
                disabled={isLoading}
              />
            </div>
            <Button className="bg-red-800" disabled={isLoading}>
              {isLoading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              Sign In with Email
            </Button>
          </div>
        </form>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <div className="flex gap-4 justify-between">
          <Button className="w-full" variant="outline" type="button" disabled={isLoading} onClick={() => signIn("github", { callbackUrl: "/" })}>
            {isLoading ? (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Icons.gitHub className="mr-2 h-4 w-4" />
            )}{" "}
            GitHub
          </Button>
          <Button className="w-full" variant="outline" type="button" disabled={isLoading}
            onClick={async () => {
              const result = await signIn("google", { callbackUrl: "/", redirect: false });
              console.log("Google sign-in response:", result); // Log the response to check status
              setIsLoading(false);
            }}
          >
            {isLoading ? (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Icons.google className="mr-2 h-4 w-4" />
            )}{" "}
            Google
          </Button>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <Link href="/sign-up" className="bg-background px-2 text-muted-foreground">
              Or Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}