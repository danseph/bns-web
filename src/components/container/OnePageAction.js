import React, { Component } from 'react';
import OnePage from '../presentational/OnePage';
import $ from 'jquery';

class OnePageAction extends Component {
    state = {
        activeNav: 1,
        lanShow: false,
        activePlatFormTitle: false,
        activePlatFormContent1: false,
        activePlatFormContent2: false,
        activePlatFormContent3: false,
        activePlatFormContent4: false,
        activePlatFormContent5: false,
        activeArticle2: false,
        activeArticle3: false,
        activeLanBtn: false,
        typeFaq: 0,
        loader: true,
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
    }

    render() {
        return (
            <OnePage
                {...this.state}
                nav={this.nav}
                lan={this.lan}
                title={this.title}
                platFormTitle={this.platFormTitle}
                platFormContent1={this.platFormContent1}
                platFormContent2={this.platFormContent2}
                platFormContent3={this.platFormContent3}
                platFormContent4={this.platFormContent4}
                platFormContent5={this.platFormContent5}
                handleRefresh={this._handleRefresh}
                handleSectionMove={this._handleSectionMove}
                handleLanBtn={this._handleLanBtn}
                handleAccordion={this._handleAccordion}
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
                    activePlatFormTitle: false,
                    activePlatFormContent1: false,
                    activePlatFormContent2: false,
                    activePlatFormContent3: false,
                    activePlatFormContent4: false,
                    activePlatFormContent5: false,
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
    }

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
                    lanShow: false,
                    activeNav: 1,
                    activePlatFormTitle: false,
                    activePlatFormContent1: false,
                    activePlatFormContent2: false,
                    activePlatFormContent3: false,
                    activePlatFormContent4: false,
                    activePlatFormContent5: false,
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
    _handlePlatFormTitleActive = () => {
        if(!this.state.loader) {
            const rect = this.platFormTitle.current.getBoundingClientRect();
            const { top, bottom, height } = rect;
            if (top < window.innerHeight && bottom >= 0 && top > -1 * height) {
                this.setState({
                    activePlatFormTitle: true
                });
            }
        }
    };

    platFormContent1 = React.createRef();
    _handlePlatFormContent1Active = () => {
        if(!this.state.loader) {
            const rect = this.platFormContent1.current.getBoundingClientRect();
            const { top, bottom, height } = rect;
            if (top + 100 < window.innerHeight && bottom >= 0 && top > -1 * height) {
                this.setState({
                    activePlatFormContent1: true
                });
            }
        }
    };

    platFormContent2 = React.createRef();
    _handlePlatFormContent2Active = () => {
        if(!this.state.loader) {
            const rect = this.platFormContent2.current.getBoundingClientRect();
            const { top, bottom, height } = rect;
            if (top + 100 < window.innerHeight && bottom >= 0 && top > -1 * height) {
                this.setState({
                    activePlatFormContent2: true
                });
            }
        }
    };

    platFormContent3 = React.createRef();
    _handlePlatFormContent3Active = () => {
        if(!this.state.loader) {
            const rect = this.platFormContent3.current.getBoundingClientRect();
            const { top, bottom, height } = rect;
            if (top + 100 < window.innerHeight && bottom >= 0 && top > -1 * height) {
                this.setState({
                    activePlatFormContent3: true
                });
            }
        }
    };

    platFormContent4 = React.createRef();
    _handlePlatFormContent4Active = () => {
        if(!this.state.loader) {
            const rect = this.platFormContent4.current.getBoundingClientRect();
            const { top, bottom, height } = rect;
            if (top + 100 < window.innerHeight && bottom >= 0 && top > -1 * height) {
                this.setState({
                    activePlatFormContent4: true
                });
            }
        }
    };

    platFormContent5 = React.createRef();
    _handlePlatFormContent5Active = () => {
        if(!this.state.loader) {
            const rect = this.platFormContent5.current.getBoundingClientRect();
            const { top, bottom, height } = rect;
            if (top + 100 < window.innerHeight && bottom >= 0 && top > -1 * height) {
                this.setState({
                    activePlatFormContent5: true
                });
            }
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
    }

    _handleAccordion = (type) => {
        if(this.state.typeFaq === type) {
            this.setState({
                typeFaq: 0,
            })
        } else {
            this.setState({
                typeFaq: type,
            })
        }
    }
}

export default OnePageAction;