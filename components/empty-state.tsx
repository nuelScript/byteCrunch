"use client";

import { useRouter } from "next/navigation";
import { Heading } from "./heading";
import { Button } from "@/components/ui/button";

interface EmptyState {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
}

const EmptyState = ({
  title = "No exact matches",
  subtitle = "Try changing or removing some of your filters",
  showReset,
}: EmptyState) => {
  const router = useRouter();
  return (
    <div className="h-[100vh] flex flex-col gap-2 justify-center items-center">
      <Heading center="text-center" title={title} subtitle={subtitle} />
      <div className="w-48 mt-4">
        {showReset && (
          <Button variant="outline" onClick={() => router.push("/home")}>
            Go to Home Page
          </Button>
        )}
      </div>
    </div>
  );
};

export default EmptyState;
