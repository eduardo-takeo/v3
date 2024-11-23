import "./IconLink.scss";

export interface IIconLinkProps {
  icon: React.ReactNode;
  href: string;
}

const IconLink = ({ icon, href, ...rest }: IIconLinkProps) => {
  return (
    <a href={href} {...rest} className="icon">
      {icon}
    </a>
  );
};

export default IconLink;
