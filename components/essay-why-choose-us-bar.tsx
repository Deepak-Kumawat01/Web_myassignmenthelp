export default function EssayWhyChooseUsBar() {
  const items = [
    { icon: '/plagiarism-free.png', label: 'Plagiarism Free' },
    { icon: '/100-percentage-satisfaction.png', label: '100% Satisfaction' },
    { icon: '/100-percentage-refund.png', label: '100% Refund*' },
    { icon: '/24-7-live-support.png', label: '24/7 Live Support' },
    {
      icon: '/affortable-price-in-malaysiya.png',
      label: 'Best in Industry Price',
    },
    { icon: '/native-phd-writers.png', label: 'Native PhD Writers' },
  ]

  return (
    <section className="w-full">
      {/* DESKTOP + TABLET VIEW */}
      <div className="hidden md:flex w-full">
        {/* LEFT RED BLOCK */}
        <div className="relative bg-[#e63622] text-white w-[320px] flex items-center justify-center text-center py-8 font-semibold leading-tight text-[14px]">
          WE DON'T BELIEVE IN LESS <br /> THAN 100%
          <div
            className="absolute right-[-22px] top-0 bottom-0 my-auto w-0 h-0 
            border-t-[24px] border-b-[24px] border-t-transparent border-b-transparent border-l-[22px] border-l-[#e63622]"
          />
        </div>

        {/* RIGHT BLUE BAR */}
        <div className="flex-1 bg-[#0c1635] flex items-center justify-between px-8 py-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center relative px-6"
            >
              {/* Vertical separator BETWEEN cards */}
              {idx !== 0 && (
                <div className="absolute top-1/2 -translate-y-1/2 -left-10 h-10 w-[1px] bg-white/20"></div>
              )}

              <img src={item.icon} className="w-8 h-8 mb-2 opacity-90" />
              <span className="text-white text-[14px]">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* MOBILE VIEW */}
      <div className="md:hidden w-full">
        {/* RED BLOCK FULL WIDTH */}
        <div className="bg-[#e63622] text-white text-center py-6 font-semibold text-[14px] leading-tight">
          WE DON'T BELIEVE IN LESS <br /> THAN 100%
        </div>

        {/* GRID (2 per row) */}
        <div className="bg-[#0c1635] grid grid-cols-2 gap-y-6 py-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-white text-sm"
            >
              <img src={item.icon} className="w-10 h-10 mb-2 opacity-90" />
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
