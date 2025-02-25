import { useState } from "react";
import { Button } from "@/components/ui/button";
import { User, BedDouble, SquareArrowOutUpRight } from 'lucide-react'

interface Room {
    id: number;
    name: string;
    price: number;
    capacity: number;
    available: boolean;
    src: string;
}

const mockRooms: Room[] = [
    { id: 1, name: "Deluxe Room", price: 100, capacity: 2, available: true, src: "/hotel-booking/room1.jpg"  },
    { id: 2, name: "Standard Room", price: 70, capacity: 1, available: true, src: "/hotel-booking/room2.jpg" },
    { id: 3, name: "Family Suite", price: 150, capacity: 4, available: true, src: "/hotel-booking/room3.jpg" } // Example of an unavailable room
];

export const AvailableRooms = () => {
    const [rooms] = useState(mockRooms);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4">
            <h2 className="text-2xl font-semibold">Available Rooms</h2>
            {rooms.filter(room => room.available).map((room) => (
                <div key={room.id} className="md:flex border p-4 rounded-lg shadow-md gap-2.5">
                    <div className="md:w-1/2 sm:w-full">
                        <img src={room.src} alt="" className="h-full rounded"></img>
                    </div>
                    <div className="md:w-1/2 sm:w-full flex flex-col">
                        <h3 className="text-lg font-semibold">{room.name}</h3>
                      
                        <div className="flex gap-1">
                        <p className="flex max-w-fit bg-gray-300 dark:bg-gray-800 rounded p-1">
                            {room.capacity} <User className="w-4 mx-1" strokeWidth={2} />
                        </p>
                        <p className="flex items-center max-w-fit bg-gray-300 dark:bg-gray-800 rounded p1">
                            <BedDouble className="w-4 mx-1" strokeOpacity={2} />
                        </p>
                        </div>
                        <p className="font-thin py-2">
                            <span className="font-bold text-2xl">${room.price}</span> per night
                        </p>
                        <p className="flex gap-1 my-4">
                            More info <SquareArrowOutUpRight strokeWidth={1} />
                        </p>
                      
                        <div className="flex-grow"></div> {/* Pushes the button to the bottom */}
                        <Button className="w-full text-white bg-black dark:bg-white dark:text-black px-4 py-2 rounded mt-2">
                            Book Now
                        </Button>
                    </div>


                </div>
            ))}
        </div>
    );
};

