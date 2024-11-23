import "./Badge.scss";

export interface IBadge {
  children: React.ReactNode;
}

const Badge = ({ children }: IBadge) => {
  return <span className={`badge`}>{children}</span>;
};

export default Badge;
