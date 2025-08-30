import React from 'react';

const BookRemoval = () => {
    return (
        <section className="py-12 text-center bg-gray-200">
            <h2 className="text-2xl font-bold mb-6">Lorem ipsum</h2>
            <form className="max-w-md mx-auto space-y-4">
                <input type="text" placeholder="Name" className="w-full p-2 border" />
                <input type="text" placeholder="Phone" className="w-full p-2 border" />
                <input type="text" placeholder="Postal code, e.g. S7N 3G6" className="w-full p-2 border" />
                <button type="button" className="bg-orange-500 text-white px-4 py-2 rounded">Book Now</button>
            </form>
        </section>
    );
};

export default BookRemoval;