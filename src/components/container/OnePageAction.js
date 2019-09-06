import React, { Component } from 'react';
import OnePage from '../presentational/OnePage';
import $ from 'jquery';
import { throttle } from 'lodash';

class OnePageAction extends Component {
    state = {
        loader: true,
        activeNav: 1,
        activeMainTitle: false,
        // activePlatFormTitle: false,
        lanShow: false,
        typeFaq: 0,
        defaultLang: window.localStorage['trans'] || "ko",
        popupClose: false,
        isChecked: true,
    };

    nav = [
        // {
        //     num: 1,
        //     text: 'header-nav-about'
        // },
        {
            num: 2,
            text: 'header-nav-bns'
        },
        // {
        //     num: 3,
        //     text: 'header-nav-coin'
        // },
        {
            num: 3,
            text: 'header-nav-roadmap'
        },
        {
            num: 4,
            text: 'header-nav-economy'
        },
        {
            num: 5,
            text: 'header-nav-team'
        },
        {
            num: 6,
            text: 'header-nav-partner'
        },
    ];

    lan = [
        {
            num: 1,
            text: '한국어',
            className: 'kr',
            lanSet: 'ko'
        },
        {
            num: 2,
            text: 'ENGLISH',
            className: 'en',
            lanSet: 'en'
        },
        {
            num: 3,
            text: '中文',
            className: 'cn',
            lanSet: 'zh'
        },
    ];

    coinStructure = [
        {
            className1: 'th',
            className2: 'td',
            text1: 'coin-structure-text-1',
            text2: 'coin-structure-text-1-1',
        },
        {
            className1: 'th',
            className2: 'td',
            text1: 'coin-structure-text-2',
            text2: 'coin-structure-text-2-1',
        },
        {
            className1: 'th',
            className2: 'td',
            text1: 'coin-structure-text-3',
            text2: 'coin-structure-text-3-1',
        },
        {
            className1: 'th',
            className2: 'td',
            text1: 'coin-structure-text-4',
            text2: 'coin-structure-text-4-1',
        },
        {
            className1: 'th',
            className2: 'td',
            text1: 'coin-structure-text-5',
            text2: 'coin-structure-text-5-1',
        },
        {
            className1: 'th',
            className2: 'td',
            text1: 'coin-structure-text-6',
            text2: 'coin-structure-text-6-1',
        },
        {
            className1: 'th',
            className2: 'td',
            text1: 'coin-structure-text-7',
            text2: 'coin-structure-text-7-1',
        },
        {
            className1: 'th',
            className2: 'td',
            text1: 'coin-structure-text-8',
            text2: 'coin-structure-text-8-1',
        },
    ];

    whitePaper = [
        {
            link: 'BNS whitepaper_ver.1.0_kr_compressed.pdf',
            text: 'whitepaper-ko',
        },
        {
            link: 'BNS whitepaper_ver.1.0_en_compressed.pdf',
            text: 'whitepaper-en'
        },
        {
            link: 'BNS whitepaper_ver.1.0_ch_compressed.pdf',
            text: 'whitepaper-zh'
        }
    ];

