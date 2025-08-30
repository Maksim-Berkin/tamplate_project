import React from 'react';

const Hero = () => {
    return (
        <section className="bg-gray-200 text-center py-12">
            <h1 className="text-4xl font-bold mb-4">Lorem ipsum dolor sit amet</h1>
            <p className="text-lg mb-4">Consectetur adipiscing elit</p>
            <div className="space-x-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Book Online</button>
                <button className="bg-green-500 text-white px-4 py-2 rounded">Free Quote</button>
            </div>
        </section>
    );
};

export default Hero;