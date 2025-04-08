"use client";

import { useState } from "react";
import Image from "next/image";
import Head from "next/head";

export default function AgeCalculator() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [ageDetails, setAgeDetails] = useState(null);

  const calculateAge = (start, end) => {
    if (!start || !end) return;

    const startDateObj = new Date(start);
    const endDateObj = new Date(end);

    if (endDateObj < startDateObj) {
      setAgeDetails(null);
      return;
    }

    let years = endDateObj.getFullYear() - startDateObj.getFullYear();
    let months = endDateObj.getMonth() - startDateObj.getMonth();
    let days = endDateObj.getDate() - startDateObj.getDate();

    if (days < 0) {
      months--;
      days += new Date(endDateObj.getFullYear(), endDateObj.getMonth(), 0).getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }

    setAgeDetails({ years, months, days });
  };

  return (
    <>
      <Head>
        <title>Age Difference Calculator - Calculate Time Between Dates</title>
        <meta
          name="description"
          content="Calculate the exact time difference between two dates in years, months, and days with our beautifully designed calculator."
        />
        <meta
          name="keywords"
          content="Age Calculator, Date Difference, Time Calculator, Calculate Age"
        />
        <meta name="author" content="Your Name" />
        <meta
          property="og:title"
          content="Age Difference Calculator - Calculate Time Between Dates"
        />
        <meta
          property="og:description"
          content="Calculate the exact time difference between two dates in years, months, and days with our beautifully designed calculator."
        />
        <meta property="og:type" content="website" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-purple-500 to-sky-700 flex items-center justify-center py-10">
        <div className="w-full max-w-lg mx-4">
          <div className="bg-gradient-to-br from-white to-gray-100 shadow-xl rounded-2xl p-6 sm:p-8 transform hover:scale-105 transition-transform duration-300">
            {/* Centered Logo */}
            <div className="flex justify-center mb-6">
              <Image
                src="/VijayLogo.jpg"
                alt="Vijay Kumar Pydi Logo"
                width={120}
                height={120}
                className="rounded-full border-4 border-indigo-500 shadow-lg"
              />
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl font-bold text-center text-indigo-700 mb-6">
              Age Calculator
            </h1>

            {/* Input Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1">
                  Start Date (e.g., Birthdate)
                </label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => {
                    const newStartDate = e.target.value;
                    setStartDate(newStartDate);
                    calculateAge(newStartDate, endDate);
                  }}
                  className="w-full p-3 border border-indigo-300 rounded-lg bg-white/80 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors text-gray-800"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1">
                  End Date
                </label>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => {
                    const newEndDate = e.target.value;
                    setEndDate(newEndDate);
                    calculateAge(startDate, newEndDate);
                  }}
                  className="w-full p-3 border border-indigo-300 rounded-lg bg-white/80 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors text-gray-800"
                />
              </div>
            </div>

            {/* Result Display */}
            {ageDetails && (
              <div className="mt-6 p-4 bg-gradient-to-r from-indigo-100 to-purple-300 rounded-lg shadow-inner">
                <h2 className="text-lg font-semibold text-indigo-800">
                  Age / Time Difference:
                </h2>
                <p className="text-xl text-gray-900 mt-2 font-medium">
                  {ageDetails.years} Years, {ageDetails.months} Months,{" "}
                  {ageDetails.days} Days
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}