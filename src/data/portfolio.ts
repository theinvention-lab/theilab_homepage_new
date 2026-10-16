// 포트폴리오 기업 목록 (156개사)
// 형식: 기업명 | 국가 | 분야 | 서비스 | 홈페이지 | Exit/단계 | 비고
const RAW = `
서울언니들 (Seoul Unniedeul)|미얀마|패션 / 뷰티테크|시크릿 코리아|https://www.starsecretkorea.net||
포인트테크놀러지스 (POINT Technologies)|베트남|B2B/SaaS|마이포인트|||
미인씨엠씨코리아 (MEIN CMC)|베트남|라이프스타일||https://embesling.com/||
스페이스 티 (space T)|베트남|라이프스타일|스페이스티|https://spacet.vn||
야호랩 (YAHO LAB)|베트남|라이프스타일|TUDY|https://i-tudy.com/en/new-home/||
오케이쎄 (OKXE)|베트남|모빌리티&오토테크|오케이쎄|https://www.okxe.vn|Series A3|
더케이플랫폼 (The Keii Platform)|베트남|에듀 테크|위매쓰|||
베베리아 (BeBeria)|베트남|에듀 테크|베베리아|https://beberia.me||
고투조이 (Go2Joy)|베트남|트레블테크|고투조이|https://go2joy.vn/vi/|Series A3|
ABC 스튜디오 (ABC Studio)|베트남|패션 / 뷰티테크|비박스|https://www.abcstudio.co||
고미 코퍼레이션 (Gomi coporation)|베트남|패션 / 뷰티테크||||
바이비 (Vibey)|베트남|패션 / 뷰티테크|리뷰티|https://vibey.co.kr/||
뷰티 메이커스 (Beauty makers)|베트남|패션 / 뷰티테크|뷰티메이커스|https://www.beautymakers.net/home||
ODA.VN|베트남|푸드테크||https://www.oda.vn||
고미에너지딜리버리 (Gomi Energy Delivery)|한국|B2B/SaaS||||
더브이플래닛 (The Vplanet)|한국|B2B/SaaS|브이플레이트|https://front-dev.vplate.io/||
디비디랩 (DBD Lab)|한국|B2B/SaaS|유저스푼|https://userspoon.com/||
브이아이코리아 (VI KOREA)|한국|B2B/SaaS|케이즈|http://vikorea.kr/||
빛글림 (Bitglim)|한국|B2B/SaaS|빛글림|https://sites.google.com/bitglim.com/companykr||
셀러브리지 (SellerBridge)|한국|B2B/SaaS|셀러브리지|https://www.seller-bridge.com/||
스콘 (SCON)|한국|B2B/SaaS|미츄|http://www.meechu.kr/||
스페이스맵 (SPACEMAP)|한국|B2B/SaaS|아스트로원|https://www.spacemap42.com/||
아이오아이 소프트 (ioisoft)|한국|B2B/SaaS|아이오아이세일즈|||
업루트컴퍼니 (Uproot Company)|한국|B2B/SaaS|비트세이빙|https://bitsaving.kr/||
오버노드 (OVERNODES)|한국|B2B/SaaS|원|||
자라소프트 (JARASOFT)|한국|B2B/SaaS|블러미|https://blur.me/ko/||
코아칩스 (Corechips)|한국|B2B/SaaS|무전원 센서|http://corechips.co.kr/||
태거스 (Taggers)|한국|B2B/SaaS|태거스|||폐업/종료
퍼셀리 (Purselly)|한국|B2B/SaaS|퍼셀리|https://www.purselly.com/||
펄슨 (Pulsen)|한국|B2B/SaaS|위펄슨|https://weperson.com/ko||
페이워크 (PAYWORK)|한국|B2B/SaaS|페이워크|https://paywork.io/||
퓨쳐파운드 (FUTURE FOUND)|한국|B2B/SaaS||||
마이크로픽스 (Micropix)|한국|기타|초박형 어레이 카메라|http://micropix.kr/||
씨엘에스솔루션 (CLS Solution)|한국|기타|AI 비전 기술 기반 스마트건설 솔루션|https://cls.ai.kr/||
엘렉트 (ELLECT)|한국|기타|전기 굴착기 통합 SW|https://ellect.co.kr/||
위솔머터리얼즈 (WESOL)|한국|기타||https://wesol-m.com/||
주진테크놀로지 (JOOJIN TECHNOLOGY)|한국|기타|고효율 ORC 폐열 발전기|https://www.jujint.com/||
청년한우 (Chungnyun Hanwoo)|한국|기타|청년한우|https://청년한우.kr/index||
플라사드 (Plasade)|한국|기타|친환경 플라즈마 발생장비|https://plasade.co.kr/||
청춘F&B (Cheongchoon F&B)|한국|기타, 푸드테크||https://www.cc-fnb.com/||
다츠 (DARTS)|한국|딥테크|군용 자폭 드론|||
메이아이 (mAy-I)|한국|딥테크|매쉬|https://may-i.io/||
베이글 칩스 (Vagelchips)|한국|딥테크|AI 콜봇|https://www.vagelchips.com/||
보이스루 (Voithru)|한국|딥테크|자메이크|https://voithru.com|Exit|
에이아이링고 (AI LingGo)|한국|딥테크|오트랜|https://ailinggo.ai/||
와들 (Waddle)|한국|딥테크|젠투|https://www.gentooai.com/||
웨인힐스브라이언트A.I (Waynehills Bryant AI)|한국|딥테크|디지털라이브북|https://www.waynehills.co||
재준AI (Onn' ai)|한국|딥테크|Onn' ai|https://www.onnai.co.kr/||
지오로봇 (Zio Robot)|한국|딥테크|모듈형 이동 로봇|https://www.ziorobot.com/||
테솔로 (Tesollo)|한국|딥테크|델토 그리퍼|http://www.tesollo.com/|Series A|
프리그로우 (Freegrow)|한국|딥테크|그로우맵|https://grow-space.io/||
플로이드 (FLOYD)|한국|딥테크|ROVI|https://floyd.kr/||
헤드리스 (Headless)|한국|딥테크|오모플레이|https://omoplay.com/||
농업법인(주) 그린 (Griin)|한국|라이프스타일|그린|https://www.griin.co/||
두번째바다 (Second Ocean)|한국|라이프스타일|마이크로오션|https://www.second-ocean.com/||
라이앤캐처스 (Rye & Catchers)|한국|라이프스타일|비블리|||
레몬박스 (Lemon Box)|한국|라이프스타일|레몬박스|https://www.lemonbox.kr/||
로쉬코리아 (Losh Korea)|한국|라이프스타일|오뉴|https://www.loshkorea.co.kr||
리펀디 (Refundy)|한국|라이프스타일|리펀디|https://www.refundy.co/en||
리피드 (ReFeed)|한국|라이프스타일|리피드|https://www.refeed.eco/||
모던 농업회사법인 (Modern)|한국|라이프스타일|토마토 스마트팜|||
백스다임 (Vaxdigm)|한국|라이프스타일|합성항원백신|http://www.vaxdigm.com/||
부에노컴퍼니 (Buenocompany)|한국|라이프스타일|마트장보고|https://www.groket.kr/||
비스툴 (BISTOOL)|한국|라이프스타일|쏘핏|https://bistool.com/board/||
스터닝 (STUNNING)|한국|라이프스타일|라우드소싱|https://www.stunning.kr/||
싸이드워크엔터테인먼트 (Sidewalk Entertainment)|한국|라이프스타일|스테핀|https://www.sidewalkplay.com/||
어치브모먼트 (Achievemoment)|한국|라이프스타일|블레이버스|https://www.blaybus.com/||
오렌슈츠 (ohrenschutz)|한국|라이프스타일|커스텀 이어플러그|http://ohrenschutz.net||
올라보엑스 (Allabo-x)|한국|라이프스타일|캐릭터 IP 및 제작|https://allabo-x.com/||
원루프 (Oneroof)|한국|라이프스타일|원루프랩|https://lab.oneroof.co.kr/||
지인 (geein)|한국|라이프스타일|아띠농부|||
카본엔네이처 (Carbon en Nature)|한국|라이프스타일|세솔 식물영양제|https://smartstore.naver.com/carbonen||
칼라빈카엔터테인먼트 (kalavinka entertainment)|한국|라이프스타일|오디션미|https://audition-me.com/||
케미컴퍼니 (Chemi Company)|한국|라이프스타일|하트트래블|https://heart-travel.co.kr/||
코드블라썸 (Code Blossom)|한국|라이프스타일|돌봄의 신|https://careguardian.kr/||
타이니엔진 (Tiny Engine)|한국|라이프스타일|키즈패션 디자인 브랜드|http://www.tinyengine.co.kr||
티킷 (tkit)|한국|라이프스타일|티킷|||
포들러스 (Pawdlers)|한국|라이프스타일|포들리|https://www.pawdly.com/||
폰에어 (Phonair)|한국|라이프스타일|re:Boom|||
프딩 (FDDING)|한국|라이프스타일|프딩|https://www.fdding.com||
할머니의부뚜막 (Grandmabuttumak)|한국|라이프스타일|할머니의부뚜막|https://grandmabuttumak.com/||
홈마스터 (Home Master)|한국|라이프스타일|홈마스터|||
긱스로프트 (Geeks Loft)|한국|모빌리티&오토테크|페리스피어|https://www.geeksloft.com/||
네이앤컴퍼니 (NEI&COMPANY)|한국|모빌리티&오토테크|네이버스|https://neibus.kr||
디스펙터 (Dispector)|한국|모빌리티&오토테크|4족 보행로봇 SW|https://www.dspecter.com/||
사고링크 (SAGOLINK)|한국|모빌리티&오토테크|사고링크|https://www.sagolink.ai/||
아웃피터스 (outfitters)|한국|모빌리티&오토테크|커스텀 바이크|||
오모션 (Omotion)|한국|모빌리티&오토테크|3D 버추얼 휴먼|http://www.omotion.co.kr/||
위카코퍼레이션 (Webring)|한국|모빌리티&오토테크|위브링|https://webringservice.co.kr/||
카랑 (carang)|한국|모빌리티&오토테크|카수리|http://www.carang.co.kr||
타이어비즈 (Tirebids)|한국|모빌리티&오토테크|타이어비즈|||
팀와이퍼 (Team Yper)|한국|모빌리티&오토테크|와이퍼|https://yper.co.kr||
그로잉 맘 (Growing Mom)|한국|에듀 테크|그로잉맘|||
수학에 심장을 달다 (Susimdal)|한국|에듀 테크|수심달|https://class.susimdal.com/||
자란다 (Jaranda)|한국|에듀 테크|자란다|https://jaranda.kr|Exit|
포스트매스 (Postmath)|한국|에듀 테크|수학비서|https://www.mathsecr.com/||
하이로컬 (HiLokal)|한국|에듀 테크|하이로컬|https://www.hilokal.com/ko/||
롤러즈랩 (RollersLAB)|한국|트레블테크|롤링포테이토|||
어스토리 (Earthtory)|한국|트레블테크|어스토리|https://caute.co.kr/pages/directories/earthtory/||
라잇루트 (RightRoute)|한국|패션 / 뷰티테크|텍스닉|https://texnic.kr/hangtag/sub/sub02_01.php||
로고몬도 (Logomondo)|한국|패션 / 뷰티테크|코너스톤|https://connerstone.com/||
블라썸클라우드 (Blossomcloud)|한국|패션 / 뷰티테크|반반상점|http://blossomcloud.co.kr/||
비기웍스 (BGPworks)|한국|패션 / 뷰티테크|박스히어로|https://fm2050.com/||
쇼공 (SHOGONG)|한국|패션 / 뷰티테크|쇼공|||
엘엑스앤에이글로벌 (LXNA Global)|한국|패션 / 뷰티테크|럭셔리앤올|https://www.luxurynall.com/||
와이디어 (YDEA)|한국|패션 / 뷰티테크|코디북|http://ydea.kr||
케이스타일허브 (K Style Hub)|한국|패션 / 뷰티테크|언니스|https://k-stylehub.com/||
콜라보그라운드 (COLAVOGROUND)|한국|패션 / 뷰티테크|콜라보살롱|https://colavo.kr||
뉴잇 (NUIT)|한국|펫케어|퍼센트잇|||
림피드 (LIMPID)|한국|펫케어|샐러드펫|http://www.saladpet.com/||
클라우드페이퍼 (Cloudpaper)|한국|펫케어|포블스|https://pobls.app/index.php||
펫닥 (Petdoc)|한국|펫케어|펫닥|https://www.petdoc.co.kr||
펫봄 (Petbom)|한국|펫케어|펫봄|https://petbom.com/||
펫페오톡 (Petpeotalk)|한국|펫케어|도기보기|https://dogibogi.co.kr/||
뉴트래빗 (New Trabbit)|한국|푸드테크|이너겐정|https://nutrabbitmall.com/||
달리셔스 (DALICIOUS COMPANY)|한국|푸드테크|커런트밀|https://dalicious.co/||
레비테이트 (levitate)|한국|푸드테크|EBLE|https://eble.kr/||
미트런랩 (MEATRUNLAB)|한국|푸드테크|모두의 미트|||
삼공일 (301)|한국|푸드테크|피나포레|||
스윗드오 (SWEETDEO)|한국|푸드테크|티플라이|https://www.sweetdeo.store/||
시올에프앤비 (Siol F&B, w.SPBT)|한국|푸드테크|시올돈|https://www.sioldon.com/||
얌테이블 (Yam table)|한국|푸드테크|얌테이블|||
에스피티비티 (SPBT)|한국|푸드테크|F&B 외식 컨설팅|https://spbt.kr/||
지구인 컴퍼니 (Gikuin company)|한국|푸드테크|언리미트|https://unlimeat.com|Exit|
팜커넥트 (Farmconnect)|한국|푸드테크|스마트팜 관제분석 플랫폼|http://farmconnect.co.kr/||
플레이에프앤비 (Play F&B)|한국|푸드테크|아우어 베이커리|||
하이드미플리즈 (Hide Me Please)|한국|푸드테크|하이드미플리즈|https://hidemeplease.xyz/||
형식제 (Yosoku, w.SPBT)|한국|푸드테크|요소쿠|https://yosyoku.com/||
네오플랫 (NEOFLAT)|한국|프롭테크|고방|https://gobang.kr/home||
리얼라이저블 (Realizable)|한국|프롭테크|큰공장|https://realizable.kr/||
미스릴 (Mithril)|한국|프롭테크|가디언-알파|https://www.mithril.im/||
블루웨일컴퍼니 (Bluewhale Company)|한국|프롭테크|럭스테이|||
블루프로그 (Bluefrog)|한국|프롭테크|소속|https://www.bluefrog.co.kr/||
서울프라퍼티인사이트 (Seoul Property Insight, SPI)|한국|프롭테크|서울프라퍼티인사이트|https://seoulpi.io||
웍스메이트 (Worksmate)|한국|프롭테크|가다|https://1gada.com|Exit|
일마니 (ILMANI)|한국|프롭테크|스마트 IOT 건설현장 통합감시 시스템|http://www.ilmani.co.kr/||
칼만 (KALMAN)|한국|프롭테크|파이퍼|https://www.kalman.kr/||
컨택터스 (Contactus)|한국|프롭테크|둥지|https://www.doongji.co.kr||
코매퍼 (Ko-Mapper)|한국|프롭테크|SAFETY ALWAYS|https://komapper.ai/||
홈버튼 (HomeButton)|한국|프롭테크|홈버튼|https://www.homebutton.co.kr/||
갤로핑 (Galloping)|한국|헬스케어|에이아이사커|https://www.galloping.co.kr||
뉴로엔 (Neuroen)|한국|헬스케어|eNIT AI 시스템|https://neuroen.com/||
더라피스 (Thelapis)|한국|헬스케어|웰리|https://www.welly.rest||
더블유닷에이아이 (W.AI)|한국|헬스케어|W Expert|https://w-ai.ai/||
더패밀리랩 (The Family Lab)|한국|헬스케어|헤이마마|||
루티너리 (Routinery)|한국|헬스케어|루티너리|https://routinery.app||
메디히어 (MEDIHERE)|한국|헬스케어|닥터히어|http://www.medihere.com||
메딕엑스|한국|헬스케어||||
모션랩스 (MotionLabs)|한국|헬스케어|리비짓|https://motionlabs.kr||
어반데이터랩 (Urban Data Lab)|한국|헬스케어|메디오토|https://urbandatalab.co.kr/|Series A|
와이즈셀렉션 (Ys selection)|한국|헬스케어|건강비밀|https://www.vimeal.kr/||
제론셀베인 (Zerone Cellvane)|한국|헬스케어|셀베인주|https://zeronecellvane.com/||
지킴컴퍼니 (Jeekim company)|한국|헬스케어|지킴|https://jeekim.co.kr/||
클라우드 호스피탈 (Cloud Hospital)|한국|헬스케어|클라우드 호스피탈|https://icloudhospital.com/ko||
테라노큐어 (Theranocure)|한국|헬스케어|치매진단 조영제|||
피트릭스 (Fittrix)|한국|헬스케어|피트릭스|https://fittrix-home.imweb.me/||
`

