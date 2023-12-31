import PrimaryButton from "@/components/PrimaryButton";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "@/public/images/logo/logo.svg";
import Heading from "@/components/typography/Heading";

const Page = () => {
  return (
    <div className="w-[100%] h-screen flex justify-center items-center">
      <h1 className="font-bold text-5xl text-red-400">Hello world</h1>
      <Button variant={"destructive"} size={"lg"}>
        Submit
      </Button>
      <PrimaryButton>Get Started</PrimaryButton>
      <div>
        <Image src={logo} width={100} height={100} alt="logo" />
        <Heading size="h1" tagType="h2" bold="full">
          Hello World
        </Heading>
      </div>
    </div>
  );
};
export default Page;
