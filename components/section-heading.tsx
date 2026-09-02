import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  inverse?: boolean;
};

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  inverse = false,
}: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <div
        className={cn(
          "section-kicker",
          inverse ? "text-black/55" : "text-muted-foreground",
        )}
      >
        <span>{index}</span>
        <span>{eyebrow}</span>
      </div>
      <div className="section-heading-copy">
        <h2 className={cn(inverse ? "text-[#191816]" : "text-foreground")}>{title}</h2>
        {description ? (
          <p className={cn(inverse ? "text-black/58" : "text-muted-foreground")}>
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
