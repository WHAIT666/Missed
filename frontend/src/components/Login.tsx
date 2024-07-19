import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import { ModeToggle } from "../components/mode-toggle";

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <ModeToggle />
      <Card className="w-full max-w-md shadow-lg p-6 rounded-lg">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-semibold">Log-in</CardTitle>
          <CardDescription>Welcome back! Don't have an account? <a href="/register" className="text-red-500">Register Here</a></CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-2 gap-6">
            <Button variant="outline" className="bg-blue-500 text-white">
              <FcGoogle className="mr-2 h-4 w-4" />
              Sign in with Google
            </Button>
            <Button variant="outline" className="bg-black text-white">
              <FaApple className="mr-2 h-4 w-4" />
              Sign in with Apple
            </Button>
          </div>
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="px-2 text-muted-foreground">Sign-in with your Missing credentials</span>
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" placeholder="Email address" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Password" />
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="remember" className="data-[state=unchecked]:bg-gray-300 data-[state=checked]:bg-red-500" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-red-500 hover:bg-red-600 text-white py-2">Log-in</Button>
        </CardFooter>
        <CardContent>
          <div className="text-sm text-gray-600 mt-4">
            <hr className="my-4" />
            <a href="#" className="text-red-500 text-sm">Forgot password?</a>
            <p className="mb-2 mt-4">We use this login information to provide access to your account and personalize your experience.</p>
            <p className="mt-2">Missing has been offering free missed-connections since 1999!</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
