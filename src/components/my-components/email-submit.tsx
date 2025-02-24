import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export const EmailSubmit = () => {
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        navigate("/home");
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
            <div className="grid justify-center bg-white border border-gray-800 p-5 rounded pb-10 dark:border-gray-600 dark:bg-black">
                <h1 className="text-black dark:text-white my-5 font-bold text-center">Welcome to Booking Wizard, Enter your email to continue.</h1>
                <Label className="text-black dark:text-white font-medium" htmlFor="email">Email</Label>
                <Input className="w-100 text-black dark:text-white mt-5 border-gray-600" type="email" placeholder="Email" />
                <Button className="bg-black dark:bg-white dark:text-black w-100 mt-5">Submit</Button>
                <div className="flex items-center space-x-2 mt-5">
                <Checkbox id="terms" />
                <Label className="text-black dark:text-white" htmlFor="terms">I accept receiving emails on updates and offers.</Label>
                </div>
            </div>
            </form>
        </>
    )
}