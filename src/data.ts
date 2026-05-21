import { Bandit, Companion, Faction, Family, NPC, RegionGeography, Stat } from './types';

export const stats: Stat[] = [
  { id: 'str', name: '무력', emoji: '💪' },
  { id: 'int', name: '지략', emoji: '🧠' },
  { id: 'cmd', name: '통솔', emoji: '👁' },
  { id: 'cha', name: '매력', emoji: '🌹' },
  { id: 'agi', name: '민첩', emoji: '🪽' },
  { id: 'con', name: '체력', emoji: '🍖' },
];

export const factions: Faction[] = [
  { id: 'septentria', name: '셉텐트리아', emoji: '🦅', leaderType: '여황제 전제', description: '최대영토·관료·정예군단' },
  { id: 'valoria', name: '발로리아', emoji: '🦁', leaderType: '여왕 봉건', description: '기사단·명예·분권' },
  { id: 'ardenia', name: '아르데니아', emoji: '🌙', leaderType: '여술탄', description: '교역·암투·맘루크' },
  { id: 'khan-terra', name: '칸-테라', emoji: '🐎', leaderType: '여대칸', description: '기마궁병·이동·속도' },
  { id: 'nordgard', name: '노르드가드', emoji: '🐺', leaderType: '여왕 무력통치', description: '해상·약탈·버서커' },
];

export const bandits: Bandit[] = [
  { region: '셉텐트리아', name: '녹슨 철기대', description: '가혹한 규율 피해 도망친 탈영병. 녹슨 중무장, 낮은 사기. 방패/투창 방진 구사' },
  { region: '노르드가드', name: '검은 파도 해적', description: '가족 먹이려 남하한 극빈층. 둥근방패/도끼 무장. 항복 없는 결사적 호전성' },
  { region: '아르데니아', name: '모래바람 노상강도', description: '상권서 밀려난 변방 부족. 앙상한 말/낙타 탑승. 투창 게릴라/사막 유인 전술' },
  { region: '발로리아', name: '검은 숲 밀렵꾼', description: '가혹한 세금 피해 이탈한 농노. 숲 매복, 장궁/쇠스랑 일제 사격' },
  { region: '칸-테라', name: '버려진 발굽 약탈자', description: '전쟁 패배 유목민. 조잡한 단궁 기마 궁술 구사. 기동력 우수/방어 전무' },
  { region: '공통 (전역)', name: '잿빛 넝마주이', description: '모든 걸 잃은 오합지졸 부랑자. 누더기/몽둥이 무장. 처절한 생존 투쟁' },
];

export const companions: Companion[] = [
  { id: 'c1', name: '루실리아', gender: '女', role: '중보병', tier: 'T2', stats: '💪7 👁9', specialty: '방패벽진형유지(야전방어시👁+1)', imageUrl: 'https://i.postimg.cc/9fDwYjT3/lusillia.png' },
  { id: 'c2', name: '카시우스', gender: '男', role: '행정가', tier: 'T1', stats: '🧠9 🌹3', specialty: '영지세수+20%,교역협상시🧠+1', imageUrl: 'https://i.postimg.cc/XvrBk0FS/kasiuseu.png' },
  { id: 'c3', name: '베아트리스', gender: '女', role: '소드마스터', tier: 'T2', stats: '💪7 🪽9', specialty: '일기토시💪+1', imageUrl: 'https://i.postimg.cc/vm4xtdnJ/beateuliseu.png' },
  { id: 'c4', name: '줄리앙', gender: '男', role: '음유시인', tier: 'T1', stats: '🌹9 🧠6', specialty: '연회·외교시🌹+1,정보수집', imageUrl: 'https://i.postimg.cc/XvrBk052/julliang.png' },
  { id: 'c5', name: '자디르', gender: '女', role: '상인', tier: 'T1', stats: '🧠7 🌹6', specialty: '매입가−10%,전리품판매가+15%', imageUrl: 'https://i.postimg.cc/KY13DyTJ/jadileu.png' },
  { id: 'c6', name: '하킴', gender: '男', role: '의학자', tier: 'T2', stats: '🧠8 🌹5', specialty: '부상회복2배,독살공작(🧠판정)', imageUrl: 'https://i.postimg.cc/pdm5Jtj1/hakim.png' },
  { id: 'c7', name: '우루누크', gender: '女', role: '기마궁수', tier: 'T3', stats: '💪9 🪽7', specialty: '산병전시🪽+1,파르티안샷', imageUrl: 'https://i.postimg.cc/T37WbPKs/ulunukeu.png' },
  { id: 'c8', name: '치치', gender: '女', role: '기마궁수', tier: 'T2', stats: '💪7 🪽6', specialty: '기마추격시🪽+1', imageUrl: 'https://i.postimg.cc/DzS4PKGp/chichi.png' },
  { id: 'c9', name: '바트바야르', gender: '男', role: '공학자', tier: 'T1', stats: '🧠8 💪3', specialty: '공성병기제작2배,수리비−50%', imageUrl: 'https://i.postimg.cc/9Q8q9fDN/bateubayaleu.png' },
  { id: 'c10', name: '에일라', gender: '女', role: '소드마스터', tier: 'T2', stats: '💪7 🪽6 👁4', specialty: '돌격시적진형붕괴판정+1', imageUrl: 'https://i.postimg.cc/qvbCK7ND/eilla.png' },
  { id: 'c11', name: '시그리트', gender: '女', role: '아처', tier: 'T1', stats: '💪6 🪽7', specialty: '정찰·매복간파시🪽+1,악천후무시', imageUrl: 'https://i.postimg.cc/BnY1FvjV/sigeuliteu.png' },
];

