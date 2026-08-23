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
          <div className="result-headline">{result.headline}</div>
          <p className="result-sub">{result.subCopy}</p>
          <div className="result-breakdown">
            {result.breakdown.map((row) => (
              <div key={row.label}>
                <span>{row.label}</span>
                <strong>{row.value}</strong>
              </div>
            ))}
          </div>
        </div>
      )}

      {values && Object.keys(values).length > 0 && result === null && (
        <p className="calc-hint" role="status">
          Fill in every field above to see your estimate.
        </p>
      )}
    </div>
  );
}
