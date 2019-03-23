import React, { Component } from 'react';
import OnePage from '../presentational/OnePage';
import $ from 'jquery';

class OnePageAction extends Component {
    state = {
        activeNav: 1,
        lanShow: false,
        activeTitle: false,
        activeArticle1: false,
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

        window.addEventListener('scroll', this._handleTitleActive);
        window.addEventListener('scroll', this._handleArticleActive1);
        window.addEventListener('scroll', this._handleArticleActive2);
        window.addEventListener('scroll', this._handleArticleActive3);
    }

    render() {
        return (
            <OnePage
                {...this.state}
                nav={this.nav}
                lan={this.lan}
                title={this.title}
                article1={this.article1}
                article2={this.article2}
                article3={this.article3}
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

    title = React.createRef();
    _handleTitleActive = () => {
        if(!this.state.loader) {
            const rect = this.title.current.getBoundingClientRect();
            const { top, bottom, height } = rect;
            if (top < window.innerHeight && bottom >= 0 && top > -1 * height) {
                this.setState({
                    activeTitle: true
                });
            }
        }
    };

    article1 = React.createRef();
    _handleArticleActive1 = () => {
        if(!this.state.loader) {
            const rect = this.article1.current.getBoundingClientRect();
            const { top, bottom, height } = rect;
            if (top < window.innerHeight && bottom >= 0 && top > -1 * height) {
                this.setState({
                    activeArticle1: true
                });
            }
        }
    };

    article2 = React.createRef();
    _handleArticleActive2 = () => {
        if(!this.state.loader) {
            const rect = this.article2.current.getBoundingClientRect();
            const { top, bottom, height } = rect;
            if (top < window.innerHeight && bottom >= 0 && top > -1 * height) {
                this.setState({
                    activeArticle2: true
                });
            }
        }
    };

    article3 = React.createRef();
    _handleArticleActive3 = () => {
        if(!this.state.loader) {
            const rect = this.article3.current.getBoundingClientRect();
            const { top, bottom, height } = rect;
            if (top < window.innerHeight && bottom >= 0 && top > -1 * height) {
                this.setState({
                    activeArticle3: true
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