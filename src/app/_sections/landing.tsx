import React from 'react';
import Background from '../_components/landing/background';
const Landing = () => {
    return (
        <div className="h-screen w-screen flex flex-row">
            <Background />
            <div className="w-1/2 h-full ">
                <h1>Unlock your TV Advertising</h1>
                <div className="flex flex-row">
                    <p>
                        Connect with local businesses through innovative
                        advertising solutions
                    </p>
                    <p>
                        Connect with local businesses through innovative
                        advertising solutions
                    </p>
                </div>
            </div>
            <div className="w-1/2 h-full"></div>
        </div>
    );
};

export default Landing;
