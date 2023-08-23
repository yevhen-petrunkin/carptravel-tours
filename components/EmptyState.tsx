"use client";

import { useRouter } from "next/navigation";

import { SectionHeading, Button } from "@/components";

const EmptyState = () => {
  const router = useRouter();

  return (
    <div className="h-[60vh] flex flex-col center-center gap-[40px]">
      <SectionHeading content="ви" highlight="загубилися?" />

      <Button
        text="Повернутися додому"
        size={["30px", "30px", "32px"]}
        line={[1.21]}
        weight={500}
        onClick={() => router.push("/")}
      />
    </div>
  );
};

export default EmptyState;
