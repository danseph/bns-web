import React from 'react';
// import Popup from '../presentational/Popup';
import CharTransition from './CharTransition';
import Slider from 'react-slick';
import './styles.scss';
import Swiper from 'react-id-swiper';
import { Navigation, Autoplay } from 'swiper/dist/js/swiper.esm'
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ko from 'react-intl/locale-data/ko';
import zh from 'react-intl/locale-data/zh';
import locale from '../../locale';
import { FormattedMessage } from 'react-intl';
import 'react-id-swiper/lib/styles/scss/swiper.scss';
import $ from "jquery";
addLocaleData([...en, ...ko, ...zh]);



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

    $(document).ready(function(){

        var arrMenuDiv;
    
        // header fixed scroll , web-nav scroll
        $(window).scroll(function(){
            $(".header").css("left", -$(this).scrollLeft());
    
            var y1 = $(document).scrollTop();
            var y2 = y1 + ($(window).height() / 2);
    
            if(!arrMenuDiv) {
                arrMenuDiv = [];
                var children = $('.container').children();
                for(var i=0; i<children.length-1; i++) {    // header, main, footer 제외
                    arrMenuDiv.push(children[i]);
                }
            }
    
            for(var i=0; i<arrMenuDiv.length; i++) {
                var el = arrMenuDiv[i];
                // if (y1 < el.offsetTop && el.offsetTop < y2) {
                if (y1 < el.offsetTop && el.offsetTop < y2) {
                    var id = el.id;
                    $(".header-nav a").removeClass("active");
                    $('#menu_'+id).addClass('active');
                    break;
                } else if (y1 == 0) {
                    $(".header-nav a").removeClass("active");
                }
            }
        });
    })


    const params = {
        // modules: [Navigation, Autoplay ],
        modules: [Navigation ],
        navigation: {
          nextEl: '.swiper-next',
          prevEl: '.swiper-prev'
        },
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        renderPrevButton: () => <button className="swiper-prev"></button>,
        renderNextButton: () => <button className="swiper-next"></button>,
        loop: true,
      }
        
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
                            <img src={require("../../images/bns_loading_fast.gif.gif")} className="loader"/>
                        </div>
                        }
                        {props.lanShow &&
                        <div className="lan-list-none-wrap" onClick={props.handleLanShow}/>
                        }

                        {/* HEADER */}
                        {/* <h1 className={`header-logo m`}>
                            <a href="javascript:void(0)">
                                <img src={require("../../images/mb-bns-logo.png")} alt="로고"/>
                            </a>
                        </h1> */}
                        <div className={ (window.scrollY > 0 ? 'header-wrap active' : 'header-wrap') }>
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
                                               key={i} 
                                               id= {`menu_section${i+2}`}>
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
                                           Language
                                        {/* <FormattedMessage id="header-lan-btn" /> */}
                                    </a>
                                    {/* <h1 className="header-logo" onClick={props.handleRefresh}> */}
                                        <a href="javascript:void(0)" className="small-logo mobile">
                                            <img src={require("../../images/bns-small-logo.png")} alt="로고"/>
                                        </a>
                                    {/* </h1> */}
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
                                        <div className="polygon1-img web">
                                            <img src={require("../../images/polygon1.png")}/>
                                        </div>
                                        <div className="polygon1-img mobile">
                                            <img src={require("../../images/mb-polygon1.png")}/>
                                        </div>
                                        <div className="main-txt">
                                            <h2><CharTransition defaultLang={props.defaultLang} activeMainTitle={props.activeMainTitle} /></h2>
                                            <div className="mainP">
                                                <p><FormattedMessage id="main-text-1" values={{ br: <br /> , lineBreak:<div className='desktop-inline'></div>, lineBreak2:<div className='desktop-block'></div>}}/></p>
                                                <p className="onePass"><FormattedMessage id="main-text-onepass" values={{ br: <br /> , lineBreak:<div className='desktop-inline'></div>, lineBreak2:<div className='desktop-block'></div>}}/></p>
                                                <p><FormattedMessage id="main-text-2" values={{ br: <br /> , lineBreak:<div className='desktop-inline'></div>, lineBreak2:<div className='desktop-block'></div>}}/></p>
                                            </div>
                                        </div>
                                        <div className="polygon2-img">
                                            <img src={require("../../images/polygon2.png")}/>
                                        </div>
                                </section>
                            </div>
                            {/* MAIN */}

                            {/* BNS */}
                            <div className="bns-wrap" id="section2">
                                <section className="bns" >
                                    <div className="bns-about" >
                                        <div className="bns-about-title" ref={props.aboutTitle}>
                                            <h2><FormattedMessage id="about-title" /></h2>
                                        </div>
                                        <div className="bns-about-img" ref={props.aboutContent}>
                                            <img src={require("../../images/about.png")}/>
                                        </div>
                                        <div className="bns-about-text" ref={props.aboutText}>
                                            <p><FormattedMessage id="about-text" values={{ br: <br /> , lineBreak:<div className='desktop-inline'></div>, lineBreak2:<div className='desktop-block'></div>}}/></p>
                                        </div>
                                    </div>
                                    <div className="bns-paper" >
                                        <div className="mb-polygon2-img mobile">
                                            <img src={require("../../images/mb-polygon2.png")}/>
                                        </div>
                                        <div className="bns-paper-title" ref={props.paperTitle}>
                                            <h2>White Paper</h2>
                                        </div>
                                        <div className="paper-link" ref={props.paperContent}>
                                            {props.whitePaper.map((item, i) => {
                                                return (
                                                    <a href={item.link} target="_blank" key={i}>
                                                        <FormattedMessage id={item.text} />
                                                    </a>
                                                )
                                            })}
                                        </div>
                                        <div className="mb-polygon3-img mobile">
                                            <img src={require("../../images/mb-polygon3.png")}/>
                                        </div>
                                    </div>
                                    <div className="bns-util" >
                                        <div className="bns-util-title" ref={props.utilTitle}>
                                            <h2><FormattedMessage id="util-title" /></h2>
                                        </div>
                                        <div className="bns-util-content" ref={props.utilPayment}>
                                            <div className="bns-util-img">
                                                <img src={require("../../images/util-payment.png")}/>
                                            </div>
                                            <div className="bns-util-textbox">
                                                <h5><FormattedMessage id="util-payment-title" /></h5>
                                                <p className="web"><FormattedMessage id="util-payment-text"  values={{ br: <br /> , lineBreak:<div className='desktop-inline'></div>, lineBreak2:<div className='desktop-block'></div>}}/></p>
                                                <p className="mobile"><FormattedMessage id="util-payment-textM"  values={{ br: <br /> , lineBreak:<div className='desktop-inline'></div>, lineBreak2:<div className='desktop-block'></div>}}/></p>
                                            </div>
                                        </div>
                                        <div className="bns-util-content-reverse" ref={props.utilReward}>
                                            <div className="bns-util-textbox">
                                                <h5><FormattedMessage id="util-reward-title" /></h5>
                                                <p className="web"><FormattedMessage id="util-reward-text" values={{ br: <br /> , lineBreak:<div className='desktop-inline'></div>, lineBreak2:<div className='desktop-block'></div>}}/></p>
                                                <p className="mobile"><FormattedMessage id="util-reward-textM" values={{ br: <br /> , lineBreak:<div className='desktop-inline'></div>, lineBreak2:<div className='desktop-block'></div>}}/></p>
                                            </div>
                                            <div className="bns-util-img">
                                                <img src={require("../../images/util-reward.png")}/>
                                            </div>
                                        </div>
                                        <div className="bns-util-content" ref={props.utilFund}>
                                            <div className="bns-util-img">
                                                <img src={require("../../images/util-fund.png")}/>
                                            </div>
                                            <div className="bns-util-textbox">
                                                <h5><FormattedMessage id="util-fund-title" /></h5>
                                                <p className="web"><FormattedMessage id="util-fund-text" values={{ br: <br /> , lineBreak:<div className='desktop-inline'></div>, lineBreak2:<div className='desktop-block'></div>}}/></p>
                                                <p className="mobile"><FormattedMessage id="util-fund-textM" values={{ br: <br /> , lineBreak:<div className='desktop-inline'></div>, lineBreak2:<div className='desktop-block'></div>}}/></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bns-vision"  >
                                        <div className="bns-vision-title" ref={props.visionTitle}>
                                            <h2><FormattedMessage id="vison-title" /></h2>
                                        </div>
                                        <div className="bns-vision-group" ref={props.visionContent}>
                                        <div className="bns-vision-content"  >
                                            <div className="bns-vision-img" >
                                                <img src={require("../../images/vision-1.png")}/>
                                            </div>
                                            <div className="bns-vision-textbox">
                                                <p><FormattedMessage id="vision-text-1" values={{ br: <br /> , lineBreak:<div className='desktop-inline'></div>, lineBreak2:<div className='desktop-block'></div>}}/></p>
                                            </div>
                                        </div>
                                        <div className="bns-vision-content" >
                                            <div className="bns-vision-img">
                                                <img src={require("../../images/vision-2.png")}/>
                                            </div>
                                            <div className="bns-vision-textbox">
                                                <p><FormattedMessage id="vision-text-2" values={{ br: <br /> , lineBreak:<div className='desktop-inline'></div>, lineBreak2:<div className='desktop-block'></div>}}/></p>
                                            </div>
                                        </div>
                                            <div className="bns-vision-content" >
                                                <div className="bns-vision-img">
                                                    <img src={require("../../images/vision-3.png")}/>
                                                </div>
                                                <div className="bns-vision-textbox">
                                                    <p><FormattedMessage id="vision-text-3" values={{ br: <br /> , lineBreak:<div className='desktop-inline'></div>, lineBreak2:<div className='desktop-block'></div>}}/></p>
                                                </div>
                                            </div>
                                            <div className="bns-vision-content"  >
                                                <div className="bns-vision-img">
                                                    <img src={require("../../images/vision-4.png")}/>
                                                </div>
                                                <div className="bns-vision-textbox">
                                                    <p><FormattedMessage id="vision-text-4" values={{ br: <br /> , lineBreak:<div className='desktop-inline'></div>, lineBreak2:<div className='desktop-block'></div>}}/></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bns-ecosystem" >
                                        <div className= "bns-ecosystem-title" ref={props.ecosystemTitle}>
                                            <h2><FormattedMessage id="ecosystem" /></h2>
                                        </div>
                                        <div className={`bns-ecosystem-img-wrap web`} ref={props.ecosystemContent}>
                                            <div className="bns-ecosystem-img">
                                                {
                                                    props.defaultLang === "ko" ?
                                                        <img src={require("../../images/ecosystem.png")} />
                                                        :
                                                        props.defaultLang === "en" ?
                                                            <img src={require("../../images/ecosystem-en.png")} />
                                                            :<img src={require("../../images/ecosystem-ch.png")} />
                                                }
                                            </div>
                                        </div>
                                        <div className={`bns-ecosystem-img-wrap mobile`} ref={props.ecosystemContentM}>
                                            <div className="bns-ecosystem-img">
                                                {
                                                    props.defaultLang === "ko" ?
                                                        <img src={require("../../images/mb-ecosystem.png")} />
                                                        :
                                                        props.defaultLang === "en" ?
                                                            <img src={require("../../images/mb-ecosystem-en.png")} />
                                                            :<img src={require("../../images/mb-ecosystem-ch.png")} />
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
                                    <div className={`roadmap-title`} ref={props.roadmapTitle} >
                                        <h2><FormattedMessage id="roadmap" /></h2>
                                    </div>
                                    <div className={`roadmap-img web` } ref={props.roadmapContent} >
                                        {
                                            props.defaultLang === "ko" ?
                                            <img src={require("../../images/roadmap.png")}/>
                                                :
                                                props.defaultLang === "en" ?
                                                    <img src={require("../../images/roadmap-en.png")} />
                                                    :<img src={require("../../images/roadmap-ch.png")} />
                                        }
                                    </div>
                                    <div className={`roadmap-img mobile`} ref={props.roadmapContentM}>
                                        {
                                            props.defaultLang === "ko" ?
                                            <img src={require("../../images/mb-roadmap.png")}/>
                                                :
                                                props.defaultLang === "en" ?
                                                    <img src={require("../../images/mb-roadmap-en.png")} />
                                                    :<img src={require("../../images/mb-roadmap-ch.png")} />
                                        }
                                    </div>
                                    <div className="polygon3-img web">
                                        <img src={require("../../images/polygon3.png")}/>
                                    </div>
                                </section>
                            </div>
                            {/* ROADMAP */}

                            {/* ECONOMY */}
                            <div className="economy-wrap" id="section4">
                                <section className="economy" >
                                    <div className={`economy-title`} ref={props.economyTitle}>
                                        <h2><FormattedMessage id="token-title" /></h2>
                                    </div>
                                    <div className={`economy-desc`} ref={props.economyContent}>
                                        <div className="economy-desc-graph">
                                            <div className="economy-desc-graph-img web">
                                                <img src={require("../../images/graph.png")}/>
                                            </div>
                                            <div className="economy-desc-graph-img mobile">
                                                <img src={require("../../images/mb-graph.png")}/>
                                            </div>
                                        </div>
                                        
                                        <div className="economy-desc-structure">
                                            <div className="economy-desc-structure-list">
                                                <ul>
                                                    {props.coinStructure.map((item, i) => {
                                                        return (
                                                            <li key={i}>
                                                                <img src={require("../../images/list-shape.png")} />
                                                                <strong className={item.className1}>
                                                                    <FormattedMessage id={item.text1} values={{ br: <br /> , lineBreak:<div className='desktop-inline'></div>, lineBreak2:<div className='desktop-block'></div>}}/>
                                                                </strong>
                                                                <span className={item.className2}>
                                                                    <FormattedMessage id={item.text2} values={{ br: <br /> , lineBreak:<div className='desktop-inline'></div>, lineBreak2:<div className='desktop-block'></div>}}/>
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
                            <div className="team-wrap" id="section5">
                                <section className="team" >
                                    <div className={`teamMember`}>
                                        <div className={`team-title`} ref={props.teamTitle}>
                                            <h2><FormattedMessage id="team-member" /></h2>
                                        </div>
                                        <div className="mb-polygon4-img mobile">
                                                <img src={require("../../images/mb-polygon4.png")}/>
                                        </div>
                                        <div className="teamMember-group">
                                            <div className={`team-desc web`} ref={props.teamList}>
                                                <Swiper {...params}>
                                                    <div>
                                                        <ul>
                                                            {props.team1.map((item, i) => {
                                                                return (
                                                                    <li key={i}>
                                                                        <div className={item.className}>
                                                                            <img src={require(`../../images/teams/${item.image}`)} />
                                                                        </div>
                                                                        <div className={item.className2}>
                                                                            {/* <strong>{item.name}</strong> */}
                                                                            <strong><FormattedMessage id={item.name}/></strong>
                                                                            <div>{item.position1}</div>
                                                                            <div>{item.position2}</div>
                                                                            <div>{item.position3}</div>
                                                                            <div>{item.position4}</div>
                                                                            <div>{item.position5}</div>
                                                                            <div>{item.position6}</div>
                                                                        </div>
                                                                    </li>
                                                                )
                                                            })}
                                                        </ul>
                                                    </div>
                                                    <div >
                                                        <ul>
                                                            {props.team2.map((item, i) => {
                                                                return (
                                                                    <li key={i}>
                                                                        <div className={item.className}>
                                                                            <img src={require(`../../images/teams/${item.image}`)} />
                                                                        </div>
                                                                        <div className={item.className2}>
                                                                            <strong>{item.name}</strong>
                                                                                <div>{item.position1}</div>
                                                                                <div>{item.position2}</div>
                                                                                <div>{item.position3}</div>
                                                                                <div>{item.position4}</div>
                                                                                <div>{item.position5}</div>
                                                                                <div>{item.position6}</div>
                                                                        </div>
                                                                    </li>
                                                                )
                                                            })}
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <ul>
                                                            {props.team3.map((item, i) => {
                                                                return (
                                                                    <li key={i}>
                                                                        <div className={item.className}>
                                                                            <img src={require(`../../images/teams/${item.image}`)} />
                                                                        </div>
                                                                        <div className={item.className2}>
                                                                        <strong>{item.name}</strong>
                                                                            <div>{item.position1}</div>
                                                                            <div>{item.position2}</div>
                                                                            <div>{item.position3}</div>
                                                                            <div>{item.position4}</div>
                                                                            <div>{item.position5}</div>
                                                                            <div>{item.position6}</div>
                                                                        </div>
                                                                    </li>
                                                                )
                                                            })}
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <ul>
                                                            {props.team4.map((item, i) => {
                                                                return (
                                                                    <li key={i}>
                                                                        <div className={item.className}>
                                                                            <img src={require(`../../images/teams/${item.image}`)} />
                                                                        </div>
                                                                        <div className={item.className2}>
                                                                        <strong>{item.name}</strong>
                                                                            <div>{item.position1}</div>
                                                                            <div>{item.position2}</div>
                                                                            <div>{item.position3}</div>
                                                                            <div>{item.position4}</div>
                                                                            <div>{item.position5}</div>
                                                                            <div>{item.position6}</div>
                                                                        </div>
                                                                    </li>
                                                                )
                                                            })}
                                                        </ul>
                                                    </div>
                                                </Swiper>
                                            </div>
                                            <div className={`team-desc mobile`} >
                                                <Swiper {...params}>
                                                    {props.team1.concat(props.team2).concat(props.team3).concat(props.team4).map((item, i) => {
                                                        return (
                                                            <div className='eachTeamMember' key={i}>
                                                                <div  className={item.className}>
                                                                    <img src={require(`../../images/teams/${item.image}`)} />
                                                                </div>
                                                                <div className={item.className2}>
                                                                    <strong><FormattedMessage id={item.name}/></strong>
                                                                    <div>{item.position1}</div>
                                                                    <div>{item.position2}</div>
                                                                    <div>{item.position3}</div>
                                                                    <div>{item.position4}</div>
                                                                    <div>{item.position5}</div>
                                                                    <div>{item.position6}</div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </Swiper>
                                            </div>
                                        </div>
                                    </div>                                   

                                
                                {/* </section> 
                            </div>
                            <div className="advisor-wrap">
                                <section className="advisor" >  */}
                                    <div className={`advisor`}>
                                        <div className={`team-title`} ref={props.advisorTitle}>
                                            <h2><FormattedMessage id="advisor" /></h2>
                                        </div>
                                        <div className="advisor-group">
                                            <div className={`advisor-desc web`} ref={props.advisorList}>
                                                    <Swiper {...params}>
                                                        <div>
                                                            <ul>
                                                                {props.advisor1.map((item, i) => {
                                                                    return (
                                                                        <li key={i}>
                                                                            <div className={item.className}>
                                                                                <img src={require(`../../images/teams/${item.image}`)} />
                                                                            </div>
                                                                            <div className={item.className2}>
                                                                                <strong>{item.name}</strong>
                                                                                <div>{item.position1}</div>
                                                                                <div>{item.position2}</div>
                                                                                <div>{item.position3}</div>
                                                                                <div>{item.position4}</div>
                                                                                <div>{item.position5}</div>
                                                                                <div>{item.position6}</div>
                                                                            </div>
                                                                        </li>
                                                                    )
                                                                })}
                                                            </ul>
                                                        </div>
                                                        <div >
                                                            <ul>
                                                                {props.advisor2.map((item, i) => {
                                                                    return (
                                                                        <li key={i}>
                                                                            <div className={item.className}>
                                                                                <img src={require(`../../images/teams/${item.image}`)} />
                                                                            </div>
                                                                            <div className={item.className2}>
                                                                                <strong>{item.name}</strong>
                                                                                    <div>{item.position1}</div>
                                                                                    <div>{item.position2}</div>
                                                                                    <div>{item.position3}</div>
                                                                                    <div>{item.position4}</div>
                                                                                    <div>{item.position5}</div>
                                                                                    <div>{item.position6}</div>
                                                                            </div>
                                                                        </li>
                                                                    )
                                                                })}
                                                            </ul>
                                                        </div>
                                                        <div>
                                                            <ul>
                                                                {props.advisor3.map((item, i) => {
                                                                    return (
                                                                        <li key={i}>
                                                                            <div className={item.className}>
                                                                                <img src={require(`../../images/teams/${item.image}`)} />
                                                                            </div>
                                                                            <div className={item.className2}>
                                                                            <strong>{item.name}</strong>
                                                                                <div>{item.position1}</div>
                                                                                <div>{item.position2}</div>
                                                                                <div>{item.position3}</div>
                                                                                <div>{item.position4}</div>
                                                                                <div>{item.position5}</div>
                                                                                <div>{item.position6}</div>
                                                                            </div>
                                                                        </li>
                                                                    )
                                                                })}
                                                            </ul>
                                                        </div>
                                                        <div>
                                                            <ul>
                                                                {props.advisor4.map((item, i) => {
                                                                    return (
                                                                        <li key={i}>
                                                                            <div className={item.className}>
                                                                                <img src={require(`../../images/teams/${item.image}`)} />
                                                                            </div>
                                                                            <div className={item.className2}>
                                                                            <strong>{item.name}</strong>
                                                                                <div>{item.position1}</div>
                                                                                <div>{item.position2}</div>
                                                                                <div>{item.position3}</div>
                                                                                <div>{item.position4}</div>
                                                                                <div>{item.position5}</div>
                                                                                <div>{item.position6}</div>
                                                                            </div>
                                                                        </li>
                                                                    )
                                                                })}
                                                            </ul>
                                                        </div>
                                                    </Swiper>
                                            </div>
                                            <div className={`advisor-desc mobile`} >
                                                <Swiper {...params}>
                                                    {props.advisor1.concat(props.advisor2).concat(props.advisor3).concat(props.advisor4).map((item, i) => {
                                                        return (
                                                            <div className='eachTeamMember' key={i}>
                                                                <div  className={item.className}>
                                                                    <img src={require(`../../images/teams/${item.image}`)} />
                                                                </div>
                                                                <div className={item.className2}>
                                                                    <strong>{item.name}</strong>
                                                                    <div>{item.position1}</div>
                                                                    <div>{item.position2}</div>
                                                                    <div>{item.position3}</div>
                                                                    <div>{item.position4}</div>
                                                                    <div>{item.position5}</div>
                                                                    <div>{item.position6}</div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </Swiper>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="polygon4-img web">
                                        <img src={require("../../images/polygon4.png")}/>
                                    </div>
                                </section>
                            </div>
                            {/* TEAM */}

                            {/* PARTNER */}
                            <div className="partner-wrap" id="section6">
                                <section className="partner">
                                    <div className={`partner-group`} >
                                        <div className={`partner-group-title`} ref={props.partnerTitle1}>
                                            <h2><FormattedMessage id="partner" /></h2>
                                        </div>
                                        <div className={`partner-group1-img web`} ref={props.partnerContent1}>
                                            <img src={require("../../images/partners.png")}/>
                                        </div>
                                        <div className={`partner-group1-img mobile`} ref={props.partnerContent1M}>
                                            <img src={require("../../images/mb-partners.png")}/>
                                        </div>
                                    </div>
                                    <div className={`partner-group`}>
                                        <div className={`partner-group-title`} ref={props.partnerTitle2}>
                                            <h2><FormattedMessage id="tech-partner" /></h2>
                                        </div>
                                        <div className={`partner-group2-img web`} ref={props.partnerContent2}>
                                            <img src={require("../../images/tech-partner.png")}/>
                                        </div>
                                        <div className={`partner-group2-img mobile`} ref={props.partnerContent2M}>
                                            <img src={require("../../images/mb-tech-partner.png")}/>
                                        </div>
                                        <div className="polygon5-img web">
                                            <img src={require("../../images/polygon5.png")}/>
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
                                    <div className="mb-polygon5-img mobile">
                                        <img src={require("../../images/mb-polygon5.png")}/>
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
                                                                    {/* <div className={item.className2_1}> */}
                                                                        <strong>
                                                                            {item.title}
                                                                        </strong>
                                                                    {/* </div> */}
                                                                    {/* <div className={item.className2_2}> */}
                                                                        <span className={item.className2_2_1}>{item.date}</span>
                                                                        <span className={item.className2_2_2}>{item.writer}</span>
                                                                    {/* </div> */}
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
                                    <div className="polygon6-img web">
                                        <img src={require("../../images/polygon6.png")}/>
                                    </div>
                                    <div className="polygon6-img mobile">
                                        <img src={require("../../images/mb-polygon6.png")}/>
                                    </div>        
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
                                        ©2019 BNS BAY. All rights reserved.     
                                    </div>   
                                </div>

                            </footer>


                        </div>
                        {/* FOOTER */}
                    </>
                </IntlProvider>
                :
                <div className="loader-wrap">
                    <img src={require("../../images/bns_loading_fast.gif.gif")} className="loader"/>
                </div>
            }
        </>
    )
};

export default OnePage;