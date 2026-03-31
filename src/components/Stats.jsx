const Stats = () => {
  const data = [
    { v: "50K+", l: " Active Users" },
    { v: "200+", l: "Premium Tools" },
    { v: "4.9", l: "Rating" },
  ];

  return (
    <div className="bg-linear-to-r from-violet-400 to-purple-600 py-15 text-white">
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
    {data.map((d, i) => (
  <div
    key={i}
    className={`px-6 ${
      i !== data.length - 1 ? "border-r border-white/30" : ""
    }`}
  >
    <h2 className="text-4xl font-bold">{d.v}</h2>
    <p>{d.l}</p>
  </div>
))}
  </div>
</div>
  );
};

export default Stats;