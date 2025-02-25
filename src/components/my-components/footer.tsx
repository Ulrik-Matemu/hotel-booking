import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="footer sm:static md:sticky  bottom-0 p-2 bg-white dark:bg-black">
            <div className="container">
                <p className='text-center'>&copy; {new Date().getFullYear()} Booking Wizard. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;