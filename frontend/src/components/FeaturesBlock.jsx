/* eslint-disable react/prop-types */
export default function FeaturesBlock({ features }) {
    return (
        <section className="px-5 py-10 bg-gray-50">
            <h2 className="text-2xl text-center font-bold text-gray-950 mb-10 font-sans">Don’t let your day doing nothing</h2>
            <div className="flex justify-center items-center w-full">
                <div className="flex justify-between items-center w-1/2">
                    {features.map((feature) => {
                        const { id, data, image } = feature;
                        return (
                            <div key={id} className="flex flex-col justify-center items-center gap-4 text-gray-800 hover:text-gray-800 hover:scale-105 transition-transform duration-300">
                                <img
                                    src={image}
                                    alt={"Feature image"}
                                    className="w-14 h-14"
                                />
                                <p className="text-lg font-semibold">{data}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}