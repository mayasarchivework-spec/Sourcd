import QuickActions from "@/Components/QuickActions";
import SourceCard from "@/Components/SourceCard";

const filters = ["All", "Images", "Videos", "Others", "Select"];

const sources = [
  { title: "Island / 306A", detail: "A visual reference worth returning to.", tone: "paper" as const, size: "tall" as const, media: "video" as const },
  { title: "Cosmos ad", detail: "A study in colour, rhythm, and layout.", tone: "sand" as const, size: "tall" as const, media: "image" as const },
  { title: "ORA ritual system", detail: "Your personal system of mindful rituals.", tone: "lavender" as const, size: "short" as const, media: "image" as const },
  { title: "open for work video", detail: "A useful reference for the next session.", tone: "ink" as const, size: "wide" as const, media: "video" as const },
  { title: "Direction", detail: "Every movement feels right when the system is clear.", tone: "pink" as const, size: "short" as const, media: "note" as const },
  { title: "A small reminder", detail: "Keep the useful parts and leave the noise behind.", tone: "violet" as const, size: "short" as const, media: "note" as const },
];

export default function AllPage() {
  return (
    <section className="page-container">
      <div className="page-toolbar">
        <div>
          <p className="page-eyebrow">249 saved</p>
          <h1 className="page-title">All</h1>
        </div>

        <div className="pill-row" aria-label="Filter sources">
          {filters.map((filter, index) => (
            <button
              key={filter}
              type="button"
              className={`pill-button ${index === 0 ? "pill-button--active" : ""}`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="tag-row mt-10">
        <span>Tags</span>
        <span className="chip">pinterest</span>
      </div>

      <div className="source-grid mt-8">
        {sources.map((source) => (
          <SourceCard key={source.title} {...source} />
        ))}
      </div>

      <QuickActions />
    </section>
  );
}
