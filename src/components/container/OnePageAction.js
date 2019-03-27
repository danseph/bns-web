import React, { Component } from 'react';
import OnePage from '../presentational/OnePage';
import $ from 'jquery';
import { throttle } from 'lodash';

class OnePageAction extends Component {
    state = {
        loader: true,
        activeNav: 1,
        lanShow: false,
        activeMainTitle: false,
        activePlatFormTitle: false,
        activePlatFormContent1: false,
        activePlatFormContent2: false,
        activePlatFormContent3: false,
        activePlatFormContent4: false,
        activePlatFormContent5: false,
        activeEffectTitle: false,
        activeEffectContent: false,
        activeTechniqueTitle: false,
        activeTechniqueContent1: false,
        activeTechniqueContent2: false,
        activeRoadmapTitle: false,
        activeRoadmapContent: false,
        activeTeamTitle: false,
        activeTeamList: false,
        activeMediaTitle: false,
        activeMediaList: false,
        activeAipxTitle: false,
        activeAipxContent: false,
        activeAipxText: false,
        activeCoinAllocation: false,
        activeLanBtn: false,
        activeMnav: false,
        typeFaq: 0,
        defaultLang: window.localStorage['trans'] || "ko",
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
            text: 'whitepaper-ko'
        },
        {
            text: 'whitepaper-en'
        },
        {
            text: 'whitepaper-zh'
        },
        {
            text: 'whitepaper-ja'
        }
    ];

    team1 = [
        {
            name: 'name',
            position: 'position',
            className: 'img-box',
            className2: 'txt-box',
            image: 'team_sample_image.png',
        },
        {
            name: 'name',
            position: 'position',
            className: 'img-box',
            className2: 'txt-box',
            image: 'team_sample_image.png'
        },
        {
            name: 'name',
            position: 'position',
            className: 'img-box',
            className2: 'txt-box',
            image: 'team_sample_image.png'
        },
        {
            name: 'name',
            position: 'position',
            className: 'img-box',
            className2: 'txt-box',
            image: 'team_sample_image.png'
        },
        {
            name: 'name',
            position: 'position',
            className: 'img-box',
            className2: 'txt-box',
            image: 'team_sample_image.png',
        },
        {
            name: 'name',
            position: 'position',
            className: 'img-box',
            className2: 'txt-box',
            image: 'team_sample_image.png'
        },
        {
            name: 'name',
            position: 'position',
            className: 'img-box',
            className2: 'txt-box',
            image: 'team_sample_image.png'
        },
        {
            name: 'name',
            position: 'position',
            className: 'img-box',
            className2: 'txt-box',
            image: 'team_sample_image.png'
        },
    ];

    media1 = [
        {
            title: 'title',
            date: '2019.03.22',
            writer: 'writer',
            className: 'img-box',
            className2: 'txt-box',
            className2_1: 'left',
            className2_2: 'right',
            className2_2_1: 'date',
            className2_2_2: 'name',
            image: 'team_sample_image.png'
        },
        {
            title: 'title',
            date: '2019.03.22',
            writer: 'writer',
            className: 'img-box',
            className2: 'txt-box',
            className2_1: 'left',
            className2_2: 'right',
            className2_2_1: 'date',
            className2_2_2: 'name',
            image: 'team_sample_image.png'
        },
        {
            title: 'title',
            date: '2019.03.22',
            writer: 'writer',
            className: 'img-box',
            className2: 'txt-box',
            className2_1: 'left',
            className2_2: 'right',
            className2_2_1: 'date',
            className2_2_2: 'name',
            image: 'team_sample_image.png'
        },
        {
            title: 'title',
            date: '2019.03.22',
            writer: 'writer',
            className: 'img-box',
            className2: 'txt-box',
            className2_1: 'left',
            className2_2: 'right',
            className2_2_1: 'date',
            className2_2_2: 'name',
            image: 'team_sample_image.png'
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
        setTimeout(() => {
            return (
                this.setState({
                    loader: false,
                    activeMainTitle: true,
                    activePlatFormTitle: true,
                })
            )
        }, 800);

        window.addEventListener('scroll', this._handlePlatFormContent1Active);
        window.addEventListener('scroll', this._handlePlatFormContent2Active);
        window.addEventListener('scroll', this._handlePlatFormContent3Active);
        window.addEventListener('scroll', this._handlePlatFormContent4Active);
        window.addEventListener('scroll', this._handlePlatFormContent5Active);
        window.addEventListener('scroll', this._handleEffectTitleActive);
        window.addEventListener('scroll', this._handleEffectContentActive);
        window.addEventListener('scroll', this._handleTechniqueTitleActive);
        window.addEventListener('scroll', this._handleTechniqueContent1Active);
        window.addEventListener('scroll', this._handleTechniqueContent2Active);
        window.addEventListener('scroll', this._handleTeamTitleActive);
        window.addEventListener('scroll', this._handleTeamListActive);
        window.addEventListener('scroll', this._handleMediaTitleActive);
        window.addEventListener('scroll', this._handleMediaListActive);
        window.addEventListener('scroll', this._handleAipxTitleActive);
        window.addEventListener('scroll', this._handleAipxContentActive);
        window.addEventListener('scroll', this._handleAipxTextActive);
        window.addEventListener('scroll', this._handleCoinAllocationActive);
        window.addEventListener('scroll', this._handleRoadmapTitleActive);
        window.addEventListener('scroll', this._handleRoadmapContentActive);
    }

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
                media1={this.media1}
                faq={this.faq}
                title={this.title}
                effectTitle={this.effectTitle}
                effectContent={this.effectContent}
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
            />
        )
    }

    _handleRefresh = () => {
        this.setState({
            loader: true,
        })
        window.scrollTo(0, 0);
        setTimeout(() => {
            return (
                this.setState({
                    loader: false,
                    activeNav: 1,
                    lanShow: false,
                    activeMainTitle: true,
                    activePlatFormTitle: true,
                    activePlatFormContent1: false,
                    activePlatFormContent2: false,
                    activePlatFormContent3: false,
                    activePlatFormContent4: false,
                    activePlatFormContent5: false,
                    activeEffectTitle: false,
                    activeEffectContent: false,
                    activeTechniqueTitle: false,
                    activeTechniqueContent1: false,
                    activeTechniqueContent2: false,
                    activeRoadmapTitle: false,
                    activeRoadmapContent: false,
                    activeTeamTitle: false,
                    activeTeamList: false,
                    activeMediaTitle: false,
                    activeMediaList: false,
                    activeAipxTitle: false,
                    activeAipxContent: false,
                    activeAipxText: false,
                    activeCoinAllocation: false,
                    activeLanBtn: false,
                    activeMnav: false,
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
            activeMnav: false
        })
        window.scrollTo(0, 0);
        setTimeout(() => {
            return (
                this.setState({
                    loader: false,
                    activeNav: 1,
                    lanShow: false,
                    activeMainTitle: true,
                    activePlatFormTitle: true,
                    activePlatFormContent1: false,
                    activePlatFormContent2: false,
                    activePlatFormContent3: false,
                    activePlatFormContent4: false,
                    activePlatFormContent5: false,
                    activeEffectTitle: false,
                    activeEffectContent: false,
                    activeTechniqueTitle: false,
                    activeTechniqueContent1: false,
                    activeTechniqueContent2: false,
                    activeRoadmapTitle: false,
                    activeRoadmapContent: false,
                    activeTeamTitle: false,
                    activeTeamList: false,
                    activeMediaTitle: false,
                    activeMediaList: false,
                    activeAipxTitle: false,
                    activeAipxContent: false,
                    activeAipxText: false,
                    activeCoinAllocation: false,
                    activeLanBtn: false,
                    activeMnav: false,
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
    }

    _handleSectionMove = (num) => {
        this.setState({
            activeNav: num,
            activeMnav: false
        });
        let offset = $("#section" + num);
        let offsetTop = offset.offset();
        if(offset[0].id === "section4") {
            $('html, body').scrollTop(offsetTop.top - 240)
        } else {
            $('html, body').scrollTop(offsetTop.top - 80)
        }
    };

    _handleWhitePaperMove = (num) => {
        let offset = $("#section" + num);
        let offsetTop = offset.offset();
        $('html, body').scrollTop(offsetTop.top  - 80)
        this.setState({
            lanShow: false,
            activeMnav: false
        })
    };

    platFormContent1 = React.createRef();
    _handlePlatFormContent1Active = throttle(() => {
        if(!this.state.loader) {
            const rect = this.platFormContent1.current.getBoundingClientRect();
            const { top, bottom, height } = rect;
            if (top < window.innerHeight && bottom >= 0 && top > -1 * height) {
                this.setState({
                    activePlatFormContent1: true
                });
            }
        }
    }, 200);

    platFormContent2 = React.createRef();
    _handlePlatFormContent2Active = throttle(() => {
        if(!this.state.loader) {
            const rect = this.platFormContent2.current.getBoundingClientRect();
            const { top, bottom, height } = rect;
            if (top < window.innerHeight && bottom >= 0 && top > -1 * height) {
                this.setState({
                    activePlatFormContent2: true
                });
            }
        }
    }, 200);

    platFormContent3 = React.createRef();
    _handlePlatFormContent3Active = throttle(() => {
        if(!this.state.loader) {
            const rect = this.platFormContent3.current.getBoundingClientRect();
            const { top, bottom, height } = rect;
            if (top < window.innerHeight && bottom >= 0 && top > -1 * height) {
                this.setState({
                    activePlatFormContent3: true
                });
            }
        }
    }, 200);

    platFormContent4 = React.createRef();
    _handlePlatFormContent4Active = throttle(() => {
        if(!this.state.loader) {
            const rect = this.platFormContent4.current.getBoundingClientRect();
            const { top, bottom, height } = rect;
            if (top < window.innerHeight && bottom >= 0 && top > -1 * height) {
                this.setState({
                    activePlatFormContent4: true
                });
            }
        }
    }, 200);

    platFormContent5 = React.createRef();
    _handlePlatFormContent5Active = throttle(() => {
        if(!this.state.loader) {
            const rect = this.platFormContent5.current.getBoundingClientRect();
            const { top, bottom, height } = rect;
            if (top < window.innerHeight && bottom >= 0 && top > -1 * height) {
                this.setState({
                    activePlatFormContent5: true
                });
            }
        }
    }, 200);

    effectTitle = React.createRef();
    _handleEffectTitleActive = throttle(() => {
        if(!this.state.loader) {
            const rect = this.effectTitle.current.getBoundingClientRect();
            const { top, bottom, height } = rect;
            if (top - 150 < window.innerHeight && bottom >= 0 && top > -1 * height) {
                this.setState({
                    activeEffectTitle: true
                });
            }
        }
    }, 200);

    roadmapTitle = React.createRef();
    _handleRoadmapTitleActive = throttle(() => {
        if(!this.state.loader) {
            const rect = this.roadmapTitle.current.getBoundingClientRect();
            const { top, bottom, height } = rect;
            if (top - 150 < window.innerHeight && bottom >= 0 && top > -1 * height) {
                this.setState({
                    activeRoadmapTitle: true
                });
            }
        }
    }, 200);

    roadmapContent = React.createRef();
    _handleRoadmapContentActive = throttle(() => {
        if(!this.state.loader) {
            const rect = this.roadmapContent.current.getBoundingClientRect();
            const { top, bottom, height } = rect;
            if (top - 150 < window.innerHeight && bottom >= 0 && top > -1 * height) {
                this.setState({
                    activeRoadmapContent: true
                });
            }
        }
    }, 200);

    effectContent = React.createRef();
    _handleEffectContentActive = throttle(() => {
        if(!this.state.loader) {
            const rect = this.effectContent.current.getBoundingClientRect();
            const { top, bottom, height } = rect;
            if (top < window.innerHeight && bottom >= 0 && top > -1 * height) {
                console.log(1)
                this.setState({
                    activeEffectContent: true
                });
            }
        }
    }, 200);

    aipxTitle = React.createRef();
    _handleAipxTitleActive = throttle(() => {
        if(!this.state.loader) {
            const rect = this.aipxTitle.current.getBoundingClientRect();
            const { top, bottom, height } = rect;
            if (top + 100 < window.innerHeight && bottom >= 0 && top > -1 * height) {
                this.setState({
                    activeAipxTitle: true
                });
            }
        }
    }, 200);

    aipxContent = React.createRef();
    _handleAipxContentActive = throttle(() => {
        if(!this.state.loader) {
            const rect = this.aipxContent.current.getBoundingClientRect();
            const { top, bottom, height } = rect;
            if (top < window.innerHeight && bottom >= 0 && top > -1 * height) {
                this.setState({
                    activeAipxContent: true
                });
            }
        }
    }, 200);

    aipxText = React.createRef();
    _handleAipxTextActive = throttle(() => {
        if(!this.state.loader) {
            const rect = this.aipxText.current.getBoundingClientRect();
            const { top, bottom, height } = rect;
            if (top < window.innerHeight && bottom >= 0 && top > -1 * height) {
                this.setState({
                    activeAipxText: true
                });
            }
        }
    }, 200);

    coinAllocation = React.createRef();
    _handleCoinAllocationActive = throttle(() => {
        if(!this.state.loader) {
            const rect = this.coinAllocation.current.getBoundingClientRect();
            const { top, bottom, height } = rect;
            if (top < window.innerHeight && bottom >= 0 && top > -1 * height) {
                this.setState({
                    activeCoinAllocation: true
                });
            }
        }
    }, 200);

    techniqueTitle = React.createRef();
    _handleTechniqueTitleActive = throttle(() => {
        if(!this.state.loader) {
            const rect = this.techniqueTitle.current.getBoundingClientRect();
            const { top, bottom, height } = rect;
            if (top < window.innerHeight && bottom >= 0 && top > -1 * height) {
                this.setState({
                    activeTechniqueTitle: true
                });
            }
        }
    }, 200);

    techniqueContent1 = React.createRef();
    _handleTechniqueContent1Active = throttle(() => {
        if(!this.state.loader) {
            const rect = this.techniqueContent1.current.getBoundingClientRect();
            const { top, bottom, height } = rect;
            if (top < window.innerHeight && bottom >= 0 && top > -1 * height) {
                this.setState({
                    activeTechniqueContent1: true
                });
            }
        }
    }, 200);

    techniqueContent2 = React.createRef();
    _handleTechniqueContent2Active = throttle(() => {
        if(!this.state.loader) {
            const rect = this.techniqueContent2.current.getBoundingClientRect();
            const { top, bottom, height } = rect;
            if (top < window.innerHeight && bottom >= 0 && top > -1 * height) {
                this.setState({
                    activeTechniqueContent2: true
                });
            }
        }
    }, 200);

    teamTitle = React.createRef();
    _handleTeamTitleActive = throttle(() => {
        if(!this.state.loader) {
            const rect = this.teamTitle.current.getBoundingClientRect();
            const { top, bottom, height } = rect;
            if (top < window.innerHeight && bottom >= 0 && top > -1 * height) {
                this.setState({
                    activeTeamTitle: true
                });
            }
        }
    }, 200);

    teamList = React.createRef();
    _handleTeamListActive = throttle(() => {
        if(!this.state.loader) {
            const rect = this.teamList.current.getBoundingClientRect();
            const { top, bottom, height } = rect;
            if (top < window.innerHeight && bottom >= 0 && top > -1 * height) {
                this.setState({
                    activeTeamList: true
                });
            }
        }
    }, 200);

    mediaTitle = React.createRef();
    _handleMediaTitleActive = throttle(() => {
        if(!this.state.loader) {
            const rect = this.mediaTitle.current.getBoundingClientRect();
            const { top, bottom, height } = rect;
            if (top < window.innerHeight && bottom >= 0 && top > -1 * height) {
                this.setState({
                    activeMediaTitle: true
                });
            }
        }
    }, 200);

    mediaList = React.createRef();
    _handleMediaListActive = throttle(() => {
        if(!this.state.loader) {
            const rect = this.mediaList.current.getBoundingClientRect();
            const { top, bottom, height } = rect;
            if (top < window.innerHeight && bottom >= 0 && top > -1 * height) {
                this.setState({
                    activeMediaList: true
                });
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