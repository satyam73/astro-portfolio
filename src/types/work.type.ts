export type TWork = {
  company: string;
  description: string;
  role: string;
  isOnGoing?: boolean;
  duration: {
    from: string;
    to: string;
  };
};
