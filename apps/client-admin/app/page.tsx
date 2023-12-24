import PrimaryButton from "@/components/PrimaryButton";
import { Button } from "@/components/ui/button";

const Page = () => {
  return (
    <div>
      <h1 className="font-bold text-5xl text-red-400">Hello world</h1>
      <Button variant={"destructive"} size={"lg"}>
        Submit
      </Button>
      <PrimaryButton>Get Started</PrimaryButton>
    </div>
  );
};
export default Page;
