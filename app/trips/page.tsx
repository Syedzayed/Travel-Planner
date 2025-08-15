import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default async function TripsPage() {
    
    const session = await auth()
    if (!session){
        return (
        <div className="flex justify-center items-center h-screen text-gray-700 text-xl">
            Please Sign In .
        </div>
        );
    }


    return (
        <div className="space-y-6 container mx-auto px-4 py-8">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                <Link href="/trips/new">
                <Button>New Trip</Button>
                </Link>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Welcome Back , {session.user?.name}</CardTitle>
                    </CardHeader>
                </Card>
        </div>
    );
}