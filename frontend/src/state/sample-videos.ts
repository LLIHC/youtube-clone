import { atom, selectorFamily } from 'recoil';

export interface ISampleVideosType {
  id: string;  // video hashid
  uploader: string;  // TODO: uploader should be hashid
  views: number;
  title: string;
  description: string;
}

const sampleVideos: ISampleVideosType[] = [
  // 0
  {
    id: '4JJFrjkRxmo',
    uploader: 'OH MY GIRL',
    views: 0,
    title: 'Dolphin',
    description: `Provided to YouTube by WM Entertainment

    Dolphin · OH MY GIRL
    
    NONSTOP
    
    ℗ 2020 WM Entertainment Inc.
    
    Released on: 2020-04-27
    
    Lyricist: Seo Jung Ah
    Arranger, Composer: Ryan S. Jhun
    Arranger, Composer: Celine Svanbäck
    Arranger, Composer: Chloe Latimer
    Arranger, Composer: Jeppe London
    Arranger, Composer: Lauritz Christiansen
    
    Auto-generated by YouTube.`,
  },
  // 1
  {
    id: 'VZnfZ14fIig',
    uploader: 'OFFICIAL_NELL',
    views: 0,
    title: '기억을 걷는 시간',
    description: `Provided to YouTube by Genie Music

    기억을 걷는 시간 · 넬 (Nell)
    
    Separation Anxiety
    
    ℗ Genie Music Corporation
    
    Released on: 2008-03-20
    
    Auto-generated by YouTube.`,
  },
  // 2
  {
    id: 'Kn676_ex7cQ',
    uploader: '이무진 - 주제',
    views: 0,
    title: 'Rain and You',
    description: `Provided to YouTube by Genie Music Corporation

    Rain and You · Lee Mujin
    
    HOSPITAL PLAYLIST Season2 (Original Television Soundtrack), Pt. 1
    
    ℗ 2021 스튜디오 마음C, 에그이즈커밍, Stone Music Entertainment
    
    Released on: 2021-06-18
    
    Auto-generated by YouTube.`,
  },
  // 3
  {
    id: 'z127C11tKsg',
    uploader: '경서예지 - 주제',
    views: 0,
    title: 'If you lovingly call my name (다정히 내 이름을 부르면)',
    description: `Provided to YouTube by Kakao Entertainment

    If you lovingly call my name (다정히 내 이름을 부르면) · GyeongseoYeji · Jeon Gunho
    
    If you lovingly call my name (GyeongseoYeji x Jeon Gunho)
    
    ℗ 2021 EVERGLOW, Inc,under license to Kakao Entertainment
    
    Released on: 2021-05-19
    
    Author: Han Sang Won
    Author: Lee Jin Sung(Monday Kiz)
    Composer: Han Sang Won
    Composer: Lee Jin Sung(Monday Kiz)
    Arranger: Han Sang Won
    
    Auto-generated by YouTube.`,
  },
  // 4
  {
    id: 'lQcnNPqy2Ww',
    uploader: 'Car, the garden',
    views: 0,
    title: 'Tree (나무)',
    description: `Provided to YouTube by Loen Entertainment Inc

    Tree (나무) · Car · the garden
    
    Tree
    
    ℗ 2019 The Five Cultural Industrial Company, LLC, DOOROODOOROO ARTIST COMPANY,under license to Kakao M Corp.
    
    Released on: 2019-04-16
    
    Author: 카더가든
    Author: 유라
    Composer: 카더가든
    Composer: 623
    Arranger: 카더가든
    Arranger: 623
    
    Auto-generated by YouTube.`,
  },
  // 5
  {
    id: '6rS7OUGXUik',
    uploader: 'Stone Music Entertainment',
    views: 0,
    title: '[도깨비 OST Part 9] 에일리 (Ailee) - 첫눈처럼 너에게 가겠다 (I will go to you like the first snow) (Official Audio)',
    description: `'폭발적인 가창력'의 소울디바 '에일리'가 도깨비 OST의 아홉번째 가창자로 참여했다.

 

    에일리가 참여한 도깨비 OST Part 9 '첫눈처럼 너에게 가겠다'는 극 중 김신(공유 분)과 지은탁(김고은 분)의 테마곡으로, KBS2 태양의 후예, SBS 괜찮아 사랑이야, tvN 도깨비 OST의 
    
    연속 히트로 주목받고 있는 로코베리가 곡을 썼으며, 에일리의 폭발적인 가창력 속 아련한 감성이 빛나는 곡이다. 
    특히 베스트셀러 ‘그 남자, 그 여자’의 작가이자 tvN 드라마 풍선껌을 통해 섬세한 필력을 인정 받고 있는 이미나 작가가 작사가로 참여한 이 곡은 ‘내 머문 세상 이토록 
    
    찬란한 것을', '욕심이 생겼다, 너와 함께 살고 늙어가 주름진 손을 맞잡고, 내 삶은 따뜻했었다고' 등 김신과 지은탁의 운명적인 사랑을 김신의 시점에서 애절하게 표현한 가사가 인상적이다.
    
     
    
    
    [CREDIT]
    
     
    
    Lyrics by 이미나
    Composed & Arranged by 로코베리
    Strings Arranged by 권석홍
    
    Guitar 박신원
    Bass 로코
    Piano 안영민
    Strings 융스트링
    
    Available on iTunes, Apple Music : https://itun.es/kr/k6uihb
    Listen on spotify : http://spoti.fi/2ihrVhk
     
    CJ E&M Music은 아시아 No.1 엔터테인먼트 기업인 CJ E&M의 음악사업 브랜드로 음원/음반의 투자/제작/유통부터 콘서트/페스티벌 개최까지 포함하고 있습니다. CJ E&M MUSIC과 함께 하는 K-POP 아티스트들의 신곡과 뮤직비디오, 미공개 독점 영상 등을 이곳 YOUTUBE 채널에서 가장 먼저 만나보세요.
    
    CJ E&M Music is a music business brand of CJ E&M, Asia's No.1 entertainment company. CJ E&M Music covers investment, production and distribution of album and also provides the best music festival and concerts. Meet the K-POP artists' brand new music videos and exclusive video clips on the official YouTube of CJ E&M Music.`,
  },
  // 6
  {
    id: '8yTxNtVr_d8',
    uploader: 'TWICE',
    views: 0,
    title: 'MORE & MORE',
    description: `Provided to YouTube by 'JYP Entertainment'

    MORE & MORE · TWICE
    
    MORE & MORE
    
    Released on: 2020-06-01
    
    Auto-generated by YouTube.`,
  },
  // 7
  {
    id: '0EK_M2taRIM',
    uploader: 'IVE (아이브) - 주제',
    views: 0,
    title: 'ELEVEN (ELEVEN)',
    description: `Provided to YouTube by Kakao Entertainment

    ELEVEN (ELEVEN) · IVE
    
    ELEVEN
    
    ℗ 2021 STARSHIP Entertainment,under license to Kakao Entertainment
    
    Released on: 2021-12-01
    
    Author: 서지음
    Author: Peter Rycroft
    Author: Lauren Aquilina
    Author: RYAN JHUN
    Composer: Peter Rycroft
    Composer: Lauren Aquilina
    Composer: RYAN JHUN
    Arranger: Lostboy
    Arranger: RYAN JHUN
    Arranger: Alawn
    
    Auto-generated by YouTube.`,
  },
  // 8
  {
    id: '3laLavGghc0',
    uploader: 'WHO IS sokodomo',
    views: 0,
    title: 'MERRY-GO-ROUND (Feat. Zion.T & Wonstein) (Prod. by Slom)',
    description: `Provided to YouTube by Genie Music Corporation

    MERRY-GO-ROUND (Feat. Zion.T & Wonstein) (Prod. by Slom) · sokodomo
    
    Show Me The Money 10 Episode 2
    
    ℗ 2021 Stone Music Entertainment
    
    Released on: 2021-11-13
    
    Auto-generated by YouTube.`,
  },
  // 9
  {
    id: 'YfQzz00Oc_M',
    uploader: '1theK (원더케이)',
    views: 0,
    title: '[MV] Loco(로꼬) _ It Takes Time(시간이 들겠지) (Feat. Colde)',
    description: `[MV] Loco(로꼬) _ It Takes Time(시간이 들겠지) (Feat. Colde)

    [공지] 1theK YouTube는 MV를 유통하는 공식 채널로, 1theK에 업로드된 MV 조회수 또한 음악방송 순위에 반영됩니다.
    
    방송 및 각종 협업 프로젝트를 섭렵하고 있는 로꼬가 한 달 만에 신보를 들고 왔다. '시간이 들겠지'는 본인의 현재 심정을 솔직하게 잘 드러낸 곡이며 Colde가 피쳐링을 참여하여 로꼬의 감성을 한껏 끌어 올렸다. 로꼬는 다양한 음악 스타일과 개성이 뚜렷한 프로듀서 및 아티스트와의 협업으로 자신의 음악적 스펙트럼을 넓고 굳게 다져나가고 있다.
    
    ▶1theK FB  : http://www.facebook.com/1theK
    ▶1theK TW : https://twitter.com/1theK
    ▶1theK Kakao : https://goo.gl/otRpZc
    
    #Loco#로꼬#It_Takes_Time#시간이_들겠지#Colde#NEWRELEASE#MV#1theK#원더케이`,
  },
];

const sampleVideoIds: string[] = sampleVideos.map(video => video.id);

const nullVideo: ISampleVideosType = {
  id: 'null',
  uploader: 'null',
  views: -1,
  title: 'null',
  description: 'null',
};


export const sampleVideosAtom = atom<ISampleVideosType[]>({
  key: 'sampleVideosAtom',
  default: sampleVideos,
});

export const sampleVideoIdsAtom = atom<string[]>({
  key: 'sampleVideoIdsAtom',
  default: sampleVideoIds,
});


export const sampleVideoById = selectorFamily({
  key: 'sampleVideosById',
  get: (id: string) => ({ get }) => {
    const foundVideo = get(sampleVideosAtom).find(video => video.id === id);
    if (foundVideo) {
      return foundVideo;
    }
    return nullVideo;
  },
});
