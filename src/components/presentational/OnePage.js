import React from 'react';
import Slider from 'react-slick';
import './styles.scss';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ko from 'react-intl/locale-data/ko';
import ja from 'react-intl/locale-data/ja';
import zh from 'react-intl/locale-data/zh';
import locale from '../../locale';
import { FormattedMessage } from 'react-intl';

addLocaleData([...en, ...ko, ...ja, ...zh]);

const OnePage = (props) => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
    };
    return (
        <>
            {!props.loader ?
                <IntlProvider
                    locale={props.defaultLang}
                    messages={locale[props.defaultLang]}
                >
                    <>
                        {props.loader &&
                        <div className="loader-wrap">
                            <img src={require("../../images/Dual Ring-1s-200px.gif")} className="loader"/>
                        </div>
                        }
                        {props.lanShow &&
                        <div className="lan-list-none-wrap" onClick={props.handleLanShow}/>
                        }
                        <div className="header-wrap">
                            <header className="header">
                                <h1 className="header-logo" onClick={props.handleRefresh}>
                                    <a href="javascript:void(0)">
                                        <img src={require("../../images/logo.png")} alt="로고"/>
                                    </a>
                                </h1>
                                {/*메뉴 클릭하면 ((header-nav, menu-btn, header-btn)) 여기에 on 붙여주세요 */}
                                <nav className="header-nav" onClick={props.handleLanHide}>
                                    <a href="javascript:void(0)" className="menu-btn"/>
                                    {props.nav.map((item, i) => {
                                        return (
                                            <a href="javascript:void(0)"
                                               className={props.activeNav === item.num ? "active" : ""}
                                               onClick={() => props.handleSectionMove(item.num)}
                                               key={i}>
                                                {item.text}
                                            </a>
                                        )
                                    })}
                                    {/*<a href="javascript:void(0)">AI Prediction</a>*/}
                                    {/*<a href="javascript:void(0)">AIPX Coin</a>*/}
                                    {/*<a href="javascript:void(0)">Roadmap</a>*/}
                                    {/*<a href="javascript:void(0)">Media</a>*/}
                                    {/*<a href="javascript:void(0)">Team</a>*/}
                                    {/*<a href="javascript:void(0)">FAQ</a>*/}
                                </nav>
                                <div className="header-btn">
                                    <a href="javascript:void(0)" onClick={() => props.handleWhitePaperMove(20)}>Whitepaper</a>
                                    <a href="javascript:void(0)" className={`lang ${props.lanShow ? "active" : ""}`}
                                       onClick={props.handleLanShow}>Language</a>
                                    <ul className={`header-btn-lang ${props.lanShow ? "active" : ""}`}>
                                        {props.lan.map((item, i) => {
                                            return (
                                                <li key={i}>
                                                    <a href="javascript:void(0)" className={`${item.className} ${item.lanSet === props.defaultLang ? "active": ""}`} onClick={props.handleLanChoice}>{item.text}</a>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                <div className="lan-hide-wrap" onClick={props.handleLanHide}/>
                            </header>
                        </div>

                        {/* CONTAINER */}
                        <div className="container">

                            {/* MAIN */}
                            <div className="main-wrap" id="section1">
                                <section className="main">
                                    <div className="main-img">
                                        <img src={require("../../images/main01.png")}/>
                                    </div>
                                    <div className="main-txt">
                                        <div className="main-txt-title">
                                            <strong>
                                                The Future Leader of<br/>
                                                AI Prediction Platform
                                            </strong>
                                        </div>
                                        <div className="main-txt-desc">
                                            <p>
                                                AI와 블록체인의 콜라보레이션<br/>
                                                리워드 플랫폼과 암호화폐 가격변동 알림 서비스를 통해 거래소 Traffic과 거래 유동성 확보를 통합적으로 제공하는 암호화폐
                                                Ecosystem
                                            </p>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            {/* MAIN */}

                            {/* PLATFORM */}
                            <section className="platform" id="section2">
                                <div className={`platform-title ${props.activePlatFormTitle ? "active" : ""}`} ref={props.platFormTitle}>
                                    <h2>AI Prediction Platform</h2>
                                </div>
                                <div className="platform-content">
                                    <ul>
                                        <li className={`content1 ${props.activePlatFormContent1 ? "active" : ""}`} ref={props.platFormContent1}>
                                            <div className="img-box-wrap">
                                                <div className="img-box">
                                                    <img src={require("../../images/3piks.png")}/>
                                                </div>
                                                <div className="img-box">
                                                    <img src={require("../../images/3piks_bw.png")}/>
                                                </div>
                                            </div>
                                            <div className="txt-box">
                                                <h4>3PIKS</h4>
                                                <p>
                                                    AI와 블록체인기술을 접목한 독창적인 리워드 플랫폼
                                                </p>
                                            </div>
                                        </li>
                                        <li className={`content2 ${props.activePlatFormContent2 ? "active" : ""}`} ref={props.platFormContent2}>
                                            <div className="img-box-wrap">
                                                <div className="img-box">
                                                    <img src={require("../../images/bitbip.png")}/>
                                                </div>
                                                <div className="img-box">
                                                    <img src={require("../../images/bitbip_bw.png")}/>
                                                </div>
                                            </div>
                                            <div className="txt-box">
                                                <h4>AIBITBIP</h4>
                                                <p>
                                                    AI 기반 암호화폐 가격변동 예측신호 서비스
                                                </p>
                                            </div>
                                        </li>
                                        <li className={`content3 ${props.activePlatFormContent3 ? "active" : ""}`} ref={props.platFormContent3}>
                                            <div className="img-box-wrap">
                                                <div className="img-box">
                                                    <img src={require("../../images/trade.png")}/>
                                                </div>
                                                <div className="img-box">
                                                    <img src={require("../../images/trade_bw.png")}/>
                                                </div>
                                            </div>
                                            <div className="txt-box">
                                                <h4>AI Auto-Trading Bot</h4>
                                                <p>
                                                    AI Prediction Signal을 바탕으로 한 Auto-Trading Bot
                                                </p>
                                            </div>
                                        </li>
                                        <li className={`content4 ${props.activePlatFormContent4 ? "active" : ""}`} ref={props.platFormContent4}>
                                            <div className="img-box-wrap">
                                                <div className="img-box">
                                                    <img src={require("../../images/platform.png")}/>
                                                </div>
                                                <div className="img-box">
                                                    <img src={require("../../images/platform_bw.png")}/>
                                                </div>
                                            </div>
                                            <div className="txt-box">
                                                <h4>AI Prediction Platform</h4>
                                                <p>
                                                    AI 연구-개발 환경 개선과 검증된 데이터확보를 해결할 수 있는 AI Prediction Platform
                                                </p>
                                            </div>
                                        </li>
                                        <li className={`content5 ${props.activePlatFormContent5 ? "active" : ""}`} ref={props.platFormContent5}>
                                            <div className="img-box-wrap">
                                                <div className="img-box">
                                                    <img src={require("../../images/solution.png")}/>
                                                </div>
                                                <div className="img-box">
                                                    <img src={require("../../images/solution_bw.png")}/>
                                                </div>
                                            </div>
                                            <div className="txt-box">
                                                <h4>Exchange Solution</h4>
                                                <p>
                                                    마진선물, 마진옵션 거래를 지원하는 차세대 거래소 솔루션
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </section>
                            {/* PLATFORM */}

                            {/* PLATFORM, SOLUTION */}
                            <div className="effect-wrap" id="section3">
                                <div className="effect">
                                    <div className="effect-title">
                                        <h2>AIPE Ecosystem</h2>
                                    </div>
                                    <div className="effect-img-wrap web">
                                        <div className="effect-img">
                                            <img src={require("../../images/web_bg_contents.png")}/>
                                        </div>
                                        <div className="effect-img bot">
                                            <img src={require("../../images/web_bg_effect.png")}/>
                                        </div>
                                    </div>
                                    <div className="effect-img-wrap mobile">
                                        <div className="effect-img">
                                            <img src={require("../../images/mobile_bg_contents.png")}/>
                                        </div>
                                        <div className="effect-img bot">
                                            <img src={require("../../images/mobile_bg_effect.png")}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* PLATFORM, SOLUTION */}

                            {/* TECHNIQUE, SOLUTION */}
                            <div className="tech-wrap">
                                <section className="tech">
                                    <div className={`tech-title ${props.activeTechniqueTitle ? "active" : ""}`} ref={props.techniqueTitle}>
                                        <h2>AI Technique</h2>
                                    </div>
                                    <div className="tech-content">
                                        <ul>
                                            <li>
                                                <div className="img-box">
                                                    <img src={require("../../images/ai01.png")}/>
                                                </div>
                                                <div className="txt-box">
                                                    <strong>
                                                        Gradient Boosting Decision Trees
                                                    </strong>
                                                    <p>
                                                        기저 학습기의 오분류에 대해 큰 가중치를 부여하고, 순차적으로 학습기를 훈련시킵니다.<br/>
                                                        이 훈련 과정은 예측 결과와 실제 분류가 일치하거나 반복 횟수가 설정한 한계치에 다다를 때까지 계속됩니다.
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="img-box">
                                                    <img src={require("../../images/ai02.png")}/>
                                                </div>
                                                <div className="txt-box">
                                                    <strong>
                                                        Long Short-Term Memory (LSTM)
                                                    </strong>
                                                    <p>
                                                        LSTM은 기존 RNN의 그래디언트 소실/발산 문제(장기기억 소실문제)를 해결하기 위해 개발되었습니다.<br/>
                                                        LSTM은 RNN의 단층 셀과는 달리 셀 당 3개의 게이트를 차용함으로써 문제를 해결합니다..
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </section>
                            </div>
                            {/* TECHNIQUE */}

                            {/* AIPX */}
                            <section className="aipx">
                                <div className={`aipx-title ${props.activeAipxTitle ? "active" : ""}`} ref={props.aipxTitle}>
                                    <h2>AIPX</h2>
                                </div>
                                <div className="aipx-content">
                                    <div className="aipx-content-img">
                                        이미지?????????????????????????
                                    </div>
                                    <div className="aipx-content-txt">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                            nostrud exercitation.
                                        </p>
                                    </div>
                                </div>
                                <div className="aipx-desc">
                                    <div className="aipx-desc-structure">
                                        <h3>
                                            Coin Structure
                                        </h3>
                                        <div className="aipx-desc-structure-list">
                                            <ul>
                                                <li>
                                                    <strong className="th">Coin Name</strong>
                                                    <span className="td">AIPE Coin</span>
                                                </li>
                                                <li>
                                                    <strong className="th">Coin Symbol</strong>
                                                    <span className="td">AIPE</span>
                                                </li>
                                                <li>
                                                    <strong className="th">Type</strong>
                                                    <span className="td">ERC-20</span>
                                                </li>
                                                <li>
                                                    <strong className="th">Total Volume</strong>
                                                    <span className="td">1,200,000,000 AIPE</span>
                                                </li>
                                                <li>
                                                    <strong className="th">Soft Cap</strong>
                                                    <span className="td">?</span>
                                                </li>
                                                <li>
                                                    <strong className="th">Hard Cap</strong>
                                                    <span className="td">480,000,000  AIPE</span>
                                                </li>
                                                <li>
                                                    <strong className="th">Price</strong>
                                                    <span className="td">0.01 USD</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="aipx-desc-graph">
                                        <h3>
                                            Coin Allocation
                                        </h3>
                                        <div className="aipx-desc-graph-img">
                                            <img src={require("../../images/allocation.png")}/>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* AIPX */}

                            {/* WHITEPAPER */}
                            <div className="paper-wrap" id="section20">
                                <section className="paper">
                                    <div className={`paper-title ${props.activePaperTitle ? "active" : ""}`} ref={props.paperTitle}>
                                        <h2>Whitepaper</h2>
                                    </div>
                                    <div className="paper-link">
                                        <a href="javascript:void(0)">한국어</a>
                                        <a href="javascript:void(0)">English</a>
                                        <a href="javascript:void(0)">中文</a>
                                        <a href="javascript:void(0)">日本語</a>
                                    </div>
                                </section>
                            </div>
                            {/* WHITEPAPER */}

                            {/* ROADMAP */}
                            <div className="roadmap-wrap">
                                <section className="roadmap">
                                    <div className="roadmap-title" id="section4">
                                        <h2>Roadmap</h2>
                                    </div>
                                    <div className="roadmap-img">
                                        <img src={require("../../images/roadmap2.png")}/>
                                    </div>
                                </section>
                            </div>
                            {/* ROADMAP */}

                            {/* TEAM */}
                            <section className="team" id="section5">
                                <div className={`team-title ${props.activeTeamTitle ? "active" : ""}`} ref={props.teamTitle}>
                                    <h2>Team</h2>
                                </div>
                                <div className={`team-desc ${props.activeTeamList ? "active" : ""}`} ref={props.teamList}>
                                    <div className="team-desc-list">
                                        <Slider {...settings} classNames="test">
                                            <ul>
                                                {props.team1.map((item, i) => {
                                                    return (
                                                        <li key={i}>
                                                            <div className={item.className}>
                                                                <img src={require(`../../images/${item.image}`)} />
                                                            </div>
                                                            <div className={item.className2}>
                                                                <strong>{item.name}</strong>
                                                                <em>{item.position}</em>
                                                            </div>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                            <ul>
                                                {props.team1.map((item, i) => {
                                                    return (
                                                        <li key={i}>
                                                            <div className={item.className}>
                                                                <img src={require(`../../images/${item.image}`)} />
                                                            </div>
                                                            <div className={item.className2}>
                                                                <strong>{item.name}</strong>
                                                                <em>{item.position}</em>
                                                            </div>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </Slider>
                                    </div>
                                    <div className="team-desc-paging">
                                        {/* 페이징은 여기 */}
                                    </div>
                                </div>
                            </section>
                            {/* TEAM */}

                            {/* MEDIA */}
                            <section className="media" id="section6">
                                <div className={`media-title ${props.activeMediaTitle ? "active" : ""}`} ref={props.mediaTitle}>
                                    <h2>Media</h2>
                                </div>
                                <div className="media-list">
                                    <div className="contents">
                                        <ul>
                                            <li>
                                                <div className="img-box">
                                                    <img src={require("../../images/ico_kakao.png")}/>
                                                </div>
                                                <div className="txt-box">
                                                    <div className="left">
                                                        <strong>
                                                            adsafgdgg
                                                        </strong>
                                                    </div>
                                                    <div className="right">
                                                        <span className="date">2019.03.22</span>
                                                        <span className="name">글쓴이</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="img-box">
                                                    <img src={require("../../images/ico_kakao.png")}/>
                                                </div>
                                                <div className="txt-box">
                                                    <div className="left">
                                                        <strong>
                                                            adsafgdgg
                                                        </strong>
                                                    </div>
                                                    <div className="right">
                                                        <span className="date">2019.03.22</span>
                                                        <span className="name">글쓴이</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="img-box">
                                                    <img src={require("../../images/ico_kakao.png")}/>
                                                </div>
                                                <div className="txt-box">
                                                    <div className="left">
                                                        <strong>
                                                            Lerem ipsum seigmsei diafmelwe siegmlfkdmfawew gisemflseifsefsd
                                                        </strong>
                                                    </div>
                                                    <div className="right">
                                                        <span className="date">2019.03.22</span>
                                                        <span className="name">글쓴이</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="img-box">
                                                    <img src={require("../../images/ico_kakao.png")}/>
                                                </div>
                                                <div className="txt-box">
                                                    <div className="left">
                                                        <strong>
                                                            Lerem ipsum seigmsei diafmelwe siegmlfkdmfawew gisemflseifsefsd
                                                        </strong>
                                                    </div>
                                                    <div className="right">
                                                        <span className="date">2019.03.22</span>
                                                        <span className="name">글쓴이</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="media-list-paging">
                                        {/* 페이징은 여기 */}
                                    </div>
                                </div>
                            </section>
                            {/* MEDIA */}

                            {/* FAQ */}
                            <section className="faq" id="section7">
                                <div className="faq-title">
                                    <h2>FAQ</h2>
                                </div>
                                <div className="faq-list">
                                    <ul>
                                        <li onClick={() => props.handleActiveFaq(1)}>
                                            <a href="javascript:void(0)" className={props.typeFaq === 1 ? "active" : ""}>AIPE에 대해 더 알 수 있는 방법이 있나요?</a>
                                            <div className={`desc ${props.typeFaq === 1 ? "active" : ""}`}>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                    tempor incididunt?Lorem ipsum dolor sit amet, consectetur adipisicing
                                                    elit, sed do eiusmod tempor incididunt?</p>
                                            </div>
                                        </li>
                                        <li onClick={() => props.handleActiveFaq(2)}>
                                            <a href="javascript:void(0)" className={props.typeFaq === 2 ? "active" : ""}>코인 세일에 어떻게 참여하나요?</a>
                                            <div className={`desc ${props.typeFaq === 2 ? "active" : ""}`}>
                                                <p>내용</p>
                                            </div>
                                        </li>
                                        <li onClick={() => props.handleActiveFaq(3)}>
                                            <a href="javascript:void(0)" className={props.typeFaq === 3 ? "active" : ""}>미국인이나 중국인이 AIPE을 구매할 수 있나요?</a>
                                            <div className={`desc ${props.typeFaq === 3 ? "active" : ""}`}>
                                                <p>미국인은 현재 AIPE을 구매할 수 없습니다. 미국 법 적용에 따라 향후 AIPE의 구매가 가능 할 수도 있으며, 중국인도
                                                    마찬가지로 구매가 제한되어 있습니다.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </section>
                            {/* FAQ */}
                        </div>
                        {/* CONTAINER */}

                        {/* FOOTER */}
                        <div className="footer-wrap">
                            <footer className="footer">
                                <div className="footer-sns">
                                    <a href="javascript:void(0)" className="ico-tele"></a>
                                    <a href="javascript:void(0)" className="ico-medium"></a>
                                    <a href="javascript:void(0)" className="ico-twitter"></a>
                                    <a href="javascript:void(0)" className="ico-face"></a>
                                    <a href="javascript:void(0)" className="ico-kakaco"></a>
                                </div>
                                <div className="footer-copy">
                                    <p>
                                        Copyright &copy;2019 AIPX. All rights reserved.
                                    </p>
                                </div>
                            </footer>
                        </div>
                        {/* FOOTER */}

                        <ul className="nav">
                            <li className="menu-list" onClick={() => props.handleSectionMove(1)}>
                                <span>section1</span>
                            </li>
                            <li onClick={() => props.handleSectionMove(2)}>section2</li>
                            <li onClick={() => props.handleSectionMove(3)}>section3</li>
                            <li onClick={() => props.handleSectionMove(4)}>section4</li>
                            <li onClick={() => props.handleSectionMove(5)}>section5</li>
                        </ul>
                        <div className="lan-wrap">
                            <div className={`lan-btn ${props.activeLanBtn ? "active" : ""}`}
                                 onClick={props.handleLanBtn}>lan
                            </div>
                            <div className={`lan-list ${props.activeLanBtn ? "active" : ""}`}>
                                <ul>
                                    <li>lan1</li>
                                    <li>lan2</li>
                                    <li>lan3</li>
                                    <li>lan4</li>
                                </ul>
                            </div>
                        </div>
                        <div className="section-wrap">
                            <div className="section1">
                                <h1>section1</h1>
                                <p className="title">
                                    <span>L</span>
                                    <span>o</span>
                                    <span>r</span>
                                    <span>e</span>
                                    <span>m</span>
                                    <span> </span>
                                    <span>i</span>
                                    <span>p</span>
                                    <span>s</span>
                                    <span>u</span>
                                    <span>m</span>
                                    <span> </span>
                                    <span>d</span>
                                    <span>o</span>
                                    <span>l</span>
                                    <span>o</span>
                                    <span>r</span>
                                    <span> </span>
                                    <span>s</span>
                                    <span>i</span>
                                    <span>t</span>
                                    <span> </span>
                                    <span>a</span>
                                    <span>m</span>
                                    <span>e</span>
                                    <span>t</span>
                                </p>
                            </div>
                            <div className="section2">
                                <h1>section2</h1>
                                <div>
                                    <h3 className={`title ${props.activeTitle ? "active" : ""}`} ref={props.title}>AI
                                        Prediction Platform</h3>
                                    <div className={`wrap ${props.activeArticle1 ? "active" : ""}`}>
                                        <div className="box"/>
                                        <div className="text" ref={props.article1}>>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat.
                                        </div>
                                    </div>
                                    <br/>
                                    <br/>
                                    <div className={`wrap ${props.activeArticle2 ? "active" : ""}`}>
                                        <div className="box"/>
                                        <div className="text" ref={props.article2}>>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat.
                                        </div>
                                    </div>
                                    <br/>
                                    <br/>
                                    <div className={`wrap ${props.activeArticle3 ? "active" : ""}`}>
                                        <div className="box"/>
                                        <div className="text" ref={props.article3}>>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h1>section3</h1>
                                <div className="btn">
                                    <span>more</span>
                                </div>
                            </div>
                            <div>
                                <h1>section4</h1>
                                <div className="slide-wrap">
                                    <Slider {...settings} classNames="test">
                                        <div>
                                            <span/>
                                            <span/>
                                            <span/>
                                        </div>
                                        <div>
                                            <span/>
                                            <span/>
                                            <span/>
                                        </div>
                                        <div>
                                            <span/>
                                            <span/>
                                            <span/>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                            <div className="section5">
                                <h1>section5</h1>
                                <button className="accordion1" onClick={() => props.handleAccordion(1)}>Section 1</button>
                                <div className={`panel ${props.typeFaq === 1 ? "active" : ""}`}>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut
                                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco
                                        laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                                <button className="accordion2" onClick={() => props.handleAccordion(2)}>Section 2</button>
                                <div className={`panel ${props.typeFaq === 2 ? "active" : ""}`}>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut
                                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco
                                        laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                                <button className="accordion3" onClick={() => props.handleAccordion(3)}>Section 3</button>
                                <div className={`panel ${props.typeFaq === 3 ? "active" : ""}`}>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut
                                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco
                                        laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div>
                    </>
                </IntlProvider>
                :
                <div className="loader-wrap">
                    <img src={require("../../images/Dual Ring-1s-200px.gif")} className="loader"/>
                </div>
            }
        </>
    )
};

export default OnePage;