export const npcs: Record<string, NPC[]> = {
  '셉텐트리아': [
    { name: '카르멘', title: '여황제', gender: '女', traits: '카리스마·전사·지배자', description: '황금투구, 친위대직접지휘', stats: '💪8 👁9 🌹8', imageUrl: 'https://i.postimg.cc/vZC40VXz/aulelliuseu-1-cheosjou.png' },
    { name: '줄리우스', title: '황자(국서)', gender: '男', traits: '온화·기품·외조', description: '내정', stats: '🧠7 🌹6', imageUrl: 'https://i.postimg.cc/13b8vqMK/aulelliuseu-2-cheosjou.png' },
    { name: '발레리아', title: '제1황녀', gender: '女', traits: '용맹·책임감·강직', description: '관문성방어사령관', stats: '💪7 👁7 🪽6', imageUrl: 'https://i.postimg.cc/W1xd5kSS/aulelliuseu-3-cheosjou.png' },
    { name: '마르티나', title: '대금고장', gender: '女', traits: '냉철·계산적·실권자', description: '자본으로군대좌우', stats: '🧠9 🌹7 👁6', imageUrl: 'https://i.postimg.cc/Mpnc0D0m/silbiuseu-1-cheosjou.png' },
    { name: '루키우스', title: '상무관', gender: '男', traits: '섬세·꼼꼼·성실', description: '무역항세금·특산물관리', stats: '🧠7', imageUrl: 'https://i.postimg.cc/Mpgn9Qty/silbiuseu-2-cheosjou.png' },
    { name: '옥타비아', title: '무장상인', gender: '女', traits: '대담·개척정신·실행력', description: '정예호위+육로무역개척', stats: '💪6 🪽6 🌹6', imageUrl: 'https://i.postimg.cc/9QsDL71d/silbiuseu-3-cheosjou.png' },
    { name: '클라우디아', title: '총사령관', gender: '女', traits: '백전노장·경외·무골', description: '철의군단. 흉터가득.', stats: '💪9 👁8', imageUrl: 'https://i.postimg.cc/RFLqCb9r/peullabiuseu-1-cheosjou.png' },
    { name: '셉티무스', title: '병참관', gender: '男', traits: '헌신·성실·자애', description: '무기생산·상이군인돌봄. \'군단의 아버지\'', stats: '🧠6', imageUrl: 'https://i.postimg.cc/B6BtZw3d/peullabiuseu-2-cheosjou.png' },
    { name: '타티아나', title: '돌격대장', gender: '女', traits: '고아출신·증명욕·맹렬', description: '수양딸. 비질성담당', stats: '💪8 🪽7', imageUrl: 'https://i.postimg.cc/2673jXmN/peullabiuseu-3-cheosjou.png' },
  ],
  '발로리아': [
    { name: '이사벨라', title: '여왕', gender: '女', traits: '맹렬·기사도·낭만', description: '사자왕혈통. 전장=맹렬, 평시=기사도수호', stats: '💪8 👁7 🌹8', imageUrl: 'https://i.postimg.cc/yYY3xBkL/mongpoleu-1-cheosjou.png' },
    { name: '필립', title: '국서', gender: '男', traits: '우아·예술·온순', description: '음유시인. 내정', stats: '🌹7 🧠6', imageUrl: 'https://i.postimg.cc/qMbhCY3L/mongpoleu-2-cheosjou.png' },
    { name: '잔', title: '제1왕녀', gender: '女', traits: '마상창챔피언·열정·자부심', description: '그리핀보루성담당', stats: '💪8 🪽7', imageUrl: 'https://i.postimg.cc/c49g8jnV/mongpoleu-3-cheosjou.png' },
    { name: '엘레노어', title: '국경백', gender: '女', traits: '억셈·실용적·고집', description: '제국침공경계. 방어선구축', stats: '👁7 🧠6 💪6', imageUrl: 'https://i.postimg.cc/DyjJbDGz/beullaeg-udeu-1-cheosjou.png' },
    { name: '헨리', title: '영지관리인', gender: '男', traits: '과묵·책임감·든든', description: '성벽보수·징집병가족돌봄', stats: '🧠6', imageUrl: 'https://i.postimg.cc/mgPc3w3L/beullaeg-udeu-2-cheosjou.png' },
    { name: '아델라인', title: '수비대장', gender: '女', traits: '날카로움·기동력·정찰', description: '가주여동생. 경장갑순찰대', stats: '🪽8 💪5', imageUrl: 'https://i.postimg.cc/t4s1d5dy/beullaeg-udeu-3-cheosjou.png' },
    { name: '마거리트', title: '대지주', gender: '女', traits: '호탕·실권자·정치력', description: '곡창지대지배', stats: '👁7 🧠7 🌹6', imageUrl: 'https://i.postimg.cc/4NL7hMc4/bobe-1-cheosjou.png' },
    { name: '클로드', title: '농무관', gender: '男', traits: '학자풍·식물학·온건', description: '생산량극대화천재', stats: '🧠8', imageUrl: 'https://i.postimg.cc/9F8RqS9F/bobe-2-cheosjou.png' },
    { name: '샬롯', title: '상단장', gender: '女', traits: '거침없음·대륙횡단·거상', description: '용병+대륙횡단유통', stats: '👁6 🌹6 🪽5', imageUrl: 'https://i.postimg.cc/DyjJbDGZ/bobe-3-cheosjou.png' },
  ],
  '아르데니아': [
    { name: '파티마', title: '여술탄', gender: '女', traits: '냉혹·비밀주의·정치가', description: '암살자·정보원직접통제', stats: '🧠9 🌹7 👁7', imageUrl: 'https://i.postimg.cc/YSghZCyZ/al-dina-1-cheosjou.png' },
    { name: '아미르', title: '국서', gender: '男', traits: '매혹적·예술·시인', description: '하렘의주인. 궁전내실·연회', stats: '🌹9', imageUrl: 'https://i.postimg.cc/BvDXknVW/al-dina-2-cheosjou.png' },
    { name: '아이샤', title: '제1공주', gender: '女', traits: '치밀·냉혈·숙청자', description: '척살대대장', stats: '💪7 🪽8 🧠7', imageUrl: 'https://i.postimg.cc/KYLRw8HS/al-dina-3-cheosjou.png' },
    { name: '살마', title: '대행수', gender: '女', traits: '타산적·호령·거상', description: '실크로드호령', stats: '🧠8 🌹7 👁6', imageUrl: 'https://i.postimg.cc/NMc5cv3R/kasim-1-cheosjou.png' },
    { name: '타리크', title: '대금고장', gender: '男', traits: '천재·수완·조작', description: '살마남편. 교역품시세조작', stats: '🧠9', imageUrl: 'https://i.postimg.cc/2673jXYn/kasim-2-cheosjou.png' },
    { name: '라일라', title: '해상단주', gender: '女', traits: '투사·개척·무장', description: '무장상선. 해적소탕+무역로개척', stats: '💪7 🪽7 👁5', imageUrl: 'https://i.postimg.cc/63fT61Kr/kasim-3-cheosjou.png' },
    { name: '자라', title: '총사령관', gender: '女', traits: '흉터투성이·달인·맹렬', description: '맘루크기병대. 사막전술', stats: '💪9 👁8 🪽6', imageUrl: 'https://i.postimg.cc/vm9ckZNY/al-jaheuleu-1-cheosjou.png' },
    { name: '하산', title: '병참관', gender: '男', traits: '묵묵·듬직·헌신', description: '자라남편. 낙타사육·군수물자', stats: '🧠6', imageUrl: 'https://i.postimg.cc/YSghZCsq/al-jaheuleu-2-cheosjou.png' },
    { name: '나디아', title: '돌격대장', gender: '女', traits: '창술·게릴라·기동', description: '가주여동생. 경장갑기병게릴라전', stats: '💪8 🪽8', imageUrl: 'https://i.postimg.cc/HxgVg1qp/al-jaheuleu-3-cheosjou.png' },
  ],
  '칸-테라': [
    { name: '알탄', title: '대칸', gender: '女', traits: '호방·무패·카리스마', description: '전원기병. 직접돌격지휘', stats: '💪9 👁8 🪽8', imageUrl: 'https://i.postimg.cc/c49g8j3y/boleujigin-1-cheosjou.png' },
    { name: '티무르', title: '국서', gender: '男', traits: '학식·초원의지혜·온화', description: '유목민전통수호. 지혜', stats: '🧠7 🌹6', imageUrl: 'https://i.postimg.cc/02WMJ3S1/boleujigin-2-cheosjou.png' },
    { name: '쿠툴룬', title: '제1공주', gender: '女', traits: '대담·전술천재·야심', description: '차기대칸후보. 독립기병대', stats: '💪7 👁8 🪽7', imageUrl: 'https://i.postimg.cc/7YsGTczy/boleujigin-3-cheosjou.png' },
    { name: '제베', title: '선봉대장', gender: '女', traits: '냉정·번개·속도', description: '기습·유인전술', stats: '💪8 🪽9 👁5', imageUrl: 'https://i.postimg.cc/fLNJNQGy/jallaileu-1-cheosjou.png' },
    { name: '카사르', title: '대장장이', gender: '男', traits: '무뚝뚝·장인·혁신', description: '제베남편. 기병용무구혁신', stats: '🧠8', imageUrl: 'https://i.postimg.cc/26DVDNsV/jallaileu-2-cheosjou.png' },
    { name: '수베데이', title: '유격대장', gender: '女', traits: '사냥꾼·본능·야생', description: '파르티안전술', stats: '💪7 🪽8', imageUrl: 'https://i.postimg.cc/B60X0frL/jallaileu-3-cheosjou.png' },
    { name: '툴루이', title: '군마장', gender: '女', traits: '자애·거대·유목민', description: '유목식보급·가축관리', stats: '👁7 🧠6', imageUrl: 'https://i.postimg.cc/gJHrcBpv/koleugun-1-cheosjou.png' },
    { name: '바르스', title: '천막지기', gender: '男', traits: '말솜씨·사교·수완', description: '툴루이남편. 말교역외교', stats: '🌹7 🧠6', imageUrl: 'https://i.postimg.cc/zBF3DPNw/koleugun-2-cheosjou.png' },
    { name: '만두카이', title: '보급대장', gender: '女', traits: '무모·호쾌·돌파력', description: '대칸직속. 강행군보급. 약탈보급전문', stats: '💪9 🪽7', imageUrl: 'https://i.postimg.cc/pTJyV1vw/koleugun-3-cheosjou.png' },
  ],
  '노르드가드': [
    { name: '시그리드', title: '여왕', gender: '女', traits: '폭군·무력·공포', description: '반발세력무력진압. 두려움으로통치', stats: '💪9 👁7', imageUrl: 'https://i.postimg.cc/FHwYTLGn/aieonsaideu-1-cheosjou.png' },
    { name: '발더', title: '국서', gender: '男', traits: '인내·조용·비밀', description: '왕의그늘. 실질내정. 비밀정보망', stats: '🧠7', imageUrl: 'https://i.postimg.cc/HkFr6y3F/aieonsaideu-2-cheosjou.png' },
    { name: '아스트리드', title: '제1왕녀', gender: '女', traits: '잔혹·지배욕·모후닮', description: '어머니보다잔혹. 무력세습', stats: '💪8 🌹5', imageUrl: 'https://i.postimg.cc/Dzs8HwYY/aieonsaideu-3-cheosjou.png' },
    { name: '헬가', title: '선단장', gender: '女', traits: '호쾌·바다·약탈', description: '30척약탈함대. 연안습격', stats: '💪7 👁7 🪽7', imageUrl: 'https://i.postimg.cc/XYrZK8KN/seutombon-1-cheosjou.png' },
    { name: '에릭', title: '조선공', gender: '男', traits: '천재·은둔·완벽주의', description: '아스트리드남편. 혁신적군선설계', stats: '🧠9', imageUrl: 'https://i.postimg.cc/Bnj85g5v/seutombon-2-cheosjou.png' },
    { name: '잉그리드', title: '약탈대장', gender: '女', traits: '거친·접현전·강습', description: '상륙전·접현전전문', stats: '💪8 🪽6', imageUrl: 'https://i.postimg.cc/K81K7N7L/seutombon-3-cheosjou.png' },
    { name: '브륀힐트', title: '대장로', gender: '女', traits: '고대룬·은둔·예언', description: '고대전통수호자', stats: '💪6 🧠8', imageUrl: 'https://i.postimg.cc/CM4fwdLY/geulim-ulpeu-1-cheosjou.png' },
    { name: '펜', title: '주술사', gender: '男', traits: '온화·치유·독', description: '구(舊)왕가혈통. 산악부족', stats: '🧠7', imageUrl: 'https://i.postimg.cc/kXXRG9Bf/geulim-ulpeu-2-cheosjou.png' },
    { name: '프레야', title: '수비대장', gender: '女', traits: '용맹·명사수·사냥꾼', description: '국경선방어', stats: '👁7 💪6', imageUrl: 'https://i.postimg.cc/qMM6q0zQ/geulim-ulpeu-3-cheosjou.png' },
  ]
};

