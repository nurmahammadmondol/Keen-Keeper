import { useContext, useMemo, useState } from "react";
import { DataContext } from "../Context/FriendsContext";

const ICONS = { Text: "💬", Call: "📞", Video: "📹" };

export default function Timeline() {
  const { checkIn } = useContext(DataContext);

  const [filter, setFilter] = useState("");

  const types = useMemo(
    () => [...new Set(checkIn.map((e) => e.type))],
    [checkIn],
  );

  const rows = useMemo(
    () =>
      checkIn
        .filter((e) => !filter || e.type === filter)
        // বদলানো: date -> callDate
        .sort((a, b) => new Date(b.callDate) - new Date(a.callDate)),
    [checkIn, filter],
  );

  const formatDateTime = (value) => {
    if (!value) return "";
    const d = new Date(value);
    if (isNaN(d)) return value;
    return d.toLocaleString("en-GB", {
      timeZone: "Asia/Dhaka",
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <section className="px-5 pb-20 pt-14">
      <div className="flex items-center justify-between">
        <h1 className="mb-6 text-[34px] font-extrabold tracking-tight text-slate-800 dark:text-slate-100">
          Timeline
        </h1>

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          aria-label="Filter timeline"
          className="mb-5 w-64 max-w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-500 shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400"
        >
          <option value="">Filter timeline</option>
          {types.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <ul className="flex flex-col gap-[18px]">
        {rows.map((e) => (
          <li
            // বদলানো: id + type মিলিয়ে unique key
            key={`${e.id}-${e.type}`}
            className="flex items-center gap-3.5 rounded-lg border border-slate-200 bg-white px-3 py-3.5 dark:border-slate-700 dark:bg-slate-800"
          >
            <span className="w-8 text-center text-[28px] leading-none">
              {ICONS[e.type] ?? "📌"}
            </span>
            <div>
              <div>
                <span className="text-[15px] font-semibold text-emerald-900 dark:text-emerald-300">
                  {e.type}
                </span>
                <span className="ml-1 text-sm text-slate-500 dark:text-slate-400">
                  with {e.name}
                </span>
              </div>
              <div className="mt-0.5 text-[13px] font-medium text-slate-600 dark:text-slate-300">
                {/* বদলানো: date -> callDate */}
                {formatDateTime(e.callDate)}
              </div>
            </div>
          </li>
        ))}

        {rows.length === 0 && (
          <li className="flex flex-col items-center rounded-lg border border-dashed border-slate-300 bg-white px-6 py-14 text-center dark:border-slate-600 dark:bg-slate-800">
            <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-3xl dark:bg-slate-700">
              🗓️
            </span>
            <h2 className="text-base font-semibold text-slate-800 dark:text-slate-100">
              No events found
            </h2>
            <p className="mt-1.5 max-w-xs text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              Calls, texts and video chats that match this filter will show up
              here.
            </p>
          </li>
        )}
      </ul>
    </section>
  );
}