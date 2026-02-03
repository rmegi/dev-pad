export type Block =
  | {
      id: string;
      type: "text";
      content: string;
    }
  | {
      id: string;
      type: "code";
      content: string;
      language: string;
    };

export interface Tab {
  id: string;
  title: string;
  content: string;
  lastUpdate: number;
};