export const families: Record<string, Family[]> = {
  '셉텐트리아': [
    { name: '아우렐리우스', role: '황가', members: ['카르멘(당주)', '줄리우스(참모)', '발레리아(장수)'] },
    { name: '실비우스', role: '재무', members: ['마르티나(당주)', '루키우스(참모)', '옥타비아(장수)'] },
    { name: '플라비우스', role: '군부', members: ['클라우디아(당주)', '셉티무스(참모)', '타티아나(장수)'] }
  ],
  '발로리아': [
    { name: '몽포르', role: '왕가', members: ['이사벨라(당주)', '필립(참모)', '잔(장수)'] },
    { name: '블랙우드', role: '군사', members: ['엘레노어(당주)', '헨리(참모)', '아델라인(장수)'] },
    { name: '보베', role: '경제', members: ['마거리트(당주)', '클로드(참모)', '샬롯(장수)'] }
  ],
  '아르데니아': [
    { name: '알 디나', role: '술탄가', members: ['파티마(당주)', '아미르(참모)', '아이샤(장수)'] },
    { name: '카심', role: '상업', members: ['살마(당주)', '타리크(참모)', '라일라(장수)'] },
    { name: '알 자흐르', role: '군사', members: ['자라(당주)', '하산(참모)', '나디아(장수)'] }
  ],
  '칸-테라': [
    { name: '보르지긴', role: '대칸가', members: ['알탄(당주)', '티무르(참모)', '쿠툴룬(장수)'] },
    { name: '잘라이르', role: '선봉', members: ['제베(당주)', '카사르(참모)', '수베데이(장수)'] },
    { name: '코르군', role: '후방', members: ['툴루이(당주)', '바르스(참모)', '만두카이(장수)'] }
  ],
  '노르드가드': [
    { name: '아이언사이드', role: '왕가', members: ['시그리드(당주)', '발더(참모)', '아스트리드(장수)'] },
    { name: '스톰본', role: '해상', members: ['헬가(당주)', '에릭(참모)', '잉그리드(장수)'] },
    { name: '그림울프', role: '의식', members: ['브륀힐트(당주)', '펜(참모)', '프레야(장수)'] }
  ]
};

