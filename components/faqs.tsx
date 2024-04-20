export default function Faqs() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
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
                <p className="text-slate-500">
                </p>
              </div>
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-2xl font-hkgrotesk font-medium">
                  Infrastructure configuration and management
                </h4>
                <p className="text-slate-500">
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/2 space-y-8">
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-2xl font-hkgrotesk font-medium">
                  Big data processing and management
                </h4>
                <p className="text-slate-500">
                </p>
              </div>
              {/* Column */}
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-2xl font-hkgrotesk font-medium">
                  Data visualisation and reporting
                </h4>
                <p className="text-slate-500">
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
