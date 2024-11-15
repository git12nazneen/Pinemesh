"use client";

import * as React from "react";

import { Icons } from '@/components/icons';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Image from "next/image";
import LetterPullup from "@/components/ui/letter-pullup";
import { Button } from "@/components/ui/button";



export function SignUpUserForm({ className, ...props }) {
  const router = useRouter()
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  async function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    // formdata
    try {
      const formData = {
        name: (event.target).name.value,
        email: (event.target).email.value,
        password: (event.target).password.value,
        photo: (event.target).photo.value,
      }
      console.log('from data', formData)
      // data post
      const response = await fetch(`/api/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      response.status === 201 && router.push('/')

    }
    catch {
      setIsLoading(false);
      toast("An error occurred while signing up. Please try again.");
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
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
          Sign in to start save someone&apos;s life
        </p>
      </div>
      <div className={cn("grid gap-2", className)} {...props}>
        <form onSubmit={onSubmit}>
          <div className="grid gap-2">

            <div className="grid gap-1">
              <Label className="sr-only" htmlFor="email">
                Name
              </Label>
              <Input
                id="name"
                placeholder="John abra"
                type="text"
                name="name"
                autoCapitalize="none"
                autoComplete="name"
                autoCorrect="off"
                disabled={isLoading}
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
                disabled={isLoading}
              />
            </div>



            <div className="grid gap-2">

              <div className="grid gap-1">
                <Label className="sr-only" htmlFor="email">
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
                  disabled={isLoading}
                />
              </div>


              <div className="grid gap-1">
                <Label className="sr-only" htmlFor="email">
                  Photo url
                </Label>
                <Input
                  id="photo"
                  placeholder="Enter your photo URL"
                  type="url"
                  name="photo"
                  autoCapitalize="none"
                  autoComplete="url"
                  autoCorrect="off"
                  disabled={isLoading}
                />
              </div>

            </div>
            <Button className="bg-red-800" type="submit" disabled={isLoading}>
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


        <div className=" flex justify-center text-xs  ">
          <p className="text-center text-xs  text-muted-foreground uppercase">Already Have An Account</p>
          <Link href='/sign-in' className="bg-background px-2 underline text-muted-foreground uppercase">
            Sign In
          </Link>
        </div>

      </div>
    </div>
  )
}
