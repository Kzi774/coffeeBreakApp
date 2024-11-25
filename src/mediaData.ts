// メディアデータの定義
import { MediaItem, Genre } from './types';

export const images: MediaItem[] = [
  { id: 'summer1', path: '/src/assets/images/summer1.jpg', genre: 'summer' },
  { id: 'summer2', path: '/src/assets/images/summer2.jpg', genre: 'summer' },
  { id: 'rainy1', path: '/src/assets/images/rainy1.jpg', genre: 'rainy' },
  { id: 'rainy2', path: '/src/assets/images/rainy2.jpg', genre: 'rainy' },
  { id: 'rainy3', path: '/src/assets/images/rainy3.jpg', genre: 'rainy' },
  { id: 'spring1', path: '/src/assets/images/spring1.jpg', genre: 'spring' },
  { id: 'spring2', path: '/src/assets/images/spring2.jpg', genre: 'spring' },
  { id: 'underWater1', path: '/src/assets/images/underWater1.jpg', genre: 'underWater' },
  { id: 'underWater2', path: '/src/assets/images/underWater2.jpg', genre: 'underWater' },
  { id: 'beach1', path: '/src/assets/images/beach1.jpg', genre: 'beach' },
  { id: 'beach2', path: '/src/assets/images/beach2.jpg', genre: 'beach' },
  { id: 'forest1', path: '/src/assets/images/forest1.jpg', genre: 'nature' },
  { id: 'forest2', path: '/src/assets/images/forest2.jpg', genre: 'nature' },
  { id: 'forest3', path: '/src/assets/images/forest3.jpg', genre: 'nature' },
  { id: 'river1', path: '/src/assets/images/river1.jpg', genre: 'river' },
  { id: 'river2', path: '/src/assets/images/river2.jpg', genre: 'river' },
  { id: 'inaka1', path: '/src/assets/images/inaka1.jpg', genre: 'inaka' },
  { id: 'inaka2', path: '/src/assets/images/inaka2.jpg', genre: 'inaka' },
  { id: 'inaka3', path: '/src/assets/images/inaka3.jpg', genre: 'inaka' },
  { id: 'inaka4', path: '/src/assets/images/inaka4.jpg', genre: 'inaka' },
  { id: 'inaka5', path: '/src/assets/images/inaka5.jpg', genre: 'inaka' },
  { id: 'inaka6', path: '/src/assets/images/inaka6.jpg', genre: 'inaka' },
];

export const music: MediaItem[] = [
  { id: 'rainy_bgm1', path: '/src/assets/audio/rainy.mp3', genre: 'rainy' },
  { id: 'rainy_bgm2', path: '/src/assets/audio/rainy2.mp3', genre: 'rainy' },
  { id: 'spring_bgm2', path: '/src/assets/audio/spring.mp3', genre: 'spring' },
  { id: 'summer_bgm1', path: '/src/assets/audio/summer.mp3', genre: 'summer' },
  { id: 'summer_bgm2', path: '/src/assets/audio/summerForest.mp3', genre: 'summer' },
  { id: 'summer_bgm', path: '/src/assets/audio/summerHouse.mp3', genre: 'summer' },
  { id: 'underWater_bgm', path: '/src/assets/audio/underWater.mp3', genre: 'underWater' },
  { id: 'beach_bgm', path: '/src/assets/audio/beach1.mp3', genre: 'beach' },
  { id: 'beach_bgm2', path: '/src/assets/audio/beach2.mp3', genre: 'beach' },
  { id: 'beach_bgm3', path: '/src/assets/audio/beach3.mp3', genre: 'beach' },
  { id: 'beach_bgm4', path: '/src/assets/audio/beach4.mp3', genre: 'beach' },
  { id: 'nature_bgm', path: '/src/assets/audio/windForest.mp3', genre: 'nature' },
  { id: 'nature_bgm2', path: '/src/assets/audio/forest1.mp3', genre: 'nature' },
  { id: 'nature_bgm3', path: '/src/assets/audio/forest2.mp3', genre: 'nature' },
  { id: 'river_bgm', path: '/src/assets/audio/river1.mp3', genre: 'river' },
  { id: 'inaka_bgm', path: '/src/assets/audio/inaka1.mp3', genre: 'inaka' },
];

export const genreLabels: Record<Genre, string> = {
  nature: '自然',
  spring: '春',
  summer: '夏',
  rainy: '雨',
  underWater: '水中',
  beach: '海辺',
  river: '川',
  inaka: '田舎',
};