// ============================================
// 상품 데이터
// ============================================
// 이 파일은 모든 상품 정보를 담고 있는 데이터 객체입니다.
// 베스트 상품, 신상품, 특가 상품으로 구분되어 있습니다.

// 상품 데이터 객체
const productsData = {
    // 베스트 상품 목록
    best: [
        {
            id: 1,
            title: '삼성 갤럭시 버즈3 프로',
            price: 329000,
            salePrice: 229000,
            discount: 30,
            rating: 4.5,
            reviews: 1234,
            image: 'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/09/17/S6294566/SYS_2025091717273_0_600.jpg',
            images: [
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/09/17/S6294566/SYS_2025091717273_1_600.jpg',
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/09/17/S6294566/SYS_2025091717273_2_600.jpg',
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/09/17/S6294566/SYS_2025091717273_3_600.jpg',
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/09/17/S6294566/SYS_2025091717273_4_600.jpg',
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/09/17/S6294566/SYS_2025091717273_5_600.jpg'
            ],
            badge: 'sale',
            badgeText: '30%',
            description: `
                <h3>프리미엄 무선 이어폰의 새로운 기준</h3>
                <p>삼성 갤럭시 버즈3 프로는 최고 수준의 음질과 노이즈 캔슬링 기능을 제공합니다. 360도 오디오로 몰입감 있는 음악 감상을 경험하세요.</p>
                <h4>주요 특징</h4>
                <ul>
                    <li>적응형 노이즈 캔슬링 (ANC) 기술로 주변 소음 완벽 차단</li>
                    <li>11mm x 10mm 듀얼 드라이버로 풍부한 베이스와 선명한 고음</li>
                    <li>최대 8시간 연속 재생, 충전 케이스 포함 시 최대 30시간</li>
                    <li>IPX7 방수 등급으로 땀과 물에 강함</li>
                    <li>360 오디오로 영화와 게임의 몰입감 극대화</li>
                    <li>빠른 충전: 5분 충전으로 1시간 재생 가능</li>
                </ul>
                <h4>포함 구성품</h4>
                <ul>
                    <li>갤럭시 버즈3 프로 본체</li>
                    <li>충전 케이스</li>
                    <li>이어팁 (S, M, L)</li>
                    <li>USB-C 케이블</li>
                    <li>사용 설명서</li>
                </ul>
            `,
            spec: {
                '무선 연결': 'Bluetooth 5.3',
                '드라이버': '11mm x 10mm 듀얼 드라이버',
                '배터리': '이어폰 8시간 / 케이스 포함 30시간',
                '충전': 'USB-C, 무선 충전 지원',
                '방수': 'IPX7',
                '무게': '이어폰 5.9g / 케이스 43.8g',
                '색상': '블랙, 화이트, 바이올렛',
                '주요 기능': 'ANC, 360 오디오, 터치 제어, 음성 인식'
            },
            reviewList: [
                {
                    id: 1,
                    author: '김철수',
                    rating: 5,
                    date: '2024.01.15',
                    content: '음질이 정말 훌륭합니다! 노이즈 캔슬링도 완벽하고, 배터리도 오래 가네요. 운동할 때도 잘 안 떨어져서 만족합니다.',
                    helpful: 234,
                    verified: true
                },
                {
                    id: 2,
                    author: '이영희',
                    rating: 4,
                    date: '2024.01.12',
                    content: '전반적으로 좋은데, 가격이 조금 부담스럽네요. 하지만 음질과 기능을 생각하면 충분히 가치 있다고 생각합니다.',
                    helpful: 189,
                    verified: true
                },
                {
                    id: 3,
                    author: '박민수',
                    rating: 5,
                    date: '2024.01.10',
                    content: '360 오디오 기능이 정말 신기합니다. 영화 볼 때 마치 극장에 있는 것 같은 느낌이에요. 강력 추천합니다!',
                    helpful: 156,
                    verified: true
                },
                {
                    id: 4,
                    author: '최지은',
                    rating: 4,
                    date: '2024.01.08',
                    content: '착용감이 편안하고, 통화 품질도 좋습니다. 다만 이어팁이 조금 작아서 큰 사이즈를 별도로 구매했어요.',
                    helpful: 98,
                    verified: false
                },
                {
                    id: 5,
                    author: '정대현',
                    rating: 5,
                    date: '2024.01.05',
                    content: '베이스가 정말 강력하고 깊어요. 힙합이나 EDM 들을 때 최고입니다. 충전도 빨라서 불편함이 없네요.',
                    helpful: 267,
                    verified: true
                }
            ]
        },
        {
            id: 2,
            title: '애플 워치 SE 2세대',
            price: 359000,
            salePrice: 299000,
            discount: 17,
            rating: 4.6,
            reviews: 892,
            image: 'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/07/08/S6294029/SYS_2025070816119_0_600.jpg',
            images: [
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/07/08/S6294029/SYS_2025070816119_0_600.jpg',
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/07/08/S6294029/SYS_2025070816119_1_600.jpg',
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/07/08/S6294029/SYS_2025070816119_2_600.jpg',
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/07/08/S6294029/SYS_2025070816119_3_600.jpg',
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/07/08/S6294029/SYS_2025070816119_4_600.jpg'
            ],
            badge: 'hot',
            badgeText: 'HOT',
            description: `
                <h3>스마트한 건강 관리의 시작</h3>
                <p>애플 워치 SE 2세대는 건강 관리부터 일상 생활까지 모든 것을 한 곳에서 관리할 수 있는 스마트 워치입니다.</p>
                <h4>주요 특징</h4>
                <ul>
                    <li>심박수, 혈중 산소 포화도, 수면 추적 등 건강 모니터링</li>
                    <li>운동 자동 감지 및 다양한 운동 모드 지원</li>
                    <li>GPS 내장으로 운동 경로 추적</li>
                    <li>물 저항성으로 수영 시에도 사용 가능</li>
                    <li>배터리 최대 18시간 사용 가능</li>
                    <li>앱 알림, 전화, 메시지 수신 및 발신</li>
                </ul>
                <h4>포함 구성품</h4>
                <ul>
                    <li>애플 워치 SE 2세대 본체</li>
                    <li>스포츠 밴드 (S/M 또는 M/L)</li>
                    <li>매그네틱 충전 케이블</li>
                    <li>사용 설명서</li>
                </ul>
            `,
            spec: {
                '디스플레이': '40mm 또는 44mm Retina 디스플레이',
                '프로세서': 'S8 SiP',
                '배터리': '최대 18시간',
                '센서': '심박수, 가속도계, 자이로스코프, 주변광 센서',
                '방수': '수영 가능 (50m 방수)',
                '연결': 'Wi-Fi, Bluetooth 5.0, GPS',
                '운영체제': 'watchOS 9',
                '색상': '미드나잇, 스타라이트, 프로덕트 레드'
            },
            reviewList: [
                {
                    id: 1,
                    author: '이민지',
                    rating: 5,
                    date: '2024.01.14',
                    content: '운동할 때 정말 유용해요! 심박수와 칼로리 소모량을 실시간으로 확인할 수 있어서 동기부여가 됩니다. 디자인도 깔끔하고 가볍네요.',
                    helpful: 312,
                    verified: true
                },
                {
                    id: 2,
                    author: '강태영',
                    rating: 4,
                    date: '2024.01.11',
                    content: '건강 관리 기능이 정말 좋습니다. 수면 추적 기능으로 내 수면 패턴을 알 수 있어서 생활 습관 개선에 도움이 되었어요.',
                    helpful: 245,
                    verified: true
                },
                {
                    id: 3,
                    author: '윤서연',
                    rating: 5,
                    date: '2024.01.09',
                    content: '배터리가 생각보다 오래 가네요. 하루 종일 착용해도 저녁까지 충분히 버틸 수 있어요. 알림 기능도 편리합니다.',
                    helpful: 198,
                    verified: true
                },
                {
                    id: 4,
                    author: '조현우',
                    rating: 4,
                    date: '2024.01.07',
                    content: '아이폰과 연동이 완벽합니다. 전화나 메시지를 워치에서 바로 확인하고 답장할 수 있어서 편리해요. 다만 가격이 조금 부담스럽긴 해요.',
                    helpful: 167,
                    verified: true
                }
            ]
        },
        {
            id: 3,
            title: 'LG 울트라기어 27인치 게이밍 모니터',
            price: 599000,
            salePrice: 449000,
            discount: 25,
            rating: 4.8,
            reviews: 567,
            image: 'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/05/22/S6293615/S6293615_0_600.jpg',
            images: [
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/05/22/S6293615/S6293615_0_600.jpg',
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/05/22/S6293615/S6293615_1_600.jpg',
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/05/22/S6293615/S6293615_2_600.jpg',
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/05/22/S6293615/S6293615_3_600.jpg',
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/05/22/S6293615/S6293615_4_600.jpg'
            ],
            badge: 'sale',
            badgeText: '25%',
            description: `
                <h3>프로 게이머를 위한 최적의 모니터</h3>
                <p>LG 울트라기어 27인치 게이밍 모니터는 빠른 응답 속도와 선명한 화질로 게임의 모든 순간을 놓치지 않습니다.</p>
                <h4>주요 특징</h4>
                <ul>
                    <li>27인치 QHD (2560 x 1440) 해상도로 선명한 화질</li>
                    <li>144Hz 고주사율로 부드러운 화면 전환</li>
                    <li>1ms 응답 속도로 빠른 반응성</li>
                    <li>AMD FreeSync Premium 지원으로 화면 찢김 방지</li>
                    <li>HDR10 지원으로 생생한 색감 표현</li>
                    <li>게이밍 모드 및 화면 분할 기능</li>
                </ul>
                <h4>포함 구성품</h4>
                <ul>
                    <li>모니터 본체</li>
                    <li>스탠드</li>
                    <li>HDMI 케이블</li>
                    <li>DP 케이블</li>
                    <li>전원 어댑터</li>
                    <li>사용 설명서</li>
                </ul>
            `,
            spec: {
                '화면 크기': '27인치',
                '해상도': '2560 x 1440 (QHD)',
                '패널 타입': 'IPS',
                '주사율': '144Hz',
                '응답 속도': '1ms (GTG)',
                '밝기': '350cd/㎡',
                '색재현율': 'sRGB 99%',
                'HDR': 'HDR10 지원',
                '연결 단자': 'HDMI 2.0 x 2, DisplayPort 1.4 x 1',
                '무게': '4.5kg'
            },
            reviewList: [
                {
                    id: 1,
                    author: '장성호',
                    rating: 5,
                    date: '2024.01.13',
                    content: '게임할 때 정말 부드럽네요! 144Hz의 차이를 확실히 느낄 수 있어요. 색감도 좋고 화질도 선명합니다.',
                    helpful: 289,
                    verified: true
                },
                {
                    id: 2,
                    author: '한소영',
                    rating: 5,
                    date: '2024.01.11',
                    content: '작업용으로도 게임용으로도 완벽해요. 화면이 넓어서 멀티태스킹하기 좋습니다.',
                    helpful: 198,
                    verified: true
                },
                {
                    id: 3,
                    author: '오준혁',
                    rating: 4,
                    date: '2024.01.09',
                    content: '가격 대비 성능이 정말 좋습니다. 다만 스탠드가 조금 불안정한 느낌이 있어요.',
                    helpful: 156,
                    verified: true
                }
            ]
        },
        {
            id: 4,
            title: '샤오미 무선 충전 패드',
            price: 39000,
            salePrice: 29000,
            discount: 26,
            rating: 4.7,
            reviews: 892,
            image: 'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/10/14/B0351685/B0351685_0_600.jpg',
            images: [
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/10/14/B0351685/B0351685_0_600.jpg',
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/10/14/B0351685/B0351685_1_600.jpg',
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/10/14/B0351685/B0351685_0_600.jpg',
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/10/14/B0351685/B0351685_0_600.jpg',
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/10/14/B0351685/B0351685_0_600.jpg'
            ],
            badge: 'best',
            badgeText: 'BEST',
            description: `
                <h3>편리한 무선 충전의 시작</h3>
                <p>샤오미 무선 충전 패드는 Qi 표준을 지원하여 대부분의 스마트폰과 호환됩니다. 얇고 가벼운 디자인으로 어디서나 편리하게 사용할 수 있습니다.</p>
                <h4>주요 특징</h4>
                <ul>
                    <li>Qi 무선 충전 표준 지원</li>
                    <li>최대 10W 고속 충전</li>
                    <li>과전류, 과열, 단락 보호 기능</li>
                    <li>얇고 가벼운 슬림 디자인</li>
                    <li>LED 충전 상태 표시등</li>
                    <li>고무 패드로 미끄럼 방지</li>
                </ul>
            `,
            spec: {
                '충전 방식': 'Qi 무선 충전',
                '출력': '최대 10W',
                '입력': '5V/2A, 9V/1.67A',
                '크기': '100mm x 100mm x 8mm',
                '무게': '약 100g',
                '호환성': 'Qi 표준 지원 기기',
                'LED 표시': '충전 상태 표시',
                '보호 기능': '과전류, 과열, 단락 보호'
            },
            reviewList: [
                {
                    id: 1,
                    author: '송미라',
                    rating: 5,
                    date: '2024.01.12',
                    content: '가격 대비 정말 좋아요! 충전 속도도 빠르고 디자인도 깔끔합니다. 침대 옆에 두고 사용하기 완벽해요.',
                    helpful: 312,
                    verified: true
                },
                {
                    id: 2,
                    author: '윤태준',
                    rating: 4,
                    date: '2024.01.10',
                    content: '무선 충전이 이렇게 편할 줄 몰랐어요. 케이블 없이 충전할 수 있어서 정말 편리합니다.',
                    helpful: 245,
                    verified: true
                },
                {
                    id: 3,
                    author: '김수진',
                    rating: 5,
                    date: '2024.01.08',
                    content: '작고 가벼워서 들고 다니기도 좋아요. 여행갈 때도 가져가면 편할 것 같습니다.',
                    helpful: 189,
                    verified: true
                }
            ]
        },
        {
            id: 5,
            title: 'JBL 플립6 블루투스 스피커',
            price: 159000,
            salePrice: 119000,
            discount: 25,
            rating: 4.5,
            reviews: 456,
            image: 'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/10/22/B0707050/B0707050_0_600.jpg',
            images: [
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/10/22/B0707050/B0707050_0_600.jpg',
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/10/22/B0707050/B0707050_1_600.jpg',
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/10/22/B0707050/B0707050_2_600.jpg',
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/10/22/B0707050/B0707050_3_600.jpg',
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/10/22/B0707050/B0707050_4_600.jpg'
            ],
            badge: 'sale',
            badgeText: '25%',
            description: `
                <h3>어디서나 강력한 사운드</h3>
                <p>JBL 플립6은 휴대용 블루투스 스피커의 새로운 기준을 제시합니다. 작은 크기에도 불구하고 강력한 베이스와 선명한 음질을 제공합니다.</p>
                <h4>주요 특징</h4>
                <ul>
                    <li>JBL Pro Sound 기술로 강력한 사운드</li>
                    <li>IPX7 방수 등급으로 물에 강함</li>
                    <li>최대 12시간 재생 시간</li>
                    <li>PartyBoost 기능으로 여러 스피커 동시 연결</li>
                    <li>실리콘 재질로 내구성 향상</li>
                    <li>USB-C 충전 지원</li>
                </ul>
            `,
            spec: {
                '출력': '20W',
                '배터리': '최대 12시간 재생',
                '충전': 'USB-C',
                '방수': 'IPX7',
                '연결': 'Bluetooth 5.1',
                '크기': '172mm x 68mm x 73mm',
                '무게': '550g',
                '색상': '블랙, 핑크, 블루, 그린 등'
            },
            reviewList: [
                {
                    id: 1,
                    author: '박지훈',
                    rating: 5,
                    date: '2024.01.11',
                    content: '작은 크기에 비해 음질이 정말 좋아요! 캠핑 갈 때 가져가면 완벽합니다. 방수 기능도 있어서 안심하고 사용할 수 있어요.',
                    helpful: 278,
                    verified: true
                },
                {
                    id: 2,
                    author: '이수진',
                    rating: 4,
                    date: '2024.01.09',
                    content: '베이스가 강력해서 좋아요. 다만 최대 볼륨에서 약간의 왜곡이 있긴 하지만, 일반적으로 사용하기에는 충분합니다.',
                    helpful: 198,
                    verified: true
                },
                {
                    id: 3,
                    author: '최영수',
                    rating: 5,
                    date: '2024.01.07',
                    content: '배터리가 오래 가서 하루 종일 사용해도 괜찮아요. 디자인도 예쁘고 휴대하기 편합니다.',
                    helpful: 167,
                    verified: true
                }
            ]
        },
        {
            id: 6,
            title: '아이폰 15 프로 맥스 실리콘 케이스',
            price: 49000,
            salePrice: 34900,
            discount: 29,
            rating: 4.6,
            reviews: 234,
            image: 'https://www.etlandmall.co.kr/nas/cdn/attach/product/2024/03/29/B0012992/B0012992_2_600.jpg',
            images: [
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2024/03/29/B0012992/B0012992_2_600.jpg',
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2024/03/29/B0012992/B0012992_0_600.jpg',
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2024/03/29/B0012992/B0012992_1_600.jpg',
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2024/03/29/B0012992/B0012992_3_600.jpg',
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2024/12/16/B0554582/B0554582_1_600.jpg'
            ],
            badge: 'new',
            badgeText: 'NEW',
            description: `
                <h3>완벽한 보호와 스타일</h3>
                <p>아이폰 15 프로 맥스 전용 실리콘 케이스로 기기를 안전하게 보호하면서도 세련된 디자인을 제공합니다.</p>
                <h4>주요 특징</h4>
                <ul>
                    <li>부드러운 실리콘 소재로 미끄럼 방지</li>
                    <li>4면 완벽 보호 (앞면, 뒷면, 측면)</li>
                    <li>카메라 렌즈 보호</li>
                    <li>무선 충전 호환</li>
                    <li>다양한 색상 선택 가능</li>
                    <li>얇고 가벼운 디자인</li>
                </ul>
            `,
            spec: {
                '호환 모델': '아이폰 15 프로 맥스',
                '소재': '실리콘',
                '보호 기능': '낙하 충격 완화',
                '무선 충전': '호환',
                '색상': '블랙, 화이트, 레드, 블루 등',
                '두께': '약 1.5mm',
                '무게': '약 25g'
            },
            reviewList: [
                {
                    id: 1,
                    author: '김민지',
                    rating: 5,
                    date: '2024.01.10',
                    content: '착용감이 정말 좋아요! 실리콘 소재라서 미끄럽지 않고, 디자인도 깔끔합니다. 무선 충전도 잘 되네요.',
                    helpful: 189,
                    verified: true
                },
                {
                    id: 2,
                    author: '이동훈',
                    rating: 4,
                    date: '2024.01.08',
                    content: '가격 대비 괜찮은 케이스입니다. 다만 색상이 조금 쉽게 변하는 것 같아요.',
                    helpful: 134,
                    verified: true
                }
            ]
        },
        {
            id: 7,
            title: '로지텍 MX 마스터 3S 무선 마우스',
            price: 129000,
            salePrice: 99000,
            discount: 23,
            rating: 4.8,
            reviews: 678,
            image: 'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/11/26/S6295106/S6295106_1_600.jpg',
            images: [
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/11/26/S6295108/_0_600.jpg',
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/11/26/S6295106/S6295106_1_600.jpg',
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/11/26/S6295106/S6295106_2_600.jpg',
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/11/26/S6295106/S6295106_3_600.jpg',
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/11/26/S6295106/S6295106_3_600.jpg'
            ],
            badge: 'new',
            badgeText: 'NEW',
            description: `
                <h3>프로페셔널을 위한 최고의 마우스</h3>
                <p>로지텍 MX 마스터 3S는 생산성과 편의성을 극대화한 무선 마우스입니다. 정밀한 트래킹과 편리한 제스처로 업무 효율을 높여보세요.</p>
                <h4>주요 특징</h4>
                <ul>
                    <li>Darkfield 고정밀 센서로 어떤 표면에서도 작동</li>
                    <li>최대 70일 배터리 수명</li>
                    <li>다중 기기 연결 (최대 3대 동시 연결)</li>
                    <li>편리한 제스처 버튼</li>
                    <li>인체공학적 디자인으로 장시간 사용에도 편안함</li>
                    <li>빠른 스크롤 휠</li>
                </ul>
            `,
            spec: {
                '센서': 'Darkfield 고정밀 센서',
                '해상도': '최대 8000 DPI',
                '배터리': '최대 70일',
                '연결': 'Bluetooth, USB 수신기',
                '연결 기기': '최대 3대 동시 연결',
                '버튼': '7개 프로그래밍 가능 버튼',
                '크기': '126mm x 84mm x 51mm',
                '무게': '141g'
            },
            reviewList: [
                {
                    id: 1,
                    author: '정우진',
                    rating: 5,
                    date: '2024.01.12',
                    content: '디자인 작업할 때 정말 유용해요! 제스처 버튼이 편리하고, 배터리도 오래 가서 만족합니다.',
                    helpful: 345,
                    verified: true
                },
                {
                    id: 2,
                    author: '한미영',
                    rating: 5,
                    date: '2024.01.10',
                    content: '여러 기기를 한 번에 연결해서 사용할 수 있어서 정말 편해요. 작업 효율이 확실히 올라갔습니다.',
                    helpful: 278,
                    verified: true
                },
                {
                    id: 3,
                    author: '강민수',
                    rating: 4,
                    date: '2024.01.08',
                    content: '인체공학적 디자인이 정말 좋아요. 하루 종일 사용해도 손목이 안 아파요. 다만 가격이 조금 부담스럽긴 해요.',
                    helpful: 198,
                    verified: true
                }
            ]
        },
        {
            id: 8,
            title: '세모키 X 에포메이커 SEMOKEY100 풀배열 유무선 키보드 ',
            price: 89000,
            salePrice: 69000,
            discount: 22,
            rating: 4.4,
            reviews: 345,
            image: 'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/10/31/S6294795/_0_600.jpg',
            images: [
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/10/31/S6294795/_1_600.jpg',
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/10/30/S6294795/S6294795_2_600.jpg',
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/10/30/S6294795/S6294795_3_600.jpg',
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/10/30/S6294795/S6294795_4_600.jpg',
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/10/30/S6294795/S6294795_5_600.jpg'
            ],
            badge: 'new',
            badgeText: 'NEW',
            description: `
                <h3>모든 연결을 한 곳에</h3>
                <p>코시 USB-C 멀티 허브는 노트북의 USB-C 포트 하나로 다양한 기기를 연결할 수 있게 해주는 필수 액세서리입니다.</p>
                <h4>주요 특징</h4>
                <ul>
                    <li>USB-C 전원 전달 (PD) 지원</li>
                    <li>HDMI 출력으로 외부 모니터 연결</li>
                    <li>USB 3.0 포트 3개</li>
                    <li>SD 카드 리더 내장</li>
                    <li>알루미늄 하우징으로 내구성 향상</li>
                    <li>컴팩트한 디자인</li>
                </ul>
            `,
            spec: {
                'USB-C 입력': '전원 전달 (PD) 지원',
                'HDMI': '4K@30Hz 출력',
                'USB 3.0': '3개 포트',
                'SD 카드': 'SD/SDHC/SDXC 지원',
                '크기': '110mm x 35mm x 12mm',
                '무게': '약 80g',
                '재질': '알루미늄',
                '호환성': 'USB-C 포트 지원 기기'
            },
            reviewList: [
                {
                    id: 1,
                    author: '박준호',
                    rating: 4,
                    date: '2024.01.11',
                    content: '노트북 포트가 부족해서 구매했는데 정말 유용해요! 여러 기기를 한 번에 연결할 수 있어서 편리합니다.',
                    helpful: 234,
                    verified: true
                },
                {
                    id: 2,
                    author: '이수진',
                    rating: 4,
                    date: '2024.01.09',
                    content: 'HDMI로 외부 모니터 연결해서 사용 중이에요. 화질도 좋고 안정적으로 작동합니다.',
                    helpful: 189,
                    verified: true
                },
                {
                    id: 3,
                    author: '최영수',
                    rating: 5,
                    date: '2024.01.07',
                    content: '작고 가벼워서 들고 다니기 좋아요. 여행갈 때 필수템입니다!',
                    helpful: 156,
                    verified: true
                }
            ]
        }
    ],
    // 신상품 목록
    new: [
        {
            id: 9,
            title: '애플 USB-C to 라이트닝 케이블',
            price: 35000,
            salePrice: 25000,
            discount: 29,
            rating: 4.5,
            reviews: 567,
            image: 'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/11/19/B0704790/B0704790_0_600.jpg',
            images: [
                'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MM0A3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=M1QzMm9ybmlkQ3d6ZGgvOEtLT2s2d2tuVHYzMERCZURia3c5SzJFOTlPakdhd3hTd0Z4eVU5dlRoTFZsS1dHQnF1RHVsWWtITU8zLy9oRVFmWitIakE',
                'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MM0A3_AV1?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=RW1FcXNXMW9KTHM3S054MzgxVUI3bFZya2lKWlJmUEwrYndWOTJiVWJWQUYwVmtIbGRkS25RMVpBRlo0bk5DUTV4b3g3VzhaUkNLb0JuMGpTbi9WYVE',
                'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MM0A3_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=OEdCeXlLK1ZyRFM3SWZ0OWdwaTNiMVZya2lKWlJmUEwrYndWOTJiVWJWQUYwVmtIbGRkS25RMVpBRlo0bk5DUTVQdERHWkNuTlgzTEFxS0NELy8rQXc',
                'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MM0A3_AV3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=M2h0K2l0bEx2WjZtSm9MdFJEVnFQRlZya2lKWlJmUEwrYndWOTJiVWJWQUYwVmtIbGRkS25RMVpBRlo0bk5DUVFXZmhoV3VIdkU3bnIrTEsyVkFuWFE',
                'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MM0A3_AV3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=M2h0K2l0bEx2WjZtSm9MdFJEVnFQRlZya2lKWlJmUEwrYndWOTJiVWJWQUYwVmtIbGRkS25RMVpBRlo0bk5DUVFXZmhoV3VIdkU3bnIrTEsyVkFuWFE'
            ],
            badge: 'new',
            badgeText: 'NEW',
            description: `
                <h3>공식 애플 케이블</h3>
                <p>애플 공식 USB-C to 라이트닝 케이블로 안정적인 충전과 데이터 전송을 보장합니다.</p>
                <h4>주요 특징</h4>
                <ul>
                    <li>애플 공식 인증 케이블</li>
                    <li>빠른 충전 지원</li>
                    <li>데이터 동기화 가능</li>
                    <li>내구성 있는 디자인</li>
                </ul>
            `,
            spec: {
                '길이': '1m',
                '연결 단자': 'USB-C, 라이트닝',
                '충전': '고속 충전 지원',
                '데이터 전송': 'USB 2.0 속도',
                '호환성': '라이트닝 포트 지원 기기'
            },
            reviewList: [
                {
                    id: 1,
                    author: '김민수',
                    rating: 5,
                    date: '2024.01.10',
                    content: '공식 케이블이라 안심하고 사용할 수 있어요. 충전 속도도 빠르고 내구성도 좋습니다.',
                    helpful: 198,
                    verified: true
                },
                {
                    id: 2,
                    author: '이지은',
                    rating: 4,
                    date: '2024.01.08',
                    content: '가격이 조금 비싸긴 하지만 품질이 확실히 좋아요.',
                    helpful: 134,
                    verified: true
                }
            ]
        },
        {
            id: 10,
            title: '아이패드 프로 12.9인치 스탠드',
            price: 89000,
            salePrice: 69000,
            discount: 22,
            rating: 4.6,
            reviews: 234,
            image: 'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/08/29/B0685414/B0685414_0_600.jpg',
            images: [
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/08/29/B0685414/B0685414_0_600.jpg',
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/08/29/B0685414/B0685414_1_600.jpg',
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/08/29/B0685414/B0685414_2_600.jpg',
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/08/29/B0685414/B0685414_3_600.jpg',
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/08/29/B0685414/B0685414_4_600.jpg'
            ],
            badge: 'new',
            badgeText: 'NEW',
            description: `
                <h3>완벽한 각도 조절</h3>
                <p>아이패드 프로 12.9인치 전용 스탠드로 다양한 각도에서 편안하게 사용할 수 있습니다.</p>
                <h4>주요 특징</h4>
                <ul>
                    <li>각도 조절 가능 (0~90도)</li>
                    <li>안정적인 지지력</li>
                    <li>알루미늄 소재로 내구성 향상</li>
                    <li>접이식 디자인으로 휴대 편의</li>
                </ul>
            `,
            spec: {
                '호환 모델': '아이패드 프로 12.9인치',
                '각도 조절': '0~90도',
                '소재': '알루미늄',
                '크기': '접었을 때 300mm x 200mm x 50mm',
                '무게': '약 500g',
                '색상': '실버, 스페이스 그레이'
            },
            reviewList: [
                {
                    id: 1,
                    author: '정수진',
                    rating: 5,
                    date: '2024.01.09',
                    content: '아이패드로 작업할 때 정말 편해요! 각도 조절이 자유로워서 좋습니다.',
                    helpful: 167,
                    verified: true
                },
                {
                    id: 2,
                    author: '박영호',
                    rating: 4,
                    date: '2024.01.07',
                    content: '안정적이고 튼튼해요. 다만 가격이 조금 부담스럽긴 합니다.',
                    helpful: 123,
                    verified: true
                }
            ]
        },
        {
            id: 11,
            title: '소니 WH-1000XM5 노이즈 캔슬링 헤드폰',
            price: 499000,
            salePrice: 399000,
            discount: 20,
            rating: 4.9,
            reviews: 1234,
            image: 'https://thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/381962302222648-3d448a7b-71a0-45f1-bf78-ed9d62e441af.png',
            images: [
                'https://thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/122853271783688-4f9f2a9d-00c2-4098-a623-172a40ac4ed9.jpg',
                'https://thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/1055187413617215-032b4899-7f72-4184-912a-30983dd9a6cb.png',
                'https://thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/208748979165825-05b04356-ba49-4e36-b92c-9ff9068056fd.png',
                'https://thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/208749027460986-ef37d765-83c3-426f-8f33-8815a968133d.png',
                'https://thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/433473838451375-bdd03116-bb48-46a8-a928-4e22a1e4d5c6.png'
            ],
            badge: 'sale',
            badgeText: 'SALE',
            description: `
                <h3>세계 최고 수준의 노이즈 캔슬링</h3>
                <p>소니 WH-1000XM5는 업계 최고 수준의 노이즈 캔슬링 기술과 뛰어난 음질을 제공하는 프리미엄 헤드폰입니다.</p>
                <h4>주요 특징</h4>
                <ul>
                    <li>업계 최고 수준의 노이즈 캔슬링</li>
                    <li>LDAC 코덱 지원으로 고음질 무선 오디오</li>
                    <li>최대 30시간 재생 시간</li>
                    <li>빠른 충전: 3분 충전으로 3시간 재생</li>
                    <li>터치 센서로 재생/일시정지 제어</li>
                    <li>주변 소리 듣기 모드</li>
                </ul>
            `,
            spec: {
                '드라이버': '30mm',
                '주파수 응답': '4Hz ~ 40kHz',
                '노이즈 캔슬링': '업계 최고 수준',
                '배터리': '최대 30시간 (ANC 켜짐)',
                '충전': 'USB-C, 빠른 충전 지원',
                '연결': 'Bluetooth 5.2, NFC',
                '코덱': 'LDAC, AAC, SBC',
                '무게': '약 250g'
            },
            reviewList: [
                {
                    id: 1,
                    author: '김태현',
                    rating: 5,
                    date: '2024.01.13',
                    content: '노이즈 캔슬링이 정말 놀라워요! 비행기에서도 완벽하게 작동합니다. 음질도 최고예요.',
                    helpful: 456,
                    verified: true
                },
                {
                    id: 2,
                    author: '이서연',
                    rating: 5,
                    date: '2024.01.11',
                    content: '하루 종일 착용해도 편안해요. 배터리도 오래 가고 음질도 정말 좋습니다. 강력 추천!',
                    helpful: 389,
                    verified: true
                },
                {
                    id: 3,
                    author: '박준영',
                    rating: 5,
                    date: '2024.01.09',
                    content: '가격이 비싸긴 하지만 그만한 가치가 있어요. 노이즈 캔슬링과 음질 모두 완벽합니다.',
                    helpful: 312,
                    verified: true
                },
                {
                    id: 4,
                    author: '최미라',
                    rating: 4,
                    date: '2024.01.07',
                    content: '전반적으로 만족스러워요. 다만 접이식이 안 되어서 휴대하기 조금 불편하긴 해요.',
                    helpful: 234,
                    verified: true
                }
            ]
        },
        {
            id: 12,
            title: '세모키 X SPM PL87W ARA SEMOKEY 텐키리스 유무선 투명',
            price: 199000,
            salePrice: 149000,
            discount: 25,
            rating: 4.7,
            reviews: 456,
            image: 'https://www.etlandmall.co.kr/nas/cdn/attach/product/2026/02/03/S6295412/_0_600.jpg',
            images: [
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2026/01/15/B0707619/B0707619_0_600.jpg',
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2026/02/03/S6295412/_2_600.jpg',
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2026/02/03/S6295412/_3_600.jpg',
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2026/02/03/S6295412/_4_600.jpg',
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2026/02/03/S6295412/_5_600.jpg'
            ],
            badge: 'sale',
            badgeText: '25%',
            description: `
                <h3>타이핑의 즐거움</h3>
                <p>레오폴드 FC900R은 뛰어난 품질과 탁월한 타이핑감을 제공하는 기계식 키보드입니다.</p>
                <h4>주요 특징</h4>
                <ul>
                    <li>체리 MX 스위치 사용</li>
                    <li>PBT 이중사출 키캡으로 내구성 향상</li>
                    <li>풀 배열 레이아웃</li>
                    <li>다양한 스위치 옵션 (청축, 적축, 갈축 등)</li>
                    <li>USB 연결</li>
                </ul>
            `,
            spec: {
                '레이아웃': '풀 배열 (108키)',
                '스위치': '체리 MX (청축/적축/갈축 선택)',
                '키캡': 'PBT 이중사출',
                '연결': 'USB Type-A',
                '크기': '440mm x 140mm x 40mm',
                '무게': '약 1.2kg',
                '색상': '화이트, 다크 그레이 등'
            },
            reviewList: [
                {
                    id: 1,
                    author: '장민호',
                    rating: 5,
                    date: '2024.01.12',
                    content: '타이핑감이 정말 좋아요! 기계식 키보드의 묘미를 제대로 느낄 수 있습니다.',
                    helpful: 278,
                    verified: true
                },
                {
                    id: 2,
                    author: '윤지혜',
                    rating: 5,
                    date: '2024.01.10',
                    content: '코딩할 때 정말 좋아요. 키감이 확실하고 오타가 줄었어요.',
                    helpful: 234,
                    verified: true
                },
                {
                    id: 3,
                    author: '이동욱',
                    rating: 4,
                    date: '2024.01.08',
                    content: '품질이 정말 좋아요. 다만 소음이 조금 있는 게 아쉽네요.',
                    helpful: 189,
                    verified: true
                }
            ]
        },
        {
            id: 18,
            title: '삼성전자 갤럭시탭 A11 플러스 128G 그레이',
            price: 299000,
            salePrice: 249000,
            discount: 17,
            rating: 4.6,
            reviews: 289,
            image: 'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/11/25/S6295103/S6295103_0_600.jpg',
            images: [
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/11/25/S6295103/S6295103_0_600.jpg',
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/11/25/S6295103/S6295103_1_600.jpg',
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/11/25/S6295103/S6295103_2_600.jpg',
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/11/25/S6295103/S6295103_3_600.jpg',
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/11/25/S6295103/S6295103_4_600.jpg'
            ],
            badge: 'new',
            badgeText: 'NEW',
            description: `
                <h3>일상과 업무를 한 번에</h3>
                <p>삼성전자 갤럭시탭 A11 플러스는 넓은 화면과 강력한 성능으로 일상생활과 업무를 효율적으로 처리할 수 있는 태블릿입니다. 128GB 저장공간으로 충분한 용량을 제공하며, 그레이 컬러로 세련된 디자인을 자랑합니다.</p>
                <h4>주요 특징</h4>
                <ul>
                    <li>넓은 화면으로 영상 감상 및 멀티태스킹 최적화</li>
                    <li>128GB 내장 저장공간으로 충분한 용량 제공</li>
                    <li>강력한 프로세서로 부드러운 사용자 경험</li>
                    <li>장시간 사용 가능한 배터리</li>
                    <li>삼성 One UI로 직관적인 사용성</li>
                    <li>멀티 윈도우 기능으로 효율적인 작업 환경</li>
                    <li>그레이 컬러로 세련된 디자인</li>
                </ul>
                <h4>포함 구성품</h4>
                <ul>
                    <li>갤럭시탭 A11 플러스 본체</li>
                    <li>충전 어댑터</li>
                    <li>USB 케이블</li>
                    <li>사용 설명서</li>
                    <li>보증서</li>
                </ul>
            `,
            spec: {
                '모델명': 'SM-X230NZALKOO',
                '화면 크기': '10.4인치',
                '해상도': '2000 x 1200 (WUXGA+)',
                '저장공간': '128GB',
                'RAM': '4GB',
                '프로세서': '옥타코어',
                '운영체제': 'Android',
                '배터리': '7040mAh',
                '카메라': '후면 8MP, 전면 5MP',
                '연결': 'Wi-Fi, Bluetooth',
                '색상': '그레이',
                '크기': '247.3mm x 161.4mm x 7.0mm',
                '무게': '약 476g'
            },
            reviewList: [
                {
                    id: 1,
                    author: '김수진',
                    rating: 5,
                    date: '2024.01.11',
                    content: '화면이 넓어서 영상 보기 정말 좋아요! 128GB 용량도 충분하고, 가격 대비 성능이 만족스럽습니다.',
                    helpful: 198,
                    verified: true
                },
                {
                    id: 2,
                    author: '박영수',
                    rating: 4,
                    date: '2024.01.09',
                    content: '일상 업무용으로 정말 좋아요. 배터리도 오래 가고, 그레이 색상이 세련되네요. 다만 게임용으로는 조금 아쉽긴 해요.',
                    helpful: 156,
                    verified: true
                },
                {
                    id: 3,
                    author: '이민지',
                    rating: 5,
                    date: '2024.01.07',
                    content: '학생용으로 완벽해요! 강의 영상 보기나 문서 작성하기에 최적입니다. 가벼워서 들고 다니기도 편해요.',
                    helpful: 134,
                    verified: true
                }
            ]
        },
        {
            id: 19,
            title: 'ANAC 자동 먼지 비움 청소기 ANA-BEUM25',
            price: 399000,
            salePrice: 299000,
            discount: 25,
            rating: 4.6,
            reviews: 567,
            image: 'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/05/20/S6293280/_0_600.jpg',
            images: [
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/05/20/S6293280/_0_600.jpg',
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/05/20/S6293280/_1_600.jpg',
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/05/20/S6293280/_2_600.jpg',
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/05/20/S6293280/_3_600.jpg',
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/05/20/S6293280/_4_600.jpg'
            ],
            badge: 'new',
            badgeText: 'NEW',
            description: `
                <h3>자동으로 먼지를 비워주는 스마트 청소기</h3>
                <p>ANAC 자동 먼지 비움 청소기 ANA-BEUM25는 청소 후 자동으로 먼지통을 비워주는 혁신적인 로봇 청소기입니다. 더 이상 먼지통을 직접 비울 필요 없이 편리하게 사용할 수 있습니다.</p>
                <h4>주요 특징</h4>
                <ul>
                    <li>자동 먼지 비움 기능으로 청소 후 자동으로 먼지통 비우기</li>
                    <li>강력한 흡입력으로 깊은 청소</li>
                    <li>스마트 매핑 기능으로 효율적인 청소 경로</li>
                    <li>앱 연동으로 원격 제어 및 스케줄 설정</li>
                    <li>자동 충전 기능으로 연속 청소 가능</li>
                    <li>카펫 감지 기능으로 바닥재에 맞춘 청소</li>
                    <li>저소음 설계로 조용한 청소</li>
                </ul>
                <h4>포함 구성품</h4>
                <ul>
                    <li>ANAC 자동 먼지 비움 청소기 본체</li>
                    <li>자동 충전 스테이션</li>
                    <li>먼지 비움 스테이션</li>
                    <li>예비 필터</li>
                    <li>사이드 브러시</li>
                    <li>사용 설명서</li>
                </ul>
            `,
            spec: {
                '모델명': 'ANA-BEUM25',
                '흡입력': '최대 2500Pa',
                '배터리': '최대 120분 연속 청소',
                '먼지통 용량': '0.6L',
                '청소 모드': '자동, 스팟, 가장자리, 스케줄',
                '연결': 'Wi-Fi, 앱 연동',
                '센서': 'LDS 레이저 센서, 충돌 방지 센서',
                '소음': '약 65dB',
                '크기': '350mm x 350mm x 100mm',
                '무게': '약 3.5kg',
                '색상': '화이트, 블랙'
            },
            reviewList: [
                {
                    id: 1,
                    author: '이민지',
                    rating: 5,
                    date: '2024.01.10',
                    content: '자동 먼지 비움 기능이 정말 편해요! 한 달에 한 번만 비우면 되서 정말 편리합니다. 청소력도 강력하고 만족스러워요.',
                    helpful: 234,
                    verified: true
                },
                {
                    id: 2,
                    author: '정태영',
                    rating: 4,
                    date: '2024.01.08',
                    content: '스마트 매핑 기능이 정말 좋아요. 집 구조를 기억해서 효율적으로 청소하네요. 다만 가격이 조금 부담스럽긴 해요.',
                    helpful: 189,
                    verified: true
                },
                {
                    id: 3,
                    author: '김수진',
                    rating: 5,
                    date: '2024.01.06',
                    content: '앱으로 원격 제어할 수 있어서 외출 중에도 청소할 수 있어요. 자동 충전도 잘 되고, 배터리도 오래 가네요.',
                    helpful: 156,
                    verified: true
                },
                {
                    id: 4,
                    author: '박준호',
                    rating: 4,
                    date: '2024.01.04',
                    content: '반려동물 털도 잘 빨아들이네요! 카펫 감지 기능도 잘 작동하고, 소음도 생각보다 조용해요.',
                    helpful: 134,
                    verified: true
                }
            ]
        }
    ],
    // 특가 상품 목록
    sale: [
        {
            id: 13,
            title: '에어팟 프로 2세대',
            price: 399000,
            salePrice: 299000,
            discount: 25,
            rating: 4.7,
            reviews: 2345,
            image: 'https://thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/81d4/f1710ef0f21e8d2fdf39942bdaae12c473182d2da15b0436a973b54a6661.jpg',
            images: [
                'https://thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/2698885847658449-f35a8d2c-4db1-488f-b5f7-d909a0929dcb.jpg',
                'https://thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/rs_quotation_api/3gcrhrrn/162122fda4c04bbabcbd62e1809a115f.jpg',
                'https://thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/rs_quotation_api/zomp0ogt/41b4c2fa069b4f72ba802b50b16594b6.jpg',
                'https://thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/rs_quotation_api/hdwa5k7k/3c3cd94ebc4540ac92961d1b7a5f24fe.jpg',
                'https://thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/rs_quotation_api/ikao4dfc/e483f5a6cc814aa895923a9ff8be6518.jpg'
            ],
            badge: 'sale',
            badgeText: '25%',
            description: `
                <h3>프로급 노이즈 캔슬링</h3>
                <p>에어팟 프로 2세대는 개선된 노이즈 캔슬링과 공간 음향으로 몰입감 있는 오디오 경험을 제공합니다.</p>
                <h4>주요 특징</h4>
                <ul>
                    <li>개선된 적응형 노이즈 캔슬링</li>
                    <li>개인화된 공간 음향</li>
                    <li>최대 6시간 재생 (ANC 켜짐)</li>
                    <li>MagSafe 충전 케이스</li>
                    <li>터치 제어</li>
                </ul>
            `,
            spec: {
                '배터리': '이어폰 6시간 / 케이스 포함 30시간',
                '충전': 'MagSafe, 무선, 라이트닝',
                '노이즈 캔슬링': '적응형 ANC',
                '방수': 'IPX4',
                '연결': 'H2 칩',
                '색상': '화이트'
            },
            reviewList: [
                {
                    id: 1,
                    author: '홍길동',
                    rating: 5,
                    date: '2024.01.14',
                    content: '노이즈 캔슬링이 정말 좋아졌어요! 1세대보다 훨씬 나아졌습니다.',
                    helpful: 567,
                    verified: true
                },
                {
                    id: 2,
                    author: '김영희',
                    rating: 5,
                    date: '2024.01.12',
                    content: '아이폰과 완벽하게 연동되고, 음질도 정말 좋아요. 강력 추천합니다!',
                    helpful: 489,
                    verified: true
                },
                {
                    id: 3,
                    author: '이철수',
                    rating: 4,
                    date: '2024.01.10',
                    content: '전반적으로 만족스러워요. 다만 가격이 조금 부담스럽긴 해요.',
                    helpful: 345,
                    verified: true
                }
            ]
        },
        {
            id: 14,
            title: '삼성 32인치 4K UHD 모니터',
            price: 599000,
            salePrice: 449000,
            discount: 25,
            rating: 4.8,
            reviews: 789,
            image: 'https://www.etlandmall.co.kr/nas/cdn/attach/product/2026/01/19/B0707462/B0707462_0_600.jpg',
            images: [
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2026/01/19/B0707462/B0707462_0_600.jpg',
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2026/01/19/B0707462/B0707462_1_600.jpg',
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2026/01/19/B0707462/B0707462_2_600.jpg',
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2026/01/19/B0707462/B0707462_3_600.jpg',
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2026/01/19/B0707462/B0707462_4_600.jpg'
            ],
            badge: 'sale',
            badgeText: '25%',
            description: `
                <h3>생생한 4K 화질</h3>
                <p>삼성 32인치 4K UHD 모니터는 선명한 화질과 넓은 화면으로 생산성을 극대화합니다.</p>
                <h4>주요 특징</h4>
                <ul>
                    <li>32인치 4K UHD (3840 x 2160) 해상도</li>
                    <li>VA 패널로 뛰어난 명암비</li>
                    <li>HDR10 지원</li>
                    <li>Eye Saver 모드로 눈의 피로 감소</li>
                    <li>다양한 연결 단자</li>
                </ul>
            `,
            spec: {
                '화면 크기': '32인치',
                '해상도': '3840 x 2160 (4K UHD)',
                '패널 타입': 'VA',
                '주사율': '60Hz',
                '응답 속도': '4ms',
                '밝기': '300cd/㎡',
                '명암비': '3000:1',
                '연결 단자': 'HDMI 2.0 x 2, DisplayPort 1.2 x 1',
                'HDR': 'HDR10 지원'
            },
            reviewList: [
                {
                    id: 1,
                    author: '최민수',
                    rating: 5,
                    date: '2024.01.13',
                    content: '4K 화질이 정말 선명해요! 영상 편집할 때 정말 유용합니다.',
                    helpful: 345,
                    verified: true
                },
                {
                    id: 2,
                    author: '박지영',
                    rating: 5,
                    date: '2024.01.11',
                    content: '화면이 넓어서 멀티태스킹하기 완벽해요. 가격 대비 정말 좋은 모니터입니다.',
                    helpful: 278,
                    verified: true
                },
                {
                    id: 3,
                    author: '이준호',
                    rating: 4,
                    date: '2024.01.09',
                    content: '전반적으로 만족스러워요. 다만 게임용으로는 주사율이 조금 아쉽네요.',
                    helpful: 198,
                    verified: true
                }
            ]
        },
        {
            id: 15,
            title: '하만카돈 오니스 스튜디오 4 스피커',
            price: 299000,
            salePrice: 229000,
            discount: 23,
            rating: 4.6,
            reviews: 345,
            image: 'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/11/10/B0639096/B0639096_0_600.jpg',
            images: [
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/11/10/B0639096/B0639096_0_600.jpg',
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/11/10/B0639096/B0639096_1_600.jpg',
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/11/10/B0639096/B0639096_2_600.jpg',
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/11/10/B0639096/B0639096_3_600.jpg',
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/11/10/B0639096/B0639096_4_600.jpg'
            ],
            badge: 'sale',
            badgeText: '23%',
            description: `
                <h3>스튜디오급 사운드</h3>
                <p>하만카돈 오니스 스튜디오 4는 컴팩트한 크기에도 불구하고 강력하고 선명한 사운드를 제공합니다.</p>
                <h4>주요 특징</h4>
                <ul>
                    <li>하만카돈 특유의 뛰어난 음질</li>
                    <li>블루투스 5.0 지원</li>
                    <li>AUX 입력 지원</li>
                    <li>컴팩트한 디자인</li>
                    <li>다양한 색상 옵션</li>
                </ul>
            `,
            spec: {
                '출력': '20W',
                '연결': 'Bluetooth 5.0, AUX',
                '주파수 응답': '60Hz ~ 20kHz',
                '크기': '180mm x 100mm x 100mm',
                '무게': '약 1.2kg',
                '색상': '블랙, 화이트, 레드 등',
                '전원': 'AC 어댑터'
            },
            reviewList: [
                {
                    id: 1,
                    author: '김태수',
                    rating: 5,
                    date: '2024.01.12',
                    content: '음질이 정말 좋아요! 하만카돈의 품질을 느낄 수 있습니다.',
                    helpful: 234,
                    verified: true
                },
                {
                    id: 2,
                    author: '이미라',
                    rating: 4,
                    date: '2024.01.10',
                    content: '작은 크기에 비해 사운드가 강력해요. 다만 베이스가 조금 약한 것 같아요.',
                    helpful: 189,
                    verified: true
                }
            ]
        },
        {
            id: 16,
            title: '보스 퀴엇컴포트 울트라 헤드폰',
            price: 699000,
            salePrice: 549000,
            discount: 21,
            rating: 4.8,
            reviews: 1234,
            image: 'https://www.etlandmall.co.kr/nas/cdn/attach/product/2023/12/28/B0351146/B0351146_0_600.jpg',
            images: [
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2023/12/28/B0351146/B0351146_0_600.jpg',
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2023/12/28/B0351146/B0351146_1_600.jpg',
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2023/12/28/B0351146/B0351146_2_600.jpg',
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2023/12/28/B0351146/B0351146_3_600.jpg',
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2023/12/28/B0351146/B0351146_4_600.jpg'
            ],
            badge: 'sale',
            badgeText: '21%',
            description: `
                <h3>최고 수준의 노이즈 캔슬링</h3>
                <p>보스 퀴엇컴포트 울트라는 업계 최고 수준의 노이즈 캔슬링과 뛰어난 착용감을 제공하는 프리미엄 헤드폰입니다.</p>
                <h4>주요 특징</h4>
                <ul>
                    <li>업계 최고 수준의 노이즈 캔슬링</li>
                    <li>최대 24시간 재생 시간</li>
                    <li>빠른 충전: 15분 충전으로 2.5시간 재생</li>
                    <li>편안한 이어컵 디자인</li>
                    <li>터치 제어</li>
                    <li>Google Assistant, Amazon Alexa 지원</li>
                </ul>
            `,
            spec: {
                '배터리': '최대 24시간 (ANC 켜짐)',
                '충전': 'USB-C, 빠른 충전 지원',
                '노이즈 캔슬링': '업계 최고 수준',
                '연결': 'Bluetooth 5.0',
                '코덱': 'AAC, SBC',
                '무게': '약 250g',
                '색상': '블랙, 화이트'
            },
            reviewList: [
                {
                    id: 1,
                    author: '정수진',
                    rating: 5,
                    date: '2024.01.13',
                    content: '노이즈 캔슬링이 정말 놀라워요! 비행기에서도 완벽하게 작동합니다.',
                    helpful: 456,
                    verified: true
                },
                {
                    id: 2,
                    author: '박영호',
                    rating: 5,
                    date: '2024.01.11',
                    content: '착용감이 정말 편안해요. 하루 종일 착용해도 불편함이 없습니다.',
                    helpful: 389,
                    verified: true
                },
                {
                    id: 3,
                    author: '이미영',
                    rating: 5,
                    date: '2024.01.09',
                    content: '음질과 노이즈 캔슬링 모두 완벽해요. 가격이 비싸긴 하지만 그만한 가치가 있습니다.',
                    helpful: 312,
                    verified: true
                },
                {
                    id: 4,
                    author: '최태현',
                    rating: 4,
                    date: '2024.01.07',
                    content: '전반적으로 만족스러워요. 다만 접이식이 안 되어서 휴대하기 조금 불편하긴 해요.',
                    helpful: 234,
                    verified: true
                }
            ]
        }
    ]
};

// ============================================
// 상품 데이터 조회 함수
// ============================================

// 모든 상품을 가져오는 함수
function getAllProducts() {
    return [...productsData.best, ...productsData.new, ...productsData.sale];
}

// 상품 ID로 특정 상품을 찾는 함수
function findProductById(productId) {
    return getAllProducts().find(p => p.id === productId);
}

// 전역에서 접근 가능하도록 window 객체에 노출
window.productsData = productsData;
window.findProductById = findProductById;
window.getAllProducts = getAllProducts;
