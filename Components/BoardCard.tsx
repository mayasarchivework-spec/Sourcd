type BoardCardProps = {
  name: string;
  count: number;
  tone: "paper" | "lavender" | "ink" | "sand";
};

export default function BoardCard({ name, count, tone }: BoardCardProps) {
  return (
    <article className={`board-card board-card--${tone}`}>
      <div className="board-card__preview">
        <span>{name === "sourcd." ? "sourcd." : name}</span>
      </div>
      <h2>{name}</h2>
      <p>{count} items</p>
    </article>
  );
}
