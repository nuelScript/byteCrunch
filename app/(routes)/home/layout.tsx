import { Footer } from "@/components/footer";

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full">
      {children}
      <Footer />
    </div>
  );
}
