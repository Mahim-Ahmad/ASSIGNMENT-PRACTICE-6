import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: 0,
      desc: "Perfect for beginners",
      features: [
        "10 free tools",
        "Custom tools",
        "Basic templates",
        "Community support",
      ],
    },
    {
      name: "Pro",
      price: 29,
      badge: "Most Popular",
      highlight: true,
      desc: "Best for professionals",
      features: [
        "All premium tools",
        "Unlimited templates",
        "Priority support",
        "Analytics",
      ],
    },
    {
      name: "Enterprise",
      price: 99,
      desc: "For teams",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Custom tools",
        "Dedicated support",
      ],
    },
  ];

  return (
    <section className="bg-white py-16">

      <div className="text-center mb-12">
        <h2 className="text-6xl font-bold mb-4">Simple, Transparent Pricing</h2>
        <p className="text-gray-500">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-6">

        {plans.map((p, i) => (
          <div
            key={i}
            className={`p-8 rounded-2xl border relative ${
              p.highlight
                ? "bg-violet-600 text-white scale-105 shadow-xl"
                : "bg-white"
            }`}
          >

            {p.badge && (
              <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-yellow-100 text-orange-500 text-xs px-3 py-1 rounded-full">
                {p.badge}
              </span>
            )}

            <h3 className="text-xl font-bold">{p.name}</h3>
            <p className="text-sm mb-4">{p.desc}</p>

            <h2 className="text-4xl font-extrabold mb-4">
              ${p.price}/mo
            </h2>

            <ul className="text-sm space-y-2 mb-6">
              {p.features.map((f, idx) => (
                <li key={idx} className="flex items-center gap-2 ">
                  <Check size={16} /> {f}
                </li>
              ))}
            </ul>

            <button
              className={`px-6 py-2 rounded-full font-bold ${
                p.highlight
                  ? "bg-white text-violet-600"
                  : "bg-violet-600 text-white"
              }`}
            >
              Get Started
            </button>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Pricing;