export default function QuickActions() {
  return (
    <div className="quick-actions">
      <button type="button" className="quick-action quick-action--secondary">
        <span aria-hidden="true">↗</span>
        Link
      </button>
      <button type="button" className="quick-action quick-action--primary">
        <span aria-hidden="true">＋</span>
        Upload
      </button>
    </div>
  );
}