export type Company = {
  id: number
  nameKo: string
  nameEn: string
  country: string
  sector: string
  service: string
  homepage: string
  stage: string
  note: string
}

function splitName(full: string): { ko: string; en: string } {
  const m = full.match(/^(.*?)\s*\((.*)\)\s*$/)
  if (!m) return { ko: full.trim(), en: full.trim() }
  return { ko: m[1].trim(), en: m[2].trim() }
}

export const companies: Company[] = RAW.trim()
  .split('\n')
  .map((line, i) => {
    const [name, country, sector, service, homepage, stage, note] = line.split('|')
    const n = splitName(name)
    return {
      id: i + 1,
      nameKo: n.ko,
      nameEn: n.en,
      country,
      sector,
      service: service ?? '',
      homepage: homepage ?? '',
      stage: stage ?? '',
      note: note ?? '',
    }
  })

export const companyById = (id: number) => companies.find((c) => c.id === id)

/** 국문 분야/국가명의 영문 표기 */
export const sectorEn: Record<string, string> = {
  'B2B/SaaS': 'B2B/SaaS',
  기타: 'Others',
  '기타, 푸드테크': 'Others, FoodTech',
  딥테크: 'DeepTech',
  라이프스타일: 'Lifestyle',
  '모빌리티&오토테크': 'Mobility & AutoTech',
  '에듀 테크': 'EduTech',
  트레블테크: 'TravelTech',
  '패션 / 뷰티테크': 'Fashion / BeautyTech',
  펫케어: 'PetCare',
  푸드테크: 'FoodTech',
  프롭테크: 'PropTech',
  헬스케어: 'Healthcare',
}
export const countryEn: Record<string, string> = { 미얀마: 'Myanmar', 베트남: 'Vietnam', 한국: 'Korea' }

/** 포트폴리오 그리드 상단 노출 순서 (원본 사이트 기준) */
const featuredNames = ['오케이쎄', '고투조이', '테솔로', '어반데이터랩', '웍스메이트', '자란다', '지구인 컴퍼니', '보이스루']
export const sortedCompanies: Company[] = [
  ...featuredNames.map((n) => companies.find((c) => c.nameKo === n)!).filter(Boolean),
  ...companies.filter((c) => !featuredNames.includes(c.nameKo)),
]

/** 포트폴리오 기업 ↔ 벤처스튜디오 사례 연결 */
export const companyCaseLink: Record<string, number> = {
  오케이쎄: 39,
  자라소프트: 40,
  모션랩스: 42,
}
