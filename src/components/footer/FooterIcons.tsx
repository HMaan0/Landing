import Link from "next/link";

const FooterIcons = ({
  children,
  link,
}: {
  children: React.ReactNode;
  link: string;
}) => {
  return (
    <div className="text-text-theme cursor-pointer hover:text-black duration-150 transition-colors">
      <Link href={link} target="_blank">
        {children}
      </Link>
    </div>
  );
};

export default FooterIcons;
