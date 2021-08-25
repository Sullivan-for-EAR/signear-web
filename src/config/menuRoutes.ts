interface MenuRoute {
  id: number;
  title: string;
  url: string;
  subTitle: string;
}
const MenuRoutes: MenuRoute[] = [
  {
    id: 1,
    title: '강동구 수어통역센터',
    url: '/',
    subTitle: '우리 센터에 현재 활동 중인 수어통역사는 6명입니다.',
  },
  {
    id: 2,
    title: '오늘의 이어',
    url: '/todayEars',
    subTitle: 'OOO님의 오늘 통역 예약 목록입니다.',
  },
  {
    id: 3,
    title: '예약 관리',
    url: '/reservation',
    subTitle: '우리 센터에 예약된 통역 예약 현황입니다.',
  },
  {
    id: 4,
    title: '사용자 관리',
    url: '/userManage',
    subTitle: '우리 센터에 예약 기록이 있는 사용자 목록입니다.',
  },
  {
    id: 5,
    title: '사용자 관리',
    url: '/transManage',
    subTitle: '우리 센터에 예약 기록이 있는 사용자 목록입니다.',
  },
];

export default MenuRoutes;
