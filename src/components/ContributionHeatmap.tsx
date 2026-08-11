import contributions from '../data/github-contributions.json'

function levelFor(count: number): 0 | 1 | 2 | 3 | 4 {
  if (count === 0) return 0
  if (count === 1) return 1
  if (count <= 3) return 2
  if (count <= 7) return 3
  return 4
}

export function ContributionHeatmap() {
  const { totalContributions, weeks } = contributions

  return (
    <div className="contrib kit-frame">
      <p className="contrib__headline">
        <span className="stat">{totalContributions.toLocaleString()}</span> contributions on GitHub in the past year
      </p>
      <div className="contrib__grid" role="img" aria-label={`GitHub contribution calendar: ${totalContributions} contributions in the past year`}>
        {weeks.map((week, weekIndex) => (
          <div className="contrib__week" key={weekIndex}>
            {week.map((day) => (
              <span
                key={day.date}
                className={`contrib__day contrib__day--${levelFor(day.count)}`}
                title={`${day.count} contribution${day.count === 1 ? '' : 's'} on ${day.date}`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
