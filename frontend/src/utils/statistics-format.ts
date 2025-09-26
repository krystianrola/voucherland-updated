interface StatisticFormatReturn {
  formatted_number: number;
  unit: string;
}

export function formatStatistic(value: number): StatisticFormatReturn {
  if (value < 999) return { formatted_number: value, unit: "" };

  const units: string[] = ["K", "M", "B", "T"];

  // in which unit is the number
  const order: number = Math.floor(Math.log10(value) / 3);

  const scaled = value / Math.pow(1000, order);

  return {
    formatted_number: scaled,
    unit: units[order - 1],
  };
}
