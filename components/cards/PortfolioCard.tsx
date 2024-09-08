import React from "react";
import { Portfolio } from "@/config/portfolios";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";

const PortfolioCard = ({ portfolio }: { portfolio: Portfolio }) => {
  return (
    <Card className="m-4 max-w-[420px] rounded-xl">
      <div className="flex w-full flex-col items-center justify-center">
        <Image
          src="/shared/company.png"
          width={120}
          height={48}
          alt="default"
        />
        <h1>test</h1>
      </div>
    </Card>
  );
};

export default PortfolioCard;
