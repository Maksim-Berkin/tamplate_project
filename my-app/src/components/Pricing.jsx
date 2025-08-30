import React from 'react';

const Pricing = () => {
    return (
        <section className="py-12 text-center">
            <h2 className="text-2xl font-bold mb-6">Lorem ipsum</h2>
            <div className="flex justify-center mb-4">
                <div className="w-64 h-32 bg-gray-300 mr-4"></div>
            </div>
            <p>Lorem ipsum dolor sit amet</p>
            <div className="mt-4 space-x-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded">150$</button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">500$</button>
            </div>
            <button className="bg-orange-500 text-white px-4 py-2 rounded mt-4">Get a Quote</button>
        </section>
    );
};

export default Pricing;