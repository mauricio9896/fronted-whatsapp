export interface messagesModel {
  emitter: string;
  message: string;
  id: string;
  number: string;
}

export interface allConversations {
  id: string;
  number: string;
  name: string;
  photo: string;
  date: string;
  message: string;
  amount_message: number;
  state: boolean;
}

export interface templateModel {
  id: string;
  name: string;
  number : string;
  language: string;
  components : componentsModel[];
  message : string;
}

export interface componentsModel {
  type : string;
  parameters: parameter[];
}

export interface parameter {
  type:       string;
  image?:     image;
  document?:  document;
  video?:     video;
  text?:      string;
  dateTime?: dateTime;
  currency?:  currency;
}

export interface dateTime {
  fallback_value: string;
  day_of_month:   number;
  year:           number;
  month:          number;
  hour:           number;
  minute:         number;
}

export interface currency {
  fallback_value: string;
  code:           string;
  amount_1000:    number;
}

export interface image {
  link: string;
}

export interface video {
  link: string;
}

export interface document {
  link: string;
  filename: string;
}
