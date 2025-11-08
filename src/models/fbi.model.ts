export interface FBIWanted {
  uid: string;
  title: string;
  subjects: string[];
  field_offices?: string[];
  images?: FBIImage[];
  description?: string;
  warning_message?: string;
  reward_text?: string;
  caution?: string;
  nationality?: string;
  sex?: string;
  dates_of_birth_used?: string[];
  place_of_birth?: string;
  hair?: string;
  eyes?: string;
  height_min?: number;
  height_max?: number;
  weight?: string;
  publication?: string;
}

export interface FBIImage {
  original: string;
  thumb: string;
  large: string;
  caption?: string;
}

export interface FBIResponse {
  total: number;
  items: FBIWanted[];
  page: number;
}
