import React, { useState } from "react";
import trades from "./data/trades.json";

export default function App() {
  const [selectedCapital, setSelectedCapital] = useState(50000);

  const filteredTrades = trades;

  const totalPnL = filteredTrades.reduce((a, b) => a + b.pnl, 0);

  const finalCapital = selectedCapital + totalPnL;

  const winTrades = filteredTrades.filter((t) => t.pnl > 0).length;

  const lossTrades = filteredTrades.filter((t) => t.pnl < 0).length;

  const winRate =
    filteredTrades.length > 0
      ? ((winTrades / filteredTrades.length) * 100).toFixed(2)
      : 0;

  const profitFactor =
    lossTrades > 0
      ? Math.abs(
          filteredTrades
            .filter((t) => t.pnl > 0)
            .reduce((a, b) => a + b.pnl, 0) /
            filteredTrades
              .filter((t) => t.pnl < 0)
              .reduce((a, b) => a + b.pnl, 0)
        ).toFixed(2)
      : "0";

  return (
    <div
      style={{
        background: "#020817",
        minHeight: "100vh",
        color: "white",
        padding: "40px",
        fontFamily: "Inter",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "50px",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "64px",
              marginBottom: "10px",
              fontWeight: "800",
            }}
          >
            Challengevala{" "}
            <span style={{ color: "#b6f542" }}>Trader</span>
          </h1>

          <p
            style={{
              color: "#94a3b8",
              maxWidth: "700px",
              fontSize: "20px",
              lineHeight: "34px",
            }}
          >
            Institutional-grade NIFTY 50 strategy dashboard with real investor
            analytics and verified trade reporting.
          </p>
        </div>

        <div
          style={{
            width: "180px",
            height: "180px",
            background: "#b6f542",
            borderRadius: "28px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#1e293b",
            fontSize: "82px",
            fontWeight: "900",
          }}
        >
          T
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginBottom: "40px",
          flexWrap: "wrap",
        }}
      >
        <div>
          <label style={{ color: "#94a3b8" }}>Starting Capital</label>

          <br />

          <select
            value={selectedCapital}
            onChange={(e) => setSelectedCapital(Number(e.target.value))}
            style={{
              marginTop: "10px",
              padding: "14px",
              background: "#0f172a",
              color: "white",
              border: "1px solid #1e293b",
              borderRadius: "12px",
              fontSize: "16px",
            }}
          >
            <option value={50000}>₹50,000</option>
            <option value={100000}>₹1,00,000</option>
            <option value={200000}>₹2,00,000</option>
            <option value={500000}>₹5,00,000</option>
          </select>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
          marginBottom: "40px",
        }}
      >
        {[
          {
            title: "Final Capital",
            value: `₹${finalCapital.toLocaleString()}`,
          },
          {
            title: "Profit Factor",
            value: profitFactor,
          },
          {
            title: "Win Rate",
            value: `${winRate}%`,
          },
          {
            title: "Total Trades",
            value: filteredTrades.length,
          },
        ].map((card, i) => (
          <div
            key={i}
            style={{
              background: "#0f172a",
              padding: "30px",
              borderRadius: "24px",
              border: "1px solid #1e293b",
            }}
          >
            <p
              style={{
                color: "#94a3b8",
                marginBottom: "20px",
                fontSize: "18px",
              }}
            >
              {card.title}
            </p>

            <h2
              style={{
                fontSize: "52px",
                margin: 0,
                fontWeight: "800",
              }}
            >
              {card.value}
            </h2>
          </div>
        ))}
      </div>

      <div
        style={{
          background: "#0f172a",
          borderRadius: "30px",
          padding: "40px",
          border: "1px solid #1e293b",
        }}
      >
        <h2
          style={{
            fontSize: "42px",
            marginBottom: "30px",
          }}
        >
          Trade Verification Logs
        </h2>

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
                  color: "#94a3b8",
                  textAlign: "left",
                  borderBottom: "1px solid #1e293b",
                }}
              >
                <th style={{ padding: "20px" }}>Trade</th>
                <th style={{ padding: "20px" }}>Direction</th>
                <th style={{ padding: "20px" }}>PnL</th>
                <th style={{ padding: "20px" }}>ROI</th>
                <th style={{ padding: "20px" }}>Holding</th>
                <th style={{ padding: "20px" }}>Capital</th>
              </tr>
            </thead>

            <tbody>
              {filteredTrades.map((trade, i) => (
                <tr
                  key={i}
                  style={{
                    borderBottom: "1px solid #1e293b",
                  }}
                >
                  <td style={{ padding: "24px" }}>
                    #{trade.tradeId}
                  </td>

                  <td style={{ padding: "24px" }}>
                    <span
                      style={{
                        background:
                          trade.direction === "LONG"
                            ? "rgba(182,245,66,0.15)"
                            : "rgba(255,0,0,0.12)",

                        color:
                          trade.direction === "LONG"
                            ? "#b6f542"
                            : "#ff6464",

                        padding: "10px 18px",
                        borderRadius: "999px",
                        fontWeight: "700",
                      }}
                    >
                      {trade.direction}
                    </span>
                  </td>

                  <td
                    style={{
                      padding: "24px",
                      color: trade.pnl > 0 ? "#b6f542" : "#ff6464",
                      fontWeight: "700",
                    }}
                  >
                    ₹{trade.pnl.toLocaleString()}
                  </td>

                  <td style={{ padding: "24px" }}>
                    {trade.roi}%
                  </td>

                  <td style={{ padding: "24px" }}>
                    {trade.holdingHours}h
                  </td>

                  <td style={{ padding: "24px" }}>
                    ₹{trade.capitalAfter.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
