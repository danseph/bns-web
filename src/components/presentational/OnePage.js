import React from 'react';
// import Popup from '../presentational/Popup';
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
import Highcharts from 'highcharts';
import HighchartsReactOfficial from 'highcharts-react-official'
addLocaleData([...en, ...ko, ...ja, ...zh]);

const OnePage = (props) => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
    };

    let lanTelgramLink = () => {
        let link;
        if (props.defaultLang === 'ko') {
            return link = "https://bit.ly/2CTzfYb";
        } else if (props.defaultLang === 'en') {
            return link = "https://bit.ly/2WLNyFV";
        } else if (props.defaultLang === 'zh') {
            return link = "https://t.me/AIPE_official_CHN";
        } else {
            return link = "https://bit.ly/2WLNyFV";
        }
    }
        
    const highchartOption = {   
        credits: {
            enabled: false
        },
        colors: ['#5733fe','#8970fe','#6f35ff', '#bbadfe', '#ddd6fe', '#eeeafe' ],
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            margin: [0, 0, 20, 0],
        },
        title: {
            text: null
        },
        tooltip: {
            pointFormat: '{point.detail}',
            useHTML: true
        },
        plotOptions: {
            pie: {
                states: {
                    inactive: {
                        opacity: .3
                    }
                },
                size: '100%',
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    useHTML: true,
                    format: '{point.name} <br> {point.percentage} %',
                    distance: -45,
                    style: {fontFamily: '\'Questrial\', sans-serif', fontSize: '12px', textAlign: 'center'} 
                },
            }
        },
        series: [{
            name: 'Brand',
            colorByPoint: true,
            data: [{
                        name: 'Sale',
                        y: 35,
                    }, {
                        name: 'Team',
                        y: 12
                    }, {
                        name: 'Marketing',
                        y: 13
                    }, {
                        name: 'Ecosystem',
                        y: 15
                    }, {
                        name: 'Operation',
                        y: 12
                    }, {
                        name: 'Reverse',
                        y: 13
                }]
            }]
    };



    return (
        <>
            {!props.loader ?
                <IntlProvider
                    locale={props.defaultLang}
                    messages={locale[props.defaultLang]}
                >
                    <>
                        {/* {!props.popupClose &&
                            <Popup handlePopupClose={props.handlePopupClose} toggleChange={props.toggleChange}/>
                        } */}
                        {props.loader &&
                        <div className="loader-wrap">
                            <img src={require("../../images/loader.gif")} className="loader"/>
                        </div>
                        }
                        {props.lanShow &&
                        <div className="lan-list-none-wrap" onClick={props.handleLanShow}/>
                        }


                        {/* HEADER */}
                        <h1 className={`header-logo m`}>
                            <a href="javascript:void(0)">
                                <img src={require("../../images/bns-logo.png")} alt="로고"/>
                            </a>
                        </h1>
                        <div className="header-wrap">
                            <header className="header">
                                <h1 className="header-logo" onClick={props.handleRefresh}>
                                    <a href="javascript:void(0)">
                                        <img src={require("../../images/bns-logo.png")} alt="로고"/>
                                    </a>
                                </h1>
                                {/*메뉴 클릭하면 ((header-nav, menu-btn, header-btn)) 여기에 on 붙여주세요 */}
                                <nav className={`header-nav ${props.activeMnav ? "on": ""}`} onClick={props.handleLanHide}>
                                    <a href="javascript:void(0)" className={`menu-btn ${props.activeMnav ? "on": ""}`} onClick={props.handleMnvaBtn}>
                                        <span className="bar-wrap">
                                            <span className="bar" />
                                            <span className="bar" />
                                            <span className="bar" />
                                        </span>
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
                                    {/* <a href="javascript:void(0)" onClick={() => props.handleWhitePaperMove(20)}>
                                        <FormattedMessage id="header-whitepaper" />
                                    </a> */}
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
                        {/* HEADER */}    

                        
                        {/* CONTAINER */}
                        <div className="container">                    
                        {/* MAIN */}
                            <div className="main-wrap" id="section1">
                                <section className="main">
                                        <div className="main-img">
                                            <img src={require("../../images/polygon1.png")}/>
                                        </div>
                                        <div className="main-txt">
                                        <h2><FormattedMessage id="main-title" values={{ br: <br />}}/></h2>
                                        <p><FormattedMessage id="main-text" values={{ br: <br />}}/></p>
                                        <div className="main-img2">
                                                <img src={require("../../images/polygon2.png")}/>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            {/* MAIN */}

                            {/* BNS */}
                            <div className="bns-wrap">
                                <section className="bns" id="section2">
                                    <div className="bns-about" >
                                        <div className="bns-about-title">
                                            <h2><FormattedMessage id="about-title" /></h2>
                                        </div>
                                        <div className="bns-about-img">
                                            <img src={require("../../images/about.png")}/>
                                        </div>
                                        <div className="bns-about-text">
                                            <p><FormattedMessage id="about-text" values={{ br: <br />}}/></p>
                                        </div>
                                    </div>
                                    <div className="bns-paper" >
                                        <div className="bns-paper-title" >
                                            <h2>White Paper</h2>
                                        </div>
                                        <div className="paper-link">
                                            {props.whitePaper.map((item, i) => {
                                                return (
                                                    <a href={item.link} target="_blank" key={i}>
                                                        <FormattedMessage id={item.text} />
                                                    </a>
                                                )
                                            })}
                                        </div>
                                    </div>
                                    <div className="bns-util" >
                                        <div className="bns-util-title">
                                            <h2><FormattedMessage id="util-title" /></h2>
                                        </div>
                                        <div className="bns-util-content">
                                            <div className="bns-util-img">
                                                <img src={require("../../images/util-payment.png")}/>
                                            </div>
                                            <div className="bns-util-textbox">
                                                <h5><FormattedMessage id="util-payment-title" /></h5>
                                                <p><FormattedMessage id="util-payment-text" /></p>
                                            </div>
                                        </div>
                                        <div className="bns-util-content">
                                            <div className="bns-util-textbox">
                                                <h5><FormattedMessage id="util-reward-title" /></h5>
                                                <p><FormattedMessage id="util-reward-text" /></p>
                                            </div>
                                            <div className="bns-util-img">
                                                <img src={require("../../images/util-reward.png")}/>
                                            </div>
                                        </div>
                                        <div className="bns-util-content">
                                            <div className="bns-util-img">
                                                <img src={require("../../images/util-fund.png")}/>
                                            </div>
                                            <div className="bns-util-textbox">
                                                <h5><FormattedMessage id="util-fund-title" /></h5>
                                                <p><FormattedMessage id="util-fund-text" /></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bns-vision" >
                                        <div className="bns-vision-title">
                                            <h2><FormattedMessage id="vison-title" /></h2>
                                        </div>
                                        <div className="bns-vision-group">
                                        <div className="bns-vision-content">
                                            <div className="bns-vision-img">
                                                <img src={require("../../images/vision-1.png")}/>
                                            </div>
                                            <div className="bns-vision-textbox">
                                                <p><FormattedMessage id="vision-text-1" /></p>
                                            </div>
                                        </div>
                                        <div className="bns-vision-content">
                                            <div className="bns-vision-img">
                                                <img src={require("../../images/vision-2.png")}/>
                                            </div>
                                            <div className="bns-vision-textbox">
                                                <p><FormattedMessage id="vision-text-2" /></p>
                                            </div>
                                        </div>
                                            <div className="bns-vision-content">
                                                <div className="bns-vision-img">
                                                    <img src={require("../../images/vision-3.png")}/>
                                                </div>
                                                <div className="bns-vision-textbox">
                                                    <p><FormattedMessage id="vision-text-3" /></p>
                                                </div>
                                            </div>
                                            <div className="bns-vision-content">
                                                <div className="bns-vision-img">
                                                    <img src={require("../../images/vision-4.png")}/>
                                                </div>
                                                <div className="bns-vision-textbox">
                                                    <p><FormattedMessage id="vision-text-4" /></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className="bns-eco-section" id="section2">
                                    <div className="bns-ecosystem" >
                                        <div className= "bns-ecosystem-title" >
                                            <h2><FormattedMessage id="ecosystem" /></h2>
                                        </div>
                                        <div className={`bns-ecosystem-img-wrap web`} >
                                            <div className="bns-ecosystem-img">
                                                {
                                                    props.defaultLang === "ko" ?
                                                        <img src={require("../../images/ecosystem.png")} />
                                                        :
                                                        <img src={require("../../images/ecosystem.png")} />
                                                }
                                            </div>
                                        </div>
                                        <div className={`bns-ecosystem-img-wrap mobile`} >
                                            <div className="bns-ecosystem-img">
                                                {
                                                    props.defaultLang === "ko" ?
                                                        <img src={require("../../images/ecosystem.png")} />
                                                        :
                                                        <img src={require("../../images/ecosystem.png")} />
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            {/* BNS */}

                            {/* ROADMAP */}
                            <div className="roadmap-wrap" id="section3">
                                <section className="roadmap" >
                                    <div className={`roadmap-title`}  >
                                        <h2><FormattedMessage id="roadmap" /></h2>
                                    </div>
                                    <div className={`roadmap-img web`} >
                                        <img src={require("../../images/roadmap.png")}/>
                                    </div>
                                    <div className={`roadmap-img mobile`} >
                                        <img src={require("../../images/mb_roadmap.png")}/>
                                    </div>
                                </section>
                            </div>
                            {/* ROADMAP */}

                            {/* ECONOMY */}
                            <div className="economy-wrap" id="section4">
                                <section className="economy" >
                                    <div className={`economy-title`} >
                                        <h2><FormattedMessage id="token-title" /></h2>
                                    </div>
                                    <div className={`economy-desc`} ref={props.coinAllocation}>
                                        <div className="economy-desc-graph">
                                                <HighchartsReactOfficial 
                                                    highcharts={Highcharts}
                                                    options={highchartOption}
                                                />
                                        </div>
                                        <div className="economy-desc-structure">
                                            <div className="economy-desc-structure-list">
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

                                    </div>
                                </section>
                            </div>
                            {/* ECONOMY */}

                            {/* TEAM */}
                            <div className="team-wrap">
                                <section className="team" id="section5">
                                    <div className={`team-title`} >
                                        <h2><FormattedMessage id="team-member" /></h2>
                                    </div>
                                    <div className={`team-desc`} >
                                        <div className="team-desc-list">
                                            <ul>
                                                {props.team1.map((item, i) => {
                                                    return (
                                                        <li key={i}>
                                                            <div className={item.className}>
                                                                <img src={require(`../../images/teams/${item.image}`)} />
                                                            </div>
                                                            <div className={item.className2}>
                                                                <strong>{item.name}</strong>
                                                                <em>{item.position}</em>
                                                            </div>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                        <div className="team-desc-paging">
                                            {/* 페이징은 여기 */}
                                        </div>
                                    </div>
                                </section>
                                <section className="team" id="section5">
                                    <div className={`team-title`} >
                                        <h2><FormattedMessage id="advisor" /></h2>
                                    </div>
                                    <div className={`team-desc`} >
                                        <div className="team-desc-list">
                                            <ul>
                                                {props.team2.map((item, i) => {
                                                    return (
                                                        <li key={i}>
                                                            <div className={item.className}>
                                                                <img src={require(`../../images/teams/${item.image}`)} />
                                                            </div>
                                                            <div className={item.className2}>
                                                                <strong>{item.name}</strong>
                                                                <em>{item.position}</em>
                                                            </div>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                        <div className="team-desc-paging">
                                            {/* 페이징은 여기 */}
                                        </div>
                                    </div>
                                </section>
                            </div>
                            {/* TEAM */}

                            {/* PARTNER */}
                            <div className="partner-wrap">
                                <section className="partner"  id="section6">
                                    <div className={`partner-group`}>
                                        <div className={`partner-group-title`} >
                                            <h2><FormattedMessage id="partner" /></h2>
                                        </div>
                                        <div className={`partner-group-img`} >
                                            <img src={require("../../images/partners.png")}/>
                                        </div>
                                    </div>
                                    <div className={`partner-group`}>
                                        <div className={`partner-group-title`} >
                                            <h2><FormattedMessage id="tech-partner" /></h2>
                                        </div>
                                        <div className={`partner-group-img`} >
                                            <img src={require("../../images/tech-partner.png")}/>
                                        </div>
                                        <div className="polygon3-img">
                                            <img src={require("../../images/polygon3.png")}/>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            {/* PARTNER */}

                            {/* PRESS */}
                            <div className="press-wrap">
                                <section className="press">
                                    <div className={`press-title`} ref={props.pressTitle}>
                                        <h2><FormattedMessage id="press" /></h2>
                                    </div>
                                    <div className={`press-list`} ref={props.pressList}>
                                        <div className="contents">
                                            <ul>
                                                {props.press1.map((item, i) => {
                                                    return (
                                                    <li key={i}>
                                                            <a href={item.url} target="_blank">
                                                                <div className={item.classNameWrap}>
                                                                    <div className={item.className}>
                                                                    </div>
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
                                                            </a>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                        <div className="press-list-paging">
                                            {/* 페이징은 여기 */}
                                        </div>
                                    </div>
                                </section>
                            </div>
                            {/* PRESS */}

                            {/* FAQ */}
                            <div className="faq-wrap">
                                <section className="faq">
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
                            </div>
                            {/* FAQ */}
                            {/* CONTCT */}
                            <div className="contact-wrap">
                                <section className="contact">
                                    <div className="contact-title">
                                        <h2><FormattedMessage id="contact" /></h2>
                                    </div>
                                    <div className="contact-sns">
                                        <a href="#" target="_blank" className="ico-tele" > 
                                            <img  src={require(`../../images/telegram.png`)}/>
                                        </a>
                                        <a href="#" target="_blank" className="ico-medium" >
                                            <img  src={require(`../../images/medium.png`)}/>
                                        </a>
                                        <a href="#" target="_blank" className="ico-twitter" >
                                            <img  src={require(`../../images/twitter.png`)}/>
                                        </a>
                                        <a href="#" target="_blank" className="ico-youtube" >
                                            <img  src={require(`../../images/youtube.png`)}/>
                                        </a>
                                        <a href="#" target="_blank" className="ico-kakaco" >
                                            <img  src={require(`../../images/kakao.png`)}/>
                                        </a>
                                    </div>
                                    {/* <div className="polygon4-img">
                                            <img src={require("../../images/polygon4.png")}/>
                                    </div>     */}
                                </section>
                            </div>
                            {/* CONTCTA */}
                        </div>
                        {/* CONTAINER */}

                        {/* FOOTER */}
                        <div className="footer-wrap">
                            <footer className="footer">
                                <div className="footer-copy">
                                    <div className="copyRight">
                                        ©2019 BNS. All rights reserved.     
                                    </div>   
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