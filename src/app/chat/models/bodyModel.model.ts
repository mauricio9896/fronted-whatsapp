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
