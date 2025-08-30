import React from 'react';

const HowItWorks = () => {
    return (
        <section className="py-12 text-center">
            <h2 className="text-2xl font-bold mb-6">Lorem ipsum</h2>
            <div className="flex justify-around">
                <div>
                    <div className="w-16 h-16 bg-gray-300 mx-auto mb-2"></div>
                    <h3 className="font-bold">Lorem ipsum</h3>
                    <p>Sed do eiusmod tempor incididunt</p>
                </div>
                <div>
                    <div className="w-16 h-16 bg-gray-300 mx-auto mb-2"></div>
                    <h3 className="font-bold">Lorem ipsum</h3>
                    <p>Ut labore et dolore magna aliqua</p>
                </div>
                <div>
                    <div className="w-16 h-16 bg-gray-300 mx-auto mb-2"></div>
                    <h3 className="font-bold">Lorem ipsum</h3>
                    <p>Ut enim ad minim veniam</p>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;