export type CardProps = {
  color: string;
  title: string;
  isSelected: boolean;
};

export type CardData = Omit<CardProps, 'isSelected'>;
