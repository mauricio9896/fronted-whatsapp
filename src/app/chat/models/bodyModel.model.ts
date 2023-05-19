export interface messagesModel {
  id: string;
  text: string;
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
