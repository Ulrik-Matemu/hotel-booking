import { AspectRatio } from "@/components/ui/aspect-ratio";
import React from "react";

interface HotelImageProps {
    src: string;
    alt: string;
}

export const HotelImage: React.FC<HotelImageProps> = ({ src, alt }) => {
    return (
        <AspectRatio ratio={30 / 9} className="bg-muted">
            <img
                src={src}
                alt={alt}
                className="h-full w-full rounded-md object-cover"
            />
        </AspectRatio>
    );
}