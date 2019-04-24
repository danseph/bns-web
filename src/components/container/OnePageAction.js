import React, { Component } from 'react';
import OnePage from '../presentational/OnePage';
import $ from 'jquery';
import { throttle } from 'lodash';

class OnePageAction extends Component {
    state = {
        loader: true,
        activeNav: 1,
        activeMainTitle: false,
        activePlatFormTitle: false,
        lanShow: false,
        typeFaq: 0,
        defaultLang: window.localStorage['trans'] || "ko",
        popupClose: false,
        isChecked: true,
    };

    nav = [
        {
            num: 1,
            text: 'header-nav-about'
        },
        {
            num: 2,
            text: 'header-nav-prediction'
        },
        {
            num: 3,
            text: 'header-nav-coin'
        },
        {
            num: 4,
            text: 'header-nav-roadmap'
        },
        {
            num: 5,
            text: 'header-nav-team'
        },
        {
            num: 6,
            text: 'header-nav-media'
        },
        {
            num: 7,
            text: 'header-nav-faq'
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
        {
            num: 4,
            text: '日本語',
            className: 'jp',
            lanSet: 'ja'
        },
    ];

    platformContent = [
        {
            className1: 'content1',
            className2: 'img-box-wrap',
            className2_1: 'img-box',
            className3: 'txt-box',
            image: '3piks.png',
            image2: '3piks_bw.png',
            text1: 'ai-prediction-3piks',
            text2: 'ai-prediction-3piks-text',
        },
        {
            className1: 'content2',
            className2: 'img-box-wrap',
            className2_1: 'img-box',
            className3: 'txt-box',
            image: 'bitbip.png',
            image2: 'bitbip_bw.png',
            text1: 'ai-prediction-aibitbip',
            text2: 'ai-prediction-aibitbip-text',
        },
        {
            className1: 'content3',
            className2: 'img-box-wrap',
            className2_1: 'img-box',
            className3: 'txt-box',
            image: 'trade.png',
            image2: 'trade_bw.png',
            text1: 'ai-prediction-aitradingbot',
            text2: 'ai-prediction-aitradingbot-text',
        },
        {
            className1: 'content4',
            className2: 'img-box-wrap',
            className2_1: 'img-box',
            className3: 'txt-box',
            image: 'platform.png',
            image2: 'platform_bw.png',
            text1: 'ai-prediction-aiplatform',
            text2: 'ai-prediction-aiplatform-text',
        },
        {
            className1: 'content5',
            className2: 'img-box-wrap',
            className2_1: 'img-box',
            className3: 'txt-box',
            image: 'solution.png',
            image2: 'solution_bw.png',
            text1: 'ai-prediction-exchange',
            text2: 'ai-prediction-exchange-text',
        },
    ];

    techContent = [
        {
            num: 1,
            className1: 'img-box',
            className2: 'txt-box',
            image: 'ai01.png',
            title: 'ai-technique-title',
            text: 'ai-technique-text',
        },
        {
            num: 2,
            className1: 'img-box',
            className2: 'txt-box',
            image: 'ai02.png',
            title: 'ai-technique-title2',
            text: 'ai-technique-text2',
        }
    ];

    aipx = [
        {
            className: 'one',
            text: 'aipx-text1',
        },
        {
            className: 'two',
            text: 'aipx-text2',
        },
        {
            className: 'three',
            text: 'aipx-text3',
        },
        {
            className: 'four',
            text: 'aipx-text4',
        },
        {
            className: 'five',
            text: 'aipx-text5',
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
    ];

    whitePaper = [
        {
            link: 'AIPE_Whitepaper_Kr.pdf',
            text: 'whitepaper-ko',
        },
        {
            link: 'AIPE_Whitepaper_En.pdf',
            text: 'whitepaper-en'
        },
        {
            link: 'AIPE_Whitepaper_Cn.pdf',
            text: 'whitepaper-zh'
        },
        {
            link: 'AIPE_Whitepaper_Jp.pdf',
            text: 'whitepaper-ja'
        }
    ];

    team1 = [
        {
            name: 'Dan',
            position: 'CEO',
            className: 'img-box',
            className2: 'txt-box',
            image: '01_Dan_CEO.jpg',
        },
        {
            name: 'Leo',
            position: 'China HQ Business Director',
            className: 'img-box',
            className2: 'txt-box',
            image: '02_Leo_China_HQ_Business_Director.jpg'
        },
        {
            name: 'Charlyne',
            position: 'HR & Admin',
            className: 'img-box',
            className2: 'txt-box',
            image: '03_Charlyne_HR_&_Admin.jpg'
        },
        {
            name: 'Priscelia',
            position: 'Designer',
            className: 'img-box',
            className2: 'txt-box',
            image: '04_Prisceilia_Designer.jpg',
        },
        {
            name: 'Daniel',
            position: 'Sales & Marketing',
            className: 'img-box',
            className2: 'txt-box',
            image: '05_Daniel_Sales_&_Marketing.jpg'
        },
        {
            name: 'Ronald',
            position: 'Sales & Marketing',
            className: 'img-box',
            className2: 'txt-box',
            image: '06_Ronald_Sales_&_Marketing.jpg'
        },
        {
            name: 'Davin',
            position: 'Sales & Marketing',
            className: 'img-box',
            className2: 'txt-box',
            image: '07_Davin_Sales_&_Marketing.jpg',
        },
        {
            name: 'Calvin',
            position: 'Developer',
            className: 'img-box',
            className2: 'txt-box',
            image: '08_Calvin_Developer.jpg'
        },
        {
            name: 'Shirley',
            position: 'Operation',
            className: 'img-box',
            className2: 'txt-box',
            image: '09_Shirley_Operation.jpg'
        },
        {
            name: 'Yo',
            position: 'Management Director',
            className: 'img-box',
            className2: 'txt-box',
            image: '10_Yo_Management_Director.jpg'
        },
        {
            name: 'Leo',
            position: 'Planning Manager',
            className: 'img-box',
            className2: 'txt-box',
            image: '12_Leo_Planning_Manager.jpg'
        },
        {
            name: 'Dylan',
            position: 'Strategy Manager',
            className: 'img-box',
            className2: 'txt-box',
            image: '13_Dylan_Strategy_Manager.jpg'
        },
        {
            name: 'Jenny',
            position: 'HR Manager',
            className: 'img-box',
            className2: 'txt-box',
            image: '14_Jenney_HR_Manager.jpg'
        },
        {
            name: 'Daniel',
            position: 'Project Manager',
            className: 'img-box',
            className2: 'txt-box',
            image: '15_Daniel_Project_Manager.jpg'
        },
        {
            name: 'Sam',
            position: 'Advisor',
            className: 'img-box',
            className2: 'txt-box',
            image: '16_Sam_Advisor.jpg'
        },
        {
            name: 'Moon',
            position: 'Project Manager',
            className: 'img-box',
            className2: 'txt-box',
            image: '17_Moon_Project_Manager.jpg'
        },
        {
            name: 'Jay',
            position: 'Project Leader',
            className: 'img-box',
            className2: 'txt-box',
            image: '18_Jay_Project_Leader.jpg'
        },
        {
            name: 'Joe',
            position: 'Project Leader',
            className: 'img-box',
            className2: 'txt-box',
            image: '19_Joe_Project_Leader.jpg'
        },
        {
            name: 'Kate',
            position: 'Finance',
            className: 'img-box',
            className2: 'txt-box',
            image: '20_Kate_Finance.jpg'
        },
        {
            name: 'Nick',
            position: 'AI Researcher',
            className: 'img-box',
            className2: 'txt-box',
            image: '21_Nick_AI_Researcher.jpg'
        },
        {
            name: 'Elaine',
            position: 'AI Researcher',
            className: 'img-box',
            className2: 'txt-box',
            image: '22_Elaine_AI_Researcher.jpg'
        },
        {
            name: 'Luna',
            position: 'AI Researcher',
            className: 'img-box',
            className2: 'txt-box',
            image: '23_Luna_AI_Researcher.jpg'
        },
        {
            name: 'Hue',
            position: 'AI Researcher',
            className: 'img-box',
            className2: 'txt-box',
            image: '24_Hue_AI_Researcher.jpg'
        },
        {
            name: 'Ryan',
            position: 'AI Researcher',
            className: 'img-box',
            className2: 'txt-box',
            image: '25_Ryan_AI_Researcher.jpg'
        },
        {
            name: 'Scott',
            position: 'AI Researcher',
            className: 'img-box',
            className2: 'txt-box',
            image: '26_Scott_AI_Researcher.jpg'
        },
        {
            name: 'Liam',
            position: 'Developer',
            className: 'img-box',
            className2: 'txt-box',
            image: '27_Liam_Developer.jpg'
        },
        {
            name: 'Jack',
            position: 'Developer',
            className: 'img-box',
            className2: 'txt-box',
            image: '28_Jack_Developer.jpg'
        },
        {
            name: 'Shawn',
            position: 'Developer',
            className: 'img-box',
            className2: 'txt-box',
            image: '29_Shawn_Developer.jpg'
        },
        {
            name: 'Tim',
            position: 'Developer',
            className: 'img-box',
            className2: 'txt-box',
            image: '30_Tim_Developer.jpg'
        },
        {
            name: 'Smith',
            position: 'Developer',
            className: 'img-box',
            className2: 'txt-box',
            image: '32_Smith_Developer.jpg'
        },
        {
            name: 'Louis',
            position: 'Developer',
            className: 'img-box',
            className2: 'txt-box',
            image: '33_Louis_Developer.jpg'
        },
        {
            name: 'Bread',
            position: 'Developer',
            className: 'img-box',
            className2: 'txt-box',
            image: '36_Bread_Developer.jpg'
        },
        {
            name: 'Add',
            position: 'Developer',
            className: 'img-box',
            className2: 'txt-box',
            image: '37_Add_Developer.jpg'
        },
        {
            name: 'Suzi',
            position: 'Lead Designer',
            className: 'img-box',
            className2: 'txt-box',
            image: '44_Suzi_Lead_Designer.jpg'
        },
        {
            name: 'Bonniel',
            position: 'Sound Designer',
            className: 'img-box',
            className2: 'txt-box',
            image: '45_Bonniel_Sound_Designer.jpg'
        },
        {
            name: 'Emma',
            position: 'Graphic Designer',
            className: 'img-box',
            className2: 'txt-box',
            image: '46_Emma_Graphic_Designer.jpg'
        },
        {
            name: 'Soo',
            position: 'Graphic Designer',
            className: 'img-box',
            className2: 'txt-box',
            image: '47_Soo_Graphic_Designer.jpg'
        },
        {
            name: 'Jerry',
            position: 'UI Designer',
            className: 'img-box',
            className2: 'txt-box',
            image: '47_Jerry_UI_Designer.jpg'
        },
        {
            name: 'Liseo',
            position: 'UI UX Designer',
            className: 'img-box',
            className2: 'txt-box',
            image: '49_Liseo_UI_UX_Designer.jpg'
        },
        {
            name: 'Mimi',
            position: 'Marketing',
            className: 'img-box',
            className2: 'txt-box',
            image: '52_Mimi_Marketing.jpg'
        },
        {
            name: 'Jane',
            position: 'Interpreter',
            className: 'img-box',
            className2: 'txt-box',
            image: '54_Jane_Interpreter.jpg'
        },
        {
            name: 'Joey',
            position: 'HR',
            className: 'img-box',
            className2: 'txt-box',
            image: '55_Joey_HR.jpg'
        },
    ];

    partners = [
        {
            image: 'kobea.png',
        },
        {
            image: 'cardano.png',
        },
        {
            image: 'emurgo.png',
        },
        {
            image: 'infinito.png',
        },
        {
            image: 'alphapoint.png',
        },
    ];

    media1 = [
        {
            title: '손위준 코스믹BC 대표 "AI 암호화폐 예측, 트레이딩 생태계 구축한다" ',
            date: '2019.03.29',
            writer: 'CosmicBC',
            url: 'http://naver.me/xNOM5NNN',
            classNameWrap: 'img-box-wrap',
            className: 'img-box',
            className2: 'txt-box',
            className2_1: 'left',
            className2_2: 'right',
            className2_2_1: 'date',
            className2_2_2: 'name',
        },
        {
            title: 'How to use UZMEX',
            date: '2019.03.27',
            writer: 'CosmicBC',
            url: 'https://youtu.be/Y0NS99Dzczc',
            classNameWrap: 'img-box-wrap',
            className: 'img-box',
            className2: 'txt-box',
            className2_1: 'left',
            className2_2: 'right',
            className2_2_1: 'date',
            className2_2_2: 'name',
        },
        {
            title: '3PIKS Service Introduction video',
            date: '2019.03.25',
            writer: 'CosmicBC',
            url: 'https://youtu.be/DfeAUlF7UIg',
            classNameWrap: 'img-box-wrap',
            className: 'img-box',
            className2: 'txt-box',
            className2_1: 'left',
            className2_2: 'right',
            className2_2_1: 'date',
            className2_2_2: 'name',
        },
        {
            title: '코스믹BC 비트코인 가격 예측 서비스 선봬…예측 맞추면 코인 보상',
            date: '2019.01.24',
            writer: '글로벌이코노믹',
            url: 'http://www.g-enews.com/view.php?ud=20190124153943598efadd7fc46_1',
            classNameWrap: 'img-box-wrap',
            className: 'img-box',
            className2: 'txt-box',
            className2_1: 'left',
            className2_2: 'right',
            className2_2_1: 'date',
            className2_2_2: 'name',
        },
        {
            title: 'Launch of the Final Round | Prediction Herobots',
            date: '2019.01.24',
            writer: 'CosmicBC',
            url: 'https://www.facebook.com/watch/?v=345753002702811',
            classNameWrap: 'img-box-wrap',
            className: 'img-box',
            className2: 'txt-box',
            className2_1: 'left',
            className2_2: 'right',
            className2_2_1: 'date',
            className2_2_2: 'name',
        },
        {
            title: '비트코인 가격 예측하는 AI로봇? 코스믹, 국제공모전 개최',
            date: '2018.11.29',
            writer: 'Decenter',
            url: 'https://decenter.sedaily.com/NewsView/1S7DM5N53E',
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
                    activePlatFormTitle: true,
                })
            )
        }, 800);

        window.addEventListener('scroll', this._handlePlatFormContentsActive);
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
                platformContent={this.platformContent}
                techContent={this.techContent}
                aipx={this.aipx}
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
                partners={this.partners}
                media1={this.media1}
                faq={this.faq}
                title={this.title}
                effectTitle={this.effectTitle}
                effectContent={this.effectContent}
                effectContentM={this.effectContentM}
                platFormContent1={this.platFormContent1}
                platFormContent2={this.platFormContent2}
                platFormContent3={this.platFormContent3}
                platFormContent4={this.platFormContent4}
                platFormContent5={this.platFormContent5}
                techniqueTitle={this.techniqueTitle}
                techniqueContent1={this.techniqueContent1}
                techniqueContent2={this.techniqueContent2}
                aipxTitle={this.aipxTitle}
                aipxContent={this.aipxContent}
                aipxText={this.aipxText}
                coinAllocation={this.coinAllocation}
                paperTitle={this.paperTitle}
                roadmapTitle={this.roadmapTitle}
                roadmapContent={this.roadmapContent}
                teamTitle={this.teamTitle}
                teamList={this.teamList}
                partnerTitle1={this.partnerTitle1}
                partnerContent1={this.partnerContent1}
                partnerTitle2={this.partnerTitle2}
                partnerContent2={this.partnerContent2}
                mediaTitle={this.mediaTitle}
                mediaList={this.mediaList}
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
                    activePlatFormTitle: true,
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
        if(this.state.activePlatFormTitle) {
            this.setState({
                activePlatFormTitle: false,
            })
        }
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
            '日本語': 'ja',
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
                    activePlatFormTitle: true,
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
        if(this.state.activePlatFormTitle) {
            this.setState({
                activePlatFormTitle: false,
            })
        }
    };

    _handleSectionMove = (num) => {
        this.setState({
            activeNav: num,
            activeMnav: false
        });
        let offset = $("#section" + num);
        let offsetTop = offset.offset();
        if(offset[0].id === "section4") {
            if(window.innerWidth <= 1200) {
                $('html, body').scrollTop(offsetTop.top - 130)
            } else {
                $('html, body').scrollTop(offsetTop.top - 240)
            }
        } else if(offset[0].id === "section2" || offset[0].id === "section5" || offset[0].id === "section6" || offset[0].id === "section7" && window.innerWidth <= 1200) {
            $('html, body').scrollTop(offsetTop.top)
        } else if(offset[0].id === "section3") {
            if(window.innerWidth <= 1200) {
                $('html, body').scrollTop(offsetTop.top - 100)
            } else {
                $('html, body').scrollTop(offsetTop.top - 240)
            }
        } else {
            $('html, body').scrollTop(offsetTop.top - 80)
        }
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

    platFormContent1 = React.createRef();
    platFormContent2 = React.createRef();
    platFormContent3 = React.createRef();
    platFormContent4 = React.createRef();
    platFormContent5 = React.createRef();
    _handlePlatFormContentsActive = throttle(() => {
        const elements = [
            this.platFormContent1.current,
            this.platFormContent2.current,
            this.platFormContent3.current,
            this.platFormContent4.current,
            this.platFormContent5.current
        ];
        for(var i=0; i<elements.length; i++)  {
            if(!this.state.loader) {
                const rect = elements[i].getBoundingClientRect();
                const { top, bottom, height } = rect;
                if (top + 200 < window.innerHeight && bottom >= 0 && top > -1 * height && !elements[i].classList.contains('active')) {
                    elements[i].classList = `${elements[i].classList} active`;
                }
            }
        }
    }, 200);

    effectTitle = React.createRef();
    roadmapTitle = React.createRef();
    roadmapContent = React.createRef();
    _handleEffectTitleActive = throttle(() => {
        const elements = [
            this.effectTitle.current,
            this.roadmapTitle.current,
            this.roadmapContent.current,
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

    effectContent = React.createRef();
    effectContentM = React.createRef();
    aipxTitle = React.createRef();
    aipxContent = React.createRef();
    aipxText = React.createRef();
    coinAllocation = React.createRef();
    techniqueTitle = React.createRef();
    techniqueContent1 = React.createRef();
    techniqueContent2 = React.createRef();
    teamTitle = React.createRef();
    teamList = React.createRef();
    partnerTitle1 = React.createRef();
    partnerContent1 = React.createRef();
    partnerTitle2 = React.createRef();
    partnerContent2 = React.createRef();
    mediaTitle = React.createRef();
    mediaList = React.createRef();

    _handleEffectContentsActive = throttle(() => {
        const elements = [
            this.effectContent.current,
            this.effectContentM.current,
            this.aipxTitle.current,
            this.aipxContent.current,
            this.aipxText.current,
            this.coinAllocation.current,
            this.techniqueTitle.current,
            this.techniqueContent1.current,
            this.techniqueContent2.current,
            this.teamTitle.current,
            this.teamList.current,
            this.partnerTitle1.current,
            this.partnerContent1.current,
            this.partnerTitle2.current,
            this.partnerContent2.current,
            this.mediaTitle.current,
            this.mediaList.current,
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