export const regions: RegionGeography[] = [
  {
    faction: '셉텐트리아', 
    capital: '에테르나 도시 (아우렐리우스)',
    fortresses: [
      '황금관문 성 서문·동문 (아우렐리우스)',
      '레기오스 성 (아우렐리우스)',
      '포르투스 도시 항구 (실비우스)',
      '비질 성 (실비우스)',
      '사자발 성, 오레곤 성, 철권 성 (플라비우스)'
    ],
    villages: [
      '북/서부: 오레움(밀), 올리바(올리브), 그라눔(금), 페룸(철)',
      '남/동부: 파니스(빵), 비티스(포도), 아쿠아(소금), 실바(목재), 테라(점토)',
      '동/북부: 라나(양모), 시나(공구)'
    ],
    imageUrl: 'https://i.postimg.cc/WpWnn9Lb/sebtenteulia-jegug.png'
  },
  {
    faction: '발로리아',
    capital: '발로리아시티 도시 (몽포르)',
    fortresses: [
      '그리핀보루 성 (몽포르)',
      '블랙우드 성 (블랙우드)',
      '에스탈리아 도시 (보베)'
    ],
    villages: [
      '북/서부: 몽트(소), 랑스(말), 벨르(포도주), 폰드(밀)',
      '남/서부: 게슈(양), 랑(밀), 포르(목재), 퐁(민물고기), 발(사과), 비발리(금)'
    ],
    imageUrl: 'https://i.postimg.cc/8kKHHyQT/jido-ballo-lia-selyeog.png'
  },
  {
    faction: '아르데니아',
    capital: '알 다함 도시 (카심)',
    fortresses: [
      '알 자흐라 (알 디나)',
      '모래파수 성 (알 자흐르)',
      '태양방패 성 (알 자흐르)'
    ],
    villages: [
      '서부/북서부: 하리르(비단), 야함(공구), 슈가르(설탕), 아스민(꽃), 카와(커피), 자프란(향신료)',
      '동부/북동부: 주마르드(보석), 나할(대추야자), 바흐르(진주), 밀(소금), 자말(낙타)'
    ],
    imageUrl: 'https://i.postimg.cc/rynJJhXp/aleudenia-sultangug.png'
  },
  {
    faction: '칸-테라',
    capital: '오르두 도시 (보르지긴)',
    fortresses: [
      '자르이무 성 (코르군)'
    ],
    villages: [
      '북부/북동부: 바투(치즈), 보르지긴(말), 타나(가죽), 소론(양)',
      '남부/남동부: 자무카(철), 카라(목탄), 몽케(활/화살), 테무(거친 옷감), 투르(소), 구유크(석재)'
    ],
    imageUrl: 'https://i.postimg.cc/CMPNNvTF/kan-tela-daekangug.png'
  },
  {
    faction: '노르드가드',
    capital: '프로스트하임 도시 (아이언사이드)',
    fortresses: [
      '검은바위보루 성 (그림울프)'
    ],
    villages: [
      '서부/남서부: 울프릭(모피), 에이르(약초), 비요른(가죽), 바르드(금)',
      '남동부/동부: 룬(호박), 펜리르(목재), 토른(구리), 오딘(공구), 발키리(철), 해임달(소금)'
    ],
    imageUrl: 'https://i.postimg.cc/VsGRR7Qf/noleudeugadeu-wang-gug.png'
  }
];

export const WORLD_MAP_URL = 'https://i.postimg.cc/nVRkkdbx/jido-jeon-beom-wi.webp';