    teamMember = [
        {
            name: '서 정 민',
            position1: '- 방송통신 ISC 위원',
            position2: '- 사단법인 한국홈쇼핑상품공급자협회(KHPSA) 상임이사 / 상근부회장',
            position3: '- SM Alliance 대표이사 / Co-Founder',
            position4: '- 스포츠서울 사외이사',
            position5: '- Now&Next pty ltd. 대표이사 (호주법인)',
            position6: '- Phile International 대표',
            className: 'img-box',
            className2: 'txt-box',
            image: 'team-01-Seo.png',
        },
        {
            name: '조 용 대',
            position1: '- OBS 기술국장',
            position2: '- SBS 기술연구부 차장',
            position3: '- KBS 기술본부 송출기술국',
            position4: '',
            position5: '',
            position6: '',
            className: 'img-box',
            className2: 'txt-box',
            image: 'team-02-Jo.png'
        },
        {
            name: '전 주 환',
            position1: '- 현대그룹 / 현대백화점',
            position2: '- 현대 홈쇼핑 팀장',
            position3: '- 사단법인 한국홈쇼핑상품공급자협회(KHPSA) 사업부장',
            position4: '',
            position5: '',
            position6: '',
            className: 'img-box',
            className2: 'txt-box',
            image: 'team-03-Jeon.png'
        },
    ]
    team1 = [
        {
            name: '서 정 민',
            position1: '- 방송통신 ISC 위원',
            position2: '- 사단법인 한국홈쇼핑상품공급자협회(KHPSA) 상임이사 / 상근부회장',
            position3: '- SM Alliance 대표이사 / Co-Founder',
            position4: '- 스포츠서울 사외이사',
            position5: '- Now&Next pty ltd. 대표이사 (호주법인)',
            position6: '- Phile International 대표',
            className: 'img-box',
            className2: 'txt-box',
            image: 'team-01-Seo.png',
        },
        {
            name: '조 용 대',
            position1: '- OBS 기술국장',
            position2: '- SBS 기술연구부 차장',
            position3: '- KBS 기술본부 송출기술국',
            position4: '',
            position5: '',
            position6: '',
            className: 'img-box',
            className2: 'txt-box',
            image: 'team-02-Jo.png'
        },
        {
            name: '전 주 환',
            position1: '- 현대그룹 / 현대백화점',
            position2: '- 현대 홈쇼핑 팀장',
            position3: '- 사단법인 한국홈쇼핑상품공급자협회(KHPSA) 사업부장',
            position4: '',
            position5: '',
            position6: '',
            className: 'img-box',
            className2: 'txt-box',
            image: 'team-03-Jeon.png'
        },

    ];

    team2 = [
        {
            name: '서 정 민',
            position1: '- 방송통신 ISC 위원',
            position2: '- 사단법인 한국홈쇼핑상품공급자협회(KHPSA) 상임이사 / 상근부회장',
            position3: '- SM Alliance 대표이사 / Co-Founder',
            position4: '- 스포츠서울 사외이사',
            position5: '- Now&Next pty ltd. 대표이사 (호주법인)',
            position6: '- Phile International 대표',
            className: 'img-box',
            className2: 'txt-box',
            image: 'team-01-Seo.png',
        },
        {
            name: '조 용 대',
            position1: '- OBS 기술국장',
            position2: '- SBS 기술연구부 차장',
            position3: '- KBS 기술본부 송출기술국',
            position4: '',
            position5: '',
            position6: '',
            className: 'img-box',
            className2: 'txt-box',
            image: 'team-02-Jo.png'
        },
        {
            name: '전 주 환',
            position1: '- 현대그룹 / 현대백화점',
            position2: '- 현대 홈쇼핑 팀장',
            position3: '- 사단법인 한국홈쇼핑상품공급자협회(KHPSA) 사업부장',
            position4: '',
            position5: '',
            position6: '',
            className: 'img-box',
            className2: 'txt-box',
            image: 'team-03-Jeon.png'
        },

    ];

    team3 = [
        {
            name: '서 정 민',
            position1: '- 방송통신 ISC 위원',
            position2: '- 사단법인 한국홈쇼핑상품공급자협회(KHPSA) 상임이사 / 상근부회장',
            position3: '- SM Alliance 대표이사 / Co-Founder',
            position4: '- 스포츠서울 사외이사',
            position5: '- Now&Next pty ltd. 대표이사 (호주법인)',
            position6: '- Phile International 대표',
            className: 'img-box',
            className2: 'txt-box',
            image: 'team-01-Seo.png',
        },
        {
            name: '조 용 대',
            position1: '- OBS 기술국장',
            position2: '- SBS 기술연구부 차장',
            position3: '- KBS 기술본부 송출기술국',
            position4: '',
            position5: '',
            position6: '',
            className: 'img-box',
            className2: 'txt-box',
            image: 'team-02-Jo.png'
        },
        {
            name: '전 주 환',
            position1: '- 현대그룹 / 현대백화점',
            position2: '- 현대 홈쇼핑 팀장',
            position3: '- 사단법인 한국홈쇼핑상품공급자협회(KHPSA) 사업부장',
            position4: '',
            position5: '',
            position6: '',
            className: 'img-box',
            className2: 'txt-box',
            image: 'team-03-Jeon.png'
        },

    ];

