type SourceCardProps = {
  title: string;
  detail?: string;
  tone: "paper" | "sand" | "lavender" | "violet" | "ink" | "pink";
  size?: "short" | "tall" | "wide";
  media?: "image" | "video" | "note";
};

export default function SourceCard({
  title,
  detail,
  tone,
  size = "short",
  media = "image",
}: SourceCardProps) {
  return (
    <article className={`source-card source-card--${tone} source-card--${size}`}>
      <div className="source-card__content">
        {media === "video" ? <span className="source-card__play">▶ 0:24</span> : null}
        {media === "note" ? <span className="source-card__note">▤</span> : null}
        <div className="source-card__copy">
          <strong>{title}</strong>
          {detail ? <span>{detail}</span> : null}
        </div>
      </div>
    </article>
  );
}
