export interface messagesModel {
  emitter: string;
  message: string;
}

export interface allConversations {
  id: string;
  name: string;
  photo: string;
  date: string;
  message: string;
  amount_message: number;
  state: boolean;
}
