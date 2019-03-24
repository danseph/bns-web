import React, { Component } from 'react';
import OnePage from '../presentational/OnePage';
import $ from 'jquery';
import { throttle } from 'lodash';

class OnePageAction extends Component {
    state = {
        loader: true,
        activeNav: 1,
        lanShow: false,
        activePlatFormTitle: false,
        activePlatFormContent1: false,
        activePlatFormContent2: false,
        activePlatFormContent3: false,
        activePlatFormContent4: false,
        activePlatFormContent5: false,
        activeTechniqueTitle: false,
        activeTeamTitle: false,
        activeTeamList: false,
        activeMediaTitle: false,
        activeAipxTitle: false,
        activePaperTitle: false,
        activeLanBtn: false,
        typeFaq: 0,
        defaultLang: window.localStorage['trans'] || "ko",
    };

    nav = [
        {
            num: 1,
            text: 'About'
        },
        {
            num: 2,
            text: 'AIPE'
        },
        {
            num: 3,
            text: 'AIPX Coin'
        },
        {
            num: 4,
            text: 'Roadmap'
        },
        {
            num: 5,
            text: 'Team'
        },
        {
            num: 6,
            text: 'Media'
        },
        {
            num: 7,
            text: 'FAQ'
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

    team1 = [
        {
            name: 'name',
            position: 'position',
            className: 'img-box',
            className2: 'txt-box',
            image: 'ico_telegram.png',
            ref: 'ref'
        },
        {
            name: 'name',
            position: 'position',
            className: 'img-box',
            className2: 'txt-box',
            image: 'ico_telegram.png'
        },
        {
            name: 'name',
            position: 'position',
            className: 'img-box',
            className2: 'txt-box',
            image: 'ico_telegram.png'
        },
        {
            name: 'name',
            position: 'position',
            className: 'img-box',
            className2: 'txt-box',
            image: 'ico_telegram.png'
        },
        {
            name: 'name',
            position: 'position',
            className: 'img-box',
            className2: 'txt-box',
            image: 'ico_telegram.png',
            ref: 'ref'
        },
        {
            name: 'name',
            position: 'position',
            className: 'img-box',
            className2: 'txt-box',
            image: 'ico_telegram.png'
        },
        {
            name: 'name',
            position: 'position',
            className: 'img-box',
            className2: 'txt-box',
            image: 'ico_telegram.png'
        },
        {
            name: 'name',
            position: 'position',
            className: 'img-box',
            className2: 'txt-box',
            image: 'ico_telegram.png'
        },
    ];

    componentDidMount() {
        setTimeout(() => {
            return (
                this.setState({
                    loader: false,
                })
            )
        }, 800);

        window.addEventListener('scroll', this._handlePlatFormTitleActive);
        window.addEventListener('scroll', this._handlePlatFormContent1Active);
        window.addEventListener('scroll', this._handlePlatFormContent2Active);
        window.addEventListener('scroll', this._handlePlatFormContent3Active);
        window.addEventListener('scroll', this._handlePlatFormContent4Active);
        window.addEventListener('scroll', this._handlePlatFormContent5Active);
        window.addEventListener('scroll', this._handleTechniqueTitleActive);
        window.addEventListener('scroll', this._handleTeamTitleActive);
        window.addEventListener('scroll', this._handleTeamListActive);
        window.addEventListener('scroll', this._handleMediaTitleActive);
        window.addEventListener('scroll', this._handleAipxTitleActive);
        window.addEventListener('scroll', this._handlePaperTitleActive);
    }

    render() {
        return (
            <OnePage
                {...this.state}
                nav={this.nav}
                lan={this.lan}
                team1={this.team1}
                title={this.title}
                platFormTitle={this.platFormTitle}
                platFormContent1={this.platFormContent1}
                platFormContent2={this.platFormContent2}
                platFormContent3={this.platFormContent3}
                platFormContent4={this.platFormContent4}
                platFormContent5={this.platFormContent5}
                techniqueTitle={this.techniqueTitle}
                aipxTitle={this.aipxTitle}
                paperTitle={this.paperTitle}
                teamTitle={this.teamTitle}
                teamList={this.teamList}
                mediaTitle={this.mediaTitle}
                handleRefresh={this._handleRefresh}
                handleSectionMove={this._handleSectionMove}
                handleLanBtn={this._handleLanBtn}
                handleActiveFaq={this._handleActiveFaq}
                handleLanShow={this._handleLanShow}
                handleLanHide={this._handleLanHide}
                handleLanChoice={this._handleLanChoice}
                handleWhitePaperMove={this._handleWhitePaperMove}
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
                    activePlatFormTitle: false,
                    activePlatFormContent1: false,
                    activePlatFormContent2: false,
                    activePlatFormContent3: false,
                    activePlatFormContent4: false,
                    activePlatFormContent5: false,
                    activeTechniqueTitle: false,
                    activeTeamTitle: false,
                    activeMediaTitle: false,
                    activeAipxTitle: false,
                    activePaperTitle: false,
                    activeLanBtn: false,
                    typeFaq: 0,
                })
            )
        }, 800);
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
            loader: true
        })
        window.scrollTo(0, 0);
        setTimeout(() => {
            return (
                this.setState({
                    loader: false,
                    activeNav: 1,
                    lanShow: false,
                    activePlatFormTitle: false,
                    activePlatFormContent1: false,
                    activePlatFormContent2: false,
                    activePlatFormContent3: false,
                    activePlatFormContent4: false,
                    activePlatFormContent5: false,
                    activeTechniqueTitle: false,
                    activeTeamTitle: false,
                    activeMediaTitle: false,
                    activeAipxTitle: false,
                    activePaperTitle: false,
                    activeLanBtn: false,
                    typeFaq: 0,
                })
            )
        }, 800);
    }

    _handleSectionMove = (num) => {
        this.setState({
            activeNav: num
        });
        let offset = $("#section" + num);
        let offsetTop = offset.offset();
        if(offset[0].id === "section4") {
            $('html, body').scrollTop(offsetTop.top - 160)
        } else {
            $('html, body').scrollTop(offsetTop.top - 80)
        }
    };

    _handleWhitePaperMove = (num) => {
        let offset = $("#section" + num);
        let offsetTop = offset.offset();
        $('html, body').scrollTop(offsetTop.top  - 80)
        this.setState({
            lanShow: false
        })
    };

    platFormTitle = React.createRef();
    _handlePlatFormTitleActive = throttle(() => {
        if(!this.state.loader) {
            const rect = this.platFormTitle.current.getBoundingClientRect();
            const { top, bottom, height } = rect;
            if (top < window.innerHeight && bottom >= 0 && top > -1 * height) {
                this.setState({
                    activePlatFormTitle: true
                });
            }
        }
    }, 1000);

    platFormContent1 = React.createRef();
    _handlePlatFormContent1Active = throttle(() => {
        if(!this.state.loader) {
            const rect = this.platFormContent1.current.getBoundingClientRect();
            const { top, bottom, height } = rect;
            if (top + 100 < window.innerHeight && bottom >= 0 && top > -1 * height) {
                this.setState({
                    activePlatFormContent1: true
                });
            }
        }
    }, 1000);

    platFormContent2 = React.createRef();
    _handlePlatFormContent2Active = throttle(() => {
        if(!this.state.loader) {
            const rect = this.platFormContent2.current.getBoundingClientRect();
            const { top, bottom, height } = rect;
            if (top + 100 < window.innerHeight && bottom >= 0 && top > -1 * height) {
                this.setState({
                    activePlatFormContent2: true
                });
            }
        }
    }, 1000);

    platFormContent3 = React.createRef();
    _handlePlatFormContent3Active = throttle(() => {
        if(!this.state.loader) {
            const rect = this.platFormContent3.current.getBoundingClientRect();
            const { top, bottom, height } = rect;
            if (top + 100 < window.innerHeight && bottom >= 0 && top > -1 * height) {
                this.setState({
                    activePlatFormContent3: true
                });
            }
        }
    }, 1000);

    platFormContent4 = React.createRef();
    _handlePlatFormContent4Active = throttle(() => {
        if(!this.state.loader) {
            const rect = this.platFormContent4.current.getBoundingClientRect();
            const { top, bottom, height } = rect;
            if (top + 100 < window.innerHeight && bottom >= 0 && top > -1 * height) {
                this.setState({
                    activePlatFormContent4: true
                });
            }
        }
    }, 1000);

    platFormContent5 = React.createRef();
    _handlePlatFormContent5Active = throttle(() => {
        if(!this.state.loader) {
            const rect = this.platFormContent5.current.getBoundingClientRect();
            const { top, bottom, height } = rect;
            if (top + 100 < window.innerHeight && bottom >= 0 && top > -1 * height) {
                this.setState({
                    activePlatFormContent5: true
                });
            }
        }
    }, 1000);

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
    }, 1000);

    techniqueTitle = React.createRef();
    _handleTechniqueTitleActive = throttle(() => {
        if(!this.state.loader) {
            const rect = this.techniqueTitle.current.getBoundingClientRect();
            const { top, bottom, height } = rect;
            if (top + 100 < window.innerHeight && bottom >= 0 && top > -1 * height) {
                this.setState({
                    activeTechniqueTitle: true
                });
            }
        }
    }, 1000);

    paperTitle = React.createRef();
    _handlePaperTitleActive = throttle(() => {
        if(!this.state.loader) {
            const rect = this.paperTitle.current.getBoundingClientRect();
            const { top, bottom, height } = rect;
            if (top + 100 < window.innerHeight && bottom >= 0 && top > -1 * height) {
                this.setState({
                    activePaperTitle: true
                });
            }
        }
    }, 1000);

    teamTitle = React.createRef();
    _handleTeamTitleActive = throttle(() => {
        if(!this.state.loader) {
            const rect = this.teamTitle.current.getBoundingClientRect();
            const { top, bottom, height } = rect;
            if (top + 100 < window.innerHeight && bottom >= 0 && top > -1 * height) {
                this.setState({
                    activeTeamTitle: true
                });
            }
        }
    }, 1000);

    teamList = React.createRef();
    _handleTeamListActive = throttle(() => {
        if(!this.state.loader) {
            const rect = this.teamList.current.getBoundingClientRect();
            const { top, bottom, height } = rect;
            if (top + 100 < window.innerHeight && bottom >= 0 && top > -1 * height) {
                this.setState({
                    activeTeamList: true
                });
            }
        }
    }, 1000);

    mediaTitle = React.createRef();
    _handleMediaTitleActive = throttle(() => {
        if(!this.state.loader) {
            const rect = this.mediaTitle.current.getBoundingClientRect();
            const { top, bottom, height } = rect;
            if (top + 100 < window.innerHeight && bottom >= 0 && top > -1 * height) {
                this.setState({
                    activeMediaTitle: true
                });
            }
        }
    }, 1000);

    _handleActiveFaq= (type) => {
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
}

export default OnePageAction;