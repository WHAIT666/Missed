import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Switch } from "@/components/ui/switch"
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';

export default function Register() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Register</CardTitle>
          <CardDescription>Post and respond to sightings. Already a member? <a href="/login" className="text-blue-500">Log-in Here</a></CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-2 gap-6">
            <Button variant="outline" className="bg-blue-500 text-white">
              <FcGoogle className="mr-2 h-4 w-4" />
              Sign up with Google
            </Button>
            <Button variant="outline" className="bg-black text-white">
              <FaApple className="mr-2 h-4 w-4" />
              Sign up with Apple
            </Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or, create a new iSawYou account</span>
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="memberName">Member Name</Label>
            <Input id="memberName" placeholder="Member Name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" placeholder="Email address" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password (8 characters including upper, lower, number and special character)</Label>
            <Input id="password" type="password" placeholder="Password" />
            <Progress value={25} className="h-2" />
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="terms" className="data-[state=unchecked]:bg-gray-300 data-[state=checked]:bg-red-500" />
            <Label htmlFor="terms">I accept the Terms of Use</Label>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-red-500 hover:bg-red-600 text-white">Register</Button>
        </CardFooter>
        <CardContent>
          <div className="text-sm text-muted-foreground mt-4">
          <hr className="my-4" />
            <p className="mb-2">We use this registration information to post your sightings and maintain your account.</p>
            <p className="mt-2">Our privacy policy prevents us from sending you unsolicited email or sharing your email address with our partners except to execute basic site functionality. In short, we don't track or spam you!</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