    team4 = [
        {
            name: '서 정 민',
            position1: '- 방송통신 ISC 위원',
            position2: '- 사단법인 한국홈쇼핑상품공급자협회(KHPSA) 상임이사 / 상근부회장',
            position3: '- SM Alliance 대표이사 / Co-Founder',
            position4: '- 스포츠서울 사외이사',
            position5: '- Now&Next pty ltd. 대표이사 (호주법인)',
            position6: '- Phile International 대표',
            className: 'img-box',
            className2: 'txt-box',
            image: 'team-01-Seo.png',
        },
        {
            name: '조 용 대',
            position1: '- OBS 기술국장',
            position2: '- SBS 기술연구부 차장',
            position3: '- KBS 기술본부 송출기술국',
            position4: '',
            position5: '',
            position6: '',
            className: 'img-box',
            className2: 'txt-box',
            image: 'team-02-Jo.png'
        },
        {
            name: '전 주 환',
            position1: '- 현대그룹 / 현대백화점',
            position2: '- 현대 홈쇼핑 팀장',
            position3: '- 사단법인 한국홈쇼핑상품공급자협회(KHPSA) 사업부장',
            position4: '',
            position5: '',
            position6: '',
            className: 'img-box',
            className2: 'txt-box',
            image: 'team-03-Jeon.png'
        },

    ];

    advisor1 = [
        {
            name: '지 창 우',
            position1: '- Glosfer (글로스퍼) 암호화폐 신사업부 부장',
            position2: '- NHN 한국 사이버 결제 BD',
            position3: '- SK Telecom',
            position4: '',
            position5: '',
            position6: '',
            className: 'img-box',
            className2: 'txt-box',
            image: 'team-01-Seo.png',
        },
        {
            name: '박 준 용',
            position1: '- 레젤홈쇼핑코리아 이사',
            position2: '- 클릭스코리아 영업 마케팅 이사',
            position3: '- 화이트네트워크 본부장',
            position4: '- 홍천웰빙 팀장',
            position5: '- CJ오쇼핑 과장',
            position6: '',
            className: 'img-box',
            className2: 'txt-box',
            image: 'advisor-02-Park.png',
        },
        {
            name: '이 성 호',
            position1: '- OBS 기술국장',
            position2: '- SBS 기술연구부 차장',
            position3: '- KBS 기술본부 송출기술국',
            position4: '',
            position5: '',
            position6: '',
            className: 'img-box',
            className2: 'txt-box',
            image: 'advisor-03-Lee.png',
        },
    ];

    advisor2 = [
        {
            name: '지 창 우',
            position1: '- Glosfer (글로스퍼) 암호화폐 신사업부 부장',
            position2: '- NHN 한국 사이버 결제 BD',
            position3: '- SK Telecom',
            position4: '',
            position5: '',
            position6: '',
            className: 'img-box',
            className2: 'txt-box',
            image: 'team-01-Seo.png',
        },
        {
            name: '박 준 용',
            position1: '- 레젤홈쇼핑코리아 이사',
            position2: '- 클릭스코리아 영업 마케팅 이사',
            position3: '- 화이트네트워크 본부장',
            position4: '- 홍천웰빙 팀장',
            position5: '- CJ오쇼핑 과장',
            position6: '',
            className: 'img-box',
            className2: 'txt-box',
            image: 'advisor-02-Park.png',
        },
        {
            name: '이 성 호',
            position1: '- OBS 기술국장',
            position2: '- SBS 기술연구부 차장',
            position3: '- KBS 기술본부 송출기술국',
            position4: '',
            position5: '',
            position6: '',
            className: 'img-box',
            className2: 'txt-box',
            image: 'advisor-03-Lee.png',
        },
    ];

