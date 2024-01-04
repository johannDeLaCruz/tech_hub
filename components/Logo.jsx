import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <h1 className="text-center font-heading text-heading font-semibold">
        <span>T</span>
        <span className="text-primary-500">H</span>
      </h1>
    </Link>
  );
};

export default Logo;
