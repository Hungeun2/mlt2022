import React, { useEffect, useState } from 'react';

import axios from 'axios';

import ErrorPage from './common/ErrorPage';
import LoadingPage from './common/LoadingPage';
import { PageStyle } from 'style/PageStyle';
import { AlbumStyle } from 'style/AlbumStyle';

const API = process.env.REACT_APP_END_POINT;

const NewAlbum = () => {
  const [newAlbum, setNewAlbum] = useState([]);
  const [checkErr, setCheckErr] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  // const newAlbum = [
  //   {
  //     RESULTCODE: '0',
  //     RESPONSE: 'albumInfo',
  //     CPLANCODE: '0',
  //     MENUID: '1000000461',
  //     ALBUMINFO: {
  //       ISSERVICE: true,
  //       ALBUMID: '11128866',
  //       ALBUMNAME: '불타는 트롯맨 예선전 PART 1',
  //       ISSUEDATE: '2022.12.21',
  //       ISTRACKZERO: false,
  //       ALBUMIMG:
  //         'https://cdnimg.melon.co.kr/cm2/album/images/111/28/866/11128866_20221220195130_500.jpg?60001ff5860f099985b806646ed6d11b/melon/resize/386/optimize/90',
  //       ALBUMIMGLARGE:
  //         'https://cdnimg.melon.co.kr/cm2/album/images/111/28/866/11128866_20221220195130_500.jpg?60001ff5860f099985b806646ed6d11b/melon/optimize/90',
  //       SONGCNT: '15',
  //       CTYPE: '2',
  //       CONTSTYPECODE: 'N10002',
  //       ARTISTLIST: [
  //         {
  //           ARTISTID: '2727',
  //           ARTISTNAME: 'Various Artists',
  //           ACTTYPENAME: null,
  //           DEBUTDAY: null,
  //           BIRTHDAY: null,
  //           ARTISTIMG: '',
  //           IMAGETYPE: 'S',
  //           CONTSTYPECODE: 'N10006',
  //         },
  //       ],
  //     },
  //     TOTAVRGSCOREINFO: {
  //       TITLE: '평점 부여 권한',
  //       TEXT: '클린한 평점 환경을 위해\r\n24시간 이내에\r\n다운로드 받은 파일 재생,\r\n스트리밍으로 감상한 경우에만\r\n평점 부여가 가능합니다.\r\n참고하여 서비스 이용 바랍니다.\r\n\r\n* 접속자가 많은 경우\r\n평점주기가 지연 될 수 있습니다.',
  //       TOTAVRGSCORE: '5.0',
  //       PTCPNMPRCO: '18',
  //     },
  //     LIKECNT: '111',
  //     ISDOLBYATMOS: false,
  //     ISMASTERPIECE: false,
  //     BOOKLETIMGLIST: null,
  //     ALBUMPRICE: '',
  //     ALBUMPRICEFLAC16: '',
  //     ALBUMPRICEFLAC24: '',
  //     ALBUMFLACINFO: 'FLAC',
  //     ALBUMMESSAGE: '',
  //     BBSCHANNELSEQ: '102',
  //     BBSCONTSREFVALUE: '11128866',
  //     POSTIMG:
  //       'https://cdnimg.melon.co.kr/cm2/album/images/111/28/866/11128866_20221220195130_500.jpg/melon/optimize/90',
  //     POSTEDITIMG:
  //       'https://cdnimg.melon.co.kr/cm2/album/images/111/28/866/11128866_20221220195130_500.jpg/melon/resize/144/optimize/90',
  //     TITLESONGINFO: {
  //       SONGID: '35953944',
  //       SONGNAME: '사랑이 이런건가요',
  //     },
  //     ARTISTNOTEINFO: null,
  //     ARTISTNOTEALLBUTTONFLAG: false,
  //     GENRELIST: [
  //       {
  //         GENRECODE: 'GN0700',
  //         GENRENAME: '성인가요/트로트',
  //       },
  //     ],
  //     ISSUEDATE: '2022.12.21',
  //     REPORT:
  //       '불타는 트롯맨 예선전 PART 1\n \n트롯 쾌남들의 인생을 건 도전!\n그 어디서도 본 적 없는 유쾌하고 찐한 감동의 한 판!\n다시 한 번 대한민국 트롯 판이 뒤집힌다.\n물이 다른 트롯! 결이 다른 스타! \n당신의 트롯맨을 키워 주세요! \n불타는 트롯맨!\n \n* 매주 화요일 밤 9시 20분 방송\n* 매주 수요일 낮 12시 음원공개!\n \n[Credits]\n음악감독 : 장지원\nMixed Tune by : 김성민 (tov studio)\nMusic Management Agency : Major7 E&M\n \n발매사 : 카카오엔터테인먼트\n기획사 : 크레아엔터테인먼트, ㈜쇼플레이\n \n01. 사랑이 이런건가요 - 에녹 \n[작사 이수진 / 작곡 설운도 / 원곡 설운도]\n \n02. 삼백초 - 강설민 \n[작사 김지평 / 작곡 서승일 / 원곡 김상배] \n \n03. 못난 놈 - 공훈 \n[작사 진성 / 작곡 김도일 / 원곡 진성] \n \n04. 나쁜남자 - 김정민 \n[작사 이경미 / 작곡 신웅 / 원곡 신유]\n \n05. 그대여 변치마오 - 김중연 \n[작사/작곡 김준규 / 원곡 남진]\n \n06. 차표 한 장 - 박민수 \n[작사 조동산 / 작곡 원희명 / 원곡 송대관]\n \n편곡 장지원, 최일호\nKeyboard by 장지원, 최일호, 박동일\nGuitar by 윤재원\nBass by 고신재\nDrums by 최가람\nSaxophone by 김수환\nTrumpet by 서대광\nTrombone by 우성민\n \n07. 꽃바람 - 박현호 \n[작사 한솔 / 작곡 정성현 / 원곡 박상철]\n \n편곡 장지원, 최일호\nKeyboard by 장지원, 최일호, 박동일\nGuitar by 윤재원\nBass by 고신재\nDrums by 최가람\nSaxophone by 김수환\nTrumpet by 서대광\nTrombone by 우성민\n \n08. 나의 영토 - 신명근-\n[작사/작곡 그린네이처 / 원곡 현진우]\n \n편곡 장지원, 박동일\nKeyboard by 장지원, 최일호, 박동일\nGuitar by 윤재원\nBass by 고신재\nDrums by 최가람\nSaxophone by 김수환\nTrumpet by 서대광\nTrombone by 우성민\n \n09. 배신자 - 이수호 \n[작사 이인섭 / 작곡 김광빈 / 원곡 도성]\n \n10. 진또배기 - 이승환 \n[작사 김학진 / 작곡 송결 / 원곡 이성우]\n \n11. 가슴은 알죠 - 이하평 \n[작사/작곡 후니용이 / 원곡 나예원]\n \n12. 아내에게 바치는 노래 - 장동열 \n[작사 조운파 / 작곡 임종수 / 원곡 하수영]\n \n편곡 장지원\nKeyboard by 장지원, 최일호, 박동일\nGuitar by 윤재원\nBass by 고신재\nDrums by 최가람\n \n13. 한량가 - 조주한\n[작사/작곡 류선우 / 원곡 영탁]\n \n14. 배 띄워라 - 홍성원 \n[작사 구히서 / 작곡 박범훈 / 원곡 송소희]\n \n15. 미운 사랑 - 황영웅\n[작사 진미령, 송광호 / 작곡 송광호 / 원곡 진미령]\n \n편곡 장지원, 최일호\nKeyboard by 장지원, 최일호, 박동일\nGuitar by 윤재원\nBass by 고신재\nDrums by 최가람\n',
  //     ALBUMTYPE: '옴니버스',
  //     SELLCNPY: '카카오엔터테인먼트',
  //     PLANCNPY: '크레아엔터테인먼트, (주)쇼플레이',
  //     CREDITLIST: [
  //       {
  //         ROLECODE: 'DR1001',
  //         ROLENAME: 'Music Producer',
  //         ARTISTNAME: '장지원',
  //       },
  //       {
  //         ROLECODE: 'DR3007',
  //         ROLENAME: 'Mixing',
  //         ARTISTNAME: '김성민 (tov studio)',
  //       },
  //     ],
  //     REPORTPREVIEW:
  //       '불타는 트롯맨 예선전 PART 1 트롯 쾌남들의 인생을 건 도전!그 어디서도 본 적 없는 유쾌하고 찐한 감동의 한 판!다시 한 번 대한민국 트롯 판이 뒤집힌다.물이 다른 트롯! 결이 다른 스타! 당신의 트롯맨을 키워 주세요! 불타는 트롯맨! * 매주 화요일 밤 9시 20분 방송* 매주 수요일 낮 12시 음원공개! [Credits]음악감독 : 장지원Mixed Tune by : 김성민 (tov studio)Music Management Agency : Major7 E&M 발매사 : 카카오엔터테인먼트기획사 : 크레아엔터테인먼트, ㈜쇼플레이 01. 사랑이 이런건가요 - 에녹 [작사 이수진 / 작곡 설운도 / 원곡 설운도] 02. 삼백초 - 강설민 [작사 김지평 / 작곡 서승일 / 원곡 김상배]  03. 못난 놈 - 공훈 [작사 진성 / 작곡 김도일 / 원곡 진성]  04. 나쁜남자 - 김정민 [작사 이경미 / 작곡 신웅 / 원곡 신유] 05. 그대여 변치마오 - 김중연 [작사/작곡 김준규 / 원곡 남진] 06. 차표 한 장 - 박민수 [작사 조동산 / 작곡 원희명 / 원곡 송대관] 편곡 장지원, 최일호Keyboard by 장지원, 최일호, 박동일Guitar by 윤재원Bass by 고신재Drums by 최가람Saxophone by 김수환Trumpet by 서대광Trombone by 우성민 07. 꽃바람 - 박현호 [작사 한솔 / 작곡 정성현 / 원곡 박상철] 편곡 장지원, 최일호Keyboard by 장지원, 최일호, 박동일Guitar by 윤재원Bass by 고신재Drums by 최가람Saxophone by 김수환Trumpet by 서대광Trombone by 우성민 08. 나의 영토 - 신명근-[작사/작곡 그린네이처 / 원곡 현진우] 편곡 장지원, 박동일Keyboard by 장지원, 최일호, 박동일Guitar by 윤재원Bass by 고신재Drums by 최가람Saxophone by 김수환Trumpet by 서대광Trombone by 우성민 09. 배신자 - 이수호 [작사 이인섭 / 작곡 김광빈 / 원곡 도성] 10. 진또배기 - 이승환 [작사 김학진 / 작곡 송결 / 원곡 이성우] 11. 가슴은 알죠 - 이하평 [작사/작곡 후니용이 / 원곡 나예원] 12. 아내에게 바치는 노래 - 장동열 [작사 조운파 / 작곡 임종수 / 원곡 하수영] 편곡 장지원Keyboard by 장지원, 최일호, 박동일Guitar by 윤재원Bass by 고신재Drums by 최가람 13. 한량가 - 조주한[작사/작곡 류선우 / 원곡 영탁] 14. 배 띄워라 - 홍성원 [작사 구히서 / 작곡 박범훈 / 원곡 송소희] 15. 미운 사랑 - 황영웅[작사 진미령, 송광호 / 작곡 송광호 / 원곡 진미령] 편곡 장지원, 최일호Keyboard by 장지원, 최일호, 박동일Guitar by 윤재원Bass by 고신재Drums by 최가람',
  //     SPOTLIGHTBUTTONFLAG: 'N',
  //     DUMMYTEXT:
  //       '16#_f6Ug7Th8Si9Rj0Qk!Pl@OmN#nM$oL%pK^qJ&r*IsH(tG)uF-_j0Qk!Pl@OmN#nM$oL%pK^qJ&r*IsH(tG)uF-v:Ew;Dx=Cy{B',
  //     SECTION: '앨범상세',
  //     PAGE: '앨범상세_앨범홈',
  //   },
  //   {
  //     RESULTCODE: '0',
  //     RESPONSE: 'albumInfo',
  //     CPLANCODE: '0',
  //     MENUID: '1000000461',
  //     ALBUMINFO: {
  //       ISSERVICE: true,
  //       ALBUMID: '11128476',
  //       ALBUMNAME: 'lovelylove',
  //       ISSUEDATE: '2022.12.21',
  //       ISTRACKZERO: false,
  //       ALBUMIMG:
  //         'https://cdnimg.melon.co.kr/cm2/album/images/111/28/476/11128476_20221220132100_500.jpg?45a389a4e68206cea905e4e1f0e99600/melon/resize/386/optimize/90',
  //       ALBUMIMGLARGE:
  //         'https://cdnimg.melon.co.kr/cm2/album/images/111/28/476/11128476_20221220132100_500.jpg?45a389a4e68206cea905e4e1f0e99600/melon/optimize/90',
  //       SONGCNT: '1',
  //       CTYPE: '2',
  //       CONTSTYPECODE: 'N10002',
  //       ARTISTLIST: [
  //         {
  //           ARTISTID: '2912136',
  //           ARTISTNAME: 'roon',
  //           ACTTYPENAME: null,
  //           DEBUTDAY: null,
  //           BIRTHDAY: null,
  //           ARTISTIMG:
  //             'https://cdnimg.melon.co.kr/cm2/artistcrop/images/029/12/136/2912136_20220323161003_500.jpg?9fc2d1ea0b28f4737c6ac8b79d3ff765/melon/resize/220/optimize/90',
  //           IMAGETYPE: 'S',
  //           CONTSTYPECODE: 'N10006',
  //         },
  //       ],
  //     },
  //     TOTAVRGSCOREINFO: {
  //       TITLE: '평점 부여 권한',
  //       TEXT: '클린한 평점 환경을 위해\r\n24시간 이내에\r\n다운로드 받은 파일 재생,\r\n스트리밍으로 감상한 경우에만\r\n평점 부여가 가능합니다.\r\n참고하여 서비스 이용 바랍니다.\r\n\r\n* 접속자가 많은 경우\r\n평점주기가 지연 될 수 있습니다.',
  //       TOTAVRGSCORE: '4.3',
  //       PTCPNMPRCO: '6',
  //     },
  //     LIKECNT: '50',
  //     ISDOLBYATMOS: false,
  //     ISMASTERPIECE: false,
  //     BOOKLETIMGLIST: null,
  //     ALBUMPRICE: '',
  //     ALBUMPRICEFLAC16: '',
  //     ALBUMPRICEFLAC24: '',
  //     ALBUMFLACINFO: 'FLAC',
  //     ALBUMMESSAGE: '',
  //     BBSCHANNELSEQ: '102',
  //     BBSCONTSREFVALUE: '11128476',
  //     POSTIMG:
  //       'https://cdnimg.melon.co.kr/cm2/album/images/111/28/476/11128476_20221220132100_500.jpg/melon/optimize/90',
  //     POSTEDITIMG:
  //       'https://cdnimg.melon.co.kr/cm2/album/images/111/28/476/11128476_20221220132100_500.jpg/melon/resize/144/optimize/90',
  //     TITLESONGINFO: {
  //       SONGID: '35952087',
  //       SONGNAME: 'lovelylove',
  //     },
  //     ARTISTNOTEINFO: null,
  //     ARTISTNOTEALLBUTTONFLAG: false,
  //     GENRELIST: [
  //       {
  //         GENRECODE: 'GN0400',
  //         GENRENAME: 'R&B/Soul',
  //       },
  //       {
  //         GENRECODE: 'GN0500',
  //         GENRENAME: '인디음악',
  //       },
  //     ],
  //     ISSUEDATE: '2022.12.21',
  //     REPORT:
  //       '멍! \n \n \n \n[Credit] \n \nLyrics by roon, LEY(AVEC) \nComposed by roon, LEY(AVEC) \nArranged by LEY(AVEC) \nKeyboard by LEY \nGuitar & bass by LEY \n \nMixed by LEY \nMastered by Chris Gehringer @Sterling Sound \n \nAlbum cover \nModel by Benji \n \nMV \nH/M by Chaeyoung Lee \nFilm by LEY, Chaerin Lee \nproducer Rooney \nEdit by roon',
  //     ALBUMTYPE: '싱글',
  //     SELLCNPY: '지니뮤직, Stone Music Entertainment',
  //     PLANCNPY: '㈜ 이릴레반트 뮤직',
  //     CREDITLIST: [
  //       {
  //         ROLECODE: 'DR1000',
  //         ROLENAME: 'Producer',
  //         ARTISTNAME: 'Rooney',
  //       },
  //       {
  //         ROLECODE: 'DR2004',
  //         ROLENAME: 'Keyboard',
  //         ARTISTNAME: 'LEY',
  //       },
  //       {
  //         ROLECODE: 'DR2521',
  //         ROLENAME: 'Guitar & Bass',
  //         ARTISTNAME: 'LEY',
  //       },
  //       {
  //         ROLECODE: 'DR3007',
  //         ROLENAME: 'Mixing',
  //         ARTISTNAME: 'LEY',
  //       },
  //       {
  //         ROLECODE: 'DR3008',
  //         ROLENAME: 'Mastering',
  //         ARTISTNAME: 'Chris Gehringer',
  //       },
  //     ],
  //     REPORTPREVIEW:
  //       '멍!    [Credit]  Lyrics by roon, LEY(AVEC) Composed by roon, LEY(AVEC) Arranged by LEY(AVEC) Keyboard by LEY Guitar & bass by LEY  Mixed by LEY Mastered by Chris Gehringer @Sterling Sound  Album cover Model by Benji  MV H/M by Chaeyoung Lee Film by LEY, Chaerin Lee producer Rooney Edit by roon',
  //     SPOTLIGHTBUTTONFLAG: 'N',
  //     DUMMYTEXT:
  //       '16#_f6Ug7Th8Si9Rj0Qk!Pl@OmN#nM$oL%pK^qJ&r*IsH(tG)uF-_j0Qk!Pl@OmN#nM$oL%pK^qJ&r*IsH(tG)uF-v:Ew;Dx=Cy{B',
  //     SECTION: '앨범상세',
  //     PAGE: '앨범상세_앨범홈',
  //   },
  //   {
  //     RESULTCODE: '0',
  //     RESPONSE: 'albumInfo',
  //     CPLANCODE: '0',
  //     MENUID: '1000000461',
  //     ALBUMINFO: {
  //       ISSERVICE: true,
  //       ALBUMID: '11128856',
  //       ALBUMNAME: '어쩌다',
  //       ISSUEDATE: '2022.12.21',
  //       ISTRACKZERO: false,
  //       ALBUMIMG:
  //         'https://cdnimg.melon.co.kr/cm2/album/images/111/28/856/11128856_20221220175009_500.jpg?d2d3dfa9b2a5b8b3c7bd63bf3c95a730/melon/resize/386/optimize/90',
  //       ALBUMIMGLARGE:
  //         'https://cdnimg.melon.co.kr/cm2/album/images/111/28/856/11128856_20221220175009_500.jpg?d2d3dfa9b2a5b8b3c7bd63bf3c95a730/melon/optimize/90',
  //       SONGCNT: '7',
  //       CTYPE: '2',
  //       CONTSTYPECODE: 'N10002',
  //       ARTISTLIST: [
  //         {
  //           ARTISTID: '3180521',
  //           ARTISTNAME: '이하준',
  //           ACTTYPENAME: null,
  //           DEBUTDAY: null,
  //           BIRTHDAY: null,
  //           ARTISTIMG:
  //             'https://cdnimg.melon.co.kr/cm2/artistcrop/images/031/80/521/3180521_20221221101246_500.jpg?4712ea5d0b523e7294dead00289df9d4/melon/resize/220/optimize/90',
  //           IMAGETYPE: 'S',
  //           CONTSTYPECODE: 'N10006',
  //         },
  //       ],
  //     },
  //     TOTAVRGSCOREINFO: {
  //       TITLE: '평점 부여 권한',
  //       TEXT: '클린한 평점 환경을 위해\r\n24시간 이내에\r\n다운로드 받은 파일 재생,\r\n스트리밍으로 감상한 경우에만\r\n평점 부여가 가능합니다.\r\n참고하여 서비스 이용 바랍니다.\r\n\r\n* 접속자가 많은 경우\r\n평점주기가 지연 될 수 있습니다.',
  //       TOTAVRGSCORE: '5.0',
  //       PTCPNMPRCO: '1',
  //     },
  //     LIKECNT: '13',
  //     ISDOLBYATMOS: false,
  //     ISMASTERPIECE: false,
  //     BOOKLETIMGLIST: null,
  //     ALBUMPRICE: '',
  //     ALBUMPRICEFLAC16: '',
  //     ALBUMPRICEFLAC24: '',
  //     ALBUMFLACINFO: 'FLAC',
  //     ALBUMMESSAGE: '',
  //     BBSCHANNELSEQ: '102',
  //     BBSCONTSREFVALUE: '11128856',
  //     POSTIMG:
  //       'https://cdnimg.melon.co.kr/cm2/album/images/111/28/856/11128856_20221220175009_500.jpg/melon/optimize/90',
  //     POSTEDITIMG:
  //       'https://cdnimg.melon.co.kr/cm2/album/images/111/28/856/11128856_20221220175009_500.jpg/melon/resize/144/optimize/90',
  //     TITLESONGINFO: {
  //       SONGID: '35953908',
  //       SONGNAME: '어쩌다',
  //     },
  //     ARTISTNOTEINFO: null,
  //     ARTISTNOTEALLBUTTONFLAG: false,
  //     GENRELIST: [
  //       {
  //         GENRECODE: 'GN0700',
  //         GENRENAME: '성인가요/트로트',
  //       },
  //     ],
  //     ISSUEDATE: '2022.12.21',
  //     REPORT:
  //       '이하준 첫번째 미니 앨범 “어쩌다” \n \n더블레스의 멤버 이하준이 아닌 가수 이하준으로써의 첫 발자국을 내딛는 앨범. \n \n타이틀곡 ‘어쩌다’는 멀리서 바라볼 수밖에 없는 사람을 사랑하고 있지만 고백할 수 조차 없고 몰래 하는 사랑를 표현한 곡. 현실은 아프지만 그 사랑이 이루어지기를 바라는 마음을 담은 가사에 미디움 템포 리듬이 어우러진 곡. \n \n또한 신곡 ‘술잔 속에 담긴 사랑’과 이하준의 색으로 덧입힌 리메이크곡 ‘낭만에 대하여’, ‘어느 60대 노부부이야기’, ‘돌아가는 삼각지’ 등 다양한 곡이 수록되었다. \n \n \n1. 어쩌다 \n작사 이사벨 \n작곡 김인효 \n편곡 송기영 \n \n2. 술잔 속에 담긴 사랑 \n작사 이원찬 \n작곡 김인효 \n편곡 강 혁 \n \n3. 낭만에 대하여 \n작사 최백호 \n작곡 최백호 \n편곡 김인효 \n \n4. 어느 60대 노부부 이야기 \n작사 김목경 \n작곡 김목경 \n편곡 김인효 \n \n5. 돌아가는 삼각지 \n작사 배상태 \n작곡 배상태 \n편곡 김인효 \n \n6. 어쩌다(MR) \n작곡 김인효 \n편곡 송기영 \n \n7. 술잔 속에 담긴 사랑(MR) \n작곡 김인효 \n편곡 강 혁 \n \n \n<Credit> \nPrograming 송기영,강혁 \nPiano,Keyboard 조상원 \nNylon Guitar 허남진 \nElec Guitar 김인효 \nDrum 박중현 \nBass 김주성 \n \nEXECUTIVE PRODUCER 김도희 \nPRODUCER 김도희 \nMUSIC PRODUCTION SUPERVISOR 이정훈 \nMEDIA 김전주, 서혜선 \nPUBLIC RELATION 심솔아 \n \n녹음실 예하 studio \n믹스 엔지니어 최경범, \n레코딩엔지니어 임재긍, 이동근 \n미스터링 소닉코리아 / 채승균',
  //     ALBUMTYPE: 'EP',
  //     SELLCNPY: '카카오엔터테인먼트',
  //     PLANCNPY: '주)케이디에이치엔터테인먼트',
  //     CREDITLIST: [
  //       {
  //         ROLECODE: 'DR1002',
  //         ROLENAME: 'Executive Producer',
  //         ARTISTNAME: '김도희',
  //       },
  //       {
  //         ROLECODE: 'DR1000',
  //         ROLENAME: 'Producer',
  //         ARTISTNAME: '김도희',
  //       },
  //       {
  //         ROLECODE: 'DR1039',
  //         ROLENAME: 'Music Supervisor',
  //         ARTISTNAME: '이정훈',
  //       },
  //       {
  //         ROLECODE: 'DR2102',
  //         ROLENAME: 'Programming',
  //         ARTISTNAME: '송기영, 강혁',
  //       },
  //       {
  //         ROLECODE: 'DR2131',
  //         ROLENAME: 'Piano & Keyboard',
  //         ARTISTNAME: '조상원',
  //       },
  //       {
  //         ROLECODE: 'DR2242',
  //         ROLENAME: 'Nylon Guitar',
  //         ARTISTNAME: '허남진',
  //       },
  //       {
  //         ROLECODE: 'DR2023',
  //         ROLENAME: 'Electric Guitar',
  //         ARTISTNAME: '김인효',
  //       },
  //       {
  //         ROLECODE: 'DR2006',
  //         ROLENAME: 'Drum',
  //         ARTISTNAME: '박중현',
  //       },
  //       {
  //         ROLECODE: 'DR2003',
  //         ROLENAME: 'Bass',
  //         ARTISTNAME: '김주성',
  //       },
  //       {
  //         ROLECODE: 'DR3007',
  //         ROLENAME: 'Mixing',
  //         ARTISTNAME: '최경범',
  //       },
  //       {
  //         ROLECODE: 'DR3009',
  //         ROLENAME: 'Recording',
  //         ARTISTNAME: '임재긍, 이동근',
  //       },
  //       {
  //         ROLECODE: 'DR3008',
  //         ROLENAME: 'Mastering',
  //         ARTISTNAME: '채승균',
  //       },
  //     ],
  //     REPORTPREVIEW:
  //       '이하준 첫번째 미니 앨범 “어쩌다”  더블레스의 멤버 이하준이 아닌 가수 이하준으로써의 첫 발자국을 내딛는 앨범.  타이틀곡 ‘어쩌다’는 멀리서 바라볼 수밖에 없는 사람을 사랑하고 있지만 고백할 수 조차 없고 몰래 하는 사랑를 표현한 곡. 현실은 아프지만 그 사랑이 이루어지기를 바라는 마음을 담은 가사에 미디움 템포 리듬이 어우러진 곡.  또한 신곡 ‘술잔 속에 담긴 사랑’과 이하준의 색으로 덧입힌 리메이크곡 ‘낭만에 대하여’, ‘어느 60대 노부부이야기’, ‘돌아가는 삼각지’ 등 다양한 곡이 수록되었다.   1. 어쩌다 작사 이사벨 작곡 김인효 편곡 송기영  2. 술잔 속에 담긴 사랑 작사 이원찬 작곡 김인효 편곡 강 혁  3. 낭만에 대하여 작사 최백호 작곡 최백호 편곡 김인효  4. 어느 60대 노부부 이야기 작사 김목경 작곡 김목경 편곡 김인효  5. 돌아가는 삼각지 작사 배상태 작곡 배상태 편곡 김인효  6. 어쩌다(MR) 작곡 김인효 편곡 송기영  7. 술잔 속에 담긴 사랑(MR) 작곡 김인효 편곡 강 혁   <Credit> Programing 송기영,강혁 Piano,Keyboard 조상원 Nylon Guitar 허남진 Elec Guitar 김인효 Drum 박중현 Bass 김주성  EXECUTIVE PRODUCER 김도희 PRODUCER 김도희 MUSIC PRODUCTION SUPERVISOR 이정훈 MEDIA 김전주, 서혜선 PUBLIC RELATION 심솔아  녹음실 예하 studio 믹스 엔지니어 최경범, 레코딩엔지니어 임재긍, 이동근 미스터링 소닉코리아 / 채승균',
  //     SPOTLIGHTBUTTONFLAG: 'N',
  //     DUMMYTEXT:
  //       '16#_f6Ug7Th8Si9Rj0Qk!Pl@OmN#nM$oL%pK^qJ&r*IsH(tG)uF-_j0Qk!Pl@OmN#nM$oL%pK^qJ&r*IsH(tG)uF-v:Ew;Dx=Cy{B',
  //     SECTION: '앨범상세',
  //     PAGE: '앨범상세_앨범홈',
  //   },
  //   {
  //     RESULTCODE: '0',
  //     RESPONSE: 'albumInfo',
  //     CPLANCODE: '0',
  //     MENUID: '1000000461',
  //     ALBUMINFO: {
  //       ISSERVICE: true,
  //       ALBUMID: '11128541',
  //       ALBUMNAME: '情 정',
  //       ISSUEDATE: '2022.12.21',
  //       ISTRACKZERO: false,
  //       ALBUMIMG:
  //         'https://cdnimg.melon.co.kr/cm2/album/images/111/28/541/11128541_20221220140634_500.jpg?0805cf259398ec9578a21f34456509e6/melon/resize/386/optimize/90',
  //       ALBUMIMGLARGE:
  //         'https://cdnimg.melon.co.kr/cm2/album/images/111/28/541/11128541_20221220140634_500.jpg?0805cf259398ec9578a21f34456509e6/melon/optimize/90',
  //       SONGCNT: '4',
  //       CTYPE: '2',
  //       CONTSTYPECODE: 'N10002',
  //       ARTISTLIST: [
  //         {
  //           ARTISTID: '2911714',
  //           ARTISTNAME: '양지은',
  //           ACTTYPENAME: null,
  //           DEBUTDAY: null,
  //           BIRTHDAY: null,
  //           ARTISTIMG:
  //             'https://cdnimg.melon.co.kr/cm2/artistcrop/images/029/11/714/2911714_20211116150857_500.jpg?65a9b19d614db23207a003394baf26cf/melon/resize/220/optimize/90',
  //           IMAGETYPE: 'S',
  //           CONTSTYPECODE: 'N10006',
  //         },
  //       ],
  //     },
  //     TOTAVRGSCOREINFO: {
  //       TITLE: '평점 부여 권한',
  //       TEXT: '클린한 평점 환경을 위해\r\n24시간 이내에\r\n다운로드 받은 파일 재생,\r\n스트리밍으로 감상한 경우에만\r\n평점 부여가 가능합니다.\r\n참고하여 서비스 이용 바랍니다.\r\n\r\n* 접속자가 많은 경우\r\n평점주기가 지연 될 수 있습니다.',
  //       TOTAVRGSCORE: '4.9',
  //       PTCPNMPRCO: '134',
  //     },
  //     LIKECNT: '397',
  //     ISDOLBYATMOS: false,
  //     ISMASTERPIECE: false,
  //     BOOKLETIMGLIST: null,
  //     ALBUMPRICE: '',
  //     ALBUMPRICEFLAC16: '',
  //     ALBUMPRICEFLAC24: '',
  //     ALBUMFLACINFO: 'FLAC',
  //     ALBUMMESSAGE: '',
  //     BBSCHANNELSEQ: '102',
  //     BBSCONTSREFVALUE: '11128541',
  //     POSTIMG:
  //       'https://cdnimg.melon.co.kr/cm2/album/images/111/28/541/11128541_20221220140634_500.jpg/melon/optimize/90',
  //     POSTEDITIMG:
  //       'https://cdnimg.melon.co.kr/cm2/album/images/111/28/541/11128541_20221220140634_500.jpg/melon/resize/144/optimize/90',
  //     TITLESONGINFO: {
  //       SONGID: '35952517',
  //       SONGNAME: '그 정 때문에',
  //     },
  //     ARTISTNOTEINFO: null,
  //     ARTISTNOTEALLBUTTONFLAG: false,
  //     GENRELIST: [
  //       {
  //         GENRECODE: 'GN0700',
  //         GENRENAME: '성인가요/트로트',
  //       },
  //     ],
  //     ISSUEDATE: '2022.12.21',
  //     REPORT:
  //       '‘양지은’ [情 정] \n \n[그 정 때문에]는 가수 김용임의 [부초 같은 인생] [사랑님] 진해성의 [사랑반 눈물반] 금잔디의 [여여] 등 많은 곡을 히트시킨 작곡가 ‘공정식’의 곡이며, 편곡은 정차르트 ‘정경천님’, 음악은 대한민국 최고의 뮤지션인 ‘윤영인 악단’의 오케스트라 연주로 수준 높은 음악을 완성하였다. \n \n살아가면서 사랑하고 이별도 하고 아파하고 그리워하지만, 무 자르듯 떨쳐 낼 수 없는 것이 그 놈의 정 때문이라고 우리는 흔히들 말한다. 시간이 갈수록 더 깊어만 가는 끊지 못할 정. \n그 정을 테마로 하여 양지은이라는 청명함과 우수 섞인 목소리로 애절하게 노래로 담았다. \n \n[Credit] \n \nExecutive producer 노진영, 강주봉 @Chorokbaem E&M \nProduced by 최현중, 전경식, 강현구, 곽상원 @Chorokbaem E&M \n \n1. 나도 한 잔 \n \nComposed by 임종수, 임지선, 임지상 \nLyrics by 김순곤 \nArranged by 박용진 \n \nDrum 강윤기 \nBass 신현권 \n퍼커션 박영용 \nGuitar 박광민 \nPiano 변성룡 \nKeybord 박용진 \nString 배신희 \nTrombone 이한진 \nTrumpet 김동하 \nSaxophone 김원용 \n \nRecording Engneer 박성일 \nRecording Studio @ 예음 스튜디오 \nVocal recording Engneer 나다윗 \nMixing & Masterring Engneer 김헌철 \nPhoto Studio @ PINO STUDIO \nStylist 최수민 \n \n2. 그 정 때문에 \n \nComposed & Lyrics by 공정식 \nArranged by 정경천 \nDIRECTOR 공정식 \n \nCONDUCROR 윤영인 \nDrum 강윤기 \nBass 박한진 \nGuitar 박광민, 김광석 \nPiano 변성용 \nPercusion 박영용 \nKeybord 윤정노 \nSaxophone 김원용 \nTrumpet 김동하 \nTrombone 이한진 \nString’s 심상원외 \nChorus 김세령 \n \nRecording Studio @ 초이 녹음실 \nMIXING ENGINEER 최남진 \nAssist ENGINEER 남영우 \nMASTERING 소닉 채승균 \nStylist 최수민 \nPhoto Studio @ PINO STUDIO',
  //     ALBUMTYPE: '싱글',
  //     SELLCNPY: '2%엔터테인먼트',
  //     PLANCNPY: 'Chorokbaem E&M',
  //     CREDITLIST: [
  //       {
  //         ROLECODE: 'DR1002',
  //         ROLENAME: 'Executive Producer',
  //         ARTISTNAME: '노진영, 강주봉',
  //       },
  //       {
  //         ROLECODE: 'DR1000',
  //         ROLENAME: 'Producer',
  //         ARTISTNAME: '최현중, 전경식, 강현구, 곽상원',
  //       },
  //     ],
  //     REPORTPREVIEW:
  //       '‘양지은’ [情 정]  [그 정 때문에]는 가수 김용임의 [부초 같은 인생] [사랑님] 진해성의 [사랑반 눈물반] 금잔디의 [여여] 등 많은 곡을 히트시킨 작곡가 ‘공정식’의 곡이며, 편곡은 정차르트 ‘정경천님’, 음악은 대한민국 최고의 뮤지션인 ‘윤영인 악단’의 오케스트라 연주로 수준 높은 음악을 완성하였다.  살아가면서 사랑하고 이별도 하고 아파하고 그리워하지만, 무 자르듯 떨쳐 낼 수 없는 것이 그 놈의 정 때문이라고 우리는 흔히들 말한다. 시간이 갈수록 더 깊어만 가는 끊지 못할 정. 그 정을 테마로 하여 양지은이라는 청명함과 우수 섞인 목소리로 애절하게 노래로 담았다.  [Credit]  Executive producer 노진영, 강주봉 @Chorokbaem E&M Produced by 최현중, 전경식, 강현구, 곽상원 @Chorokbaem E&M  1. 나도 한 잔  Composed by 임종수, 임지선, 임지상 Lyrics by 김순곤 Arranged by 박용진  Drum 강윤기 Bass 신현권 퍼커션 박영용 Guitar 박광민 Piano 변성룡 Keybord 박용진 String 배신희 Trombone 이한진 Trumpet 김동하 Saxophone 김원용  Recording Engneer 박성일 Recording Studio @ 예음 스튜디오 Vocal recording Engneer 나다윗 Mixing & Masterring Engneer 김헌철 Photo Studio @ PINO STUDIO Stylist 최수민  2. 그 정 때문에  Composed & Lyrics by 공정식 Arranged by 정경천 DIRECTOR 공정식  CONDUCROR 윤영인 Drum 강윤기 Bass 박한진 Guitar 박광민, 김광석 Piano 변성용 Percusion 박영용 Keybord 윤정노 Saxophone 김원용 Trumpet 김동하 Trombone 이한진 String’s 심상원외 Chorus 김세령  Recording Studio @ 초이 녹음실 MIXING ENGINEER 최남진 Assist ENGINEER 남영우 MASTERING 소닉 채승균 Stylist 최수민 Photo Studio @ PINO STUDIO',
  //     SPOTLIGHTBUTTONFLAG: 'N',
  //     DUMMYTEXT:
  //       '16#_f6Ug7Th8Si9Rj0Qk!Pl@OmN#nM$oL%pK^qJ&r*IsH(tG)uF-_j0Qk!Pl@OmN#nM$oL%pK^qJ&r*IsH(tG)uF-v:Ew;Dx=Cy{B',
  //     SECTION: '앨범상세',
  //     PAGE: '앨범상세_앨범홈',
  //   },
  //   {
  //     RESULTCODE: '0',
  //     RESPONSE: 'albumInfo',
  //     CPLANCODE: '0',
  //     MENUID: '1000000461',
  //     ALBUMINFO: {
  //       ISSERVICE: true,
  //       ALBUMID: '11128673',
  //       ALBUMNAME: '연애의 참견 2022 OST - Part.26',
  //       ISSUEDATE: '2022.12.21',
  //       ISTRACKZERO: false,
  //       ALBUMIMG:
  //         'https://cdnimg.melon.co.kr/cm2/album/images/111/28/673/11128673_20221220150845_500.jpg?09387638f96947f0325d65778257b817/melon/resize/386/optimize/90',
  //       ALBUMIMGLARGE:
  //         'https://cdnimg.melon.co.kr/cm2/album/images/111/28/673/11128673_20221220150845_500.jpg?09387638f96947f0325d65778257b817/melon/optimize/90',
  //       SONGCNT: '2',
  //       CTYPE: '2',
  //       CONTSTYPECODE: 'N10002',
  //       ARTISTLIST: [
  //         {
  //           ARTISTID: '787391',
  //           ARTISTNAME: '림지 (LimJi)',
  //           ACTTYPENAME: null,
  //           DEBUTDAY: null,
  //           BIRTHDAY: null,
  //           ARTISTIMG:
  //             'https://cdnimg.melon.co.kr/cm2/artistcrop/images/007/87/391/787391_20221110114445_500.jpg?6ba47f7ff6a9bec66d204761e73863b6/melon/resize/220/optimize/90',
  //           IMAGETYPE: 'S',
  //           CONTSTYPECODE: 'N10006',
  //         },
  //       ],
  //     },
  //     TOTAVRGSCOREINFO: {
  //       TITLE: '평점 부여 권한',
  //       TEXT: '클린한 평점 환경을 위해\r\n24시간 이내에\r\n다운로드 받은 파일 재생,\r\n스트리밍으로 감상한 경우에만\r\n평점 부여가 가능합니다.\r\n참고하여 서비스 이용 바랍니다.\r\n\r\n* 접속자가 많은 경우\r\n평점주기가 지연 될 수 있습니다.',
  //       TOTAVRGSCORE: '3.5',
  //       PTCPNMPRCO: '3',
  //     },
  //     LIKECNT: '24',
  //     ISDOLBYATMOS: false,
  //     ISMASTERPIECE: false,
  //     BOOKLETIMGLIST: null,
  //     ALBUMPRICE: '',
  //     ALBUMPRICEFLAC16: '',
  //     ALBUMPRICEFLAC24: '',
  //     ALBUMFLACINFO: 'FLAC',
  //     ALBUMMESSAGE: '',
  //     BBSCHANNELSEQ: '102',
  //     BBSCONTSREFVALUE: '11128673',
  //     POSTIMG:
  //       'https://cdnimg.melon.co.kr/cm2/album/images/111/28/673/11128673_20221220150845_500.jpg/melon/optimize/90',
  //     POSTEDITIMG:
  //       'https://cdnimg.melon.co.kr/cm2/album/images/111/28/673/11128673_20221220150845_500.jpg/melon/resize/144/optimize/90',
  //     TITLESONGINFO: {
  //       SONGID: '35953222',
  //       SONGNAME: '새벽이라도 전화해요',
  //     },
  //     ARTISTNOTEINFO: null,
  //     ARTISTNOTEALLBUTTONFLAG: false,
  //     GENRELIST: [
  //       {
  //         GENRECODE: 'GN1504',
  //         GENRENAME: '국내드라마',
  //       },
  //       {
  //         GENRECODE: 'GN0100',
  //         GENRENAME: '발라드',
  //       },
  //     ],
  //     ISSUEDATE: '2022.12.21',
  //     REPORT:
  //       "'연애의 참견' 2022 OST Part.26 - 림지 (LimJi) [새벽이라도 전화해요] \n \n핫한 토크 라인업(서장훈, 김숙, 한혜진, 주우재, 곽정은)의 단호한 연애 진단으로 대중에게 많은 사랑을 받고 있는 KBS Joy 예능 '연애의 참견' 2022 OST Part.26이 공개되었다! \n타이틀곡 [새벽이라도 전화해요]는 작곡가 황영화, 제이미, 지민(JAK), 건치의 합작품으로 애절한 멜로디에 리스너들의 새벽 감성을 적셔줄 가사를 담아 웅장한 사운드로 완성한 팝 발라드 곡이다. \n특히 가창에 참여한 가수 림지 (LimJi)의 매력적인 보이스가 새벽 비처럼 귓가에 스며들어 깊은 감동을 전할 것이다. \n \n \n[Credits] \n \nExecutive Produced by 고영조(MOON) \nProduced by 감성소녀 \nPresented by 도너츠 컬처앤뮤직 그룹 \n \nLyrics by 황영화, 제이미 \nComposed by 황영화, 제이미, 지민(JAK), 건치 \nArranged by 지민(JAK), 건치 \n \nGuitar by 윤다훈 \nPiano by 건치 \nBass by 정필승 \nString by 건치 \nDrum by 지민(JAK)",
  //     ALBUMTYPE: 'OST',
  //     SELLCNPY: 'NHN벅스',
  //     PLANCNPY: '도너츠컬처',
  //     CREDITLIST: [
  //       {
  //         ROLECODE: 'DR1002',
  //         ROLENAME: 'Executive Producer',
  //         ARTISTNAME: '고영조(MOON)',
  //       },
  //       {
  //         ROLECODE: 'DR1000',
  //         ROLENAME: 'Producer',
  //         ARTISTNAME: '감성소녀',
  //       },
  //       {
  //         ROLECODE: 'DR2002',
  //         ROLENAME: 'Guitar',
  //         ARTISTNAME: '윤다훈',
  //       },
  //       {
  //         ROLECODE: 'DR2005',
  //         ROLENAME: 'Piano',
  //         ARTISTNAME: '건치',
  //       },
  //       {
  //         ROLECODE: 'DR2003',
  //         ROLENAME: 'Bass',
  //         ARTISTNAME: '정필승',
  //       },
  //       {
  //         ROLECODE: 'DR2014',
  //         ROLENAME: 'String',
  //         ARTISTNAME: '건치',
  //       },
  //       {
  //         ROLECODE: 'DR2006',
  //         ROLENAME: 'Drum',
  //         ARTISTNAME: '지민 (JAK)',
  //       },
  //     ],
  //     REPORTPREVIEW:
  //       "'연애의 참견' 2022 OST Part.26 - 림지 (LimJi) [새벽이라도 전화해요]  핫한 토크 라인업(서장훈, 김숙, 한혜진, 주우재, 곽정은)의 단호한 연애 진단으로 대중에게 많은 사랑을 받고 있는 KBS Joy 예능 '연애의 참견' 2022 OST Part.26이 공개되었다! 타이틀곡 [새벽이라도 전화해요]는 작곡가 황영화, 제이미, 지민(JAK), 건치의 합작품으로 애절한 멜로디에 리스너들의 새벽 감성을 적셔줄 가사를 담아 웅장한 사운드로 완성한 팝 발라드 곡이다. 특히 가창에 참여한 가수 림지 (LimJi)의 매력적인 보이스가 새벽 비처럼 귓가에 스며들어 깊은 감동을 전할 것이다.   [Credits]  Executive Produced by 고영조(MOON) Produced by 감성소녀 Presented by 도너츠 컬처앤뮤직 그룹  Lyrics by 황영화, 제이미 Composed by 황영화, 제이미, 지민(JAK), 건치 Arranged by 지민(JAK), 건치  Guitar by 윤다훈 Piano by 건치 Bass by 정필승 String by 건치 Drum by 지민(JAK)",
  //     SPOTLIGHTBUTTONFLAG: 'N',
  //     DUMMYTEXT:
  //       '16#_f6Ug7Th8Si9Rj0Qk!Pl@OmN#nM$oL%pK^qJ&r*IsH(tG)uF-_j0Qk!Pl@OmN#nM$oL%pK^qJ&r*IsH(tG)uF-v:Ew;Dx=Cy{B',
  //     SECTION: '앨범상세',
  //     PAGE: '앨범상세_앨범홈',
  //   },
  //   {
  //     RESULTCODE: '0',
  //     RESPONSE: 'albumInfo',
  //     CPLANCODE: '0',
  //     MENUID: '1000000461',
  //     ALBUMINFO: {
  //       ISSERVICE: true,
  //       ALBUMID: '11127870',
  //       ALBUMNAME: 'WE ARE (Acoustic)',
  //       ISSUEDATE: '2022.12.21',
  //       ISTRACKZERO: false,
  //       ALBUMIMG:
  //         'https://cdnimg.melon.co.kr/cm2/album/images/111/27/870/11127870_20221219183319_500.jpg?76b93b75a492115a19886f5a5dbb46cf/melon/resize/386/optimize/90',
  //       ALBUMIMGLARGE:
  //         'https://cdnimg.melon.co.kr/cm2/album/images/111/27/870/11127870_20221219183319_500.jpg?76b93b75a492115a19886f5a5dbb46cf/melon/optimize/90',
  //       SONGCNT: '1',
  //       CTYPE: '2',
  //       CONTSTYPECODE: 'N10002',
  //       ARTISTLIST: [
  //         {
  //           ARTISTID: '2241672',
  //           ARTISTNAME: 'PL (피엘)',
  //           ACTTYPENAME: null,
  //           DEBUTDAY: null,
  //           BIRTHDAY: null,
  //           ARTISTIMG:
  //             'https://cdnimg.melon.co.kr/cm2/artistcrop/images/022/41/672/2241672_20220725113528_500.jpg?54b3b4b2361faec54f2751fe1b6b3dca/melon/resize/220/optimize/90',
  //           IMAGETYPE: 'S',
  //           CONTSTYPECODE: 'N10006',
  //         },
  //       ],
  //     },
  //     TOTAVRGSCOREINFO: {
  //       TITLE: '평점 부여 권한',
  //       TEXT: '클린한 평점 환경을 위해\r\n24시간 이내에\r\n다운로드 받은 파일 재생,\r\n스트리밍으로 감상한 경우에만\r\n평점 부여가 가능합니다.\r\n참고하여 서비스 이용 바랍니다.\r\n\r\n* 접속자가 많은 경우\r\n평점주기가 지연 될 수 있습니다.',
  //       TOTAVRGSCORE: '5.0',
  //       PTCPNMPRCO: '6',
  //     },
  //     LIKECNT: '41',
  //     ISDOLBYATMOS: false,
  //     ISMASTERPIECE: false,
  //     BOOKLETIMGLIST: null,
  //     ALBUMPRICE: '',
  //     ALBUMPRICEFLAC16: '',
  //     ALBUMPRICEFLAC24: '',
  //     ALBUMFLACINFO: 'FLAC',
  //     ALBUMMESSAGE: '',
  //     BBSCHANNELSEQ: '102',
  //     BBSCONTSREFVALUE: '11127870',
  //     POSTIMG:
  //       'https://cdnimg.melon.co.kr/cm2/album/images/111/27/870/11127870_20221219183319_500.jpg/melon/optimize/90',
  //     POSTEDITIMG:
  //       'https://cdnimg.melon.co.kr/cm2/album/images/111/27/870/11127870_20221219183319_500.jpg/melon/resize/144/optimize/90',
  //     TITLESONGINFO: {
  //       SONGID: '35949912',
  //       SONGNAME: 'WE ARE (Acoustic)',
  //     },
  //     ARTISTNOTEINFO: null,
  //     ARTISTNOTEALLBUTTONFLAG: false,
  //     GENRELIST: [
  //       {
  //         GENRECODE: 'GN0400',
  //         GENRENAME: 'R&B/Soul',
  //       },
  //       {
  //         GENRECODE: 'GN0500',
  //         GENRENAME: '인디음악',
  //       },
  //     ],
  //     ISSUEDATE: '2022.12.21',
  //     REPORT:
  //       '싱어송라이터 PL (피엘)의 연말 선물 같은 올해 마지막 싱글 ‘WE ARE (Acoustic)’ . 지난 7월 발매했던 네 번째 EP [TIMELESS]의 수록곡 ‘WE ARE’를 어쿠스틱 버전으로 편곡하여 발매했다. 따뜻하고 풍성한 악기들의 연주와 PL (피엘)이 가진 특유의 감성적인 목소리가 앙상블을 이루어 원곡과는 색다른 감동을 전한다. 언제나 믿고 듣는 PL (피엘)의 신보를 기다리는 팬들에게 주는 올해 마지막 선물 ‘WE ARE (Acoustic)’. 유기적인 EP 앨범들로 많은 사랑을 받았던 PL (피엘)의 다섯 번째 EP 앨범은 이듬해 봄 발매될 예정이다. \n \n- From PL \n \n벚꽃이 흩날리던 봄도, 푸른 하늘 아래 뜨거웠던 여름도, 저마다의 색으로 스미던 가을도, 지나온 나날을 떠올리며 맞이한 올해 겨울도 어느새 끝이 보이네요. 한 해의 꿈과 결심들이 못다 한 삶이었어도 괜찮습니다. 모두에게 계절은 그런 것이니까요. 눈부신 내일을 위해 한껏 살아온 계절마다 깃든 작은 행복 속에 우리가 함께한 소중한 시간이 있었습니다. 나의 모든 계절과 모든 밤, 노을과 바람에 당신이 있었어요. 다음 해, 봄도 당신과 함께 시작하고 싶습니다. \n \n \n[Credits] \n \nArtist PL (피엘) \nExecutive Producer 재뉴어리 \n \nLyrics by PL (피엘) \nComposed by PL (피엘), Saula (사울라), bcalm \nArranged by 하범석 \nGuitar 하범석 \nBass Robiq \nPiano 임채선 \n \nMixed by 이성실 (Honey Butter Studio) \nMastered by 박정언 (Honey Butter Studio) \n \nA&R 김지영 (재뉴어리) \nArtwork NSH @nsh.jpg',
  //     ALBUMTYPE: '싱글',
  //     SELLCNPY: '지니뮤직, Stone Music Entertainment',
  //     PLANCNPY: '재뉴어리',
  //     CREDITLIST: [
  //       {
  //         ROLECODE: 'DR1002',
  //         ROLENAME: 'Executive Producer',
  //         ARTISTNAME: '재뉴어리',
  //       },
  //       {
  //         ROLECODE: 'DR2002',
  //         ROLENAME: 'Guitar',
  //         ARTISTNAME: '하범석',
  //       },
  //       {
  //         ROLECODE: 'DR2003',
  //         ROLENAME: 'Bass',
  //         ARTISTNAME: 'Robiq',
  //       },
  //       {
  //         ROLECODE: 'DR2005',
  //         ROLENAME: 'Piano',
  //         ARTISTNAME: '임채선',
  //       },
  //       {
  //         ROLECODE: 'DR3007',
  //         ROLENAME: 'Mixing',
  //         ARTISTNAME: '이성실 (Honey Butter Studio)',
  //       },
  //       {
  //         ROLECODE: 'DR3008',
  //         ROLENAME: 'Mastering',
  //         ARTISTNAME: '박정언 (Honey Butter Studio)',
  //       },
  //       {
  //         ROLECODE: 'DR4004',
  //         ROLENAME: 'Artwork',
  //         ARTISTNAME: 'NSH',
  //       },
  //     ],
  //     REPORTPREVIEW:
  //       '싱어송라이터 PL (피엘)의 연말 선물 같은 올해 마지막 싱글 ‘WE ARE (Acoustic)’ . 지난 7월 발매했던 네 번째 EP [TIMELESS]의 수록곡 ‘WE ARE’를 어쿠스틱 버전으로 편곡하여 발매했다. 따뜻하고 풍성한 악기들의 연주와 PL (피엘)이 가진 특유의 감성적인 목소리가 앙상블을 이루어 원곡과는 색다른 감동을 전한다. 언제나 믿고 듣는 PL (피엘)의 신보를 기다리는 팬들에게 주는 올해 마지막 선물 ‘WE ARE (Acoustic)’. 유기적인 EP 앨범들로 많은 사랑을 받았던 PL (피엘)의 다섯 번째 EP 앨범은 이듬해 봄 발매될 예정이다.  - From PL  벚꽃이 흩날리던 봄도, 푸른 하늘 아래 뜨거웠던 여름도, 저마다의 색으로 스미던 가을도, 지나온 나날을 떠올리며 맞이한 올해 겨울도 어느새 끝이 보이네요. 한 해의 꿈과 결심들이 못다 한 삶이었어도 괜찮습니다. 모두에게 계절은 그런 것이니까요. 눈부신 내일을 위해 한껏 살아온 계절마다 깃든 작은 행복 속에 우리가 함께한 소중한 시간이 있었습니다. 나의 모든 계절과 모든 밤, 노을과 바람에 당신이 있었어요. 다음 해, 봄도 당신과 함께 시작하고 싶습니다.   [Credits]  Artist PL (피엘) Executive Producer 재뉴어리  Lyrics by PL (피엘) Composed by PL (피엘), Saula (사울라), bcalm Arranged by 하범석 Guitar 하범석 Bass Robiq Piano 임채선  Mixed by 이성실 (Honey Butter Studio) Mastered by 박정언 (Honey Butter Studio)  A&R 김지영 (재뉴어리) Artwork NSH @nsh.jpg',
  //     SPOTLIGHTBUTTONFLAG: 'N',
  //     DUMMYTEXT:
  //       '16#_f6Ug7Th8Si9Rj0Qk!Pl@OmN#nM$oL%pK^qJ&r*IsH(tG)uF-_j0Qk!Pl@OmN#nM$oL%pK^qJ&r*IsH(tG)uF-v:Ew;Dx=Cy{B',
  //     SECTION: '앨범상세',
  //     PAGE: '앨범상세_앨범홈',
  //   },
  //   {
  //     RESULTCODE: '0',
  //     RESPONSE: 'albumInfo',
  //     CPLANCODE: '0',
  //     MENUID: '1000000461',
  //     ALBUMINFO: {
  //       ISSERVICE: true,
  //       ALBUMID: '11127897',
  //       ALBUMNAME: '백일장 키드의 사랑 OST',
  //       ISSUEDATE: '2022.12.21',
  //       ISTRACKZERO: false,
  //       ALBUMIMG:
  //         'https://cdnimg.melon.co.kr/cm2/album/images/111/27/897/11127897_20221219185342_500.jpg?8a329894dcf3aca9aac7c01ce245759b/melon/resize/386/optimize/90',
  //       ALBUMIMGLARGE:
  //         'https://cdnimg.melon.co.kr/cm2/album/images/111/27/897/11127897_20221219185342_500.jpg?8a329894dcf3aca9aac7c01ce245759b/melon/optimize/90',
  //       SONGCNT: '19',
  //       CTYPE: '2',
  //       CONTSTYPECODE: 'N10002',
  //       ARTISTLIST: [
  //         {
  //           ARTISTID: '2727',
  //           ARTISTNAME: 'Various Artists',
  //           ACTTYPENAME: null,
  //           DEBUTDAY: null,
  //           BIRTHDAY: null,
  //           ARTISTIMG: '',
  //           IMAGETYPE: 'S',
  //           CONTSTYPECODE: 'N10006',
  //         },
  //       ],
  //     },
  //     TOTAVRGSCOREINFO: {
  //       TITLE: '평점 부여 권한',
  //       TEXT: '클린한 평점 환경을 위해\r\n24시간 이내에\r\n다운로드 받은 파일 재생,\r\n스트리밍으로 감상한 경우에만\r\n평점 부여가 가능합니다.\r\n참고하여 서비스 이용 바랍니다.\r\n\r\n* 접속자가 많은 경우\r\n평점주기가 지연 될 수 있습니다.',
  //       TOTAVRGSCORE: '5.0',
  //       PTCPNMPRCO: '6',
  //     },
  //     LIKECNT: '12',
  //     ISDOLBYATMOS: false,
  //     ISMASTERPIECE: false,
  //     BOOKLETIMGLIST: null,
  //     ALBUMPRICE: '',
  //     ALBUMPRICEFLAC16: '',
  //     ALBUMPRICEFLAC24: '',
  //     ALBUMFLACINFO: 'FLAC',
  //     ALBUMMESSAGE: '',
  //     BBSCHANNELSEQ: '102',
  //     BBSCONTSREFVALUE: '11127897',
  //     POSTIMG:
  //       'https://cdnimg.melon.co.kr/cm2/album/images/111/27/897/11127897_20221219185342_500.jpg/melon/optimize/90',
  //     POSTEDITIMG:
  //       'https://cdnimg.melon.co.kr/cm2/album/images/111/27/897/11127897_20221219185342_500.jpg/melon/resize/144/optimize/90',
  //     TITLESONGINFO: {
  //       SONGID: '35950089',
  //       SONGNAME: '우주 (My All)',
  //     },
  //     ARTISTNOTEINFO: null,
  //     ARTISTNOTEALLBUTTONFLAG: false,
  //     GENRELIST: [
  //       {
  //         GENRECODE: 'GN1504',
  //         GENRENAME: '국내드라마',
  //       },
  //       {
  //         GENRECODE: 'GN0100',
  //         GENRENAME: '발라드',
  //       },
  //     ],
  //     ISSUEDATE: '2022.12.21',
  //     REPORT:
  //       "JTBC 드라마 ‘백일장 키드의 사랑’ 온라인 컴필레이션 앨범 발매 \n \n열혈 문학 청춘들의 반짝이는 첫 사랑과 우정을 담은 레트로 하이틴 로맨스 ‘백일장 키드의 사랑’의 온라인 컴필레이션 앨범이 발매된다. \n \n이번 컴필레이션 앨범은 타이틀곡 LAS(라스)의 ‘우주(My All)’, 서브 타이틀곡 이민혁의 ‘나와 걷는 길’로 채워진다. 여기에 스토리의 몰입감을 높인 스코어 음원 15곡이 함께 수록되어 찬란하고 아름다운 청춘의 한 페이지를 장식한다. 특히 ‘해를 품은 달’, ‘마더’, ‘악마판사’, ‘펜트하우스’, ‘슈룹’ 등 히트 드라마의 음악을 책임진 정세린 음악감독이 완성한 스코어 음원들은 설렘 가득한 연출에 힘을 보태며 스토리의 매력을 배가했다는 호평을 얻고 있다. \n \n타이틀곡 ‘우주(My All)’는 하늘의 반짝이는 별을 서로의 사랑이 담긴 단어로 표현해 첫사랑의 애틋하면서도 꿈 같은 감정을 고스란히 담아낸 몽환적인 느낌의 발라드곡이다. 음악, 방송 등 다방면으로 활약하고 있는 듀오 LAS는 AVIN과 SLAY 특유의 부드러운 보이스와 섬세한 감정선을 바탕으로 아름답던 첫사랑의 로맨틱한 순간을 완벽하게 표현해내며 프로듀서를 넘어 보컬리스트로서의 능력 역시 유감없이 발휘했다. \n \n서브 타이틀곡 ‘나와 걷는 길’은 따뜻한 피아노 사운드와 감미로운 보컬의 호흡이 인상적인 곡이다. 고조되는 감정선과 보컬의 세심함이 어우러져 한층 포근한 세레나데로 완성됐다. 특히 아름다운 가사와 이민혁의 로맨틱한 보컬의 합이 듣는 이들의 공감대를 자극한다. \n \n다채로운 색을 지닌 신예 배우들의 시너지를 바탕으로 반짝이는 첫사랑과 우정, 불완전하고 불안정한 청춘의 성장기를 탄탄하게 이끈 ‘백일장 키드의 사랑’은 완벽한 일체감의 OST로 따뜻한 추억과 설렘을 선사하며 감동의 여운을 이어갈 전망이다. \n \nCREDIT \n \nExcutive Producer \nSLL / DRAMAHOUSE \n \n[SLL] \nProduction Director 박창성 \nProducer 이아름, 이철원 \nDistributor 김주리, 천단비, 심효식 \nAdministration & Accounts 윤승열, 백란 \n \n[DRAMAHOUSE] \nProduction Director 박준서 \nA&R 김사무엘, 김채은, 박수진 \n \nMusic Director 정세린 (Movie Closer) \nMusic Staff 이윤지, 김정완, 홍은지, 심희진, 정혜빈, 강민구 \n \n01. LAS (라스)_우주 (My All) \n \nLyrics by 박장현(Somebody’s Tale) \nComposed by 박장현(Somebody’s Tale) \nArranged by 박장현(Somebody’s Tale) \n \nVocal: LAS (AVIN, SLAY) \nString: 한성은 at AimStrings \nPiano: 박장현(Somebody's Tale) \nVocal Directed by 박장현 \n \nRecorded by 정기홍 @ Seoul Studio (assisted by 최다인, 이찬미) \nMixed by 정기홍 @ Seoul Studio (assisted by 최다인, 이찬미) \nMastered by 권남우 @ 821 Sound Mastering \n \n02. 이민혁_나와 걷는 길 \n \nLyrics by 윤토벤 \nComposed by 윤토벤, 로지케이, 김기원 \nArranged by 윤토벤, 로지케이, 김기원 \n \nPiano: O.YEON \nGuitar: 이승엽 \nBass: 김상욱 \nDrum: 한성환 \nString arranged by 로지케이 윤토벤 \nString: 로지케이 \n \nRecorded by 정기홍 @ Seoul Studio (assisted by 최다인, 이찬미) \nMixed by 정기홍 @ Seoul Studio (assisted by 최다인, 이찬미) \nMastered by 권남우 @ 821 Sound Mastering \n \n03. LAS (라스)_우주 (My All) (Inst.) \n04. 이민혁_나와 걷는 길 (Inst.) \n05. 백일장 키드의 사랑 (작곡 정세린 편곡 심희진) \n06. 첫 페이지의 설렘 (작곡 정세린 편곡 정혜빈) \n07. 그때, 그 시절 (작편곡 정혜빈) \n08. 인물 소개 (작편곡 김정완) \n09. 평화로운 한때 (작편곡 심희진) \n10. 그해 여름날의 인사 (작편곡 강민구) \n11. 살금살금 (작편곡 심희진) \n12. 까불다 다친다 (작편곡 강민구) \n13. 그 아이와의 첫 만남 (작편곡 강민구) \n14. 두근두근 (작편곡 심희진) \n15. 몰랐던 사연 (작편곡 이윤지) \n16. 말할 수 없는 이유 (작편곡 정혜빈) \n17. 슬프지만 아름다운 추억 (작곡 이윤지 편곡 홍은지) \n18. 너와 나의 소중한 문장 (작곡 정세린 편곡 강민구) \n19. 청춘, 우리들의 이야기 (작곡 정세린 편곡 심희진) \n \nScore Recording Engineer 박승천 (Movie Closer) \nScore Mastering Engineer 전 훈 (Sonic Korea) \n \nScore Musicians \n \nAcoustic Guitar 고태영 강민구 \nElectric Guitar 고태영 \nPiano & Keyboard 이윤지 김정완 홍은지 심희진 정혜빈 강민구 \n \n정덕근 Strings \n1st Violins 정덕근 한규현 김지현 신영은 손아롱 이새롬 \n2nd Violins 김윤정 김정아 왕아름 송태진 차이니 \nViolas 이지선 전혜성 신은미 박미리 \nV. Cellos 김경주 이상은 이희수",
  //     ALBUMTYPE: 'OST',
  //     SELLCNPY: '워너뮤직/ADA',
  //     PLANCNPY: 'SLL',
  //     CREDITLIST: [
  //       {
  //         ROLECODE: 'DR1002',
  //         ROLENAME: 'Executive Producer',
  //         ARTISTNAME: 'SLL, DRAMAHOUSE',
  //       },
  //       {
  //         ROLECODE: 'DR1000',
  //         ROLENAME: 'Producer',
  //         ARTISTNAME: '이아름, 이철원',
  //       },
  //       {
  //         ROLECODE: 'DR1014',
  //         ROLENAME: 'Music Director',
  //         ARTISTNAME: '정세린 (Movie Closer)',
  //       },
  //     ],
  //     REPORTPREVIEW:
  //       "JTBC 드라마 ‘백일장 키드의 사랑’ 온라인 컴필레이션 앨범 발매  열혈 문학 청춘들의 반짝이는 첫 사랑과 우정을 담은 레트로 하이틴 로맨스 ‘백일장 키드의 사랑’의 온라인 컴필레이션 앨범이 발매된다.  이번 컴필레이션 앨범은 타이틀곡 LAS(라스)의 ‘우주(My All)’, 서브 타이틀곡 이민혁의 ‘나와 걷는 길’로 채워진다. 여기에 스토리의 몰입감을 높인 스코어 음원 15곡이 함께 수록되어 찬란하고 아름다운 청춘의 한 페이지를 장식한다. 특히 ‘해를 품은 달’, ‘마더’, ‘악마판사’, ‘펜트하우스’, ‘슈룹’ 등 히트 드라마의 음악을 책임진 정세린 음악감독이 완성한 스코어 음원들은 설렘 가득한 연출에 힘을 보태며 스토리의 매력을 배가했다는 호평을 얻고 있다.  타이틀곡 ‘우주(My All)’는 하늘의 반짝이는 별을 서로의 사랑이 담긴 단어로 표현해 첫사랑의 애틋하면서도 꿈 같은 감정을 고스란히 담아낸 몽환적인 느낌의 발라드곡이다. 음악, 방송 등 다방면으로 활약하고 있는 듀오 LAS는 AVIN과 SLAY 특유의 부드러운 보이스와 섬세한 감정선을 바탕으로 아름답던 첫사랑의 로맨틱한 순간을 완벽하게 표현해내며 프로듀서를 넘어 보컬리스트로서의 능력 역시 유감없이 발휘했다.  서브 타이틀곡 ‘나와 걷는 길’은 따뜻한 피아노 사운드와 감미로운 보컬의 호흡이 인상적인 곡이다. 고조되는 감정선과 보컬의 세심함이 어우러져 한층 포근한 세레나데로 완성됐다. 특히 아름다운 가사와 이민혁의 로맨틱한 보컬의 합이 듣는 이들의 공감대를 자극한다.  다채로운 색을 지닌 신예 배우들의 시너지를 바탕으로 반짝이는 첫사랑과 우정, 불완전하고 불안정한 청춘의 성장기를 탄탄하게 이끈 ‘백일장 키드의 사랑’은 완벽한 일체감의 OST로 따뜻한 추억과 설렘을 선사하며 감동의 여운을 이어갈 전망이다.  CREDIT  Excutive Producer SLL / DRAMAHOUSE  [SLL] Production Director 박창성 Producer 이아름, 이철원 Distributor 김주리, 천단비, 심효식 Administration & Accounts 윤승열, 백란  [DRAMAHOUSE] Production Director 박준서 A&R 김사무엘, 김채은, 박수진  Music Director 정세린 (Movie Closer) Music Staff 이윤지, 김정완, 홍은지, 심희진, 정혜빈, 강민구  01. LAS (라스)_우주 (My All)  Lyrics by 박장현(Somebody’s Tale) Composed by 박장현(Somebody’s Tale) Arranged by 박장현(Somebody’s Tale)  Vocal: LAS (AVIN, SLAY) String: 한성은 at AimStrings Piano: 박장현(Somebody's Tale) Vocal Directed by 박장현  Recorded by 정기홍 @ Seoul Studio (assisted by 최다인, 이찬미) Mixed by 정기홍 @ Seoul Studio (assisted by 최다인, 이찬미) Mastered by 권남우 @ 821 Sound Mastering  02. 이민혁_나와 걷는 길  Lyrics by 윤토벤 Composed by 윤토벤, 로지케이, 김기원 Arranged by 윤토벤, 로지케이, 김기원  Piano: O.YEON Guitar: 이승엽 Bass: 김상욱 Drum: 한성환 String arranged by 로지케이 윤토벤 String: 로지케이  Recorded by 정기홍 @ Seoul Studio (assisted by 최다인, 이찬미) Mixed by 정기홍 @ Seoul Studio (assisted by 최다인, 이찬미) Mastered by 권남우 @ 821 Sound Mastering  03. LAS (라스)_우주 (My All) (Inst.) 04. 이민혁_나와 걷는 길 (Inst.) 05. 백일장 키드의 사랑 (작곡 정세린 편곡 심희진) 06. 첫 페이지의 설렘 (작곡 정세린 편곡 정혜빈) 07. 그때, 그 시절 (작편곡 정혜빈) 08. 인물 소개 (작편곡 김정완) 09. 평화로운 한때 (작편곡 심희진) 10. 그해 여름날의 인사 (작편곡 강민구) 11. 살금살금 (작편곡 심희진) 12. 까불다 다친다 (작편곡 강민구) 13. 그 아이와의 첫 만남 (작편곡 강민구) 14. 두근두근 (작편곡 심희진) 15. 몰랐던 사연 (작편곡 이윤지) 16. 말할 수 없는 이유 (작편곡 정혜빈) 17. 슬프지만 아름다운 추억 (작곡 이윤지 편곡 홍은지) 18. 너와 나의 소중한 문장 (작곡 정세린 편곡 강민구) 19. 청춘, 우리들의 이야기 (작곡 정세린 편곡 심희진)  Score Recording Engineer 박승천 (Movie Closer) Score Mastering Engineer 전 훈 (Sonic Korea)  Score Musicians  Acoustic Guitar 고태영 강민구 Electric Guitar 고태영 Piano & Keyboard 이윤지 김정완 홍은지 심희진 정혜빈 강민구  정덕근 Strings 1st Violins 정덕근 한규현 김지현 신영은 손아롱 이새롬 2nd Violins 김윤정 김정아 왕아름 송태진 차이니 Violas 이지선 전혜성 신은미 박미리 V. Cellos 김경주 이상은 이희수",
  //     SPOTLIGHTBUTTONFLAG: 'N',
  //     DUMMYTEXT:
  //       '16#_f6Ug7Th8Si9Rj0Qk!Pl@OmN#nM$oL%pK^qJ&r*IsH(tG)uF-_j0Qk!Pl@OmN#nM$oL%pK^qJ&r*IsH(tG)uF-v:Ew;Dx=Cy{B',
  //     SECTION: '앨범상세',
  //     PAGE: '앨범상세_앨범홈',
  //   },
  //   {
  //     RESULTCODE: '0',
  //     RESPONSE: 'albumInfo',
  //     CPLANCODE: '0',
  //     MENUID: '1000000461',
  //     ALBUMINFO: {
  //       ISSERVICE: true,
  //       ALBUMID: '11128638',
  //       ALBUMNAME: '[화사쇼 Vol.2] Grey Christmas',
  //       ISSUEDATE: '2022.12.20',
  //       ISTRACKZERO: false,
  //       ALBUMIMG:
  //         'https://cdnimg.melon.co.kr/cm2/album/images/111/28/638/11128638_20221220145619_500.jpg?0d2d34af496377394172634f03380b19/melon/resize/386/optimize/90',
  //       ALBUMIMGLARGE:
  //         'https://cdnimg.melon.co.kr/cm2/album/images/111/28/638/11128638_20221220145619_500.jpg?0d2d34af496377394172634f03380b19/melon/optimize/90',
  //       SONGCNT: '2',
  //       CTYPE: '2',
  //       CONTSTYPECODE: 'N10002',
  //       ARTISTLIST: [
  //         {
  //           ARTISTID: '756531',
  //           ARTISTNAME: '화사 (Hwa Sa)',
  //           ACTTYPENAME: null,
  //           DEBUTDAY: null,
  //           BIRTHDAY: null,
  //           ARTISTIMG:
  //             'https://cdnimg.melon.co.kr/cm2/artistcrop/images/007/56/531/756531_20221011160642_500.jpg?622771541d7251b3adb33a6b70ebb29e/melon/resize/220/optimize/90',
  //           IMAGETYPE: 'S',
  //           CONTSTYPECODE: 'N10006',
  //         },
  //       ],
  //     },
  //     TOTAVRGSCOREINFO: {
  //       TITLE: '평점 부여 권한',
  //       TEXT: '클린한 평점 환경을 위해\r\n24시간 이내에\r\n다운로드 받은 파일 재생,\r\n스트리밍으로 감상한 경우에만\r\n평점 부여가 가능합니다.\r\n참고하여 서비스 이용 바랍니다.\r\n\r\n* 접속자가 많은 경우\r\n평점주기가 지연 될 수 있습니다.',
  //       TOTAVRGSCORE: '4.9',
  //       PTCPNMPRCO: '133',
  //     },
  //     LIKECNT: '822',
  //     ISDOLBYATMOS: false,
  //     ISMASTERPIECE: false,
  //     BOOKLETIMGLIST: null,
  //     ALBUMPRICE: '',
  //     ALBUMPRICEFLAC16: '',
  //     ALBUMPRICEFLAC24: '',
  //     ALBUMFLACINFO: 'FLAC',
  //     ALBUMMESSAGE: '',
  //     BBSCHANNELSEQ: '102',
  //     BBSCONTSREFVALUE: '11128638',
  //     POSTIMG:
  //       'https://cdnimg.melon.co.kr/cm2/album/images/111/28/638/11128638_20221220145619_500.jpg/melon/optimize/90',
  //     POSTEDITIMG:
  //       'https://cdnimg.melon.co.kr/cm2/album/images/111/28/638/11128638_20221220145619_500.jpg/melon/resize/144/optimize/90',
  //     TITLESONGINFO: {
  //       SONGID: '35953100',
  //       SONGNAME: 'Grey Christmas',
  //     },
  //     ARTISTNOTEINFO: null,
  //     ARTISTNOTEALLBUTTONFLAG: false,
  //     GENRELIST: [
  //       {
  //         GENRECODE: 'GN0400',
  //         GENRENAME: 'R&B/Soul',
  //       },
  //     ],
  //     ISSUEDATE: '2022.12.20',
  //     REPORT:
  //       "도시에 고즈넉한 밤이 내려앉으면, 화사만의 아지트에선 어쿠스틱 무대와 불타는 토요일 밤의 흥겨운 무대가 공존하는 홈메이드 콘서트가 시작됩니다. \n \n<화사쇼>의 시즌송 'Vol.2 Grey Christmas' \n사람 많고 복잡한 크리스마스에는 집이 최고다. 커다랗고 반짝이는 크리스마스트리와 딸랑딸랑 울리는 캐럴들로 채워진 거리를 뒤로하고 혼자 보내는 덤덤한 잿빛 크리스마스가 나쁘지 않다. 크리스마스에 느껴지는 복잡 미묘한 기분을 왈츠 바이브에 오밀조밀하게 담아냈다. \n \n12월 25일 크리스마스가 시작되는 시간, \ntvN <화사쇼>와 함께 외롭지 않은 밤이 되길. \n \n매주 토요일 밤 12시 tvN <화사쇼> \n \nLyrics by 화사, 박우상 \nComposed by 박우상, 화사 \nArranged by 박우상, 권석홍(RBW) \n \nPiano 박우상 \nDrum Programing 박우상 \nStrings Arranged by 권석홍 \nStrings Conducted by 권석홍 \nStrings RB-INJ \nChorus Livy \n \nRecorded by 박우상 @ LOGOS Studio \nString Recorded by 정기홍, 최다인, 이찬미 @ 서울스튜디오 \nMixed by 박우상 @ LOGOS Studio \nMastered by 권남우 @ 821 Sound Mastering",
  //     ALBUMTYPE: '싱글',
  //     SELLCNPY: '지니뮤직',
  //     PLANCNPY: '(주)RBW',
  //     CREDITLIST: [
  //       {
  //         ROLECODE: 'DR2005',
  //         ROLENAME: 'Piano',
  //         ARTISTNAME: '박우상',
  //       },
  //       {
  //         ROLECODE: 'DR2062',
  //         ROLENAME: 'Drum Programming',
  //         ARTISTNAME: '박우상',
  //       },
  //       {
  //         ROLECODE: 'DR2503',
  //         ROLENAME: 'String Arrange & Conductor',
  //         ARTISTNAME: '권석홍',
  //       },
  //       {
  //         ROLECODE: 'DR2287',
  //         ROLENAME: 'Strings',
  //         ARTISTNAME: 'RB-INJ',
  //       },
  //       {
  //         ROLECODE: 'DR2001',
  //         ROLENAME: 'Chorus',
  //         ARTISTNAME: 'Livy',
  //       },
  //       {
  //         ROLECODE: 'DR3009',
  //         ROLENAME: 'Recording',
  //         ARTISTNAME: '박우상',
  //       },
  //       {
  //         ROLECODE: 'DR3027',
  //         ROLENAME: 'String Recording',
  //         ARTISTNAME: '정기홍, 최다인, 이찬미',
  //       },
  //       {
  //         ROLECODE: 'DR3007',
  //         ROLENAME: 'Mixing',
  //         ARTISTNAME: '박우상',
  //       },
  //       {
  //         ROLECODE: 'DR3008',
  //         ROLENAME: 'Mastering',
  //         ARTISTNAME: '권남우',
  //       },
  //     ],
  //     REPORTPREVIEW:
  //       "도시에 고즈넉한 밤이 내려앉으면, 화사만의 아지트에선 어쿠스틱 무대와 불타는 토요일 밤의 흥겨운 무대가 공존하는 홈메이드 콘서트가 시작됩니다.  <화사쇼>의 시즌송 'Vol.2 Grey Christmas' 사람 많고 복잡한 크리스마스에는 집이 최고다. 커다랗고 반짝이는 크리스마스트리와 딸랑딸랑 울리는 캐럴들로 채워진 거리를 뒤로하고 혼자 보내는 덤덤한 잿빛 크리스마스가 나쁘지 않다. 크리스마스에 느껴지는 복잡 미묘한 기분을 왈츠 바이브에 오밀조밀하게 담아냈다.  12월 25일 크리스마스가 시작되는 시간, tvN <화사쇼>와 함께 외롭지 않은 밤이 되길.  매주 토요일 밤 12시 tvN <화사쇼>  Lyrics by 화사, 박우상 Composed by 박우상, 화사 Arranged by 박우상, 권석홍(RBW)  Piano 박우상 Drum Programing 박우상 Strings Arranged by 권석홍 Strings Conducted by 권석홍 Strings RB-INJ Chorus Livy  Recorded by 박우상 @ LOGOS Studio String Recorded by 정기홍, 최다인, 이찬미 @ 서울스튜디오 Mixed by 박우상 @ LOGOS Studio Mastered by 권남우 @ 821 Sound Mastering",
  //     SPOTLIGHTBUTTONFLAG: 'N',
  //     DUMMYTEXT:
  //       '16#_f6Ug7Th8Si9Rj0Qk!Pl@OmN#nM$oL%pK^qJ&r*IsH(tG)uF-_j0Qk!Pl@OmN#nM$oL%pK^qJ&r*IsH(tG)uF-v:Ew;Dx=Cy{B',
  //     SECTION: '앨범상세',
  //     PAGE: '앨범상세_앨범홈',
  //   },
  //   {
  //     RESULTCODE: '0',
  //     RESPONSE: 'albumInfo',
  //     CPLANCODE: '0',
  //     MENUID: '1000000461',
  //     ALBUMINFO: {
  //       ISSERVICE: true,
  //       ALBUMID: '11128710',
  //       ALBUMNAME: '그날의 온도를 기억하는 건 나의 손끝뿐',
  //       ISSUEDATE: '2022.12.21',
  //       ISTRACKZERO: false,
  //       ALBUMIMG:
  //         'https://cdnimg.melon.co.kr/cm2/album/images/111/28/710/11128710_20221220154022_500.jpg?7c5b9a5e82fb36a738d0d100b7a67842/melon/resize/386/optimize/90',
  //       ALBUMIMGLARGE:
  //         'https://cdnimg.melon.co.kr/cm2/album/images/111/28/710/11128710_20221220154022_500.jpg?7c5b9a5e82fb36a738d0d100b7a67842/melon/optimize/90',
  //       SONGCNT: '4',
  //       CTYPE: '2',
  //       CONTSTYPECODE: 'N10002',
  //       ARTISTLIST: [
  //         {
  //           ARTISTID: '3089540',
  //           ARTISTNAME: 'merrymerryseoul',
  //           ACTTYPENAME: null,
  //           DEBUTDAY: null,
  //           BIRTHDAY: null,
  //           ARTISTIMG:
  //             'https://cdnimg.melon.co.kr/cm2/artistcrop/images/030/89/540/3089540_20220915143703_500.jpg?24f8331bfbc54b08eea0badd7a999bb8/melon/resize/220/optimize/90',
  //           IMAGETYPE: 'S',
  //           CONTSTYPECODE: 'N10006',
  //         },
  //       ],
  //     },
  //     TOTAVRGSCOREINFO: {
  //       TITLE: '평점 부여 권한',
  //       TEXT: '클린한 평점 환경을 위해\r\n24시간 이내에\r\n다운로드 받은 파일 재생,\r\n스트리밍으로 감상한 경우에만\r\n평점 부여가 가능합니다.\r\n참고하여 서비스 이용 바랍니다.\r\n\r\n* 접속자가 많은 경우\r\n평점주기가 지연 될 수 있습니다.',
  //       TOTAVRGSCORE: '5.0',
  //       PTCPNMPRCO: '2',
  //     },
  //     LIKECNT: '16',
  //     ISDOLBYATMOS: false,
  //     ISMASTERPIECE: false,
  //     BOOKLETIMGLIST: null,
  //     ALBUMPRICE: '',
  //     ALBUMPRICEFLAC16: '',
  //     ALBUMPRICEFLAC24: '',
  //     ALBUMFLACINFO: 'FLAC',
  //     ALBUMMESSAGE: '',
  //     BBSCHANNELSEQ: '102',
  //     BBSCONTSREFVALUE: '11128710',
  //     POSTIMG:
  //       'https://cdnimg.melon.co.kr/cm2/album/images/111/28/710/11128710_20221220154022_500.jpg/melon/optimize/90',
  //     POSTEDITIMG:
  //       'https://cdnimg.melon.co.kr/cm2/album/images/111/28/710/11128710_20221220154022_500.jpg/melon/resize/144/optimize/90',
  //     TITLESONGINFO: {
  //       SONGID: '35953416',
  //       SONGNAME: 'That Night (by minZu) (Prod. Motto)',
  //     },
  //     ARTISTNOTEINFO: null,
  //     ARTISTNOTEALLBUTTONFLAG: false,
  //     GENRELIST: [
  //       {
  //         GENRECODE: 'GN0400',
  //         GENRENAME: 'R&B/Soul',
  //       },
  //     ],
  //     ISSUEDATE: '2022.12.21',
  //     REPORT:
  //       'merrymerryseoul, ‘그날의 온도를 기억하는 건 나의 손끝뿐’ \n빛나는 서울, 그 뒤에 가려진 빛 바랜 흔적을 담아보다. \n \n나는 아직 기억해. \n \n어느 때보다 뜨거웠던 우리 둘의 온도, \n무심하게 돌아서던 너의 뒷모습까지. \n \n‘그날의 온도를 기억하는 건 나의 손끝뿐’ \n \n[Track list] \n1. That Night (by minZu) (Prod. Motto) \n2. 우린 (by 그린란드) \n3. Face Time (by Hanon) (Prod. bluetin) \n4. 비참하게 슬픈 어린아이라는 것을 (by NARO) (Prod. holona) \n \n \n[Credit] \nPhoto : 강준호 @kangjunho_ \nModel : 이예지 @y_eezi',
  //     ALBUMTYPE: 'EP',
  //     SELLCNPY: 'Sony Music',
  //     PLANCNPY: 'LINK6 Inc.',
  //     CREDITLIST: null,
  //     REPORTPREVIEW:
  //       'merrymerryseoul, ‘그날의 온도를 기억하는 건 나의 손끝뿐’ 빛나는 서울, 그 뒤에 가려진 빛 바랜 흔적을 담아보다.  나는 아직 기억해.  어느 때보다 뜨거웠던 우리 둘의 온도, 무심하게 돌아서던 너의 뒷모습까지.  ‘그날의 온도를 기억하는 건 나의 손끝뿐’  [Track list] 1. That Night (by minZu) (Prod. Motto) 2. 우린 (by 그린란드) 3. Face Time (by Hanon) (Prod. bluetin) 4. 비참하게 슬픈 어린아이라는 것을 (by NARO) (Prod. holona)   [Credit] Photo : 강준호 @kangjunho_ Model : 이예지 @y_eezi',
  //     SPOTLIGHTBUTTONFLAG: 'N',
  //     DUMMYTEXT:
  //       '16#_f6Ug7Th8Si9Rj0Qk!Pl@OmN#nM$oL%pK^qJ&r*IsH(tG)uF-_j0Qk!Pl@OmN#nM$oL%pK^qJ&r*IsH(tG)uF-v:Ew;Dx=Cy{B',
  //     SECTION: '앨범상세',
  //     PAGE: '앨범상세_앨범홈',
  //   },
  //   {
  //     RESULTCODE: '0',
  //     RESPONSE: 'albumInfo',
  //     CPLANCODE: '0',
  //     MENUID: '1000000461',
  //     ALBUMINFO: {
  //       ISSERVICE: true,
  //       ALBUMID: '11128550',
  //       ALBUMNAME: '그 마음엔 이유가 없을 텐데',
  //       ISSUEDATE: '2022.12.21',
  //       ISTRACKZERO: false,
  //       ALBUMIMG:
  //         'https://cdnimg.melon.co.kr/cm2/album/images/111/28/550/11128550_20221220141314_500.jpg?68e33d7fe480c801db5ab4b08671029d/melon/resize/386/optimize/90',
  //       ALBUMIMGLARGE:
  //         'https://cdnimg.melon.co.kr/cm2/album/images/111/28/550/11128550_20221220141314_500.jpg?68e33d7fe480c801db5ab4b08671029d/melon/optimize/90',
  //       SONGCNT: '1',
  //       CTYPE: '2',
  //       CONTSTYPECODE: 'N10002',
  //       ARTISTLIST: [
  //         {
  //           ARTISTID: '3180416',
  //           ARTISTNAME: '김주댕',
  //           ACTTYPENAME: null,
  //           DEBUTDAY: null,
  //           BIRTHDAY: null,
  //           ARTISTIMG:
  //             'https://cdnimg.melon.co.kr/cm2/artistcrop/images/031/80/416/3180416_20221220172649_500.jpg?5a7a5a0d5713eaec9257645eaa7e74a3/melon/resize/220/optimize/90',
  //           IMAGETYPE: 'S',
  //           CONTSTYPECODE: 'N10006',
  //         },
  //       ],
  //     },
  //     TOTAVRGSCOREINFO: {
  //       TITLE: '평점 부여 권한',
  //       TEXT: '클린한 평점 환경을 위해\r\n24시간 이내에\r\n다운로드 받은 파일 재생,\r\n스트리밍으로 감상한 경우에만\r\n평점 부여가 가능합니다.\r\n참고하여 서비스 이용 바랍니다.\r\n\r\n* 접속자가 많은 경우\r\n평점주기가 지연 될 수 있습니다.',
  //       TOTAVRGSCORE: '5.0',
  //       PTCPNMPRCO: '6',
  //     },
  //     LIKECNT: '18',
  //     ISDOLBYATMOS: false,
  //     ISMASTERPIECE: false,
  //     BOOKLETIMGLIST: null,
  //     ALBUMPRICE: '',
  //     ALBUMPRICEFLAC16: '',
  //     ALBUMPRICEFLAC24: '',
  //     ALBUMFLACINFO: 'FLAC',
  //     ALBUMMESSAGE: '',
  //     BBSCHANNELSEQ: '102',
  //     BBSCONTSREFVALUE: '11128550',
  //     POSTIMG:
  //       'https://cdnimg.melon.co.kr/cm2/album/images/111/28/550/11128550_20221220141314_500.jpg/melon/optimize/90',
  //     POSTEDITIMG:
  //       'https://cdnimg.melon.co.kr/cm2/album/images/111/28/550/11128550_20221220141314_500.jpg/melon/resize/144/optimize/90',
  //     TITLESONGINFO: {
  //       SONGID: '35952552',
  //       SONGNAME: '그 마음엔 이유가 없을 텐데',
  //     },
  //     ARTISTNOTEINFO: null,
  //     ARTISTNOTEALLBUTTONFLAG: false,
  //     GENRELIST: [
  //       {
  //         GENRECODE: 'GN0100',
  //         GENRENAME: '발라드',
  //       },
  //       {
  //         GENRECODE: 'GN0500',
  //         GENRENAME: '인디음악',
  //       },
  //     ],
  //     ISSUEDATE: '2022.12.21',
  //     REPORT:
  //       '김주댕 데뷔 싱글 [그 마음엔 이유가 없을 텐데] \n \n \n항상 불안하기만 하던 나를 찾아온 당신에게 \n \n \n[Credits] \n \nArtist l 김주댕 \n \nExecutive Producer 배훈광 \nManagement by ONGRAY \n \n \nProduced by 수퍼수 \n \nWritten by 수퍼수 \nArranged by 수퍼수 \n \nVocal by 김주댕 \n \nBass by 이준 \nGuitars by 조창현 \nDrums by 여진우 \nKeys by 수퍼수 \nClarinet 김주은 \nStrings 김주은(Hesed_Strings) \nString Arranged 김주은 \n \nRecorded by 이창선, 최은미 at prelude studio, Jon S Kim at JSK Studio, 수퍼수 at Martin_Hendrix Studio \n \n \nMixed by 김준상 at koko sound \nMastered by 이창선 at prelude studio \n \nArtwork by 신예주 \n \n \nP) 2022 ONGRAY \n \n \n김주댕 \n \nInstagram l allways_young01 \nTikTok l allways_young01 \nYouTube l 김주댕',
  //     ALBUMTYPE: '싱글',
  //     SELLCNPY: 'YG PLUS',
  //     PLANCNPY: 'ONGRAY',
  //     CREDITLIST: [
  //       {
  //         ROLECODE: 'DR1002',
  //         ROLENAME: 'Executive Producer',
  //         ARTISTNAME: '배훈광',
  //       },
  //       {
  //         ROLECODE: 'DR1000',
  //         ROLENAME: 'Producer',
  //         ARTISTNAME: '수퍼수',
  //       },
  //       {
  //         ROLECODE: 'DR2019',
  //         ROLENAME: 'Vocal',
  //         ARTISTNAME: '김주댕',
  //       },
  //       {
  //         ROLECODE: 'DR2003',
  //         ROLENAME: 'Bass',
  //         ARTISTNAME: '이준',
  //       },
  //       {
  //         ROLECODE: 'DR2286',
  //         ROLENAME: 'Guitars',
  //         ARTISTNAME: '조창현',
  //       },
  //       {
  //         ROLECODE: 'DR2097',
  //         ROLENAME: 'Drums',
  //         ARTISTNAME: '여진우',
  //       },
  //       {
  //         ROLECODE: 'DR2361',
  //         ROLENAME: 'Keys',
  //         ARTISTNAME: '수퍼수',
  //       },
  //       {
  //         ROLECODE: 'DR2063',
  //         ROLENAME: 'Clarinet',
  //         ARTISTNAME: '김주은',
  //       },
  //       {
  //         ROLECODE: 'DR2014',
  //         ROLENAME: 'String',
  //         ARTISTNAME: '김주은 (Hesed_Strings)',
  //       },
  //       {
  //         ROLECODE: 'DR2045',
  //         ROLENAME: 'String Arrange',
  //         ARTISTNAME: '김주은',
  //       },
  //       {
  //         ROLECODE: 'DR3105',
  //         ROLENAME: 'Recording & Mastering',
  //         ARTISTNAME: '이창선',
  //       },
  //       {
  //         ROLECODE: 'DR3009',
  //         ROLENAME: 'Recording',
  //         ARTISTNAME: '최은미, Jon S Kim, 수퍼수',
  //       },
  //       {
  //         ROLECODE: 'DR3007',
  //         ROLENAME: 'Mixing',
  //         ARTISTNAME: '김준상',
  //       },
  //       {
  //         ROLECODE: 'DR4004',
  //         ROLENAME: 'Artwork',
  //         ARTISTNAME: '신예주',
  //       },
  //     ],
  //     REPORTPREVIEW:
  //       '김주댕 데뷔 싱글 [그 마음엔 이유가 없을 텐데]   항상 불안하기만 하던 나를 찾아온 당신에게   [Credits]  Artist l 김주댕  Executive Producer 배훈광 Management by ONGRAY   Produced by 수퍼수  Written by 수퍼수 Arranged by 수퍼수  Vocal by 김주댕  Bass by 이준 Guitars by 조창현 Drums by 여진우 Keys by 수퍼수 Clarinet 김주은 Strings 김주은(Hesed_Strings) String Arranged 김주은  Recorded by 이창선, 최은미 at prelude studio, Jon S Kim at JSK Studio, 수퍼수 at Martin_Hendrix Studio   Mixed by 김준상 at koko sound Mastered by 이창선 at prelude studio  Artwork by 신예주   P) 2022 ONGRAY   김주댕  Instagram l allways_young01 TikTok l allways_young01 YouTube l 김주댕',
  //     SPOTLIGHTBUTTONFLAG: 'N',
  //     DUMMYTEXT:
  //       '16#_f6Ug7Th8Si9Rj0Qk!Pl@OmN#nM$oL%pK^qJ&r*IsH(tG)uF-_j0Qk!Pl@OmN#nM$oL%pK^qJ&r*IsH(tG)uF-v:Ew;Dx=Cy{B',
  //     SECTION: '앨범상세',
  //     PAGE: '앨범상세_앨범홈',
  //   },
  //   {
  //     RESULTCODE: '0',
  //     RESPONSE: 'albumInfo',
  //     CPLANCODE: '0',
  //     MENUID: '1000000461',
  //     ALBUMINFO: {
  //       ISSERVICE: true,
  //       ALBUMID: '11128046',
  //       ALBUMNAME: 'Make Your Color',
  //       ISSUEDATE: '2022.12.21',
  //       ISTRACKZERO: false,
  //       ALBUMIMG:
  //         'https://cdnimg.melon.co.kr/cm2/album/images/111/28/046/11128046_20221220104459_500.jpg?d27213de9a240b5ae72863f2f1d84a54/melon/resize/386/optimize/90',
  //       ALBUMIMGLARGE:
  //         'https://cdnimg.melon.co.kr/cm2/album/images/111/28/046/11128046_20221220104459_500.jpg?d27213de9a240b5ae72863f2f1d84a54/melon/optimize/90',
  //       SONGCNT: '2',
  //       CTYPE: '2',
  //       CONTSTYPECODE: 'N10002',
  //       ARTISTLIST: [
  //         {
  //           ARTISTID: '100829',
  //           ARTISTNAME: '노브레인 (NoBrain)',
  //           ACTTYPENAME: null,
  //           DEBUTDAY: null,
  //           BIRTHDAY: null,
  //           ARTISTIMG:
  //             'https://cdnimg.melon.co.kr/cm2/artistcrop/images/001/00/829/100829_20210624102205_500.jpg?22e0f94e2e755aa63ff1ecd41f12d5f9/melon/resize/220/optimize/90',
  //           IMAGETYPE: 'S',
  //           CONTSTYPECODE: 'N10006',
  //         },
  //         {
  //           ARTISTID: '101843',
  //           ARTISTNAME: '레이지본 (Lazybone)',
  //           ACTTYPENAME: null,
  //           DEBUTDAY: null,
  //           BIRTHDAY: null,
  //           ARTISTIMG:
  //             'https://cdnimg.melon.co.kr/cm2/artistcrop/images/001/01/843/101843_20220727155541_500.jpg?d22cb446e868421de5fde54b169ce9c1/melon/resize/220/optimize/90',
  //           IMAGETYPE: 'S',
  //           CONTSTYPECODE: 'N10006',
  //         },
  //       ],
  //     },
  //     TOTAVRGSCOREINFO: {
  //       TITLE: '평점 부여 권한',
  //       TEXT: '클린한 평점 환경을 위해\r\n24시간 이내에\r\n다운로드 받은 파일 재생,\r\n스트리밍으로 감상한 경우에만\r\n평점 부여가 가능합니다.\r\n참고하여 서비스 이용 바랍니다.\r\n\r\n* 접속자가 많은 경우\r\n평점주기가 지연 될 수 있습니다.',
  //       TOTAVRGSCORE: '5.0',
  //       PTCPNMPRCO: '2',
  //     },
  //     LIKECNT: '24',
  //     ISDOLBYATMOS: false,
  //     ISMASTERPIECE: false,
  //     BOOKLETIMGLIST: null,
  //     ALBUMPRICE: '',
  //     ALBUMPRICEFLAC16: '',
  //     ALBUMPRICEFLAC24: '',
  //     ALBUMFLACINFO: 'FLAC',
  //     ALBUMMESSAGE: '',
  //     BBSCHANNELSEQ: '102',
  //     BBSCONTSREFVALUE: '11128046',
  //     POSTIMG:
  //       'https://cdnimg.melon.co.kr/cm2/album/images/111/28/046/11128046_20221220104459_500.jpg/melon/optimize/90',
  //     POSTEDITIMG:
  //       'https://cdnimg.melon.co.kr/cm2/album/images/111/28/046/11128046_20221220104459_500.jpg/melon/resize/144/optimize/90',
  //     TITLESONGINFO: {
  //       SONGID: '35950739',
  //       SONGNAME: 'Make Your Color (Nobrain)',
  //     },
  //     ARTISTNOTEINFO: null,
  //     ARTISTNOTEALLBUTTONFLAG: false,
  //     GENRELIST: [
  //       {
  //         GENRECODE: 'GN0600',
  //         GENRENAME: '록/메탈',
  //       },
  //     ],
  //     ISSUEDATE: '2022.12.21',
  //     REPORT:
  //       '노브레인 (NoBrain), 레이지본 (Lazybone) [Make Your Color] \n \n \nMake Your Color! 서울의 답답한 회색빛 건물 숲에서 우리만의 색깔을 만들자! \n효성의 ESG 브랜드 캠페인 슬로건입니다. \n \n더 나은 세상을 위해 효성과 모든 세대가 사랑하는 밴드 노브레인, 레이지본이 만났습니다. \n탄소섬유 일렉트릭 기타와 드럼 스틱으로 음원을 제작해 더욱 의미 있는 작업이었습니다. \n \n[Credit] \n \nExecutive Producer 김일두 \nComposed by 정민준, 황현성 \nLyrics by 정민준, 황현성 \nRecorded by 정태준 \nMix & Mastered by 정태준 \nArtworks & Design VOVO \n \n1. Make Your Color (Nobrain) \nArranged by 이성우, 정민준, 정우용, 황현성 \nVocal 이성우 \nGuitar 정민준 \nBass 정우용 \nDrum 황현성 \nChorus 정민준, 정우용, 황현성 \n \n2. Make Your Color (Lazybone) \nArranged by 임준규, 준다이, 정태준, 김석년 \nVocal 준다이 \nGuitar 임준규 \nBass 정태준 \nDrum 김석년',
  //     ALBUMTYPE: '싱글',
  //     SELLCNPY: '미러볼뮤직',
  //     PLANCNPY: '㈜록스타뮤직앤라이브',
  //     CREDITLIST: [
  //       {
  //         ROLECODE: 'DR1002',
  //         ROLENAME: 'Executive Producer',
  //         ARTISTNAME: '김일두',
  //       },
  //       {
  //         ROLECODE: 'DR3009',
  //         ROLENAME: 'Recording',
  //         ARTISTNAME: '정태준',
  //       },
  //       {
  //         ROLECODE: 'DR3006',
  //         ROLENAME: 'Mixing & Mastering',
  //         ARTISTNAME: '정태준',
  //       },
  //       {
  //         ROLECODE: 'DR4009',
  //         ROLENAME: 'Artwork & Design',
  //         ARTISTNAME: 'VOVO',
  //       },
  //     ],
  //     REPORTPREVIEW:
  //       '노브레인 (NoBrain), 레이지본 (Lazybone) [Make Your Color]   Make Your Color! 서울의 답답한 회색빛 건물 숲에서 우리만의 색깔을 만들자! 효성의 ESG 브랜드 캠페인 슬로건입니다.  더 나은 세상을 위해 효성과 모든 세대가 사랑하는 밴드 노브레인, 레이지본이 만났습니다. 탄소섬유 일렉트릭 기타와 드럼 스틱으로 음원을 제작해 더욱 의미 있는 작업이었습니다.  [Credit]  Executive Producer 김일두 Composed by 정민준, 황현성 Lyrics by 정민준, 황현성 Recorded by 정태준 Mix & Mastered by 정태준 Artworks & Design VOVO  1. Make Your Color (Nobrain) Arranged by 이성우, 정민준, 정우용, 황현성 Vocal 이성우 Guitar 정민준 Bass 정우용 Drum 황현성 Chorus 정민준, 정우용, 황현성  2. Make Your Color (Lazybone) Arranged by 임준규, 준다이, 정태준, 김석년 Vocal 준다이 Guitar 임준규 Bass 정태준 Drum 김석년',
  //     SPOTLIGHTBUTTONFLAG: 'N',
  //     DUMMYTEXT:
  //       '16#_f6Ug7Th8Si9Rj0Qk!Pl@OmN#nM$oL%pK^qJ&r*IsH(tG)uF-_j0Qk!Pl@OmN#nM$oL%pK^qJ&r*IsH(tG)uF-v:Ew;Dx=Cy{B',
  //     SECTION: '앨범상세',
  //     PAGE: '앨범상세_앨범홈',
  //   },
  //   {
  //     RESULTCODE: '0',
  //     RESPONSE: 'albumInfo',
  //     CPLANCODE: '0',
  //     MENUID: '1000000461',
  //     ALBUMINFO: {
  //       ISSERVICE: true,
  //       ALBUMID: '11128530',
  //       ALBUMNAME: '소중한 사람',
  //       ISSUEDATE: '2022.12.21',
  //       ISTRACKZERO: false,
  //       ALBUMIMG:
  //         'https://cdnimg.melon.co.kr/cm2/album/images/111/28/530/11128530_20221220135934_500.jpg?edf649bcb8bb5a94313005e0a0a344e3/melon/resize/386/optimize/90',
  //       ALBUMIMGLARGE:
  //         'https://cdnimg.melon.co.kr/cm2/album/images/111/28/530/11128530_20221220135934_500.jpg?edf649bcb8bb5a94313005e0a0a344e3/melon/optimize/90',
  //       SONGCNT: '2',
  //       CTYPE: '2',
  //       CONTSTYPECODE: 'N10002',
  //       ARTISTLIST: [
  //         {
  //           ARTISTID: '2112373',
  //           ARTISTNAME: 'ASEL (아셀)',
  //           ACTTYPENAME: null,
  //           DEBUTDAY: null,
  //           BIRTHDAY: null,
  //           ARTISTIMG:
  //             'https://cdnimg.melon.co.kr/cm2/artistcrop/images/021/12/373/2112373_20221220175311_500.jpg?baa26a0e9726021be09f1e4a87ebd810/melon/resize/220/optimize/90',
  //           IMAGETYPE: 'S',
  //           CONTSTYPECODE: 'N10006',
  //         },
  //       ],
  //     },
  //     TOTAVRGSCOREINFO: {
  //       TITLE: '평점 부여 권한',
  //       TEXT: '클린한 평점 환경을 위해\r\n24시간 이내에\r\n다운로드 받은 파일 재생,\r\n스트리밍으로 감상한 경우에만\r\n평점 부여가 가능합니다.\r\n참고하여 서비스 이용 바랍니다.\r\n\r\n* 접속자가 많은 경우\r\n평점주기가 지연 될 수 있습니다.',
  //       TOTAVRGSCORE: '5.0',
  //       PTCPNMPRCO: '1',
  //     },
  //     LIKECNT: '12',
  //     ISDOLBYATMOS: false,
  //     ISMASTERPIECE: false,
  //     BOOKLETIMGLIST: null,
  //     ALBUMPRICE: '',
  //     ALBUMPRICEFLAC16: '',
  //     ALBUMPRICEFLAC24: '',
  //     ALBUMFLACINFO: 'FLAC',
  //     ALBUMMESSAGE: '',
  //     BBSCHANNELSEQ: '102',
  //     BBSCONTSREFVALUE: '11128530',
  //     POSTIMG:
  //       'https://cdnimg.melon.co.kr/cm2/album/images/111/28/530/11128530_20221220135934_500.jpg/melon/optimize/90',
  //     POSTEDITIMG:
  //       'https://cdnimg.melon.co.kr/cm2/album/images/111/28/530/11128530_20221220135934_500.jpg/melon/resize/144/optimize/90',
  //     TITLESONGINFO: {
  //       SONGID: '35952374',
  //       SONGNAME: '소중한 사람 (Feat. amin)',
  //     },
  //     ARTISTNOTEINFO: null,
  //     ARTISTNOTEALLBUTTONFLAG: false,
  //     GENRELIST: [
  //       {
  //         GENRECODE: 'GN0400',
  //         GENRENAME: 'R&B/Soul',
  //       },
  //     ],
  //     ISSUEDATE: '2022.12.21',
  //     REPORT:
  //       '“ASEL (아셀)의” [ 소중한 사람 ] \n \n \n”당신이 없었다면, 나의 이야기는 없었을 거야.“ \n \n \n[Credits] \n \n01. 조각배 \n \n작사 - ASEL \n작곡 – ASEL, ST4NDARD \n편곡 – ASEL, ST4NDARD \n \nMixing – ASEL \nMaster - 배재한 \n \n \n02. 소중한 사람 (Feat. amin) \n \n작사 – ASEL, amin \n작곡 – ASEL, amin, KRID \n편곡 – ASEL, KRID \n \nMixing – ASEL \nMaster - 배재한 \nGuitar by – 김우섭 \n \n커버 모델 – Se Eun \n \n \n01. 조각배 \n \n”조각 배를 띄웠어요.. 흘러간 사람에게” \n \n \n02. 소중한 사람 (Feat. amin) *title \n \n”당신이 없었다면, 나의 이야기는 없었을 거야.“',
  //     ALBUMTYPE: '싱글',
  //     SELLCNPY: 'Universal Music Group',
  //     PLANCNPY: '다이너스티 뮤직',
  //     CREDITLIST: null,
  //     REPORTPREVIEW:
  //       '“ASEL (아셀)의” [ 소중한 사람 ]   ”당신이 없었다면, 나의 이야기는 없었을 거야.“   [Credits]  01. 조각배  작사 - ASEL 작곡 – ASEL, ST4NDARD 편곡 – ASEL, ST4NDARD  Mixing – ASEL Master - 배재한   02. 소중한 사람 (Feat. amin)  작사 – ASEL, amin 작곡 – ASEL, amin, KRID 편곡 – ASEL, KRID  Mixing – ASEL Master - 배재한 Guitar by – 김우섭  커버 모델 – Se Eun   01. 조각배  ”조각 배를 띄웠어요.. 흘러간 사람에게”   02. 소중한 사람 (Feat. amin) *title  ”당신이 없었다면, 나의 이야기는 없었을 거야.“',
  //     SPOTLIGHTBUTTONFLAG: 'N',
  //     DUMMYTEXT:
  //       '16#_f6Ug7Th8Si9Rj0Qk!Pl@OmN#nM$oL%pK^qJ&r*IsH(tG)uF-_j0Qk!Pl@OmN#nM$oL%pK^qJ&r*IsH(tG)uF-v:Ew;Dx=Cy{B',
  //     SECTION: '앨범상세',
  //     PAGE: '앨범상세_앨범홈',
  //   },
  // ];
  useEffect(() => {
    const getList = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(API + 'newalbum');
        setNewAlbum(res.data);
        // console.log(res.data);
      } catch (err) {
        console.error('Error : ', err);
        setCheckErr(true);
      }
      setIsLoading(false);
    };
    getList();
  }, []);

  return (
    <>
      {checkErr ? (
        <ErrorPage />
      ) : isLoading ? (
        <LoadingPage />
      ) : (
        <PageStyle>
          <AlbumStyle>
            {newAlbum.map((data) => {
              return (
                <li>
                  <div class="thumb">
                    <a
                      href={'https://www.melon.com/album/detail.htm?albumId=' + data.ALBUMINFO.ALBUMID}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={data.ALBUMINFO.ALBUMIMGLARGE} alt="albumimg" />
                    </a>
                  </div>
                  <div class="contents">
                    <span>{data.ALBUMINFO.ARTISTLIST[0]['ARTISTNAME']}</span>
                    <span>{data.PLANCNPY}</span>
                    <span>{data.SELLCNPY}</span>
                  </div>
                </li>
              );
            })}
          </AlbumStyle>
        </PageStyle>
      )}
    </>
  );
};

export default NewAlbum;
