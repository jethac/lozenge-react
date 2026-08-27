import { useState } from "react";
import { Calendar, CalendarDay } from "../../src/components/Calendar";

export const meta = { id: "calendar", title: "Calendar" };

interface DemoDay {
  day: number;
  month: string;
  outside?: boolean;
}

// August 2026, Sunday-first, padded to full weeks with adjacent-month days.
const AUGUST_DAYS: DemoDay[] = [
  ...[26, 27, 28, 29, 30, 31].map((day) => ({ day, month: "July", outside: true })),
  ...Array.from({ length: 31 }, (_, i) => ({ day: i + 1, month: "August" })),
  ...[1, 2, 3, 4, 5].map((day) => ({ day, month: "September", outside: true })),
];

// September 2026 with a booked range: 7 (start) – 11 (end).
const SEPTEMBER_DAYS: DemoDay[] = [
  ...[30, 31].map((day) => ({ day, month: "August", outside: true })),
  ...Array.from({ length: 30 }, (_, i) => ({ day: i + 1, month: "September" })),
  ...[1, 2, 3].map((day) => ({ day, month: "October", outside: true })),
];

export default function CalendarSection() {
  const [selected, setSelected] = useState("3 August");
  return (
    <div className="d-flex gap-2" style={{ flexWrap: "wrap", alignItems: "flex-start" }}>
      {/* Interactive picker: selection state and month paging are app JS. */}
      <Calendar
        title="August 2026"
        onPrevMonth={() => {}}
        onNextMonth={() => {}}
      >
        {AUGUST_DAYS.map(({ day, month, outside }) => {
          const date = `${day} ${month}`;
          const disabled = month === "August" && (day === 9 || day === 10);
          return (
            <CalendarDay
              key={date}
              outside={outside}
              today={date === "28 August"}
              selected={date === selected}
              disabled={disabled}
              aria-label={`${date} 2026`}
              onClick={() => setSelected(date)}
            >
              {day}
            </CalendarDay>
          );
        })}
      </Calendar>

      {/* Display-only availability grid with a continuous range band. */}
      <Calendar title="September 2026" headingLevel={4}>
        {SEPTEMBER_DAYS.map(({ day, month, outside }) => (
          <CalendarDay
            key={`${day} ${month}`}
            outside={outside}
            rangeStart={month === "September" && day === 7}
            inRange={month === "September" && day >= 8 && day <= 10}
            rangeEnd={month === "September" && day === 11}
            aria-label={`${day} ${month} 2026`}
          >
            {day}
          </CalendarDay>
        ))}
      </Calendar>
    </div>
  );
}
