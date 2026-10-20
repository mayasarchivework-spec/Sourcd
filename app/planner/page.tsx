"use client";

import { useState } from "react";
import QuickActions from "@/Components/QuickActions";

const initialEntries = [
  { title: "cosmos ad", board: "cosmos ad", status: "Idea", due: "25 OCT", complete: false },
  { title: "open for work video", board: "open for work", status: "Idea", due: "31 OCT", complete: false },
];

export default function PlannerPage() {
  const [entries, setEntries] = useState(initialEntries);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function toggleEntry(title: string) {
    setEntries((current) =>
      current.map((entry) =>
        entry.title === title ? { ...entry, complete: !entry.complete } : entry,
      ),
    );
  }

  return (
    <section className="page-container">
      <div className="page-toolbar">
        <div>
          <p className="page-eyebrow">2 planned</p>
          <h1 className="page-title">Planner</h1>
        </div>

        <div className="flex flex-wrap gap-2">
          <button type="button" className="pill-button pill-button--active">
            Sort by due date
          </button>
          <button type="button" className="pill-button">
            Sort by status
          </button>
          <button
            type="button"
            className="pill-button pill-button--active"
            onClick={() => setIsModalOpen(true)}
          >
            ＋ New
          </button>
        </div>
      </div>

      <div className="planner-list">
        {entries.map((entry) => (
          <div className="planner-row" key={entry.title}>
            <label className="planner-row__title">
              <input
                className="planner-row__check"
                type="checkbox"
                checked={entry.complete}
                onChange={() => toggleEntry(entry.title)}
              />
              <span className={entry.complete ? "line-through opacity-50" : ""}>
                {entry.title}
              </span>
            </label>

            <div className="planner-row__meta">
              <span className="chip">▦ {entry.board}</span>
              <span className="chip">{entry.status}</span>
            </div>

            <span className="planner-row__date">{entry.due}</span>
          </div>
        ))}
      </div>

      <QuickActions />

      {isModalOpen ? (
        <div className="fixed inset-0 z-[60] grid place-items-center bg-black/70 px-4">
          <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-[var(--surface-soft)] p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">New entry</h2>
              <button
                type="button"
                className="text-2xl text-[var(--muted)]"
                aria-label="Close dialog"
                onClick={() => setIsModalOpen(false)}
              >
                ×
              </button>
            </div>

            <form className="mt-8 space-y-5" onSubmit={(event) => event.preventDefault()}>
              <label className="block text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
                Title
                <input className="mt-2 w-full rounded-full border border-[var(--border)] bg-transparent px-4 py-3 outline-none" />
              </label>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
                  Status
                  <select className="mt-2 w-full rounded-full border border-[var(--border)] bg-transparent px-4 py-3 outline-none">
                    <option>Idea</option>
                    <option>In progress</option>
                    <option>Done</option>
                  </select>
                </label>
                <label className="block text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
                  Due
                  <input type="date" className="mt-2 w-full rounded-full border border-[var(--border)] bg-transparent px-4 py-3 outline-none" />
                </label>
              </div>

              <label className="block text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
                Notes
                <textarea className="mt-2 min-h-28 w-full resize-none rounded-2xl border border-[var(--border)] bg-transparent px-4 py-3 outline-none" />
              </label>

              <div className="flex justify-end">
                <button
                  type="button"
                  className="pill-button pill-button--active"
                  onClick={() => setIsModalOpen(false)}
                >
                  Add entry
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </section>
  );
}
