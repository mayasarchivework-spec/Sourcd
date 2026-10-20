import QuickActions from "@/Components/QuickActions";

const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const days: Array<number | null> = [
  null,
  null,
  null,
  ...Array.from({ length: 31 }, (_, index) => index + 1),
  null,
];

const events: Record<number, string> = {
  25: "cosmos ad",
  31: "open for work video",
};

export default function CalendarPage() {
  return (
    <section className="page-container">
      <div className="calendar-heading">
        <div>
          <p className="page-eyebrow">2 dated entries</p>
          <h1 className="calendar-heading__month">
            October <span>2026</span>
          </h1>
        </div>

        <div className="calendar-controls" aria-label="Change month">
          <button type="button" className="calendar-control" aria-label="Previous month">
            ‹
          </button>
          <button type="button" className="calendar-control" aria-label="Next month">
            ›
          </button>
        </div>
      </div>

      <div className="calendar-grid">
        {weekdays.map((weekday) => (
          <div className="calendar-weekday" key={weekday}>
            {weekday}
          </div>
        ))}

        {days.map((day, index) => (
          <div
            className={`calendar-cell ${day === 20 ? "calendar-cell--today" : ""}`}
            key={`${day ?? "blank"}-${index}`}
          >
            {day ? (
              <>
                <span className="calendar-cell__date">{day}</span>
                {events[day] ? <span className="calendar-event">{events[day]}</span> : null}
              </>
            ) : null}
          </div>
        ))}
      </div>

      <QuickActions />
    </section>
  );
}
