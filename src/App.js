import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/calculator/1" replace />} />
            <Route path="/calculator/1" element={<Calculator1 />} />
            <Route path="/calculator/2" element={<Calculator2 />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/calculator/1" className="nav-link">
              Триместр 1
            </Link>
          </li>
          <li>
            <Link to="/calculator/2" className="nav-link">
              Триместр 2
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const Calculator1 = () => {
  const [inputs, setInputs] = useState({
    xsad: "",
    xspr: "",
    xox: "",
    xpem: "0",
  });
  const [errors, setErrors] = useState({});
  const [result, setResult] = useState(null);

  const validate = () => {
    const newErrors = {};
    if (!inputs.xsad.trim()) newErrors.xsad = "Поле обязательно для заполнения";
    if (!inputs.xspr.trim()) newErrors.xspr = "Поле обязательно для заполнения";
    if (!inputs.xox.trim()) newErrors.xox = "Поле обязательно для заполнения";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const calculate = () => {
    if (!validate()) return;

    const z =
      -69.569 +
      0.378 * parseFloat(inputs.xsad) +
      0.189 * parseFloat(inputs.xspr) +
      3.334 * parseFloat(inputs.xox) +
      4.624 * parseFloat(inputs.xpem);

    const p = (1 / (1 + Math.exp(-z))) * 100;
    setResult(p.toFixed(2));
  };

  return (
    <div className="calculator">
      <h2>Триместр 1</h2>
      {/* <div className="formula">
        <p>Формула: P = 1 / (1 + e^(-z)) × 100%</p>
        <p>
          z = -69,569 + 0,378 × XСАД + 0,189 × XШПР + 3,334 × XОХ + 4,624 × XПЭМ
        </p>
      </div> */}
      <div className="input-group">
        <label>
          САД (мм рт. ст.):
          <input
            type="number"
            name="xsad"
            value={inputs.xsad}
            onChange={handleChange}
            className={errors.xsad ? "error" : ""}
          />
          {errors.xsad && <span className="error-message">{errors.xsad}</span>}
        </label>
      </div>
      <div className="input-group">
        <label>
          Баллы по шкале перинатального риска:
          <input
            type="number"
            name="xspr"
            value={inputs.xspr}
            onChange={handleChange}
            className={errors.xspr ? "error" : ""}
          />
          {errors.xspr && <span className="error-message">{errors.xspr}</span>}
        </label>
      </div>
      <div className="input-group">
        <label>
          Уровень общего холестерина (ммоль/л):
          <input
            type="number"
            name="xox"
            step="0.01"
            value={inputs.xox}
            onChange={handleChange}
            className={errors.xox ? "error" : ""}
          />
          {errors.xox && <span className="error-message">{errors.xox}</span>}
        </label>
      </div>
      <div className="input-group">
        <label>
          Наличие ПЭ у матери:
          <select name="xpem" value={inputs.xpem} onChange={handleChange}>
            <option value="0">Отсутствие</option>
            <option value="1">Наличие</option>
          </select>
        </label>
      </div>
      <button onClick={calculate}>Рассчитать</button>
      {result !== null && (
        <div className="result">
          <h3>Результат:</h3>
          <p>Вероятность ПЭ: {result}%</p>
        </div>
      )}
    </div>
  );
};

const Calculator2 = () => {
  const [inputs, setInputs] = useState({
    xsad: "",
    xspr: "",
    xox: "",
    xpem: "0",
    xibd: "",
    xtr: "",
  });
  const [errors, setErrors] = useState({});
  const [result, setResult] = useState(null);

  const validate = () => {
    const newErrors = {};
    if (!inputs.xsad.trim()) newErrors.xsad = "Поле обязательно для заполнения";
    if (!inputs.xspr.trim()) newErrors.xspr = "Поле обязательно для заполнения";
    if (!inputs.xox.trim()) newErrors.xox = "Поле обязательно для заполнения";
    if (!inputs.xibd.trim()) newErrors.xibd = "Поле обязательно для заполнения";
    if (!inputs.xtr.trim()) newErrors.xtr = "Поле обязательно для заполнения";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const calculate = () => {
    if (!validate()) return;

    const z =
      -176.179 +
      0.996 * parseFloat(inputs.xsad) +
      0.839 * parseFloat(inputs.xspr) +
      -4.87 * parseFloat(inputs.xox) +
      14.006 * parseFloat(inputs.xpem) +
      -0.314 * parseFloat(inputs.xibd) +
      22.669 * parseFloat(inputs.xtr);

    const p = (1 / (1 + Math.exp(-z))) * 100;
    setResult(p.toFixed(2));
  };

  return (
    <div className="calculator">
      <h2>Триместр 2</h2>
      {/* <div className="formula">
        <p>Формула: P = 1 / (1 + e^(-z)) × 100%</p>
        <p>
          z = -176,179 + 0,996 × XСАД + 0,839 × XШПР - 4,870 × XОХ + 14,006 ×
          XПЭМ - 0,314 × XИВD + 22,669 × Xтр
        </p>
      </div> */}
      <div className="input-group">
        <label>
          САД (мм рт. ст.):
          <input
            type="number"
            name="xsad"
            value={inputs.xsad}
            onChange={handleChange}
            className={errors.xsad ? "error" : ""}
          />
          {errors.xsad && <span className="error-message">{errors.xsad}</span>}
        </label>
      </div>
      <div className="input-group">
        <label>
          Баллы по шкале перинатального риска:
          <input
            type="number"
            name="xspr"
            value={inputs.xspr}
            onChange={handleChange}
            className={errors.xspr ? "error" : ""}
          />
          {errors.xspr && <span className="error-message">{errors.xspr}</span>}
        </label>
      </div>
      <div className="input-group">
        <label>
          Уровень общего холестерина (ммоль/л):
          <input
            type="number"
            name="xox"
            step="0.01"
            value={inputs.xox}
            onChange={handleChange}
            className={errors.xox ? "error" : ""}
          />
          {errors.xox && <span className="error-message">{errors.xox}</span>}
        </label>
      </div>
      <div className="input-group">
        <label>
          Наличие ПЭ у матери:
          <select name="xpem" value={inputs.xpem} onChange={handleChange}>
            <option value="0">Отсутствие</option>
            <option value="1">Наличие</option>
          </select>
        </label>
      </div>
      <div className="input-group">
        <label>
          Индекс 25-OH-D3/24,25-(OH)2-D3:
          <input
            type="number"
            name="xibd"
            step="0.01"
            value={inputs.xibd}
            onChange={handleChange}
            className={errors.xibd ? "error" : ""}
          />
          {errors.xibd && <span className="error-message">{errors.xibd}</span>}
        </label>
      </div>
      <div className="input-group">
        <label>
          Уровень трансферрина (г/л):
          <input
            type="number"
            name="xtr"
            step="0.01"
            value={inputs.xtr}
            onChange={handleChange}
            className={errors.xtr ? "error" : ""}
          />
          {errors.xtr && <span className="error-message">{errors.xtr}</span>}
        </label>
      </div>
      <button onClick={calculate}>Рассчитать</button>
      {result !== null && (
        <div className="result">
          <h3>Результат:</h3>
          <p>Вероятность ПЭ: {result}%</p>
        </div>
      )}
    </div>
  );
};

export default App;
