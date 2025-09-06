export default function StatsSection() {
  const stats = [
    { number: "150+", label: "Projects Completed", color: "primary" },
    { number: "98%", label: "Client Satisfaction", color: "secondary" },
    { number: "5+", label: "Years Experience", color: "primary" },
    { number: "24/7", label: "Support Available", color: "secondary" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={stat.label} className="animate-slide-up" data-testid={`stat-${index}`}>
              <div className={`text-4xl md:text-5xl font-bold mb-2 ${
                stat.color === 'primary' ? 'text-primary' : 'text-secondary'
              }`}>
                {stat.number}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
