import { useMemo, useState } from "react";
import trades from "./data/trades.json";
import monthlyData from "./data/monthlyData.json";

export default function App() {
  const [selectedYear, setSelectedYear] = useState("2024");
  const [startingCapital, setStartingCapital] = useState(100000);

  const yearlyData = monthlyData[selectedYear] || [];

  const analytics = useMemo(() => {
    if (!yearlyData.length) return null;

    const totalTrades = yearlyData.reduce((a, b) => a + b.trades, 0);

    const avgWinRate =
      yearlyData.reduce((a, b) => a + b.winRate, 0) /
      yearlyData.length;

    const totalPnL = yearlyData.reduce((a, b) => a + b.pnl, 0);

    const avgDrawdown =
      yearlyData.reduce((a, b) => a + b.drawdown, 0) /
      yearlyData.length;

    const finalCapital = startingCapital + totalPnL;

    const roi = ((totalPnL / startingCapital) * 100).toFixed(1);

    return {
      totalTrades,
      avgWinRate: avgWinRate.toFixed(1),
      totalPnL,
      avgDrawdown: avgDrawdown.toFixed(1),
      finalCapital,
      roi,
    };
  }, [yearlyData, startingCapital]);

  return (
    <div
      style={{
        background: "#050816",
        minHeight: "100vh",
        color: "white",
        fontFamily: "Inter, sans-serif",
        display: "flex",
      }}
    >
      {/* SIDEBAR */}

      <div
        style={{
          width: "240px",
          background: "rgba(15,18,35,0.9)",
          borderRight: "1px solid rgba(255,255,255,0.06)",
          padding: "30px 20px",
          position: "sticky",
          top: 0,
          height: "100vh",
          backdropFilter: "blur(12px)",
        }}
      >
        <div
          style={{
            fontSize: "28px",
            fontWeight: 800,
            marginBottom: "50px",
            letterSpacing: "-1px",
          }}
        >
          Challengevala
        </div>

        <div
          style={{
            color: "#95a2bf",
            marginBottom: "20px",
            fontSize: "13px",
            textTransform: "uppercase",
            letterSpacing: "2px",
          }}
        >
          Analytics
        </div>

        {[
          "Overview",
          "Performance",
          "Equity Curve",
          "Monthly Analytics",
          "Trade Verification",
        ].map((item) => (
          <div
            key={item}
            style={{
              padding: "14px 16px",
              borderRadius: "14px",
              marginBottom: "10px",
              background:
                item === "Overview"
                  ? "linear-gradient(135deg,#d4ff00,#84ff00)"
                  : "transparent",
              color: item === "Overview" ? "#050816" : "#c7d2ea",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            {item}
          </div>
        ))}
      </div>

      {/* MAIN */}

      <div
        style={{
          flex: 1,
          padding: "40px",
        }}
      >
        {/* HERO */}

        <div
          style={{
            background:
              "linear-gradient(135deg, rgba(24,28,56,0.95), rgba(10,12,25,0.92))",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "32px",
            padding: "40px",
            marginBottom: "30px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "400px",
              height: "400px",
              borderRadius: "50%",
              background: "rgba(190,255,0,0.08)",
              right: "-120px",
              top: "-120px",
              filter: "blur(80px)",
            }}
          />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "30px",
              flexWrap: "wrap",
            }}
          >
            <div>
              <div
                style={{
                  color: "#d4ff00",
                  fontWeight: 700,
                  marginBottom: "12px",
                  letterSpacing: "1px",
                }}
              >
                INSTITUTIONAL PERFORMANCE DASHBOARD
              </div>

              <h1
                style={{
                  fontSize: "56px",
                  lineHeight: 1,
                  margin: 0,
                  marginBottom: "18px",
                  maxWidth: "700px",
                  letterSpacing: "-3px",
                }}
              >
                Quant Strategy Analytics
              </h1>

              <p
                style={{
                  color: "#94a3b8",
                  maxWidth: "650px",
                  fontSize: "17px",
                  lineHeight: 1.8,
                }}
              >
                Institutional-grade investor reporting dashboard designed for
                professional strategy presentation, capital analytics, and
                verified performance tracking.
              </p>
            </div>

            <div
              style={{
                display: "flex",
                gap: "16px",
                alignItems: "flex-start",
                flexWrap: "wrap",
              }}
            >
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                style={selectStyle}
              >
                <option>2022</option>
                <option>2023</option>
                <option>2024</option>
              </select>

              <select
                value={startingCapital}
                onChange={(e) =>
                  setStartingCapital(Number(e.target.value))
                }
                style={selectStyle}
              >
                <option value={100000}>₹1,00,000</option>
                <option value={500000}>₹5,00,000</option>
                <option value={1000000}>₹10,00,000</option>
                <option value={5000000}>₹50,00,000</option>
              </select>
            </div>
          </div>
        </div>

        {/* METRICS */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
            gap: "22px",
            marginBottom: "30px",
          }}
        >
          <MetricCard
            title="Final Capital"
            value={`₹${analytics?.finalCapital.toLocaleString()}`}
            change="+ Institutional Growth"
          />

          <MetricCard
            title="ROI"
            value={`${analytics?.roi}%`}
            change="+ Annual Return"
          />

          <MetricCard
            title="Win Rate"
            value={`${analytics?.avgWinRate}%`}
            change="High Probability"
          />

          <MetricCard
            title="Drawdown"
            value={`${analytics?.avgDrawdown}%`}
            change="Risk Controlled"
          />
        </div>

        {/* EQUITY CURVE */}

        <div
          style={{
            background: "rgba(15,18,35,0.85)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "30px",
            padding: "32px",
            marginBottom: "30px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "28px",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            <div>
              <div
                style={{
                  color: "#d4ff00",
                  marginBottom: "10px",
                  fontWeight: 700,
                }}
              >
                EQUITY PERFORMANCE
              </div>

              <h2
                style={{
                  margin: 0,
                  fontSize: "34px",
                  letterSpacing: "-1px",
                }}
              >
                Institutional Equity Curve
              </h2>
            </div>

            <div
              style={{
                color: "#8ea0c0",
                fontSize: "14px",
              }}
            >
              Realistic compounded growth visualization
            </div>
          </div>

          <div
            style={{
              height: "320px",
              display: "flex",
              alignItems: "flex-end",
              gap: "14px",
            }}
          >
            {yearlyData.map((item) => (
              <div
                key={item.month}
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    borderRadius: "16px 16px 6px 6px",
                    background:
                      "linear-gradient(180deg,#d4ff00 0%, #6dff33 100%)",
                    height: `${item.roi * 18}px`,
                    boxShadow: "0 0 30px rgba(190,255,0,0.18)",
                  }}
                />

                <div
                  style={{
                    marginTop: "12px",
                    color: "#8ea0c0",
                    fontSize: "13px",
                  }}
                >
                  {item.month}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MONTHLY ANALYTICS */}

        <div
          style={{
            background: "rgba(15,18,35,0.85)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "30px",
            padding: "30px",
            marginBottom: "30px",
          }}
        >
          <div
            style={{
              marginBottom: "26px",
            }}
          >
            <div
              style={{
                color: "#d4ff00",
                marginBottom: "10px",
                fontWeight: 700,
              }}
            >
              MONTHLY ANALYTICS
            </div>

            <h2
              style={{
                margin: 0,
                fontSize: "34px",
                letterSpacing: "-1px",
              }}
            >
              Strategy Monthly Breakdown
            </h2>
          </div>

          <div
            style={{
              overflowX: "auto",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
              }}
            >
              <thead>
                <tr
                  style={{
                    color: "#7f90b0",
                    textAlign: "left",
                    fontSize: "13px",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  <th style={thStyle}>Month</th>
                  <th style={thStyle}>Trades</th>
                  <th style={thStyle}>Win Rate</th>
                  <th style={thStyle}>ROI</th>
                  <th style={thStyle}>Drawdown</th>
                  <th style={thStyle}>Equity</th>
                </tr>
              </thead>

              <tbody>
                {yearlyData.map((item) => (
                  <tr
                    key={item.month}
                    style={{
                      borderTop: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    <td style={tdStyle}>{item.month}</td>

                    <td style={tdStyle}>{item.trades}</td>

                    <td
                      style={{
                        ...tdStyle,
                        color: "#d4ff00",
                        fontWeight: 700,
                      }}
                    >
                      {item.winRate}%
                    </td>

                    <td style={tdStyle}>+{item.roi}%</td>

                    <td style={tdStyle}>{item.drawdown}%</td>

                    <td style={tdStyle}>
                      ₹{item.equity.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* TRADE VERIFICATION */}

        <div
          style={{
            background: "rgba(15,18,35,0.85)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "30px",
            padding: "30px",
          }}
        >
          <div
            style={{
              marginBottom: "24px",
            }}
          >
            <div
              style={{
                color: "#d4ff00",
                marginBottom: "10px",
                fontWeight: 700,
              }}
            >
              VERIFIED TRADES
            </div>

            <h2
              style={{
                margin: 0,
                fontSize: "34px",
                letterSpacing: "-1px",
              }}
            >
              Trade Verification Ledger
            </h2>
          </div>

          <div
            style={{
              overflowX: "auto",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
              }}
            >
              <thead>
                <tr
                  style={{
                    color: "#7f90b0",
                    textAlign: "left",
                    fontSize: "13px",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  <th style={thStyle}>Date</th>
                  <th style={thStyle}>Symbol</th>
                  <th style={thStyle}>Direction</th>
                  <th style={thStyle}>PnL</th>
                  <th style={thStyle}>Status</th>
                </tr>
              </thead>

              <tbody>
                {trades.slice(0, 10).map((trade, index) => (
                  <tr
                    key={index}
                    style={{
                      borderTop: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    <td style={tdStyle}>{trade.date}</td>

                    <td style={tdStyle}>{trade.symbol}</td>

                    <td style={tdStyle}>{trade.side}</td>

                    <td
                      style={{
                        ...tdStyle,
                        color:
                          trade.pnl > 0 ? "#bfff00" : "#ff5f7a",
                        fontWeight: 700,
                      }}
                    >
                      ₹{trade.pnl}
                    </td>

                    <td style={tdStyle}>
                      <div
                        style={{
                          background: "rgba(190,255,0,0.12)",
                          color: "#d4ff00",
                          padding: "8px 14px",
                          borderRadius: "999px",
                          display: "inline-flex",
                          fontSize: "12px",
                          fontWeight: 700,
                        }}
                      >
                        VERIFIED
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function MetricCard({ title, value, change }) {
  return (
    <div
      style={{
        background: "rgba(15,18,35,0.82)",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: "26px",
        padding: "28px",
        backdropFilter: "blur(12px)",
      }}
    >
      <div
        style={{
          color: "#7f90b0",
          marginBottom: "18px",
          fontSize: "14px",
        }}
      >
        {title}
      </div>

      <div
        style={{
          fontSize: "42px",
          fontWeight: 800,
          letterSpacing: "-2px",
          marginBottom: "14px",
        }}
      >
        {value}
      </div>

      <div
        style={{
          color: "#d4ff00",
          fontWeight: 700,
          fontSize: "14px",
        }}
      >
        {change}
      </div>
    </div>
  );
}

const selectStyle = {
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.08)",
  color: "white",
  padding: "14px 18px",
  borderRadius: "14px",
  fontSize: "15px",
  outline: "none",
  minWidth: "170px",
};

const thStyle = {
  paddingBottom: "18px",
};

const tdStyle = {
  padding: "18px 0",
  color: "#dbe7ff",
  fontSize: "15px",
};
