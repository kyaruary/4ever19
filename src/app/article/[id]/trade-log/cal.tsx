"use client";

import { useReducer, useState } from "react";
import Big from "big.js";

type State = {
  cost: string;
  buy: string;
  sell: string;
  revenue: string;
};

function reducer(state: State, data: Partial<State>) {
  return {
    ...state,
    ...data,
  };
}

const init: State = {
  cost: "",
  buy: "",
  sell: "",
  revenue: "",
};

export default function Cal() {
  const [state, setState] = useReducer(reducer, init);
  const fee = Big(0.00001);
  const free = fee.minus(1).abs();
  const cost = Big(state.cost || 1);
  const buy = Big(state.buy || 1);
  const btc = cost.times(free).div(buy);

  const handleBuyChange = (buy: string) => {
    setState({ buy });
  };

  const handlePriceChange = (cost: string) => {
    setState({ cost });
  };

  const handleSellChange = (value: string) => {
    if (value === "" || Number.isNaN(+value)) {
      setState({
        sell: value,
        revenue: "",
      });
    } else {
      // `revenue = sell * btc  * free - cost`
      const sell = Big(value);
      const revenue = sell.times(btc).times(free).minus(cost);
      setState({
        sell: sell.toString(),
        revenue: revenue.toString(),
      });
    }
  };

  const handleRevenueChange = (value: string) => {
    if (value === "" || Number.isNaN(+value)) {
      setState({
        sell: "",
        revenue: value,
      });
    } else {
      // `sell =( revenue + cost) / btc / free`
      const revenue = Big(value);
      const sell = revenue.add(cost).div(btc).div(free);
      setState({
        sell: sell.toString(),
        revenue: revenue.toString(),
      });
    }
  };

  return (
    <div className="flex flex-col gap-8 [&>div]:flex [&>div]:items-center [&>div]:gap-4 ">
      <div>fee: {fee.times(100).toString()}%</div>
      <div>profit: {free.times(100).toString()}%</div>
      <div>
        买入数量: $ <TextField value={state.cost} onChange={handlePriceChange} />
      </div>
      <div>
        买入限价: $ <TextField value={state.buy} onChange={handleBuyChange} />
      </div>
      <div>BTC: {btc.toString()}</div>
      <div>
        期望收益: $ <TextField value={state.revenue} onChange={handleRevenueChange} />
      </div>
      <div>
        卖出限价: $ <TextField value={state.sell} onChange={handleSellChange} />
      </div>
    </div>
  );
}

function TextField(props: { value?: string; onChange?: (value: string) => void }) {
  return (
    <input
      className="outline-none border-1 bg-transparent px-16 h-40 rounded-4"
      placeholder="Text Field"
      value={props.value}
      onChange={e => {
        const value = e.target.value;
        props.onChange?.(input2Decimal(value));
      }}
    />
  );
}

export function input2Decimal(value: string) {
  if (value === "") {
    return "";
  }
  if (value === ".") {
    return "0.";
  }
  if (value === "-") {
    return "-";
  }
  const hasDot = value.includes(".");
  const [int_str, decimal_str = ""] = value.split(".");
  const decimal = decimal_str.replace(/[^0-9]/g, "").slice(0, 16);
  const int = Number.parseInt(int_str.replace(/[^0-9\-]/g, ""), 10);
  if (Number.isNaN(int)) {
    return "";
  }
  return `${int}${hasDot ? "." : ""}${decimal}`;
}
