
export default function App() {
  const stats = [
    { label: 'Final Capital', value: '₹10,58,523' },
    { label: 'Profit Factor', value: '1.47' },
    { label: 'Win Rate', value: '43.17%' },
    { label: 'Total Points', value: '15,515+' },
  ]

  return (
    <div className="min-h-screen bg-[#08111f] text-white">
      <div className="bg-gradient-to-br from-[#b8e35a]/20 via-[#08111f] to-[#2143d6]/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm mb-6">
                <div className="w-2 h-2 rounded-full bg-[#b8e35a] animate-pulse"></div>
                Institutional Quant Dashboard
              </div>

              <h1 className="text-6xl font-black leading-tight">
                Challengevala
                <span className="text-[#b8e35a]"> Trader</span>
              </h1>

              <p className="text-slate-300 text-xl mt-6 leading-relaxed">
                Investor-grade NIFTY 50 algo dashboard with trade verification,
                analytics, risk metrics, and institutional reporting.
              </p>

              <div className="flex gap-4 mt-8 flex-wrap">
                <button className="bg-[#b8e35a] text-black px-6 py-3 rounded-2xl font-bold">
                  Investor Metrics
                </button>

                <button className="border border-white/15 px-6 py-3 rounded-2xl">
                  Trade Explorer
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-[#b8e35a]/30 blur-3xl rounded-full"></div>

              <div className="relative bg-gradient-to-br from-[#b8e35a] to-[#9fd449] w-72 h-72 rounded-[50px] flex items-center justify-center">
                <span className="text-[160px] font-black text-[#1736c8]">T</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {stats.map((item) => (
            <div
              key={item.label}
              className="bg-white/5 border border-white/10 rounded-3xl p-6"
            >
              <div className="text-slate-400 text-sm">{item.label}</div>

              <div className="text-4xl font-black mt-4">{item.value}</div>

              <div className="mt-4 inline-flex bg-[#b8e35a]/10 text-[#b8e35a] px-3 py-1 rounded-full text-sm border border-[#b8e35a]/20">
                Verified
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-6">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold">Capital Growth Curve</h2>
                <p className="text-slate-400 mt-1">
                  5 Year Institutional Performance
                </p>
              </div>

              <div className="bg-[#b8e35a]/10 text-[#b8e35a] border border-[#b8e35a]/20 px-4 py-2 rounded-2xl text-sm">
                CAGR Optimized
              </div>
            </div>

            <div className="h-[320px] rounded-3xl bg-gradient-to-br from-[#0e1d37] to-[#09101b] border border-white/5 relative overflow-hidden">
              <svg viewBox="0 0 800 300" className="w-full h-full">
                <defs>
                  <linearGradient id="line" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#b8e35a" />
                    <stop offset="100%" stopColor="#2143d6" />
                  </linearGradient>
                </defs>

                <path
                  d="M0 250 C100 230, 150 210, 220 190 C320 140, 350 170, 420 120 C500 70, 600 90, 800 20"
                  fill="none"
                  stroke="url(#line)"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>

              <div className="absolute bottom-6 left-6 text-sm text-slate-400">
                Starting Capital → ₹50,000
              </div>

              <div className="absolute top-6 right-6 text-right">
                <div className="text-[#b8e35a] text-4xl font-black">
                  ₹10.5L+
                </div>
                <div className="text-slate-400 text-sm">
                  Final Capital
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <h2 className="text-2xl font-bold mb-6">Risk Metrics</h2>

            <div className="space-y-5">
              {[
                ['Max Drawdown', '₹1.92L'],
                ['Avg ROI / Trade', '8.4%'],
                ['Winning Trades', '237'],
                ['Profit Factor', '1.47'],
                ['Best Trade', '₹1.01L'],
              ].map(([k, v]) => (
                <div key={k} className="flex items-center justify-between border-b border-white/5 pb-3">
                  <span className="text-slate-400">{k}</span>
                  <span className="font-bold text-lg">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 bg-white/5 border border-white/10 rounded-3xl overflow-hidden">
          <div className="p-6 border-b border-white/10">
            <h2 className="text-2xl font-bold">Trade Verification Explorer</h2>
            <p className="text-slate-400 mt-1">
              Investor transparency & manual verification
            </p>
          </div>

          <div className="divide-y divide-white/5">
            {[1,2,3].map((id) => (
              <div key={id} className="p-6 hover:bg-white/5 transition-all">
                <div className="grid lg:grid-cols-5 gap-6">
                  <div>
                    <div className="text-slate-400 text-sm">Trade ID</div>
                    <div className="text-2xl font-black mt-1">#{id}0{id}</div>
                  </div>

                  <div>
                    <div className="text-slate-400 text-sm">Direction</div>
                    <div className="mt-1 inline-flex px-3 py-1 rounded-full text-sm font-semibold bg-[#b8e35a]/10 text-[#b8e35a]">
                      LONG
                    </div>
                  </div>

                  <div>
                    <div className="text-slate-400 text-sm">PnL</div>
                    <div className="text-2xl font-black mt-1 text-[#b8e35a]">
                      +₹84,347
                    </div>
                  </div>

                  <div>
                    <div className="text-slate-400 text-sm">ROI</div>
                    <div className="text-xl font-bold mt-1">107%</div>
                  </div>

                  <div>
                    <div className="text-slate-400 text-sm">Holding</div>
                    <div className="text-xl font-bold mt-1">195h</div>
                  </div>
                </div>

                <div className="mt-6 h-24 rounded-2xl bg-gradient-to-r from-[#0d1728] to-[#101d35] border border-white/5 overflow-hidden">
                  <svg viewBox="0 0 800 100" className="w-full h-full">
                    <path
                      d="M0 70 C80 65, 120 30, 180 35 C240 40, 320 90, 420 50 C500 20, 600 30, 800 10"
                      fill="none"
                      stroke="#b8e35a"
                      strokeWidth="4"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
