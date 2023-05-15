// export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'
// export type Visibility = 'great' | 'good' | 'ok' | 'poor'

export enum Weather {
  Sunny = 'sunny',
  Rainy = 'rainy',
  Cloudy = 'cloudy',
  Windy = 'windy',
  Stormy = 'stormy'
}

export enum Visibility {
  Great = 'great',
  Good = 'good',
  Ok = 'ok',
  Poor = 'poor'
}


export interface IDiaryEntry {
  id: number;
  date: string;
  weather: Weather;
  visibility: Visibility;
  comment: string;
}
//export type NonSensitiveInfoDiaryEntry = Pick<IDiaryEntry, 'id' | 'date' | 'visibility' | 'weather'>

export type NonSensitiveInfoDiaryEntry = Omit<IDiaryEntry, 'comment'>

export type NewDiaryEntry = Omit<IDiaryEntry, 'id'>