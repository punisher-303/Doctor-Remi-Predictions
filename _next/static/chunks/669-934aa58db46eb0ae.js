"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [669], {
        920: (e, t, r) => {
            r.d(t, {
                m: () => s
            });
            var o = r(5910),
                n = r(2020),
                s = new class extends o.Q {#
                    e;#
                    t;#
                    r;
                    constructor() {
                        super(), this.#r = e => {
                            if (!n.S$ && window.addEventListener) {
                                let t = () => e();
                                return window.addEventListener("visibilitychange", t, !1), () => {
                                    window.removeEventListener("visibilitychange", t)
                                }
                            }
                        }
                    }
                    onSubscribe() {
                        this.#t || this.setEventListener(this.#r)
                    }
                    onUnsubscribe() {
                        this.hasListeners() || (this.#t ? .(), this.#t = void 0)
                    }
                    setEventListener(e) {
                        this.#r = e, this.#t ? .(), this.#t = e(e => {
                            "boolean" == typeof e ? this.setFocused(e) : this.onFocus()
                        })
                    }
                    setFocused(e) {
                        this.#e !== e && (this.#e = e, this.onFocus())
                    }
                    onFocus() {
                        let e = this.isFocused();
                        this.listeners.forEach(t => {
                            t(e)
                        })
                    }
                    isFocused() {
                        return "boolean" == typeof this.#e ? this.#e : globalThis.document ? .visibilityState !== "hidden"
                    }
                }
        },
        1239: (e, t, r) => {
            r.d(t, {
                t: () => s
            });
            var o = r(5910),
                n = r(2020),
                s = new class extends o.Q {#
                    o = !0;#
                    t;#
                    r;
                    constructor() {
                        super(), this.#r = e => {
                            if (!n.S$ && window.addEventListener) {
                                let t = () => e(!0),
                                    r = () => e(!1);
                                return window.addEventListener("online", t, !1), window.addEventListener("offline", r, !1), () => {
                                    window.removeEventListener("online", t), window.removeEventListener("offline", r)
                                }
                            }
                        }
                    }
                    onSubscribe() {
                        this.#t || this.setEventListener(this.#r)
                    }
                    onUnsubscribe() {
                        this.hasListeners() || (this.#t ? .(), this.#t = void 0)
                    }
                    setEventListener(e) {
                        this.#r = e, this.#t ? .(), this.#t = e(this.setOnline.bind(this))
                    }
                    setOnline(e) {
                        this.#o !== e && (this.#o = e, this.listeners.forEach(t => {
                            t(e)
                        }))
                    }
                    isOnline() {
                        return this.#o
                    }
                }
        },
        1362: (e, t, r) => {
            r.d(t, {
                D: () => c,
                N: () => d
            });
            var o = r(2115),
                n = (e, t, r, o, n, s, i, a) => {
                    let l = document.documentElement,
                        c = ["light", "dark"];

                    function d(t) {
                        var r;
                        (Array.isArray(e) ? e : [e]).forEach(e => {
                            let r = "class" === e,
                                o = r && s ? n.map(e => s[e] || e) : n;
                            r ? (l.classList.remove(...o), l.classList.add(s && s[t] ? s[t] : t)) : l.setAttribute(e, t)
                        }), r = t, a && c.includes(r) && (l.style.colorScheme = r)
                    }
                    if (o) d(o);
                    else try {
                        let e = localStorage.getItem(t) || r,
                            o = i && "system" === e ? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : e;
                        d(o)
                    } catch (e) {}
                },
                s = ["light", "dark"],
                i = "(prefers-color-scheme: dark)",
                a = o.createContext(void 0),
                l = {
                    setTheme: e => {},
                    themes: []
                },
                c = () => {
                    var e;
                    return null != (e = o.useContext(a)) ? e : l
                },
                d = e => o.useContext(a) ? o.createElement(o.Fragment, null, e.children) : o.createElement(m, { ...e
                }),
                u = ["light", "dark"],
                m = e => {
                    let {
                        forcedTheme: t,
                        disableTransitionOnChange: r = !1,
                        enableSystem: n = !0,
                        enableColorScheme: l = !0,
                        storageKey: c = "theme",
                        themes: d = u,
                        defaultTheme: m = n ? "system" : "light",
                        attribute: g = "data-theme",
                        value: y,
                        children: v,
                        nonce: w,
                        scriptProps: k
                    } = e, [x, S] = o.useState(() => p(c, m)), [C, j] = o.useState(() => "system" === x ? b() : x), E = y ? Object.values(y) : d, O = o.useCallback(e => {
                        let t = e;
                        if (!t) return;
                        "system" === e && n && (t = b());
                        let o = y ? y[t] : t,
                            i = r ? f(w) : null,
                            a = document.documentElement,
                            c = e => {
                                "class" === e ? (a.classList.remove(...E), o && a.classList.add(o)) : e.startsWith("data-") && (o ? a.setAttribute(e, o) : a.removeAttribute(e))
                            };
                        if (Array.isArray(g) ? g.forEach(c) : c(g), l) {
                            let e = s.includes(m) ? m : null,
                                r = s.includes(t) ? t : e;
                            a.style.colorScheme = r
                        }
                        null == i || i()
                    }, [w]), z = o.useCallback(e => {
                        let t = "function" == typeof e ? e(x) : e;
                        S(t);
                        try {
                            localStorage.setItem(c, t)
                        } catch (e) {}
                    }, [x]), T = o.useCallback(e => {
                        j(b(e)), "system" === x && n && !t && O("system")
                    }, [x, t]);
                    o.useEffect(() => {
                        let e = window.matchMedia(i);
                        return e.addListener(T), T(e), () => e.removeListener(T)
                    }, [T]), o.useEffect(() => {
                        let e = e => {
                            e.key === c && (e.newValue ? S(e.newValue) : z(m))
                        };
                        return window.addEventListener("storage", e), () => window.removeEventListener("storage", e)
                    }, [z]), o.useEffect(() => {
                        O(null != t ? t : x)
                    }, [t, x]);
                    let F = o.useMemo(() => ({
                        theme: x,
                        setTheme: z,
                        forcedTheme: t,
                        resolvedTheme: "system" === x ? C : x,
                        themes: n ? [...d, "system"] : d,
                        systemTheme: n ? C : void 0
                    }), [x, z, t, C, n, d]);
                    return o.createElement(a.Provider, {
                        value: F
                    }, o.createElement(h, {
                        forcedTheme: t,
                        storageKey: c,
                        attribute: g,
                        enableSystem: n,
                        enableColorScheme: l,
                        defaultTheme: m,
                        value: y,
                        themes: d,
                        nonce: w,
                        scriptProps: k
                    }), v)
                },
                h = o.memo(e => {
                    let {
                        forcedTheme: t,
                        storageKey: r,
                        attribute: s,
                        enableSystem: i,
                        enableColorScheme: a,
                        defaultTheme: l,
                        value: c,
                        themes: d,
                        nonce: u,
                        scriptProps: m
                    } = e, h = JSON.stringify([s, r, l, t, d, c, i, a]).slice(1, -1);
                    return o.createElement("script", { ...m,
                        suppressHydrationWarning: !0,
                        nonce: "",
                        dangerouslySetInnerHTML: {
                            __html: "(".concat(n.toString(), ")(").concat(h, ")")
                        }
                    })
                }),
                p = (e, t) => {
                    let r;
                    try {
                        r = localStorage.getItem(e) || void 0
                    } catch (e) {}
                    return r || t
                },
                f = e => {
                    let t = document.createElement("style");
                    return e && t.setAttribute("nonce", e), t.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), document.head.appendChild(t), () => {
                        window.getComputedStyle(document.body), setTimeout(() => {
                            document.head.removeChild(t)
                        }, 1)
                    }
                },
                b = e => (e || (e = window.matchMedia(i)), e.matches ? "dark" : "light")
        },
        2020: (e, t, r) => {
            r.d(t, {
                Cp: () => p,
                EN: () => h,
                Eh: () => c,
                F$: () => m,
                GU: () => j,
                MK: () => d,
                S$: () => o,
                ZM: () => C,
                ZZ: () => x,
                Zw: () => s,
                d2: () => l,
                f8: () => f,
                gn: () => i,
                hT: () => S,
                j3: () => a,
                lQ: () => n,
                nJ: () => u,
                pl: () => w,
                y9: () => k,
                yy: () => v
            });
            var o = "undefined" == typeof window || "Deno" in globalThis;

            function n() {}

            function s(e, t) {
                return "function" == typeof e ? e(t) : e
            }

            function i(e) {
                return "number" == typeof e && e >= 0 && e !== 1 / 0
            }

            function a(e, t) {
                return Math.max(e + (t || 0) - Date.now(), 0)
            }

            function l(e, t) {
                return "function" == typeof e ? e(t) : e
            }

            function c(e, t) {
                return "function" == typeof e ? e(t) : e
            }

            function d(e, t) {
                let {
                    type: r = "all",
                    exact: o,
                    fetchStatus: n,
                    predicate: s,
                    queryKey: i,
                    stale: a
                } = e;
                if (i) {
                    if (o) {
                        if (t.queryHash !== m(i, t.options)) return !1
                    } else if (!p(t.queryKey, i)) return !1
                }
                if ("all" !== r) {
                    let e = t.isActive();
                    if ("active" === r && !e || "inactive" === r && e) return !1
                }
                return ("boolean" != typeof a || t.isStale() === a) && (!n || n === t.state.fetchStatus) && (!s || !!s(t))
            }

            function u(e, t) {
                let {
                    exact: r,
                    status: o,
                    predicate: n,
                    mutationKey: s
                } = e;
                if (s) {
                    if (!t.options.mutationKey) return !1;
                    if (r) {
                        if (h(t.options.mutationKey) !== h(s)) return !1
                    } else if (!p(t.options.mutationKey, s)) return !1
                }
                return (!o || t.state.status === o) && (!n || !!n(t))
            }

            function m(e, t) {
                return (t ? .queryKeyHashFn || h)(e)
            }

            function h(e) {
                return JSON.stringify(e, (e, t) => g(t) ? Object.keys(t).sort().reduce((e, r) => (e[r] = t[r], e), {}) : t)
            }

            function p(e, t) {
                return e === t || typeof e == typeof t && !!e && !!t && "object" == typeof e && "object" == typeof t && Object.keys(t).every(r => p(e[r], t[r]))
            }

            function f(e, t) {
                if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
                for (let r in e)
                    if (e[r] !== t[r]) return !1;
                return !0
            }

            function b(e) {
                return Array.isArray(e) && e.length === Object.keys(e).length
            }

            function g(e) {
                if (!y(e)) return !1;
                let t = e.constructor;
                if (void 0 === t) return !0;
                let r = t.prototype;
                return !!y(r) && !!r.hasOwnProperty("isPrototypeOf") && Object.getPrototypeOf(e) === Object.prototype
            }

            function y(e) {
                return "[object Object]" === Object.prototype.toString.call(e)
            }

            function v(e) {
                return new Promise(t => {
                    setTimeout(t, e)
                })
            }

            function w(e, t, r) {
                return "function" == typeof r.structuralSharing ? r.structuralSharing(e, t) : !1 !== r.structuralSharing ? function e(t, r) {
                    if (t === r) return t;
                    let o = b(t) && b(r);
                    if (o || g(t) && g(r)) {
                        let n = o ? t : Object.keys(t),
                            s = n.length,
                            i = o ? r : Object.keys(r),
                            a = i.length,
                            l = o ? [] : {},
                            c = 0;
                        for (let s = 0; s < a; s++) {
                            let a = o ? s : i[s];
                            (!o && n.includes(a) || o) && void 0 === t[a] && void 0 === r[a] ? (l[a] = void 0, c++) : (l[a] = e(t[a], r[a]), l[a] === t[a] && void 0 !== t[a] && c++)
                        }
                        return s === a && c === s ? t : l
                    }
                    return r
                }(e, t) : t
            }

            function k(e, t, r = 0) {
                let o = [...e, t];
                return r && o.length > r ? o.slice(1) : o
            }

            function x(e, t, r = 0) {
                let o = [t, ...e];
                return r && o.length > r ? o.slice(0, -1) : o
            }
            var S = Symbol();

            function C(e, t) {
                return !e.queryFn && t ? .initialPromise ? () => t.initialPromise : e.queryFn && e.queryFn !== S ? e.queryFn : () => Promise.reject(Error(`Missing queryFn: '${e.queryHash}'`))
            }

            function j(e, t) {
                return "function" == typeof e ? e(...t) : !!e
            }
        },
        2085: (e, t, r) => {
            r.d(t, {
                F: () => i
            });
            var o = r(2596);
            let n = e => "boolean" == typeof e ? `${e}` : 0 === e ? "0" : e,
                s = o.$,
                i = (e, t) => r => {
                    var o;
                    if ((null == t ? void 0 : t.variants) == null) return s(e, null == r ? void 0 : r.class, null == r ? void 0 : r.className);
                    let {
                        variants: i,
                        defaultVariants: a
                    } = t, l = Object.keys(i).map(e => {
                        let t = null == r ? void 0 : r[e],
                            o = null == a ? void 0 : a[e];
                        if (null === t) return null;
                        let s = n(t) || n(o);
                        return i[e][s]
                    }), c = r && Object.entries(r).reduce((e, t) => {
                        let [r, o] = t;
                        return void 0 === o || (e[r] = o), e
                    }, {});
                    return s(e, l, null == t || null == (o = t.compoundVariants) ? void 0 : o.reduce((e, t) => {
                        let {
                            class: r,
                            className: o,
                            ...n
                        } = t;
                        return Object.entries(n).every(e => {
                            let [t, r] = e;
                            return Array.isArray(r) ? r.includes({ ...a,
                                ...c
                            }[t]) : ({ ...a,
                                ...c
                            })[t] === r
                        }) ? [...e, r, o] : e
                    }, []), null == r ? void 0 : r.class, null == r ? void 0 : r.className)
                }
        },
        2596: (e, t, r) => {
            r.d(t, {
                $: () => o
            });

            function o() {
                for (var e, t, r = 0, o = "", n = arguments.length; r < n; r++)(e = arguments[r]) && (t = function e(t) {
                    var r, o, n = "";
                    if ("string" == typeof t || "number" == typeof t) n += t;
                    else if ("object" == typeof t)
                        if (Array.isArray(t)) {
                            var s = t.length;
                            for (r = 0; r < s; r++) t[r] && (o = e(t[r])) && (n && (n += " "), n += o)
                        } else
                            for (o in t) t[o] && (n && (n += " "), n += o);
                    return n
                }(e)) && (o && (o += " "), o += t);
                return o
            }
        },
        3504: (e, t, r) => {
            r.d(t, {
                T: () => o
            });

            function o() {
                let e, t, r = new Promise((r, o) => {
                    e = r, t = o
                });

                function o(e) {
                    Object.assign(r, e), delete r.resolve, delete r.reject
                }
                return r.status = "pending", r.catch(() => {}), r.resolve = t => {
                    o({
                        status: "fulfilled",
                        value: t
                    }), e(t)
                }, r.reject = e => {
                    o({
                        status: "rejected",
                        reason: e
                    }), t(e)
                }, r
            }
        },
        5910: (e, t, r) => {
            r.d(t, {
                Q: () => o
            });
            var o = class {
                constructor() {
                    this.listeners = new Set, this.subscribe = this.subscribe.bind(this)
                }
                subscribe(e) {
                    return this.listeners.add(e), this.onSubscribe(), () => {
                        this.listeners.delete(e), this.onUnsubscribe()
                    }
                }
                hasListeners() {
                    return this.listeners.size > 0
                }
                onSubscribe() {}
                onUnsubscribe() {}
            }
        },
        6101: (e, t, r) => {
            r.d(t, {
                s: () => i,
                t: () => s
            });
            var o = r(2115);

            function n(e, t) {
                if ("function" == typeof e) return e(t);
                null != e && (e.current = t)
            }

            function s(...e) {
                return t => {
                    let r = !1,
                        o = e.map(e => {
                            let o = n(e, t);
                            return r || "function" != typeof o || (r = !0), o
                        });
                    if (r) return () => {
                        for (let t = 0; t < o.length; t++) {
                            let r = o[t];
                            "function" == typeof r ? r() : n(e[t], null)
                        }
                    }
                }
            }

            function i(...e) {
                return o.useCallback(s(...e), e)
            }
        },
        6654: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "useMergedRef", {
                enumerable: !0,
                get: function() {
                    return n
                }
            });
            let o = r(2115);

            function n(e, t) {
                let r = (0, o.useRef)(null),
                    n = (0, o.useRef)(null);
                return (0, o.useCallback)(o => {
                    if (null === o) {
                        let e = r.current;
                        e && (r.current = null, e());
                        let t = n.current;
                        t && (n.current = null, t())
                    } else e && (r.current = s(e, o)), t && (n.current = s(t, o))
                }, [e, t])
            }

            function s(e, t) {
                if ("function" != typeof e) return e.current = t, () => {
                    e.current = null
                }; {
                    let r = e(t);
                    return "function" == typeof r ? r : () => e(null)
                }
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        6715: (e, t, r) => {
            r.d(t, {
                Ht: () => a,
                jE: () => i
            });
            var o = r(2115),
                n = r(5155),
                s = o.createContext(void 0),
                i = e => {
                    let t = o.useContext(s);
                    if (e) return e;
                    if (!t) throw Error("No QueryClient set, use QueryClientProvider to set one");
                    return t
                },
                a = e => {
                    let {
                        client: t,
                        children: r
                    } = e;
                    return o.useEffect(() => (t.mount(), () => {
                        t.unmount()
                    }), [t]), (0, n.jsx)(s.Provider, {
                        value: t,
                        children: r
                    })
                }
        },
        6784: (e, t, r) => {
            r.d(t, {
                II: () => u,
                v_: () => l,
                wm: () => d
            });
            var o = r(920),
                n = r(1239),
                s = r(3504),
                i = r(2020);

            function a(e) {
                return Math.min(1e3 * 2 ** e, 3e4)
            }

            function l(e) {
                return (e ? ? "online") !== "online" || n.t.isOnline()
            }
            var c = class extends Error {
                constructor(e) {
                    super("CancelledError"), this.revert = e ? .revert, this.silent = e ? .silent
                }
            };

            function d(e) {
                return e instanceof c
            }

            function u(e) {
                let t, r = !1,
                    d = 0,
                    u = !1,
                    m = (0, s.T)(),
                    h = () => o.m.isFocused() && ("always" === e.networkMode || n.t.isOnline()) && e.canRun(),
                    p = () => l(e.networkMode) && e.canRun(),
                    f = r => {
                        u || (u = !0, e.onSuccess ? .(r), t ? .(), m.resolve(r))
                    },
                    b = r => {
                        u || (u = !0, e.onError ? .(r), t ? .(), m.reject(r))
                    },
                    g = () => new Promise(r => {
                        t = e => {
                            (u || h()) && r(e)
                        }, e.onPause ? .()
                    }).then(() => {
                        t = void 0, u || e.onContinue ? .()
                    }),
                    y = () => {
                        let t;
                        if (u) return;
                        let o = 0 === d ? e.initialPromise : void 0;
                        try {
                            t = o ? ? e.fn()
                        } catch (e) {
                            t = Promise.reject(e)
                        }
                        Promise.resolve(t).then(f).catch(t => {
                            if (u) return;
                            let o = e.retry ? ? 3 * !i.S$,
                                n = e.retryDelay ? ? a,
                                s = "function" == typeof n ? n(d, t) : n,
                                l = !0 === o || "number" == typeof o && d < o || "function" == typeof o && o(d, t);
                            if (r || !l) return void b(t);
                            d++, e.onFail ? .(d, t), (0, i.yy)(s).then(() => h() ? void 0 : g()).then(() => {
                                r ? b(t) : y()
                            })
                        })
                    };
                return {
                    promise: m,
                    cancel: t => {
                        u || (b(new c(t)), e.abort ? .())
                    },
                    continue: () => (t ? .(), m),
                    cancelRetry: () => {
                        r = !0
                    },
                    continueRetry: () => {
                        r = !1
                    },
                    canStart: p,
                    start: () => (p() ? y() : g().then(y), m)
                }
            }
        },
        7165: (e, t, r) => {
            r.d(t, {
                jG: () => n
            });
            var o = e => setTimeout(e, 0),
                n = function() {
                    let e = [],
                        t = 0,
                        r = e => {
                            e()
                        },
                        n = e => {
                            e()
                        },
                        s = o,
                        i = o => {
                            t ? e.push(o) : s(() => {
                                r(o)
                            })
                        },
                        a = () => {
                            let t = e;
                            e = [], t.length && s(() => {
                                n(() => {
                                    t.forEach(e => {
                                        r(e)
                                    })
                                })
                            })
                        };
                    return {
                        batch: e => {
                            let r;
                            t++;
                            try {
                                r = e()
                            } finally {
                                --t || a()
                            }
                            return r
                        },
                        batchCalls: e => (...t) => {
                            i(() => {
                                e(...t)
                            })
                        },
                        schedule: i,
                        setNotifyFunction: e => {
                            r = e
                        },
                        setBatchNotifyFunction: e => {
                            n = e
                        },
                        setScheduler: e => {
                            s = e
                        }
                    }
                }()
        },
        7948: (e, t, r) => {
            r.d(t, {
                k: () => n
            });
            var o = r(2020),
                n = class {#
                    n;
                    destroy() {
                        this.clearGcTimeout()
                    }
                    scheduleGc() {
                        this.clearGcTimeout(), (0, o.gn)(this.gcTime) && (this.#n = setTimeout(() => {
                            this.optionalRemove()
                        }, this.gcTime))
                    }
                    updateGcTime(e) {
                        this.gcTime = Math.max(this.gcTime || 0, e ? ? (o.S$ ? 1 / 0 : 3e5))
                    }
                    clearGcTimeout() {
                        this.#n && (clearTimeout(this.#n), this.#n = void 0)
                    }
                }
        },
        9688: (e, t, r) => {
            r.d(t, {
                QP: () => ec
            });
            let o = e => {
                    let t = a(e),
                        {
                            conflictingClassGroups: r,
                            conflictingClassGroupModifiers: o
                        } = e;
                    return {
                        getClassGroupId: e => {
                            let r = e.split("-");
                            return "" === r[0] && 1 !== r.length && r.shift(), n(r, t) || i(e)
                        },
                        getConflictingClassGroupIds: (e, t) => {
                            let n = r[e] || [];
                            return t && o[e] ? [...n, ...o[e]] : n
                        }
                    }
                },
                n = (e, t) => {
                    if (0 === e.length) return t.classGroupId;
                    let r = e[0],
                        o = t.nextPart.get(r),
                        s = o ? n(e.slice(1), o) : void 0;
                    if (s) return s;
                    if (0 === t.validators.length) return;
                    let i = e.join("-");
                    return t.validators.find(({
                        validator: e
                    }) => e(i)) ? .classGroupId
                },
                s = /^\[(.+)\]$/,
                i = e => {
                    if (s.test(e)) {
                        let t = s.exec(e)[1],
                            r = t ? .substring(0, t.indexOf(":"));
                        if (r) return "arbitrary.." + r
                    }
                },
                a = e => {
                    let {
                        theme: t,
                        classGroups: r
                    } = e, o = {
                        nextPart: new Map,
                        validators: []
                    };
                    for (let e in r) l(r[e], o, e, t);
                    return o
                },
                l = (e, t, r, o) => {
                    e.forEach(e => {
                        if ("string" == typeof e) {
                            ("" === e ? t : c(t, e)).classGroupId = r;
                            return
                        }
                        if ("function" == typeof e) return d(e) ? void l(e(o), t, r, o) : void t.validators.push({
                            validator: e,
                            classGroupId: r
                        });
                        Object.entries(e).forEach(([e, n]) => {
                            l(n, c(t, e), r, o)
                        })
                    })
                },
                c = (e, t) => {
                    let r = e;
                    return t.split("-").forEach(e => {
                        r.nextPart.has(e) || r.nextPart.set(e, {
                            nextPart: new Map,
                            validators: []
                        }), r = r.nextPart.get(e)
                    }), r
                },
                d = e => e.isThemeGetter,
                u = e => {
                    if (e < 1) return {
                        get: () => void 0,
                        set: () => {}
                    };
                    let t = 0,
                        r = new Map,
                        o = new Map,
                        n = (n, s) => {
                            r.set(n, s), ++t > e && (t = 0, o = r, r = new Map)
                        };
                    return {
                        get(e) {
                            let t = r.get(e);
                            return void 0 !== t ? t : void 0 !== (t = o.get(e)) ? (n(e, t), t) : void 0
                        },
                        set(e, t) {
                            r.has(e) ? r.set(e, t) : n(e, t)
                        }
                    }
                },
                m = e => {
                    let {
                        prefix: t,
                        experimentalParseClassName: r
                    } = e, o = e => {
                        let t, r = [],
                            o = 0,
                            n = 0,
                            s = 0;
                        for (let i = 0; i < e.length; i++) {
                            let a = e[i];
                            if (0 === o && 0 === n) {
                                if (":" === a) {
                                    r.push(e.slice(s, i)), s = i + 1;
                                    continue
                                }
                                if ("/" === a) {
                                    t = i;
                                    continue
                                }
                            }
                            "[" === a ? o++ : "]" === a ? o-- : "(" === a ? n++ : ")" === a && n--
                        }
                        let i = 0 === r.length ? e : e.substring(s),
                            a = h(i);
                        return {
                            modifiers: r,
                            hasImportantModifier: a !== i,
                            baseClassName: a,
                            maybePostfixModifierPosition: t && t > s ? t - s : void 0
                        }
                    };
                    if (t) {
                        let e = t + ":",
                            r = o;
                        o = t => t.startsWith(e) ? r(t.substring(e.length)) : {
                            isExternal: !0,
                            modifiers: [],
                            hasImportantModifier: !1,
                            baseClassName: t,
                            maybePostfixModifierPosition: void 0
                        }
                    }
                    if (r) {
                        let e = o;
                        o = t => r({
                            className: t,
                            parseClassName: e
                        })
                    }
                    return o
                },
                h = e => e.endsWith("!") ? e.substring(0, e.length - 1) : e.startsWith("!") ? e.substring(1) : e,
                p = e => {
                    let t = Object.fromEntries(e.orderSensitiveModifiers.map(e => [e, !0]));
                    return e => {
                        if (e.length <= 1) return e;
                        let r = [],
                            o = [];
                        return e.forEach(e => {
                            "[" === e[0] || t[e] ? (r.push(...o.sort(), e), o = []) : o.push(e)
                        }), r.push(...o.sort()), r
                    }
                },
                f = e => ({
                    cache: u(e.cacheSize),
                    parseClassName: m(e),
                    sortModifiers: p(e),
                    ...o(e)
                }),
                b = /\s+/,
                g = (e, t) => {
                    let {
                        parseClassName: r,
                        getClassGroupId: o,
                        getConflictingClassGroupIds: n,
                        sortModifiers: s
                    } = t, i = [], a = e.trim().split(b), l = "";
                    for (let e = a.length - 1; e >= 0; e -= 1) {
                        let t = a[e],
                            {
                                isExternal: c,
                                modifiers: d,
                                hasImportantModifier: u,
                                baseClassName: m,
                                maybePostfixModifierPosition: h
                            } = r(t);
                        if (c) {
                            l = t + (l.length > 0 ? " " + l : l);
                            continue
                        }
                        let p = !!h,
                            f = o(p ? m.substring(0, h) : m);
                        if (!f) {
                            if (!p || !(f = o(m))) {
                                l = t + (l.length > 0 ? " " + l : l);
                                continue
                            }
                            p = !1
                        }
                        let b = s(d).join(":"),
                            g = u ? b + "!" : b,
                            y = g + f;
                        if (i.includes(y)) continue;
                        i.push(y);
                        let v = n(f, p);
                        for (let e = 0; e < v.length; ++e) {
                            let t = v[e];
                            i.push(g + t)
                        }
                        l = t + (l.length > 0 ? " " + l : l)
                    }
                    return l
                };

            function y() {
                let e, t, r = 0,
                    o = "";
                for (; r < arguments.length;)(e = arguments[r++]) && (t = v(e)) && (o && (o += " "), o += t);
                return o
            }
            let v = e => {
                    let t;
                    if ("string" == typeof e) return e;
                    let r = "";
                    for (let o = 0; o < e.length; o++) e[o] && (t = v(e[o])) && (r && (r += " "), r += t);
                    return r
                },
                w = e => {
                    let t = t => t[e] || [];
                    return t.isThemeGetter = !0, t
                },
                k = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
                x = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
                S = /^\d+\/\d+$/,
                C = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
                j = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
                E = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
                O = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
                z = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
                T = e => S.test(e),
                F = e => !!e && !Number.isNaN(Number(e)),
                A = e => !!e && Number.isInteger(Number(e)),
                P = e => e.endsWith("%") && F(e.slice(0, -1)),
                M = e => C.test(e),
                R = () => !0,
                N = e => j.test(e) && !E.test(e),
                L = () => !1,
                q = e => O.test(e),
                U = e => z.test(e),
                G = e => !D(e) && !H(e),
                I = e => ee(e, en, L),
                D = e => k.test(e),
                $ = e => ee(e, es, N),
                _ = e => ee(e, ei, F),
                K = e => ee(e, er, L),
                W = e => ee(e, eo, U),
                Q = e => ee(e, el, q),
                H = e => x.test(e),
                V = e => et(e, es),
                Z = e => et(e, ea),
                B = e => et(e, er),
                J = e => et(e, en),
                X = e => et(e, eo),
                Y = e => et(e, el, !0),
                ee = (e, t, r) => {
                    let o = k.exec(e);
                    return !!o && (o[1] ? t(o[1]) : r(o[2]))
                },
                et = (e, t, r = !1) => {
                    let o = x.exec(e);
                    return !!o && (o[1] ? t(o[1]) : r)
                },
                er = e => "position" === e || "percentage" === e,
                eo = e => "image" === e || "url" === e,
                en = e => "length" === e || "size" === e || "bg-size" === e,
                es = e => "length" === e,
                ei = e => "number" === e,
                ea = e => "family-name" === e,
                el = e => "shadow" === e;
            Symbol.toStringTag;
            let ec = function(e, ...t) {
                let r, o, n, s = function(a) {
                    return o = (r = f(t.reduce((e, t) => t(e), e()))).cache.get, n = r.cache.set, s = i, i(a)
                };

                function i(e) {
                    let t = o(e);
                    if (t) return t;
                    let s = g(e, r);
                    return n(e, s), s
                }
                return function() {
                    return s(y.apply(null, arguments))
                }
            }(() => {
                let e = w("color"),
                    t = w("font"),
                    r = w("text"),
                    o = w("font-weight"),
                    n = w("tracking"),
                    s = w("leading"),
                    i = w("breakpoint"),
                    a = w("container"),
                    l = w("spacing"),
                    c = w("radius"),
                    d = w("shadow"),
                    u = w("inset-shadow"),
                    m = w("text-shadow"),
                    h = w("drop-shadow"),
                    p = w("blur"),
                    f = w("perspective"),
                    b = w("aspect"),
                    g = w("ease"),
                    y = w("animate"),
                    v = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
                    k = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"],
                    x = () => [...k(), H, D],
                    S = () => ["auto", "hidden", "clip", "visible", "scroll"],
                    C = () => ["auto", "contain", "none"],
                    j = () => [H, D, l],
                    E = () => [T, "full", "auto", ...j()],
                    O = () => [A, "none", "subgrid", H, D],
                    z = () => ["auto", {
                        span: ["full", A, H, D]
                    }, A, H, D],
                    N = () => [A, "auto", H, D],
                    L = () => ["auto", "min", "max", "fr", H, D],
                    q = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"],
                    U = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"],
                    ee = () => ["auto", ...j()],
                    et = () => [T, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...j()],
                    er = () => [e, H, D],
                    eo = () => [...k(), B, K, {
                        position: [H, D]
                    }],
                    en = () => ["no-repeat", {
                        repeat: ["", "x", "y", "space", "round"]
                    }],
                    es = () => ["auto", "cover", "contain", J, I, {
                        size: [H, D]
                    }],
                    ei = () => [P, V, $],
                    ea = () => ["", "none", "full", c, H, D],
                    el = () => ["", F, V, $],
                    ec = () => ["solid", "dashed", "dotted", "double"],
                    ed = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
                    eu = () => [F, P, B, K],
                    em = () => ["", "none", p, H, D],
                    eh = () => ["none", F, H, D],
                    ep = () => ["none", F, H, D],
                    ef = () => [F, H, D],
                    eb = () => [T, "full", ...j()];
                return {
                    cacheSize: 500,
                    theme: {
                        animate: ["spin", "ping", "pulse", "bounce"],
                        aspect: ["video"],
                        blur: [M],
                        breakpoint: [M],
                        color: [R],
                        container: [M],
                        "drop-shadow": [M],
                        ease: ["in", "out", "in-out"],
                        font: [G],
                        "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
                        "inset-shadow": [M],
                        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
                        perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
                        radius: [M],
                        shadow: [M],
                        spacing: ["px", F],
                        text: [M],
                        "text-shadow": [M],
                        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
                    },
                    classGroups: {
                        aspect: [{
                            aspect: ["auto", "square", T, D, H, b]
                        }],
                        container: ["container"],
                        columns: [{
                            columns: [F, D, H, a]
                        }],
                        "break-after": [{
                            "break-after": v()
                        }],
                        "break-before": [{
                            "break-before": v()
                        }],
                        "break-inside": [{
                            "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                        }],
                        "box-decoration": [{
                            "box-decoration": ["slice", "clone"]
                        }],
                        box: [{
                            box: ["border", "content"]
                        }],
                        display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                        sr: ["sr-only", "not-sr-only"],
                        float: [{
                            float: ["right", "left", "none", "start", "end"]
                        }],
                        clear: [{
                            clear: ["left", "right", "both", "none", "start", "end"]
                        }],
                        isolation: ["isolate", "isolation-auto"],
                        "object-fit": [{
                            object: ["contain", "cover", "fill", "none", "scale-down"]
                        }],
                        "object-position": [{
                            object: x()
                        }],
                        overflow: [{
                            overflow: S()
                        }],
                        "overflow-x": [{
                            "overflow-x": S()
                        }],
                        "overflow-y": [{
                            "overflow-y": S()
                        }],
                        overscroll: [{
                            overscroll: C()
                        }],
                        "overscroll-x": [{
                            "overscroll-x": C()
                        }],
                        "overscroll-y": [{
                            "overscroll-y": C()
                        }],
                        position: ["static", "fixed", "absolute", "relative", "sticky"],
                        inset: [{
                            inset: E()
                        }],
                        "inset-x": [{
                            "inset-x": E()
                        }],
                        "inset-y": [{
                            "inset-y": E()
                        }],
                        start: [{
                            start: E()
                        }],
                        end: [{
                            end: E()
                        }],
                        top: [{
                            top: E()
                        }],
                        right: [{
                            right: E()
                        }],
                        bottom: [{
                            bottom: E()
                        }],
                        left: [{
                            left: E()
                        }],
                        visibility: ["visible", "invisible", "collapse"],
                        z: [{
                            z: [A, "auto", H, D]
                        }],
                        basis: [{
                            basis: [T, "full", "auto", a, ...j()]
                        }],
                        "flex-direction": [{
                            flex: ["row", "row-reverse", "col", "col-reverse"]
                        }],
                        "flex-wrap": [{
                            flex: ["nowrap", "wrap", "wrap-reverse"]
                        }],
                        flex: [{
                            flex: [F, T, "auto", "initial", "none", D]
                        }],
                        grow: [{
                            grow: ["", F, H, D]
                        }],
                        shrink: [{
                            shrink: ["", F, H, D]
                        }],
                        order: [{
                            order: [A, "first", "last", "none", H, D]
                        }],
                        "grid-cols": [{
                            "grid-cols": O()
                        }],
                        "col-start-end": [{
                            col: z()
                        }],
                        "col-start": [{
                            "col-start": N()
                        }],
                        "col-end": [{
                            "col-end": N()
                        }],
                        "grid-rows": [{
                            "grid-rows": O()
                        }],
                        "row-start-end": [{
                            row: z()
                        }],
                        "row-start": [{
                            "row-start": N()
                        }],
                        "row-end": [{
                            "row-end": N()
                        }],
                        "grid-flow": [{
                            "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                        }],
                        "auto-cols": [{
                            "auto-cols": L()
                        }],
                        "auto-rows": [{
                            "auto-rows": L()
                        }],
                        gap: [{
                            gap: j()
                        }],
                        "gap-x": [{
                            "gap-x": j()
                        }],
                        "gap-y": [{
                            "gap-y": j()
                        }],
                        "justify-content": [{
                            justify: [...q(), "normal"]
                        }],
                        "justify-items": [{
                            "justify-items": [...U(), "normal"]
                        }],
                        "justify-self": [{
                            "justify-self": ["auto", ...U()]
                        }],
                        "align-content": [{
                            content: ["normal", ...q()]
                        }],
                        "align-items": [{
                            items: [...U(), {
                                baseline: ["", "last"]
                            }]
                        }],
                        "align-self": [{
                            self: ["auto", ...U(), {
                                baseline: ["", "last"]
                            }]
                        }],
                        "place-content": [{
                            "place-content": q()
                        }],
                        "place-items": [{
                            "place-items": [...U(), "baseline"]
                        }],
                        "place-self": [{
                            "place-self": ["auto", ...U()]
                        }],
                        p: [{
                            p: j()
                        }],
                        px: [{
                            px: j()
                        }],
                        py: [{
                            py: j()
                        }],
                        ps: [{
                            ps: j()
                        }],
                        pe: [{
                            pe: j()
                        }],
                        pt: [{
                            pt: j()
                        }],
                        pr: [{
                            pr: j()
                        }],
                        pb: [{
                            pb: j()
                        }],
                        pl: [{
                            pl: j()
                        }],
                        m: [{
                            m: ee()
                        }],
                        mx: [{
                            mx: ee()
                        }],
                        my: [{
                            my: ee()
                        }],
                        ms: [{
                            ms: ee()
                        }],
                        me: [{
                            me: ee()
                        }],
                        mt: [{
                            mt: ee()
                        }],
                        mr: [{
                            mr: ee()
                        }],
                        mb: [{
                            mb: ee()
                        }],
                        ml: [{
                            ml: ee()
                        }],
                        "space-x": [{
                            "space-x": j()
                        }],
                        "space-x-reverse": ["space-x-reverse"],
                        "space-y": [{
                            "space-y": j()
                        }],
                        "space-y-reverse": ["space-y-reverse"],
                        size: [{
                            size: et()
                        }],
                        w: [{
                            w: [a, "screen", ...et()]
                        }],
                        "min-w": [{
                            "min-w": [a, "screen", "none", ...et()]
                        }],
                        "max-w": [{
                            "max-w": [a, "screen", "none", "prose", {
                                screen: [i]
                            }, ...et()]
                        }],
                        h: [{
                            h: ["screen", "lh", ...et()]
                        }],
                        "min-h": [{
                            "min-h": ["screen", "lh", "none", ...et()]
                        }],
                        "max-h": [{
                            "max-h": ["screen", "lh", ...et()]
                        }],
                        "font-size": [{
                            text: ["base", r, V, $]
                        }],
                        "font-smoothing": ["antialiased", "subpixel-antialiased"],
                        "font-style": ["italic", "not-italic"],
                        "font-weight": [{
                            font: [o, H, _]
                        }],
                        "font-stretch": [{
                            "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", P, D]
                        }],
                        "font-family": [{
                            font: [Z, D, t]
                        }],
                        "fvn-normal": ["normal-nums"],
                        "fvn-ordinal": ["ordinal"],
                        "fvn-slashed-zero": ["slashed-zero"],
                        "fvn-figure": ["lining-nums", "oldstyle-nums"],
                        "fvn-spacing": ["proportional-nums", "tabular-nums"],
                        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                        tracking: [{
                            tracking: [n, H, D]
                        }],
                        "line-clamp": [{
                            "line-clamp": [F, "none", H, _]
                        }],
                        leading: [{
                            leading: [s, ...j()]
                        }],
                        "list-image": [{
                            "list-image": ["none", H, D]
                        }],
                        "list-style-position": [{
                            list: ["inside", "outside"]
                        }],
                        "list-style-type": [{
                            list: ["disc", "decimal", "none", H, D]
                        }],
                        "text-alignment": [{
                            text: ["left", "center", "right", "justify", "start", "end"]
                        }],
                        "placeholder-color": [{
                            placeholder: er()
                        }],
                        "text-color": [{
                            text: er()
                        }],
                        "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                        "text-decoration-style": [{
                            decoration: [...ec(), "wavy"]
                        }],
                        "text-decoration-thickness": [{
                            decoration: [F, "from-font", "auto", H, $]
                        }],
                        "text-decoration-color": [{
                            decoration: er()
                        }],
                        "underline-offset": [{
                            "underline-offset": [F, "auto", H, D]
                        }],
                        "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                        "text-wrap": [{
                            text: ["wrap", "nowrap", "balance", "pretty"]
                        }],
                        indent: [{
                            indent: j()
                        }],
                        "vertical-align": [{
                            align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", H, D]
                        }],
                        whitespace: [{
                            whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                        }],
                        break: [{
                            break: ["normal", "words", "all", "keep"]
                        }],
                        wrap: [{
                            wrap: ["break-word", "anywhere", "normal"]
                        }],
                        hyphens: [{
                            hyphens: ["none", "manual", "auto"]
                        }],
                        content: [{
                            content: ["none", H, D]
                        }],
                        "bg-attachment": [{
                            bg: ["fixed", "local", "scroll"]
                        }],
                        "bg-clip": [{
                            "bg-clip": ["border", "padding", "content", "text"]
                        }],
                        "bg-origin": [{
                            "bg-origin": ["border", "padding", "content"]
                        }],
                        "bg-position": [{
                            bg: eo()
                        }],
                        "bg-repeat": [{
                            bg: en()
                        }],
                        "bg-size": [{
                            bg: es()
                        }],
                        "bg-image": [{
                            bg: ["none", {
                                linear: [{
                                    to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                                }, A, H, D],
                                radial: ["", H, D],
                                conic: [A, H, D]
                            }, X, W]
                        }],
                        "bg-color": [{
                            bg: er()
                        }],
                        "gradient-from-pos": [{
                            from: ei()
                        }],
                        "gradient-via-pos": [{
                            via: ei()
                        }],
                        "gradient-to-pos": [{
                            to: ei()
                        }],
                        "gradient-from": [{
                            from: er()
                        }],
                        "gradient-via": [{
                            via: er()
                        }],
                        "gradient-to": [{
                            to: er()
                        }],
                        rounded: [{
                            rounded: ea()
                        }],
                        "rounded-s": [{
                            "rounded-s": ea()
                        }],
                        "rounded-e": [{
                            "rounded-e": ea()
                        }],
                        "rounded-t": [{
                            "rounded-t": ea()
                        }],
                        "rounded-r": [{
                            "rounded-r": ea()
                        }],
                        "rounded-b": [{
                            "rounded-b": ea()
                        }],
                        "rounded-l": [{
                            "rounded-l": ea()
                        }],
                        "rounded-ss": [{
                            "rounded-ss": ea()
                        }],
                        "rounded-se": [{
                            "rounded-se": ea()
                        }],
                        "rounded-ee": [{
                            "rounded-ee": ea()
                        }],
                        "rounded-es": [{
                            "rounded-es": ea()
                        }],
                        "rounded-tl": [{
                            "rounded-tl": ea()
                        }],
                        "rounded-tr": [{
                            "rounded-tr": ea()
                        }],
                        "rounded-br": [{
                            "rounded-br": ea()
                        }],
                        "rounded-bl": [{
                            "rounded-bl": ea()
                        }],
                        "border-w": [{
                            border: el()
                        }],
                        "border-w-x": [{
                            "border-x": el()
                        }],
                        "border-w-y": [{
                            "border-y": el()
                        }],
                        "border-w-s": [{
                            "border-s": el()
                        }],
                        "border-w-e": [{
                            "border-e": el()
                        }],
                        "border-w-t": [{
                            "border-t": el()
                        }],
                        "border-w-r": [{
                            "border-r": el()
                        }],
                        "border-w-b": [{
                            "border-b": el()
                        }],
                        "border-w-l": [{
                            "border-l": el()
                        }],
                        "divide-x": [{
                            "divide-x": el()
                        }],
                        "divide-x-reverse": ["divide-x-reverse"],
                        "divide-y": [{
                            "divide-y": el()
                        }],
                        "divide-y-reverse": ["divide-y-reverse"],
                        "border-style": [{
                            border: [...ec(), "hidden", "none"]
                        }],
                        "divide-style": [{
                            divide: [...ec(), "hidden", "none"]
                        }],
                        "border-color": [{
                            border: er()
                        }],
                        "border-color-x": [{
                            "border-x": er()
                        }],
                        "border-color-y": [{
                            "border-y": er()
                        }],
                        "border-color-s": [{
                            "border-s": er()
                        }],
                        "border-color-e": [{
                            "border-e": er()
                        }],
                        "border-color-t": [{
                            "border-t": er()
                        }],
                        "border-color-r": [{
                            "border-r": er()
                        }],
                        "border-color-b": [{
                            "border-b": er()
                        }],
                        "border-color-l": [{
                            "border-l": er()
                        }],
                        "divide-color": [{
                            divide: er()
                        }],
                        "outline-style": [{
                            outline: [...ec(), "none", "hidden"]
                        }],
                        "outline-offset": [{
                            "outline-offset": [F, H, D]
                        }],
                        "outline-w": [{
                            outline: ["", F, V, $]
                        }],
                        "outline-color": [{
                            outline: er()
                        }],
                        shadow: [{
                            shadow: ["", "none", d, Y, Q]
                        }],
                        "shadow-color": [{
                            shadow: er()
                        }],
                        "inset-shadow": [{
                            "inset-shadow": ["none", u, Y, Q]
                        }],
                        "inset-shadow-color": [{
                            "inset-shadow": er()
                        }],
                        "ring-w": [{
                            ring: el()
                        }],
                        "ring-w-inset": ["ring-inset"],
                        "ring-color": [{
                            ring: er()
                        }],
                        "ring-offset-w": [{
                            "ring-offset": [F, $]
                        }],
                        "ring-offset-color": [{
                            "ring-offset": er()
                        }],
                        "inset-ring-w": [{
                            "inset-ring": el()
                        }],
                        "inset-ring-color": [{
                            "inset-ring": er()
                        }],
                        "text-shadow": [{
                            "text-shadow": ["none", m, Y, Q]
                        }],
                        "text-shadow-color": [{
                            "text-shadow": er()
                        }],
                        opacity: [{
                            opacity: [F, H, D]
                        }],
                        "mix-blend": [{
                            "mix-blend": [...ed(), "plus-darker", "plus-lighter"]
                        }],
                        "bg-blend": [{
                            "bg-blend": ed()
                        }],
                        "mask-clip": [{
                            "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
                        }, "mask-no-clip"],
                        "mask-composite": [{
                            mask: ["add", "subtract", "intersect", "exclude"]
                        }],
                        "mask-image-linear-pos": [{
                            "mask-linear": [F]
                        }],
                        "mask-image-linear-from-pos": [{
                            "mask-linear-from": eu()
                        }],
                        "mask-image-linear-to-pos": [{
                            "mask-linear-to": eu()
                        }],
                        "mask-image-linear-from-color": [{
                            "mask-linear-from": er()
                        }],
                        "mask-image-linear-to-color": [{
                            "mask-linear-to": er()
                        }],
                        "mask-image-t-from-pos": [{
                            "mask-t-from": eu()
                        }],
                        "mask-image-t-to-pos": [{
                            "mask-t-to": eu()
                        }],
                        "mask-image-t-from-color": [{
                            "mask-t-from": er()
                        }],
                        "mask-image-t-to-color": [{
                            "mask-t-to": er()
                        }],
                        "mask-image-r-from-pos": [{
                            "mask-r-from": eu()
                        }],
                        "mask-image-r-to-pos": [{
                            "mask-r-to": eu()
                        }],
                        "mask-image-r-from-color": [{
                            "mask-r-from": er()
                        }],
                        "mask-image-r-to-color": [{
                            "mask-r-to": er()
                        }],
                        "mask-image-b-from-pos": [{
                            "mask-b-from": eu()
                        }],
                        "mask-image-b-to-pos": [{
                            "mask-b-to": eu()
                        }],
                        "mask-image-b-from-color": [{
                            "mask-b-from": er()
                        }],
                        "mask-image-b-to-color": [{
                            "mask-b-to": er()
                        }],
                        "mask-image-l-from-pos": [{
                            "mask-l-from": eu()
                        }],
                        "mask-image-l-to-pos": [{
                            "mask-l-to": eu()
                        }],
                        "mask-image-l-from-color": [{
                            "mask-l-from": er()
                        }],
                        "mask-image-l-to-color": [{
                            "mask-l-to": er()
                        }],
                        "mask-image-x-from-pos": [{
                            "mask-x-from": eu()
                        }],
                        "mask-image-x-to-pos": [{
                            "mask-x-to": eu()
                        }],
                        "mask-image-x-from-color": [{
                            "mask-x-from": er()
                        }],
                        "mask-image-x-to-color": [{
                            "mask-x-to": er()
                        }],
                        "mask-image-y-from-pos": [{
                            "mask-y-from": eu()
                        }],
                        "mask-image-y-to-pos": [{
                            "mask-y-to": eu()
                        }],
                        "mask-image-y-from-color": [{
                            "mask-y-from": er()
                        }],
                        "mask-image-y-to-color": [{
                            "mask-y-to": er()
                        }],
                        "mask-image-radial": [{
                            "mask-radial": [H, D]
                        }],
                        "mask-image-radial-from-pos": [{
                            "mask-radial-from": eu()
                        }],
                        "mask-image-radial-to-pos": [{
                            "mask-radial-to": eu()
                        }],
                        "mask-image-radial-from-color": [{
                            "mask-radial-from": er()
                        }],
                        "mask-image-radial-to-color": [{
                            "mask-radial-to": er()
                        }],
                        "mask-image-radial-shape": [{
                            "mask-radial": ["circle", "ellipse"]
                        }],
                        "mask-image-radial-size": [{
                            "mask-radial": [{
                                closest: ["side", "corner"],
                                farthest: ["side", "corner"]
                            }]
                        }],
                        "mask-image-radial-pos": [{
                            "mask-radial-at": k()
                        }],
                        "mask-image-conic-pos": [{
                            "mask-conic": [F]
                        }],
                        "mask-image-conic-from-pos": [{
                            "mask-conic-from": eu()
                        }],
                        "mask-image-conic-to-pos": [{
                            "mask-conic-to": eu()
                        }],
                        "mask-image-conic-from-color": [{
                            "mask-conic-from": er()
                        }],
                        "mask-image-conic-to-color": [{
                            "mask-conic-to": er()
                        }],
                        "mask-mode": [{
                            mask: ["alpha", "luminance", "match"]
                        }],
                        "mask-origin": [{
                            "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
                        }],
                        "mask-position": [{
                            mask: eo()
                        }],
                        "mask-repeat": [{
                            mask: en()
                        }],
                        "mask-size": [{
                            mask: es()
                        }],
                        "mask-type": [{
                            "mask-type": ["alpha", "luminance"]
                        }],
                        "mask-image": [{
                            mask: ["none", H, D]
                        }],
                        filter: [{
                            filter: ["", "none", H, D]
                        }],
                        blur: [{
                            blur: em()
                        }],
                        brightness: [{
                            brightness: [F, H, D]
                        }],
                        contrast: [{
                            contrast: [F, H, D]
                        }],
                        "drop-shadow": [{
                            "drop-shadow": ["", "none", h, Y, Q]
                        }],
                        "drop-shadow-color": [{
                            "drop-shadow": er()
                        }],
                        grayscale: [{
                            grayscale: ["", F, H, D]
                        }],
                        "hue-rotate": [{
                            "hue-rotate": [F, H, D]
                        }],
                        invert: [{
                            invert: ["", F, H, D]
                        }],
                        saturate: [{
                            saturate: [F, H, D]
                        }],
                        sepia: [{
                            sepia: ["", F, H, D]
                        }],
                        "backdrop-filter": [{
                            "backdrop-filter": ["", "none", H, D]
                        }],
                        "backdrop-blur": [{
                            "backdrop-blur": em()
                        }],
                        "backdrop-brightness": [{
                            "backdrop-brightness": [F, H, D]
                        }],
                        "backdrop-contrast": [{
                            "backdrop-contrast": [F, H, D]
                        }],
                        "backdrop-grayscale": [{
                            "backdrop-grayscale": ["", F, H, D]
                        }],
                        "backdrop-hue-rotate": [{
                            "backdrop-hue-rotate": [F, H, D]
                        }],
                        "backdrop-invert": [{
                            "backdrop-invert": ["", F, H, D]
                        }],
                        "backdrop-opacity": [{
                            "backdrop-opacity": [F, H, D]
                        }],
                        "backdrop-saturate": [{
                            "backdrop-saturate": [F, H, D]
                        }],
                        "backdrop-sepia": [{
                            "backdrop-sepia": ["", F, H, D]
                        }],
                        "border-collapse": [{
                            border: ["collapse", "separate"]
                        }],
                        "border-spacing": [{
                            "border-spacing": j()
                        }],
                        "border-spacing-x": [{
                            "border-spacing-x": j()
                        }],
                        "border-spacing-y": [{
                            "border-spacing-y": j()
                        }],
                        "table-layout": [{
                            table: ["auto", "fixed"]
                        }],
                        caption: [{
                            caption: ["top", "bottom"]
                        }],
                        transition: [{
                            transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", H, D]
                        }],
                        "transition-behavior": [{
                            transition: ["normal", "discrete"]
                        }],
                        duration: [{
                            duration: [F, "initial", H, D]
                        }],
                        ease: [{
                            ease: ["linear", "initial", g, H, D]
                        }],
                        delay: [{
                            delay: [F, H, D]
                        }],
                        animate: [{
                            animate: ["none", y, H, D]
                        }],
                        backface: [{
                            backface: ["hidden", "visible"]
                        }],
                        perspective: [{
                            perspective: [f, H, D]
                        }],
                        "perspective-origin": [{
                            "perspective-origin": x()
                        }],
                        rotate: [{
                            rotate: eh()
                        }],
                        "rotate-x": [{
                            "rotate-x": eh()
                        }],
                        "rotate-y": [{
                            "rotate-y": eh()
                        }],
                        "rotate-z": [{
                            "rotate-z": eh()
                        }],
                        scale: [{
                            scale: ep()
                        }],
                        "scale-x": [{
                            "scale-x": ep()
                        }],
                        "scale-y": [{
                            "scale-y": ep()
                        }],
                        "scale-z": [{
                            "scale-z": ep()
                        }],
                        "scale-3d": ["scale-3d"],
                        skew: [{
                            skew: ef()
                        }],
                        "skew-x": [{
                            "skew-x": ef()
                        }],
                        "skew-y": [{
                            "skew-y": ef()
                        }],
                        transform: [{
                            transform: [H, D, "", "none", "gpu", "cpu"]
                        }],
                        "transform-origin": [{
                            origin: x()
                        }],
                        "transform-style": [{
                            transform: ["3d", "flat"]
                        }],
                        translate: [{
                            translate: eb()
                        }],
                        "translate-x": [{
                            "translate-x": eb()
                        }],
                        "translate-y": [{
                            "translate-y": eb()
                        }],
                        "translate-z": [{
                            "translate-z": eb()
                        }],
                        "translate-none": ["translate-none"],
                        accent: [{
                            accent: er()
                        }],
                        appearance: [{
                            appearance: ["none", "auto"]
                        }],
                        "caret-color": [{
                            caret: er()
                        }],
                        "color-scheme": [{
                            scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
                        }],
                        cursor: [{
                            cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", H, D]
                        }],
                        "field-sizing": [{
                            "field-sizing": ["fixed", "content"]
                        }],
                        "pointer-events": [{
                            "pointer-events": ["auto", "none"]
                        }],
                        resize: [{
                            resize: ["none", "", "y", "x"]
                        }],
                        "scroll-behavior": [{
                            scroll: ["auto", "smooth"]
                        }],
                        "scroll-m": [{
                            "scroll-m": j()
                        }],
                        "scroll-mx": [{
                            "scroll-mx": j()
                        }],
                        "scroll-my": [{
                            "scroll-my": j()
                        }],
                        "scroll-ms": [{
                            "scroll-ms": j()
                        }],
                        "scroll-me": [{
                            "scroll-me": j()
                        }],
                        "scroll-mt": [{
                            "scroll-mt": j()
                        }],
                        "scroll-mr": [{
                            "scroll-mr": j()
                        }],
                        "scroll-mb": [{
                            "scroll-mb": j()
                        }],
                        "scroll-ml": [{
                            "scroll-ml": j()
                        }],
                        "scroll-p": [{
                            "scroll-p": j()
                        }],
                        "scroll-px": [{
                            "scroll-px": j()
                        }],
                        "scroll-py": [{
                            "scroll-py": j()
                        }],
                        "scroll-ps": [{
                            "scroll-ps": j()
                        }],
                        "scroll-pe": [{
                            "scroll-pe": j()
                        }],
                        "scroll-pt": [{
                            "scroll-pt": j()
                        }],
                        "scroll-pr": [{
                            "scroll-pr": j()
                        }],
                        "scroll-pb": [{
                            "scroll-pb": j()
                        }],
                        "scroll-pl": [{
                            "scroll-pl": j()
                        }],
                        "snap-align": [{
                            snap: ["start", "end", "center", "align-none"]
                        }],
                        "snap-stop": [{
                            snap: ["normal", "always"]
                        }],
                        "snap-type": [{
                            snap: ["none", "x", "y", "both"]
                        }],
                        "snap-strictness": [{
                            snap: ["mandatory", "proximity"]
                        }],
                        touch: [{
                            touch: ["auto", "none", "manipulation"]
                        }],
                        "touch-x": [{
                            "touch-pan": ["x", "left", "right"]
                        }],
                        "touch-y": [{
                            "touch-pan": ["y", "up", "down"]
                        }],
                        "touch-pz": ["touch-pinch-zoom"],
                        select: [{
                            select: ["none", "text", "all", "auto"]
                        }],
                        "will-change": [{
                            "will-change": ["auto", "scroll", "contents", "transform", H, D]
                        }],
                        fill: [{
                            fill: ["none", ...er()]
                        }],
                        "stroke-w": [{
                            stroke: [F, V, $, _]
                        }],
                        stroke: [{
                            stroke: ["none", ...er()]
                        }],
                        "forced-color-adjust": [{
                            "forced-color-adjust": ["auto", "none"]
                        }]
                    },
                    conflictingClassGroups: {
                        overflow: ["overflow-x", "overflow-y"],
                        overscroll: ["overscroll-x", "overscroll-y"],
                        inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                        "inset-x": ["right", "left"],
                        "inset-y": ["top", "bottom"],
                        flex: ["basis", "grow", "shrink"],
                        gap: ["gap-x", "gap-y"],
                        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                        px: ["pr", "pl"],
                        py: ["pt", "pb"],
                        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                        mx: ["mr", "ml"],
                        my: ["mt", "mb"],
                        size: ["w", "h"],
                        "font-size": ["leading"],
                        "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                        "fvn-ordinal": ["fvn-normal"],
                        "fvn-slashed-zero": ["fvn-normal"],
                        "fvn-figure": ["fvn-normal"],
                        "fvn-spacing": ["fvn-normal"],
                        "fvn-fraction": ["fvn-normal"],
                        "line-clamp": ["display", "overflow"],
                        rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                        "rounded-s": ["rounded-ss", "rounded-es"],
                        "rounded-e": ["rounded-se", "rounded-ee"],
                        "rounded-t": ["rounded-tl", "rounded-tr"],
                        "rounded-r": ["rounded-tr", "rounded-br"],
                        "rounded-b": ["rounded-br", "rounded-bl"],
                        "rounded-l": ["rounded-tl", "rounded-bl"],
                        "border-spacing": ["border-spacing-x", "border-spacing-y"],
                        "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                        "border-w-x": ["border-w-r", "border-w-l"],
                        "border-w-y": ["border-w-t", "border-w-b"],
                        "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                        "border-color-x": ["border-color-r", "border-color-l"],
                        "border-color-y": ["border-color-t", "border-color-b"],
                        translate: ["translate-x", "translate-y", "translate-none"],
                        "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
                        "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                        "scroll-mx": ["scroll-mr", "scroll-ml"],
                        "scroll-my": ["scroll-mt", "scroll-mb"],
                        "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                        "scroll-px": ["scroll-pr", "scroll-pl"],
                        "scroll-py": ["scroll-pt", "scroll-pb"],
                        touch: ["touch-x", "touch-y", "touch-pz"],
                        "touch-x": ["touch"],
                        "touch-y": ["touch"],
                        "touch-pz": ["touch"]
                    },
                    conflictingClassGroupModifiers: {
                        "font-size": ["leading"]
                    },
                    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
                }
            })
        },
        9708: (e, t, r) => {
            r.d(t, {
                DX: () => a,
                TL: () => i
            });
            var o = r(2115),
                n = r(6101),
                s = r(5155);

            function i(e) {
                let t = function(e) {
                        let t = o.forwardRef((e, t) => {
                            var r, s, i;
                            let a, l, {
                                    children: c,
                                    ...d
                                } = e,
                                u = o.isValidElement(c) ? (l = (a = null == (s = Object.getOwnPropertyDescriptor((r = c).props, "ref")) ? void 0 : s.get) && "isReactWarning" in a && a.isReactWarning) ? r.ref : (l = (a = null == (i = Object.getOwnPropertyDescriptor(r, "ref")) ? void 0 : i.get) && "isReactWarning" in a && a.isReactWarning) ? r.props.ref : r.props.ref || r.ref : void 0,
                                m = (0, n.s)(u, t);
                            if (o.isValidElement(c)) {
                                let e = function(e, t) {
                                    let r = { ...t
                                    };
                                    for (let o in t) {
                                        let n = e[o],
                                            s = t[o];
                                        /^on[A-Z]/.test(o) ? n && s ? r[o] = function() {
                                            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                                            let o = s(...t);
                                            return n(...t), o
                                        } : n && (r[o] = n) : "style" === o ? r[o] = { ...n,
                                            ...s
                                        } : "className" === o && (r[o] = [n, s].filter(Boolean).join(" "))
                                    }
                                    return { ...e,
                                        ...r
                                    }
                                }(d, c.props);
                                return c.type !== o.Fragment && (e.ref = m), o.cloneElement(c, e)
                            }
                            return o.Children.count(c) > 1 ? o.Children.only(null) : null
                        });
                        return t.displayName = "".concat(e, ".SlotClone"), t
                    }(e),
                    r = o.forwardRef((e, r) => {
                        let {
                            children: n,
                            ...i
                        } = e, a = o.Children.toArray(n), l = a.find(c);
                        if (l) {
                            let e = l.props.children,
                                n = a.map(t => t !== l ? t : o.Children.count(e) > 1 ? o.Children.only(null) : o.isValidElement(e) ? e.props.children : null);
                            return (0, s.jsx)(t, { ...i,
                                ref: r,
                                children: o.isValidElement(e) ? o.cloneElement(e, void 0, n) : null
                            })
                        }
                        return (0, s.jsx)(t, { ...i,
                            ref: r,
                            children: n
                        })
                    });
                return r.displayName = "".concat(e, ".Slot"), r
            }
            var a = i("Slot"),
                l = Symbol("radix.slottable");

            function c(e) {
                return o.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === l
            }
        },
        9853: (e, t, r) => {
            r.d(t, {
                X: () => a,
                k: () => l
            });
            var o = r(2020),
                n = r(7165),
                s = r(6784),
                i = r(7948),
                a = class extends i.k {#
                    s;#
                    i;#
                    a;#
                    l;#
                    c;#
                    d;#
                    u;
                    constructor(e) {
                        super(), this.#u = !1, this.#d = e.defaultOptions, this.setOptions(e.options), this.observers = [], this.#l = e.client, this.#a = this.#l.getQueryCache(), this.queryKey = e.queryKey, this.queryHash = e.queryHash, this.#s = function(e) {
                            let t = "function" == typeof e.initialData ? e.initialData() : e.initialData,
                                r = void 0 !== t,
                                o = r ? "function" == typeof e.initialDataUpdatedAt ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
                            return {
                                data: t,
                                dataUpdateCount: 0,
                                dataUpdatedAt: r ? o ? ? Date.now() : 0,
                                error: null,
                                errorUpdateCount: 0,
                                errorUpdatedAt: 0,
                                fetchFailureCount: 0,
                                fetchFailureReason: null,
                                fetchMeta: null,
                                isInvalidated: !1,
                                status: r ? "success" : "pending",
                                fetchStatus: "idle"
                            }
                        }(this.options), this.state = e.state ? ? this.#s, this.scheduleGc()
                    }
                    get meta() {
                        return this.options.meta
                    }
                    get promise() {
                        return this.#c ? .promise
                    }
                    setOptions(e) {
                        this.options = { ...this.#d,
                            ...e
                        }, this.updateGcTime(this.options.gcTime)
                    }
                    optionalRemove() {
                        this.observers.length || "idle" !== this.state.fetchStatus || this.#a.remove(this)
                    }
                    setData(e, t) {
                        let r = (0, o.pl)(this.state.data, e, this.options);
                        return this.#m({
                            data: r,
                            type: "success",
                            dataUpdatedAt: t ? .updatedAt,
                            manual: t ? .manual
                        }), r
                    }
                    setState(e, t) {
                        this.#m({
                            type: "setState",
                            state: e,
                            setStateOptions: t
                        })
                    }
                    cancel(e) {
                        let t = this.#c ? .promise;
                        return this.#c ? .cancel(e), t ? t.then(o.lQ).catch(o.lQ) : Promise.resolve()
                    }
                    destroy() {
                        super.destroy(), this.cancel({
                            silent: !0
                        })
                    }
                    reset() {
                        this.destroy(), this.setState(this.#s)
                    }
                    isActive() {
                        return this.observers.some(e => !1 !== (0, o.Eh)(e.options.enabled, this))
                    }
                    isDisabled() {
                        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === o.hT || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
                    }
                    isStale() {
                        return !!this.state.isInvalidated || (this.getObserversCount() > 0 ? this.observers.some(e => e.getCurrentResult().isStale) : void 0 === this.state.data)
                    }
                    isStaleByTime(e = 0) {
                        return this.state.isInvalidated || void 0 === this.state.data || !(0, o.j3)(this.state.dataUpdatedAt, e)
                    }
                    onFocus() {
                        let e = this.observers.find(e => e.shouldFetchOnWindowFocus());
                        e ? .refetch({
                            cancelRefetch: !1
                        }), this.#c ? .continue()
                    }
                    onOnline() {
                        let e = this.observers.find(e => e.shouldFetchOnReconnect());
                        e ? .refetch({
                            cancelRefetch: !1
                        }), this.#c ? .continue()
                    }
                    addObserver(e) {
                        this.observers.includes(e) || (this.observers.push(e), this.clearGcTimeout(), this.#a.notify({
                            type: "observerAdded",
                            query: this,
                            observer: e
                        }))
                    }
                    removeObserver(e) {
                        this.observers.includes(e) && (this.observers = this.observers.filter(t => t !== e), this.observers.length || (this.#c && (this.#u ? this.#c.cancel({
                            revert: !0
                        }) : this.#c.cancelRetry()), this.scheduleGc()), this.#a.notify({
                            type: "observerRemoved",
                            query: this,
                            observer: e
                        }))
                    }
                    getObserversCount() {
                        return this.observers.length
                    }
                    invalidate() {
                        this.state.isInvalidated || this.#m({
                            type: "invalidate"
                        })
                    }
                    fetch(e, t) {
                        if ("idle" !== this.state.fetchStatus) {
                            if (void 0 !== this.state.data && t ? .cancelRefetch) this.cancel({
                                silent: !0
                            });
                            else if (this.#c) return this.#c.continueRetry(), this.#c.promise
                        }
                        if (e && this.setOptions(e), !this.options.queryFn) {
                            let e = this.observers.find(e => e.options.queryFn);
                            e && this.setOptions(e.options)
                        }
                        let r = new AbortController,
                            n = e => {
                                Object.defineProperty(e, "signal", {
                                    enumerable: !0,
                                    get: () => (this.#u = !0, r.signal)
                                })
                            },
                            i = {
                                fetchOptions: t,
                                options: this.options,
                                queryKey: this.queryKey,
                                client: this.#l,
                                state: this.state,
                                fetchFn: () => {
                                    let e = (0, o.ZM)(this.options, t),
                                        r = {
                                            client: this.#l,
                                            queryKey: this.queryKey,
                                            meta: this.meta
                                        };
                                    return (n(r), this.#u = !1, this.options.persister) ? this.options.persister(e, r, this) : e(r)
                                }
                            };
                        n(i), this.options.behavior ? .onFetch(i, this), this.#i = this.state, ("idle" === this.state.fetchStatus || this.state.fetchMeta !== i.fetchOptions ? .meta) && this.#m({
                            type: "fetch",
                            meta: i.fetchOptions ? .meta
                        });
                        let a = e => {
                            (0, s.wm)(e) && e.silent || this.#m({
                                type: "error",
                                error: e
                            }), (0, s.wm)(e) || (this.#a.config.onError ? .(e, this), this.#a.config.onSettled ? .(this.state.data, e, this)), this.scheduleGc()
                        };
                        return this.#c = (0, s.II)({
                            initialPromise: t ? .initialPromise,
                            fn: i.fetchFn,
                            abort: r.abort.bind(r),
                            onSuccess: e => {
                                if (void 0 === e) return void a(Error(`${this.queryHash} data is undefined`));
                                try {
                                    this.setData(e)
                                } catch (e) {
                                    a(e);
                                    return
                                }
                                this.#a.config.onSuccess ? .(e, this), this.#a.config.onSettled ? .(e, this.state.error, this), this.scheduleGc()
                            },
                            onError: a,
                            onFail: (e, t) => {
                                this.#m({
                                    type: "failed",
                                    failureCount: e,
                                    error: t
                                })
                            },
                            onPause: () => {
                                this.#m({
                                    type: "pause"
                                })
                            },
                            onContinue: () => {
                                this.#m({
                                    type: "continue"
                                })
                            },
                            retry: i.options.retry,
                            retryDelay: i.options.retryDelay,
                            networkMode: i.options.networkMode,
                            canRun: () => !0
                        }), this.#c.start()
                    }#
                    m(e) {
                        this.state = (t => {
                            switch (e.type) {
                                case "failed":
                                    return { ...t,
                                        fetchFailureCount: e.failureCount,
                                        fetchFailureReason: e.error
                                    };
                                case "pause":
                                    return { ...t,
                                        fetchStatus: "paused"
                                    };
                                case "continue":
                                    return { ...t,
                                        fetchStatus: "fetching"
                                    };
                                case "fetch":
                                    return { ...t,
                                        ...l(t.data, this.options),
                                        fetchMeta: e.meta ? ? null
                                    };
                                case "success":
                                    return { ...t,
                                        data: e.data,
                                        dataUpdateCount: t.dataUpdateCount + 1,
                                        dataUpdatedAt: e.dataUpdatedAt ? ? Date.now(),
                                        error: null,
                                        isInvalidated: !1,
                                        status: "success",
                                        ...!e.manual && {
                                            fetchStatus: "idle",
                                            fetchFailureCount: 0,
                                            fetchFailureReason: null
                                        }
                                    };
                                case "error":
                                    let r = e.error;
                                    if ((0, s.wm)(r) && r.revert && this.#i) return { ...this.#i,
                                        fetchStatus: "idle"
                                    };
                                    return { ...t,
                                        error: r,
                                        errorUpdateCount: t.errorUpdateCount + 1,
                                        errorUpdatedAt: Date.now(),
                                        fetchFailureCount: t.fetchFailureCount + 1,
                                        fetchFailureReason: r,
                                        fetchStatus: "idle",
                                        status: "error"
                                    };
                                case "invalidate":
                                    return { ...t,
                                        isInvalidated: !0
                                    };
                                case "setState":
                                    return { ...t,
                                        ...e.state
                                    }
                            }
                        })(this.state), n.jG.batch(() => {
                            this.observers.forEach(e => {
                                e.onQueryUpdate()
                            }), this.#a.notify({
                                query: this,
                                type: "updated",
                                action: e
                            })
                        })
                    }
                };

            function l(e, t) {
                return {
                    fetchFailureCount: 0,
                    fetchFailureReason: null,
                    fetchStatus: (0, s.v_)(t.networkMode) ? "fetching" : "paused",
                    ...void 0 === e && {
                        error: null,
                        status: "pending"
                    }
                }
            }
        },
        9946: (e, t, r) => {
            r.d(t, {
                A: () => d
            });
            var o = r(2115);
            let n = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
                s = e => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, r) => r ? r.toUpperCase() : t.toLowerCase()),
                i = e => {
                    let t = s(e);
                    return t.charAt(0).toUpperCase() + t.slice(1)
                },
                a = function() {
                    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    return t.filter((e, t, r) => !!e && "" !== e.trim() && r.indexOf(e) === t).join(" ").trim()
                };
            var l = {
                xmlns: "http://www.w3.org/2000/svg",
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            };
            let c = (0, o.forwardRef)((e, t) => {
                    let {
                        color: r = "currentColor",
                        size: n = 24,
                        strokeWidth: s = 2,
                        absoluteStrokeWidth: i,
                        className: c = "",
                        children: d,
                        iconNode: u,
                        ...m
                    } = e;
                    return (0, o.createElement)("svg", {
                        ref: t,
                        ...l,
                        width: n,
                        height: n,
                        stroke: r,
                        strokeWidth: i ? 24 * Number(s) / Number(n) : s,
                        className: a("lucide", c),
                        ...m
                    }, [...u.map(e => {
                        let [t, r] = e;
                        return (0, o.createElement)(t, r)
                    }), ...Array.isArray(d) ? d : [d]])
                }),
                d = (e, t) => {
                    let r = (0, o.forwardRef)((r, s) => {
                        let {
                            className: l,
                            ...d
                        } = r;
                        return (0, o.createElement)(c, {
                            ref: s,
                            iconNode: t,
                            className: a("lucide-".concat(n(i(e))), "lucide-".concat(e), l),
                            ...d
                        })
                    });
                    return r.displayName = i(e), r
                }
        }
    }
]);