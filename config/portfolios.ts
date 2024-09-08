export type Portfolio = {
  title: string;
  skills: string[];
  descriptions: string[];
  image?: string;
  url?: string;
};

export const Portfolios = [
  {
    title: "VoIP 인터넷 전화 클라이언트",
    skills: ["C++"],
    descriptions: [
      "H.323 / SIP 지원 Windows용 인터넷 전화 소프트웨어",
      "음성통화, 화상통화, 텍스트 채팅, 화이트보드, 에스코티드 브라우저, 화면 공유 기능",
    ],
    image: "",
  },
  {
    title: "SBC 서버",
    skills: ["C++"],
    descriptions: [
      "Linux / Unix(Solaris) 용 서버",
      "NAT Traversal, TURN, RTP(UDP) 중계 기능",
    ],
    image: "",
  },
  {
    title: "SS7 ISUP 서버",
    skills: ["C++"],
    descriptions: [
      "Linux / Unix(Solaris) 용 서버",
      "SS7 프로토콜 중 ISUP Q.931 <--> 변환 중계 기능",
    ],
    image: "",
  },
  {
    title: "PSTN Trunk Gateway",
    skills: ["C++"],
    descriptions: [
      "Linux / Unix(Solaris) 용 장비",
      "PSTN/IP변환 중계 기능, RTP 처리 기능",
    ],
    image: "",
  },
  {
    title: "네이트온폰",
    skills: ["C++"],
    descriptions: [
      "네이트온 메신저의 부가서비스로 실행되는 인터넷 전화 소프트웨어.클라이언트 개발",
    ],
    image: "",
    url: "https://blogstation.tistory.com/14",
  },

  {
    title: "네이트온 음성, 화상 대화",
    skills: ["C++"],
    descriptions: ["네이트온 메신저의 부가서비스로 실행되는 영상회의 서비스"],
    image: "",
  },
  {
    title: "네이트온 통신중계 서비스",
    skills: ["C++"],
    descriptions: [
      "네이트온 메신저의 부가서비스로 실행되는 서비스로 영상통화 및 채팅으로 언어, 청각장애인들과 상대방 사이에서 통신중계사가 의사 소통할 수 있도록 도와주는 서비스.",
    ],
    image: "",
    url: "https://www.inews24.com/view/449083",
  },
  {
    title: "토크온",
    skills: ["C++"],
    descriptions: [
      "최대 16명까지 음성회의를 할 수 있는 서비스. 네이트온 메신저의 위상이 떨어져서 현재는 상대적으로 사용자 수가 네이트온 메신저의 절반에 육박. 2013년쯤 동시 접속자가 10만명 정도",
    ],
    image: "",
    url: "http://talkon.nate.com/",
  },
  {
    title: "기업용 메신저 네이트온비즈",
    skills: ["C++", "C#"],
    descriptions: [
      "기업용 메신저. SK그룹 계열사에 쓰기 위한 용도로 개발이 되었고 SK 계열사에서 아직도 사용 중.",
      "서버 5종류를 개발했었고 클라이언트 일부 개발.",
    ],
    image: "",
    url: "http://talkon.nate.com/",
  },
  {
    title: "㈜네오위즈게임즈 “피망” 메신저",
    skills: ["C++"],
    descriptions: [
      "㈜네오위즈게임즈에서 서비스했던 게임포털 “피망”의 게임 유저용 메신저",
      "게임을 하면서 동시에 최대 64명까지 음성 채팅 기능 포함",
    ],
    image: "",
    url: "http://talkon.nate.com/",
  },
];
