// 型定義ファイル
export type Genre = 'nature' | 'spring' | 'summer' | 'rainy' | 'underWater' | 'beach' | 'river' | 'inaka';

export interface MediaItem {
  id: string;
  path: string;
  genre: Genre;
}