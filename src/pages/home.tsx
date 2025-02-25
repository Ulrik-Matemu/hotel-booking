import Header from "@/components/my-components/header";
import { HotelImage } from "@/components/my-components/hotel-image";
import { BookingForm } from "@/components/my-components/booking-form";
import './home.css';
import { AvailableRooms } from "../components/my-components/rooms";
import Footer from "../components/my-components/footer";


export const Home = () => {

    return (
        <>
            <Header />
            <HotelImage 
                src="hotel-verde.jpg"
                alt="Hotel Verde"
                />
            <BookingForm />
            <AvailableRooms />
            <Footer />
        </>
    );
}