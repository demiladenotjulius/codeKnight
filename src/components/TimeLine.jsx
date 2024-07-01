const TimelineItem = ({ dateRange, location, title, description, circleColor }) => {
    return (
        <div className="w-full flex md:justify-between gap-4 mb-2 text-[#171717] h-full">
            <div className="hidden md:flex flex-col gap-4">
                <p className={`${circleColor == 'green' ? 'text-[#126D1F]' : circleColor == 'red' ? 'text-[#6D1212]' : 'text-[#005BE3]'} font-bold text-3xl`}>{location}</p>
                <p className="text-2xl">{dateRange}</p>
            </div>
            <div className="flex flex-col items-center min-h-full">
                <div className={`relative flex items-center justify-center`}>
                    <div className={`${circleColor == 'green' ? 'bg-[#126D1F]' : circleColor == 'red' ? 'bg-[#6D1212]' : 'bg-[#005BE3]'} w-10 h-10 rounded-full`}></div>
                    <div className={`${circleColor == 'green' ? 'border-[#126D1F]' : circleColor == 'red' ? 'border-[#6D1212]' : 'border-[#005BE3]'} absolute -top-[4px] -left-[4px] w-12 h-12 rounded-full border-2 border-dashed `}></div>
                </div>
                <div className={`${circleColor == 'green' ? 'border-[#126D1F]' : circleColor == 'red' ? 'border-[#6D1212]' : 'border-[#005BE3]'} w-px h-[calc(100%-48px)] border-l border-dashed top-2 relative `}></div>
            </div>
            <div className="md:w-[40%] break-words h-full flex flex-col">
                <h4 className={`${circleColor == 'green' ? 'text-[#126D1F]' : circleColor == 'red' ? 'text-[#6D1212]' : 'text-[#005BE3]'} font-bold text-base md:text-3xl `}>{title}</h4>
                <p className="text-gray-700 text-sm md:text-2xl">{description}</p>
                <p className={`${circleColor == 'green' ? 'text-[#126D1F]' : circleColor == 'red' ? 'text-[#6D1212]' : 'text-[#005BE3]'} font-semibold text-base md:hidden`}>{location}</p>
                <p className="text-gray-600 text-sm md:hidden">{dateRange}</p>
            </div>
        </div>
    );
};

export default TimelineItem;