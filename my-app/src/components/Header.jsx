import React from 'react';

const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-4">
            <nav className="flex justify-between items-center">
                <div className="text-2xl font-bold">Lorem Ipsum</div>
                <ul className="flex space-x-4">
                    <li><a href="#home" className="hover:underline">Home</a></li>
                    <li><a href="#what-we-take" className="hover:underline">What We Take</a></li>
                    <li><a href="#pricing" className="hover:underline">Pricing</a></li>
                    <li><a href="#reviews" className="hover:underline">Reviews</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;