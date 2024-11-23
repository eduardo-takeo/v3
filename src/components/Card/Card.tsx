import Badge from "../Badge/Badge";
import "./Card.scss";

export interface ICard {
  title: string;
  description: string;
  tags?: string[];
  period?: string;
  banner?: string;
  bannerAlt?: string;
  href?: string;
}

const Card = ({
  title,
  description,
  tags,
  period,
  banner = "",
  bannerAlt = "",
  href = "#",
}: ICard) => {
  return (
    <a href={href}>
      <div className="card">
        {banner ? (
          <img src={banner} alt={bannerAlt} className="card__banner" />
        ) : (
          <p className="card__period">{period}</p>
        )}
        <div className="card__content">
          <h3>{title}</h3>
          <p>{description}</p>
          <span className="card__content-tags">
            {tags?.map((tag, index) => (
              <Badge key={index}>{tag}</Badge>
            ))}
          </span>
        </div>
      </div>
    </a>
  );
};

export default Card;
