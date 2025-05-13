"use client";

import { Award, Trophy } from "lucide-react";

import { FunctionComponent } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card/card";
import { Button } from "../ui/buttons/button";

interface RewardTransaction {
  points: number;
  content: string;
  date: string;
}

interface RewardsCardProps {
  totalPoints: number;
  tier: string;
  transactions?: RewardTransaction[];
  onConfirmRedemption: () => void;
}

const RewardsCard: FunctionComponent<RewardsCardProps> = (props) => {
  const { totalPoints, tier, transactions, onConfirmRedemption } = props;

  return (
    <Card className="p-8 w-full max-w-[700px] shadow-lg">
      <CardHeader className="pb-0">
        <h2 className="text-3xl font-bold text-center text-orange-500">
          Rewards & Redemptions
        </h2>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex justify-between items-center pt-4">
          <div className="flex items-center gap-2">
            <Award className="h-6 w-6 text-green-500" />
            <span className="text-xl font-medium text-green-500">
              {totalPoints} Points
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Trophy className="h-6 w-6 text-pink-400" />
            <span className="text-xl font-medium text-pink-400">{tier}</span>
          </div>
        </div>

        <div className="mt-8">
          <div className="grid grid-cols-3 gap-4 pb-2 border-b">
            <div className="font-medium">Rewards</div>
            <div className="font-medium">Contents</div>
            <div className="font-medium text-right">Date</div>
          </div>

          {transactions?.map((transaction, index) => (
            <div key={index} className="grid grid-cols-3 gap-4 py-4 border-b">
              <div
                className={
                  transaction.points > 0 ? "text-black" : "text-red-600"
                }
              >
                {transaction.points > 0
                  ? `+${transaction.points}`
                  : transaction.points}
              </div>
              <div>{transaction.content}</div>
              <div className="text-right">{transaction.date}</div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-4">
        <Button
          className="w-full bg-black text-white hover:bg-gray-800"
          onClick={onConfirmRedemption}
        >
          Confirm Redemption
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RewardsCard;
