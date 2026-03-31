const CTA = () => {
return (
    <section className="bg-linear-to-r from-violet-600 to-purple-600 py-20 text-center text-white">

        <h2 className="text-5xl font-bold mb-4">
            Ready to Transform Your Workflow?
        </h2>

        <p className="text-violet-200 mb-8">
            Join thousands of professionals who are already using Digitools to work smarter.<br />Start your free trial today.
        </p>

        <div className="flex justify-center gap-4">
            <button className="bg-white text-violet-600 px-6 py-2 rounded-full font-bold">
                Explore Products
            </button>

            <button className="border border-white px-6 py-2 rounded-full">
                View Pricing
            </button>
        </div>


        <p className="text-violet-200 mt-6 text-xl">
            No credit card required. Start your free trial today.
        </p>

    </section>
);
};

export default CTA;