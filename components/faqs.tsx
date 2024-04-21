export default function Faqs() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="pb-12 md:pb-20">
            <h2 className="h2 text-center font-hkgrotesk">Our Services</h2>
          </div>
          {/* Columns */}
          <div className="md:flex md:space-x-12 space-y-8 md:space-y-0">
            {/* Column */}
            <div className="w-full md:w-1/2 space-y-8">
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-2xl font-hkgrotesk font-medium">
                  Data strategy
                </h4>
                <p className="text-slate-400">
                  Develop a comprehensive data strategy tailored to your
                  business objectives. We help you identify key data sources,
                  define actionable insights, and set up a scalable framework to
                  ensure data is leveraged across your organization for maximum
                  impact.
                </p>
              </div>
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-2xl font-hkgrotesk font-medium">
                  Infrastructure configuration and management
                </h4>
                <p className="text-slate-400">
                  Build and maintain robust data infrastructure that supports
                  your business operations. From cloud solutions to on-premises
                  setups, we ensure your data storage, processing, and data flow
                  management are optimized for security, scalability, and
                  performance.
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/2 space-y-8">
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-2xl font-hkgrotesk font-medium">
                  Big data processing and management
                </h4>
                <p className="text-slate-400">
                  Handle vast amounts of data efficiently with our big data
                  processing solutions. We specialize in implementing
                  high-performance architectures that manage, store, and analyze
                  large datasets, enabling real-time data insights and
                  decision-making.
                </p>
              </div>
              {/* Column */}
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-2xl font-hkgrotesk font-medium">
                  Data visualisation and reporting
                </h4>
                <p className="text-slate-400">
                  Transform your data into actionable insights through intuitive
                  visualizations and comprehensive reporting. Our custom
                  dashboards and reports are designed to make complex data
                  easily understandable, helping stakeholders make informed
                  decisions quickly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
