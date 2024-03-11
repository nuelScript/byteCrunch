import { Navbar } from "@/components/navbar";
import { LandingHydrationPage } from "./landing";

const LandingPage = () => {
  return (
    <div className="h-full">
      <Navbar />
      <LandingHydrationPage />
    </div>
  );
};

export default LandingPage;
