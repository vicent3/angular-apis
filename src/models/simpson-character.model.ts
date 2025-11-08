export interface SimpsonCharacter {
  id: number;
  name: string;
  age: number | null;
  birthdate: string | null;
  gender: string;
  occupation: string;
  image_path: string; // 👈 exacto
  phrases: string[];
}
