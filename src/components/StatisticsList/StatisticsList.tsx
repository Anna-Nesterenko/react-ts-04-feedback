interface IStatistic {
  good: number;
  neutral: number;
  bad: number;
  total: number;
  percent: number;
}

export const StatisticsList = ({
  good,
  neutral,
  bad,
  total,
  percent,
}: IStatistic) => {
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {`${percent}%`}</p>
    </>
  );
};
