export interface IComment {
  id: number;
  content: string;
  votes: number;
  replies: IComment[];
}

export interface IAddCommentProps {
  id: number;
  comments: IComment[];
  label: string;
  afterReply?: () => void;
  setComments: any;
}

export interface ICommentProps {
  id: number;
  content: string;
  votes: number;
  replies: IComment[];
  comments: IComment[];
  setComments: any;
}