    advisor3 = [
        {
            name: '지 창 우',
            position1: '- Glosfer (글로스퍼) 암호화폐 신사업부 부장',
            position2: '- NHN 한국 사이버 결제 BD',
            position3: '- SK Telecom',
            position4: '',
            position5: '',
            position6: '',
            className: 'img-box',
            className2: 'txt-box',
            image: 'team-01-Seo.png',
        },
        {
            name: '박 준 용',
            position1: '- 레젤홈쇼핑코리아 이사',
            position2: '- 클릭스코리아 영업 마케팅 이사',
            position3: '- 화이트네트워크 본부장',
            position4: '- 홍천웰빙 팀장',
            position5: '- CJ오쇼핑 과장',
            position6: '',
            className: 'img-box',
            className2: 'txt-box',
            image: 'advisor-02-Park.png',
        },
        {
            name: '이 성 호',
            position1: '- OBS 기술국장',
            position2: '- SBS 기술연구부 차장',
            position3: '- KBS 기술본부 송출기술국',
            position4: '',
            position5: '',
            position6: '',
            className: 'img-box',
            className2: 'txt-box',
            image: 'advisor-03-Lee.png',
        },
    ];

    advisor4 = [
        {
            name: '지 창 우',
            position1: '- Glosfer (글로스퍼) 암호화폐 신사업부 부장',
            position2: '- NHN 한국 사이버 결제 BD',
            position3: '- SK Telecom',
            position4: '',
            position5: '',
            position6: '',
            className: 'img-box',
            className2: 'txt-box',
            image: 'team-01-Seo.png',
        },
        {
            name: '박 준 용',
            position1: '- 레젤홈쇼핑코리아 이사',
            position2: '- 클릭스코리아 영업 마케팅 이사',
            position3: '- 화이트네트워크 본부장',
            position4: '- 홍천웰빙 팀장',
            position5: '- CJ오쇼핑 과장',
            position6: '',
            className: 'img-box',
            className2: 'txt-box',
            image: 'advisor-02-Park.png',
        },
        {
            name: '이 성 호',
            position1: '- OBS 기술국장',
            position2: '- SBS 기술연구부 차장',
            position3: '- KBS 기술본부 송출기술국',
            position4: '',
            position5: '',
            position6: '',
            className: 'img-box',
            className2: 'txt-box',
            image: 'advisor-03-Lee.png',
        },
    ];

    // partners = [
    //     {
    //         image: 'kobea.png',
    //     },
    //     {
    //         image: 'cardano.png',
    //     },
    //     {
    //         image: 'emurgo.png',
    //     },
    //     {
    //         image: 'infinito.png',
    //     },
    //     {
    //         image: 'alphapoint.png',
    //     },
    // ];

