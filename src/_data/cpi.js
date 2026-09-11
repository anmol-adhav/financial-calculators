/**
 * India consumer price inflation, annual %.
 * Source: World Bank, "Inflation, consumer prices (annual %)" for India
 * (indicator FP.CPI.TOTL.ZG), retrieved September 2026.
 *
 * `index` is a chained price level built from those rates (1960 = 100 after
 * that year's inflation). Only ratios between two years are meaningful, which
 * is all the calculators use it for.
 */
const series = [
  { year: 1960, rate: 1.7799, index: 101.7799 },
  { year: 1961, rate: 1.6952, index: 103.5053 },
  { year: 1962, rate: 3.6322, index: 107.2648 },
  { year: 1963, rate: 2.9462, index: 110.425 },
  { year: 1964, rate: 13.3553, index: 125.1726 },
  { year: 1965, rate: 9.4748, index: 137.0325 },
  { year: 1966, rate: 10.8018, index: 151.8344 },
  { year: 1967, rate: 13.0622, index: 171.6674 },
  { year: 1968, rate: 3.2374, index: 177.2249 },
  { year: 1969, rate: -0.5841, index: 176.1898 },
  { year: 1970, rate: 5.0923, index: 185.1619 },
  { year: 1971, rate: 3.0799, index: 190.8647 },
  { year: 1972, rate: 6.4421, index: 203.1604 },
  { year: 1973, rate: 16.9408, index: 237.5774 },
  { year: 1974, rate: 28.5987, index: 305.5214 },
  { year: 1975, rate: 5.7484, index: 323.084 },
  { year: 1976, rate: -7.6339, index: 298.4201 },
  { year: 1977, rate: 8.3075, index: 323.2113 },
  { year: 1978, rate: 2.523, index: 331.3659 },
  { year: 1979, rate: 6.2757, index: 352.1615 },
  { year: 1980, rate: 11.3461, index: 392.1181 },
  { year: 1981, rate: 13.1125, index: 443.5345 },
  { year: 1982, rate: 7.8907, index: 478.5325 },
  { year: 1983, rate: 11.8681, index: 535.3252 },
  { year: 1984, rate: 8.3189, index: 579.8584 },
  { year: 1985, rate: 5.5564, index: 612.0777 },
  { year: 1986, rate: 8.7297, index: 665.5102 },
  { year: 1987, rate: 8.8011, index: 724.0824 },
  { year: 1988, rate: 9.3835, index: 792.0267 },
  { year: 1989, rate: 7.0743, index: 848.0571 },
  { year: 1990, rate: 8.9712, index: 924.1379 },
  { year: 1991, rate: 13.8702, index: 1052.3177 },
  { year: 1992, rate: 11.7878, index: 1176.3628 },
  { year: 1993, rate: 6.3269, index: 1250.7901 },
  { year: 1994, rate: 10.2479, index: 1378.9699 },
  { year: 1995, rate: 10.2249, index: 1519.9682 },
  { year: 1996, rate: 8.9772, index: 1656.4187 },
  { year: 1997, rate: 7.1643, index: 1775.0895 },
  { year: 1998, rate: 13.2308, index: 2009.9481 },
  { year: 1999, rate: 4.6698, index: 2103.8086 },
  { year: 2000, rate: 4.0094, index: 2188.1587 },
  { year: 2001, rate: 3.7793, index: 2270.8558 },
  { year: 2002, rate: 4.2972, index: 2368.439 },
  { year: 2003, rate: 3.8059, index: 2458.5795 },
  { year: 2004, rate: 3.7673, index: 2551.2015 },
  { year: 2005, rate: 4.2463, index: 2659.5332 },
  { year: 2006, rate: 5.7965, index: 2813.693 },
  { year: 2007, rate: 6.3729, index: 2993.0069 },
  { year: 2008, rate: 8.3493, index: 3242.902 },
  { year: 2009, rate: 10.8824, index: 3595.8076 },
  { year: 2010, rate: 11.9894, index: 4026.9233 },
  { year: 2011, rate: 8.9118, index: 4385.7947 },
  { year: 2012, rate: 9.479, index: 4801.5242 },
  { year: 2013, rate: 10.0179, index: 5282.5361 },
  { year: 2014, rate: 6.6657, index: 5634.6541 },
  { year: 2015, rate: 4.907, index: 5911.1465 },
  { year: 2016, rate: 4.9482, index: 6203.6419 },
  { year: 2017, rate: 3.3282, index: 6410.1115 },
  { year: 2018, rate: 3.9388, index: 6662.593 },
  { year: 2019, rate: 3.7295, index: 6911.0744 },
  { year: 2020, rate: 6.6234, index: 7368.8225 },
  { year: 2021, rate: 5.1314, index: 7746.9462 },
  { year: 2022, rate: 6.699, index: 8265.9142 },
  { year: 2023, rate: 5.6491, index: 8732.8639 },
  { year: 2024, rate: 4.953, index: 9165.4027 },
  { year: 2025, rate: 2.3988, index: 9385.2624 }
];

const byYear = {};
series.forEach((r) => { byYear[r.year] = r; });

const first = series[0].year;
const latest = series[series.length - 1].year;

module.exports = {
  series,
  byYear,
  first,
  latest,
  source: "World Bank — Inflation, consumer prices (annual %), India (FP.CPI.TOTL.ZG)",
  sourceUrl: "https://data.worldbank.org/indicator/FP.CPI.TOTL.ZG?locations=IN",
  retrieved: "September 2026",
  license: "CC BY 4.0",
  licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
  // CC BY 4.0 requires stating that the source data was modified
  modification:
    "Annual inflation rates are reproduced unchanged; the chained price index is derived from them by CalculateMoney."
};
