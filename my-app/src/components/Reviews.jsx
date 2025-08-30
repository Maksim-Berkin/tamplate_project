import React from 'react';

const Reviews = () => {
    return (
        <section className="py-12 text-center">
            <h2 className="text-2xl font-bold mb-6">Lorem ipsum</h2>
            <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
                <div className="bg-orange-100 p-4">
                    <p>Lorem ipsum dolor sit amet</p>
                    <div className="flex items-center mt-2">
                        <div className="w-10 h-10 bg-gray-300 rounded-full mr-2"></div>
                        <div>
                            <p className="font-bold">Lorem Ipsum</p>
                            <div className="flex text-yellow-500">★★★★★</div>
                        </div>
                    </div>
                </div>
                <div className="bg-orange-100 p-4">
                    <p>Lorem ipsum dolor sit amet</p>
                    <div className="flex items-center mt-2">
                        <div className="w-10 h-10 bg-gray-300 rounded-full mr-2"></div>
                        <div>
                            <p className="font-bold">Lorem Ipsum</p>
                            <div className="flex text-yellow-500">★★★★★</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;