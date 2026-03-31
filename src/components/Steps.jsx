import { User, Package, Rocket } from "lucide-react";


const Steps = () => {
    const steps = [
        {
            id: 1,
            title: "Create Account",
            desc: "Sign up for free in seconds. No credit card required to get started.",
            icon: <User size={50} />,
        },
        {
            id: 2,
            title: "Choose Product",
            desc: "Browse our catalog and select the tools that fit your needs.",
            icon: <Package size={50}/>,
        },
        {
            id: 3,
            title: "Start Using",
            desc: "Download and start using your premium tools immediately.",
            icon: <Rocket size={50}/>,
        },
    ];

    return (

        <section>
            <h1 className="text-5xl font-bold text-center mb-4 mt-4 pt-25">Get Started in 3 Steps</h1>
            <p className="text-gray-500 text-center mb-8">Start using premium digital tools in minutes, not hours.</p>
            <div className=" py-16">
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-6">
                    {steps.map((s, i) => (
                        <div
                            key={i}
                            className="relative bg-white p-6 pt-10 rounded-2xl text-center shadow-md hover:shadow-xl transition duration-300 border border-gray-100"
                        >

                            <div className="absolute top-3 right-3 bg-violet-600 text-white w-7 h-7 flex items-center justify-center rounded-full text-xs font-bold">
                                {s.id}
                            </div>

                            <div className="text-violet-600 mt-6 mb-3 flex justify-center text-3xl">
                                {s.icon}
                            </div>

                            
                            <h3 className="font-bold text-lg text-gray-800">
                                {s.title}
                            </h3>

                            
                            <p className="text-gray-500 text-sm mt-2">
                                {s.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

        </section>

    );
};

export default Steps;