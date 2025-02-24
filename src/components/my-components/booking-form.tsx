import { Label } from "@/components/ui/label";
import { DatePickerWithRange } from "@/components/my-components/date-picker";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const BookingForm = () => {
    return (
        <>
            <div className="grid my-5">
                <Label className="font-semibold" htmlFor="date">Select Dates</Label>
                <DatePickerWithRange />
            </div>
            <div className="flex w-[100%] my-5 gap-2.5">
                <div className="w-[50%]">
                    <Label className="font-semibold" htmlFor="guests">Number of Adults</Label>
                    <Input type="number" id="adults" className=" p-2 border border-gray-800 rounded dark:border-gray-600 dark:bg-black" />
                </div>
                <div className="w-[50%]">
                    <Label className="font-semibold" htmlFor="rooms">Number of Children</Label>
                    <Input type="number" id="children" className=" p-2 border border-gray-800 rounded dark:border-gray-600 dark:bg-black" />
                </div>
            </div>
            <div className="grid my-5">
                <Button className="w-100 bg-black dark:bg-white dark:text-black font-bold">Check Availability</Button>
            </div>
        </>
    );
}