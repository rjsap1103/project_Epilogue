export const games = [
  {
    id: "rdr2",
    title: "Red Dead Redemption 2",
    description: "서부 개척 시대의 황혼, 아서 모건의 쓸쓸하고 장엄한 여정.",
    color: "var(--color-accent-rdr2)",
    image: "/images/rdr2_card.png",
    quote: "I gave you all I had. I did.",
    story: "1899년, 서부 시대가 저물어가는 미국. 무법자 아서 모건과 반 더 린드 갱단은 정부의 추적을 피해 달아나며, 생존과 의리 사이에서 고뇌합니다. 시대의 변화 속에서 아서는 자신의 삶의 의미를 되돌아보고, 남은 자들을 위해 숭고한 선택을 하게 됩니다.",
    characters: ["아서 모건 (Arthur Morgan)", "더치 반 더 린드 (Dutch van der Linde)", "존 마스턴 (John Marston)"],
    gallery: ["/images/rdr2_card.png", "/images/rdr2_gallery_1.png"]
  },
  {
    id: "bg3",
    title: "Baldur's Gate 3",
    description: "운명에 맞서는 동료들과의 판타지 대서사시.",
    color: "var(--color-accent-bg3)",
    image: "/images/bg3_card.png",
    quote: "You have a home here, if you want it.",
    story: "마인드 플레이어의 올챙이에 감염된 주인공은 살기 위해, 혹은 더 큰 힘을 얻기 위해 동료들을 모아 발더스 게이트로 향합니다. 신들의 계략과 강력한 악의 세력에 맞서며 플레이어의 선택이 세상의 운명을 결정짓게 됩니다.",
    characters: ["섀도하트 (Shadowheart)", "아스타리온 (Astarion)", "게일 (Gale)", "레이젤 (Lae'zel)"],
    gallery: ["/images/bg3_card.png", "/images/bg3_gallery_1.png"]
  },
  {
    id: "cp2077",
    title: "Cyberpunk 2077",
    description: "거대한 디스토피아, 나이트 시티에서 살아남기 위한 V의 투쟁.",
    color: "var(--color-accent-cp2077)",
    image: "/images/cp2077_card.png",
    quote: "A happy ending? For folks like us? Wrong city. Wrong people.",
    story: "권력과 외형 변형에 집착하는 메갈로폴리스 나이트 시티. 용병 V는 불멸의 열쇠라 불리는 프로토타입 임플란트를 훔치다 죽음의 위기에 처하게 됩니다. 머릿속에 깃든 테러리스트 조니 실버핸드의 유령과 함께, V는 생존을 위한 마지막 의뢰를 시작합니다.",
    characters: ["V", "조니 실버핸드 (Johnny Silverhand)", "팬앰 팔머 (Panam Palmer)", "주디 알바레즈 (Judy Alvarez)"],
    gallery: ["/images/cp2077_card.png", "/images/cp2077_gallery_1.png"]
  },
  {
    id: "sanabi",
    title: "SANABI",
    description: "사이버펑크 조선, 잃어버린 딸을 찾기 위한 처절한 복수극.",
    color: "var(--color-accent-sanabi)",
    image: "/images/sanabi_card.png",
    quote: "이건 내 임무가 아니야. 내 딸을 위한 복수지.",
    story: "조선 사이버펑크 도시 '마고'. 퇴역 군인인 주인공은 정체불명의 인물 '산나비'에게 딸을 잃고 복수를 다짐합니다. 거대한 기계 팔을 이용한 와이어 액션으로 마고 시를 헤쳐나가며, 딸의 죽음에 얽힌 충격적인 진실과 마주하게 됩니다.",
    characters: ["주인공 (준장)", "마리 (Mari)", "송소령 (Major Song)"],
    gallery: ["/images/sanabi_card.png", "/images/sanabi_gallery_1.png"]
  },
  {
    id: "nier",
    title: "NieR: Automata",
    description: "기계와 안드로이드의 실존주의적 고뇌를 다룬 슬프고 아름다운 이야기.",
    color: "var(--color-accent-nier)",
    image: "/images/nier_card.png",
    quote: "Everything that lives is designed to end.",
    story: "외계 기계 생명체에 의해 지구를 빼앗긴 인류. 안드로이드 병사 2B와 9S는 지구 탈환을 위해 파견되지만, 전투를 거듭할수록 기계 생명체들의 기묘한 행동과 감정을 목격하게 됩니다. 끊임없는 죽음과 부활의 굴레 속에서 그들은 자신들의 존재 의의와 충격적인 진실에 직면합니다.",
    characters: ["2B (YoRHa No.2 Type B)", "9S (YoRHa No.9 Type S)", "A2 (YoRHa Type A No.2)", "파스칼 (Pascal)"],
    gallery: ["/images/nier_card.png", "/images/nier_gallery_1.png"]
  },
  {
    id: "tlou",
    title: "The Last of Us Part I",
    description: "포스트 아포칼립스 세계관에서 피어난 묵직한 인간애와 생존기.",
    color: "var(--color-accent-tlou)",
    image: "/images/tlou_card.png",
    quote: "I swear.",
    story: "정체불명의 동충하초 포자 감염으로 인류 대다수가 괴물로 변한 세상. 밀수꾼 조엘은 인류의 유일한 희망일지도 모르는 면역자 소녀 엘리를 비밀 연구소로 호송하는 임무를 맡습니다. 무자비한 생존자들과 감염자들 사이에서, 두 사람은 서로를 의지하며 목숨을 건 여정을 함께합니다.",
    characters: ["조엘 밀러 (Joel Miller)", "엘리 윌리엄스 (Ellie Williams)", "테스 (Tess)", "토미 밀러 (Tommy Miller)"],
    gallery: ["/images/tlou_card.png", "/images/tlou_gallery_1.png"]
  }
];
