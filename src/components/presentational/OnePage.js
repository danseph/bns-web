import React from 'react';
import CharTransition from './CharTransition';
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
                            <img src={require("../../images/loader.gif")} className="loader"/>
                        </div>
                        }
                        {props.lanShow &&
                        <div className="lan-list-none-wrap" onClick={props.handleLanShow}/>
                        }
                        <h1 className={`header-logo m ${props.activeMainTitle ? "active" : ""}`}>
                            <a href="javascript:void(0)">
                                <img src={require("../../images/logo.png")} alt="로고"/>
                            </a>
                        </h1>
                        <div className="header-wrap">
                            <header className="header">
                                <h1 className="header-logo" onClick={props.handleRefresh}>
                                    <a href="javascript:void(0)">
                                        <img src={require("../../images/logo.png")} alt="로고"/>
                                    </a>
                                </h1>
                                {/*메뉴 클릭하면 ((header-nav, menu-btn, header-btn)) 여기에 on 붙여주세요 */}
                                <nav className={`header-nav ${props.activeMnav ? "on": ""}`} onClick={props.handleLanHide}>
                                    <a href="javascript:void(0)" className={`menu-btn ${props.activeMnav ? "on": ""}`} onClick={props.handleMnvaBtn}>
                                        <span className="bar" />
                                        <span className="bar" />
                                        <span className="bar" />
                                    </a>
                                    {props.nav.map((item, i) => {
                                        return (
                                            <a href="javascript:void(0)"
                                               className={props.activeNav === item.num ? "active" : ""}
                                               onClick={() => props.handleSectionMove(item.num)}
                                               key={i}>
                                                <FormattedMessage id={item.text} />
                                            </a>
                                        )
                                    })}
                                </nav>
                                <div className={`header-btn ${props.activeMnav ? "on": ""}`}>
                                    <a href="javascript:void(0)" onClick={() => props.handleWhitePaperMove(20)}>
                                        <FormattedMessage id="header-whitepaper" />
                                    </a>
                                    <a href="javascript:void(0)" className={`lang ${props.lanShow ? "active" : ""}`}
                                       onClick={props.handleLanShow}>
                                        <FormattedMessage id="header-lan-btn" />
                                    </a>
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
                                        {/*<img src={require("../../images/bg_bl_600x600.gif")}/>*/}
                                    </div>
                                    <div className="main-txt">
                                        <CharTransition defaultLang={props.defaultLang} activeMainTitle={props.activeMainTitle} />
                                        {/*<div className={`main-txt-title ${props.activeMainTitle ? "active" : ""}`}>*/}
                                            {/*<strong>*/}
                                                {/*/!*<FormattedMessage id="about-title" values={{kbr: <br />}} />*!/*/}
                                            {/*</strong>*/}
                                        {/*</div>*/}
                                        {/*<div className="main-txt-desc">*/}
                                            {/*<p>*/}
                                                {/*<FormattedMessage id="about-text" values={{kbr: <br />}} />*/}
                                            {/*</p>*/}
                                        {/*</div>*/}
                                    </div>
                                </section>
                            </div>
                            {/* MAIN */}

                            {/* PLATFORM */}
                            <section className="platform" id="section2">
                                <div className={`platform-title ${props.activePlatFormTitle ? "active" : ""}`} ref={props.platFormTitle}>
                                    <h2><FormattedMessage id="ai-prediction-title" /></h2>
                                </div>
                                <div className="platform-content">
                                    <ul>
                                        {props.platformContent.map((item, i) => {
                                            return (
                                                <li
                                                    key={i}
                                                    className={`
                                                        ${item.className1}
                                                        ${
                                                            (item.className1 === "content1" && props.activePlatFormContent1 ? "active" : "") ||
                                                            (item.className1 === "content2" && props.activePlatFormContent2 ? "active" : "") ||
                                                            (item.className1 === "content3" && props.activePlatFormContent3 ? "active" : "") ||
                                                            (item.className1 === "content4" && props.activePlatFormContent4 ? "active" : "") ||
                                                            (item.className1 === "content5" && props.activePlatFormContent5 ? "active" : "")
                                                        }
                                                    `}
                                                    ref={
                                                        (item.className1 === "content1" && props.platFormContent1) ||
                                                        (item.className1 === "content2" && props.platFormContent2) ||
                                                        (item.className1 === "content3" && props.platFormContent3) ||
                                                        (item.className1 === "content4" && props.platFormContent4) ||
                                                        (item.className1 === "content5" && props.platFormContent5)
                                                    }>
                                                    <div className={item.className2}>
                                                        <div className={item.className2_1}>
                                                            <img src={require(`../../images/${item.image}`)}/>
                                                        </div>
                                                        <div className={item.className2_1}>
                                                            <img src={require(`../../images/${item.image2}`)}/>
                                                        </div>
                                                    </div>
                                                    <div className={item.className3}>
                                                        <h4><FormattedMessage id={item.text1} /></h4>
                                                        <p><FormattedMessage id={item.text2} /></p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </section>
                            {/* PLATFORM */}

                            {/* PLATFORM, SOLUTION */}
                            <div className="effect-wrap" id="section3">
                                <div className="effect">
                                    <div className={`effect-title ${props.activeEffectTitle ? "active" : ""}`} ref={props.effectTitle}>
                                        <h2><FormattedMessage id="aipe-ecosystem" /></h2>
                                    </div>
                                    <div className={`effect-img-wrap web ${props.activeEffectContent ? "active" : ""}`} ref={props.effectContent}>
                                        <div className="effect-img">
                                            <img src={require("../../images/web_bg_contents.png")}/>
                                        </div>
                                        <div className="effect-img bot">
                                            <img src={require("../../images/web_bg_effect.png")}/>
                                        </div>
                                    </div>
                                    <div className={`effect-img-wrap mobile ${props.activeEffectContent ? "active" : ""}`} ref={props.effectContent}>
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
                                        <h2><FormattedMessage id="ai-technique" /></h2>
                                    </div>
                                    <div className="tech-content">
                                        <ul>
                                            {props.techContent.map((item, i) => {
                                                return (
                                                    <li key={i}
                                                        className={
                                                            (item.num === 1 && props.activeTechniqueContent1 ? "active" : "") ||
                                                            (item.num === 2 && props.activeTechniqueContent2 ? "active" : "")
                                                        }
                                                        ref={
                                                            (item.num === 1 && props.techniqueContent1) ||
                                                            (item.num === 2 && props.techniqueContent2)
                                                        }>
                                                        <div className={item.className1}>
                                                            <img src={require(`../../images/${item.image}`)}/>
                                                        </div>
                                                        <div className={item.className2}>
                                                            <strong>
                                                                <FormattedMessage id={item.title} />
                                                            </strong>
                                                            <p>
                                                                <FormattedMessage id={item.text} values={{kbr: <br />}}/>
                                                            </p>
                                                        </div>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </section>
                            </div>
                            {/* TECHNIQUE */}

                            {/* AIPX */}
                            <section className="aipx">
                                <div className={`aipx-title ${props.activeAipxTitle ? "active" : ""}`} ref={props.aipxTitle}>
                                    <h2><FormattedMessage id="aipx-title" /></h2>
                                </div>
                                <div className="aipx-content" ref={props.aipxContent}>
                                    <div className="aipx-content-img">
                                        <div className={`center ${props.activeAipxContent ? "active" : ""}`}>
                                            <img src={require("../../images/aipe.png")} />
                                        </div>
                                        <ul className={`side ${props.activeAipxContent ? "active" : ""}`}>
                                            {
                                                props.aipx.map((item, i) => {
                                                    return (
                                                        <li key={i} className={item.className}>
                                                            <p>
                                                                <FormattedMessage id={item.text} values={{kbr: <br />}} />
                                                            </p>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                    <div className={`aipx-content-txt ${props.activeAipxText ? "active" : ""}`} ref={props.aipxText}>
                                        <p>
                                            <FormattedMessage id="aipx-text6" />
                                        </p>
                                    </div>
                                </div>
                                <div className={`aipx-desc ${props.activeCoinAllocation ? "active" : ""}`} ref={props.coinAllocation}>
                                    <div className="aipx-desc-structure">
                                        <h3>
                                            <FormattedMessage id='coin-structure' />
                                        </h3>
                                        <div className="aipx-desc-structure-list">
                                            <ul>
                                                {props.coinStructure.map((item, i) => {
                                                    return (
                                                        <li key={i}>
                                                            <strong className={item.className1}>
                                                                <FormattedMessage id={item.text1} />
                                                            </strong>
                                                            <span className={item.className2}>
                                                                <FormattedMessage id={item.text2} />
                                                            </span>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="aipx-desc-graph">
                                        <h3>
                                            <FormattedMessage id='coin-allocation' />
                                        </h3>
                                        <div className="aipx-desc-graph-img">
                                            <img src={require("../../images/allocation.png")} />
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* AIPX */}

                            {/* WHITEPAPER */}
                            <div className="paper-wrap" id="section20">
                                <section className="paper">
                                    <div className="paper-title">
                                        <h2><FormattedMessage id="whitepaper" /></h2>
                                    </div>
                                    <div className="paper-link">
                                        {props.whitePaper.map((item, i) => {
                                            return (
                                                <a href="javascript:void(0)" key={i}>
                                                    <FormattedMessage id={item.text} />
                                                </a>
                                            )
                                        })}
                                    </div>
                                </section>
                            </div>
                            {/* WHITEPAPER */}

                            {/* ROADMAP */}
                            <div className="roadmap-wrap">
                                <section className="roadmap">
                                    <div className={`roadmap-title ${props.activeRoadmapTitle ? "active" : ""}`} id="section4" ref={props.roadmapTitle}>
                                        <h2><FormattedMessage id="roadmap" /></h2>
                                    </div>
                                    <div className={`roadmap-img ${props.activeRoadmapContent ? "active" : ""}`} ref={props.roadmapContent}>
                                        <img src={require("../../images/roadmap2.png")}/>
                                    </div>
                                </section>
                            </div>
                            {/* ROADMAP */}

                            {/* TEAM */}
                            <section className="team" id="section5">
                                <div className={`team-title ${props.activeTeamTitle ? "active" : ""}`} ref={props.teamTitle}>
                                    <h2><FormattedMessage id="team" /></h2>
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
                                    <h2><FormattedMessage id="media" /></h2>
                                </div>
                                <div className={`media-list ${props.activeMediaList ? "active" : ""}`} ref={props.mediaList}>
                                    <div className="contents">
                                        {/*<Slider {...settings} classNames="test">*/}
                                            {/*<ul>*/}
                                                {/*{props.media1.map((item, i) => {*/}
                                                    {/*return (*/}
                                                        {/*<li key={i}>*/}
                                                            {/*<div className={item.className}>*/}
                                                                {/*<img src={require(`../../images/${item.image}`)} />*/}
                                                            {/*</div>*/}
                                                            {/*<div className={item.className2}>*/}
                                                                {/*<div className={item.className2_1}>*/}
                                                                    {/*<strong>*/}
                                                                        {/*{item.title}*/}
                                                                    {/*</strong>*/}
                                                                {/*</div>*/}
                                                                {/*<div className={item.className2_2}>*/}
                                                                    {/*<span className={item.className2_2_1}>{item.date}</span>*/}
                                                                    {/*<span className={item.className2_2_2}>{item.writer}</span>*/}
                                                                {/*</div>*/}
                                                            {/*</div>*/}
                                                        {/*</li>*/}
                                                    {/*)*/}
                                                {/*})}*/}
                                            {/*</ul>*/}
                                        {/*</Slider>*/}
                                        <ul>
                                            {props.media1.map((item, i) => {
                                                return (
                                                    <li key={i}>
                                                        <div className={item.className}>
                                                            <img src={require(`../../images/${item.image}`)} />
                                                        </div>
                                                        <div className={item.className2}>
                                                            <div className={item.className2_1}>
                                                                <strong>
                                                                    {item.title}
                                                                </strong>
                                                            </div>
                                                            <div className={item.className2_2}>
                                                                <span className={item.className2_2_1}>{item.date}</span>
                                                                <span className={item.className2_2_2}>{item.writer}</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                )
                                            })}
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
                                    <h2><FormattedMessage id="faq" /></h2>
                                </div>
                                <div className="faq-list">
                                    <ul>
                                        {props.faq.map((item, i) => {
                                            return (
                                                <li onClick={() => props.handleActiveFaq(item.num)} key={i}>
                                                    <a href="javascript:void(0)" className={props.typeFaq === item.num ? "active" : ""}>
                                                        <FormattedMessage id={item.text1} />
                                                    </a>
                                                    <div className={`desc ${props.typeFaq === item.num ? "active" : ""}`}>
                                                        <p>
                                                            <FormattedMessage id={item.text2} />
                                                        </p>
                                                    </div>
                                                </li>
                                            )
                                        })}
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
                                    <a href="javascript:void(0)" className="ico-tele" />
                                    <a href="https://medium.com/cosmicbc" target="_blank" className="ico-medium" />
                                    <a href="https://twitter.com/cosmicbc_" target="_blank" className="ico-twitter" />
                                    <a href="javascript:void(0)" className="ico-face" />
                                    <a href="javascript:void(0)" className="ico-kakaco" />
                                </div>
                                <div className="footer-copy">
                                    <p>
                                        <FormattedMessage id="footer-copy" />
                                    </p>
                                </div>
                            </footer>
                        </div>
                        {/* FOOTER */}
                    </>
                </IntlProvider>
                :
                <div className="loader-wrap">
                    <img src={require("../../images/loader.gif")} className="loader"/>
                </div>
            }
        </>
    )
};

export default OnePage;