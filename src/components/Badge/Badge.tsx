import "./Badge.scss";

export interface IBadge {
  children: React.ReactNode;
}

const Badge = ({ children }: IBadge) => {
  return <div className="badge">{children}</div>;
};

export default Badge;
