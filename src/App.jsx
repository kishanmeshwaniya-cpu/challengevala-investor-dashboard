import React from "react";
import "./styles.css";
import trades from "./data/trades.json";

export default function App() {

  const totalPnL = trades.reduce((a,b)=>a+b.pnl,0);

  const finalCapital = 50000 + totalPnL;

  const winTrades = trades.filter(t=>t.pnl>0).length;

  const winRate = ((winTrades/trades.length)*100).toFixed(2);

  const profitFactor = (
    trades
    .filter(t=>t.pnl>0)
    .reduce((a,b)=>a+b.pnl,0)
    /
    Math.abs(
      trades
      .filter(t=>t.pnl<0)
      .reduce((a,b)=>a+b.pnl,0)
    )
  ).toFixed(2);

  let runningCapital = 50000;

  const capitalCurve = trades.map(t=>{
    runningCapital += t.pnl;
    return runningCapital;
  });

  return(
    <div className="app">

      {/* SIDEBAR */}

      <div className="sidebar">

        <div>

          <div className="logoBox">
            T
          </div>

          <div className="brandTitle">
            Challengevala
            <br/>
            <span>Trader</span>
          </div>

          <div className="menu">

            <div className="menuItem active">
              Dashboard
            </div>

            <div className="menuItem">
              Analytics
            </div>

            <div className="menuItem">
              Trade Logs
            </div>

            <div className="menuItem">
              Monthly PnL
            </div>

            <div className="menuItem">
              Investor View
            </div>

          </div>

        </div>

      </div>

      {/* MAIN */}

      <div className="main">

        {/* HERO */}

        <div className="hero">

          <div>

            <div className="liveTag">
              ● VERIFIED INSTITUTIONAL STRATEGY
            </div>

            <div className="heroTitle">
              CHALLENGEVALA
              <br/>
              <span>TRADER</span>
            </div>

            <div className="heroText">
              Institutional-grade NIFTY 50 quantitative trading dashboard
              with verified trade analytics, investor reporting and
              professional capital tracking.
            </div>

          </div>

          <div className="heroLogo">
            T
          </div>

        </div>

        {/* KPI */}

        <div className="kpiGrid">

          <div className="kpiCard">
            <div
              className="kpiTop"
              style={{background:"#C8FF3D"}}
            />

            <div className="kpiTitle">
              Final Capital
            </div>

            <div className="kpiValue">
              ₹{finalCapital.toLocaleString()}
            </div>

          </div>

          <div className="kpiCard">
            <div
              className="kpiTop"
              style={{background:"#8B5CF6"}}
            />

            <div className="kpiTitle">
              Profit Factor
            </div>

            <div className="kpiValue">
              {profitFactor}
            </div>

          </div>

          <div className="kpiCard">
            <div
              className="kpiTop"
              style={{background:"#00C2FF"}}
            />

            <div className="kpiTitle">
              Win Rate
            </div>

            <div className="kpiValue">
              {winRate}%
            </div>

          </div>

          <div className="kpiCard">
            <div
              className="kpiTop"
              style={{background:"#FFB800"}}
            />

            <div className="kpiTitle">
              Total Trades
            </div>

            <div className="kpiValue">
              {trades.length}
            </div>

          </div>

        </div>

        {/* CHART */}

        <div className="chartCard">

          <div className="chartHeader">

            <div>

              <div className="chartTitle">
                Equity Growth Curve
              </div>

              <div className="chartSub">
                Strategy capital progression
              </div>

            </div>

            <div className="verifyTag">
              VERIFIED PERFORMANCE
            </div>

          </div>

          <div className="chartArea">

            {capitalCurve.map((value,index)=>(
              <div
                key={index}
                className="chartBar"
                style={{
                  height:`${(value/finalCapital)*100}%`
                }}
              />
            ))}

          </div>

        </div>

        {/* TABLE */}

        <div className="tableCard">

          <div className="chartHeader">

            <div>

              <div className="chartTitle">
                Trade Verification Logs
              </div>

              <div className="chartSub">
                Institutional verified trades
              </div>

            </div>

            <div className="verifyTag">
              ALL TRADES VERIFIED
            </div>

          </div>

          <div className="tableWrap">

            <table className="table">

              <thead>

                <tr>

                  <th>Trade</th>
                  <th>Direction</th>
                  <th>PnL</th>
                  <th>ROI</th>
                  <th>Holding</th>
                  <th>Capital</th>

                </tr>

              </thead>

              <tbody>

                {trades.map((trade,index)=>(
                  <tr key={index}>

                    <td>
                      #{trade.tradeId}
                    </td>

                    <td>

                      <span
                        className={
                          trade.direction==="LONG"
                          ? "direction long"
                          : "direction short"
                        }
                      >
                        {trade.direction}
                      </span>

                    </td>

                    <td
                      className={
                        trade.pnl>0
                        ? "green"
                        : "red"
                      }
                    >
                      ₹{trade.pnl.toLocaleString()}
                    </td>

                    <td>
                      {trade.roi}%
                    </td>

                    <td>
                      {trade.holdingHours}h
                    </td>

                    <td>
                      ₹{trade.capitalAfter.toLocaleString()}
                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  )
}
