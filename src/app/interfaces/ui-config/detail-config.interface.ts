export interface DetailConfig {
  img: string;
  subtitle?: string;
  description: string;
  rate: number;
  isVertical: boolean;
  detailCards: DetailCard[];
}

export interface DetailCard {
  title: string;
  description: string;
}
