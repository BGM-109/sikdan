import React, { useState } from "react";
import TierCard from "../components/TierCard";

export default function Home() {
  const [price, setPrice] = useState(0);
  const [weight, setWeight] = useState(0);
  const [things, setThings] = useState(0);
  const [protein, setProtein] = useState(0);
  const [result, setResult] = useState(0);
  const [result2, setResult2] = useState(0);
  const handleChange = (e, fun) => {
    fun(e.target.value);
  };
  const calculate = (price, weight, things, protein) => {
    const perPrice = (price / (weight * things)) * 100;
    const perProtein = price / (protein * things);
    return { perPrice: perPrice, perProtein: perProtein };
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { perPrice, perProtein } = calculate(price, weight, things, protein);
    setResult(perPrice);
    setResult2(perProtein);
  };
  const reset = () => {
    setPrice(0);
    setWeight(0);
    setThings(0);
    setProtein(0);
  };
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 w-full h-60 text-white">
        <h1 className="text-2xl">
          <strong>단백질</strong>계산기
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center py-10 space-y-3">
        <label>💴 구매 가격</label>
        <input
          type="number"
          className="text-center border p-2"
          onChange={(e) => handleChange(e, setPrice)}
          value={price}
        />
        <label>개당 몇그람? (g) </label>
        <input
          type="number"
          className="text-center border p-2"
          onChange={(e) => handleChange(e, setWeight)}
          value={weight}
        />
        <label>개수</label>
        <input
          type="number"
          className="text-center border p-2"
          onChange={(e) => handleChange(e, setThings)}
          value={things}
        />
        <label>개당 단백질 함유량 (g) </label>
        <input
          type="number"
          className="text-center border p-2"
          onChange={(e) => handleChange(e, setProtein)}
          value={protein}
        />
        <div className="flex space-x-4">
          <button
            className="bg-blue-500 py-2 px-4 rounded-2xl text-white"
            onClick={handleSubmit}
          >
            계산
          </button>
          <button
            className="bg-blue-500 py-2 px-4 rounded-2xl text-white"
            onClick={reset}
          >
            초기화
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-8">
        <h2 className="font-bold text-2xl">👀</h2>
        <p>100G 당 {result} 원 입니다.</p>
        <p>단백질 1g 당 {result2} 원 입니다.</p>
      </div>
      <section className="flex flex-col bg-gradient-to-r from-blue-100 to-blue-300 items-center p-8">
        <h2 className="text-2xl">Tier</h2>
        <div className="w-full grid grid-cols-2">
          <TierCard img={"/images/challenger_1.png"} price={500} />
          <TierCard img={"/images/master_1.png"} price={1000} />
          <TierCard img={"/images/diamond_1.png"} price={1500} />
          <TierCard img={"/images/platinum_1.png"} price={2000} />
          <TierCard img={"/images/gold_1.png"} price={2500} />
          <TierCard img={"/images/silver_1.png"} price={3000} />
          <TierCard img={"/images/bronze_1.png"} price={3500} />
        </div>
      </section>
    </div>
  );
}