    press1 = [
        {
            title: '유튜버-T커머스-V커머스 손잡았다… 상품-콘텐츠-플랫폼 ‘하나로’',
            date: '2019.07.26',
            // writer: 'CosmicBC',
            url: 'team-temp.png',
            classNameWrap: 'img-box-wrap',
            className: 'img-box',
            className2: 'txt-box',
            className2_1: 'left',
            className2_2: 'right',
            className2_2_1: 'date',
            className2_2_2: 'name',
        },
        {
            title: '한국T커머스협회·홈쇼핑고고·한국엠씨엔협회, T&V커머스 확대 업무협약',
            date: '2019.07.25',
            // writer: 'CosmicBC',
            url: 'team-temp.png',
            classNameWrap: 'img-box-wrap',
            className: 'img-box',
            className2: 'txt-box',
            className2_1: 'left',
            className2_2: 'right',
            className2_2_1: 'date',
            className2_2_2: 'name',
        },
        {
            title: '한국엠씨엔협회, T커머스협회·홈쇼핑고고와 MOU..."新 커머스 시장 활성화"',
            date: '2019.03.29',
            // writer: 'CosmicBC',
            url: 'team-temp.png',
            classNameWrap: 'img-box-wrap',
            className: 'img-box',
            className2: 'txt-box',
            className2_1: 'left',
            className2_2: 'right',
            className2_2_1: 'date',
            className2_2_2: 'name',
        },
        {
            title: '서정민 부회장, ‘홈쇼핑고고’ 설립',
            date: '2019.03.27',
            // writer: 'CosmicBC',
            url: 'team-temp.png',
            classNameWrap: 'img-box-wrap',
            className: 'img-box',
            className2: 'txt-box',
            className2_1: 'left',
            className2_2: 'right',
            className2_2_1: 'date',
            className2_2_2: 'name',
        },
        {
            title: '글랜스TV, 홈쇼핑고고와 MOU 체결',
            date: '2019.03.25',
            // writer: 'CosmicBC',
            url: 'team-temp.png',
            classNameWrap: 'img-box-wrap',
            className: 'img-box',
            className2: 'txt-box',
            className2_1: 'left',
            className2_2: 'right',
            className2_2_1: 'date',
            className2_2_2: 'name',
        },
        {
            title: "글랜스TV, 홈쇼핑고고와 '미디어 커머스 콘텐츠 제작' 맞손",
            date: '2019.01.24',
            // writer: '글로벌이코노믹',
            url: 'team-temp.png',
            classNameWrap: 'img-box-wrap',
            className: 'img-box',
            className2: 'txt-box',
            className2_1: 'left',
            className2_2: 'right',
            className2_2_1: 'date',
            className2_2_2: 'name',
        },
    ];

    faq = [
        {
            num: 1,
            className: 'desc',
            text1: 'faq-question-1',
            text2: 'faq-answer-1'
        },
        {
            num: 2,
            className: 'desc',
            text1: 'faq-question-2',
            text2: 'faq-answer-2'
        },
        {
            num: 3,
            className: 'desc',
            text1: 'faq-question-3',
            text2: 'faq-answer-3'
        },
        {
            num: 4,
            className: 'desc',
            text1: 'faq-question-4',
            text2: 'faq-answer-4'
        },
        {
            num: 5,
            className: 'desc',
            text1: 'faq-question-5',
            text2: 'faq-answer-5'
        }
    ];
    componentDidMount() {
        this._getCookieMobile();

        setTimeout(() => {
            return (
                this.setState({
                    loader: false,
                    activeMainTitle: true,
                    // activePlatFormTitle: true,
                })
            )
        }, 800);

        // window.addEventListener('scroll', this._handlePlatFormContentsActive);
        window.addEventListener('scroll', this._handleEffectTitleActive);
        window.addEventListener('scroll', this._handleEffectContentsActive);

        // window.addEventListener('touchstart', this.touchStart); // mobile touch 가로 움직임 방지
        // window.addEventListener('touchmove', this.preventTouch, {passive: false}); // mobile touch 가로 움직임 방지 end
    }

    // // mobile touch 가로 움직임 방지
    // componentWillUnmount(){
    //     window.removeEventListener('touchstart', this.touchStart);
    //     window.removeEventListener('touchmove', this.preventTouch, {passive: false});
    // }
    //
    // touchStart(e){
    //     this.firstClientX = e.touches[0].clientX;
    //     this.firstClientY = e.touches[0].clientY;
    // }
    //
    // preventTouch(e){
    //     const minValue = 5;
    //
    //     this.clientX = e.touches[0].clientX - this.firstClientX;
    //     this.clientY = e.touches[0].clientY - this.firstClientY;
    //
    //     if(Math.abs(this.clientX) > minValue){
    //         e.preventDefault();
    //         e.returnValue = false;
    //         return false;
    //     }
    // }
    // // mobile touch 가로 움직임 방지 end

