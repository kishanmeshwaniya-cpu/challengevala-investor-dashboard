export default function ChallengevalaTraderDashboard() {
  const stats = [
    { label: 'Final Capital', value: '₹10,58,523', growth: '+2017%' },
    { label: 'Profit Factor', value: '1.47', growth: 'Strong' },
    { label: 'Win Rate', value: '43.17%', growth: 'Stable' },
    { label: 'Total Points', value: '15,515+', growth: 'NIFTY 50' },
  ];

  const yearly = [
    { year: '2021', pnl: '₹2.10L', points: '3,442', trades: '96' },
    { year: '2022', pnl: '₹1.82L', points: '2,995', trades: '103' },
    { year: '2023', pnl: '₹3.46L', points: '4,623', trades: '121' },
    { year: '2024', pnl: '₹1.26L', points: '1,691', trades: '98' },
    { year: '2025', pnl: '₹3.78L', points: '5,049', trades: '131' },
  ];

  const trades = [
    {
      id: '#204',
      side: 'LONG',
      pnl: '+₹84,347',
      roi: '107.89%',
      duration: '195h',
    },
    {
      id: '#318',
      side: 'SHORT',
      pnl: '+₹45,168',
      roi: '95.14%',
      duration: '186h',
    },
    {
      id: '#422',
      side: 'LONG',
      pnl: '-₹10,874',
      roi: '-11.74%',
      duration: '3.75h',
    },
    {
      id: '#501',
      side: 'SHORT',
      pnl: '+₹1,01,383',
      roi: '128.43%',
      duration: '242h',
    },
  ];

  return (
    <div className="min-h-screen bg-[#08111f] text-white overflow-hidden">
      {/* HERO */}
      <div className="relative border-b border-white/10 bg-gradient-to-br from-[#b8e35a]/20 via-[#08111f] to-[#2143d6]/20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="space-y-6 max-w-3xl">
              <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm">
                <div className="w-2 h-2 rounded-full bg-[#b8e35a] animate-pulse" />
                Institutional Grade Quant Strategy
              </div>

              <div>
                <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight">
                  Challengevala
                  <span className="text-[#b8e35a]"> Trader</span>
                </h1>

                <p className="text-xl text-slate-300 mt-6 leading-relaxed">
                  Professional NIFTY 50 Trend-Following Algo Dashboard designed for
                  investor due diligence, capital allocation meetings, and
                  institutional performance presentation.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <button className="bg-[#b8e35a] hover:bg-[#c6ef69] text-black font-bold px-6 py-3 rounded-2xl transition-all shadow-2xl shadow-[#b8e35a]/20">
                  View Strategy Metrics
                </button>

                <button className="border border-white/15 hover:border-[#b8e35a]/60 hover:bg-white/5 px-6 py-3 rounded-2xl transition-all">
                  Trade Verification
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-[#b8e35a]/30 blur-3xl rounded-full" />

              <div className="relative bg-gradient-to-br from-[#b8e35a] to-[#9bc944] w-72 h-72 rounded-[50px] flex items-center justify-center shadow-2xl border border-white/20">
                <span className="text-[160px] font-black text-[#1736c8] leading-none">
                  T
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {stats.map((item) => (
            <div
              key={item.label}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:border-[#b8e35a]/50 transition-all hover:-translate-y-1"
            >
              <div className="text-slate-400 text-sm">{item.label}</div>

              <div className="text-4xl font-black mt-4 tracking-tight">
                {item.value}
              </div>

              <div className="mt-4 inline-flex bg-[#b8e35a]/10 text-[#b8e35a] px-3 py-1 rounded-full text-sm font-semibold border border-[#b8e35a]/20">
                {item.growth}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PERFORMANCE */}
      <div className="max-w-7xl mx-auto px-6 py-6 grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold">Capital Growth Curve</h2>
              <p className="text-slate-400 mt-1">
                5 Year Strategy Performance
              </p>
            </div>

            <div className="bg-[#b8e35a]/10 text-[#b8e35a] border border-[#b8e35a]/20 px-4 py-2 rounded-2xl text-sm font-semibold">
              CAGR Optimized
            </div>
          </div>

          <div className="h-[320px] rounded-3xl bg-gradient-to-br from-[#0e1d37] to-[#09101b] border border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_rgba(184,227,90,0.3),_transparent_60%)]" />

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
                Final Capital Projection
              </div>
            </div>
          </div>
        </div>

        {/* RISK */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
          <h2 className="text-2xl font-bold mb-6">Risk Metrics</h2>

          <div className="space-y-5">
            {[
              ['Max Drawdown', '₹1.92L'],
              ['Avg ROI / Trade', '8.4%'],
              ['Winning Trades', '237'],
              ['Losing Trades', '312'],
              ['Best Trade', '₹1.01L'],
            ].map(([k, v]) => (
              <div
                key={k}
                className="flex items-center justify-between border-b border-white/5 pb-3"
              >
                <span className="text-slate-400">{k}</span>
                <span className="font-bold text-lg">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* YEARLY */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden">
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">Year Wise Analytics</h2>
              <p className="text-slate-400 mt-1">
                Institutional Performance Breakdown
              </p>
            </div>

            <div className="text-sm bg-[#2143d6]/20 border border-[#2143d6]/30 px-4 py-2 rounded-2xl text-[#7fa0ff]">
              Verified Backtest Data
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#0d1728] text-left text-sm text-slate-400">
                <tr>
                  <th className="px-6 py-4">Year</th>
                  <th className="px-6 py-4">Points</th>
                  <th className="px-6 py-4">PnL</th>
                  <th className="px-6 py-4">Consistency</th>
                  <th className="px-6 py-4">Status</th>
                </tr>
              </thead>

              <tbody>
                {yearly.map((y) => (
                  <tr
                    key={y.year}
                    className="border-t border-white/5 hover:bg-white/5 transition-all"
                  >
                    <td className="px-6 py-5 font-bold text-lg">{y.year}</td>
                    <td className="px-6 py-5">{y.points}</td>
                    <td className="px-6 py-5 font-semibold text-[#b8e35a]">
                      {y.pnl}
                    </td>
                    <td className="px-6 py-5">
                      <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-[#b8e35a] to-[#2143d6] h-full rounded-full"
                          style={{ width: `${70 + Number(y.year.slice(-1)) * 4}%` }}
                        />
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <span className="bg-[#b8e35a]/10 border border-[#b8e35a]/20 text-[#b8e35a] px-3 py-1 rounded-full text-sm">
                        Profitable
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* TRADE EXPLORER */}
      <div className="max-w-7xl mx-auto px-6 py-6 pb-20">
        <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden">
          <div className="p-6 border-b border-white/10 flex items-center justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-2xl font-bold">Trade Verification Explorer</h2>
              <p className="text-slate-400 mt-1">
                Investor transparency & manual verification system
              </p>
            </div>

            <div className="flex gap-3 flex-wrap">
              <button className="bg-white/5 border border-white/10 px-4 py-2 rounded-2xl hover:border-[#b8e35a]/40 transition-all text-sm">
                LONG Trades
              </button>

              <button className="bg-white/5 border border-white/10 px-4 py-2 rounded-2xl hover:border-[#2143d6]/40 transition-all text-sm">
                SHORT Trades
              </button>

              <button className="bg-[#b8e35a] text-black px-4 py-2 rounded-2xl font-semibold text-sm">
                Verified Entries
              </button>
            </div>
          </div>

          <div className="divide-y divide-white/5">
            {trades.map((trade) => (
              <div
                key={trade.id}
                className="p-6 hover:bg-white/5 transition-all"
              >
                <div className="grid lg:grid-cols-5 gap-6 items-center">
                  <div>
                    <div className="text-slate-400 text-sm">Trade ID</div>
                    <div className="text-2xl font-black mt-1">
                      {trade.id}
                    </div>
                  </div>

                  <div>
                    <div className="text-slate-400 text-sm">Direction</div>
                    <div
                      className={`mt-1 inline-flex px-3 py-1 rounded-full text-sm font-semibold ${
                        trade.side === 'LONG'
                          ? 'bg-[#b8e35a]/10 text-[#b8e35a]'
                          : 'bg-[#2143d6]/20 text-[#8ea8ff]'
                      }`}
                    >
                      {trade.side}
                    </div>
                  </div>

                  <div>
                    <div className="text-slate-400 text-sm">PnL</div>
                    <div
                      className={`text-2xl font-black mt-1 ${
                        trade.pnl.startsWith('-')
                          ? 'text-red-400'
                          : 'text-[#b8e35a]'
                      }`}
                    >
                      {trade.pnl}
                    </div>
                  </div>

                  <div>
                    <div className="text-slate-400 text-sm">ROI</div>
                    <div className="text-xl font-bold mt-1">{trade.roi}</div>
                  </div>

                  <div>
                    <div className="text-slate-400 text-sm">Holding</div>
                    <div className="text-xl font-bold mt-1">
                      {trade.duration}
                    </div>
                  </div>
                </div>

                <div className="mt-6 h-24 rounded-2xl bg-gradient-to-r from-[#0d1728] to-[#101d35] border border-white/5 relative overflow-hidden">
                  <svg viewBox="0 0 800 100" className="w-full h-full opacity-80">
                    <path
                      d="M0 70 C80 65, 120 30, 180 35 C240 40, 320 90, 420 50 C500 20, 600 30, 800 10"
                      fill="none"
                      stroke={trade.pnl.startsWith('-') ? '#ef4444' : '#b8e35a'}
                      strokeWidth="4"
                    />
                  </svg>

                  <div className="absolute top-3 left-3 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-xs border border-white/10">
                    Trade Verification Chart
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
