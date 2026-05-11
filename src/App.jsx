import React, { useMemo, useState } from "react";
import trades from "./data/trades.json";

export default function App() {
  const [selectedCapital, setSelectedCapital] = useState(50000);

  const totalPnL = trades.reduce((a, b) => a + b.pnl, 0);

  const finalCapital = selectedCapital + totalPnL;

  const winTrades = trades.filter((t) => t.pnl > 0).length;

  const winRate = ((winTrades / trades.length) * 100).toFixed(2);

  const profitFactor = (
    trades
      .filter((t) => t.pnl > 0)
      .reduce((a, b) => a + b.pnl, 0) /
    Math.abs(
      trades
        .filter((t) => t.pnl < 0)
        .reduce((a, b) => a + b.pnl, 0)
    )
  ).toFixed(2);

  const capitalCurve = useMemo(() => {
    let running = selectedCapital;

    return trades.map((t) => {
      running += t.pnl;
      return running;
    });
  }, [selectedCapital]);

  return (
    <div
      style={{
        background: "#060816",
        minHeight: "100vh",
        color: "white",
        fontFamily: "Inter, sans-serif",
        display: "flex",
      }}
    >
      {/* SIDEBAR */}

      <div
        style={{
          width: "250px",
          background: "#0B1020",
          borderRight: "1px solid rgba(255,255,255,0.05)",
          padding: "30px 20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div
            style={{
              width: "70px",
              height: "70px",
              borderRadius: "20px",
              background: "#C8FF3D",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "40px",
              color: "#111",
              fontWeight: "900",
              marginBottom: "25px",
            }}
          >
            T
          </div>

          <h2
            style={{
              fontSize: "28px",
              lineHeight: "34px",
              marginBottom: "40px",
              fontWeight: "900",
            }}
          >
            Challengevala
            <br />
            <span style={{ color: "#C8FF3D" }}>Trader</span>
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
            {[
              "Dashboard",
              "Analytics",
              "Trade Logs",
              "Monthly PnL",
              "Investor View",
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  padding: "14px 18px",
                  borderRadius: "14px",
                  background:
                    index === 0 ? "rgba(200,255,61,0.12)" : "transparent",
                  border:
                    index === 0
                      ? "1px solid rgba(200,255,61,0.25)"
                      : "1px solid transparent",
                  color: index === 0 ? "#C8FF3D" : "#B6BDD2",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div>
          <div
            style={{
              padding: "18px",
              borderRadius: "18px",
              background: "#10172B",
              border: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <p
              style={{
                color: "#7C859E",
                marginBottom: "10px",
                fontSize: "13px",
              }}
            >
              Starting Capital
            </p>

            <select
              value={selectedCapital}
              onChange={(e) => setSelectedCapital(Number(e.target.value))}
              style={{
                width: "100%",
                background: "#151E35",
                color: "white",
                border: "none",
                padding: "14px",
                borderRadius: "12px",
                fontSize: "16px",
                outline: "none",
              }}
            >
              <option value={50000}>₹50,000</option>
              <option value={100000}>₹1,00,000</option>
              <option value={200000}>₹2,00,000</option>
              <option value={500000}>₹5,00,000</option>
            </select>
          </div>
        </div>
      </div>

      {/* MAIN */}

      <div style={{ flex: 1, padding: "40px" }}>
        {/* HERO */}

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "40px",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(200,255,61,0.08)",
                border: "1px solid rgba(200,255,61,0.2)",
                padding: "8px 14px",
                borderRadius: "999px",
                color: "#C8FF3D",
                fontSize: "13px",
                fontWeight: "700",
                marginBottom: "20px",
              }}
            >
              ● LIVE VERIFIED STRATEGY
            </div>

            <h1
              style={{
                fontSize: "72px",
                lineHeight: "74px",
                fontWeight: "900",
                marginBottom: "20px",
              }}
            >
              CHALLENGEVALA
              <br />
              <span style={{ color: "#C8FF3D" }}>TRADER</span>
            </h1>

            <p
              style={{
                color: "#9EA7BF",
                maxWidth: "700px",
                fontSize: "20px",
                lineHeight: "34px",
              }}
            >
              Institutional-grade NIFTY 50 quantitative trading dashboard with
              real investor analytics, verified trade logs and performance
              reporting.
            </p>
          </div>

          <div
            style={{
              width: "300px",
              height: "300px",
              borderRadius: "40px",
              background:
                "linear-gradient(145deg,#C8FF3D 0%,#9CEB00 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "150px",
              color: "#111",
              fontWeight: "900",
              boxShadow: "0 0 80px rgba(200,255,61,0.18)",
            }}
          >
            T
          </div>
        </div>

        {/* KPI */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "24px",
            marginBottom: "35px",
          }}
        >
          {[
            {
              title: "Final Capital",
              value: `₹${finalCapital.toLocaleString()}`,
              color: "#C8FF3D",
            },
            {
              title: "Profit Factor",
              value: profitFactor,
              color: "#7C5CFF",
            },
            {
              title: "Win Rate",
              value: `${winRate}%`,
              color: "#00C2FF",
            },
            {
              title: "Total Trades",
              value: trades.length,
              color: "#FFB800",
            },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                background: "#10172B",
                borderRadius: "28px",
                padding: "28px",
                border: "1px solid rgba(255,255,255,0.05)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "4px",
                  background: item.color,
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
              />

              <p
                style={{
                  color: "#8E97AF",
                  fontSize: "16px",
                  marginBottom: "18px",
                }}
              >
                {item.title}
              </p>

              <h2
                style={{
                  fontSize: "52px",
                  fontWeight: "900",
                  color: "white",
                }}
              >
                {item.value}
              </h2>
            </div>
          ))}
        </div>

        {/* CHART */}

        <div
          style={{
            background: "#10172B",
            borderRadius: "30px",
            padding: "35px",
            marginBottom: "35px",
            border: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "30px",
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: "34px",
                  fontWeight: "800",
                  marginBottom: "10px",
                }}
              >
                Equity Growth Curve
              </h2>

              <p style={{ color: "#8B95AE" }}>
                Strategy performance progression
              </p>
            </div>

            <div
              style={{
                padding: "12px 20px",
                borderRadius: "999px",
                background: "rgba(200,255,61,0.08)",
                color: "#C8FF3D",
                fontWeight: "700",
                height: "fit-content",
              }}
            >
              VERIFIED PERFORMANCE
            </div>
          </div>

          <div
            style={{
              height: "300px",
              borderRadius: "24px",
              background:
                "linear-gradient(180deg,#0B1020 0%,#091222 100%)",
              padding: "30px",
              display: "flex",
              alignItems: "flex-end",
              gap: "18px",
            }}
          >
            {capitalCurve.map((value, index) => (
              <div
                key={index}
                style={{
                  flex: 1,
                  height: `${(value / finalCapital) * 100}%`,
                  background:
                    "linear-gradient(180deg,#C8FF3D 0%,#6FFF00 100%)",
                  borderRadius: "12px 12px 0 0",
                  minHeight: "20px",
                  boxShadow: "0 0 25px rgba(200,255,61,0.2)",
                }}
              />
            ))}
          </div>
        </div>

        {/* TABLE */}

        <div
          style={{
            background: "#10172B",
            borderRadius: "30px",
            padding: "35px",
            border: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "30px",
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: "34px",
                  fontWeight: "800",
                  marginBottom: "10px",
                }}
              >
                Trade Verification Logs
              </h2>

              <p style={{ color: "#8B95AE" }}>
                Institutional-grade verified trades
              </p>
            </div>

            <div
              style={{
                padding: "12px 20px",
                borderRadius: "999px",
                background: "rgba(200,255,61,0.08)",
                color: "#C8FF3D",
                fontWeight: "700",
                height: "fit-content",
              }}
            >
              ALL TRADES VERIFIED
            </div>
          </div>

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
            }}
          >
            <thead>
              <tr style={{ color: "#7E88A3", textAlign: "left" }}>
                <th style={{ padding: "18px" }}>Trade</th>
                <th>Direction</th>
                <th>PnL</th>
                <th>ROI</th>
                <th>Holding</th>
                <th>Capital</th>
              </tr>
            </thead>

            <tbody>
              {trades.map((trade, index) => (
                <tr
                  key={index}
                  style={{
                    borderTop: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  <td style={{ padding: "26px 18px", fontWeight: "700" }}>
                    #{trade.tradeId}
                  </td>

                  <td>
                    <span
                      style={{
                        background:
                          trade.direction === "LONG"
                            ? "rgba(111,255,0,0.12)"
                            : "rgba(255,0,77,0.12)",
                        color:
                          trade.direction === "LONG"
                            ? "#B9FF44"
                            : "#FF5470",
                        padding: "10px 18px",
                        borderRadius: "999px",
                        fontWeight: "800",
                      }}
                    >
                      {trade.direction}
                    </span>
                  </td>

                  <td
                    style={{
                      color: trade.pnl > 0 ? "#B9FF44" : "#FF5470",
                      fontWeight: "800",
                      fontSize: "20px",
                    }}
                  >
                    ₹{trade.pnl.toLocaleString()}
                  </td>

                  <td>{trade.roi}%</td>

                  <td>{trade.holdingHours}h</td>

                  <td>₹{trade.capitalAfter.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
