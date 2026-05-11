import React, { useState } from "react";
import trades from "./data/trades.json";
import trades from "./data/trades.json";

export default function App() {

  const totalPnL = trades.reduce((a, b) => a + b.pnl, 0);

  const winTrades = trades.filter(t => t.pnl > 0).length;

  const lossTrades = trades.filter(t => t.pnl < 0).length;

  const winRate = ((winTrades / trades.length) * 100).toFixed(2);

  const profitFactor = (
    trades
      .filter(t => t.pnl > 0)
      .reduce((a, b) => a + b.pnl, 0) /
    Math.abs(
      trades
        .filter(t => t.pnl < 0)
        .reduce((a, b) => a + b.pnl, 0)
    )
  ).toFixed(2);

  const finalCapital = 50000 + totalPnL;

  return (
    <div
      style={{
        background: "#020817",
        minHeight: "100vh",
        color: "white",
        fontFamily: "Inter",
        padding: "40px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "40px",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "64px",
              fontWeight: "800",
              margin: 0,
            }}
          >
            Challengevala{" "}
            <span style={{ color: "#B7F34D" }}>Trader</span>
          </h1>

          <p
            style={{
              color: "#94A3B8",
              marginTop: "20px",
              width: "700px",
              lineHeight: "32px",
              fontSize: "22px",
            }}
          >
            Institutional-grade NIFTY 50 strategy dashboard with
            real trade verification and investor analytics.
          </p>
        </div>

        <img
          src="https://i.imgur.com/FW5QZ8v.png"
          width="220"
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px",
          marginBottom: "40px",
        }}
      >
        <MetricCard
          title="Final Capital"
          value={`₹${Math.round(finalCapital).toLocaleString()}`}
        />

        <MetricCard
          title="Profit Factor"
          value={profitFactor}
        />

        <MetricCard
          title="Win Rate"
          value={`${winRate}%`}
        />

        <MetricCard
          title="Total Trades"
          value={trades.length}
        />
      </div>

      <div
        style={{
          background: "#0F172A",
          borderRadius: "20px",
          padding: "30px",
          border: "1px solid #1E293B",
        }}
      >
        <h2
          style={{
            fontSize: "34px",
            marginBottom: "30px",
          }}
        >
          Trade Verification Logs
        </h2>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr
              style={{
                color: "#94A3B8",
                textAlign: "left",
              }}
            >
              <th style={th}>Trade</th>
              <th style={th}>Direction</th>
              <th style={th}>PnL</th>
              <th style={th}>ROI</th>
              <th style={th}>Holding</th>
              <th style={th}>Capital</th>
            </tr>
          </thead>

          <tbody>
            {trades.slice(0, 50).map((trade, index) => (
              <tr
                key={index}
                style={{
                  borderTop: "1px solid #1E293B",
                }}
              >
                <td style={td}>#{trade.tradeId}</td>

                <td style={td}>
                  <span
                    style={{
                      background:
                        trade.direction === "LONG"
                          ? "#84cc1620"
                          : "#ef444420",
                      color:
                        trade.direction === "LONG"
                          ? "#B7F34D"
                          : "#F87171",
                      padding: "8px 16px",
                      borderRadius: "999px",
                      fontWeight: "700",
                    }}
                  >
                    {trade.direction}
                  </span>
                </td>

                <td
                  style={{
                    ...td,
                    color:
                      trade.pnl > 0
                        ? "#B7F34D"
                        : "#F87171",
                    fontWeight: "700",
                  }}
                >
                  ₹{trade.pnl.toLocaleString()}
                </td>

                <td style={td}>
                  {trade.roi}%
                </td>

                <td style={td}>
                  {trade.holdingHours}h
                </td>

                <td style={td}>
                  ₹{trade.capitalAfter.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function MetricCard({ title, value }) {
  return (
    <div
      style={{
        background: "#0F172A",
        borderRadius: "20px",
        padding: "30px",
        border: "1px solid #1E293B",
      }}
    >
      <div
        style={{
          color: "#94A3B8",
          marginBottom: "16px",
        }}
      >
        {title}
      </div>

      <div
        style={{
          fontSize: "42px",
          fontWeight: "800",
          color: "#FFFFFF",
        }}
      >
        {value}
      </div>
    </div>
  );
}

const th = {
  padding: "18px",
  fontSize: "15px",
};

const td = {
  padding: "22px 18px",
  fontSize: "16px",
};
