export interface ResponseBoardList {
  text: string;
  key: number;
  name: string;
  title: string;
  _id: string;
  date?: string;
  created?: Date;
}

export interface ScoreBoardState {
  boardState: string;
  boardList: {
    data: ResponseBoardList[];
    last: boolean;
  };
  attendList: {
    data: ResponseAttendUserList[];
  };
  scoreList: {
    data: ResponseScoreList[];
  };
}

export interface ResponseScoreList {
  _id: string;
  usernmae: string;
  userId: string;
  date?: string;
  boardId: string;
  score: {
    firstGame: string;
    secondGame: string;
    thirdGame: string;
    fourGame: string;
  };
  allPin: number;
  avg: string;
  rank?: number;
}

export interface ResponseAttendUserList {
  _id: string;
  username: string;
  boardId: string;
}

export interface CreateScore {
  username: string;
  userId: string;
  boardId: string;
  score: {
    firstGame?: string;
    secnedGame?: string;
    thirdGame?: string;
    fourGame?: string;
  };
}
