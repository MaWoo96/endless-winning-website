export default function Testimonials() {
  const testimonials = [
    {
      stat: "2.4x",
      metric: "Increase in",
      detail: "Productivity",
      quote: "Troy's coaching helped us streamline operations and achieve unprecedented growth.",
      author: "Sarah Johnson",
      role: "CEO, TechCorp"
    },
    {
      stat: "95%",
      metric: "Team",
      detail: "Satisfaction",
      quote: "The ASCEND framework transformed how we approach challenges and opportunities.",
      author: "Michael Chen",
      role: "Director, Ministry Network"
    },
    {
      stat: "$2M+",
      metric: "Revenue",
      detail: "Growth",
      quote: "Working with Troy gave us the clarity and tools to scale beyond our expectations.",
      author: "Jessica Williams",
      role: "Founder, Growth Solutions"
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-dark mb-4">
              Real. Transformational. Proven Results.
            </h2>
          </div>

          {/* Testimonial Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-off-white rounded-2xl p-6 lg:p-8 hover:shadow-lg transition-shadow"
              >
                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Stats */}
                <div className="mb-4">
                  <div className="text-4xl sm:text-5xl font-bold gradient-text mb-1">
                    {testimonial.stat}
                  </div>
                  <div className="text-sm text-gray">
                    {testimonial.metric} <span className="font-semibold text-navy-dark">{testimonial.detail}</span>
                  </div>
                </div>

                {/* Quote */}
                <p className="text-sm sm:text-base text-navy-dark mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="pt-4 border-t border-gray/20">
                  <div className="font-semibold text-navy-dark text-sm">{testimonial.author}</div>
                  <div className="text-xs text-gray">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <button className="btn-primary px-8 py-3 text-sm">
              See More Success Stories
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
