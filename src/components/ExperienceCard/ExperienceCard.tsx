import Badge from "../Badge/Badge";
import "./ExperienceCard.scss";

export interface IExperience {
  company: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
  href?: string;
}

const ExperienceCard = ({
  company,
  position,
  period,
  description,
  technologies,
  href = "#",
}: IExperience) => {
  return (
    <a href={href}>
      <div className="card">
        <p className="card__period">{period}</p>
        <div className="card__position">
          <h3>
            {position} • {company}
          </h3>
          <p>{description}</p>
          <span className="card__position-technologies">
            {technologies?.map((technology, index) => (
              <Badge key={index}>{technology}</Badge>
            ))}
          </span>
        </div>
      </div>
    </a>
  );
};

export default ExperienceCard;