    render() {
        return (
            <OnePage
                {...this.state}
                nav={this.nav}
                lan={this.lan}
                techContent={this.techContent}
                coinStructure={this.coinStructure}
                whitePaper={this.whitePaper}
                team1={this.team1}
                team2={this.team2}
                team3={this.team3}
                team4={this.team4}
                team5={this.team5}
                team6={this.team6}
                team7={this.team7}
                team8={this.team8}
                team9={this.team9}
                team10={this.team10}
                team11={this.team11}
                team12={this.team12}
                team13={this.team13}
                advisor1={this.advisor1}
                advisor2={this.advisor2}
                advisor3={this.advisor3}
                advisor4={this.advisor4}
                advisor5={this.advisor5}
                advisor6={this.advisor6}
                advisor7={this.advisor7}
                advisor8={this.advisor8}
                advisor9={this.advisor9}
                advisor10={this.advisor10}
                advisor11={this.advisor11}
                advisor12={this.advisor12}
                advisor13={this.advisor13}
                // partners={this.partners}
                press1={this.press1}
                faq={this.faq}
                title={this.title}
                ecosystemTitle={this.ecosystemTitle}
                ecosystemContent={this.ecosystemContent}
                ecosystemContentM={this.ecosystemContentM}
                aboutTitle={this.aboutTitle}
                aboutContent={this.aboutContent} 
                aboutText={this.aboutText}
                paperTitle={this.paperTitle}
                paperContent={this.paperContent}
                utilTitle={this.utilTitle}
                utilPayment={this.utilPayment}
                utilReward={this.utilReward}
                utilFund={this.utilFund}
                visionTitle={this.visionTitle}
                visionContent={this.visionContent}
                economyTitle={this.economyTitle}
                economyContent={this.economyContent}
                roadmapTitle={this.roadmapTitle}
                roadmapContent={this.roadmapContent}
                roadmapContentM={this.roadmapContentM}
                teamTitle={this.teamTitle}
                teamList={this.teamList}
                // teamListM={this.teamListM}
                // teamList2={this.teamList2}
                partnerTitle1={this.partnerTitle1}
                partnerContent1={this.partnerContent1}
                partnerContent1M={this.partnerContent1M}
                partnerTitle2={this.partnerTitle2}
                partnerContent2={this.partnerContent2}
                pressTitle={this.pressTitle}
                pressList={this.pressList}
                handleRefresh={this._handleRefresh}
                handleSectionMove={this._handleSectionMove}
                handleLanBtn={this._handleLanBtn}
                handleActiveFaq={this._handleActiveFaq}
                handleLanShow={this._handleLanShow}
                handleLanHide={this._handleLanHide}
                handleLanChoice={this._handleLanChoice}
                handleWhitePaperMove={this._handleWhitePaperMove}
                handleMnvaBtn={this._handleMnvaBtn}
                handlePopupClose={this._handlePopupClose}
                toggleChange={this._toggleChange}
            />
        )
    }

    _toggleChange = () => {
        this.setState({
            isChecked: !this.state.isChecked,
        });
    };

    _setCookieMobile = ( name, value, expiredays ) => {
        var todayDate = new Date();
        todayDate.setDate( todayDate.getDate() + expiredays );
        document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"
    };

    _getCookieMobile = () => {
        var cookiedata = document.cookie;
        if ( cookiedata.indexOf("todayCookie=done") >= 0 ){
            this.setState({
                popupClose: true
            })
        }
        else {
            this.setState({
                popupClose: false
            })
        }
    };

    _handlePopupClose = () => {
        this.setState({
            popupClose: true
        })
        if(!this.state.isChecked) {
            this._setCookieMobile( "todayCookie", "done" , 1);
        }
    };

