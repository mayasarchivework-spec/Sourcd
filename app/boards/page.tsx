import BoardCard from "@/Components/BoardCard";
import QuickActions from "@/Components/QuickActions";

const boards = [
  { name: "Luminate", count: 11, tone: "paper" as const },
  { name: "cosmos ad", count: 49, tone: "lavender" as const },
  { name: "open for work", count: 4, tone: "ink" as const },
  { name: "sourcd.", count: 33, tone: "sand" as const },
];

export default function BoardsPage() {
  return (
    <section className="page-container">
      <div className="page-toolbar">
        <div>
          <p className="page-eyebrow">4 boards</p>
          <h1 className="page-title">Boards</h1>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button type="button" className="pill-button">
            ✓ Select
          </button>
          <input className="toolbar-input" placeholder="New board name" />
          <button type="button" className="pill-button pill-button--active">
            Create
          </button>
        </div>
      </div>

      <div className="board-grid mt-10">
        {boards.map((board) => (
          <BoardCard key={board.name} {...board} />
        ))}
      </div>

      <QuickActions />
    </section>
  );
}
