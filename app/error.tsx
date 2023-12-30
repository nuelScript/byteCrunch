"use client";

import { useEffect } from "react";
import EmptyState from "@/components/empty-state";

interface ErrorStateProps {
  error: Error;
}

const ErrorState: React.FC<ErrorStateProps> = ({ error }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return <EmptyState showReset title="Uh oh" subtitle="Something went wrong" />;
};

export default ErrorState;
