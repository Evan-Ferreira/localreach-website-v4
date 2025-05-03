const Background = () => {
    return (
        <div className="absolute h-screen w-screen -z-10">
            {' '}
            <video
                src={'landing-background.mp4'}
                autoPlay
                muted
                loop
                className="w-full h-full object-cover"
            />
            <div className="w-full h-full absolute bg-[#080808] opacity-30"></div>
            <div
                className="absolute inset-0 bg-gradient-to-b from-transparent 
    via-background/10 via-20%
    via-background/25 via-35%
    via-background/45 via-50%
    via-background/65 via-65%
    via-background/85 via-80%
    to-background"
            ></div>
        </div>
    );
};

export default Background;
