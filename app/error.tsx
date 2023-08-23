"use client";

import { IErrorProps } from "@/interfaces";

import { useEffect } from "react";

import EmptyState from "@/components/EmptyState";

const ErrorState: React.FC<IErrorProps> = ({ error }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return <EmptyState />;
};

export default ErrorState;
