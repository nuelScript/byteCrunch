import Footer from "@/components/footer/footer";

export default async function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full">
      {children}
      <Footer />
    </div>
  );
}
