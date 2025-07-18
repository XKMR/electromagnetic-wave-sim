/* 
 CanvasJS Chart - v3.13.0 GA - https://canvasjs.com/ 
 Copyright 2025 fenopix

 --------------------- License Information --------------------
 CanvasJS Chart is a commercial product which requires purchase of license. Without a commercial license you can use it for evaluation purposes for upto 30 days. Please refer to the following link for further details.
 https://canvasjs.com/license/


 ---------------------Free for Non-Commercial Use--------------------
 
 For non-commercial purposes you can use the software for free under Creative Commons Attribution-NonCommercial 3.0 License.
 A credit Link is added to the chart which should be preserved. Refer to the following link for further details on the same.
 https://creativecommons.org/licenses/by-nc/3.0/deed.en_US
 */

/*tslint:disable*/
/*eslint-disable*/
/*jshint ignore:start*/
(function() {
    function qa(h, n) {
        h.prototype = eb(n.prototype);
        h.prototype.constructor = h;
        h.base = n.prototype
    }
    function eb(h) {
        function n() {}
        n.prototype = h;
        return new n
    }
    function Sa(h, n, U) {
        "millisecond" === U ? h.setMilliseconds(h.getMilliseconds() + 1 * n) : "second" === U ? h.setSeconds(h.getSeconds() + 1 * n) : "minute" === U ? h.setMinutes(h.getMinutes() + 1 * n) : "hour" === U ? h.setHours(h.getHours() + 1 * n) : "day" === U ? h.setDate(h.getDate() + 1 * n) : "week" === U ? h.setDate(h.getDate() + 7 * n) : "month" === U ? h.setMonth(h.getMonth() + 1 * n) : "year" === U && h.setFullYear(h.getFullYear() + 1 * n);
        return h
    }
    function ha(h, n) {
        var U = !1;
        0 > h && (U = !0,
        h *= -1);
        h = "" + h;
        for (n = n ? n : 1; h.length < n; )
            h = "0" + h;
        return U ? "-" + h : h
    }
    function Ga(h) {
        if (!h)
            return h;
        h = h.replace(/^\s\s*/, "");
        for (var n = /\s/, U = h.length; n.test(h.charAt(--U)); )
            ;
        return h.slice(0, U + 1)
    }
    function za(h) {
        h.roundRect = function(h, U, l, s, pa, A, u, C) {
            u && (this.fillStyle = u);
            C && (this.strokeStyle = C);
            "undefined" === typeof pa && (pa = 5);
            pa = Math.min(pa, Math.min(l, s) / 2);
            this.lineWidth = A;
            this.beginPath();
            this.moveTo(h + pa, U);
            this.lineTo(h + l - pa, U);
            this.quadraticCurveTo(h + l, U, h + l, U + pa);
            this.lineTo(h + l, U + s - pa);
            this.quadraticCurveTo(h + l, U + s, h + l - pa, U + s);
            this.lineTo(h + pa, U + s);
            this.quadraticCurveTo(h, U + s, h, U + s - pa);
            this.lineTo(h, U + pa);
            this.quadraticCurveTo(h, U, h + pa, U);
            this.closePath();
            u && this.fill();
            C && 0 < A && this.stroke()
        }
    }
    function Ta(h, n) {
        return h - n
    }
    function R(h) {
        var n = ((h & 16711680) >> 16).toString(16)
          , U = ((h & 65280) >> 8).toString(16);
        h = ((h & 255) >> 0).toString(16);
        n = 2 > n.length ? "0" + n : n;
        U = 2 > U.length ? "0" + U : U;
        h = 2 > h.length ? "0" + h : h;
        return "#" + n + U + h
    }
    function fb(h, n) {
        var U = this.length >>> 0
          , l = Number(n) || 0
          , l = 0 > l ? Math.ceil(l) : Math.floor(l);
        for (0 > l && (l += U); l < U; l++)
            if (l in this && this[l] === h)
                return l;
        return -1
    }
    function l(h) {
        return null === h || "undefined" === typeof h
    }
    function Da(h) {
        h.indexOf || (h.indexOf = fb);
        return h
    }
    function gb(h) {
        if (va.fSDec)
            h[la("`eeDwdouMhrudods")](la("e`u`@ohl`uhnoHuds`uhnoDoe"), function() {
                va._fTWm && va._fTWm(h)
            })
    }
    function Za(h, n, l) {
        l = l || "normal";
        var s = h + "_" + n + "_" + l
          , X = $a[s];
        if (isNaN(X)) {
            try {
                if (!sa) {
                    var pa = document.body;
                    sa = document.createElement("span");
                    sa.innerHTML = "";
                    var A = document.createTextNode("Mpgyi");
                    sa.appendChild(A);
                    pa.appendChild(sa)
                }
                sa.style.display = "";
                S(sa, {
                    position: "absolute",
                    left: "0px",
                    top: "-20000px",
                    padding: "0px",
                    margin: "0px",
                    border: "none",
                    whiteSpace: "pre",
                    lineHeight: "normal",
                    fontFamily: h,
                    fontSize: n + "px",
                    fontWeight: l
                });
                X = Math.round(sa.offsetHeight);
                sa.style.display = "none"
            } catch (u) {
                X = Math.ceil(1.1 * n)
            }
            X = Math.max(X, n);
            $a[s] = X
        }
        return X
    }
    function J(h, n) {
        var l = [];
        if (l = {
            solid: [],
            shortDash: [3, 1],
            shortDot: [1, 1],
            shortDashDot: [3, 1, 1, 1],
            shortDashDotDot: [3, 1, 1, 1, 1, 1],
            dot: [1, 2],
            dash: [4, 2],
            dashDot: [4, 2, 1, 2],
            longDash: [8, 2],
            longDashDot: [8, 2, 1, 2],
            longDashDotDot: [8, 2, 1, 2, 1, 2]
        }[h || "solid"])
            for (var s = 0; s < l.length; s++)
                l[s] *= n;
        else
            l = [];
        return l
    }
    function V(h, n, U, s, X) {
        s = s || [];
        X = l(X) ? hb ? {
            passive: !1,
            capture: !1
        } : !1 : X;
        s.push([h, n, U, X]);
        return h.addEventListener ? (h.addEventListener(n, U, X),
        U) : h.attachEvent ? (s = function(n) {
            n = n || window.event;
            n.preventDefault = n.preventDefault || function() {
                n.returnValue = !1
            }
            ;
            n.stopPropagation = n.stopPropagation || function() {
                n.cancelBubble = !0
            }
            ;
            U.call(h, n)
        }
        ,
        h.attachEvent("on" + n, s),
        s) : !1
    }
    function ib(h) {
        if (h._menuButton)
            h.exportEnabled ? (S(h._menuButton, {
                backgroundColor: h.toolbar.itemBackgroundColor,
                color: h.toolbar.fontColor
            }),
            La(h._menuButton),
            ta(h, h._menuButton, "menu"),
            0 >= navigator.userAgent.search("MSIE") && h._menuButton.childNodes[0] && S(h._menuButton.childNodes[0], {
                WebkitFilter: "invert(0%)",
                filter: "invert(0%)"
            })) : wa(h._menuButton);
        else if (h.exportEnabled && s) {
            var n = !1;
            h._menuButton = document.createElement("button");
            ta(h, h._menuButton, "menu");
            h._toolBar.appendChild(h._menuButton);
            V(h._menuButton, "touchstart", function(h) {
                n = !0
            }, h.allDOMEventHandlers);
            V(h._menuButton, "click", function() {
                "none" !== h._dropdownMenu.style.display || h._dropDownCloseTime && 500 >= (new Date).getTime() - h._dropDownCloseTime.getTime() || (h._dropdownMenu.style.display = "block",
                h._menuButton.blur(),
                h._dropdownMenu.focus())
            }, h.allDOMEventHandlers, !0);
            V(h._menuButton, "mousemove", function() {
                n || (S(h._menuButton, {
                    backgroundColor: h.toolbar.itemBackgroundColorOnHover,
                    color: h.toolbar.fontColorOnHover
                }),
                0 >= navigator.userAgent.search("MSIE") && S(h._menuButton.childNodes[0], {
                    WebkitFilter: "invert(100%)",
                    filter: "invert(100%)"
                }))
            }, h.allDOMEventHandlers, !0);
            V(h._menuButton, "mouseout", function() {
                n || (S(h._menuButton, {
                    backgroundColor: h.toolbar.itemBackgroundColor,
                    color: h.toolbar.fontColor
                }),
                0 >= navigator.userAgent.search("MSIE") && S(h._menuButton.childNodes[0], {
                    WebkitFilter: "invert(0%)",
                    filter: "invert(0%)"
                }))
            }, h.allDOMEventHandlers, !0)
        }
        if (h.exportEnabled && h._dropdownMenu) {
            var l = h.theme && -1 !== h.theme.indexOf("dark") ? "black" : "#888888";
            S(h._dropdownMenu, {
                backgroundColor: h.toolbar.itemBackgroundColor,
                color: h.toolbar.fontColor,
                boxShadow: "2px 2px 10px " + l
            });
            for (var l = h._dropdownMenu.childNodes, H = [h._cultureInfo.printText, h._cultureInfo.saveJPGText, h._cultureInfo.savePNGText], X = 0; X < H.length; X++)
                S(l[X], {
                    backgroundColor: h.toolbar.itemBackgroundColor,
                    color: h.toolbar.fontColor
                }),
                l[X].innerHTML = H[X]
        } else
            !h._dropdownMenu && (h.exportEnabled && s) && (n = !1,
            h._dropdownMenu = document.createElement("div"),
            h._dropdownMenu.setAttribute("tabindex", -1),
            l = h.theme && -1 !== h.theme.indexOf("dark") ? "black" : "#888888",
            S(h._dropdownMenu, {
                position: "absolute",
                zIndex: 1,
                userSelect: "none",
                MozUserSeelct: "none",
                WebkitUserSelect: "none",
                msUserSelect: "none",
                cursor: "pointer",
                right: "0px",
                top: "25px",
                minWidth: "120px",
                outline: 0,
                fontSize: "14px",
                fontFamily: "Arial, Helvetica, sans-serif",
                padding: "5px 0px 5px 0px",
                textAlign: "left",
                lineHeight: "10px",
                backgroundColor: h.toolbar.itemBackgroundColor,
                boxShadow: "2px 2px 10px " + l
            }),
            h._dropdownMenu.style.display = "none",
            h._toolBar.appendChild(h._dropdownMenu),
            V(h._dropdownMenu, "blur", function() {
                wa(h._dropdownMenu);
                h._dropDownCloseTime = new Date
            }, h.allDOMEventHandlers, !0),
            l = document.createElement("div"),
            S(l, {
                padding: "12px 8px 12px 8px"
            }),
            l.innerHTML = h._cultureInfo.printText,
            l.style.backgroundColor = h.toolbar.itemBackgroundColor,
            l.style.color = h.toolbar.fontColor,
            h._dropdownMenu.appendChild(l),
            V(l, "touchstart", function(h) {
                n = !0
            }, h.allDOMEventHandlers),
            V(l, "mousemove", function() {
                n || (this.style.backgroundColor = h.toolbar.itemBackgroundColorOnHover,
                this.style.color = h.toolbar.fontColorOnHover)
            }, h.allDOMEventHandlers, !0),
            V(l, "mouseout", function() {
                n || (this.style.backgroundColor = h.toolbar.itemBackgroundColor,
                this.style.color = h.toolbar.fontColor)
            }, h.allDOMEventHandlers, !0),
            V(l, "click", function() {
                h.print();
                wa(h._dropdownMenu)
            }, h.allDOMEventHandlers, !0),
            l = document.createElement("div"),
            S(l, {
                padding: "12px 8px 12px 8px"
            }),
            l.innerHTML = h._cultureInfo.saveJPGText,
            l.style.backgroundColor = h.toolbar.itemBackgroundColor,
            l.style.color = h.toolbar.fontColor,
            h._dropdownMenu.appendChild(l),
            V(l, "touchstart", function(h) {
                n = !0
            }, h.allDOMEventHandlers),
            V(l, "mousemove", function() {
                n || (this.style.backgroundColor = h.toolbar.itemBackgroundColorOnHover,
                this.style.color = h.toolbar.fontColorOnHover)
            }, h.allDOMEventHandlers, !0),
            V(l, "mouseout", function() {
                n || (this.style.backgroundColor = h.toolbar.itemBackgroundColor,
                this.style.color = h.toolbar.fontColor)
            }, h.allDOMEventHandlers, !0),
            V(l, "click", function() {
                h.exportChart({
                    format: "jpeg",
                    fileName: h.exportFileName
                });
                wa(h._dropdownMenu)
            }, h.allDOMEventHandlers, !0),
            l = document.createElement("div"),
            S(l, {
                padding: "12px 8px 12px 8px"
            }),
            l.innerHTML = h._cultureInfo.savePNGText,
            l.style.backgroundColor = h.toolbar.itemBackgroundColor,
            l.style.color = h.toolbar.fontColor,
            h._dropdownMenu.appendChild(l),
            V(l, "touchstart", function(h) {
                n = !0
            }, h.allDOMEventHandlers),
            V(l, "mousemove", function() {
                n || (this.style.backgroundColor = h.toolbar.itemBackgroundColorOnHover,
                this.style.color = h.toolbar.fontColorOnHover)
            }, h.allDOMEventHandlers, !0),
            V(l, "mouseout", function() {
                n || (this.style.backgroundColor = h.toolbar.itemBackgroundColor,
                this.style.color = h.toolbar.fontColor)
            }, h.allDOMEventHandlers, !0),
            V(l, "click", function() {
                h.exportChart({
                    format: "png",
                    fileName: h.exportFileName
                });
                wa(h._dropdownMenu)
            }, h.allDOMEventHandlers, !0))
    }
    function ab(h, n, l) {
        h *= ma;
        n *= ma;
        h = l.getImageData(h, n, 2, 2).data;
        n = !0;
        for (l = 0; 4 > l; l++)
            if (h[l] !== h[l + 4] | h[l] !== h[l + 8] | h[l] !== h[l + 12]) {
                n = !1;
                break
            }
        return n ? h[0] << 16 | h[1] << 8 | h[2] : 0
    }
    function ka(h, n, l) {
        return h in n ? n[h] : l[h]
    }
    function Ma(h, n, U, H) {
        s && bb ? (H = !l(H) && H ? h.getContext("2d", {
            willReadFrequently: !0
        }) : h.getContext("2d"),
        Na = H.webkitBackingStorePixelRatio || H.mozBackingStorePixelRatio || H.msBackingStorePixelRatio || H.oBackingStorePixelRatio || H.backingStorePixelRatio || 1,
        ma = Ua / Na,
        h.width = n * ma,
        h.height = U * ma,
        Ua !== Na && (h.style.width = n + "px",
        h.style.height = U + "px",
        H.scale(ma, ma))) : (h.width = n,
        h.height = U)
    }
    function jb(h) {
        if (!kb) {
            var n = !1
              , l = !1;
            "undefined" === typeof ra.Chart.creditHref ? (h.creditHref = la("iuuqr;..b`ow`rkr/bnl."),
            h.creditText = la("B`ow`rKR/bnl")) : (n = h.updateOption("creditText"),
            l = h.updateOption("creditHref"));
            if (h.creditHref && h.creditText) {
                h._creditLink || (h._creditLink = document.createElement("a"),
                h._creditLink.setAttribute("class", "canvasjs-chart-credit"),
                h._creditLink.setAttribute("title", "JavaScript Charts"),
                S(h._creditLink, {
                    outline: "none",
                    margin: "0px",
                    position: "absolute",
                    right: "2px",
                    top: h.height - 14 + "px",
                    color: "dimgrey",
                    textDecoration: "none",
                    fontSize: "11px",
                    fontFamily: "Calibri, Lucida Grande, Lucida Sans Unicode, Arial, sans-serif"
                }),
                h._creditLink.setAttribute("tabIndex", -1),
                h._creditLink.setAttribute("target", "_blank"));
                if (0 === h.renderCount || n || l)
                    h._creditLink.setAttribute("href", h.creditHref),
                    h._creditLink.innerHTML = h.creditText;
                h._creditLink && h.creditHref && h.creditText ? (h._creditLink.parentElement || h._canvasJSContainer.appendChild(h._creditLink),
                h._creditLink.style.top = h.height - 14 + "px") : h._creditLink.parentElement && h._canvasJSContainer.removeChild(h._creditLink)
            }
        }
    }
    function ua(h, n, l) {
        Ha && (this.canvasCount |= 0,
        window.console.log(++this.canvasCount));
        var H = document.createElement("canvas");
        H.setAttribute("class", "canvasjs-chart-canvas");
        Ma(H, h, n, l);
        s || "undefined" === typeof G_vmlCanvasManager || G_vmlCanvasManager.initElement(H);
        return H
    }
    function S(h, n) {
        for (var l in n)
            h.style[l] = n[l]
    }
    function cb(h) {
        return h.currentStyle ? h.currentStyle : window && window.getComputedStyle ? window.getComputedStyle(h, null) : h.style
    }
    function ta(h, n, l) {
        n.getAttribute("state") || (n.style.backgroundColor = h.toolbar.itemBackgroundColor,
        n.style.color = h.toolbar.fontColor,
        n.style.border = "none",
        S(n, {
            WebkitUserSelect: "none",
            MozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none"
        }));
        n.getAttribute("state") !== l && (n.setAttribute("state", l),
        n.setAttribute("type", "button"),
        S(n, {
            padding: "5px 12px",
            cursor: "pointer",
            "float": "left",
            width: "40px",
            height: "25px",
            outline: "0px",
            verticalAlign: "baseline",
            lineHeight: "0"
        }),
        n.innerHTML = "<img src='" + lb[l].image + "' alt='" + h._cultureInfo[l + "Text"] + "' />",
        S(n.childNodes[0], {
            height: "95%",
            pointerEvents: "none"
        }));
        n.setAttribute("title", h._cultureInfo[l + "Text"])
    }
    function La() {
        for (var h = null, n = 0; n < arguments.length; n++)
            h = arguments[n],
            h.style && (h.style.display = "inline")
    }
    function wa() {
        for (var h = null, n = 0; n < arguments.length; n++)
            (h = arguments[n]) && h.style && (h.style.display = "none")
    }
    function Va(h, n, l, s, X) {
        if (null === h || "undefined" === typeof h)
            return "undefined" === typeof l ? n : l;
        h = parseFloat(h.toString()) * (0 <= h.toString().indexOf("%") ? n / 100 : 1);
        "undefined" !== typeof s && (h = Math.min(s, h),
        "undefined" !== typeof X && (h = Math.max(X, h)));
        return !isNaN(h) && h <= n && 0 <= h ? h : "undefined" === typeof l ? n : l
    }
    function P(h, n, s, H, X) {
        this._defaultsKey = h;
        this._themeOptionsKey = n;
        this._index = H;
        this.parent = X;
        this._eventListeners = [];
        h = {};
        this.theme && l(this.parent) && l(n) && l(H) ? h = l(this.predefinedThemes[this.theme]) ? this.predefinedThemes.light1 : this.predefinedThemes[this.theme] : this.parent && (this.parent.themeOptions && this.parent.themeOptions[n]) && (null === H ? h = this.parent.themeOptions[n] : 0 < this.parent.themeOptions[n].length && (H = Math.min(this.parent.themeOptions[n].length - 1, H),
        h = this.parent.themeOptions[n][H]));
        this.themeOptions = h;
        this.options = s ? s : {
            _isPlaceholder: !0
        };
        this.setOptions(this.options, h)
    }
    function Ea(h, n, l, s, X) {
        "undefined" === typeof X && (X = 0);
        this._padding = X;
        this._x1 = h;
        this._y1 = n;
        this._x2 = l;
        this._y2 = s;
        this._rightOccupied = this._leftOccupied = this._bottomOccupied = this._topOccupied = this._padding
    }
    function ja(h, n) {
        ja.base.constructor.call(this, "TextBlock", null, n, null, null);
        this.ctx = h;
        this._isDirty = !0;
        this._wrappedText = null;
        this._initialize()
    }
    function Wa(h, n) {
        Wa.base.constructor.call(this, "Toolbar", "toolbar", n, null, h);
        this.chart = h;
        this.canvas = h.canvas;
        this.ctx = this.chart.ctx;
        this.optionsName = "toolbar"
    }
    function Aa(h, n) {
        Aa.base.constructor.call(this, "Title", "title", n, null, h);
        this.chart = h;
        this.canvas = h.canvas;
        this.ctx = this.chart.ctx;
        this.optionsName = "title";
        if (l(this.options.margin) && h.options.subtitles)
            for (var s = h.options.subtitles, H = 0; H < s.length; H++)
                if ((l(s[H].horizontalAlign) && "center" === this.horizontalAlign || s[H].horizontalAlign === this.horizontalAlign) && (l(s[H].verticalAlign) && "top" === this.verticalAlign || s[H].verticalAlign === this.verticalAlign) && !s[H].dockInsidePlotArea === !this.dockInsidePlotArea) {
                    this.margin = 0;
                    break
                }
        "undefined" === typeof this.options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
        this.height = this.width = null;
        this.bounds = {
            x1: null,
            y1: null,
            x2: null,
            y2: null
        }
    }
    function Ia(h, n, l) {
        Ia.base.constructor.call(this, "Subtitle", "subtitles", n, l, h);
        this.chart = h;
        this.canvas = h.canvas;
        this.ctx = this.chart.ctx;
        this.optionsName = "subtitles";
        this.isOptionsInArray = !0;
        "undefined" === typeof this.options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
        this.height = this.width = null;
        this.bounds = {
            x1: null,
            y1: null,
            x2: null,
            y2: null
        }
    }
    function Xa() {
        this.pool = []
    }
    function Ja(h) {
        var n;
        h && Ka[h] && (n = Ka[h]);
        Ja.base.constructor.call(this, "CultureInfo", null, n, null, null)
    }
    var Ha = !1, va = {}, s = !!document.createElement("canvas").getContext, ra = {
        Chart: {
            width: 500,
            height: 400,
            zoomEnabled: !1,
            zoomType: "x",
            backgroundColor: "white",
            theme: "light1",
            animationEnabled: !1,
            animationDuration: 1200,
            dataPointWidth: null,
            dataPointMinWidth: null,
            dataPointMaxWidth: null,
            colorSet: "colorSet1",
            culture: "en",
            creditHref: "",
            creditText: "CanvasJS",
            interactivityEnabled: !0,
            exportEnabled: !1,
            exportFileName: "Chart",
            rangeChanging: null,
            rangeChanged: null,
            publicProperties: {
                title: "readWrite",
                subtitles: "readWrite",
                toolbar: "readWrite",
                toolTip: "readWrite",
                legend: "readWrite",
                axisX: "readWrite",
                axisY: "readWrite",
                axisX2: "readWrite",
                axisY2: "readWrite",
                data: "readWrite",
                options: "readWrite",
                bounds: "readOnly",
                container: "readOnly",
                selectedColorSet: "readOnly"
            }
        },
        Title: {
            padding: 0,
            text: null,
            verticalAlign: "top",
            horizontalAlign: "center",
            fontSize: 20,
            fontFamily: "Calibri",
            fontWeight: "normal",
            fontColor: "black",
            fontStyle: "normal",
            borderThickness: 0,
            borderColor: "black",
            cornerRadius: 0,
            backgroundColor: s ? "transparent" : null,
            margin: 5,
            wrap: !0,
            maxWidth: null,
            textAlign: "center",
            dockInsidePlotArea: !1,
            publicProperties: {
                options: "readWrite",
                bounds: "readOnly",
                chart: "readOnly"
            }
        },
        Subtitle: {
            padding: 0,
            text: null,
            verticalAlign: "top",
            horizontalAlign: "center",
            fontSize: 14,
            fontFamily: "Calibri",
            fontWeight: "normal",
            fontColor: "black",
            fontStyle: "normal",
            borderThickness: 0,
            borderColor: "black",
            cornerRadius: 0,
            backgroundColor: null,
            margin: 2,
            wrap: !0,
            maxWidth: null,
            textAlign: "center",
            dockInsidePlotArea: !1,
            publicProperties: {
                options: "readWrite",
                bounds: "readOnly",
                chart: "readOnly"
            }
        },
        Toolbar: {
            itemBackgroundColor: "white",
            itemBackgroundColorOnHover: "#2196f3",
            buttonBorderColor: "#2196f3",
            buttonBorderThickness: 1,
            fontColor: "black",
            fontColorOnHover: "white",
            publicProperties: {
                options: "readWrite",
                chart: "readOnly"
            }
        },
        Legend: {
            name: null,
            verticalAlign: "center",
            horizontalAlign: "right",
            fontSize: 14,
            fontFamily: "calibri",
            fontWeight: "normal",
            fontColor: "black",
            fontStyle: "normal",
            cursor: null,
            itemmouseover: null,
            itemmouseout: null,
            itemmousemove: null,
            itemclick: null,
            dockInsidePlotArea: !1,
            reversed: !1,
            backgroundColor: s ? "transparent" : null,
            borderColor: s ? "transparent" : null,
            borderThickness: 0,
            cornerRadius: 0,
            maxWidth: null,
            maxHeight: null,
            markerMargin: null,
            itemMaxWidth: null,
            itemWidth: null,
            itemWrap: !0,
            itemTextAlign: "left",
            itemTextFormatter: null,
            publicProperties: {
                options: "readWrite",
                bounds: "readOnly",
                chart: "readOnly"
            }
        },
        ToolTip: {
            enabled: !0,
            shared: !1,
            animationEnabled: !0,
            content: null,
            contentFormatter: null,
            reversed: !1,
            backgroundColor: s ? "rgba(255,255,255,.9)" : "rgb(255,255,255)",
            borderColor: null,
            borderThickness: 2,
            cornerRadius: 5,
            fontSize: 14,
            fontColor: "black",
            fontFamily: "Calibri, Arial, Georgia, serif;",
            fontWeight: "normal",
            fontStyle: "italic",
            updated: null,
            hidden: null,
            publicProperties: {
                options: "readWrite",
                chart: "readOnly"
            }
        },
        Axis: {
            minimum: null,
            maximum: null,
            viewportMinimum: null,
            viewportMaximum: null,
            interval: null,
            intervalType: null,
            reversed: !1,
            logarithmic: !1,
            logarithmBase: 10,
            title: null,
            titleFontColor: "black",
            titleFontSize: 20,
            titleFontFamily: "arial",
            titleFontWeight: "normal",
            titleFontStyle: "normal",
            titleWrap: !0,
            titleMaxWidth: null,
            titleBackgroundColor: s ? "transparent" : null,
            titleBorderColor: s ? "transparent" : null,
            titleBorderThickness: 0,
            titleCornerRadius: 0,
            titleTextAlign: "left",
            titlePadding: 0,
            labelAngle: 0,
            labelFontFamily: "arial",
            labelFontColor: "black",
            labelFontSize: 12,
            labelFontWeight: "normal",
            labelFontStyle: "normal",
            labelAutoFit: !0,
            labelWrap: !0,
            labelMaxWidth: null,
            labelFormatter: null,
            labelBackgroundColor: s ? "transparent" : null,
            labelBorderColor: s ? "transparent" : null,
            labelBorderThickness: 0,
            labelPadding: 0,
            labelCornerRadius: 0,
            labelPlacement: "outside",
            labelTextAlign: "left",
            prefix: "",
            suffix: "",
            includeZero: !1,
            tickLength: 5,
            tickColor: "black",
            tickThickness: 1,
            tickPlacement: "outside",
            lineColor: "black",
            lineThickness: 1,
            lineDashType: "solid",
            gridColor: "#A0A0A0",
            gridThickness: 0,
            gridDashType: "solid",
            interlacedColor: s ? "transparent" : null,
            valueFormatString: null,
            margin: 2,
            publicProperties: {
                options: "readWrite",
                stripLines: "readWrite",
                scaleBreaks: "readWrite",
                crosshair: "readWrite",
                bounds: "readOnly",
                chart: "readOnly"
            }
        },
        StripLine: {
            value: null,
            startValue: null,
            endValue: null,
            color: "orange",
            opacity: null,
            thickness: 2,
            lineDashType: "solid",
            label: "",
            labelPlacement: "inside",
            labelAlign: "far",
            labelWrap: !0,
            labelMaxWidth: null,
            labelBackgroundColor: null,
            labelBorderColor: s ? "transparent" : null,
            labelBorderThickness: 0,
            labelCornerRadius: 0,
            labelFontFamily: "arial",
            labelFontColor: "orange",
            labelFontSize: 12,
            labelFontWeight: "normal",
            labelFontStyle: "normal",
            labelFormatter: null,
            labelTextAlign: "left",
            labelPadding: 0,
            showOnTop: !1,
            publicProperties: {
                options: "readWrite",
                axis: "readOnly",
                bounds: "readOnly",
                chart: "readOnly"
            }
        },
        ScaleBreaks: {
            autoCalculate: !1,
            collapsibleThreshold: "25%",
            maxNumberOfAutoBreaks: 2,
            spacing: 8,
            type: "straight",
            color: "#FFFFFF",
            fillOpacity: 0.9,
            lineThickness: 2,
            lineColor: "#E16E6E",
            lineDashType: "solid",
            publicProperties: {
                options: "readWrite",
                customBreaks: "readWrite",
                axis: "readOnly",
                autoBreaks: "readOnly",
                bounds: "readOnly",
                chart: "readOnly"
            }
        },
        Break: {
            startValue: null,
            endValue: null,
            spacing: 8,
            type: "straight",
            color: "#FFFFFF",
            fillOpacity: 0.9,
            lineThickness: 2,
            lineColor: "#E16E6E",
            lineDashType: "solid",
            publicProperties: {
                options: "readWrite",
                scaleBreaks: "readOnly",
                bounds: "readOnly",
                chart: "readOnly"
            }
        },
        Crosshair: {
            enabled: !1,
            snapToDataPoint: !1,
            color: "grey",
            opacity: null,
            thickness: 2,
            lineDashType: "solid",
            label: "",
            labelWrap: !0,
            labelMaxWidth: null,
            labelTextAlign: "left",
            labelBackgroundColor: s ? "grey" : null,
            labelBorderColor: s ? "grey" : null,
            labelBorderThickness: 0,
            labelCornerRadius: 0,
            labelFontFamily: s ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
            labelFontSize: 12,
            labelPadding: {
                top: 2,
                right: 3,
                bottom: 2,
                left: 4
            },
            labelFontColor: "#fff",
            labelFontWeight: "normal",
            labelFontStyle: "normal",
            labelFormatter: null,
            valueFormatString: null,
            updated: null,
            hidden: null,
            publicProperties: {
                options: "readWrite",
                axis: "readOnly",
                bounds: "readOnly",
                chart: "readOnly"
            }
        },
        DataSeries: {
            name: null,
            dataPoints: null,
            label: "",
            bevelEnabled: !1,
            highlightEnabled: !0,
            cursor: "default",
            indexLabel: "",
            indexLabelPlacement: "auto",
            indexLabelOrientation: "horizontal",
            indexLabelTextAlign: "left",
            indexLabelFontColor: "black",
            indexLabelFontSize: 12,
            indexLabelFontStyle: "normal",
            indexLabelFontFamily: "Arial",
            indexLabelFontWeight: "normal",
            indexLabelPadding: 0,
            indexLabelBackgroundColor: null,
            indexLabelBorderColor: null,
            indexLabelBorderThickness: 0,
            indexLabelLineColor: "gray",
            indexLabelLineThickness: 1,
            indexLabelLineDashType: "solid",
            indexLabelMaxWidth: null,
            indexLabelWrap: !0,
            indexLabelFormatter: null,
            lineThickness: 2,
            lineDashType: "solid",
            connectNullData: !1,
            nullDataLineDashType: "dash",
            color: null,
            lineColor: null,
            risingColor: "white",
            fallingColor: "red",
            fillOpacity: null,
            startAngle: 0,
            radius: null,
            innerRadius: null,
            explodeOnClick: !0,
            neckHeight: null,
            neckWidth: null,
            reversed: !1,
            valueRepresents: null,
            linkedDataSeriesIndex: null,
            whiskerThickness: 2,
            whiskerDashType: "solid",
            whiskerColor: null,
            whiskerLength: null,
            stemThickness: 2,
            stemColor: null,
            stemDashType: "solid",
            upperBoxColor: "white",
            lowerBoxColor: "white",
            type: "column",
            xValueType: "number",
            axisXType: "primary",
            axisYType: "primary",
            axisXIndex: 0,
            axisYIndex: 0,
            xValueFormatString: null,
            yValueFormatString: null,
            zValueFormatString: null,
            percentFormatString: null,
            showInLegend: !1,
            legendMarkerType: null,
            legendMarkerColor: null,
            legendText: null,
            legendMarkerBorderColor: s ? "transparent" : null,
            legendMarkerBorderThickness: 0,
            markerType: "circle",
            markerColor: null,
            markerSize: null,
            markerBorderColor: s ? "transparent" : null,
            markerBorderThickness: 0,
            mouseover: null,
            mouseout: null,
            mousemove: null,
            click: null,
            toolTipContent: null,
            visible: !0,
            publicProperties: {
                options: "readWrite",
                axisX: "readWrite",
                axisY: "readWrite",
                chart: "readOnly"
            }
        },
        TextBlock: {
            x: 0,
            y: 0,
            width: null,
            height: null,
            maxWidth: null,
            maxHeight: null,
            padding: 0,
            angle: 0,
            text: "",
            horizontalAlign: "center",
            textAlign: "left",
            fontSize: 12,
            fontFamily: "calibri",
            fontWeight: "normal",
            fontColor: "black",
            fontStyle: "normal",
            borderThickness: 0,
            borderColor: "black",
            cornerRadius: 0,
            backgroundColor: null,
            textBaseline: "top"
        },
        CultureInfo: {
            decimalSeparator: ".",
            digitGroupSeparator: ",",
            zoomText: "Zoom",
            panText: "Pan",
            resetText: "Reset",
            menuText: "More Options",
            saveJPGText: "Save as JPEG",
            savePNGText: "Save as PNG",
            printText: "Print",
            days: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
            shortDays: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
            months: "January February March April May June July August September October November December".split(" "),
            shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ")
        }
    }, Ka = {
        en: {}
    }, u = s ? "Trebuchet MS, Helvetica, sans-serif" : "Arial", Fa = s ? "Impact, Charcoal, sans-serif" : "Arial", Ba = {
        colorSet1: "#4F81BC #C0504E #9BBB58 #23BFAA #8064A1 #4AACC5 #F79647 #7F6084 #77A033 #33558B #E59566".split(" "),
        colorSet2: "#6D78AD #51CDA0 #DF7970 #4C9CA0 #AE7D99 #C9D45C #5592AD #DF874D #52BCA8 #8E7AA3 #E3CB64 #C77B85 #C39762 #8DD17E #B57952 #FCC26C".split(" "),
        colorSet3: "#8CA1BC #36845C #017E82 #8CB9D0 #708C98 #94838D #F08891 #0366A7 #008276 #EE7757 #E5BA3A #F2990B #03557B #782970".split(" ")
    }, D, Y, Q, ea, ia;
    Y = "#333333";
    Q = "#000000";
    D = "#666666";
    ia = ea = "#000000";
    var W = 20
      , C = 14
      , Ya = {
        colorSet: "colorSet1",
        backgroundColor: "#FFFFFF",
        title: {
            fontFamily: Fa,
            fontSize: 32,
            fontColor: Y,
            fontWeight: "normal",
            verticalAlign: "top",
            margin: 5
        },
        subtitles: [{
            fontFamily: Fa,
            fontSize: C,
            fontColor: Y,
            fontWeight: "normal",
            verticalAlign: "top",
            margin: 5
        }],
        data: [{
            indexLabelFontFamily: u,
            indexLabelFontSize: C,
            indexLabelFontColor: Y,
            indexLabelFontWeight: "normal",
            indexLabelLineThickness: 1
        }],
        axisX: [{
            titleFontFamily: u,
            titleFontSize: W,
            titleFontColor: Y,
            titleFontWeight: "normal",
            labelFontFamily: u,
            labelFontSize: C,
            labelFontColor: Q,
            labelFontWeight: "normal",
            lineThickness: 1,
            lineColor: D,
            tickThickness: 1,
            tickColor: D,
            gridThickness: 0,
            gridColor: D,
            stripLines: [{
                labelFontFamily: u,
                labelFontSize: C,
                labelFontColor: "#FF7300",
                labelFontWeight: "normal",
                labelBackgroundColor: null,
                color: "#FF7300",
                thickness: 1
            }],
            crosshair: {
                labelFontFamily: u,
                labelFontSize: C,
                labelFontColor: "#EEEEEE",
                labelFontWeight: "normal",
                labelBackgroundColor: ia,
                color: ea,
                thickness: 1,
                lineDashType: "dash"
            },
            scaleBreaks: {
                type: "zigzag",
                spacing: "2%",
                lineColor: "#BBBBBB",
                lineThickness: 1,
                lineDashType: "solid"
            }
        }],
        axisX2: [{
            titleFontFamily: u,
            titleFontSize: W,
            titleFontColor: Y,
            titleFontWeight: "normal",
            labelFontFamily: u,
            labelFontSize: C,
            labelFontColor: Q,
            labelFontWeight: "normal",
            lineThickness: 1,
            lineColor: D,
            tickThickness: 1,
            tickColor: D,
            gridThickness: 0,
            gridColor: D,
            stripLines: [{
                labelFontFamily: u,
                labelFontSize: C,
                labelFontColor: "#FF7300",
                labelFontWeight: "normal",
                labelBackgroundColor: null,
                color: "#FF7300",
                thickness: 1
            }],
            crosshair: {
                labelFontFamily: u,
                labelFontSize: C,
                labelFontColor: "#EEEEEE",
                labelFontWeight: "normal",
                labelBackgroundColor: ia,
                color: ea,
                thickness: 1,
                lineDashType: "dash"
            },
            scaleBreaks: {
                type: "zigzag",
                spacing: "2%",
                lineColor: "#BBBBBB",
                lineThickness: 1,
                lineDashType: "solid"
            }
        }],
        axisY: [{
            titleFontFamily: u,
            titleFontSize: W,
            titleFontColor: Y,
            titleFontWeight: "normal",
            labelFontFamily: u,
            labelFontSize: C,
            labelFontColor: Q,
            labelFontWeight: "normal",
            lineThickness: 1,
            lineColor: D,
            tickThickness: 1,
            tickColor: D,
            gridThickness: 1,
            gridColor: D,
            stripLines: [{
                labelFontFamily: u,
                labelFontSize: C,
                labelFontColor: "#FF7300",
                labelFontWeight: "normal",
                labelBackgroundColor: null,
                color: "#FF7300",
                thickness: 1
            }],
            crosshair: {
                labelFontFamily: u,
                labelFontSize: C,
                labelFontColor: "#EEEEEE",
                labelFontWeight: "normal",
                labelBackgroundColor: ia,
                color: ea,
                thickness: 1,
                lineDashType: "dash"
            },
            scaleBreaks: {
                type: "zigzag",
                spacing: "2%",
                lineColor: "#BBBBBB",
                lineThickness: 1,
                lineDashType: "solid"
            }
        }],
        axisY2: [{
            titleFontFamily: u,
            titleFontSize: W,
            titleFontColor: Y,
            titleFontWeight: "normal",
            labelFontFamily: u,
            labelFontSize: C,
            labelFontColor: Q,
            labelFontWeight: "normal",
            lineThickness: 1,
            lineColor: D,
            tickThickness: 1,
            tickColor: D,
            gridThickness: 1,
            gridColor: D,
            stripLines: [{
                labelFontFamily: u,
                labelFontSize: C,
                labelFontColor: "#FF7300",
                labelFontWeight: "normal",
                labelBackgroundColor: null,
                color: "#FF7300",
                thickness: 1
            }],
            crosshair: {
                labelFontFamily: u,
                labelFontSize: C,
                labelFontColor: "#EEEEEE",
                labelFontWeight: "normal",
                labelBackgroundColor: ia,
                color: ea,
                thickness: 1,
                lineDashType: "dash"
            },
            scaleBreaks: {
                type: "zigzag",
                spacing: "2%",
                lineColor: "#BBBBBB",
                lineThickness: 1,
                lineDashType: "solid"
            }
        }],
        legend: {
            fontFamily: u,
            fontSize: 14,
            fontColor: Y,
            fontWeight: "bold",
            verticalAlign: "bottom",
            horizontalAlign: "center"
        },
        toolTip: {
            fontFamily: u,
            fontSize: 14,
            fontStyle: "normal",
            cornerRadius: 0,
            borderThickness: 1
        },
        toolbar: {
            itemBackgroundColor: "white",
            itemBackgroundColorOnHover: "#2196f3",
            buttonBorderColor: "#2196f3",
            buttonBorderThickness: 1,
            fontColor: "black",
            fontColorOnHover: "white"
        }
    };
    Q = Y = "#F5F5F5";
    D = "#FFFFFF";
    ea = "#40BAF1";
    ia = "#F5F5F5";
    var W = 20
      , C = 14
      , db = {
        colorSet: "colorSet2",
        title: {
            fontFamily: u,
            fontSize: 33,
            fontColor: "#3A3A3A",
            fontWeight: "bold",
            verticalAlign: "top",
            margin: 5
        },
        subtitles: [{
            fontFamily: u,
            fontSize: C,
            fontColor: "#3A3A3A",
            fontWeight: "normal",
            verticalAlign: "top",
            margin: 5
        }],
        data: [{
            indexLabelFontFamily: u,
            indexLabelFontSize: C,
            indexLabelFontColor: "#666666",
            indexLabelFontWeight: "normal",
            indexLabelLineThickness: 1
        }],
        axisX: [{
            titleFontFamily: u,
            titleFontSize: W,
            titleFontColor: "#666666",
            titleFontWeight: "normal",
            labelFontFamily: u,
            labelFontSize: C,
            labelFontColor: "#666666",
            labelFontWeight: "normal",
            lineThickness: 1,
            lineColor: "#BBBBBB",
            tickThickness: 1,
            tickColor: "#BBBBBB",
            gridThickness: 1,
            gridColor: "#BBBBBB",
            stripLines: [{
                labelFontFamily: u,
                labelFontSize: C,
                labelFontColor: "#FFA500",
                labelFontWeight: "normal",
                labelBackgroundColor: null,
                color: "#FFA500",
                thickness: 1
            }],
            crosshair: {
                labelFontFamily: u,
                labelFontSize: C,
                labelFontColor: "#EEEEEE",
                labelFontWeight: "normal",
                labelBackgroundColor: "black",
                color: "black",
                thickness: 1,
                lineDashType: "dot"
            },
            scaleBreaks: {
                type: "zigzag",
                spacing: "2%",
                lineColor: "#BBBBBB",
                lineThickness: 1,
                lineDashType: "solid"
            }
        }],
        axisX2: [{
            titleFontFamily: u,
            titleFontSize: W,
            titleFontColor: "#666666",
            titleFontWeight: "normal",
            labelFontFamily: u,
            labelFontSize: C,
            labelFontColor: "#666666",
            labelFontWeight: "normal",
            lineThickness: 1,
            lineColor: "#BBBBBB",
            tickColor: "#BBBBBB",
            tickThickness: 1,
            gridThickness: 1,
            gridColor: "#BBBBBB",
            stripLines: [{
                labelFontFamily: u,
                labelFontSize: C,
                labelFontColor: "#FFA500",
                labelFontWeight: "normal",
                labelBackgroundColor: null,
                color: "#FFA500",
                thickness: 1
            }],
            crosshair: {
                labelFontFamily: u,
                labelFontSize: C,
                labelFontColor: "#EEEEEE",
                labelFontWeight: "normal",
                labelBackgroundColor: "black",
                color: "black",
                thickness: 1,
                lineDashType: "dot"
            },
            scaleBreaks: {
                type: "zigzag",
                spacing: "2%",
                lineColor: "#BBBBBB",
                lineThickness: 1,
                lineDashType: "solid"
            }
        }],
        axisY: [{
            titleFontFamily: u,
            titleFontSize: W,
            titleFontColor: "#666666",
            titleFontWeight: "normal",
            labelFontFamily: u,
            labelFontSize: C,
            labelFontColor: "#666666",
            labelFontWeight: "normal",
            lineThickness: 0,
            lineColor: "#BBBBBB",
            tickColor: "#BBBBBB",
            tickThickness: 1,
            gridThickness: 1,
            gridColor: "#BBBBBB",
            stripLines: [{
                labelFontFamily: u,
                labelFontSize: C,
                labelFontColor: "#FFA500",
                labelFontWeight: "normal",
                labelBackgroundColor: null,
                color: "#FFA500",
                thickness: 1
            }],
            crosshair: {
                labelFontFamily: u,
                labelFontSize: C,
                labelFontColor: "#EEEEEE",
                labelFontWeight: "normal",
                labelBackgroundColor: "black",
                color: "black",
                thickness: 1,
                lineDashType: "dot"
            },
            scaleBreaks: {
                type: "zigzag",
                spacing: "2%",
                lineColor: "#BBBBBB",
                lineThickness: 1,
                lineDashType: "solid"
            }
        }],
        axisY2: [{
            titleFontFamily: u,
            titleFontSize: W,
            titleFontColor: "#666666",
            titleFontWeight: "normal",
            labelFontFamily: u,
            labelFontSize: C,
            labelFontColor: "#666666",
            labelFontWeight: "normal",
            lineThickness: 0,
            lineColor: "#BBBBBB",
            tickColor: "#BBBBBB",
            tickThickness: 1,
            gridThickness: 1,
            gridColor: "#BBBBBB",
            stripLines: [{
                labelFontFamily: u,
                labelFontSize: C,
                labelFontColor: "#FFA500",
                labelFontWeight: "normal",
                labelBackgroundColor: null,
                color: "#FFA500",
                thickness: 1
            }],
            crosshair: {
                labelFontFamily: u,
                labelFontSize: C,
                labelFontColor: "#EEEEEE",
                labelFontWeight: "normal",
                labelBackgroundColor: "black",
                color: "black",
                thickness: 1,
                lineDashType: "dot"
            },
            scaleBreaks: {
                type: "zigzag",
                spacing: "2%",
                lineColor: "#BBBBBB",
                lineThickness: 1,
                lineDashType: "solid"
            }
        }],
        legend: {
            fontFamily: u,
            fontSize: 14,
            fontColor: "#3A3A3A",
            fontWeight: "bold",
            verticalAlign: "bottom",
            horizontalAlign: "center"
        },
        toolTip: {
            fontFamily: u,
            fontSize: 14,
            fontStyle: "normal",
            cornerRadius: 0,
            borderThickness: 1
        },
        toolbar: {
            itemBackgroundColor: "white",
            itemBackgroundColorOnHover: "#2196f3",
            buttonBorderColor: "#2196f3",
            buttonBorderThickness: 1,
            fontColor: "black",
            fontColorOnHover: "white"
        }
    };
    Q = Y = "#F5F5F5";
    D = "#FFFFFF";
    ea = "#40BAF1";
    ia = "#F5F5F5";
    W = 20;
    C = 14;
    Fa = {
        colorSet: "colorSet1",
        backgroundColor: "#2A2A2A",
        title: {
            fontFamily: Fa,
            fontSize: 32,
            fontColor: Y,
            fontWeight: "normal",
            verticalAlign: "top",
            margin: 5
        },
        subtitles: [{
            fontFamily: Fa,
            fontSize: C,
            fontColor: Y,
            fontWeight: "normal",
            verticalAlign: "top",
            margin: 5
        }],
        toolbar: {
            itemBackgroundColor: "#666666",
            itemBackgroundColorOnHover: "#FF7372",
            buttonBorderColor: "#FF7372",
            buttonBorderThickness: 1,
            fontColor: "#F5F5F5",
            fontColorOnHover: "#F5F5F5"
        },
        data: [{
            indexLabelFontFamily: u,
            indexLabelFontSize: C,
            indexLabelFontColor: Q,
            indexLabelFontWeight: "normal",
            indexLabelLineThickness: 1
        }],
        axisX: [{
            titleFontFamily: u,
            titleFontSize: W,
            titleFontColor: Q,
            titleFontWeight: "normal",
            labelFontFamily: u,
            labelFontSize: C,
            labelFontColor: Q,
            labelFontWeight: "normal",
            lineThickness: 1,
            lineColor: D,
            tickThickness: 1,
            tickColor: D,
            gridThickness: 0,
            gridColor: D,
            stripLines: [{
                labelFontFamily: u,
                labelFontSize: C,
                labelFontColor: "#FF7300",
                labelFontWeight: "normal",
                labelBackgroundColor: null,
                color: "#FF7300",
                thickness: 1
            }],
            crosshair: {
                labelFontFamily: u,
                labelFontSize: C,
                labelFontColor: "#000000",
                labelFontWeight: "normal",
                labelBackgroundColor: ia,
                color: ea,
                thickness: 1,
                lineDashType: "dash"
            },
            scaleBreaks: {
                type: "zigzag",
                spacing: "2%",
                lineColor: "#777777",
                lineThickness: 1,
                lineDashType: "solid",
                color: "#111111"
            }
        }],
        axisX2: [{
            titleFontFamily: u,
            titleFontSize: W,
            titleFontColor: Q,
            titleFontWeight: "normal",
            labelFontFamily: u,
            labelFontSize: C,
            labelFontColor: Q,
            labelFontWeight: "normal",
            lineThickness: 1,
            lineColor: D,
            tickThickness: 1,
            tickColor: D,
            gridThickness: 0,
            gridColor: D,
            stripLines: [{
                labelFontFamily: u,
                labelFontSize: C,
                labelFontColor: "#FF7300",
                labelFontWeight: "normal",
                labelBackgroundColor: null,
                color: "#FF7300",
                thickness: 1
            }],
            crosshair: {
                labelFontFamily: u,
                labelFontSize: C,
                labelFontColor: "#000000",
                labelFontWeight: "normal",
                labelBackgroundColor: ia,
                color: ea,
                thickness: 1,
                lineDashType: "dash"
            },
            scaleBreaks: {
                type: "zigzag",
                spacing: "2%",
                lineColor: "#777777",
                lineThickness: 1,
                lineDashType: "solid",
                color: "#111111"
            }
        }],
        axisY: [{
            titleFontFamily: u,
            titleFontSize: W,
            titleFontColor: Q,
            titleFontWeight: "normal",
            labelFontFamily: u,
            labelFontSize: C,
            labelFontColor: Q,
            labelFontWeight: "normal",
            lineThickness: 1,
            lineColor: D,
            tickThickness: 1,
            tickColor: D,
            gridThickness: 1,
            gridColor: D,
            stripLines: [{
                labelFontFamily: u,
                labelFontSize: C,
                labelFontColor: "#FF7300",
                labelFontWeight: "normal",
                labelBackgroundColor: null,
                color: "#FF7300",
                thickness: 1
            }],
            crosshair: {
                labelFontFamily: u,
                labelFontSize: C,
                labelFontColor: "#000000",
                labelFontWeight: "normal",
                labelBackgroundColor: ia,
                color: ea,
                thickness: 1,
                lineDashType: "dash"
            },
            scaleBreaks: {
                type: "zigzag",
                spacing: "2%",
                lineColor: "#777777",
                lineThickness: 1,
                lineDashType: "solid",
                color: "#111111"
            }
        }],
        axisY2: [{
            titleFontFamily: u,
            titleFontSize: W,
            titleFontColor: Q,
            titleFontWeight: "normal",
            labelFontFamily: u,
            labelFontSize: C,
            labelFontColor: Q,
            labelFontWeight: "normal",
            lineThickness: 1,
            lineColor: D,
            tickThickness: 1,
            tickColor: D,
            gridThickness: 1,
            gridColor: D,
            stripLines: [{
                labelFontFamily: u,
                labelFontSize: C,
                labelFontColor: "#FF7300",
                labelFontWeight: "normal",
                labelBackgroundColor: null,
                color: "#FF7300",
                thickness: 1
            }],
            crosshair: {
                labelFontFamily: u,
                labelFontSize: C,
                labelFontColor: "#000000",
                labelFontWeight: "normal",
                labelBackgroundColor: ia,
                color: ea,
                thickness: 1,
                lineDashType: "dash"
            },
            scaleBreaks: {
                type: "zigzag",
                spacing: "2%",
                lineColor: "#777777",
                lineThickness: 1,
                lineDashType: "solid",
                color: "#111111"
            }
        }],
        legend: {
            fontFamily: u,
            fontSize: 14,
            fontColor: Y,
            fontWeight: "bold",
            verticalAlign: "bottom",
            horizontalAlign: "center"
        },
        toolTip: {
            fontFamily: u,
            fontSize: 14,
            fontStyle: "normal",
            cornerRadius: 0,
            borderThickness: 1,
            fontColor: Q,
            backgroundColor: "rgba(0, 0, 0, .7)"
        }
    };
    D = "#FFFFFF";
    Q = Y = "#FAFAFA";
    ea = "#40BAF1";
    ia = "#F5F5F5";
    var W = 20
      , C = 14
      , Oa = {
        light1: Ya,
        light2: db,
        dark1: Fa,
        dark2: {
            colorSet: "colorSet2",
            backgroundColor: "#32373A",
            title: {
                fontFamily: u,
                fontSize: 32,
                fontColor: Y,
                fontWeight: "normal",
                verticalAlign: "top",
                margin: 5
            },
            subtitles: [{
                fontFamily: u,
                fontSize: C,
                fontColor: Y,
                fontWeight: "normal",
                verticalAlign: "top",
                margin: 5
            }],
            toolbar: {
                itemBackgroundColor: "#666666",
                itemBackgroundColorOnHover: "#FF7372",
                buttonBorderColor: "#FF7372",
                buttonBorderThickness: 1,
                fontColor: "#F5F5F5",
                fontColorOnHover: "#F5F5F5"
            },
            data: [{
                indexLabelFontFamily: u,
                indexLabelFontSize: C,
                indexLabelFontColor: Q,
                indexLabelFontWeight: "normal",
                indexLabelLineThickness: 1
            }],
            axisX: [{
                titleFontFamily: u,
                titleFontSize: W,
                titleFontColor: Q,
                titleFontWeight: "normal",
                labelFontFamily: u,
                labelFontSize: C,
                labelFontColor: Q,
                labelFontWeight: "normal",
                lineThickness: 1,
                lineColor: D,
                tickThickness: 1,
                tickColor: D,
                gridThickness: 0,
                gridColor: D,
                stripLines: [{
                    labelFontFamily: u,
                    labelFontSize: C,
                    labelFontColor: "#FF7300",
                    labelFontWeight: "normal",
                    labelBackgroundColor: null,
                    color: "#FF7300",
                    thickness: 1
                }],
                crosshair: {
                    labelFontFamily: u,
                    labelFontSize: C,
                    labelFontColor: "#000000",
                    labelFontWeight: "normal",
                    labelBackgroundColor: ia,
                    color: ea,
                    thickness: 1,
                    lineDashType: "dash"
                },
                scaleBreaks: {
                    type: "zigzag",
                    spacing: "2%",
                    lineColor: "#777777",
                    lineThickness: 1,
                    lineDashType: "solid",
                    color: "#111111"
                }
            }],
            axisX2: [{
                titleFontFamily: u,
                titleFontSize: W,
                titleFontColor: Q,
                titleFontWeight: "normal",
                labelFontFamily: u,
                labelFontSize: C,
                labelFontColor: Q,
                labelFontWeight: "normal",
                lineThickness: 1,
                lineColor: D,
                tickThickness: 1,
                tickColor: D,
                gridThickness: 0,
                gridColor: D,
                stripLines: [{
                    labelFontFamily: u,
                    labelFontSize: C,
                    labelFontColor: "#FF7300",
                    labelFontWeight: "normal",
                    labelBackgroundColor: null,
                    color: "#FF7300",
                    thickness: 1
                }],
                crosshair: {
                    labelFontFamily: u,
                    labelFontSize: C,
                    labelFontColor: "#000000",
                    labelFontWeight: "normal",
                    labelBackgroundColor: ia,
                    color: ea,
                    thickness: 1,
                    lineDashType: "dash"
                },
                scaleBreaks: {
                    type: "zigzag",
                    spacing: "2%",
                    lineColor: "#777777",
                    lineThickness: 1,
                    lineDashType: "solid",
                    color: "#111111"
                }
            }],
            axisY: [{
                titleFontFamily: u,
                titleFontSize: W,
                titleFontColor: Q,
                titleFontWeight: "normal",
                labelFontFamily: u,
                labelFontSize: C,
                labelFontColor: Q,
                labelFontWeight: "normal",
                lineThickness: 0,
                lineColor: D,
                tickThickness: 1,
                tickColor: D,
                gridThickness: 1,
                gridColor: D,
                stripLines: [{
                    labelFontFamily: u,
                    labelFontSize: C,
                    labelFontColor: "#FF7300",
                    labelFontWeight: "normal",
                    labelBackgroundColor: null,
                    color: "#FF7300",
                    thickness: 1
                }],
                crosshair: {
                    labelFontFamily: u,
                    labelFontSize: C,
                    labelFontColor: "#000000",
                    labelFontWeight: "normal",
                    labelBackgroundColor: ia,
                    color: ea,
                    thickness: 1,
                    lineDashType: "dash"
                },
                scaleBreaks: {
                    type: "zigzag",
                    spacing: "2%",
                    lineColor: "#777777",
                    lineThickness: 1,
                    lineDashType: "solid",
                    color: "#111111"
                }
            }],
            axisY2: [{
                titleFontFamily: u,
                titleFontSize: W,
                titleFontColor: Q,
                titleFontWeight: "normal",
                labelFontFamily: u,
                labelFontSize: C,
                labelFontColor: Q,
                labelFontWeight: "normal",
                lineThickness: 0,
                lineColor: D,
                tickThickness: 1,
                tickColor: D,
                gridThickness: 1,
                gridColor: D,
                stripLines: [{
                    labelFontFamily: u,
                    labelFontSize: C,
                    labelFontColor: "#FF7300",
                    labelFontWeight: "normal",
                    labelBackgroundColor: null,
                    color: "#FF7300",
                    thickness: 1
                }],
                crosshair: {
                    labelFontFamily: u,
                    labelFontSize: C,
                    labelFontColor: "#000000",
                    labelFontWeight: "normal",
                    labelBackgroundColor: ia,
                    color: ea,
                    thickness: 1,
                    lineDashType: "dash"
                },
                scaleBreaks: {
                    type: "zigzag",
                    spacing: "2%",
                    lineColor: "#777777",
                    lineThickness: 1,
                    lineDashType: "solid",
                    color: "#111111"
                }
            }],
            legend: {
                fontFamily: u,
                fontSize: 14,
                fontColor: Y,
                fontWeight: "bold",
                verticalAlign: "bottom",
                horizontalAlign: "center"
            },
            toolTip: {
                fontFamily: u,
                fontSize: 14,
                fontStyle: "normal",
                cornerRadius: 0,
                borderThickness: 1,
                fontColor: Q,
                backgroundColor: "rgba(0, 0, 0, .7)"
            }
        },
        theme1: Ya,
        theme2: db,
        theme3: Ya
    }
      , L = {
        numberDuration: 1,
        yearDuration: 314496E5,
        monthDuration: 2592E6,
        weekDuration: 6048E5,
        dayDuration: 864E5,
        hourDuration: 36E5,
        minuteDuration: 6E4,
        secondDuration: 1E3,
        millisecondDuration: 1,
        dayOfWeekFromInt: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ")
    };
    (function() {
        va.fSDec = function(h) {
            for (var n = "", l = 0; l < h.length; l++)
                n += String.fromCharCode(Math.ceil(h.length / 57 / 5) ^ h.charCodeAt(l));
            return n
        }
        ;
        delete ra[va.fSDec("Bi`su")][va.fSDec("bsdehuIsdg")];
        va.pro = {
            sCH: ra[va.fSDec("Bi`su")][va.fSDec("bsdehuIsdg")]
        }
    }
    )();
    var hb = function() {
        var h = !1;
        try {
            var n = Object.defineProperty && Object.defineProperty({}, "passive", {
                get: function() {
                    h = !0;
                    return !1
                }
            });
            window.addEventListener && (window.addEventListener("test", null, n),
            window.removeEventListener("test", null, n))
        } catch (l) {
            h = !1
        }
        return h
    }()
      , $a = {}
      , sa = null
      , mb = function() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.backgroundColor && (this.ctx.fillStyle = this.backgroundColor,
        this.ctx.fillRect(0, 0, this.width, this.height))
    }
      , ya = function(h) {
        h.width = 1;
        h.height = 1;
        h.getContext("2d") && h.getContext("2d").clearRect(0, 0, 1, 1)
    }
      , nb = function(h, n, l) {
        n = Math.min(this.width, this.height);
        return Math.max("theme4" === this.theme ? 0 : 300 <= n ? 12 : 11, Math.round(n * (h / 400)))
    }
      , Ca = function() {
        var h = /D{1,4}|M{1,4}|Y{1,4}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|f{1,3}|t{1,2}|T{1,2}|K|z{1,3}|"[^"]*"|'[^']*'/g
          , n = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ")
          , l = "Sun Mon Tue Wed Thu Fri Sat".split(" ")
          , s = "January February March April May June July August September October November December".split(" ")
          , X = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ")
          , u = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g
          , A = /[^-+\dA-Z]/g;
        return function(C, J, D) {
            var R = D ? D.days : n
              , S = D ? D.months : s
              , V = D ? D.shortDays : l
              , L = D ? D.shortMonths : X;
            D = "";
            var P = !1;
            C = C && C.getTime ? C : C ? new Date(C) : new Date;
            if (isNaN(C))
                throw SyntaxError("invalid date");
            "UTC:" === J.slice(0, 4) && (J = J.slice(4),
            P = !0);
            D = P ? "getUTC" : "get";
            var Q = C[D + "Date"]()
              , M = C[D + "Day"]()
              , ba = C[D + "Month"]()
              , a = C[D + "FullYear"]()
              , g = C[D + "Hours"]()
              , b = C[D + "Minutes"]()
              , c = C[D + "Seconds"]()
              , d = C[D + "Milliseconds"]()
              , e = P ? 0 : C.getTimezoneOffset();
            return D = J.replace(h, function(t) {
                switch (t) {
                case "D":
                    return Q;
                case "DD":
                    return ha(Q, 2);
                case "DDD":
                    return V[M];
                case "DDDD":
                    return R[M];
                case "M":
                    return ba + 1;
                case "MM":
                    return ha(ba + 1, 2);
                case "MMM":
                    return L[ba];
                case "MMMM":
                    return S[ba];
                case "Y":
                    return parseInt(String(a).slice(-2));
                case "YY":
                    return ha(String(a).slice(-2), 2);
                case "YYY":
                    return ha(String(a).slice(-3), 3);
                case "YYYY":
                    return ha(a, 4);
                case "h":
                    return g % 12 || 12;
                case "hh":
                    return ha(g % 12 || 12, 2);
                case "H":
                    return g;
                case "HH":
                    return ha(g, 2);
                case "m":
                    return b;
                case "mm":
                    return ha(b, 2);
                case "s":
                    return c;
                case "ss":
                    return ha(c, 2);
                case "f":
                    return ha(String(d), 3).slice(0, 1);
                case "ff":
                    return ha(String(d), 3).slice(0, 2);
                case "fff":
                    return ha(String(d), 3).slice(0, 3);
                case "t":
                    return 12 > g ? "a" : "p";
                case "tt":
                    return 12 > g ? "am" : "pm";
                case "T":
                    return 12 > g ? "A" : "P";
                case "TT":
                    return 12 > g ? "AM" : "PM";
                case "K":
                    return P ? "UTC" : (String(C).match(u) || [""]).pop().replace(A, "");
                case "z":
                    return (0 < e ? "-" : "+") + Math.floor(Math.abs(e) / 60);
                case "zz":
                    return (0 < e ? "-" : "+") + ha(Math.floor(Math.abs(e) / 60), 2);
                case "zzz":
                    return (0 < e ? "-" : "+") + ha(Math.floor(Math.abs(e) / 60), 2) + ha(Math.abs(e) % 60, 2);
                default:
                    return t.slice(1, t.length - 1)
                }
            })
        }
    }()
      , ob = function(h) {
        var n = 0 > h;
        if (1 > Math.abs(h)) {
            var l = parseInt(h.toString().split("e-")[1]);
            l && (h = (n ? -1 * h : h) * Math.pow(10, l - 1),
            h = "0." + Array(l).join("0") + h.toString().substring(2),
            h = n ? "-" + h : h)
        } else
            l = parseInt(h.toString().split("+")[1]),
            20 < l && (l -= 20,
            h /= Math.pow(10, l),
            h = h.toString() + Array(l + 1).join("0"));
        return String(h)
    }
      , fa = function(h, n, l) {
        if (null === h)
            return "";
        if (!isFinite(h))
            return h;
        h = Number(h);
        var s = 0 > h ? !0 : !1;
        s && (h *= -1);
        var X = l ? l.decimalSeparator : "."
          , u = l ? l.digitGroupSeparator : ","
          , A = "";
        n = String(n);
        var A = 1
          , C = l = ""
          , D = -1
          , J = []
          , R = []
          , S = 0
          , V = 0
          , L = 0
          , P = !1
          , Q = 0
          , C = n.match(/"[^"]*"|'[^']*'|[eE][+-]*[0]+|[,]+[.]|\u2030|./g);
        n = null;
        for (var M = 0; C && M < C.length; M++)
            if (n = C[M],
            "." === n && 0 > D)
                D = M;
            else {
                if ("%" === n)
                    A *= 100;
                else if ("\u2030" === n) {
                    A *= 1E3;
                    continue
                } else if ("," === n[0] && "." === n[n.length - 1]) {
                    A /= Math.pow(1E3, n.length - 1);
                    D = M + n.length - 1;
                    continue
                } else
                    "E" !== n[0] && "e" !== n[0] || "0" !== n[n.length - 1] || (P = !0);
                0 > D ? (J.push(n),
                "#" === n || "0" === n ? S++ : "," === n && L++) : (R.push(n),
                "#" !== n && "0" !== n || V++)
            }
        P && (n = Math.floor(h),
        C = -Math.floor(Math.log(h) / Math.LN10 + 1),
        Q = 0 === h ? 0 : 0 === n ? -(S + C) : ob(n).length - S,
        A /= Math.pow(10, Q));
        0 > D && (D = M);
        A = (h * A).toFixed(V);
        n = A.split(".");
        A = (n[0] + "").split("");
        h = (n[1] + "").split("");
        A && "0" === A[0] && A.shift();
        for (P = C = M = V = D = 0; 0 < J.length; )
            if (n = J.pop(),
            "#" === n || "0" === n)
                if (D++,
                D === S) {
                    var ba = A
                      , A = [];
                    if ("0" === n)
                        for (n = S - V - (ba ? ba.length : 0); 0 < n; )
                            ba.unshift("0"),
                            n--;
                    for (; 0 < ba.length; )
                        l = ba.pop() + l,
                        P++,
                        0 === P % C && (M === L && 0 < ba.length) && (l = u + l)
                } else
                    0 < A.length ? (l = A.pop() + l,
                    V++,
                    P++) : "0" === n && (l = "0" + l,
                    V++,
                    P++),
                    0 === P % C && (M === L && 0 < A.length) && (l = u + l);
            else
                "E" !== n[0] && "e" !== n[0] || "0" !== n[n.length - 1] || !/[eE][+-]*[0]+/.test(n) ? "," === n ? (M++,
                C = P,
                P = 0,
                0 < A.length && (l = u + l)) : l = 1 < n.length && ('"' === n[0] && '"' === n[n.length - 1] || "'" === n[0] && "'" === n[n.length - 1]) ? n.slice(1, n.length - 1) + l : n + l : (n = 0 > Q ? n.replace("+", "").replace("-", "") : n.replace("-", ""),
                l += n.replace(/[0]+/, function(a) {
                    return ha(Q, a.length)
                }));
        u = "";
        for (J = !1; 0 < R.length; )
            n = R.shift(),
            "#" === n || "0" === n ? 0 < h.length && 0 !== Number(h.join("")) ? (u += h.shift(),
            J = !0) : "0" === n && (u += "0",
            J = !0) : 1 < n.length && ('"' === n[0] && '"' === n[n.length - 1] || "'" === n[0] && "'" === n[n.length - 1]) ? u += n.slice(1, n.length - 1) : "E" !== n[0] && "e" !== n[0] || "0" !== n[n.length - 1] || !/[eE][+-]*[0]+/.test(n) ? u += n : (n = 0 > Q ? n.replace("+", "").replace("-", "") : n.replace("-", ""),
            u += n.replace(/[0]+/, function(a) {
                return ha(Q, a.length)
            }));
        l += (J ? X : "") + u;
        return s ? "-" + l : l
    }
      , Pa = function(h) {
        var n = 0
          , l = 0;
        h = h || window.event;
        h.offsetX || 0 === h.offsetX ? (n = h.offsetX,
        l = h.offsetY) : h.layerX || 0 == h.layerX ? (n = h.layerX,
        l = h.layerY) : (n = h.pageX - h.target.offsetLeft,
        l = h.pageY - h.target.offsetTop);
        return {
            x: n,
            y: l
        }
    }
      , bb = !0
      , Ua = window.devicePixelRatio || 1
      , Na = 1
      , ma = bb ? Ua / Na : 1
      , da = function(h, l, s, H, u, C, A, D, J, R, S, V, P) {
        "undefined" === typeof P && (P = 1);
        A = A || 0;
        D = D || "black";
        var L = 15 < H - l && 15 < u - s ? 8 : 0.35 * Math.min(H - l, u - s);
        h.beginPath();
        h.moveTo(l, s);
        h.save();
        h.fillStyle = C;
        h.globalAlpha = P;
        h.fillRect(l, s, H - l, u - s);
        h.globalAlpha = 1;
        0 < A && (P = 0 === A % 2 ? 0 : 0.5,
        h.beginPath(),
        h.lineWidth = A,
        h.strokeStyle = D,
        h.moveTo(l, s),
        h.rect(l - P, s - P, H - l + 2 * P, u - s + 2 * P),
        h.stroke());
        h.restore();
        !0 === J && (h.save(),
        h.beginPath(),
        h.moveTo(l, s),
        h.lineTo(l + L, s + L),
        h.lineTo(H - L, s + L),
        h.lineTo(H, s),
        h.closePath(),
        A = h.createLinearGradient((H + l) / 2, s + L, (H + l) / 2, s),
        A.addColorStop(0, C),
        A.addColorStop(1, "rgba(255, 255, 255, .4)"),
        h.fillStyle = A,
        h.fill(),
        h.restore());
        !0 === R && (h.save(),
        h.beginPath(),
        h.moveTo(l, u),
        h.lineTo(l + L, u - L),
        h.lineTo(H - L, u - L),
        h.lineTo(H, u),
        h.closePath(),
        A = h.createLinearGradient((H + l) / 2, u - L, (H + l) / 2, u),
        A.addColorStop(0, C),
        A.addColorStop(1, "rgba(255, 255, 255, .4)"),
        h.fillStyle = A,
        h.fill(),
        h.restore());
        !0 === S && (h.save(),
        h.beginPath(),
        h.moveTo(l, s),
        h.lineTo(l + L, s + L),
        h.lineTo(l + L, u - L),
        h.lineTo(l, u),
        h.closePath(),
        A = h.createLinearGradient(l + L, (u + s) / 2, l, (u + s) / 2),
        A.addColorStop(0, C),
        A.addColorStop(1, "rgba(255, 255, 255, 0.1)"),
        h.fillStyle = A,
        h.fill(),
        h.restore());
        !0 === V && (h.save(),
        h.beginPath(),
        h.moveTo(H, s),
        h.lineTo(H - L, s + L),
        h.lineTo(H - L, u - L),
        h.lineTo(H, u),
        A = h.createLinearGradient(H - L, (u + s) / 2, H, (u + s) / 2),
        A.addColorStop(0, C),
        A.addColorStop(1, "rgba(255, 255, 255, 0.1)"),
        h.fillStyle = A,
        A.addColorStop(0, C),
        A.addColorStop(1, "rgba(255, 255, 255, 0.1)"),
        h.fillStyle = A,
        h.fill(),
        h.closePath(),
        h.restore())
    }
      , la = function(h) {
        for (var l = "", s = 0; s < h.length; s++)
            l += String.fromCharCode(Math.ceil(h.length / 57 / 5) ^ h.charCodeAt(s));
        return l
    }
      , kb = window && (window[la("mnb`uhno")] && window[la("mnb`uhno")].href && window[la("mnb`uhno")].href.indexOf && (-1 !== window[la("mnb`uhno")].href.indexOf(la("b`ow`rkr/bnl")) || -1 !== window[la("mnb`uhno")].href.indexOf(la("gdonqhy/bnl")) || -1 !== window[la("mnb`uhno")].href.indexOf(la("gheemd")))) && -1 === window[la("mnb`uhno")].href.indexOf(la("gheemd"))
      , lb = {
        reset: {
            image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAeCAYAAABJ/8wUAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPjSURBVFhHxVdJaFNRFP1J/jwkP5MxsbaC1WJEglSxOFAXIsFpVRE3ggi1K90obioRRBA33XXnQnciirhQcMCdorgQxBkXWlREkFKsWkv5npvckp/XnzRpKh64kLw733fffe9L/wrL0+mVUdO8uTSZ3MBL/we2qg4rkuSpodCELstXE46ziVkLQ6FQcGOmeSSq6wd4aV50d3drWjj8kQKZJTUc9kxFGenv79dZrDksTSTWWJp2QYtEPiErysyzdX0LsxsCQR8keX8gs6RHIk8ysdgKFg2G53mhuOPsshTlBjKaFo1g7SqLNoShKLdFXT8huQ/paLSbxatYnc2mHMM4hr18Vi8TIvCmXF3vYrW6cF23gGTOk0M1wA4RKvOmq6vLZRVJipvmSWT6tZ6CSEYkco5V50VPT4+D7RwOqi6RiSZm0fJ+vggSqkeoypdsNmuyelNwbXsbgvkWYMtzDWNvWaijoyOBqE+hVK8abcssUeXQ/YfKyi0gFYv1Ipgfoj34fYGTJLOYJA0ODirok32GLN8XhUWCwSes1hIwBg6LydJ/tEeRRapAdUp+wSAiZchtZZWWgAZ+JNpD8peYXQVK9UwUxNpzOK8pq97kURZhYTCKBwPD7h2zK+js7Myi7D8Fod+0TkMI8+EMAngLGc/WtBFWawkFHFnoj/t9KLgGmF0B3QfkxC+EarxkdhnFYlFLY06USqUwL7UMjICHfh/wOc2sCqhpxGbCkLvL7EUDbF73+6DkmVWB6zi7xUDQSLeYvWjAILvm9zEnkJhlbRcDQZcv6Kg2AipyT/Axw6wKlqVSqxDdjF8Izfod13qURdrG/nxehY+xGh+h0CSzKygGvSNQIcc097BI24jb9hax6kj2E7OrMFX1il+ICEf2NrPbhiXLl+fYl+U7zK4iYdsDcyLGf+ofFlkwcN+s10KhmpuYhhtm0hCLVIFL0MDsqNlDIqy9x2CLs1jL6OvrI7vPRbtohXG6eFmsFnHDGAp6n9AgyuVySRZrGvROxRgIfLXhzjrNYnNBUxNX/dMgRWT1mt4XLDovaApD53E9W3ilNX5M55LJHpRtIsgAvciR4WWcgK2Dvb1YqgXevmF8z2zEBTcKG39EfSKsT9EbhVUaI2FZO+oZIqImxol6j66/hcAu4sSN4vc1ZPoKeoE6RGhYL2YYA+ymOSSi0Z0wWntbtkGUWCvfSDXIxONraZ/FY90KUfNTpfC5spnNLgxoYNnR9RO4F8ofXEHOgogCQE99w+fF2Xw+b7O59rEOsyRqGEfpVoaDMQQ1CZrG46bcM6AZ0C/wPqNfHliqejyTySxh9TqQpL+xmbIlkB9SlAAAAABJRU5ErkJggg=="
        },
        pan: {
            image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAICSURBVEhLxZbPahNRGMUn/5MpuAiBEAIufQGfzr5E40YptBXajYzudCEuGqS+gGlrFwquDGRTutBdYfydzJ3LzeQmJGZue+Dw/Z17Mnfmu5Pof9Hr9Z61Wq0bWZMKj263O6xWq99wU9lOpzPMKgEhEcRucNOcioOK+0RzBhNvt9tPV4nmVF19+OWhVqt9xXgFXZq+8lCv119UKpUJ7iX2FmvFTKz8RH34YdBsNk8wVtjE4fGYwm8wrrDi3WBG5oKXZGRSS9hGuNFojLTe2lFz5xThWZIktayyiE2FdT3rzXBXz7krKiL8c17wAKFDjCus2AvW+YGZ9y2JF0VFRuMPfI//rsCE/C+s26s4gQu9ul7r4NteKx7H8XOC724xNNGbaNu++IrBqbOV7Tj3FgMRvc/YKOr3+3sE47wgEt/Bl/gaK5cHbNU11vYSXylfpK7XOvjuumPp4Wcoipu30Qsez2uMXYz4lfI+mOmwothY+SLiXJy7mKVpWs3Si0CoOMfeI9Od43Wic+jO+ZVv+crsm9QSNhUW9LXSeoPBYLXopthGuFQgdIxxhY+UDwlt1x5CZ1hX+NTUdt/OIvjKaDSmuOJfaIVNPKX+W18j/PLA2/kR44p5Sd8HbHngT/yTfNRWUXX14ZcL3wmX0+TLf8YO7CGT8yFE5zB3/gney25/OETRP9CtPDFe5jShAAAAAElFTkSuQmCC"
        },
        zoom: {
            image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALWSURBVEhLvZZLaBNRFIabyftBIgEfqCCBoCC6MYqiXYiIj4U76U4X7sUHbhQhUBfixhZEUBDB16YuFERaUaQLK7ooCOJj4UKtYEFU0EptShO/A9Ph3js3k8lo/eHnP7n3nP/M3LlzMz1hkUwmNziOcyKRSFyFt+LxeD/c2Wq1Ym7Kv0M2m11Os1OxWGycn1OwZXCGuXfwIhezkd9/jRgNT2L4ldhs1pbkX5OLJe4euVxuGQaPCa3mnUjtJx7BDuKusJTCV6jVVGHTMuYRjxma7yIOhTgFY6jNaAKew2xPKpVay9ganmkvj+M448/MfJdT5K5Gg4HJacRngPFgqVRaRNwW1B4i7yehWfsEDdz1K+A01AoxPIqGAiuwGfkOTY8+1A6u7AyiFTB2Hu0KPIrdiOnzHLWDybeImvy+Wq2mZa5bUHsD0Zpz+KxHdWQymV6kAb1ElqeORgJLvgnRdj1+R1AfzkIvSUjxVjQSarVakrueIPT8+H1F5jSUy+WXiJrUYBVWyVxU4PEU8TzhfaijUqnMIWrjaY492eWRwdKOIqrnIxnXwLLeRLwk2GQzrEMjg0avEbXxkIxr4OoOImpj2QwyFgms1koa/SZUG8s+0iGnEhNfCNXEhzIXBVz0McTzEvJ+70P9oNFtxEzei3aFYrFYxmuSUPWSv9Yi9IMm2xE1We56Mp1OV4nDwqFmBDV9gk9AEh4gZtFHNt8W4kAUCoXF5MorY9Z/kDni9nDv7hc0i2fhgLvTtX8a99PoMPPagTFPxofRzmDJ9yM+AyEmTfgGysYbQcfhDzPPJDmX0c7gDg4gs9BqFIWhm/Nct5H8gtBq1I7UfIbtvmIuoaGQcp+fdpbbSM43eEH5wrwLbXmhm/fU63VHXjcuok7hEByFY/AeHGC8L5/PL3HT5xGH1uYwfPOICGo+CBcU0vwO1BqzUqILDl/z/9VYIMfpddiAc47jDP8BsUpb13wOLRwAAAAASUVORK5CYII="
        },
        menu: {
            image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAeCAYAAABE4bxTAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADoSURBVFhH7dc9CsJAFATgRxIIBCwCqZKATX5sbawsY2MvWOtF9AB6AU8gguAJbD2AnZ2VXQT/Ko2TYGCL2OYtYQc+BuYA+1hCtnCVwMm27SGaXpDJIAiCvCkVR05hGOZNN3HkFMdx3nQRR06+76/R1IcFLJlNQEWlmWlBTwJtKLKHynehZqnjOGM0PYWRVXk61C37p7xlZ3Hk5HneCk1dmMH811xGoKLSzDiQwIBZB4ocoPJdqNkDt2yKlueWRVGUtzy3rPwo3sWRU3nLjuLI6OO67oZM00wMw3hrmpZx0XU9syxrR0T0BeMpb9dneSR2AAAAAElFTkSuQmCC"
        }
    };
    P.prototype.setOptions = function(h, l) {
        if (ra[this._defaultsKey]) {
            var s = ra[this._defaultsKey], H;
            for (H in s)
                "publicProperties" !== H && s.hasOwnProperty(H) && (this[H] = h && H in h ? h[H] : l && H in l ? l[H] : s[H])
        } else
            Ha && window.console && console.log("defaults not set")
    }
    ;
    P.prototype.get = function(h) {
        var l = ra[this._defaultsKey];
        if ("options" === h)
            return this.options && this.options._isPlaceholder ? null : this.options;
        if (l.hasOwnProperty(h) || l.publicProperties && l.publicProperties.hasOwnProperty(h))
            return this[h];
        window.console && window.console.log('Property "' + h + "\" doesn't exist. Please check for typo.")
    }
    ;
    P.prototype.set = function(h, l, s) {
        s = "undefined" === typeof s ? !0 : s;
        var H = ra[this._defaultsKey];
        if ("options" === h)
            this.createUserOptions(l);
        else if (H.hasOwnProperty(h) || H.publicProperties && H.publicProperties.hasOwnProperty(h) && "readWrite" === H.publicProperties[h])
            this.options._isPlaceholder && this.createUserOptions(),
            this.options[h] = l;
        else {
            window.console && (H.publicProperties && H.publicProperties.hasOwnProperty(h) && "readOnly" === H.publicProperties[h] ? window.console.log('Property "' + h + '" is read-only.') : window.console.log('Property "' + h + "\" doesn't exist. Please check for typo."));
            return
        }
        s && (this.stockChart || this.chart || this).render()
    }
    ;
    P.prototype.addTo = function(h, l, s, H) {
        H = "undefined" === typeof H ? !0 : H;
        var u = ra[this._defaultsKey];
        u.hasOwnProperty(h) || u.publicProperties && u.publicProperties.hasOwnProperty(h) && "readWrite" === u.publicProperties[h] ? (this.options._isPlaceholder && this.createUserOptions(),
        "undefined" === typeof this.options[h] && (this.options[h] = []),
        h = this.options[h],
        s = "undefined" === typeof s || null === s ? h.length : s,
        h.splice(s, 0, l),
        H && (this.stockChart || this.chart || this).render()) : window.console && (u.publicProperties && u.publicProperties.hasOwnProperty(h) && "readOnly" === u.publicProperties[h] ? window.console.log('Property "' + h + '" is read-only.') : window.console.log('Property "' + h + "\" doesn't exist. Please check for typo."))
    }
    ;
    P.prototype.createUserOptions = function(h) {
        if ("undefined" !== typeof h || this.options._isPlaceholder)
            if (this.parent && this.parent.options._isPlaceholder && this.parent.createUserOptions(),
            this.isOptionsInArray) {
                this.parent.options[this.optionsName] || (this.parent.options[this.optionsName] = []);
                var l = this.parent.options[this.optionsName]
                  , s = l.length;
                this.options._isPlaceholder || (Da(l),
                s = l.indexOf(this.options));
                this.options = "undefined" === typeof h ? {} : h;
                l[s] = this.options
            } else
                this.options = "undefined" === typeof h ? {} : h,
                this.parent && (h = this.parent.options,
                this.optionsName ? l = this.optionsName : (l = this._defaultsKey) && 0 !== l.length ? (s = l.charAt(0).toLowerCase(),
                1 < l.length && (s = s.concat(l.slice(1))),
                l = s) : l = void 0,
                h[l] = this.options)
    }
    ;
    P.prototype.remove = function(h) {
        h = "undefined" === typeof h ? !0 : h;
        if (this.isOptionsInArray) {
            var l = this.parent.options[this.optionsName];
            Da(l);
            var s = l.indexOf(this.options);
            0 <= s && l.splice(s, 1)
        } else
            delete this.parent.options[this.optionsName];
        h && (this.stockChart || this.chart || this).render()
    }
    ;
    P.prototype.updateOption = function(h) {
        !ra[this._defaultsKey] && (Ha && window.console) && console.log("defaults not set");
        var n = ra[this._defaultsKey]
          , s = {}
          , u = this[h]
          , C = this._themeOptionsKey
          , D = this._index;
        this.theme && l(this.parent) && l(C) && l(D) ? s = l(this.predefinedThemes[this.theme]) ? this.predefinedThemes.light1 : this.predefinedThemes[this.theme] : this.parent && this.parent.themeOptions && (this.options.theme ? "Chart" === this._defaultsKey && Oa[this.options.theme] ? s = Oa[this.options.theme] : stockThemes[this.options.theme] && (s = stockThemes[this.options.theme][C]) : this.parent.themeOptions[C] && (null === D ? s = this.parent.themeOptions[C] : 0 < this.parent.themeOptions[C].length && (s = Math.min(this.parent.themeOptions[C].length - 1, D),
        s = this.parent.themeOptions[C][s])));
        this.themeOptions = s;
        h in n && (u = h in this.options ? this.options[h] : s && h in s ? s[h] : n[h]);
        if (u === this[h])
            return !1;
        this[h] = u;
        return !0
    }
    ;
    P.prototype.trackChanges = function(h) {
        if (!this.sessionVariables)
            throw "Session Variable Store not set";
        this.sessionVariables[h] = this.options[h]
    }
    ;
    P.prototype.isBeingTracked = function(h) {
        this.options._oldOptions || (this.options._oldOptions = {});
        return this.options._oldOptions[h] ? !0 : !1
    }
    ;
    P.prototype.hasOptionChanged = function(h) {
        if (!this.sessionVariables)
            throw "Session Variable Store not set";
        return this.sessionVariables[h] !== this.options[h]
    }
    ;
    P.prototype.addEventListener = function(h, l, s) {
        h && l && (this._eventListeners[h] = this._eventListeners[h] || [],
        this._eventListeners[h].push({
            context: s || this,
            eventHandler: l
        }))
    }
    ;
    P.prototype.removeEventListener = function(h, l) {
        if (h && l && this._eventListeners[h])
            for (var s = this._eventListeners[h], u = 0; u < s.length; u++)
                if (s[u].eventHandler === l) {
                    s[u].splice(u, 1);
                    break
                }
    }
    ;
    P.prototype.removeAllEventListeners = function() {
        this._eventListeners = []
    }
    ;
    P.prototype.dispatchEvent = function(h, l, s) {
        if (h && this._eventListeners[h]) {
            l = l || {};
            for (var u = this._eventListeners[h], C = 0; C < u.length; C++)
                u[C].eventHandler.call(u[C].context, l)
        }
        "function" === typeof this[h] && this[h].call(s || this.chart, l)
    }
    ;
    Ea.prototype.registerSpace = function(h, l) {
        "top" === h ? this._topOccupied += l.height : "bottom" === h ? this._bottomOccupied += l.height : "left" === h ? this._leftOccupied += l.width : "right" === h && (this._rightOccupied += l.width)
    }
    ;
    Ea.prototype.unRegisterSpace = function(h, l) {
        "top" === h ? this._topOccupied -= l.height : "bottom" === h ? this._bottomOccupied -= l.height : "left" === h ? this._leftOccupied -= l.width : "right" === h && (this._rightOccupied -= l.width)
    }
    ;
    Ea.prototype.getFreeSpace = function() {
        return {
            x1: this._x1 + this._leftOccupied,
            y1: this._y1 + this._topOccupied,
            x2: this._x2 - this._rightOccupied,
            y2: this._y2 - this._bottomOccupied,
            width: this._x2 - this._x1 - this._rightOccupied - this._leftOccupied,
            height: this._y2 - this._y1 - this._bottomOccupied - this._topOccupied
        }
    }
    ;
    Ea.prototype.reset = function() {
        this._rightOccupied = this._leftOccupied = this._bottomOccupied = this._topOccupied = this._padding
    }
    ;
    qa(ja, P);
    ja.prototype._initialize = function() {
        l(this.padding) || "object" !== typeof this.padding ? this.topPadding = this.rightPadding = this.bottomPadding = this.leftPadding = Number(this.padding) | 0 : (this.topPadding = l(this.padding.top) ? 0 : Number(this.padding.top) | 0,
        this.rightPadding = l(this.padding.right) ? 0 : Number(this.padding.right) | 0,
        this.bottomPadding = l(this.padding.bottom) ? 0 : Number(this.padding.bottom) | 0,
        this.leftPadding = l(this.padding.left) ? 0 : Number(this.padding.left) | 0)
    }
    ;
    ja.prototype.render = function(h) {
        if (0 !== this.fontSize) {
            h && this.ctx.save();
            var l = this.ctx.font;
            this.ctx.textBaseline = this.textBaseline;
            var s = 0;
            this._isDirty && this.measureText(this.ctx);
            this.ctx.translate(this.x, this.y + s);
            "middle" === this.textBaseline && (s = -this._lineHeight / 2);
            this.ctx.font = this._getFontString();
            this.ctx.rotate(Math.PI / 180 * this.angle);
            var u = 0
              , C = this.topPadding
              , D = null;
            this.ctx.roundRect || za(this.ctx);
            this.borderDashType = this.borderDashType || "solid";
            this.ctx.setLineDash && this.ctx.setLineDash(J(this.borderDashType, this.borderThickness));
            (0 < this.borderThickness && this.borderColor || this.backgroundColor) && this.ctx.roundRect(0, s, this.width, this.height, this.cornerRadius, this.borderThickness, this.backgroundColor, this.borderColor);
            this.ctx.fillStyle = this.fontColor;
            for (s = 0; s < this._wrappedText.lines.length; s++)
                D = this._wrappedText.lines[s],
                "right" === this.textAlign ? u = this.width - D.width - this.rightPadding : "left" === this.textAlign ? u = this.leftPadding : "center" === this.textAlign && (u = (this.width - (this.leftPadding + this.rightPadding)) / 2 - D.width / 2 + this.leftPadding),
                this.ctx.fillText(D.text, u, C),
                C += D.height;
            this.ctx.font = l;
            h && this.ctx.restore()
        }
    }
    ;
    ja.prototype.setText = function(h) {
        this.text = h;
        this._isDirty = !0;
        this._wrappedText = null
    }
    ;
    ja.prototype.measureText = function() {
        this._lineHeight = Za(this.fontFamily, this.fontSize, this.fontWeight);
        if (null === this.maxWidth)
            throw "Please set maxWidth and height for TextBlock";
        this._wrapText(this.ctx);
        this._isDirty = !1;
        return {
            width: this.width,
            height: this.height
        }
    }
    ;
    ja.prototype._getLineWithWidth = function(h, l, s) {
        h = String(h);
        if (!h)
            return {
                text: "",
                width: 0
            };
        var u = s = 0
          , C = h.length - 1
          , D = Infinity;
        for (this.ctx.font = this._getFontString(); u <= C; ) {
            var D = Math.floor((u + C) / 2)
              , A = h.substr(0, D + 1);
            s = this.ctx.measureText(A).width;
            if (s < l)
                u = D + 1;
            else if (s > l)
                C = D - 1;
            else
                break
        }
        s > l && 1 < A.length && (A = A.substr(0, A.length - 1),
        s = this.ctx.measureText(A).width);
        l = !0;
        if (A.length === h.length || " " === h[A.length])
            l = !1;
        l && (h = A.split(" "),
        1 < h.length && h.pop(),
        A = h.join(" "),
        s = this.ctx.measureText(A).width);
        return {
            text: A,
            width: s
        }
    }
    ;
    ja.prototype._wrapText = function() {
        var h = new String(Ga(String(this.text)))
          , l = []
          , s = this.ctx.font
          , u = 0
          , C = 0;
        this.ctx.font = this._getFontString();
        if (0 === this.frontSize)
            C = u = 0;
        else
            for (; 0 < h.length; ) {
                var D = this.maxHeight - (this.topPadding + this.bottomPadding)
                  , A = this._getLineWithWidth(h, this.maxWidth - (this.leftPadding + this.rightPadding), !1);
                A.height = this._lineHeight;
                l.push(A);
                var J = C
                  , C = Math.max(C, A.width)
                  , u = u + A.height
                  , h = Ga(h.slice(A.text.length, h.length));
                D && u > D && (A = l.pop(),
                u -= A.height,
                C = J)
            }
        this._wrappedText = {
            lines: l,
            width: C,
            height: u
        };
        this.width = C + (this.leftPadding + this.rightPadding);
        this.height = u + (this.topPadding + this.bottomPadding);
        this.ctx.font = s
    }
    ;
    ja.prototype._getFontString = function() {
        var h;
        h = "" + (this.fontStyle ? this.fontStyle + " " : "");
        h += this.fontWeight ? this.fontWeight + " " : "";
        h += this.fontSize ? this.fontSize + "px " : "";
        var l = this.fontFamily ? this.fontFamily + "" : "";
        !s && l && (l = l.split(",")[0],
        "'" !== l[0] && '"' !== l[0] && (l = "'" + l + "'"));
        return h += l
    }
    ;
    qa(Wa, P);
    qa(Aa, P);
    Aa.prototype.setLayout = function() {
        if (this.text) {
            var h = this.dockInsidePlotArea ? this.chart.plotArea : this.chart, n = h.layoutManager.getFreeSpace(), s = n.x1, u = n.y1, C = 0, u = 0, s = this.chart._menuButton && this.chart.exportEnabled && "top" === this.verticalAlign ? 40 : 0, D;
            this.textAlign = l(this.options.textAlign) ? this.horizontalAlign : this.textAlign;
            "center" === this.verticalAlign ? "left" === this.horizontalAlign || "right" === this.horizontalAlign ? (null === this.maxWidth && (this.maxWidth = n.height - 4),
            u = 0.5 * n.width - this.margin - 2) : (null === this.maxWidth && (this.maxWidth = n.width - 4),
            u = 0.5 * n.height - 4) : (null === this.maxWidth && (this.maxWidth = n.width - 4 - s * ("center" === this.horizontalAlign ? 2 : 1)),
            u = 0.5 * n.height - this.margin - 2,
            C = 0);
            l(this.padding) || "number" !== typeof this.padding ? l(this.padding) || "object" !== typeof this.padding || (D = this.padding.top ? this.padding.top : this.padding.bottom ? this.padding.bottom : 0,
            D += this.padding.bottom ? this.padding.bottom : this.padding.top ? this.padding.top : 0) : D = 2 * this.padding;
            this.wrap || (u = Math.min(u, 1.5 * this.fontSize + D));
            var A = new ja(this.ctx,{
                fontSize: this.fontSize,
                fontFamily: this.fontFamily,
                fontColor: this.fontColor,
                fontStyle: this.fontStyle,
                fontWeight: this.fontWeight,
                textAlign: this.textAlign,
                verticalAlign: this.verticalAlign,
                borderColor: this.borderColor,
                borderThickness: this.borderThickness,
                backgroundColor: this.backgroundColor,
                maxWidth: this.maxWidth,
                maxHeight: u,
                cornerRadius: this.cornerRadius,
                text: this.text,
                padding: this.padding,
                textBaseline: "middle"
            })
              , J = A.measureText();
            "center" === this.verticalAlign ? ("left" === this.horizontalAlign ? (s = n.x1 + 2 + A._lineHeight / 2,
            u = n.y2 - 2 - (this.maxWidth / 2 - J.width / 2),
            C = -90,
            D = "left",
            this.width = J.height,
            this.height = J.width) : "right" === this.horizontalAlign ? (s = n.x2 - 2 - A._lineHeight / 2,
            u = n.y1 + 2 + (this.maxWidth / 2 - J.width / 2),
            C = 90,
            D = "right",
            this.width = J.height,
            this.height = J.width) : (u = n.y1 + 2 + (n.height / 2 - J.height / 2) + A._lineHeight / 2,
            s = n.x1 + 2 + (n.width / 2 - J.width / 2),
            D = "center",
            this.width = J.width,
            this.height = J.height),
            n = "center") : ("bottom" === this.verticalAlign ? (u = n.y2 - 2 - J.height + A._lineHeight / 2,
            D = "bottom") : (u = n.y1 + 2 + A._lineHeight / 2,
            D = "top"),
            s = "left" === this.horizontalAlign ? n.x1 + 2 : "right" === this.horizontalAlign ? n.x2 - 2 - J.width - s : n.x1 + n.width / 2 - J.width / 2,
            n = this.horizontalAlign,
            this.width = J.width,
            this.height = J.height);
            A.x = s;
            A.y = u;
            A.angle = C;
            A.horizontalAlign = n;
            this._textBlock = A;
            h.layoutManager.registerSpace(D, {
                width: this.width + ("left" === D || "right" === D ? this.margin + 2 : 0),
                height: this.height + ("top" === D || "bottom" === D ? this.margin + 2 : 0)
            });
            this.bounds = {
                x1: s,
                y1: u - A._lineHeight / 2,
                x2: s + this.width,
                y2: u + this.height - A._lineHeight / 2
            };
            "center" === this.verticalAlign && ("left" === this.horizontalAlign && (this.bounds = {
                x1: s - A._lineHeight / 2,
                y1: u - this.height,
                x2: s + this.width - A._lineHeight / 2,
                y2: u
            }),
            "right" === this.horizontalAlign && (this.bounds = {
                x1: s - A._lineHeight / 2,
                y1: u,
                x2: s + this.width - A._lineHeight / 2,
                y2: u + this.height
            }));
            this.ctx.textBaseline = "top"
        }
    }
    ;
    Aa.prototype.render = function() {
        this._textBlock && this._textBlock.render(!0)
    }
    ;
    qa(Ia, P);
    Ia.prototype.setLayout = Aa.prototype.setLayout;
    Ia.prototype.render = Aa.prototype.render;
    Xa.prototype.get = function(h, l) {
        var s = null;
        0 < this.pool.length ? (s = this.pool.pop(),
        Ma(s, h, l)) : s = ua(h, l);
        return s
    }
    ;
    Xa.prototype.release = function(h) {
        this.pool.push(h)
    }
    ;
    qa(Ja, P);
    var Qa = {
        addTheme: function(h, l) {
            Oa[h] = l
        },
        addColorSet: function(h, l) {
            Ba[h] = l
        },
        addCultureInfo: function(h, l) {
            Ka[h] = l
        },
        formatNumber: function(h, l, s) {
            s = s || "en";
            if (Ka[s])
                return fa(h, l || "#,##0.##", new Ja(s));
            throw "Unknown Culture Name";
        },
        formatDate: function(h, l, s) {
            s = s || "en";
            if (Ka[s])
                return Ca(h, l || "DD MMM YYYY", new Ja(s));
            throw "Unknown Culture Name";
        }
    };
    "undefined" !== typeof module && "undefined" !== typeof module.exports ? module.exports = Qa : "function" === typeof define && define.amd ? define([], function() {
        return Qa
    }) : (window.CanvasJS && window.console && window.console.log("CanvasJS namespace already exists. If you are loading both chart and stockchart scripts, just load stockchart alone as it includes all chart features."),
    window.CanvasJS = window.CanvasJS ? window.CanvasJS : Qa);
    u = Qa.Chart = function() {
        function h(a, g) {
            return a.x - g.x
        }
        function n(a, g, b) {
            g = g || {};
            l(b) ? (this.predefinedThemes = Oa,
            this.optionsName = this.parent = this.index = null) : (this.parent = b.parent,
            this.index = b.index,
            this.predefinedThemes = b.predefinedThemes,
            this.optionsName = b.optionsName,
            this.stockChart = b.stockChart,
            this.panel = a,
            this.isOptionsInArray = b.isOptionsInArray);
            this.theme = l(g.theme) || l(this.predefinedThemes[g.theme]) ? "light1" : g.theme;
            n.base.constructor.call(this, "Chart", this.optionsName, g, this.index, this.parent);
            var c = this;
            this._containerId = a;
            this._objectsInitialized = !1;
            this.overlaidCanvasCtx = this.ctx = null;
            this._indexLabels = [];
            this._panTimerId = 0;
            this._lastTouchEventType = "";
            this._lastTouchData = null;
            this.isAnimating = !1;
            this.renderCount = 0;
            this.disableToolTip = this.animatedRender = !1;
            this.canvasPool = new Xa;
            this.allDOMEventHandlers = [];
            this.panEnabled = !1;
            this._defaultCursor = "default";
            this.plotArea = {
                canvas: null,
                ctx: null,
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 0,
                width: 0,
                height: 0
            };
            this._dataInRenderedOrder = [];
            (this.container = "string" === typeof this._containerId ? document.getElementById(this._containerId) : this._containerId) ? (this.container.innerHTML = "",
            g = a = 0,
            g = cb(this.container),
            a = this.options.width ? this.width : 0 < this.container.clientWidth - parseFloat(g.paddingLeft) - parseFloat(g.paddingRight) ? this.container.clientWidth - parseFloat(g.paddingLeft) - parseFloat(g.paddingRight) : this.width,
            g = b && b.height ? b.height : this.options.height ? this.height : 0 < this.container.clientHeight - parseFloat(g.paddingTop) - parseFloat(g.paddingBottom) ? this.container.clientHeight - parseFloat(g.paddingTop) - parseFloat(g.paddingBottom) : this.height,
            this.width = a,
            this.height = g,
            this.x1 = this.y1 = 0,
            this.x2 = this.width,
            this.y2 = this.height,
            this.selectedColorSet = "undefined" !== typeof Ba[this.colorSet] ? Ba[this.colorSet] : Ba.colorSet1,
            this._canvasJSContainer = document.createElement("div"),
            this._canvasJSContainer.setAttribute("class", "canvasjs-chart-container"),
            this._canvasJSContainer.style.position = "relative",
            this._canvasJSContainer.style.textAlign = "left",
            this._canvasJSContainer.style.cursor = "auto",
            this._canvasJSContainer.style.direction = "ltr",
            s || (this._canvasJSContainer.style.height = "0px"),
            this.container.appendChild(this._canvasJSContainer),
            this.canvas = ua(a, g),
            this._preRenderCanvas = ua(a, g),
            this.canvas.style.position = "absolute",
            this.canvas.style.WebkitUserSelect = "none",
            this.canvas.style.MozUserSelect = "none",
            this.canvas.style.msUserSelect = "none",
            this.canvas.style.userSelect = "none",
            this.canvas.getContext && (this._canvasJSContainer.appendChild(this.canvas),
            this.ctx = this.canvas.getContext("2d"),
            this.ctx.textBaseline = "top",
            za(this.ctx),
            this._preRenderCtx = this._preRenderCanvas.getContext("2d"),
            this._preRenderCtx.textBaseline = "top",
            za(this._preRenderCtx),
            s ? this.plotArea.ctx = this.ctx : (this.plotArea.canvas = ua(a, g),
            this.plotArea.canvas.style.position = "absolute",
            this.plotArea.canvas.setAttribute("class", "plotAreaCanvas"),
            this._canvasJSContainer.appendChild(this.plotArea.canvas),
            this.plotArea.ctx = this.plotArea.canvas.getContext("2d")),
            this.overlaidCanvas = ua(a, g),
            this.overlaidCanvas.style.position = "absolute",
            this.overlaidCanvas.style.webkitTapHighlightColor = "transparent",
            this.overlaidCanvas.style.WebkitUserSelect = "none",
            this.overlaidCanvas.style.MozUserSelect = "none",
            this.overlaidCanvas.style.msUserSelect = "none",
            this.overlaidCanvas.style.userSelect = "none",
            this.overlaidCanvas.getContext && (this._canvasJSContainer.appendChild(this.overlaidCanvas),
            this.overlaidCanvasCtx = this.overlaidCanvas.getContext("2d"),
            this.overlaidCanvasCtx.textBaseline = "top",
            za(this.overlaidCanvasCtx)),
            this._eventManager = new ia(this),
            this.windowResizeHandler = V(window, "resize", function() {
                c._updateSize() && (c.render(),
                c.isNavigator && (c.stockChart && c.stockChart.navigator && c.stockChart.navigator.enabled) && c.stockChart.navigator._updateSlider(c.stockChart._axisXMin, c.stockChart._axisXMax))
            }, this.allDOMEventHandlers),
            this._toolBar = document.createElement("div"),
            this._toolBar.setAttribute("class", "canvasjs-chart-toolbar"),
            S(this._toolBar, {
                position: "absolute",
                right: "1px",
                top: "1px",
                webkitTapHighlightColor: "transparent"
            }),
            this._canvasJSContainer.appendChild(this._toolBar),
            this.bounds = {
                x1: 0,
                y1: 0,
                x2: this.width,
                y2: this.height
            },
            V(this.overlaidCanvas, "click", function(a) {
                c._mouseEventHandler(a)
            }, this.allDOMEventHandlers),
            V(this.overlaidCanvas, "mousemove", function(a) {
                c._mouseEventHandler(a)
            }, this.allDOMEventHandlers),
            V(this.overlaidCanvas, "mouseup", function(a) {
                c._mouseEventHandler(a)
            }, this.allDOMEventHandlers),
            V(this.overlaidCanvas, "mousedown", function(a) {
                c._mouseEventHandler(a);
                wa(c._dropdownMenu)
            }, this.allDOMEventHandlers),
            V(this.overlaidCanvas, "mouseout", function(a) {
                c._mouseEventHandler(a)
            }, this.allDOMEventHandlers),
            V(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerDown" : "touchstart", function(a) {
                c._touchEventHandler(a)
            }, this.allDOMEventHandlers),
            V(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerMove" : "touchmove", function(a) {
                c._touchEventHandler(a)
            }, this.allDOMEventHandlers),
            V(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerUp" : "touchend", function(a) {
                c._touchEventHandler(a)
            }, this.allDOMEventHandlers),
            V(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerCancel" : "touchcancel", function(a) {
                c._touchEventHandler(a)
            }, this.allDOMEventHandlers),
            this.toolTip = new na(this,this.options.toolTip),
            this.data = null,
            this.axisX = [],
            this.axisX2 = [],
            this.axisY = [],
            this.axisY2 = [],
            this.sessionVariables = {
                axisX: [],
                axisX2: [],
                axisY: [],
                axisY2: []
            })) : window.console && window.console.log('CanvasJS Error: Chart Container with id "' + this._containerId + '" was not found')
        }
        function u(a, g) {
            for (var b = [], c, d = 0; d < a.length; d++)
                if (0 == d)
                    b.push(a[0]);
                else {
                    var e, t, w;
                    w = d - 1;
                    e = 0 === w ? 0 : w - 1;
                    t = w === a.length - 1 ? w : w + 1;
                    c = Math.abs((a[t].x - a[e].x) / (0 === a[t].x - a[w].x ? 0.01 : a[t].x - a[w].x)) * (g - 1) / 2 + 1;
                    var I = (a[t].x - a[e].x) / c;
                    c = (a[t].y - a[e].y) / c;
                    b[b.length] = a[w].x > a[e].x && 0 < I || a[w].x < a[e].x && 0 > I ? {
                        x: a[w].x + I / 3,
                        y: a[w].y + c / 3
                    } : {
                        x: a[w].x,
                        y: a[w].y + (1 === b.length ? 0 : c / 9)
                    };
                    w = d;
                    e = 0 === w ? 0 : w - 1;
                    t = w === a.length - 1 ? w : w + 1;
                    c = Math.abs((a[t].x - a[e].x) / (0 === a[w].x - a[e].x ? 0.01 : a[w].x - a[e].x)) * (g - 1) / 2 + 1;
                    I = (a[t].x - a[e].x) / c;
                    c = (a[t].y - a[e].y) / c;
                    b[b.length] = a[w].x > a[e].x && 0 < I || a[w].x < a[e].x && 0 > I ? {
                        x: a[w].x - I / 3,
                        y: a[w].y - c / 3
                    } : {
                        x: a[w].x,
                        y: a[w].y - c / 9
                    };
                    b[b.length] = a[d]
                }
            return b
        }
        function C(a, g, b, c, d, e, t, w, I, k) {
            var p = 0;
            k ? (t.color = e,
            w.color = e) : k = 1;
            p = I ? Math.abs(d - b) : Math.abs(c - g);
            p = 0 < t.trimLength ? Math.abs(p * t.trimLength / 100) : Math.abs(p - t.length);
            I ? (b += p / 2,
            d -= p / 2) : (g += p / 2,
            c -= p / 2);
            var p = 1 === Math.round(t.thickness) % 2 ? 0.5 : 0
              , m = 1 === Math.round(w.thickness) % 2 ? 0.5 : 0;
            a.save();
            a.globalAlpha = k;
            a.strokeStyle = w.color || e;
            a.lineWidth = w.thickness || 2;
            a.setLineDash && a.setLineDash(J(w.dashType, w.thickness));
            a.beginPath();
            I && 0 < w.thickness ? (a.moveTo(c - t.thickness / 2, Math.round((b + d) / 2) - m),
            a.lineTo(g + t.thickness / 2, Math.round((b + d) / 2) - m)) : 0 < w.thickness && (a.moveTo(Math.round((g + c) / 2) - m, b + t.thickness / 2),
            a.lineTo(Math.round((g + c) / 2) - m, d - t.thickness / 2));
            a.stroke();
            a.strokeStyle = t.color || e;
            a.lineWidth = t.thickness || 2;
            a.setLineDash && a.setLineDash(J(t.dashType, t.thickness));
            a.beginPath();
            I && 0 < t.thickness ? (a.moveTo(c - p, b),
            a.lineTo(c - p, d),
            a.moveTo(g + p, b),
            a.lineTo(g + p, d)) : 0 < t.thickness && (a.moveTo(g, b + p),
            a.lineTo(c, b + p),
            a.moveTo(g, d - p),
            a.lineTo(c, d - p));
            a.stroke();
            a.restore()
        }
        function D(a, g) {
            D.base.constructor.call(this, "Legend", "legend", g, null, a);
            this.chart = a;
            this.canvas = a.canvas;
            this.ctx = this.chart.ctx;
            this.ghostCtx = this.chart._eventManager.ghostCtx;
            this.items = [];
            this.optionsName = "legend";
            this.height = this.width = 0;
            this.orientation = null;
            this.dataSeries = [];
            this.bounds = {
                x1: null,
                y1: null,
                x2: null,
                y2: null
            };
            "undefined" === typeof this.options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
            this.lineHeight = Za(this.fontFamily, this.fontSize, this.fontWeight);
            this.horizontalSpacing = this.fontSize
        }
        function Q(a, g, b, c) {
            Q.base.constructor.call(this, "DataSeries", "data", g, b, a);
            this.chart = a;
            this.canvas = a.canvas;
            this._ctx = a.canvas.ctx;
            this.index = b;
            this.noDataPointsInPlotArea = 0;
            this.id = c;
            this.chart._eventManager.objectMap[c] = {
                id: c,
                objectType: "dataSeries",
                dataSeriesIndex: b
            };
            a = g.dataPoints ? g.dataPoints.length : 0;
            this.dataPointEOs = [];
            for (g = 0; g < a; g++)
                this.dataPointEOs[g] = {};
            this.dataPointIds = [];
            this.plotUnit = [];
            this.axisY = this.axisX = null;
            this.optionsName = "data";
            this.isOptionsInArray = !0;
            null === this.fillOpacity && (this.type.match(/area/i) ? this.fillOpacity = 0.7 : this.fillOpacity = 1);
            this.axisPlacement = this.getDefaultAxisPlacement();
            "undefined" === typeof this.options.indexLabelFontSize && (this.indexLabelFontSize = this.chart.getAutoFontSize(this.indexLabelFontSize))
        }
        function A(a, g, b, c, d, e) {
            A.base.constructor.call(this, "Axis", g, b, c, a);
            this.chart = a;
            this.canvas = a.canvas;
            this.ctx = a.ctx;
            this.intervalStartPosition = this.maxHeight = this.maxWidth = 0;
            this.labels = [];
            this.dataSeries = [];
            this._stripLineLabels = this._ticks = this._labels = null;
            this.dataInfo = {
                min: Infinity,
                max: -Infinity,
                viewPortMin: Infinity,
                viewPortMax: -Infinity,
                minDiff: Infinity
            };
            this.isOptionsInArray = !0;
            "axisX" === d ? ("left" === e || "bottom" === e ? (this.optionsName = "axisX",
            l(this.chart.sessionVariables.axisX[c]) && (this.chart.sessionVariables.axisX[c] = {}),
            this.sessionVariables = this.chart.sessionVariables.axisX[c]) : (this.optionsName = "axisX2",
            l(this.chart.sessionVariables.axisX2[c]) && (this.chart.sessionVariables.axisX2[c] = {}),
            this.sessionVariables = this.chart.sessionVariables.axisX2[c]),
            this.options.interval || (this.intervalType = null)) : "left" === e || "bottom" === e ? (this.optionsName = "axisY",
            l(this.chart.sessionVariables.axisY[c]) && (this.chart.sessionVariables.axisY[c] = {}),
            this.sessionVariables = this.chart.sessionVariables.axisY[c]) : (this.optionsName = "axisY2",
            l(this.chart.sessionVariables.axisY2[c]) && (this.chart.sessionVariables.axisY2[c] = {}),
            this.sessionVariables = this.chart.sessionVariables.axisY2[c]);
            "undefined" === typeof this.options.titleFontSize && (this.titleFontSize = this.chart.getAutoFontSize(this.titleFontSize));
            "undefined" === typeof this.options.labelFontSize && (this.labelFontSize = this.chart.getAutoFontSize(this.labelFontSize));
            this.type = d;
            "axisX" !== d || b && "undefined" !== typeof b.gridThickness || (this.gridThickness = 0);
            this._position = e;
            this.lineCoordinates = {
                x1: null,
                y1: null,
                x2: null,
                y2: null,
                width: null
            };
            this.labelAngle = (this.labelAngle % 360 + 360) % 360;
            90 < this.labelAngle && 270 > this.labelAngle ? this.labelAngle -= 180 : 270 <= this.labelAngle && 360 >= this.labelAngle && (this.labelAngle -= 360);
            this.options.scaleBreaks && (this.scaleBreaks = new W(this.chart,this.options.scaleBreaks,++this.chart._eventManager.lastObjectId,this));
            this.stripLines = [];
            if (this.options.stripLines && 0 < this.options.stripLines.length)
                for (a = 0; a < this.options.stripLines.length; a++)
                    this.stripLines.push(new ha(this.chart,this.options.stripLines[a],a,++this.chart._eventManager.lastObjectId,this));
            this.options.crosshair && (this.crosshair = new ea(this.chart,this.options.crosshair,this),
            this.crosshair._updatedValue = l(this.sessionVariables.crosshairValue) ? null : this.sessionVariables.crosshairValue);
            this._titleTextBlock = null;
            this.hasOptionChanged("viewportMinimum") && null === this.viewportMinimum && (this.options.viewportMinimum = void 0,
            this.sessionVariables.viewportMinimum = null);
            this.hasOptionChanged("viewportMinimum") || isNaN(this.sessionVariables.newViewportMinimum) || null === this.sessionVariables.newViewportMinimum ? this.sessionVariables.newViewportMinimum = null : this.viewportMinimum = this.sessionVariables.newViewportMinimum;
            this.hasOptionChanged("viewportMaximum") && null === this.viewportMaximum && (this.options.viewportMaximum = void 0,
            this.sessionVariables.viewportMaximum = null);
            this.hasOptionChanged("viewportMaximum") || isNaN(this.sessionVariables.newViewportMaximum) || null === this.sessionVariables.newViewportMaximum ? this.sessionVariables.newViewportMaximum = null : this.viewportMaximum = this.sessionVariables.newViewportMaximum;
            null !== this.minimum && null !== this.viewportMinimum && (this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum));
            null !== this.maximum && null !== this.viewportMaximum && (this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum));
            this.trackChanges("viewportMinimum");
            this.trackChanges("viewportMaximum")
        }
        function W(a, g, b, c) {
            W.base.constructor.call(this, "ScaleBreaks", "scaleBreaks", g, null, c);
            this.id = b;
            this.chart = a;
            this.ctx = this.chart.ctx;
            this.axis = c;
            this.optionsName = "scaleBreaks";
            this.isOptionsInArray = !1;
            this._appliedBreaks = [];
            this.customBreaks = [];
            this.autoBreaks = [];
            "string" === typeof this.spacing ? (this.spacing = parseFloat(this.spacing),
            this.spacing = isNaN(this.spacing) ? 8 : (10 < this.spacing ? 10 : this.spacing) + "%") : "number" !== typeof this.spacing && (this.spacing = 8);
            this.autoCalculate && (this.maxNumberOfAutoBreaks = Math.min(this.maxNumberOfAutoBreaks, 5));
            if (this.options.customBreaks && 0 < this.options.customBreaks.length) {
                for (a = 0; a < this.options.customBreaks.length; a++)
                    this.customBreaks.push(new Y(this.chart,"customBreaks",this.options.customBreaks[a],a,++this.chart._eventManager.lastObjectId,this)),
                    "number" === typeof this.customBreaks[a].startValue && ("number" === typeof this.customBreaks[a].endValue && this.customBreaks[a].endValue !== this.customBreaks[a].startValue) && this._appliedBreaks.push(this.customBreaks[a]);
                this._appliedBreaks.sort(function(a, c) {
                    return a.startValue - c.startValue
                });
                for (a = 0; a < this._appliedBreaks.length - 1; a++)
                    this._appliedBreaks[a].endValue >= this._appliedBreaks[a + 1].startValue && (this._appliedBreaks[a].endValue = Math.max(this._appliedBreaks[a].endValue, this._appliedBreaks[a + 1].endValue),
                    window.console && window.console.log("CanvasJS Error: Breaks " + a + " and " + (a + 1) + " are overlapping."),
                    this._appliedBreaks.splice(a, 2),
                    a--)
            }
        }
        function Y(a, g, b, c, d, e) {
            Y.base.constructor.call(this, "Break", g, b, c, e);
            this.id = d;
            this.chart = a;
            this.ctx = this.chart.ctx;
            this.scaleBreaks = e;
            this.optionsName = g;
            this.isOptionsInArray = !0;
            this.type = b.type ? this.type : e.type;
            this.fillOpacity = l(b.fillOpacity) ? e.fillOpacity : this.fillOpacity;
            this.lineThickness = l(b.lineThickness) ? e.lineThickness : this.lineThickness;
            this.color = b.color ? this.color : e.color;
            this.lineColor = b.lineColor ? this.lineColor : e.lineColor;
            this.lineDashType = b.lineDashType ? this.lineDashType : e.lineDashType;
            !l(this.startValue) && this.startValue.getTime && (this.startValue = this.startValue.getTime());
            !l(this.endValue) && this.endValue.getTime && (this.endValue = this.endValue.getTime());
            "number" === typeof this.startValue && ("number" === typeof this.endValue && this.endValue < this.startValue) && (a = this.startValue,
            this.startValue = this.endValue,
            this.endValue = a);
            this.spacing = "undefined" === typeof b.spacing ? e.spacing : b.spacing;
            "string" === typeof this.options.spacing ? (this.spacing = parseFloat(this.spacing),
            this.spacing = isNaN(this.spacing) ? 0 : (10 < this.spacing ? 10 : this.spacing) + "%") : "number" !== typeof this.options.spacing && (this.spacing = e.spacing);
            this.size = e.parent.logarithmic ? 1 : 0
        }
        function ha(a, g, b, c, d) {
            ha.base.constructor.call(this, "StripLine", "stripLines", g, b, d);
            this.id = c;
            this.chart = a;
            this.ctx = this.chart.ctx;
            this.label = this.label;
            this.axis = d;
            this.optionsName = "stripLines";
            this.isOptionsInArray = !0;
            this._thicknessType = "pixel";
            null !== this.startValue && null !== this.endValue && (this.value = d.logarithmic ? Math.sqrt((this.startValue.getTime ? this.startValue.getTime() : this.startValue) * (this.endValue.getTime ? this.endValue.getTime() : this.endValue)) : ((this.startValue.getTime ? this.startValue.getTime() : this.startValue) + (this.endValue.getTime ? this.endValue.getTime() : this.endValue)) / 2,
            this._thicknessType = null)
        }
        function ea(a, g, b) {
            ea.base.constructor.call(this, "Crosshair", "crosshair", g, null, b);
            this.chart = a;
            this.ctx = this.chart.ctx;
            this.axis = b;
            this.optionsName = "crosshair";
            this._thicknessType = "pixel"
        }
        function na(a, g) {
            na.base.constructor.call(this, "ToolTip", "toolTip", g, null, a);
            this.chart = a;
            this.canvas = a.canvas;
            this.ctx = this.chart.ctx;
            this.currentDataPointIndex = this.currentSeriesIndex = -1;
            this._prevY = this._prevX = NaN;
            this.containerTransitionDuration = 0.1;
            this.mozContainerTransition = this.getContainerTransition(this.containerTransitionDuration);
            this.optionsName = "toolTip";
            this._initialize()
        }
        function ia(a) {
            this.chart = a;
            this.lastObjectId = 0;
            this.objectMap = [];
            this.rectangularRegionEventSubscriptions = [];
            this.previousDataPointEventObject = null;
            this.ghostCanvas = ua(this.chart.width, this.chart.height, !0);
            this.ghostCtx = this.ghostCanvas.getContext("2d");
            this.mouseoveredObjectMaps = []
        }
        function la(a) {
            this.chart = a;
            this.ctx = this.chart.plotArea.ctx;
            this.animations = [];
            this.animationRequestId = null
        }
        qa(n, P);
        n.prototype.destroy = function() {
            var a = this.allDOMEventHandlers;
            this._animator && this._animator.cancelAllAnimations();
            this._panTimerId && clearTimeout(this._panTimerId);
            for (var g = 0; g < a.length; g++) {
                var b = a[g][0]
                  , c = a[g][1]
                  , d = a[g][2]
                  , e = a[g][3]
                  , e = e || !1;
                b.removeEventListener ? b.removeEventListener(c, d, e) : b.detachEvent && b.detachEvent("on" + c, d)
            }
            this.allDOMEventHandlers = [];
            for (this.removeAllEventListeners(); this._canvasJSContainer && this._canvasJSContainer.hasChildNodes(); )
                this._canvasJSContainer.removeChild(this._canvasJSContainer.lastChild);
            for (; this.container && this.container.hasChildNodes(); )
                this.container.removeChild(this.container.lastChild);
            for (; this._dropdownMenu && this._dropdownMenu.hasChildNodes(); )
                this._dropdownMenu.removeChild(this._dropdownMenu.lastChild);
            this.container = this._canvasJSContainer = null;
            this.toolTip.container = null;
            this.canvas && ya(this.canvas);
            this.overlaidCanvas && ya(this.overlaidCanvas);
            this._preRenderCanvas && ya(this._preRenderCanvas);
            this._breaksCanvas && ya(this._breaksCanvas);
            this._eventManager && this._eventManager.ghostCanvas && ya(this._eventManager.ghostCanvas);
            this._toolBar = this._dropdownMenu = this._menuButton = this._resetButton = this._zoomButton = null
        }
        ;
        n.prototype._updateOptions = function() {
            var a = this;
            this.updateOption("width");
            this.updateOption("height");
            this.updateOption("dataPointWidth");
            this.updateOption("dataPointMinWidth");
            this.updateOption("dataPointMaxWidth");
            this.updateOption("interactivityEnabled");
            this.updateOption("theme");
            this.stockChart && this.stockChart.options && "undefined" !== typeof this.stockChart.options.theme && l(this.options.theme) ? this.theme = this.stockChart.theme : l(this.stockChart) && l(this.theme) && (this.theme = "light1");
            this.updateOption("colorSet") && (this.selectedColorSet = "undefined" !== typeof Ba[this.colorSet] ? Ba[this.colorSet] : Ba.colorSet1);
            this.updateOption("backgroundColor");
            this.stockChart && (this.stockChart.options && "undefined" !== typeof this.stockChart.options.backgroundColor && l(this.options.backgroundColor)) && (this.backgroundColor = this.stockChart.backgroundColor);
            this.backgroundColor || (this.backgroundColor = "rgba(0,0,0,0)");
            this.updateOption("culture");
            this.stockChart && l(this.options.culture) && (this.culture = this.stockChart.culture);
            this._cultureInfo = new Ja(this.culture);
            this.updateOption("animationEnabled");
            this.animationEnabled = this.animationEnabled && s;
            this.updateOption("animationDuration");
            this.updateOption("rangeChanging");
            this.updateOption("rangeChanged");
            this.updateOption("exportEnabled");
            this.updateOption("exportFileName");
            this.updateOption("zoomType");
            this.toolbar = new Wa(this,this.options.toolbar);
            if (this.stockChart && this.stockChart.options && this.stockChart.options.toolbar && !this.options.toolbar)
                for (var g in this.stockChart.options.toolbar)
                    this.toolbar[g] = this.stockChart.options.toolbar[g];
            if (this.options.zoomEnabled || this.panEnabled) {
                if (this._zoomButton)
                    S(this._zoomButton, {
                        border: this.toolbar.buttonBorderThickness + "px solid " + this.toolbar.buttonBorderColor,
                        height: 2 * this.toolbar.buttonBorderThickness + 25 + "px",
                        width: 2 * this.toolbar.buttonBorderThickness + 40 + "px",
                        backgroundColor: a.toolbar.itemBackgroundColor,
                        color: a.toolbar.fontColor
                    }),
                    0 >= navigator.userAgent.search("MSIE") && this._zoomButton.childNodes[0] && S(this._zoomButton.childNodes[0], {
                        WebkitFilter: "invert(0%)",
                        filter: "invert(0%)"
                    });
                else {
                    var b = !1;
                    wa(this._zoomButton = document.createElement("button"));
                    ta(this, this._zoomButton, "pan");
                    this._toolBar.appendChild(this._zoomButton);
                    S(this._zoomButton, {
                        border: this.toolbar.buttonBorderThickness + "px solid " + this.toolbar.buttonBorderColor,
                        height: 2 * this.toolbar.buttonBorderThickness + 25 + "px",
                        width: 2 * this.toolbar.buttonBorderThickness + 40 + "px",
                        backgroundClip: "padding-box"
                    });
                    V(this._zoomButton, "touchstart", function(a) {
                        b = !0
                    }, this.allDOMEventHandlers);
                    V(this._zoomButton, "click", function() {
                        a.zoomEnabled ? (a.zoomEnabled = !1,
                        a.panEnabled = !0,
                        ta(a, a._zoomButton, "zoom")) : (a.zoomEnabled = !0,
                        a.panEnabled = !1,
                        ta(a, a._zoomButton, "pan"));
                        a.render()
                    }, this.allDOMEventHandlers);
                    V(this._zoomButton, "mousemove", function() {
                        b ? b = !1 : (S(a._zoomButton, {
                            backgroundColor: a.toolbar.itemBackgroundColorOnHover,
                            color: a.toolbar.fontColorOnHover,
                            transition: "0.4s",
                            WebkitTransition: "0.4s"
                        }),
                        0 >= navigator.userAgent.search("MSIE") && S(a._zoomButton.childNodes[0], {
                            WebkitFilter: "invert(100%)",
                            filter: "invert(100%)"
                        }))
                    }, this.allDOMEventHandlers);
                    V(this._zoomButton, "mouseout", function() {
                        b || (S(a._zoomButton, {
                            backgroundColor: a.toolbar.itemBackgroundColor,
                            color: a.toolbar.fontColor,
                            transition: "0.4s",
                            WebkitTransition: "0.4s"
                        }),
                        0 >= navigator.userAgent.search("MSIE") && S(a._zoomButton.childNodes[0], {
                            WebkitFilter: "invert(0%)",
                            filter: "invert(0%)"
                        }))
                    }, this.allDOMEventHandlers)
                }
                this._resetButton ? (S(this._resetButton, {
                    border: this.toolbar.buttonBorderThickness + "px solid " + this.toolbar.buttonBorderColor,
                    borderLeft: "none",
                    height: 2 * this.toolbar.buttonBorderThickness + 25 + "px",
                    width: this.toolbar.buttonBorderThickness + 40 + "px",
                    backgroundColor: a.toolbar.itemBackgroundColor,
                    color: a.toolbar.fontColor
                }),
                0 >= navigator.userAgent.search("MSIE") && this._resetButton.childNodes[0] && S(this._resetButton.childNodes[0], {
                    WebkitFilter: "invert(0%)",
                    filter: "invert(0%)"
                }),
                this._resetButton.title = this._cultureInfo.resetText) : (b = !1,
                wa(this._resetButton = document.createElement("button")),
                ta(this, this._resetButton, "reset"),
                S(this._resetButton, {
                    border: this.toolbar.buttonBorderThickness + "px solid " + this.toolbar.buttonBorderColor,
                    borderLeft: "none",
                    height: 2 * this.toolbar.buttonBorderThickness + 25 + "px",
                    width: this.toolbar.buttonBorderThickness + 40 + "px",
                    backgroundClip: "padding-box"
                }),
                this._toolBar.appendChild(this._resetButton),
                V(this._resetButton, "touchstart", function(a) {
                    b = !0
                }, this.allDOMEventHandlers),
                V(this._resetButton, "click", function() {
                    a.toolTip.hide();
                    a.toolTip && a.toolTip.enabled && a.toolTip.dispatchEvent("hidden", {
                        chart: a,
                        toolTip: a.toolTip
                    }, a.toolTip);
                    a.zoomEnabled || a.panEnabled ? (a.zoomEnabled = !0,
                    a.panEnabled = !1,
                    ta(a, a._zoomButton, "pan"),
                    a._defaultCursor = "default",
                    a.overlaidCanvas.style.cursor = a._defaultCursor) : (a.zoomEnabled = !1,
                    a.panEnabled = !1);
                    if (a.sessionVariables.axisX)
                        for (var c = 0; c < a.sessionVariables.axisX.length; c++)
                            a.sessionVariables.axisX[c].newViewportMinimum = null,
                            a.sessionVariables.axisX[c].newViewportMaximum = null;
                    if (a.sessionVariables.axisX2)
                        for (c = 0; c < a.sessionVariables.axisX2.length; c++)
                            a.sessionVariables.axisX2[c].newViewportMinimum = null,
                            a.sessionVariables.axisX2[c].newViewportMaximum = null;
                    if (a.sessionVariables.axisY)
                        for (c = 0; c < a.sessionVariables.axisY.length; c++)
                            a.sessionVariables.axisY[c].newViewportMinimum = null,
                            a.sessionVariables.axisY[c].newViewportMaximum = null;
                    if (a.sessionVariables.axisY2)
                        for (c = 0; c < a.sessionVariables.axisY2.length; c++)
                            a.sessionVariables.axisY2[c].newViewportMinimum = null,
                            a.sessionVariables.axisY2[c].newViewportMaximum = null;
                    a.resetOverlayedCanvas();
                    0 >= navigator.userAgent.search("MSIE") && S(a._resetButton.childNodes[0], {
                        WebkitFilter: "invert(0%)",
                        filter: "invert(0%)"
                    });
                    wa(a._zoomButton, a._resetButton);
                    a.stockChart && (a.stockChart._rangeEventParameter = {
                        stockChart: a.stockChart,
                        source: "chart",
                        index: a.stockChart.charts.indexOf(a),
                        minimum: null,
                        maximum: null
                    });
                    a._dispatchRangeEvent("rangeChanging", "reset");
                    a.stockChart && (a.stockChart._rangeEventParameter.type = "rangeChanging",
                    a.stockChart.dispatchEvent("rangeChanging", a.stockChart._rangeEventParameter, a.stockChart));
                    a.render();
                    a.syncCharts && a.stockChart && (a.stockChart.rangeUpdatedBy = !a.stockChart.navigator.slider || l(a.stockChart.navigator.slider.options.minimum) && l(a.stockChart.navigator.slider.options.maximum) ? !a.stockChart.rangeSelector.enabled || !a.stockChart.rangeSelector.inputFields.enabled || l(a.stockChart.rangeSelector.inputFields.options.startValue) && l(a.stockChart.rangeSelector.inputFields.options.endValue) ? null : "inputFields" : "navigator",
                    l(a.stockChart._selectedRangeButtonIndex) || (a.stockChart.rangeUpdatedBy = "rangeButton"),
                    a.syncCharts(null, null),
                    a.stockChart.rangeSelector && a.stockChart.rangeSelector.enabled && a.stockChart.rangeSelector.render(),
                    "rangeButton" === a.stockChart.rangeUpdatedBy && a.stockChart.rangeSelector.selectedRangeButtonIndex < a.stockChart.rangeSelector.buttons.length && (c = a.stockChart.rangeSelector.buttons[a.stockChart._selectedRangeButtonIndex],
                    c.enabled && (c.state = "on",
                    c.textBlock.fontWeight = "bold",
                    c.textBlock.fontColor = a.stockChart.rangeSelector.buttonStyle.labelFontColorOnHover,
                    c.textBlock.backgroundColor = a.stockChart.rangeSelector.buttonStyle.backgroundColorOnSelect,
                    a.stockChart.rangeSelector.sessionVariables._clickedRangeButtonIndex = null,
                    c.render())));
                    a._dispatchRangeEvent("rangeChanged", "reset");
                    a.stockChart && (a.stockChart._rangeEventParameter.type = "rangeChanged",
                    a.stockChart.dispatchEvent("rangeChanged", a.stockChart._rangeEventParameter, a.stockChart))
                }, this.allDOMEventHandlers),
                V(this._resetButton, "mousemove", function() {
                    b || (S(a._resetButton, {
                        backgroundColor: a.toolbar.itemBackgroundColorOnHover,
                        color: a.toolbar.fontColorOnHover,
                        transition: "0.4s",
                        WebkitTransition: "0.4s"
                    }),
                    0 >= navigator.userAgent.search("MSIE") && S(a._resetButton.childNodes[0], {
                        WebkitFilter: "invert(100%)",
                        filter: "invert(100%)"
                    }))
                }, this.allDOMEventHandlers),
                V(this._resetButton, "mouseout", function() {
                    b || (S(a._resetButton, {
                        backgroundColor: a.toolbar.itemBackgroundColor,
                        color: a.toolbar.fontColor,
                        transition: "0.4s",
                        WebkitTransition: "0.4s"
                    }),
                    0 >= navigator.userAgent.search("MSIE") && S(a._resetButton.childNodes[0], {
                        WebkitFilter: "invert(0%)",
                        filter: "invert(0%)"
                    }))
                }, this.allDOMEventHandlers),
                this.overlaidCanvas.style.cursor = a._defaultCursor);
                this.zoomEnabled || this.panEnabled || (this._zoomButton ? (a._zoomButton.getAttribute("state") === a._cultureInfo.zoomText ? (this.panEnabled = !0,
                this.zoomEnabled = !1) : (this.zoomEnabled = !0,
                this.panEnabled = !1),
                La(a._zoomButton, a._resetButton)) : (this.zoomEnabled = !0,
                this.panEnabled = !1))
            } else
                this.panEnabled = this.zoomEnabled = !1;
            ib(this);
            "none" !== this._toolBar.style.display && this._zoomButton && (this.panEnabled ? ta(a, a._zoomButton, "zoom") : ta(a, a._zoomButton, "pan"),
            a._resetButton.getAttribute("state") !== a._cultureInfo.resetText && ta(a, a._resetButton, "reset"));
            this.options.toolTip && this.toolTip.options !== this.options.toolTip && (this.toolTip.options = this.options.toolTip);
            for (g in this.toolTip.options)
                this.toolTip.options.hasOwnProperty(g) && this.toolTip.updateOption(g)
        }
        ;
        n.prototype._updateSize = function() {
            var a;
            a = [this.canvas, this.overlaidCanvas, this._eventManager.ghostCanvas];
            var g = 0
              , b = 0
              , c = cb(this.container);
            this.options.width ? g = this.width : this.width = g = 0 < this.container.clientWidth - parseFloat(c.paddingLeft) - parseFloat(c.paddingRight) ? this.container.clientWidth - parseFloat(c.paddingLeft) - parseFloat(c.paddingRight) : this.width;
            l(this.stockChart) || l(this.index) ? this.options.height ? b = this.height : this.height = b = 0 < this.container.clientHeight - parseFloat(c.paddingTop) - parseFloat(c.paddingBottom) ? this.container.clientHeight - parseFloat(c.paddingTop) - parseFloat(c.paddingBottom) : this.height : b = this.height = this.stockChart._chartsHeight[this.index];
            if (this.canvas.width !== g * ma || this.canvas.height !== b * ma) {
                for (c = 0; c < a.length; c++)
                    Ma(a[c], g, b);
                this.bounds = {
                    x1: 0,
                    y1: 0,
                    x2: this.width,
                    y2: this.height,
                    width: this.width,
                    height: this.height
                };
                a = !0
            } else
                a = !1;
            return a
        }
        ;
        n.prototype._initialize = function() {
            this.isNavigator = l(this.parent) || l(this.parent._defaultsKey) || "Navigator" !== this.parent._defaultsKey ? !1 : !0;
            this._animator ? this._animator.cancelAllAnimations() : this._animator = new la(this);
            this.removeAllEventListeners();
            this.disableToolTip = !1;
            this._axes = [];
            this.funnelPyramidClickHandler = this.pieDoughnutClickHandler = null;
            this._updateOptions();
            this.animatedRender = s && this.animationEnabled && 0 === this.renderCount;
            this._updateSize();
            this.clearCanvas();
            this.ctx.beginPath();
            this.axisX = [];
            this.axisX2 = [];
            this.axisY = [];
            this.axisY2 = [];
            this._indexLabels = [];
            this._dataInRenderedOrder = [];
            this._events = [];
            this._eventManager && this._eventManager.reset();
            this.plotInfo = {
                axisPlacement: null,
                plotTypes: []
            };
            this.layoutManager = new Ea(0,0,this.width,this.height,this.isNavigator ? 0 : 2);
            this.plotArea.layoutManager && this.plotArea.layoutManager.reset();
            this.data = [];
            this.title = null;
            this.subtitles = [];
            var a = 0
              , g = null;
            if (this.options.data) {
                for (var b = 0; b < this.options.data.length; b++)
                    if (a++,
                    !this.options.data[b].type || 0 <= n._supportedChartTypes.indexOf(this.options.data[b].type)) {
                        var c = new Q(this,this.options.data[b],a - 1,++this._eventManager.lastObjectId);
                        if (!l(c) && c.dataPoints)
                            for (var d = 0; d < c.dataPoints.length; d++)
                                if (c.dataPoints[d].x && c.dataPoints[d].x.getTime) {
                                    c.xValueType = "dateTime";
                                    break
                                }
                        "error" === c.type && (c.linkedDataSeriesIndex = l(this.options.data[b].linkedDataSeriesIndex) ? b - 1 : this.options.data[b].linkedDataSeriesIndex,
                        0 > c.linkedDataSeriesIndex || c.linkedDataSeriesIndex >= this.options.data.length || "number" !== typeof c.linkedDataSeriesIndex || "error" === this.options.data[c.linkedDataSeriesIndex].type) && (c.linkedDataSeriesIndex = null);
                        null === c.name && (c.name = "DataSeries " + a);
                        null === c.color ? 1 < this.options.data.length ? (c._colorSet = [this.selectedColorSet[c.index % this.selectedColorSet.length]],
                        c.color = this.selectedColorSet[c.index % this.selectedColorSet.length]) : c._colorSet = "line" === c.type || "stepLine" === c.type || "spline" === c.type || "area" === c.type || "stepArea" === c.type || "splineArea" === c.type || "stackedArea" === c.type || "stackedArea100" === c.type || "rangeArea" === c.type || "rangeSplineArea" === c.type || "candlestick" === c.type || "ohlc" === c.type || "waterfall" === c.type || "boxAndWhisker" === c.type ? [this.selectedColorSet[0]] : this.selectedColorSet : c._colorSet = [c.color];
                        null === c.markerSize && (("line" === c.type || "stepLine" === c.type || "spline" === c.type || 0 <= c.type.toLowerCase().indexOf("area")) && c.dataPoints && c.dataPoints.length < this.width / 16 || "scatter" === c.type) && (c.markerSize = 8);
                        "bubble" !== c.type && "scatter" !== c.type || !c.dataPoints || (c.dataPoints.some ? c.dataPoints.some(function(a) {
                            return a.x
                        }) && c.dataPoints.sort(h) : c.dataPoints.sort(h));
                        this.data.push(c);
                        var d = c.axisPlacement, g = g || d, e;
                        "normal" === d ? "xySwapped" === this.plotInfo.axisPlacement ? e = 'You cannot combine "' + c.type + '" with bar chart' : "none" === this.plotInfo.axisPlacement ? e = 'You cannot combine "' + c.type + '" with pie chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "normal") : "xySwapped" === d ? "normal" === this.plotInfo.axisPlacement ? e = 'You cannot combine "' + c.type + '" with line, area, column or pie chart' : "none" === this.plotInfo.axisPlacement ? e = 'You cannot combine "' + c.type + '" with pie chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "xySwapped") : "none" === d ? "normal" === this.plotInfo.axisPlacement ? e = 'You cannot combine "' + c.type + '" with line, area, column or bar chart' : "xySwapped" === this.plotInfo.axisPlacement ? e = 'You cannot combine "' + c.type + '" with bar chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "none") : null === d && "none" === this.plotInfo.axisPlacement && (e = 'You cannot combine "' + c.type + '" with pie chart');
                        if (e && window.console) {
                            window.console.log(e);
                            return
                        }
                    }
                for (b = 0; b < this.data.length; b++) {
                    if ("none" == g && "error" === this.data[b].type && window.console) {
                        window.console.log('You cannot combine "' + c.type + '" with error chart');
                        return
                    }
                    "error" === this.data[b].type && (this.data[b].axisPlacement = this.plotInfo.axisPlacement = g || "normal",
                    this.data[b]._linkedSeries = null === this.data[b].linkedDataSeriesIndex ? null : this.data[this.data[b].linkedDataSeriesIndex])
                }
            }
            this._objectsInitialized = !0;
            this._plotAreaElements = []
        }
        ;
        n._supportedChartTypes = Da("line stepLine spline column area stepArea splineArea bar bubble scatter stackedColumn stackedColumn100 stackedBar stackedBar100 stackedArea stackedArea100 candlestick ohlc boxAndWhisker rangeColumn error rangeBar rangeArea rangeSplineArea pie doughnut funnel pyramid waterfall".split(" "));
        n.prototype.setLayout = function() {
            for (var a = this._plotAreaElements, g = 0; g < this.data.length; g++)
                if ("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) {
                    if (!this.data[g].axisYType || "primary" === this.data[g].axisYType)
                        if (this.options.axisY && 0 < this.options.axisY.length) {
                            if (!this.axisY.length)
                                for (var b = 0; b < this.options.axisY.length; b++)
                                    "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY[b] = new A(this,"axisY",this.options.axisY[b],b,"axisY","left")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY[b] = new A(this,"axisY",this.options.axisY[b],b,"axisY","bottom"));
                            this.data[g].axisY = this.axisY[0 <= this.data[g].axisYIndex && this.data[g].axisYIndex < this.axisY.length ? this.data[g].axisYIndex : 0];
                            this.axisY[0 <= this.data[g].axisYIndex && this.data[g].axisYIndex < this.axisY.length ? this.data[g].axisYIndex : 0].dataSeries.push(this.data[g])
                        } else
                            this.axisY.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY[0] = new A(this,"axisY",this.options.axisY,0,"axisY","left")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY[0] = new A(this,"axisY",this.options.axisY,0,"axisY","bottom"))),
                            this.data[g].axisY = this.axisY[0],
                            this.axisY[0].dataSeries.push(this.data[g]);
                    if ("secondary" === this.data[g].axisYType)
                        if (this.options.axisY2 && 0 < this.options.axisY2.length) {
                            if (!this.axisY2.length)
                                for (b = 0; b < this.options.axisY2.length; b++)
                                    "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY2[b] = new A(this,"axisY2",this.options.axisY2[b],b,"axisY","right")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY2[b] = new A(this,"axisY2",this.options.axisY2[b],b,"axisY","top"));
                            this.data[g].axisY = this.axisY2[0 <= this.data[g].axisYIndex && this.data[g].axisYIndex < this.axisY2.length ? this.data[g].axisYIndex : 0];
                            this.axisY2[0 <= this.data[g].axisYIndex && this.data[g].axisYIndex < this.axisY2.length ? this.data[g].axisYIndex : 0].dataSeries.push(this.data[g])
                        } else
                            this.axisY2.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY2[0] = new A(this,"axisY2",this.options.axisY2,0,"axisY","right")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY2[0] = new A(this,"axisY2",this.options.axisY2,0,"axisY","top"))),
                            this.data[g].axisY = this.axisY2[0],
                            this.axisY2[0].dataSeries.push(this.data[g]);
                    if (!this.data[g].axisXType || "primary" === this.data[g].axisXType)
                        if (this.options.axisX && 0 < this.options.axisX.length) {
                            if (!this.axisX.length)
                                for (b = 0; b < this.options.axisX.length; b++)
                                    "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX[b] = new A(this,"axisX",this.options.axisX[b],b,"axisX","bottom")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX[b] = new A(this,"axisX",this.options.axisX[b],b,"axisX","left"));
                            this.data[g].axisX = this.axisX[0 <= this.data[g].axisXIndex && this.data[g].axisXIndex < this.axisX.length ? this.data[g].axisXIndex : 0];
                            this.axisX[0 <= this.data[g].axisXIndex && this.data[g].axisXIndex < this.axisX.length ? this.data[g].axisXIndex : 0].dataSeries.push(this.data[g])
                        } else
                            this.axisX.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX[0] = new A(this,"axisX",this.options.axisX,0,"axisX","bottom")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX[0] = new A(this,"axisX",this.options.axisX,0,"axisX","left"))),
                            this.data[g].axisX = this.axisX[0],
                            this.axisX[0].dataSeries.push(this.data[g]);
                    if ("secondary" === this.data[g].axisXType)
                        if (this.options.axisX2 && 0 < this.options.axisX2.length) {
                            if (!this.axisX2.length)
                                for (b = 0; b < this.options.axisX2.length; b++)
                                    "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX2[b] = new A(this,"axisX2",this.options.axisX2[b],b,"axisX","top")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX2[b] = new A(this,"axisX2",this.options.axisX2[b],b,"axisX","right"));
                            this.data[g].axisX = this.axisX2[0 <= this.data[g].axisXIndex && this.data[g].axisXIndex < this.axisX2.length ? this.data[g].axisXIndex : 0];
                            this.axisX2[0 <= this.data[g].axisXIndex && this.data[g].axisXIndex < this.axisX2.length ? this.data[g].axisXIndex : 0].dataSeries.push(this.data[g])
                        } else
                            this.axisX2.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX2[0] = new A(this,"axisX2",this.options.axisX2,0,"axisX","top")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX2[0] = new A(this,"axisX2",this.options.axisX2,0,"axisX","right"))),
                            this.data[g].axisX = this.axisX2[0],
                            this.axisX2[0].dataSeries.push(this.data[g])
                }
            if (this.axisY) {
                for (b = 1; b < this.axisY.length; b++)
                    "undefined" === typeof this.axisY[b].options.gridThickness && (this.axisY[b].gridThickness = 0);
                for (b = 0; b < this.axisY.length - 1; b++)
                    "undefined" === typeof this.axisY[b].options.margin && (this.axisY[b].margin = 10)
            }
            if (this.axisY2) {
                for (b = 1; b < this.axisY2.length; b++)
                    "undefined" === typeof this.axisY2[b].options.gridThickness && (this.axisY2[b].gridThickness = 0);
                for (b = 0; b < this.axisY2.length - 1; b++)
                    "undefined" === typeof this.axisY2[b].options.margin && (this.axisY2[b].margin = 10)
            }
            this.axisY && 0 < this.axisY.length && (this.axisY2 && 0 < this.axisY2.length) && (0 < this.axisY[0].gridThickness && "undefined" === typeof this.axisY2[0].options.gridThickness ? this.axisY2[0].gridThickness = 0 : 0 < this.axisY2[0].gridThickness && "undefined" === typeof this.axisY[0].options.gridThickness && (this.axisY[0].gridThickness = 0));
            if (this.axisX)
                for (b = 0; b < this.axisX.length; b++)
                    "undefined" === typeof this.axisX[b].options.gridThickness && (this.axisX[b].gridThickness = 0);
            if (this.axisX2)
                for (b = 0; b < this.axisX2.length; b++)
                    "undefined" === typeof this.axisX2[b].options.gridThickness && (this.axisX2[b].gridThickness = 0);
            this.axisX && 0 < this.axisX.length && (this.axisX2 && 0 < this.axisX2.length) && (0 < this.axisX[0].gridThickness && "undefined" === typeof this.axisX2[0].options.gridThickness ? this.axisX2[0].gridThickness = 0 : 0 < this.axisX2[0].gridThickness && "undefined" === typeof this.axisX[0].options.gridThickness && (this.axisX[0].gridThickness = 0));
            b = !1;
            if (0 < this._axes.length && this.options.zoomEnabled && (this.zoomEnabled || this.panEnabled))
                for (g = 0; g < this._axes.length; g++)
                    if (!l(this._axes[g].viewportMinimum) || !l(this._axes[g].viewportMaximum)) {
                        b = !0;
                        break
                    }
            b ? (this._menuButton && S(this._menuButton, {
                border: this.toolbar.buttonBorderThickness + "px solid " + this.toolbar.buttonBorderColor,
                borderLeft: "none",
                height: 2 * this.toolbar.buttonBorderThickness + 25 + "px",
                width: this.toolbar.buttonBorderThickness + 40 + "px",
                backgroundClip: "padding-box"
            }),
            La(this._zoomButton, this._resetButton),
            this._toolBar.style.border = "none") : (this._menuButton && S(this._menuButton, {
                border: "none",
                height: "25px",
                width: "40px"
            }),
            wa(this._zoomButton, this._resetButton),
            this._toolBar.style.border = this.toolbar.buttonBorderThickness + "px solid transparent",
            this.options.zoomEnabled && (this.zoomEnabled = !0,
            this.panEnabled = !1));
            gb(this);
            this._processData();
            this.options.title && (this.title = new Aa(this,this.options.title),
            this.title.dockInsidePlotArea ? a.push(this.title) : this.title.setLayout());
            if (this.options.subtitles)
                for (g = 0; g < this.options.subtitles.length; g++)
                    b = new Ia(this,this.options.subtitles[g],g),
                    this.subtitles.push(b),
                    b.dockInsidePlotArea ? a.push(b) : b.setLayout();
            this.legend = new D(this,this.options.legend);
            for (g = 0; g < this.data.length; g++)
                (this.data[g].showInLegend || "pie" === this.data[g].type || "doughnut" === this.data[g].type || "funnel" === this.data[g].type || "pyramid" === this.data[g].type) && this.legend.dataSeries.push(this.data[g]);
            this.legend.dockInsidePlotArea ? a.push(this.legend) : this.legend.setLayout();
            for (g = 0; g < this._axes.length; g++)
                if (this._axes[g].scaleBreaks && this._axes[g].scaleBreaks._appliedBreaks.length) {
                    s ? (this._breaksCanvas = ua(this.width, this.height, !0),
                    this._breaksCanvasCtx = this._breaksCanvas.getContext("2d")) : (this._breaksCanvas = this.canvas,
                    this._breaksCanvasCtx = this.ctx);
                    break
                }
            this._preRenderCanvas = ua(this.width, this.height);
            this._preRenderCtx = this._preRenderCanvas.getContext("2d");
            "normal" !== this.plotInfo.axisPlacement && "xySwapped" !== this.plotInfo.axisPlacement || A.setLayout(this.axisX, this.axisX2, this.axisY, this.axisY2, this.plotInfo.axisPlacement, this.layoutManager.getFreeSpace())
        }
        ;
        n.prototype.renderElements = function() {
            if (this.height && this.width) {
                var a = this._plotAreaElements;
                this.title && !this.title.dockInsidePlotArea && this.title.render();
                for (var g = 0; g < this.subtitles.length; g++)
                    this.subtitles[g].dockInsidePlotArea || this.subtitles[g].render();
                this.legend.dockInsidePlotArea || this.legend.render();
                if ("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement)
                    A.render(this.axisX, this.axisX2, this.axisY, this.axisY2, this.plotInfo.axisPlacement);
                else if ("none" === this.plotInfo.axisPlacement)
                    this.preparePlotArea();
                else
                    return;
                for (g = 0; g < a.length; g++)
                    a[g].setLayout(),
                    a[g].render();
                var b = [];
                if (this.animatedRender) {
                    var c = ua(this.width, this.height);
                    c.getContext("2d").drawImage(this.canvas, 0, 0, this.width, this.height)
                }
                jb(this);
                var a = this.ctx.miterLimit, d;
                this.ctx.miterLimit = 3;
                s && this._breaksCanvas && (this._preRenderCtx.drawImage(this.canvas, 0, 0, this.width, this.height),
                this._preRenderCtx.drawImage(this._breaksCanvas, 0, 0, this.width, this.height),
                this._breaksCanvasCtx.globalCompositeOperation = "source-atop",
                this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                this._preRenderCtx.clearRect(0, 0, this.width, this.height));
                for (g = 0; g < this.plotInfo.plotTypes.length; g++)
                    for (var e = this.plotInfo.plotTypes[g], t = 0; t < e.plotUnits.length; t++) {
                        var w = e.plotUnits[t]
                          , I = null;
                        w.targetCanvas && ya(w.targetCanvas);
                        w.targetCanvas = null;
                        this.animatedRender && (w.targetCanvas = ua(this.width, this.height),
                        w.targetCanvasCtx = w.targetCanvas.getContext("2d"),
                        d = w.targetCanvasCtx.miterLimit,
                        w.targetCanvasCtx.miterLimit = 3);
                        "line" === w.type ? I = this.renderLine(w) : "stepLine" === w.type ? I = this.renderStepLine(w) : "spline" === w.type ? I = this.renderSpline(w) : "column" === w.type ? I = this.renderColumn(w) : "bar" === w.type ? I = this.renderBar(w) : "area" === w.type ? I = this.renderArea(w) : "stepArea" === w.type ? I = this.renderStepArea(w) : "splineArea" === w.type ? I = this.renderSplineArea(w) : "stackedColumn" === w.type ? I = this.renderStackedColumn(w) : "stackedColumn100" === w.type ? I = this.renderStackedColumn100(w) : "stackedBar" === w.type ? I = this.renderStackedBar(w) : "stackedBar100" === w.type ? I = this.renderStackedBar100(w) : "stackedArea" === w.type ? I = this.renderStackedArea(w) : "stackedArea100" === w.type ? I = this.renderStackedArea100(w) : "bubble" === w.type ? I = I = this.renderBubble(w) : "scatter" === w.type ? I = this.renderScatter(w) : "pie" === w.type ? this.renderPie(w) : "doughnut" === w.type ? this.renderPie(w) : "funnel" === w.type ? I = this.renderFunnel(w) : "pyramid" === w.type ? I = this.renderFunnel(w) : "candlestick" === w.type ? I = this.renderCandlestick(w) : "ohlc" === w.type ? I = this.renderCandlestick(w) : "rangeColumn" === w.type ? I = this.renderRangeColumn(w) : "error" === w.type ? I = this.renderError(w) : "rangeBar" === w.type ? I = this.renderRangeBar(w) : "rangeArea" === w.type ? I = this.renderRangeArea(w) : "rangeSplineArea" === w.type ? I = this.renderRangeSplineArea(w) : "waterfall" === w.type ? I = this.renderWaterfall(w) : "boxAndWhisker" === w.type && (I = this.renderBoxAndWhisker(w));
                        for (var k = 0; k < w.dataSeriesIndexes.length; k++)
                            this._dataInRenderedOrder.push(this.data[w.dataSeriesIndexes[k]]);
                        this.animatedRender && (w.targetCanvasCtx.miterLimit = d,
                        I && b.push(I))
                    }
                this.ctx.miterLimit = a;
                this.animatedRender && this._breaksCanvasCtx && b.push({
                    source: this._breaksCanvasCtx,
                    dest: this.plotArea.ctx,
                    animationCallback: M.fadeInAnimation,
                    easingFunction: M.easing.easeInQuad,
                    animationBase: 0,
                    startTimePercent: 0.7
                });
                this.animatedRender && 0 < this._indexLabels.length && (d = ua(this.width, this.height).getContext("2d"),
                za(d),
                b.push(this.renderIndexLabels(d)));
                var p = this;
                if (0 < b.length)
                    p.disableToolTip = !0,
                    p._animator.animate(200, p.animationDuration, function(a) {
                        p.ctx.clearRect(0, 0, p.width, p.height);
                        p.ctx.drawImage(c, 0, 0, Math.floor(p.width * ma), Math.floor(p.height * ma), 0, 0, p.width, p.height);
                        for (var d = 0; d < b.length; d++)
                            I = b[d],
                            1 > a && "undefined" !== typeof I.startTimePercent ? a >= I.startTimePercent && I.animationCallback(I.easingFunction(a - I.startTimePercent, 0, 1, 1 - I.startTimePercent), I) : I.animationCallback(I.easingFunction(a, 0, 1, 1), I);
                        p.dispatchEvent("dataAnimationIterationEnd", {
                            chart: p
                        })
                    }, function() {
                        b = [];
                        for (var a = 0; a < p.plotInfo.plotTypes.length; a++)
                            for (var d = p.plotInfo.plotTypes[a], f = 0; f < d.plotUnits.length; f++) {
                                var e = d.plotUnits[f];
                                e.targetCanvas && ya(e.targetCanvas);
                                e.targetCanvas = null
                            }
                        c = null;
                        p.disableToolTip = !1;
                        p.dispatchEvent("dataAnimationEnd", {
                            chart: p
                        })
                    });
                else {
                    if (p._breaksCanvas)
                        if (s)
                            p.plotArea.ctx.drawImage(p._breaksCanvas, 0, 0, this.width, this.height);
                        else
                            for (k = 0; k < p._axes.length; k++)
                                p._axes[k].createMask();
                    0 < p._indexLabels.length && p.renderIndexLabels();
                    p.dispatchEvent("dataAnimationIterationEnd", {
                        chart: p
                    });
                    p.dispatchEvent("dataAnimationEnd", {
                        chart: p
                    })
                }
                this.attachPlotAreaEventHandlers();
                this.zoomEnabled || (this.panEnabled || !this._zoomButton || "none" === this._zoomButton.style.display) || wa(this._zoomButton, this._resetButton);
                l(this.toolTip._xValue) || l(this.toolTip._dataSeriesIndex) || this.toolTip.showAtX(this.toolTip._xValue, this.toolTip._dataSeriesIndex);
                this.toolTip._updateToolTip();
                this.toolTip.enabled && this.toolTip._updatedEventParameters && !isNaN(this.toolTip._prevX) && !isNaN(this.toolTip._prevY) && this.toolTip.container && this.toolTip.container.style && this.toolTip.dispatchEvent("none" === this.toolTip.container.style.display ? "hidden" : "updated", this.toolTip._updatedEventParameters, this.toolTip);
                this.renderCount++;
                Ha && (p = this,
                setTimeout(function() {
                    var a = document.getElementById("ghostCanvasCopy");
                    a && (Ma(a, p.width, p.height),
                    a.getContext("2d").drawImage(p._eventManager.ghostCanvas, 0, 0))
                }, 2E3));
                this._breaksCanvas && (delete this._breaksCanvas,
                delete this._breaksCanvasCtx);
                for (k = 0; k < this._axes.length; k++)
                    this._axes[k].maskCanvas && (delete this._axes[k].maskCanvas,
                    delete this._axes[k].maskCtx)
            }
        }
        ;
        n.prototype.render = function(a) {
            a && (this.options = a);
            this._initialize();
            this.setLayout();
            this.renderElements();
            this._preRenderCanvas && ya(this._preRenderCanvas)
        }
        ;
        n.prototype.attachPlotAreaEventHandlers = function() {
            this.attachEvent({
                context: this,
                chart: this,
                mousedown: this._plotAreaMouseDown,
                mouseup: this._plotAreaMouseUp,
                mousemove: this._plotAreaMouseMove,
                cursor: this.panEnabled ? "move" : "default",
                capture: !0,
                bounds: this.plotArea
            })
        }
        ;
        n.prototype.categoriseDataSeries = function() {
            for (var a = "", g = 0; g < this.data.length; g++)
                if (a = this.data[g],
                a.dataPoints && (0 !== a.dataPoints.length && a.visible) && 0 <= n._supportedChartTypes.indexOf(a.type)) {
                    for (var b = null, c = !1, d = null, e = !1, t = 0; t < this.plotInfo.plotTypes.length; t++)
                        if (this.plotInfo.plotTypes[t].type === a.type) {
                            c = !0;
                            b = this.plotInfo.plotTypes[t];
                            break
                        }
                    c || (b = {
                        type: a.type,
                        totalDataSeries: 0,
                        plotUnits: []
                    },
                    this.plotInfo.plotTypes.push(b));
                    for (t = 0; t < b.plotUnits.length; t++)
                        if (b.plotUnits[t].axisYType === a.axisYType && b.plotUnits[t].axisXType === a.axisXType && b.plotUnits[t].axisYIndex === a.axisYIndex && b.plotUnits[t].axisXIndex === a.axisXIndex) {
                            e = !0;
                            d = b.plotUnits[t];
                            break
                        }
                    e || (d = {
                        type: a.type,
                        previousDataSeriesCount: 0,
                        index: b.plotUnits.length,
                        plotType: b,
                        axisXType: a.axisXType,
                        axisYType: a.axisYType,
                        axisYIndex: a.axisYIndex,
                        axisXIndex: a.axisXIndex,
                        axisY: "primary" === a.axisYType ? this.axisY[0 <= a.axisYIndex && a.axisYIndex < this.axisY.length ? a.axisYIndex : 0] : this.axisY2[0 <= a.axisYIndex && a.axisYIndex < this.axisY2.length ? a.axisYIndex : 0],
                        axisX: "primary" === a.axisXType ? this.axisX[0 <= a.axisXIndex && a.axisXIndex < this.axisX.length ? a.axisXIndex : 0] : this.axisX2[0 <= a.axisXIndex && a.axisXIndex < this.axisX2.length ? a.axisXIndex : 0],
                        dataSeriesIndexes: [],
                        yTotals: [],
                        yAbsTotals: []
                    },
                    b.plotUnits.push(d));
                    b.totalDataSeries++;
                    d.dataSeriesIndexes.push(g);
                    a.plotUnit = d
                }
            for (g = 0; g < this.plotInfo.plotTypes.length; g++)
                for (b = this.plotInfo.plotTypes[g],
                t = a = 0; t < b.plotUnits.length; t++)
                    b.plotUnits[t].previousDataSeriesCount = a,
                    a += b.plotUnits[t].dataSeriesIndexes.length
        }
        ;
        n.prototype.assignIdToDataPoints = function() {
            for (var a = 0; a < this.data.length; a++) {
                var g = this.data[a];
                if (g.dataPoints)
                    for (var b = g.dataPoints.length, c = 0; c < b; c++)
                        g.dataPointIds[c] = ++this._eventManager.lastObjectId
            }
        }
        ;
        n.prototype._processData = function() {
            this.assignIdToDataPoints();
            this.categoriseDataSeries();
            for (var a = 0; a < this.plotInfo.plotTypes.length; a++)
                for (var g = this.plotInfo.plotTypes[a], b = 0; b < g.plotUnits.length; b++) {
                    var c = g.plotUnits[b];
                    "line" === c.type || "stepLine" === c.type || "spline" === c.type || "column" === c.type || "area" === c.type || "stepArea" === c.type || "splineArea" === c.type || "bar" === c.type || "bubble" === c.type || "scatter" === c.type ? this._processMultiseriesPlotUnit(c) : "stackedColumn" === c.type || "stackedBar" === c.type || "stackedArea" === c.type ? this._processStackedPlotUnit(c) : "stackedColumn100" === c.type || "stackedBar100" === c.type || "stackedArea100" === c.type ? this._processStacked100PlotUnit(c) : "candlestick" === c.type || "ohlc" === c.type || "rangeColumn" === c.type || "rangeBar" === c.type || "rangeArea" === c.type || "rangeSplineArea" === c.type || "error" === c.type || "boxAndWhisker" === c.type ? this._processMultiYPlotUnit(c) : "waterfall" === c.type && this._processSpecificPlotUnit(c)
                }
            this.calculateAutoBreaks()
        }
        ;
        n.prototype._processMultiseriesPlotUnit = function(a) {
            if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length))
                for (var g = a.axisY.dataInfo, b = a.axisX.dataInfo, c, d, e = !1, t = 0; t < a.dataSeriesIndexes.length; t++) {
                    var w = this.data[a.dataSeriesIndexes[t]], I = 0, k = !1, p = !1, m;
                    if ("normal" === w.axisPlacement || "xySwapped" === w.axisPlacement)
                        var q = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : a.axisX.options && a.axisX.options.viewportMinimum ? a.axisX.options.viewportMinimum : a.axisX.options && a.axisX.options.minimum ? a.axisX.options.minimum : a.axisX.logarithmic ? 0 : -Infinity
                          , f = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : a.axisX.options && a.axisX.options.viewportMaximum ? a.axisX.options.viewportMaximum : a.axisX.options && a.axisX.options.maximum ? a.axisX.options.maximum : Infinity;
                    if (w.dataPoints[I].x && w.dataPoints[I].x.getTime || "dateTime" === w.xValueType)
                        e = !0;
                    for (I = 0; I < w.dataPoints.length; I++) {
                        "undefined" === typeof w.dataPoints[I].x && (w.dataPoints[I].x = I + (a.axisX.logarithmic ? 1 : 0));
                        w.dataPoints[I].x.getTime ? (e = !0,
                        c = w.dataPoints[I].x.getTime()) : c = w.dataPoints[I].x;
                        d = w.dataPoints[I].y;
                        c < b.min && (b.min = c);
                        c > b.max && (b.max = c);
                        d < g.min && "number" === typeof d && (g.min = d);
                        d > g.max && "number" === typeof d && (g.max = d);
                        if (0 < I) {
                            if (a.axisX.logarithmic) {
                                var h = c / w.dataPoints[I - 1].x;
                                1 > h && (h = 1 / h);
                                b.minDiff > h && 1 !== h && (b.minDiff = h)
                            } else
                                h = c - w.dataPoints[I - 1].x,
                                0 > h && (h *= -1),
                                b.minDiff > h && 0 !== h && (b.minDiff = h);
                            null !== d && null !== w.dataPoints[I - 1].y && (a.axisY.logarithmic ? (h = d / w.dataPoints[I - 1].y,
                            1 > h && (h = 1 / h),
                            g.minDiff > h && 1 !== h && (g.minDiff = h)) : (h = d - w.dataPoints[I - 1].y,
                            0 > h && (h *= -1),
                            g.minDiff > h && 0 !== h && (g.minDiff = h)))
                        }
                        if (c < q && !k)
                            null !== d && (m = c);
                        else {
                            if (!k && (k = !0,
                            0 < I)) {
                                I -= 2;
                                continue
                            }
                            if (c > f && !p)
                                p = !0;
                            else if (c > f && p)
                                continue;
                            w.dataPoints[I].label && (a.axisX.labels[c] = w.dataPoints[I].label);
                            c < b.viewPortMin && (b.viewPortMin = c);
                            c > b.viewPortMax && (b.viewPortMax = c);
                            null === d ? b.viewPortMin === c && m < c && (b.viewPortMin = m) : (d < g.viewPortMin && "number" === typeof d && (g.viewPortMin = d),
                            d > g.viewPortMax && "number" === typeof d && (g.viewPortMax = d))
                        }
                    }
                    w.axisX.valueType = w.xValueType = e ? "dateTime" : "number"
                }
        }
        ;
        n.prototype._processStackedPlotUnit = function(a) {
            if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
                for (var g = a.axisY.dataInfo, b = a.axisX.dataInfo, c, d, e = !1, t = [], w = [], I = Infinity, k = -Infinity, p = {}, m = 0; m < a.dataSeriesIndexes.length; m++) {
                    var q = this.data[a.dataSeriesIndexes[m]], f = 0, h = !1, y = !1, z;
                    if ("normal" === q.axisPlacement || "xySwapped" === q.axisPlacement)
                        var r = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : a.axisX.options && a.axisX.options.viewportMinimum ? a.axisX.options.viewportMinimum : a.axisX.options && a.axisX.options.minimum ? a.axisX.options.minimum : -Infinity
                          , x = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : a.axisX.options && a.axisX.options.viewportMaximum ? a.axisX.options.viewportMaximum : a.axisX.options && a.axisX.options.maximum ? a.axisX.options.maximum : Infinity;
                    if (q.dataPoints[f].x && q.dataPoints[f].x.getTime || "dateTime" === q.xValueType)
                        e = !0;
                    for (f = 0; f < q.dataPoints.length; f++) {
                        "undefined" === typeof q.dataPoints[f].x && (q.dataPoints[f].x = f + (a.axisX.logarithmic ? 1 : 0));
                        q.dataPoints[f].x.getTime ? (e = !0,
                        c = q.dataPoints[f].x.getTime()) : c = q.dataPoints[f].x;
                        d = l(q.dataPoints[f].y) ? 0 : q.dataPoints[f].y;
                        c < b.min && (b.min = c);
                        c > b.max && (b.max = c);
                        if (0 < f) {
                            if (a.axisX.logarithmic) {
                                var v = c / q.dataPoints[f - 1].x;
                                1 > v && (v = 1 / v);
                                b.minDiff > v && 1 !== v && (b.minDiff = v)
                            } else
                                v = c - q.dataPoints[f - 1].x,
                                0 > v && (v *= -1),
                                b.minDiff > v && 0 !== v && (b.minDiff = v);
                            null !== d && null !== q.dataPoints[f - 1].y && (a.axisY.logarithmic ? 0 < d && (v = d / q.dataPoints[f - 1].y,
                            1 > v && (v = 1 / v),
                            g.minDiff > v && 1 !== v && (g.minDiff = v)) : (v = d - q.dataPoints[f - 1].y,
                            0 > v && (v *= -1),
                            g.minDiff > v && 0 !== v && (g.minDiff = v)))
                        }
                        if (c < r && !h)
                            null !== q.dataPoints[f].y && (z = c);
                        else {
                            if (!h && (h = !0,
                            0 < f)) {
                                f -= 2;
                                continue
                            }
                            if (c > x && !y)
                                y = !0;
                            else if (c > x && y)
                                continue;
                            q.dataPoints[f].label && (a.axisX.labels[c] = q.dataPoints[f].label);
                            c < b.viewPortMin && (b.viewPortMin = c);
                            c > b.viewPortMax && (b.viewPortMax = c);
                            null === q.dataPoints[f].y ? b.viewPortMin === c && z < c && (b.viewPortMin = z) : (p[c] = (p[c] || 0) + q.dataPoints[f].y,
                            q.dataPointEOs[f].cumulativeY = p[c],
                            a.yTotals[c] = (a.yTotals[c] ? a.yTotals[c] : 0) + d,
                            a.yAbsTotals[c] = (a.yAbsTotals[c] ? a.yAbsTotals[c] : 0) + Math.abs(d),
                            0 <= d ? t[c] ? t[c] += d : (t[c] = d,
                            I = Math.min(d, I)) : w[c] ? w[c] += d : (w[c] = d,
                            k = Math.max(d, k)))
                        }
                    }
                    a.axisY.scaleBreaks && (a.axisY.scaleBreaks.autoCalculate && 1 <= a.axisY.scaleBreaks.maxNumberOfAutoBreaks) && (g.dataPointYPositiveSums ? (g.dataPointYPositiveSums.push.apply(g.dataPointYPositiveSums, t),
                    g.dataPointYNegativeSums.push.apply(g.dataPointYPositiveSums, w)) : (g.dataPointYPositiveSums = t,
                    g.dataPointYNegativeSums = w));
                    q.axisX.valueType = q.xValueType = e ? "dateTime" : "number"
                }
                for (f in t)
                    t.hasOwnProperty(f) && !isNaN(f) && (a = t[f],
                    a < g.min && (g.min = Math.min(a, I)),
                    a > g.max && (g.max = a),
                    f < b.viewPortMin || f > b.viewPortMax || (a < g.viewPortMin && (g.viewPortMin = Math.min(a, I)),
                    a > g.viewPortMax && (g.viewPortMax = a)));
                for (f in w)
                    w.hasOwnProperty(f) && !isNaN(f) && (a = w[f],
                    a < g.min && (g.min = a),
                    a > g.max && (g.max = Math.max(a, k)),
                    f < b.viewPortMin || f > b.viewPortMax || (a < g.viewPortMin && (g.viewPortMin = a),
                    a > g.viewPortMax && (g.viewPortMax = Math.max(a, k))))
            }
        }
        ;
        n.prototype._processStacked100PlotUnit = function(a) {
            if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
                for (var g = a.axisY.dataInfo, b = a.axisX.dataInfo, c, d, e = !1, t = !1, w = !1, I = {}, k = [], p = 0; p < a.dataSeriesIndexes.length; p++) {
                    var m = this.data[a.dataSeriesIndexes[p]], q = 0, f = !1, h = !1, y;
                    if ("normal" === m.axisPlacement || "xySwapped" === m.axisPlacement)
                        var z = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : a.axisX.options && a.axisX.options.viewportMinimum ? a.axisX.options.viewportMinimum : a.axisX.options && a.axisX.options.minimum ? a.axisX.options.minimum : -Infinity
                          , r = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : a.axisX.options && a.axisX.options.viewportMaximum ? a.axisX.options.viewportMaximum : a.axisX.options && a.axisX.options.maximum ? a.axisX.options.maximum : Infinity;
                    if (m.dataPoints[q].x && m.dataPoints[q].x.getTime || "dateTime" === m.xValueType)
                        e = !0;
                    for (q = 0; q < m.dataPoints.length; q++) {
                        "undefined" === typeof m.dataPoints[q].x && (m.dataPoints[q].x = q + (a.axisX.logarithmic ? 1 : 0));
                        m.dataPoints[q].x.getTime ? (e = !0,
                        c = m.dataPoints[q].x.getTime()) : c = m.dataPoints[q].x;
                        d = l(m.dataPoints[q].y) ? null : m.dataPoints[q].y;
                        c < b.min && (b.min = c);
                        c > b.max && (b.max = c);
                        if (0 < q) {
                            if (a.axisX.logarithmic) {
                                var x = c / m.dataPoints[q - 1].x;
                                1 > x && (x = 1 / x);
                                b.minDiff > x && 1 !== x && (b.minDiff = x)
                            } else
                                x = c - m.dataPoints[q - 1].x,
                                0 > x && (x *= -1),
                                b.minDiff > x && 0 !== x && (b.minDiff = x);
                            l(d) || null === m.dataPoints[q - 1].y || (a.axisY.logarithmic ? 0 < d && (x = d / m.dataPoints[q - 1].y,
                            1 > x && (x = 1 / x),
                            g.minDiff > x && 1 !== x && (g.minDiff = x)) : (x = d - m.dataPoints[q - 1].y,
                            0 > x && (x *= -1),
                            g.minDiff > x && 0 !== x && (g.minDiff = x)))
                        }
                        if (c < z && !f)
                            null !== d && (y = c);
                        else {
                            if (!f && (f = !0,
                            0 < q)) {
                                q -= 2;
                                continue
                            }
                            if (c > r && !h)
                                h = !0;
                            else if (c > r && h)
                                continue;
                            m.dataPoints[q].label && (a.axisX.labels[c] = m.dataPoints[q].label);
                            c < b.viewPortMin && (b.viewPortMin = c);
                            c > b.viewPortMax && (b.viewPortMax = c);
                            null === d ? b.viewPortMin === c && y < c && (b.viewPortMin = y) : (I[c] = (I[c] || 0) + m.dataPoints[q].y,
                            m.dataPointEOs[q].cumulativeY = I[c],
                            a.yTotals[c] = (a.yTotals[c] ? a.yTotals[c] : 0) + d,
                            a.yAbsTotals[c] = (a.yAbsTotals[c] ? a.yAbsTotals[c] : 0) + Math.abs(d),
                            0 <= d ? t = !0 : 0 > d && (w = !0),
                            k[c] = k[c] ? k[c] + Math.abs(d) : Math.abs(d))
                        }
                    }
                    m.axisX.valueType = m.xValueType = e ? "dateTime" : "number"
                }
                a.axisY.logarithmic ? (g.max = l(g.viewPortMax) ? 99 * Math.pow(a.axisY.logarithmBase, -0.05) : Math.max(g.viewPortMax, 99 * Math.pow(a.axisY.logarithmBase, -0.05)),
                g.min = l(g.viewPortMin) ? 1 : Math.min(g.viewPortMin, 1)) : t && !w ? (g.max = l(g.viewPortMax) ? 99 : Math.max(g.viewPortMax, 99),
                g.min = l(g.viewPortMin) ? 1 : Math.min(g.viewPortMin, 1)) : t && w ? (g.max = l(g.viewPortMax) ? 99 : Math.max(g.viewPortMax, 99),
                g.min = l(g.viewPortMin) ? -99 : Math.min(g.viewPortMin, -99)) : !t && w && (g.max = l(g.viewPortMax) ? -1 : Math.max(g.viewPortMax, -1),
                g.min = l(g.viewPortMin) ? -99 : Math.min(g.viewPortMin, -99));
                g.viewPortMin = g.min;
                g.viewPortMax = g.max;
                a.dataPointYSums = k
            }
        }
        ;
        n.prototype._processMultiYPlotUnit = function(a) {
            if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length))
                for (var g = a.axisY.dataInfo, b = a.axisX.dataInfo, c, d, e, t, w = !1, I = 0; I < a.dataSeriesIndexes.length; I++) {
                    var k = this.data[a.dataSeriesIndexes[I]], p = 0, m = !1, q = !1, f, h, l;
                    if ("normal" === k.axisPlacement || "xySwapped" === k.axisPlacement)
                        var z = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : a.axisX.options && a.axisX.options.viewportMinimum ? a.axisX.options.viewportMinimum : a.axisX.options && a.axisX.options.minimum ? a.axisX.options.minimum : a.axisX.logarithmic ? 0 : -Infinity
                          , r = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : a.axisX.options && a.axisX.options.viewportMaximum ? a.axisX.options.viewportMaximum : a.axisX.options && a.axisX.options.maximum ? a.axisX.options.maximum : Infinity;
                    if (k.dataPoints[p].x && k.dataPoints[p].x.getTime || "dateTime" === k.xValueType)
                        w = !0;
                    for (p = 0; p < k.dataPoints.length; p++) {
                        "undefined" === typeof k.dataPoints[p].x && (k.dataPoints[p].x = p + (a.axisX.logarithmic ? 1 : 0));
                        k.dataPoints[p].x.getTime ? (w = !0,
                        c = k.dataPoints[p].x.getTime()) : c = k.dataPoints[p].x;
                        if ((d = k.dataPoints[p].y) && d.length) {
                            e = Math.min.apply(null, d);
                            t = Math.max.apply(null, d);
                            h = !0;
                            for (var x = 0; x < d.length; x++)
                                null === d.k && (h = !1);
                            h && (m || (l = f),
                            f = c)
                        }
                        c < b.min && (b.min = c);
                        c > b.max && (b.max = c);
                        e < g.min && (g.min = e);
                        t > g.max && (g.max = t);
                        0 < p && (a.axisX.logarithmic ? (h = c / k.dataPoints[p - 1].x,
                        1 > h && (h = 1 / h),
                        b.minDiff > h && 1 !== h && (b.minDiff = h)) : (h = c - k.dataPoints[p - 1].x,
                        0 > h && (h *= -1),
                        b.minDiff > h && 0 !== h && (b.minDiff = h)),
                        d && (null !== d[0] && k.dataPoints[p - 1].y && null !== k.dataPoints[p - 1].y[0]) && (a.axisY.logarithmic ? (h = d[0] / k.dataPoints[p - 1].y[0],
                        1 > h && (h = 1 / h),
                        g.minDiff > h && 1 !== h && (g.minDiff = h)) : (h = d[0] - k.dataPoints[p - 1].y[0],
                        0 > h && (h *= -1),
                        g.minDiff > h && 0 !== h && (g.minDiff = h))));
                        if (!(c < z) || m) {
                            if (!m && (m = !0,
                            0 < p)) {
                                p -= 2;
                                f = l;
                                continue
                            }
                            if (c > r && !q)
                                q = !0;
                            else if (c > r && q)
                                continue;
                            k.dataPoints[p].label && (a.axisX.labels[c] = k.dataPoints[p].label);
                            c < b.viewPortMin && (b.viewPortMin = c);
                            c > b.viewPortMax && (b.viewPortMax = c);
                            if (b.viewPortMin === c && d)
                                for (x = 0; x < d.length; x++)
                                    if (null === d[x] && f < c) {
                                        b.viewPortMin = f;
                                        break
                                    }
                            null === d ? b.viewPortMin === c && f < c && (b.viewPortMin = f) : (e < g.viewPortMin && (g.viewPortMin = e),
                            t > g.viewPortMax && (g.viewPortMax = t))
                        }
                    }
                    k.axisX.valueType = k.xValueType = w ? "dateTime" : "number"
                }
        }
        ;
        n.prototype._processSpecificPlotUnit = function(a) {
            if ("waterfall" === a.type && a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length))
                for (var g = a.axisY.dataInfo, b = a.axisX.dataInfo, c, d, e = !1, t = 0; t < a.dataSeriesIndexes.length; t++) {
                    var w = this.data[a.dataSeriesIndexes[t]]
                      , h = 0
                      , k = !1
                      , p = !1
                      , m = c = 0;
                    if ("normal" === w.axisPlacement || "xySwapped" === w.axisPlacement)
                        var q = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : a.axisX.options && a.axisX.options.viewportMinimum ? a.axisX.options.viewportMinimum : a.axisX.options && a.axisX.options.minimum ? a.axisX.options.minimum : a.axisX.logarithmic ? 0 : -Infinity
                          , f = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : a.axisX.options && a.axisX.options.viewportMaximum ? a.axisX.options.viewportMaximum : a.axisX.options && a.axisX.options.maximum ? a.axisX.options.maximum : Infinity;
                    if (w.dataPoints[h].x && w.dataPoints[h].x.getTime || "dateTime" === w.xValueType)
                        e = !0;
                    for (h = 0; h < w.dataPoints.length; h++)
                        "undefined" !== typeof w.dataPoints[h].isCumulativeSum && !0 === w.dataPoints[h].isCumulativeSum ? (w.dataPointEOs[h].cumulativeSumYStartValue = 0,
                        w.dataPointEOs[h].cumulativeSum = 0 === h ? 0 : w.dataPointEOs[h - 1].cumulativeSum,
                        w.dataPoints[h].y = 0 === h ? 0 : w.dataPointEOs[h - 1].cumulativeSum) : "undefined" !== typeof w.dataPoints[h].isIntermediateSum && !0 === w.dataPoints[h].isIntermediateSum ? (w.dataPointEOs[h].cumulativeSumYStartValue = m,
                        w.dataPointEOs[h].cumulativeSum = 0 === h ? 0 : w.dataPointEOs[h - 1].cumulativeSum,
                        w.dataPoints[h].y = 0 === h ? 0 : c,
                        m = 0 === h ? 0 : w.dataPointEOs[h - 1].cumulativeSum,
                        c = 0) : (d = "number" !== typeof w.dataPoints[h].y ? 0 : w.dataPoints[h].y,
                        w.dataPointEOs[h].cumulativeSumYStartValue = 0 === h ? 0 : w.dataPointEOs[h - 1].cumulativeSum,
                        w.dataPointEOs[h].cumulativeSum = 0 === h ? d : w.dataPointEOs[h - 1].cumulativeSum + d,
                        c += d);
                    for (h = 0; h < w.dataPoints.length; h++)
                        if ("undefined" === typeof w.dataPoints[h].x && (w.dataPoints[h].x = h + (a.axisX.logarithmic ? 1 : 0)),
                        w.dataPoints[h].x.getTime ? (e = !0,
                        c = w.dataPoints[h].x.getTime()) : c = w.dataPoints[h].x,
                        d = w.dataPoints[h].y,
                        c < b.min && (b.min = c),
                        c > b.max && (b.max = c),
                        w.dataPointEOs[h].cumulativeSum < g.min && (g.min = w.dataPointEOs[h].cumulativeSum),
                        w.dataPointEOs[h].cumulativeSum > g.max && (g.max = w.dataPointEOs[h].cumulativeSum),
                        0 < h && (a.axisX.logarithmic ? (m = c / w.dataPoints[h - 1].x,
                        1 > m && (m = 1 / m),
                        b.minDiff > m && 1 !== m && (b.minDiff = m)) : (m = c - w.dataPoints[h - 1].x,
                        0 > m && (m *= -1),
                        b.minDiff > m && 0 !== m && (b.minDiff = m)),
                        null !== d && null !== w.dataPoints[h - 1].y && (a.axisY.logarithmic ? (d = w.dataPointEOs[h].cumulativeSum / w.dataPointEOs[h - 1].cumulativeSum,
                        1 > d && (d = 1 / d),
                        g.minDiff > d && 1 !== d && (g.minDiff = d)) : (d = w.dataPointEOs[h].cumulativeSum - w.dataPointEOs[h - 1].cumulativeSum,
                        0 > d && (d *= -1),
                        g.minDiff > d && 0 !== d && (g.minDiff = d)))),
                        !(c < q) || k) {
                            if (!k && (k = !0,
                            0 < h)) {
                                h -= 2;
                                continue
                            }
                            if (c > f && !p)
                                p = !0;
                            else if (c > f && p)
                                continue;
                            w.dataPoints[h].label && (a.axisX.labels[c] = w.dataPoints[h].label);
                            c < b.viewPortMin && (b.viewPortMin = c);
                            c > b.viewPortMax && (b.viewPortMax = c);
                            0 < h && (w.dataPointEOs[h - 1].cumulativeSum < g.viewPortMin && (g.viewPortMin = w.dataPointEOs[h - 1].cumulativeSum),
                            w.dataPointEOs[h - 1].cumulativeSum > g.viewPortMax && (g.viewPortMax = w.dataPointEOs[h - 1].cumulativeSum));
                            w.dataPointEOs[h].cumulativeSum < g.viewPortMin && (g.viewPortMin = w.dataPointEOs[h].cumulativeSum);
                            w.dataPointEOs[h].cumulativeSum > g.viewPortMax && (g.viewPortMax = w.dataPointEOs[h].cumulativeSum)
                        }
                    w.axisX.valueType = w.xValueType = e ? "dateTime" : "number"
                }
        }
        ;
        n.prototype.calculateAutoBreaks = function() {
            function a(a, c, b, d) {
                if (d)
                    return b = Math.pow(Math.min(b * a / c, c / a), 0.2),
                    1 >= b && (b = Math.pow(1 > a ? 1 / a : Math.min(c / a, a), 0.25)),
                    {
                        startValue: a * b,
                        endValue: c / b
                    };
                b = 0.2 * Math.min(b - c + a, c - a);
                0 >= b && (b = 0.25 * (0 < a ? Math.min(c - a, Math.abs(a)) : c - a));
                return {
                    startValue: a + b,
                    endValue: c - b
                }
            }
            function g(a) {
                if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
                    var c = a.axisX.scaleBreaks && a.axisX.scaleBreaks.autoCalculate && 1 <= a.axisX.scaleBreaks.maxNumberOfAutoBreaks
                      , b = a.axisY.scaleBreaks && a.axisY.scaleBreaks.autoCalculate && 1 <= a.axisY.scaleBreaks.maxNumberOfAutoBreaks;
                    if (c || b)
                        for (var f = a.axisY.dataInfo, e = a.axisX.dataInfo, g, k = e.min, t = e.max, p = f.min, m = f.max, e = e._dataRanges, f = f._dataRanges, q, w = 0, h = 0; h < a.dataSeriesIndexes.length; h++) {
                            var I = d.data[a.dataSeriesIndexes[h]];
                            if (!(4 > I.dataPoints.length))
                                for (w = 0; w < I.dataPoints.length; w++)
                                    if (c && (q = (t + 1 - k) * Math.max(parseFloat(a.axisX.scaleBreaks.collapsibleThreshold) || 10, 10) / 100,
                                    g = I.dataPoints[w].x.getTime ? I.dataPoints[w].x.getTime() : I.dataPoints[w].x,
                                    q = Math.floor((g - k) / q),
                                    g < e[q].min && (e[q].min = g),
                                    g > e[q].max && (e[q].max = g)),
                                    b) {
                                        var s = (m + 1 - p) * Math.max(parseFloat(a.axisY.scaleBreaks.collapsibleThreshold) || 10, 10) / 100;
                                        if ((g = "waterfall" === a.type ? I.dataPointEOs[w].cumulativeSum : I.dataPoints[w].y) && g.length)
                                            for (var n = 0; n < g.length; n++)
                                                q = Math.floor((g[n] - p) / s),
                                                g[n] < f[q].min && (f[q].min = g[n]),
                                                g[n] > f[q].max && (f[q].max = g[n]);
                                        else
                                            l(g) || (q = Math.floor((g - p) / s),
                                            g < f[q].min && (f[q].min = g),
                                            g > f[q].max && (f[q].max = g))
                                    }
                        }
                }
            }
            function b(a) {
                if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length) && a.axisX.scaleBreaks && a.axisX.scaleBreaks.autoCalculate && 1 <= a.axisX.scaleBreaks.maxNumberOfAutoBreaks)
                    for (var c = a.axisX.dataInfo, b = c.min, f = c.max, g = c._dataRanges, e, k = 0, t = 0; t < a.dataSeriesIndexes.length; t++) {
                        var p = d.data[a.dataSeriesIndexes[t]];
                        if (!(4 > p.dataPoints.length))
                            for (k = 0; k < p.dataPoints.length; k++)
                                e = (f + 1 - b) * Math.max(parseFloat(a.axisX.scaleBreaks.collapsibleThreshold) || 10, 10) / 100,
                                c = p.dataPoints[k].x.getTime ? p.dataPoints[k].x.getTime() : p.dataPoints[k].x,
                                e = Math.floor((c - b) / e),
                                c < g[e].min && (g[e].min = c),
                                c > g[e].max && (g[e].max = c)
                    }
            }
            for (var c, d = this, e = !1, t = 0; t < this._axes.length; t++)
                if (this._axes[t].scaleBreaks && this._axes[t].scaleBreaks.autoCalculate && 1 <= this._axes[t].scaleBreaks.maxNumberOfAutoBreaks) {
                    e = !0;
                    this._axes[t].dataInfo._dataRanges = [];
                    for (var w = 0; w < 100 / Math.max(parseFloat(this._axes[t].scaleBreaks.collapsibleThreshold) || 10, 10); w++)
                        this._axes[t].dataInfo._dataRanges.push({
                            min: Infinity,
                            max: -Infinity
                        })
                }
            if (e) {
                for (t = 0; t < this.plotInfo.plotTypes.length; t++)
                    for (e = this.plotInfo.plotTypes[t],
                    w = 0; w < e.plotUnits.length; w++)
                        c = e.plotUnits[w],
                        "line" === c.type || "stepLine" === c.type || "spline" === c.type || "column" === c.type || "area" === c.type || "stepArea" === c.type || "splineArea" === c.type || "bar" === c.type || "bubble" === c.type || "scatter" === c.type || "candlestick" === c.type || "ohlc" === c.type || "rangeColumn" === c.type || "rangeBar" === c.type || "rangeArea" === c.type || "rangeSplineArea" === c.type || "waterfall" === c.type || "error" === c.type || "boxAndWhisker" === c.type ? g(c) : 0 <= c.type.indexOf("stacked") && b(c);
                for (t = 0; t < this._axes.length; t++)
                    if (this._axes[t].dataInfo._dataRanges) {
                        var h = this._axes[t].dataInfo.min;
                        c = (this._axes[t].dataInfo.max + 1 - h) * Math.max(parseFloat(this._axes[t].scaleBreaks.collapsibleThreshold) || 10, 10) / 100;
                        var k = this._axes[t].dataInfo._dataRanges, p, m, e = [];
                        if (this._axes[t].dataInfo.dataPointYPositiveSums) {
                            var q = this._axes[t].dataInfo.dataPointYPositiveSums;
                            p = k;
                            for (w in q)
                                if (q.hasOwnProperty(w) && !isNaN(w) && (m = q[w],
                                !l(m))) {
                                    var f = Math.floor((m - h) / c);
                                    m < p[f].min && (p[f].min = m);
                                    m > p[f].max && (p[f].max = m)
                                }
                            delete this._axes[t].dataInfo.dataPointYPositiveSums
                        }
                        if (this._axes[t].dataInfo.dataPointYNegativeSums) {
                            q = this._axes[t].dataInfo.dataPointYNegativeSums;
                            p = k;
                            for (w in q)
                                q.hasOwnProperty(w) && !isNaN(w) && (m = -1 * q[w],
                                l(m) || (f = Math.floor((m - h) / c),
                                m < p[f].min && (p[f].min = m),
                                m > p[f].max && (p[f].max = m)));
                            delete this._axes[t].dataInfo.dataPointYNegativeSums
                        }
                        for (w = 0; w < k.length - 1; w++)
                            if (p = k[w].max,
                            isFinite(p))
                                for (; w < k.length - 1; )
                                    if (h = k[w + 1].min,
                                    isFinite(h)) {
                                        m = h - p;
                                        m > c && e.push({
                                            diff: m,
                                            start: p,
                                            end: h
                                        });
                                        break
                                    } else
                                        w++;
                        if (this._axes[t].scaleBreaks.customBreaks)
                            for (w = 0; w < this._axes[t].scaleBreaks.customBreaks.length; w++)
                                for (c = 0; c < e.length; c++)
                                    if (this._axes[t].scaleBreaks.customBreaks[w].startValue <= e[c].start && e[c].start <= this._axes[t].scaleBreaks.customBreaks[w].endValue || this._axes[t].scaleBreaks.customBreaks[w].startValue <= e[c].start && e[c].start <= this._axes[t].scaleBreaks.customBreaks[w].endValue || e[c].start <= this._axes[t].scaleBreaks.customBreaks[w].startValue && this._axes[t].scaleBreaks.customBreaks[w].startValue <= e[c].end || e[c].start <= this._axes[t].scaleBreaks.customBreaks[w].endValue && this._axes[t].scaleBreaks.customBreaks[w].endValue <= e[c].end)
                                        e.splice(c, 1),
                                        c--;
                        e.sort(function(a, c) {
                            return c.diff - a.diff
                        });
                        for (w = 0; w < Math.min(e.length, this._axes[t].scaleBreaks.maxNumberOfAutoBreaks); w++)
                            c = a(e[w].start, e[w].end, this._axes[t].logarithmic ? this._axes[t].dataInfo.max / this._axes[t].dataInfo.min : this._axes[t].dataInfo.max - this._axes[t].dataInfo.min, this._axes[t].logarithmic),
                            this._axes[t].scaleBreaks.autoBreaks.push(new Y(this,"autoBreaks",c,w,++this._eventManager.lastObjectId,this._axes[t].scaleBreaks)),
                            this._axes[t].scaleBreaks._appliedBreaks.push(this._axes[t].scaleBreaks.autoBreaks[this._axes[t].scaleBreaks.autoBreaks.length - 1]);
                        this._axes[t].scaleBreaks._appliedBreaks.sort(function(a, c) {
                            return a.startValue - c.startValue
                        })
                    }
            }
        }
        ;
        n.prototype.renderCrosshairs = function(a) {
            for (var g, b = 0; b < this.axisX.length; b++)
                g = this.axisX[b].sessionVariables.crosshairShownByPixel,
                this.axisX[b] != a && (this.axisX[b].crosshair && this.axisX[b].crosshair.enabled && !this.axisX[b].sessionVariables._crosshairHidden) && (g && this.sessionVariables.mouseX > this.plotArea.x1 && this.sessionVariables.mouseX < this.plotArea.x2 && this.sessionVariables.mouseY > this.plotArea.y1 && this.sessionVariables.mouseY < this.plotArea.y2 ? (this.plotInfo && "xySwapped" === this.plotInfo.axisPlacement ? this.axisX[b].crosshair.render(null, this.sessionVariables.mouseY, this.axisX[b].convertPixelToValue(this.sessionVariables.mouseY)) : this.axisX[b].crosshair.render(this.sessionVariables.mouseX, null, this.axisX[b].convertPixelToValue(this.sessionVariables.mouseX)),
                g = {
                    chart: this,
                    crosshair: this.axisX[b].crosshair.options,
                    axis: this.axisX[b],
                    value: this.axisX[b].crosshair.value
                },
                this.axisX[b].crosshair.dispatchEvent("updated", g, this.axisX[b])) : l(g) || g || this.axisX[b].showCrosshair(this.axisX[b].crosshair._updatedValue));
            for (b = 0; b < this.axisX2.length; b++)
                g = this.axisX2[b].sessionVariables.crosshairShownByPixel,
                this.axisX2[b] != a && (this.axisX2[b].crosshair && this.axisX2[b].crosshair.enabled && !this.axisX2[b].sessionVariables._crosshairHidden) && (g && this.sessionVariables.mouseX > this.plotArea.x1 && this.sessionVariables.mouseX < this.plotArea.x2 && this.sessionVariables.mouseY > this.plotArea.y1 && this.sessionVariables.mouseY < this.plotArea.y2 ? (this.plotInfo && "xySwapped" === this.plotInfo.axisPlacement ? this.axisX2[b].crosshair.render(null, this.sessionVariables.mouseY, this.axisX2[b].convertPixelToValue(this.sessionVariables.mouseY)) : this.axisX2[b].crosshair.render(this.sessionVariables.mouseX, null, this.axisX2[b].convertPixelToValue(this.sessionVariables.mouseX)),
                g = {
                    chart: this,
                    crosshair: this.axisX2[b].crosshair.options,
                    axis: this.axisX2[b],
                    value: this.axisX2[b].crosshair.value
                },
                this.axisX2[b].crosshair.dispatchEvent("updated", g, this.axisX2[b])) : l(g) || g || this.axisX2[b].showCrosshair(this.axisX2[b].crosshair._updatedValue));
            for (b = 0; b < this.axisY.length; b++)
                g = this.axisY[b].sessionVariables.crosshairShownByPixel,
                this.axisY[b] != a && (this.axisY[b].crosshair && this.axisY[b].crosshair.enabled && !this.axisY[b].sessionVariables._crosshairHidden) && (g && this.sessionVariables.mouseX > this.plotArea.x1 && this.sessionVariables.mouseX < this.plotArea.x2 && this.sessionVariables.mouseY > this.plotArea.y1 && this.sessionVariables.mouseY < this.plotArea.y2 ? (this.plotInfo && "xySwapped" === this.plotInfo.axisPlacement ? this.axisY[b].crosshair.render(this.sessionVariables.mouseX, null, this.axisY[b].convertPixelToValue(this.sessionVariables.mouseX)) : this.axisY[b].crosshair.render(null, this.sessionVariables.mouseY, this.axisY[b].convertPixelToValue(this.sessionVariables.mouseY)),
                g = {
                    chart: this,
                    crosshair: this.axisY[b].crosshair.options,
                    axis: this.axisY[b],
                    value: this.axisY[b].crosshair.value
                },
                this.axisY[b].crosshair.dispatchEvent("updated", g, this.axisY[b])) : l(g) || g || this.axisY[b].showCrosshair(this.axisY[b].crosshair._updatedValue));
            for (b = 0; b < this.axisY2.length; b++)
                g = this.axisY2[b].sessionVariables.crosshairShownByPixel,
                this.axisY2[b] != a && (this.axisY2[b].crosshair && this.axisY2[b].crosshair.enabled && !this.axisY2[b].sessionVariables._crosshairHidden) && (g && this.sessionVariables.mouseX > this.plotArea.x1 && this.sessionVariables.mouseX < this.plotArea.x2 && this.sessionVariables.mouseY > this.plotArea.y1 && this.sessionVariables.mouseY < this.plotArea.y2 ? (this.plotInfo && "xySwapped" === this.plotInfo.axisPlacement ? this.axisY2[b].crosshair.render(this.sessionVariables.mouseX, null, this.axisY2[b].convertPixelToValue(this.sessionVariables.mouseX)) : this.axisY2[b].crosshair.render(null, this.sessionVariables.mouseY, this.axisY2[b].convertPixelToValue(this.sessionVariables.mouseY)),
                g = {
                    chart: this,
                    crosshair: this.axisY2[b].crosshair.options,
                    axis: this.axisY2[b],
                    value: this.axisY2[b].crosshair.value
                },
                this.axisY2[b].crosshair.dispatchEvent("updated", g, this.axisY2[b])) : l(g) || g || this.axisY2[b].showCrosshair(this.axisY2[b].crosshair._updatedValue))
        }
        ;
        n.prototype.getDataPointAtXY = function(a, g, b) {
            b = b || !1;
            for (var c = [], d = this._dataInRenderedOrder.length - 1; 0 <= d; d--) {
                var e = null;
                (e = this._dataInRenderedOrder[d].getDataPointAtXY(a, g, b)) && c.push(e)
            }
            a = null;
            g = !1;
            for (b = 0; b < c.length; b++)
                if ("line" === c[b].dataSeries.type || "stepLine" === c[b].dataSeries.type || "area" === c[b].dataSeries.type || "stepArea" === c[b].dataSeries.type)
                    if (d = ka("markerSize", c[b].dataPoint, c[b].dataSeries) || 8,
                    c[b].distance <= d / 2) {
                        g = !0;
                        break
                    }
            for (b = 0; b < c.length; b++)
                g && "line" !== c[b].dataSeries.type && "stepLine" !== c[b].dataSeries.type && "area" !== c[b].dataSeries.type && "stepArea" !== c[b].dataSeries.type || (a ? c[b].distance <= a.distance && (a = c[b]) : a = c[b]);
            return a
        }
        ;
        n.prototype.getObjectAtXY = function(a, g, b) {
            var c = null;
            if (b = this.getDataPointAtXY(a, g, b || !1))
                c = b.dataSeries.dataPointIds[b.dataPointIndex];
            else if (s)
                c = ab(a, g, this._eventManager.ghostCtx);
            else
                for (b = 0; b < this.legend.items.length; b++) {
                    var d = this.legend.items[b];
                    a >= d.x1 && (a <= d.x2 && g >= d.y1 && g <= d.y2) && (c = d.id)
                }
            return c
        }
        ;
        n.prototype.getAutoFontSize = nb;
        n.prototype.resetOverlayedCanvas = function() {
            this.overlaidCanvasCtx.clearRect(0, 0, this.width, this.height)
        }
        ;
        n.prototype.clearCanvas = mb;
        n.prototype.attachEvent = function(a) {
            this._events.push(a)
        }
        ;
        n.prototype._touchEventHandler = function(a) {
            if (a.changedTouches && this.interactivityEnabled) {
                var g = []
                  , b = a.changedTouches
                  , c = b ? b[0] : a
                  , d = null;
                switch (a.type) {
                case "touchstart":
                case "MSPointerDown":
                    g = ["mousemove", "mousedown"];
                    this._lastTouchData = Pa(c);
                    this._lastTouchData.time = new Date;
                    break;
                case "touchmove":
                case "MSPointerMove":
                    g = ["mousemove"];
                    break;
                case "touchend":
                case "MSPointerUp":
                    var e = this._lastTouchData && this._lastTouchData.time ? new Date - this._lastTouchData.time : 0
                      , g = "touchstart" === this._lastTouchEventType || "MSPointerDown" === this._lastTouchEventType || 300 > e ? ["mouseup", "click"] : ["mouseup"];
                    break;
                default:
                    return
                }
                if (!(b && 1 < b.length)) {
                    d = Pa(c);
                    d.time = new Date;
                    try {
                        var t = d.y - this._lastTouchData.y
                          , e = d.time - this._lastTouchData.time;
                        if (1 < Math.abs(t) && this._lastTouchData.scroll || 5 < Math.abs(t) && 250 > e)
                            this._lastTouchData.scroll = !0,
                            this.stockChart && (this.stockChart._chartScroll = !0)
                    } catch (w) {}
                    this._lastTouchEventType = a.type;
                    if (this._lastTouchData.scroll && this.zoomEnabled)
                        this.isDrag && this.resetOverlayedCanvas(),
                        this.isDrag = !1;
                    else
                        for (b = 0; b < g.length; b++)
                            if (d = g[b],
                            t = document.createEvent("MouseEvent"),
                            t.initMouseEvent(d, !0, !0, window, 1, c.screenX, c.screenY, c.clientX, c.clientY, !1, !1, !1, !1, 0, null),
                            c.target.dispatchEvent(t),
                            !l(this._lastTouchData.scroll) && !this._lastTouchData.scroll || !this._lastTouchData.scroll && 250 < e || "click" === d)
                                a.preventManipulation && a.preventManipulation(),
                                a.preventDefault && a.cancelable && a.preventDefault(),
                                this.stockChart && (this.stockChart._chartScroll = null)
                }
            }
        }
        ;
        n.prototype._dispatchRangeEvent = function(a, g) {
            var b = {
                chart: this
            };
            b.type = a;
            b.trigger = g;
            var c = [];
            this.axisX && 0 < this.axisX.length && c.push("axisX");
            this.axisX2 && 0 < this.axisX2.length && c.push("axisX2");
            this.axisY && 0 < this.axisY.length && c.push("axisY");
            this.axisY2 && 0 < this.axisY2.length && c.push("axisY2");
            for (var d = 0; d < c.length; d++)
                if (l(b[c[d]]) && (b[c[d]] = []),
                "axisY" === c[d])
                    for (var e = 0; e < this.axisY.length; e++)
                        b[c[d]].push({
                            viewportMinimum: this[c[d]][e].sessionVariables.newViewportMinimum,
                            viewportMaximum: this[c[d]][e].sessionVariables.newViewportMaximum
                        });
                else if ("axisY2" === c[d])
                    for (e = 0; e < this.axisY2.length; e++)
                        b[c[d]].push({
                            viewportMinimum: this[c[d]][e].sessionVariables.newViewportMinimum,
                            viewportMaximum: this[c[d]][e].sessionVariables.newViewportMaximum
                        });
                else if ("axisX" === c[d])
                    for (e = 0; e < this.axisX.length; e++)
                        b[c[d]].push({
                            viewportMinimum: this[c[d]][e].sessionVariables.newViewportMinimum,
                            viewportMaximum: this[c[d]][e].sessionVariables.newViewportMaximum
                        });
                else if ("axisX2" === c[d])
                    for (e = 0; e < this.axisX2.length; e++)
                        b[c[d]].push({
                            viewportMinimum: this[c[d]][e].sessionVariables.newViewportMinimum,
                            viewportMaximum: this[c[d]][e].sessionVariables.newViewportMaximum
                        });
            this.dispatchEvent(a, b, this)
        }
        ;
        n.prototype._mouseEventHandler = function(a) {
            function g() {
                n.capturedEventParam && (d = n.capturedEventParam,
                t = d.bounds,
                "mouseup" === c && (n.capturedEventParam = null,
                d.chart.overlaidCanvas.releaseCapture ? d.chart.overlaidCanvas.releaseCapture() : document.documentElement.removeEventListener("mouseup", d.chart._mouseEventHandler, !1)),
                d.hasOwnProperty(c) && ("mouseup" !== c || d.chart.overlaidCanvas.releaseCapture ? a.target !== d.chart.overlaidCanvas && s || d[c].call(d.context, b.x, b.y) : a.target !== d.chart.overlaidCanvas && (d.chart.isDrag = !1)))
            }
            "undefined" === typeof a.target && a.srcElement && (a.target = a.srcElement);
            var b = Pa(a), c = a.type, d, e;
            a.which ? e = 3 == a.which : a.button && (e = 2 == a.button);
            if (this._ignoreNextEvent)
                g(),
                this._ignoreNextEvent = !1;
            else if (g(),
            this.interactivityEnabled) {
                a.preventManipulation && a.preventManipulation();
                a.preventDefault && a.preventDefault();
                var t;
                Ha && window.console && (window.console.log(c + " --\x3e x: " + b.x + "; y:" + b.y),
                e && window.console.log(a.which),
                "mouseup" === c && window.console.log("mouseup"));
                if (!e) {
                    if (!n.capturedEventParam && this._events) {
                        for (e = 0; e < this._events.length; e++)
                            if (this._events[e].hasOwnProperty(c))
                                if (d = this._events[e],
                                t = d.bounds,
                                b.x >= t.x1 && b.x <= t.x2 && b.y >= t.y1 && b.y <= t.y2) {
                                    d[c].call(d.context, b.x, b.y);
                                    "mousedown" === c && !0 === d.capture ? (n.capturedEventParam = d,
                                    this.overlaidCanvas.setCapture ? this.overlaidCanvas.setCapture() : document.documentElement.addEventListener("mouseup", this._mouseEventHandler, !1)) : "mouseup" === c && (d.chart.overlaidCanvas.releaseCapture ? d.chart.overlaidCanvas.releaseCapture() : document.documentElement.removeEventListener("mouseup", this._mouseEventHandler, !1));
                                    break
                                } else
                                    d = null;
                        a.target.style.cursor = d && d.cursor ? d.cursor : this._defaultCursor
                    }
                    e = this.plotArea;
                    if (b.x < e.x1 || b.x > e.x2 || b.y < e.y1 || b.y > e.y2) {
                        this.toolTip && this.toolTip.enabled ? (this.toolTip.hide(),
                        this.toolTip.dispatchEvent("hidden", {
                            chart: this,
                            toolTip: this.toolTip
                        }, this.toolTip)) : (this.resetOverlayedCanvas(),
                        this.sessionVariables._dataHighlighted = !1);
                        for (e = 0; e < this.axisX.length; e++)
                            this.axisX[e].crosshair && this.axisX[e].crosshair.enabled && (this.axisX[e].crosshair.hide(),
                            this.axisX[e].crosshair.dispatchEvent("hidden", {
                                chart: this,
                                axis: this.axisX[e].options
                            }, this.axisX[e].crosshair));
                        for (e = 0; e < this.axisX2.length; e++)
                            this.axisX2[e].crosshair && this.axisX2[e].crosshair.enabled && (this.axisX2[e].crosshair.hide(),
                            this.axisX2[e].crosshair.dispatchEvent("hidden", {
                                chart: this,
                                axis: this.axisX2[e].options
                            }, this.axisX2[e].crosshair));
                        for (e = 0; e < this.axisY.length; e++)
                            this.axisY[e].crosshair && this.axisY[e].crosshair.enabled && (this.axisY[e].crosshair.hide(),
                            this.axisY[e].crosshair.dispatchEvent("hidden", {
                                chart: this,
                                axis: this.axisY[e].options
                            }, this.axisY[e].crosshair));
                        for (e = 0; e < this.axisY2.length; e++)
                            this.axisY2[e].crosshair && this.axisY2[e].crosshair.enabled && (this.axisY2[e].crosshair.hide(),
                            this.axisY2[e].crosshair.dispatchEvent("hidden", {
                                chart: this,
                                axis: this.axisY2[e].options
                            }, this.axisY2[e].crosshair))
                    }
                    this.sessionVariables.mouseX = b.x;
                    this.sessionVariables.mouseY = b.y;
                    this.isDrag && this.zoomEnabled || !this._eventManager || this._eventManager.mouseEventHandler(a)
                }
            }
        }
        ;
        n.prototype._plotAreaMouseDown = function(a, g) {
            this.isDrag = !0;
            this.dragStartPoint = {
                x: a,
                y: g
            }
        }
        ;
        n.prototype._plotAreaMouseUp = function(a, g) {
            if (("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) && this.isDrag) {
                var b = g - this.dragStartPoint.y
                  , c = a - this.dragStartPoint.x
                  , d = 0 <= this.zoomType.indexOf("x")
                  , e = 0 <= this.zoomType.indexOf("y")
                  , t = !1;
                this.resetOverlayedCanvas();
                if ("xySwapped" === this.plotInfo.axisPlacement)
                    var w = e
                      , e = d
                      , d = w;
                if (this.panEnabled || this.zoomEnabled) {
                    if (this.panEnabled)
                        for (d = e = 0; d < this._axes.length; d++)
                            b = this._axes[d],
                            b.logarithmic ? b.viewportMinimum < b.minimum ? (e = b.minimum / b.viewportMinimum,
                            b.sessionVariables.newViewportMinimum = b.viewportMinimum * e,
                            b.sessionVariables.newViewportMaximum = b.viewportMaximum * e,
                            t = !0) : b.viewportMaximum > b.maximum && (e = b.viewportMaximum / b.maximum,
                            b.sessionVariables.newViewportMinimum = b.viewportMinimum / e,
                            b.sessionVariables.newViewportMaximum = b.viewportMaximum / e,
                            t = !0) : b.viewportMinimum < b.minimum ? (e = b.minimum - b.viewportMinimum,
                            b.sessionVariables.newViewportMinimum = b.viewportMinimum + e,
                            b.sessionVariables.newViewportMaximum = b.viewportMaximum + e,
                            t = !0) : b.viewportMaximum > b.maximum && (e = b.viewportMaximum - b.maximum,
                            b.sessionVariables.newViewportMinimum = b.viewportMinimum - e,
                            b.sessionVariables.newViewportMaximum = b.viewportMaximum - e,
                            t = !0);
                    else if ((!d || 2 < Math.abs(c)) && (!e || 2 < Math.abs(b)) && this.zoomEnabled) {
                        if (!this.dragStartPoint)
                            return;
                        b = d ? this.dragStartPoint.x : this.plotArea.x1;
                        c = e ? this.dragStartPoint.y : this.plotArea.y1;
                        d = d ? a : this.plotArea.x2;
                        e = e ? g : this.plotArea.y2;
                        2 < Math.abs(b - d) && 2 < Math.abs(c - e) && this._zoomPanToSelectedRegion(b, c, d, e, "xy" !== this.zoomType && "y" !== this.zoomType) && (t = !0)
                    }
                    t && (this._ignoreNextEvent = !0,
                    this._dispatchRangeEvent("rangeChanging", "zoom"),
                    this.stockChart && (this.stockChart._rangeEventParameter || (this.stockChart._rangeEventParameter = {
                        stockChart: this.stockChart,
                        source: "chart",
                        index: this.stockChart.charts.indexOf(this),
                        minimum: this.stockChart.sessionVariables._axisXMin,
                        maximum: this.stockChart.sessionVariables._axisXMax
                    }),
                    this.stockChart._rangeEventParameter.type = "rangeChanging",
                    this.stockChart.dispatchEvent("rangeChanging", this.stockChart._rangeEventParameter, this.stockChart)),
                    this.render(),
                    this._dispatchRangeEvent("rangeChanged", "zoom"),
                    this.stockChart && (this.stockChart.rangeUpdatedBy = "chart",
                    this.stockChart._rangeEventParameter.type = "rangeChanged",
                    this.stockChart.dispatchEvent("rangeChanged", this.stockChart._rangeEventParameter, this.stockChart)),
                    t && (this.zoomEnabled && "none" === this._zoomButton.style.display) && (La(this._zoomButton, this._resetButton),
                    ta(this, this._zoomButton, "pan"),
                    ta(this, this._resetButton, "reset")))
                }
            }
            this.isDrag = !1;
            if ("none" !== this.plotInfo.axisPlacement) {
                this.resetOverlayedCanvas();
                if (this.axisX && 0 < this.axisX.length)
                    for (t = 0; t < this.axisX.length; t++)
                        this.axisX[t].crosshair && this.axisX[t].crosshair.enabled && this.axisX[t].renderCrosshair(a, g);
                if (this.axisX2 && 0 < this.axisX2.length)
                    for (t = 0; t < this.axisX2.length; t++)
                        this.axisX2[t].crosshair && this.axisX2[t].crosshair.enabled && this.axisX2[t].renderCrosshair(a, g);
                if (this.axisY && 0 < this.axisY.length)
                    for (t = 0; t < this.axisY.length; t++)
                        this.axisY[t].crosshair && this.axisY[t].crosshair.enabled && this.axisY[t].renderCrosshair(a, g);
                if (this.axisY2 && 0 < this.axisY2.length)
                    for (t = 0; t < this.axisY2.length; t++)
                        this.axisY2[t].crosshair && this.axisY2[t].crosshair.enabled && this.axisY2[t].renderCrosshair(a, g);
                if (this.axisX && 0 < this.axisX.length)
                    for (t = 0; t < this.axisX.length; t++)
                        this.axisX[t].crosshair && this.axisX[t].crosshair.enabled && this.axisX[t].crosshair.renderLabel();
                if (this.axisX2 && 0 < this.axisX2.length)
                    for (t = 0; t < this.axisX2.length; t++)
                        this.axisX2[t].crosshair && this.axisX2[t].crosshair.enabled && this.axisX2[t].crosshair.renderLabel();
                if (this.axisY && 0 < this.axisY.length)
                    for (t = 0; t < this.axisY.length; t++)
                        this.axisY[t].crosshair && this.axisY[t].crosshair.enabled && this.axisY[t].crosshair.renderLabel();
                if (this.axisY2 && 0 < this.axisY2.length)
                    for (t = 0; t < this.axisY2.length; t++)
                        this.axisY2[t].crosshair && this.axisY2[t].crosshair.enabled && this.axisY2[t].crosshair.renderLabel()
            }
        }
        ;
        n.prototype._plotAreaMouseMove = function(a, g) {
            if (this.isDrag && "none" !== this.plotInfo.axisPlacement) {
                var b = 0
                  , c = 0
                  , d = b = null
                  , d = 0 <= this.zoomType.indexOf("x")
                  , e = 0 <= this.zoomType.indexOf("y")
                  , t = this;
                "xySwapped" === this.plotInfo.axisPlacement && (b = e,
                e = d,
                d = b);
                b = this.dragStartPoint.x - a;
                c = this.dragStartPoint.y - g;
                if (2 < Math.abs(b) && 8 > Math.abs(b) && (this.panEnabled || this.zoomEnabled)) {
                    this.toolTip.hide();
                    this.toolTip && this.toolTip.enabled && this.toolTip.dispatchEvent("hidden", {
                        chart: this,
                        toolTip: this.toolTip
                    }, this.toolTip);
                    for (var w = 0; w < this.axisX.length; w++)
                        this.axisX[w].crosshair && this.axisX[w].crosshair.enabled && (this.axisX[w].crosshair.hide(),
                        this.axisX[w].crosshair.dispatchEvent("hidden", {
                            chart: this,
                            axis: this.axisX[w].options
                        }, this.axisX[w].crosshair));
                    for (w = 0; w < this.axisX2.length; w++)
                        this.axisX2[w].crosshair && this.axisX2[w].crosshair.enabled && (this.axisX2[w].crosshair.hide(),
                        this.axisX2[w].crosshair.dispatchEvent("hidden", {
                            chart: this,
                            axis: this.axisX2[w].options
                        }, this.axisX2[w].crosshair));
                    for (w = 0; w < this.axisY.length; w++)
                        this.axisY[w].crosshair && this.axisY[w].crosshair.enabled && (this.axisY[w].crosshair.hide(),
                        this.axisY[w].crosshair.dispatchEvent("hidden", {
                            chart: this,
                            axis: this.axisY[w].options
                        }, this.axisY[w].crosshair));
                    for (w = 0; w < this.axisY2.length; w++)
                        this.axisY2[w].crosshair && this.axisY2[w].crosshair.enabled && (this.axisY2[w].crosshair.hide(),
                        this.axisY2[w].crosshair.dispatchEvent("hidden", {
                            chart: this,
                            axis: this.axisY2[w].options
                        }, this.axisY2[w].crosshair))
                } else
                    this.panEnabled || this.zoomEnabled || this.toolTip.mouseMoveHandler(a, g);
                if ((!d || 2 < Math.abs(b) || !e || 2 < Math.abs(c)) && (this.panEnabled || this.zoomEnabled))
                    if (this.panEnabled)
                        d = {
                            x1: d ? this.plotArea.x1 + b : this.plotArea.x1,
                            y1: e ? this.plotArea.y1 + c : this.plotArea.y1,
                            x2: d ? this.plotArea.x2 + b : this.plotArea.x2,
                            y2: e ? this.plotArea.y2 + c : this.plotArea.y2
                        },
                        clearTimeout(t._panTimerId),
                        t._panTimerId = setTimeout(function(c, b, d, f) {
                            return function() {
                                if (t._zoomPanToSelectedRegion(c, b, d, f, !0)) {
                                    t._dispatchRangeEvent("rangeChanging", "pan");
                                    t.stockChart && (t.stockChart._rangeEventParameter.type = "rangeChanging",
                                    t.stockChart.dispatchEvent("rangeChanging", t.stockChart._rangeEventParameter, t.stockChart));
                                    t.render();
                                    t._dispatchRangeEvent("rangeChanged", "pan");
                                    if (t.stockChart) {
                                        var e = t.stockChart.rangeSelector.sessionVariables
                                          , k = t.stockChart.rangeSelector.buttons;
                                        k && (0 < k.length && (k[e._clickedRangeButtonIndex] && "ytd" === k[e._clickedRangeButtonIndex].rangeType || k[e.selectedRangeButtonIndex] && "ytd" === k[e.selectedRangeButtonIndex].rangeType)) && t.stockChart.rangeSelector.resetRangeButtons();
                                        t.stockChart._rangeEventParameter.type = "rangeChanged";
                                        t.stockChart.dispatchEvent("rangeChanged", t.stockChart._rangeEventParameter, t.stockChart)
                                    }
                                    t.dragStartPoint.x = a;
                                    t.dragStartPoint.y = g
                                }
                            }
                        }(d.x1, d.y1, d.x2, d.y2), 0);
                    else if (this.zoomEnabled) {
                        this.resetOverlayedCanvas();
                        b = this.overlaidCanvasCtx.globalAlpha;
                        this.overlaidCanvasCtx.fillStyle = "#A89896";
                        var c = d ? this.dragStartPoint.x : this.plotArea.x1
                          , w = e ? this.dragStartPoint.y : this.plotArea.y1
                          , h = d ? a - this.dragStartPoint.x : this.plotArea.x2 - this.plotArea.x1
                          , k = e ? g - this.dragStartPoint.y : this.plotArea.y2 - this.plotArea.y1;
                        this.validateRegion(c, w, d ? a : this.plotArea.x2 - this.plotArea.x1, e ? g : this.plotArea.y2 - this.plotArea.y1, "xy" !== this.zoomType && "y" !== this.zoomType).isValid && (this.resetOverlayedCanvas(),
                        this.overlaidCanvasCtx.fillStyle = "#99B2B5");
                        this.overlaidCanvasCtx.globalAlpha = 0.7;
                        this.overlaidCanvasCtx.fillRect(c, w, h, k);
                        this.overlaidCanvasCtx.globalAlpha = b
                    }
            } else if (this.toolTip.mouseMoveHandler(a, g),
            "none" !== this.plotInfo.axisPlacement) {
                this.sessionVariables._dataHighlighted || this.resetOverlayedCanvas();
                if (this.axisX && 0 < this.axisX.length)
                    for (d = 0; d < this.axisX.length; d++)
                        this.axisX[d].crosshair && this.axisX[d].crosshair.enabled && (this.axisX[d].sessionVariables.crosshairShownByPixel = !0,
                        this.axisX[d].renderCrosshair(a, g));
                if (this.axisX2 && 0 < this.axisX2.length)
                    for (d = 0; d < this.axisX2.length; d++)
                        this.axisX2[d].crosshair && this.axisX2[d].crosshair.enabled && (this.axisX2[d].sessionVariables.crosshairShownByPixel = !0,
                        this.axisX2[d].renderCrosshair(a, g));
                if (this.axisY && 0 < this.axisY.length)
                    for (d = 0; d < this.axisY.length; d++)
                        this.axisY[d].crosshair && this.axisY[d].crosshair.enabled && (this.axisY[d].sessionVariables.crosshairShownByPixel = !0,
                        this.axisY[d].renderCrosshair(a, g));
                if (this.axisY2 && 0 < this.axisY2.length)
                    for (d = 0; d < this.axisY2.length; d++)
                        this.axisY2[d].crosshair && this.axisY2[d].crosshair.enabled && (this.axisY2[d].sessionVariables.crosshairShownByPixel = !0,
                        this.axisY2[d].renderCrosshair(a, g));
                if (this.axisX && 0 < this.axisX.length)
                    for (d = 0; d < this.axisX.length; d++)
                        this.axisX[d].crosshair && this.axisX[d].crosshair.enabled && this.axisX[d].crosshair.renderLabel();
                if (this.axisX2 && 0 < this.axisX2.length)
                    for (d = 0; d < this.axisX2.length; d++)
                        this.axisX2[d].crosshair && this.axisX2[d].crosshair.enabled && this.axisX2[d].crosshair.renderLabel();
                if (this.axisY && 0 < this.axisY.length)
                    for (d = 0; d < this.axisY.length; d++)
                        this.axisY[d].crosshair && this.axisY[d].crosshair.enabled && this.axisY[d].crosshair.renderLabel();
                if (this.axisY2 && 0 < this.axisY2.length)
                    for (d = 0; d < this.axisY2.length; d++)
                        this.axisY2[d].crosshair && this.axisY2[d].crosshair.enabled && this.axisY2[d].crosshair.renderLabel()
            }
        }
        ;
        n.prototype._zoomPanToSelectedRegion = function(a, g, b, c, d) {
            a = this.validateRegion(a, g, b, c, d);
            g = a.axesWithValidRange;
            b = a.axesRanges;
            if (a.isValid)
                for (c = 0; c < g.length; c++) {
                    d = g[c];
                    var e = b[c];
                    d.setViewPortRange(e.val1, e.val2);
                    this.syncCharts && ("axisX" === d.type && "y" != this.zoomType) && this.syncCharts(e.val1, e.val2);
                    this.stockChart && (this.stockChart._rangeEventParameter = {
                        stockChart: this.stockChart,
                        source: "chart",
                        index: this.stockChart.charts.indexOf(this),
                        minimum: e.val1,
                        maximum: e.val2
                    })
                }
            return a.isValid
        }
        ;
        n.prototype.validateRegion = function(a, g, b, c, d) {
            d = d || !1;
            for (var e = 0 <= this.zoomType.indexOf("x"), t = 0 <= this.zoomType.indexOf("y"), w = !1, h = [], k = [], p = [], m = 0; m < this._axes.length; m++)
                ("axisX" === this._axes[m].type && e || "axisY" === this._axes[m].type && t) && k.push(this._axes[m]);
            for (t = 0; t < k.length; t++) {
                var m = k[t]
                  , e = !1
                  , q = m.convertPixelToValue({
                    x: a,
                    y: g
                })
                  , f = m.convertPixelToValue({
                    x: b,
                    y: c
                });
                if (q > f)
                    var l = f
                      , f = q
                      , q = l;
                if (m.scaleBreaks)
                    for (l = 0; !e && l < m.scaleBreaks._appliedBreaks.length; l++)
                        e = m.scaleBreaks._appliedBreaks[l].startValue <= q && m.scaleBreaks._appliedBreaks[l].endValue >= f;
                if (isFinite(m.dataInfo.minDiff))
                    if (l = m.getApparentDifference(q, f, null, !0),
                    !(e || !(this.panEnabled && m.scaleBreaks && m.scaleBreaks._appliedBreaks.length) && (m.logarithmic && l < Math.pow(m.dataInfo.minDiff, 3) || !m.logarithmic && l < 3 * Math.abs(m.dataInfo.minDiff)) || q < m.minimum || f > m.maximum))
                        h.push(m),
                        p.push({
                            val1: q,
                            val2: f
                        }),
                        w = !0;
                    else if (!d) {
                        w = !1;
                        break
                    }
            }
            return {
                isValid: w,
                axesWithValidRange: h,
                axesRanges: p
            }
        }
        ;
        n.prototype.preparePlotArea = function() {
            var a = this.plotArea;
            !s && (0 < a.x1 || 0 < a.y1) && a.ctx.translate(a.x1, a.y1);
            if ((this.axisX[0] || this.axisX2[0]) && (this.axisY[0] || this.axisY2[0])) {
                var g = this.axisX[0] ? this.axisX[0].lineCoordinates : this.axisX2[0].lineCoordinates;
                if (this.axisY && 0 < this.axisY.length && this.axisY[0]) {
                    var b = this.axisY[0];
                    a.x1 = g.x1 < g.x2 ? g.x1 : b.lineCoordinates.x1;
                    a.y1 = g.y1 < b.lineCoordinates.y1 ? g.y1 : b.lineCoordinates.y1;
                    a.x2 = g.x2 > b.lineCoordinates.x2 ? g.x2 : b.lineCoordinates.x2;
                    a.y2 = g.y1 > b.lineCoordinates.y2 ? g.y1 : b.lineCoordinates.y2;
                    a.width = a.x2 - a.x1;
                    a.height = a.y2 - a.y1
                }
                this.axisY2 && 0 < this.axisY2.length && this.axisY2[0] && (b = this.axisY2[0],
                a.x1 = g.x1 < g.x2 ? g.x1 : b.lineCoordinates.x1,
                a.y1 = g.y1 < b.lineCoordinates.y1 ? g.y1 : b.lineCoordinates.y1,
                a.x2 = g.x2 > b.lineCoordinates.x2 ? g.x2 : b.lineCoordinates.x2,
                a.y2 = g.y2 > b.lineCoordinates.y2 ? g.y2 : b.lineCoordinates.y2,
                a.width = a.x2 - a.x1,
                a.height = a.y2 - a.y1)
            } else
                g = this.layoutManager.getFreeSpace(),
                a.x1 = g.x1,
                a.x2 = g.x2,
                a.y1 = g.y1,
                a.y2 = g.y2,
                a.width = g.width,
                a.height = g.height;
            s || (a.canvas.width = a.width,
            a.canvas.height = a.height,
            a.canvas.style.left = a.x1 + "px",
            a.canvas.style.top = a.y1 + "px",
            (0 < a.x1 || 0 < a.y1) && a.ctx.translate(-a.x1, -a.y1));
            a.layoutManager = new Ea(a.x1,a.y1,a.x2,a.y2,2)
        }
        ;
        n.prototype.renderIndexLabels = function(a) {
            var g = a || this.plotArea.ctx
              , b = this.plotArea
              , c = 0
              , d = 0
              , e = 0
              , t = d = e = 0
              , w = 0
              , h = c = 0
              , k = 0;
            for (a = 0; a < this._indexLabels.length; a++) {
                var p = this._indexLabels[a], m = p.chartType.toLowerCase(), q, f, w = ka("indexLabelFontColor", p.dataPoint, p.dataSeries), Ra = ka("indexLabelFontSize", p.dataPoint, p.dataSeries), h = ka("indexLabelFontFamily", p.dataPoint, p.dataSeries), k = ka("indexLabelFontStyle", p.dataPoint, p.dataSeries);
                q = ka("indexLabelFontWeight", p.dataPoint, p.dataSeries);
                var y = ka("indexLabelBackgroundColor", p.dataPoint, p.dataSeries);
                f = ka("indexLabelBorderColor", p.dataPoint, p.dataSeries);
                var e = ka("indexLabelBorderThickness", p.dataPoint, p.dataSeries)
                  , d = ka("indexLabelMaxWidth", p.dataPoint, p.dataSeries)
                  , t = ka("indexLabelWrap", p.dataPoint, p.dataSeries)
                  , z = ka("indexLabelLineDashType", p.dataPoint, p.dataSeries)
                  , r = ka("indexLabelLineColor", p.dataPoint, p.dataSeries)
                  , x = l(p.dataPoint.indexLabelLineThickness) ? l(p.dataSeries.options.indexLabelLineThickness) ? 0 : p.dataSeries.options.indexLabelLineThickness : p.dataPoint.indexLabelLineThickness
                  , c = 0 < x ? Math.min(10, ("normal" === this.plotInfo.axisPlacement ? this.plotArea.height : this.plotArea.width) << 0) : 0
                  , v = ka("indexLabelPadding", p.dataPoint, p.dataSeries)
                  , n = {
                    percent: null,
                    total: null
                }
                  , B = null;
                if (0 <= p.dataSeries.type.indexOf("stacked") || "pie" === p.dataSeries.type || "doughnut" === p.dataSeries.type)
                    n = this.getPercentAndTotal(p.dataSeries, p.dataPoint);
                if (p.dataSeries.indexLabelFormatter || p.dataPoint.indexLabelFormatter)
                    B = {
                        chart: this,
                        dataSeries: p.dataSeries,
                        dataPoint: p.dataPoint,
                        index: p.indexKeyword,
                        total: n.total,
                        percent: n.percent
                    };
                var E = p.dataPoint.indexLabelFormatter ? p.dataPoint.indexLabelFormatter(B) : p.dataPoint.indexLabel ? this.replaceKeywordsWithValue(p.dataPoint.indexLabel, p.dataPoint, p.dataSeries, null, p.indexKeyword) : p.dataSeries.indexLabelFormatter ? p.dataSeries.indexLabelFormatter(B) : p.dataSeries.indexLabel ? this.replaceKeywordsWithValue(p.dataSeries.indexLabel, p.dataPoint, p.dataSeries, null, p.indexKeyword) : null;
                if (null !== E && "" !== E) {
                    var n = ka("indexLabelPlacement", p.dataPoint, p.dataSeries)
                      , B = ka("indexLabelOrientation", p.dataPoint, p.dataSeries)
                      , u = ka("indexLabelTextAlign", p.dataPoint, p.dataSeries)
                      , A = p.direction
                      , K = p.dataSeries.axisX
                      , O = p.dataSeries.axisY
                      , aa = !1
                      , y = new ja(g,{
                        x: 0,
                        y: 0,
                        maxWidth: d ? d : 0.5 * this.width,
                        maxHeight: t ? 5 * Ra : 1.5 * Ra,
                        angle: "horizontal" === B ? 0 : -90,
                        text: E,
                        padding: v,
                        backgroundColor: y,
                        borderColor: f,
                        borderThickness: e,
                        textAlign: u,
                        fontSize: Ra,
                        fontFamily: h,
                        fontWeight: q,
                        fontColor: w,
                        fontStyle: k,
                        textBaseline: "middle"
                    });
                    y.measureText();
                    p.dataSeries.indexLabelMaxWidth = y.maxWidth;
                    if ("stackedarea100" === m) {
                        if (p.point.x < b.x1 || p.point.x > b.x2 || p.point.y < b.y1 - 1 || p.point.y > b.y2 + 1)
                            continue
                    } else if ("rangearea" === m || "rangesplinearea" === m) {
                        if (p.dataPoint.x < K.viewportMinimum || p.dataPoint.x > K.viewportMaximum || Math.max.apply(null, p.dataPoint.y) < O.viewportMinimum || Math.min.apply(null, p.dataPoint.y) > O.viewportMaximum)
                            continue
                    } else if (0 <= m.indexOf("line") || 0 <= m.indexOf("area") || 0 <= m.indexOf("bubble") || 0 <= m.indexOf("scatter")) {
                        if (p.dataPoint.x < K.viewportMinimum || p.dataPoint.x > K.viewportMaximum || p.dataPoint.y < O.viewportMinimum || p.dataPoint.y > O.viewportMaximum)
                            continue
                    } else if (0 <= m.indexOf("column")) {
                        if (p.dataPoint.x < K.viewportMinimum || p.dataPoint.x > K.viewportMaximum || (0 < p.dataPoint.y.length ? Math.max.apply(null, p.dataPoint.y) : p.cumulativeY ? p.cumulativeY : p.dataPoint.y) < O.viewportMinimum || (0 < p.dataPoint.y.length ? Math.min.apply(null, p.dataPoint.y) : p.cumulativeY ? p.cumulativeY : p.dataPoint.y) > O.viewportMaximum)
                            continue
                    } else if ("waterfall" === m || "error" === m && !p.axisSwapped) {
                        if (p.dataPoint.x < K.viewportMinimum || p.dataPoint.x > K.viewportMaximum || p.bounds.y1 > b.y2 || p.bounds.y2 < b.y1)
                            continue
                    } else if (0 <= m.indexOf("bar") || "error" === m) {
                        if (p.dataPoint.x < K.viewportMinimum || p.dataPoint.x > K.viewportMaximum || p.bounds.x1 > b.x2 || p.bounds.x2 < b.x1)
                            continue
                    } else if ("candlestick" === m || "ohlc" === m) {
                        if (p.dataPoint.x < K.viewportMinimum || p.dataPoint.x > K.viewportMaximum || Math.max.apply(null, p.dataPoint.y) < O.viewportMinimum || Math.min.apply(null, p.dataPoint.y) > O.viewportMaximum)
                            continue
                    } else if (p.dataPoint.x < K.viewportMinimum || p.dataPoint.x > K.viewportMaximum)
                        continue;
                    t = w = 2;
                    "horizontal" === B ? (h = y.width,
                    k = y.height) : (k = y.width,
                    h = y.height);
                    if ("normal" === this.plotInfo.axisPlacement) {
                        if (0 <= m.indexOf("line") || 0 <= m.indexOf("area"))
                            n = "auto",
                            w = 4;
                        else if (0 <= m.indexOf("stacked"))
                            "auto" === n && (n = "inside");
                        else if ("bubble" === m || "scatter" === m)
                            n = "inside";
                        q = p.point.x - h / 2 + ("horizontal" === B ? 0 : y._lineHeight / 2);
                        if ("inside" !== n)
                            d = b.y1,
                            e = b.y2,
                            0 < A ? (f = p.point.y + y._lineHeight / 2 - k - w - c,
                            f < d && (f = "auto" === n ? Math.max(p.point.y, d) + y._lineHeight / 2 + w + c : d + y._lineHeight / 2 + w + c,
                            aa = f + ("horizontal" === B ? k - y._lineHeight / 2 : 0) > p.point.y,
                            !aa || (0 <= m.indexOf("line") || 0 <= m.indexOf("area")) || (f -= c))) : (f = p.point.y + y._lineHeight / 2 + w + c,
                            f > e - k + y._lineHeight / 2 - w && (f = "auto" === n ? Math.min(p.point.y, e) + y._lineHeight / 2 - k - w - c : e + y._lineHeight / 2 - k - w - c,
                            aa = f - ("horizontal" === B ? y._lineHeight / 2 : k) < p.point.y,
                            !aa || (0 <= m.indexOf("line") || 0 <= m.indexOf("area")) || (f += c)));
                        else {
                            Math.max(p.bounds.y1, b.y1);
                            e = Math.min(p.bounds.y2, b.y2) - k + y._lineHeight / 2;
                            c = 0 <= m.indexOf("range") || "error" === m ? 0 < A ? Math.max(p.bounds.y1, b.y1) + y._lineHeight / 2 + w : Math.min(p.bounds.y2, b.y2) + y._lineHeight / 2 - k - w : (Math.max(p.bounds.y1, b.y1) + Math.min(p.bounds.y2, b.y2)) / 2 - k / 2 + y._lineHeight / 2;
                            if (0 < A) {
                                if (f = c,
                                "bubble" === m || "scatter" === m)
                                    f = p.point.y - k / 2 + y._lineHeight / 2,
                                    k > p.bounds.y2 - p.bounds.y1 && (f -= k / 2 + w),
                                    0 > f - y._lineHeight / 2 && (f += Math.abs(f - y._lineHeight / 2) <= (p.bounds.y2 - p.bounds.y1) / 2 + w ? Math.abs(f - y._lineHeight / 2) : (p.bounds.y2 - p.bounds.y1) / 2 + w)
                            } else
                                f = Math.min(p.point.y, c),
                                f > e - k - w && ("bubble" === m || "scatter" === m) && (f = Math.min(p.point.y + w, b.y2 - k - w));
                            f = Math.min(f, e)
                        }
                    } else
                        0 <= m.indexOf("line") || 0 <= m.indexOf("area") || 0 <= m.indexOf("scatter") ? (n = "auto",
                        t = 4) : 0 <= m.indexOf("stacked") ? "auto" === n && (n = "inside") : "bubble" === m && (n = "inside"),
                        f = p.point.y + y._lineHeight / 2 - k / 2,
                        "inside" !== n ? (e = b.x1,
                        d = b.x2,
                        0 > A ? (q = p.point.x - h + ("horizontal" === B ? 0 : y._lineHeight / 2) - t - c,
                        ("horizontal" === B ? q : q - y._lineHeight / 2) < e && (q = "auto" === n ? Math.max(p.point.x, e) + ("horizontal" === B ? 0 : y._lineHeight / 2) + w + c : e + ("horizontal" === B ? 0 : y._lineHeight / 2) + t,
                        (aa = q + h - ("horizontal" === B ? 0 : y._lineHeight / 2) > p.point.x) && (q -= c))) : (q = p.point.x + ("horizontal" === B ? 0 : y._lineHeight / 2) + t + c,
                        ("horizontal" === B ? q : q - y._lineHeight / 2) > d - h - t - c && (q = "auto" === n ? Math.min(p.point.x, d) - ("horizontal" === B ? h : h - y._lineHeight / 2) - t - c : d - h - t + ("horizontal" === B ? 0 : y._lineHeight / 2),
                        (aa = q - ("horizontal" === B ? 0 : y._lineHeight / 2) < p.point.x) && (q += c)))) : (e = Math.max(p.bounds.x1, b.x1),
                        Math.min(p.bounds.x2, b.x2),
                        c = 0 <= m.indexOf("range") || "error" === m ? 0 > A ? Math.max(p.bounds.x1, b.x1) : Math.min(p.bounds.x2, b.x2) - h - t + ("horizontal" === B ? 0 : y._lineHeight / 2) : (Math.max(p.bounds.x1, b.x1) + Math.min(p.bounds.x2, b.x2)) / 2 - h / 2 + ("horizontal" === B ? 0 : y._lineHeight / 2),
                        q = 0 > A ? c : Math.min(p.point.x, c),
                        q = Math.max(q, e + ("horizontal" === B ? 0 : y._lineHeight / 2 + w)));
                    "vertical" === B && (f += k - y._lineHeight / 2,
                    0 <= "ohlc candlestick boxandwhisker column rangecolumn stackedcolumn stackedcolumn100 error".split(" ").indexOf(m) && (aa = 0 < A ? f + ("horizontal" === B ? k - y._lineHeight / 2 : 0) > p.point.y : f - ("horizontal" === B ? y._lineHeight / 2 : k) < p.point.y),
                    "bubble" === m || "scatter" === m) && (q += y._lineHeight / 2 - Ra / 2);
                    y.x = q;
                    y.y = f;
                    y.render(!0);
                    x && ("inside" !== n && (0 > m.indexOf("bar") && ("error" !== m || !p.axisSwapped) && p.point.x > b.x1 && p.point.x < b.x2 || !aa) && (-1 === "ohlc candlestick boxandwhisker column rangecolumn stackedcolumn stackedcolumn100 error".split(" ").indexOf(m) && ("error" !== m || p.axisSwapped) && p.point.y > b.y1 && p.point.y < b.y2 || !aa)) && (g.lineWidth = x,
                    g.strokeStyle = r ? r : "gray",
                    g.setLineDash && g.setLineDash(J(z, x)),
                    g.beginPath(),
                    g.moveTo(p.point.x, p.point.y),
                    0 <= m.indexOf("bar") || "error" === m && p.axisSwapped ? g.lineTo(q + (0 < p.direction ? 0 : h) + ("vertical" === B ? -y._lineHeight / 2 : 0), f + ("vertical" === B ? -k / 2 : k / 2 - y._lineHeight / 2)) : 0 <= m.indexOf("column") || "error" === m && !p.axisSwapped ? g.lineTo(q + h / 2 - ("horizontal" === B ? 0 : y._lineHeight / 2), f + ("vertical" === B ? f - k < p.point.y ? 0 : -k : (f - y._lineHeight / 2 < p.point.y ? k : 0) - y._lineHeight / 2)) : 0 <= m.indexOf("waterfall") ? g.lineTo(q + h / 2 - ("horizontal" === B ? 0 : y._lineHeight / 2), "vertical" === B ? 0 < A && f < p.point.y ? f : 0 > A && f - k > p.point.y ? f - k : p.point.y : 0 < A && f + k - y._lineHeight / 2 < p.point.y ? f + k - y._lineHeight / 2 : 0 > A && f - y._lineHeight / 2 > p.point.y ? f - y._lineHeight / 2 : p.point.y) : g.lineTo(q + h / 2 - ("horizontal" === B ? 0 : y._lineHeight / 2), f + ("vertical" === B ? f - k < p.point.y ? 0 : -k : (f + k - y._lineHeight / 2 < p.point.y ? k : 0) - y._lineHeight / 2)),
                    g.stroke())
                }
            }
            g = {
                source: g,
                dest: this.plotArea.ctx,
                animationCallback: M.fadeInAnimation,
                easingFunction: M.easing.easeInQuad,
                animationBase: 0,
                startTimePercent: 0.7
            };
            for (a = 0; a < this._indexLabels.length; a++)
                p = this._indexLabels[a],
                y = ka("indexLabelBackgroundColor", p.dataPoint, p.dataSeries),
                p.dataSeries.indexLabelBackgroundColor = l(y) ? s ? "transparent" : null : y;
            return g
        }
        ;
        n.prototype.renderLine = function(a) {
            var g = a.targetCanvasCtx || this.plotArea.ctx
              , b = s ? this._preRenderCtx : g;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var c = this._eventManager.ghostCtx;
                b.save();
                var d = this.plotArea;
                b.beginPath();
                b.rect(d.x1, d.y1, d.width, d.height);
                b.clip();
                for (var e = [], t, w = 0; w < a.dataSeriesIndexes.length; w++) {
                    var h = a.dataSeriesIndexes[w]
                      , k = this.data[h];
                    b.lineWidth = k.lineThickness;
                    var p = k.dataPoints
                      , m = "solid";
                    if (b.setLineDash) {
                        var q = J(k.nullDataLineDashType, k.lineThickness)
                          , m = k.lineDashType
                          , f = J(m, k.lineThickness);
                        b.setLineDash(f)
                    }
                    var l = k.id;
                    this._eventManager.objectMap[l] = {
                        objectType: "dataSeries",
                        dataSeriesIndex: h
                    };
                    l = R(l);
                    c.strokeStyle = l;
                    c.lineWidth = 0 < k.lineThickness ? Math.max(k.lineThickness, 4) : 0;
                    var l = k._colorSet
                      , y = l = k.lineColor = k.options.lineColor ? k.options.lineColor : l[0];
                    b.strokeStyle = l;
                    var z = !0, r = 0, x, v;
                    b.beginPath();
                    if (0 < p.length) {
                        for (var n = !1, r = 0; r < p.length; r++)
                            if (x = p[r].x.getTime ? p[r].x.getTime() : p[r].x,
                            !(x < a.axisX.dataInfo.viewPortMin || x > a.axisX.dataInfo.viewPortMax && (!k.connectNullData || !n)))
                                if ("number" !== typeof p[r].y)
                                    0 < r && !(k.connectNullData || n || z) && (b.stroke(),
                                    s && c.stroke()),
                                    n = !0;
                                else {
                                    x = a.axisX.convertValueToPixel(x);
                                    v = a.axisY.convertValueToPixel(p[r].y);
                                    var B = k.dataPointIds[r];
                                    this._eventManager.objectMap[B] = {
                                        id: B,
                                        objectType: "dataPoint",
                                        dataSeriesIndex: h,
                                        dataPointIndex: r,
                                        x1: x,
                                        y1: v
                                    };
                                    z || n ? (!z && k.connectNullData ? (b.setLineDash && (k.options.nullDataLineDashType || m === k.lineDashType && k.lineDashType !== k.nullDataLineDashType) && (b.stroke(),
                                    b.beginPath(),
                                    b.moveTo(t.x, t.y),
                                    m = k.nullDataLineDashType,
                                    b.setLineDash(q)),
                                    b.lineTo(x, v),
                                    s && c.lineTo(x, v)) : (b.beginPath(),
                                    b.moveTo(x, v),
                                    s && (c.beginPath(),
                                    c.moveTo(x, v))),
                                    n = z = !1) : (b.lineTo(x, v),
                                    s && c.lineTo(x, v),
                                    0 == r % 500 && (b.stroke(),
                                    b.beginPath(),
                                    b.moveTo(x, v),
                                    s && (c.stroke(),
                                    c.beginPath(),
                                    c.moveTo(x, v))));
                                    t = {
                                        x: x,
                                        y: v
                                    };
                                    r < p.length - 1 && (y !== (p[r].lineColor || l) || m !== (p[r].lineDashType || k.lineDashType)) && (b.stroke(),
                                    b.beginPath(),
                                    b.moveTo(x, v),
                                    y = p[r].lineColor || l,
                                    b.strokeStyle = y,
                                    b.setLineDash && (p[r].lineDashType ? (m = p[r].lineDashType,
                                    b.setLineDash(J(m, k.lineThickness))) : (m = k.lineDashType,
                                    b.setLineDash(f))));
                                    if (0 !== p[r].markerSize && (0 < p[r].markerSize || 0 < k.markerSize)) {
                                        var E = k.getMarkerProperties(r, x, v, b);
                                        e.push(E);
                                        B = R(B);
                                        s && e.push({
                                            x: x,
                                            y: v,
                                            ctx: c,
                                            type: E.type,
                                            size: E.size,
                                            color: B,
                                            borderColor: B,
                                            borderThickness: E.borderThickness
                                        })
                                    }
                                    (p[r].indexLabel || k.indexLabel || p[r].indexLabelFormatter || k.indexLabelFormatter) && this._indexLabels.push({
                                        chartType: "line",
                                        dataPoint: p[r],
                                        dataSeries: k,
                                        point: {
                                            x: x,
                                            y: v
                                        },
                                        direction: 0 > p[r].y === a.axisY.reversed ? 1 : -1,
                                        color: l
                                    })
                                }
                        b.stroke();
                        s && c.stroke()
                    }
                }
                ba.drawMarkers(e);
                s && (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                b.globalCompositeOperation = "source-atop",
                a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                b.clearRect(d.x1, d.y1, d.width, d.height),
                c.beginPath());
                b.restore();
                b.beginPath();
                return {
                    source: g,
                    dest: this.plotArea.ctx,
                    animationCallback: M.xClipAnimation,
                    easingFunction: M.easing.linear,
                    animationBase: 0
                }
            }
        }
        ;
        n.prototype.renderStepLine = function(a) {
            var g = a.targetCanvasCtx || this.plotArea.ctx
              , b = s ? this._preRenderCtx : g;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var c = this._eventManager.ghostCtx;
                b.save();
                var d = this.plotArea;
                b.beginPath();
                b.rect(d.x1, d.y1, d.width, d.height);
                b.clip();
                for (var e = [], t, w = 0; w < a.dataSeriesIndexes.length; w++) {
                    var h = a.dataSeriesIndexes[w]
                      , k = this.data[h];
                    b.lineWidth = k.lineThickness;
                    var p = k.dataPoints
                      , m = "solid";
                    if (b.setLineDash) {
                        var q = J(k.nullDataLineDashType, k.lineThickness)
                          , m = k.lineDashType
                          , f = J(m, k.lineThickness);
                        b.setLineDash(f)
                    }
                    var l = k.id;
                    this._eventManager.objectMap[l] = {
                        objectType: "dataSeries",
                        dataSeriesIndex: h
                    };
                    l = R(l);
                    c.strokeStyle = l;
                    c.lineWidth = 0 < k.lineThickness ? Math.max(k.lineThickness, 4) : 0;
                    var l = k._colorSet
                      , y = l = k.lineColor = k.options.lineColor ? k.options.lineColor : l[0];
                    b.strokeStyle = l;
                    var z = !0, r = 0, x, v;
                    b.beginPath();
                    if (0 < p.length) {
                        for (var n = !1, r = 0; r < p.length; r++)
                            if (x = p[r].getTime ? p[r].x.getTime() : p[r].x,
                            !(x < a.axisX.dataInfo.viewPortMin || x > a.axisX.dataInfo.viewPortMax && (!k.connectNullData || !n)))
                                if ("number" !== typeof p[r].y)
                                    0 < r && !(k.connectNullData || n || z) && (b.stroke(),
                                    s && c.stroke()),
                                    n = !0;
                                else {
                                    var B = v;
                                    x = a.axisX.convertValueToPixel(x);
                                    v = a.axisY.convertValueToPixel(p[r].y);
                                    var E = k.dataPointIds[r];
                                    this._eventManager.objectMap[E] = {
                                        id: E,
                                        objectType: "dataPoint",
                                        dataSeriesIndex: h,
                                        dataPointIndex: r,
                                        x1: x,
                                        y1: v
                                    };
                                    z || n ? (!z && k.connectNullData ? (b.setLineDash && (k.options.nullDataLineDashType || m === k.lineDashType && k.lineDashType !== k.nullDataLineDashType) && (b.stroke(),
                                    b.beginPath(),
                                    b.moveTo(t.x, t.y),
                                    m = k.nullDataLineDashType,
                                    b.setLineDash(q)),
                                    b.lineTo(x, B),
                                    b.lineTo(x, v),
                                    s && (c.lineTo(x, B),
                                    c.lineTo(x, v))) : (b.beginPath(),
                                    b.moveTo(x, v),
                                    s && (c.beginPath(),
                                    c.moveTo(x, v))),
                                    n = z = !1) : (b.lineTo(x, B),
                                    s && c.lineTo(x, B),
                                    b.lineTo(x, v),
                                    s && c.lineTo(x, v),
                                    0 == r % 500 && (b.stroke(),
                                    b.beginPath(),
                                    b.moveTo(x, v),
                                    s && (c.stroke(),
                                    c.beginPath(),
                                    c.moveTo(x, v))));
                                    t = {
                                        x: x,
                                        y: v
                                    };
                                    r < p.length - 1 && (y !== (p[r].lineColor || l) || m !== (p[r].lineDashType || k.lineDashType)) && (b.stroke(),
                                    b.beginPath(),
                                    b.moveTo(x, v),
                                    y = p[r].lineColor || l,
                                    b.strokeStyle = y,
                                    b.setLineDash && (p[r].lineDashType ? (m = p[r].lineDashType,
                                    b.setLineDash(J(m, k.lineThickness))) : (m = k.lineDashType,
                                    b.setLineDash(f))));
                                    0 !== p[r].markerSize && (0 < p[r].markerSize || 0 < k.markerSize) && (B = k.getMarkerProperties(r, x, v, b),
                                    e.push(B),
                                    E = R(E),
                                    s && e.push({
                                        x: x,
                                        y: v,
                                        ctx: c,
                                        type: B.type,
                                        size: B.size,
                                        color: E,
                                        borderColor: E,
                                        borderThickness: B.borderThickness
                                    }));
                                    (p[r].indexLabel || k.indexLabel || p[r].indexLabelFormatter || k.indexLabelFormatter) && this._indexLabels.push({
                                        chartType: "stepLine",
                                        dataPoint: p[r],
                                        dataSeries: k,
                                        point: {
                                            x: x,
                                            y: v
                                        },
                                        direction: 0 > p[r].y === a.axisY.reversed ? 1 : -1,
                                        color: l
                                    })
                                }
                        b.stroke();
                        s && c.stroke()
                    }
                }
                ba.drawMarkers(e);
                s && (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                b.globalCompositeOperation = "source-atop",
                a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                b.clearRect(d.x1, d.y1, d.width, d.height),
                c.beginPath());
                b.restore();
                b.beginPath();
                return {
                    source: g,
                    dest: this.plotArea.ctx,
                    animationCallback: M.xClipAnimation,
                    easingFunction: M.easing.linear,
                    animationBase: 0
                }
            }
        }
        ;
        n.prototype.renderSpline = function(a) {
            function g(a) {
                a = u(a, 2);
                if (0 < a.length) {
                    c.beginPath();
                    s && d.beginPath();
                    c.moveTo(a[0].x, a[0].y);
                    a[0].newStrokeStyle && (c.strokeStyle = a[0].newStrokeStyle);
                    a[0].newLineDashArray && c.setLineDash(a[0].newLineDashArray);
                    s && d.moveTo(a[0].x, a[0].y);
                    for (var b = 0; b < a.length - 3; b += 3)
                        if (c.bezierCurveTo(a[b + 1].x, a[b + 1].y, a[b + 2].x, a[b + 2].y, a[b + 3].x, a[b + 3].y),
                        s && d.bezierCurveTo(a[b + 1].x, a[b + 1].y, a[b + 2].x, a[b + 2].y, a[b + 3].x, a[b + 3].y),
                        0 < b && 0 === b % 3E3 || a[b + 3].newStrokeStyle || a[b + 3].newLineDashArray)
                            c.stroke(),
                            c.beginPath(),
                            c.moveTo(a[b + 3].x, a[b + 3].y),
                            a[b + 3].newStrokeStyle && (c.strokeStyle = a[b + 3].newStrokeStyle),
                            a[b + 3].newLineDashArray && c.setLineDash(a[b + 3].newLineDashArray),
                            s && (d.stroke(),
                            d.beginPath(),
                            d.moveTo(a[b + 3].x, a[b + 3].y));
                    c.stroke();
                    s && d.stroke()
                }
            }
            var b = a.targetCanvasCtx || this.plotArea.ctx
              , c = s ? this._preRenderCtx : b;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var d = this._eventManager.ghostCtx;
                c.save();
                var e = this.plotArea;
                c.beginPath();
                c.rect(e.x1, e.y1, e.width, e.height);
                c.clip();
                for (var t = [], w = 0; w < a.dataSeriesIndexes.length; w++) {
                    var h = a.dataSeriesIndexes[w]
                      , k = this.data[h];
                    c.lineWidth = k.lineThickness;
                    var p = k.dataPoints
                      , m = "solid";
                    if (c.setLineDash) {
                        var q = J(k.nullDataLineDashType, k.lineThickness)
                          , m = k.lineDashType
                          , f = J(m, k.lineThickness);
                        c.setLineDash(f)
                    }
                    var l = k.id;
                    this._eventManager.objectMap[l] = {
                        objectType: "dataSeries",
                        dataSeriesIndex: h
                    };
                    l = R(l);
                    d.strokeStyle = l;
                    d.lineWidth = 0 < k.lineThickness ? Math.max(k.lineThickness, 4) : 0;
                    var l = k._colorSet
                      , y = l = k.lineColor = k.options.lineColor ? k.options.lineColor : l[0];
                    c.strokeStyle = l;
                    var z = 0, r, x, v = [];
                    c.beginPath();
                    if (0 < p.length)
                        for (x = !1,
                        z = 0; z < p.length; z++)
                            if (r = p[z].getTime ? p[z].x.getTime() : p[z].x,
                            !(r < a.axisX.dataInfo.viewPortMin || r > a.axisX.dataInfo.viewPortMax && (!k.connectNullData || !x)))
                                if ("number" !== typeof p[z].y)
                                    0 < z && !x && (k.connectNullData ? c.setLineDash && (0 < v.length && (k.options.nullDataLineDashType || !p[z - 1].lineDashType)) && (v[v.length - 1].newLineDashArray = q,
                                    m = k.nullDataLineDashType) : (g(v),
                                    v = [])),
                                    x = !0;
                                else {
                                    r = a.axisX.convertValueToPixel(r);
                                    x = a.axisY.convertValueToPixel(p[z].y);
                                    var n = k.dataPointIds[z];
                                    this._eventManager.objectMap[n] = {
                                        id: n,
                                        objectType: "dataPoint",
                                        dataSeriesIndex: h,
                                        dataPointIndex: z,
                                        x1: r,
                                        y1: x
                                    };
                                    v[v.length] = {
                                        x: r,
                                        y: x
                                    };
                                    z < p.length - 1 && (y !== (p[z].lineColor || l) || m !== (p[z].lineDashType || k.lineDashType)) && (y = p[z].lineColor || l,
                                    v[v.length - 1].newStrokeStyle = y,
                                    c.setLineDash && (p[z].lineDashType ? (m = p[z].lineDashType,
                                    v[v.length - 1].newLineDashArray = J(m, k.lineThickness)) : (m = k.lineDashType,
                                    v[v.length - 1].newLineDashArray = f)));
                                    if (0 !== p[z].markerSize && (0 < p[z].markerSize || 0 < k.markerSize)) {
                                        var B = k.getMarkerProperties(z, r, x, c);
                                        t.push(B);
                                        n = R(n);
                                        s && t.push({
                                            x: r,
                                            y: x,
                                            ctx: d,
                                            type: B.type,
                                            size: B.size,
                                            color: n,
                                            borderColor: n,
                                            borderThickness: B.borderThickness
                                        })
                                    }
                                    (p[z].indexLabel || k.indexLabel || p[z].indexLabelFormatter || k.indexLabelFormatter) && this._indexLabels.push({
                                        chartType: "spline",
                                        dataPoint: p[z],
                                        dataSeries: k,
                                        point: {
                                            x: r,
                                            y: x
                                        },
                                        direction: 0 > p[z].y === a.axisY.reversed ? 1 : -1,
                                        color: l
                                    });
                                    x = !1
                                }
                    g(v)
                }
                ba.drawMarkers(t);
                s && (b.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                c.globalCompositeOperation = "source-atop",
                a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                c.clearRect(e.x1, e.y1, e.width, e.height),
                d.beginPath());
                c.restore();
                c.beginPath();
                return {
                    source: b,
                    dest: this.plotArea.ctx,
                    animationCallback: M.xClipAnimation,
                    easingFunction: M.easing.linear,
                    animationBase: 0
                }
            }
        }
        ;
        n.prototype.renderColumn = function(a) {
            var g = a.targetCanvasCtx || this.plotArea.ctx
              , b = s ? this._preRenderCtx : g;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var c = null, d = this.plotArea, e = 0, t, w, h, k = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), e = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, p = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.width, 0.9 * (this.plotArea.width / a.plotType.totalDataSeries)) << 0, m = a.axisX.dataInfo.minDiff;
                isFinite(m) || (m = 0.3 * Math.abs(a.axisX.range));
                m = this.dataPointWidth = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (d.width * (a.axisX.logarithmic ? Math.log(m) / Math.log(a.axisX.range) : Math.abs(m) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
                this.dataPointMaxWidth && e > p && (e = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, p));
                !this.dataPointMaxWidth && (this.dataPointMinWidth && p < e) && (p = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, e));
                m < e && (m = e);
                m > p && (m = p);
                b.save();
                s && this._eventManager.ghostCtx.save();
                b.beginPath();
                b.rect(d.x1, d.y1, d.width, d.height);
                b.clip();
                s && (this._eventManager.ghostCtx.beginPath(),
                this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height),
                this._eventManager.ghostCtx.clip());
                for (p = 0; p < a.dataSeriesIndexes.length; p++) {
                    var q = a.dataSeriesIndexes[p]
                      , f = this.data[q]
                      , l = f.dataPoints;
                    if (0 < l.length)
                        for (var y = 5 < m && f.bevelEnabled ? !0 : !1, e = 0; e < l.length; e++)
                            if (l[e].getTime ? h = l[e].x.getTime() : h = l[e].x,
                            !(h < a.axisX.dataInfo.viewPortMin || h > a.axisX.dataInfo.viewPortMax) && "number" === typeof l[e].y) {
                                t = a.axisX.convertValueToPixel(h);
                                w = a.axisY.convertValueToPixel(l[e].y);
                                t = a.axisX.reversed ? t + a.plotType.totalDataSeries * m / 2 - (a.previousDataSeriesCount + p) * m << 0 : t - a.plotType.totalDataSeries * m / 2 + (a.previousDataSeriesCount + p) * m << 0;
                                var z = a.axisX.reversed ? t - m << 0 : t + m << 0, r;
                                0 <= l[e].y ? r = k : (r = w,
                                w = k);
                                w > r && (c = w,
                                w = r,
                                r = c);
                                c = l[e].color ? l[e].color : f._colorSet[e % f._colorSet.length];
                                da(b, a.axisX.reversed ? z : t, w, a.axisX.reversed ? t : z, r, c, 0, null, y && (a.axisY.reversed ? 0 > l[e].y : 0 <= l[e].y), (a.axisY.reversed ? 0 <= l[e].y : 0 > l[e].y) && y, !1, !1, f.fillOpacity);
                                c = f.dataPointIds[e];
                                this._eventManager.objectMap[c] = {
                                    id: c,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: q,
                                    dataPointIndex: e,
                                    x1: t,
                                    y1: w,
                                    x2: z,
                                    y2: r
                                };
                                c = R(c);
                                s && da(this._eventManager.ghostCtx, a.axisX.reversed ? z : t, w, a.axisX.reversed ? t : z, r, c, 0, null, !1, !1, !1, !1);
                                (l[e].indexLabel || f.indexLabel || l[e].indexLabelFormatter || f.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "column",
                                    dataPoint: l[e],
                                    dataSeries: f,
                                    point: {
                                        x: t + (z - t) / 2,
                                        y: 0 > l[e].y === a.axisY.reversed ? w : r
                                    },
                                    direction: 0 > l[e].y === a.axisY.reversed ? 1 : -1,
                                    bounds: {
                                        x1: t,
                                        y1: Math.min(w, r),
                                        x2: z,
                                        y2: Math.max(w, r)
                                    },
                                    color: c
                                })
                            }
                }
                s && (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                b.globalCompositeOperation = "source-atop",
                a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                b.clearRect(d.x1, d.y1, d.width, d.height),
                this._eventManager.ghostCtx.restore());
                b.restore();
                return {
                    source: g,
                    dest: this.plotArea.ctx,
                    animationCallback: M.yScaleAnimation,
                    easingFunction: M.easing.easeOutQuart,
                    animationBase: k < a.axisY.bounds.y1 ? a.axisY.bounds.y1 : k > a.axisY.bounds.y2 ? a.axisY.bounds.y2 : k
                }
            }
        }
        ;
        n.prototype.renderStackedColumn = function(a) {
            var g = a.targetCanvasCtx || this.plotArea.ctx
              , b = s ? this._preRenderCtx : g;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var c = null, d = this.plotArea, e = [], t = [], w = [], h = [], k = 0, p, m, q = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), k = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, f = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.15 * this.width << 0, l = a.axisX.dataInfo.minDiff;
                isFinite(l) || (l = 0.3 * Math.abs(a.axisX.range));
                l = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (d.width * (a.axisX.logarithmic ? Math.log(l) / Math.log(a.axisX.range) : Math.abs(l) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
                this.dataPointMaxWidth && k > f && (k = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, f));
                !this.dataPointMaxWidth && (this.dataPointMinWidth && f < k) && (f = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, k));
                l < k && (l = k);
                l > f && (l = f);
                b.save();
                s && this._eventManager.ghostCtx.save();
                b.beginPath();
                b.rect(d.x1, d.y1, d.width, d.height);
                b.clip();
                s && (this._eventManager.ghostCtx.beginPath(),
                this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height),
                this._eventManager.ghostCtx.clip());
                for (f = 0; f < a.dataSeriesIndexes.length; f++) {
                    var y = a.dataSeriesIndexes[f]
                      , z = this.data[y]
                      , r = z.dataPoints;
                    if (0 < r.length) {
                        var x = 5 < l && z.bevelEnabled ? !0 : !1;
                        b.strokeStyle = "#4572A7 ";
                        for (k = 0; k < r.length; k++)
                            if (c = r[k].x.getTime ? r[k].x.getTime() : r[k].x,
                            !(c < a.axisX.dataInfo.viewPortMin || c > a.axisX.dataInfo.viewPortMax) && "number" === typeof r[k].y) {
                                p = a.axisX.convertValueToPixel(c);
                                p = p - a.plotType.plotUnits.length * l / 2 + a.index * l << 0;
                                var v = p + l << 0, n;
                                if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < r[k].y)
                                    w[c] = r[k].y + (w[c] ? w[c] : 0),
                                    0 < w[c] && (m = a.axisY.convertValueToPixel(w[c]),
                                    n = "undefined" !== typeof e[c] ? e[c] : q,
                                    e[c] = m);
                                else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= r[k].y)
                                    h[c] = r[k].y + (h[c] ? h[c] : 0),
                                    n = a.axisY.convertValueToPixel(h[c]),
                                    m = "undefined" !== typeof t[c] ? t[c] : q,
                                    t[c] = n;
                                else if (m = a.axisY.convertValueToPixel(r[k].y),
                                0 <= r[k].y) {
                                    var B = "undefined" !== typeof e[c] ? e[c] : 0;
                                    m -= B;
                                    n = q - B;
                                    e[c] = B + (n - m)
                                } else
                                    B = t[c] ? t[c] : 0,
                                    n = m + B,
                                    m = q + B,
                                    t[c] = B + (n - m);
                                c = r[k].color ? r[k].color : z._colorSet[k % z._colorSet.length];
                                da(b, p, a.axisY.reversed ? n : m, v, a.axisY.reversed ? m : n, c, 0, null, x && (a.axisY.reversed ? 0 > r[k].y : 0 <= r[k].y), (a.axisY.reversed ? 0 <= r[k].y : 0 > r[k].y) && x, !1, !1, z.fillOpacity);
                                c = z.dataPointIds[k];
                                this._eventManager.objectMap[c] = {
                                    id: c,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: y,
                                    dataPointIndex: k,
                                    x1: p,
                                    y1: m,
                                    x2: v,
                                    y2: n
                                };
                                c = R(c);
                                s && da(this._eventManager.ghostCtx, p, m, v, n, c, 0, null, !1, !1, !1, !1);
                                (r[k].indexLabel || z.indexLabel || r[k].indexLabelFormatter || z.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "stackedColumn",
                                    dataPoint: r[k],
                                    dataSeries: z,
                                    point: {
                                        x: p + (v - p) / 2,
                                        y: 0 <= r[k].y ? m : n
                                    },
                                    direction: 0 > r[k].y === a.axisY.reversed ? 1 : -1,
                                    bounds: {
                                        x1: p,
                                        y1: Math.min(m, n),
                                        x2: v,
                                        y2: Math.max(m, n)
                                    },
                                    color: c,
                                    cumulativeY: z.dataPointEOs[k].cumulativeY
                                })
                            }
                    }
                }
                s && (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                b.globalCompositeOperation = "source-atop",
                a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                b.clearRect(d.x1, d.y1, d.width, d.height),
                this._eventManager.ghostCtx.restore());
                b.restore();
                return {
                    source: g,
                    dest: this.plotArea.ctx,
                    animationCallback: M.yScaleAnimation,
                    easingFunction: M.easing.easeOutQuart,
                    animationBase: q < a.axisY.bounds.y1 ? a.axisY.bounds.y1 : q > a.axisY.bounds.y2 ? a.axisY.bounds.y2 : q
                }
            }
        }
        ;
        n.prototype.renderStackedColumn100 = function(a) {
            var g = a.targetCanvasCtx || this.plotArea.ctx
              , b = s ? this._preRenderCtx : g;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var c = null, d = this.plotArea, e = [], t = [], w = [], h = [], k = 0, p, m, q, f = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), k = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
                q = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.15 * this.width << 0;
                var l = a.axisX.dataInfo.minDiff;
                isFinite(l) || (l = 0.3 * Math.abs(a.axisX.range));
                l = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (d.width * (a.axisX.logarithmic ? Math.log(l) / Math.log(a.axisX.range) : Math.abs(l) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
                this.dataPointMaxWidth && k > q && (k = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, q));
                !this.dataPointMaxWidth && (this.dataPointMinWidth && q < k) && (q = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, k));
                l < k && (l = k);
                l > q && (l = q);
                b.save();
                s && this._eventManager.ghostCtx.save();
                b.beginPath();
                b.rect(d.x1, d.y1, d.width, d.height);
                b.clip();
                s && (this._eventManager.ghostCtx.beginPath(),
                this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height),
                this._eventManager.ghostCtx.clip());
                for (var y = 0; y < a.dataSeriesIndexes.length; y++) {
                    var n = a.dataSeriesIndexes[y]
                      , r = this.data[n]
                      , x = r.dataPoints;
                    if (0 < x.length)
                        for (var v = 5 < l && r.bevelEnabled ? !0 : !1, k = 0; k < x.length; k++)
                            if (q = x[k].x.getTime ? x[k].x.getTime() : x[k].x,
                            !(q < a.axisX.dataInfo.viewPortMin || q > a.axisX.dataInfo.viewPortMax) && "number" === typeof x[k].y) {
                                p = a.axisX.convertValueToPixel(q);
                                m = 0 !== a.dataPointYSums[q] ? 100 * (x[k].y / a.dataPointYSums[q]) : 0;
                                p = p - a.plotType.plotUnits.length * l / 2 + a.index * l << 0;
                                var u = p + l << 0, B;
                                if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < x[k].y) {
                                    w[q] = m + ("undefined" !== typeof w[q] ? w[q] : 0);
                                    if (0 >= w[q])
                                        continue;
                                    m = a.axisY.convertValueToPixel(w[q]);
                                    B = e[q] ? e[q] : f;
                                    e[q] = m
                                } else
                                    a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= x[k].y ? (h[q] = m + ("undefined" !== typeof h[q] ? h[q] : 0),
                                    B = a.axisY.convertValueToPixel(h[q]),
                                    m = t[q] ? t[q] : f,
                                    t[q] = B) : (m = a.axisY.convertValueToPixel(m),
                                    0 <= x[k].y ? (c = "undefined" !== typeof e[q] ? e[q] : 0,
                                    m -= c,
                                    B = f - c,
                                    a.dataSeriesIndexes.length - 1 === y && 1 >= Math.abs(d.y1 - m) && (m = d.y1),
                                    e[q] = c + (B - m)) : (c = "undefined" !== typeof t[q] ? t[q] : 0,
                                    B = m + c,
                                    m = f + c,
                                    a.dataSeriesIndexes.length - 1 === y && 1 >= Math.abs(d.y2 - B) && (B = d.y2),
                                    t[q] = c + (B - m)));
                                c = x[k].color ? x[k].color : r._colorSet[k % r._colorSet.length];
                                da(b, p, a.axisY.reversed ? B : m, u, a.axisY.reversed ? m : B, c, 0, null, v && (a.axisY.reversed ? 0 > x[k].y : 0 <= x[k].y), (a.axisY.reversed ? 0 <= x[k].y : 0 > x[k].y) && v, !1, !1, r.fillOpacity);
                                c = r.dataPointIds[k];
                                this._eventManager.objectMap[c] = {
                                    id: c,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: n,
                                    dataPointIndex: k,
                                    x1: p,
                                    y1: m,
                                    x2: u,
                                    y2: B
                                };
                                c = R(c);
                                s && da(this._eventManager.ghostCtx, p, m, u, B, c, 0, null, !1, !1, !1, !1);
                                (x[k].indexLabel || r.indexLabel || x[k].indexLabelFormatter || r.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "stackedColumn100",
                                    dataPoint: x[k],
                                    dataSeries: r,
                                    point: {
                                        x: p + (u - p) / 2,
                                        y: 0 <= x[k].y ? m : B
                                    },
                                    direction: 0 > x[k].y === a.axisY.reversed ? 1 : -1,
                                    bounds: {
                                        x1: p,
                                        y1: Math.min(m, B),
                                        x2: u,
                                        y2: Math.max(m, B)
                                    },
                                    color: c,
                                    yCumulative: 100 * (r.dataPointEOs[k].cumulativeY / a.dataPointYSums[q])
                                })
                            }
                }
                s && (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                b.globalCompositeOperation = "source-atop",
                a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                b.clearRect(d.x1, d.y1, d.width, d.height),
                this._eventManager.ghostCtx.restore());
                b.restore();
                return {
                    source: g,
                    dest: this.plotArea.ctx,
                    animationCallback: M.yScaleAnimation,
                    easingFunction: M.easing.easeOutQuart,
                    animationBase: f < a.axisY.bounds.y1 ? a.axisY.bounds.y1 : f > a.axisY.bounds.y2 ? a.axisY.bounds.y2 : f
                }
            }
        }
        ;
        n.prototype.renderBar = function(a) {
            var g = a.targetCanvasCtx || this.plotArea.ctx
              , b = s ? this._preRenderCtx : g;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var c = null, d = this.plotArea, e = 0, t, w, h, k = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), e = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, p = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / a.plotType.totalDataSeries)) << 0, m = a.axisX.dataInfo.minDiff;
                isFinite(m) || (m = 0.3 * Math.abs(a.axisX.range));
                m = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (d.height * (a.axisX.logarithmic ? Math.log(m) / Math.log(a.axisX.range) : Math.abs(m) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
                this.dataPointMaxWidth && e > p && (e = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, p));
                !this.dataPointMaxWidth && (this.dataPointMinWidth && p < e) && (p = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, e));
                m < e && (m = e);
                m > p && (m = p);
                b.save();
                s && this._eventManager.ghostCtx.save();
                b.beginPath();
                b.rect(d.x1, d.y1, d.width, d.height);
                b.clip();
                s && (this._eventManager.ghostCtx.beginPath(),
                this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height),
                this._eventManager.ghostCtx.clip());
                for (p = 0; p < a.dataSeriesIndexes.length; p++) {
                    var q = a.dataSeriesIndexes[p]
                      , f = this.data[q]
                      , l = f.dataPoints;
                    if (0 < l.length) {
                        var y = 5 < m && f.bevelEnabled ? !0 : !1;
                        b.strokeStyle = "#4572A7 ";
                        for (e = 0; e < l.length; e++)
                            if (l[e].getTime ? h = l[e].x.getTime() : h = l[e].x,
                            !(h < a.axisX.dataInfo.viewPortMin || h > a.axisX.dataInfo.viewPortMax) && "number" === typeof l[e].y) {
                                w = a.axisX.convertValueToPixel(h);
                                t = a.axisY.convertValueToPixel(l[e].y);
                                w = a.axisX.reversed ? w + a.plotType.totalDataSeries * m / 2 - (a.previousDataSeriesCount + p) * m << 0 : w - a.plotType.totalDataSeries * m / 2 + (a.previousDataSeriesCount + p) * m << 0;
                                var n = a.axisX.reversed ? w - m << 0 : w + m << 0, r;
                                0 <= l[e].y ? r = k : (r = t,
                                t = k);
                                c = l[e].color ? l[e].color : f._colorSet[e % f._colorSet.length];
                                da(b, a.axisY.reversed ? t : r, a.axisX.reversed ? n : w, a.axisY.reversed ? r : t, a.axisX.reversed ? w : n, c, 0, null, y, !1, !1, !1, f.fillOpacity);
                                c = f.dataPointIds[e];
                                this._eventManager.objectMap[c] = {
                                    id: c,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: q,
                                    dataPointIndex: e,
                                    x1: r,
                                    y1: w,
                                    x2: t,
                                    y2: n
                                };
                                c = R(c);
                                s && da(this._eventManager.ghostCtx, r, a.axisX.reversed ? n : w, t, a.axisX.reversed ? w : n, c, 0, null, !1, !1, !1, !1);
                                (l[e].indexLabel || f.indexLabel || l[e].indexLabelFormatter || f.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "bar",
                                    dataPoint: l[e],
                                    dataSeries: f,
                                    point: {
                                        x: 0 <= l[e].y ? t : r,
                                        y: w + (n - w) / 2
                                    },
                                    direction: 0 > l[e].y === a.axisY.reversed ? 1 : -1,
                                    bounds: {
                                        x1: Math.min(r, t),
                                        y1: w,
                                        x2: Math.max(r, t),
                                        y2: n
                                    },
                                    color: c
                                })
                            }
                    }
                }
                s && (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                b.globalCompositeOperation = "source-atop",
                a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                b.clearRect(d.x1, d.y1, d.width, d.height),
                this._eventManager.ghostCtx.restore());
                b.restore();
                return {
                    source: g,
                    dest: this.plotArea.ctx,
                    animationCallback: M.xScaleAnimation,
                    easingFunction: M.easing.easeOutQuart,
                    animationBase: k < a.axisY.bounds.x1 ? a.axisY.bounds.x1 : k > a.axisY.bounds.x2 ? a.axisY.bounds.x2 : k
                }
            }
        }
        ;
        n.prototype.renderStackedBar = function(a) {
            var g = a.targetCanvasCtx || this.plotArea.ctx
              , b = s ? this._preRenderCtx : g;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var c = null, d = this.plotArea, e = [], t = [], w = [], h = [], k = 0, p, m, q = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), k = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, f = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.15 * this.height << 0, l = a.axisX.dataInfo.minDiff;
                isFinite(l) || (l = 0.3 * Math.abs(a.axisX.range));
                l = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (d.height * (a.axisX.logarithmic ? Math.log(l) / Math.log(a.axisX.range) : Math.abs(l) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
                this.dataPointMaxWidth && k > f && (k = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, f));
                !this.dataPointMaxWidth && (this.dataPointMinWidth && f < k) && (f = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, k));
                l < k && (l = k);
                l > f && (l = f);
                b.save();
                s && this._eventManager.ghostCtx.save();
                b.beginPath();
                b.rect(d.x1, d.y1, d.width, d.height);
                b.clip();
                s && (this._eventManager.ghostCtx.beginPath(),
                this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height),
                this._eventManager.ghostCtx.clip());
                for (f = 0; f < a.dataSeriesIndexes.length; f++) {
                    var y = a.dataSeriesIndexes[f]
                      , n = this.data[y]
                      , r = n.dataPoints;
                    if (0 < r.length) {
                        var x = 5 < l && n.bevelEnabled ? !0 : !1;
                        b.strokeStyle = "#4572A7 ";
                        for (k = 0; k < r.length; k++)
                            if (c = r[k].x.getTime ? r[k].x.getTime() : r[k].x,
                            !(c < a.axisX.dataInfo.viewPortMin || c > a.axisX.dataInfo.viewPortMax) && "number" === typeof r[k].y) {
                                m = a.axisX.convertValueToPixel(c);
                                m = m - a.plotType.plotUnits.length * l / 2 + a.index * l << 0;
                                var v = m + l << 0, u;
                                if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < r[k].y)
                                    w[c] = r[k].y + (w[c] ? w[c] : 0),
                                    0 < w[c] && (u = e[c] ? e[c] : q,
                                    e[c] = p = a.axisY.convertValueToPixel(w[c]));
                                else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= r[k].y)
                                    h[c] = r[k].y + (h[c] ? h[c] : 0),
                                    p = t[c] ? t[c] : q,
                                    t[c] = u = a.axisY.convertValueToPixel(h[c]);
                                else if (p = a.axisY.convertValueToPixel(r[k].y),
                                0 <= r[k].y) {
                                    var B = e[c] ? e[c] : 0;
                                    u = q + B;
                                    p += B;
                                    e[c] = B + (p - u)
                                } else
                                    B = t[c] ? t[c] : 0,
                                    u = p - B,
                                    p = q - B,
                                    t[c] = B + (p - u);
                                c = r[k].color ? r[k].color : n._colorSet[k % n._colorSet.length];
                                da(b, a.axisY.reversed ? p : u, m, a.axisY.reversed ? u : p, v, c, 0, null, x, !1, !1, !1, n.fillOpacity);
                                c = n.dataPointIds[k];
                                this._eventManager.objectMap[c] = {
                                    id: c,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: y,
                                    dataPointIndex: k,
                                    x1: u,
                                    y1: m,
                                    x2: p,
                                    y2: v
                                };
                                c = R(c);
                                s && da(this._eventManager.ghostCtx, u, m, p, v, c, 0, null, !1, !1, !1, !1);
                                (r[k].indexLabel || n.indexLabel || r[k].indexLabelFormatter || n.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "stackedBar",
                                    dataPoint: r[k],
                                    dataSeries: n,
                                    point: {
                                        x: 0 <= r[k].y ? p : u,
                                        y: m + (v - m) / 2
                                    },
                                    direction: 0 > r[k].y === a.axisY.reversed ? 1 : -1,
                                    bounds: {
                                        x1: Math.min(u, p),
                                        y1: m,
                                        x2: Math.max(u, p),
                                        y2: v
                                    },
                                    color: c
                                })
                            }
                    }
                }
                s && (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                b.globalCompositeOperation = "source-atop",
                a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                b.clearRect(d.x1, d.y1, d.width, d.height),
                this._eventManager.ghostCtx.restore());
                b.restore();
                return {
                    source: g,
                    dest: this.plotArea.ctx,
                    animationCallback: M.xScaleAnimation,
                    easingFunction: M.easing.easeOutQuart,
                    animationBase: q < a.axisY.bounds.x1 ? a.axisY.bounds.x1 : q > a.axisY.bounds.x2 ? a.axisY.bounds.x2 : q
                }
            }
        }
        ;
        n.prototype.renderStackedBar100 = function(a) {
            var g = a.targetCanvasCtx || this.plotArea.ctx
              , b = s ? this._preRenderCtx : g;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var c = null, d = this.plotArea, e = [], t = [], w = [], h = [], k = 0, p, m, q = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), k = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, f = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.15 * this.height << 0, l = a.axisX.dataInfo.minDiff;
                isFinite(l) || (l = 0.3 * Math.abs(a.axisX.range));
                l = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (d.height * (a.axisX.logarithmic ? Math.log(l) / Math.log(a.axisX.range) : Math.abs(l) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
                this.dataPointMaxWidth && k > f && (k = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, f));
                !this.dataPointMaxWidth && (this.dataPointMinWidth && f < k) && (f = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, k));
                l < k && (l = k);
                l > f && (l = f);
                b.save();
                s && this._eventManager.ghostCtx.save();
                b.beginPath();
                b.rect(d.x1, d.y1, d.width, d.height);
                b.clip();
                s && (this._eventManager.ghostCtx.beginPath(),
                this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height),
                this._eventManager.ghostCtx.clip());
                for (f = 0; f < a.dataSeriesIndexes.length; f++) {
                    var y = a.dataSeriesIndexes[f]
                      , n = this.data[y]
                      , r = n.dataPoints;
                    if (0 < r.length) {
                        var x = 5 < l && n.bevelEnabled ? !0 : !1;
                        b.strokeStyle = "#4572A7 ";
                        for (k = 0; k < r.length; k++)
                            if (c = r[k].x.getTime ? r[k].x.getTime() : r[k].x,
                            !(c < a.axisX.dataInfo.viewPortMin || c > a.axisX.dataInfo.viewPortMax) && "number" === typeof r[k].y) {
                                m = a.axisX.convertValueToPixel(c);
                                var v;
                                v = 0 !== a.dataPointYSums[c] ? 100 * (r[k].y / a.dataPointYSums[c]) : 0;
                                m = m - a.plotType.plotUnits.length * l / 2 + a.index * l << 0;
                                var u = m + l << 0;
                                if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < r[k].y) {
                                    w[c] = v + (w[c] ? w[c] : 0);
                                    if (0 >= w[c])
                                        continue;
                                    v = e[c] ? e[c] : q;
                                    e[c] = p = a.axisY.convertValueToPixel(w[c])
                                } else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= r[k].y)
                                    h[c] = v + (h[c] ? h[c] : 0),
                                    p = t[c] ? t[c] : q,
                                    t[c] = v = a.axisY.convertValueToPixel(h[c]);
                                else if (p = a.axisY.convertValueToPixel(v),
                                0 <= r[k].y) {
                                    var B = e[c] ? e[c] : 0;
                                    v = q + B;
                                    p += B;
                                    a.dataSeriesIndexes.length - 1 === f && 1 >= Math.abs(d.x2 - p) && (p = d.x2);
                                    e[c] = B + (p - v)
                                } else
                                    B = t[c] ? t[c] : 0,
                                    v = p - B,
                                    p = q - B,
                                    a.dataSeriesIndexes.length - 1 === f && 1 >= Math.abs(d.x1 - v) && (v = d.x1),
                                    t[c] = B + (p - v);
                                c = r[k].color ? r[k].color : n._colorSet[k % n._colorSet.length];
                                da(b, a.axisY.reversed ? p : v, m, a.axisY.reversed ? v : p, u, c, 0, null, x, !1, !1, !1, n.fillOpacity);
                                c = n.dataPointIds[k];
                                this._eventManager.objectMap[c] = {
                                    id: c,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: y,
                                    dataPointIndex: k,
                                    x1: v,
                                    y1: m,
                                    x2: p,
                                    y2: u
                                };
                                c = R(c);
                                s && da(this._eventManager.ghostCtx, v, m, p, u, c, 0, null, !1, !1, !1, !1);
                                (r[k].indexLabel || n.indexLabel || r[k].indexLabelFormatter || n.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "stackedBar100",
                                    dataPoint: r[k],
                                    dataSeries: n,
                                    point: {
                                        x: 0 <= r[k].y ? p : v,
                                        y: m + (u - m) / 2
                                    },
                                    direction: 0 > r[k].y === a.axisY.reversed ? 1 : -1,
                                    bounds: {
                                        x1: Math.min(v, p),
                                        y1: m,
                                        x2: Math.max(v, p),
                                        y2: u
                                    },
                                    color: c
                                })
                            }
                    }
                }
                s && (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                b.globalCompositeOperation = "source-atop",
                a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                b.clearRect(d.x1, d.y1, d.width, d.height),
                this._eventManager.ghostCtx.restore());
                b.restore();
                return {
                    source: g,
                    dest: this.plotArea.ctx,
                    animationCallback: M.xScaleAnimation,
                    easingFunction: M.easing.easeOutQuart,
                    animationBase: q < a.axisY.bounds.x1 ? a.axisY.bounds.x1 : q > a.axisY.bounds.x2 ? a.axisY.bounds.x2 : q
                }
            }
        }
        ;
        n.prototype.renderArea = function(a) {
            var g, b;
            function c() {
                B && (0 < f.lineThickness && e.stroke(),
                a.axisY.logarithmic || 0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum ? u = v : 0 > a.axisY.viewportMaximum ? u = w.y1 : 0 < a.axisY.viewportMinimum && (u = v),
                e.lineTo(z, u),
                e.lineTo(B.x, u),
                e.closePath(),
                e.globalAlpha = f.fillOpacity,
                e.fill(),
                e.globalAlpha = 1,
                s && (t.lineTo(z, u),
                t.lineTo(B.x, u),
                t.closePath(),
                t.fill()),
                e.beginPath(),
                e.moveTo(z, r),
                t.beginPath(),
                t.moveTo(z, r),
                B = {
                    x: z,
                    y: r
                })
            }
            var d = a.targetCanvasCtx || this.plotArea.ctx
              , e = s ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var t = this._eventManager.ghostCtx, w = a.axisY.lineCoordinates, h = [], k = this.plotArea, p;
                e.save();
                s && t.save();
                e.beginPath();
                e.rect(k.x1, k.y1, k.width, k.height);
                e.clip();
                s && (t.beginPath(),
                t.rect(k.x1, k.y1, k.width, k.height),
                t.clip());
                for (var m = 0; m < a.dataSeriesIndexes.length; m++) {
                    var q = a.dataSeriesIndexes[m]
                      , f = this.data[q]
                      , l = f.dataPoints
                      , h = f.id;
                    this._eventManager.objectMap[h] = {
                        objectType: "dataSeries",
                        dataSeriesIndex: q
                    };
                    h = R(h);
                    t.fillStyle = h;
                    h = [];
                    g = !0;
                    var n = 0, z, r, x, v = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), u, B = null;
                    if (0 < l.length) {
                        var E = f._colorSet[n % f._colorSet.length]
                          , A = f.lineColor = f.options.lineColor || E
                          , C = A;
                        e.fillStyle = E;
                        e.strokeStyle = A;
                        e.lineWidth = f.lineThickness;
                        b = "solid";
                        if (e.setLineDash) {
                            var K = J(f.nullDataLineDashType, f.lineThickness);
                            b = f.lineDashType;
                            var O = J(b, f.lineThickness);
                            e.setLineDash(O)
                        }
                        for (var aa = !0; n < l.length; n++)
                            if (x = l[n].x.getTime ? l[n].x.getTime() : l[n].x,
                            !(x < a.axisX.dataInfo.viewPortMin || x > a.axisX.dataInfo.viewPortMax && (!f.connectNullData || !aa)))
                                if ("number" !== typeof l[n].y)
                                    f.connectNullData || (aa || g) || c(),
                                    aa = !0;
                                else {
                                    z = a.axisX.convertValueToPixel(x);
                                    r = a.axisY.convertValueToPixel(l[n].y);
                                    g || aa ? (!g && f.connectNullData ? (e.setLineDash && (f.options.nullDataLineDashType || b === f.lineDashType && f.lineDashType !== f.nullDataLineDashType) && (g = z,
                                    b = r,
                                    z = p.x,
                                    r = p.y,
                                    c(),
                                    e.moveTo(p.x, p.y),
                                    z = g,
                                    r = b,
                                    B = p,
                                    b = f.nullDataLineDashType,
                                    e.setLineDash(K)),
                                    e.lineTo(z, r),
                                    s && t.lineTo(z, r)) : (e.beginPath(),
                                    e.moveTo(z, r),
                                    s && (t.beginPath(),
                                    t.moveTo(z, r)),
                                    B = {
                                        x: z,
                                        y: r
                                    }),
                                    aa = g = !1) : (e.lineTo(z, r),
                                    s && t.lineTo(z, r),
                                    0 == n % 250 && c());
                                    p = {
                                        x: z,
                                        y: r
                                    };
                                    n < l.length - 1 && (C !== (l[n].lineColor || A) || b !== (l[n].lineDashType || f.lineDashType)) && (c(),
                                    C = l[n].lineColor || A,
                                    e.strokeStyle = C,
                                    e.setLineDash && (l[n].lineDashType ? (b = l[n].lineDashType,
                                    e.setLineDash(J(b, f.lineThickness))) : (b = f.lineDashType,
                                    e.setLineDash(O))));
                                    var Z = f.dataPointIds[n];
                                    this._eventManager.objectMap[Z] = {
                                        id: Z,
                                        objectType: "dataPoint",
                                        dataSeriesIndex: q,
                                        dataPointIndex: n,
                                        x1: z,
                                        y1: r
                                    };
                                    0 !== l[n].markerSize && (0 < l[n].markerSize || 0 < f.markerSize) && (x = f.getMarkerProperties(n, z, r, e),
                                    h.push(x),
                                    Z = R(Z),
                                    s && h.push({
                                        x: z,
                                        y: r,
                                        ctx: t,
                                        type: x.type,
                                        size: x.size,
                                        color: Z,
                                        borderColor: Z,
                                        borderThickness: x.borderThickness
                                    }));
                                    (l[n].indexLabel || f.indexLabel || l[n].indexLabelFormatter || f.indexLabelFormatter) && this._indexLabels.push({
                                        chartType: "area",
                                        dataPoint: l[n],
                                        dataSeries: f,
                                        point: {
                                            x: z,
                                            y: r
                                        },
                                        direction: 0 > l[n].y === a.axisY.reversed ? 1 : -1,
                                        color: E
                                    })
                                }
                        c();
                        ba.drawMarkers(h)
                    }
                }
                s && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                e.globalCompositeOperation = "source-atop",
                a.axisX.maskCanvas && e.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                a.axisY.maskCanvas && e.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                e.clearRect(k.x1, k.y1, k.width, k.height),
                this._eventManager.ghostCtx.restore());
                e.restore();
                return {
                    source: d,
                    dest: this.plotArea.ctx,
                    animationCallback: M.xClipAnimation,
                    easingFunction: M.easing.linear,
                    animationBase: 0
                }
            }
        }
        ;
        n.prototype.renderSplineArea = function(a) {
            function g() {
                var b = u(x, 2);
                if (0 < b.length) {
                    if (0 < p.lineThickness) {
                        c.beginPath();
                        c.moveTo(b[0].x, b[0].y);
                        b[0].newStrokeStyle && (c.strokeStyle = b[0].newStrokeStyle);
                        b[0].newLineDashArray && c.setLineDash(b[0].newLineDashArray);
                        for (var f = 0; f < b.length - 3; f += 3)
                            if (c.bezierCurveTo(b[f + 1].x, b[f + 1].y, b[f + 2].x, b[f + 2].y, b[f + 3].x, b[f + 3].y),
                            s && d.bezierCurveTo(b[f + 1].x, b[f + 1].y, b[f + 2].x, b[f + 2].y, b[f + 3].x, b[f + 3].y),
                            b[f + 3].newStrokeStyle || b[f + 3].newLineDashArray)
                                c.stroke(),
                                c.beginPath(),
                                c.moveTo(b[f + 3].x, b[f + 3].y),
                                b[f + 3].newStrokeStyle && (c.strokeStyle = b[f + 3].newStrokeStyle),
                                b[f + 3].newLineDashArray && c.setLineDash(b[f + 3].newLineDashArray);
                        c.stroke()
                    }
                    c.beginPath();
                    c.moveTo(b[0].x, b[0].y);
                    s && (d.beginPath(),
                    d.moveTo(b[0].x, b[0].y));
                    for (f = 0; f < b.length - 3; f += 3)
                        c.bezierCurveTo(b[f + 1].x, b[f + 1].y, b[f + 2].x, b[f + 2].y, b[f + 3].x, b[f + 3].y),
                        s && d.bezierCurveTo(b[f + 1].x, b[f + 1].y, b[f + 2].x, b[f + 2].y, b[f + 3].x, b[f + 3].y);
                    a.axisY.logarithmic || 0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum ? z = n : 0 > a.axisY.viewportMaximum ? z = e.y1 : 0 < a.axisY.viewportMinimum && (z = n);
                    r = {
                        x: b[0].x,
                        y: b[0].y
                    };
                    c.lineTo(b[b.length - 1].x, z);
                    c.lineTo(r.x, z);
                    c.closePath();
                    c.globalAlpha = p.fillOpacity;
                    c.fill();
                    c.globalAlpha = 1;
                    s && (d.lineTo(b[b.length - 1].x, z),
                    d.lineTo(r.x, z),
                    d.closePath(),
                    d.fill())
                }
            }
            var b = a.targetCanvasCtx || this.plotArea.ctx
              , c = s ? this._preRenderCtx : b;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var d = this._eventManager.ghostCtx
                  , e = a.axisY.lineCoordinates
                  , t = []
                  , w = this.plotArea;
                c.save();
                s && d.save();
                c.beginPath();
                c.rect(w.x1, w.y1, w.width, w.height);
                c.clip();
                s && (d.beginPath(),
                d.rect(w.x1, w.y1, w.width, w.height),
                d.clip());
                for (var h = 0; h < a.dataSeriesIndexes.length; h++) {
                    var k = a.dataSeriesIndexes[h]
                      , p = this.data[k]
                      , m = p.dataPoints
                      , t = p.id;
                    this._eventManager.objectMap[t] = {
                        objectType: "dataSeries",
                        dataSeriesIndex: k
                    };
                    t = R(t);
                    d.fillStyle = t;
                    var t = [], q = 0, f, l, n = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), z, r = null, x = [];
                    if (0 < m.length) {
                        var v = p._colorSet[q % p._colorSet.length]
                          , A = p.lineColor = p.options.lineColor || v
                          , B = A;
                        c.fillStyle = v;
                        c.strokeStyle = A;
                        c.lineWidth = p.lineThickness;
                        var E = "solid";
                        if (c.setLineDash) {
                            var C = J(p.nullDataLineDashType, p.lineThickness)
                              , E = p.lineDashType
                              , D = J(E, p.lineThickness);
                            c.setLineDash(D)
                        }
                        for (l = !1; q < m.length; q++)
                            if (f = m[q].x.getTime ? m[q].x.getTime() : m[q].x,
                            !(f < a.axisX.dataInfo.viewPortMin || f > a.axisX.dataInfo.viewPortMax && (!p.connectNullData || !l)))
                                if ("number" !== typeof m[q].y)
                                    0 < q && !l && (p.connectNullData ? c.setLineDash && (0 < x.length && (p.options.nullDataLineDashType || !m[q - 1].lineDashType)) && (x[x.length - 1].newLineDashArray = C,
                                    E = p.nullDataLineDashType) : (g(),
                                    x = [])),
                                    l = !0;
                                else {
                                    f = a.axisX.convertValueToPixel(f);
                                    l = a.axisY.convertValueToPixel(m[q].y);
                                    var K = p.dataPointIds[q];
                                    this._eventManager.objectMap[K] = {
                                        id: K,
                                        objectType: "dataPoint",
                                        dataSeriesIndex: k,
                                        dataPointIndex: q,
                                        x1: f,
                                        y1: l
                                    };
                                    x[x.length] = {
                                        x: f,
                                        y: l
                                    };
                                    q < m.length - 1 && (B !== (m[q].lineColor || A) || E !== (m[q].lineDashType || p.lineDashType)) && (B = m[q].lineColor || A,
                                    x[x.length - 1].newStrokeStyle = B,
                                    c.setLineDash && (m[q].lineDashType ? (E = m[q].lineDashType,
                                    x[x.length - 1].newLineDashArray = J(E, p.lineThickness)) : (E = p.lineDashType,
                                    x[x.length - 1].newLineDashArray = D)));
                                    if (0 !== m[q].markerSize && (0 < m[q].markerSize || 0 < p.markerSize)) {
                                        var O = p.getMarkerProperties(q, f, l, c);
                                        t.push(O);
                                        K = R(K);
                                        s && t.push({
                                            x: f,
                                            y: l,
                                            ctx: d,
                                            type: O.type,
                                            size: O.size,
                                            color: K,
                                            borderColor: K,
                                            borderThickness: O.borderThickness
                                        })
                                    }
                                    (m[q].indexLabel || p.indexLabel || m[q].indexLabelFormatter || p.indexLabelFormatter) && this._indexLabels.push({
                                        chartType: "splineArea",
                                        dataPoint: m[q],
                                        dataSeries: p,
                                        point: {
                                            x: f,
                                            y: l
                                        },
                                        direction: 0 > m[q].y === a.axisY.reversed ? 1 : -1,
                                        color: v
                                    });
                                    l = !1
                                }
                        g();
                        ba.drawMarkers(t)
                    }
                }
                s && (b.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                c.globalCompositeOperation = "source-atop",
                a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                c.clearRect(w.x1, w.y1, w.width, w.height),
                this._eventManager.ghostCtx.restore());
                c.restore();
                return {
                    source: b,
                    dest: this.plotArea.ctx,
                    animationCallback: M.xClipAnimation,
                    easingFunction: M.easing.linear,
                    animationBase: 0
                }
            }
        }
        ;
        n.prototype.renderStepArea = function(a) {
            var g, b;
            function c() {
                B && (0 < f.lineThickness && e.stroke(),
                a.axisY.logarithmic || 0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum ? u = v : 0 > a.axisY.viewportMaximum ? u = w.y1 : 0 < a.axisY.viewportMinimum && (u = v),
                e.lineTo(z, u),
                e.lineTo(B.x, u),
                e.closePath(),
                e.globalAlpha = f.fillOpacity,
                e.fill(),
                e.globalAlpha = 1,
                s && (t.lineTo(z, u),
                t.lineTo(B.x, u),
                t.closePath(),
                t.fill()),
                e.beginPath(),
                e.moveTo(z, r),
                t.beginPath(),
                t.moveTo(z, r),
                B = {
                    x: z,
                    y: r
                })
            }
            var d = a.targetCanvasCtx || this.plotArea.ctx
              , e = s ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var t = this._eventManager.ghostCtx, w = a.axisY.lineCoordinates, h = [], k = this.plotArea, p;
                e.save();
                s && t.save();
                e.beginPath();
                e.rect(k.x1, k.y1, k.width, k.height);
                e.clip();
                s && (t.beginPath(),
                t.rect(k.x1, k.y1, k.width, k.height),
                t.clip());
                for (var m = 0; m < a.dataSeriesIndexes.length; m++) {
                    var q = a.dataSeriesIndexes[m]
                      , f = this.data[q]
                      , l = f.dataPoints
                      , h = f.id;
                    this._eventManager.objectMap[h] = {
                        objectType: "dataSeries",
                        dataSeriesIndex: q
                    };
                    h = R(h);
                    t.fillStyle = h;
                    h = [];
                    g = !0;
                    var n = 0, z, r, x, v = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), u, B = null;
                    b = !1;
                    if (0 < l.length) {
                        var E = f._colorSet[n % f._colorSet.length]
                          , A = f.lineColor = f.options.lineColor || E
                          , C = A;
                        e.fillStyle = E;
                        e.strokeStyle = A;
                        e.lineWidth = f.lineThickness;
                        var K = "solid";
                        if (e.setLineDash) {
                            var O = J(f.nullDataLineDashType, f.lineThickness)
                              , K = f.lineDashType
                              , aa = J(K, f.lineThickness);
                            e.setLineDash(aa)
                        }
                        for (; n < l.length; n++)
                            if (x = l[n].x.getTime ? l[n].x.getTime() : l[n].x,
                            !(x < a.axisX.dataInfo.viewPortMin || x > a.axisX.dataInfo.viewPortMax && (!f.connectNullData || !b))) {
                                var Z = r;
                                "number" !== typeof l[n].y ? (f.connectNullData || (b || g) || c(),
                                b = !0) : (z = a.axisX.convertValueToPixel(x),
                                r = a.axisY.convertValueToPixel(l[n].y),
                                g || b ? (!g && f.connectNullData ? (e.setLineDash && (f.options.nullDataLineDashType || K === f.lineDashType && f.lineDashType !== f.nullDataLineDashType) && (g = z,
                                b = r,
                                z = p.x,
                                r = p.y,
                                c(),
                                e.moveTo(p.x, p.y),
                                z = g,
                                r = b,
                                B = p,
                                K = f.nullDataLineDashType,
                                e.setLineDash(O)),
                                e.lineTo(z, Z),
                                e.lineTo(z, r),
                                s && (t.lineTo(z, Z),
                                t.lineTo(z, r))) : (e.beginPath(),
                                e.moveTo(z, r),
                                s && (t.beginPath(),
                                t.moveTo(z, r)),
                                B = {
                                    x: z,
                                    y: r
                                }),
                                b = g = !1) : (e.lineTo(z, Z),
                                s && t.lineTo(z, Z),
                                e.lineTo(z, r),
                                s && t.lineTo(z, r),
                                0 == n % 250 && c()),
                                p = {
                                    x: z,
                                    y: r
                                },
                                n < l.length - 1 && (C !== (l[n].lineColor || A) || K !== (l[n].lineDashType || f.lineDashType)) && (c(),
                                C = l[n].lineColor || A,
                                e.strokeStyle = C,
                                e.setLineDash && (l[n].lineDashType ? (K = l[n].lineDashType,
                                e.setLineDash(J(K, f.lineThickness))) : (K = f.lineDashType,
                                e.setLineDash(aa)))),
                                x = f.dataPointIds[n],
                                this._eventManager.objectMap[x] = {
                                    id: x,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: q,
                                    dataPointIndex: n,
                                    x1: z,
                                    y1: r
                                },
                                0 !== l[n].markerSize && (0 < l[n].markerSize || 0 < f.markerSize) && (Z = f.getMarkerProperties(n, z, r, e),
                                h.push(Z),
                                x = R(x),
                                s && h.push({
                                    x: z,
                                    y: r,
                                    ctx: t,
                                    type: Z.type,
                                    size: Z.size,
                                    color: x,
                                    borderColor: x,
                                    borderThickness: Z.borderThickness
                                })),
                                (l[n].indexLabel || f.indexLabel || l[n].indexLabelFormatter || f.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "stepArea",
                                    dataPoint: l[n],
                                    dataSeries: f,
                                    point: {
                                        x: z,
                                        y: r
                                    },
                                    direction: 0 > l[n].y === a.axisY.reversed ? 1 : -1,
                                    color: E
                                }))
                            }
                        c();
                        ba.drawMarkers(h)
                    }
                }
                s && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                e.globalCompositeOperation = "source-atop",
                a.axisX.maskCanvas && e.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                a.axisY.maskCanvas && e.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                e.clearRect(k.x1, k.y1, k.width, k.height),
                this._eventManager.ghostCtx.restore());
                e.restore();
                return {
                    source: d,
                    dest: this.plotArea.ctx,
                    animationCallback: M.xClipAnimation,
                    easingFunction: M.easing.linear,
                    animationBase: 0
                }
            }
        }
        ;
        n.prototype.renderStackedArea = function(a) {
            function g() {
                if (!(1 > k.length)) {
                    for (0 < E.lineThickness && c.stroke(); 0 < k.length; ) {
                        var a = k.pop();
                        c.lineTo(a.x, a.y);
                        s && z.lineTo(a.x, a.y)
                    }
                    c.closePath();
                    c.globalAlpha = E.fillOpacity;
                    c.fill();
                    c.globalAlpha = 1;
                    c.beginPath();
                    s && (z.closePath(),
                    z.fill(),
                    z.beginPath());
                    k = []
                }
            }
            var b = a.targetCanvasCtx || this.plotArea.ctx
              , c = s ? this._preRenderCtx : b;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var d = null, e = null, t = [], h = this.plotArea, l = [], k = [], p = [], m = [], q = 0, f, n, y = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), z = this._eventManager.ghostCtx, r, x, v;
                s && z.beginPath();
                c.save();
                s && z.save();
                c.beginPath();
                c.rect(h.x1, h.y1, h.width, h.height);
                c.clip();
                s && (z.beginPath(),
                z.rect(h.x1, h.y1, h.width, h.height),
                z.clip());
                for (var d = [], u = 0; u < a.dataSeriesIndexes.length; u++) {
                    var B = a.dataSeriesIndexes[u]
                      , E = this.data[B]
                      , A = E.dataPoints;
                    E.dataPointIndexes = [];
                    for (q = 0; q < A.length; q++)
                        B = A[q].x.getTime ? A[q].x.getTime() : A[q].x,
                        E.dataPointIndexes[B] = q,
                        d[B] || (p.push(B),
                        d[B] = !0);
                    p.sort(Ta)
                }
                for (u = 0; u < a.dataSeriesIndexes.length; u++) {
                    B = a.dataSeriesIndexes[u];
                    E = this.data[B];
                    A = E.dataPoints;
                    x = !0;
                    k = [];
                    q = E.id;
                    this._eventManager.objectMap[q] = {
                        objectType: "dataSeries",
                        dataSeriesIndex: B
                    };
                    q = R(q);
                    z.fillStyle = q;
                    if (0 < p.length) {
                        var d = E._colorSet[0]
                          , C = E.lineColor = E.options.lineColor || d
                          , K = C;
                        c.fillStyle = d;
                        c.strokeStyle = C;
                        c.lineWidth = E.lineThickness;
                        v = "solid";
                        if (c.setLineDash) {
                            var O = J(E.nullDataLineDashType, E.lineThickness);
                            v = E.lineDashType;
                            var aa = J(v, E.lineThickness);
                            c.setLineDash(aa)
                        }
                        for (var Z = !0, q = 0; q < p.length; q++) {
                            var e = p[q]
                              , ga = null
                              , ga = 0 <= E.dataPointIndexes[e] ? A[E.dataPointIndexes[e]] : {
                                x: e,
                                y: null
                            };
                            if (!(e < a.axisX.dataInfo.viewPortMin || e > a.axisX.dataInfo.viewPortMax && (!E.connectNullData || !Z)))
                                if ("number" !== typeof ga.y)
                                    E.connectNullData || (Z || x) || g(),
                                    Z = !0;
                                else {
                                    f = a.axisX.convertValueToPixel(e);
                                    var oa = l[e] ? l[e] : 0;
                                    if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length) {
                                        m[e] = ga.y + (m[e] ? m[e] : 0);
                                        if (0 >= m[e] && a.axisY.logarithmic)
                                            continue;
                                        n = a.axisY.convertValueToPixel(m[e])
                                    } else
                                        n = a.axisY.convertValueToPixel(ga.y),
                                        n -= oa;
                                    k.push({
                                        x: f,
                                        y: y - oa
                                    });
                                    l[e] = y - n;
                                    x || Z ? (!x && E.connectNullData ? (c.setLineDash && (E.options.nullDataLineDashType || v === E.lineDashType && E.lineDashType !== E.nullDataLineDashType) && (x = k.pop(),
                                    v = k[k.length - 1],
                                    g(),
                                    c.moveTo(r.x, r.y),
                                    k.push(v),
                                    k.push(x),
                                    v = E.nullDataLineDashType,
                                    c.setLineDash(O)),
                                    c.lineTo(f, n),
                                    s && z.lineTo(f, n)) : (c.beginPath(),
                                    c.moveTo(f, n),
                                    s && (z.beginPath(),
                                    z.moveTo(f, n))),
                                    Z = x = !1) : (c.lineTo(f, n),
                                    s && z.lineTo(f, n),
                                    0 == q % 250 && (g(),
                                    c.moveTo(f, n),
                                    s && z.moveTo(f, n),
                                    k.push({
                                        x: f,
                                        y: y - oa
                                    })));
                                    r = {
                                        x: f,
                                        y: n
                                    };
                                    q < A.length - 1 && (K !== (A[q].lineColor || C) || v !== (A[q].lineDashType || E.lineDashType)) && (g(),
                                    c.beginPath(),
                                    c.moveTo(f, n),
                                    k.push({
                                        x: f,
                                        y: y - oa
                                    }),
                                    K = A[q].lineColor || C,
                                    c.strokeStyle = K,
                                    c.setLineDash && (A[q].lineDashType ? (v = A[q].lineDashType,
                                    c.setLineDash(J(v, E.lineThickness))) : (v = E.lineDashType,
                                    c.setLineDash(aa))));
                                    if (0 <= E.dataPointIndexes[e]) {
                                        var ca = E.dataPointIds[E.dataPointIndexes[e]];
                                        this._eventManager.objectMap[ca] = {
                                            id: ca,
                                            objectType: "dataPoint",
                                            dataSeriesIndex: B,
                                            dataPointIndex: E.dataPointIndexes[e],
                                            x1: f,
                                            y1: n
                                        }
                                    }
                                    0 <= E.dataPointIndexes[e] && 0 !== ga.markerSize && (0 < ga.markerSize || 0 < E.markerSize) && (oa = E.getMarkerProperties(E.dataPointIndexes[e], f, n, c),
                                    t.push(oa),
                                    e = R(ca),
                                    s && t.push({
                                        x: f,
                                        y: n,
                                        ctx: z,
                                        type: oa.type,
                                        size: oa.size,
                                        color: e,
                                        borderColor: e,
                                        borderThickness: oa.borderThickness
                                    }));
                                    (ga.indexLabel || E.indexLabel || ga.indexLabelFormatter || E.indexLabelFormatter) && this._indexLabels.push({
                                        chartType: "stackedArea",
                                        dataPoint: ga,
                                        dataSeries: E,
                                        point: {
                                            x: f,
                                            y: n
                                        },
                                        direction: 0 > ga.y === a.axisY.reversed ? 1 : -1,
                                        color: d
                                    })
                                }
                        }
                        g();
                        c.moveTo(f, n);
                        s && z.moveTo(f, n)
                    }
                    delete E.dataPointIndexes
                }
                ba.drawMarkers(t);
                s && (b.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                c.globalCompositeOperation = "source-atop",
                a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                c.clearRect(h.x1, h.y1, h.width, h.height),
                z.restore());
                c.restore();
                return {
                    source: b,
                    dest: this.plotArea.ctx,
                    animationCallback: M.xClipAnimation,
                    easingFunction: M.easing.linear,
                    animationBase: 0
                }
            }
        }
        ;
        n.prototype.renderStackedArea100 = function(a) {
            function g() {
                for (0 < E.lineThickness && c.stroke(); 0 < k.length; ) {
                    var a = k.pop();
                    c.lineTo(a.x, a.y);
                    s && v.lineTo(a.x, a.y)
                }
                c.closePath();
                c.globalAlpha = E.fillOpacity;
                c.fill();
                c.globalAlpha = 1;
                c.beginPath();
                s && (v.closePath(),
                v.fill(),
                v.beginPath());
                k = []
            }
            var b = a.targetCanvasCtx || this.plotArea.ctx
              , c = s ? this._preRenderCtx : b;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var d = null, e = null, t = this.plotArea, h = [], l = [], k = [], p = [], m = [], q = 0, f, n, y, z, r, x = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), v = this._eventManager.ghostCtx;
                c.save();
                s && v.save();
                c.beginPath();
                c.rect(t.x1, t.y1, t.width, t.height);
                c.clip();
                s && (v.beginPath(),
                v.rect(t.x1, t.y1, t.width, t.height),
                v.clip());
                for (var d = [], u = 0; u < a.dataSeriesIndexes.length; u++) {
                    var B = a.dataSeriesIndexes[u]
                      , E = this.data[B]
                      , A = E.dataPoints;
                    E.dataPointIndexes = [];
                    for (q = 0; q < A.length; q++)
                        B = A[q].x.getTime ? A[q].x.getTime() : A[q].x,
                        E.dataPointIndexes[B] = q,
                        d[B] || (p.push(B),
                        d[B] = !0);
                    p.sort(Ta)
                }
                for (u = 0; u < a.dataSeriesIndexes.length; u++) {
                    B = a.dataSeriesIndexes[u];
                    E = this.data[B];
                    A = E.dataPoints;
                    z = !0;
                    d = E.id;
                    this._eventManager.objectMap[d] = {
                        objectType: "dataSeries",
                        dataSeriesIndex: B
                    };
                    d = R(d);
                    v.fillStyle = d;
                    k = [];
                    if (0 < p.length) {
                        var d = E._colorSet[q % E._colorSet.length]
                          , C = E.lineColor = E.options.lineColor || d
                          , K = C;
                        c.fillStyle = d;
                        c.strokeStyle = C;
                        c.lineWidth = E.lineThickness;
                        r = "solid";
                        if (c.setLineDash) {
                            var O = J(E.nullDataLineDashType, E.lineThickness);
                            r = E.lineDashType;
                            var aa = J(r, E.lineThickness);
                            c.setLineDash(aa)
                        }
                        for (var Z = !0, q = 0; q < p.length; q++) {
                            var e = p[q]
                              , ga = null
                              , ga = 0 <= E.dataPointIndexes[e] ? A[E.dataPointIndexes[e]] : {
                                x: e,
                                y: null
                            };
                            if (!(e < a.axisX.dataInfo.viewPortMin || e > a.axisX.dataInfo.viewPortMax && (!E.connectNullData || !Z)))
                                if ("number" !== typeof ga.y)
                                    E.connectNullData || (Z || z) || g(),
                                    Z = !0;
                                else {
                                    var oa;
                                    oa = 0 !== a.dataPointYSums[e] ? 100 * (ga.y / a.dataPointYSums[e]) : 0;
                                    f = a.axisX.convertValueToPixel(e);
                                    var ca = l[e] ? l[e] : 0;
                                    if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length) {
                                        m[e] = oa + (m[e] ? m[e] : 0);
                                        if (0 >= m[e] && a.axisY.logarithmic)
                                            continue;
                                        n = a.axisY.convertValueToPixel(m[e])
                                    } else
                                        n = a.axisY.convertValueToPixel(oa),
                                        n -= ca;
                                    k.push({
                                        x: f,
                                        y: x - ca
                                    });
                                    l[e] = x - n;
                                    z || Z ? (!z && E.connectNullData ? (c.setLineDash && (E.options.nullDataLineDashType || r === E.lineDashType && E.lineDashType !== E.nullDataLineDashType) && (z = k.pop(),
                                    r = k[k.length - 1],
                                    g(),
                                    c.moveTo(y.x, y.y),
                                    k.push(r),
                                    k.push(z),
                                    r = E.nullDataLineDashType,
                                    c.setLineDash(O)),
                                    c.lineTo(f, n),
                                    s && v.lineTo(f, n)) : (c.beginPath(),
                                    c.moveTo(f, n),
                                    s && (v.beginPath(),
                                    v.moveTo(f, n))),
                                    Z = z = !1) : (c.lineTo(f, n),
                                    s && v.lineTo(f, n),
                                    0 == q % 250 && (g(),
                                    c.moveTo(f, n),
                                    s && v.moveTo(f, n),
                                    k.push({
                                        x: f,
                                        y: x - ca
                                    })));
                                    y = {
                                        x: f,
                                        y: n
                                    };
                                    q < A.length - 1 && (K !== (A[q].lineColor || C) || r !== (A[q].lineDashType || E.lineDashType)) && (g(),
                                    c.beginPath(),
                                    c.moveTo(f, n),
                                    k.push({
                                        x: f,
                                        y: x - ca
                                    }),
                                    K = A[q].lineColor || C,
                                    c.strokeStyle = K,
                                    c.setLineDash && (A[q].lineDashType ? (r = A[q].lineDashType,
                                    c.setLineDash(J(r, E.lineThickness))) : (r = E.lineDashType,
                                    c.setLineDash(aa))));
                                    if (0 <= E.dataPointIndexes[e]) {
                                        var F = E.dataPointIds[E.dataPointIndexes[e]];
                                        this._eventManager.objectMap[F] = {
                                            id: F,
                                            objectType: "dataPoint",
                                            dataSeriesIndex: B,
                                            dataPointIndex: E.dataPointIndexes[e],
                                            x1: f,
                                            y1: n
                                        }
                                    }
                                    0 <= E.dataPointIndexes[e] && 0 !== ga.markerSize && (0 < ga.markerSize || 0 < E.markerSize) && (ca = E.getMarkerProperties(E.dataPointIndexes[e], f, n, c),
                                    h.push(ca),
                                    e = R(F),
                                    s && h.push({
                                        x: f,
                                        y: n,
                                        ctx: v,
                                        type: ca.type,
                                        size: ca.size,
                                        color: e,
                                        borderColor: e,
                                        borderThickness: ca.borderThickness
                                    }));
                                    (ga.indexLabel || E.indexLabel || ga.indexLabelFormatter || E.indexLabelFormatter) && this._indexLabels.push({
                                        chartType: "stackedArea100",
                                        dataPoint: ga,
                                        dataSeries: E,
                                        point: {
                                            x: f,
                                            y: n
                                        },
                                        direction: 0 > ga.y === a.axisY.reversed ? 1 : -1,
                                        color: d
                                    })
                                }
                        }
                        g();
                        c.moveTo(f, n);
                        s && v.moveTo(f, n)
                    }
                    delete E.dataPointIndexes
                }
                ba.drawMarkers(h);
                s && (b.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                c.globalCompositeOperation = "source-atop",
                a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                c.clearRect(t.x1, t.y1, t.width, t.height),
                v.restore());
                c.restore();
                return {
                    source: b,
                    dest: this.plotArea.ctx,
                    animationCallback: M.xClipAnimation,
                    easingFunction: M.easing.linear,
                    animationBase: 0
                }
            }
        }
        ;
        n.prototype.renderBubble = function(a) {
            var g = a.targetCanvasCtx || this.plotArea.ctx
              , b = s ? this._preRenderCtx : g;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var c = this.plotArea, d = 0, e, t;
                b.save();
                s && this._eventManager.ghostCtx.save();
                b.beginPath();
                b.rect(c.x1, c.y1, c.width, c.height);
                b.clip();
                s && (this._eventManager.ghostCtx.beginPath(),
                this._eventManager.ghostCtx.rect(c.x1, c.y1, c.width, c.height),
                this._eventManager.ghostCtx.clip());
                for (var h = -Infinity, l = Infinity, k = 0; k < a.dataSeriesIndexes.length; k++)
                    for (var p = a.dataSeriesIndexes[k], m = this.data[p], q = m.dataPoints, f = 0, d = 0; d < q.length; d++)
                        e = q[d].getTime ? e = q[d].x.getTime() : e = q[d].x,
                        e < a.axisX.dataInfo.viewPortMin || e > a.axisX.dataInfo.viewPortMax || "undefined" === typeof q[d].z || (f = q[d].z,
                        f > h && (h = f),
                        f < l && (l = f));
                for (var n = 25 * Math.PI, y = Math.max(Math.pow(0.25 * Math.min(c.height, c.width) / 2, 2) * Math.PI, n), k = 0; k < a.dataSeriesIndexes.length; k++)
                    if (p = a.dataSeriesIndexes[k],
                    m = this.data[p],
                    q = m.dataPoints,
                    0 < q.length)
                        for (b.strokeStyle = "#4572A7 ",
                        d = 0; d < q.length; d++)
                            if (e = q[d].getTime ? e = q[d].x.getTime() : e = q[d].x,
                            !(e < a.axisX.dataInfo.viewPortMin || e > a.axisX.dataInfo.viewPortMax) && "number" === typeof q[d].y) {
                                e = a.axisX.convertValueToPixel(e);
                                t = a.axisY.convertValueToPixel(q[d].y);
                                var f = q[d].z
                                  , z = 2 * Math.max(Math.sqrt((h === l ? y / 2 : n + (y - n) / (h - l) * (f - l)) / Math.PI) << 0, 1)
                                  , f = m.getMarkerProperties(d, b);
                                f.size = z;
                                b.globalAlpha = m.fillOpacity;
                                ba.drawMarker(e, t, b, f.type, f.size, f.color, f.borderColor, f.borderThickness);
                                b.globalAlpha = 1;
                                var r = m.dataPointIds[d];
                                this._eventManager.objectMap[r] = {
                                    id: r,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: p,
                                    dataPointIndex: d,
                                    x1: e,
                                    y1: t,
                                    size: z
                                };
                                z = R(r);
                                s && ba.drawMarker(e, t, this._eventManager.ghostCtx, f.type, f.size, z, z, f.borderThickness);
                                (q[d].indexLabel || m.indexLabel || q[d].indexLabelFormatter || m.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "bubble",
                                    dataPoint: q[d],
                                    dataSeries: m,
                                    point: {
                                        x: e,
                                        y: t
                                    },
                                    direction: 1,
                                    bounds: {
                                        x1: e - f.size / 2,
                                        y1: t - f.size / 2,
                                        x2: e + f.size / 2,
                                        y2: t + f.size / 2
                                    },
                                    color: null
                                })
                            }
                s && (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                b.globalCompositeOperation = "source-atop",
                a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                b.clearRect(c.x1, c.y1, c.width, c.height),
                this._eventManager.ghostCtx.restore());
                b.restore();
                return {
                    source: g,
                    dest: this.plotArea.ctx,
                    animationCallback: M.fadeInAnimation,
                    easingFunction: M.easing.easeInQuad,
                    animationBase: 0
                }
            }
        }
        ;
        n.prototype.renderScatter = function(a) {
            var g = a.targetCanvasCtx || this.plotArea.ctx
              , b = s ? this._preRenderCtx : g;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var c = this.plotArea, d = 0, e, t;
                b.save();
                s && this._eventManager.ghostCtx.save();
                b.beginPath();
                b.rect(c.x1, c.y1, c.width, c.height);
                b.clip();
                s && (this._eventManager.ghostCtx.beginPath(),
                this._eventManager.ghostCtx.rect(c.x1, c.y1, c.width, c.height),
                this._eventManager.ghostCtx.clip());
                for (var h = 0; h < a.dataSeriesIndexes.length; h++) {
                    var l = a.dataSeriesIndexes[h]
                      , k = this.data[l]
                      , p = k.dataPoints;
                    if (0 < p.length) {
                        b.strokeStyle = "#4572A7 ";
                        Math.pow(0.3 * Math.min(c.height, c.width) / 2, 2);
                        for (var m = 0, q = 0, d = 0; d < p.length; d++)
                            if (e = p[d].getTime ? e = p[d].x.getTime() : e = p[d].x,
                            !(e < a.axisX.dataInfo.viewPortMin || e > a.axisX.dataInfo.viewPortMax) && "number" === typeof p[d].y) {
                                e = a.axisX.convertValueToPixel(e);
                                t = a.axisY.convertValueToPixel(p[d].y);
                                var f = k.getMarkerProperties(d, e, t, b);
                                b.globalAlpha = k.fillOpacity;
                                ba.drawMarker(f.x, f.y, f.ctx, f.type, f.size, f.color, f.borderColor, f.borderThickness);
                                b.globalAlpha = 1;
                                Math.sqrt((m - e) * (m - e) + (q - t) * (q - t)) < Math.min(f.size, 5) && p.length > Math.min(this.plotArea.width, this.plotArea.height) || (m = k.dataPointIds[d],
                                this._eventManager.objectMap[m] = {
                                    id: m,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: l,
                                    dataPointIndex: d,
                                    x1: e,
                                    y1: t
                                },
                                m = R(m),
                                s && ba.drawMarker(f.x, f.y, this._eventManager.ghostCtx, f.type, f.size, m, m, f.borderThickness),
                                (p[d].indexLabel || k.indexLabel || p[d].indexLabelFormatter || k.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "scatter",
                                    dataPoint: p[d],
                                    dataSeries: k,
                                    point: {
                                        x: e,
                                        y: t
                                    },
                                    direction: 1,
                                    bounds: {
                                        x1: e - f.size / 2,
                                        y1: t - f.size / 2,
                                        x2: e + f.size / 2,
                                        y2: t + f.size / 2
                                    },
                                    color: null
                                }),
                                m = e,
                                q = t)
                            }
                    }
                }
                s && (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                b.globalCompositeOperation = "source-atop",
                a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                b.clearRect(c.x1, c.y1, c.width, c.height),
                this._eventManager.ghostCtx.restore());
                b.restore();
                return {
                    source: g,
                    dest: this.plotArea.ctx,
                    animationCallback: M.fadeInAnimation,
                    easingFunction: M.easing.easeInQuad,
                    animationBase: 0
                }
            }
        }
        ;
        n.prototype.renderCandlestick = function(a) {
            var g = a.targetCanvasCtx || this.plotArea.ctx
              , b = s ? this._preRenderCtx : g
              , c = this._eventManager.ghostCtx;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var d = null, e = null, t = this.plotArea, h = 0, n, k, p, m, q, f, d = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, e = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.015 * this.width, u = a.axisX.dataInfo.minDiff;
                isFinite(u) || (u = 0.3 * Math.abs(a.axisX.range));
                u = this.options.dataPointWidth ? this.dataPointWidth : 0.7 * t.width * (a.axisX.logarithmic ? Math.log(u) / Math.log(a.axisX.range) : Math.abs(u) / Math.abs(a.axisX.range)) << 0;
                this.dataPointMaxWidth && d > e && (d = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, e));
                !this.dataPointMaxWidth && (this.dataPointMinWidth && e < d) && (e = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, d));
                u < d && (u = d);
                u > e && (u = e);
                b.save();
                s && c.save();
                b.beginPath();
                b.rect(t.x1, t.y1, t.width, t.height);
                b.clip();
                s && (c.beginPath(),
                c.rect(t.x1, t.y1, t.width, t.height),
                c.clip());
                for (var y = 0; y < a.dataSeriesIndexes.length; y++) {
                    var z = a.dataSeriesIndexes[y]
                      , r = this.data[z]
                      , x = r.dataPoints;
                    if (0 < x.length)
                        for (var v = 5 < u && r.bevelEnabled ? !0 : !1, h = 0; h < x.length; h++)
                            if (x[h].getTime ? f = x[h].x.getTime() : f = x[h].x,
                            !(f < a.axisX.dataInfo.viewPortMin || f > a.axisX.dataInfo.viewPortMax) && !l(x[h].y) && x[h].y.length && "number" === typeof x[h].y[0] && "number" === typeof x[h].y[1] && "number" === typeof x[h].y[2] && "number" === typeof x[h].y[3]) {
                                n = a.axisX.convertValueToPixel(f);
                                k = a.axisY.convertValueToPixel(x[h].y[0]);
                                p = a.axisY.convertValueToPixel(x[h].y[1]);
                                m = a.axisY.convertValueToPixel(x[h].y[2]);
                                q = a.axisY.convertValueToPixel(x[h].y[3]);
                                var A = n - u / 2 << 0
                                  , B = A + u << 0
                                  , e = r.options.fallingColor ? r.fallingColor : r._colorSet[0]
                                  , d = x[h].color ? x[h].color : r._colorSet[0]
                                  , E = Math.round(Math.max(1, 0.15 * u))
                                  , C = 0 === E % 2 ? 0 : 0.5
                                  , D = r.dataPointIds[h];
                                this._eventManager.objectMap[D] = {
                                    id: D,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: z,
                                    dataPointIndex: h,
                                    x1: A,
                                    y1: k,
                                    x2: B,
                                    y2: p,
                                    x3: n,
                                    y3: m,
                                    x4: n,
                                    y4: q,
                                    borderThickness: E,
                                    color: d
                                };
                                b.strokeStyle = d;
                                b.beginPath();
                                b.lineWidth = E;
                                c.lineWidth = Math.max(E, 4);
                                "candlestick" === r.type ? (b.moveTo(n - C, p),
                                b.lineTo(n - C, Math.min(k, q)),
                                b.stroke(),
                                b.moveTo(n - C, Math.max(k, q)),
                                b.lineTo(n - C, m),
                                b.stroke(),
                                da(b, A, Math.min(k, q), B, Math.max(k, q), x[h].y[0] <= x[h].y[3] ? r.risingColor : e, E, d, v, v, !1, !1, r.fillOpacity),
                                s && (d = R(D),
                                c.strokeStyle = d,
                                c.moveTo(n - C, p),
                                c.lineTo(n - C, Math.min(k, q)),
                                c.stroke(),
                                c.moveTo(n - C, Math.max(k, q)),
                                c.lineTo(n - C, m),
                                c.stroke(),
                                da(c, A, Math.min(k, q), B, Math.max(k, q), d, 0, null, !1, !1, !1, !1))) : "ohlc" === r.type && (b.moveTo(n - C, p),
                                b.lineTo(n - C, m),
                                b.stroke(),
                                b.beginPath(),
                                b.moveTo(n, k),
                                b.lineTo(A, k),
                                b.stroke(),
                                b.beginPath(),
                                b.moveTo(n, q),
                                b.lineTo(B, q),
                                b.stroke(),
                                s && (d = R(D),
                                c.strokeStyle = d,
                                c.moveTo(n - C, p),
                                c.lineTo(n - C, m),
                                c.stroke(),
                                c.beginPath(),
                                c.moveTo(n, k),
                                c.lineTo(A, k),
                                c.stroke(),
                                c.beginPath(),
                                c.moveTo(n, q),
                                c.lineTo(B, q),
                                c.stroke()));
                                (x[h].indexLabel || r.indexLabel || x[h].indexLabelFormatter || r.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: r.type,
                                    dataPoint: x[h],
                                    dataSeries: r,
                                    point: {
                                        x: A + (B - A) / 2,
                                        y: a.axisY.reversed ? m : p
                                    },
                                    direction: 1,
                                    bounds: {
                                        x1: A,
                                        y1: Math.min(p, m),
                                        x2: B,
                                        y2: Math.max(p, m)
                                    },
                                    color: d
                                })
                            }
                }
                s && (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                b.globalCompositeOperation = "source-atop",
                a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                b.clearRect(t.x1, t.y1, t.width, t.height),
                c.restore());
                b.restore();
                return {
                    source: g,
                    dest: this.plotArea.ctx,
                    animationCallback: M.fadeInAnimation,
                    easingFunction: M.easing.easeInQuad,
                    animationBase: 0
                }
            }
        }
        ;
        n.prototype.renderBoxAndWhisker = function(a) {
            var g = a.targetCanvasCtx || this.plotArea.ctx
              , b = s ? this._preRenderCtx : g
              , c = this._eventManager.ghostCtx;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var d = null, e = this.plotArea, t = 0, h, n, k, p, m, q, f, d = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, t = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.015 * this.width, u = a.axisX.dataInfo.minDiff;
                isFinite(u) || (u = 0.3 * Math.abs(a.axisX.range));
                u = this.options.dataPointWidth ? this.dataPointWidth : 0.7 * e.width * (a.axisX.logarithmic ? Math.log(u) / Math.log(a.axisX.range) : Math.abs(u) / Math.abs(a.axisX.range)) << 0;
                this.dataPointMaxWidth && d > t && (d = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, t));
                !this.dataPointMaxWidth && (this.dataPointMinWidth && t < d) && (t = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, d));
                u < d && (u = d);
                u > t && (u = t);
                b.save();
                s && c.save();
                b.beginPath();
                b.rect(e.x1, e.y1, e.width, e.height);
                b.clip();
                s && (c.beginPath(),
                c.rect(e.x1, e.y1, e.width, e.height),
                c.clip());
                for (var y = !1, y = !!a.axisY.reversed, z = 0; z < a.dataSeriesIndexes.length; z++) {
                    var r = a.dataSeriesIndexes[z]
                      , x = this.data[r]
                      , v = x.dataPoints;
                    if (0 < v.length)
                        for (var A = 5 < u && x.bevelEnabled ? !0 : !1, t = 0; t < v.length; t++)
                            if (v[t].getTime ? f = v[t].x.getTime() : f = v[t].x,
                            !(f < a.axisX.dataInfo.viewPortMin || f > a.axisX.dataInfo.viewPortMax) && !l(v[t].y) && v[t].y.length && "number" === typeof v[t].y[0] && "number" === typeof v[t].y[1] && "number" === typeof v[t].y[2] && "number" === typeof v[t].y[3] && "number" === typeof v[t].y[4] && 5 === v[t].y.length) {
                                h = a.axisX.convertValueToPixel(f);
                                n = a.axisY.convertValueToPixel(v[t].y[0]);
                                k = a.axisY.convertValueToPixel(v[t].y[1]);
                                p = a.axisY.convertValueToPixel(v[t].y[2]);
                                m = a.axisY.convertValueToPixel(v[t].y[3]);
                                q = a.axisY.convertValueToPixel(v[t].y[4]);
                                var B = h - u / 2 << 0
                                  , E = h + u / 2 << 0
                                  , d = v[t].color ? v[t].color : x._colorSet[0]
                                  , C = Math.round(Math.max(1, 0.15 * u))
                                  , D = 0 === C % 2 ? 0 : 0.5
                                  , K = v[t].whiskerColor ? v[t].whiskerColor : v[t].color ? x.whiskerColor ? x.whiskerColor : v[t].color : x.whiskerColor ? x.whiskerColor : d
                                  , O = "number" === typeof v[t].whiskerThickness ? v[t].whiskerThickness : "number" === typeof x.options.whiskerThickness ? x.whiskerThickness : C
                                  , aa = v[t].whiskerDashType ? v[t].whiskerDashType : x.whiskerDashType
                                  , Z = l(v[t].whiskerLength) ? l(x.options.whiskerLength) ? u : x.whiskerLength : v[t].whiskerLength
                                  , Z = "number" === typeof Z ? 0 >= Z ? 0 : Z >= u ? u : Z : "string" === typeof Z ? parseInt(Z) * u / 100 > u ? u : parseInt(Z) * u / 100 : u
                                  , ga = 1 === Math.round(O) % 2 ? 0.5 : 0
                                  , oa = v[t].stemColor ? v[t].stemColor : v[t].color ? x.stemColor ? x.stemColor : v[t].color : x.stemColor ? x.stemColor : d
                                  , ca = "number" === typeof v[t].stemThickness ? v[t].stemThickness : "number" === typeof x.options.stemThickness ? x.stemThickness : C
                                  , F = 1 === Math.round(ca) % 2 ? 0.5 : 0
                                  , H = v[t].stemDashType ? v[t].stemDashType : x.stemDashType
                                  , L = v[t].lineColor ? v[t].lineColor : v[t].color ? x.lineColor ? x.lineColor : v[t].color : x.lineColor ? x.lineColor : d
                                  , P = "number" === typeof v[t].lineThickness ? v[t].lineThickness : "number" === typeof x.options.lineThickness ? x.lineThickness : C
                                  , Q = v[t].lineDashType ? v[t].lineDashType : x.lineDashType
                                  , $ = 1 === Math.round(P) % 2 ? 0.5 : 0
                                  , U = x.upperBoxColor
                                  , S = x.lowerBoxColor
                                  , V = l(x.options.fillOpacity) ? 1 : x.fillOpacity
                                  , N = x.dataPointIds[t];
                                this._eventManager.objectMap[N] = {
                                    id: N,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: r,
                                    dataPointIndex: t,
                                    x1: B,
                                    y1: n,
                                    x2: E,
                                    y2: k,
                                    x3: h,
                                    y3: p,
                                    x4: h,
                                    y4: m,
                                    y5: q,
                                    borderThickness: C,
                                    color: d,
                                    stemThickness: ca,
                                    stemColor: oa,
                                    whiskerThickness: O,
                                    whiskerLength: Z,
                                    whiskerColor: K,
                                    lineThickness: P,
                                    lineColor: L
                                };
                                b.save();
                                0 < ca && (b.beginPath(),
                                b.strokeStyle = oa,
                                b.lineWidth = ca,
                                b.setLineDash && b.setLineDash(J(H, ca)),
                                b.moveTo(h - F, k),
                                b.lineTo(h - F, n),
                                b.stroke(),
                                b.moveTo(h - F, m),
                                b.lineTo(h - F, p),
                                b.stroke());
                                b.restore();
                                c.lineWidth = Math.max(C, 4);
                                b.beginPath();
                                da(b, B, Math.min(q, k), E, Math.max(k, q), S, 0, d, y ? A : !1, y ? !1 : A, !1, !1, V);
                                b.beginPath();
                                da(b, B, Math.min(p, q), E, Math.max(q, p), U, 0, d, y ? !1 : A, y ? A : !1, !1, !1, V);
                                b.beginPath();
                                b.lineWidth = C;
                                b.strokeStyle = d;
                                b.rect(B - D, Math.min(k, p) - D, E - B + 2 * D, Math.max(k, p) - Math.min(k, p) + 2 * D);
                                b.stroke();
                                b.save();
                                0 < P && (b.beginPath(),
                                b.globalAlpha = 1,
                                b.setLineDash && b.setLineDash(J(Q, P)),
                                b.strokeStyle = L,
                                b.lineWidth = P,
                                b.moveTo(B, q - $),
                                b.lineTo(E, q - $),
                                b.stroke());
                                b.restore();
                                b.save();
                                0 < O && (b.beginPath(),
                                b.setLineDash && b.setLineDash(J(aa, O)),
                                b.strokeStyle = K,
                                b.lineWidth = O,
                                b.moveTo(h - Z / 2 << 0, m - ga),
                                b.lineTo(h + Z / 2 << 0, m - ga),
                                b.stroke(),
                                b.moveTo(h - Z / 2 << 0, n + ga),
                                b.lineTo(h + Z / 2 << 0, n + ga),
                                b.stroke());
                                b.restore();
                                s && (d = R(N),
                                c.strokeStyle = d,
                                c.lineWidth = ca,
                                0 < ca && (c.moveTo(h - D - F, k),
                                c.lineTo(h - D - F, Math.max(n, m)),
                                c.stroke(),
                                c.moveTo(h - D - F, Math.min(n, m)),
                                c.lineTo(h - D - F, p),
                                c.stroke()),
                                da(c, B, Math.max(k, p), E, Math.min(k, p), d, 0, null, !1, !1, !1, !1),
                                0 < O && (c.beginPath(),
                                c.lineWidth = O,
                                c.moveTo(h + Z / 2, m - ga),
                                c.lineTo(h - Z / 2, m - ga),
                                c.stroke(),
                                c.moveTo(h + Z / 2, n + ga),
                                c.lineTo(h - Z / 2, n + ga),
                                c.stroke()));
                                (v[t].indexLabel || x.indexLabel || v[t].indexLabelFormatter || x.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: x.type,
                                    dataPoint: v[t],
                                    dataSeries: x,
                                    point: {
                                        x: B + (E - B) / 2,
                                        y: a.axisY.reversed ? n : m
                                    },
                                    direction: 1,
                                    bounds: {
                                        x1: B,
                                        y1: Math.min(n, m),
                                        x2: E,
                                        y2: Math.max(n, m)
                                    },
                                    color: d
                                })
                            }
                }
                s && (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                b.globalCompositeOperation = "source-atop",
                a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                b.clearRect(e.x1, e.y1, e.width, e.height),
                c.restore());
                b.restore();
                return {
                    source: g,
                    dest: this.plotArea.ctx,
                    animationCallback: M.fadeInAnimation,
                    easingFunction: M.easing.easeInQuad,
                    animationBase: 0
                }
            }
        }
        ;
        n.prototype.renderRangeColumn = function(a) {
            var g = a.targetCanvasCtx || this.plotArea.ctx
              , b = s ? this._preRenderCtx : g;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var c = null, d = this.plotArea, e = 0, t, h, n, e = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
                t = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.03 * this.width;
                var k = a.axisX.dataInfo.minDiff;
                isFinite(k) || (k = 0.3 * Math.abs(a.axisX.range));
                k = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (d.width * (a.axisX.logarithmic ? Math.log(k) / Math.log(a.axisX.range) : Math.abs(k) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
                this.dataPointMaxWidth && e > t && (e = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, t));
                !this.dataPointMaxWidth && (this.dataPointMinWidth && t < e) && (t = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, e));
                k < e && (k = e);
                k > t && (k = t);
                b.save();
                s && this._eventManager.ghostCtx.save();
                b.beginPath();
                b.rect(d.x1, d.y1, d.width, d.height);
                b.clip();
                s && (this._eventManager.ghostCtx.beginPath(),
                this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height),
                this._eventManager.ghostCtx.clip());
                for (var p = 0; p < a.dataSeriesIndexes.length; p++) {
                    var m = a.dataSeriesIndexes[p]
                      , q = this.data[m]
                      , f = q.dataPoints;
                    if (0 < f.length)
                        for (var u = 5 < k && q.bevelEnabled ? !0 : !1, e = 0; e < f.length; e++)
                            if (f[e].getTime ? n = f[e].x.getTime() : n = f[e].x,
                            !(n < a.axisX.dataInfo.viewPortMin || n > a.axisX.dataInfo.viewPortMax) && !l(f[e].y) && f[e].y.length && "number" === typeof f[e].y[0] && "number" === typeof f[e].y[1]) {
                                c = a.axisX.convertValueToPixel(n);
                                t = a.axisY.convertValueToPixel(f[e].y[0]);
                                h = a.axisY.convertValueToPixel(f[e].y[1]);
                                var y = a.axisX.reversed ? c + a.plotType.totalDataSeries * k / 2 - (a.previousDataSeriesCount + p) * k << 0 : c - a.plotType.totalDataSeries * k / 2 + (a.previousDataSeriesCount + p) * k << 0
                                  , z = a.axisX.reversed ? y - k << 0 : y + k << 0
                                  , c = f[e].color ? f[e].color : q._colorSet[e % q._colorSet.length];
                                if (t > h) {
                                    var r = t;
                                    t = h;
                                    h = r
                                }
                                r = q.dataPointIds[e];
                                this._eventManager.objectMap[r] = {
                                    id: r,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: m,
                                    dataPointIndex: e,
                                    x1: y,
                                    y1: t,
                                    x2: z,
                                    y2: h
                                };
                                da(b, a.axisX.reversed ? z : y, t, a.axisX.reversed ? y : z, h, c, 0, c, u, u, !1, !1, q.fillOpacity);
                                c = R(r);
                                s && da(this._eventManager.ghostCtx, a.axisX.reversed ? z : y, t, a.axisX.reversed ? y : z, h, c, 0, null, !1, !1, !1, !1);
                                if (f[e].indexLabel || q.indexLabel || f[e].indexLabelFormatter || q.indexLabelFormatter)
                                    this._indexLabels.push({
                                        chartType: "rangeColumn",
                                        dataPoint: f[e],
                                        dataSeries: q,
                                        indexKeyword: 0,
                                        point: {
                                            x: y + (z - y) / 2,
                                            y: f[e].y[1] >= f[e].y[0] ? h : t
                                        },
                                        direction: f[e].y[1] >= f[e].y[0] ? -1 : 1,
                                        bounds: {
                                            x1: y,
                                            y1: Math.min(t, h),
                                            x2: z,
                                            y2: Math.max(t, h)
                                        },
                                        color: c
                                    }),
                                    this._indexLabels.push({
                                        chartType: "rangeColumn",
                                        dataPoint: f[e],
                                        dataSeries: q,
                                        indexKeyword: 1,
                                        point: {
                                            x: y + (z - y) / 2,
                                            y: f[e].y[1] >= f[e].y[0] ? t : h
                                        },
                                        direction: f[e].y[1] >= f[e].y[0] ? 1 : -1,
                                        bounds: {
                                            x1: y,
                                            y1: Math.min(t, h),
                                            x2: z,
                                            y2: Math.max(t, h)
                                        },
                                        color: c
                                    })
                            }
                }
                s && (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                b.globalCompositeOperation = "source-atop",
                a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                b.clearRect(d.x1, d.y1, d.width, d.height),
                this._eventManager.ghostCtx.restore());
                b.restore();
                return {
                    source: g,
                    dest: this.plotArea.ctx,
                    animationCallback: M.fadeInAnimation,
                    easingFunction: M.easing.easeInQuad,
                    animationBase: 0
                }
            }
        }
        ;
        n.prototype.renderError = function(a) {
            var g = a.targetCanvasCtx || this.plotArea.ctx
              , b = s ? this._preRenderCtx : g
              , c = a.axisY._position ? "left" === a.axisY._position || "right" === a.axisY._position ? !1 : !0 : !1;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var d = null, e = !1, t = this.plotArea, h = 0, n, k, p, m, q, f, u, y = a.axisX.dataInfo.minDiff;
                isFinite(y) || (y = 0.3 * Math.abs(a.axisX.range));
                b.save();
                s && this._eventManager.ghostCtx.save();
                b.beginPath();
                b.rect(t.x1, t.y1, t.width, t.height);
                b.clip();
                s && (this._eventManager.ghostCtx.beginPath(),
                this._eventManager.ghostCtx.rect(t.x1, t.y1, t.width, t.height),
                this._eventManager.ghostCtx.clip());
                for (var z = 0, r = 0; r < this.data.length; r++)
                    !this.data[r].type.match(/(bar|column)/ig) || !this.data[r].visible || this.data[r].type.match(/(stacked)/ig) && z || z++;
                for (var x = 0; x < a.dataSeriesIndexes.length; x++) {
                    var v = a.dataSeriesIndexes[x]
                      , A = this.data[v]
                      , B = A.dataPoints
                      , E = l(A._linkedSeries) ? !1 : A._linkedSeries.type.match(/(bar|column)/ig) && A._linkedSeries.visible ? !0 : !1
                      , D = 0;
                    if (E)
                        for (d = A._linkedSeries.id,
                        r = 0; r < d; r++)
                            !this.data[r].type.match(/(bar|column)/ig) || !this.data[r].visible || this.data[r].type.match(/(stacked)/ig) && D || (this.data[r].type.match(/(range)/ig) && (e = !0),
                            D++);
                    d = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
                    h = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : c ? Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / (E ? z : 1))) << 0 : 0.3 * this.width;
                    e && (h = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : c ? Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / (E ? z : 1))) << 0 : 0.03 * this.width);
                    r = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * ((c ? t.height : t.width) * (a.axisX.logarithmic ? Math.log(y) / Math.log(a.axisX.range) : Math.abs(y) / Math.abs(a.axisX.range)) / (E ? z : 1)) << 0;
                    this.dataPointMaxWidth && d > h && (d = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, h));
                    !this.dataPointMaxWidth && (this.dataPointMinWidth && h < d) && (h = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, d));
                    r < d && (r = d);
                    r > h && (r = h);
                    if (0 < B.length)
                        for (var J = A._colorSet, h = 0; h < B.length; h++) {
                            var d = A.lineColor = A.options.color ? A.options.color : J[0]
                              , K = {
                                color: B[h].whiskerColor ? B[h].whiskerColor : B[h].color ? A.whiskerColor ? A.whiskerColor : B[h].color : A.whiskerColor ? A.whiskerColor : d,
                                thickness: l(B[h].whiskerThickness) ? A.whiskerThickness : B[h].whiskerThickness,
                                dashType: B[h].whiskerDashType ? B[h].whiskerDashType : A.whiskerDashType,
                                length: l(B[h].whiskerLength) ? l(A.options.whiskerLength) ? r : A.options.whiskerLength : B[h].whiskerLength,
                                trimLength: l(B[h].whiskerLength) ? l(A.options.whiskerLength) ? 50 : 0 : 0
                            };
                            K.length = "number" === typeof K.length ? 0 >= K.length ? 0 : K.length >= r ? r : K.length : "string" === typeof K.length ? parseInt(K.length) * r / 100 > r ? r : parseInt(K.length) * r / 100 > r : r;
                            K.thickness = "number" === typeof K.thickness ? 0 > K.thickness ? 0 : Math.round(K.thickness) : 2;
                            var O = {
                                color: B[h].stemColor ? B[h].stemColor : B[h].color ? A.stemColor ? A.stemColor : B[h].color : A.stemColor ? A.stemColor : d,
                                thickness: B[h].stemThickness ? B[h].stemThickness : A.stemThickness,
                                dashType: B[h].stemDashType ? B[h].stemDashType : A.stemDashType
                            };
                            O.thickness = "number" === typeof O.thickness ? 0 > O.thickness ? 0 : Math.round(O.thickness) : 2;
                            B[h].getTime ? u = B[h].x.getTime() : u = B[h].x;
                            if (!(u < a.axisX.dataInfo.viewPortMin || u > a.axisX.dataInfo.viewPortMax) && !l(B[h].y) && B[h].y.length && "number" === typeof B[h].y[0] && "number" === typeof B[h].y[1]) {
                                var aa = a.axisX.convertValueToPixel(u);
                                c ? k = aa : n = aa;
                                aa = a.axisY.convertValueToPixel(B[h].y[0]);
                                c ? p = aa : q = aa;
                                aa = a.axisY.convertValueToPixel(B[h].y[1]);
                                c ? m = aa : f = aa;
                                c ? (q = a.axisX.reversed ? k + (E ? z : 1) * r / 2 - (E ? D - 1 : 0) * r << 0 : k - (E ? z : 1) * r / 2 + (E ? D - 1 : 0) * r << 0,
                                f = a.axisX.reversed ? q - r << 0 : q + r << 0) : (p = a.axisX.reversed ? n + (E ? z : 1) * r / 2 - (E ? D - 1 : 0) * r << 0 : n - (E ? z : 1) * r / 2 + (E ? D - 1 : 0) * r << 0,
                                m = a.axisX.reversed ? p - r << 0 : p + r << 0);
                                !c && q > f && (aa = q,
                                q = f,
                                f = aa);
                                c && p > m && (aa = p,
                                p = m,
                                m = aa);
                                aa = A.dataPointIds[h];
                                this._eventManager.objectMap[aa] = {
                                    id: aa,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: v,
                                    dataPointIndex: h,
                                    x1: Math.min(p, m),
                                    y1: Math.min(q, f),
                                    x2: Math.max(m, p),
                                    y2: Math.max(f, q),
                                    isXYSwapped: c,
                                    stemProperties: O,
                                    whiskerProperties: K
                                };
                                C(b, Math.min(p, m), Math.min(q, f), Math.max(m, p), Math.max(f, q), d, K, O, c);
                                s && C(this._eventManager.ghostCtx, p, q, m, f, d, K, O, c);
                                if (B[h].indexLabel || A.indexLabel || B[h].indexLabelFormatter || A.indexLabelFormatter)
                                    this._indexLabels.push({
                                        chartType: "error",
                                        dataPoint: B[h],
                                        dataSeries: A,
                                        indexKeyword: 0,
                                        point: {
                                            x: c ? B[h].y[1] >= B[h].y[0] ? p : m : p + (m - p) / 2,
                                            y: c ? q + (f - q) / 2 : B[h].y[1] >= B[h].y[0] ? f : q
                                        },
                                        direction: B[h].y[1] >= B[h].y[0] ? -1 : 1,
                                        bounds: {
                                            x1: c ? Math.min(p, m) : p,
                                            y1: c ? q : Math.min(q, f),
                                            x2: c ? Math.max(p, m) : m,
                                            y2: c ? f : Math.max(q, f)
                                        },
                                        color: d,
                                        axisSwapped: c
                                    }),
                                    this._indexLabels.push({
                                        chartType: "error",
                                        dataPoint: B[h],
                                        dataSeries: A,
                                        indexKeyword: 1,
                                        point: {
                                            x: c ? B[h].y[1] >= B[h].y[0] ? m : p : p + (m - p) / 2,
                                            y: c ? q + (f - q) / 2 : B[h].y[1] >= B[h].y[0] ? q : f
                                        },
                                        direction: B[h].y[1] >= B[h].y[0] ? 1 : -1,
                                        bounds: {
                                            x1: c ? Math.min(p, m) : p,
                                            y1: c ? q : Math.min(q, f),
                                            x2: c ? Math.max(p, m) : m,
                                            y2: c ? f : Math.max(q, f)
                                        },
                                        color: d,
                                        axisSwapped: c
                                    })
                            }
                        }
                }
                s && (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                b.globalCompositeOperation = "source-atop",
                a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                b.clearRect(t.x1, t.y1, t.width, t.height),
                this._eventManager.ghostCtx.restore());
                b.restore();
                return {
                    source: g,
                    dest: this.plotArea.ctx,
                    animationCallback: M.fadeInAnimation,
                    easingFunction: M.easing.easeInQuad,
                    animationBase: 0
                }
            }
        }
        ;
        n.prototype.renderRangeBar = function(a) {
            var g = a.targetCanvasCtx || this.plotArea.ctx
              , b = s ? this._preRenderCtx : g;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var c = null, d = this.plotArea, e = 0, h, w, n, k, e = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
                h = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / a.plotType.totalDataSeries)) << 0;
                var p = a.axisX.dataInfo.minDiff;
                isFinite(p) || (p = 0.3 * Math.abs(a.axisX.range));
                p = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (d.height * (a.axisX.logarithmic ? Math.log(p) / Math.log(a.axisX.range) : Math.abs(p) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
                this.dataPointMaxWidth && e > h && (e = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, h));
                !this.dataPointMaxWidth && (this.dataPointMinWidth && h < e) && (h = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, e));
                p < e && (p = e);
                p > h && (p = h);
                b.save();
                s && this._eventManager.ghostCtx.save();
                b.beginPath();
                b.rect(d.x1, d.y1, d.width, d.height);
                b.clip();
                s && (this._eventManager.ghostCtx.beginPath(),
                this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height),
                this._eventManager.ghostCtx.clip());
                for (var m = 0; m < a.dataSeriesIndexes.length; m++) {
                    var q = a.dataSeriesIndexes[m]
                      , f = this.data[q]
                      , u = f.dataPoints;
                    if (0 < u.length) {
                        var y = 5 < p && f.bevelEnabled ? !0 : !1;
                        b.strokeStyle = "#4572A7 ";
                        for (e = 0; e < u.length; e++)
                            if (u[e].getTime ? k = u[e].x.getTime() : k = u[e].x,
                            !(k < a.axisX.dataInfo.viewPortMin || k > a.axisX.dataInfo.viewPortMax) && !l(u[e].y) && u[e].y.length && "number" === typeof u[e].y[0] && "number" === typeof u[e].y[1]) {
                                h = a.axisY.convertValueToPixel(u[e].y[0]);
                                w = a.axisY.convertValueToPixel(u[e].y[1]);
                                n = a.axisX.convertValueToPixel(k);
                                n = a.axisX.reversed ? n + a.plotType.totalDataSeries * p / 2 - (a.previousDataSeriesCount + m) * p << 0 : n - a.plotType.totalDataSeries * p / 2 + (a.previousDataSeriesCount + m) * p << 0;
                                var z = a.axisX.reversed ? n - p << 0 : n + p << 0;
                                h > w && (c = h,
                                h = w,
                                w = c);
                                c = u[e].color ? u[e].color : f._colorSet[e % f._colorSet.length];
                                da(b, h, a.axisX.reversed ? z : n, w, a.axisX.reversed ? n : z, c, 0, null, y, !1, !1, !1, f.fillOpacity);
                                c = f.dataPointIds[e];
                                this._eventManager.objectMap[c] = {
                                    id: c,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: q,
                                    dataPointIndex: e,
                                    x1: h,
                                    y1: n,
                                    x2: w,
                                    y2: z
                                };
                                c = R(c);
                                s && da(this._eventManager.ghostCtx, h, a.axisX.reversed ? z : n, w, a.axisX.reversed ? n : z, c, 0, null, !1, !1, !1, !1);
                                if (u[e].indexLabel || f.indexLabel || u[e].indexLabelFormatter || f.indexLabelFormatter)
                                    this._indexLabels.push({
                                        chartType: "rangeBar",
                                        dataPoint: u[e],
                                        dataSeries: f,
                                        indexKeyword: 0,
                                        point: {
                                            x: u[e].y[1] >= u[e].y[0] ? h : w,
                                            y: n + (z - n) / 2
                                        },
                                        direction: u[e].y[1] >= u[e].y[0] ? -1 : 1,
                                        bounds: {
                                            x1: Math.min(h, w),
                                            y1: n,
                                            x2: Math.max(h, w),
                                            y2: z
                                        },
                                        color: c
                                    }),
                                    this._indexLabels.push({
                                        chartType: "rangeBar",
                                        dataPoint: u[e],
                                        dataSeries: f,
                                        indexKeyword: 1,
                                        point: {
                                            x: u[e].y[1] >= u[e].y[0] ? w : h,
                                            y: n + (z - n) / 2
                                        },
                                        direction: u[e].y[1] >= u[e].y[0] ? 1 : -1,
                                        bounds: {
                                            x1: Math.min(h, w),
                                            y1: n,
                                            x2: Math.max(h, w),
                                            y2: z
                                        },
                                        color: c
                                    })
                            }
                    }
                }
                s && (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                b.globalCompositeOperation = "source-atop",
                a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                b.clearRect(d.x1, d.y1, d.width, d.height),
                this._eventManager.ghostCtx.restore());
                b.restore();
                return {
                    source: g,
                    dest: this.plotArea.ctx,
                    animationCallback: M.fadeInAnimation,
                    easingFunction: M.easing.easeInQuad,
                    animationBase: 0
                }
            }
        }
        ;
        n.prototype.renderRangeArea = function(a) {
            function g() {
                if (x) {
                    for (var a = null, b = n.length - 1; 0 <= b; b--)
                        a = n[b],
                        c.lineTo(a.x, a.y2),
                        d.lineTo(a.x, a.y2);
                    c.closePath();
                    c.globalAlpha = p.fillOpacity;
                    c.fill();
                    c.globalAlpha = 1;
                    d.fill();
                    if (0 < p.lineThickness) {
                        c.beginPath();
                        c.moveTo(a.x, a.y2);
                        for (b = 0; b < n.length; b++)
                            a = n[b],
                            c.lineTo(a.x, a.y2);
                        c.moveTo(n[0].x, n[0].y1);
                        for (b = 0; b < n.length; b++)
                            a = n[b],
                            c.lineTo(a.x, a.y1);
                        c.stroke()
                    }
                    c.beginPath();
                    c.moveTo(u, y);
                    d.beginPath();
                    d.moveTo(u, y);
                    x = {
                        x: u,
                        y: y
                    };
                    n = [];
                    n.push({
                        x: u,
                        y1: y,
                        y2: z
                    })
                }
            }
            var b = a.targetCanvasCtx || this.plotArea.ctx
              , c = s ? this._preRenderCtx : b;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var d = this._eventManager.ghostCtx
                  , e = []
                  , h = this.plotArea;
                c.save();
                s && d.save();
                c.beginPath();
                c.rect(h.x1, h.y1, h.width, h.height);
                c.clip();
                s && (d.beginPath(),
                d.rect(h.x1, h.y1, h.width, h.height),
                d.clip());
                for (var l = 0; l < a.dataSeriesIndexes.length; l++) {
                    var n = []
                      , k = a.dataSeriesIndexes[l]
                      , p = this.data[k]
                      , m = p.dataPoints
                      , e = p.id;
                    this._eventManager.objectMap[e] = {
                        objectType: "dataSeries",
                        dataSeriesIndex: k
                    };
                    e = R(e);
                    d.fillStyle = e;
                    var e = [], q = !0, f = 0, u, y, z, r, x = null;
                    if (0 < m.length) {
                        var v = p._colorSet[f % p._colorSet.length]
                          , A = p.lineColor = p.options.lineColor || v
                          , B = A;
                        c.fillStyle = v;
                        c.strokeStyle = A;
                        c.lineWidth = p.lineThickness;
                        var E = "solid";
                        if (c.setLineDash) {
                            var C = J(p.nullDataLineDashType, p.lineThickness)
                              , E = p.lineDashType
                              , D = J(E, p.lineThickness);
                            c.setLineDash(D)
                        }
                        for (var K = !0; f < m.length; f++)
                            if (r = m[f].x.getTime ? m[f].x.getTime() : m[f].x,
                            !(r < a.axisX.dataInfo.viewPortMin || r > a.axisX.dataInfo.viewPortMax && (!p.connectNullData || !K)))
                                if (null !== m[f].y && m[f].y.length && "number" === typeof m[f].y[0] && "number" === typeof m[f].y[1]) {
                                    u = a.axisX.convertValueToPixel(r);
                                    y = a.axisY.convertValueToPixel(m[f].y[0]);
                                    z = a.axisY.convertValueToPixel(m[f].y[1]);
                                    q || K ? (p.connectNullData && !q ? (c.setLineDash && (p.options.nullDataLineDashType || E === p.lineDashType && p.lineDashType !== p.nullDataLineDashType) && (n[n.length - 1].newLineDashArray = D,
                                    E = p.nullDataLineDashType,
                                    c.setLineDash(C)),
                                    c.lineTo(u, y),
                                    s && d.lineTo(u, y),
                                    n.push({
                                        x: u,
                                        y1: y,
                                        y2: z
                                    })) : (c.beginPath(),
                                    c.moveTo(u, y),
                                    x = {
                                        x: u,
                                        y: y
                                    },
                                    n = [],
                                    n.push({
                                        x: u,
                                        y1: y,
                                        y2: z
                                    }),
                                    s && (d.beginPath(),
                                    d.moveTo(u, y))),
                                    K = q = !1) : (c.lineTo(u, y),
                                    n.push({
                                        x: u,
                                        y1: y,
                                        y2: z
                                    }),
                                    s && d.lineTo(u, y),
                                    0 == f % 250 && g());
                                    r = p.dataPointIds[f];
                                    this._eventManager.objectMap[r] = {
                                        id: r,
                                        objectType: "dataPoint",
                                        dataSeriesIndex: k,
                                        dataPointIndex: f,
                                        x1: u,
                                        y1: y,
                                        y2: z
                                    };
                                    f < m.length - 1 && (B !== (m[f].lineColor || A) || E !== (m[f].lineDashType || p.lineDashType)) && (g(),
                                    B = m[f].lineColor || A,
                                    n[n.length - 1].newStrokeStyle = B,
                                    c.strokeStyle = B,
                                    c.setLineDash && (m[f].lineDashType ? (E = m[f].lineDashType,
                                    n[n.length - 1].newLineDashArray = J(E, p.lineThickness),
                                    c.setLineDash(n[n.length - 1].newLineDashArray)) : (E = p.lineDashType,
                                    n[n.length - 1].newLineDashArray = D,
                                    c.setLineDash(D))));
                                    if (0 !== m[f].markerSize && (0 < m[f].markerSize || 0 < p.markerSize)) {
                                        var O = p.getMarkerProperties(f, u, z, c);
                                        e.push(O);
                                        var aa = R(r);
                                        s && e.push({
                                            x: u,
                                            y: z,
                                            ctx: d,
                                            type: O.type,
                                            size: O.size,
                                            color: aa,
                                            borderColor: aa,
                                            borderThickness: O.borderThickness
                                        });
                                        O = p.getMarkerProperties(f, u, y, c);
                                        e.push(O);
                                        aa = R(r);
                                        s && e.push({
                                            x: u,
                                            y: y,
                                            ctx: d,
                                            type: O.type,
                                            size: O.size,
                                            color: aa,
                                            borderColor: aa,
                                            borderThickness: O.borderThickness
                                        })
                                    }
                                    if (m[f].indexLabel || p.indexLabel || m[f].indexLabelFormatter || p.indexLabelFormatter)
                                        this._indexLabels.push({
                                            chartType: "rangeArea",
                                            dataPoint: m[f],
                                            dataSeries: p,
                                            indexKeyword: 0,
                                            point: {
                                                x: u,
                                                y: y
                                            },
                                            direction: m[f].y[0] > m[f].y[1] === a.axisY.reversed ? -1 : 1,
                                            color: v
                                        }),
                                        this._indexLabels.push({
                                            chartType: "rangeArea",
                                            dataPoint: m[f],
                                            dataSeries: p,
                                            indexKeyword: 1,
                                            point: {
                                                x: u,
                                                y: z
                                            },
                                            direction: m[f].y[0] > m[f].y[1] === a.axisY.reversed ? 1 : -1,
                                            color: v
                                        })
                                } else
                                    K || q || g(),
                                    K = !0;
                        g();
                        ba.drawMarkers(e)
                    }
                }
                s && (b.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                c.globalCompositeOperation = "source-atop",
                a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                c.clearRect(h.x1, h.y1, h.width, h.height),
                this._eventManager.ghostCtx.restore());
                c.restore();
                return {
                    source: b,
                    dest: this.plotArea.ctx,
                    animationCallback: M.xClipAnimation,
                    easingFunction: M.easing.linear,
                    animationBase: 0
                }
            }
        }
        ;
        n.prototype.renderRangeSplineArea = function(a) {
            function g(a, b) {
                var f = u(y, 2);
                if (0 < f.length) {
                    if (0 < k.lineThickness) {
                        c.strokeStyle = b;
                        c.setLineDash && c.setLineDash(a);
                        c.beginPath();
                        c.moveTo(f[0].x, f[0].y);
                        for (var e = 0; e < f.length - 3; e += 3) {
                            if (f[e].newStrokeStyle || f[e].newLineDashArray)
                                c.stroke(),
                                c.beginPath(),
                                c.moveTo(f[e].x, f[e].y),
                                f[e].newStrokeStyle && (c.strokeStyle = f[e].newStrokeStyle),
                                f[e].newLineDashArray && c.setLineDash(f[e].newLineDashArray);
                            c.bezierCurveTo(f[e + 1].x, f[e + 1].y, f[e + 2].x, f[e + 2].y, f[e + 3].x, f[e + 3].y)
                        }
                    }
                    c.beginPath();
                    c.moveTo(f[0].x, f[0].y);
                    s && (d.beginPath(),
                    d.moveTo(f[0].x, f[0].y));
                    for (e = 0; e < f.length - 3; e += 3)
                        c.bezierCurveTo(f[e + 1].x, f[e + 1].y, f[e + 2].x, f[e + 2].y, f[e + 3].x, f[e + 3].y),
                        s && d.bezierCurveTo(f[e + 1].x, f[e + 1].y, f[e + 2].x, f[e + 2].y, f[e + 3].x, f[e + 3].y);
                    f = u(z, 2);
                    c.lineTo(z[z.length - 1].x, z[z.length - 1].y);
                    for (e = f.length - 1; 2 < e; e -= 3)
                        c.bezierCurveTo(f[e - 1].x, f[e - 1].y, f[e - 2].x, f[e - 2].y, f[e - 3].x, f[e - 3].y),
                        s && d.bezierCurveTo(f[e - 1].x, f[e - 1].y, f[e - 2].x, f[e - 2].y, f[e - 3].x, f[e - 3].y);
                    c.closePath();
                    c.globalAlpha = k.fillOpacity;
                    c.fill();
                    s && (d.closePath(),
                    d.fill());
                    c.globalAlpha = 1;
                    if (0 < k.lineThickness) {
                        c.strokeStyle = b;
                        c.setLineDash && c.setLineDash(a);
                        c.beginPath();
                        c.moveTo(f[0].x, f[0].y);
                        for (var g = e = 0; e < f.length - 3; e += 3,
                        g++) {
                            if (y[g].newStrokeStyle || y[g].newLineDashArray)
                                c.stroke(),
                                c.beginPath(),
                                c.moveTo(f[e].x, f[e].y),
                                y[g].newStrokeStyle && (c.strokeStyle = y[g].newStrokeStyle),
                                y[g].newLineDashArray && c.setLineDash(y[g].newLineDashArray);
                            c.bezierCurveTo(f[e + 1].x, f[e + 1].y, f[e + 2].x, f[e + 2].y, f[e + 3].x, f[e + 3].y)
                        }
                        f = u(y, 2);
                        c.moveTo(f[0].x, f[0].y);
                        for (g = e = 0; e < f.length - 3; e += 3,
                        g++) {
                            if (y[g].newStrokeStyle || y[g].newLineDashArray)
                                c.stroke(),
                                c.beginPath(),
                                c.moveTo(f[e].x, f[e].y),
                                y[g].newStrokeStyle && (c.strokeStyle = y[g].newStrokeStyle),
                                y[g].newLineDashArray && c.setLineDash(y[g].newLineDashArray);
                            c.bezierCurveTo(f[e + 1].x, f[e + 1].y, f[e + 2].x, f[e + 2].y, f[e + 3].x, f[e + 3].y)
                        }
                        c.stroke()
                    }
                    c.beginPath()
                }
            }
            var b = a.targetCanvasCtx || this.plotArea.ctx
              , c = s ? this._preRenderCtx : b;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var d = this._eventManager.ghostCtx
                  , e = []
                  , h = this.plotArea;
                c.save();
                s && d.save();
                c.beginPath();
                c.rect(h.x1, h.y1, h.width, h.height);
                c.clip();
                s && (d.beginPath(),
                d.rect(h.x1, h.y1, h.width, h.height),
                d.clip());
                for (var l = 0; l < a.dataSeriesIndexes.length; l++) {
                    var n = a.dataSeriesIndexes[l]
                      , k = this.data[n]
                      , p = k.dataPoints
                      , e = k.id;
                    this._eventManager.objectMap[e] = {
                        objectType: "dataSeries",
                        dataSeriesIndex: n
                    };
                    e = R(e);
                    d.fillStyle = e;
                    var e = [], m = 0, q, f, A, y = [], z = [];
                    if (0 < p.length) {
                        var r = k._colorSet[m % k._colorSet.length]
                          , x = k.lineColor = k.options.lineColor || r
                          , v = x;
                        c.fillStyle = r;
                        c.lineWidth = k.lineThickness;
                        var C = "solid", B;
                        if (c.setLineDash) {
                            var E = J(k.nullDataLineDashType, k.lineThickness)
                              , C = k.lineDashType;
                            B = J(C, k.lineThickness)
                        }
                        for (f = !1; m < p.length; m++)
                            if (q = p[m].x.getTime ? p[m].x.getTime() : p[m].x,
                            !(q < a.axisX.dataInfo.viewPortMin || q > a.axisX.dataInfo.viewPortMax && (!k.connectNullData || !f)))
                                if (null !== p[m].y && p[m].y.length && "number" === typeof p[m].y[0] && "number" === typeof p[m].y[1]) {
                                    q = a.axisX.convertValueToPixel(q);
                                    f = a.axisY.convertValueToPixel(p[m].y[0]);
                                    A = a.axisY.convertValueToPixel(p[m].y[1]);
                                    var D = k.dataPointIds[m];
                                    this._eventManager.objectMap[D] = {
                                        id: D,
                                        objectType: "dataPoint",
                                        dataSeriesIndex: n,
                                        dataPointIndex: m,
                                        x1: q,
                                        y1: f,
                                        y2: A
                                    };
                                    y[y.length] = {
                                        x: q,
                                        y: f
                                    };
                                    z[z.length] = {
                                        x: q,
                                        y: A
                                    };
                                    m < p.length - 1 && (v !== (p[m].lineColor || x) || C !== (p[m].lineDashType || k.lineDashType)) && (v = p[m].lineColor || x,
                                    y[y.length - 1].newStrokeStyle = v,
                                    c.setLineDash && (p[m].lineDashType ? (C = p[m].lineDashType,
                                    y[y.length - 1].newLineDashArray = J(C, k.lineThickness)) : (C = k.lineDashType,
                                    y[y.length - 1].newLineDashArray = B)));
                                    if (0 !== p[m].markerSize && (0 < p[m].markerSize || 0 < k.markerSize)) {
                                        var H = k.getMarkerProperties(m, q, f, c);
                                        e.push(H);
                                        var K = R(D);
                                        s && e.push({
                                            x: q,
                                            y: f,
                                            ctx: d,
                                            type: H.type,
                                            size: H.size,
                                            color: K,
                                            borderColor: K,
                                            borderThickness: H.borderThickness
                                        });
                                        H = k.getMarkerProperties(m, q, A, c);
                                        e.push(H);
                                        K = R(D);
                                        s && e.push({
                                            x: q,
                                            y: A,
                                            ctx: d,
                                            type: H.type,
                                            size: H.size,
                                            color: K,
                                            borderColor: K,
                                            borderThickness: H.borderThickness
                                        })
                                    }
                                    if (p[m].indexLabel || k.indexLabel || p[m].indexLabelFormatter || k.indexLabelFormatter)
                                        this._indexLabels.push({
                                            chartType: "rangeSplineArea",
                                            dataPoint: p[m],
                                            dataSeries: k,
                                            indexKeyword: 0,
                                            point: {
                                                x: q,
                                                y: f
                                            },
                                            direction: p[m].y[0] <= p[m].y[1] ? -1 : 1,
                                            color: r
                                        }),
                                        this._indexLabels.push({
                                            chartType: "rangeSplineArea",
                                            dataPoint: p[m],
                                            dataSeries: k,
                                            indexKeyword: 1,
                                            point: {
                                                x: q,
                                                y: A
                                            },
                                            direction: p[m].y[0] <= p[m].y[1] ? 1 : -1,
                                            color: r
                                        });
                                    f = !1
                                } else
                                    0 < m && !f && (k.connectNullData ? c.setLineDash && (0 < y.length && (k.options.nullDataLineDashType || !p[m - 1].lineDashType)) && (y[y.length - 1].newLineDashArray = E,
                                    C = k.nullDataLineDashType) : (g(B, x),
                                    y = [],
                                    z = [])),
                                    f = !0;
                        g(B, x);
                        ba.drawMarkers(e)
                    }
                }
                s && (b.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                c.globalCompositeOperation = "source-atop",
                a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                c.clearRect(h.x1, h.y1, h.width, h.height),
                this._eventManager.ghostCtx.restore());
                c.restore();
                return {
                    source: b,
                    dest: this.plotArea.ctx,
                    animationCallback: M.xClipAnimation,
                    easingFunction: M.easing.linear,
                    animationBase: 0
                }
            }
        }
        ;
        n.prototype.renderWaterfall = function(a) {
            var g = a.targetCanvasCtx || this.plotArea.ctx
              , b = s ? this._preRenderCtx : g;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var c = this._eventManager.ghostCtx, d = null, e = this.plotArea, h = 0, l, n, k, p, m = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), h = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
                n = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.width, 0.9 * (this.plotArea.width / a.plotType.totalDataSeries)) << 0;
                var q = a.axisX.dataInfo.minDiff;
                isFinite(q) || (q = 0.3 * Math.abs(a.axisX.range));
                q = this.options.dataPointWidth ? this.dataPointWidth : 0.6 * (e.width * (a.axisX.logarithmic ? Math.log(q) / Math.log(a.axisX.range) : Math.abs(q) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
                this.dataPointMaxWidth && h > n && (h = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, n));
                !this.dataPointMaxWidth && (this.dataPointMinWidth && n < h) && (n = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, h));
                q < h && (q = h);
                q > n && (q = n);
                b.save();
                s && this._eventManager.ghostCtx.save();
                b.beginPath();
                b.rect(e.x1, e.y1, e.width, e.height);
                b.clip();
                s && (this._eventManager.ghostCtx.beginPath(),
                this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height),
                this._eventManager.ghostCtx.clip());
                for (var f = 0; f < a.dataSeriesIndexes.length; f++) {
                    var u = a.dataSeriesIndexes[f]
                      , y = this.data[u]
                      , z = y.dataPoints
                      , d = y._colorSet[0];
                    y.risingColor = y.options.risingColor ? y.options.risingColor : d;
                    y.fallingColor = y.options.fallingColor ? y.options.fallingColor : "#e40a0a";
                    var r = "number" === typeof y.options.lineThickness ? Math.round(y.lineThickness) : 1
                      , x = 1 === Math.round(r) % 2 ? -0.5 : 0;
                    if (0 < z.length)
                        for (var v = 5 < q && y.bevelEnabled ? !0 : !1, A = !1, B = null, E = null, h = 0; h < z.length; h++)
                            if (z[h].getTime ? p = z[h].x.getTime() : p = z[h].x,
                            "number" !== typeof z[h].y) {
                                if (0 < h && !A && y.connectNullData)
                                    var C = y.options.nullDataLineDashType || !z[h - 1].lineDashType ? y.nullDataLineDashType : z[h - 1].lineDashType;
                                A = !0
                            } else {
                                l = a.axisX.convertValueToPixel(p);
                                n = 0 === y.dataPointEOs[h].cumulativeSum ? m : a.axisY.convertValueToPixel(y.dataPointEOs[h].cumulativeSum);
                                k = 0 === y.dataPointEOs[h].cumulativeSumYStartValue ? m : a.axisY.convertValueToPixel(y.dataPointEOs[h].cumulativeSumYStartValue);
                                l = a.axisX.reversed ? l + a.plotType.totalDataSeries * q / 2 - (a.previousDataSeriesCount + f) * q << 0 : l - a.plotType.totalDataSeries * q / 2 + (a.previousDataSeriesCount + f) * q << 0;
                                var D = a.axisX.reversed ? l - q << 0 : l + q << 0;
                                n > k && (d = n,
                                n = k,
                                k = d);
                                a.axisY.reversed && (d = n,
                                n = k,
                                k = d);
                                d = y.dataPointIds[h];
                                this._eventManager.objectMap[d] = {
                                    id: d,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: u,
                                    dataPointIndex: h,
                                    x1: l,
                                    y1: n,
                                    x2: D,
                                    y2: k
                                };
                                var K = z[h].color ? z[h].color : 0 < z[h].y ? y.risingColor : y.fallingColor;
                                da(b, a.axisX.reversed ? D : l, a.axisY.reversed ? k : n, a.axisX.reversed ? l : D, a.axisY.reversed ? n : k, K, 0, K, v, v, !1, !1, y.fillOpacity);
                                d = R(d);
                                s && da(this._eventManager.ghostCtx, a.axisX.reversed ? D : l, n, a.axisX.reversed ? l : D, k, d, 0, null, !1, !1, !1, !1);
                                var O, K = l;
                                O = "undefined" !== typeof z[h].isIntermediateSum && !0 === z[h].isIntermediateSum || "undefined" !== typeof z[h].isCumulativeSum && !0 === z[h].isCumulativeSum ? 0 < z[h].y ? n : k : 0 < z[h].y ? k : n;
                                0 < h && B && (!A || y.connectNullData) && (A && b.setLineDash && b.setLineDash(J(C, r)),
                                b.beginPath(),
                                b.moveTo(B, E - x),
                                b.lineTo(K, O - x),
                                0 < r && b.stroke(),
                                s && (c.beginPath(),
                                c.moveTo(B, E - x),
                                c.lineTo(K, O - x),
                                0 < r && c.stroke()));
                                A = !1;
                                B = D;
                                E = 0 < z[h].y ? n : k;
                                K = z[h].lineDashType ? z[h].lineDashType : y.options.lineDashType ? y.options.lineDashType : "shortDash";
                                b.strokeStyle = z[h].lineColor ? z[h].lineColor : y.options.lineColor ? y.options.lineColor : "#9e9e9e";
                                b.lineWidth = r;
                                b.setLineDash && (K = J(K, r),
                                b.setLineDash(K));
                                (z[h].indexLabel || y.indexLabel || z[h].indexLabelFormatter || y.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "waterfall",
                                    dataPoint: z[h],
                                    dataSeries: y,
                                    point: {
                                        x: l + (D - l) / 2,
                                        y: 0 <= z[h].y ? n : k
                                    },
                                    direction: 0 > z[h].y === a.axisY.reversed ? 1 : -1,
                                    bounds: {
                                        x1: l,
                                        y1: Math.min(n, k),
                                        x2: D,
                                        y2: Math.max(n, k)
                                    },
                                    color: d
                                })
                            }
                }
                s && (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                b.globalCompositeOperation = "source-atop",
                a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                b.clearRect(e.x1, e.y1, e.width, e.height),
                this._eventManager.ghostCtx.restore());
                b.restore();
                return {
                    source: g,
                    dest: this.plotArea.ctx,
                    animationCallback: M.fadeInAnimation,
                    easingFunction: M.easing.easeInQuad,
                    animationBase: 0
                }
            }
        }
        ;
        var ra = function(a, g, b, c, d, e, h, l, n) {
            if (!(0 > b)) {
                "undefined" === typeof l && (l = 1);
                if (!s) {
                    var k = Number((h % (2 * Math.PI)).toFixed(8));
                    Number((e % (2 * Math.PI)).toFixed(8)) === k && (h -= 1E-4)
                }
                a.save();
                a.globalAlpha = l;
                "pie" === d ? (a.beginPath(),
                a.moveTo(g.x, g.y),
                a.arc(g.x, g.y, b, e, h, !1),
                a.fillStyle = c,
                a.strokeStyle = "white",
                a.lineWidth = 2,
                a.closePath(),
                a.fill()) : "doughnut" === d && (a.beginPath(),
                a.arc(g.x, g.y, b, e, h, !1),
                0 <= n && a.arc(g.x, g.y, n * b, h, e, !0),
                a.closePath(),
                a.fillStyle = c,
                a.strokeStyle = "white",
                a.lineWidth = 2,
                a.fill());
                a.globalAlpha = 1;
                a.restore()
            }
        };
        n.prototype.renderPie = function(a) {
            function g() {
                if (k && p) {
                    var a = 0
                      , c = 0
                      , b = 0
                      , d = 0;
                    l(k.options.indexLabelMaxWidth) && (k.indexLabelMaxWidth = 0.33 * q.width);
                    for (var e = 0; e < p.length; e++) {
                        var g = p[e]
                          , h = k.dataPointIds[e];
                        f[e].id = h;
                        f[e].objectType = "dataPoint";
                        f[e].dataPointIndex = e;
                        f[e].dataSeriesIndex = 0;
                        var m = f[e]
                          , t = {
                            percent: null,
                            total: null
                        }
                          , w = null
                          , t = n.getPercentAndTotal(k, g);
                        if (k.indexLabelFormatter || g.indexLabelFormatter)
                            w = {
                                chart: n.options,
                                dataSeries: k,
                                dataPoint: g,
                                total: t.total,
                                percent: t.percent
                            };
                        t = g.indexLabelFormatter ? g.indexLabelFormatter(w) : g.indexLabel ? n.replaceKeywordsWithValue(g.indexLabel, g, k, e) : k.indexLabelFormatter ? k.indexLabelFormatter(w) : k.indexLabel ? n.replaceKeywordsWithValue(k.indexLabel, g, k, e) : g.label ? g.label : "";
                        n._eventManager.objectMap[h] = m;
                        m.center = {
                            x: v.x,
                            y: v.y
                        };
                        m.y = g.y;
                        m.radius = A;
                        m.percentInnerRadius = D;
                        m.indexLabelText = t;
                        m.indexLabelPlacement = k.indexLabelPlacement;
                        m.indexLabelLineColor = g.indexLabelLineColor ? g.indexLabelLineColor : k.options.indexLabelLineColor ? k.options.indexLabelLineColor : g.color ? g.color : k._colorSet[e % k._colorSet.length];
                        m.indexLabelLineThickness = l(g.indexLabelLineThickness) ? k.indexLabelLineThickness : g.indexLabelLineThickness;
                        m.indexLabelLineDashType = g.indexLabelLineDashType ? g.indexLabelLineDashType : k.indexLabelLineDashType;
                        m.indexLabelFontColor = g.indexLabelFontColor ? g.indexLabelFontColor : k.indexLabelFontColor;
                        m.indexLabelFontStyle = g.indexLabelFontStyle ? g.indexLabelFontStyle : k.indexLabelFontStyle;
                        m.indexLabelFontWeight = g.indexLabelFontWeight ? g.indexLabelFontWeight : k.indexLabelFontWeight;
                        m.indexLabelFontSize = l(g.indexLabelFontSize) ? k.indexLabelFontSize : g.indexLabelFontSize;
                        m.indexLabelFontFamily = g.indexLabelFontFamily ? g.indexLabelFontFamily : k.indexLabelFontFamily;
                        m.indexLabelBackgroundColor = g.indexLabelBackgroundColor ? g.indexLabelBackgroundColor : k.options.indexLabelBackgroundColor ? k.options.indexLabelBackgroundColor : k.indexLabelBackgroundColor;
                        m.indexLabelBorderColor = g.indexLabelBorderColor ? g.indexLabelBorderColor : k.options.indexLabelBorderColor ? k.options.indexLabelBorderColor : k.indexLabelBorderColor;
                        m.indexLabelBorderThickness = g.indexLabelBorderThickness ? g.indexLabelBorderThickness : k.options.indexLabelBorderThickness ? k.options.indexLabelBorderThickness : k.indexLabelBorderThickness;
                        m.indexLabelPadding = g.indexLabelPadding ? g.indexLabelPadding : k.options.indexLabelPadding ? k.options.indexLabelPadding : k.indexLabelPadding;
                        m.indexLabelMaxWidth = g.indexLabelMaxWidth ? g.indexLabelMaxWidth : k.indexLabelMaxWidth;
                        m.indexLabelWrap = "undefined" !== typeof g.indexLabelWrap ? g.indexLabelWrap : k.indexLabelWrap;
                        m.indexLabelTextAlign = g.indexLabelTextAlign ? g.indexLabelTextAlign : k.indexLabelTextAlign ? k.indexLabelTextAlign : "left";
                        m.startAngle = 0 === e ? k.startAngle ? k.startAngle / 180 * Math.PI : 0 : f[e - 1].endAngle;
                        m.startAngle = (m.startAngle + 2 * Math.PI) % (2 * Math.PI);
                        m.endAngle = m.startAngle + 2 * Math.PI / u * Math.abs(g.y);
                        g = (m.endAngle + m.startAngle) / 2;
                        g = (g + 2 * Math.PI) % (2 * Math.PI);
                        m.midAngle = g;
                        if (m.midAngle > Math.PI / 2 - r && m.midAngle < Math.PI / 2 + r) {
                            if (0 === a || f[b].midAngle > m.midAngle)
                                b = e;
                            a++
                        } else if (m.midAngle > 3 * Math.PI / 2 - r && m.midAngle < 3 * Math.PI / 2 + r) {
                            if (0 === c || f[d].midAngle > m.midAngle)
                                d = e;
                            c++
                        }
                        m.hemisphere = g > Math.PI / 2 && g <= 3 * Math.PI / 2 ? "left" : "right";
                        m.indexLabelTextBlock = new ja(n.plotArea.ctx,{
                            fontSize: m.indexLabelFontSize,
                            fontFamily: m.indexLabelFontFamily,
                            fontColor: m.indexLabelFontColor,
                            fontStyle: m.indexLabelFontStyle,
                            fontWeight: m.indexLabelFontWeight,
                            textAlign: m.indexLabelTextAlign,
                            backgroundColor: m.indexLabelBackgroundColor,
                            borderColor: m.indexLabelBorderColor,
                            borderThickness: m.indexLabelBorderThickness,
                            maxWidth: m.indexLabelMaxWidth,
                            maxHeight: m.indexLabelWrap ? 5 * m.indexLabelFontSize : 1.5 * m.indexLabelFontSize,
                            text: m.indexLabelText,
                            padding: m.indexLabelPadding,
                            textBaseline: "middle"
                        });
                        m.indexLabelTextBlock.measureText()
                    }
                    h = g = 0;
                    t = !1;
                    for (e = 0; e < p.length; e++)
                        m = f[(b + e) % p.length],
                        1 < a && (m.midAngle > Math.PI / 2 - r && m.midAngle < Math.PI / 2 + r) && (g <= a / 2 && !t ? (m.hemisphere = "right",
                        g++) : (m.hemisphere = "left",
                        t = !0));
                    t = !1;
                    for (e = 0; e < p.length; e++)
                        m = f[(d + e) % p.length],
                        1 < c && (m.midAngle > 3 * Math.PI / 2 - r && m.midAngle < 3 * Math.PI / 2 + r) && (h <= c / 2 && !t ? (m.hemisphere = "left",
                        h++) : (m.hemisphere = "right",
                        t = !0))
                }
            }
            function b(a, c) {
                var b = n.plotArea.ctx;
                b.clearRect(q.x1, q.y1, q.width, q.height);
                b.fillStyle = n.backgroundColor;
                b.fillRect(q.x1, q.y1, q.width, q.height);
                for (b = 0; b < p.length; b++) {
                    var d = f[b].startAngle
                      , e = f[b].endAngle;
                    if (e > d) {
                        var g = 0.07 * A * Math.cos(f[b].midAngle)
                          , h = 0.07 * A * Math.sin(f[b].midAngle)
                          , t = !1;
                        if (p[b].exploded) {
                            if (1E-9 < Math.abs(f[b].center.x - (v.x + g)) || 1E-9 < Math.abs(f[b].center.y - (v.y + h)))
                                f[b].center.x = v.x + g * a,
                                f[b].center.y = v.y + h * a,
                                t = !0
                        } else if (0 < Math.abs(f[b].center.x - v.x) || 0 < Math.abs(f[b].center.y - v.y))
                            f[b].center.x = v.x + g * (1 - a),
                            f[b].center.y = v.y + h * (1 - a),
                            t = !0;
                        t && c && (g = {},
                        g.dataSeries = k,
                        g.dataPoint = k.dataPoints[b],
                        g.index = b,
                        n.toolTip.highlightObjects([g]));
                        ra(n.plotArea.ctx, f[b].center, f[b].radius, p[b].color ? p[b].color : k._colorSet[b % k._colorSet.length], k.type, d, e, k.fillOpacity, f[b].percentInnerRadius)
                    }
                }
                b = n.plotArea.ctx;
                b.save();
                b.fillStyle = "black";
                b.strokeStyle = "grey";
                b.textBaseline = "middle";
                b.lineJoin = "round";
                for (d = d = 0; d < p.length; d++)
                    e = f[d],
                    e.indexLabelText && (e.indexLabelTextBlock.y -= e.indexLabelTextBlock.height / 2 - e.indexLabelTextBlock._lineHeight / 2,
                    g = 0,
                    g = "left" === e.hemisphere ? "inside" !== k.indexLabelPlacement ? -(e.indexLabelTextBlock.width + m) : -e.indexLabelTextBlock.width / 2 : "inside" !== k.indexLabelPlacement ? m : -e.indexLabelTextBlock.width / 2,
                    e.indexLabelTextBlock.x += g,
                    e.indexLabelTextBlock.render(!0),
                    e.indexLabelTextBlock.x -= g,
                    e.indexLabelTextBlock.y += e.indexLabelTextBlock.height / 2 - e.indexLabelTextBlock._lineHeight / 2,
                    "inside" !== e.indexLabelPlacement && 0 < e.indexLabelLineThickness && (g = e.center.x + A * Math.cos(e.midAngle),
                    h = e.center.y + A * Math.sin(e.midAngle),
                    b.strokeStyle = e.indexLabelLineColor,
                    b.lineWidth = e.indexLabelLineThickness,
                    b.setLineDash && b.setLineDash(J(e.indexLabelLineDashType, e.indexLabelLineThickness)),
                    b.beginPath(),
                    b.moveTo(g, h),
                    b.lineTo(e.indexLabelTextBlock.x, e.indexLabelTextBlock.y),
                    b.lineTo(e.indexLabelTextBlock.x + ("left" === e.hemisphere ? -m : m), e.indexLabelTextBlock.y),
                    b.stroke()),
                    b.lineJoin = "miter");
                b.save()
            }
            function c(a, c) {
                var b = 0
                  , b = a.indexLabelTextBlock.y - a.indexLabelTextBlock.height / 2
                  , d = a.indexLabelTextBlock.y + a.indexLabelTextBlock.height / 2
                  , f = c.indexLabelTextBlock.y - c.indexLabelTextBlock.height / 2
                  , e = c.indexLabelTextBlock.y + c.indexLabelTextBlock.height / 2;
                return b = c.indexLabelTextBlock.y > a.indexLabelTextBlock.y ? f - d : b - e
            }
            function d(a) {
                for (var b = null, d = 1; d < p.length; d++)
                    if (b = (a + d + f.length) % f.length,
                    f[b].hemisphere !== f[a].hemisphere) {
                        b = null;
                        break
                    } else if (f[b].indexLabelText && b !== a && (0 > c(f[b], f[a]) || ("right" === f[a].hemisphere ? f[b].indexLabelTextBlock.y >= f[a].indexLabelTextBlock.y : f[b].indexLabelTextBlock.y <= f[a].indexLabelTextBlock.y)))
                        break;
                    else
                        b = null;
                return b
            }
            function e(a, b, g) {
                g = (g || 0) + 1;
                if (1E3 < g)
                    return 0;
                b = b || 0;
                var h = 0
                  , k = v.y - 1 * y
                  , m = v.y + 1 * y;
                if (0 <= a && a < p.length) {
                    var q = f[a];
                    if (0 > b && q.indexLabelTextBlock.y < k || 0 < b && q.indexLabelTextBlock.y > m)
                        return 0;
                    var t = 0
                      , l = 0
                      , l = t = t = 0;
                    0 > b ? q.indexLabelTextBlock.y - q.indexLabelTextBlock.height / 2 > k && q.indexLabelTextBlock.y - q.indexLabelTextBlock.height / 2 + b < k && (b = -(k - (q.indexLabelTextBlock.y - q.indexLabelTextBlock.height / 2 + b))) : q.indexLabelTextBlock.y + q.indexLabelTextBlock.height / 2 < k && q.indexLabelTextBlock.y + q.indexLabelTextBlock.height / 2 + b > m && (b = q.indexLabelTextBlock.y + q.indexLabelTextBlock.height / 2 + b - m);
                    b = q.indexLabelTextBlock.y + b;
                    k = 0;
                    k = "right" === q.hemisphere ? v.x + Math.sqrt(Math.pow(y, 2) - Math.pow(b - v.y, 2)) : v.x - Math.sqrt(Math.pow(y, 2) - Math.pow(b - v.y, 2));
                    l = v.x + A * Math.cos(q.midAngle);
                    t = v.y + A * Math.sin(q.midAngle);
                    t = Math.sqrt(Math.pow(k - l, 2) + Math.pow(b - t, 2));
                    l = Math.acos(A / y);
                    t = Math.acos((y * y + A * A - t * t) / (2 * A * y));
                    b = t < l ? b - q.indexLabelTextBlock.y : 0;
                    k = null;
                    for (m = 1; m < p.length; m++)
                        if (k = (a - m + f.length) % f.length,
                        f[k].hemisphere !== f[a].hemisphere) {
                            k = null;
                            break
                        } else if (f[k].indexLabelText && f[k].hemisphere === f[a].hemisphere && k !== a && (0 > c(f[k], f[a]) || ("right" === f[a].hemisphere ? f[k].indexLabelTextBlock.y <= f[a].indexLabelTextBlock.y : f[k].indexLabelTextBlock.y >= f[a].indexLabelTextBlock.y)))
                            break;
                        else
                            k = null;
                    l = k;
                    t = d(a);
                    m = k = 0;
                    0 > b ? (m = "right" === q.hemisphere ? l : t,
                    h = b,
                    null !== m && (l = -b,
                    b = q.indexLabelTextBlock.y - q.indexLabelTextBlock.height / 2 - (f[m].indexLabelTextBlock.y + f[m].indexLabelTextBlock.height / 2),
                    b - l < s && (k = -l,
                    m = e(m, k, g + 1),
                    +m.toFixed(x) > +k.toFixed(x) && (h = b > s ? -(b - s) : -(l - (m - k)))))) : 0 < b && (m = "right" === q.hemisphere ? t : l,
                    h = b,
                    null !== m && (l = b,
                    b = f[m].indexLabelTextBlock.y - f[m].indexLabelTextBlock.height / 2 - (q.indexLabelTextBlock.y + q.indexLabelTextBlock.height / 2),
                    b - l < s && (k = l,
                    m = e(m, k, g + 1),
                    +m.toFixed(x) < +k.toFixed(x) && (h = b > s ? b - s : l - (k - m)))));
                    h && (g = q.indexLabelTextBlock.y + h,
                    b = 0,
                    b = "right" === q.hemisphere ? v.x + Math.sqrt(Math.pow(y, 2) - Math.pow(g - v.y, 2)) : v.x - Math.sqrt(Math.pow(y, 2) - Math.pow(g - v.y, 2)),
                    q.midAngle > Math.PI / 2 - r && q.midAngle < Math.PI / 2 + r ? (k = (a - 1 + f.length) % f.length,
                    k = f[k],
                    a = f[(a + 1 + f.length) % f.length],
                    "left" === q.hemisphere && "right" === k.hemisphere && b > k.indexLabelTextBlock.x ? b = k.indexLabelTextBlock.x - 15 : "right" === q.hemisphere && ("left" === a.hemisphere && b < a.indexLabelTextBlock.x) && (b = a.indexLabelTextBlock.x + 15)) : q.midAngle > 3 * Math.PI / 2 - r && q.midAngle < 3 * Math.PI / 2 + r && (k = (a - 1 + f.length) % f.length,
                    k = f[k],
                    a = f[(a + 1 + f.length) % f.length],
                    "right" === q.hemisphere && "left" === k.hemisphere && b < k.indexLabelTextBlock.x ? b = k.indexLabelTextBlock.x + 15 : "left" === q.hemisphere && ("right" === a.hemisphere && b > a.indexLabelTextBlock.x) && (b = a.indexLabelTextBlock.x - 15)),
                    q.indexLabelTextBlock.y = g,
                    q.indexLabelTextBlock.x = b,
                    q.indexLabelAngle = Math.atan2(q.indexLabelTextBlock.y - v.y, q.indexLabelTextBlock.x - v.x))
                }
                return h
            }
            function h() {
                var a = n.plotArea.ctx;
                a.fillStyle = "grey";
                a.strokeStyle = "grey";
                a.font = "16px Arial";
                a.textBaseline = "middle";
                for (var b = a = 0, g = 0, t = !0, b = 0; 10 > b && (1 > b || 0 < g); b++) {
                    if (k.radius || !k.radius && "undefined" !== typeof k.innerRadius && null !== k.innerRadius && A - g <= C)
                        t = !1;
                    t && (A -= g);
                    g = 0;
                    if ("inside" !== k.indexLabelPlacement) {
                        y = A * z;
                        for (a = 0; a < p.length; a++) {
                            var l = f[a];
                            l.indexLabelTextBlock.x = v.x + y * Math.cos(l.midAngle);
                            l.indexLabelTextBlock.y = v.y + y * Math.sin(l.midAngle);
                            l.indexLabelAngle = l.midAngle;
                            l.radius = A;
                            l.percentInnerRadius = D
                        }
                        for (var w, r, a = 0; a < p.length; a++) {
                            var l = f[a]
                              , u = d(a);
                            if (null !== u) {
                                w = f[a];
                                r = f[u];
                                var B = 0
                                  , B = c(w, r) - s;
                                if (0 > B) {
                                    for (var H = r = 0, J = 0; J < p.length; J++)
                                        J !== a && f[J].hemisphere === l.hemisphere && (f[J].indexLabelTextBlock.y < l.indexLabelTextBlock.y ? r++ : H++);
                                    r = B / (r + H || 1) * H;
                                    var H = -1 * (B - r)
                                      , M = J = 0;
                                    "right" === l.hemisphere ? (J = e(a, r),
                                    H = -1 * (B - J),
                                    M = e(u, H),
                                    +M.toFixed(x) < +H.toFixed(x) && +J.toFixed(x) <= +r.toFixed(x) && e(a, -(H - M))) : (J = e(u, r),
                                    H = -1 * (B - J),
                                    M = e(a, H),
                                    +M.toFixed(x) < +H.toFixed(x) && +J.toFixed(x) <= +r.toFixed(x) && e(u, -(H - M)))
                                }
                            }
                        }
                    } else
                        for (a = 0; a < p.length; a++)
                            l = f[a],
                            y = "pie" === k.type ? 0.7 * A : 0.85 * A,
                            u = v.x + y * Math.cos(l.midAngle),
                            r = v.y + y * Math.sin(l.midAngle),
                            l.indexLabelTextBlock.x = u,
                            l.indexLabelTextBlock.y = r;
                    for (a = 0; a < p.length; a++)
                        if (l = f[a],
                        u = l.indexLabelTextBlock.measureText(),
                        0 !== u.height && 0 !== u.width)
                            u = u = 0,
                            "right" === l.hemisphere ? (u = q.x2 - (l.indexLabelTextBlock.x + l.indexLabelTextBlock.width + m),
                            u *= -1) : u = q.x1 - (l.indexLabelTextBlock.x - l.indexLabelTextBlock.width - m),
                            0 < u && (!t && l.indexLabelText && (r = "right" === l.hemisphere ? q.x2 - l.indexLabelTextBlock.x : l.indexLabelTextBlock.x - q.x1,
                            0.3 * l.indexLabelTextBlock.maxWidth > r ? l.indexLabelText = "" : l.indexLabelTextBlock.maxWidth = 0.85 * r,
                            0.3 * l.indexLabelTextBlock.maxWidth < r && (l.indexLabelTextBlock.x -= "right" === l.hemisphere ? 2 : -2)),
                            Math.abs(l.indexLabelTextBlock.y - l.indexLabelTextBlock.height / 2 - v.y) < A || Math.abs(l.indexLabelTextBlock.y + l.indexLabelTextBlock.height / 2 - v.y) < A) && (u /= Math.abs(Math.cos(l.indexLabelAngle)),
                            9 < u && (u *= 0.3),
                            u > g && (g = u)),
                            u = u = 0,
                            0 < l.indexLabelAngle && l.indexLabelAngle < Math.PI ? (u = q.y2 - (l.indexLabelTextBlock.y + l.indexLabelTextBlock.height / 2 + 5),
                            u *= -1) : u = q.y1 - (l.indexLabelTextBlock.y - l.indexLabelTextBlock.height / 2 - 5),
                            0 < u && (!t && l.indexLabelText && (r = 0 < l.indexLabelAngle && l.indexLabelAngle < Math.PI ? -1 : 1,
                            0 === e(a, u * r) && e(a, 2 * r)),
                            Math.abs(l.indexLabelTextBlock.x - v.x) < A && (u /= Math.abs(Math.sin(l.indexLabelAngle)),
                            9 < u && (u *= 0.3),
                            u > g && (g = u)));
                    var L = function(a, b, c) {
                        for (var d = [], e = 0; d.push(f[b]),
                        b !== c; b = (b + 1 + p.length) % p.length)
                            ;
                        d.sort(function(a, b) {
                            return a.y - b.y
                        });
                        for (b = 0; b < d.length; b++)
                            if (c = d[b],
                            e < 0.7 * a)
                                e += c.indexLabelTextBlock.height,
                                c.indexLabelTextBlock.text = "",
                                c.indexLabelText = "",
                                c.indexLabelTextBlock.measureText();
                            else
                                break
                    };
                    (function() {
                        for (var a = -1, b = -1, e = 0, g = !1, h = 0; h < p.length; h++)
                            if (g = !1,
                            w = f[h],
                            w.indexLabelText) {
                                var k = d(h);
                                if (null !== k) {
                                    var q = f[k];
                                    B = 0;
                                    B = c(w, q);
                                    var t;
                                    if (t = 0 > B) {
                                        t = w.indexLabelTextBlock.x;
                                        var l = w.indexLabelTextBlock.y - w.indexLabelTextBlock.height / 2
                                          , n = w.indexLabelTextBlock.y + w.indexLabelTextBlock.height / 2
                                          , r = q.indexLabelTextBlock.y - q.indexLabelTextBlock.height / 2
                                          , v = q.indexLabelTextBlock.x + q.indexLabelTextBlock.width
                                          , x = q.indexLabelTextBlock.y + q.indexLabelTextBlock.height / 2;
                                        t = w.indexLabelTextBlock.x + w.indexLabelTextBlock.width < q.indexLabelTextBlock.x - m || t > v + m || l > x + m || n < r - m ? !1 : !0
                                    }
                                    t ? (0 > a && (a = h),
                                    k !== a && (b = k,
                                    e += -B),
                                    0 === h % Math.max(p.length / 10, 3) && (g = !0)) : g = !0;
                                    g && (0 < e && 0 <= a && 0 <= b) && (L(e, a, b),
                                    b = a = -1,
                                    e = 0)
                                }
                            }
                        0 < e && L(e, a, b)
                    }
                    )()
                }
            }
            function w() {
                n.plotArea.layoutManager.reset();
                n.title && (n.title.dockInsidePlotArea || "center" === n.title.horizontalAlign && "center" === n.title.verticalAlign) && n.title.render();
                if (n.subtitles)
                    for (var a = 0; a < n.subtitles.length; a++) {
                        var b = n.subtitles[a];
                        (b.dockInsidePlotArea || "center" === b.horizontalAlign && "center" === b.verticalAlign) && b.render()
                    }
                n.legend && (n.legend.dockInsidePlotArea || "center" === n.legend.horizontalAlign && "center" === n.legend.verticalAlign) && (n.legend.setLayout(),
                n.legend.render())
            }
            var n = this;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var k = this.data[a.dataSeriesIndexes[0]], p = k.dataPoints, m = 10, q = this.plotArea, f = k.dataPointEOs, s = 2, y, z = 1.3, r = 20 / 180 * Math.PI, x = 6, v = {
                    x: (q.x2 + q.x1) / 2,
                    y: (q.y2 + q.y1) / 2
                }, u = 0;
                a = !1;
                for (var B = 0; B < p.length; B++)
                    u += Math.abs(p[B].y),
                    !a && ("undefined" !== typeof p[B].indexLabel && null !== p[B].indexLabel && 0 < p[B].indexLabel.toString().length) && (a = !0),
                    !a && ("undefined" !== typeof p[B].label && null !== p[B].label && 0 < p[B].label.toString().length) && (a = !0);
                if (0 !== u) {
                    a = a || "undefined" !== typeof k.indexLabel && null !== k.indexLabel && 0 < k.indexLabel.toString().length;
                    var A = "inside" !== k.indexLabelPlacement && a ? 0.75 * Math.min(q.width, q.height) / 2 : 0.92 * Math.min(q.width, q.height) / 2;
                    k.radius && (A = Va(k.radius, A));
                    var C = "undefined" !== typeof k.innerRadius && null !== k.innerRadius ? Va(k.innerRadius, A) : 0.7 * A
                      , D = Math.min(C / A, (A - 1) / A);
                    this.pieDoughnutClickHandler = function(a) {
                        n.isAnimating || !l(this.explodeOnClick) && !this.explodeOnClick || (a = a.dataPoint,
                        a.exploded = a.exploded ? !1 : !0,
                        1 < this.dataPoints.length && n._animator.animate(0, 500, function(a) {
                            b(a, !0);
                            w();
                            n.dispatchEvent("dataAnimationIterationEnd", {
                                chart: n
                            });
                            n.dispatchEvent("dataAnimationEnd", {
                                chart: n
                            })
                        }))
                    }
                    ;
                    g();
                    h();
                    h();
                    h();
                    h();
                    this.disableToolTip = !0;
                    this._animator.animate(0, this.animatedRender ? this.animationDuration : 0, function(a) {
                        var b = n.plotArea.ctx;
                        b.clearRect(q.x1, q.y1, q.width, q.height);
                        b.fillStyle = n.backgroundColor;
                        b.fillRect(q.x1, q.y1, q.width, q.height);
                        for (var b = f[0].startAngle + 2 * Math.PI * a, c = 0; c < p.length; c++) {
                            var d = 0 === c ? f[c].startAngle : e
                              , e = d + (f[c].endAngle - f[c].startAngle)
                              , g = !1;
                            e > b && (e = b,
                            g = !0);
                            var h = p[c].color ? p[c].color : k._colorSet[c % k._colorSet.length];
                            e > d && ra(n.plotArea.ctx, f[c].center, f[c].radius, h, k.type, d, e, k.fillOpacity, f[c].percentInnerRadius);
                            if (g)
                                break
                        }
                        w();
                        n.dispatchEvent("dataAnimationIterationEnd", {
                            chart: n
                        });
                        1 <= a && n.dispatchEvent("dataAnimationEnd", {
                            chart: n
                        })
                    }, function() {
                        n.disableToolTip = !1;
                        n._animator.animate(0, n.animatedRender ? 500 : 0, function(a) {
                            b(a, !1);
                            w();
                            n.dispatchEvent("dataAnimationIterationEnd", {
                                chart: n
                            })
                        });
                        n.dispatchEvent("dataAnimationEnd", {
                            chart: n
                        })
                    });
                    k.radius = A;
                    "doughnut" === k.type && (k.innerRadius = C)
                }
            }
        }
        ;
        var sa = function(a, g, b, c) {
            "undefined" === typeof b && (b = 1);
            0 >= Math.round(g.y4 - g.y1) || (a.save(),
            a.globalAlpha = b,
            a.beginPath(),
            a.moveTo(Math.round(g.x1), Math.round(g.y1)),
            a.lineTo(Math.round(g.x2), Math.round(g.y2)),
            a.lineTo(Math.round(g.x3), Math.round(g.y3)),
            a.lineTo(Math.round(g.x4), Math.round(g.y4)),
            "undefined" !== g.x5 && (a.lineTo(Math.round(g.x5), Math.round(g.y5)),
            a.lineTo(Math.round(g.x6), Math.round(g.y6))),
            a.closePath(),
            a.fillStyle = c ? c : g.color,
            a.fill(),
            a.globalAplha = 1,
            a.restore())
        };
        n.prototype.renderFunnel = function(a) {
            function g() {
                for (var a = 0, b = [], c = 0; c < x.length; c++) {
                    if ("undefined" === typeof x[c].y)
                        return -1;
                    x[c].y = "number" === typeof x[c].y ? x[c].y : 0;
                    a += Math.abs(x[c].y)
                }
                if (0 === a)
                    return -1;
                for (c = b[0] = 0; c < x.length; c++)
                    b.push(Math.abs(x[c].y) * D / a);
                return b
            }
            function b() {
                var a = U, b = S, c = $, d = X, e, f;
                e = Z;
                f = P - ca;
                d = Math.abs((f - e) * (b - a + (d - c)) / 2);
                c = X - $;
                e = f - e;
                f = c * (f - P);
                f = Math.abs(f);
                f = d + f;
                for (var d = [], g = 0, h = 0; h < x.length; h++) {
                    if ("undefined" === typeof x[h].y)
                        return -1;
                    x[h].y = "number" === typeof x[h].y ? x[h].y : 0;
                    g += Math.abs(x[h].y)
                }
                if (0 === g)
                    return -1;
                for (var k = d[0] = 0, m = 0, p, q, b = b - a, k = !1, h = 0; h < x.length; h++)
                    a = Math.abs(x[h].y) * f / g,
                    k ? p = 0 == Number(c.toFixed(3)) ? 0 : a / c : (q = Y * Y * b * b - 4 * Math.abs(Y) * a,
                    0 > q ? (q = c,
                    k = (b + q) * (e - m) / 2,
                    a -= k,
                    p = e - m,
                    m += e - m,
                    p += 0 == q ? 0 : a / q,
                    m += a / q,
                    k = !0) : (p = (Math.abs(Y) * b - Math.sqrt(q)) / 2,
                    q = b - 2 * p / Math.abs(Y),
                    m += p,
                    m > e && (m -= p,
                    q = c,
                    k = (b + q) * (e - m) / 2,
                    a -= k,
                    p = e - m,
                    m += e - m,
                    p += a / q,
                    m += a / q,
                    k = !0),
                    b = q)),
                    d.push(p);
                return d
            }
            function c() {
                if (r && x) {
                    for (var a, b, c, d, e, g, h, k, m, p, q, t, n, w, v, u, y, I, A = [], B = [], C = {
                        percent: null,
                        total: null
                    }, E = null, D = 0; D < x.length; D++)
                        I = N[D],
                        I = "undefined" !== typeof I.x5 ? (I.y2 + I.y4) / 2 : (I.y2 + I.y3) / 2,
                        I = f(I).x2 + 1,
                        A[D] = L - (isNaN(I) ? 0 : I) - V;
                    I = 0.5 * V;
                    for (var D = 0, F = x.length - 1; D < x.length || 0 <= F; D++,
                    F--) {
                        b = r.reversed ? x[F] : x[D];
                        a = b.color ? b.color : r.reversed ? r._colorSet[(x.length - 1 - D) % r._colorSet.length] : r._colorSet[D % r._colorSet.length];
                        c = b.indexLabelPlacement || r.indexLabelPlacement || "outside";
                        y = b.indexLabelTextAlign || r.indexLabelTextAlign || "left";
                        d = b.indexLabelBackgroundColor || r.indexLabelBackgroundColor || (s ? "transparent" : null);
                        e = b.indexLabelBorderColor || r.indexLabelBorderColor || (s ? "transparent" : null);
                        g = l(b.indexLabelBorderThickness) ? r.indexLabelBorderThickness : b.indexLabelBorderThickness;
                        h = l(b.indexLabelPadding) ? r.options.indexLabelPadding ? r.options.indexLabelPadding : r.indexLabelPadding : b.indexLabelPadding;
                        k = b.indexLabelFontColor || r.indexLabelFontColor || "#979797";
                        m = l(b.indexLabelFontSize) ? r.indexLabelFontSize : b.indexLabelFontSize;
                        p = b.indexLabelFontStyle || r.indexLabelFontStyle || "normal";
                        q = b.indexLabelFontFamily || r.indexLabelFontFamily || "arial";
                        t = b.indexLabelFontWeight || r.indexLabelFontWeight || "normal";
                        a = b.indexLabelLineColor || r.options.indexLabelLineColor || a;
                        n = "number" === typeof b.indexLabelLineThickness ? b.indexLabelLineThickness : "number" === typeof r.indexLabelLineThickness ? r.indexLabelLineThickness : 2;
                        w = b.indexLabelLineDashType || r.indexLabelLineDashType || "solid";
                        v = "undefined" !== typeof b.indexLabelWrap ? b.indexLabelWrap : "undefined" !== typeof r.indexLabelWrap ? r.indexLabelWrap : !0;
                        u = r.dataPointIds[D];
                        z._eventManager.objectMap[u] = {
                            id: u,
                            objectType: "dataPoint",
                            dataPointIndex: D,
                            dataSeriesIndex: 0,
                            funnelSection: N[r.reversed ? x.length - 1 - D : D]
                        };
                        "inside" === r.indexLabelPlacement && (A[D] = D !== da ? r.reversed ? N[D].x2 - N[D].x1 : N[D].x3 - N[D].x4 : N[D].x3 - N[D].x6,
                        20 > A[D] && (A[D] = D !== da ? r.reversed ? N[D].x3 - N[D].x4 : N[D].x2 - N[D].x1 : N[D].x2 - N[D].x1,
                        A[D] /= 2));
                        u = b.indexLabelMaxWidth ? b.indexLabelMaxWidth : r.options.indexLabelMaxWidth ? r.indexLabelMaxWidth : A[D];
                        if (u > A[D] || 0 > u)
                            u = A[D];
                        B[D] = "inside" === r.indexLabelPlacement ? v ? Math.max(N[D].height, m) : 1.5 * m + ("object" === typeof h ? (h.top || 0) + (h.bottom || 0) : 2 * h) : !1;
                        C = z.getPercentAndTotal(r, b);
                        if (r.indexLabelFormatter || b.indexLabelFormatter)
                            E = {
                                chart: z.options,
                                dataSeries: r,
                                dataPoint: b,
                                total: C.total,
                                percent: C.percent
                            };
                        b = b.indexLabelFormatter ? b.indexLabelFormatter(E) : b.indexLabel ? z.replaceKeywordsWithValue(b.indexLabel, b, r, D) : r.indexLabelFormatter ? r.indexLabelFormatter(E) : r.indexLabel ? z.replaceKeywordsWithValue(r.indexLabel, b, r, D) : b.label ? b.label : "";
                        0 >= n && (n = 0);
                        1E3 > u && 1E3 - u < I && (u += 1E3 - u);
                        l(r.options.indexLabelMaxWidth) && (r.indexLabelMaxWidth = l(r.indexLabelMaxWidth) ? u : Math.max(u, r.indexLabelMaxWidth));
                        Q.roundRect || za(Q);
                        c = new ja(Q,{
                            fontSize: m,
                            fontFamily: q,
                            fontColor: k,
                            fontStyle: p,
                            fontWeight: t,
                            horizontalAlign: c,
                            textAlign: y,
                            backgroundColor: d,
                            borderColor: e,
                            borderThickness: g,
                            maxWidth: u,
                            maxHeight: !1 === B[D] ? (v ? 4.28571429 * m : 1.5 * m) + ("object" === typeof h ? (h.top || 0) + (h.bottom || 0) : 2 * h) : B[D],
                            text: b,
                            padding: h,
                            textBaseline: "middle"
                        });
                        c.measureText();
                        c.height = c.height === 2 * c.padding ? 0 : c.height;
                        c.width = c.width === 2 * c.padding ? 0 : c.width;
                        G.push({
                            textBlock: c,
                            id: r.reversed ? F : D,
                            isDirty: !1,
                            lineColor: a,
                            lineThickness: n,
                            lineDashType: w,
                            height: c.height < c.maxHeight ? c.height : c.maxHeight,
                            width: c.width < c.maxWidth ? c.width : c.maxWidth
                        })
                    }
                }
            }
            function d() {
                var a, b, c, d, e, f = [];
                e = !1;
                c = 0;
                for (var g, h = L - S - V / 2, h = r.options.indexLabelMaxWidth ? r.indexLabelMaxWidth > h ? h : r.indexLabelMaxWidth : h, k = G.length - 1; 0 <= k; k--) {
                    g = x[G[k].id];
                    c = G[k];
                    d = c.textBlock;
                    b = (a = q(k) < N.length ? G[q(k)] : null) ? a.textBlock : null;
                    c = c.height;
                    a && d.y + c + ea > b.y && (e = !0);
                    c = g.indexLabelMaxWidth || h;
                    if (c > h || 0 > c)
                        c = h;
                    f.push(c)
                }
                if (e)
                    for (k = G.length - 1; 0 <= k; k--)
                        a = N[k],
                        G[k].textBlock.maxWidth = f[f.length - (k + 1)],
                        G[k].textBlock.measureText(),
                        G[k].textBlock.height = G[k].textBlock.height === 2 * G[k].textBlock.padding ? 0 : G[k].textBlock.height,
                        G[k].textBlock.width = G[k].textBlock.width === 2 * G[k].textBlock.padding ? 0 : G[k].textBlock.width,
                        G[k].textBlock.x = L - h,
                        c = G[k].textBlock.height < G[k].textBlock.maxHeight ? G[k].textBlock.height : G[k].textBlock.maxHeight,
                        e = G[k].textBlock.width < G[k].textBlock.maxWidth ? G[k].textBlock.width : G[k].textBlock.maxWidth,
                        G[k].height = c,
                        G[k].width = e,
                        c = "undefined" !== typeof a.x5 ? (a.y2 + a.y4) / 2 : (a.y2 + a.y3) / 2,
                        G[k].textBlock.y = c - G[k].height / 2,
                        r.reversed ? (G[k].textBlock.y + G[k].height > R + C && (G[k].textBlock.y = R + C - G[k].height),
                        G[k].textBlock.y < xa - C && (G[k].textBlock.y = xa - C)) : (G[k].textBlock.y < R - C && (G[k].textBlock.y = R - C),
                        G[k].textBlock.y + G[k].height > xa + C && (G[k].textBlock.y = xa + C - G[k].height))
            }
            function e() {
                var a, b, c, d;
                if ("inside" !== r.indexLabelPlacement)
                    for (var e = 0; e < N.length; e++)
                        0 == G[e].textBlock.text.length ? G[e].isDirty = !0 : (a = N[e],
                        c = "undefined" !== typeof a.x5 ? (a.y2 + a.y4) / 2 : (a.y2 + a.y3) / 2,
                        b = r.reversed ? "undefined" !== typeof a.x5 ? c > ba ? f(c).x2 + 1 : (a.x2 + a.x3) / 2 + 1 : (a.x2 + a.x3) / 2 + 1 : "undefined" !== typeof a.x5 ? c < ba ? f(c).x2 + 1 : (a.x4 + a.x3) / 2 + 1 : (a.x2 + a.x3) / 2 + 1,
                        G[e].textBlock.x = b + V,
                        G[e].textBlock.y = c - G[e].height / 2,
                        r.reversed ? (G[e].textBlock.y + G[e].height > R + C && (G[e].textBlock.y = R + C - G[e].height),
                        G[e].textBlock.y < xa - C && (G[e].textBlock.y = xa - C)) : (G[e].textBlock.y < R - C && (G[e].textBlock.y = R - C),
                        G[e].textBlock.y + G[e].height > xa + C && (G[e].textBlock.y = xa + C - G[e].height)));
                else
                    for (e = 0; e < N.length; e++)
                        0 == G[e].textBlock.text.length ? G[e].isDirty = !0 : (a = N[e],
                        b = a.height,
                        c = G[e].height,
                        d = G[e].width,
                        b >= c ? (b = e != da ? (a.x4 + a.x3) / 2 - d / 2 : (a.x5 + a.x4) / 2 - d / 2,
                        c = e != da ? (a.y1 + a.y3) / 2 - c / 2 : (a.y1 + a.y4) / 2 - c / 2,
                        G[e].textBlock.x = b,
                        G[e].textBlock.y = c) : G[e].isDirty = !0)
            }
            function h() {
                function a(b, c) {
                    var d;
                    if (0 > b || b >= G.length)
                        return 0;
                    var e, f = G[b].textBlock;
                    if (0 > c) {
                        c *= -1;
                        e = m(b);
                        d = n(e, b);
                        if (d >= c)
                            return f.y -= c,
                            c;
                        if (0 == b)
                            return 0 < d && (f.y -= d),
                            d;
                        d += a(e, -(c - d));
                        0 < d && (f.y -= d);
                        return d
                    }
                    e = q(b);
                    d = n(b, e);
                    if (d >= c)
                        return f.y += c,
                        c;
                    if (b == N.length - 1)
                        return 0 < d && (f.y += d),
                        d;
                    d += a(e, c - d);
                    0 < d && (f.y += d);
                    return d
                }
                function b() {
                    var a, d, e, f, g = 0, h;
                    f = (P - Z + 2 * C) / t;
                    h = t;
                    for (var k, p = 1; p < h; p++) {
                        e = p * f;
                        for (var l = G.length - 1; 0 <= l; l--)
                            !G[l].isDirty && (G[l].textBlock.y < e && G[l].textBlock.y + G[l].height > e) && (k = q(l),
                            !(k >= G.length - 1) && G[l].textBlock.y + G[l].height + ea > G[k].textBlock.y && (G[l].textBlock.y = G[l].textBlock.y + G[l].height - e > e - G[l].textBlock.y ? e + 1 : e - G[l].height - 1))
                    }
                    for (k = N.length - 1; 0 < k; k--)
                        if (!G[k].isDirty) {
                            e = m(k);
                            if (0 > e && (e = 0,
                            G[e].isDirty))
                                break;
                            if (G[k].textBlock.y < G[e].textBlock.y + G[e].height) {
                                d = d || k;
                                f = k;
                                for (h = 0; G[f].textBlock.y < G[e].textBlock.y + G[e].height + ea; ) {
                                    a = a || G[f].textBlock.y + G[f].height;
                                    h += G[f].height;
                                    h += ea;
                                    f = e;
                                    if (0 >= f) {
                                        f = 0;
                                        h += G[f].height;
                                        break
                                    }
                                    e = m(f);
                                    if (0 > e) {
                                        f = 0;
                                        h += G[f].height;
                                        break
                                    }
                                }
                                if (f != k) {
                                    g = G[f].textBlock.y;
                                    a -= g;
                                    a = h - a;
                                    g = c(a, d, f);
                                    break
                                }
                            }
                        }
                    return g
                }
                function c(a, b, d) {
                    var e = []
                      , f = 0
                      , g = 0;
                    for (a = Math.abs(a); d <= b; d++)
                        e.push(N[d]);
                    e.sort(function(a, b) {
                        return a.height - b.height
                    });
                    for (d = 0; d < e.length; d++)
                        if (b = e[d],
                        f < a)
                            g++,
                            f += G[b.id].height + ea,
                            G[b.id].textBlock.text = "",
                            G[b.id].indexLabelText = "",
                            G[b.id].isDirty = !0,
                            G[b.id].textBlock.measureText();
                        else
                            break;
                    return g
                }
                for (var d, e, f, g, k, p, t = 1, l = 0; l < 2 * t; l++) {
                    for (var r = G.length - 1; 0 <= r && !(0 <= m(r) && m(r),
                    f = G[r],
                    g = f.textBlock,
                    p = (k = q(r) < N.length ? G[q(r)] : null) ? k.textBlock : null,
                    d = +f.height.toFixed(6),
                    e = +g.y.toFixed(6),
                    !f.isDirty && (k && e + d + ea > +p.y.toFixed(6)) && (d = g.y + d + ea - p.y,
                    e = a(r, -d),
                    e < d && (0 < e && (d -= e),
                    e = a(q(r), d),
                    e != d))); r--)
                        ;
                    b()
                }
            }
            function n(a, b) {
                return (b < N.length ? G[b].textBlock.y : r.reversed ? R + C : xa + C) - (0 > a ? r.reversed ? xa - C : R - C : G[a].textBlock.y + G[a].height + ea)
            }
            function u(a, b, c) {
                var d, f, g, h = [], m = C, q = [];
                -1 !== b && (0 <= W.indexOf(b) ? (f = W.indexOf(b),
                W.splice(f, 1)) : (W.push(b),
                W = W.sort(function(a, b) {
                    return a - b
                })));
                if (0 === W.length)
                    h = ia;
                else {
                    f = C * (1 != W.length || 0 != W[0] && W[0] != N.length - 1 ? 2 : 1) / k();
                    for (var t = 0; t < N.length; t++) {
                        if (1 == W.length && 0 == W[0]) {
                            if (0 === t) {
                                h.push(ia[t]);
                                d = m;
                                continue
                            }
                        } else
                            0 === t && (d = -1 * m);
                        h.push(ia[t] + d);
                        if (0 <= W.indexOf(t) || t < N.length && 0 <= W.indexOf(t + 1))
                            d += f
                    }
                }
                g = function() {
                    for (var a = [], b = 0; b < N.length; b++)
                        a.push(h[b] - N[b].y1);
                    return a
                }();
                var l = {
                    startTime: (new Date).getTime(),
                    duration: c || 500,
                    easingFunction: function(a, b, c, d) {
                        return M.easing.easeOutQuart(a, b, c, d)
                    },
                    changeSection: function(a) {
                        for (var b, c, d = 0; d < N.length; d++)
                            b = g[d],
                            c = N[d],
                            b *= a,
                            "undefined" === typeof q[d] && (q[d] = 0),
                            0 > q && (q *= -1),
                            c.y1 += b - q[d],
                            c.y2 += b - q[d],
                            c.y3 += b - q[d],
                            c.y4 += b - q[d],
                            c.y5 && (c.y5 += b - q[d],
                            c.y6 += b - q[d]),
                            q[d] = b
                    }
                };
                a._animator.animate(0, c, function(c) {
                    var d = a.plotArea.ctx || a.ctx;
                    ha = !0;
                    d.clearRect(v.x1, v.y1, v.x2 - v.x1, v.y2 - v.y1);
                    d.fillStyle = a.backgroundColor;
                    d.fillRect(v.x1, v.y1, v.width, v.height);
                    l.changeSection(c, b);
                    var f = {};
                    f.dataSeries = r;
                    f.dataPoint = r.reversed ? r.dataPoints[x.length - 1 - b] : r.dataPoints[b];
                    f.index = r.reversed ? x.length - 1 - b : b;
                    a.toolTip.highlightObjects([f]);
                    for (f = 0; f < N.length; f++)
                        sa(d, N[f], r.fillOpacity);
                    y(d);
                    K && ("inside" !== r.indexLabelPlacement ? p(d) : e(),
                    A(d));
                    1 <= c && (ha = !1)
                }, null, M.easing.easeOutQuart)
            }
            function k() {
                for (var a = 0, b = 0; b < N.length - 1; b++)
                    (0 <= W.indexOf(b) || 0 <= W.indexOf(b + 1)) && a++;
                return a
            }
            function p(a) {
                for (var b, c, d, e, g = 0; g < N.length; g++)
                    e = 1 === G[g].lineThickness % 2 ? 0.5 : 0,
                    c = ((N[g].y2 + N[g].y4) / 2 << 0) + e,
                    b = f(c).x2 - 1,
                    isNaN(b) && (Math.round(N[g].x1) === Math.round(N[g].x4) && Math.round(N[g].x2) === Math.round(N[g].x3)) && (b = N[g].x2),
                    d = G[g].textBlock.x,
                    e = (G[g].textBlock.y + G[g].height / 2 << 0) + e,
                    G[g].isDirty || 0 == G[g].lineThickness || (a.strokeStyle = G[g].lineColor,
                    a.lineWidth = G[g].lineThickness,
                    a.setLineDash && a.setLineDash(J(G[g].lineDashType, G[g].lineThickness)),
                    a.beginPath(),
                    a.moveTo(b, c),
                    a.lineTo(d, e),
                    a.stroke())
            }
            function m(a) {
                for (a -= 1; -1 <= a && -1 != a && G[a].isDirty; a--)
                    ;
                return a
            }
            function q(a) {
                for (a += 1; a <= N.length && a != N.length && G[a].isDirty; a++)
                    ;
                return a
            }
            function f(a) {
                for (var b, c = 0; c < x.length; c++)
                    if (N[c].y1 < a && N[c].y4 > a) {
                        b = N[c];
                        break
                    }
                return b ? (a = b.y6 ? a > b.y6 ? b.x3 + (b.x4 - b.x3) / (b.y4 - b.y3) * (a - b.y3) : b.x2 + (b.x3 - b.x2) / (b.y3 - b.y2) * (a - b.y2) : b.x2 + (b.x3 - b.x2) / (b.y3 - b.y2) * (a - b.y2),
                {
                    x1: a,
                    x2: a
                }) : -1
            }
            function A(a) {
                for (var b = 0; b < N.length; b++)
                    G[b].isDirty || (a && (G[b].textBlock.ctx = a),
                    G[b].textBlock.y += G[b].textBlock._lineHeight / 2,
                    G[b].textBlock.render(!0),
                    G[b].textBlock.y -= G[b].textBlock._lineHeight / 2)
            }
            function y(a) {
                z.plotArea.layoutManager.reset();
                a.roundRect || za(a);
                z.title && (z.title.dockInsidePlotArea || "center" === z.title.horizontalAlign && "center" === z.title.verticalAlign) && (z.title.ctx = a,
                z.title.render());
                if (z.subtitles)
                    for (var b = 0; b < z.subtitles.length; b++) {
                        var c = z.subtitles[b];
                        if (c.dockInsidePlotArea || "center" === c.horizontalAlign && "center" === c.verticalAlign)
                            z.subtitles.ctx = a,
                            c.render()
                    }
                z.legend && (z.legend.dockInsidePlotArea || "center" === z.legend.horizontalAlign && "center" === z.legend.verticalAlign) && (z.legend.ctx = a,
                z.legend.setLayout(),
                z.legend.render());
                va.fNg && va.fNg(z)
            }
            var z = this;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                for (var r = this.data[a.dataSeriesIndexes[0]], x = r.dataPoints, v = this.plotArea, C = 0.025 * v.width, B = 0.01 * v.width, E = 0, D = v.height - 2 * C - 4, H = Math.min(v.width - 2 * B, 2.8 * v.height), K = !1, O = 0; O < x.length; O++)
                    if (!K && ("undefined" !== typeof x[O].indexLabel && null !== x[O].indexLabel && 0 < x[O].indexLabel.toString().length) && (K = !0),
                    !K && ("undefined" !== typeof x[O].label && null !== x[O].label && 0 < x[O].label.toString().length) && (K = !0),
                    !K && "function" === typeof r.indexLabelFormatter || "function" === typeof x[O].indexLabelFormatter)
                        K = !0;
                K = K || "undefined" !== typeof r.indexLabel && null !== r.indexLabel && 0 < r.indexLabel.toString().length;
                "inside" !== r.indexLabelPlacement && K || (B = (v.width - 0.75 * H) / 2);
                var O = v.x1 + B
                  , L = v.x2 - B
                  , Z = v.y1 + C + 2
                  , P = v.y2 - C - 2
                  , Q = a.targetCanvasCtx || this.plotArea.ctx || this.ctx;
                if (0 != r.length && (r.dataPoints && r.visible) && 0 !== x.length) {
                    var ca, F;
                    a = 75 * H / 100;
                    var V = 30 * (L - a) / 100;
                    "funnel" === r.type ? (ca = l(r.options.neckHeight) ? 0.35 * D : r.neckHeight,
                    F = l(r.options.neckWidth) ? 0.25 * a : r.neckWidth,
                    "string" === typeof ca && ca.match(/%$/) ? (ca = parseInt(ca),
                    ca = ca * D / 100) : ca = parseInt(ca),
                    "string" === typeof F && F.match(/%$/) ? (F = parseInt(F),
                    F = F * a / 100) : F = parseInt(F),
                    ca > D ? ca = D : 0 >= ca && (ca = 0),
                    F > a ? F = a - 0.5 : 0 >= F && (F = 0)) : "pyramid" === r.type && (F = ca = 0,
                    r.reversed = r.reversed ? !1 : !0);
                    var B = O + a / 2
                      , U = O
                      , S = O + a
                      , R = r.reversed ? P : Z
                      , $ = B - F / 2
                      , X = B + F / 2
                      , ba = r.reversed ? Z + ca : P - ca
                      , xa = r.reversed ? Z : P;
                    F = r.valueRepresents = r.valueRepresents ? r.valueRepresents : "height";
                    O = [];
                    a = [];
                    var N = [], B = [], T = Z, da, Y = (ba - R) / ($ - U), fa = -Y, H = "area" === F ? b() : g();
                    if (-1 !== H) {
                        if (r.reversed)
                            for (B.push(T),
                            F = H.length - 1; 0 < F; F--)
                                T += H[F],
                                B.push(Math.round(T));
                        else
                            for (F = 0; F < H.length; F++)
                                T += H[F],
                                B.push(Math.round(T));
                        if (r.reversed)
                            for (F = 0; F < H.length; F++)
                                B[F] < ba ? (O.push($),
                                a.push(X),
                                da = F) : (O.push((B[F] - R + Y * U) / Y),
                                a.push((B[F] - R + fa * S) / fa));
                        else
                            for (F = 0; F < H.length; F++)
                                B[F] < ba ? (O.push((B[F] - R + Y * U) / Y),
                                a.push((B[F] - R + fa * S) / fa),
                                da = F) : (O.push($),
                                a.push(X));
                        for (F = 0; F < H.length - 1; F++)
                            T = r.reversed ? x[x.length - 1 - F].color ? x[x.length - 1 - F].color : r._colorSet[(x.length - 1 - F) % r._colorSet.length] : x[F].color ? x[F].color : r._colorSet[F % r._colorSet.length],
                            F === da ? N.push({
                                x1: O[F],
                                y1: B[F],
                                x2: a[F],
                                y2: B[F],
                                x3: X,
                                y3: ba,
                                x4: a[F + 1],
                                y4: B[F + 1],
                                x5: O[F + 1],
                                y5: B[F + 1],
                                x6: $,
                                y6: ba,
                                id: F,
                                height: B[F + 1] - B[F],
                                color: T
                            }) : N.push({
                                x1: O[F],
                                y1: B[F],
                                x2: a[F],
                                y2: B[F],
                                x3: a[F + 1],
                                y3: B[F + 1],
                                x4: O[F + 1],
                                y4: B[F + 1],
                                id: F,
                                height: B[F + 1] - B[F],
                                color: T
                            }),
                            r.dataPointEOs[F] && N[F] && (r.dataPointEOs[F].sectionsofFunnel = N[F]);
                        var ea = 2
                          , G = []
                          , ha = !1
                          , W = []
                          , ia = []
                          , O = !1;
                        a = a = 0;
                        Da(W);
                        for (F = 0; F < x.length; F++)
                            x[F].exploded && (O = !0,
                            r.reversed ? W.push(x.length - 1 - F) : W.push(F));
                        Q.clearRect(v.x1, v.y1, v.width, v.height);
                        Q.fillStyle = z.backgroundColor;
                        Q.fillRect(v.x1, v.y1, v.width, v.height);
                        if (K && r.visible && (c(),
                        e(),
                        "inside" !== r.indexLabelPlacement)) {
                            d();
                            h();
                            for (F = 0; F < x.length; F++)
                                G[F].isDirty || (a = G[F].textBlock.x + G[F].width,
                                a = (L - a) / 2,
                                0 == F && (E = a),
                                E > a && (E = a));
                            for (F = 0; F < N.length; F++)
                                N[F].x1 += E,
                                N[F].x2 += E,
                                N[F].x3 += E,
                                N[F].x4 += E,
                                N[F].x5 && (N[F].x5 += E,
                                N[F].x6 += E),
                                G[F].textBlock.x += E
                        }
                        for (F = 0; F < N.length; F++)
                            E = N[F],
                            sa(Q, E, r.fillOpacity),
                            ia.push(E.y1);
                        y(Q);
                        K && r.visible && ("inside" === r.indexLabelPlacement || z.animationEnabled || p(Q),
                        z.animationEnabled || A());
                        if (!K)
                            for (F = 0; F < x.length; F++)
                                E = r.dataPointIds[F],
                                a = {
                                    id: E,
                                    objectType: "dataPoint",
                                    dataPointIndex: F,
                                    dataSeriesIndex: 0,
                                    funnelSection: N[r.reversed ? x.length - 1 - F : F]
                                },
                                z._eventManager.objectMap[E] = a;
                        !z.animationEnabled && O ? u(z, -1, 0) : z.animationEnabled && !z.animatedRender && u(z, -1, 0);
                        this.funnelPyramidClickHandler = function(a) {
                            var b = -1;
                            if (!ha && !z.isAnimating && (l(a.dataSeries.explodeOnClick) || a.dataSeries.explodeOnClick) && (b = r.reversed ? x.length - 1 - a.dataPointIndex : a.dataPointIndex,
                            0 <= b)) {
                                a = b;
                                if ("funnel" === r.type || "pyramid" === r.type)
                                    r.reversed ? x[x.length - 1 - a].exploded = x[x.length - 1 - a].exploded ? !1 : !0 : x[a].exploded = x[a].exploded ? !1 : !0;
                                u(z, b, 500)
                            }
                        }
                        ;
                        return {
                            source: Q,
                            dest: this.plotArea.ctx,
                            animationCallback: function(a, b) {
                                M.fadeInAnimation(a, b);
                                1 <= a && (u(z, -1, 500),
                                y(z.plotArea.ctx || z.ctx))
                            },
                            easingFunction: M.easing.easeInQuad,
                            animationBase: 0
                        }
                    }
                }
            }
        }
        ;
        n.prototype.requestAnimFrame = function() {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
                window.setTimeout(a, 1E3 / 60)
            }
        }();
        n.prototype.cancelRequestAnimFrame = window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
        n.prototype.set = function(a, g, b) {
            b = "undefined" === typeof b ? !0 : b;
            "options" === a ? (this.options = g,
            b && this.render()) : n.base.set.call(this, a, g, b)
        }
        ;
        n.prototype.exportChart = function(a) {
            a = "undefined" === typeof a ? {} : a;
            var g = a.format ? a.format : "png"
              , b = a.fileName ? a.fileName : this.exportFileName;
            if (a.toDataURL)
                return this.canvas.toDataURL("image/" + g);
            var c = this.canvas;
            if (c && g && b) {
                b = b + "." + g;
                a = "image/" + g;
                var c = c.toDataURL(a)
                  , d = !1
                  , e = document.createElement("a");
                e.download = b;
                e.href = c;
                if ("undefined" !== typeof Blob && new Blob) {
                    for (var h = c.replace(/^data:[a-z\/]*;base64,/, ""), h = atob(h), l = new ArrayBuffer(h.length), l = new Uint8Array(l), n = 0; n < h.length; n++)
                        l[n] = h.charCodeAt(n);
                    g = new Blob([l.buffer],{
                        type: "image/" + g
                    });
                    try {
                        window.navigator.msSaveBlob(g, b),
                        d = !0
                    } catch (k) {
                        e.dataset.downloadurl = [a, e.download, e.href].join(":"),
                        e.href = window.URL.createObjectURL(g)
                    }
                }
                if (!d)
                    try {
                        event = document.createEvent("MouseEvents"),
                        event.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null),
                        e.dispatchEvent ? e.dispatchEvent(event) : e.fireEvent && e.fireEvent("onclick")
                    } catch (p) {
                        g = window.open(),
                        g.document.write("<img src='" + c + "'></img><div>Please right click on the image and save it to your device</div>"),
                        g.document.close()
                    }
            }
        }
        ;
        n.prototype.print = function() {
            var a = this.exportChart({
                toDataURL: !0
            })
              , g = document.createElement("iframe");
            g.setAttribute("class", "canvasjs-chart-print-frame");
            S(g, {
                position: "absolute",
                width: "100%",
                border: "0px",
                margin: "0px 0px 0px 0px",
                padding: "0px 0px 0px 0px"
            });
            g.style.height = this.height + "px";
            this._canvasJSContainer.appendChild(g);
            var b = this
              , c = g.contentWindow || g.contentDocument.document || g.contentDocument;
            c.document.open();
            c.document.write('<!DOCTYPE HTML>\n<html><body><img src="' + a + '"/><body/></html>');
            c.document.body && c.document.body.style && (c.document.body.style.margin = "0px 0px 0px 0px",
            c.document.body.style.padding = "0px 0px 0px 0px");
            c.document.close();
            setTimeout(function() {
                c.focus();
                c.print();
                setTimeout(function() {
                    b._canvasJSContainer.removeChild(g)
                }, 1E3)
            }, 500)
        }
        ;
        n.prototype.getPercentAndTotal = function(a, g) {
            var b = null
              , c = null
              , d = b = null;
            if (0 <= a.type.indexOf("stacked"))
                c = 0,
                b = g.x.getTime ? g.x.getTime() : g.x,
                b in a.plotUnit.yTotals && (c = a.plotUnit.yTotals[b],
                b = a.plotUnit.yAbsTotals[b],
                d = isNaN(g.y) ? 0 : 0 === b ? 0 : 100 * (g.y / b));
            else if ("pie" === a.type || "doughnut" === a.type || "funnel" === a.type || "pyramid" === a.type) {
                for (b = c = 0; b < a.dataPoints.length; b++)
                    isNaN(a.dataPoints[b].y) || (c += a.dataPoints[b].y);
                d = isNaN(g.y) ? 0 : 100 * (g.y / c)
            }
            return {
                percent: d,
                total: c
            }
        }
        ;
        n.prototype.replaceKeywordsWithValue = function(a, g, b, c, d) {
            var e = this;
            d = "undefined" === typeof d ? 0 : d;
            if ((0 <= b.type.indexOf("stacked") || "pie" === b.type || "doughnut" === b.type || "funnel" === b.type || "pyramid" === b.type) && (0 <= a.indexOf("#percent") || 0 <= a.indexOf("#total"))) {
                var h = "#percent"
                  , l = "#total"
                  , n = this.getPercentAndTotal(b, g)
                  , l = isNaN(n.total) ? l : n.total
                  , h = isNaN(n.percent) ? h : n.percent;
                do {
                    n = "";
                    if (b.percentFormatString)
                        n = b.percentFormatString;
                    else {
                        var n = "#,##0."
                          , k = Math.max(Math.ceil(Math.log(1 / Math.abs(h)) / Math.LN10), 2);
                        if (isNaN(k) || !isFinite(k))
                            k = 2;
                        for (var p = 0; p < k; p++)
                            n += "#";
                        b.percentFormatString = n
                    }
                    a = a.replace("#percent", fa(h, n, e._cultureInfo));
                    a = a.replace("#total", fa(l, b.yValueFormatString ? b.yValueFormatString : "#,##0.########", e._cultureInfo))
                } while (0 <= a.indexOf("#percent") || 0 <= a.indexOf("#total"))
            }
            return a.replace(/\{.*?\}|"[^"]*"|'[^']*'/g, function(a) {
                if ('"' === a[0] && '"' === a[a.length - 1] || "'" === a[0] && "'" === a[a.length - 1])
                    return a.slice(1, a.length - 1);
                a = Ga(a.slice(1, a.length - 1));
                a = a.replace("#index", d);
                var h = null;
                try {
                    var f = a.match(/(.*?)\s*\[\s*(.*?)\s*\]/);
                    f && 0 < f.length && (h = Ga(f[2]),
                    a = Ga(f[1]))
                } catch (k) {}
                f = null;
                if ("color" === a)
                    return "waterfall" === b.type ? g.color ? g.color : 0 < g.y ? b.risingColor : b.fallingColor : "error" === b.type ? b.color ? b.color : b._colorSet[h % b._colorSet.length] : g.color ? g.color : b.color ? b.color : b._colorSet[c % b._colorSet.length];
                if (g.hasOwnProperty(a))
                    f = g;
                else if (b.hasOwnProperty(a))
                    f = b;
                else
                    return "";
                f = f[a];
                null !== h && (f = f[h]);
                return "x" === a ? (b.axisX && "dateTime" === b.axisX.valueType || "dateTime" === b.xValueType || g.x && g.x.getTime) && !b.axisX.logarithmic ? Ca(f, g.xValueFormatString ? g.xValueFormatString : b.xValueFormatString ? b.xValueFormatString : b.xValueFormatString = e.axisX && e.axisX.autoValueFormatString ? e.axisX.autoValueFormatString : "DD MMM YY", e._cultureInfo) : fa(f, g.xValueFormatString ? g.xValueFormatString : b.xValueFormatString ? b.xValueFormatString : b.xValueFormatString = "#,##0.########", e._cultureInfo) : "y" === a ? fa(f, g.yValueFormatString ? g.yValueFormatString : b.yValueFormatString ? b.yValueFormatString : b.yValueFormatString = "#,##0.########", e._cultureInfo) : "z" === a ? fa(f, g.zValueFormatString ? g.zValueFormatString : b.zValueFormatString ? b.zValueFormatString : b.zValueFormatString = "#,##0.########", e._cultureInfo) : f
            })
        }
        ;
        qa(D, P);
        D.prototype.setLayout = function() {
            var a = this.dockInsidePlotArea ? this.chart.plotArea : this.chart
              , g = a.layoutManager.getFreeSpace()
              , b = null
              , c = 0
              , d = 0
              , e = 0
              , h = 0
              , n = this.markerMargin = this.chart.options.legend && !l(this.chart.options.legend.markerMargin) ? this.chart.options.legend.markerMargin : 0.3 * this.fontSize;
            this.height = 0;
            var u = []
              , k = [];
            if ("top" === this.verticalAlign || "bottom" === this.verticalAlign)
                this.orientation = "horizontal",
                b = this.verticalAlign,
                e = this.maxWidth = null !== this.maxWidth ? this.maxWidth : g.width,
                h = this.maxHeight = null !== this.maxHeight ? this.maxHeight : 0.5 * g.height;
            else if ("center" === this.verticalAlign) {
                this.orientation = "vertical";
                if ("left" === this.horizontalAlign || "center" === this.horizontalAlign || "right" === this.horizontalAlign)
                    b = this.horizontalAlign;
                e = this.maxWidth = null !== this.maxWidth ? this.maxWidth : 0.5 * g.width;
                h = this.maxHeight = null !== this.maxHeight ? this.maxHeight : g.height
            }
            this.errorMarkerColor = [];
            for (var p = 0; p < this.dataSeries.length; p++) {
                var m = this.dataSeries[p];
                if (m.dataPoints && m.dataPoints.length) {
                    if ("pie" !== m.type && "doughnut" !== m.type && "funnel" !== m.type && "pyramid" !== m.type) {
                        var q = m.legendMarkerType = m.legendMarkerType ? m.legendMarkerType : "line" !== m.type && "stepLine" !== m.type && "spline" !== m.type && "scatter" !== m.type && "bubble" !== m.type || !m.markerType ? "error" === m.type && m._linkedSeries ? m._linkedSeries.legendMarkerType ? m._linkedSeries.legendMarkerType : Q.getDefaultLegendMarker(m._linkedSeries.type) : Q.getDefaultLegendMarker(m.type) : m.markerType
                          , f = m.legendText ? m.legendText : this.itemTextFormatter ? this.itemTextFormatter({
                            chart: this.chart,
                            legend: this.options,
                            dataSeries: m,
                            dataPoint: null
                        }) : m.name
                          , s = m.legendMarkerColor = m.legendMarkerColor ? m.legendMarkerColor : m.markerColor ? m.markerColor : "error" === m.type ? l(m.whiskerColor) ? m._colorSet[0] : m.whiskerColor : m._colorSet[0]
                          , y = m.markerSize || "line" !== m.type && "stepLine" !== m.type && "spline" !== m.type ? 0.75 * this.lineHeight : 0
                          , z = m.legendMarkerBorderColor ? m.legendMarkerBorderColor : m.markerBorderColor
                          , r = m.legendMarkerBorderThickness ? m.legendMarkerBorderThickness : m.markerBorderThickness ? Math.max(1, Math.round(0.2 * y)) : 0;
                        "error" === m.type && this.errorMarkerColor.push(s);
                        f = m.legendText = this.chart.replaceKeywordsWithValue(f, m.dataPoints[0], m, p);
                        q = {
                            markerType: q,
                            markerColor: s,
                            text: f,
                            textBlock: null,
                            chartType: m.type,
                            markerSize: y,
                            lineColor: m._colorSet[0],
                            dataSeriesIndex: m.index,
                            dataPointIndex: null,
                            markerBorderColor: z,
                            markerBorderThickness: r
                        };
                        u.push(q)
                    } else
                        for (var x = 0; x < m.dataPoints.length; x++) {
                            var v = m.dataPoints[x]
                              , q = v.legendMarkerType ? v.legendMarkerType : m.legendMarkerType ? m.legendMarkerType : Q.getDefaultLegendMarker(m.type)
                              , f = v.legendText ? v.legendText : v.name ? v.name : m.legendText ? m.legendText : this.itemTextFormatter ? this.itemTextFormatter({
                                chart: this.chart,
                                legend: this.options,
                                dataSeries: m,
                                dataPoint: v
                            }) : v.name ? v.name : "DataPoint: " + (x + 1)
                              , s = v.legendMarkerColor ? v.legendMarkerColor : m.legendMarkerColor ? m.legendMarkerColor : v.color ? v.color : m.color ? m.color : m._colorSet[x % m._colorSet.length]
                              , y = 0.75 * this.lineHeight
                              , z = v.legendMarkerBorderColor ? v.legendMarkerBorderColor : m.legendMarkerBorderColor ? m.legendMarkerBorderColor : v.markerBorderColor ? v.markerBorderColor : m.markerBorderColor
                              , r = v.legendMarkerBorderThickness ? v.legendMarkerBorderThickness : m.legendMarkerBorderThickness ? m.legendMarkerBorderThickness : v.markerBorderThickness || m.markerBorderThickness ? Math.max(1, Math.round(0.2 * y)) : 0
                              , f = this.chart.replaceKeywordsWithValue(f, v, m, x)
                              , q = {
                                markerType: q,
                                markerColor: s,
                                text: f,
                                textBlock: null,
                                chartType: m.type,
                                markerSize: y,
                                dataSeriesIndex: p,
                                dataPointIndex: x,
                                markerBorderColor: z,
                                markerBorderThickness: r
                            };
                            (v.showInLegend || m.showInLegend && !1 !== v.showInLegend) && u.push(q)
                        }
                    l(m.legendText) && (m.legendText = m.name)
                }
            }
            !0 === this.reversed && u.reverse();
            if (0 < u.length) {
                m = null;
                f = v = x = 0;
                v = null !== this.itemWidth ? null !== this.itemMaxWidth ? Math.min(this.itemWidth, this.itemMaxWidth, e) : this.itemMaxWidth = Math.min(this.itemWidth, e) : null !== this.itemMaxWidth ? Math.min(this.itemMaxWidth, e) : this.itemMaxWidth = e;
                y = 0 === y ? 0.75 * this.lineHeight : y;
                v = (this.itemMaxWidth ? this.itemMaxWidth : v) - (y + n);
                for (p = 0; p < u.length; p++) {
                    q = u[p];
                    s = v;
                    if ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType)
                        s -= 2 * 0.1 * this.lineHeight;
                    if (!(0 >= h || "undefined" === typeof h || 0 >= s || "undefined" === typeof s))
                        if ("horizontal" === this.orientation) {
                            q.textBlock = new ja(this.ctx,{
                                x: 0,
                                y: 0,
                                maxWidth: s,
                                maxHeight: this.itemWrap ? h : this.lineHeight,
                                angle: 0,
                                text: q.text,
                                textAlign: this.itemTextAlign,
                                fontSize: this.fontSize,
                                fontFamily: this.fontFamily,
                                fontWeight: this.fontWeight,
                                fontColor: this.fontColor,
                                fontStyle: this.fontStyle,
                                textBaseline: "middle"
                            });
                            q.textBlock.measureText();
                            null !== this.itemWidth && (q.textBlock.width = this.itemWidth - (y + n + ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType ? 2 * 0.1 * this.lineHeight : 0)));
                            if (!m || m.width + Math.round(q.textBlock.width + y + n + (0 === m.width ? 0 : this.horizontalSpacing) + ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType ? 2 * 0.1 * this.lineHeight : 0)) > e)
                                m = {
                                    items: [],
                                    width: 0
                                },
                                k.push(m),
                                this.height += f,
                                f = 0;
                            f = Math.max(f, q.textBlock.height ? q.textBlock.height : this.lineHeight);
                            q.textBlock.x = m.width;
                            q.textBlock.y = 0;
                            m.width += Math.round(q.textBlock.width + y + n + (0 === m.width ? 0 : this.horizontalSpacing) + ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType ? 2 * 0.1 * this.lineHeight : 0));
                            m.items.push(q);
                            this.width = Math.max(m.width, this.width)
                        } else
                            q.textBlock = new ja(this.ctx,{
                                x: 0,
                                y: 0,
                                maxWidth: v,
                                maxHeight: !0 === this.itemWrap ? h : 1.5 * this.fontSize,
                                angle: 0,
                                text: q.text,
                                textAlign: this.itemTextAlign,
                                fontSize: this.fontSize,
                                fontFamily: this.fontFamily,
                                fontWeight: this.fontWeight,
                                fontColor: this.fontColor,
                                fontStyle: this.fontStyle,
                                textBaseline: "middle"
                            }),
                            q.textBlock.measureText(),
                            null !== this.itemWidth && (q.textBlock.width = this.itemWidth - (y + n + ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType ? 2 * 0.1 * this.lineHeight : 0))),
                            this.height < h - this.lineHeight ? (m = {
                                items: [],
                                width: 0
                            },
                            k.push(m)) : (m = k[x],
                            x = (x + 1) % k.length),
                            m && (this.height += q.textBlock.height ? q.textBlock.height : this.lineHeight,
                            q.textBlock.x = m.width,
                            q.textBlock.y = 0,
                            m.width += Math.round(q.textBlock.width + y + n + (0 === m.width ? 0 : this.horizontalSpacing) + ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType ? 2 * 0.1 * this.lineHeight : 0)),
                            m.items.push(q),
                            this.width = Math.max(m.width, this.width))
                }
                this.height = !1 === this.itemWrap ? k.length * this.lineHeight : this.height + f;
                this.height = Math.min(h, this.height);
                this.width = Math.min(e, this.width)
            }
            "top" === this.verticalAlign ? (d = "left" === this.horizontalAlign ? g.x1 : "right" === this.horizontalAlign ? g.x2 - this.width : g.x1 + g.width / 2 - this.width / 2,
            c = g.y1) : "center" === this.verticalAlign ? (d = "left" === this.horizontalAlign ? g.x1 : "right" === this.horizontalAlign ? g.x2 - this.width : g.x1 + g.width / 2 - this.width / 2,
            c = g.y1 + g.height / 2 - this.height / 2) : "bottom" === this.verticalAlign && (d = "left" === this.horizontalAlign ? g.x1 : "right" === this.horizontalAlign ? g.x2 - this.width : g.x1 + g.width / 2 - this.width / 2,
            c = g.y2 - this.height);
            this.items = u;
            for (p = 0; p < this.items.length; p++)
                q = u[p],
                q.id = ++this.chart._eventManager.lastObjectId,
                this.chart._eventManager.objectMap[q.id] = {
                    id: q.id,
                    objectType: "legendItem",
                    legendItemIndex: p,
                    dataSeriesIndex: q.dataSeriesIndex,
                    dataPointIndex: q.dataPointIndex
                };
            this.markerSize = y;
            this.rows = k;
            0 < u.length && a.layoutManager.registerSpace(b, {
                width: this.width + 2 + 2,
                height: this.height + 5 + 5
            });
            this.bounds = {
                x1: d,
                y1: c,
                x2: d + this.width,
                y2: c + this.height
            }
        }
        ;
        D.prototype.render = function() {
            var a = this.bounds.x1
              , g = this.bounds.y1
              , b = this.markerMargin
              , c = this.maxWidth
              , d = this.maxHeight
              , e = this.markerSize
              , h = this.rows;
            (0 < this.borderThickness && this.borderColor || this.backgroundColor) && this.ctx.roundRect(a, g, this.width, this.height, this.cornerRadius, this.borderThickness, this.backgroundColor, this.borderColor);
            for (var l = 0, n = 0; n < h.length; n++) {
                for (var k = h[n], p = 0, m = 0; m < k.items.length; m++) {
                    var q = k.items[m]
                      , f = q.textBlock.x + a + (0 === m ? 0.2 * e : this.horizontalSpacing)
                      , u = g + l
                      , s = f;
                    this.chart.data[q.dataSeriesIndex].visible || (this.ctx.globalAlpha = 0.5);
                    this.ctx.save();
                    this.ctx.beginPath();
                    this.ctx.rect(a, g, c, Math.max(d - d % this.lineHeight, 0));
                    this.ctx.clip();
                    if ("line" === q.chartType || "stepLine" === q.chartType || "spline" === q.chartType)
                        this.ctx.strokeStyle = q.lineColor,
                        this.ctx.lineWidth = Math.ceil(this.lineHeight / 8),
                        this.ctx.beginPath(),
                        this.ctx.moveTo(f - 0.1 * this.lineHeight, u + this.lineHeight / 2),
                        this.ctx.lineTo(f + 0.85 * this.lineHeight, u + this.lineHeight / 2),
                        this.ctx.stroke(),
                        s -= 0.1 * this.lineHeight;
                    if ("error" === q.chartType) {
                        this.ctx.strokeStyle = this.errorMarkerColor[0];
                        this.ctx.lineWidth = e / 8;
                        this.ctx.beginPath();
                        var z = f - 0.08 * this.lineHeight + 0.1 * this.lineHeight
                          , r = u + 0.15 * this.lineHeight
                          , x = 0.7 * this.lineHeight
                          , v = x + 0.02 * this.lineHeight;
                        this.ctx.moveTo(z, r);
                        this.ctx.lineTo(z + x, r);
                        this.ctx.stroke();
                        this.ctx.beginPath();
                        this.ctx.moveTo(z + x / 2, r);
                        this.ctx.lineTo(z + x / 2, r + v);
                        this.ctx.stroke();
                        this.ctx.beginPath();
                        this.ctx.moveTo(z, r + v);
                        this.ctx.lineTo(z + x, r + v);
                        this.ctx.stroke();
                        this.errorMarkerColor.shift()
                    }
                    ba.drawMarker(f + e / 2, u + this.lineHeight / 2, this.ctx, q.markerType, "error" === q.chartType || "line" === q.chartType || "spline" === q.chartType ? q.markerSize / 2 : q.markerSize, q.markerColor, q.markerBorderColor, q.markerBorderThickness);
                    q.textBlock.x = f + b + e;
                    if ("line" === q.chartType || "stepLine" === q.chartType || "spline" === q.chartType)
                        q.textBlock.x += 0.1 * this.lineHeight;
                    q.textBlock.y = Math.round(u + this.lineHeight / 2);
                    q.textBlock.render(!0);
                    this.ctx.restore();
                    p = 0 < m ? Math.max(p, q.textBlock.height ? q.textBlock.height : this.lineHeight) : q.textBlock.height ? q.textBlock.height : this.lineHeight;
                    this.chart.data[q.dataSeriesIndex].visible || (this.ctx.globalAlpha = 1);
                    f = R(q.id);
                    this.ghostCtx.fillStyle = f;
                    this.ghostCtx.beginPath();
                    this.ghostCtx.fillRect(s, q.textBlock.y - this.lineHeight / 2, q.textBlock.x + q.textBlock.width - s, q.textBlock.height ? q.textBlock.height : this.lineHeight);
                    q.x1 = this.chart._eventManager.objectMap[q.id].x1 = s;
                    q.y1 = this.chart._eventManager.objectMap[q.id].y1 = q.textBlock.y - this.lineHeight / 2;
                    q.x2 = this.chart._eventManager.objectMap[q.id].x2 = q.textBlock.x + q.textBlock.width;
                    q.y2 = this.chart._eventManager.objectMap[q.id].y2 = q.textBlock.y + (q.textBlock.height ? q.textBlock.height : this.lineHeight) - this.lineHeight / 2
                }
                l += p
            }
        }
        ;
        qa(Q, P);
        Q.prototype.getDefaultAxisPlacement = function() {
            var a = this.type;
            if ("column" === a || "line" === a || "stepLine" === a || "spline" === a || "area" === a || "stepArea" === a || "splineArea" === a || "stackedColumn" === a || "stackedLine" === a || "bubble" === a || "scatter" === a || "stackedArea" === a || "stackedColumn100" === a || "stackedLine100" === a || "stackedArea100" === a || "candlestick" === a || "ohlc" === a || "rangeColumn" === a || "rangeArea" === a || "rangeSplineArea" === a || "boxAndWhisker" === a || "waterfall" === a)
                return "normal";
            if ("bar" === a || "stackedBar" === a || "stackedBar100" === a || "rangeBar" === a)
                return "xySwapped";
            if ("pie" === a || "doughnut" === a || "funnel" === a || "pyramid" === a)
                return "none";
            "error" !== a && window.console.log("Unknown Chart Type: " + a);
            return null
        }
        ;
        Q.getDefaultLegendMarker = function(a) {
            if ("column" === a || "stackedColumn" === a || "stackedLine" === a || "bar" === a || "stackedBar" === a || "stackedBar100" === a || "bubble" === a || "scatter" === a || "stackedColumn100" === a || "stackedLine100" === a || "stepArea" === a || "candlestick" === a || "ohlc" === a || "rangeColumn" === a || "rangeBar" === a || "rangeArea" === a || "rangeSplineArea" === a || "boxAndWhisker" === a || "waterfall" === a)
                return "square";
            if ("line" === a || "stepLine" === a || "spline" === a || "pie" === a || "doughnut" === a)
                return "circle";
            if ("area" === a || "splineArea" === a || "stackedArea" === a || "stackedArea100" === a || "funnel" === a || "pyramid" === a)
                return "triangle";
            if ("error" === a)
                return "none";
            window.console.log("Unknown Chart Type: " + a);
            return null
        }
        ;
        Q.prototype.getDataPointAtX = function(a, g, b) {
            if (!this.dataPoints || 0 === this.dataPoints.length)
                return null;
            var c = {
                dataPoint: null,
                distance: Infinity,
                index: NaN
            }
              , d = null
              , e = 0
              , h = 0
              , n = 1
              , u = Infinity
              , k = 0
              , p = 0
              , m = 0;
            "none" !== this.chart.plotInfo.axisPlacement && (this.axisX.logarithmic ? (m = Math.log(this.dataPoints[this.dataPoints.length - 1].x / this.dataPoints[0].x),
            m = 1 < m ? Math.min(Math.max((this.dataPoints.length - 1) / m * Math.log(a / this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0) : (m = this.dataPoints[this.dataPoints.length - 1].x - this.dataPoints[0].x,
            m = 0 < m ? Math.min(Math.max((this.dataPoints.length - 1) / m * (a - this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0));
            for (; ; ) {
                h = 0 < n ? m + e : m - e;
                if (0 <= h && h < this.dataPoints.length) {
                    var d = this.dataPoints[h]
                      , q = this.axisX && this.axisX.logarithmic ? d.x > a ? d.x / a : a / d.x : Math.abs(d.x - a);
                    q < c.distance && (l(b) || b && !l(d.y)) && (c.dataPoint = d,
                    c.distance = q,
                    c.index = h);
                    d = q;
                    d <= u ? u = d : 0 < n ? k++ : p++;
                    if (1E3 < k && 1E3 < p)
                        break
                } else if (0 > m - e && m + e >= this.dataPoints.length)
                    break;
                -1 === n ? (e++,
                n = 1) : n = -1
            }
            return g || (c.dataPoint.x.getTime ? c.dataPoint.x.getTime() : c.dataPoint.x) !== (a.getTime ? a.getTime() : a) ? g && null !== c.dataPoint ? c : null : c
        }
        ;
        Q.prototype.getDataPointAtXY = function(a, g, b) {
            if (!this.dataPoints || 0 === this.dataPoints.length || a < this.chart.plotArea.x1 || a > this.chart.plotArea.x2 || g < this.chart.plotArea.y1 || g > this.chart.plotArea.y2)
                return null;
            b = b || !1;
            var c = []
              , d = 0
              , e = 0
              , h = 1
              , n = !1
              , u = Infinity
              , k = 0
              , p = 0
              , m = 0;
            if ("none" !== this.chart.plotInfo.axisPlacement)
                if (m = (this.chart.axisX[0] ? this.chart.axisX[0] : this.chart.axisX2[0]).getXValueAt({
                    x: a,
                    y: g
                }),
                this.axisX.logarithmic)
                    var q = Math.log(this.dataPoints[this.dataPoints.length - 1].x / this.dataPoints[0].x)
                      , m = 1 < q ? Math.min(Math.max((this.dataPoints.length - 1) / q * Math.log(m / this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0;
                else
                    q = this.dataPoints[this.dataPoints.length - 1].x - this.dataPoints[0].x,
                    m = 0 < q ? Math.min(Math.max((this.dataPoints.length - 1) / q * (m - this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0;
            for (; ; ) {
                e = 0 < h ? m + d : m - d;
                if (0 <= e && e < this.dataPoints.length) {
                    var q = this.chart._eventManager.objectMap[this.dataPointIds[e]]
                      , f = this.dataPoints[e]
                      , s = null;
                    if (q) {
                        switch (this.type) {
                        case "column":
                        case "stackedColumn":
                        case "stackedColumn100":
                        case "bar":
                        case "stackedBar":
                        case "stackedBar100":
                        case "rangeColumn":
                        case "rangeBar":
                        case "waterfall":
                        case "error":
                            a >= q.x1 && (a <= q.x2 && g >= q.y1 && g <= q.y2) && (c.push({
                                dataPoint: f,
                                dataPointIndex: e,
                                dataSeries: this,
                                distance: Math.min(Math.abs(q.x1 - a), Math.abs(q.x2 - a), Math.abs(q.y1 - g), Math.abs(q.y2 - g))
                            }),
                            n = !0);
                            break;
                        case "line":
                        case "stepLine":
                        case "spline":
                        case "area":
                        case "stepArea":
                        case "stackedArea":
                        case "stackedArea100":
                        case "splineArea":
                        case "scatter":
                            var y = ka("markerSize", f, this) || 4
                              , z = b ? 20 : y
                              , s = Math.sqrt(Math.pow(q.x1 - a, 2) + Math.pow(q.y1 - g, 2));
                            s <= z && c.push({
                                dataPoint: f,
                                dataPointIndex: e,
                                dataSeries: this,
                                distance: s
                            });
                            q = Math.abs(q.x1 - a);
                            q <= u ? u = q : 0 < h ? k++ : p++;
                            s <= y / 2 && (n = !0);
                            break;
                        case "rangeArea":
                        case "rangeSplineArea":
                            y = ka("markerSize", f, this) || 4;
                            z = b ? 20 : y;
                            s = Math.min(Math.sqrt(Math.pow(q.x1 - a, 2) + Math.pow(q.y1 - g, 2)), Math.sqrt(Math.pow(q.x1 - a, 2) + Math.pow(q.y2 - g, 2)));
                            s <= z && c.push({
                                dataPoint: f,
                                dataPointIndex: e,
                                dataSeries: this,
                                distance: s
                            });
                            q = Math.abs(q.x1 - a);
                            q <= u ? u = q : 0 < h ? k++ : p++;
                            s <= y / 2 && (n = !0);
                            break;
                        case "bubble":
                            y = q.size;
                            s = Math.sqrt(Math.pow(q.x1 - a, 2) + Math.pow(q.y1 - g, 2));
                            s <= y / 2 && (c.push({
                                dataPoint: f,
                                dataPointIndex: e,
                                dataSeries: this,
                                distance: s
                            }),
                            n = !0);
                            break;
                        case "pie":
                        case "doughnut":
                            y = q.center;
                            z = "doughnut" === this.type ? q.percentInnerRadius * q.radius : 0;
                            s = Math.sqrt(Math.pow(y.x - a, 2) + Math.pow(y.y - g, 2));
                            s < q.radius && s > z && (s = Math.atan2(g - y.y, a - y.x),
                            0 > s && (s += 2 * Math.PI),
                            s = Number(((180 * (s / Math.PI) % 360 + 360) % 360).toFixed(12)),
                            y = Number(((180 * (q.startAngle / Math.PI) % 360 + 360) % 360).toFixed(12)),
                            z = Number(((180 * (q.endAngle / Math.PI) % 360 + 360) % 360).toFixed(12)),
                            0 === z && 1 < q.endAngle && (z = 360),
                            y >= z && (0 !== f.y && !l(f.y)) && (z += 360,
                            s < y && (s += 360)),
                            s > y && s < z && (c.push({
                                dataPoint: f,
                                dataPointIndex: e,
                                dataSeries: this,
                                distance: 0
                            }),
                            n = !0));
                            break;
                        case "funnel":
                        case "pyramid":
                            s = q.funnelSection;
                            g >= s.y1 && g < s.y4 && (s.y6 ? g >= s.y6 ? (e = s.x6 + (s.x5 - s.x6) / (s.y5 - s.y6) * (g - s.y6),
                            s = s.x3 + (s.x4 - s.x3) / (s.y4 - s.y3) * (g - s.y3)) : (e = s.x1 + (s.x6 - s.x1) / (s.y6 - s.y1) * (g - s.y1),
                            s = s.x2 + (s.x3 - s.x2) / (s.y3 - s.y2) * (g - s.y2)) : (e = s.x1 + (s.x4 - s.x1) / (s.y4 - s.y1) * (g - s.y1),
                            s = s.x2 + (s.x3 - s.x2) / (s.y3 - s.y2) * (g - s.y2)),
                            a > e && a < s && (c.push({
                                dataPoint: f,
                                dataPointIndex: q.dataPointIndex,
                                dataSeries: this,
                                distance: 0
                            }),
                            n = !0));
                            break;
                        case "boxAndWhisker":
                            if (a >= q.x1 - q.borderThickness / 2 && a <= q.x2 + q.borderThickness / 2 && g >= q.y4 - q.borderThickness / 2 && g <= q.y1 + q.borderThickness / 2 || Math.abs(q.x2 - a + q.x1 - a) < q.borderThickness && g >= q.y1 && g <= q.y4)
                                c.push({
                                    dataPoint: f,
                                    dataPointIndex: e,
                                    dataSeries: this,
                                    distance: Math.min(Math.abs(q.x1 - a), Math.abs(q.x2 - a), Math.abs(q.y2 - g), Math.abs(q.y3 - g))
                                }),
                                n = !0;
                            break;
                        case "candlestick":
                            if (a >= q.x1 - q.borderThickness / 2 && a <= q.x2 + q.borderThickness / 2 && g >= q.y2 - q.borderThickness / 2 && g <= q.y3 + q.borderThickness / 2 || Math.abs(q.x2 - a + q.x1 - a) < q.borderThickness && g >= q.y1 && g <= q.y4)
                                c.push({
                                    dataPoint: f,
                                    dataPointIndex: e,
                                    dataSeries: this,
                                    distance: Math.min(Math.abs(q.x1 - a), Math.abs(q.x2 - a), Math.abs(q.y2 - g), Math.abs(q.y3 - g))
                                }),
                                n = !0;
                            break;
                        case "ohlc":
                            if (Math.abs(q.x2 - a + q.x1 - a) < q.borderThickness && g >= q.y2 && g <= q.y3 || a >= q.x1 && a <= (q.x2 + q.x1) / 2 && g >= q.y1 - q.borderThickness / 2 && g <= q.y1 + q.borderThickness / 2 || a >= (q.x1 + q.x2) / 2 && a <= q.x2 && g >= q.y4 - q.borderThickness / 2 && g <= q.y4 + q.borderThickness / 2)
                                c.push({
                                    dataPoint: f,
                                    dataPointIndex: e,
                                    dataSeries: this,
                                    distance: Math.min(Math.abs(q.x1 - a), Math.abs(q.x2 - a), Math.abs(q.y2 - g), Math.abs(q.y3 - g))
                                }),
                                n = !0
                        }
                        if (n || 1E3 < k && 1E3 < p)
                            break
                    }
                } else if (0 > m - d && m + d >= this.dataPoints.length)
                    break;
                -1 === h ? (d++,
                h = 1) : h = -1
            }
            a = null;
            for (g = 0; g < c.length; g++)
                a ? c[g].distance <= a.distance && (a = c[g]) : a = c[g];
            return a
        }
        ;
        Q.prototype.getMarkerProperties = function(a, g, b, c) {
            var d = this.dataPoints
              , e = d[a].markerColor ? d[a].markerColor : this.markerColor ? this.markerColor : d[a].color ? d[a].color : this.color ? this.color : this._colorSet[a % this._colorSet.length]
              , h = d[a].markerBorderColor ? d[a].markerBorderColor : this.markerBorderColor ? this.markerBorderColor : null
              , n = l(d[a].markerBorderThickness) ? this.markerBorderThickness ? this.markerBorderThickness : null : d[a].markerBorderThickness
              , s = d[a].markerType ? d[a].markerType : this.markerType;
            a = l(d[a].markerSize) ? this.markerSize : d[a].markerSize;
            return {
                x: g,
                y: b,
                ctx: c,
                type: s,
                size: a,
                color: e,
                borderColor: h,
                borderThickness: n
            }
        }
        ;
        qa(A, P);
        A.prototype.createExtraLabelsForLog = function(a) {
            a = (a || 0) + 1;
            if (!(5 < a)) {
                var g = this.logLabelValues[0] || this.intervalStartPosition;
                if (Math.log(this.range) / Math.log(g / this.viewportMinimum) < this.noTicks - 1) {
                    for (var b = A.getNiceNumber((g - this.viewportMinimum) / Math.min(Math.max(2, this.noTicks - this.logLabelValues.length), 3), !0), c = Math.ceil(this.viewportMinimum / b) * b; c < g; c += b)
                        c < this.viewportMinimum || this.logLabelValues.push(c);
                    this.logLabelValues.sort(Ta);
                    this.createExtraLabelsForLog(a)
                }
            }
        }
        ;
        A.prototype.createLabels = function() {
            var a, g, b = 0, c = 0, d, e = 0, h = 0, c = 0, c = this.interval, n = 0, u, k = 0.6 * this.chart.height, p;
            a = !1;
            var m = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : []
              , q = m.length ? l(this.scaleBreaks.firstBreakIndex) ? 0 : this.scaleBreaks.firstBreakIndex : 0;
            if ("axisX" !== this.type || "dateTime" !== this.valueType || this.logarithmic) {
                d = this.viewportMaximum;
                if (this.labels) {
                    a = Math.ceil(c);
                    for (var c = Math.ceil(this.intervalStartPosition), f = !1, b = c; b < this.viewportMaximum; b += a)
                        if (this.labels[b])
                            f = !0;
                        else {
                            f = !1;
                            break
                        }
                    f && (this.interval = a,
                    this.intervalStartPosition = c)
                }
                if (this.logarithmic && !this.equidistantInterval)
                    for (this.logLabelValues || (this.logLabelValues = [],
                    this.createExtraLabelsForLog()),
                    c = 0,
                    f = q; c < this.logLabelValues.length; c++)
                        if (b = this.logLabelValues[c],
                        b < this.viewportMinimum)
                            c++;
                        else {
                            for (; f < m.length && b > m[f].endValue; f++)
                                ;
                            a = f < m.length && b >= m[f].startValue && b <= m[f].endValue;
                            p = b;
                            a || (a = this.labelFormatter ? this.labelFormatter({
                                chart: this.chart,
                                axis: this.options,
                                value: p,
                                label: this.labels[p] ? this.labels[p] : null
                            }) : "axisX" === this.type && this.labels[p] ? this.labels[p] : fa(p, this.valueFormatString, this.chart._cultureInfo),
                            a = new ja(this.ctx,{
                                x: 0,
                                y: 0,
                                maxWidth: e,
                                maxHeight: h,
                                angle: this.labelAngle,
                                text: this.prefix + a + this.suffix,
                                backgroundColor: this.labelBackgroundColor,
                                borderColor: this.labelBorderColor,
                                cornerRadius: this.labelCornerRadius,
                                textAlign: this.labelTextAlign,
                                fontSize: this.labelFontSize,
                                fontFamily: this.labelFontFamily,
                                fontWeight: this.labelFontWeight,
                                fontColor: this.labelFontColor,
                                fontStyle: this.labelFontStyle,
                                textBaseline: "middle",
                                borderThickness: this.labelBorderThickness,
                                padding: this.labelPadding
                            }),
                            this._labels.push({
                                position: p,
                                textBlock: a,
                                effectiveHeight: null
                            }))
                        }
                f = q;
                for (b = this.intervalStartPosition; b <= d; b = parseFloat(1E-12 > this.interval ? this.logarithmic && this.equidistantInterval ? b * Math.pow(this.logarithmBase, this.interval) : b + this.interval : (this.logarithmic && this.equidistantInterval ? b * Math.pow(this.logarithmBase, this.interval) : b + this.interval).toFixed(12))) {
                    for (; f < m.length && b > m[f].endValue; f++)
                        ;
                    a = f < m.length && b >= m[f].startValue && b <= m[f].endValue;
                    p = b;
                    a ? (a = Math.floor((m[f].endValue - b) / this.interval),
                    b = parseFloat(1E-12 > this.interval ? this.logarithmic && this.equidistantInterval ? b * Math.pow(this.logarithmBase, this.interval * a) : b + this.interval * a : (this.logarithmic && this.equidistantInterval ? b * Math.pow(this.logarithmBase, this.interval * a) : b + this.interval * a).toFixed(12))) : (a = this.labelFormatter ? this.labelFormatter({
                        chart: this.chart,
                        axis: this.options,
                        value: p,
                        label: this.labels[p] ? this.labels[p] : null
                    }) : "axisX" === this.type && this.labels[p] ? this.labels[p] : fa(p, this.valueFormatString, this.chart._cultureInfo),
                    a = new ja(this.ctx,{
                        x: 0,
                        y: 0,
                        maxWidth: e,
                        maxHeight: h,
                        angle: this.labelAngle,
                        text: this.prefix + a + this.suffix,
                        textAlign: this.labelTextAlign,
                        backgroundColor: this.labelBackgroundColor,
                        borderColor: this.labelBorderColor,
                        borderThickness: this.labelBorderThickness,
                        cornerRadius: this.labelCornerRadius,
                        fontSize: this.labelFontSize,
                        fontFamily: this.labelFontFamily,
                        fontWeight: this.labelFontWeight,
                        fontColor: this.labelFontColor,
                        fontStyle: this.labelFontStyle,
                        textBaseline: "middle",
                        padding: this.labelPadding
                    }),
                    this._labels.push({
                        position: p,
                        textBlock: a,
                        effectiveHeight: null
                    }))
                }
            } else
                for (this.intervalStartPosition = this.getLabelStartPoint(new Date(this.viewportMinimum), this.intervalType, this.interval),
                d = Sa(new Date(this.viewportMaximum), this.interval, this.intervalType),
                f = q,
                b = this.intervalStartPosition; b < d; Sa(b, c, this.intervalType)) {
                    for (q = b.getTime(); f < m.length && q > m[f].endValue; f++)
                        ;
                    p = q;
                    (a = f < m.length && q >= m[f].startValue && q <= m[f].endValue) ? Sa(b, c * Math.floor((m[f].endValue - q) / c), this.intervalType) : (a = this.labelFormatter ? this.labelFormatter({
                        chart: this.chart,
                        axis: this.options,
                        value: new Date(p),
                        label: this.labels[p] ? this.labels[p] : null
                    }) : "axisX" === this.type && this.labels[p] ? this.labels[p] : Ca(p, this.valueFormatString, this.chart._cultureInfo),
                    a = new ja(this.ctx,{
                        x: 0,
                        y: 0,
                        maxWidth: e,
                        backgroundColor: this.labelBackgroundColor,
                        borderColor: this.labelBorderColor,
                        borderThickness: this.labelBorderThickness,
                        cornerRadius: this.labelCornerRadius,
                        maxHeight: h,
                        angle: this.labelAngle,
                        text: this.prefix + a + this.suffix,
                        textAlign: this.labelTextAlign,
                        fontSize: this.labelFontSize,
                        fontFamily: this.labelFontFamily,
                        fontWeight: this.labelFontWeight,
                        fontColor: this.labelFontColor,
                        fontStyle: this.labelFontStyle,
                        textBaseline: "middle",
                        padding: this.labelPadding
                    }),
                    this._labels.push({
                        position: p,
                        textBlock: a,
                        effectiveHeight: null,
                        breaksLabelType: void 0
                    }))
                }
            if ("bottom" === this._position || "top" === this._position)
                n = this.logarithmic && !this.equidistantInterval && 2 <= this._labels.length ? this.lineCoordinates.width * Math.log(Math.min(this._labels[this._labels.length - 1].position / this._labels[this._labels.length - 2].position, this._labels[1].position / this._labels[0].position)) / Math.log(this.range) : this.lineCoordinates.width / (this.logarithmic && this.equidistantInterval ? Math.log(this.range) / Math.log(this.logarithmBase) : Math.abs(this.range)) * L[this.intervalType + "Duration"] * this.interval,
                e = "undefined" === typeof this.options.labelMaxWidth ? 0.5 * this.chart.width >> 0 : this.options.labelMaxWidth,
                this.chart.panEnabled || (h = "undefined" === typeof this.options.labelWrap || this.labelWrap ? 0.8 * this.chart.height >> 0 : 1.5 * this.labelFontSize + ("object" === typeof this.labelPadding ? (this.labelPadding.top || 0) + (this.labelPadding.bottom || 0) : 2 * this.labelPadding));
            else if ("left" === this._position || "right" === this._position)
                n = this.logarithmic && !this.equidistantInterval && 2 <= this._labels.length ? this.lineCoordinates.height * Math.log(Math.min(this._labels[this._labels.length - 1].position / this._labels[this._labels.length - 2].position, this._labels[1].position / this._labels[0].position)) / Math.log(this.range) : this.lineCoordinates.height / (this.logarithmic && this.equidistantInterval ? Math.log(this.range) / Math.log(this.logarithmBase) : Math.abs(this.range)) * L[this.intervalType + "Duration"] * this.interval,
                this.chart.panEnabled || (e = "undefined" === typeof this.options.labelMaxWidth ? 0.3 * this.chart.width >> 0 : this.options.labelMaxWidth),
                h = "undefined" === typeof this.options.labelWrap || this.labelWrap ? 0.3 * this.chart.height >> 0 : 1.5 * this.labelFontSize;
            for (c = 0; c < this._labels.length; c++) {
                a = this._labels[c].textBlock;
                a.maxWidth = e;
                a.maxHeight = h;
                var A = a.measureText();
                u = A.height
            }
            d = [];
            q = m = 0;
            if (this.labelAutoFit || this.options.labelAutoFit)
                if (l(this.labelAngle) || (this.labelAngle = (this.labelAngle % 360 + 360) % 360,
                90 < this.labelAngle && 270 > this.labelAngle ? this.labelAngle -= 180 : 270 <= this.labelAngle && 360 >= this.labelAngle && (this.labelAngle -= 360)),
                "bottom" === this._position || "top" === this._position)
                    if (e = Math.floor(0.9 * n),
                    q = 0,
                    !this.chart.panEnabled && 1 <= this._labels.length) {
                        this.sessionVariables.labelFontSize = this.labelFontSize;
                        this.sessionVariables.labelMaxWidth = e;
                        this.sessionVariables.labelMaxHeight = h;
                        this.sessionVariables.labelAngle = this.labelAngle;
                        this.sessionVariables.labelWrap = this.labelWrap;
                        for (b = 0; b < this._labels.length; b++)
                            if (!this._labels[b].breaksLabelType) {
                                a = this._labels[b].textBlock;
                                for (var y, f = a.text.split(" "), c = 0; c < f.length; c++)
                                    p = f[c],
                                    this.ctx.font = a.fontStyle + " " + a.fontWeight + " " + a.fontSize + "px " + a.fontFamily,
                                    p = this.ctx.measureText(p),
                                    p.width > q && (y = b,
                                    q = p.width)
                            }
                        b = 0;
                        for (b = this.intervalStartPosition < this.viewportMinimum ? 1 : 0; b < this._labels.length; b++)
                            if (!this._labels[b].breaksLabelType) {
                                a = this._labels[b].textBlock;
                                A = a.measureText();
                                for (f = b + 1; f < this._labels.length; f++)
                                    if (!this._labels[f].breaksLabelType) {
                                        g = this._labels[f].textBlock;
                                        g = g.measureText();
                                        break
                                    }
                                d.push(a.height);
                                this.sessionVariables.labelMaxHeight = Math.max.apply(Math, d);
                                Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                                Math.sin(Math.PI / 180 * Math.abs(this.labelAngle));
                                c = e * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (h - a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                                if (l(this.options.labelAngle) && isNaN(this.options.labelAngle) && 0 !== this.options.labelAngle)
                                    if (this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? h : Math.min((c - e * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), c),
                                    p = (k - (u + a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(-25))) / Math.sin(Math.PI / 180 * Math.abs(-25)),
                                    !l(this.options.labelWrap))
                                        this.labelWrap ? l(this.options.labelMaxWidth) ? (this.sessionVariables.labelMaxWidth = Math.min(Math.max(e, q), p),
                                        this.sessionVariables.labelWrap = this.labelWrap,
                                        g && A.width + g.width >> 0 > 2 * e && (this.sessionVariables.labelAngle = -25)) : (this.sessionVariables.labelWrap = this.labelWrap,
                                        this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth,
                                        this.sessionVariables.labelAngle = this.sessionVariables.labelMaxWidth > e ? -25 : this.sessionVariables.labelAngle) : l(this.options.labelMaxWidth) ? (this.sessionVariables.labelWrap = this.labelWrap,
                                        this.sessionVariables.labelMaxHeight = h,
                                        this.sessionVariables.labelMaxWidth = e,
                                        g && A.width + g.width >> 0 > 2 * e && (this.sessionVariables.labelAngle = -25,
                                        this.sessionVariables.labelMaxWidth = p)) : (this.sessionVariables.labelAngle = this.sessionVariables.labelMaxWidth > e ? -25 : this.sessionVariables.labelAngle,
                                        this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth,
                                        this.sessionVariables.labelMaxHeight = h,
                                        this.sessionVariables.labelWrap = this.labelWrap);
                                    else {
                                        if (l(this.options.labelWrap))
                                            if (!l(this.options.labelMaxWidth))
                                                this.options.labelMaxWidth < e ? (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth,
                                                this.sessionVariables.labelMaxHeight = c) : (this.sessionVariables.labelAngle = -25,
                                                this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth,
                                                this.sessionVariables.labelMaxHeight = h);
                                            else if (!l(g))
                                                if (c = A.width + g.width >> 0,
                                                f = this.labelFontSize,
                                                q < e)
                                                    c - 2 * e > m && (m = c - 2 * e,
                                                    c >= 2 * e && c < 2.2 * e ? (this.sessionVariables.labelMaxWidth = e,
                                                    l(this.options.labelFontSize) && 12 < f && (f = Math.floor(12 / 13 * f),
                                                    a.measureText()),
                                                    this.sessionVariables.labelFontSize = l(this.options.labelFontSize) ? f : this.options.labelFontSize,
                                                    this.sessionVariables.labelAngle = this.labelAngle) : c >= 2.2 * e && c < 2.8 * e ? (this.sessionVariables.labelAngle = -25,
                                                    this.sessionVariables.labelMaxWidth = p,
                                                    this.sessionVariables.labelFontSize = f) : c >= 2.8 * e && c < 3.2 * e ? (this.sessionVariables.labelMaxWidth = Math.max(e, q),
                                                    this.sessionVariables.labelWrap = !0,
                                                    l(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize),
                                                    a.measureText()),
                                                    this.sessionVariables.labelFontSize = l(this.options.labelFontSize) ? f : this.options.labelFontSize,
                                                    this.sessionVariables.labelAngle = this.labelAngle) : c >= 3.2 * e && c < 3.6 * e ? (this.sessionVariables.labelAngle = -25,
                                                    this.sessionVariables.labelWrap = !0,
                                                    this.sessionVariables.labelMaxWidth = p,
                                                    this.sessionVariables.labelFontSize = this.labelFontSize) : c > 3.6 * e && c < 5 * e ? (l(this.options.labelFontSize) && 12 < f && (f = Math.floor(12 / 13 * f),
                                                    a.measureText()),
                                                    this.sessionVariables.labelFontSize = l(this.options.labelFontSize) ? f : this.options.labelFontSize,
                                                    this.sessionVariables.labelWrap = !0,
                                                    this.sessionVariables.labelAngle = -25,
                                                    this.sessionVariables.labelMaxWidth = p) : c > 5 * e && (this.sessionVariables.labelWrap = !0,
                                                    this.sessionVariables.labelMaxWidth = e,
                                                    this.sessionVariables.labelFontSize = f,
                                                    this.sessionVariables.labelMaxHeight = h,
                                                    this.sessionVariables.labelAngle = this.labelAngle));
                                                else if (y === b && (0 === y && q + this._labels[y + 1].textBlock.measureText().width - 2 * e > m || y === this._labels.length - 1 && q + this._labels[y - 1].textBlock.measureText().width - 2 * e > m || 0 < y && y < this._labels.length - 1 && q + this._labels[y + 1].textBlock.measureText().width - 2 * e > m && q + this._labels[y - 1].textBlock.measureText().width - 2 * e > m))
                                                    m = 0 === y ? q + this._labels[y + 1].textBlock.measureText().width - 2 * e : q + this._labels[y - 1].textBlock.measureText().width - 2 * e,
                                                    this.sessionVariables.labelFontSize = l(this.options.labelFontSize) ? f : this.options.labelFontSize,
                                                    this.sessionVariables.labelWrap = !0,
                                                    this.sessionVariables.labelAngle = -25,
                                                    this.sessionVariables.labelMaxWidth = p;
                                                else if (0 === m)
                                                    for (this.sessionVariables.labelFontSize = l(this.options.labelFontSize) ? f : this.options.labelFontSize,
                                                    this.sessionVariables.labelWrap = !0,
                                                    c = 0; c < this._labels.length; c++)
                                                        a = this._labels[c].textBlock,
                                                        a.maxWidth = this.sessionVariables.labelMaxWidth = Math.min(Math.max(e, q), p),
                                                        A = a.measureText(),
                                                        c < this._labels.length - 1 && (f = c + 1,
                                                        g = this._labels[f].textBlock,
                                                        g.maxWidth = this.sessionVariables.labelMaxWidth = Math.min(Math.max(e, q), p),
                                                        g = g.measureText(),
                                                        A.width + g.width >> 0 > 2 * e && (this.sessionVariables.labelAngle = -25))
                                    }
                                else
                                    (this.sessionVariables.labelAngle = this.labelAngle,
                                    this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? h : Math.min((c - e * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), c),
                                    p = 0 != this.labelAngle ? (k - (u + a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) : e,
                                    this.sessionVariables.labelMaxHeight = this.labelWrap ? (k - p * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) : 1.5 * this.labelFontSize,
                                    l(this.options.labelWrap)) ? l(this.options.labelWrap) && (this.labelWrap && !l(this.options.labelMaxWidth) ? (this.sessionVariables.labelWrap = this.labelWrap,
                                    this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : p,
                                    this.sessionVariables.labelMaxHeight = h) : (this.sessionVariables.labelAngle = this.labelAngle,
                                    this.sessionVariables.labelMaxWidth = p,
                                    this.sessionVariables.labelMaxHeight = Math.max(c, 0.9 * n),
                                    this.sessionVariables.labelWrap = this.labelWrap)) : (this.options.labelWrap ? (this.sessionVariables.labelWrap = this.labelWrap,
                                    this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : p) : (l(this.options.labelMaxWidth),
                                    this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : p,
                                    this.sessionVariables.labelWrap = this.labelWrap),
                                    this.sessionVariables.labelMaxHeight = h)
                            }
                        this.sessionVariables.labelMaxHeight = Math.max(this.sessionVariables.labelMaxHeight, 1.5 * this.labelFontSize);
                        for (c = 0; c < this._labels.length; c++)
                            a = this._labels[c].textBlock,
                            a.maxWidth = this.labelMaxWidth = this.sessionVariables.labelMaxWidth,
                            a.fontSize = this.sessionVariables.labelFontSize,
                            a.angle = this.labelAngle = this.sessionVariables.labelAngle,
                            a.wrap = this.labelWrap = this.sessionVariables.labelWrap,
                            a.maxHeight = this.sessionVariables.labelMaxHeight,
                            a.measureText()
                    } else
                        for (b = 0; b < this._labels.length; b++)
                            a = this._labels[b].textBlock,
                            a.maxWidth = this.labelMaxWidth = l(this.options.labelMaxWidth) ? l(this.sessionVariables.labelMaxWidth) ? this.sessionVariables.labelMaxWidth = e : this.sessionVariables.labelMaxWidth : this.options.labelMaxWidth,
                            a.fontSize = this.labelFontSize = l(this.options.labelFontSize) ? l(this.sessionVariables.labelFontSize) ? this.sessionVariables.labelFontSize = this.labelFontSize : this.sessionVariables.labelFontSize : this.options.labelFontSize,
                            a.angle = this.labelAngle = l(this.options.labelAngle) ? l(this.sessionVariables.labelAngle) ? this.sessionVariables.labelAngle = this.labelAngle : this.sessionVariables.labelAngle : this.labelAngle,
                            a.wrap = this.labelWrap = l(this.options.labelWrap) ? l(this.sessionVariables.labelWrap) ? this.sessionVariables.labelWrap = this.labelWrap : this.sessionVariables.labelWrap : this.options.labelWrap,
                            a.maxHeight = l(this.sessionVariables.labelMaxHeight) ? this.sessionVariables.labelMaxHeight = h : this.sessionVariables.labelMaxHeight,
                            a.measureText();
                else if ("left" === this._position || "right" === this._position)
                    if (e = l(this.options.labelMaxWidth) ? 0.3 * this.chart.width >> 0 : this.options.labelMaxWidth,
                    h = "undefined" === typeof this.options.labelWrap || this.labelWrap ? 0.3 * this.chart.height >> 0 : 1.5 * this.labelFontSize,
                    !this.chart.panEnabled && 1 <= this._labels.length) {
                        this.sessionVariables.labelFontSize = this.labelFontSize;
                        this.sessionVariables.labelMaxWidth = e;
                        this.sessionVariables.labelMaxHeight = h;
                        this.sessionVariables.labelAngle = l(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle;
                        this.sessionVariables.labelWrap = this.labelWrap;
                        for (b = 0; b < this._labels.length; b++)
                            if (!this._labels[b].breaksLabelType) {
                                a = this._labels[b].textBlock;
                                A = a.measureText();
                                for (f = b + 1; f < this._labels.length; f++)
                                    if (!this._labels[f].breaksLabelType) {
                                        g = this._labels[f].textBlock;
                                        g = g.measureText();
                                        break
                                    }
                                d.push(a.height);
                                this.sessionVariables.labelMaxHeight = Math.max.apply(Math, d);
                                c = e * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (h - a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                                Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                                Math.sin(Math.PI / 180 * Math.abs(this.labelAngle));
                                l(this.options.labelAngle) && isNaN(this.options.labelAngle) && 0 !== this.options.labelAngle ? l(this.options.labelWrap) ? l(this.options.labelWrap) && (l(this.options.labelMaxWidth) ? l(g) || (n = A.height + g.height >> 0,
                                n - 2 * h > q && (q = n - 2 * h,
                                n >= 2 * h && n < 2.4 * h ? (l(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize),
                                a.measureText()),
                                this.sessionVariables.labelMaxHeight = h,
                                this.sessionVariables.labelFontSize = l(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize) : n >= 2.4 * h && n < 2.8 * h ? (this.sessionVariables.labelMaxHeight = c,
                                this.sessionVariables.labelFontSize = this.labelFontSize,
                                this.sessionVariables.labelWrap = !0) : n >= 2.8 * h && n < 3.2 * h ? (this.sessionVariables.labelMaxHeight = h,
                                this.sessionVariables.labelWrap = !0,
                                l(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize),
                                a.measureText()),
                                this.sessionVariables.labelFontSize = l(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize,
                                this.sessionVariables.labelAngle = l(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle) : n >= 3.2 * h && n < 3.6 * h ? (this.sessionVariables.labelMaxHeight = c,
                                this.sessionVariables.labelWrap = !0,
                                this.sessionVariables.labelFontSize = this.labelFontSize) : n > 3.6 * h && n < 10 * h ? (l(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize),
                                a.measureText()),
                                this.sessionVariables.labelFontSize = l(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize,
                                this.sessionVariables.labelMaxWidth = e,
                                this.sessionVariables.labelMaxHeight = h,
                                this.sessionVariables.labelAngle = l(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle) : n > 10 * h && n < 50 * h && (l(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize),
                                a.measureText()),
                                this.sessionVariables.labelFontSize = l(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize,
                                this.sessionVariables.labelMaxHeight = h,
                                this.sessionVariables.labelMaxWidth = e,
                                this.sessionVariables.labelAngle = l(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle))) : (this.sessionVariables.labelMaxHeight = h,
                                this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth)) : (this.sessionVariables.labelMaxWidth = this.labelWrap ? this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth : this.labelMaxWidth ? this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth : e,
                                this.sessionVariables.labelMaxHeight = h) : (this.sessionVariables.labelAngle = this.labelAngle,
                                this.sessionVariables.labelMaxWidth = 0 === this.labelAngle ? e : Math.min((c - h * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)), h),
                                l(this.options.labelWrap)) ? l(this.options.labelWrap) && (this.labelWrap && !l(this.options.labelMaxWidth) ? (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth,
                                this.sessionVariables.labelWrap = this.labelWrap,
                                this.sessionVariables.labelMaxHeight = c) : (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : e,
                                this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? h : c,
                                l(this.options.labelMaxWidth) && (this.sessionVariables.labelAngle = this.labelAngle))) : this.options.labelWrap ? (this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? h : c,
                                this.sessionVariables.labelWrap = this.labelWrap,
                                this.sessionVariables.labelMaxWidth = e) : (this.sessionVariables.labelMaxHeight = h,
                                l(this.options.labelMaxWidth),
                                this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth,
                                this.sessionVariables.labelWrap = this.labelWrap)
                            }
                        for (c = 0; c < this._labels.length; c++)
                            a = this._labels[c].textBlock,
                            a.maxWidth = this.labelMaxWidth = this.sessionVariables.labelMaxWidth,
                            a.fontSize = this.labelFontSize = this.sessionVariables.labelFontSize,
                            a.angle = this.labelAngle = this.sessionVariables.labelAngle,
                            a.wrap = this.labelWrap = this.sessionVariables.labelWrap,
                            a.maxHeight = this.sessionVariables.labelMaxHeight,
                            a.measureText()
                    } else
                        for (l(this.chart.stockChart) || this.chart.isNavigator || (this.sessionVariables.labelMaxHeight = h),
                        b = 0; b < this._labels.length; b++)
                            a = this._labels[b].textBlock,
                            a.maxWidth = this.labelMaxWidth = l(this.options.labelMaxWidth) ? l(this.sessionVariables.labelMaxWidth) ? this.sessionVariables.labelMaxWidth = e : this.sessionVariables.labelMaxWidth : this.options.labelMaxWidth,
                            a.fontSize = this.labelFontSize = l(this.options.labelFontSize) ? l(this.sessionVariables.labelFontSize) ? this.sessionVariables.labelFontSize = this.labelFontSize : this.sessionVariables.labelFontSize : this.options.labelFontSize,
                            a.angle = this.labelAngle = l(this.options.labelAngle) ? l(this.sessionVariables.labelAngle) ? this.sessionVariables.labelAngle = this.labelAngle : this.sessionVariables.labelAngle : this.labelAngle,
                            a.wrap = this.labelWrap = l(this.options.labelWrap) ? l(this.sessionVariables.labelWrap) ? this.sessionVariables.labelWrap = this.labelWrap : this.sessionVariables.labelWrap : this.options.labelWrap,
                            a.maxHeight = l(this.sessionVariables.labelMaxHeight) ? this.sessionVariables.labelMaxHeight = h : this.sessionVariables.labelMaxHeight,
                            a.measureText();
            for (b = 0; b < this.stripLines.length; b++) {
                var e = this.stripLines[b], z;
                e.labelFontSize = "outside" === e.labelPlacement && l(e.options.labelFontSize) ? this.labelFontSize : e.labelFontSize;
                e.labelFontFamily = "outside" === e.labelPlacement && l(e.options.labelFontFamily) ? this.labelFontFamily : e.labelFontFamily;
                e.labelFontWeight = "outside" === e.labelPlacement && l(e.options.labelFontWeight) ? this.labelFontWeight : e.labelFontWeight;
                e.labelFontStyle = "outside" === e.labelPlacement && l(e.options.labelFontStyle) ? this.labelFontStyle : e.labelFontStyle;
                if ("outside" === e.labelPlacement) {
                    h = this.sessionVariables.labelMaxWidth;
                    if ("bottom" === this._position || "top" === this._position)
                        l(e.options.labelWrap) && !l(this.sessionVariables.stripLineLabelMaxHeight) ? z = this.sessionVariables.stripLineLabelMaxHeight : this.sessionVariables.stripLineLabelMaxHeight = z = e.labelWrap ? 0.8 * this.chart.height >> 0 : 1.5 * e.labelFontSize + ("object" === typeof e.labelPadding ? (e.labelPadding.top || 0) + (e.labelPadding.bottom || 0) : 2 * e.labelPadding);
                    if ("left" === this._position || "right" === this._position)
                        l(e.options.labelWrap) && !l(this.sessionVariables.stripLineLabelMaxHeight) ? z = this.sessionVariables.stripLineLabelMaxHeight : this.sessionVariables.stripLineLabelMaxHeight = z = e.labelWrap ? 0.8 * this.chart.width >> 0 : 1.5 * e.labelFontSize + ("object" === typeof e.labelPadding ? (e.labelPadding.top || 0) + (e.labelPadding.bottom || 0) : 2 * e.labelPadding);
                    l(e.labelBackgroundColor) && (e.labelBackgroundColor = "#EEEEEE")
                } else
                    h = "bottom" === this._position || "top" === this._position ? 0.9 * this.chart.width >> 0 : 0.9 * this.chart.height >> 0,
                    z = l(e.options.labelWrap) || e.labelWrap ? "bottom" === this._position || "top" === this._position ? 0.8 * this.chart.width >> 0 : 0.8 * this.chart.height >> 0 : 1.5 * e.labelFontSize + ("object" === typeof e.labelPadding ? (e.labelPadding.top || 0) + (e.labelPadding.bottom || 0) : 2 * e.labelPadding),
                    l(e.labelBackgroundColor) && (l(e.startValue) && 0 !== e.startValue ? e.labelBackgroundColor = s ? "transparent" : null : e.labelBackgroundColor = "#EEEEEE");
                a = new ja(this.ctx,{
                    x: 0,
                    y: 0,
                    backgroundColor: e.labelBackgroundColor,
                    borderColor: e.labelBorderColor,
                    borderThickness: e.labelBorderThickness,
                    cornerRadius: e.labelCornerRadius,
                    maxWidth: e.options.labelMaxWidth ? e.options.labelMaxWidth : h,
                    maxHeight: z,
                    angle: this.labelAngle,
                    text: e.labelFormatter ? e.labelFormatter({
                        chart: this.chart,
                        axis: this,
                        stripLine: e
                    }) : e.label,
                    textAlign: e.labelTextAlign,
                    fontSize: e.labelFontSize,
                    fontFamily: e.labelFontFamily,
                    fontWeight: e.labelFontWeight,
                    fontColor: e.labelFontColor || e.color,
                    fontStyle: e.labelFontStyle,
                    textBaseline: "middle",
                    padding: e.labelPadding
                });
                this._stripLineLabels.push({
                    position: e.value,
                    textBlock: a,
                    effectiveHeight: null,
                    stripLine: e
                })
            }
        }
        ;
        A.prototype.createLabelsAndCalculateWidth = function() {
            var a = 0
              , g = 0;
            this._labels = [];
            this._stripLineLabels = [];
            var b = this.chart.isNavigator ? 0 : 5;
            this.labelEffectiveWidth = l(this.labelEffectiveWidth) ? 0 : this.labelEffectiveWidth;
            if ("left" === this._position || "right" === this._position) {
                this.createLabels();
                for (g = 0; g < this._labels.length; g++) {
                    var c = this._labels[g].textBlock
                      , c = c.measureText()
                      , d = 0
                      , d = 0 === this.labelAngle ? c.width : c.width * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) + c.height * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle));
                    a <= d && (this.labelEffectiveWidth = a = d);
                    this._labels[g].effectiveWidth = d
                }
                for (g = 0; g < this._stripLineLabels.length; g++)
                    "outside" === this._stripLineLabels[g].stripLine.labelPlacement && (this._stripLineLabels[g].stripLine.value >= this.viewportMinimum && this._stripLineLabels[g].stripLine.value <= this.viewportMaximum) && (c = this._stripLineLabels[g].textBlock,
                    c = c.measureText(),
                    d = 0 === this.labelAngle ? c.width : c.width * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) + c.height * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)),
                    "inside" === this.tickPlacement && (d += this.tickLength),
                    "inside" === this.labelPlacement && (a += d + b),
                    a <= d && (a = d),
                    this.stripLineLabelEffectiveWidth = this._stripLineLabels[g].effectiveWidth = d)
            }
            return (this.title ? this._titleTextBlock.measureText().height + 2 : 0) + a + this.tickLength + b
        }
        ;
        A.prototype.createLabelsAndCalculateHeight = function() {
            var a = 0;
            this._labels = [];
            this._stripLineLabels = [];
            var g, b = 0, c = this.chart.isNavigator ? 0 : "bottom" === this._position && "inside" === this.labelPlacement || "top" === this._position && "outside" === this.labelPlacement ? 2 : 5;
            this.labelEffectiveHeight = l(this.labelEffectiveHeight) ? 0 : this.labelEffectiveHeight;
            if ("bottom" === this._position || "top" === this._position) {
                this.createLabels();
                for (b = 0; b < this._labels.length; b++) {
                    g = this._labels[b].textBlock;
                    g = g.measureText();
                    var d = 0
                      , d = 0 === this.labelAngle ? g.height : g.width * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + g.height * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                    a <= d && (this.labelEffectiveHeight = a = d);
                    this._labels[b].effectiveHeight = d
                }
                for (b = 0; b < this._stripLineLabels.length; b++)
                    "outside" === this._stripLineLabels[b].stripLine.labelPlacement && (this._stripLineLabels[b].stripLine.value >= this.viewportMinimum && this._stripLineLabels[b].stripLine.value <= this.viewportMaximum) && (g = this._stripLineLabels[b].textBlock,
                    g = g.measureText(),
                    d = 0 === this.labelAngle ? g.height : g.width * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + g.height * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)),
                    "inside" === this.tickPlacement && (d += this.tickLength),
                    "inside" === this.labelPlacement && (a += d + c),
                    a <= d && (a = d),
                    this.stripLineLabelEffectiveHeight = this._stripLineLabels[b].effectiveHeight = d)
            }
            return (this.title ? this._titleTextBlock.measureText().height + 2 : 0) + a + this.tickLength + c
        }
        ;
        A.setLayout = function(a, g, b, c, d, e) {
            var h, n, s, k, p = a[0] ? a[0].chart : g[0].chart, m = p.isNavigator ? 0 : 10, q = p._axes;
            if (a && 0 < a.length)
                for (var f = 0; f < a.length; f++)
                    a[f] && a[f].calculateAxisParameters();
            if (g && 0 < g.length)
                for (f = 0; f < g.length; f++)
                    g[f].calculateAxisParameters();
            if (b && 0 < b.length)
                for (f = 0; f < b.length; f++)
                    b[f].calculateAxisParameters();
            if (c && 0 < c.length)
                for (f = 0; f < c.length; f++)
                    c[f].calculateAxisParameters();
            for (f = 0; f < q.length; f++)
                if (q[f] && q[f].scaleBreaks && q[f].scaleBreaks._appliedBreaks.length)
                    for (var u = q[f].scaleBreaks._appliedBreaks, y = 0; y < u.length && !(u[y].startValue > q[f].viewportMaximum); y++)
                        u[y].endValue < q[f].viewportMinimum || (l(q[f].scaleBreaks.firstBreakIndex) && (q[f].scaleBreaks.firstBreakIndex = y),
                        u[y].startValue >= q[f].viewPortMinimum && (q[f].scaleBreaks.lastBreakIndex = y));
            for (var z = y = 0, r = 0, x = 0, v = 0, A = 0, B = 0, C, D, H = n = 0, K, J, M, u = K = J = M = !1, f = 0; f < q.length; f++)
                q[f] && q[f].title && (q[f]._titleTextBlock = new ja(q[f].ctx,{
                    text: q[f].title,
                    fontSize: q[f].titleFontSize,
                    fontFamily: q[f].titleFontFamily,
                    fontWeight: q[f].titleFontWeight,
                    fontColor: q[f].titleFontColor,
                    fontStyle: q[f].titleFontStyle,
                    borderColor: q[f].titleBorderColor,
                    borderThickness: q[f].titleBorderThickness,
                    backgroundColor: q[f].titleBackgroundColor,
                    cornerRadius: q[f].titleCornerRadius,
                    textBaseline: "middle",
                    textAlign: q[f].titleTextAlign,
                    padding: q[f].titlePadding
                }));
            for (f = 0; f < q.length; f++)
                if (q[f].title) {
                    var L = 1.5 * q[f].titleFontSize + ("object" === typeof q[f].titlePadding ? (q[f].titlePadding.top || 0) + (q[f].titlePadding.bottom || 0) : 2 * q[f].titlePadding);
                    q[f]._titleTextBlock.maxWidth = q[f].titleMaxWidth || e.height;
                    q[f]._titleTextBlock.maxHeight = q[f].titleWrap ? 0.8 * e.width : Math.min(L, 0.8 * e.width);
                    switch (q[f]._position) {
                    case "left":
                        q[f]._titleTextBlock.angle = -90;
                        break;
                    case "right":
                        q[f]._titleTextBlock.angle = 90;
                        break;
                    default:
                        q[f]._titleTextBlock.maxWidth = q[f].titleMaxWidth || e.width,
                        q[f]._titleTextBlock.maxHeight = q[f].titleWrap ? 0.8 * e.height : Math.min(L, 0.8 * e.height),
                        q[f]._titleTextBlock.angle = 0
                    }
                }
            if ("normal" === d) {
                for (var x = [], v = [], A = [], B = [], P = [], R = [], Q = [], F = []; 4 > y; ) {
                    var V = 0
                      , U = 0
                      , S = 0
                      , W = 0
                      , $ = L = d = 0
                      , ba = 0
                      , X = 0
                      , Y = 0
                      , N = h = 0;
                    if (b && 0 < b.length)
                        for (A = [],
                        f = h = 0; f < b.length; f++)
                            A.push(Math.ceil(b[f] ? b[f].createLabelsAndCalculateWidth() : 0)),
                            h += A[f],
                            $ += b[f] && !p.isNavigator ? b[f].margin : 0;
                    else
                        A.push(Math.ceil(b[0] ? b[0].createLabelsAndCalculateWidth() : 0));
                    Q.push(A);
                    if (c && 0 < c.length)
                        for (B = [],
                        f = N = 0; f < c.length; f++)
                            B.push(Math.ceil(c[f] ? c[f].createLabelsAndCalculateWidth() : 0)),
                            N += B[f],
                            ba += c[f] ? c[f].margin : 0;
                    else
                        B.push(Math.ceil(c[0] ? c[0].createLabelsAndCalculateWidth() : 0));
                    F.push(B);
                    h = Math.round(e.x1 + h + $ - (b[0] ? ("inside" === b[0].labelPlacement ? b[0].labelEffectiveWidth + (p.isNavigator ? 0 : 5) : 0) + ("inside" === b[0].tickPlacement ? b[0].tickLength : 0) : 0));
                    s = Math.round(Math.min(e.x2 - N - ba + (c[0] ? ("inside" === c[0].labelPlacement ? c[0].labelEffectiveWidth + (p.isNavigator ? 0 : 5) : 0) + ("inside" === c[0].tickPlacement ? c[0].tickLength : 0) : 0), p.width - m));
                    if (a && 0 < a.length)
                        for (x = [],
                        f = X = 0; f < a.length; f++)
                            a[f] && (a[f].lineCoordinates = {}),
                            a[f].lineCoordinates.width = Math.abs(s - h),
                            a[f].title && (a[f]._titleTextBlock.maxWidth = 0 < a[f].titleMaxWidth && a[f].titleMaxWidth < a[f].lineCoordinates.width ? a[f].titleMaxWidth : a[f].lineCoordinates.width),
                            x.push(Math.ceil(a[f] ? a[f].createLabelsAndCalculateHeight() : 0)),
                            X += x[f],
                            d += a[f] && !p.isNavigator ? a[f].margin : 0;
                    else
                        x.push(Math.ceil(a[0] ? a[0].createLabelsAndCalculateHeight() : 0));
                    P.push(x);
                    if (g && 0 < g.length)
                        for (v = [],
                        f = Y = 0; f < g.length; f++)
                            g[f] && (g[f].lineCoordinates = {}),
                            g[f].lineCoordinates.width = Math.abs(s - h),
                            g[f].title && (g[f]._titleTextBlock.maxWidth = 0 < g[f].titleMaxWidth && g[f].titleMaxWidth < g[f].lineCoordinates.width ? g[f].titleMaxWidth : g[f].lineCoordinates.width),
                            v.push(Math.ceil(g[f] ? g[f].createLabelsAndCalculateHeight() : 0)),
                            Y += v[f],
                            L += g[f] && !p.isNavigator ? g[f].margin : 0;
                    else
                        v.push(Math.ceil(g[0] ? g[0].createLabelsAndCalculateHeight() : 0));
                    R.push(v);
                    if (a && 0 < a.length) {
                        for (f = 0; f < a.length; f++) {
                            if (a[f]) {
                                a[f].lineCoordinates.x1 = h;
                                s = Math.round(Math.min(e.x2 - N - ba + (c[0] ? ("inside" === c[0].labelPlacement ? c[0].labelEffectiveWidth + (p.isNavigator ? 0 : 5) : 0) + ("inside" === c[0].tickPlacement ? c[0].tickLength : 0) : 0), p.width - m));
                                if (a[f]._labels && 1 < a[f]._labels.length) {
                                    var T = n = 0;
                                    n = a[f]._labels[1];
                                    T = "dateTime" === a[f].valueType ? a[f]._labels[a[f]._labels.length - 2] : a[f]._labels[a[f]._labels.length - 1];
                                    z = n.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(n.textBlock.angle)) + (n.textBlock.height - n.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(n.textBlock.angle));
                                    r = T.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(T.textBlock.angle)) + T.textBlock.height * Math.sin(Math.PI / 180 * Math.abs(T.textBlock.angle))
                                }
                                !a[f] || (!a[f].labelAutoFit || l(C) || l(D) || p.isNavigator || p.stockChart) || (n = 0,
                                0 < a[f].labelAngle ? (k = r - (T.textBlock.height - T.textBlock._lineHeight / 2) * Math.sin(Math.PI / 180 * T.textBlock.angle),
                                D + k > s && (a[f].convertPixelToValue(D) >= a[f].viewportMinimum && a[f].convertPixelToValue(D) <= a[f].viewportMaximum) && (n += D + k - s - N)) : 0 > a[f].labelAngle ? C - z < h && C - z < a[f].viewportMinimum && (H = h - ($ + a[f].tickLength + A + C - z + a[f].labelFontSize / 2)) : 0 === a[f].labelAngle && (D + r > s && (a[f].convertPixelToValue(D) >= a[f].viewportMinimum && a[f].convertPixelToValue(D) <= a[f].viewportMaximum) && (n = D + r / 2 - s - N),
                                C - z < h && C - z < a[f].viewportMinimum && (H = h - $ - a[f].tickLength - A - C + z / 2)),
                                a[f].viewportMaximum === a[f].maximum && a[f].viewportMinimum === a[f].minimum && 0 < a[f].labelAngle && 0 < n ? s -= n : a[f].viewportMaximum === a[f].maximum && a[f].viewportMinimum === a[f].minimum && 0 > a[f].labelAngle && 0 < H ? h += H : a[f].viewportMaximum === a[f].maximum && a[f].viewportMinimum === a[f].minimum && 0 === a[f].labelAngle && (0 < H && (h += H),
                                0 < n && (s -= n)));
                                p.panEnabled ? X = l(p.sessionVariables.axisX.height) || p.stockChart ? p.sessionVariables.axisX.height = X : p.sessionVariables.axisX.height : p.sessionVariables.axisX.height = X;
                                n = Math.round(e.y2 - X - d + V);
                                k = Math.round(e.y2);
                                a[f].lineCoordinates.x2 = s;
                                a[f].lineCoordinates.width = s - h;
                                a[f].lineCoordinates.y1 = n;
                                a[f].lineCoordinates.y2 = n;
                                a[f].bounds = {
                                    x1: h,
                                    y1: n,
                                    x2: s,
                                    y2: k - (X + d - x[f] - V),
                                    width: s - h
                                };
                                a[f].bounds.height = a[f].bounds.y2 - a[f].bounds.y1;
                                "inside" === a[f].labelPlacement && (a[f].lineCoordinates.y1 = a[0].bounds.y1 + V + (a[f].labelEffectiveHeight || 0) + (p.isNavigator ? 0 : 2),
                                a[f].lineCoordinates.y2 = a[f].lineCoordinates.y1 + a[f].lineThickness / 2);
                                "inside" === a[f].tickPlacement && (a[f].lineCoordinates.y1 += a[f].tickLength,
                                a[f].lineCoordinates.y2 = a[f].lineCoordinates.y1 + a[f].lineThickness / 2)
                            }
                            V += x[f] + a[f].margin
                        }
                        $ = 0 === a[0].dataSeries.length;
                        if (!$)
                            for (f = 0; f < a[0].dataSeries.length; f++) {
                                if (a[0].dataSeries[f].dataPoints) {
                                    $ = !1;
                                    break
                                }
                                $ = !0
                            }
                        if ($)
                            for ($ = !1,
                            f = 1; f < a.length; f++)
                                0 !== a[f].dataSeries.length && ($ ? a[f].lineCoordinates.x2 > a[0].lineCoordinates.x2 && (a[0].lineCoordinates.x2 = a[f].lineCoordinates.x2) : (a[0].lineCoordinates.x2 = a[f].lineCoordinates.x2,
                                $ = !0),
                                a[0].lineCoordinates.width = a[0].lineCoordinates.x2 - a[0].lineCoordinates.x1)
                    }
                    if (g && 0 < g.length)
                        for (f = 0; f < g.length; f++)
                            g[f].lineCoordinates.x1 = h,
                            g[f].lineCoordinates.x2 = s,
                            g[f].lineCoordinates.width = Math.abs(s - h),
                            g[f]._labels && 1 < g[f]._labels.length && (n = g[f]._labels[1],
                            T = "dateTime" === g[f].valueType ? g[f]._labels[g[f]._labels.length - 2] : g[f]._labels[g[f]._labels.length - 1],
                            z = n.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(n.textBlock.angle)) + (n.textBlock.height - T.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(n.textBlock.angle)),
                            r = T.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(T.textBlock.angle)) + (T.textBlock.height - T.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(T.textBlock.angle))),
                            p.panEnabled ? Y = l(p.sessionVariables.axisX2.height) || p.stockChart ? p.sessionVariables.axisX2.height = Y : p.sessionVariables.axisX2.height : p.sessionVariables.axisX2.height = Y,
                            n = Math.round(e.y1),
                            k = g[f].lineCoordinates.y1 = n + Y + L - U,
                            g[f].lineCoordinates.y2 = n,
                            g[f].bounds = {
                                x1: h,
                                y1: n + (Y + L - v[f] - U),
                                x2: s,
                                y2: k,
                                width: s - h
                            },
                            g[f].bounds.height = g[f].bounds.y2 - g[f].bounds.y1,
                            "inside" === g[f].labelPlacement && (g[f].lineCoordinates.y1 = g[0].bounds.y2 - U - (g[f].labelEffectiveHeight || 0) - 5),
                            "inside" === g[f].tickPlacement && (g[f].lineCoordinates.y1 -= g[f].tickLength),
                            U += v[f] + g[f].margin;
                    if (b && 0 < b.length)
                        for (f = 0; f < b.length; f++)
                            $ = p.isNavigator ? 0 : 10,
                            b[f] && (h = s = Math.round((a[0] ? a[0].lineCoordinates.x1 : g[0].lineCoordinates.x1) + (b[0] ? ("inside" === b[0].labelPlacement ? b[0].labelEffectiveWidth + (p.isNavigator ? 0 : 5) : 0) + ("inside" === b[0].tickPlacement ? b[0].tickLength : 0) : 0)),
                            $ = b[f]._labels && 0 < b[f]._labels.length ? b[f]._labels[b[f]._labels.length - 1].textBlock._lineHeight / 2 : m,
                            n = Math.round(Math.max(e.y1 + Y + L - (g[0] ? ("inside" === g[0].labelPlacement ? g[0].labelEffectiveHeight + 5 : 0) + ("inside" === g[0].tickPlacement ? g[0].tickLength : 0) : 0), Math.max($, m))),
                            $ = 0 < a.length ? 0 : b[f]._labels && 0 < b[f]._labels.length ? b[f]._labels[0].textBlock.height / 2 : m,
                            k = Math.round(e.y2 - X + (a[0] ? ("inside" === a[0].labelPlacement ? a[0].labelEffectiveHeight + (p.isNavigator ? 0 : 2) : 0) + ("inside" === a[0].tickPlacement ? a[0].tickLength : 0) : 0) - d - $),
                            b[f].lineCoordinates = {
                                x1: h - S,
                                y1: n,
                                x2: s - S,
                                y2: k,
                                height: Math.abs(k - n)
                            },
                            b[f].bounds = {
                                x1: h - (A[f] + S),
                                y1: n,
                                x2: s - S,
                                y2: k,
                                height: k - n
                            },
                            b[f].bounds.width = b[f].bounds.x2 - b[f].bounds.x1,
                            "inside" === b[f].labelPlacement && (b[f].lineCoordinates.x1 = b[0].bounds.x1 + A[0] - S - (b[f].labelEffectiveWidth || 0) - 5,
                            b[f].lineCoordinates.x2 = b[f].lineCoordinates.x1 + b[f].lineThickness / 2),
                            "inside" === b[f].tickPlacement && (b[f].lineCoordinates.x1 -= b[f].tickLength,
                            b[f].lineCoordinates.x2 = b[f].lineCoordinates.x1 + b[f].lineThickness / 2),
                            b[f].title && (b[f]._titleTextBlock.maxWidth = 0 < b[f].titleMaxWidth && b[f].titleMaxWidth < b[f].lineCoordinates.height ? b[f].titleMaxWidth : b[f].lineCoordinates.height),
                            S += A[f] + b[f].margin);
                    if (c && 0 < c.length)
                        for (f = 0; f < c.length; f++)
                            c[f] && (h = s = Math.round((a[0] ? a[0].lineCoordinates.x2 : g[0].lineCoordinates.x2) - (c[0] ? ("inside" === c[0].labelPlacement ? c[0].labelEffectiveWidth + (p.isNavigator ? 0 : 5) : 0) + ("inside" === c[0].tickPlacement ? c[0].tickLength : 0) : 0)),
                            $ = c[f]._labels && 0 < c[f]._labels.length ? c[f]._labels[c[f]._labels.length - 1].textBlock.height / 2 : 0,
                            n = Math.round(Math.max(e.y1 + Y + L - (g[0] ? ("inside" === g[0].labelPlacement ? g[0].labelEffectiveHeight + (p.isNavigator ? 0 : 5) : 0) + ("inside" === g[0].tickPlacement ? g[0].tickLength : 0) : 0), Math.max($, m))),
                            $ = 0 < a.length ? 0 : c[f]._labels && 0 < c[f]._labels.length ? c[f]._labels[0].textBlock.height / 2 : 0,
                            k = Math.round(e.y2 - (X + d + $) + (a[0] ? ("inside" === a[0].labelPlacement ? a[0].labelEffectiveHeight + (p.isNavigator ? 0 : 2) : 0) + ("inside" === a[0].tickPlacement ? a[0].tickLength : 0) : 0)),
                            c[f].lineCoordinates = {
                                x1: h + W,
                                y1: n,
                                x2: h + W,
                                y2: k,
                                height: Math.abs(k - n)
                            },
                            c[f].bounds = {
                                x1: h + W,
                                y1: n,
                                x2: s + B[f] + W,
                                y2: k,
                                height: k - n
                            },
                            c[f].bounds.width = c[f].bounds.x2 - c[f].bounds.x1,
                            "inside" === c[f].labelPlacement && (c[f].lineCoordinates.x1 = c[0].bounds.x1 + W + (c[f].labelEffectiveWidth || 0) + (p.isNavigator ? 0 : 5),
                            c[f].lineCoordinates.x2 = c[f].lineCoordinates.x1 + c[f].lineThickness / 2),
                            "inside" === c[f].tickPlacement && (c[f].lineCoordinates.x1 += c[f].tickLength,
                            c[f].lineCoordinates.x2 = c[f].lineCoordinates.x1 + c[f].lineThickness / 2),
                            c[f].title && (c[f]._titleTextBlock.maxWidth = 0 < c[f].titleMaxWidth && c[f].titleMaxWidth < c[f].lineCoordinates.height ? c[f].titleMaxWidth : c[f].lineCoordinates.height),
                            W += B[f] + c[f].margin);
                    if (a && 0 < a.length)
                        for (f = 0; f < a.length; f++)
                            a[f] && (a[f].calculateValueToPixelConversionParameters(),
                            a[f].calculateBreaksSizeInValues(),
                            a[f]._labels && 1 < a[f]._labels.length && (C = (a[f].logarithmic ? Math.log(a[f]._labels[1].position / a[f].viewportMinimum) / a[f].conversionParameters.lnLogarithmBase : a[f]._labels[1].position - a[f].viewportMinimum) * Math.abs(a[f].conversionParameters.pixelPerUnit) + a[f].lineCoordinates.x1,
                            h = a[f]._labels[a[f]._labels.length - ("dateTime" === a[f].valueType ? 2 : 1)].position,
                            h = a[f].getApparentDifference(a[f].viewportMinimum, h),
                            D = a[f].logarithmic ? (1 < h ? Math.log(h) / a[f].conversionParameters.lnLogarithmBase * Math.abs(a[f].conversionParameters.pixelPerUnit) : 0) + a[f].lineCoordinates.x1 : (0 < h ? h * Math.abs(a[f].conversionParameters.pixelPerUnit) : 0) + a[f].lineCoordinates.x1));
                    if (g && 0 < g.length)
                        for (f = 0; f < g.length; f++)
                            g[f].calculateValueToPixelConversionParameters(),
                            g[f].calculateBreaksSizeInValues(),
                            g[f]._labels && 1 < g[f]._labels.length && (C = (g[f].logarithmic ? Math.log(g[f]._labels[1].position / g[f].viewportMinimum) / g[f].conversionParameters.lnLogarithmBase : g[f]._labels[1].position - g[f].viewportMinimum) * Math.abs(g[f].conversionParameters.pixelPerUnit) + g[f].lineCoordinates.x1,
                            h = g[f]._labels[g[f]._labels.length - ("dateTime" === g[f].valueType ? 2 : 1)].position,
                            h = g[f].getApparentDifference(g[f].viewportMinimum, h),
                            D = g[f].logarithmic ? (1 < h ? Math.log(h) / g[f].conversionParameters.lnLogarithmBase * Math.abs(g[f].conversionParameters.pixelPerUnit) : 0) + g[f].lineCoordinates.x1 : (0 < h ? h * Math.abs(g[f].conversionParameters.pixelPerUnit) : 0) + g[f].lineCoordinates.x1);
                    for (f = 0; f < q.length; f++)
                        "axisY" === q[f].type && (q[f].calculateValueToPixelConversionParameters(),
                        q[f].calculateBreaksSizeInValues());
                    if (0 < y) {
                        if (a && 0 < a.length)
                            for (f = 0; f < a.length; f++)
                                u = P[y - 1][f] === P[y][f] ? !0 : !1;
                        else
                            u = !0;
                        if (g && 0 < g.length)
                            for (f = 0; f < g.length; f++)
                                K = R[y - 1][f] === R[y][f] ? !0 : !1;
                        else
                            K = !0;
                        if (b && 0 < b.length)
                            for (f = 0; f < b.length; f++)
                                J = Q[y - 1][f] === Q[y][f] ? !0 : !1;
                        else
                            J = !0;
                        if (c && 0 < c.length)
                            for (f = 0; f < c.length; f++)
                                M = F[y - 1][f] === F[y][f] ? !0 : !1;
                        else
                            M = !0
                    }
                    if (u && K && J && M)
                        break;
                    y++
                }
                if (a && 0 < a.length)
                    for (f = 0; f < a.length; f++)
                        a[f].calculateStripLinesThicknessInValues(),
                        a[f].calculateBreaksInPixels();
                if (g && 0 < g.length)
                    for (f = 0; f < g.length; f++)
                        g[f].calculateStripLinesThicknessInValues(),
                        g[f].calculateBreaksInPixels();
                if (b && 0 < b.length)
                    for (f = 0; f < b.length; f++)
                        b[f].calculateStripLinesThicknessInValues(),
                        b[f].calculateBreaksInPixels();
                if (c && 0 < c.length)
                    for (f = 0; f < c.length; f++)
                        c[f].calculateStripLinesThicknessInValues(),
                        c[f].calculateBreaksInPixels()
            } else {
                m = [];
                C = [];
                H = [];
                z = [];
                r = [];
                D = [];
                P = [];
                for (R = []; 4 > y; ) {
                    X = W = S = ba = $ = L = d = F = Q = U = Y = 0;
                    if (a && 0 < a.length)
                        for (H = [],
                        f = W = 0; f < a.length; f++)
                            H.push(Math.ceil(a[f] ? a[f].createLabelsAndCalculateWidth() : 0)),
                            W += H[f],
                            d += a[f] && !p.isNavigator ? a[f].margin : 0;
                    else
                        H.push(Math.ceil(a[0] ? a[0].createLabelsAndCalculateWidth() : 0));
                    P.push(H);
                    if (g && 0 < g.length)
                        for (z = [],
                        f = X = 0; f < g.length; f++)
                            z.push(Math.ceil(g[f] ? g[f].createLabelsAndCalculateWidth() : 0)),
                            X += z[f],
                            L += g[f] ? g[f].margin : 0;
                    else
                        z.push(Math.ceil(g[0] ? g[0].createLabelsAndCalculateWidth() : 0));
                    R.push(z);
                    if (b && 0 < b.length)
                        for (f = 0; f < b.length; f++)
                            b[f].lineCoordinates = {},
                            h = Math.round(e.x1 + W + d - (a[0] ? ("inside" === a[0].labelPlacement ? a[0].labelEffectiveWidth + (p.isNavigator ? 0 : 5) : 0) + ("inside" === a[0].tickPlacement ? a[0].tickLength : 0) : 0)),
                            s = Math.round(Math.min(e.x2 - X - L + (g[0] ? ("inside" === g[0].labelPlacement ? g[0].labelEffectiveWidth + (p.isNavigator ? 0 : 5) : 0) + ("inside" === g[0].tickPlacement ? g[0].tickLength : 0) : 0), p.width - 10)),
                            b[f].labelAutoFit && !l(x) && (0 < !a.length && (h = 0 > b[f].labelAngle ? Math.max(h, x) : 0 === b[f].labelAngle ? Math.max(h, x / 2) : h),
                            0 < !g.length && (s = 0 < b[f].labelAngle ? s - v / 2 : 0 === b[f].labelAngle ? s - v / 2 : s)),
                            b[f].lineCoordinates.x1 = h,
                            b[f].lineCoordinates.x2 = s,
                            b[f].lineCoordinates.width = Math.abs(s - h),
                            b[f].title && (b[f]._titleTextBlock.maxWidth = 0 < b[f].titleMaxWidth && b[f].titleMaxWidth < b[f].lineCoordinates.width ? b[f].titleMaxWidth : b[f].lineCoordinates.width);
                    if (c && 0 < c.length)
                        for (f = 0; f < c.length; f++)
                            c[f].lineCoordinates = {},
                            h = Math.round(e.x1 + W + d - (a[0] ? ("inside" === a[0].labelPlacement ? a[0].labelEffectiveWidth + (p.isNavigator ? 0 : 5) : 0) + ("inside" === a[0].tickPlacement ? a[0].tickLength : 0) : 0)),
                            s = Math.round(Math.min(e.x2 - X - L + (g[0] ? ("inside" === g[0].labelPlacement ? g[0].labelEffectiveWidth + (p.isNavigator ? 0 : 5) : 0) + ("inside" === g[0].tickPlacement ? g[0].tickLength : 0) : 0), c[f].chart.width - 10)),
                            c[f] && c[f].labelAutoFit && !l(A) && (0 < !a.length && (h = 0 < c[f].labelAngle ? Math.max(h, A) : 0 === c[f].labelAngle ? Math.max(h, A / 2) : h),
                            0 < !g.length && (s -= B / 2)),
                            c[f].lineCoordinates.x1 = h,
                            c[f].lineCoordinates.x2 = s,
                            c[f].lineCoordinates.width = Math.abs(s - h),
                            c[f].title && (c[f]._titleTextBlock.maxWidth = 0 < c[f].titleMaxWidth && c[f].titleMaxWidth < c[f].lineCoordinates.width ? c[f].titleMaxWidth : c[f].lineCoordinates.width);
                    if (b && 0 < b.length)
                        for (m = [],
                        f = S = 0; f < b.length; f++)
                            m.push(Math.ceil(b[f] ? b[f].createLabelsAndCalculateHeight() : 0)),
                            S += m[f] + b[f].margin,
                            $ += b[f].margin;
                    else
                        m.push(Math.ceil(b[0] ? b[0].createLabelsAndCalculateHeight() : 0));
                    r.push(m);
                    if (c && 0 < c.length)
                        for (C = [],
                        f = 0; f < c.length; f++)
                            C.push(Math.ceil(c[f] ? c[f].createLabelsAndCalculateHeight() : 0)),
                            ba += c[f].margin;
                    else
                        C.push(Math.ceil(c[0] ? c[0].createLabelsAndCalculateHeight() : 0));
                    D.push(C);
                    if (b && 0 < b.length)
                        for (f = 0; f < b.length; f++)
                            0 < b[f]._labels.length && (n = b[f]._labels[0],
                            T = b[f]._labels[b[f]._labels.length - 1],
                            x = n.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(n.textBlock.angle)) + (n.textBlock.height - T.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(n.textBlock.angle)),
                            v = T.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(T.textBlock.angle)) + (T.textBlock.height - T.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(T.textBlock.angle)));
                    if (c && 0 < c.length)
                        for (f = 0; f < c.length; f++)
                            c[f] && 0 < c[f]._labels.length && (n = c[f]._labels[0],
                            T = c[f]._labels[c[f]._labels.length - 1],
                            A = n.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(n.textBlock.angle)) + (n.textBlock.height - T.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(n.textBlock.angle)),
                            B = T.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(T.textBlock.angle)) + (T.textBlock.height - T.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(T.textBlock.angle)));
                    if (p.panEnabled)
                        for (f = 0; f < b.length; f++)
                            m[f] = l(p.sessionVariables.axisY[f].height) ? p.sessionVariables.axisY[f].height = m[f] : p.sessionVariables.axisY[f].height;
                    else
                        for (f = 0; f < b.length; f++)
                            p.sessionVariables.axisY[f].height = m[f];
                    if (b && 0 < b.length)
                        for (f = b.length - 1; 0 <= f; f--)
                            n = Math.round(e.y2),
                            k = Math.round(e.y2 > b[f].chart.height ? b[f].chart.height : e.y2),
                            b[f].lineCoordinates.y1 = n - (m[f] + b[f].margin + Y),
                            b[f].lineCoordinates.y2 = n - (m[f] + b[f].margin + Y),
                            "inside" === b[f].labelPlacement && (b[f].lineCoordinates.y1 = b[f].lineCoordinates.y1 + b[f].labelEffectiveHeight + (p.isNavigator ? 0 : 2),
                            b[f].lineCoordinates.y2 = b[f].lineCoordinates.y1 + b[f].lineThickness / 2),
                            "inside" === b[f].tickPlacement && (b[f].lineCoordinates.y1 += b[f].tickLength,
                            b[f].lineCoordinates.y2 = b[f].lineCoordinates.y1 + b[f].lineThickness / 2),
                            b[f].bounds = {
                                x1: h,
                                y1: n - (m[f] + Y + b[f].margin),
                                x2: s,
                                y2: k - (Y + b[f].margin),
                                width: s - h,
                                height: m[f]
                            },
                            b[f].title && (b[f]._titleTextBlock.maxWidth = 0 < b[f].titleMaxWidth && b[f].titleMaxWidth < b[f].lineCoordinates.width ? b[f].titleMaxWidth : b[f].lineCoordinates.width),
                            Y += m[f] + b[f].margin;
                    if (c && 0 < c.length)
                        for (f = c.length - 1; 0 <= f; f--)
                            c[f] && (n = Math.round(e.y1),
                            k = Math.round(e.y1 + (C[f] + c[f].margin + U)),
                            c[f].lineCoordinates.y1 = k,
                            c[f].lineCoordinates.y2 = k,
                            "inside" === c[f].labelPlacement && (c[f].lineCoordinates.y1 = k - c[f].labelEffectiveHeight - 5,
                            c[f].lineCoordinates.y2 = c[f].lineCoordinates.y1 - c[f].lineThickness / 2),
                            "inside" === c[f].tickPlacement && (c[f].lineCoordinates.y1 -= c[f].tickLength,
                            c[f].lineCoordinates.y2 = c[f].lineCoordinates.y1 - c[f].lineThickness / 2),
                            c[f].bounds = {
                                x1: h,
                                y1: n + (c[f].margin + U),
                                x2: s,
                                y2: k,
                                width: s - h
                            },
                            c[f].bounds.height = c[f].bounds.y2 - c[f].bounds.y1,
                            c[f].title && (c[f]._titleTextBlock.maxWidth = 0 < c[f].titleMaxWidth && c[f].titleMaxWidth < c[f].lineCoordinates.width ? c[f].titleMaxWidth : c[f].lineCoordinates.width),
                            U += C[f] + c[f].margin);
                    if (a && 0 < a.length)
                        for (f = 0; f < a.length; f++) {
                            $ = a[f]._labels && 0 < a[f]._labels.length ? a[f]._labels[0].textBlock.fontSize / 2 : 0;
                            h = Math.round(e.x1 + d);
                            n = c && 0 < c.length ? Math.round(c[0] ? c[0].lineCoordinates.y2 : e.y1 < Math.max($, 10) ? Math.max($, 10) : e.y1) : e.y1 < Math.max($, 10) ? Math.max($, 10) : e.y1;
                            s = Math.round(e.x1 + W + d);
                            k = b && 0 < b.length ? Math.round(b[0] ? b[0].lineCoordinates.y1 : e.y2 - S > p.height - Math.max($, 10) ? p.height - Math.max($, 10) : e.y2 - S) : e.y2 > p.height - Math.max($, 10) ? p.height - Math.max($, 10) : e.y2;
                            if (b && 0 < b.length)
                                for (T = 0; T < b.length; T++)
                                    b[T] && b[T].labelAutoFit && (s = b[T].lineCoordinates.x1 + (a[0] ? ("inside" === a[0].labelPlacement ? a[0].labelEffectiveWidth + (p.isNavigator ? 0 : 5) : 0) + ("inside" === a[0].tickPlacement ? a[0].tickLength : 0) : 0),
                                    h = 0 > b[T].labelAngle || 0 === b[T].labelAngle ? s - W : h);
                            if (c && 0 < c.length)
                                for (T = 0; T < c.length; T++)
                                    c[T] && c[T].labelAutoFit && (s = c[T].lineCoordinates.x1 + (a[0] ? ("inside" === a[0].labelPlacement ? a[0].labelEffectiveWidth + (p.isNavigator ? 0 : 5) : 0) + ("inside" === a[0].tickPlacement ? a[0].tickLength : 0) : 0),
                                    h = s - W);
                            a[f].lineCoordinates = {
                                x1: s - Q,
                                y1: n,
                                x2: s - Q,
                                y2: k,
                                height: Math.abs(k - n)
                            };
                            "inside" === a[f].labelPlacement && (a[f].lineCoordinates.x1 = a[f].lineCoordinates.x1 - a[f].labelEffectiveWidth - 5,
                            a[f].lineCoordinates.x2 = a[f].lineCoordinates.x1 + a[f].lineThickness / 2);
                            "inside" === a[f].tickPlacement && (a[f].lineCoordinates.x1 -= a[f].tickLength,
                            a[f].lineCoordinates.x2 = a[f].lineCoordinates.x1 + a[f].lineThickness / 2);
                            a[f].bounds = {
                                x1: s - (H[f] + Q),
                                y1: n,
                                x2: s - Q,
                                y2: k,
                                height: k - n
                            };
                            a[f].bounds.width = a[f].bounds.x2 - a[f].bounds.x1;
                            a[f].title && (a[f]._titleTextBlock.maxWidth = 0 < a[f].titleMaxWidth && a[f].titleMaxWidth < a[f].lineCoordinates.height ? a[f].titleMaxWidth : a[f].lineCoordinates.height);
                            a[f].calculateValueToPixelConversionParameters();
                            a[f].calculateBreaksSizeInValues();
                            Q += H[f] + a[f].margin
                        }
                    if (g && 0 < g.length)
                        for (f = 0; f < g.length; f++) {
                            $ = g[f]._labels && 0 < g[f]._labels.length ? g[f]._labels[0].textBlock.fontSize / 2 : 0;
                            s = Math.round(e.x1 - L);
                            n = c && 0 < c.length ? Math.round(c[0] ? c[0].lineCoordinates.y2 : e.y1 < Math.max($, 10) ? Math.max($, 10) : e.y1) : e.y1 < Math.max($, 10) ? Math.max($, 10) : e.y1;
                            h = Math.round(e.x2 - X - L);
                            k = b && 0 < b.length ? Math.round(b[0] ? b[0].lineCoordinates.y1 : e.y2 - S > p.height - Math.max($, 10) ? p.height - Math.max($, 10) : e.y2 - S) : e.y2 > p.height - Math.max($, 10) ? p.height - Math.max($, 10) : e.y2;
                            if (b && 0 < b.length)
                                for (T = 0; T < b.length; T++)
                                    b[T] && b[T].labelAutoFit && (h = b[T].lineCoordinates.x2 - (g[0] ? ("inside" === g[0].labelPlacement ? g[0].labelEffectiveWidth + (p.isNavigator ? 0 : 5) : 0) + ("inside" === g[0].tickPlacement ? g[0].tickLength : 0) : 0),
                                    s = 0 > b[T].labelAngle || 0 === b[T].labelAngle ? h + X : h);
                            if (c && 0 < c.length)
                                for (T = 0; T < c.length; T++)
                                    c[T] && c[T].labelAutoFit && (h = c[T].lineCoordinates.x2 - (g[0] ? ("inside" === g[0].labelPlacement ? g[0].labelEffectiveWidth + (p.isNavigator ? 0 : 5) : 0) + ("inside" === g[0].tickPlacement ? g[0].tickLength : 0) : 0),
                                    s = h + X);
                            g[f].lineCoordinates = {
                                x1: h + F,
                                y1: n,
                                x2: h + F,
                                y2: k,
                                height: Math.abs(k - n)
                            };
                            "inside" === g[f].labelPlacement && (g[f].lineCoordinates.x1 = g[f].lineCoordinates.x1 + g[f].labelEffectiveWidth + (p.isNavigator ? 0 : 5),
                            g[f].lineCoordinates.x2 = g[f].lineCoordinates.x1 + g[f].lineThickness / 2);
                            "inside" === g[f].tickPlacement && (g[f].lineCoordinates.x1 += g[f].tickLength,
                            g[f].lineCoordinates.x2 = g[f].lineCoordinates.x1 + g[f].lineThickness / 2);
                            g[f].bounds = {
                                x1: h + F,
                                y1: n,
                                x2: h + z[f] + F,
                                y2: k,
                                height: k - n
                            };
                            g[f].bounds.width = g[f].bounds.x2 - g[f].bounds.x1;
                            g[f].title && (g[f]._titleTextBlock.maxWidth = 0 < g[f].titleMaxWidth && g[f].titleMaxWidth < g[f].lineCoordinates.height ? g[f].titleMaxWidth : g[f].lineCoordinates.height);
                            g[f].calculateValueToPixelConversionParameters();
                            g[f].calculateBreaksSizeInValues();
                            F += z[f] + g[f].margin
                        }
                    for (f = 0; f < q.length; f++)
                        "axisY" === q[f].type && (q[f].calculateValueToPixelConversionParameters(),
                        q[f].calculateBreaksSizeInValues());
                    if (0 < y) {
                        if (a && 0 < a.length)
                            for (f = 0; f < a.length; f++)
                                u = P[y - 1][f] === P[y][f] ? !0 : !1;
                        else
                            u = !0;
                        if (g && 0 < g.length)
                            for (f = 0; f < g.length; f++)
                                K = R[y - 1][f] === R[y][f] ? !0 : !1;
                        else
                            K = !0;
                        if (b && 0 < b.length)
                            for (f = 0; f < b.length; f++)
                                J = r[y - 1][f] === r[y][f] ? !0 : !1;
                        else
                            J = !0;
                        if (c && 0 < c.length)
                            for (f = 0; f < c.length; f++)
                                M = D[y - 1][f] === D[y][f] ? !0 : !1;
                        else
                            M = !0
                    }
                    if (u && K && J && M)
                        break;
                    y++
                }
                if (b && 0 < b.length)
                    for (f = 0; f < b.length; f++)
                        b[f].calculateStripLinesThicknessInValues(),
                        b[f].calculateBreaksInPixels();
                if (c && 0 < c.length)
                    for (f = 0; f < c.length; f++)
                        c[f].calculateStripLinesThicknessInValues(),
                        c[f].calculateBreaksInPixels();
                if (a && 0 < a.length)
                    for (f = 0; f < a.length; f++)
                        a[f].calculateStripLinesThicknessInValues(),
                        a[f].calculateBreaksInPixels();
                if (g && 0 < g.length)
                    for (f = 0; f < g.length; f++)
                        g[f].calculateStripLinesThicknessInValues(),
                        g[f].calculateBreaksInPixels()
            }
        }
        ;
        A.render = function(a, g, b, c, d) {
            var e = a[0] ? a[0].chart : g[0].chart
              , h = e.ctx
              , l = [];
            l.push.apply(l, a);
            l.push.apply(l, g);
            l.push.apply(l, b);
            l.push.apply(l, c);
            e.alignVerticalAxes && e.alignVerticalAxes();
            h.save();
            "normal" === d && (h.beginPath(),
            a && a.length && h.rect(2, a[0].bounds.y1, a[0].chart.width - 4, a[a.length - 1].bounds.y2),
            g && g.length && h.rect(2, g[g.length - 1].bounds.y1, g[0].chart.width - 4, g[0].bounds.y2),
            h.clip());
            if (a && 0 < a.length)
                for (d = 0; d < a.length; d++)
                    a[d].renderLabelsTicksAndTitle();
            if (g && 0 < g.length)
                for (d = 0; d < g.length; d++)
                    g[d].renderLabelsTicksAndTitle();
            h.restore();
            if (b && 0 < b.length)
                for (d = 0; d < b.length; d++)
                    b[d].renderLabelsTicksAndTitle();
            if (c && 0 < c.length)
                for (d = 0; d < c.length; d++)
                    c[d].renderLabelsTicksAndTitle();
            e.preparePlotArea();
            a = e.plotArea;
            h.save();
            h.beginPath();
            h.rect(a.x1, a.y1, Math.abs(a.x2 - a.x1), Math.abs(a.y2 - a.y1));
            h.clip();
            if (l && 0 < l.length) {
                for (d = 0; d < l.length; d++)
                    l[d].renderStripLinesOfThicknessType("value");
                for (d = 0; d < l.length; d++)
                    l[d].renderInterlacedColors()
            }
            h.restore();
            h = !1;
            if (l && 0 < l.length) {
                for (d = 0; d < l.length; d++)
                    l[d].renderGrid(),
                    s && (l[d].createMask(),
                    l[d].renderBreaksBackground());
                for (d = 0; d < l.length; d++)
                    l[d].renderAxisLine();
                for (d = 0; d < l.length; d++)
                    l[d].renderStripLinesOfThicknessType("pixel"),
                    l[d].crosshair && l[d].crosshair.enabled && (h = !0,
                    e.clearedOverlayedCanvas = l[d].type)
            }
            if (h || !h && e.clearedOverlayedCanvas && 0 <= e.clearedOverlayedCanvas.indexOf("axis"))
                e.resetOverlayedCanvas(),
                e.renderCrosshairs(null)
        }
        ;
        A.prototype.calculateStripLinesThicknessInValues = function() {
            for (var a = 0; a < this.stripLines.length; a++)
                if (null !== this.stripLines[a].startValue && null !== this.stripLines[a].endValue) {
                    var g = Math.min(this.stripLines[a].startValue, this.stripLines[a].endValue)
                      , b = Math.max(this.stripLines[a].startValue, this.stripLines[a].endValue)
                      , c = this.getApparentDifference(g, b);
                    this.stripLines[a].value = this.convertPixelToValue((this.convertValueToPixel(g) + this.convertValueToPixel(b)) / 2);
                    this.stripLines[a].thickness = c;
                    this.stripLines[a]._thicknessType = "value"
                }
        }
        ;
        A.prototype.calculateBreaksSizeInValues = function() {
            for (var a = "left" === this._position || "right" === this._position ? this.lineCoordinates.height || this.chart.height : this.lineCoordinates.width || this.chart.width, g = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [], b = this.conversionParameters.pixelPerUnit || a / (this.logarithmic ? this.conversionParameters.maximum / this.conversionParameters.minimum : this.conversionParameters.maximum - this.conversionParameters.minimum), c = this.scaleBreaks && !l(this.scaleBreaks.options.spacing), d, e = 0; e < g.length; e++)
                d = c || !l(g[e].options.spacing),
                g[e].spacing = Va(g[e].spacing, a, 8, d ? 0.1 * a : 8, d ? 0 : 3) << 0,
                g[e].size = 0 > g[e].spacing ? 0 : Math.abs(g[e].spacing / b),
                this.logarithmic && (g[e].size = Math.pow(this.logarithmBase, g[e].size))
        }
        ;
        A.prototype.calculateBreaksInPixels = function() {
            if (!(this.scaleBreaks && 0 >= this.scaleBreaks._appliedBreaks.length)) {
                var a = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [];
                a.length && (this.scaleBreaks.firstBreakIndex = this.scaleBreaks.lastBreakIndex = null);
                for (var g = 0; g < a.length && !(a[g].startValue > this.conversionParameters.maximum); g++)
                    a[g].endValue < this.conversionParameters.minimum || (l(this.scaleBreaks.firstBreakIndex) && (this.scaleBreaks.firstBreakIndex = g),
                    a[g].startValue >= this.conversionParameters.minimum && (a[g].startPixel = this.convertValueToPixel(a[g].startValue),
                    this.scaleBreaks.lastBreakIndex = g),
                    a[g].endValue <= this.conversionParameters.maximum && (a[g].endPixel = this.convertValueToPixel(a[g].endValue)))
            }
        }
        ;
        A.prototype.renderLabelsTicksAndTitle = function() {
            var a = this
              , g = !1
              , b = 0
              , c = 0
              , d = 1
              , e = 0;
            0 !== this.labelAngle && 360 !== this.labelAngle && (d = 1.2);
            if ("undefined" === typeof this.options.interval) {
                if ("bottom" === this._position || "top" === this._position)
                    if (this.logarithmic && !this.equidistantInterval && this.labelAutoFit) {
                        for (var b = [], d = 0 !== this.labelAngle && 360 !== this.labelAngle ? 1 : 1.2, h, l = this.viewportMaximum, n = this.lineCoordinates.width / Math.log(this.range), k = this._labels.length - 1; 0 <= k; k--) {
                            m = this._labels[k];
                            if (m.position < this.viewportMinimum)
                                break;
                            m.position > this.viewportMaximum || !(k === this._labels.length - 1 || h < Math.log(l / m.position) * n / d) || (b.push(m),
                            l = m.position,
                            h = m.textBlock.width * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + m.textBlock.height * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)))
                        }
                        this._labels = b
                    } else {
                        for (k = 0; k < this._labels.length; k++)
                            m = this._labels[k],
                            m.position < this.viewportMinimum || (h = m.textBlock.width * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + m.textBlock.height * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)),
                            b += h);
                        b > this.lineCoordinates.width * d && this.labelAutoFit && (g = !0)
                    }
                if ("left" === this._position || "right" === this._position)
                    if (this.logarithmic && !this.equidistantInterval && this.labelAutoFit) {
                        for (var b = [], p, l = this.viewportMaximum, n = this.lineCoordinates.height / Math.log(this.range), k = this._labels.length - 1; 0 <= k; k--) {
                            m = this._labels[k];
                            if (m.position < this.viewportMinimum)
                                break;
                            m.position > this.viewportMaximum || !(k === this._labels.length - 1 || p < Math.log(l / m.position) * n) || (b.push(m),
                            l = m.position,
                            p = m.textBlock.height * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + m.textBlock.width * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)))
                        }
                        this._labels = b
                    } else {
                        for (k = 0; k < this._labels.length; k++)
                            m = this._labels[k],
                            m.position < this.viewportMinimum || (p = m.textBlock.height * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + m.textBlock.width * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)),
                            c += p);
                        c > this.lineCoordinates.height * d && this.labelAutoFit && (g = !0)
                    }
            }
            this.logarithmic && (!this.equidistantInterval && this.labelAutoFit) && this._labels.sort(function(a, b) {
                return a.position - b.position
            });
            var k = 0, m, q;
            if ("bottom" === this._position) {
                for (k = 0; k < this._labels.length; k++)
                    m = this._labels[k],
                    m.position < this.viewportMinimum || m.position > this.viewportMaximum || (q = this.getPixelCoordinatesOnAxis(m.position),
                    this.tickThickness && "inside" != this.tickPlacement && (this.ctx.lineWidth = this.tickThickness,
                    this.ctx.strokeStyle = this.tickColor,
                    c = 1 === this.ctx.lineWidth % 2 ? (q.x << 0) + 0.5 : q.x << 0,
                    this.ctx.beginPath(),
                    this.ctx.moveTo(c, q.y << 0),
                    this.ctx.lineTo(c, q.y + this.tickLength << 0),
                    this.ctx.stroke()),
                    g && 0 !== e++ % 2 && this.labelAutoFit || (0 === m.textBlock.angle ? (q.x -= m.textBlock.width / 2,
                    q.y = "inside" === this.labelPlacement ? q.y - (("inside" === this.tickPlacement ? this.tickLength : 0) + m.textBlock.height - m.textBlock._lineHeight / 2 + 2) : q.y + ("inside" === this.tickPlacement ? 0 : this.tickLength) + m.textBlock._lineHeight / 2 + 5) : 0 > this.labelAngle ? (q.x = q.x - ("inside" === this.labelPlacement ? 0 : m.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle)) + m.textBlock.topPadding * Math.sin(Math.PI / 180 * this.labelAngle),
                    q.y = "inside" === this.labelPlacement ? q.y - ("inside" === this.tickPlacement ? this.tickLength : 0) - 2 - (m.textBlock.height - m.textBlock._lineHeight / 2) * Math.cos(Math.PI / 180 * this.labelAngle) : q.y + ("inside" === this.tickPlacement ? 0 : this.tickLength) + 5 + Math.abs(m.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) - m.textBlock._lineHeight / 2 * Math.cos(Math.PI / 180 * this.labelAngle))) : (q.x = q.x - ("inside" === this.labelPlacement ? m.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0) + m.textBlock.topPadding * Math.sin(Math.PI / 180 * this.labelAngle),
                    q.y = "inside" === this.labelPlacement ? q.y - ("inside" === this.tickPlacement ? this.tickLength : 0) - 2 - m.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) - (m.textBlock.height - m.textBlock._lineHeight / 2) * Math.cos(Math.PI / 180 * this.labelAngle) : q.y + ("inside" === this.tickPlacement ? 0 : this.tickLength) + 5 + Math.abs(m.textBlock._lineHeight / 2 * Math.cos(Math.PI / 180 * this.labelAngle))),
                    m.textBlock.x = q.x,
                    m.textBlock.y = q.y));
                "inside" === this.tickPlacement && this.chart.addEventListener("dataAnimationIterationEnd", function() {
                    for (k = 0; k < a._labels.length; k++)
                        if (m = a._labels[k],
                        !(m.position < a.viewportMinimum || m.position > a.viewportMaximum) && (q = a.getPixelCoordinatesOnAxis(m.position),
                        a.tickThickness)) {
                            a.ctx.lineWidth = a.tickThickness;
                            a.ctx.strokeStyle = a.tickColor;
                            var b = 1 === a.ctx.lineWidth % 2 ? (q.x << 0) + 0.5 : q.x << 0;
                            a.ctx.save();
                            a.ctx.beginPath();
                            a.ctx.moveTo(b, q.y << 0);
                            a.ctx.lineTo(b, q.y - a.tickLength << 0);
                            a.ctx.stroke();
                            a.ctx.restore()
                        }
                }, this);
                this.title && (this._titleTextBlock.measureText(),
                this._titleTextBlock.x = this.lineCoordinates.x1 + this.lineCoordinates.width / 2 - this._titleTextBlock.width / 2,
                this._titleTextBlock.y = this.bounds.y2 - this._titleTextBlock.height + this._titleTextBlock._lineHeight / 2 - 1,
                this.titleMaxWidth = this._titleTextBlock.maxWidth,
                this._titleTextBlock.render(!0))
            } else if ("top" === this._position) {
                for (k = 0; k < this._labels.length; k++)
                    m = this._labels[k],
                    m.position < this.viewportMinimum || m.position > this.viewportMaximum || (q = this.getPixelCoordinatesOnAxis(m.position),
                    this.tickThickness && "inside" != this.tickPlacement && (this.ctx.lineWidth = this.tickThickness,
                    this.ctx.strokeStyle = this.tickColor,
                    c = 1 === this.ctx.lineWidth % 2 ? (q.x << 0) + 0.5 : q.x << 0,
                    this.ctx.beginPath(),
                    this.ctx.moveTo(c, q.y << 0),
                    this.ctx.lineTo(c, q.y - this.tickLength << 0),
                    this.ctx.stroke()),
                    g && 0 !== e++ % 2 && this.labelAutoFit || (0 === m.textBlock.angle ? (q.x -= m.textBlock.width / 2,
                    q.y = "inside" === this.labelPlacement ? q.y + m.textBlock._lineHeight / 2 + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : q.y - (("inside" === this.tickPlacement ? 0 : this.tickLength) + m.textBlock.height - m.textBlock._lineHeight / 2) - 2) : 0 > this.labelAngle ? (q.x = q.x - ("inside" === this.labelPlacement ? m.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0) + m.textBlock.topPadding * Math.sin(Math.PI / 180 * this.labelAngle),
                    q.y = "inside" === this.labelPlacement ? q.y + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 - m.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) + m.textBlock._lineHeight / 2 * Math.cos(Math.PI / 180 * this.labelAngle) : q.y - ("inside" === this.tickPlacement ? 0 : this.tickLength) - 2 - (m.textBlock.height - m.textBlock._lineHeight / 2) * Math.cos(Math.PI / 180 * this.labelAngle)) : (q.x = q.x - ("inside" === this.labelPlacement ? 0 : m.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle)) + m.textBlock.topPadding * Math.sin(Math.PI / 180 * this.labelAngle),
                    q.y = "inside" === this.labelPlacement ? q.y + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 + m.textBlock._lineHeight / 2 * Math.cos(Math.PI / 180 * this.labelAngle) : q.y - ("inside" === this.tickPlacement ? 0 : this.tickLength) - 2 - ((m.textBlock.height - m.textBlock._lineHeight / 2) * Math.cos(Math.PI / 180 * this.labelAngle) + m.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle))),
                    m.textBlock.x = q.x,
                    m.textBlock.y = q.y));
                "inside" === this.tickPlacement && this.chart.addEventListener("dataAnimationIterationEnd", function() {
                    for (k = 0; k < a._labels.length; k++)
                        if (m = a._labels[k],
                        !(m.position < a.viewportMinimum || m.position > a.viewportMaximum) && (q = a.getPixelCoordinatesOnAxis(m.position),
                        a.tickThickness)) {
                            a.ctx.lineWidth = a.tickThickness;
                            a.ctx.strokeStyle = a.tickColor;
                            var b = 1 === a.ctx.lineWidth % 2 ? (q.x << 0) + 0.5 : q.x << 0;
                            a.ctx.save();
                            a.ctx.beginPath();
                            a.ctx.moveTo(b, q.y << 0);
                            a.ctx.lineTo(b, q.y + a.tickLength << 0);
                            a.ctx.stroke();
                            a.ctx.restore()
                        }
                }, this);
                this.title && (this._titleTextBlock.measureText(),
                this._titleTextBlock.x = this.lineCoordinates.x1 + this.lineCoordinates.width / 2 - this._titleTextBlock.width / 2,
                this._titleTextBlock.y = this.bounds.y1 + this._titleTextBlock._lineHeight / 2 + 1,
                this.titleMaxWidth = this._titleTextBlock.maxWidth,
                this._titleTextBlock.render(!0))
            } else if ("left" === this._position) {
                for (k = 0; k < this._labels.length; k++)
                    m = this._labels[k],
                    m.position < this.viewportMinimum || m.position > this.viewportMaximum || (q = this.getPixelCoordinatesOnAxis(m.position),
                    this.tickThickness && "inside" != this.tickPlacement && (this.ctx.lineWidth = this.tickThickness,
                    this.ctx.strokeStyle = this.tickColor,
                    c = 1 === this.ctx.lineWidth % 2 ? (q.y << 0) + 0.5 : q.y << 0,
                    this.ctx.beginPath(),
                    this.ctx.moveTo(q.x << 0, c),
                    this.ctx.lineTo(q.x - this.tickLength << 0, c),
                    this.ctx.stroke()),
                    g && 0 !== e++ % 2 && this.labelAutoFit || (0 === this.labelAngle ? (m.textBlock.y = q.y - m.textBlock.topPadding,
                    m.textBlock.x = "inside" === this.labelPlacement ? q.x + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : q.x - m.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - ("inside" === this.tickPlacement ? 0 : this.tickLength) - 5) : 0 > this.labelAngle ? (m.textBlock.y = ("inside" === this.labelPlacement ? q.y : q.y - m.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle)) - m.textBlock.topPadding * Math.cos(Math.PI / 180 * this.labelAngle),
                    m.textBlock.x = "inside" === this.labelPlacement ? q.x - m.textBlock.fontSize / 2 * Math.sin(Math.PI / 180 * this.labelAngle) + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : q.x - m.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) + (m.textBlock.height - m.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * this.labelAngle) - ("inside" === this.tickPlacement ? 0 : this.tickLength) - 5) : (m.textBlock.y = ("inside" === this.labelPlacement ? q.y : q.y - m.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle)) - m.textBlock.topPadding * Math.cos(Math.PI / 180 * this.labelAngle),
                    m.textBlock.x = "inside" === this.labelPlacement ? q.x + (m.textBlock.height - m.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * this.labelAngle) + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : q.x - m.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - m.textBlock.fontSize / 2 * Math.sin(Math.PI / 180 * this.labelAngle) - ("inside" === this.tickPlacement ? 0 : this.tickLength) - 5)));
                "inside" === this.tickPlacement && this.chart.addEventListener("dataAnimationIterationEnd", function() {
                    for (k = 0; k < a._labels.length; k++)
                        if (m = a._labels[k],
                        !(m.position < a.viewportMinimum || m.position > a.viewportMaximum) && (q = a.getPixelCoordinatesOnAxis(m.position),
                        a.tickThickness)) {
                            a.ctx.lineWidth = a.tickThickness;
                            a.ctx.strokeStyle = a.tickColor;
                            var b = 1 === a.ctx.lineWidth % 2 ? (q.y << 0) + 0.5 : q.y << 0;
                            a.ctx.save();
                            a.ctx.beginPath();
                            a.ctx.moveTo(q.x << 0, b);
                            a.ctx.lineTo(q.x + a.tickLength << 0, b);
                            a.ctx.stroke();
                            a.ctx.restore()
                        }
                }, this);
                this.title && (this._titleTextBlock.measureText(),
                this._titleTextBlock.x = this.bounds.x1 + this._titleTextBlock._lineHeight / 2,
                this._titleTextBlock.y = this.lineCoordinates.height / 2 + this._titleTextBlock.width / 2 + this.lineCoordinates.y1,
                this.titleMaxWidth = this._titleTextBlock.maxWidth,
                this._titleTextBlock.render(!0))
            } else if ("right" === this._position) {
                for (k = 0; k < this._labels.length; k++)
                    m = this._labels[k],
                    m.position < this.viewportMinimum || m.position > this.viewportMaximum || (q = this.getPixelCoordinatesOnAxis(m.position),
                    this.tickThickness && "inside" != this.tickPlacement && (this.ctx.lineWidth = this.tickThickness,
                    this.ctx.strokeStyle = this.tickColor,
                    c = 1 === this.ctx.lineWidth % 2 ? (q.y << 0) + 0.5 : q.y << 0,
                    this.ctx.beginPath(),
                    this.ctx.moveTo(q.x << 0, c),
                    this.ctx.lineTo(q.x + this.tickLength << 0, c),
                    this.ctx.stroke()),
                    g && 0 !== e++ % 2 && this.labelAutoFit || (0 === this.labelAngle ? (m.textBlock.y = q.y - m.textBlock.topPadding,
                    m.textBlock.x = "inside" === this.labelPlacement ? q.x - m.textBlock.width - ("inside" === this.tickPlacement ? this.tickLength : 0) - 5 : q.x + ("inside" === this.tickPlacement ? 0 : this.tickLength) + 5) : 0 > this.labelAngle ? (m.textBlock.y = ("inside" === this.labelPlacement ? q.y - m.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) : q.y) - m.textBlock.topPadding * Math.cos(Math.PI / 180 * this.labelAngle),
                    m.textBlock.x = "inside" === this.labelPlacement ? q.x - m.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) + (m.textBlock.height - m.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * this.labelAngle) - ("inside" === this.tickPlacement ? this.tickLength : 0) - 5 : q.x - m.textBlock.fontSize / 2 * Math.sin(Math.PI / 180 * this.labelAngle) + ("inside" === this.tickPlacement ? 0 : this.tickLength) + 5) : (m.textBlock.y = ("inside" === this.labelPlacement ? q.y - m.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) : q.y) - m.textBlock.topPadding * Math.cos(Math.PI / 180 * this.labelAngle),
                    m.textBlock.x = "inside" === this.labelPlacement ? q.x - m.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - m.textBlock.fontSize / 2 * Math.sin(Math.PI / 180 * this.labelAngle) - ("inside" === this.tickPlacement ? this.tickLength : 0) - 5 : q.x + (m.textBlock.height - m.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * this.labelAngle) + ("inside" === this.tickPlacement ? 0 : this.tickLength) + 5)));
                "inside" === this.tickPlacement && this.chart.addEventListener("dataAnimationIterationEnd", function() {
                    for (k = 0; k < a._labels.length; k++)
                        if (m = a._labels[k],
                        !(m.position < a.viewportMinimum || m.position > a.viewportMaximum) && (q = a.getPixelCoordinatesOnAxis(m.position),
                        a.tickThickness)) {
                            a.ctx.lineWidth = a.tickThickness;
                            a.ctx.strokeStyle = a.tickColor;
                            var b = 1 === a.ctx.lineWidth % 2 ? (q.y << 0) + 0.5 : q.y << 0;
                            a.ctx.save();
                            a.ctx.beginPath();
                            a.ctx.moveTo(q.x << 0, b);
                            a.ctx.lineTo(q.x - a.tickLength << 0, b);
                            a.ctx.stroke();
                            a.ctx.restore()
                        }
                }, this);
                this.title && (this._titleTextBlock.measureText(),
                this._titleTextBlock.x = this.bounds.x2 - this._titleTextBlock._lineHeight / 2,
                this._titleTextBlock.y = this.lineCoordinates.height / 2 - this._titleTextBlock.width / 2 + this.lineCoordinates.y1,
                this.titleMaxWidth = this._titleTextBlock.maxWidth,
                this._titleTextBlock.render(!0))
            }
            e = 0;
            if ("inside" === this.labelPlacement)
                this.chart.addEventListener("dataAnimationIterationEnd", function() {
                    for (k = 0; k < a._labels.length; k++)
                        m = a._labels[k],
                        m.position < a.viewportMinimum || (m.position > a.viewportMaximum || g && 0 !== e++ % 2 && a.labelAutoFit) || (a.ctx.save(),
                        a.ctx.beginPath(),
                        m.textBlock.render(!0),
                        a.ctx.restore())
                }, this);
            else
                for (k = 0; k < this._labels.length; k++)
                    m = this._labels[k],
                    m.position < this.viewportMinimum || (m.position > this.viewportMaximum || g && 0 !== e++ % 2 && this.labelAutoFit) || m.textBlock.render(!0)
        }
        ;
        A.prototype.renderInterlacedColors = function() {
            var a = this.chart.plotArea.ctx, g, b, c = this.chart.plotArea, d = 0;
            g = !0;
            if (("bottom" === this._position || "top" === this._position) && this.interlacedColor)
                for (a.fillStyle = this.interlacedColor,
                d = 0; d < this._labels.length; d++)
                    g ? (g = this.getPixelCoordinatesOnAxis(this._labels[d].position),
                    b = d + 1 > this._labels.length - 1 ? this.getPixelCoordinatesOnAxis(this.viewportMaximum) : this.getPixelCoordinatesOnAxis(this._labels[d + 1].position),
                    a.fillRect(Math.min(b.x, g.x), c.y1, Math.abs(b.x - g.x), Math.abs(c.y1 - c.y2)),
                    g = !1) : g = !0;
            else if (("left" === this._position || "right" === this._position) && this.interlacedColor)
                for (a.fillStyle = this.interlacedColor,
                d = 0; d < this._labels.length; d++)
                    g ? (b = this.getPixelCoordinatesOnAxis(this._labels[d].position),
                    g = d + 1 > this._labels.length - 1 ? this.getPixelCoordinatesOnAxis(this.viewportMaximum) : this.getPixelCoordinatesOnAxis(this._labels[d + 1].position),
                    a.fillRect(c.x1, Math.min(b.y, g.y), Math.abs(c.x1 - c.x2), Math.abs(g.y - b.y)),
                    g = !1) : g = !0;
            a.beginPath()
        }
        ;
        A.prototype.renderStripLinesOfThicknessType = function(a) {
            if (this.stripLines && 0 < this.stripLines.length && a) {
                var g = this, b, c, d = 0, e = 0, h = !1;
                c = !1;
                for (var n = [], s = [], k = !1, p, d = 0; d < this.stripLines.length; d++) {
                    var m = this.stripLines[d];
                    m._thicknessType === a && ("pixel" === a && (m.value < this.viewportMinimum || m.value > this.viewportMaximum || l(m.value) || isNaN(this.range)) || "value" === a && (m.startValue <= this.viewportMinimum && m.endValue <= this.viewportMinimum || m.startValue >= this.viewportMaximum && m.endValue >= this.viewportMaximum || l(m.startValue) || l(m.endValue) || isNaN(this.range)) || n.push(m))
                }
                for (d = 0; d < this._stripLineLabels.length; d++)
                    if (m = this.stripLines[d],
                    b = this._stripLineLabels[d],
                    !(b.position < this.viewportMinimum || b.position > this.viewportMaximum || isNaN(this.range)))
                        if (c = this.getPixelCoordinatesOnAxis(b.position),
                        "outside" === b.stripLine.labelPlacement) {
                            m && (this.ctx.strokeStyle = m.color,
                            this.ctx.lineWidth = "pixel" === m._thicknessType ? m.thickness : this.tickThickness,
                            l(m.opacity) || "pixel" !== m._thicknessType || (p = m.ctx.globalAlpha,
                            m.ctx.globalAlpha = m.opacity));
                            if ("bottom" === this._position) {
                                var q = 1 === this.ctx.lineWidth % 2 ? (c.x << 0) + 0.5 : c.x << 0;
                                this.ctx.beginPath();
                                this.ctx.moveTo(q, c.y << 0);
                                this.ctx.lineTo(q, c.y + this.tickLength << 0);
                                this.ctx.stroke();
                                0 === this.labelAngle ? (c.x -= b.textBlock.width / 2,
                                c.y += this.tickLength + b.textBlock.fontSize / 2 + 5) : (c.x -= (0 > this.labelAngle ? b.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0) - b.textBlock.topPadding * Math.sin(Math.PI / 180 * this.labelAngle),
                                c.y += this.tickLength + 5 + (0 > this.labelAngle ? Math.abs(b.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) - b.textBlock.fontSize / 2 * Math.cos(Math.PI / 180 * this.labelAngle)) : Math.abs(b.textBlock.fontSize / 2 * Math.cos(Math.PI / 180 * this.labelAngle))))
                            } else
                                "top" === this._position ? (q = 1 === this.ctx.lineWidth % 2 ? (c.x << 0) + 0.5 : c.x << 0,
                                this.ctx.beginPath(),
                                this.ctx.moveTo(q, c.y << 0),
                                this.ctx.lineTo(q, c.y - this.tickLength << 0),
                                this.ctx.stroke(),
                                0 === this.labelAngle ? (c.x -= b.textBlock.width / 2,
                                c.y -= this.tickLength + b.textBlock.height - b.textBlock.fontSize / 2) : (c.x -= (0 < this.labelAngle ? b.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0) - b.textBlock.topPadding * Math.sin(Math.PI / 180 * this.labelAngle),
                                c.y -= this.tickLength + 2 + (0 < this.labelAngle ? (b.textBlock.height - b.textBlock.fontSize / 2) * Math.cos(Math.PI / 180 * this.labelAngle) + b.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) : (b.textBlock.height - b.textBlock.fontSize / 2) * Math.cos(Math.PI / 180 * this.labelAngle)))) : "left" === this._position ? (q = 1 === this.ctx.lineWidth % 2 ? (c.y << 0) + 0.5 : c.y << 0,
                                this.ctx.beginPath(),
                                this.ctx.moveTo(c.x << 0, q),
                                this.ctx.lineTo(c.x - this.tickLength << 0, q),
                                this.ctx.stroke(),
                                0 === this.labelAngle ? (c.x = c.x - b.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - this.tickLength - 5,
                                c.y -= b.textBlock.topPadding) : (c.y -= b.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) + b.textBlock.topPadding * Math.cos(Math.PI / 180 * this.labelAngle),
                                c.x -= this.tickLength + 5 + (0 < this.labelAngle ? b.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) + b.textBlock.fontSize / 2 * Math.sin(Math.PI / 180 * this.labelAngle) : b.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - (b.textBlock.height - b.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * this.labelAngle)))) : "right" === this._position && (q = 1 === this.ctx.lineWidth % 2 ? (c.y << 0) + 0.5 : c.y << 0,
                                this.ctx.beginPath(),
                                this.ctx.moveTo(c.x << 0, q),
                                this.ctx.lineTo(c.x + this.tickLength << 0, q),
                                this.ctx.stroke(),
                                0 === this.labelAngle ? (c.x = c.x + this.tickLength + 5,
                                c.y -= b.textBlock.topPadding) : (c.y -= b.textBlock.topPadding * Math.cos(Math.PI / 180 * this.labelAngle),
                                c.x = this.tickLength + 5 + (0 < this.labelAngle ? c.x + (b.textBlock.height - b.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * this.labelAngle) : c.x - b.textBlock.fontSize / 2 * Math.sin(Math.PI / 180 * this.labelAngle))));
                            p && (m.ctx.globalAlpha = p);
                            b.textBlock.x = c.x;
                            b.textBlock.y = c.y;
                            s.push(b)
                        } else
                            m._thicknessType === a && (b.textBlock.angle = -90,
                            "bottom" === this._position ? (b.textBlock.maxWidth = this.options.stripLines[d].labelMaxWidth ? this.options.stripLines[d].labelMaxWidth : this.chart.plotArea.height - 3,
                            b.textBlock.measureText(),
                            c.x - b.textBlock.height - m.thickness / 2 > this.chart.plotArea.x1 ? l(m.startValue) ? c.x -= b.textBlock.height - b.textBlock.fontSize / 2 + m.thickness / 2 : c.x -= b.textBlock.height / 2 - b.textBlock.fontSize / 2 : (b.textBlock.angle = 90,
                            l(m.startValue) ? c.x += b.textBlock.height - b.textBlock.fontSize / 2 + m.thickness / 2 : c.x += b.textBlock.height / 2 - b.textBlock.fontSize / 2),
                            c.y = -90 === b.textBlock.angle ? "near" === b.stripLine.labelAlign ? this.chart.plotArea.y2 - 3 : "center" === b.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 + b.textBlock.width) / 2 : this.chart.plotArea.y1 + b.textBlock.width + 3 : "near" === b.stripLine.labelAlign ? this.chart.plotArea.y2 - b.textBlock.width - 3 : "center" === b.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 - b.textBlock.width) / 2 : this.chart.plotArea.y1 + 3) : "top" === this._position ? (b.textBlock.maxWidth = this.options.stripLines[d].labelMaxWidth ? this.options.stripLines[d].labelMaxWidth : this.chart.plotArea.height - 3,
                            b.textBlock.measureText(),
                            c.x - b.textBlock.height - m.thickness / 2 > this.chart.plotArea.x1 ? l(m.startValue) ? c.x -= b.textBlock.height - b.textBlock.fontSize / 2 + m.thickness / 2 : c.x -= b.textBlock.height / 2 - b.textBlock.fontSize / 2 : (b.textBlock.angle = 90,
                            l(m.startValue) ? c.x += b.textBlock.height - b.textBlock.fontSize / 2 + m.thickness / 2 : c.x += b.textBlock.height / 2 - b.textBlock.fontSize / 2),
                            c.y = -90 === b.textBlock.angle ? "near" === b.stripLine.labelAlign ? this.chart.plotArea.y1 + b.textBlock.width + 3 : "center" === b.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 + b.textBlock.width) / 2 : this.chart.plotArea.y2 - 3 : "near" === b.stripLine.labelAlign ? this.chart.plotArea.y1 + 3 : "center" === b.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 - b.textBlock.width) / 2 : this.chart.plotArea.y2 - b.textBlock.width - 3) : "left" === this._position ? (b.textBlock.maxWidth = this.options.stripLines[d].labelMaxWidth ? this.options.stripLines[d].labelMaxWidth : this.chart.plotArea.width - 3,
                            b.textBlock.angle = 0,
                            b.textBlock.measureText(),
                            c.y - b.textBlock.height - m.thickness / 2 > this.chart.plotArea.y1 ? l(m.startValue) ? c.y -= b.textBlock.height - b.textBlock.fontSize / 2 + m.thickness / 2 : c.y -= b.textBlock.height / 2 - b.textBlock.fontSize / 2 : l(m.startValue) ? c.y += b.textBlock.height - b.textBlock.fontSize / 2 + m.thickness / 2 : c.y += b.textBlock.height / 2 - b.textBlock.fontSize + 3,
                            c.x = "near" === b.stripLine.labelAlign ? this.chart.plotArea.x1 + 3 : "center" === b.stripLine.labelAlign ? (this.chart.plotArea.x2 + this.chart.plotArea.x1) / 2 - b.textBlock.width / 2 : this.chart.plotArea.x2 - b.textBlock.width - 3) : "right" === this._position && (b.textBlock.maxWidth = this.options.stripLines[d].labelMaxWidth ? this.options.stripLines[d].labelMaxWidth : this.chart.plotArea.width - 3,
                            b.textBlock.angle = 0,
                            b.textBlock.measureText(),
                            c.y - b.textBlock.height - m.thickness / 2 > this.chart.plotArea.y1 ? l(m.startValue) ? c.y -= b.textBlock.height - b.textBlock.fontSize / 2 + m.thickness / 2 : c.y -= b.textBlock.height / 2 - b.textBlock.fontSize / 2 : l(m.startValue) ? c.y += b.textBlock.height - b.textBlock.fontSize / 2 + m.thickness / 2 : c.y -= b.textBlock.height / 2 - b.textBlock.fontSize / 2 + 3,
                            c.x = "near" === b.stripLine.labelAlign ? this.chart.plotArea.x2 - b.textBlock.width - 3 : "center" === b.stripLine.labelAlign ? (this.chart.plotArea.x2 + this.chart.plotArea.x1) / 2 - b.textBlock.width / 2 : this.chart.plotArea.x1 + 3),
                            b.textBlock.x = c.x,
                            b.textBlock.y = c.y,
                            s.push(b));
                if (!k) {
                    c = !1;
                    this.ctx.save();
                    this.ctx.beginPath();
                    this.ctx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
                    this.ctx.clip();
                    for (d = 0; d < n.length; d++)
                        m = n[d],
                        m.showOnTop ? h || (h = !0,
                        this.chart.addEventListener("dataAnimationIterationEnd", function() {
                            this.ctx.save();
                            this.ctx.beginPath();
                            this.ctx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
                            this.ctx.clip();
                            for (e = 0; e < n.length; e++)
                                m = n[e],
                                m.showOnTop && m.render();
                            this.ctx.restore()
                        }, m)) : m.render();
                    for (d = 0; d < s.length; d++)
                        b = s[d],
                        b.stripLine.showOnTop ? c || (c = !0,
                        this.chart.addEventListener("dataAnimationIterationEnd", function() {
                            for (e = 0; e < s.length; e++)
                                b = s[e],
                                "inside" === b.stripLine.labelPlacement && b.stripLine.showOnTop && (g.ctx.save(),
                                g.ctx.beginPath(),
                                g.ctx.rect(g.chart.plotArea.x1, g.chart.plotArea.y1, g.chart.plotArea.width, g.chart.plotArea.height),
                                g.ctx.clip(),
                                b.textBlock.render(!0),
                                g.ctx.restore())
                        }, b.textBlock)) : "inside" === b.stripLine.labelPlacement && b.textBlock.render(!0);
                    this.ctx.restore();
                    k = !0
                }
                if (k)
                    for (c = !1,
                    d = 0; d < s.length; d++)
                        b = s[d],
                        "outside" === b.stripLine.labelPlacement && b.textBlock.render(!0)
            }
        }
        ;
        A.prototype.renderBreaksBackground = function() {
            this.chart._breaksCanvas && (this.scaleBreaks && 0 < this.scaleBreaks._appliedBreaks.length && this.maskCanvas) && (this.chart._breaksCanvasCtx.save(),
            this.chart._breaksCanvasCtx.beginPath(),
            this.chart._breaksCanvasCtx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height),
            this.chart._breaksCanvasCtx.clip(),
            this.chart._breaksCanvasCtx.drawImage(this.maskCanvas, 0, 0, this.chart.width, this.chart.height),
            this.chart._breaksCanvasCtx.restore())
        }
        ;
        A.prototype.createMask = function() {
            if (this.scaleBreaks && 0 < this.scaleBreaks._appliedBreaks.length) {
                var a = this.scaleBreaks._appliedBreaks;
                s ? (this.maskCanvas = ua(this.chart.width, this.chart.height),
                this.maskCtx = this.maskCanvas.getContext("2d")) : (this.maskCanvas = this.chart.plotArea.canvas,
                this.maskCtx = this.chart.plotArea.ctx);
                this.maskCtx.save();
                this.maskCtx.beginPath();
                this.maskCtx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
                this.maskCtx.clip();
                for (var g = 0; g < a.length; g++)
                    a[g].endValue < this.viewportMinimum || (a[g].startValue > this.viewportMaximum || isNaN(this.range)) || a[g].render(this.maskCtx);
                this.maskCtx.restore()
            }
        }
        ;
        A.prototype.renderCrosshair = function(a, g) {
            isFinite(this.minimum) && isFinite(this.maximum) && this.crosshair.render(a, g)
        }
        ;
        A.prototype.showCrosshair = function(a) {
            l(a) || (a < this.viewportMinimum || a > this.viewportMaximum) || ("top" === this._position || "bottom" === this._position ? this.crosshair.render(this.convertValueToPixel(a), null, a) : this.crosshair.render(null, this.convertValueToPixel(a), a))
        }
        ;
        A.prototype.renderGrid = function() {
            if (this.gridThickness && 0 < this.gridThickness) {
                var a = this.chart.ctx;
                a.save();
                var g, b = this.chart.plotArea;
                a.lineWidth = this.gridThickness;
                a.strokeStyle = this.gridColor;
                a.setLineDash && a.setLineDash(J(this.gridDashType, this.gridThickness));
                if ("bottom" === this._position || "top" === this._position)
                    for (c = 0; c < this._labels.length; c++)
                        this._labels[c].position < this.viewportMinimum || (this._labels[c].position > this.viewportMaximum || this._labels[c].breaksLabelType) || (a.beginPath(),
                        g = this.getPixelCoordinatesOnAxis(this._labels[c].position),
                        g = 1 === a.lineWidth % 2 ? (g.x << 0) + 0.5 : g.x << 0,
                        a.moveTo(g, b.y1 << 0),
                        a.lineTo(g, b.y2 << 0),
                        a.stroke());
                else if ("left" === this._position || "right" === this._position)
                    for (var c = 0; c < this._labels.length; c++)
                        this._labels[c].position < this.viewportMinimum || (this._labels[c].position > this.viewportMaximum || this._labels[c].breaksLabelType) || (a.beginPath(),
                        g = this.getPixelCoordinatesOnAxis(this._labels[c].position),
                        g = 1 === a.lineWidth % 2 ? (g.y << 0) + 0.5 : g.y << 0,
                        a.moveTo(b.x1 << 0, g),
                        a.lineTo(b.x2 << 0, g),
                        a.stroke());
                a.restore()
            }
        }
        ;
        A.prototype.renderAxisLine = function() {
            var a = this.chart.ctx, g = s ? this.chart._preRenderCtx : a, b = Math.ceil(this.tickThickness / (this.reversed ? -2 : 2)), c = Math.ceil(this.tickThickness / (this.reversed ? 2 : -2)), d, e;
            g.save();
            if ("bottom" === this._position || "top" === this._position) {
                if (this.lineThickness) {
                    this.reversed ? (d = this.lineCoordinates.x2,
                    e = this.lineCoordinates.x1) : (d = this.lineCoordinates.x1,
                    e = this.lineCoordinates.x2);
                    g.lineWidth = this.lineThickness;
                    g.strokeStyle = this.lineColor ? this.lineColor : "black";
                    g.setLineDash && g.setLineDash(J(this.lineDashType, this.lineThickness));
                    var h = 1 === this.lineThickness % 2 ? (this.lineCoordinates.y1 << 0) + 0.5 : this.lineCoordinates.y1 << 0;
                    g.beginPath();
                    if (this.scaleBreaks && !l(this.scaleBreaks.firstBreakIndex))
                        if (l(this.scaleBreaks.lastBreakIndex))
                            d = this.scaleBreaks._appliedBreaks[this.scaleBreaks.firstBreakIndex].endPixel + c;
                        else
                            for (var n = this.scaleBreaks.firstBreakIndex; n <= this.scaleBreaks.lastBreakIndex; n++)
                                g.moveTo(d, h),
                                g.lineTo(this.scaleBreaks._appliedBreaks[n].startPixel + b, h),
                                d = this.scaleBreaks._appliedBreaks[n].endPixel + c;
                    d && (g.moveTo(d, h),
                    g.lineTo(e, h));
                    g.stroke()
                }
            } else if (("left" === this._position || "right" === this._position) && this.lineThickness) {
                this.reversed ? (d = this.lineCoordinates.y1,
                e = this.lineCoordinates.y2) : (d = this.lineCoordinates.y2,
                e = this.lineCoordinates.y1);
                g.lineWidth = this.lineThickness;
                g.strokeStyle = this.lineColor;
                g.setLineDash && g.setLineDash(J(this.lineDashType, this.lineThickness));
                h = 1 === this.lineThickness % 2 ? (this.lineCoordinates.x1 << 0) + 0.5 : this.lineCoordinates.x1 << 0;
                g.beginPath();
                if (this.scaleBreaks && !l(this.scaleBreaks.firstBreakIndex))
                    if (l(this.scaleBreaks.lastBreakIndex))
                        d = this.scaleBreaks._appliedBreaks[this.scaleBreaks.firstBreakIndex].endPixel + b;
                    else
                        for (n = this.scaleBreaks.firstBreakIndex; n <= this.scaleBreaks.lastBreakIndex; n++)
                            g.moveTo(h, d),
                            g.lineTo(h, this.scaleBreaks._appliedBreaks[n].startPixel + c),
                            d = this.scaleBreaks._appliedBreaks[n].endPixel + b;
                d && (g.moveTo(h, d),
                g.lineTo(h, e));
                g.stroke()
            }
            s && (a.drawImage(this.chart._preRenderCanvas, 0, 0, this.chart.width, this.chart.height),
            this.chart._breaksCanvasCtx && this.chart._breaksCanvasCtx.drawImage(this.chart._preRenderCanvas, 0, 0, this.chart.width, this.chart.height),
            g.clearRect(0, 0, this.chart.width, this.chart.height));
            g.restore()
        }
        ;
        A.prototype.getPixelCoordinatesOnAxis = function(a) {
            var g = {};
            if ("bottom" === this._position || "top" === this._position)
                g.x = this.convertValueToPixel(a),
                g.y = this.lineCoordinates.y1;
            if ("left" === this._position || "right" === this._position)
                g.y = this.convertValueToPixel(a),
                g.x = this.lineCoordinates.x2;
            return g
        }
        ;
        A.prototype.convertPixelToValue = function(a) {
            if ("undefined" === typeof a)
                return null;
            var g = 0, b = 0, c, g = !0, d = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [], b = "number" === typeof a ? a : "left" === this._position || "right" === this._position ? a.y : a.x;
            if (this.logarithmic) {
                a = c = Math.pow(this.logarithmBase, (b - this.conversionParameters.reference) / this.conversionParameters.pixelPerUnit);
                if (b <= this.conversionParameters.reference === ("left" === this._position || "right" === this._position) !== this.reversed)
                    for (b = 0; b < d.length; b++) {
                        if (!(d[b].endValue < this.conversionParameters.minimum))
                            if (g)
                                if (d[b].startValue < this.conversionParameters.minimum) {
                                    if (1 < d[b].size && this.conversionParameters.minimum * Math.pow(d[b].endValue / d[b].startValue, Math.log(c) / Math.log(d[b].size)) < d[b].endValue) {
                                        a = Math.pow(d[b].endValue / d[b].startValue, Math.log(c) / Math.log(d[b].size));
                                        break
                                    } else
                                        a *= d[b].endValue / this.conversionParameters.minimum / Math.pow(d[b].size, Math.log(d[b].endValue / this.conversionParameters.minimum) / Math.log(d[b].endValue / d[b].startValue)),
                                        c /= Math.pow(d[b].size, Math.log(d[b].endValue / this.conversionParameters.minimum) / Math.log(d[b].endValue / d[b].startValue));
                                    g = !1
                                } else if (c > d[b].startValue / this.conversionParameters.minimum) {
                                    c /= d[b].startValue / this.conversionParameters.minimum;
                                    if (c < d[b].size) {
                                        a *= Math.pow(d[b].endValue / d[b].startValue, 1 === d[b].size ? 1 : Math.log(c) / Math.log(d[b].size)) / c;
                                        break
                                    } else
                                        a *= d[b].endValue / d[b].startValue / d[b].size;
                                    c /= d[b].size;
                                    g = !1
                                } else
                                    break;
                            else if (c > d[b].startValue / d[b - 1].endValue) {
                                c /= d[b].startValue / d[b - 1].endValue;
                                if (c < d[b].size) {
                                    a *= Math.pow(d[b].endValue / d[b].startValue, 1 === d[b].size ? 1 : Math.log(c) / Math.log(d[b].size)) / c;
                                    break
                                } else
                                    a *= d[b].endValue / d[b].startValue / d[b].size;
                                c /= d[b].size
                            } else
                                break
                    }
                else
                    for (b = d.length - 1; 0 <= b; b--)
                        if (!(d[b].startValue > this.conversionParameters.minimum))
                            if (g)
                                if (d[b].endValue > this.conversionParameters.minimum) {
                                    if (1 < d[b].size && this.conversionParameters.minimum * Math.pow(d[b].endValue / d[b].startValue, Math.log(c) / Math.log(d[b].size)) > d[b].startValue) {
                                        a = Math.pow(d[b].endValue / d[b].startValue, Math.log(c) / Math.log(d[b].size));
                                        break
                                    } else
                                        a *= d[b].startValue / this.conversionParameters.minimum * Math.pow(d[b].size, Math.log(d[b].startValue / this.conversionParameters.minimum) / Math.log(d[b].endValue / d[b].startValue)) * c,
                                        c *= Math.pow(d[b].size, Math.log(this.conversionParameters.minimum / d[b].startValue) / Math.log(d[b].endValue / d[b].startValue));
                                    g = !1
                                } else if (c < d[b].endValue / this.conversionParameters.minimum) {
                                    c /= d[b].endValue / this.conversionParameters.minimum;
                                    if (c > 1 / d[b].size) {
                                        a *= Math.pow(d[b].endValue / d[b].startValue, 1 >= d[b].size ? 1 : Math.log(c) / Math.log(d[b].size)) * c;
                                        break
                                    } else
                                        a /= d[b].endValue / d[b].startValue / d[b].size;
                                    c *= d[b].size;
                                    g = !1
                                } else
                                    break;
                            else if (c < d[b].endValue / d[b + 1].startValue) {
                                c /= d[b].endValue / d[b + 1].startValue;
                                if (c > 1 / d[b].size) {
                                    a *= Math.pow(d[b].endValue / d[b].startValue, 1 >= d[b].size ? 1 : Math.log(c) / Math.log(d[b].size)) * c;
                                    break
                                } else
                                    a /= d[b].endValue / d[b].startValue / d[b].size;
                                c *= d[b].size
                            } else
                                break;
                g = a * this.viewportMinimum
            } else {
                a = c = (b - this.conversionParameters.reference) / this.conversionParameters.pixelPerUnit;
                if (b <= this.conversionParameters.reference === ("left" === this._position || "right" === this._position) !== this.reversed)
                    for (b = 0; b < d.length; b++) {
                        if (!(d[b].endValue < this.conversionParameters.minimum))
                            if (g)
                                if (d[b].startValue < this.conversionParameters.minimum) {
                                    if (d[b].size && this.conversionParameters.minimum + c * (d[b].endValue - d[b].startValue) / d[b].size < d[b].endValue) {
                                        a = 0 >= d[b].size ? 0 : c * (d[b].endValue - d[b].startValue) / d[b].size;
                                        break
                                    } else
                                        a += d[b].endValue - this.conversionParameters.minimum - d[b].size * (d[b].endValue - this.conversionParameters.minimum) / (d[b].endValue - d[b].startValue),
                                        c -= d[b].size * (d[b].endValue - this.conversionParameters.minimum) / (d[b].endValue - d[b].startValue);
                                    g = !1
                                } else if (c > d[b].startValue - this.conversionParameters.minimum) {
                                    c -= d[b].startValue - this.conversionParameters.minimum;
                                    if (c < d[b].size) {
                                        a += (d[b].endValue - d[b].startValue) * (0 === d[b].size ? 1 : c / d[b].size) - c;
                                        break
                                    } else
                                        a += d[b].endValue - d[b].startValue - d[b].size;
                                    c -= d[b].size;
                                    g = !1
                                } else
                                    break;
                            else if (c > d[b].startValue - d[b - 1].endValue) {
                                c -= d[b].startValue - d[b - 1].endValue;
                                if (c < d[b].size) {
                                    a += (d[b].endValue - d[b].startValue) * (0 === d[b].size ? 1 : c / d[b].size) - c;
                                    break
                                } else
                                    a += d[b].endValue - d[b].startValue - d[b].size;
                                c -= d[b].size
                            } else
                                break
                    }
                else
                    for (b = d.length - 1; 0 <= b; b--)
                        if (!(d[b].startValue > this.conversionParameters.minimum))
                            if (g)
                                if (d[b].endValue > this.conversionParameters.minimum)
                                    if (d[b].size && this.conversionParameters.minimum + c * (d[b].endValue - d[b].startValue) / d[b].size > d[b].startValue) {
                                        a = 0 >= d[b].size ? 0 : c * (d[b].endValue - d[b].startValue) / d[b].size;
                                        break
                                    } else
                                        a += d[b].startValue - this.conversionParameters.minimum + d[b].size * (this.conversionParameters.minimum - d[b].startValue) / (d[b].endValue - d[b].startValue),
                                        c += d[b].size * (this.conversionParameters.minimum - d[b].startValue) / (d[b].endValue - d[b].startValue),
                                        g = !1;
                                else if (c < d[b].endValue - this.conversionParameters.minimum) {
                                    c -= d[b].endValue - this.conversionParameters.minimum;
                                    if (c > -1 * d[b].size) {
                                        a += (d[b].endValue - d[b].startValue) * (0 === d[b].size ? 1 : c / d[b].size) + c;
                                        break
                                    } else
                                        a -= d[b].endValue - d[b].startValue - d[b].size;
                                    c += d[b].size;
                                    g = !1
                                } else
                                    break;
                            else if (c < d[b].endValue - d[b + 1].startValue) {
                                c -= d[b].endValue - d[b + 1].startValue;
                                if (c > -1 * d[b].size) {
                                    a += (d[b].endValue - d[b].startValue) * (0 === d[b].size ? 1 : c / d[b].size) + c;
                                    break
                                } else
                                    a -= d[b].endValue - d[b].startValue - d[b].size;
                                c += d[b].size
                            } else
                                break;
                g = this.conversionParameters.minimum + a
            }
            return g
        }
        ;
        A.prototype.convertValueToPixel = function(a) {
            a = this.getApparentDifference(this.conversionParameters.minimum, a, a);
            return this.logarithmic ? this.conversionParameters.reference + this.conversionParameters.pixelPerUnit * Math.log(a / this.conversionParameters.minimum) / this.conversionParameters.lnLogarithmBase + 0.5 << 0 : "axisX" === this.type ? this.conversionParameters.reference + this.conversionParameters.pixelPerUnit * (a - this.conversionParameters.minimum) + 0.5 << 0 : this.conversionParameters.reference + this.conversionParameters.pixelPerUnit * (a - this.conversionParameters.minimum) + 0.5
        }
        ;
        A.prototype.getApparentDifference = function(a, g, b, c) {
            var d = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [];
            if (this.logarithmic) {
                b = l(b) ? g / a : b;
                for (var e = 0; e < d.length && !(g < d[e].startValue); e++)
                    a > d[e].endValue || (a <= d[e].startValue && g >= d[e].endValue ? b = b / d[e].endValue * d[e].startValue * d[e].size : a >= d[e].startValue && g >= d[e].endValue ? b = b / d[e].endValue * a * Math.pow(d[e].size, Math.log(d[e].endValue / a) / Math.log(d[e].endValue / d[e].startValue)) : a <= d[e].startValue && g <= d[e].endValue ? b = b / g * d[e].startValue * Math.pow(d[e].size, Math.log(g / d[e].startValue) / Math.log(d[e].endValue / d[e].startValue)) : !c && (a > d[e].startValue && g < d[e].endValue) && (b = a * Math.pow(d[e].size, Math.log(g / a) / Math.log(d[e].endValue / d[e].startValue))))
            } else
                for (b = l(b) ? Math.abs(g - a) : b,
                e = 0; e < d.length && !(g < d[e].startValue); e++)
                    a > d[e].endValue || (a <= d[e].startValue && g >= d[e].endValue ? b = b - d[e].endValue + d[e].startValue + d[e].size : a > d[e].startValue && g >= d[e].endValue ? b = b - d[e].endValue + a + d[e].size * (d[e].endValue - a) / (d[e].endValue - d[e].startValue) : a <= d[e].startValue && g < d[e].endValue ? b = b - g + d[e].startValue + d[e].size * (g - d[e].startValue) / (d[e].endValue - d[e].startValue) : !c && (a > d[e].startValue && g < d[e].endValue) && (b = a + d[e].size * (g - a) / (d[e].endValue - d[e].startValue)));
            return b
        }
        ;
        A.prototype.setViewPortRange = function(a, g) {
            this.sessionVariables.newViewportMinimum = this.viewportMinimum = Math.min(a, g);
            this.sessionVariables.newViewportMaximum = this.viewportMaximum = Math.max(a, g)
        }
        ;
        A.prototype.getXValueAt = function(a) {
            if (!a)
                return null;
            var g = null;
            "left" === this._position ? g = this.convertPixelToValue(a.y) : "bottom" === this._position && (g = this.convertPixelToValue(a.x));
            return g
        }
        ;
        A.prototype.calculateValueToPixelConversionParameters = function(a) {
            a = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [];
            var g = {
                pixelPerUnit: null,
                minimum: null,
                reference: null
            }
              , b = this.lineCoordinates.width
              , c = this.lineCoordinates.height
              , b = "bottom" === this._position || "top" === this._position ? b : c
              , c = Math.abs(this.range);
            if (this.logarithmic)
                for (var d = 0; d < a.length && !(this.viewportMaximum < a[d].startValue); d++)
                    this.viewportMinimum > a[d].endValue || (this.viewportMinimum >= a[d].startValue && this.viewportMaximum <= a[d].endValue ? b = 0 : this.viewportMinimum <= a[d].startValue && this.viewportMaximum >= a[d].endValue ? (c = c / a[d].endValue * a[d].startValue,
                    b = 0 < a[d].spacing.toString().indexOf("%") ? b * (1 - parseFloat(a[d].spacing) / 100) : b - Math.min(a[d].spacing, 0.1 * b)) : this.viewportMinimum > a[d].startValue && this.viewportMaximum >= a[d].endValue ? (c = c / a[d].endValue * this.viewportMinimum,
                    b = 0 < a[d].spacing.toString().indexOf("%") ? b * (1 - parseFloat(a[d].spacing) / 100 * Math.log(a[d].endValue / this.viewportMinimum) / Math.log(a[d].endValue / a[d].startValue)) : b - Math.min(a[d].spacing, 0.1 * b) * Math.log(a[d].endValue / this.viewportMinimum) / Math.log(a[d].endValue / a[d].startValue)) : this.viewportMinimum <= a[d].startValue && this.viewportMaximum < a[d].endValue && (c = c / this.viewportMaximum * a[d].startValue,
                    b = 0 < a[d].spacing.toString().indexOf("%") ? b * (1 - parseFloat(a[d].spacing) / 100 * Math.log(this.viewportMaximum / a[d].startValue) / Math.log(a[d].endValue / a[d].startValue)) : b - Math.min(a[d].spacing, 0.1 * b) * Math.log(this.viewportMaximum / a[d].startValue) / Math.log(a[d].endValue / a[d].startValue)));
            else
                for (d = 0; d < a.length && !(this.viewportMaximum < a[d].startValue); d++)
                    this.viewportMinimum > a[d].endValue || (this.viewportMinimum >= a[d].startValue && this.viewportMaximum <= a[d].endValue ? b = 0 : this.viewportMinimum <= a[d].startValue && this.viewportMaximum >= a[d].endValue ? (c = c - a[d].endValue + a[d].startValue,
                    b = 0 < a[d].spacing.toString().indexOf("%") ? b * (1 - parseFloat(a[d].spacing) / 100) : b - Math.min(a[d].spacing, 0.1 * b)) : this.viewportMinimum > a[d].startValue && this.viewportMaximum >= a[d].endValue ? (c = c - a[d].endValue + this.viewportMinimum,
                    b = 0 < a[d].spacing.toString().indexOf("%") ? b * (1 - parseFloat(a[d].spacing) / 100 * (a[d].endValue - this.viewportMinimum) / (a[d].endValue - a[d].startValue)) : b - Math.min(a[d].spacing, 0.1 * b) * (a[d].endValue - this.viewportMinimum) / (a[d].endValue - a[d].startValue)) : this.viewportMinimum <= a[d].startValue && this.viewportMaximum < a[d].endValue && (c = c - this.viewportMaximum + a[d].startValue,
                    b = 0 < a[d].spacing.toString().indexOf("%") ? b * (1 - parseFloat(a[d].spacing) / 100 * (this.viewportMaximum - a[d].startValue) / (a[d].endValue - a[d].startValue)) : b - Math.min(a[d].spacing, 0.1 * b) * (this.viewportMaximum - a[d].startValue) / (a[d].endValue - a[d].startValue)));
            g.minimum = this.viewportMinimum;
            g.maximum = this.viewportMaximum;
            g.range = c;
            if ("bottom" === this._position || "top" === this._position)
                this.logarithmic ? (g.lnLogarithmBase = Math.log(this.logarithmBase),
                g.pixelPerUnit = (this.reversed ? -1 : 1) * b * g.lnLogarithmBase / Math.log(Math.abs(c))) : g.pixelPerUnit = (this.reversed ? -1 : 1) * b / Math.abs(c),
                g.reference = this.reversed ? this.lineCoordinates.x2 : this.lineCoordinates.x1;
            if ("left" === this._position || "right" === this._position)
                this.logarithmic ? (g.lnLogarithmBase = Math.log(this.logarithmBase),
                g.pixelPerUnit = (this.reversed ? 1 : -1) * b * g.lnLogarithmBase / Math.log(Math.abs(c))) : g.pixelPerUnit = (this.reversed ? 1 : -1) * b / Math.abs(c),
                g.reference = this.reversed ? this.lineCoordinates.y1 : this.lineCoordinates.y2;
            this.conversionParameters = g
        }
        ;
        A.prototype.calculateAxisParameters = function() {
            if (this.logarithmic)
                this.calculateLogarithmicAxisParameters();
            else {
                var a = this.chart.layoutManager.getFreeSpace()
                  , g = !1
                  , b = !1;
                "bottom" === this._position || "top" === this._position ? (this.maxWidth = a.width,
                this.maxHeight = a.height) : (this.maxWidth = a.height,
                this.maxHeight = a.width);
                var a = "axisX" === this.type ? "xySwapped" === this.chart.plotInfo.axisPlacement ? 62 : 70 : "xySwapped" === this.chart.plotInfo.axisPlacement ? 50 : 40
                  , c = 4;
                "axisX" === this.type && (c = 600 > this.maxWidth ? 8 : 6);
                var a = Math.max(c, Math.floor(this.maxWidth / a)), d, e, h, c = 0;
                !l(this.options.viewportMinimum) && (!l(this.options.viewportMaximum) && this.options.viewportMinimum >= this.options.viewportMaximum) && (this.viewportMinimum = this.viewportMaximum = null);
                if (l(this.options.viewportMinimum) && !l(this.sessionVariables.newViewportMinimum) && !isNaN(this.sessionVariables.newViewportMinimum))
                    this.viewportMinimum = this.sessionVariables.newViewportMinimum;
                else if (null === this.viewportMinimum || isNaN(this.viewportMinimum))
                    this.viewportMinimum = this.minimum;
                if (l(this.options.viewportMaximum) && !l(this.sessionVariables.newViewportMaximum) && !isNaN(this.sessionVariables.newViewportMaximum))
                    this.viewportMaximum = this.sessionVariables.newViewportMaximum;
                else if (null === this.viewportMaximum || isNaN(this.viewportMaximum))
                    this.viewportMaximum = this.maximum;
                !l(this.minimum) && this.viewportMinimum < this.minimum && (this.viewportMinimum = this.minimum);
                !l(this.maximum) && this.viewportMaximum > this.maximum && (this.viewportMaximum = this.maximum);
                if (this.scaleBreaks)
                    for (c = 0; c < this.scaleBreaks._appliedBreaks.length; c++)
                        if ((!l(this.sessionVariables.newViewportMinimum) && this.sessionVariables.newViewportMinimum >= this.scaleBreaks._appliedBreaks[c].startValue || !l(this.options.minimum) && this.options.minimum >= this.scaleBreaks._appliedBreaks[c].startValue || !l(this.options.viewportMinimum) && this.viewportMinimum >= this.scaleBreaks._appliedBreaks[c].startValue) && (!l(this.sessionVariables.newViewportMaximum) && this.sessionVariables.newViewportMaximum <= this.scaleBreaks._appliedBreaks[c].endValue || !l(this.options.maximum) && this.options.maximum <= this.scaleBreaks._appliedBreaks[c].endValue || !l(this.options.viewportMaximum) && this.viewportMaximum <= this.scaleBreaks._appliedBreaks[c].endValue)) {
                            this.scaleBreaks._appliedBreaks.splice(c, 1);
                            break
                        }
                if ("axisX" === this.type) {
                    if (this.dataSeries && 0 < this.dataSeries.length)
                        for (d = 0; d < this.dataSeries.length; d++)
                            "dateTime" === this.dataSeries[d].xValueType && (b = !0);
                    d = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin;
                    e = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax;
                    0 === e - d && (c = "undefined" === typeof this.options.interval ? 0.4 : this.options.interval,
                    e += c,
                    d -= c);
                    Infinity !== this.dataInfo.minDiff ? h = this.dataInfo.minDiff : 1 < e - d ? h = 0.5 * Math.abs(e - d) : (h = 1,
                    b && (g = !0))
                } else
                    "axisY" === this.type && (d = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin,
                    e = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax,
                    isFinite(d) || isFinite(e) ? isFinite(d) ? isFinite(e) || (e = d) : d = e : (e = "undefined" === typeof this.options.interval ? -Infinity : this.options.interval,
                    d = "undefined" !== typeof this.options.interval || isFinite(this.dataInfo.minDiff) ? 0 : Infinity),
                    0 === d && 0 === e ? (e += 9,
                    d = 0) : 0 === e - d ? (c = Math.min(Math.abs(0.01 * Math.abs(e)), 5),
                    e += c,
                    d -= c) : d > e ? (c = Math.min(0.01 * Math.abs(this.getApparentDifference(e, d, null, !0)), 5),
                    0 <= e ? d = e - c : e = isFinite(d) ? d + c : 0) : (c = Math.min(0.01 * Math.abs(this.getApparentDifference(d, e, null, !0)), 0.05),
                    0 !== e && (e += c),
                    0 !== d && (d -= c)),
                    h = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < e - d ? 0.5 * Math.abs(e - d) : 1,
                    this.includeZero && (null === this.viewportMinimum || isNaN(this.viewportMinimum)) && 0 < d && (d = 0),
                    this.includeZero && (null === this.viewportMaximum || isNaN(this.viewportMaximum)) && 0 > e && (e = 0));
                c = this.getApparentDifference(isNaN(this.viewportMinimum) || null === this.viewportMinimum ? d : this.viewportMinimum, isNaN(this.viewportMaximum) || null === this.viewportMaximum ? e : this.viewportMaximum, null, !0);
                if ("axisX" === this.type && b) {
                    this.valueType = "dateTime";
                    this.intervalType || (c / 1 <= a ? (this.interval = 1,
                    this.intervalType = "millisecond") : c / 2 <= a ? (this.interval = 2,
                    this.intervalType = "millisecond") : c / 5 <= a ? (this.interval = 5,
                    this.intervalType = "millisecond") : c / 10 <= a ? (this.interval = 10,
                    this.intervalType = "millisecond") : c / 20 <= a ? (this.interval = 20,
                    this.intervalType = "millisecond") : c / 50 <= a ? (this.interval = 50,
                    this.intervalType = "millisecond") : c / 100 <= a ? (this.interval = 100,
                    this.intervalType = "millisecond") : c / 200 <= a ? (this.interval = 200,
                    this.intervalType = "millisecond") : c / 250 <= a ? (this.interval = 250,
                    this.intervalType = "millisecond") : c / 300 <= a ? (this.interval = 300,
                    this.intervalType = "millisecond") : c / 400 <= a ? (this.interval = 400,
                    this.intervalType = "millisecond") : c / 500 <= a ? (this.interval = 500,
                    this.intervalType = "millisecond") : c / (1 * L.secondDuration) <= a ? (this.interval = 1,
                    this.intervalType = "second") : c / (2 * L.secondDuration) <= a ? (this.interval = 2,
                    this.intervalType = "second") : c / (5 * L.secondDuration) <= a ? (this.interval = 5,
                    this.intervalType = "second") : c / (10 * L.secondDuration) <= a ? (this.interval = 10,
                    this.intervalType = "second") : c / (15 * L.secondDuration) <= a ? (this.interval = 15,
                    this.intervalType = "second") : c / (20 * L.secondDuration) <= a ? (this.interval = 20,
                    this.intervalType = "second") : c / (30 * L.secondDuration) <= a ? (this.interval = 30,
                    this.intervalType = "second") : c / (1 * L.minuteDuration) <= a ? (this.interval = 1,
                    this.intervalType = "minute") : c / (2 * L.minuteDuration) <= a ? (this.interval = 2,
                    this.intervalType = "minute") : c / (5 * L.minuteDuration) <= a ? (this.interval = 5,
                    this.intervalType = "minute") : c / (10 * L.minuteDuration) <= a ? (this.interval = 10,
                    this.intervalType = "minute") : c / (15 * L.minuteDuration) <= a ? (this.interval = 15,
                    this.intervalType = "minute") : c / (20 * L.minuteDuration) <= a ? (this.interval = 20,
                    this.intervalType = "minute") : c / (30 * L.minuteDuration) <= a ? (this.interval = 30,
                    this.intervalType = "minute") : c / (1 * L.hourDuration) <= a ? (this.interval = 1,
                    this.intervalType = "hour") : c / (2 * L.hourDuration) <= a ? (this.interval = 2,
                    this.intervalType = "hour") : c / (3 * L.hourDuration) <= a ? (this.interval = 3,
                    this.intervalType = "hour") : c / (6 * L.hourDuration) <= a ? (this.interval = 6,
                    this.intervalType = "hour") : c / (1 * L.dayDuration) <= a ? (this.interval = 1,
                    this.intervalType = "day") : c / (2 * L.dayDuration) <= a ? (this.interval = 2,
                    this.intervalType = "day") : c / (4 * L.dayDuration) <= a ? (this.interval = 4,
                    this.intervalType = "day") : c / (1 * L.weekDuration) <= a ? (this.interval = 1,
                    this.intervalType = "week") : c / (2 * L.weekDuration) <= a ? (this.interval = 2,
                    this.intervalType = "week") : c / (3 * L.weekDuration) <= a ? (this.interval = 3,
                    this.intervalType = "week") : c / (1 * L.monthDuration) <= a ? (this.interval = 1,
                    this.intervalType = "month") : c / (2 * L.monthDuration) <= a ? (this.interval = 2,
                    this.intervalType = "month") : c / (3 * L.monthDuration) <= a ? (this.interval = 3,
                    this.intervalType = "month") : c / (6 * L.monthDuration) <= a ? (this.interval = 6,
                    this.intervalType = "month") : (this.interval = c / (1 * L.yearDuration) <= a ? 1 : c / (2 * L.yearDuration) <= a ? 2 : c / (4 * L.yearDuration) <= a ? 4 : Math.floor(A.getNiceNumber(c / (a - 1), !0) / L.yearDuration),
                    this.intervalType = "year"));
                    if (null === this.viewportMinimum || isNaN(this.viewportMinimum))
                        this.viewportMinimum = d - h / 2;
                    if (null === this.viewportMaximum || isNaN(this.viewportMaximum))
                        this.viewportMaximum = e + h / 2;
                    g ? this.autoValueFormatString = "MMM DD YYYY HH:mm" : "year" === this.intervalType ? this.autoValueFormatString = "YYYY" : "month" === this.intervalType ? this.autoValueFormatString = "MMM YYYY" : "week" === this.intervalType ? this.autoValueFormatString = "MMM DD YYYY" : "day" === this.intervalType ? this.autoValueFormatString = "MMM DD YYYY" : "hour" === this.intervalType ? this.autoValueFormatString = "hh:mm TT" : "minute" === this.intervalType ? this.autoValueFormatString = "hh:mm TT" : "second" === this.intervalType ? this.autoValueFormatString = "hh:mm:ss TT" : "millisecond" === this.intervalType && (this.autoValueFormatString = "fff'ms'");
                    this.valueFormatString || (this.valueFormatString = this.autoValueFormatString)
                } else {
                    this.intervalType = "number";
                    c = A.getNiceNumber(c, !1);
                    this.interval = this.options && 0 < this.options.interval ? this.options.interval : A.getNiceNumber(c / (a - 1), !0);
                    if (null === this.viewportMinimum || isNaN(this.viewportMinimum))
                        this.viewportMinimum = "axisX" === this.type ? d - h / 2 : Math.floor(d / this.interval) * this.interval;
                    if (null === this.viewportMaximum || isNaN(this.viewportMaximum))
                        this.viewportMaximum = "axisX" === this.type ? e + h / 2 : Math.ceil(e / this.interval) * this.interval;
                    0 === this.viewportMaximum && 0 === this.viewportMinimum && (0 === this.options.viewportMinimum ? this.viewportMaximum += 10 : 0 === this.options.viewportMaximum && (this.viewportMinimum -= 10),
                    this.options && "undefined" === typeof this.options.interval && (this.interval = A.getNiceNumber((this.viewportMaximum - this.viewportMinimum) / (a - 1), !0)))
                }
                if (null === this.minimum || null === this.maximum)
                    if ("axisX" === this.type ? (d = null !== this.minimum ? this.minimum : this.dataInfo.min,
                    e = null !== this.maximum ? this.maximum : this.dataInfo.max,
                    0 === e - d && (c = "undefined" === typeof this.options.interval ? 0.4 : this.options.interval,
                    e += c,
                    d -= c),
                    h = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < e - d ? 0.5 * Math.abs(e - d) : 1) : "axisY" === this.type && (d = null !== this.minimum ? this.minimum : this.dataInfo.min,
                    e = null !== this.maximum ? this.maximum : this.dataInfo.max,
                    isFinite(d) || isFinite(e) ? 0 === d && 0 === e ? (e += 9,
                    d = 0) : 0 === e - d ? (c = Math.min(Math.abs(0.01 * Math.abs(e)), 5),
                    e += c,
                    d -= c) : d > e ? (c = Math.min(0.01 * Math.abs(this.getApparentDifference(e, d, null, !0)), 5),
                    0 <= e ? d = e - c : e = isFinite(d) ? d + c : 0) : (c = Math.min(0.01 * Math.abs(this.getApparentDifference(d, e, null, !0)), 0.05),
                    0 !== e && (e += c),
                    0 !== d && (d -= c)) : (e = "undefined" === typeof this.options.interval ? -Infinity : this.options.interval,
                    d = "undefined" !== typeof this.options.interval || isFinite(this.dataInfo.minDiff) ? 0 : Infinity),
                    h = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < e - d ? 0.5 * Math.abs(e - d) : 1,
                    this.includeZero && (null === this.minimum || isNaN(this.minimum)) && 0 < d && (d = 0),
                    this.includeZero && (null === this.maximum || isNaN(this.maximum)) && 0 > e && (e = 0)),
                    Math.abs(this.getApparentDifference(d, e, null, !0)),
                    "axisX" === this.type && b) {
                        this.valueType = "dateTime";
                        if (null === this.minimum || isNaN(this.minimum))
                            this.minimum = d - h / 2,
                            this.minimum = Math.min(this.minimum, null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ? Infinity : this.sessionVariables.viewportMinimum);
                        if (null === this.maximum || isNaN(this.maximum))
                            this.maximum = e + h / 2,
                            this.maximum = Math.max(this.maximum, null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? -Infinity : this.sessionVariables.viewportMaximum)
                    } else
                        this.intervalType = this.valueType = "number",
                        null === this.minimum && (this.minimum = "axisX" === this.type ? d - h / 2 : Math.floor(d / this.interval) * this.interval,
                        this.minimum = Math.min(this.minimum, null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ? Infinity : this.sessionVariables.viewportMinimum)),
                        null === this.maximum && (this.maximum = "axisX" === this.type ? e + h / 2 : Math.ceil(e / this.interval) * this.interval,
                        this.maximum = Math.max(this.maximum, null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? -Infinity : this.sessionVariables.viewportMaximum)),
                        0 === this.maximum && 0 === this.minimum && (0 === this.options.minimum ? this.maximum += 10 : 0 === this.options.maximum && (this.minimum -= 10));
                l(this.sessionVariables.newViewportMinimum) && (this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum));
                l(this.sessionVariables.newViewportMaximum) && (this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum));
                this.range = this.viewportMaximum - this.viewportMinimum;
                this.intervalStartPosition = "axisX" === this.type && b ? this.getLabelStartPoint(new Date(this.viewportMinimum), this.intervalType, this.interval) : Math.floor((this.viewportMinimum + 0.2 * this.interval) / this.interval) * this.interval;
                this.valueFormatString || (this.valueFormatString = A.generateValueFormatString(this.range, 2))
            }
        }
        ;
        A.prototype.calculateLogarithmicAxisParameters = function() {
            var a = this.chart.layoutManager.getFreeSpace(), g = Math.log(this.logarithmBase), b;
            "bottom" === this._position || "top" === this._position ? (this.maxWidth = a.width,
            this.maxHeight = a.height) : (this.maxWidth = a.height,
            this.maxHeight = a.width);
            var a = "axisX" === this.type ? 500 > this.maxWidth ? 7 : Math.max(7, Math.floor(this.maxWidth / 100)) : Math.max(Math.floor(this.maxWidth / 50), 3), c, d, e, h;
            h = 1;
            if (null === this.viewportMinimum || isNaN(this.viewportMinimum))
                this.viewportMinimum = this.minimum;
            if (null === this.viewportMaximum || isNaN(this.viewportMaximum))
                this.viewportMaximum = this.maximum;
            if (this.scaleBreaks)
                for (h = 0; h < this.scaleBreaks._appliedBreaks.length; h++)
                    if ((!l(this.sessionVariables.newViewportMinimum) && this.sessionVariables.newViewportMinimum >= this.scaleBreaks._appliedBreaks[h].startValue || !l(this.options.minimum) && this.options.minimum >= this.scaleBreaks._appliedBreaks[h].startValue || !l(this.options.viewportMinimum) && this.viewportMinimum >= this.scaleBreaks._appliedBreaks[h].startValue) && (!l(this.sessionVariables.newViewportMaximum) && this.sessionVariables.newViewportMaximum <= this.scaleBreaks._appliedBreaks[h].endValue || !l(this.options.maximum) && this.options.maximum <= this.scaleBreaks._appliedBreaks[h].endValue || !l(this.options.viewportMaximum) && this.viewportMaximum <= this.scaleBreaks._appliedBreaks[h].endValue)) {
                        this.scaleBreaks._appliedBreaks.splice(h, 1);
                        break
                    }
            "axisX" === this.type ? (c = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin,
            d = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax,
            1 === d / c && (h = Math.pow(this.logarithmBase, "undefined" === typeof this.options.interval ? 0.4 : this.options.interval),
            d *= h,
            c /= h),
            e = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : d / c > this.logarithmBase ? d / c * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase) : "axisY" === this.type && (c = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin,
            d = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax,
            0 >= c && !isFinite(d) ? (d = "undefined" === typeof this.options.interval ? 0 : this.options.interval,
            c = 1) : 0 >= c ? c = d : isFinite(d) || (d = c),
            1 === c && 1 === d ? (d *= this.logarithmBase - 1 / this.logarithmBase,
            c = 1) : 1 === d / c ? (h = Math.min(d * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 5)),
            d *= h,
            c /= h) : c > d ? (h = Math.min(c / d * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 5)),
            1 <= d ? c = d / h : d = c * h) : (h = Math.min(d / c * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 0.04)),
            1 !== d && (d *= h),
            1 !== c && (c /= h)),
            e = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : d / c > this.logarithmBase ? d / c * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase,
            this.includeZero && (null === this.viewportMinimum || isNaN(this.viewportMinimum)) && 1 < c && (c = 1),
            this.includeZero && (null === this.viewportMaximum || isNaN(this.viewportMaximum)) && 1 > d && (d = 1));
            h = (isNaN(this.viewportMaximum) || null === this.viewportMaximum ? d : this.viewportMaximum) / (isNaN(this.viewportMinimum) || null === this.viewportMinimum ? c : this.viewportMinimum);
            var n = (isNaN(this.viewportMaximum) || null === this.viewportMaximum ? d : this.viewportMaximum) - (isNaN(this.viewportMinimum) || null === this.viewportMinimum ? c : this.viewportMinimum);
            this.intervalType = "number";
            h = Math.pow(this.logarithmBase, A.getNiceNumber(Math.abs(Math.log(h) / g), !1));
            this.options && 0 < this.options.interval ? this.interval = this.options.interval : (this.interval = A.getNiceExponent(Math.log(h) / g / (a - 1), !0),
            b = A.getNiceNumber(n / (a - 1), !0));
            if (null === this.viewportMinimum || isNaN(this.viewportMinimum))
                this.viewportMinimum = "axisX" === this.type ? c / Math.sqrt(e) : Math.pow(this.logarithmBase, this.interval * Math.floor(Math.log(c) / g / this.interval));
            if (null === this.viewportMaximum || isNaN(this.viewportMaximum))
                this.viewportMaximum = "axisX" === this.type ? d * Math.sqrt(e) : Math.pow(this.logarithmBase, this.interval * Math.ceil(Math.log(d) / g / this.interval));
            1 === this.viewportMaximum && 1 === this.viewportMinimum && (1 === this.options.viewportMinimum ? this.viewportMaximum *= this.logarithmBase - 1 / this.logarithmBase : 1 === this.options.viewportMaximum && (this.viewportMinimum /= this.logarithmBase - 1 / this.logarithmBase),
            this.options && "undefined" === typeof this.options.interval && (this.interval = A.getNiceExponent(Math.ceil(Math.log(h) / g) / (a - 1)),
            b = A.getNiceNumber((this.viewportMaximum - this.viewportMinimum) / (a - 1), !0)));
            if (null === this.minimum || null === this.maximum)
                "axisX" === this.type ? (c = null !== this.minimum ? this.minimum : this.dataInfo.min,
                d = null !== this.maximum ? this.maximum : this.dataInfo.max,
                1 === d / c && (h = Math.pow(this.logarithmBase, "undefined" === typeof this.options.interval ? 0.4 : this.options.interval),
                d *= h,
                c /= h),
                e = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : d / c > this.logarithmBase ? d / c * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase) : "axisY" === this.type && (c = null !== this.minimum ? this.minimum : this.dataInfo.min,
                d = null !== this.maximum ? this.maximum : this.dataInfo.max,
                isFinite(c) || isFinite(d) ? 1 === c && 1 === d ? (d *= this.logarithmBase,
                c /= this.logarithmBase) : 1 === d / c ? (h = Math.pow(this.logarithmBase, this.interval),
                d *= h,
                c /= h) : c > d ? (h = Math.min(0.01 * (c / d), 5),
                1 <= d ? c = d / h : d = c * h) : (h = Math.min(d / c * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 0.04)),
                1 !== d && (d *= h),
                1 !== c && (c /= h)) : (d = "undefined" === typeof this.options.interval ? 0 : this.options.interval,
                c = 1),
                e = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : d / c > this.logarithmBase ? d / c * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase,
                this.includeZero && (null === this.minimum || isNaN(this.minimum)) && 1 < c && (c = 1),
                this.includeZero && (null === this.maximum || isNaN(this.maximum)) && 1 > d && (d = 1)),
                this.intervalType = "number",
                null === this.minimum && (this.minimum = "axisX" === this.type ? c / Math.sqrt(e) : Math.pow(this.logarithmBase, this.interval * Math.floor(Math.log(c) / g / this.interval)),
                l(null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ? "undefined" === typeof this.sessionVariables.newViewportMinimum ? Infinity : this.sessionVariables.newViewportMinimum : this.sessionVariables.viewportMinimum) || (this.minimum = Math.min(this.minimum, null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ? "undefined" === typeof this.sessionVariables.newViewportMinimum ? Infinity : this.sessionVariables.newViewportMinimum : this.sessionVariables.viewportMinimum))),
                null === this.maximum && (this.maximum = "axisX" === this.type ? d * Math.sqrt(e) : Math.pow(this.logarithmBase, this.interval * Math.ceil(Math.log(d) / g / this.interval)),
                l(null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? "undefined" === typeof this.sessionVariables.newViewportMaximum ? 0 : this.sessionVariables.newViewportMaximum : this.sessionVariables.viewportMaximum) || (this.maximum = Math.max(this.maximum, null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? "undefined" === typeof this.sessionVariables.newViewportMaximum ? 0 : this.sessionVariables.newViewportMaximum : this.sessionVariables.viewportMaximum))),
                1 === this.maximum && 1 === this.minimum && (1 === this.options.minimum ? this.maximum *= this.logarithmBase - 1 / this.logarithmBase : 1 === this.options.maximum && (this.minimum /= this.logarithmBase - 1 / this.logarithmBase));
            this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum);
            this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum);
            this.viewportMinimum > this.viewportMaximum && (!this.options.viewportMinimum && !this.options.minimum || this.options.viewportMaximum || this.options.maximum ? this.options.viewportMinimum || this.options.minimum || !this.options.viewportMaximum && !this.options.maximum || (this.viewportMinimum = this.minimum = (this.options.viewportMaximum || this.options.maximum) / Math.pow(this.logarithmBase, 2 * Math.ceil(this.interval))) : this.viewportMaximum = this.maximum = this.options.viewportMinimum || this.options.minimum);
            c = Math.pow(this.logarithmBase, Math.floor(Math.log(this.viewportMinimum) / (g * this.interval) + 0.2) * this.interval);
            this.range = this.viewportMaximum / this.viewportMinimum;
            this.noTicks = a;
            if (!this.options.interval && this.range < Math.pow(this.logarithmBase, 8 > this.viewportMaximum || 3 > a ? 2 : 3)) {
                for (g = Math.floor(this.viewportMinimum / b + 0.5) * b; g < this.viewportMinimum; )
                    g += b;
                this.equidistantInterval = !1;
                this.intervalStartPosition = g;
                this.interval = b
            } else
                this.options.interval || (b = Math.ceil(this.interval),
                this.range > this.interval && (this.interval = b,
                c = Math.pow(this.logarithmBase, Math.floor(Math.log(this.viewportMinimum) / (g * this.interval) + 0.2) * this.interval))),
                this.equidistantInterval = !0,
                this.intervalStartPosition = c;
            if (!this.valueFormatString && (this.valueFormatString = "#,##0.##",
            1 > this.viewportMinimum)) {
                g = Math.floor(Math.abs(Math.log(this.viewportMinimum) / Math.LN10)) + 2;
                if (isNaN(g) || !isFinite(g))
                    g = 2;
                if (2 < g)
                    for (h = 0; h < g - 2; h++)
                        this.valueFormatString += "#"
            }
        }
        ;
        A.generateValueFormatString = function(a, g) {
            var b = "#,##0."
              , c = g;
            1 > a && (c += Math.floor(Math.abs(Math.log(a) / Math.LN10)),
            isNaN(c) || !isFinite(c)) && (c = g);
            for (var d = 0; d < c; d++)
                b += "#";
            return b
        }
        ;
        A.getNiceExponent = function(a, g) {
            var b = Math.floor(Math.log(a) / Math.LN10)
              , c = a / Math.pow(10, b)
              , c = 0 > b ? 1 >= c ? 1 : 5 >= c ? 5 : 10 : Math.max(Math.floor(c), 1);
            return -20 > b ? Number(c * Math.pow(10, b)) : Number((c * Math.pow(10, b)).toFixed(20))
        }
        ;
        A.getNiceNumber = function(a, g) {
            var b = Math.floor(Math.log(a) / Math.LN10)
              , c = a / Math.pow(10, b)
              , c = g ? 1.5 > c ? 1 : 3 > c ? 2 : 7 > c ? 5 : 10 : 1 >= c ? 1 : 2 >= c ? 2 : 5 >= c ? 5 : 10;
            return -20 > b ? Number(c * Math.pow(10, b)) : Number((c * Math.pow(10, b)).toFixed(20))
        }
        ;
        A.prototype.getLabelStartPoint = function() {
            var a = L[this.intervalType + "Duration"] * this.interval
              , a = new Date(Math.floor(this.viewportMinimum / a) * a);
            if ("millisecond" !== this.intervalType)
                if ("second" === this.intervalType)
                    0 < a.getMilliseconds() && (a.setSeconds(a.getSeconds() + 1),
                    a.setMilliseconds(0));
                else if ("minute" === this.intervalType) {
                    if (0 < a.getSeconds() || 0 < a.getMilliseconds())
                        a.setMinutes(a.getMinutes() + 1),
                        a.setSeconds(0),
                        a.setMilliseconds(0)
                } else if ("hour" === this.intervalType) {
                    if (0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds())
                        a.setHours(a.getHours() + 1),
                        a.setMinutes(0),
                        a.setSeconds(0),
                        a.setMilliseconds(0)
                } else if ("day" === this.intervalType) {
                    if (0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds())
                        a.setDate(a.getDate() + 1),
                        a.setHours(0),
                        a.setMinutes(0),
                        a.setSeconds(0),
                        a.setMilliseconds(0)
                } else if ("week" === this.intervalType) {
                    if (0 < a.getDay() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds())
                        a.setDate(a.getDate() + (7 - a.getDay())),
                        a.setHours(0),
                        a.setMinutes(0),
                        a.setSeconds(0),
                        a.setMilliseconds(0)
                } else if ("month" === this.intervalType) {
                    if (1 < a.getDate() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds())
                        a.setMonth(a.getMonth() + 1),
                        a.setDate(1),
                        a.setHours(0),
                        a.setMinutes(0),
                        a.setSeconds(0),
                        a.setMilliseconds(0)
                } else
                    "year" === this.intervalType && (0 < a.getMonth() || 1 < a.getDate() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) && (a.setFullYear(a.getFullYear() + 1),
                    a.setMonth(0),
                    a.setDate(1),
                    a.setHours(0),
                    a.setMinutes(0),
                    a.setSeconds(0),
                    a.setMilliseconds(0));
            return a
        }
        ;
        qa(W, P);
        qa(Y, P);
        Y.prototype.createUserOptions = function(a) {
            if ("undefined" !== typeof a || this.options._isPlaceholder) {
                var g = 0;
                this.parent.options._isPlaceholder && this.parent.createUserOptions();
                this.options._isPlaceholder || (Da(this.parent[this.optionsName]),
                g = this.parent.options[this.optionsName].indexOf(this.options));
                this.options = "undefined" === typeof a ? {} : a;
                this.parent.options[this.optionsName][g] = this.options
            }
        }
        ;
        Y.prototype.render = function(a) {
            if (0 !== this.spacing || 0 !== this.options.lineThickness && ("undefined" !== typeof this.options.lineThickness || 0 !== this.parent.lineThickness)) {
                var g = this.ctx
                  , b = this.ctx.globalAlpha;
                this.ctx = a || this.ctx;
                this.ctx.save();
                this.ctx.beginPath();
                this.ctx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
                this.ctx.clip();
                var c = this.scaleBreaks.parent.getPixelCoordinatesOnAxis(this.startValue)
                  , d = this.scaleBreaks.parent.getPixelCoordinatesOnAxis(this.endValue);
                this.ctx.strokeStyle = this.lineColor;
                this.ctx.fillStyle = this.color;
                this.ctx.beginPath();
                this.ctx.globalAlpha = 1;
                R(this.id);
                var e, h, l, n, k, p;
                a = Math.max(this.spacing, 3);
                var m = Math.max(0, this.lineThickness);
                this.ctx.lineWidth = m;
                this.ctx.setLineDash && this.ctx.setLineDash(J(this.lineDashType, m));
                if ("bottom" === this.scaleBreaks.parent._position || "top" === this.scaleBreaks.parent._position)
                    if (c = 1 === m % 2 ? (c.x << 0) + 0.5 : c.x << 0,
                    h = 1 === m % 2 ? (d.x << 0) + 0.5 : d.x << 0,
                    "top" === this.scaleBreaks.parent._position ? (d = this.chart.plotArea.y1,
                    l = this.chart.plotArea.y2 + m / 2 + 0.5 << 0) : (d = this.chart.plotArea.y2,
                    l = this.chart.plotArea.y1 - m / 2 + 0.5 << 0,
                    a *= -1),
                    this.bounds = {
                        x1: c - m / 2,
                        y1: d,
                        x2: h + m / 2,
                        y2: l
                    },
                    this.ctx.moveTo(c, d),
                    "straight" === this.type || "top" === this.scaleBreaks.parent._position && 0 >= a || "bottom" === this.scaleBreaks.parent._position && 0 <= a)
                        this.ctx.lineTo(c, l),
                        this.ctx.lineTo(h, l),
                        this.ctx.lineTo(h, d);
                    else if ("wavy" === this.type) {
                        n = c;
                        k = d;
                        e = 0.5;
                        p = (l - k) / a / 3;
                        for (var q = 0; q < p; q++)
                            this.ctx.bezierCurveTo(n + e * a, k + a, n + e * a, k + 2 * a, n, k + 3 * a),
                            k += 3 * a,
                            e *= -1;
                        this.ctx.bezierCurveTo(n + e * a, k + a, n + e * a, k + 2 * a, n, k + 3 * a);
                        n = h;
                        e *= -1;
                        this.ctx.lineTo(n, k);
                        for (q = 0; q < p; q++)
                            this.ctx.bezierCurveTo(n + e * a, k - a, n + e * a, k - 2 * a, n, k - 3 * a),
                            k -= 3 * a,
                            e *= -1
                    } else {
                        if ("zigzag" === this.type) {
                            e = -1;
                            k = d + a;
                            n = c + a;
                            p = (l - k) / a / 2;
                            for (q = 0; q < p; q++)
                                this.ctx.lineTo(n, k),
                                n += 2 * e * a,
                                k += 2 * a,
                                e *= -1;
                            this.ctx.lineTo(n, k);
                            n += h - c;
                            for (q = 0; q < p + 1; q++)
                                this.ctx.lineTo(n, k),
                                n += 2 * e * a,
                                k -= 2 * a,
                                e *= -1;
                            this.ctx.lineTo(n + e * a, k + a)
                        }
                    }
                else if ("left" === this.scaleBreaks.parent._position || "right" === this.scaleBreaks.parent._position)
                    if (d = 1 === m % 2 ? (d.y << 0) + 0.5 : d.y << 0,
                    l = 1 === m % 2 ? (c.y << 0) + 0.5 : c.y << 0,
                    "left" === this.scaleBreaks.parent._position ? (c = this.chart.plotArea.x1,
                    h = this.chart.plotArea.x2 + m / 2 + 0.5 << 0) : (c = this.chart.plotArea.x2,
                    h = this.chart.plotArea.x1 - m / 2 + 0.5 << 0,
                    a *= -1),
                    this.bounds = {
                        x1: c,
                        y1: d - m / 2,
                        x2: h,
                        y2: l + m / 2
                    },
                    this.ctx.moveTo(c, d),
                    "straight" === this.type || "left" === this.scaleBreaks.parent._position && 0 >= a || "right" === this.scaleBreaks.parent._position && 0 <= a)
                        this.ctx.lineTo(h, d),
                        this.ctx.lineTo(h, l),
                        this.ctx.lineTo(c, l);
                    else if ("wavy" === this.type) {
                        n = c;
                        k = d;
                        e = 0.5;
                        p = (h - n) / a / 3;
                        for (q = 0; q < p; q++)
                            this.ctx.bezierCurveTo(n + a, k + e * a, n + 2 * a, k + e * a, n + 3 * a, k),
                            n += 3 * a,
                            e *= -1;
                        this.ctx.bezierCurveTo(n + a, k + e * a, n + 2 * a, k + e * a, n + 3 * a, k);
                        k = l;
                        e *= -1;
                        this.ctx.lineTo(n, k);
                        for (q = 0; q < p; q++)
                            this.ctx.bezierCurveTo(n - a, k + e * a, n - 2 * a, k + e * a, n - 3 * a, k),
                            n -= 3 * a,
                            e *= -1
                    } else if ("zigzag" === this.type) {
                        e = 1;
                        k = d - a;
                        n = c + a;
                        p = (h - n) / a / 2;
                        for (q = 0; q < p; q++)
                            this.ctx.lineTo(n, k),
                            k += 2 * e * a,
                            n += 2 * a,
                            e *= -1;
                        this.ctx.lineTo(n, k);
                        k += l - d;
                        for (q = 0; q < p + 1; q++)
                            this.ctx.lineTo(n, k),
                            k += 2 * e * a,
                            n -= 2 * a,
                            e *= -1;
                        this.ctx.lineTo(n + a, k + e * a)
                    }
                0 < m && this.ctx.stroke();
                this.ctx.closePath();
                this.ctx.globalAlpha = this.fillOpacity;
                this.ctx.globalCompositeOperation = "destination-over";
                this.ctx.fill();
                this.ctx.restore();
                this.ctx.globalAlpha = b;
                this.ctx = g
            }
        }
        ;
        qa(ha, P);
        ha.prototype.createUserOptions = function(a) {
            if ("undefined" !== typeof a || this.options._isPlaceholder) {
                var g = 0;
                this.parent.options._isPlaceholder && this.parent.createUserOptions();
                this.options._isPlaceholder || (Da(this.parent.stripLines),
                g = this.parent.options.stripLines.indexOf(this.options));
                this.options = "undefined" === typeof a ? {} : a;
                this.parent.options.stripLines[g] = this.options
            }
        }
        ;
        ha.prototype.render = function() {
            this.ctx.save();
            var a = this.parent.getPixelCoordinatesOnAxis(this.value)
              , g = Math.abs("pixel" === this._thicknessType ? this.thickness : Math.abs(this.parent.convertValueToPixel(this.endValue) - this.parent.convertValueToPixel(this.startValue)));
            if (0 < g) {
                var b = null === this.opacity ? 1 : this.opacity;
                this.ctx.strokeStyle = this.color;
                this.ctx.beginPath();
                var c = this.ctx.globalAlpha;
                this.ctx.globalAlpha = b;
                R(this.id);
                var d, e, h, l;
                this.ctx.lineWidth = g;
                this.ctx.setLineDash && this.ctx.setLineDash(J(this.lineDashType, g));
                if ("bottom" === this.parent._position || "top" === this.parent._position)
                    d = e = 1 === this.ctx.lineWidth % 2 ? (a.x << 0) + 0.5 : a.x << 0,
                    h = this.chart.plotArea.y1,
                    l = this.chart.plotArea.y2,
                    this.bounds = {
                        x1: d - g / 2,
                        y1: h,
                        x2: e + g / 2,
                        y2: l
                    };
                else if ("left" === this.parent._position || "right" === this.parent._position)
                    h = l = 1 === this.ctx.lineWidth % 2 ? (a.y << 0) + 0.5 : a.y << 0,
                    d = this.chart.plotArea.x1,
                    e = this.chart.plotArea.x2,
                    this.bounds = {
                        x1: d,
                        y1: h - g / 2,
                        x2: e,
                        y2: l + g / 2
                    };
                this.ctx.moveTo(d, h);
                this.ctx.lineTo(e, l);
                this.ctx.stroke();
                this.ctx.globalAlpha = c
            }
            this.ctx.restore()
        }
        ;
        qa(ea, P);
        ea.prototype.showAt = function(a) {
            if (!this.enabled)
                return !1;
            var g = this.chart
              , b = !1;
            g.resetOverlayedCanvas();
            g.clearedOverlayedCanvas = this.parent.type;
            this.chart.renderCrosshairs(this.parent);
            var c, d = "xySwapped" === g.plotInfo.axisPlacement;
            "bottom" === this.parent._position ? c = d ? g.axisY : g.axisX : "top" === this.parent._position ? c = d ? g.axisY2 : g.axisX2 : "left" === this.parent._position ? c = d ? g.axisX : g.axisY : "right" === this.parent._position && (c = d ? g.axisX2 : g.axisY2);
            if (c)
                for (d = 0; d < c.length; d++)
                    this.parent === c[d] && (c[d]._crosshairValue = a >= c[d].viewportMinimum && a <= c[d].viewportMaximum ? a : null);
            c = ["axisX", "axisX2", "axisY", "axisY2"];
            for (d = 0; d < c.length; d++)
                for (var e = c[d], h = 0; h < g[e].length; h++) {
                    var n = g[e][h]
                      , s = n._crosshairValue;
                    n.crosshair && n.crosshair.enabled && (this.parent === n && (n.sessionVariables.crosshairShownByPixel = !1,
                    n.sessionVariables.crosshairValue = n.crosshair._updatedValue = s || a),
                    !l(s) && s >= n.viewportMinimum && s <= n.viewportMaximum ? (n.showCrosshair(s),
                    this === n.crosshair && (b = !0)) : void 0 !== s && (n.sessionVariables.crosshairValue = null,
                    n.crosshair._updatedValue = null))
                }
            this.chart.toolTip && (this.chart.toolTip._entries && this.chart.sessionVariables._dataHighlighted) && this.chart.toolTip.highlightObjects(this.chart.toolTip._entries);
            return b
        }
        ;
        ea.prototype.hide = function() {
            this.chart.resetOverlayedCanvas();
            this.chart.toolTip && (this.chart.toolTip._entries && this.chart.sessionVariables._dataHighlighted) && this.chart.toolTip.highlightObjects(this.chart.toolTip._entries);
            this.chart.renderCrosshairs(this.parent);
            this.parent.sessionVariables._crosshairHidden = this._hidden = !0
        }
        ;
        ea.prototype.render = function(a, g, b) {
            var c, d, e, h, n = null, s = null, k = null, p = "";
            this.valueFormatString || ("dateTime" === this.parent.valueType ? this.valueFormatString = this.parent.valueFormatString : (k = 0,
            k = "xySwapped" === this.chart.plotInfo.axisPlacement ? 50 < this.parent.range ? 0 : 500 < this.chart.width && 25 > this.parent.range ? 2 : Math.floor(Math.abs(Math.log(this.parent.range) / Math.LN10)) + (5 > this.parent.range ? 2 : 10 > this.parent.range ? 1 : 0) : 50 < this.parent.range ? 0 : Math.floor(Math.abs(Math.log(this.parent.range) / Math.LN10)) + (5 > this.parent.range ? 2 : 10 > this.parent.range ? 1 : 0),
            this.valueFormatString = A.generateValueFormatString(this.parent.range, k)));
            var m = null === this.opacity ? 1 : this.opacity
              , q = Math.abs("pixel" === this._thicknessType ? this.thickness : this.parent.conversionParameters.pixelPerUnit * this.thickness)
              , f = this.chart.overlaidCanvasCtx
              , u = f.globalAlpha;
            f.beginPath();
            f.strokeStyle = this.color;
            f.lineWidth = q;
            f.save();
            this.labelFontSize = Math.abs(l(this.options.labelFontSize) ? this.parent.labelFontSize : this.labelFontSize);
            this.labelMaxWidth = l(this.options.labelMaxWidth) ? 0.3 * this.chart.width : this.labelMaxWidth;
            this.labelMaxHeight = l(this.options.labelWrap) || this.labelWrap ? 0.3 * this.chart.height : 1.5 * this.labelFontSize + ("object" === typeof this.labelPadding ? (this.labelPadding.top || 0) + (this.labelPadding.bottom || 0) : 2 * this.labelPadding);
            0 < q && f.setLineDash && f.setLineDash(J(this.lineDashType, q));
            k = new ja(f,{
                x: 0,
                y: 0,
                backgroundColor: this.labelBackgroundColor,
                borderColor: this.labelBorderColor,
                borderThickness: this.labelBorderThickness,
                cornerRadius: this.labelCornerRadius,
                maxWidth: this.labelMaxWidth,
                maxHeight: this.labelMaxHeight,
                angle: this.labelAngle,
                text: p,
                textAlign: this.labelTextAlign,
                fontSize: this.labelFontSize,
                fontFamily: this.labelFontFamily,
                fontWeight: this.labelFontWeight,
                padding: this.labelPadding,
                fontColor: this.labelFontColor,
                fontStyle: this.labelFontStyle,
                textBaseline: "middle"
            });
            if (this.snapToDataPoint) {
                var y = 0
                  , p = [];
                if ("xySwapped" === this.chart.plotInfo.axisPlacement) {
                    var z = null;
                    if ("bottom" === this.parent._position || "top" === this.parent._position)
                        y = this.parent.dataSeries[0].axisX.convertPixelToValue({
                            y: this.parent.sessionVariables.crosshairShownByPixel ? this.chart.sessionVariables.mouseY : g
                        });
                    else if ("left" === this.parent._position || "right" === this.parent._position)
                        y = this.parent.convertPixelToValue({
                            y: g
                        });
                    for (var r = 0; r < this.parent.dataSeries.length; r++)
                        (z = this.parent.dataSeries[r].getDataPointAtX(y, !0, !0)) && 0 <= z.index && (z.dataSeries = this.parent.dataSeries[r],
                        null !== z.dataPoint.y && z.dataSeries.visible && p.push(z));
                    z = null;
                    if (0 === p.length)
                        return;
                    p.sort(function(a, b) {
                        return a.distance - b.distance
                    });
                    var x = z = 0;
                    yPercent = cumulativeY = 0;
                    for (var y = Infinity, v, r = 0; r < p.length; r++) {
                        if ("rangeBar" === p[r].dataSeries.type || "error" === p[r].dataSeries.type) {
                            if (p[r].dataPoint.y)
                                for (var C = 0; C < p[r].dataPoint.y.length; C++)
                                    x = Math.abs(a - this.parent.convertValueToPixel(p[r].dataPoint.y[C])),
                                    x <= y && (y = x,
                                    z = r)
                        } else
                            "stackedBar" === p[r].dataSeries.type ? (cumulativeY = p[r].dataSeries.dataPointEOs[p[r].index].cumulativeY,
                            x = Math.abs(a - this.parent.convertValueToPixel(cumulativeY)),
                            x <= y && (y = x,
                            z = r)) : "stackedBar100" === p[r].dataSeries.type ? (x = p[0].dataPoint.x.getTime ? p[0].dataPoint.x.getTime() : p[0].dataPoint.x,
                            l(v) && (v = Math.abs(a - this.parent.convertValueToPixel(100 * (p[0].dataSeries.dataPointEOs[p[0].index].cumulativeY / p[0].dataSeries.plotUnit.dataPointYSums[x])))),
                            cumulativeY = p[r].dataSeries.dataPointEOs[p[r].index].cumulativeY,
                            x = p[r].dataPoint.x.getTime ? p[r].dataPoint.x.getTime() : p[r].dataPoint.x,
                            yPercent = 100 * (cumulativeY / p[r].dataSeries.plotUnit.dataPointYSums[x]),
                            x = Math.abs(a - this.parent.convertValueToPixel(yPercent)),
                            x <= v && (v = x,
                            z = r)) : (x = Math.abs(a - this.parent.convertValueToPixel(p[r].dataPoint.y)),
                            x <= y && (y = x,
                            z = r));
                        l(v) || (y = Math.min(y, v))
                    }
                    v = p[z];
                    r = 0;
                    if ("bottom" === this.parent._position || "top" === this.parent._position) {
                        if ("rangeBar" === v.dataSeries.type || "error" === v.dataSeries.type) {
                            y = Math.abs(a - this.parent.convertValueToPixel(v.dataPoint.y[0]));
                            for (p = 0; p < v.dataPoint.y.length; p++)
                                x = Math.abs(a - this.parent.convertValueToPixel(v.dataPoint.y[p])),
                                x < y && (y = x,
                                r = p);
                            n = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(v.dataPoint.y[r]) << 0) + 0.5 : this.parent.convertValueToPixel(v.dataPoint.y[r]) << 0;
                            this.value = v.dataPoint.y[r];
                            k.text = this.labelFormatter ? this.labelFormatter({
                                chart: this.chart,
                                axis: this.parent.options,
                                crosshair: this.options,
                                value: v.dataPoint.y[r]
                            }) : l(this.options.label) ? fa(v.dataPoint.y[r], this.valueFormatString, this.chart._cultureInfo) : this.label
                        } else
                            "stackedBar" === v.dataSeries.type ? (y = Math.abs(a - this.parent.convertValueToPixel(p[0].dataPoint.y)),
                            cumulativeY = v.dataSeries.dataPointEOs[v.index].cumulativeY,
                            n = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(cumulativeY) << 0) + 0.5 : this.parent.convertValueToPixel(cumulativeY) << 0,
                            this.value = cumulativeY,
                            k.text = this.labelFormatter ? this.labelFormatter({
                                chart: this.chart,
                                axis: this.parent.options,
                                crosshair: this.options,
                                value: cumulativeY
                            }) : l(this.options.label) ? fa(cumulativeY, this.valueFormatString, this.chart._cultureInfo) : this.label) : "stackedBar100" === v.dataSeries.type ? (y = Math.abs(a - this.parent.convertValueToPixel(p[0].dataPoint.y)),
                            cumulativeY = v.dataSeries.dataPointEOs[v.index].cumulativeY,
                            x = v.dataPoint.x.getTime ? v.dataPoint.x.getTime() : v.dataPoint.x,
                            yPercent = 100 * (cumulativeY / v.dataSeries.plotUnit.dataPointYSums[x]),
                            n = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(yPercent) << 0) + 0.5 : this.parent.convertValueToPixel(yPercent) << 0,
                            this.value = yPercent,
                            k.text = this.labelFormatter ? this.labelFormatter({
                                chart: this.chart,
                                axis: this.parent.options,
                                crosshair: this.options,
                                value: yPercent
                            }) : l(this.options.label) ? fa(yPercent, this.valueFormatString, this.chart._cultureInfo) : this.label) : (n = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(v.dataPoint.y) << 0) + 0.5 : this.parent.convertValueToPixel(v.dataPoint.y) << 0,
                            this.value = v.dataPoint.y,
                            k.text = this.labelFormatter ? this.labelFormatter({
                                chart: this.chart,
                                axis: this.parent.options,
                                crosshair: this.options,
                                value: v.dataPoint.y
                            }) : l(this.options.label) ? fa(v.dataPoint.y, this.valueFormatString, this.chart._cultureInfo) : this.label);
                        c = d = n;
                        e = this.chart.plotArea.y1;
                        h = this.chart.plotArea.y2;
                        this.bounds = {
                            x1: c - q / 2,
                            y1: e,
                            x2: d + q / 2,
                            y2: h
                        };
                        k.x = c - k.measureText().width / 2;
                        k.x + k.width > this.chart.bounds.x2 ? k.x = this.chart.bounds.x2 - k.width : k.x < this.chart.bounds.x1 && (k.x = this.chart.bounds.x1);
                        k.y = this.parent.lineCoordinates.y2 + ("top" === this.parent._position ? -k.height + this.parent.tickLength : k.fontSize / 2) + 2;
                        k.y + k.height > this.chart.bounds.y2 ? k.y = this.chart.bounds.y2 - k.height : k.y < this.chart.bounds.y1 && (k.y = this.chart.bounds.y1)
                    } else if ("left" === this.parent._position || "right" === this.parent._position) {
                        e = h = s = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(v.dataPoint.x) << 0) + 0.5 : this.parent.convertValueToPixel(v.dataPoint.x) << 0;
                        c = this.chart.plotArea.x1;
                        d = this.chart.plotArea.x2;
                        this.bounds = {
                            x1: c,
                            y1: e - q / 2,
                            x2: d,
                            y2: h + q / 2
                        };
                        r = !1;
                        if (this.parent.labels)
                            for (y = Math.ceil(this.parent.interval),
                            p = 0; p < this.parent.viewportMaximum; p += y)
                                if (this.parent.labels[p])
                                    r = !0;
                                else {
                                    r = !1;
                                    break
                                }
                        if (r) {
                            if ("axisX" === this.parent.type)
                                for (y = this.parent.convertPixelToValue({
                                    y: g
                                }),
                                z = null,
                                r = 0; r < this.parent.dataSeries.length; r++)
                                    (z = this.parent.dataSeries[r].getDataPointAtX(y, !0, !0)) && 0 <= z.index && (k.text = this.labelFormatter ? this.labelFormatter({
                                        chart: this.chart,
                                        axis: this.parent.options,
                                        crosshair: this.options,
                                        value: v.dataPoint.x
                                    }) : l(this.options.label) ? z.dataPoint.label : this.label)
                        } else
                            k.text = "dateTime" !== this.parent.valueType || this.parent.logarithmic ? this.labelFormatter ? this.labelFormatter({
                                chart: this.chart,
                                axis: this.parent.options,
                                crosshair: this.options,
                                value: v.dataPoint.x
                            }) : l(this.options.label) ? fa(v.dataPoint.x, this.valueFormatString, this.chart._cultureInfo) : this.label : this.labelFormatter ? this.labelFormatter({
                                chart: this.chart,
                                axis: this.parent.options,
                                crosshair: this.options,
                                value: v.dataPoint.x
                            }) : l(this.options.label) ? Ca(v.dataPoint.x, this.valueFormatString, this.chart._cultureInfo) : this.label;
                        this.value = v.dataPoint.x;
                        k.y = h + k.fontSize / 2 - k.measureText().height / 2 + 2;
                        k.y - k.fontSize / 2 < this.chart.bounds.y1 ? k.y = this.chart.bounds.y1 + k.fontSize / 2 + 2 : k.y + k.measureText().height - k.fontSize / 2 > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.measureText().height + k.fontSize / 2);
                        "left" === this.parent._position ? k.x = this.parent.lineCoordinates.x2 - k.measureText().width : "right" === this.parent._position && (k.x = this.parent.lineCoordinates.x2)
                    }
                } else if ("bottom" === this.parent._position || "top" === this.parent._position) {
                    y = this.parent.convertPixelToValue({
                        x: a
                    });
                    for (r = 0; r < this.parent.dataSeries.length; r++)
                        (z = this.parent.dataSeries[r].getDataPointAtX(y, !0, !0)) && 0 <= z.index && (z.dataSeries = this.parent.dataSeries[r],
                        null !== z.dataPoint.y && z.dataSeries.visible && p.push(z));
                    if (0 === p.length)
                        return;
                    p.sort(function(a, b) {
                        return a.distance - b.distance
                    });
                    v = p[0];
                    c = d = n = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(v.dataPoint.x) << 0) + 0.5 : this.parent.convertValueToPixel(v.dataPoint.x) << 0;
                    e = this.chart.plotArea.y1;
                    h = this.chart.plotArea.y2;
                    this.bounds = {
                        x1: c - q / 2,
                        y1: e,
                        x2: d + q / 2,
                        y2: h
                    };
                    r = !1;
                    if (this.parent.labels)
                        for (y = Math.ceil(this.parent.interval),
                        p = 0; p < this.parent.viewportMaximum; p += y)
                            if (this.parent.labels[p])
                                r = !0;
                            else {
                                r = !1;
                                break
                            }
                    if (r) {
                        if ("axisX" === this.parent.type)
                            for (y = this.parent.convertPixelToValue({
                                x: a
                            }),
                            z = null,
                            r = 0; r < this.parent.dataSeries.length; r++)
                                (z = this.parent.dataSeries[r].getDataPointAtX(y, !0, !0)) && 0 <= z.index && (k.text = this.labelFormatter ? this.labelFormatter({
                                    chart: this.chart,
                                    axis: this.parent.options,
                                    crosshair: this.options,
                                    value: v.dataPoint.x
                                }) : l(this.options.label) ? z.dataPoint.label : this.label)
                    } else
                        k.text = "dateTime" !== this.parent.valueType || this.parent.logarithmic ? this.labelFormatter ? this.labelFormatter({
                            chart: this.chart,
                            axis: this.parent.options,
                            crosshair: this.options,
                            value: v.dataPoint.x
                        }) : l(this.options.label) ? fa(v.dataPoint.x, this.valueFormatString, this.chart._cultureInfo) : this.label : this.labelFormatter ? this.labelFormatter({
                            chart: this.chart,
                            axis: this.parent.options,
                            crosshair: this.options,
                            value: v.dataPoint.x
                        }) : l(this.options.label) ? Ca(v.dataPoint.x, this.valueFormatString, this.chart._cultureInfo) : this.label;
                    this.value = v.dataPoint.x;
                    k.x = c - k.measureText().width / 2;
                    k.x + k.width > this.chart.bounds.x2 && (k.x = this.chart.bounds.x2 - k.width);
                    k.x < this.chart.bounds.x1 && (k.x = this.chart.bounds.x1);
                    "bottom" === this.parent._position ? k.y = this.parent.lineCoordinates.y2 + k.fontSize / 2 + 2 : "top" === this.parent._position && (k.y = this.parent.lineCoordinates.y1 - k.height + k.fontSize / 2 + 2)
                } else if ("left" === this.parent._position || "right" === this.parent._position) {
                    !l(this.parent.dataSeries) && 0 < this.parent.dataSeries.length && (y = this.parent.dataSeries[0].axisX.convertPixelToValue({
                        x: this.parent.sessionVariables.crosshairShownByPixel ? this.chart.sessionVariables.mouseX : a
                    }));
                    for (r = 0; r < this.parent.dataSeries.length; r++)
                        (z = this.parent.dataSeries[r].getDataPointAtX(y, !0, !0)) && 0 <= z.index && (z.dataSeries = this.parent.dataSeries[r],
                        null !== z.dataPoint.y && z.dataSeries.visible && p.push(z));
                    if (0 === p.length)
                        return;
                    p.sort(function(a, b) {
                        return a.distance - b.distance
                    });
                    x = z = 0;
                    y = Infinity;
                    for (r = 0; r < p.length; r++) {
                        if ("rangeColumn" === p[r].dataSeries.type || "rangeArea" === p[r].dataSeries.type || "error" === p[r].dataSeries.type || "rangeSplineArea" === p[r].dataSeries.type || "candlestick" === p[r].dataSeries.type || "ohlc" === p[r].dataSeries.type || "boxAndWhisker" === p[r].dataSeries.type) {
                            if (p[r].dataPoint.y)
                                for (C = 0; C < p[r].dataPoint.y.length; C++)
                                    x = Math.abs(g - this.parent.convertValueToPixel(p[r].dataPoint.y[C])),
                                    x <= y && (y = x,
                                    z = r)
                        } else
                            "stackedColumn" === p[r].dataSeries.type ? (a = p[r].dataSeries.dataPointEOs[p[r].index].cumulativeY,
                            x = Math.abs(g - this.parent.convertValueToPixel(a)),
                            x <= y && (y = x,
                            z = r)) : "stackedArea" === p[r].dataSeries.type ? (a = p[r].dataSeries.dataPointEOs[p[r].index].cumulativeY,
                            x = Math.abs(g - this.parent.convertValueToPixel(a)),
                            x <= y && (y = x,
                            z = r)) : "stackedColumn100" === p[r].dataSeries.type || "stackedArea100" === p[r].dataSeries.type ? (x = p[0].dataPoint.x.getTime ? p[0].dataPoint.x.getTime() : p[0].dataPoint.x,
                            l(v) && (v = Math.abs(g - this.parent.convertValueToPixel(100 * (p[0].dataSeries.dataPointEOs[p[0].index].cumulativeY / p[0].dataSeries.plotUnit.dataPointYSums[x])))),
                            "stackedColumn100" === p[r].dataSeries.type ? (s = p[r].dataSeries.dataPointEOs[p[r].index].cumulativeY,
                            x = p[r].dataPoint.x.getTime ? p[r].dataPoint.x.getTime() : p[r].dataPoint.x,
                            a = 100 * (s / p[r].dataSeries.plotUnit.dataPointYSums[x]),
                            x = Math.abs(g - this.parent.convertValueToPixel(a)),
                            x <= v && (v = x,
                            z = r)) : "stackedArea100" === p[r].dataSeries.type && (s = p[r].dataSeries.dataPointEOs[p[r].index].cumulativeY,
                            x = p[r].dataPoint.x.getTime ? p[r].dataPoint.x.getTime() : p[r].dataPoint.x,
                            a = 100 * (s / p[r].dataSeries.plotUnit.dataPointYSums[x]),
                            x = Math.abs(g - this.parent.convertValueToPixel(a)),
                            x <= v && (v = x,
                            z = r))) : "waterfall" === p[r].dataSeries.type ? (x = Math.abs(g - this.parent.convertValueToPixel(p[r].dataSeries.dataPointEOs[p[r].index].cumulativeSum)),
                            x <= y && (v = y = x,
                            z = r)) : (x = Math.abs(g - this.parent.convertValueToPixel(p[r].dataPoint.y)),
                            x <= y && (y = x,
                            z = r));
                        l(v) || (y = Math.min(y, v))
                    }
                    v = p[z];
                    r = 0;
                    if ("rangeColumn" === v.dataSeries.type || "rangeArea" === v.dataSeries.type || "error" === v.dataSeries.type || "rangeSplineArea" === v.dataSeries.type || "candlestick" === v.dataSeries.type || "ohlc" === v.dataSeries.type || "boxAndWhisker" === v.dataSeries.type) {
                        y = Math.abs(g - this.parent.convertValueToPixel(v.dataPoint.y[0]));
                        for (p = 0; p < v.dataPoint.y.length; p++)
                            x = Math.abs(g - this.parent.convertValueToPixel(v.dataPoint.y[p])),
                            x < y && (y = x,
                            r = p);
                        s = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(v.dataPoint.y[r]) << 0) + 0.5 : this.parent.convertValueToPixel(v.dataPoint.y[r]) << 0;
                        k.text = this.labelFormatter ? this.labelFormatter({
                            chart: this.chart,
                            axis: this.parent.options,
                            crosshair: this.options,
                            value: v.dataPoint.y[r]
                        }) : l(this.options.label) ? fa(v.dataPoint.y[r], this.valueFormatString, this.chart._cultureInfo) : this.label;
                        this.value = v.dataPoint.y[r]
                    } else
                        "stackedColumn" === v.dataSeries.type ? (a = v.dataSeries.dataPointEOs[v.index].cumulativeY,
                        s = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(a) << 0) + 0.5 : this.parent.convertValueToPixel(a) << 0,
                        k.text = this.labelFormatter ? this.labelFormatter({
                            chart: this.chart,
                            axis: this.parent.options,
                            crosshair: this.options,
                            value: a
                        }) : l(this.options.label) ? fa(a, this.valueFormatString, this.chart._cultureInfo) : this.label,
                        this.value = a) : "stackedArea" === v.dataSeries.type ? (a = v.dataSeries.dataPointEOs[v.index].cumulativeY,
                        s = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(a) << 0) + 0.5 : this.parent.convertValueToPixel(a) << 0,
                        k.text = this.labelFormatter ? this.labelFormatter({
                            chart: this.chart,
                            axis: this.parent.options,
                            crosshair: this.options,
                            value: a
                        }) : l(this.options.label) ? fa(a, this.valueFormatString, this.chart._cultureInfo) : this.label,
                        this.value = a) : "stackedColumn100" === v.dataSeries.type ? (s = v.dataSeries.dataPointEOs[v.index].cumulativeY,
                        x = v.dataPoint.x.getTime ? v.dataPoint.x.getTime() : v.dataPoint.x,
                        a = 100 * (s / v.dataSeries.plotUnit.dataPointYSums[x]),
                        s = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(a) << 0) + 0.5 : this.parent.convertValueToPixel(a) << 0,
                        k.text = this.labelFormatter ? this.labelFormatter({
                            chart: this.chart,
                            axis: this.parent.options,
                            crosshair: this.options,
                            value: a
                        }) : l(this.options.label) ? fa(a, this.valueFormatString, this.chart._cultureInfo) : this.label,
                        this.value = a) : "stackedArea100" === v.dataSeries.type ? (s = v.dataSeries.dataPointEOs[v.index].cumulativeY,
                        x = v.dataPoint.x.getTime ? v.dataPoint.x.getTime() : v.dataPoint.x,
                        a = 100 * (s / v.dataSeries.plotUnit.dataPointYSums[x]),
                        s = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(a) << 0) + 0.5 : this.parent.convertValueToPixel(a) << 0,
                        k.text = this.labelFormatter ? this.labelFormatter({
                            chart: this.chart,
                            axis: this.parent.options,
                            crosshair: this.options,
                            value: a
                        }) : l(this.options.label) ? fa(a, this.valueFormatString, this.chart._cultureInfo) : this.label,
                        this.value = a) : "waterfall" === v.dataSeries.type ? (s = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(v.dataSeries.dataPointEOs[v.index].cumulativeSum) << 0) + 0.5 : this.parent.convertValueToPixel(v.dataSeries.dataPointEOs[v.index].cumulativeSum) << 0,
                        k.text = this.labelFormatter ? this.labelFormatter({
                            chart: this.chart,
                            axis: this.parent.options,
                            crosshair: this.options,
                            value: v.dataSeries.dataPointEOs[v.index].cumulativeSum
                        }) : l(this.options.label) ? fa(v.dataSeries.dataPointEOs[v.index].cumulativeSum, this.valueFormatString, this.chart._cultureInfo) : this.label,
                        this.value = v.dataSeries.dataPointEOs[v.index].cumulativeSum) : (s = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(v.dataPoint.y) << 0) + 0.5 : this.parent.convertValueToPixel(v.dataPoint.y) << 0,
                        k.text = this.labelFormatter ? this.labelFormatter({
                            chart: this.chart,
                            axis: this.parent.options,
                            crosshair: this.options,
                            value: v.dataPoint.y
                        }) : l(this.options.label) ? fa(v.dataPoint.y, this.valueFormatString, this.chart._cultureInfo) : this.label,
                        this.value = v.dataPoint.y);
                    e = h = s;
                    c = this.chart.plotArea.x1;
                    d = this.chart.plotArea.x2;
                    this.bounds = {
                        x1: c,
                        y1: e - q / 2,
                        x2: d,
                        y2: h + q / 2
                    };
                    k.y = h + k.fontSize / 2 - k.measureText().height / 2 + 2;
                    k.y - k.fontSize / 2 < this.chart.bounds.y1 ? k.y = this.chart.bounds.y1 + k.fontSize / 2 + 2 : k.y + k.measureText().height - k.fontSize / 2 > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.measureText().height + k.fontSize / 2);
                    "left" === this.parent._position ? k.x = this.parent.lineCoordinates.x2 - k.measureText().width : "right" === this.parent._position && (k.x = this.parent.lineCoordinates.x2)
                }
                p = null;
                f.globalAlpha = m;
                if ("bottom" === this.parent._position || "top" === this.parent._position)
                    "top" === this.parent._position && k.y - k.fontSize / 2 < this.chart.bounds.y1 && (k.y = this.chart.bounds.y1 + k.fontSize / 2),
                    "bottom" === this.parent._position && this.parent.lineCoordinates.y2 + k.measureText().height > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.height + k.fontSize / 2 + 2),
                    this.value >= Math.min(this.parent.viewportMinimum, this.parent.viewportMaximum) && this.value <= Math.max(this.parent.viewportMinimum, this.parent.viewportMaximum) && 0 < q && (f.moveTo(c, e),
                    f.lineTo(d, h),
                    f.stroke(),
                    this.parent.sessionVariables._crosshairHidden = this._hidden = !1);
                if ("left" === this.parent._position || "right" === this.parent._position)
                    "left" === this.parent._position && k.x < this.chart.bounds.x1 && (k.x = this.chart.bounds.x1),
                    "right" === this.parent._position && k.x + k.measureText().width > this.chart.bounds.x2 && (k.x = this.chart.bounds.x2 - k.measureText().width),
                    this.value >= Math.min(this.parent.viewportMinimum, this.parent.viewportMaximum) && this.value <= Math.max(this.parent.viewportMinimum, this.parent.viewportMaximum) && 0 < q && (f.moveTo(c, e),
                    f.lineTo(d, h),
                    f.stroke(),
                    this.parent.sessionVariables._crosshairHidden = this._hidden = !1)
            } else {
                if ("bottom" === this.parent._position || "top" === this.parent._position)
                    c = d = n = 1 === f.lineWidth % 2 ? (a << 0) + 0.5 : a << 0,
                    e = this.chart.plotArea.y1,
                    h = this.chart.plotArea.y2,
                    this.bounds = {
                        x1: c - q / 2,
                        y1: e,
                        x2: d + q / 2,
                        y2: h
                    };
                else if ("left" === this.parent._position || "right" === this.parent._position)
                    e = h = s = 1 === f.lineWidth % 2 ? (g << 0) + 0.5 : g << 0,
                    c = this.chart.plotArea.x1,
                    d = this.chart.plotArea.x2,
                    this.bounds = {
                        x1: c,
                        y1: e - q / 2,
                        x2: d,
                        y2: h + q / 2
                    };
                if ("xySwapped" === this.chart.plotInfo.axisPlacement)
                    if ("left" === this.parent._position || "right" === this.parent._position) {
                        r = !1;
                        if (this.parent.labels)
                            for (y = Math.ceil(this.parent.interval),
                            p = 0; p < this.parent.viewportMaximum; p += y)
                                if (this.parent.labels[p])
                                    r = !0;
                                else {
                                    r = !1;
                                    break
                                }
                        if (r) {
                            if ("axisX" === this.parent.type)
                                for (y = this.parent.convertPixelToValue({
                                    y: g
                                }),
                                z = null,
                                r = 0; r < this.parent.dataSeries.length; r++)
                                    (z = this.parent.dataSeries[r].getDataPointAtX(y, !0)) && 0 <= z.index && (k.text = this.labelFormatter ? this.labelFormatter({
                                        chart: this.chart,
                                        axis: this.parent.options,
                                        crosshair: this.options,
                                        value: l(b) ? this.parent.convertPixelToValue(a) : b
                                    }) : l(this.options.label) ? z.dataPoint.label : this.label)
                        } else
                            k.text = "dateTime" !== this.parent.valueType || this.parent.logarithmic ? this.labelFormatter ? this.labelFormatter({
                                chart: this.chart,
                                axis: this.parent.options,
                                crosshair: this.options,
                                value: l(b) ? this.parent.convertPixelToValue(g) : b
                            }) : l(this.options.label) ? fa(l(b) ? this.parent.convertPixelToValue(g) : b, this.valueFormatString, this.chart._cultureInfo) : this.label : this.labelFormatter ? this.labelFormatter({
                                chart: this.chart,
                                axis: this.parent.options,
                                crosshair: this.options,
                                value: l(b) ? this.parent.convertPixelToValue(g) : b
                            }) : l(this.options.label) ? Ca(l(b) ? this.parent.convertPixelToValue(g) : b, this.valueFormatString, this.chart._cultureInfo) : this.label;
                        k.y = g + k.fontSize / 2 - k.measureText().height / 2 + 2;
                        k.y - k.fontSize / 2 < this.chart.bounds.y1 ? k.y = this.chart.bounds.y1 + k.fontSize / 2 + 2 : k.y + k.measureText().height - k.fontSize / 2 > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.measureText().height + k.fontSize / 2);
                        "left" === this.parent._position ? k.x = this.parent.lineCoordinates.x1 - k.measureText().width : "right" === this.parent._position && (k.x = this.parent.lineCoordinates.x2)
                    } else {
                        if ("bottom" === this.parent._position || "top" === this.parent._position)
                            k.text = this.labelFormatter ? this.labelFormatter({
                                chart: this.chart,
                                axis: this.parent.options,
                                crosshair: this.options,
                                value: l(b) ? this.parent.convertPixelToValue(a) : b
                            }) : l(this.options.label) ? fa(l(b) ? this.parent.convertPixelToValue(a) : b, this.valueFormatString, this.chart._cultureInfo) : this.label,
                            k.x = c - k.measureText().width / 2,
                            k.x + k.width > this.chart.bounds.x2 && (k.x = this.chart.bounds.x2 - k.width),
                            k.x < this.chart.bounds.x1 && (k.x = this.chart.bounds.x1),
                            "bottom" === this.parent._position ? k.y = this.parent.lineCoordinates.y2 + k.fontSize / 2 + 2 : "top" === this.parent._position && (k.y = this.parent.lineCoordinates.y1 - k.height + k.fontSize / 2 + 2)
                    }
                else if ("bottom" === this.parent._position || "top" === this.parent._position) {
                    r = !1;
                    p = "";
                    if (this.parent.labels)
                        for (y = Math.ceil(this.parent.interval),
                        p = 0; p < this.parent.viewportMaximum; p += y)
                            if (this.parent.labels[p])
                                r = !0;
                            else {
                                r = !1;
                                break
                            }
                    if (r) {
                        if ("axisX" === this.parent.type)
                            for (y = this.parent.convertPixelToValue({
                                x: a
                            }),
                            z = null,
                            r = 0; r < this.parent.dataSeries.length; r++)
                                (z = this.parent.dataSeries[r].getDataPointAtX(y, !0)) && 0 <= z.index && (k.text = this.labelFormatter ? this.labelFormatter({
                                    chart: this.chart,
                                    axis: this.parent.options,
                                    crosshair: this.options,
                                    value: l(b) ? this.parent.convertPixelToValue(a) : b
                                }) : l(this.options.label) ? l(b) ? z.dataPoint.label : b : this.label)
                    } else
                        k.text = "dateTime" !== this.parent.valueType || this.parent.logarithmic ? this.labelFormatter ? this.labelFormatter({
                            chart: this.chart,
                            axis: this.parent.options,
                            crosshair: this.options,
                            value: l(b) ? 0 < this.parent.dataSeries.length ? this.parent.convertPixelToValue(a) : "" : b
                        }) : l(this.options.label) ? fa(l(b) ? this.parent.convertPixelToValue(a) : b, this.valueFormatString, this.chart._cultureInfo) : this.label : this.labelFormatter ? this.labelFormatter({
                            chart: this.chart,
                            axis: this.parent.options,
                            crosshair: this.options,
                            value: l(b) ? this.parent.convertPixelToValue(a) : b
                        }) : l(this.options.label) ? Ca(l(b) ? this.parent.convertPixelToValue(a) : b, this.valueFormatString, this.chart._cultureInfo) : this.label;
                    k.x = c - k.measureText().width / 2;
                    k.x + k.width > this.chart.bounds.x2 && (k.x = this.chart.bounds.x2 - k.width);
                    k.x < this.chart.bounds.x1 && (k.x = this.chart.bounds.x1);
                    "bottom" === this.parent._position ? k.y = this.parent.lineCoordinates.y2 + k.fontSize / 2 + 2 : "top" === this.parent._position && (k.y = this.parent.lineCoordinates.y1 - k.height + k.fontSize / 2 + 2)
                } else if ("left" === this.parent._position || "right" === this.parent._position)
                    k.text = this.labelFormatter ? this.labelFormatter({
                        chart: this.chart,
                        axis: this.parent.options,
                        crosshair: this.options,
                        value: l(b) ? this.parent.convertPixelToValue(g) : b
                    }) : l(this.options.label) ? fa(l(b) ? this.parent.convertPixelToValue(g) : b, this.valueFormatString, this.chart._cultureInfo) : this.label,
                    k.y = g + k.fontSize / 2 - k.measureText().height / 2 + 2,
                    k.y - k.fontSize / 2 < this.chart.bounds.y1 ? k.y = this.chart.bounds.y1 + k.fontSize / 2 + 2 : k.y + k.measureText().height - k.fontSize / 2 > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.measureText().height + k.fontSize / 2),
                    "left" === this.parent._position ? k.x = this.parent.lineCoordinates.x2 - k.measureText().width : "right" === this.parent._position && (k.x = this.parent.lineCoordinates.x2);
                "left" === this.parent._position && k.x < this.chart.bounds.x1 ? k.x = this.chart.bounds.x1 : "right" === this.parent._position && k.x + k.measureText().width > this.chart.bounds.x2 ? k.x = this.chart.bounds.x2 - k.measureText().width : "top" === this.parent._position && k.y - k.fontSize / 2 < this.chart.bounds.y1 ? k.y = this.chart.bounds.y1 + k.fontSize / 2 : "bottom" === this.parent._position && this.parent.lineCoordinates.y2 + k.measureText().height > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.height + k.fontSize / 2 + 2);
                f.globalAlpha = m;
                0 < q && ("bottom" !== this.parent._position || d <= this.parent.lineCoordinates.x2) && (f.moveTo(c, e),
                f.lineTo(d, h),
                f.stroke(),
                this.parent.sessionVariables._crosshairHidden = this._hidden = !1);
                this.value = "bottom" === this.parent._position || "top" === this.parent._position ? this.parent.convertPixelToValue(a) : this.parent.convertPixelToValue(g)
            }
            if ("bottom" === this.parent._position || "top" === this.parent._position)
                this.parent.sessionVariables.crosshairValue = this._updatedValue = this.parent.convertPixelToValue(n);
            if ("left" === this.parent._position || "right" === this.parent._position)
                this.parent.sessionVariables.crosshairValue = this._updatedValue = this.parent.convertPixelToValue(s);
            this._textBlock = k;
            this._label = b;
            l(b) || this.renderLabel();
            f.restore();
            f.globalAlpha = u
        }
        ;
        ea.prototype.renderLabel = function() {
            this.value >= Math.min(this.parent.viewportMinimum, this.parent.viewportMaximum) && this.value <= Math.max(this.parent.viewportMinimum, this.parent.viewportMaximum) && (l(this._textBlock) || (l(this._textBlock.text) || !("number" === typeof this._textBlock.text.valueOf() || 0 < this._textBlock.text.length) || this._hidden) || this._textBlock.render(!0),
            l(this._label) && this.dispatchEvent("updated", {
                chart: this.chart,
                crosshair: this.options,
                axis: this.parent,
                value: this.value
            }, this.parent))
        }
        ;
        qa(na, P);
        na.prototype._updateOptions = function() {
            this.updateOption("enabled");
            this.updateOption("shared");
            this.updateOption("animationEnabled");
            this.updateOption("content");
            this.updateOption("contentFormatter");
            this.updateOption("reversed");
            this.updateOption("backgroundColor");
            this.updateOption("borderColor");
            this.updateOption("borderThickness");
            this.updateOption("cornerRadius");
            this.updateOption("fontSize");
            this.updateOption("fontColor");
            this.updateOption("fontFamily");
            this.updateOption("fontWeight");
            this.updateOption("fontStyle")
        }
        ;
        na.prototype._initialize = function() {
            this.updateOption("updated");
            this.updateOption("hidden");
            if (this.enabled) {
                this.container = document.createElement("div");
                this.container.setAttribute("class", "canvasjs-chart-tooltip");
                this.container.style.position = "absolute";
                this.container.style.height = "auto";
                this.container.style.boxShadow = "1px 1px 2px 2px rgba(0,0,0,0.1)";
                this.container.style.zIndex = "1000";
                this.container.style.pointerEvents = "none";
                this.container.style.display = "none";
                var a = document.createElement("div");
                a.style.width = "auto";
                a.style.height = "auto";
                a.style.minWidth = "50px";
                a.style.lineHeight = "normal";
                a.style.margin = "0px 0px 0px 0px";
                a.style.padding = "5px";
                a.style.fontFamily = "Calibri, Arial, Georgia, serif";
                a.style.fontWeight = "normal";
                a.style.fontStyle = s ? "italic" : "normal";
                a.style.fontSize = "14px";
                a.style.color = "#000000";
                a.style.textShadow = "1px 1px 1px rgba(0, 0, 0, 0.1)";
                a.style.textAlign = "left";
                a.style.border = "2px solid gray";
                a.style.background = s ? "rgba(255,255,255,.9)" : "rgb(255,255,255)";
                a.style.textIndent = "0px";
                a.style.whiteSpace = "nowrap";
                a.style.borderRadius = "5px";
                a.style.MozUserSelect = "none";
                a.style.WebkitUserSelect = "none";
                a.style.msUserSelect = "none";
                a.style.userSelect = "none";
                s || (a.style.filter = "alpha(opacity = 90)",
                a.style.filter = "progid:DXImageTransform.Microsoft.Shadow(Strength=3, Direction=135, Color='#666666')");
                a.innerText = "Sample Tooltip";
                this.container.appendChild(a);
                this.contentDiv = this.container.firstChild;
                this.container.style.borderRadius = this.contentDiv.style.borderRadius;
                this.chart._canvasJSContainer.appendChild(this.container)
            }
        }
        ;
        na.prototype.mouseMoveHandler = function(a, g) {
            this._lastUpdated && 4 > (new Date).getTime() - this._lastUpdated || (this._lastUpdated = (new Date).getTime(),
            this.chart.resetOverlayedCanvas(),
            this._updateToolTip(a, g),
            this.enabled && this._updatedEventParameters && !isNaN(this._prevX) && !isNaN(this._prevY) && this.container && this.container.style && this.dispatchEvent("none" === this.container.style.display ? "hidden" : "updated", this._updatedEventParameters, this))
        }
        ;
        na.prototype._updateToolTip = function(a, g, b) {
            b = "undefined" === typeof b ? !0 : b;
            this._updateOptions();
            this.container || this._initialize();
            this.enabled || this.hide();
            if (!this.chart.disableToolTip) {
                if ("undefined" === typeof a || "undefined" === typeof g) {
                    if (isNaN(this._prevX) || isNaN(this._prevY))
                        return;
                    a = this._prevX;
                    g = this._prevY
                } else
                    this._prevX = a,
                    this._prevY = g;
                var c = null
                  , d = null
                  , e = []
                  , h = 0;
                if (this.shared && this.enabled && "none" !== this.chart.plotInfo.axisPlacement) {
                    var n = [];
                    if (this.chart.axisX)
                        for (var u = 0; u < this.chart.axisX.length; u++) {
                            for (var h = "xySwapped" === this.chart.plotInfo.axisPlacement ? this.chart.axisX[u].convertPixelToValue({
                                y: g
                            }) : this.chart.axisX[u].convertPixelToValue({
                                x: a
                            }), k = null, c = 0; c < this.chart.axisX[u].dataSeries.length; c++)
                                (k = this.chart.axisX[u].dataSeries[c].getDataPointAtX(h, b, !0)) && 0 <= k.index && (k.dataSeries = this.chart.axisX[u].dataSeries[c],
                                null !== k.dataPoint.y && k.dataSeries.visible && n.push(k));
                            k = null
                        }
                    if (this.chart.axisX2)
                        for (u = 0; u < this.chart.axisX2.length; u++) {
                            h = "xySwapped" === this.chart.plotInfo.axisPlacement ? this.chart.axisX2[u].convertPixelToValue({
                                y: g
                            }) : this.chart.axisX2[u].convertPixelToValue({
                                x: a
                            });
                            k = null;
                            for (c = 0; c < this.chart.axisX2[u].dataSeries.length; c++)
                                (k = this.chart.axisX2[u].dataSeries[c].getDataPointAtX(h, b, !0)) && 0 <= k.index && (k.dataSeries = this.chart.axisX2[u].dataSeries[c],
                                null !== k.dataPoint.y && k.dataSeries.visible && n.push(k));
                            k = null
                        }
                    if (0 === n.length)
                        return;
                    n.sort(function(a, b) {
                        return a.dataSeries.axisX.logarithmic || b.dataSeries.axisX.logarithmic ? a.distance - b.distance : a.distance / a.dataSeries.axisX.range - b.distance / b.dataSeries.axisX.range
                    });
                    b = n[0];
                    for (c = 0; c < n.length; c++)
                        n[c].dataPoint.x.valueOf() === b.dataPoint.x.valueOf() && e.push(n[c]);
                    n = null
                } else {
                    if (c = this.chart.getDataPointAtXY(a, g, b))
                        this.currentDataPointIndex = c.dataPointIndex,
                        this.currentSeriesIndex = c.dataSeries.index;
                    else if (s)
                        if (c = ab(a, g, this.chart._eventManager.ghostCtx),
                        0 < c && "undefined" !== typeof this.chart._eventManager.objectMap[c]) {
                            c = this.chart._eventManager.objectMap[c];
                            if ("legendItem" === c.objectType)
                                return;
                            this.currentSeriesIndex = c.dataSeriesIndex;
                            this.currentDataPointIndex = 0 <= c.dataPointIndex ? c.dataPointIndex : -1
                        } else
                            this.currentDataPointIndex = -1;
                    else
                        this.currentDataPointIndex = -1;
                    if (0 <= this.currentSeriesIndex) {
                        d = this.chart.data[this.currentSeriesIndex];
                        k = {};
                        if (0 <= this.currentDataPointIndex)
                            c = d.dataPoints[this.currentDataPointIndex],
                            k.dataSeries = d,
                            k.dataPoint = c,
                            k.index = this.currentDataPointIndex,
                            k.distance = Math.abs(c.x - h),
                            "waterfall" === d.type && (k.cumulativeSumYStartValue = d.dataPointEOs[this.currentDataPointIndex].cumulativeSumYStartValue,
                            k.cumulativeSum = d.dataPointEOs[this.currentDataPointIndex].cumulativeSum);
                        else if (this.enabled && d && ("line" === d.type || "stepLine" === d.type || "spline" === d.type || "area" === d.type || "stepArea" === d.type || "splineArea" === d.type || "stackedArea" === d.type || "stackedArea100" === d.type || "rangeArea" === d.type || "rangeSplineArea" === d.type || "candlestick" === d.type || "ohlc" === d.type || "boxAndWhisker" === d.type))
                            h = d.axisX.convertPixelToValue({
                                x: a
                            }),
                            k = d.getDataPointAtX(h, b, !0),
                            l(k) || (k.dataSeries = d,
                            this.currentDataPointIndex = k.index,
                            c = k.dataPoint);
                        else {
                            "toolTip" === this.chart.clearedOverlayedCanvas && (this.chart.resetOverlayedCanvas(),
                            this.chart.clearedOverlayedCanvas = null,
                            this.chart.sessionVariables._dataHighlighted = !1,
                            this.container && (this.container.style.display = "none"));
                            return
                        }
                        if (!l(k) && !l(k.dataPoint) && !l(k.dataPoint.y))
                            if (k.dataSeries.axisY)
                                if (0 < k.dataPoint.y.length) {
                                    for (c = b = 0; c < k.dataPoint.y.length; c++)
                                        k.dataPoint.y[c] < k.dataSeries.axisY.viewportMinimum ? b-- : k.dataPoint.y[c] > k.dataSeries.axisY.viewportMaximum && b++;
                                    b < k.dataPoint.y.length && b > -k.dataPoint.y.length && e.push(k)
                                } else
                                    "column" === d.type || "bar" === d.type ? 0 > k.dataPoint.y ? 0 > k.dataSeries.axisY.viewportMinimum && k.dataSeries.axisY.viewportMaximum >= k.dataPoint.y && e.push(k) : k.dataSeries.axisY.viewportMinimum <= k.dataPoint.y && 0 <= k.dataSeries.axisY.viewportMaximum && e.push(k) : "bubble" === d.type ? (b = this.chart._eventManager.objectMap[d.dataPointIds[k.index]].size / 2,
                                    k.dataPoint.y >= k.dataSeries.axisY.viewportMinimum - b && k.dataPoint.y <= k.dataSeries.axisY.viewportMaximum + b && e.push(k)) : "waterfall" === d.type ? (b = 0,
                                    k.cumulativeSumYStartValue < k.dataSeries.axisY.viewportMinimum ? b-- : k.cumulativeSumYStartValue > k.dataSeries.axisY.viewportMaximum && b++,
                                    k.cumulativeSum < k.dataSeries.axisY.viewportMinimum ? b-- : k.cumulativeSum > k.dataSeries.axisY.viewportMaximum && b++,
                                    2 > b && -2 < b && e.push(k)) : (0 <= k.dataSeries.type.indexOf("100") || "stackedColumn" === d.type || "stackedBar" === d.type || "stackedArea" === d.type || k.dataPoint.y >= k.dataSeries.axisY.viewportMinimum && k.dataPoint.y <= k.dataSeries.axisY.viewportMaximum) && e.push(k);
                            else
                                e.push(k)
                    }
                }
                if (0 < e.length) {
                    if (this._entries = e,
                    this.highlightObjects(e),
                    this.enabled) {
                        b = "";
                        b = this.getToolTipInnerHTML({
                            entries: e
                        });
                        if (null !== b) {
                            this.contentDiv.innerHTML = b;
                            if (this.isToolTipDefinedInData && l(this.options.content) && l(this.options.contentFormatter))
                                for (h = this.contentDiv.getElementsByTagName("span"),
                                c = 0; c < h.length; c++)
                                    h[c] && (h[c].style.color = h[c].getAttribute("data-color"));
                            h = !1;
                            "none" === this.container.style.display && (h = !0,
                            this.container.style.display = "block");
                            try {
                                this.contentDiv.style.background = this.backgroundColor ? this.backgroundColor : s ? "rgba(255,255,255,.9)" : "rgb(255,255,255)",
                                this.borderColor = "waterfall" === e[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : e[0].dataPoint.color ? e[0].dataPoint.color : 0 < e[0].dataPoint.y ? e[0].dataSeries.risingColor : e[0].dataSeries.fallingColor : "error" === e[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : e[0].dataSeries.color ? e[0].dataSeries.color : e[0].dataSeries._colorSet[d.index % e[0].dataSeries._colorSet.length] : this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : e[0].dataPoint.color ? e[0].dataPoint.color : e[0].dataSeries.color ? e[0].dataSeries.color : e[0].dataSeries._colorSet[e[0].index % e[0].dataSeries._colorSet.length],
                                this.contentDiv.style.borderWidth = this.borderThickness || 0 === this.borderThickness ? this.borderThickness + "px" : "2px",
                                this.contentDiv.style.borderRadius = this.cornerRadius || 0 === this.cornerRadius ? this.cornerRadius + "px" : "5px",
                                this.container.style.borderRadius = this.contentDiv.style.borderRadius,
                                this.contentDiv.style.fontSize = this.fontSize || 0 === this.fontSize ? this.fontSize + "px" : "14px",
                                this.contentDiv.style.color = this.fontColor ? this.fontColor : "#000000",
                                this.contentDiv.style.fontFamily = this.fontFamily ? this.fontFamily : "Calibri, Arial, Georgia, serif;",
                                this.contentDiv.style.fontWeight = this.fontWeight ? this.fontWeight : "normal",
                                this.contentDiv.style.fontStyle = this.fontStyle ? this.fontStyle : s ? "italic" : "normal"
                            } catch (p) {}
                            "pie" === e[0].dataSeries.type || "doughnut" === e[0].dataSeries.type || "funnel" === e[0].dataSeries.type || "pyramid" === e[0].dataSeries.type || "bar" === e[0].dataSeries.type || "rangeBar" === e[0].dataSeries.type || "stackedBar" === e[0].dataSeries.type || "stackedBar100" === e[0].dataSeries.type ? a = a - 10 - this.container.clientWidth : (a = e[0].dataSeries.axisX.convertValueToPixel(e[0].dataPoint.x) - this.container.clientWidth << 0,
                            a -= 10);
                            0 > a && (a = Math.max(0, a + this.container.clientWidth + 20));
                            a + this.container.clientWidth > Math.max(this.chart.container.clientWidth, this.chart.width) && (a = Math.max(0, Math.max(this.chart.container.clientWidth, this.chart.width) - this.container.clientWidth));
                            g = 1 !== e.length || this.shared || "line" !== e[0].dataSeries.type && "stepLine" !== e[0].dataSeries.type && "spline" !== e[0].dataSeries.type && "area" !== e[0].dataSeries.type && "stepArea" !== e[0].dataSeries.type && "splineArea" !== e[0].dataSeries.type ? "bar" === e[0].dataSeries.type || "rangeBar" === e[0].dataSeries.type || "stackedBar" === e[0].dataSeries.type || "stackedBar100" === e[0].dataSeries.type ? e[0].dataSeries.axisX.convertValueToPixel(e[0].dataPoint.x) : g : e[0].dataSeries.axisY.convertValueToPixel(e[0].dataPoint.y);
                            g = -g + 10;
                            0 < g + this.container.clientHeight + 5 && (g -= g + this.container.clientHeight + 5 - 0);
                            this.fixMozTransitionDelay(a, g);
                            !this.animationEnabled || h ? this.disableAnimation() : (this.enableAnimation(),
                            this.container.style.MozTransition = this.mozContainerTransition);
                            this.positionLeft = a;
                            this.positionBottom = g;
                            this.container.style.left = a + "px";
                            this.container.style.bottom = g + "px"
                        } else
                            this.hide(!1),
                            this.enabled && this.dispatchEvent("hidden", {
                                chart: this.chart,
                                toolTip: this
                            }, this);
                        g = [];
                        for (c = 0; c < e.length; c++)
                            g.push({
                                xValue: e[c].dataPoint.x,
                                dataPoint: e[c].dataPoint,
                                dataSeries: e[c].dataSeries,
                                dataPointIndex: e[c].index,
                                dataSeriesIndex: e[c].dataSeries._index
                            });
                        this._updatedEventParameters = {
                            chart: this.chart,
                            toolTip: this.options,
                            content: b,
                            entries: g
                        }
                    }
                } else
                    this.hide(),
                    this.enabled && this.dispatchEvent("hidden", {
                        chart: this.chart,
                        toolTip: this
                    }, this);
                this._dataSeriesIndex = this._xValue = null
            }
        }
        ;
        na.prototype.highlightObjects = function(a) {
            var g = this.chart.overlaidCanvasCtx;
            l(this.chart.clearedOverlayedCanvas) || "toolTip" === this.chart.clearedOverlayedCanvas ? (this.chart.resetOverlayedCanvas(),
            g.clearRect(0, 0, this.chart.width, this.chart.height),
            this.chart.clearedOverlayedCanvas = "toolTip",
            this.chart.sessionVariables._dataHighlighted = !1) : this.chart.clearedOverlayedCanvas = null;
            g.save();
            var b = this.chart.plotArea
              , c = 0;
            g.beginPath();
            g.rect(b.x1, b.y1, b.x2 - b.x1, b.y2 - b.y1);
            g.clip();
            for (b = 0; b < a.length; b++) {
                var d = a[b];
                if ((d = this.chart._eventManager.objectMap[d.dataSeries.dataPointIds[d.index]]) && d.objectType && "dataPoint" === d.objectType) {
                    var c = this.chart.data[d.dataSeriesIndex]
                      , e = c.dataPoints[d.dataPointIndex]
                      , h = d.dataPointIndex;
                    !1 === e.highlightEnabled || !0 !== c.highlightEnabled && !0 !== e.highlightEnabled || ("line" === c.type || "stepLine" === c.type || "spline" === c.type || "scatter" === c.type || "area" === c.type || "stepArea" === c.type || "splineArea" === c.type || "stackedArea" === c.type || "stackedArea100" === c.type || "rangeArea" === c.type || "rangeSplineArea" === c.type ? (e = c.getMarkerProperties(h, d.x1, d.y1, this.chart.overlaidCanvasCtx),
                    e.size = Math.max(1.5 * e.size << 0, 10),
                    e.borderColor = e.borderColor || "#FFFFFF",
                    e.borderThickness = e.borderThickness || Math.ceil(0.1 * e.size),
                    ba.drawMarkers([e]),
                    "undefined" !== typeof d.y2 && (e = c.getMarkerProperties(h, d.x1, d.y2, this.chart.overlaidCanvasCtx),
                    e.size = Math.max(1.5 * e.size << 0, 10),
                    e.borderColor = e.borderColor || "#FFFFFF",
                    e.borderThickness = e.borderThickness || Math.ceil(0.1 * e.size),
                    ba.drawMarkers([e])),
                    this.chart.sessionVariables._dataHighlighted = !0) : "bubble" === c.type ? (e = c.getMarkerProperties(h, d.x1, d.y1, this.chart.overlaidCanvasCtx),
                    e.size = d.size,
                    e.color = "white",
                    e.borderColor = "white",
                    g.globalAlpha = 0.3,
                    ba.drawMarkers([e]),
                    g.globalAlpha = 1,
                    this.chart.sessionVariables._dataHighlighted = !0) : "column" === c.type || "stackedColumn" === c.type || "stackedColumn100" === c.type || "bar" === c.type || "rangeBar" === c.type || "stackedBar" === c.type || "stackedBar100" === c.type || "rangeColumn" === c.type || "waterfall" === c.type ? (da(g, d.x1, d.y1, d.x2, d.y2, "white", 0, null, !1, !1, !1, !1, 0.3),
                    this.chart.sessionVariables._dataHighlighted = !0) : "pie" === c.type || "doughnut" === c.type ? (ra(g, d.center, d.radius, "white", c.type, d.startAngle, d.endAngle, 0.3, d.percentInnerRadius),
                    this.chart.sessionVariables._dataHighlighted = !0) : "funnel" === c.type || "pyramid" === c.type ? (sa(g, d.funnelSection, 0.3, "white"),
                    this.chart.sessionVariables._dataHighlighted = !0) : "candlestick" === c.type ? (g.globalAlpha = 1,
                    g.strokeStyle = d.color,
                    g.lineWidth = 2 * d.borderThickness,
                    c = 0 === g.lineWidth % 2 ? 0 : 0.5,
                    g.beginPath(),
                    g.moveTo(d.x3 - c, Math.min(d.y2, d.y3)),
                    g.lineTo(d.x3 - c, Math.min(d.y1, d.y4)),
                    g.stroke(),
                    g.beginPath(),
                    g.moveTo(d.x3 - c, Math.max(d.y1, d.y4)),
                    g.lineTo(d.x3 - c, Math.max(d.y2, d.y3)),
                    g.stroke(),
                    da(g, d.x1, Math.min(d.y1, d.y4), d.x2, Math.max(d.y1, d.y4), "transparent", 2 * d.borderThickness, d.color, !1, !1, !1, !1),
                    g.globalAlpha = 1,
                    this.chart.sessionVariables._dataHighlighted = !0) : "ohlc" === c.type ? (g.globalAlpha = 1,
                    g.strokeStyle = d.color,
                    g.lineWidth = 2 * d.borderThickness,
                    c = 0 === g.lineWidth % 2 ? 0 : 0.5,
                    g.beginPath(),
                    g.moveTo(d.x3 - c, d.y2),
                    g.lineTo(d.x3 - c, d.y3),
                    g.stroke(),
                    g.beginPath(),
                    g.moveTo(d.x3, d.y1),
                    g.lineTo(d.x1, d.y1),
                    g.stroke(),
                    g.beginPath(),
                    g.moveTo(d.x3, d.y4),
                    g.lineTo(d.x2, d.y4),
                    g.stroke(),
                    g.globalAlpha = 1,
                    this.chart.sessionVariables._dataHighlighted = !0) : "boxAndWhisker" === c.type ? (g.save(),
                    g.globalAlpha = 1,
                    g.strokeStyle = d.stemColor,
                    g.lineWidth = 2 * d.stemThickness,
                    0 < d.stemThickness && (g.beginPath(),
                    g.moveTo(d.x3, d.y2 + d.borderThickness / 2),
                    g.lineTo(d.x3, d.y1 + d.whiskerThickness / 2),
                    g.stroke(),
                    g.beginPath(),
                    g.moveTo(d.x3, d.y4 - d.whiskerThickness / 2),
                    g.lineTo(d.x3, d.y3 - d.borderThickness / 2),
                    g.stroke()),
                    g.beginPath(),
                    da(g, d.x1, Math.max(d.y2, d.y3), d.x2, Math.min(d.y2, d.y3), "transparent", 2 * d.borderThickness, d.color, !1, !1, !1, !1),
                    g.globalAlpha = 1,
                    g.strokeStyle = d.whiskerColor,
                    g.lineWidth = 2 * d.whiskerThickness,
                    0 < d.whiskerThickness && (g.beginPath(),
                    g.moveTo(Math.floor(d.x3 - d.whiskerLength / 2), d.y4),
                    g.lineTo(Math.ceil(d.x3 + d.whiskerLength / 2), d.y4),
                    g.stroke(),
                    g.beginPath(),
                    g.moveTo(Math.floor(d.x3 - d.whiskerLength / 2), d.y1),
                    g.lineTo(Math.ceil(d.x3 + d.whiskerLength / 2), d.y1),
                    g.stroke()),
                    g.globalAlpha = 1,
                    g.strokeStyle = d.lineColor,
                    g.lineWidth = 2 * d.lineThickness,
                    0 < d.lineThickness && (g.beginPath(),
                    g.moveTo(d.x1, d.y5),
                    g.lineTo(d.x2, d.y5),
                    g.stroke()),
                    g.restore(),
                    g.globalAlpha = 1,
                    this.chart.sessionVariables._dataHighlighted = !0) : "error" === c.type && (C(g, d.x1, d.y1, d.x2, d.y2, "white", d.whiskerProperties, d.stemProperties, d.isXYSwapped, 0.3),
                    this.chart.sessionVariables._dataHighlighted = !0))
                }
            }
            g.restore();
            g.globalAlpha = 1;
            g.beginPath()
        }
        ;
        na.prototype.getToolTipInnerHTML = function(a) {
            a = a.entries;
            var g = null
              , b = null
              , c = null
              , d = 0
              , e = "";
            this.isToolTipDefinedInData = !0;
            for (var h = 0; h < a.length; h++)
                if (a[h].dataSeries.toolTipContent || a[h].dataPoint.toolTipContent) {
                    this.isToolTipDefinedInData = !1;
                    break
                }
            if (this.isToolTipDefinedInData && (this.content && "function" === typeof this.content || this.contentFormatter))
                a = {
                    chart: this.chart,
                    toolTip: this.options,
                    entries: a
                },
                g = this.contentFormatter ? this.contentFormatter(a) : this.content(a);
            else if (this.shared && "none" !== this.chart.plotInfo.axisPlacement) {
                for (var l = null, n = "", h = 0; h < a.length; h++) {
                    b = a[h].dataSeries;
                    c = a[h].dataPoint;
                    d = a[h].index;
                    e = "";
                    if (0 === h && this.isToolTipDefinedInData && !this.content) {
                        this.chart.axisX && 0 < this.chart.axisX.length ? n += "undefined" !== typeof this.chart.axisX[0].labels[c.x] ? this.chart.axisX[0].labels[c.x] : "{x}" : this.chart.axisX2 && 0 < this.chart.axisX2.length && (n += "undefined" !== typeof this.chart.axisX2[0].labels[c.x] ? this.chart.axisX2[0].labels[c.x] : "{x}");
                        n += "</br>";
                        if (!b.visible)
                            continue;
                        n = this.chart.replaceKeywordsWithValue(n, c, b, d)
                    }
                    null === c.toolTipContent || "undefined" === typeof c.toolTipContent && null === b.options.toolTipContent || ("line" === b.type || "stepLine" === b.type || "spline" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "column" === b.type || "bar" === b.type || "scatter" === b.type || "stackedColumn" === b.type || "stackedColumn100" === b.type || "stackedBar" === b.type || "stackedBar100" === b.type || "stackedArea" === b.type || "stackedArea100" === b.type || "waterfall" === b.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (e += l != b.axisXIndex ? b.axisX.title ? b.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""),
                    e += c.toolTipContent ? c.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span data-color='\"" + (this.options.fontColor ? "" : "'{color}'") + "\"'>{name}:</span>&nbsp;&nbsp;{y}",
                    l = b.axisXIndex) : "bubble" === b.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (e += l != b.axisXIndex ? b.axisX.title ? b.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""),
                    e += c.toolTipContent ? c.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span data-color='\"" + (this.options.fontColor ? "" : "'{color}'") + "\"'>{name}:</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}") : "rangeColumn" === b.type || "rangeBar" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type || "error" === b.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (e += l != b.axisXIndex ? b.axisX.title ? b.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""),
                    e += c.toolTipContent ? c.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span data-color='\"" + (this.options.fontColor ? "" : "'{color}'") + "\"'>{name}:</span>&nbsp;&nbsp;{y[0]},&nbsp;{y[1]}") : "candlestick" === b.type || "ohlc" === b.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (e += l != b.axisXIndex ? b.axisX.title ? b.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""),
                    e += c.toolTipContent ? c.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span data-color='\"" + (this.options.fontColor ? "" : "'{color}'") + "\"'>{name}:</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low:&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}") : "boxAndWhisker" === b.type && (this.chart.axisX && 1 < this.chart.axisX.length && (e += l != b.axisXIndex ? b.axisX.title ? b.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""),
                    e += c.toolTipContent ? c.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span data-color='\"" + (this.options.fontColor ? "" : "'{color}'") + "\"'>{name}:</span><br/>Minimum: &nbsp;{y[0]}<br/>Q1:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[1]}<br/>Q2:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[4]}<br/>Q3:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Maximum: &nbsp;{y[3]}"),
                    null === g && (g = ""),
                    b.visible && (!0 === this.reversed ? (g = this.chart.replaceKeywordsWithValue(e, c, b, d) + g,
                    h < a.length - 1 && (g = "</br>" + g)) : (g += this.chart.replaceKeywordsWithValue(e, c, b, d),
                    h < a.length - 1 && (g += "</br>"))))
                }
                null !== g && (g = n + g)
            } else {
                b = a[0].dataSeries;
                c = a[0].dataPoint;
                d = a[0].index;
                if (null === c.toolTipContent || "undefined" === typeof c.toolTipContent && null === b.options.toolTipContent)
                    return null;
                "line" === b.type || "stepLine" === b.type || "spline" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "column" === b.type || "bar" === b.type || "scatter" === b.type || "stackedColumn" === b.type || "stackedColumn100" === b.type || "stackedBar" === b.type || "stackedBar100" === b.type || "stackedArea" === b.type || "stackedArea100" === b.type || "waterfall" === b.type ? e = c.toolTipContent ? c.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span data-color='\"" + (this.options.fontColor ? "" : "'{color}'") + "\"'>" + (c.label ? "{label}" : "{x}") + ":</span>&nbsp;&nbsp;{y}" : "bubble" === b.type ? e = c.toolTipContent ? c.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span data-color='\"" + (this.options.fontColor ? "" : "'{color}'") + "\"'>" + (c.label ? "{label}" : "{x}") + ":</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}" : "pie" === b.type || "doughnut" === b.type || "funnel" === b.type || "pyramid" === b.type ? e = c.toolTipContent ? c.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span data-color='\"" + (this.options.fontColor ? "" : "'{color}'") + "\"'>" + (c.name ? "{name}:</span>&nbsp;&nbsp;" : c.label ? "{label}:</span>&nbsp;&nbsp;" : "</span>") + "{y}" : "rangeColumn" === b.type || "rangeBar" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type || "error" === b.type ? e = c.toolTipContent ? c.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span data-color='\"" + (this.options.fontColor ? "" : "'{color}'") + "\"'>" + (c.label ? "{label}" : "{x}") + " :</span>&nbsp;&nbsp;{y[0]}, &nbsp;{y[1]}" : "candlestick" === b.type || "ohlc" === b.type ? e = c.toolTipContent ? c.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span data-color='\"" + (this.options.fontColor ? "" : "'{color}'") + "\"'>" + (c.label ? "{label}" : "{x}") + "</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low: &nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}" : "boxAndWhisker" === b.type && (e = c.toolTipContent ? c.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span data-color='\"" + (this.options.fontColor ? "" : "'{color}'") + "\"'>" + (c.label ? "{label}" : "{x}") + "</span><br/>Minimum: &nbsp;{y[0]}<br/>Q1:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[1]}<br/>Q2:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[4]}<br/>Q3:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Maximum: &nbsp;{y[3]}");
                null === g && (g = "");
                g += this.chart.replaceKeywordsWithValue(e, c, b, d)
            }
            return g
        }
        ;
        na.prototype.enableAnimation = function() {
            if (!this.container.style.WebkitTransition) {
                var a = this.getContainerTransition(this.containerTransitionDuration);
                this.container.style.WebkitTransition = a;
                this.container.style.MsTransition = a;
                this.container.style.transition = a;
                this.container.style.MozTransition = this.mozContainerTransition
            }
        }
        ;
        na.prototype.disableAnimation = function() {
            this.container.style.WebkitTransition && (this.container.style.WebkitTransition = "",
            this.container.style.MozTransition = "",
            this.container.style.MsTransition = "",
            this.container.style.transition = "")
        }
        ;
        na.prototype.hide = function(a) {
            if (this.container) {
                var g = "undefined" === typeof a || -1 !== this.chart.clearedOverlayedCanvas.indexOf("axis");
                this.chart.sessionVariables._dataHighlighted = !1;
                this.container.style.display = "none";
                this.currentSeriesIndex = -1;
                this._entries = this._dataSeriesIndex = this._xValue = null;
                this._prevY = this._prevX = NaN;
                this._updatedEventParameters = null;
                if ("undefined" === typeof a || a)
                    this.chart.resetOverlayedCanvas(),
                    g && this.chart.renderCrosshairs()
            }
        }
        ;
        na.prototype.show = function(a, g, b) {
            this._updateToolTip(a, g, "undefined" === typeof b ? !1 : b)
        }
        ;
        na.prototype.showAtIndex = function(a, g) {}
        ;
        na.prototype.showAtX = function(a, g) {
            if (!this.enabled)
                return !1;
            !l(this.chart.clearedOverlayedCanvas) && this.chart.clearedOverlayedCanvas.indexOf("axis") && (this.chart.clearedOverlayedCanvas = null);
            this._updateOptions();
            var b, c, d, e = [];
            d = !1;
            g = !l(g) && 0 <= g && g < this.chart.data.length ? g : 0;
            if (this.shared)
                for (var h = 0; h < this.chart.data.length; h++)
                    b = this.chart.data[h],
                    (c = b.getDataPointAtX(a, !1)) && (c.dataPoint && !l(c.dataPoint.y) && b.visible) && (c.dataSeries = b,
                    this.chart.data[g].axisX.convertValueToPixel(a) === b.axisX.convertValueToPixel(c.dataPoint.x) && e.push(c));
            else
                this.chart.data && 0 < this.chart.data.length && (b = this.chart.data[g],
                (c = b.getDataPointAtX(a, !1)) && (c.dataPoint && !l(c.dataPoint.y) && b.visible) && (c.dataSeries = b,
                e.push(c)));
            if (0 < e.length) {
                for (h = 0; h < e.length; h++)
                    if (c = e[h],
                    (this.shared || 0 <= c.dataSeries.type.indexOf("100")) && c.dataSeries.axisX && c.dataPoint.x >= c.dataSeries.axisX.viewportMinimum && c.dataPoint.x <= c.dataSeries.axisX.viewportMaximum) {
                        d = !1;
                        break
                    } else if (c.dataSeries.axisX && c.dataSeries.axisY && (c.dataPoint.x < c.dataSeries.axisX.viewportMinimum || c.dataPoint.x > c.dataSeries.axisX.viewportMaximum || c.dataPoint.y < c.dataSeries.axisY.viewportMinimum || c.dataPoint.y > c.dataSeries.axisY.viewportMaximum))
                        d = !0;
                    else {
                        d = !1;
                        break
                    }
                if (d)
                    return this.hide(),
                    !1;
                this.highlightObjects(e);
                "toolTip" === this.chart.clearedOverlayedCanvas && this.chart.renderCrosshairs();
                this._entries = e;
                h = "";
                h = this.getToolTipInnerHTML({
                    entries: e
                });
                if (null !== h) {
                    this.contentDiv.innerHTML = h;
                    if (this.isToolTipDefinedInData && l(this.options.content) && l(this.options.contentFormatter))
                        for (c = this.contentDiv.getElementsByTagName("span"),
                        h = 0; h < c.length; h++)
                            c[h] && (c[h].style.color = c[h].getAttribute("data-color"));
                    h = !1;
                    "none" === this.container.style.display && (h = !0,
                    this.container.style.display = "block");
                    try {
                        this.contentDiv.style.background = this.backgroundColor ? this.backgroundColor : s ? "rgba(255,255,255,.9)" : "rgb(255,255,255)",
                        this.borderColor = "waterfall" === e[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : e[0].dataPoint.color ? e[0].dataPoint.color : 0 < e[0].dataPoint.y ? e[0].dataSeries.risingColor : e[0].dataSeries.fallingColor : "error" === e[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : e[0].dataSeries.color ? e[0].dataSeries.color : e[0].dataSeries._colorSet[b.index % e[0].dataSeries._colorSet.length] : this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : e[0].dataPoint.color ? e[0].dataPoint.color : e[0].dataSeries.color ? e[0].dataSeries.color : e[0].dataSeries._colorSet[e[0].index % e[0].dataSeries._colorSet.length],
                        this.contentDiv.style.borderWidth = this.borderThickness || 0 === this.borderThickness ? this.borderThickness + "px" : "2px",
                        this.contentDiv.style.borderRadius = this.cornerRadius || 0 === this.cornerRadius ? this.cornerRadius + "px" : "5px",
                        this.container.style.borderRadius = this.contentDiv.style.borderRadius,
                        this.contentDiv.style.fontSize = this.fontSize || 0 === this.fontSize ? this.fontSize + "px" : "14px",
                        this.contentDiv.style.color = this.fontColor ? this.fontColor : "#000000",
                        this.contentDiv.style.fontFamily = this.fontFamily ? this.fontFamily : "Calibri, Arial, Georgia, serif;",
                        this.contentDiv.style.fontWeight = this.fontWeight ? this.fontWeight : "normal",
                        this.contentDiv.style.fontStyle = this.fontStyle ? this.fontStyle : s ? "italic" : "normal"
                    } catch (n) {}
                    "pie" === e[0].dataSeries.type || "doughnut" === e[0].dataSeries.type ? b = e[0].dataSeries.dataPointEOs[e[0].index].center.x + e[0].dataSeries.radius * Math.cos(e[0].dataSeries.dataPointEOs[e[0].index].midAngle) + -("left" === e[0].dataSeries.dataPointEOs[e[0].index].hemisphere ? 0 : this.container.clientWidth) : "funnel" === e[0].dataSeries.type || "pyramid" === e[0].dataSeries.type ? (c = e[0].dataSeries.dataPointEOs[e[0].index].sectionsofFunnel,
                    b = (c.x1 + c.x2 - this.container.clientWidth) / 2) : (b = "bar" === e[0].dataSeries.type || "rangeBar" === e[0].dataSeries.type || "stackedBar" === e[0].dataSeries.type || "stackedBar100" === e[0].dataSeries.type ? e[0].dataSeries.axisY.convertValueToPixel(e[0].dataPoint.y.length ? e[0].dataPoint.y[e[0].dataPoint.y.length - 1] : e[0].dataPoint.y) - this.container.clientWidth << 0 : e[0].dataSeries.axisX.convertValueToPixel(e[0].dataPoint.x) - this.container.clientWidth << 0,
                    b -= 10);
                    0 > b && (b += this.container.clientWidth + 20);
                    b + this.container.clientWidth > Math.max(this.chart.container.clientWidth, this.chart.width) && (b = Math.max(0, Math.max(this.chart.container.clientWidth, this.chart.width) - this.container.clientWidth));
                    1 !== e.length || this.shared || "line" !== e[0].dataSeries.type && "stepLine" !== e[0].dataSeries.type && "spline" !== e[0].dataSeries.type && "area" !== e[0].dataSeries.type && "stepArea" !== e[0].dataSeries.type && "splineArea" !== e[0].dataSeries.type ? "pie" === e[0].dataSeries.type || "doughnut" === e[0].dataSeries.type ? (c = e[0].dataSeries.dataPointEOs[e[0].index].center.y + e[0].dataSeries.radius * Math.sin(e[0].dataSeries.dataPointEOs[e[0].index].midAngle),
                    c < e[0].dataSeries.dataPointEOs[e[0].index].center.y && (c += this.container.clientHeight)) : "funnel" === e[0].dataSeries.type || "pyramid" === e[0].dataSeries.type ? (c = e[0].dataSeries.dataPointEOs[e[0].dataSeries.reversed ? e[0].dataSeries.dataPointEOs.length - 1 - e[0].index : e[0].index].sectionsofFunnel,
                    c = "undefined" !== typeof c.x5 ? (c.y2 + c.y4) / 2 : (c.y2 + c.y3) / 2 + this.container.clientHeight / 2) : c = "bar" === e[0].dataSeries.type || "rangeBar" === e[0].dataSeries.type || "stackedBar" === e[0].dataSeries.type || "stackedBar100" === e[0].dataSeries.type ? e[0].dataSeries.axisX.convertValueToPixel(e[0].dataPoint.x) : e[0].dataSeries.axisY.convertValueToPixel(e[0].dataPoint.y.length ? e[0].dataPoint.y[e[0].dataPoint.y.length - 1] : e[0].dataPoint.y) : c = e[0].dataSeries.axisY.convertValueToPixel(e[0].dataPoint.y);
                    c = -c + 10;
                    0 < c + this.container.clientHeight + 5 && (c -= c + this.container.clientHeight + 5 - 0);
                    this.fixMozTransitionDelay(b, c);
                    !this.animationEnabled || h ? this.disableAnimation() : (this.enableAnimation(),
                    this.container.style.MozTransition = this.mozContainerTransition);
                    this.container.style.left = b + "px";
                    this.container.style.bottom = c + "px"
                } else
                    return this.hide(!1),
                    !1
            } else
                return this.hide(),
                !1;
            this._xValue = a;
            this._dataSeriesIndex = g;
            this._prevY = this._prevX = NaN;
            return !0
        }
        ;
        na.prototype.fixMozTransitionDelay = function(a, g) {
            if (20 < this.chart._eventManager.lastObjectId)
                this.mozContainerTransition = this.getContainerTransition(0);
            else {
                var b = parseFloat(this.container.style.left)
                  , b = isNaN(b) ? 0 : b
                  , c = parseFloat(this.container.style.bottom)
                  , c = isNaN(c) ? 0 : c;
                10 < Math.sqrt(Math.pow(b - a, 2) + Math.pow(c - g, 2)) ? this.mozContainerTransition = this.getContainerTransition(0.1) : this.mozContainerTransition = this.getContainerTransition(0)
            }
        }
        ;
        na.prototype.getContainerTransition = function(a) {
            return "left " + a + "s ease-out 0s, bottom " + a + "s ease-out 0s"
        }
        ;
        ia.prototype.reset = function() {
            this.lastObjectId = 0;
            this.objectMap = [];
            this.rectangularRegionEventSubscriptions = [];
            this.previousDataPointEventObject = null;
            this.eventObjects = [];
            s && (this.ghostCtx.clearRect(0, 0, this.chart.width, this.chart.height),
            this.ghostCtx.beginPath())
        }
        ;
        ia.prototype.getNewObjectTrackingId = function() {
            return ++this.lastObjectId
        }
        ;
        ia.prototype.mouseEventHandler = function(a) {
            if ("mousemove" === a.type || "click" === a.type) {
                var g = []
                  , b = Pa(a)
                  , c = null;
                if ((c = this.chart.getObjectAtXY(b.x, b.y, !1)) && "undefined" !== typeof this.objectMap[c])
                    if (c = this.objectMap[c],
                    "dataPoint" === c.objectType) {
                        var d = this.chart.data[c.dataSeriesIndex]
                          , e = d.dataPoints[c.dataPointIndex]
                          , h = c.dataPointIndex;
                        c.eventParameter = {
                            x: b.x,
                            y: b.y,
                            dataPoint: e,
                            dataSeries: d.options,
                            dataPointIndex: h,
                            dataSeriesIndex: d.index,
                            chart: this.chart
                        };
                        c.eventContext = {
                            context: e,
                            userContext: e,
                            mouseover: "mouseover",
                            mousemove: "mousemove",
                            mouseout: "mouseout",
                            click: "click"
                        };
                        g.push(c);
                        c = this.objectMap[d.id];
                        c.eventParameter = {
                            x: b.x,
                            y: b.y,
                            dataPoint: e,
                            dataSeries: d.options,
                            dataPointIndex: h,
                            dataSeriesIndex: d.index,
                            chart: this.chart
                        };
                        c.eventContext = {
                            context: d,
                            userContext: d.options,
                            mouseover: "mouseover",
                            mousemove: "mousemove",
                            mouseout: "mouseout",
                            click: "click"
                        };
                        g.push(this.objectMap[d.id])
                    } else
                        "legendItem" === c.objectType && (d = this.chart.data[c.dataSeriesIndex],
                        e = null !== c.dataPointIndex ? d.dataPoints[c.dataPointIndex] : null,
                        c.eventParameter = {
                            x: b.x,
                            y: b.y,
                            dataSeries: d.options,
                            dataPoint: e,
                            dataPointIndex: c.dataPointIndex,
                            dataSeriesIndex: c.dataSeriesIndex,
                            chart: this.chart
                        },
                        c.eventContext = {
                            context: this.chart.legend,
                            userContext: this.chart.legend.options,
                            mouseover: "itemmouseover",
                            mousemove: "itemmousemove",
                            mouseout: "itemmouseout",
                            click: "itemclick"
                        },
                        g.push(c));
                d = [];
                for (b = 0; b < this.mouseoveredObjectMaps.length; b++) {
                    e = !0;
                    for (c = 0; c < g.length; c++)
                        if (g[c].id === this.mouseoveredObjectMaps[b].id) {
                            e = !1;
                            break
                        }
                    e ? this.fireEvent(this.mouseoveredObjectMaps[b], "mouseout", a) : d.push(this.mouseoveredObjectMaps[b])
                }
                this.mouseoveredObjectMaps = d;
                for (b = 0; b < g.length; b++) {
                    d = !1;
                    for (c = 0; c < this.mouseoveredObjectMaps.length; c++)
                        if (g[b].id === this.mouseoveredObjectMaps[c].id) {
                            d = !0;
                            break
                        }
                    d || (this.fireEvent(g[b], "mouseover", a),
                    this.mouseoveredObjectMaps.push(g[b]));
                    "click" === a.type ? this.fireEvent(g[b], "click", a) : "mousemove" === a.type && this.fireEvent(g[b], "mousemove", a)
                }
            }
        }
        ;
        ia.prototype.fireEvent = function(a, g, b) {
            if (a && g) {
                var c = a.eventParameter
                  , d = a.eventContext
                  , e = a.eventContext.userContext;
                e && (d && e[d[g]]) && e[d[g]].call(e, c);
                "mouseout" !== g ? e.cursor && e.cursor !== b.target.style.cursor && (b.target.style.cursor = e.cursor) : (b.target.style.cursor = this.chart.panEnabled ? "itemmouseout" !== d.mouseout || e.dockInsidePlotArea ? "move" : this.chart._defaultCursor : this.chart._defaultCursor,
                delete a.eventParameter,
                delete a.eventContext);
                "click" === g && ("dataPoint" === a.objectType && this.chart.pieDoughnutClickHandler) && this.chart.pieDoughnutClickHandler.call(this.chart.data[a.dataSeriesIndex], c);
                "click" === g && ("dataPoint" === a.objectType && this.chart.funnelPyramidClickHandler) && this.chart.funnelPyramidClickHandler.call(this.chart.data[a.dataSeriesIndex], c)
            }
        }
        ;
        la.prototype.animate = function(a, g, b, c, d) {
            var e = this;
            this.chart.isAnimating = !0;
            d = d || M.easing.linear;
            b && this.animations.push({
                startTime: (new Date).getTime() + (a ? a : 0),
                duration: g,
                animationCallback: b,
                onComplete: c
            });
            for (a = []; 0 < this.animations.length; )
                if (g = this.animations.shift(),
                b = (new Date).getTime(),
                c = 0,
                g.startTime <= b && (c = d(Math.min(b - g.startTime, g.duration), 0, 1, g.duration),
                c = Math.min(c, 1),
                isNaN(c) || !isFinite(c)) && (c = 1),
                1 > c && a.push(g),
                g.animationCallback(c),
                1 <= c && g.onComplete)
                    g.onComplete();
            this.animations = a;
            0 < this.animations.length ? this.animationRequestId = this.chart.requestAnimFrame.call(window, function() {
                e.animate.call(e)
            }) : this.chart.isAnimating = !1
        }
        ;
        la.prototype.cancelAllAnimations = function() {
            this.animations = [];
            this.animationRequestId && this.chart.cancelRequestAnimFrame.call(window, this.animationRequestId);
            this.animationRequestId = null;
            this.chart.isAnimating = !1
        }
        ;
        var M = {
            yScaleAnimation: function(a, g) {
                if (0 !== a) {
                    var b = g.dest
                      , c = g.source.canvas
                      , d = g.animationBase;
                    b.drawImage(c, 0, 0, c.width, c.height, 0, d - d * a, b.canvas.width / ma, a * b.canvas.height / ma)
                }
            },
            xScaleAnimation: function(a, g) {
                if (0 !== a) {
                    var b = g.dest
                      , c = g.source.canvas
                      , d = g.animationBase;
                    b.drawImage(c, 0, 0, c.width, c.height, d - d * a, 0, a * b.canvas.width / ma, b.canvas.height / ma)
                }
            },
            xClipAnimation: function(a, g) {
                if (0 !== a) {
                    var b = g.dest
                      , c = g.source.canvas;
                    b.save();
                    0 < a && b.drawImage(c, 0, 0, c.width * a, c.height, 0, 0, c.width * a / ma, c.height / ma);
                    b.restore()
                }
            },
            fadeInAnimation: function(a, g) {
                if (0 !== a) {
                    var b = g.dest
                      , c = g.source.canvas;
                    b.save();
                    b.globalAlpha = a;
                    b.drawImage(c, 0, 0, c.width, c.height, 0, 0, b.canvas.width / ma, b.canvas.height / ma);
                    b.restore()
                }
            },
            easing: {
                linear: function(a, g, b, c) {
                    return b * a / c + g
                },
                easeOutQuad: function(a, g, b, c) {
                    return -b * (a /= c) * (a - 2) + g
                },
                easeOutQuart: function(a, g, b, c) {
                    return -b * ((a = a / c - 1) * a * a * a - 1) + g
                },
                easeInQuad: function(a, g, b, c) {
                    return b * (a /= c) * a + g
                },
                easeInQuart: function(a, g, b, c) {
                    return b * (a /= c) * a * a * a + g
                }
            }
        }
          , ba = {
            drawMarker: function(a, g, b, c, d, e, h, l) {
                if (b) {
                    var n = 1;
                    b.fillStyle = e ? e : "#000000";
                    b.strokeStyle = h ? h : "#000000";
                    b.lineWidth = l ? l : 0;
                    b.setLineDash && b.setLineDash(J("solid", l));
                    "circle" === c ? (b.moveTo(a, g),
                    b.beginPath(),
                    b.arc(a, g, d / 2, 0, 2 * Math.PI, !1),
                    e && b.fill(),
                    l && (h ? b.stroke() : (n = b.globalAlpha,
                    b.globalAlpha = 0.15,
                    b.strokeStyle = "black",
                    b.stroke(),
                    b.globalAlpha = n))) : "square" === c ? (b.beginPath(),
                    b.rect(a - d / 2, g - d / 2, d, d),
                    e && b.fill(),
                    l && (h ? b.stroke() : (n = b.globalAlpha,
                    b.globalAlpha = 0.15,
                    b.strokeStyle = "black",
                    b.stroke(),
                    b.globalAlpha = n))) : "triangle" === c ? (b.beginPath(),
                    b.moveTo(a - d / 2, g + d / 2),
                    b.lineTo(a + d / 2, g + d / 2),
                    b.lineTo(a, g - d / 2),
                    b.closePath(),
                    e && b.fill(),
                    l && (h ? b.stroke() : (n = b.globalAlpha,
                    b.globalAlpha = 0.15,
                    b.strokeStyle = "black",
                    b.stroke(),
                    b.globalAlpha = n)),
                    b.beginPath()) : "cross" === c && (b.strokeStyle = e,
                    b.lineWidth = d / 4,
                    b.beginPath(),
                    b.moveTo(a - d / 2, g - d / 2),
                    b.lineTo(a + d / 2, g + d / 2),
                    b.stroke(),
                    b.moveTo(a + d / 2, g - d / 2),
                    b.lineTo(a - d / 2, g + d / 2),
                    b.stroke())
                }
            },
            drawMarkers: function(a) {
                for (var g = 0; g < a.length; g++) {
                    var b = a[g];
                    ba.drawMarker(b.x, b.y, b.ctx, b.type, b.size, b.color, b.borderColor, b.borderThickness)
                }
            }
        };
        return n
    }();
    u.version = "v3.13.0 GA";
    window.CanvasJS && (u && !window.CanvasJS.Chart) && (window.CanvasJS.Chart = u)
}
)();

/*
  excanvas is used to support IE678 which do not implement HTML5 Canvas Element. You can safely remove the following excanvas code if you don't need to support older browsers.

  Copyright 2006 Google Inc. https://code.google.com/p/explorercanvas/
  Licensed under the Apache License, Version 2.0
*/
document.createElement("canvas").getContext || function() {
    function V() {
        return this.context_ || (this.context_ = new C(this))
    }
    function W(a, b, c) {
        var g = M.call(arguments, 2);
        return function() {
            return a.apply(b, g.concat(M.call(arguments)))
        }
    }
    function N(a) {
        return String(a).replace(/&/g, "&amp;").replace(/"/g, "&quot;")
    }
    function O(a) {
        a.namespaces.g_vml_ || a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml", "#default#VML");
        a.namespaces.g_o_ || a.namespaces.add("g_o_", "urn:schemas-microsoft-com:office:office", "#default#VML");
        a.styleSheets.ex_canvas_ || (a = a.createStyleSheet(),
        a.owningElement.id = "ex_canvas_",
        a.cssText = "canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}")
    }
    function X(a) {
        var b = a.srcElement;
        switch (a.propertyName) {
        case "width":
            b.getContext().clearRect();
            b.style.width = b.attributes.width.nodeValue + "px";
            b.firstChild.style.width = b.clientWidth + "px";
            break;
        case "height":
            b.getContext().clearRect(),
            b.style.height = b.attributes.height.nodeValue + "px",
            b.firstChild.style.height = b.clientHeight + "px"
        }
    }
    function Y(a) {
        a = a.srcElement;
        a.firstChild && (a.firstChild.style.width = a.clientWidth + "px",
        a.firstChild.style.height = a.clientHeight + "px")
    }
    function D() {
        return [[1, 0, 0], [0, 1, 0], [0, 0, 1]]
    }
    function t(a, b) {
        for (var c = D(), g = 0; 3 > g; g++)
            for (var e = 0; 3 > e; e++) {
                for (var f = 0, d = 0; 3 > d; d++)
                    f += a[g][d] * b[d][e];
                c[g][e] = f
            }
        return c
    }
    function P(a, b) {
        b.fillStyle = a.fillStyle;
        b.lineCap = a.lineCap;
        b.lineJoin = a.lineJoin;
        b.lineWidth = a.lineWidth;
        b.miterLimit = a.miterLimit;
        b.shadowBlur = a.shadowBlur;
        b.shadowColor = a.shadowColor;
        b.shadowOffsetX = a.shadowOffsetX;
        b.shadowOffsetY = a.shadowOffsetY;
        b.strokeStyle = a.strokeStyle;
        b.globalAlpha = a.globalAlpha;
        b.font = a.font;
        b.textAlign = a.textAlign;
        b.textBaseline = a.textBaseline;
        b.arcScaleX_ = a.arcScaleX_;
        b.arcScaleY_ = a.arcScaleY_;
        b.lineScale_ = a.lineScale_
    }
    function Q(a) {
        var b = a.indexOf("(", 3)
          , c = a.indexOf(")", b + 1)
          , b = a.substring(b + 1, c).split(",");
        if (4 != b.length || "a" != a.charAt(3))
            b[3] = 1;
        return b
    }
    function E(a, b, c) {
        return Math.min(c, Math.max(b, a))
    }
    function F(a, b, c) {
        0 > c && c++;
        1 < c && c--;
        return 1 > 6 * c ? a + 6 * (b - a) * c : 1 > 2 * c ? b : 2 > 3 * c ? a + 6 * (b - a) * (2 / 3 - c) : a
    }
    function G(a) {
        if (a in H)
            return H[a];
        var b, c = 1;
        a = String(a);
        if ("#" == a.charAt(0))
            b = a;
        else if (/^rgb/.test(a)) {
            c = Q(a);
            b = "#";
            for (var g, e = 0; 3 > e; e++)
                g = -1 != c[e].indexOf("%") ? Math.floor(255 * (parseFloat(c[e]) / 100)) : +c[e],
                b += v[E(g, 0, 255)];
            c = +c[3]
        } else if (/^hsl/.test(a)) {
            e = c = Q(a);
            b = parseFloat(e[0]) / 360 % 360;
            0 > b && b++;
            g = E(parseFloat(e[1]) / 100, 0, 1);
            e = E(parseFloat(e[2]) / 100, 0, 1);
            if (0 == g)
                g = e = b = e;
            else {
                var f = 0.5 > e ? e * (1 + g) : e + g - e * g
                  , d = 2 * e - f;
                g = F(d, f, b + 1 / 3);
                e = F(d, f, b);
                b = F(d, f, b - 1 / 3)
            }
            b = "#" + v[Math.floor(255 * g)] + v[Math.floor(255 * e)] + v[Math.floor(255 * b)];
            c = c[3]
        } else
            b = Z[a] || a;
        return H[a] = {
            color: b,
            alpha: c
        }
    }
    function C(a) {
        this.m_ = D();
        this.mStack_ = [];
        this.aStack_ = [];
        this.currentPath_ = [];
        this.fillStyle = this.strokeStyle = "#000";
        this.lineWidth = 1;
        this.lineJoin = "miter";
        this.lineCap = "butt";
        this.miterLimit = 1 * q;
        this.globalAlpha = 1;
        this.font = "10px sans-serif";
        this.textAlign = "left";
        this.textBaseline = "alphabetic";
        this.canvas = a;
        var b = "width:" + a.clientWidth + "px;height:" + a.clientHeight + "px;overflow:hidden;position:absolute"
          , c = a.ownerDocument.createElement("div");
        c.style.cssText = b;
        a.appendChild(c);
        b = c.cloneNode(!1);
        b.style.backgroundColor = "red";
        b.style.filter = "alpha(opacity=0)";
        a.appendChild(b);
        this.element_ = c;
        this.lineScale_ = this.arcScaleY_ = this.arcScaleX_ = 1
    }
    function R(a, b, c, g) {
        a.currentPath_.push({
            type: "bezierCurveTo",
            cp1x: b.x,
            cp1y: b.y,
            cp2x: c.x,
            cp2y: c.y,
            x: g.x,
            y: g.y
        });
        a.currentX_ = g.x;
        a.currentY_ = g.y
    }
    function S(a, b) {
        var c = G(a.strokeStyle)
          , g = c.color
          , c = c.alpha * a.globalAlpha
          , e = a.lineScale_ * a.lineWidth;
        1 > e && (c *= e);
        b.push("<g_vml_:stroke", ' opacity="', c, '"', ' joinstyle="', a.lineJoin, '"', ' miterlimit="', a.miterLimit, '"', ' endcap="', $[a.lineCap] || "square", '"', ' weight="', e, 'px"', ' color="', g, '" />')
    }
    function T(a, b, c, g) {
        var e = a.fillStyle
          , f = a.arcScaleX_
          , d = a.arcScaleY_
          , k = g.x - c.x
          , n = g.y - c.y;
        if (e instanceof w) {
            var h = 0
              , l = g = 0
              , u = 0
              , m = 1;
            if ("gradient" == e.type_) {
                h = e.x1_ / f;
                c = e.y1_ / d;
                var p = s(a, e.x0_ / f, e.y0_ / d)
                  , h = s(a, h, c)
                  , h = 180 * Math.atan2(h.x - p.x, h.y - p.y) / Math.PI;
                0 > h && (h += 360);
                1E-6 > h && (h = 0)
            } else
                p = s(a, e.x0_, e.y0_),
                g = (p.x - c.x) / k,
                l = (p.y - c.y) / n,
                k /= f * q,
                n /= d * q,
                m = x.max(k, n),
                u = 2 * e.r0_ / m,
                m = 2 * e.r1_ / m - u;
            f = e.colors_;
            f.sort(function(a, b) {
                return a.offset - b.offset
            });
            d = f.length;
            p = f[0].color;
            c = f[d - 1].color;
            k = f[0].alpha * a.globalAlpha;
            a = f[d - 1].alpha * a.globalAlpha;
            for (var n = [], r = 0; r < d; r++) {
                var t = f[r];
                n.push(t.offset * m + u + " " + t.color)
            }
            b.push('<g_vml_:fill type="', e.type_, '"', ' method="none" focus="100%"', ' color="', p, '"', ' color2="', c, '"', ' colors="', n.join(","), '"', ' opacity="', a, '"', ' g_o_:opacity2="', k, '"', ' angle="', h, '"', ' focusposition="', g, ",", l, '" />')
        } else
            e instanceof I ? k && n && b.push("<g_vml_:fill", ' position="', -c.x / k * f * f, ",", -c.y / n * d * d, '"', ' type="tile"', ' src="', e.src_, '" />') : (e = G(a.fillStyle),
            b.push('<g_vml_:fill color="', e.color, '" opacity="', e.alpha * a.globalAlpha, '" />'))
    }
    function s(a, b, c) {
        a = a.m_;
        return {
            x: q * (b * a[0][0] + c * a[1][0] + a[2][0]) - r,
            y: q * (b * a[0][1] + c * a[1][1] + a[2][1]) - r
        }
    }
    function z(a, b, c) {
        isFinite(b[0][0]) && (isFinite(b[0][1]) && isFinite(b[1][0]) && isFinite(b[1][1]) && isFinite(b[2][0]) && isFinite(b[2][1])) && (a.m_ = b,
        c && (a.lineScale_ = aa(ba(b[0][0] * b[1][1] - b[0][1] * b[1][0]))))
    }
    function w(a) {
        this.type_ = a;
        this.r1_ = this.y1_ = this.x1_ = this.r0_ = this.y0_ = this.x0_ = 0;
        this.colors_ = []
    }
    function I(a, b) {
        if (!a || 1 != a.nodeType || "IMG" != a.tagName)
            throw new A("TYPE_MISMATCH_ERR");
        if ("complete" != a.readyState)
            throw new A("INVALID_STATE_ERR");
        switch (b) {
        case "repeat":
        case null:
        case "":
            this.repetition_ = "repeat";
            break;
        case "repeat-x":
        case "repeat-y":
        case "no-repeat":
            this.repetition_ = b;
            break;
        default:
            throw new A("SYNTAX_ERR");
        }
        this.src_ = a.src;
        this.width_ = a.width;
        this.height_ = a.height
    }
    function A(a) {
        this.code = this[a];
        this.message = a + ": DOM Exception " + this.code
    }
    var x = Math
      , k = x.round
      , J = x.sin
      , K = x.cos
      , ba = x.abs
      , aa = x.sqrt
      , q = 10
      , r = q / 2;
    navigator.userAgent.match(/MSIE ([\d.]+)?/);
    var M = Array.prototype.slice;
    O(document);
    var U = {
        init: function(a) {
            a = a || document;
            a.createElement("canvas");
            a.attachEvent("onreadystatechange", W(this.init_, this, a))
        },
        init_: function(a) {
            a = a.getElementsByTagName("canvas");
            for (var b = 0; b < a.length; b++)
                this.initElement(a[b])
        },
        initElement: function(a) {
            if (!a.getContext) {
                a.getContext = V;
                O(a.ownerDocument);
                a.innerHTML = "";
                a.attachEvent("onpropertychange", X);
                a.attachEvent("onresize", Y);
                var b = a.attributes;
                b.width && b.width.specified ? a.style.width = b.width.nodeValue + "px" : a.width = a.clientWidth;
                b.height && b.height.specified ? a.style.height = b.height.nodeValue + "px" : a.height = a.clientHeight
            }
            return a
        }
    };
    U.init();
    for (var v = [], d = 0; 16 > d; d++)
        for (var B = 0; 16 > B; B++)
            v[16 * d + B] = d.toString(16) + B.toString(16);
    var Z = {
        aliceblue: "#F0F8FF",
        antiquewhite: "#FAEBD7",
        aquamarine: "#7FFFD4",
        azure: "#F0FFFF",
        beige: "#F5F5DC",
        bisque: "#FFE4C4",
        black: "#000000",
        blanchedalmond: "#FFEBCD",
        blueviolet: "#8A2BE2",
        brown: "#A52A2A",
        burlywood: "#DEB887",
        cadetblue: "#5F9EA0",
        chartreuse: "#7FFF00",
        chocolate: "#D2691E",
        coral: "#FF7F50",
        cornflowerblue: "#6495ED",
        cornsilk: "#FFF8DC",
        crimson: "#DC143C",
        cyan: "#00FFFF",
        darkblue: "#00008B",
        darkcyan: "#008B8B",
        darkgoldenrod: "#B8860B",
        darkgray: "#A9A9A9",
        darkgreen: "#006400",
        darkgrey: "#A9A9A9",
        darkkhaki: "#BDB76B",
        darkmagenta: "#8B008B",
        darkolivegreen: "#556B2F",
        darkorange: "#FF8C00",
        darkorchid: "#9932CC",
        darkred: "#8B0000",
        darksalmon: "#E9967A",
        darkseagreen: "#8FBC8F",
        darkslateblue: "#483D8B",
        darkslategray: "#2F4F4F",
        darkslategrey: "#2F4F4F",
        darkturquoise: "#00CED1",
        darkviolet: "#9400D3",
        deeppink: "#FF1493",
        deepskyblue: "#00BFFF",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1E90FF",
        firebrick: "#B22222",
        floralwhite: "#FFFAF0",
        forestgreen: "#228B22",
        gainsboro: "#DCDCDC",
        ghostwhite: "#F8F8FF",
        gold: "#FFD700",
        goldenrod: "#DAA520",
        grey: "#808080",
        greenyellow: "#ADFF2F",
        honeydew: "#F0FFF0",
        hotpink: "#FF69B4",
        indianred: "#CD5C5C",
        indigo: "#4B0082",
        ivory: "#FFFFF0",
        khaki: "#F0E68C",
        lavender: "#E6E6FA",
        lavenderblush: "#FFF0F5",
        lawngreen: "#7CFC00",
        lemonchiffon: "#FFFACD",
        lightblue: "#ADD8E6",
        lightcoral: "#F08080",
        lightcyan: "#E0FFFF",
        lightgoldenrodyellow: "#FAFAD2",
        lightgreen: "#90EE90",
        lightgrey: "#D3D3D3",
        lightpink: "#FFB6C1",
        lightsalmon: "#FFA07A",
        lightseagreen: "#20B2AA",
        lightskyblue: "#87CEFA",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#B0C4DE",
        lightyellow: "#FFFFE0",
        limegreen: "#32CD32",
        linen: "#FAF0E6",
        magenta: "#FF00FF",
        mediumaquamarine: "#66CDAA",
        mediumblue: "#0000CD",
        mediumorchid: "#BA55D3",
        mediumpurple: "#9370DB",
        mediumseagreen: "#3CB371",
        mediumslateblue: "#7B68EE",
        mediumspringgreen: "#00FA9A",
        mediumturquoise: "#48D1CC",
        mediumvioletred: "#C71585",
        midnightblue: "#191970",
        mintcream: "#F5FFFA",
        mistyrose: "#FFE4E1",
        moccasin: "#FFE4B5",
        navajowhite: "#FFDEAD",
        oldlace: "#FDF5E6",
        olivedrab: "#6B8E23",
        orange: "#FFA500",
        orangered: "#FF4500",
        orchid: "#DA70D6",
        palegoldenrod: "#EEE8AA",
        palegreen: "#98FB98",
        paleturquoise: "#AFEEEE",
        palevioletred: "#DB7093",
        papayawhip: "#FFEFD5",
        peachpuff: "#FFDAB9",
        peru: "#CD853F",
        pink: "#FFC0CB",
        plum: "#DDA0DD",
        powderblue: "#B0E0E6",
        rosybrown: "#BC8F8F",
        royalblue: "#4169E1",
        saddlebrown: "#8B4513",
        salmon: "#FA8072",
        sandybrown: "#F4A460",
        seagreen: "#2E8B57",
        seashell: "#FFF5EE",
        sienna: "#A0522D",
        skyblue: "#87CEEB",
        slateblue: "#6A5ACD",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#FFFAFA",
        springgreen: "#00FF7F",
        steelblue: "#4682B4",
        tan: "#D2B48C",
        thistle: "#D8BFD8",
        tomato: "#FF6347",
        turquoise: "#40E0D0",
        violet: "#EE82EE",
        wheat: "#F5DEB3",
        whitesmoke: "#F5F5F5",
        yellowgreen: "#9ACD32"
    }
      , H = {}
      , L = {}
      , $ = {
        butt: "flat",
        round: "round"
    }
      , d = C.prototype;
    d.clearRect = function() {
        this.textMeasureEl_ && (this.textMeasureEl_.removeNode(!0),
        this.textMeasureEl_ = null);
        this.element_.innerHTML = ""
    }
    ;
    d.beginPath = function() {
        this.currentPath_ = []
    }
    ;
    d.moveTo = function(a, b) {
        var c = s(this, a, b);
        this.currentPath_.push({
            type: "moveTo",
            x: c.x,
            y: c.y
        });
        this.currentX_ = c.x;
        this.currentY_ = c.y
    }
    ;
    d.lineTo = function(a, b) {
        var c = s(this, a, b);
        this.currentPath_.push({
            type: "lineTo",
            x: c.x,
            y: c.y
        });
        this.currentX_ = c.x;
        this.currentY_ = c.y
    }
    ;
    d.bezierCurveTo = function(a, b, c, g, e, f) {
        e = s(this, e, f);
        a = s(this, a, b);
        c = s(this, c, g);
        R(this, a, c, e)
    }
    ;
    d.quadraticCurveTo = function(a, b, c, g) {
        a = s(this, a, b);
        c = s(this, c, g);
        g = {
            x: this.currentX_ + 2 / 3 * (a.x - this.currentX_),
            y: this.currentY_ + 2 / 3 * (a.y - this.currentY_)
        };
        R(this, g, {
            x: g.x + (c.x - this.currentX_) / 3,
            y: g.y + (c.y - this.currentY_) / 3
        }, c)
    }
    ;
    d.arc = function(a, b, c, g, e, f) {
        c *= q;
        var d = f ? "at" : "wa"
          , k = a + K(g) * c - r
          , n = b + J(g) * c - r;
        g = a + K(e) * c - r;
        e = b + J(e) * c - r;
        k != g || f || (k += 0.125);
        a = s(this, a, b);
        k = s(this, k, n);
        g = s(this, g, e);
        this.currentPath_.push({
            type: d,
            x: a.x,
            y: a.y,
            radius: c,
            xStart: k.x,
            yStart: k.y,
            xEnd: g.x,
            yEnd: g.y
        })
    }
    ;
    d.rect = function(a, b, c, g) {
        this.moveTo(a, b);
        this.lineTo(a + c, b);
        this.lineTo(a + c, b + g);
        this.lineTo(a, b + g);
        this.closePath()
    }
    ;
    d.strokeRect = function(a, b, c, g) {
        var e = this.currentPath_;
        this.beginPath();
        this.moveTo(a, b);
        this.lineTo(a + c, b);
        this.lineTo(a + c, b + g);
        this.lineTo(a, b + g);
        this.closePath();
        this.stroke();
        this.currentPath_ = e
    }
    ;
    d.fillRect = function(a, b, c, g) {
        var e = this.currentPath_;
        this.beginPath();
        this.moveTo(a, b);
        this.lineTo(a + c, b);
        this.lineTo(a + c, b + g);
        this.lineTo(a, b + g);
        this.closePath();
        this.fill();
        this.currentPath_ = e
    }
    ;
    d.createLinearGradient = function(a, b, c, g) {
        var e = new w("gradient");
        e.x0_ = a;
        e.y0_ = b;
        e.x1_ = c;
        e.y1_ = g;
        return e
    }
    ;
    d.createRadialGradient = function(a, b, c, g, e, f) {
        var d = new w("gradientradial");
        d.x0_ = a;
        d.y0_ = b;
        d.r0_ = c;
        d.x1_ = g;
        d.y1_ = e;
        d.r1_ = f;
        return d
    }
    ;
    d.drawImage = function(a, b) {
        var c, g, e, d, r, y, n, h;
        e = a.runtimeStyle.width;
        d = a.runtimeStyle.height;
        a.runtimeStyle.width = "auto";
        a.runtimeStyle.height = "auto";
        var l = a.width
          , u = a.height;
        a.runtimeStyle.width = e;
        a.runtimeStyle.height = d;
        if (3 == arguments.length)
            c = arguments[1],
            g = arguments[2],
            r = y = 0,
            n = e = l,
            h = d = u;
        else if (5 == arguments.length)
            c = arguments[1],
            g = arguments[2],
            e = arguments[3],
            d = arguments[4],
            r = y = 0,
            n = l,
            h = u;
        else if (9 == arguments.length)
            r = arguments[1],
            y = arguments[2],
            n = arguments[3],
            h = arguments[4],
            c = arguments[5],
            g = arguments[6],
            e = arguments[7],
            d = arguments[8];
        else
            throw Error("Invalid number of arguments");
        var m = s(this, c, g)
          , p = [];
        p.push(" <g_vml_:group", ' coordsize="', 10 * q, ",", 10 * q, '"', ' coordorigin="0,0"', ' style="width:', 10, "px;height:", 10, "px;position:absolute;");
        if (1 != this.m_[0][0] || this.m_[0][1] || 1 != this.m_[1][1] || this.m_[1][0]) {
            var t = [];
            t.push("M11=", this.m_[0][0], ",", "M12=", this.m_[1][0], ",", "M21=", this.m_[0][1], ",", "M22=", this.m_[1][1], ",", "Dx=", k(m.x / q), ",", "Dy=", k(m.y / q), "");
            var v = s(this, c + e, g)
              , w = s(this, c, g + d);
            c = s(this, c + e, g + d);
            m.x = x.max(m.x, v.x, w.x, c.x);
            m.y = x.max(m.y, v.y, w.y, c.y);
            p.push("padding:0 ", k(m.x / q), "px ", k(m.y / q), "px 0;filter:progid:DXImageTransform.Microsoft.Matrix(", t.join(""), ", sizingmethod='clip');")
        } else
            p.push("top:", k(m.y / q), "px;left:", k(m.x / q), "px;");
        p.push(' ">', '<g_vml_:image src="', a.src, '"', ' style="width:', q * e, "px;", " height:", q * d, 'px"', ' cropleft="', r / l, '"', ' croptop="', y / u, '"', ' cropright="', (l - r - n) / l, '"', ' cropbottom="', (u - y - h) / u, '"', " />", "</g_vml_:group>");
        this.element_.insertAdjacentHTML("BeforeEnd", p.join(""))
    }
    ;
    d.stroke = function(a) {
        var b = [];
        b.push("<g_vml_:shape", ' filled="', !!a, '"', ' style="position:absolute;width:', 10, "px;height:", 10, 'px;"', ' coordorigin="0,0"', ' coordsize="', 10 * q, ",", 10 * q, '"', ' stroked="', !a, '"', ' path="');
        for (var c = {
            x: null,
            y: null
        }, d = {
            x: null,
            y: null
        }, e = 0; e < this.currentPath_.length; e++) {
            var f = this.currentPath_[e];
            switch (f.type) {
            case "moveTo":
                b.push(" m ", k(f.x), ",", k(f.y));
                break;
            case "lineTo":
                b.push(" l ", k(f.x), ",", k(f.y));
                break;
            case "close":
                b.push(" x ");
                f = null;
                break;
            case "bezierCurveTo":
                b.push(" c ", k(f.cp1x), ",", k(f.cp1y), ",", k(f.cp2x), ",", k(f.cp2y), ",", k(f.x), ",", k(f.y));
                break;
            case "at":
            case "wa":
                b.push(" ", f.type, " ", k(f.x - this.arcScaleX_ * f.radius), ",", k(f.y - this.arcScaleY_ * f.radius), " ", k(f.x + this.arcScaleX_ * f.radius), ",", k(f.y + this.arcScaleY_ * f.radius), " ", k(f.xStart), ",", k(f.yStart), " ", k(f.xEnd), ",", k(f.yEnd))
            }
            if (f) {
                if (null == c.x || f.x < c.x)
                    c.x = f.x;
                if (null == d.x || f.x > d.x)
                    d.x = f.x;
                if (null == c.y || f.y < c.y)
                    c.y = f.y;
                if (null == d.y || f.y > d.y)
                    d.y = f.y
            }
        }
        b.push(' ">');
        a ? T(this, b, c, d) : S(this, b);
        b.push("</g_vml_:shape>");
        this.element_.insertAdjacentHTML("beforeEnd", b.join(""))
    }
    ;
    d.fill = function() {
        this.stroke(!0)
    }
    ;
    d.closePath = function() {
        this.currentPath_.push({
            type: "close"
        })
    }
    ;
    d.save = function() {
        var a = {};
        P(this, a);
        this.aStack_.push(a);
        this.mStack_.push(this.m_);
        this.m_ = t(D(), this.m_)
    }
    ;
    d.restore = function() {
        this.aStack_.length && (P(this.aStack_.pop(), this),
        this.m_ = this.mStack_.pop())
    }
    ;
    d.translate = function(a, b) {
        z(this, t([[1, 0, 0], [0, 1, 0], [a, b, 1]], this.m_), !1)
    }
    ;
    d.rotate = function(a) {
        var b = K(a);
        a = J(a);
        z(this, t([[b, a, 0], [-a, b, 0], [0, 0, 1]], this.m_), !1)
    }
    ;
    d.scale = function(a, b) {
        this.arcScaleX_ *= a;
        this.arcScaleY_ *= b;
        z(this, t([[a, 0, 0], [0, b, 0], [0, 0, 1]], this.m_), !0)
    }
    ;
    d.transform = function(a, b, c, d, e, f) {
        z(this, t([[a, b, 0], [c, d, 0], [e, f, 1]], this.m_), !0)
    }
    ;
    d.setTransform = function(a, b, c, d, e, f) {
        z(this, [[a, b, 0], [c, d, 0], [e, f, 1]], !0)
    }
    ;
    d.drawText_ = function(a, b, c, d, e) {
        var f = this.m_;
        d = 0;
        var r = 1E3, t = 0, n = [], h;
        h = this.font;
        if (L[h])
            h = L[h];
        else {
            var l = document.createElement("div").style;
            try {
                l.font = h
            } catch (u) {}
            h = L[h] = {
                style: l.fontStyle || "normal",
                variant: l.fontVariant || "normal",
                weight: l.fontWeight || "normal",
                size: l.fontSize || 10,
                family: l.fontFamily || "sans-serif"
            }
        }
        var l = h
          , m = this.element_;
        h = {};
        for (var p in l)
            h[p] = l[p];
        p = parseFloat(m.currentStyle.fontSize);
        m = parseFloat(l.size);
        "number" == typeof l.size ? h.size = l.size : -1 != l.size.indexOf("px") ? h.size = m : -1 != l.size.indexOf("em") ? h.size = p * m : -1 != l.size.indexOf("%") ? h.size = p / 100 * m : -1 != l.size.indexOf("pt") ? h.size = m / 0.75 : h.size = p;
        h.size *= 0.981;
        p = h.style + " " + h.variant + " " + h.weight + " " + h.size + "px " + h.family;
        m = this.element_.currentStyle;
        l = this.textAlign.toLowerCase();
        switch (l) {
        case "left":
        case "center":
        case "right":
            break;
        case "end":
            l = "ltr" == m.direction ? "right" : "left";
            break;
        case "start":
            l = "rtl" == m.direction ? "right" : "left";
            break;
        default:
            l = "left"
        }
        switch (this.textBaseline) {
        case "hanging":
        case "top":
            t = h.size / 1.75;
            break;
        case "middle":
            break;
        default:
        case null:
        case "alphabetic":
        case "ideographic":
        case "bottom":
            t = -h.size / 2.25
        }
        switch (l) {
        case "right":
            d = 1E3;
            r = 0.05;
            break;
        case "center":
            d = r = 500
        }
        b = s(this, b + 0, c + t);
        n.push('<g_vml_:line from="', -d, ' 0" to="', r, ' 0.05" ', ' coordsize="100 100" coordorigin="0 0"', ' filled="', !e, '" stroked="', !!e, '" style="position:absolute;width:1px;height:1px;">');
        e ? S(this, n) : T(this, n, {
            x: -d,
            y: 0
        }, {
            x: r,
            y: h.size
        });
        e = f[0][0].toFixed(3) + "," + f[1][0].toFixed(3) + "," + f[0][1].toFixed(3) + "," + f[1][1].toFixed(3) + ",0,0";
        b = k(b.x / q) + "," + k(b.y / q);
        n.push('<g_vml_:skew on="t" matrix="', e, '" ', ' offset="', b, '" origin="', d, ' 0" />', '<g_vml_:path textpathok="true" />', '<g_vml_:textpath on="true" string="', N(a), '" style="v-text-align:', l, ";font:", N(p), '" /></g_vml_:line>');
        this.element_.insertAdjacentHTML("beforeEnd", n.join(""))
    }
    ;
    d.fillText = function(a, b, c, d) {
        this.drawText_(a, b, c, d, !1)
    }
    ;
    d.strokeText = function(a, b, c, d) {
        this.drawText_(a, b, c, d, !0)
    }
    ;
    d.measureText = function(a) {
        this.textMeasureEl_ || (this.element_.insertAdjacentHTML("beforeEnd", '<span style="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;"></span>'),
        this.textMeasureEl_ = this.element_.lastChild);
        var b = this.element_.ownerDocument;
        this.textMeasureEl_.innerHTML = "";
        this.textMeasureEl_.style.font = this.font;
        this.textMeasureEl_.appendChild(b.createTextNode(a));
        return {
            width: this.textMeasureEl_.offsetWidth
        }
    }
    ;
    d.clip = function() {}
    ;
    d.arcTo = function() {}
    ;
    d.createPattern = function(a, b) {
        return new I(a,b)
    }
    ;
    w.prototype.addColorStop = function(a, b) {
        b = G(b);
        this.colors_.push({
            offset: a,
            color: b.color,
            alpha: b.alpha
        })
    }
    ;
    d = A.prototype = Error();
    d.INDEX_SIZE_ERR = 1;
    d.DOMSTRING_SIZE_ERR = 2;
    d.HIERARCHY_REQUEST_ERR = 3;
    d.WRONG_DOCUMENT_ERR = 4;
    d.INVALID_CHARACTER_ERR = 5;
    d.NO_DATA_ALLOWED_ERR = 6;
    d.NO_MODIFICATION_ALLOWED_ERR = 7;
    d.NOT_FOUND_ERR = 8;
    d.NOT_SUPPORTED_ERR = 9;
    d.INUSE_ATTRIBUTE_ERR = 10;
    d.INVALID_STATE_ERR = 11;
    d.SYNTAX_ERR = 12;
    d.INVALID_MODIFICATION_ERR = 13;
    d.NAMESPACE_ERR = 14;
    d.INVALID_ACCESS_ERR = 15;
    d.VALIDATION_ERR = 16;
    d.TYPE_MISMATCH_ERR = 17;
    G_vmlCanvasManager = U;
    CanvasRenderingContext2D = C;
    CanvasGradient = w;
    CanvasPattern = I;
    DOMException = A
}();
/*tslint:enable*/
/*eslint-enable*/
/*jshint ignore:end*/