    _handleRefresh = () => {
        this.setState({
            loader: true,
        });
        window.scrollTo(0, 0);
        setTimeout(() => {
            return (
                this.setState({
                    loader: false,
                    activeNav: 1,
                    activeMainTitle: true,
                    // activePlatFormTitle: true,
                    lanShow: false,
                    typeFaq: 0,
                })
            )
        }, 800);
        if(this.state.activeMainTitle) {
            this.setState({
                activeMainTitle: false,
            })
        }
        // if(this.state.activePlatFormTitle) {
        //     this.setState({
        //         activePlatFormTitle: false,
        //     })
        // }
    };

    _handleLanShow = () => {
        if(!this.state.lanShow) {
            this.setState({
                lanShow: true
            })
        } else {
            this.setState({
                lanShow: false
            })
        }
    };

    _handleLanHide = () => {
        this.setState({
            lanShow: false
        })
    };

    _handleLanChoice = (e) => {
        const language = {
            '한국어': 'ko',
            'ENGLISH': 'en',
            '中文': 'zh',
        };
        this.setState({
            defaultLang: language[e.target.innerHTML],
        });
        window.localStorage['trans'] = language[e.target.innerHTML];
        this.setState({
            loader: true,
            activeMnav: false,
        });
        window.scrollTo(0, 0);
        setTimeout(() => {
            return (
                this.setState({
                    loader: false,
                    activeNav: 1,
                    activeMainTitle: true,
                    // activePlatFormTitle: true,
                    lanShow: false,
                    typeFaq: 0,
                })
            )
        }, 800);

        if(this.state.activeMainTitle) {
            this.setState({
                activeMainTitle: false,
            })
        }
        // if(this.state.activePlatFormTitle) {
        //     this.setState({
        //         activePlatFormTitle: false,
        //     })
        // }
    };

    _handleSectionMove = (num) => {
        this.setState({
            activeNav: num,
            activeMnav: false
        });
        let offset = $("#section" + num);
        let offsetTop = offset.offset();
        // if(offset[0].id === "section4") {
        //     if(window.innerWidth <= 1200) {
        //         $('html, body').scrollTop(offsetTop.top - 130)
        //     } else {
        //         $('html, body').scrollTop(offsetTop.top - 240)
        //     }
        // } 
        if(offset[0].id === "section2" || offset[0].id === "section3" || offset[0].id === "section4" || offset[0].id === "section5" || offset[0].id === "section6" || offset[0].id === "section7" && window.innerWidth <= 1200) {
            $('html, body').scrollTop(offsetTop.top)
        } 
        // else if(offset[0].id === "section3") {
        //     if(window.innerWidth <= 1200) {
        //         $('html, body').scrollTop(offsetTop.top - 100)
        //     } else {
        //         $('html, body').scrollTop(offsetTop.top - 240)
        //     }
        // } else {
        //     $('html, body').scrollTop(offsetTop.top - 80)
        // }
    };

    _handleWhitePaperMove = (num) => {
        let offset = $("#section" + num);
        let offsetTop = offset.offset();
        $('html, body').scrollTop(offsetTop.top);
        this.setState({
            lanShow: false,
            activeMnav: false
        })
    };

    // platFormContent1 = React.createRef();
    // platFormContent2 = React.createRef();
    // platFormContent3 = React.createRef();
    // platFormContent4 = React.createRef();
    // platFormContent5 = React.createRef();
    // platFormContent6 = React.createRef();
    // _handlePlatFormContentsActive = throttle(() => {
    //     const elements = [
    //         this.platFormContent1.current,
    //         this.platFormContent2.current,
    //         this.platFormContent3.current,
    //         this.platFormContent4.current,
    //         this.platFormContent5.current,
    //         this.platFormContent6.current
    //     ];
    //     for(var i=0; i<elements.length; i++)  {
    //         if(!this.state.loader) {
    //             const rect = elements[i].getBoundingClientRect();
    //             const { top, bottom, height } = rect;
    //             if (top + 200 < window.innerHeight && bottom >= 0 && top > -1 * height && !elements[i].classList.contains('active')) {
    //                 elements[i].classList = `${elements[i].classList} active`;
    //             }
    //         }
    //     }
    // }, 200);

