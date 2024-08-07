// @license magnet:?xt=urn:btih:d3d9a9a6595521f9666a5e94cc830dab83b65699&dn=expat.txt Expat

/*
 * Beautified version of:
 * pell (https://github.com/jaredreich/pell)
 * (c) Jared Reich
 * @license MIT
 */

! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(t.pell = {})
}(this, function(t) {
    "use strict";
    var e = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        },
        c = "defaultParagraphSeparator",
        l = "formatBlock",
        a = function(t, e, n) {
            return t.addEventListener(e, n)
        },
        s = function(t, e) {
            return t.appendChild(e)
        },
        d = function(t) {
            return document.createElement(t)
        },
        n = function(t) {
            return document.queryCommandState(t)
        },
        f = function(t) {
            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
            return document.execCommand(t, !1, e)
        },
        p = {
            bold: {
                icon: "<b>B</b>",
                title: "Bold",
                state: function() {
                    return n("bold")
                },
                result: function() {
                    return f("bold")
                }
            },
            italic: {
                icon: "<i>I</i>",
                title: "Italic",
                state: function() {
                    return n("italic")
                },
                result: function() {
                    return f("italic")
                }
            },
            underline: {
                icon: "<u>U</u>",
                title: "Underline",
                state: function() {
                    return n("underline")
                },
                result: function() {
                    return f("underline")
                }
            },
            strikethrough: {
                icon: "<strike>S</strike>",
                title: "Strike-through",
                state: function() {
                    return n("strikeThrough")
                },
                result: function() {
                    return f("strikeThrough")
                }
            },
            heading1: {
                icon: "<b>H<sub>1</sub></b>",
                title: "Heading 1",
                result: function() {
                    return f(l, "<h1>")
                }
            },
            heading2: {
                icon: "<b>H<sub>2</sub></b>",
                title: "Heading 2",
                result: function() {
                    return f(l, "<h2>")
                }
            },
            paragraph: {
                icon: "&#182;",
                title: "Paragraph",
                result: function() {
                    return f(l, "<p>")
                }
            },
            quote: {
                icon: "&#8220; &#8221;",
                title: "Quote",
                result: function() {
                    return f(l, "<blockquote>")
                }
            },
            olist: {
                icon: "&#35;",
                title: "Ordered List",
                result: function() {
                    return f("insertOrderedList")
                }
            },
            ulist: {
                icon: "&#8226;",
                title: "Unordered List",
                result: function() {
                    return f("insertUnorderedList")
                }
            },
            code: {
                icon: "&lt;/&gt;",
                title: "Code",
                result: function() {
                    return f(l, "<pre>")
                }
            },
            line: {
                icon: "&#8213;",
                title: "Horizontal Line",
                result: function() {
                    return f("insertHorizontalRule")
                }
            },
            link: {
                icon: "&#128279;",
                title: "Link",
                result: function() {
                    var t = window.prompt("Enter the link URL");
                    t && f("createLink", t)
                }
            },
            image: {
                icon: "&#128247;",
                title: "Image",
                result: function() {
                    var t = window.prompt("Enter the image URL");
                    t && f("insertImage", t)
                }
            }
        },
        m = {
            actionbar: "pell-actionbar",
            button: "pell-button",
            content: "pell-content",
            selected: "pell-button-selected"
        },
        r = function(n) {
            var t = n.actions ? n.actions.map(function(t) {
                    return "string" == typeof t ? p[t] : p[t.name] ? e({}, p[t.name], t) : t
                }) : Object.keys(p).map(function(t) {
                    return p[t]
                }),
                r = e({}, m, n.classes),
                i = n[c] || "div",
                o = d("div");
            o.className = r.actionbar, s(n.element, o);
            var u = n.element.content = d("div");
            return u.contentEditable = !0, u.className = r.content, u.oninput = function(t) {
                var e = t.target.firstChild;
                e && 3 === e.nodeType ? f(l, "<" + i + ">") : "<br>" === u.innerHTML && (u.innerHTML = ""), n.onChange(u.innerHTML)
            }, u.onkeydown = function(t) {
                var e;
                "Enter" === t.key && "blockquote" === (e = l, document.queryCommandValue(e)) && setTimeout(function() {
                    return f(l, "<" + i + ">")
                }, 0)
            }, s(n.element, u), t.forEach(function(t) {
                var e = d("button");
                if (e.className = r.button, e.innerHTML = t.icon, e.title = t.title, e.setAttribute("type", "button"), e.onclick = function() {
                    return t.result() && u.focus()
                }, t.state) {
                    var n = function() {
                        return e.classList[t.state() ? "add" : "remove"](r.selected)
                    };
                    a(u, "keyup", n), a(u, "mouseup", n), a(e, "click", n)
                }
                s(o, e)
            }), n.styleWithCSS && f("styleWithCSS"), f(c, i), n.element
        },
        i = {
            exec: f,
            init: r
        };
    t.exec = f, t.init = r, t.default = i, Object.defineProperty(t, "__esModule", {
        value: !0
    })
});

// @license-end