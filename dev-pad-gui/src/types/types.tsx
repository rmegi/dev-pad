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


export type Tab = {
  id: string;
  title: string;
  blocks: Block[];
  lastUpdate: number;
};
    