    ecosystemTitle = React.createRef();
    roadmapTitle = React.createRef();
    roadmapContent = React.createRef();
    roadmapContentM = React.createRef();
    _handleEffectTitleActive = throttle(() => {
        const elements = [
            this.ecosystemTitle.current,
            this.roadmapTitle.current,
            this.roadmapContent.current,
            this.roadmapContentM.current,
        ];
        for(var i=0; i<elements.length; i++)  {
            if(!this.state.loader) {
                const rect = elements[i].getBoundingClientRect();
                const { top, bottom, height } = rect;
                if (top - 150 < window.innerHeight && bottom >= 0 && top > -1 * height && !elements[i].classList.contains('active')) {
                    elements[i].classList = `${elements[i].classList} active`;
                }
            }
        }
    }, 200);
    aboutTitle = React.createRef();
    aboutContent =  React.createRef();
    aboutText = React.createRef();
    paperTitle = React.createRef();
    paperContent =  React.createRef();
    utilTitle = React.createRef();
    utilPayment =  React.createRef();
    utilReward =  React.createRef();
    utilFund =  React.createRef();
    visionTitle = React.createRef();
    visionContent =  React.createRef();
    ecosystemContent = React.createRef();
    ecosystemContentM = React.createRef();
    economyTitle = React.createRef();
    economyContent = React.createRef();
    teamTitle = React.createRef();
    teamList = React.createRef();
    // teamListM = React.createRef();
    // teamList2 = React.createRef();
    partnerTitle1 = React.createRef();
    partnerContent1 = React.createRef();
    partnerContent1M = React.createRef();
    partnerTitle2 = React.createRef();
    partnerContent2 = React.createRef();
    pressTitle = React.createRef();
    pressList = React.createRef();

    _handleEffectContentsActive = throttle(() => {
        const elements = [
            this.aboutTitle.current,
            this.aboutContent.current,
            this.aboutText.current,
            this.paperTitle.current,
            this.paperContent.current,
            this.utilTitle.current,
            this.utilPayment.current,
            this.utilReward.current,
            this.utilFund.current,
            this.visionTitle.current,
            this.visionContent.current,
            this.ecosystemContent.current,
            this.ecosystemContentM.current,
            this.economyTitle.current,
            this.economyContent.current,
            this.teamTitle.current,
            this.teamList.current,
            // this.teamListM.current,
            // this.teamList2.current,
            this.partnerTitle1.current,
            this.partnerContent1.current,
            this.partnerContent1M.current,
            this.partnerTitle2.current,
            this.partnerContent2.current,
            this.pressTitle.current,
            this.pressList.current,
        ];
        for(var i=0; i<elements.length; i++)  {
            if(!this.state.loader) {
                const rect = elements[i].getBoundingClientRect();
                const { top, bottom, height } = rect;
                if (top < window.innerHeight && bottom >= 0 && top > -1 * height && !elements[i].classList.contains('active')) {
                    elements[i].classList = `${elements[i].classList} active`;
                }
            }
        }
    }, 200);

    _handleActiveFaq = (type) => {
        if(this.state.typeFaq === type) {
            this.setState({
                typeFaq: 0,
            })
        } else {
            this.setState({
                typeFaq: type,
            })
        }
    };

    _handleLanBtn = () => {
        if(!this.state.activeLanBtn) {
            this.setState({
                activeLanBtn: true
            });
        } else {
            this.setState({
                activeLanBtn: false
            });
        }
    };

    _handleMnvaBtn = () => {
        if(!this.state.activeMnav) {
            this.setState({
                activeMnav: true
            });
        } else {
            this.setState({
                activeMnav: false
            });
        }
    };
}

export default OnePageAction;