"use client";

import { useState } from "react";
import { computeResult } from "./calc";

export default function Calculator({ calc }) {
  const [values, setValues] = useState({});
  const [result, setResult] = useState(null);

  function handleChange(key, val) {
    setValues((prev) => ({ ...prev, [key]: val }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setResult(computeResult(calc, values));
  }

  return (
    <div className="calc-tool">
      <div className="calc-tool-header">
        <span>{calc.name}</span>
        <span>Coverly</span>
      </div>

      <form className="calc-form" onSubmit={handleSubmit}>
        {calc.fields.map((field) => (
          <div className="field-row" key={field.key}>
            <label htmlFor={field.key}>{field.label}</label>
            <div className="field-input-wrap">
              <input
                id={field.key}
                type="number"
                inputMode="decimal"
                min="0"
                step="any"
                placeholder={field.placeholder}
                value={values[field.key] || ""}
                onChange={(e) => handleChange(field.key, e.target.value)}
                required
              />
              <span className="field-unit">{field.unit}</span>
            </div>
          </div>
        ))}
        <button type="submit" className="calc-submit">
          Calculate
        </button>
      </form>

      {result && (
        <div className="result-tag">
          <span className="result-label">You&apos;ll need about</span>
          <div className="result-headline">{result.cuYards.toFixed(2)} cu yd</div>
          <p className="result-sub">
            That&apos;s roughly {result.bags} bags at {calc.cuFtPerBag} cu ft
            each, or about {result.tons.toFixed(2)} tons if you&apos;re
            ordering bulk. Includes a {Math.round(calc.wasteFactor * 100)}%
            waste allowance.
          </p>
          <div className="result-breakdown">
            <div>
              <span>Area</span>
              <strong>{result.areaSqFt.toFixed(1)} sq ft</strong>
            </div>
            <div>
              <span>Volume (before waste)</span>
              <strong>{result.volumeCuFt.toFixed(1)} cu ft</strong>
            </div>
            <div>
              <span>Bags needed</span>
              <strong>{result.bags}</strong>
            </div>
            <div>
              <span>Bulk weight</span>
              <strong>~{result.tons.toFixed(2)} tons</strong>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
