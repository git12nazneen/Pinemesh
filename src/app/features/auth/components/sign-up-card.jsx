"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import LetterPullup from "@/components/ui/letter-pullup";
import { Button } from "@/components/ui/button";

export function SignUpUserForm({ className, ...props }) {
  return (
    <div>
      <div className="py-7 text-center">
        <div className="flex justify-center items-center">
          <Link href="/">
            <div className="bg-[#287279] rounded-full p-3 inline-block">
              <Image src="/logo1.png" width={20} height={7} alt="Logo" />
            </div>
          </Link>
        </div>
        <LetterPullup words="Welcome EduPath" />
        <p className="text-base text-muted-foreground">
          Sign in to start saving someone&apos;s life
        </p>
      </div>
      <div className={cn("grid gap-2", className)} {...props}>
        <form>
          <div className="grid gap-2">
            <div className="grid gap-1">
              <Label className="sr-only" htmlFor="name">
                Name
              </Label>
              <Input
                id="name"
                placeholder="John Abra"
                type="text"
                name="name"
                autoCapitalize="none"
                autoComplete="name"
                autoCorrect="off"
              />
            </div>

            <div className="grid gap-1">
              <Label className="sr-only" htmlFor="email">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                placeholder="name@example.com"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
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
                name="password"
                autoCapitalize="none"
                autoComplete="current-password"
                autoCorrect="off"
              />
            </div>

            <div className="grid gap-1">
              <Label className="sr-only" htmlFor="photo">
                Photo URL
              </Label>
              <Input
                id="photo"
                placeholder="Enter your photo URL"
                type="url"
                name="photo"
                autoCapitalize="none"
                autoComplete="url"
                autoCorrect="off"
              />
            </div>

            <Button className="bg-[#43848a]" type="button">
              Sign Up with Email
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
          <Button className="w-full" variant="outline">
            GitHub
          </Button>
          <Button className="w-full" variant="outline">
            Google
          </Button>
        </div>

        <div className="flex justify-center text-xs">
          <p className="text-center text-xs text-muted-foreground uppercase">
            Already Have An Account
          </p>
          <Link
            href="/sign-in"
            className="bg-background px-2 underline text-muted-foreground uppercase"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
