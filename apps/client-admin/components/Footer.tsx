import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="border-t-[1px] hidden md:block">
      <div className="flex justify-evenly gap-4 p-4">
        <div>
          <div className="flex flex-col p-4 cursor-pointer text-xl">
            All rights reserved. &copy; {currentYear} by{" "}
            <span>
              <Link href={"https://github.com/Shravan-Chaudhary"}>Shravan</Link>
            </span>
            .
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
