import React from "react";
import MemberCard from "./cards/memberCard";
import { Members } from "@/config/members";
const MemberSection = () => {
  return (
    <section id="members">
      <div className="flex min-h-screen w-full items-center justify-center bg-purple-500">
        <h1 className="flex items-center justify-center text-2xl font-bold text-white">
          Members
          <MemberCard />
        </h1>
      </div>
    </section>
  );
};

export default MemberSection;
