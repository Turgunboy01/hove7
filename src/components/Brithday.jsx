import React, { useState } from "react";
import arrow from "../assets/icon-arrow.svg";

const Birthday = () => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [age, setAge] = useState(null);
  const [errors, setErrors] = useState({});

  const validateInputs = () => {
    let tempErrors = {};
    if (!day || day < 1 || day > 31) {
      tempErrors.day = "Kun 1 dan 31 gacha bo'lishi kerak";
    }
    if (!month || month < 1 || month > 12) {
      tempErrors.month = "Oy 1 dan 12 gacha bo'lishi kerak";
    }
    const currentYear = new Date().getFullYear();
    if (!year || year < 1900 || year > currentYear) {
      tempErrors.year = `Yil 1900 va ${currentYear} oralig'ida bo'lishi kerak`;
    }
    return tempErrors;
  };

  const calculateAge = () => {
    const birthDate = new Date(year, month - 1, day);
    const today = new Date();

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0) {
      ageMonths -= 1;
      ageDays += new Date(year, month - 1, 0).getDate(); // Tug'ilgan oyining oxirgi kuni
    }

    if (ageMonths < 0) {
      ageMonths += 12;
      ageYears -= 1;
    }

    setAge({ years: ageYears, months: ageMonths, days: ageDays });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateInputs();
    if (Object.keys(validationErrors).length === 0) {
      calculateAge();
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  const handleButtonClick = () => {
    const validationErrors = validateInputs();
    if (Object.keys(validationErrors).length === 0) {
      calculateAge();
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };
  console.log(day, month, year);

  return (
    <div className="bg-gray-100 flex min-h-screen flex-col items-center justify-center  ">
      <div className="bg-white rounded-[20px] rounded-br-[100px] p-[70px]  ">
        <form onSubmit={handleSubmit}>
          <div className="flex  gap-[20px]">
            <div className=" flex flex-col  ">
              <label htmlFor="day" className="text-xs font-[900] text-[gray]">
                DAY
              </label>
              <input
                type="number"
                className="w-25 px-3 py-2 border mt-1 border-gray-400 rounded-xl outline-none font-[900]"
                placeholder="DD"
                name="day"
                value={day}
                onChange={(e) => setDay(e.target.value)}
                id="day"
                required
              />
              {errors.day && (
                <p
                  style={{
                    color: "red",
                    fontSize: "12px",
                    fontStyle: "italic",
                    marginTop: "1px",
                  }}
                >
                  {errors.day}
                </p>
              )}
            </div>
            <div className=" flex flex-col gap-1  ">
              <label htmlFor="month" className="text-xs font-[900] text-[gray]">
                MONTH
              </label>
              <input
                type="number"
                placeholder="MM"
                className="w-25 px-3 py-2 border border-gray-400 rounded-xl outline-none font-[900]"
                name="month"
                id="month"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                required
              />{" "}
              {errors.month && (
                <p
                  style={{
                    color: "red",
                    fontSize: "12px",
                    fontStyle: "italic",
                  }}
                >
                  {errors.month}
                </p>
              )}
            </div>
            <div className="  flex flex-col gap-1 ">
              <label htmlFor="year" className="text-xs font-[900] text-[gray]">
                YEAR
              </label>
              <input
                type="number"
                placeholder="YYYY"
                className="w-25 px-3 py-2 border border-gray-400 rounded-xl outline-none font-[900]"
                name="year"
                id="year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                required
              />
              {errors.year && (
                <p
                  style={{
                    color: "red",
                    fontSize: "12px",
                    fontStyle: "italic",
                  }}
                >
                  {errors.year}
                </p>
              )}
            </div>
          </div>
        </form>
        <div className="relative">
          <hr className="my-8 w-full border-b-gray-400" />
          <button
            type="button"
            onClick={handleButtonClick}
            className="absolute -top-5 right-0 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-purple-500"
          >
            <img src={arrow} className="h-8 w-8" alt="a" />
          </button>{" "}
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="text-[50px] font-[900] text-purple-400">
              {age ? age.years : "- -"}
            </span>
            <span className="text-[50px] font-[900]">years</span>
          </div>{" "}
          <div className="flex items-center gap-2">
            <span className="text-[50px] font-[900] text-purple-400">
              {age ? age.months : "- -"}
            </span>
            <span className="text-[50px] font-[900]">months</span>
          </div>{" "}
          <div className="flex gap-2 items-center">
            <span className="text-[50px] font-[900] text-purple-400">
              {age ? age.days : "- -"}
            </span>
            <span className="text-[50px] font-[900]">days</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Birthday;
