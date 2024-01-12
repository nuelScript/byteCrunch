import { Navbar } from "@/components/navbar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <Navbar />
      {children}
    </div>
  );
};

export default RootLayout;
