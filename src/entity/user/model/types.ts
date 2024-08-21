export type User = {
    id: number;
    username: string;
    first_name: string;
    language_code: string;
    is_bot: boolean;
    last_name: string;
    balance: number;
    earned: number;
    createdAt: number;
    invitedBy: number;
    updatedAt: Date;
    energy: number;
    lastEnergyUpdate: Date;
    rewardCollected: boolean;
    consecutiveDays: number;
    lastLogin: Date;
    gotRefBonus: boolean;
  };