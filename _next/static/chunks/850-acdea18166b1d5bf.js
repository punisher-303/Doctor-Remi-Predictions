(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [850], {
        430: (t, e, r) => {
            "use strict";
            r.d(e, {
                t: () => i
            });
            let i = (0, r(2115).createContext)(null)
        },
        901: (t, e, r) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "RouterContext", {
                enumerable: !0,
                get: function() {
                    return i
                }
            });
            let i = r(8229)._(r(2115)).default.createContext(null)
        },
        1066: (t, e, r) => {
            "use strict";
            r.d(e, {
                A: () => i
            });
            let i = (0, r(9946).A)("film", [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2",
                    key: "afitv7"
                }],
                ["path", {
                    d: "M7 3v18",
                    key: "bbkbws"
                }],
                ["path", {
                    d: "M3 7.5h4",
                    key: "zfgn84"
                }],
                ["path", {
                    d: "M3 12h18",
                    key: "1i2n21"
                }],
                ["path", {
                    d: "M3 16.5h4",
                    key: "1230mu"
                }],
                ["path", {
                    d: "M17 3v18",
                    key: "in4fa5"
                }],
                ["path", {
                    d: "M17 7.5h4",
                    key: "myr1c1"
                }],
                ["path", {
                    d: "M17 16.5h4",
                    key: "go4c1d"
                }]
            ])
        },
        1193: (t, e) => {
            "use strict";

            function r(t) {
                var e;
                let {
                    config: r,
                    src: i,
                    width: n,
                    quality: s
                } = t, o = s || (null == (e = r.qualities) ? void 0 : e.reduce((t, e) => Math.abs(e - 75) < Math.abs(t - 75) ? e : t)) || 75;
                return r.path + "?url=" + encodeURIComponent(i) + "&w=" + n + "&q=" + o + (i.startsWith("/_next/static/media/"), "")
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "default", {
                enumerable: !0,
                get: function() {
                    return i
                }
            }), r.__next_img_default = !0;
            let i = r
        },
        1469: (t, e, r) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), ! function(t, e) {
                for (var r in e) Object.defineProperty(t, r, {
                    enumerable: !0,
                    get: e[r]
                })
            }(e, {
                default: function() {
                    return l
                },
                getImageProps: function() {
                    return a
                }
            });
            let i = r(8229),
                n = r(8883),
                s = r(3063),
                o = i._(r(1193));

            function a(t) {
                let {
                    props: e
                } = (0, n.getImgProps)(t, {
                    defaultLoader: o.default,
                    imgConf: {
                        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                        path: "/_next/image",
                        loader: "default",
                        dangerouslyAllowSVG: !1,
                        unoptimized: !1
                    }
                });
                for (let [t, r] of Object.entries(e)) void 0 === r && delete e[t];
                return {
                    props: e
                }
            }
            let l = s.Image
        },
        2098: (t, e, r) => {
            "use strict";
            r.d(e, {
                A: () => i
            });
            let i = (0, r(9946).A)("sun", [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "4",
                    key: "4exip2"
                }],
                ["path", {
                    d: "M12 2v2",
                    key: "tus03m"
                }],
                ["path", {
                    d: "M12 20v2",
                    key: "1lh1kg"
                }],
                ["path", {
                    d: "m4.93 4.93 1.41 1.41",
                    key: "149t6j"
                }],
                ["path", {
                    d: "m17.66 17.66 1.41 1.41",
                    key: "ptbguv"
                }],
                ["path", {
                    d: "M2 12h2",
                    key: "1t8f8n"
                }],
                ["path", {
                    d: "M20 12h2",
                    key: "1q8mjw"
                }],
                ["path", {
                    d: "m6.34 17.66-1.41 1.41",
                    key: "1m8zz5"
                }],
                ["path", {
                    d: "m19.07 4.93-1.41 1.41",
                    key: "1shlcs"
                }]
            ])
        },
        2464: (t, e, r) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "AmpStateContext", {
                enumerable: !0,
                get: function() {
                    return i
                }
            });
            let i = r(8229)._(r(2115)).default.createContext({})
        },
        2801: (t, e, r) => {
            "use strict";
            r.d(e, {
                B: () => i
            });
            let i = "undefined" != typeof window
        },
        2960: (t, e, r) => {
            "use strict";
            r.d(e, {
                I: () => P
            });
            var i = r(920),
                n = r(7165),
                s = r(9853),
                o = r(5910),
                a = r(3504),
                l = r(2020),
                u = class extends o.Q {
                    constructor(t, e) {
                        super(), this.options = e, this.#t = t, this.#e = null, this.#r = (0, a.T)(), this.options.experimental_prefetchInRender || this.#r.reject(Error("experimental_prefetchInRender feature flag is not enabled")), this.bindMethods(), this.setOptions(e)
                    }#
                    t;#
                    i = void 0;#
                    n = void 0;#
                    s = void 0;#
                    o;#
                    a;#
                    r;#
                    e;#
                    l;#
                    u;#
                    h;#
                    c;#
                    f;#
                    d;#
                    p = new Set;
                    bindMethods() {
                        this.refetch = this.refetch.bind(this)
                    }
                    onSubscribe() {
                        1 === this.listeners.size && (this.#i.addObserver(this), h(this.#i, this.options) ? this.#m() : this.updateResult(), this.#y())
                    }
                    onUnsubscribe() {
                        this.hasListeners() || this.destroy()
                    }
                    shouldFetchOnReconnect() {
                        return c(this.#i, this.options, this.options.refetchOnReconnect)
                    }
                    shouldFetchOnWindowFocus() {
                        return c(this.#i, this.options, this.options.refetchOnWindowFocus)
                    }
                    destroy() {
                        this.listeners = new Set, this.#g(), this.#v(), this.#i.removeObserver(this)
                    }
                    setOptions(t) {
                        let e = this.options,
                            r = this.#i;
                        if (this.options = this.#t.defaultQueryOptions(t), void 0 !== this.options.enabled && "boolean" != typeof this.options.enabled && "function" != typeof this.options.enabled && "boolean" != typeof(0, l.Eh)(this.options.enabled, this.#i)) throw Error("Expected enabled to be a boolean or a callback that returns a boolean");
                        this.#b(), this.#i.setOptions(this.options), e._defaulted && !(0, l.f8)(this.options, e) && this.#t.getQueryCache().notify({
                            type: "observerOptionsUpdated",
                            query: this.#i,
                            observer: this
                        });
                        let i = this.hasListeners();
                        i && f(this.#i, r, this.options, e) && this.#m(), this.updateResult(), i && (this.#i !== r || (0, l.Eh)(this.options.enabled, this.#i) !== (0, l.Eh)(e.enabled, this.#i) || (0, l.d2)(this.options.staleTime, this.#i) !== (0, l.d2)(e.staleTime, this.#i)) && this.#w();
                        let n = this.#x();
                        i && (this.#i !== r || (0, l.Eh)(this.options.enabled, this.#i) !== (0, l.Eh)(e.enabled, this.#i) || n !== this.#d) && this.#E(n)
                    }
                    getOptimisticResult(t) {
                        var e, r;
                        let i = this.#t.getQueryCache().build(this.#t, t),
                            n = this.createResult(i, t);
                        return e = this, r = n, (0, l.f8)(e.getCurrentResult(), r) || (this.#s = n, this.#a = this.options, this.#o = this.#i.state), n
                    }
                    getCurrentResult() {
                        return this.#s
                    }
                    trackResult(t, e) {
                        return new Proxy(t, {
                            get: (t, r) => (this.trackProp(r), e ? .(r), Reflect.get(t, r))
                        })
                    }
                    trackProp(t) {
                        this.#p.add(t)
                    }
                    getCurrentQuery() {
                        return this.#i
                    }
                    refetch({ ...t
                    } = {}) {
                        return this.fetch({ ...t
                        })
                    }
                    fetchOptimistic(t) {
                        let e = this.#t.defaultQueryOptions(t),
                            r = this.#t.getQueryCache().build(this.#t, e);
                        return r.fetch().then(() => this.createResult(r, e))
                    }
                    fetch(t) {
                        return this.#m({ ...t,
                            cancelRefetch: t.cancelRefetch ? ? !0
                        }).then(() => (this.updateResult(), this.#s))
                    }#
                    m(t) {
                        this.#b();
                        let e = this.#i.fetch(this.options, t);
                        return t ? .throwOnError || (e = e.catch(l.lQ)), e
                    }#
                    w() {
                        this.#g();
                        let t = (0, l.d2)(this.options.staleTime, this.#i);
                        if (l.S$ || this.#s.isStale || !(0, l.gn)(t)) return;
                        let e = (0, l.j3)(this.#s.dataUpdatedAt, t);
                        this.#c = setTimeout(() => {
                            this.#s.isStale || this.updateResult()
                        }, e + 1)
                    }#
                    x() {
                        return ("function" == typeof this.options.refetchInterval ? this.options.refetchInterval(this.#i) : this.options.refetchInterval) ? ? !1
                    }#
                    E(t) {
                        this.#v(), this.#d = t, !l.S$ && !1 !== (0, l.Eh)(this.options.enabled, this.#i) && (0, l.gn)(this.#d) && 0 !== this.#d && (this.#f = setInterval(() => {
                            (this.options.refetchIntervalInBackground || i.m.isFocused()) && this.#m()
                        }, this.#d))
                    }#
                    y() {
                        this.#w(), this.#E(this.#x())
                    }#
                    g() {
                        this.#c && (clearTimeout(this.#c), this.#c = void 0)
                    }#
                    v() {
                        this.#f && (clearInterval(this.#f), this.#f = void 0)
                    }
                    createResult(t, e) {
                        let r, i = this.#i,
                            n = this.options,
                            o = this.#s,
                            u = this.#o,
                            c = this.#a,
                            p = t !== i ? t.state : this.#n,
                            {
                                state: m
                            } = t,
                            y = { ...m
                            },
                            g = !1;
                        if (e._optimisticResults) {
                            let r = this.hasListeners(),
                                o = !r && h(t, e),
                                a = r && f(t, i, e, n);
                            (o || a) && (y = { ...y,
                                ...(0, s.k)(m.data, t.options)
                            }), "isRestoring" === e._optimisticResults && (y.fetchStatus = "idle")
                        }
                        let {
                            error: v,
                            errorUpdatedAt: b,
                            status: w
                        } = y;
                        r = y.data;
                        let x = !1;
                        if (void 0 !== e.placeholderData && void 0 === r && "pending" === w) {
                            let t;
                            o ? .isPlaceholderData && e.placeholderData === c ? .placeholderData ? (t = o.data, x = !0) : t = "function" == typeof e.placeholderData ? e.placeholderData(this.#h ? .state.data, this.#h) : e.placeholderData, void 0 !== t && (w = "success", r = (0, l.pl)(o ? .data, t, e), g = !0)
                        }
                        if (e.select && void 0 !== r && !x)
                            if (o && r === u ? .data && e.select === this.#l) r = this.#u;
                            else try {
                                this.#l = e.select, r = e.select(r), r = (0, l.pl)(o ? .data, r, e), this.#u = r, this.#e = null
                            } catch (t) {
                                this.#e = t
                            }
                        this.#e && (v = this.#e, r = this.#u, b = Date.now(), w = "error");
                        let E = "fetching" === y.fetchStatus,
                            S = "pending" === w,
                            T = "error" === w,
                            R = S && E,
                            A = void 0 !== r,
                            P = {
                                status: w,
                                fetchStatus: y.fetchStatus,
                                isPending: S,
                                isSuccess: "success" === w,
                                isError: T,
                                isInitialLoading: R,
                                isLoading: R,
                                data: r,
                                dataUpdatedAt: y.dataUpdatedAt,
                                error: v,
                                errorUpdatedAt: b,
                                failureCount: y.fetchFailureCount,
                                failureReason: y.fetchFailureReason,
                                errorUpdateCount: y.errorUpdateCount,
                                isFetched: y.dataUpdateCount > 0 || y.errorUpdateCount > 0,
                                isFetchedAfterMount: y.dataUpdateCount > p.dataUpdateCount || y.errorUpdateCount > p.errorUpdateCount,
                                isFetching: E,
                                isRefetching: E && !S,
                                isLoadingError: T && !A,
                                isPaused: "paused" === y.fetchStatus,
                                isPlaceholderData: g,
                                isRefetchError: T && A,
                                isStale: d(t, e),
                                refetch: this.refetch,
                                promise: this.#r
                            };
                        if (this.options.experimental_prefetchInRender) {
                            let e = t => {
                                    "error" === P.status ? t.reject(P.error) : void 0 !== P.data && t.resolve(P.data)
                                },
                                r = () => {
                                    e(this.#r = P.promise = (0, a.T)())
                                },
                                n = this.#r;
                            switch (n.status) {
                                case "pending":
                                    t.queryHash === i.queryHash && e(n);
                                    break;
                                case "fulfilled":
                                    ("error" === P.status || P.data !== n.value) && r();
                                    break;
                                case "rejected":
                                    ("error" !== P.status || P.error !== n.reason) && r()
                            }
                        }
                        return P
                    }
                    updateResult() {
                        let t = this.#s,
                            e = this.createResult(this.#i, this.options);
                        this.#o = this.#i.state, this.#a = this.options, void 0 !== this.#o.data && (this.#h = this.#i), (0, l.f8)(e, t) || (this.#s = e, this.#S({
                            listeners: (() => {
                                if (!t) return !0;
                                let {
                                    notifyOnChangeProps: e
                                } = this.options, r = "function" == typeof e ? e() : e;
                                if ("all" === r || !r && !this.#p.size) return !0;
                                let i = new Set(r ? ? this.#p);
                                return this.options.throwOnError && i.add("error"), Object.keys(this.#s).some(e => this.#s[e] !== t[e] && i.has(e))
                            })()
                        }))
                    }#
                    b() {
                        let t = this.#t.getQueryCache().build(this.#t, this.options);
                        if (t === this.#i) return;
                        let e = this.#i;
                        this.#i = t, this.#n = t.state, this.hasListeners() && (e ? .removeObserver(this), t.addObserver(this))
                    }
                    onQueryUpdate() {
                        this.updateResult(), this.hasListeners() && this.#y()
                    }#
                    S(t) {
                        n.jG.batch(() => {
                            t.listeners && this.listeners.forEach(t => {
                                t(this.#s)
                            }), this.#t.getQueryCache().notify({
                                query: this.#i,
                                type: "observerResultsUpdated"
                            })
                        })
                    }
                };

            function h(t, e) {
                return !1 !== (0, l.Eh)(e.enabled, t) && void 0 === t.state.data && ("error" !== t.state.status || !1 !== e.retryOnMount) || void 0 !== t.state.data && c(t, e, e.refetchOnMount)
            }

            function c(t, e, r) {
                if (!1 !== (0, l.Eh)(e.enabled, t)) {
                    let i = "function" == typeof r ? r(t) : r;
                    return "always" === i || !1 !== i && d(t, e)
                }
                return !1
            }

            function f(t, e, r, i) {
                return (t !== e || !1 === (0, l.Eh)(i.enabled, t)) && (!r.suspense || "error" !== t.state.status) && d(t, r)
            }

            function d(t, e) {
                return !1 !== (0, l.Eh)(e.enabled, t) && t.isStaleByTime((0, l.d2)(e.staleTime, t))
            }
            var p = r(2115),
                m = r(6715);
            r(5155);
            var y = p.createContext(function() {
                    let t = !1;
                    return {
                        clearReset: () => {
                            t = !1
                        },
                        reset: () => {
                            t = !0
                        },
                        isReset: () => t
                    }
                }()),
                g = () => p.useContext(y),
                v = (t, e) => {
                    (t.suspense || t.throwOnError || t.experimental_prefetchInRender) && !e.isReset() && (t.retryOnMount = !1)
                },
                b = t => {
                    p.useEffect(() => {
                        t.clearReset()
                    }, [t])
                },
                w = t => {
                    let {
                        result: e,
                        errorResetBoundary: r,
                        throwOnError: i,
                        query: n,
                        suspense: s
                    } = t;
                    return e.isError && !r.isReset() && !e.isFetching && n && (s && void 0 === e.data || (0, l.GU)(i, [e.error, n]))
                },
                x = p.createContext(!1),
                E = () => p.useContext(x);
            x.Provider;
            var S = t => {
                    let e = t.staleTime;
                    t.suspense && (t.staleTime = "function" == typeof e ? (...t) => Math.max(e(...t), 1e3) : Math.max(e ? ? 1e3, 1e3), "number" == typeof t.gcTime && (t.gcTime = Math.max(t.gcTime, 1e3)))
                },
                T = (t, e) => t.isLoading && t.isFetching && !e,
                R = (t, e) => t ? .suspense && e.isPending,
                A = (t, e, r) => e.fetchOptimistic(t).catch(() => {
                    r.clearReset()
                });

            function P(t, e) {
                return function(t, e, r) {
                    var i, s, o, a, u;
                    let h = (0, m.jE)(r),
                        c = E(),
                        f = g(),
                        d = h.defaultQueryOptions(t);
                    null == (s = h.getDefaultOptions().queries) || null == (i = s._experimental_beforeQuery) || i.call(s, d), d._optimisticResults = c ? "isRestoring" : "optimistic", S(d), v(d, f), b(f);
                    let y = !h.getQueryCache().get(d.queryHash),
                        [x] = p.useState(() => new e(h, d)),
                        P = x.getOptimisticResult(d),
                        C = !c && !1 !== t.subscribed;
                    if (p.useSyncExternalStore(p.useCallback(t => {
                            let e = C ? x.subscribe(n.jG.batchCalls(t)) : l.lQ;
                            return x.updateResult(), e
                        }, [x, C]), () => x.getCurrentResult(), () => x.getCurrentResult()), p.useEffect(() => {
                            x.setOptions(d)
                        }, [d, x]), R(d, P)) throw A(d, x, f);
                    if (w({
                            result: P,
                            errorResetBoundary: f,
                            throwOnError: d.throwOnError,
                            query: h.getQueryCache().get(d.queryHash),
                            suspense: d.suspense
                        })) throw P.error;
                    if (null == (a = h.getDefaultOptions().queries) || null == (o = a._experimental_afterQuery) || o.call(a, d, P), d.experimental_prefetchInRender && !l.S$ && T(P, c)) {
                        let t = y ? A(d, x, f) : null == (u = h.getQueryCache().get(d.queryHash)) ? void 0 : u.promise;
                        null == t || t.catch(l.lQ).finally(() => {
                            x.updateResult()
                        })
                    }
                    return d.notifyOnChangeProps ? P : x.trackResult(P)
                }(t, u, e)
            }
        },
        3063: (t, e, r) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "Image", {
                enumerable: !0,
                get: function() {
                    return w
                }
            });
            let i = r(8229),
                n = r(6966),
                s = r(5155),
                o = n._(r(2115)),
                a = i._(r(7650)),
                l = i._(r(5564)),
                u = r(8883),
                h = r(5840),
                c = r(6752);
            r(3230);
            let f = r(901),
                d = i._(r(1193)),
                p = r(6654),
                m = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    dangerouslyAllowSVG: !1,
                    unoptimized: !1
                };

            function y(t, e, r, i, n, s, o) {
                let a = null == t ? void 0 : t.src;
                t && t["data-loaded-src"] !== a && (t["data-loaded-src"] = a, ("decode" in t ? t.decode() : Promise.resolve()).catch(() => {}).then(() => {
                    if (t.parentElement && t.isConnected) {
                        if ("empty" !== e && n(!0), null == r ? void 0 : r.current) {
                            let e = new Event("load");
                            Object.defineProperty(e, "target", {
                                writable: !1,
                                value: t
                            });
                            let i = !1,
                                n = !1;
                            r.current({ ...e,
                                nativeEvent: e,
                                currentTarget: t,
                                target: t,
                                isDefaultPrevented: () => i,
                                isPropagationStopped: () => n,
                                persist: () => {},
                                preventDefault: () => {
                                    i = !0, e.preventDefault()
                                },
                                stopPropagation: () => {
                                    n = !0, e.stopPropagation()
                                }
                            })
                        }(null == i ? void 0 : i.current) && i.current(t)
                    }
                }))
            }

            function g(t) {
                return o.use ? {
                    fetchPriority: t
                } : {
                    fetchpriority: t
                }
            }
            let v = (0, o.forwardRef)((t, e) => {
                let {
                    src: r,
                    srcSet: i,
                    sizes: n,
                    height: a,
                    width: l,
                    decoding: u,
                    className: h,
                    style: c,
                    fetchPriority: f,
                    placeholder: d,
                    loading: m,
                    unoptimized: v,
                    fill: b,
                    onLoadRef: w,
                    onLoadingCompleteRef: x,
                    setBlurComplete: E,
                    setShowAltText: S,
                    sizesInput: T,
                    onLoad: R,
                    onError: A,
                    ...P
                } = t, C = (0, o.useCallback)(t => {
                    t && (A && (t.src = t.src), t.complete && y(t, d, w, x, E, v, T))
                }, [r, d, w, x, E, A, v, T]), O = (0, p.useMergedRef)(e, C);
                return (0, s.jsx)("img", { ...P,
                    ...g(f),
                    loading: m,
                    width: l,
                    height: a,
                    decoding: u,
                    "data-nimg": b ? "fill" : "1",
                    className: h,
                    style: c,
                    sizes: n,
                    srcSet: i,
                    src: r,
                    ref: O,
                    onLoad: t => {
                        y(t.currentTarget, d, w, x, E, v, T)
                    },
                    onError: t => {
                        S(!0), "empty" !== d && E(!0), A && A(t)
                    }
                })
            });

            function b(t) {
                let {
                    isAppRouter: e,
                    imgAttributes: r
                } = t, i = {
                    as: "image",
                    imageSrcSet: r.srcSet,
                    imageSizes: r.sizes,
                    crossOrigin: r.crossOrigin,
                    referrerPolicy: r.referrerPolicy,
                    ...g(r.fetchPriority)
                };
                return e && a.default.preload ? (a.default.preload(r.src, i), null) : (0, s.jsx)(l.default, {
                    children: (0, s.jsx)("link", {
                        rel: "preload",
                        href: r.srcSet ? void 0 : r.src,
                        ...i
                    }, "__nimg-" + r.src + r.srcSet + r.sizes)
                })
            }
            let w = (0, o.forwardRef)((t, e) => {
                let r = (0, o.useContext)(f.RouterContext),
                    i = (0, o.useContext)(c.ImageConfigContext),
                    n = (0, o.useMemo)(() => {
                        var t;
                        let e = m || i || h.imageConfigDefault,
                            r = [...e.deviceSizes, ...e.imageSizes].sort((t, e) => t - e),
                            n = e.deviceSizes.sort((t, e) => t - e),
                            s = null == (t = e.qualities) ? void 0 : t.sort((t, e) => t - e);
                        return { ...e,
                            allSizes: r,
                            deviceSizes: n,
                            qualities: s
                        }
                    }, [i]),
                    {
                        onLoad: a,
                        onLoadingComplete: l
                    } = t,
                    p = (0, o.useRef)(a);
                (0, o.useEffect)(() => {
                    p.current = a
                }, [a]);
                let y = (0, o.useRef)(l);
                (0, o.useEffect)(() => {
                    y.current = l
                }, [l]);
                let [g, w] = (0, o.useState)(!1), [x, E] = (0, o.useState)(!1), {
                    props: S,
                    meta: T
                } = (0, u.getImgProps)(t, {
                    defaultLoader: d.default,
                    imgConf: n,
                    blurComplete: g,
                    showAltText: x
                });
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(v, { ...S,
                        unoptimized: T.unoptimized,
                        placeholder: T.placeholder,
                        fill: T.fill,
                        onLoadRef: p,
                        onLoadingCompleteRef: y,
                        setBlurComplete: w,
                        setShowAltText: E,
                        sizesInput: t.sizes,
                        ref: e
                    }), T.priority ? (0, s.jsx)(b, {
                        isAppRouter: !r,
                        imgAttributes: S
                    }) : null]
                })
            });
            ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        3464: (t, e, r) => {
            "use strict";
            let i;
            r.d(e, {
                A: () => eu
            });
            var n, s, o, a = {};

            function l(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            }
            r.r(a), r.d(a, {
                hasBrowserEnv: () => tf,
                hasStandardBrowserEnv: () => tp,
                hasStandardBrowserWebWorkerEnv: () => tm,
                navigator: () => td,
                origin: () => ty
            });
            var u = r(1890);
            let {
                toString: h
            } = Object.prototype, {
                getPrototypeOf: c
            } = Object, {
                iterator: f,
                toStringTag: d
            } = Symbol, p = (t => e => {
                let r = h.call(e);
                return t[r] || (t[r] = r.slice(8, -1).toLowerCase())
            })(Object.create(null)), m = t => (t = t.toLowerCase(), e => p(e) === t), y = t => e => typeof e === t, {
                isArray: g
            } = Array, v = y("undefined"), b = m("ArrayBuffer"), w = y("string"), x = y("function"), E = y("number"), S = t => null !== t && "object" == typeof t, T = t => {
                if ("object" !== p(t)) return !1;
                let e = c(t);
                return (null === e || e === Object.prototype || null === Object.getPrototypeOf(e)) && !(d in t) && !(f in t)
            }, R = m("Date"), A = m("File"), P = m("Blob"), C = m("FileList"), O = m("URLSearchParams"), [M, j, k, D] = ["ReadableStream", "Request", "Response", "Headers"].map(m);

            function L(t, e, {
                allOwnKeys: r = !1
            } = {}) {
                let i, n;
                if (null != t)
                    if ("object" != typeof t && (t = [t]), g(t))
                        for (i = 0, n = t.length; i < n; i++) e.call(null, t[i], i, t);
                    else {
                        let n, s = r ? Object.getOwnPropertyNames(t) : Object.keys(t),
                            o = s.length;
                        for (i = 0; i < o; i++) n = s[i], e.call(null, t[n], n, t)
                    }
            }

            function B(t, e) {
                let r;
                e = e.toLowerCase();
                let i = Object.keys(t),
                    n = i.length;
                for (; n-- > 0;)
                    if (e === (r = i[n]).toLowerCase()) return r;
                return null
            }
            let V = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : global,
                F = t => !v(t) && t !== V,
                U = (t => e => t && e instanceof t)("undefined" != typeof Uint8Array && c(Uint8Array)),
                I = m("HTMLFormElement"),
                _ = (({
                    hasOwnProperty: t
                }) => (e, r) => t.call(e, r))(Object.prototype),
                N = m("RegExp"),
                z = (t, e) => {
                    let r = Object.getOwnPropertyDescriptors(t),
                        i = {};
                    L(r, (r, n) => {
                        let s;
                        !1 !== (s = e(r, n, t)) && (i[n] = s || r)
                    }), Object.defineProperties(t, i)
                },
                W = m("AsyncFunction"),
                q = (n = "function" == typeof setImmediate, s = x(V.postMessage), n ? setImmediate : s ? ((t, e) => (V.addEventListener("message", ({
                    source: r,
                    data: i
                }) => {
                    r === V && i === t && e.length && e.shift()()
                }, !1), r => {
                    e.push(r), V.postMessage(t, "*")
                }))(`axios@${Math.random()}`, []) : t => setTimeout(t)),
                $ = "undefined" != typeof queueMicrotask ? queueMicrotask.bind(V) : void 0 !== u && u.nextTick || q,
                Q = {
                    isArray: g,
                    isArrayBuffer: b,
                    isBuffer: function(t) {
                        return null !== t && !v(t) && null !== t.constructor && !v(t.constructor) && x(t.constructor.isBuffer) && t.constructor.isBuffer(t)
                    },
                    isFormData: t => {
                        let e;
                        return t && ("function" == typeof FormData && t instanceof FormData || x(t.append) && ("formdata" === (e = p(t)) || "object" === e && x(t.toString) && "[object FormData]" === t.toString()))
                    },
                    isArrayBufferView: function(t) {
                        let e;
                        return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer && b(t.buffer)
                    },
                    isString: w,
                    isNumber: E,
                    isBoolean: t => !0 === t || !1 === t,
                    isObject: S,
                    isPlainObject: T,
                    isReadableStream: M,
                    isRequest: j,
                    isResponse: k,
                    isHeaders: D,
                    isUndefined: v,
                    isDate: R,
                    isFile: A,
                    isBlob: P,
                    isRegExp: N,
                    isFunction: x,
                    isStream: t => S(t) && x(t.pipe),
                    isURLSearchParams: O,
                    isTypedArray: U,
                    isFileList: C,
                    forEach: L,
                    merge: function t() {
                        let {
                            caseless: e
                        } = F(this) && this || {}, r = {}, i = (i, n) => {
                            let s = e && B(r, n) || n;
                            T(r[s]) && T(i) ? r[s] = t(r[s], i) : T(i) ? r[s] = t({}, i) : g(i) ? r[s] = i.slice() : r[s] = i
                        };
                        for (let t = 0, e = arguments.length; t < e; t++) arguments[t] && L(arguments[t], i);
                        return r
                    },
                    extend: (t, e, r, {
                        allOwnKeys: i
                    } = {}) => (L(e, (e, i) => {
                        r && x(e) ? t[i] = l(e, r) : t[i] = e
                    }, {
                        allOwnKeys: i
                    }), t),
                    trim: t => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
                    stripBOM: t => (65279 === t.charCodeAt(0) && (t = t.slice(1)), t),
                    inherits: (t, e, r, i) => {
                        t.prototype = Object.create(e.prototype, i), t.prototype.constructor = t, Object.defineProperty(t, "super", {
                            value: e.prototype
                        }), r && Object.assign(t.prototype, r)
                    },
                    toFlatObject: (t, e, r, i) => {
                        let n, s, o, a = {};
                        if (e = e || {}, null == t) return e;
                        do {
                            for (s = (n = Object.getOwnPropertyNames(t)).length; s-- > 0;) o = n[s], (!i || i(o, t, e)) && !a[o] && (e[o] = t[o], a[o] = !0);
                            t = !1 !== r && c(t)
                        } while (t && (!r || r(t, e)) && t !== Object.prototype);
                        return e
                    },
                    kindOf: p,
                    kindOfTest: m,
                    endsWith: (t, e, r) => {
                        t = String(t), (void 0 === r || r > t.length) && (r = t.length), r -= e.length;
                        let i = t.indexOf(e, r);
                        return -1 !== i && i === r
                    },
                    toArray: t => {
                        if (!t) return null;
                        if (g(t)) return t;
                        let e = t.length;
                        if (!E(e)) return null;
                        let r = Array(e);
                        for (; e-- > 0;) r[e] = t[e];
                        return r
                    },
                    forEachEntry: (t, e) => {
                        let r, i = (t && t[f]).call(t);
                        for (;
                            (r = i.next()) && !r.done;) {
                            let i = r.value;
                            e.call(t, i[0], i[1])
                        }
                    },
                    matchAll: (t, e) => {
                        let r, i = [];
                        for (; null !== (r = t.exec(e));) i.push(r);
                        return i
                    },
                    isHTMLForm: I,
                    hasOwnProperty: _,
                    hasOwnProp: _,
                    reduceDescriptors: z,
                    freezeMethods: t => {
                        z(t, (e, r) => {
                            if (x(t) && -1 !== ["arguments", "caller", "callee"].indexOf(r)) return !1;
                            if (x(t[r])) {
                                if (e.enumerable = !1, "writable" in e) {
                                    e.writable = !1;
                                    return
                                }
                                e.set || (e.set = () => {
                                    throw Error("Can not rewrite read-only method '" + r + "'")
                                })
                            }
                        })
                    },
                    toObjectSet: (t, e) => {
                        let r = {};
                        return (g(t) ? t : String(t).split(e)).forEach(t => {
                            r[t] = !0
                        }), r
                    },
                    toCamelCase: t => t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(t, e, r) {
                        return e.toUpperCase() + r
                    }),
                    noop: () => {},
                    toFiniteNumber: (t, e) => null != t && Number.isFinite(t *= 1) ? t : e,
                    findKey: B,
                    global: V,
                    isContextDefined: F,
                    isSpecCompliantForm: function(t) {
                        return !!(t && x(t.append) && "FormData" === t[d] && t[f])
                    },
                    toJSONObject: t => {
                        let e = Array(10),
                            r = (t, i) => {
                                if (S(t)) {
                                    if (e.indexOf(t) >= 0) return;
                                    if (!("toJSON" in t)) {
                                        e[i] = t;
                                        let n = g(t) ? [] : {};
                                        return L(t, (t, e) => {
                                            let s = r(t, i + 1);
                                            v(s) || (n[e] = s)
                                        }), e[i] = void 0, n
                                    }
                                }
                                return t
                            };
                        return r(t, 0)
                    },
                    isAsyncFn: W,
                    isThenable: t => t && (S(t) || x(t)) && x(t.then) && x(t.catch),
                    setImmediate: q,
                    asap: $,
                    isIterable: t => null != t && x(t[f])
                };

            function H(t, e, r, i, n) {
                Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = Error().stack, this.message = t, this.name = "AxiosError", e && (this.code = e), r && (this.config = r), i && (this.request = i), n && (this.response = n, this.status = n.status ? n.status : null)
            }
            Q.inherits(H, Error, {
                toJSON: function() {
                    return {
                        message: this.message,
                        name: this.name,
                        description: this.description,
                        number: this.number,
                        fileName: this.fileName,
                        lineNumber: this.lineNumber,
                        columnNumber: this.columnNumber,
                        stack: this.stack,
                        config: Q.toJSONObject(this.config),
                        code: this.code,
                        status: this.status
                    }
                }
            });
            let X = H.prototype,
                Y = {};
            ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(t => {
                Y[t] = {
                    value: t
                }
            }), Object.defineProperties(H, Y), Object.defineProperty(X, "isAxiosError", {
                value: !0
            }), H.from = (t, e, r, i, n, s) => {
                let o = Object.create(X);
                return Q.toFlatObject(t, o, function(t) {
                    return t !== Error.prototype
                }, t => "isAxiosError" !== t), H.call(o, t.message, e, r, i, n), o.cause = t, o.name = t.name, s && Object.assign(o, s), o
            };
            var K = r(9641).Buffer;

            function G(t) {
                return Q.isPlainObject(t) || Q.isArray(t)
            }

            function J(t) {
                return Q.endsWith(t, "[]") ? t.slice(0, -2) : t
            }

            function Z(t, e, r) {
                return t ? t.concat(e).map(function(t, e) {
                    return t = J(t), !r && e ? "[" + t + "]" : t
                }).join(r ? "." : "") : e
            }
            let tt = Q.toFlatObject(Q, {}, null, function(t) {
                    return /^is[A-Z]/.test(t)
                }),
                te = function(t, e, r) {
                    if (!Q.isObject(t)) throw TypeError("target must be an object");
                    e = e || new FormData;
                    let i = (r = Q.toFlatObject(r, {
                            metaTokens: !0,
                            dots: !1,
                            indexes: !1
                        }, !1, function(t, e) {
                            return !Q.isUndefined(e[t])
                        })).metaTokens,
                        n = r.visitor || u,
                        s = r.dots,
                        o = r.indexes,
                        a = (r.Blob || "undefined" != typeof Blob && Blob) && Q.isSpecCompliantForm(e);
                    if (!Q.isFunction(n)) throw TypeError("visitor must be a function");

                    function l(t) {
                        if (null === t) return "";
                        if (Q.isDate(t)) return t.toISOString();
                        if (Q.isBoolean(t)) return t.toString();
                        if (!a && Q.isBlob(t)) throw new H("Blob is not supported. Use a Buffer instead.");
                        return Q.isArrayBuffer(t) || Q.isTypedArray(t) ? a && "function" == typeof Blob ? new Blob([t]) : K.from(t) : t
                    }

                    function u(t, r, n) {
                        let a = t;
                        if (t && !n && "object" == typeof t)
                            if (Q.endsWith(r, "{}")) r = i ? r : r.slice(0, -2), t = JSON.stringify(t);
                            else {
                                var u;
                                if (Q.isArray(t) && (u = t, Q.isArray(u) && !u.some(G)) || (Q.isFileList(t) || Q.endsWith(r, "[]")) && (a = Q.toArray(t))) return r = J(r), a.forEach(function(t, i) {
                                    Q.isUndefined(t) || null === t || e.append(!0 === o ? Z([r], i, s) : null === o ? r : r + "[]", l(t))
                                }), !1
                            }
                        return !!G(t) || (e.append(Z(n, r, s), l(t)), !1)
                    }
                    let h = [],
                        c = Object.assign(tt, {
                            defaultVisitor: u,
                            convertValue: l,
                            isVisitable: G
                        });
                    if (!Q.isObject(t)) throw TypeError("data must be an object");
                    return ! function t(r, i) {
                        if (!Q.isUndefined(r)) {
                            if (-1 !== h.indexOf(r)) throw Error("Circular reference detected in " + i.join("."));
                            h.push(r), Q.forEach(r, function(r, s) {
                                !0 === (!(Q.isUndefined(r) || null === r) && n.call(e, r, Q.isString(s) ? s.trim() : s, i, c)) && t(r, i ? i.concat(s) : [s])
                            }), h.pop()
                        }
                    }(t), e
                };

            function tr(t) {
                let e = {
                    "!": "%21",
                    "'": "%27",
                    "(": "%28",
                    ")": "%29",
                    "~": "%7E",
                    "%20": "+",
                    "%00": "\0"
                };
                return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function(t) {
                    return e[t]
                })
            }

            function ti(t, e) {
                this._pairs = [], t && te(t, this, e)
            }
            let tn = ti.prototype;

            function ts(t) {
                return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
            }

            function to(t, e, r) {
                let i;
                if (!e) return t;
                let n = r && r.encode || ts;
                Q.isFunction(r) && (r = {
                    serialize: r
                });
                let s = r && r.serialize;
                if (i = s ? s(e, r) : Q.isURLSearchParams(e) ? e.toString() : new ti(e, r).toString(n)) {
                    let e = t.indexOf("#"); - 1 !== e && (t = t.slice(0, e)), t += (-1 === t.indexOf("?") ? "?" : "&") + i
                }
                return t
            }
            tn.append = function(t, e) {
                this._pairs.push([t, e])
            }, tn.toString = function(t) {
                let e = t ? function(e) {
                    return t.call(this, e, tr)
                } : tr;
                return this._pairs.map(function(t) {
                    return e(t[0]) + "=" + e(t[1])
                }, "").join("&")
            };
            class ta {
                constructor() {
                    this.handlers = []
                }
                use(t, e, r) {
                    return this.handlers.push({
                        fulfilled: t,
                        rejected: e,
                        synchronous: !!r && r.synchronous,
                        runWhen: r ? r.runWhen : null
                    }), this.handlers.length - 1
                }
                eject(t) {
                    this.handlers[t] && (this.handlers[t] = null)
                }
                clear() {
                    this.handlers && (this.handlers = [])
                }
                forEach(t) {
                    Q.forEach(this.handlers, function(e) {
                        null !== e && t(e)
                    })
                }
            }
            let tl = {
                    silentJSONParsing: !0,
                    forcedJSONParsing: !0,
                    clarifyTimeoutError: !1
                },
                tu = "undefined" != typeof URLSearchParams ? URLSearchParams : ti,
                th = "undefined" != typeof FormData ? FormData : null,
                tc = "undefined" != typeof Blob ? Blob : null,
                tf = "undefined" != typeof window && "undefined" != typeof document,
                td = "object" == typeof navigator && navigator || void 0,
                tp = tf && (!td || 0 > ["ReactNative", "NativeScript", "NS"].indexOf(td.product)),
                tm = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && "function" == typeof self.importScripts,
                ty = tf && window.location.href || "http://localhost",
                tg = { ...a,
                    isBrowser: !0,
                    classes: {
                        URLSearchParams: tu,
                        FormData: th,
                        Blob: tc
                    },
                    protocols: ["http", "https", "file", "blob", "url", "data"]
                },
                tv = function(t) {
                    if (Q.isFormData(t) && Q.isFunction(t.entries)) {
                        let e = {};
                        return Q.forEachEntry(t, (t, r) => {
                            ! function t(e, r, i, n) {
                                let s = e[n++];
                                if ("__proto__" === s) return !0;
                                let o = Number.isFinite(+s),
                                    a = n >= e.length;
                                return (s = !s && Q.isArray(i) ? i.length : s, a) ? Q.hasOwnProp(i, s) ? i[s] = [i[s], r] : i[s] = r : (i[s] && Q.isObject(i[s]) || (i[s] = []), t(e, r, i[s], n) && Q.isArray(i[s]) && (i[s] = function(t) {
                                    let e, r, i = {},
                                        n = Object.keys(t),
                                        s = n.length;
                                    for (e = 0; e < s; e++) i[r = n[e]] = t[r];
                                    return i
                                }(i[s]))), !o
                            }(Q.matchAll(/\w+|\[(\w*)]/g, t).map(t => "[]" === t[0] ? "" : t[1] || t[0]), r, e, 0)
                        }), e
                    }
                    return null
                },
                tb = {
                    transitional: tl,
                    adapter: ["xhr", "http", "fetch"],
                    transformRequest: [function(t, e) {
                        let r, i = e.getContentType() || "",
                            n = i.indexOf("application/json") > -1,
                            s = Q.isObject(t);
                        if (s && Q.isHTMLForm(t) && (t = new FormData(t)), Q.isFormData(t)) return n ? JSON.stringify(tv(t)) : t;
                        if (Q.isArrayBuffer(t) || Q.isBuffer(t) || Q.isStream(t) || Q.isFile(t) || Q.isBlob(t) || Q.isReadableStream(t)) return t;
                        if (Q.isArrayBufferView(t)) return t.buffer;
                        if (Q.isURLSearchParams(t)) return e.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
                        if (s) {
                            if (i.indexOf("application/x-www-form-urlencoded") > -1) {
                                var o, a;
                                return (o = t, a = this.formSerializer, te(o, new tg.classes.URLSearchParams, Object.assign({
                                    visitor: function(t, e, r, i) {
                                        return tg.isNode && Q.isBuffer(t) ? (this.append(e, t.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments)
                                    }
                                }, a))).toString()
                            }
                            if ((r = Q.isFileList(t)) || i.indexOf("multipart/form-data") > -1) {
                                let e = this.env && this.env.FormData;
                                return te(r ? {
                                    "files[]": t
                                } : t, e && new e, this.formSerializer)
                            }
                        }
                        if (s || n) {
                            e.setContentType("application/json", !1);
                            var l = t;
                            if (Q.isString(l)) try {
                                return (0, JSON.parse)(l), Q.trim(l)
                            } catch (t) {
                                if ("SyntaxError" !== t.name) throw t
                            }
                            return (0, JSON.stringify)(l)
                        }
                        return t
                    }],
                    transformResponse: [function(t) {
                        let e = this.transitional || tb.transitional,
                            r = e && e.forcedJSONParsing,
                            i = "json" === this.responseType;
                        if (Q.isResponse(t) || Q.isReadableStream(t)) return t;
                        if (t && Q.isString(t) && (r && !this.responseType || i)) {
                            let r = e && e.silentJSONParsing;
                            try {
                                return JSON.parse(t)
                            } catch (t) {
                                if (!r && i) {
                                    if ("SyntaxError" === t.name) throw H.from(t, H.ERR_BAD_RESPONSE, this, null, this.response);
                                    throw t
                                }
                            }
                        }
                        return t
                    }],
                    timeout: 0,
                    xsrfCookieName: "XSRF-TOKEN",
                    xsrfHeaderName: "X-XSRF-TOKEN",
                    maxContentLength: -1,
                    maxBodyLength: -1,
                    env: {
                        FormData: tg.classes.FormData,
                        Blob: tg.classes.Blob
                    },
                    validateStatus: function(t) {
                        return t >= 200 && t < 300
                    },
                    headers: {
                        common: {
                            Accept: "application/json, text/plain, */*",
                            "Content-Type": void 0
                        }
                    }
                };
            Q.forEach(["delete", "get", "head", "post", "put", "patch"], t => {
                tb.headers[t] = {}
            });
            let tw = Q.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]),
                tx = t => {
                    let e, r, i, n = {};
                    return t && t.split("\n").forEach(function(t) {
                        i = t.indexOf(":"), e = t.substring(0, i).trim().toLowerCase(), r = t.substring(i + 1).trim(), !e || n[e] && tw[e] || ("set-cookie" === e ? n[e] ? n[e].push(r) : n[e] = [r] : n[e] = n[e] ? n[e] + ", " + r : r)
                    }), n
                },
                tE = Symbol("internals");

            function tS(t) {
                return t && String(t).trim().toLowerCase()
            }

            function tT(t) {
                return !1 === t || null == t ? t : Q.isArray(t) ? t.map(tT) : String(t)
            }
            let tR = t => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());

            function tA(t, e, r, i, n) {
                if (Q.isFunction(i)) return i.call(this, e, r);
                if (n && (e = r), Q.isString(e)) {
                    if (Q.isString(i)) return -1 !== e.indexOf(i);
                    if (Q.isRegExp(i)) return i.test(e)
                }
            }
            class tP {
                constructor(t) {
                    t && this.set(t)
                }
                set(t, e, r) {
                    let i = this;

                    function n(t, e, r) {
                        let n = tS(e);
                        if (!n) throw Error("header name must be a non-empty string");
                        let s = Q.findKey(i, n);
                        s && void 0 !== i[s] && !0 !== r && (void 0 !== r || !1 === i[s]) || (i[s || e] = tT(t))
                    }
                    let s = (t, e) => Q.forEach(t, (t, r) => n(t, r, e));
                    if (Q.isPlainObject(t) || t instanceof this.constructor) s(t, e);
                    else if (Q.isString(t) && (t = t.trim()) && !tR(t)) s(tx(t), e);
                    else if (Q.isObject(t) && Q.isIterable(t)) {
                        let r = {},
                            i, n;
                        for (let e of t) {
                            if (!Q.isArray(e)) throw TypeError("Object iterator must return a key-value pair");
                            r[n = e[0]] = (i = r[n]) ? Q.isArray(i) ? [...i, e[1]] : [i, e[1]] : e[1]
                        }
                        s(r, e)
                    } else null != t && n(e, t, r);
                    return this
                }
                get(t, e) {
                    if (t = tS(t)) {
                        let r = Q.findKey(this, t);
                        if (r) {
                            let t = this[r];
                            if (!e) return t;
                            if (!0 === e) {
                                let e, r = Object.create(null),
                                    i = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                                for (; e = i.exec(t);) r[e[1]] = e[2];
                                return r
                            }
                            if (Q.isFunction(e)) return e.call(this, t, r);
                            if (Q.isRegExp(e)) return e.exec(t);
                            throw TypeError("parser must be boolean|regexp|function")
                        }
                    }
                }
                has(t, e) {
                    if (t = tS(t)) {
                        let r = Q.findKey(this, t);
                        return !!(r && void 0 !== this[r] && (!e || tA(this, this[r], r, e)))
                    }
                    return !1
                }
                delete(t, e) {
                    let r = this,
                        i = !1;

                    function n(t) {
                        if (t = tS(t)) {
                            let n = Q.findKey(r, t);
                            n && (!e || tA(r, r[n], n, e)) && (delete r[n], i = !0)
                        }
                    }
                    return Q.isArray(t) ? t.forEach(n) : n(t), i
                }
                clear(t) {
                    let e = Object.keys(this),
                        r = e.length,
                        i = !1;
                    for (; r--;) {
                        let n = e[r];
                        (!t || tA(this, this[n], n, t, !0)) && (delete this[n], i = !0)
                    }
                    return i
                }
                normalize(t) {
                    let e = this,
                        r = {};
                    return Q.forEach(this, (i, n) => {
                        let s = Q.findKey(r, n);
                        if (s) {
                            e[s] = tT(i), delete e[n];
                            return
                        }
                        let o = t ? n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, e, r) => e.toUpperCase() + r) : String(n).trim();
                        o !== n && delete e[n], e[o] = tT(i), r[o] = !0
                    }), this
                }
                concat(...t) {
                    return this.constructor.concat(this, ...t)
                }
                toJSON(t) {
                    let e = Object.create(null);
                    return Q.forEach(this, (r, i) => {
                        null != r && !1 !== r && (e[i] = t && Q.isArray(r) ? r.join(", ") : r)
                    }), e
                }[Symbol.iterator]() {
                    return Object.entries(this.toJSON())[Symbol.iterator]()
                }
                toString() {
                    return Object.entries(this.toJSON()).map(([t, e]) => t + ": " + e).join("\n")
                }
                getSetCookie() {
                    return this.get("set-cookie") || []
                }
                get[Symbol.toStringTag]() {
                    return "AxiosHeaders"
                }
                static from(t) {
                    return t instanceof this ? t : new this(t)
                }
                static concat(t, ...e) {
                    let r = new this(t);
                    return e.forEach(t => r.set(t)), r
                }
                static accessor(t) {
                    let e = (this[tE] = this[tE] = {
                            accessors: {}
                        }).accessors,
                        r = this.prototype;

                    function i(t) {
                        let i = tS(t);
                        if (!e[i]) {
                            let n = Q.toCamelCase(" " + t);
                            ["get", "set", "has"].forEach(e => {
                                Object.defineProperty(r, e + n, {
                                    value: function(r, i, n) {
                                        return this[e].call(this, t, r, i, n)
                                    },
                                    configurable: !0
                                })
                            }), e[i] = !0
                        }
                    }
                    return Q.isArray(t) ? t.forEach(i) : i(t), this
                }
            }

            function tC(t, e) {
                let r = this || tb,
                    i = e || r,
                    n = tP.from(i.headers),
                    s = i.data;
                return Q.forEach(t, function(t) {
                    s = t.call(r, s, n.normalize(), e ? e.status : void 0)
                }), n.normalize(), s
            }

            function tO(t) {
                return !!(t && t.__CANCEL__)
            }

            function tM(t, e, r) {
                H.call(this, null == t ? "canceled" : t, H.ERR_CANCELED, e, r), this.name = "CanceledError"
            }

            function tj(t, e, r) {
                let i = r.config.validateStatus;
                !r.status || !i || i(r.status) ? t(r) : e(new H("Request failed with status code " + r.status, [H.ERR_BAD_REQUEST, H.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4], r.config, r.request, r))
            }
            tP.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]), Q.reduceDescriptors(tP.prototype, ({
                value: t
            }, e) => {
                let r = e[0].toUpperCase() + e.slice(1);
                return {
                    get: () => t,
                    set(t) {
                        this[r] = t
                    }
                }
            }), Q.freezeMethods(tP), Q.inherits(tM, H, {
                __CANCEL__: !0
            });
            let tk = function(t, e) {
                    let r, i = Array(t = t || 10),
                        n = Array(t),
                        s = 0,
                        o = 0;
                    return e = void 0 !== e ? e : 1e3,
                        function(a) {
                            let l = Date.now(),
                                u = n[o];
                            r || (r = l), i[s] = a, n[s] = l;
                            let h = o,
                                c = 0;
                            for (; h !== s;) c += i[h++], h %= t;
                            if ((s = (s + 1) % t) === o && (o = (o + 1) % t), l - r < e) return;
                            let f = u && l - u;
                            return f ? Math.round(1e3 * c / f) : void 0
                        }
                },
                tD = function(t, e) {
                    let r, i, n = 0,
                        s = 1e3 / e,
                        o = (e, s = Date.now()) => {
                            n = s, r = null, i && (clearTimeout(i), i = null), t.apply(null, e)
                        };
                    return [(...t) => {
                        let e = Date.now(),
                            a = e - n;
                        a >= s ? o(t, e) : (r = t, i || (i = setTimeout(() => {
                            i = null, o(r)
                        }, s - a)))
                    }, () => r && o(r)]
                },
                tL = (t, e, r = 3) => {
                    let i = 0,
                        n = tk(50, 250);
                    return tD(r => {
                        let s = r.loaded,
                            o = r.lengthComputable ? r.total : void 0,
                            a = s - i,
                            l = n(a);
                        i = s, t({
                            loaded: s,
                            total: o,
                            progress: o ? s / o : void 0,
                            bytes: a,
                            rate: l || void 0,
                            estimated: l && o && s <= o ? (o - s) / l : void 0,
                            event: r,
                            lengthComputable: null != o,
                            [e ? "download" : "upload"]: !0
                        })
                    }, r)
                },
                tB = (t, e) => {
                    let r = null != t;
                    return [i => e[0]({
                        lengthComputable: r,
                        total: t,
                        loaded: i
                    }), e[1]]
                },
                tV = t => (...e) => Q.asap(() => t(...e)),
                tF = tg.hasStandardBrowserEnv ? ((t, e) => r => (r = new URL(r, tg.origin), t.protocol === r.protocol && t.host === r.host && (e || t.port === r.port)))(new URL(tg.origin), tg.navigator && /(msie|trident)/i.test(tg.navigator.userAgent)) : () => !0,
                tU = tg.hasStandardBrowserEnv ? {
                    write(t, e, r, i, n, s) {
                        let o = [t + "=" + encodeURIComponent(e)];
                        Q.isNumber(r) && o.push("expires=" + new Date(r).toGMTString()), Q.isString(i) && o.push("path=" + i), Q.isString(n) && o.push("domain=" + n), !0 === s && o.push("secure"), document.cookie = o.join("; ")
                    },
                    read(t) {
                        let e = document.cookie.match(RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
                        return e ? decodeURIComponent(e[3]) : null
                    },
                    remove(t) {
                        this.write(t, "", Date.now() - 864e5)
                    }
                } : {
                    write() {},
                    read: () => null,
                    remove() {}
                };

            function tI(t, e, r) {
                let i = !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
                return t && (i || !1 == r) ? e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t : e
            }
            let t_ = t => t instanceof tP ? { ...t
            } : t;

            function tN(t, e) {
                e = e || {};
                let r = {};

                function i(t, e, r, i) {
                    return Q.isPlainObject(t) && Q.isPlainObject(e) ? Q.merge.call({
                        caseless: i
                    }, t, e) : Q.isPlainObject(e) ? Q.merge({}, e) : Q.isArray(e) ? e.slice() : e
                }

                function n(t, e, r, n) {
                    return Q.isUndefined(e) ? Q.isUndefined(t) ? void 0 : i(void 0, t, r, n) : i(t, e, r, n)
                }

                function s(t, e) {
                    if (!Q.isUndefined(e)) return i(void 0, e)
                }

                function o(t, e) {
                    return Q.isUndefined(e) ? Q.isUndefined(t) ? void 0 : i(void 0, t) : i(void 0, e)
                }

                function a(r, n, s) {
                    return s in e ? i(r, n) : s in t ? i(void 0, r) : void 0
                }
                let l = {
                    url: s,
                    method: s,
                    data: s,
                    baseURL: o,
                    transformRequest: o,
                    transformResponse: o,
                    paramsSerializer: o,
                    timeout: o,
                    timeoutMessage: o,
                    withCredentials: o,
                    withXSRFToken: o,
                    adapter: o,
                    responseType: o,
                    xsrfCookieName: o,
                    xsrfHeaderName: o,
                    onUploadProgress: o,
                    onDownloadProgress: o,
                    decompress: o,
                    maxContentLength: o,
                    maxBodyLength: o,
                    beforeRedirect: o,
                    transport: o,
                    httpAgent: o,
                    httpsAgent: o,
                    cancelToken: o,
                    socketPath: o,
                    responseEncoding: o,
                    validateStatus: a,
                    headers: (t, e, r) => n(t_(t), t_(e), r, !0)
                };
                return Q.forEach(Object.keys(Object.assign({}, t, e)), function(i) {
                    let s = l[i] || n,
                        o = s(t[i], e[i], i);
                    Q.isUndefined(o) && s !== a || (r[i] = o)
                }), r
            }
            let tz = t => {
                    let e, r = tN({}, t),
                        {
                            data: i,
                            withXSRFToken: n,
                            xsrfHeaderName: s,
                            xsrfCookieName: o,
                            headers: a,
                            auth: l
                        } = r;
                    if (r.headers = a = tP.from(a), r.url = to(tI(r.baseURL, r.url, r.allowAbsoluteUrls), t.params, t.paramsSerializer), l && a.set("Authorization", "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))), Q.isFormData(i)) {
                        if (tg.hasStandardBrowserEnv || tg.hasStandardBrowserWebWorkerEnv) a.setContentType(void 0);
                        else if (!1 !== (e = a.getContentType())) {
                            let [t, ...r] = e ? e.split(";").map(t => t.trim()).filter(Boolean) : [];
                            a.setContentType([t || "multipart/form-data", ...r].join("; "))
                        }
                    }
                    if (tg.hasStandardBrowserEnv && (n && Q.isFunction(n) && (n = n(r)), n || !1 !== n && tF(r.url))) {
                        let t = s && o && tU.read(o);
                        t && a.set(s, t)
                    }
                    return r
                },
                tW = "undefined" != typeof XMLHttpRequest && function(t) {
                    return new Promise(function(e, r) {
                        let i, n, s, o, a, l = tz(t),
                            u = l.data,
                            h = tP.from(l.headers).normalize(),
                            {
                                responseType: c,
                                onUploadProgress: f,
                                onDownloadProgress: d
                            } = l;

                        function p() {
                            o && o(), a && a(), l.cancelToken && l.cancelToken.unsubscribe(i), l.signal && l.signal.removeEventListener("abort", i)
                        }
                        let m = new XMLHttpRequest;

                        function y() {
                            if (!m) return;
                            let i = tP.from("getAllResponseHeaders" in m && m.getAllResponseHeaders());
                            tj(function(t) {
                                e(t), p()
                            }, function(t) {
                                r(t), p()
                            }, {
                                data: c && "text" !== c && "json" !== c ? m.response : m.responseText,
                                status: m.status,
                                statusText: m.statusText,
                                headers: i,
                                config: t,
                                request: m
                            }), m = null
                        }
                        m.open(l.method.toUpperCase(), l.url, !0), m.timeout = l.timeout, "onloadend" in m ? m.onloadend = y : m.onreadystatechange = function() {
                            m && 4 === m.readyState && (0 !== m.status || m.responseURL && 0 === m.responseURL.indexOf("file:")) && setTimeout(y)
                        }, m.onabort = function() {
                            m && (r(new H("Request aborted", H.ECONNABORTED, t, m)), m = null)
                        }, m.onerror = function() {
                            r(new H("Network Error", H.ERR_NETWORK, t, m)), m = null
                        }, m.ontimeout = function() {
                            let e = l.timeout ? "timeout of " + l.timeout + "ms exceeded" : "timeout exceeded",
                                i = l.transitional || tl;
                            l.timeoutErrorMessage && (e = l.timeoutErrorMessage), r(new H(e, i.clarifyTimeoutError ? H.ETIMEDOUT : H.ECONNABORTED, t, m)), m = null
                        }, void 0 === u && h.setContentType(null), "setRequestHeader" in m && Q.forEach(h.toJSON(), function(t, e) {
                            m.setRequestHeader(e, t)
                        }), Q.isUndefined(l.withCredentials) || (m.withCredentials = !!l.withCredentials), c && "json" !== c && (m.responseType = l.responseType), d && ([s, a] = tL(d, !0), m.addEventListener("progress", s)), f && m.upload && ([n, o] = tL(f), m.upload.addEventListener("progress", n), m.upload.addEventListener("loadend", o)), (l.cancelToken || l.signal) && (i = e => {
                            m && (r(!e || e.type ? new tM(null, t, m) : e), m.abort(), m = null)
                        }, l.cancelToken && l.cancelToken.subscribe(i), l.signal && (l.signal.aborted ? i() : l.signal.addEventListener("abort", i)));
                        let g = function(t) {
                            let e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
                            return e && e[1] || ""
                        }(l.url);
                        if (g && -1 === tg.protocols.indexOf(g)) return void r(new H("Unsupported protocol " + g + ":", H.ERR_BAD_REQUEST, t));
                        m.send(u || null)
                    })
                },
                tq = (t, e) => {
                    let {
                        length: r
                    } = t = t ? t.filter(Boolean) : [];
                    if (e || r) {
                        let r, i = new AbortController,
                            n = function(t) {
                                if (!r) {
                                    r = !0, o();
                                    let e = t instanceof Error ? t : this.reason;
                                    i.abort(e instanceof H ? e : new tM(e instanceof Error ? e.message : e))
                                }
                            },
                            s = e && setTimeout(() => {
                                s = null, n(new H(`timeout ${e} of ms exceeded`, H.ETIMEDOUT))
                            }, e),
                            o = () => {
                                t && (s && clearTimeout(s), s = null, t.forEach(t => {
                                    t.unsubscribe ? t.unsubscribe(n) : t.removeEventListener("abort", n)
                                }), t = null)
                            };
                        t.forEach(t => t.addEventListener("abort", n));
                        let {
                            signal: a
                        } = i;
                        return a.unsubscribe = () => Q.asap(o), a
                    }
                },
                t$ = function*(t, e) {
                    let r, i = t.byteLength;
                    if (!e || i < e) return void(yield t);
                    let n = 0;
                    for (; n < i;) r = n + e, yield t.slice(n, r), n = r
                },
                tQ = async function*(t, e) {
                    for await (let r of tH(t)) yield* t$(r, e)
                },
                tH = async function*(t) {
                    if (t[Symbol.asyncIterator]) return void(yield* t);
                    let e = t.getReader();
                    try {
                        for (;;) {
                            let {
                                done: t,
                                value: r
                            } = await e.read();
                            if (t) break;
                            yield r
                        }
                    } finally {
                        await e.cancel()
                    }
                },
                tX = (t, e, r, i) => {
                    let n, s = tQ(t, e),
                        o = 0,
                        a = t => {
                            !n && (n = !0, i && i(t))
                        };
                    return new ReadableStream({
                        async pull(t) {
                            try {
                                let {
                                    done: e,
                                    value: i
                                } = await s.next();
                                if (e) {
                                    a(), t.close();
                                    return
                                }
                                let n = i.byteLength;
                                if (r) {
                                    let t = o += n;
                                    r(t)
                                }
                                t.enqueue(new Uint8Array(i))
                            } catch (t) {
                                throw a(t), t
                            }
                        },
                        cancel: t => (a(t), s.return())
                    }, {
                        highWaterMark: 2
                    })
                },
                tY = "function" == typeof fetch && "function" == typeof Request && "function" == typeof Response,
                tK = tY && "function" == typeof ReadableStream,
                tG = tY && ("function" == typeof TextEncoder ? (i = new TextEncoder, t => i.encode(t)) : async t => new Uint8Array(await new Response(t).arrayBuffer())),
                tJ = (t, ...e) => {
                    try {
                        return !!t(...e)
                    } catch (t) {
                        return !1
                    }
                },
                tZ = tK && tJ(() => {
                    let t = !1,
                        e = new Request(tg.origin, {
                            body: new ReadableStream,
                            method: "POST",
                            get duplex() {
                                return t = !0, "half"
                            }
                        }).headers.has("Content-Type");
                    return t && !e
                }),
                t0 = tK && tJ(() => Q.isReadableStream(new Response("").body)),
                t1 = {
                    stream: t0 && (t => t.body)
                };
            tY && (o = new Response, ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(t => {
                t1[t] || (t1[t] = Q.isFunction(o[t]) ? e => e[t]() : (e, r) => {
                    throw new H(`Response type '${t}' is not supported`, H.ERR_NOT_SUPPORT, r)
                })
            }));
            let t2 = async t => {
                    if (null == t) return 0;
                    if (Q.isBlob(t)) return t.size;
                    if (Q.isSpecCompliantForm(t)) {
                        let e = new Request(tg.origin, {
                            method: "POST",
                            body: t
                        });
                        return (await e.arrayBuffer()).byteLength
                    }
                    return Q.isArrayBufferView(t) || Q.isArrayBuffer(t) ? t.byteLength : (Q.isURLSearchParams(t) && (t += ""), Q.isString(t)) ? (await tG(t)).byteLength : void 0
                },
                t5 = async (t, e) => {
                    let r = Q.toFiniteNumber(t.getContentLength());
                    return null == r ? t2(e) : r
                },
                t3 = {
                    http: null,
                    xhr: tW,
                    fetch: tY && (async t => {
                        let e, r, {
                            url: i,
                            method: n,
                            data: s,
                            signal: o,
                            cancelToken: a,
                            timeout: l,
                            onDownloadProgress: u,
                            onUploadProgress: h,
                            responseType: c,
                            headers: f,
                            withCredentials: d = "same-origin",
                            fetchOptions: p
                        } = tz(t);
                        c = c ? (c + "").toLowerCase() : "text";
                        let m = tq([o, a && a.toAbortSignal()], l),
                            y = m && m.unsubscribe && (() => {
                                m.unsubscribe()
                            });
                        try {
                            if (h && tZ && "get" !== n && "head" !== n && 0 !== (r = await t5(f, s))) {
                                let t, e = new Request(i, {
                                    method: "POST",
                                    body: s,
                                    duplex: "half"
                                });
                                if (Q.isFormData(s) && (t = e.headers.get("content-type")) && f.setContentType(t), e.body) {
                                    let [t, i] = tB(r, tL(tV(h)));
                                    s = tX(e.body, 65536, t, i)
                                }
                            }
                            Q.isString(d) || (d = d ? "include" : "omit");
                            let o = "credentials" in Request.prototype;
                            e = new Request(i, { ...p,
                                signal: m,
                                method: n.toUpperCase(),
                                headers: f.normalize().toJSON(),
                                body: s,
                                duplex: "half",
                                credentials: o ? d : void 0
                            });
                            let a = await fetch(e, p),
                                l = t0 && ("stream" === c || "response" === c);
                            if (t0 && (u || l && y)) {
                                let t = {};
                                ["status", "statusText", "headers"].forEach(e => {
                                    t[e] = a[e]
                                });
                                let e = Q.toFiniteNumber(a.headers.get("content-length")),
                                    [r, i] = u && tB(e, tL(tV(u), !0)) || [];
                                a = new Response(tX(a.body, 65536, r, () => {
                                    i && i(), y && y()
                                }), t)
                            }
                            c = c || "text";
                            let g = await t1[Q.findKey(t1, c) || "text"](a, t);
                            return !l && y && y(), await new Promise((r, i) => {
                                tj(r, i, {
                                    data: g,
                                    headers: tP.from(a.headers),
                                    status: a.status,
                                    statusText: a.statusText,
                                    config: t,
                                    request: e
                                })
                            })
                        } catch (r) {
                            if (y && y(), r && "TypeError" === r.name && /Load failed|fetch/i.test(r.message)) throw Object.assign(new H("Network Error", H.ERR_NETWORK, t, e), {
                                cause: r.cause || r
                            });
                            throw H.from(r, r && r.code, t, e)
                        }
                    })
                };
            Q.forEach(t3, (t, e) => {
                if (t) {
                    try {
                        Object.defineProperty(t, "name", {
                            value: e
                        })
                    } catch (t) {}
                    Object.defineProperty(t, "adapterName", {
                        value: e
                    })
                }
            });
            let t6 = t => `- ${t}`,
                t8 = t => Q.isFunction(t) || null === t || !1 === t,
                t4 = {
                    getAdapter: t => {
                        let e, r, {
                                length: i
                            } = t = Q.isArray(t) ? t : [t],
                            n = {};
                        for (let s = 0; s < i; s++) {
                            let i;
                            if (r = e = t[s], !t8(e) && void 0 === (r = t3[(i = String(e)).toLowerCase()])) throw new H(`Unknown adapter '${i}'`);
                            if (r) break;
                            n[i || "#" + s] = r
                        }
                        if (!r) {
                            let t = Object.entries(n).map(([t, e]) => `adapter ${t} ` + (!1 === e ? "is not supported by the environment" : "is not available in the build"));
                            throw new H("There is no suitable adapter to dispatch the request " + (i ? t.length > 1 ? "since :\n" + t.map(t6).join("\n") : " " + t6(t[0]) : "as no adapter specified"), "ERR_NOT_SUPPORT")
                        }
                        return r
                    }
                };

            function t9(t) {
                if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted) throw new tM(null, t)
            }

            function t7(t) {
                return t9(t), t.headers = tP.from(t.headers), t.data = tC.call(t, t.transformRequest), -1 !== ["post", "put", "patch"].indexOf(t.method) && t.headers.setContentType("application/x-www-form-urlencoded", !1), t4.getAdapter(t.adapter || tb.adapter)(t).then(function(e) {
                    return t9(t), e.data = tC.call(t, t.transformResponse, e), e.headers = tP.from(e.headers), e
                }, function(e) {
                    return !tO(e) && (t9(t), e && e.response && (e.response.data = tC.call(t, t.transformResponse, e.response), e.response.headers = tP.from(e.response.headers))), Promise.reject(e)
                })
            }
            let et = "1.10.0",
                ee = {};
            ["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
                ee[t] = function(r) {
                    return typeof r === t || "a" + (e < 1 ? "n " : " ") + t
                }
            });
            let er = {};
            ee.transitional = function(t, e, r) {
                function i(t, e) {
                    return "[Axios v" + et + "] Transitional option '" + t + "'" + e + (r ? ". " + r : "")
                }
                return (r, n, s) => {
                    if (!1 === t) throw new H(i(n, " has been removed" + (e ? " in " + e : "")), H.ERR_DEPRECATED);
                    return e && !er[n] && (er[n] = !0, console.warn(i(n, " has been deprecated since v" + e + " and will be removed in the near future"))), !t || t(r, n, s)
                }
            }, ee.spelling = function(t) {
                return (e, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0)
            };
            let ei = {
                    assertOptions: function(t, e, r) {
                        if ("object" != typeof t) throw new H("options must be an object", H.ERR_BAD_OPTION_VALUE);
                        let i = Object.keys(t),
                            n = i.length;
                        for (; n-- > 0;) {
                            let s = i[n],
                                o = e[s];
                            if (o) {
                                let e = t[s],
                                    r = void 0 === e || o(e, s, t);
                                if (!0 !== r) throw new H("option " + s + " must be " + r, H.ERR_BAD_OPTION_VALUE);
                                continue
                            }
                            if (!0 !== r) throw new H("Unknown option " + s, H.ERR_BAD_OPTION)
                        }
                    },
                    validators: ee
                },
                en = ei.validators;
            class es {
                constructor(t) {
                    this.defaults = t || {}, this.interceptors = {
                        request: new ta,
                        response: new ta
                    }
                }
                async request(t, e) {
                    try {
                        return await this._request(t, e)
                    } catch (t) {
                        if (t instanceof Error) {
                            let e = {};
                            Error.captureStackTrace ? Error.captureStackTrace(e) : e = Error();
                            let r = e.stack ? e.stack.replace(/^.+\n/, "") : "";
                            try {
                                t.stack ? r && !String(t.stack).endsWith(r.replace(/^.+\n.+\n/, "")) && (t.stack += "\n" + r) : t.stack = r
                            } catch (t) {}
                        }
                        throw t
                    }
                }
                _request(t, e) {
                    let r, i;
                    "string" == typeof t ? (e = e || {}).url = t : e = t || {};
                    let {
                        transitional: n,
                        paramsSerializer: s,
                        headers: o
                    } = e = tN(this.defaults, e);
                    void 0 !== n && ei.assertOptions(n, {
                        silentJSONParsing: en.transitional(en.boolean),
                        forcedJSONParsing: en.transitional(en.boolean),
                        clarifyTimeoutError: en.transitional(en.boolean)
                    }, !1), null != s && (Q.isFunction(s) ? e.paramsSerializer = {
                        serialize: s
                    } : ei.assertOptions(s, {
                        encode: en.function,
                        serialize: en.function
                    }, !0)), void 0 !== e.allowAbsoluteUrls || (void 0 !== this.defaults.allowAbsoluteUrls ? e.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : e.allowAbsoluteUrls = !0), ei.assertOptions(e, {
                        baseUrl: en.spelling("baseURL"),
                        withXsrfToken: en.spelling("withXSRFToken")
                    }, !0), e.method = (e.method || this.defaults.method || "get").toLowerCase();
                    let a = o && Q.merge(o.common, o[e.method]);
                    o && Q.forEach(["delete", "get", "head", "post", "put", "patch", "common"], t => {
                        delete o[t]
                    }), e.headers = tP.concat(a, o);
                    let l = [],
                        u = !0;
                    this.interceptors.request.forEach(function(t) {
                        ("function" != typeof t.runWhen || !1 !== t.runWhen(e)) && (u = u && t.synchronous, l.unshift(t.fulfilled, t.rejected))
                    });
                    let h = [];
                    this.interceptors.response.forEach(function(t) {
                        h.push(t.fulfilled, t.rejected)
                    });
                    let c = 0;
                    if (!u) {
                        let t = [t7.bind(this), void 0];
                        for (t.unshift.apply(t, l), t.push.apply(t, h), i = t.length, r = Promise.resolve(e); c < i;) r = r.then(t[c++], t[c++]);
                        return r
                    }
                    i = l.length;
                    let f = e;
                    for (c = 0; c < i;) {
                        let t = l[c++],
                            e = l[c++];
                        try {
                            f = t(f)
                        } catch (t) {
                            e.call(this, t);
                            break
                        }
                    }
                    try {
                        r = t7.call(this, f)
                    } catch (t) {
                        return Promise.reject(t)
                    }
                    for (c = 0, i = h.length; c < i;) r = r.then(h[c++], h[c++]);
                    return r
                }
                getUri(t) {
                    return to(tI((t = tN(this.defaults, t)).baseURL, t.url, t.allowAbsoluteUrls), t.params, t.paramsSerializer)
                }
            }
            Q.forEach(["delete", "get", "head", "options"], function(t) {
                es.prototype[t] = function(e, r) {
                    return this.request(tN(r || {}, {
                        method: t,
                        url: e,
                        data: (r || {}).data
                    }))
                }
            }), Q.forEach(["post", "put", "patch"], function(t) {
                function e(e) {
                    return function(r, i, n) {
                        return this.request(tN(n || {}, {
                            method: t,
                            headers: e ? {
                                "Content-Type": "multipart/form-data"
                            } : {},
                            url: r,
                            data: i
                        }))
                    }
                }
                es.prototype[t] = e(), es.prototype[t + "Form"] = e(!0)
            });
            class eo {
                constructor(t) {
                    let e;
                    if ("function" != typeof t) throw TypeError("executor must be a function.");
                    this.promise = new Promise(function(t) {
                        e = t
                    });
                    let r = this;
                    this.promise.then(t => {
                        if (!r._listeners) return;
                        let e = r._listeners.length;
                        for (; e-- > 0;) r._listeners[e](t);
                        r._listeners = null
                    }), this.promise.then = t => {
                        let e, i = new Promise(t => {
                            r.subscribe(t), e = t
                        }).then(t);
                        return i.cancel = function() {
                            r.unsubscribe(e)
                        }, i
                    }, t(function(t, i, n) {
                        r.reason || (r.reason = new tM(t, i, n), e(r.reason))
                    })
                }
                throwIfRequested() {
                    if (this.reason) throw this.reason
                }
                subscribe(t) {
                    if (this.reason) return void t(this.reason);
                    this._listeners ? this._listeners.push(t) : this._listeners = [t]
                }
                unsubscribe(t) {
                    if (!this._listeners) return;
                    let e = this._listeners.indexOf(t); - 1 !== e && this._listeners.splice(e, 1)
                }
                toAbortSignal() {
                    let t = new AbortController,
                        e = e => {
                            t.abort(e)
                        };
                    return this.subscribe(e), t.signal.unsubscribe = () => this.unsubscribe(e), t.signal
                }
                static source() {
                    let t;
                    return {
                        token: new eo(function(e) {
                            t = e
                        }),
                        cancel: t
                    }
                }
            }
            let ea = {
                Continue: 100,
                SwitchingProtocols: 101,
                Processing: 102,
                EarlyHints: 103,
                Ok: 200,
                Created: 201,
                Accepted: 202,
                NonAuthoritativeInformation: 203,
                NoContent: 204,
                ResetContent: 205,
                PartialContent: 206,
                MultiStatus: 207,
                AlreadyReported: 208,
                ImUsed: 226,
                MultipleChoices: 300,
                MovedPermanently: 301,
                Found: 302,
                SeeOther: 303,
                NotModified: 304,
                UseProxy: 305,
                Unused: 306,
                TemporaryRedirect: 307,
                PermanentRedirect: 308,
                BadRequest: 400,
                Unauthorized: 401,
                PaymentRequired: 402,
                Forbidden: 403,
                NotFound: 404,
                MethodNotAllowed: 405,
                NotAcceptable: 406,
                ProxyAuthenticationRequired: 407,
                RequestTimeout: 408,
                Conflict: 409,
                Gone: 410,
                LengthRequired: 411,
                PreconditionFailed: 412,
                PayloadTooLarge: 413,
                UriTooLong: 414,
                UnsupportedMediaType: 415,
                RangeNotSatisfiable: 416,
                ExpectationFailed: 417,
                ImATeapot: 418,
                MisdirectedRequest: 421,
                UnprocessableEntity: 422,
                Locked: 423,
                FailedDependency: 424,
                TooEarly: 425,
                UpgradeRequired: 426,
                PreconditionRequired: 428,
                TooManyRequests: 429,
                RequestHeaderFieldsTooLarge: 431,
                UnavailableForLegalReasons: 451,
                InternalServerError: 500,
                NotImplemented: 501,
                BadGateway: 502,
                ServiceUnavailable: 503,
                GatewayTimeout: 504,
                HttpVersionNotSupported: 505,
                VariantAlsoNegotiates: 506,
                InsufficientStorage: 507,
                LoopDetected: 508,
                NotExtended: 510,
                NetworkAuthenticationRequired: 511
            };
            Object.entries(ea).forEach(([t, e]) => {
                ea[e] = t
            });
            let el = function t(e) {
                let r = new es(e),
                    i = l(es.prototype.request, r);
                return Q.extend(i, es.prototype, r, {
                    allOwnKeys: !0
                }), Q.extend(i, r, null, {
                    allOwnKeys: !0
                }), i.create = function(r) {
                    return t(tN(e, r))
                }, i
            }(tb);
            el.Axios = es, el.CanceledError = tM, el.CancelToken = eo, el.isCancel = tO, el.VERSION = et, el.toFormData = te, el.AxiosError = H, el.Cancel = el.CanceledError, el.all = function(t) {
                return Promise.all(t)
            }, el.spread = function(t) {
                return function(e) {
                    return t.apply(null, e)
                }
            }, el.isAxiosError = function(t) {
                return Q.isObject(t) && !0 === t.isAxiosError
            }, el.mergeConfig = tN, el.AxiosHeaders = tP, el.formToJSON = t => tv(Q.isHTMLForm(t) ? new FormData(t) : t), el.getAdapter = t4.getAdapter, el.HttpStatusCode = ea, el.default = el;
            let eu = el
        },
        3509: (t, e, r) => {
            "use strict";
            r.d(e, {
                A: () => i
            });
            let i = (0, r(9946).A)("moon", [
                ["path", {
                    d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",
                    key: "a7tn18"
                }]
            ])
        },
        4052: (t, e, r) => {
            var i = 0 / 0,
                n = /^\s+|\s+$/g,
                s = /^[-+]0x[0-9a-f]+$/i,
                o = /^0b[01]+$/i,
                a = /^0o[0-7]+$/i,
                l = parseInt,
                u = "object" == typeof r.g && r.g && r.g.Object === Object && r.g,
                h = "object" == typeof self && self && self.Object === Object && self,
                c = u || h || Function("return this")(),
                f = Object.prototype.toString,
                d = Math.max,
                p = Math.min,
                m = function() {
                    return c.Date.now()
                };

            function y(t) {
                var e = typeof t;
                return !!t && ("object" == e || "function" == e)
            }

            function g(t) {
                if ("number" == typeof t) return t;
                if ("symbol" == typeof(e = t) || e && "object" == typeof e && "[object Symbol]" == f.call(e)) return i;
                if (y(t)) {
                    var e, r = "function" == typeof t.valueOf ? t.valueOf() : t;
                    t = y(r) ? r + "" : r
                }
                if ("string" != typeof t) return 0 === t ? t : +t;
                t = t.replace(n, "");
                var u = o.test(t);
                return u || a.test(t) ? l(t.slice(2), u ? 2 : 8) : s.test(t) ? i : +t
            }
            t.exports = function(t, e, r) {
                var i, n, s, o, a, l, u = 0,
                    h = !1,
                    c = !1,
                    f = !0;
                if ("function" != typeof t) throw TypeError("Expected a function");

                function v(e) {
                    var r = i,
                        s = n;
                    return i = n = void 0, u = e, o = t.apply(s, r)
                }

                function b(t) {
                    var r = t - l,
                        i = t - u;
                    return void 0 === l || r >= e || r < 0 || c && i >= s
                }

                function w() {
                    var t, r, i, n = m();
                    if (b(n)) return x(n);
                    a = setTimeout(w, (t = n - l, r = n - u, i = e - t, c ? p(i, s - r) : i))
                }

                function x(t) {
                    return (a = void 0, f && i) ? v(t) : (i = n = void 0, o)
                }

                function E() {
                    var t, r = m(),
                        s = b(r);
                    if (i = arguments, n = this, l = r, s) {
                        if (void 0 === a) return u = t = l, a = setTimeout(w, e), h ? v(t) : o;
                        if (c) return a = setTimeout(w, e), v(l)
                    }
                    return void 0 === a && (a = setTimeout(w, e)), o
                }
                return e = g(e) || 0, y(r) && (h = !!r.leading, s = (c = "maxWait" in r) ? d(g(r.maxWait) || 0, e) : s, f = "trailing" in r ? !!r.trailing : f), E.cancel = function() {
                    void 0 !== a && clearTimeout(a), u = 0, i = l = n = a = void 0
                }, E.flush = function() {
                    return void 0 === a ? o : x(m())
                }, E
            }
        },
        4692: (t, e, r) => {
            "use strict";
            r.d(e, {
                Q3: () => c,
                Ub: () => h
            });
            var i = r(2115),
                n = r(4052),
                s = "undefined" != typeof window ? i.useLayoutEffect : i.useEffect;

            function o(t, e, r, i) {
                let n = useRef(e);
                s(() => {
                    n.current = e
                }, [e]), useEffect(() => {
                    let e = (null == r ? void 0 : r.current) ? ? window;
                    if (!(e && e.addEventListener)) return;
                    let s = t => {
                        n.current(t)
                    };
                    return e.addEventListener(t, s, i), () => {
                        e.removeEventListener(t, s, i)
                    }
                }, [t, r, i])
            }

            function a(t) {
                let e = useRef(() => {
                    throw Error("Cannot call an event handler while rendering.")
                });
                return s(() => {
                    e.current = t
                }, [t]), useCallback((...t) => {
                    var r;
                    return null == (r = e.current) ? void 0 : r.call(e, ...t)
                }, [e])
            }
            var l = "undefined" == typeof window,
                u = "undefined" == typeof window;

            function h(t, {
                defaultValue: e = !1,
                initializeWithValue: r = !0
            } = {}) {
                let n = t => u ? e : window.matchMedia(t).matches,
                    [o, a] = (0, i.useState)(() => r ? n(t) : e);

                function l() {
                    a(n(t))
                }
                return s(() => {
                    let e = window.matchMedia(t);
                    return l(), e.addListener ? e.addListener(l) : e.addEventListener("change", l), () => {
                        e.removeListener ? e.removeListener(l) : e.removeEventListener("change", l)
                    }
                }, [t]), o
            }

            function c(t, e, r) {
                let s = (null == r ? void 0 : r.equalityFn) ? ? ((t, e) => t === e),
                    o = t instanceof Function ? t() : t,
                    [a, l] = (0, i.useState)(o),
                    u = (0, i.useRef)(o),
                    h = function(t, e = 500, r) {
                        let s = (0, i.useRef)();
                        var o = () => {
                            s.current && s.current.cancel()
                        };
                        let a = (0, i.useRef)(o);
                        a.current = o, (0, i.useEffect)(() => () => {
                            a.current()
                        }, []);
                        let l = (0, i.useMemo)(() => {
                            let i = n(t, e, r),
                                o = (...t) => i(...t);
                            return o.cancel = () => {
                                i.cancel()
                            }, o.isPending = () => !!s.current, o.flush = () => i.flush(), o
                        }, [t, e, r]);
                        return (0, i.useEffect)(() => {
                            s.current = n(t, e, r)
                        }, [t, e, r]), l
                    }(l, e, r);
                return s(u.current, o) || (h(o), u.current = o), [a, h]
            }
        },
        4905: (t, e, r) => {
            "use strict";
            r.d(e, {
                xQ: () => s
            });
            var i = r(2115),
                n = r(430);

            function s(t = !0) {
                let e = (0, i.useContext)(n.t);
                if (null === e) return [!0, null];
                let {
                    isPresent: r,
                    onExitComplete: o,
                    register: a
                } = e, l = (0, i.useId)();
                (0, i.useEffect)(() => {
                    if (t) return a(l)
                }, [t]);
                let u = (0, i.useCallback)(() => t && o && o(l), [l, o, t]);
                return !r && o ? [!1, u] : [!0]
            }
        },
        5029: (t, e, r) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "default", {
                enumerable: !0,
                get: function() {
                    return o
                }
            });
            let i = r(2115),
                n = i.useLayoutEffect,
                s = i.useEffect;

            function o(t) {
                let {
                    headManager: e,
                    reduceComponentsToState: r
                } = t;

                function o() {
                    if (e && e.mountedInstances) {
                        let n = i.Children.toArray(Array.from(e.mountedInstances).filter(Boolean));
                        e.updateHead(r(n, t))
                    }
                }
                return n(() => {
                    var r;
                    return null == e || null == (r = e.mountedInstances) || r.add(t.children), () => {
                        var r;
                        null == e || null == (r = e.mountedInstances) || r.delete(t.children)
                    }
                }), n(() => (e && (e._pendingUpdate = o), () => {
                    e && (e._pendingUpdate = o)
                })), s(() => (e && e._pendingUpdate && (e._pendingUpdate(), e._pendingUpdate = null), () => {
                    e && e._pendingUpdate && (e._pendingUpdate(), e._pendingUpdate = null)
                })), null
            }
        },
        5084: (t, e, r) => {
            "use strict";
            r.d(e, {
                N: () => g
            });
            var i = r(5155),
                n = r(2115),
                s = r(7728),
                o = r(6168),
                a = r(9025),
                l = r(430),
                u = r(7471);
            class h extends n.Component {
                getSnapshotBeforeUpdate(t) {
                    let e = this.props.childRef.current;
                    if (e && t.isPresent && !this.props.isPresent) {
                        let t = e.offsetParent,
                            r = t instanceof HTMLElement && t.offsetWidth || 0,
                            i = this.props.sizeRef.current;
                        i.height = e.offsetHeight || 0, i.width = e.offsetWidth || 0, i.top = e.offsetTop, i.left = e.offsetLeft, i.right = r - i.width - i.left
                    }
                    return null
                }
                componentDidUpdate() {}
                render() {
                    return this.props.children
                }
            }

            function c(t) {
                let {
                    children: e,
                    isPresent: r,
                    anchorX: s
                } = t, o = (0, n.useId)(), a = (0, n.useRef)(null), l = (0, n.useRef)({
                    width: 0,
                    height: 0,
                    top: 0,
                    left: 0,
                    right: 0
                }), {
                    nonce: c
                } = (0, n.useContext)(u.Q);
                return (0, n.useInsertionEffect)(() => {
                    let {
                        width: t,
                        height: e,
                        top: i,
                        left: n,
                        right: u
                    } = l.current;
                    if (r || !a.current || !t || !e) return;
                    a.current.dataset.motionPopId = o;
                    let h = document.createElement("style");
                    return c && (h.nonce = c), document.head.appendChild(h), h.sheet && h.sheet.insertRule('\n          [data-motion-pop-id="'.concat(o, '"] {\n            position: absolute !important;\n            width: ').concat(t, "px !important;\n            height: ").concat(e, "px !important;\n            ").concat("left" === s ? "left: ".concat(n) : "right: ".concat(u), "px !important;\n            top: ").concat(i, "px !important;\n          }\n        ")), () => {
                        document.head.contains(h) && document.head.removeChild(h)
                    }
                }, [r]), (0, i.jsx)(h, {
                    isPresent: r,
                    childRef: a,
                    sizeRef: l,
                    children: n.cloneElement(e, {
                        ref: a
                    })
                })
            }
            let f = t => {
                let {
                    children: e,
                    initial: r,
                    isPresent: s,
                    onExitComplete: a,
                    custom: u,
                    presenceAffectsLayout: h,
                    mode: f,
                    anchorX: p
                } = t, m = (0, o.M)(d), y = (0, n.useId)(), g = !0, v = (0, n.useMemo)(() => (g = !1, {
                    id: y,
                    initial: r,
                    isPresent: s,
                    custom: u,
                    onExitComplete: t => {
                        for (let e of (m.set(t, !0), m.values()))
                            if (!e) return;
                        a && a()
                    },
                    register: t => (m.set(t, !1), () => m.delete(t))
                }), [s, m, a]);
                return h && g && (v = { ...v
                }), (0, n.useMemo)(() => {
                    m.forEach((t, e) => m.set(e, !1))
                }, [s]), n.useEffect(() => {
                    s || m.size || !a || a()
                }, [s]), "popLayout" === f && (e = (0, i.jsx)(c, {
                    isPresent: s,
                    anchorX: p,
                    children: e
                })), (0, i.jsx)(l.t.Provider, {
                    value: v,
                    children: e
                })
            };

            function d() {
                return new Map
            }
            var p = r(4905);
            let m = t => t.key || "";

            function y(t) {
                let e = [];
                return n.Children.forEach(t, t => {
                    (0, n.isValidElement)(t) && e.push(t)
                }), e
            }
            let g = t => {
                let {
                    children: e,
                    custom: r,
                    initial: l = !0,
                    onExitComplete: u,
                    presenceAffectsLayout: h = !0,
                    mode: c = "sync",
                    propagate: d = !1,
                    anchorX: g = "left"
                } = t, [v, b] = (0, p.xQ)(d), w = (0, n.useMemo)(() => y(e), [e]), x = d && !v ? [] : w.map(m), E = (0, n.useRef)(!0), S = (0, n.useRef)(w), T = (0, o.M)(() => new Map), [R, A] = (0, n.useState)(w), [P, C] = (0, n.useState)(w);
                (0, a.E)(() => {
                    E.current = !1, S.current = w;
                    for (let t = 0; t < P.length; t++) {
                        let e = m(P[t]);
                        x.includes(e) ? T.delete(e) : !0 !== T.get(e) && T.set(e, !1)
                    }
                }, [P, x.length, x.join("-")]);
                let O = [];
                if (w !== R) {
                    let t = [...w];
                    for (let e = 0; e < P.length; e++) {
                        let r = P[e],
                            i = m(r);
                        x.includes(i) || (t.splice(e, 0, r), O.push(r))
                    }
                    return "wait" === c && O.length && (t = O), C(y(t)), A(w), null
                }
                let {
                    forceRender: M
                } = (0, n.useContext)(s.L);
                return (0, i.jsx)(i.Fragment, {
                    children: P.map(t => {
                        let e = m(t),
                            n = (!d || !!v) && (w === P || x.includes(e));
                        return (0, i.jsx)(f, {
                            isPresent: n,
                            initial: (!E.current || !!l) && void 0,
                            custom: r,
                            presenceAffectsLayout: h,
                            mode: c,
                            onExitComplete: n ? void 0 : () => {
                                if (!T.has(e)) return;
                                T.set(e, !0);
                                let t = !0;
                                T.forEach(e => {
                                    e || (t = !1)
                                }), t && (null == M || M(), C(S.current), d && (null == b || b()), u && u())
                            },
                            anchorX: g,
                            children: t
                        }, e)
                    })
                })
            }
        },
        5100: (t, e) => {
            "use strict";

            function r(t) {
                let {
                    widthInt: e,
                    heightInt: r,
                    blurWidth: i,
                    blurHeight: n,
                    blurDataURL: s,
                    objectFit: o
                } = t, a = i ? 40 * i : e, l = n ? 40 * n : r, u = a && l ? "viewBox='0 0 " + a + " " + l + "'" : "";
                return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + u + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + (u ? "none" : "contain" === o ? "xMidYMid" : "cover" === o ? "xMidYMid slice" : "none") + "' style='filter: url(%23b);' href='" + s + "'/%3E%3C/svg%3E"
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "getImageBlurSvg", {
                enumerable: !0,
                get: function() {
                    return r
                }
            })
        },
        5564: (t, e, r) => {
            "use strict";
            var i = r(1890);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), ! function(t, e) {
                for (var r in e) Object.defineProperty(t, r, {
                    enumerable: !0,
                    get: e[r]
                })
            }(e, {
                default: function() {
                    return y
                },
                defaultHead: function() {
                    return f
                }
            });
            let n = r(8229),
                s = r(6966),
                o = r(5155),
                a = s._(r(2115)),
                l = n._(r(5029)),
                u = r(2464),
                h = r(2830),
                c = r(7544);

            function f(t) {
                void 0 === t && (t = !1);
                let e = [(0, o.jsx)("meta", {
                    charSet: "utf-8"
                }, "charset")];
                return t || e.push((0, o.jsx)("meta", {
                    name: "viewport",
                    content: "width=device-width"
                }, "viewport")), e
            }

            function d(t, e) {
                return "string" == typeof e || "number" == typeof e ? t : e.type === a.default.Fragment ? t.concat(a.default.Children.toArray(e.props.children).reduce((t, e) => "string" == typeof e || "number" == typeof e ? t : t.concat(e), [])) : t.concat(e)
            }
            r(3230);
            let p = ["name", "httpEquiv", "charSet", "itemProp"];

            function m(t, e) {
                let {
                    inAmpMode: r
                } = e;
                return t.reduce(d, []).reverse().concat(f(r).reverse()).filter(function() {
                    let t = new Set,
                        e = new Set,
                        r = new Set,
                        i = {};
                    return n => {
                        let s = !0,
                            o = !1;
                        if (n.key && "number" != typeof n.key && n.key.indexOf("$") > 0) {
                            o = !0;
                            let e = n.key.slice(n.key.indexOf("$") + 1);
                            t.has(e) ? s = !1 : t.add(e)
                        }
                        switch (n.type) {
                            case "title":
                            case "base":
                                e.has(n.type) ? s = !1 : e.add(n.type);
                                break;
                            case "meta":
                                for (let t = 0, e = p.length; t < e; t++) {
                                    let e = p[t];
                                    if (n.props.hasOwnProperty(e))
                                        if ("charSet" === e) r.has(e) ? s = !1 : r.add(e);
                                        else {
                                            let t = n.props[e],
                                                r = i[e] || new Set;
                                            ("name" !== e || !o) && r.has(t) ? s = !1 : (r.add(t), i[e] = r)
                                        }
                                }
                        }
                        return s
                    }
                }()).reverse().map((t, e) => {
                    let n = t.key || e;
                    if (i.env.__NEXT_OPTIMIZE_FONTS && !r && "link" === t.type && t.props.href && ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some(e => t.props.href.startsWith(e))) {
                        let e = { ...t.props || {}
                        };
                        return e["data-href"] = e.href, e.href = void 0, e["data-optimized-fonts"] = !0, a.default.cloneElement(t, e)
                    }
                    return a.default.cloneElement(t, {
                        key: n
                    })
                })
            }
            let y = function(t) {
                let {
                    children: e
                } = t, r = (0, a.useContext)(u.AmpStateContext), i = (0, a.useContext)(h.HeadManagerContext);
                return (0, o.jsx)(l.default, {
                    reduceComponentsToState: m,
                    headManager: i,
                    inAmpMode: (0, c.isInAmpMode)(r),
                    children: e
                })
            };
            ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        5840: (t, e) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), ! function(t, e) {
                for (var r in e) Object.defineProperty(t, r, {
                    enumerable: !0,
                    get: e[r]
                })
            }(e, {
                VALID_LOADERS: function() {
                    return r
                },
                imageConfigDefault: function() {
                    return i
                }
            });
            let r = ["default", "imgix", "cloudinary", "akamai", "custom"],
                i = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    loaderFile: "",
                    domains: [],
                    disableStaticImages: !1,
                    minimumCacheTTL: 60,
                    formats: ["image/webp"],
                    dangerouslyAllowSVG: !1,
                    contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
                    contentDispositionType: "attachment",
                    localPatterns: void 0,
                    remotePatterns: [],
                    qualities: void 0,
                    unoptimized: !1
                }
        },
        6168: (t, e, r) => {
            "use strict";
            r.d(e, {
                M: () => n
            });
            var i = r(2115);

            function n(t) {
                let e = (0, i.useRef)(null);
                return null === e.current && (e.current = t()), e.current
            }
        },
        6752: (t, e, r) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "ImageConfigContext", {
                enumerable: !0,
                get: function() {
                    return s
                }
            });
            let i = r(8229)._(r(2115)),
                n = r(5840),
                s = i.default.createContext(n.imageConfigDefault)
        },
        6766: (t, e, r) => {
            "use strict";
            r.d(e, {
                default: () => n.a
            });
            var i = r(1469),
                n = r.n(i)
        },
        6997: (t, e, r) => {
            "use strict";
            let i;

            function n(t) {
                return null !== t && "object" == typeof t && "function" == typeof t.start
            }

            function s(t) {
                let e = [{}, {}];
                return t ? .values.forEach((t, r) => {
                    e[0][r] = t.get(), e[1][r] = t.getVelocity()
                }), e
            }

            function o(t, e, r, i) {
                if ("function" == typeof e) {
                    let [n, o] = s(i);
                    e = e(void 0 !== r ? r : t.custom, n, o)
                }
                if ("string" == typeof e && (e = t.variants && t.variants[e]), "function" == typeof e) {
                    let [n, o] = s(i);
                    e = e(void 0 !== r ? r : t.custom, n, o)
                }
                return e
            }

            function a(t, e, r) {
                let i = t.getProps();
                return o(i, e, void 0 !== r ? r : i.custom, t)
            }
            r.d(e, {
                P: () => sT
            });
            let l = t => Array.isArray(t),
                u = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"],
                h = {
                    value: null,
                    addProjectionMetrics: null
                },
                c = {};

            function f(t, e) {
                let r = !1,
                    i = !0,
                    n = {
                        delta: 0,
                        timestamp: 0,
                        isProcessing: !1
                    },
                    s = () => r = !0,
                    o = u.reduce((t, r) => (t[r] = function(t, e) {
                        let r = new Set,
                            i = new Set,
                            n = !1,
                            s = !1,
                            o = new WeakSet,
                            a = {
                                delta: 0,
                                timestamp: 0,
                                isProcessing: !1
                            },
                            l = 0;

                        function u(e) {
                            o.has(e) && (c.schedule(e), t()), l++, e(a)
                        }
                        let c = {
                            schedule: (t, e = !1, s = !1) => {
                                let a = s && n ? r : i;
                                return e && o.add(t), a.has(t) || a.add(t), t
                            },
                            cancel: t => {
                                i.delete(t), o.delete(t)
                            },
                            process: t => {
                                if (a = t, n) {
                                    s = !0;
                                    return
                                }
                                n = !0, [r, i] = [i, r], r.forEach(u), e && h.value && h.value.frameloop[e].push(l), l = 0, r.clear(), n = !1, s && (s = !1, c.process(t))
                            }
                        };
                        return c
                    }(s, e ? r : void 0), t), {}),
                    {
                        setup: a,
                        read: l,
                        resolveKeyframes: f,
                        preUpdate: d,
                        update: p,
                        preRender: m,
                        render: y,
                        postRender: g
                    } = o,
                    v = () => {
                        let s = c.useManualTiming ? n.timestamp : performance.now();
                        r = !1, c.useManualTiming || (n.delta = i ? 1e3 / 60 : Math.max(Math.min(s - n.timestamp, 40), 1)), n.timestamp = s, n.isProcessing = !0, a.process(n), l.process(n), f.process(n), d.process(n), p.process(n), m.process(n), y.process(n), g.process(n), n.isProcessing = !1, r && e && (i = !1, t(v))
                    },
                    b = () => {
                        r = !0, i = !0, n.isProcessing || t(v)
                    };
                return {
                    schedule: u.reduce((t, e) => {
                        let i = o[e];
                        return t[e] = (t, e = !1, n = !1) => (r || b(), i.schedule(t, e, n)), t
                    }, {}),
                    cancel: t => {
                        for (let e = 0; e < u.length; e++) o[u[e]].cancel(t)
                    },
                    state: n,
                    steps: o
                }
            }
            let d = t => t,
                {
                    schedule: p,
                    cancel: m,
                    state: y,
                    steps: g
                } = f("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : d, !0);

            function v() {
                i = void 0
            }
            let b = {
                now: () => (void 0 === i && b.set(y.isProcessing || c.useManualTiming ? y.timestamp : performance.now()), i),
                set: t => {
                    i = t, queueMicrotask(v)
                }
            };

            function w(t, e) {
                -1 === t.indexOf(e) && t.push(e)
            }

            function x(t, e) {
                let r = t.indexOf(e);
                r > -1 && t.splice(r, 1)
            }
            class E {
                constructor() {
                    this.subscriptions = []
                }
                add(t) {
                    return w(this.subscriptions, t), () => x(this.subscriptions, t)
                }
                notify(t, e, r) {
                    let i = this.subscriptions.length;
                    if (i)
                        if (1 === i) this.subscriptions[0](t, e, r);
                        else
                            for (let n = 0; n < i; n++) {
                                let i = this.subscriptions[n];
                                i && i(t, e, r)
                            }
                }
                getSize() {
                    return this.subscriptions.length
                }
                clear() {
                    this.subscriptions.length = 0
                }
            }
            let S = t => !isNaN(parseFloat(t)),
                T = {
                    current: void 0
                };
            class R {
                constructor(t, e = {}) {
                    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (t, e = !0) => {
                        let r = b.now();
                        if (this.updatedAt !== r && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(t), this.current !== this.prev && (this.events.change ? .notify(this.current), this.dependents))
                            for (let t of this.dependents) t.dirty();
                        e && this.events.renderRequest ? .notify(this.current)
                    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = e.owner
                }
                setCurrent(t) {
                    this.current = t, this.updatedAt = b.now(), null === this.canTrackVelocity && void 0 !== t && (this.canTrackVelocity = S(this.current))
                }
                setPrevFrameValue(t = this.current) {
                    this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt
                }
                onChange(t) {
                    return this.on("change", t)
                }
                on(t, e) {
                    this.events[t] || (this.events[t] = new E);
                    let r = this.events[t].add(e);
                    return "change" === t ? () => {
                        r(), p.read(() => {
                            this.events.change.getSize() || this.stop()
                        })
                    } : r
                }
                clearListeners() {
                    for (let t in this.events) this.events[t].clear()
                }
                attach(t, e) {
                    this.passiveEffect = t, this.stopPassiveEffect = e
                }
                set(t, e = !0) {
                    e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e)
                }
                setWithVelocity(t, e, r) {
                    this.set(e), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - r
                }
                jump(t, e = !0) {
                    this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, e && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
                }
                dirty() {
                    this.events.change ? .notify(this.current)
                }
                addDependent(t) {
                    this.dependents || (this.dependents = new Set), this.dependents.add(t)
                }
                removeDependent(t) {
                    this.dependents && this.dependents.delete(t)
                }
                get() {
                    return T.current && T.current.push(this), this.current
                }
                getPrevious() {
                    return this.prev
                }
                getVelocity() {
                    var t;
                    let e = b.now();
                    if (!this.canTrackVelocity || void 0 === this.prevFrameValue || e - this.updatedAt > 30) return 0;
                    let r = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
                    return t = parseFloat(this.current) - parseFloat(this.prevFrameValue), r ? 1e3 / r * t : 0
                }
                start(t) {
                    return this.stop(), new Promise(e => {
                        this.hasAnimated = !0, this.animation = t(e), this.events.animationStart && this.events.animationStart.notify()
                    }).then(() => {
                        this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
                    })
                }
                stop() {
                    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
                }
                isAnimating() {
                    return !!this.animation
                }
                clearAnimation() {
                    delete this.animation
                }
                destroy() {
                    this.dependents ? .clear(), this.events.destroy ? .notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
                }
            }

            function A(t, e) {
                return new R(t, e)
            }
            let P = t => !!(t && t.getVelocity);

            function C(t, e) {
                let r = t.getValue("willChange");
                if (P(r) && r.add) return r.add(e);
                if (!r && c.WillChange) {
                    let r = new c.WillChange("auto");
                    t.addValue("willChange", r), r.add(e)
                }
            }
            let O = t => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
                M = "data-" + O("framerAppearId"),
                j = t => null !== t,
                k = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
                D = new Set(k),
                L = {
                    type: "spring",
                    stiffness: 500,
                    damping: 25,
                    restSpeed: 10
                },
                B = t => ({
                    type: "spring",
                    stiffness: 550,
                    damping: 0 === t ? 2 * Math.sqrt(550) : 30,
                    restSpeed: 10
                }),
                V = {
                    type: "keyframes",
                    duration: .8
                },
                F = {
                    type: "keyframes",
                    ease: [.25, .1, .35, 1],
                    duration: .3
                },
                U = (t, {
                    keyframes: e
                }) => e.length > 2 ? V : D.has(t) ? t.startsWith("scale") ? B(e[1]) : L : F;

            function I(t, e) {
                return t ? .[e] ? ? t ? .default ? ? t
            }
            let _ = t => 1e3 * t,
                N = t => t / 1e3,
                z = {
                    layout: 0,
                    mainThread: 0,
                    waapi: 0
                },
                W = t => e => "string" == typeof e && e.startsWith(t),
                q = W("--"),
                $ = W("var(--"),
                Q = t => !!$(t) && H.test(t.split("/*")[0].trim()),
                H = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
                X = (t, e, r) => r > e ? e : r < t ? t : r,
                Y = {
                    test: t => "number" == typeof t,
                    parse: parseFloat,
                    transform: t => t
                },
                K = { ...Y,
                    transform: t => X(0, 1, t)
                },
                G = { ...Y,
                    default: 1
                },
                J = t => Math.round(1e5 * t) / 1e5,
                Z = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
                tt = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
                te = (t, e) => r => !!("string" == typeof r && tt.test(r) && r.startsWith(t) || e && null != r && Object.prototype.hasOwnProperty.call(r, e)),
                tr = (t, e, r) => i => {
                    if ("string" != typeof i) return i;
                    let [n, s, o, a] = i.match(Z);
                    return {
                        [t]: parseFloat(n),
                        [e]: parseFloat(s),
                        [r]: parseFloat(o),
                        alpha: void 0 !== a ? parseFloat(a) : 1
                    }
                },
                ti = t => X(0, 255, t),
                tn = { ...Y,
                    transform: t => Math.round(ti(t))
                },
                ts = {
                    test: te("rgb", "red"),
                    parse: tr("red", "green", "blue"),
                    transform: ({
                        red: t,
                        green: e,
                        blue: r,
                        alpha: i = 1
                    }) => "rgba(" + tn.transform(t) + ", " + tn.transform(e) + ", " + tn.transform(r) + ", " + J(K.transform(i)) + ")"
                },
                to = {
                    test: te("#"),
                    parse: function(t) {
                        let e = "",
                            r = "",
                            i = "",
                            n = "";
                        return t.length > 5 ? (e = t.substring(1, 3), r = t.substring(3, 5), i = t.substring(5, 7), n = t.substring(7, 9)) : (e = t.substring(1, 2), r = t.substring(2, 3), i = t.substring(3, 4), n = t.substring(4, 5), e += e, r += r, i += i, n += n), {
                            red: parseInt(e, 16),
                            green: parseInt(r, 16),
                            blue: parseInt(i, 16),
                            alpha: n ? parseInt(n, 16) / 255 : 1
                        }
                    },
                    transform: ts.transform
                },
                ta = t => ({
                    test: e => "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
                    parse: parseFloat,
                    transform: e => `${e}${t}`
                }),
                tl = ta("deg"),
                tu = ta("%"),
                th = ta("px"),
                tc = ta("vh"),
                tf = ta("vw"),
                td = { ...tu,
                    parse: t => tu.parse(t) / 100,
                    transform: t => tu.transform(100 * t)
                },
                tp = {
                    test: te("hsl", "hue"),
                    parse: tr("hue", "saturation", "lightness"),
                    transform: ({
                        hue: t,
                        saturation: e,
                        lightness: r,
                        alpha: i = 1
                    }) => "hsla(" + Math.round(t) + ", " + tu.transform(J(e)) + ", " + tu.transform(J(r)) + ", " + J(K.transform(i)) + ")"
                },
                tm = {
                    test: t => ts.test(t) || to.test(t) || tp.test(t),
                    parse: t => ts.test(t) ? ts.parse(t) : tp.test(t) ? tp.parse(t) : to.parse(t),
                    transform: t => "string" == typeof t ? t : t.hasOwnProperty("red") ? ts.transform(t) : tp.transform(t)
                },
                ty = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
                tg = "number",
                tv = "color",
                tb = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

            function tw(t) {
                let e = t.toString(),
                    r = [],
                    i = {
                        color: [],
                        number: [],
                        var: []
                    },
                    n = [],
                    s = 0,
                    o = e.replace(tb, t => (tm.test(t) ? (i.color.push(s), n.push(tv), r.push(tm.parse(t))) : t.startsWith("var(") ? (i.var.push(s), n.push("var"), r.push(t)) : (i.number.push(s), n.push(tg), r.push(parseFloat(t))), ++s, "${}")).split("${}");
                return {
                    values: r,
                    split: o,
                    indexes: i,
                    types: n
                }
            }

            function tx(t) {
                return tw(t).values
            }

            function tE(t) {
                let {
                    split: e,
                    types: r
                } = tw(t), i = e.length;
                return t => {
                    let n = "";
                    for (let s = 0; s < i; s++)
                        if (n += e[s], void 0 !== t[s]) {
                            let e = r[s];
                            e === tg ? n += J(t[s]) : e === tv ? n += tm.transform(t[s]) : n += t[s]
                        }
                    return n
                }
            }
            let tS = t => "number" == typeof t ? 0 : t,
                tT = {
                    test: function(t) {
                        return isNaN(t) && "string" == typeof t && (t.match(Z) ? .length || 0) + (t.match(ty) ? .length || 0) > 0
                    },
                    parse: tx,
                    createTransformer: tE,
                    getAnimatableNone: function(t) {
                        let e = tx(t);
                        return tE(t)(e.map(tS))
                    }
                };

            function tR(t, e, r) {
                return (r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6) ? t + (e - t) * 6 * r : r < .5 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t
            }

            function tA(t, e) {
                return r => r > 0 ? e : t
            }
            let tP = (t, e, r) => t + (e - t) * r,
                tC = () => {},
                tO = () => {},
                tM = (t, e, r) => {
                    let i = t * t,
                        n = r * (e * e - i) + i;
                    return n < 0 ? 0 : Math.sqrt(n)
                },
                tj = [to, ts, tp],
                tk = t => tj.find(e => e.test(t));

            function tD(t) {
                let e = tk(t);
                if (tC(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`), !e) return !1;
                let r = e.parse(t);
                return e === tp && (r = function({
                    hue: t,
                    saturation: e,
                    lightness: r,
                    alpha: i
                }) {
                    t /= 360, r /= 100;
                    let n = 0,
                        s = 0,
                        o = 0;
                    if (e /= 100) {
                        let i = r < .5 ? r * (1 + e) : r + e - r * e,
                            a = 2 * r - i;
                        n = tR(a, i, t + 1 / 3), s = tR(a, i, t), o = tR(a, i, t - 1 / 3)
                    } else n = s = o = r;
                    return {
                        red: Math.round(255 * n),
                        green: Math.round(255 * s),
                        blue: Math.round(255 * o),
                        alpha: i
                    }
                }(r)), r
            }
            let tL = (t, e) => {
                    let r = tD(t),
                        i = tD(e);
                    if (!r || !i) return tA(t, e);
                    let n = { ...r
                    };
                    return t => (n.red = tM(r.red, i.red, t), n.green = tM(r.green, i.green, t), n.blue = tM(r.blue, i.blue, t), n.alpha = tP(r.alpha, i.alpha, t), ts.transform(n))
                },
                tB = new Set(["none", "hidden"]),
                tV = (t, e) => r => e(t(r)),
                tF = (...t) => t.reduce(tV);

            function tU(t, e) {
                return r => tP(t, e, r)
            }

            function tI(t) {
                return "number" == typeof t ? tU : "string" == typeof t ? Q(t) ? tA : tm.test(t) ? tL : tz : Array.isArray(t) ? t_ : "object" == typeof t ? tm.test(t) ? tL : tN : tA
            }

            function t_(t, e) {
                let r = [...t],
                    i = r.length,
                    n = t.map((t, r) => tI(t)(t, e[r]));
                return t => {
                    for (let e = 0; e < i; e++) r[e] = n[e](t);
                    return r
                }
            }

            function tN(t, e) {
                let r = { ...t,
                        ...e
                    },
                    i = {};
                for (let n in r) void 0 !== t[n] && void 0 !== e[n] && (i[n] = tI(t[n])(t[n], e[n]));
                return t => {
                    for (let e in i) r[e] = i[e](t);
                    return r
                }
            }
            let tz = (t, e) => {
                let r = tT.createTransformer(e),
                    i = tw(t),
                    n = tw(e);
                return i.indexes.var.length === n.indexes.var.length && i.indexes.color.length === n.indexes.color.length && i.indexes.number.length >= n.indexes.number.length ? tB.has(t) && !n.values.length || tB.has(e) && !i.values.length ? function(t, e) {
                    return tB.has(t) ? r => r <= 0 ? t : e : r => r >= 1 ? e : t
                }(t, e) : tF(t_(function(t, e) {
                    let r = [],
                        i = {
                            color: 0,
                            var: 0,
                            number: 0
                        };
                    for (let n = 0; n < e.values.length; n++) {
                        let s = e.types[n],
                            o = t.indexes[s][i[s]],
                            a = t.values[o] ? ? 0;
                        r[n] = a, i[s]++
                    }
                    return r
                }(i, n), n.values), r) : (tC(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), tA(t, e))
            };

            function tW(t, e, r) {
                return "number" == typeof t && "number" == typeof e && "number" == typeof r ? tP(t, e, r) : tI(t)(t, e)
            }
            let tq = t => {
                    let e = ({
                        timestamp: e
                    }) => t(e);
                    return {
                        start: (t = !0) => p.update(e, t),
                        stop: () => m(e),
                        now: () => y.isProcessing ? y.timestamp : b.now()
                    }
                },
                t$ = (t, e, r = 10) => {
                    let i = "",
                        n = Math.max(Math.round(e / r), 2);
                    for (let e = 0; e < n; e++) i += t(e / (n - 1)) + ", ";
                    return `linear(${i.substring(0,i.length-2)})`
                };

            function tQ(t) {
                let e = 0,
                    r = t.next(e);
                for (; !r.done && e < 2e4;) e += 50, r = t.next(e);
                return e >= 2e4 ? 1 / 0 : e
            }

            function tH(t, e, r) {
                var i, n;
                let s = Math.max(e - 5, 0);
                return i = r - t(s), (n = e - s) ? 1e3 / n * i : 0
            }
            let tX = {
                stiffness: 100,
                damping: 10,
                mass: 1,
                velocity: 0,
                duration: 800,
                bounce: .3,
                visualDuration: .3,
                restSpeed: {
                    granular: .01,
                    default: 2
                },
                restDelta: {
                    granular: .005,
                    default: .5
                },
                minDuration: .01,
                maxDuration: 10,
                minDamping: .05,
                maxDamping: 1
            };

            function tY(t, e) {
                return t * Math.sqrt(1 - e * e)
            }
            let tK = ["duration", "bounce"],
                tG = ["stiffness", "damping", "mass"];

            function tJ(t, e) {
                return e.some(e => void 0 !== t[e])
            }

            function tZ(t = tX.visualDuration, e = tX.bounce) {
                let r, i = "object" != typeof t ? {
                        visualDuration: t,
                        keyframes: [0, 1],
                        bounce: e
                    } : t,
                    {
                        restSpeed: n,
                        restDelta: s
                    } = i,
                    o = i.keyframes[0],
                    a = i.keyframes[i.keyframes.length - 1],
                    l = {
                        done: !1,
                        value: o
                    },
                    {
                        stiffness: u,
                        damping: h,
                        mass: c,
                        duration: f,
                        velocity: d,
                        isResolvedFromDuration: p
                    } = function(t) {
                        let e = {
                            velocity: tX.velocity,
                            stiffness: tX.stiffness,
                            damping: tX.damping,
                            mass: tX.mass,
                            isResolvedFromDuration: !1,
                            ...t
                        };
                        if (!tJ(t, tG) && tJ(t, tK))
                            if (t.visualDuration) {
                                let r = 2 * Math.PI / (1.2 * t.visualDuration),
                                    i = r * r,
                                    n = 2 * X(.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(i);
                                e = { ...e,
                                    mass: tX.mass,
                                    stiffness: i,
                                    damping: n
                                }
                            } else {
                                let r = function({
                                    duration: t = tX.duration,
                                    bounce: e = tX.bounce,
                                    velocity: r = tX.velocity,
                                    mass: i = tX.mass
                                }) {
                                    let n, s;
                                    tC(t <= _(tX.maxDuration), "Spring duration must be 10 seconds or less");
                                    let o = 1 - e;
                                    o = X(tX.minDamping, tX.maxDamping, o), t = X(tX.minDuration, tX.maxDuration, N(t)), o < 1 ? (n = e => {
                                        let i = e * o,
                                            n = i * t;
                                        return .001 - (i - r) / tY(e, o) * Math.exp(-n)
                                    }, s = e => {
                                        let i = e * o * t,
                                            s = Math.pow(o, 2) * Math.pow(e, 2) * t,
                                            a = Math.exp(-i),
                                            l = tY(Math.pow(e, 2), o);
                                        return (i * r + r - s) * a * (-n(e) + .001 > 0 ? -1 : 1) / l
                                    }) : (n = e => -.001 + Math.exp(-e * t) * ((e - r) * t + 1), s = e => t * t * (r - e) * Math.exp(-e * t));
                                    let a = function(t, e, r) {
                                        let i = r;
                                        for (let r = 1; r < 12; r++) i -= t(i) / e(i);
                                        return i
                                    }(n, s, 5 / t);
                                    if (t = _(t), isNaN(a)) return {
                                        stiffness: tX.stiffness,
                                        damping: tX.damping,
                                        duration: t
                                    }; {
                                        let e = Math.pow(a, 2) * i;
                                        return {
                                            stiffness: e,
                                            damping: 2 * o * Math.sqrt(i * e),
                                            duration: t
                                        }
                                    }
                                }(t);
                                (e = { ...e,
                                    ...r,
                                    mass: tX.mass
                                }).isResolvedFromDuration = !0
                            }
                        return e
                    }({ ...i,
                        velocity: -N(i.velocity || 0)
                    }),
                    m = d || 0,
                    y = h / (2 * Math.sqrt(u * c)),
                    g = a - o,
                    v = N(Math.sqrt(u / c)),
                    b = 5 > Math.abs(g);
                if (n || (n = b ? tX.restSpeed.granular : tX.restSpeed.default), s || (s = b ? tX.restDelta.granular : tX.restDelta.default), y < 1) {
                    let t = tY(v, y);
                    r = e => a - Math.exp(-y * v * e) * ((m + y * v * g) / t * Math.sin(t * e) + g * Math.cos(t * e))
                } else if (1 === y) r = t => a - Math.exp(-v * t) * (g + (m + v * g) * t);
                else {
                    let t = v * Math.sqrt(y * y - 1);
                    r = e => {
                        let r = Math.exp(-y * v * e),
                            i = Math.min(t * e, 300);
                        return a - r * ((m + y * v * g) * Math.sinh(i) + t * g * Math.cosh(i)) / t
                    }
                }
                let w = {
                    calculatedDuration: p && f || null,
                    next: t => {
                        let e = r(t);
                        if (p) l.done = t >= f;
                        else {
                            let i = 0 === t ? m : 0;
                            y < 1 && (i = 0 === t ? _(m) : tH(r, t, e));
                            let o = Math.abs(a - e) <= s;
                            l.done = Math.abs(i) <= n && o
                        }
                        return l.value = l.done ? a : e, l
                    },
                    toString: () => {
                        let t = Math.min(tQ(w), 2e4),
                            e = t$(e => w.next(t * e).value, t, 30);
                        return t + "ms " + e
                    },
                    toTransition: () => {}
                };
                return w
            }

            function t0({
                keyframes: t,
                velocity: e = 0,
                power: r = .8,
                timeConstant: i = 325,
                bounceDamping: n = 10,
                bounceStiffness: s = 500,
                modifyTarget: o,
                min: a,
                max: l,
                restDelta: u = .5,
                restSpeed: h
            }) {
                let c, f, d = t[0],
                    p = {
                        done: !1,
                        value: d
                    },
                    m = t => void 0 !== a && t < a || void 0 !== l && t > l,
                    y = t => void 0 === a ? l : void 0 === l || Math.abs(a - t) < Math.abs(l - t) ? a : l,
                    g = r * e,
                    v = d + g,
                    b = void 0 === o ? v : o(v);
                b !== v && (g = b - d);
                let w = t => -g * Math.exp(-t / i),
                    x = t => b + w(t),
                    E = t => {
                        let e = w(t),
                            r = x(t);
                        p.done = Math.abs(e) <= u, p.value = p.done ? b : r
                    },
                    S = t => {
                        m(p.value) && (c = t, f = tZ({
                            keyframes: [p.value, y(p.value)],
                            velocity: tH(x, t, p.value),
                            damping: n,
                            stiffness: s,
                            restDelta: u,
                            restSpeed: h
                        }))
                    };
                return S(0), {
                    calculatedDuration: null,
                    next: t => {
                        let e = !1;
                        return (f || void 0 !== c || (e = !0, E(t), S(t)), void 0 !== c && t >= c) ? f.next(t - c) : (e || E(t), p)
                    }
                }
            }
            tZ.applyToOptions = t => {
                let e = function(t, e = 100, r) {
                    let i = r({ ...t,
                            keyframes: [0, e]
                        }),
                        n = Math.min(tQ(i), 2e4);
                    return {
                        type: "keyframes",
                        ease: t => i.next(n * t).value / e,
                        duration: N(n)
                    }
                }(t, 100, tZ);
                return t.ease = e.ease, t.duration = _(e.duration), t.type = "keyframes", t
            };
            let t1 = (t, e, r) => {
                    let i = e - t;
                    return 0 === i ? 1 : (r - t) / i
                },
                t2 = (t, e, r) => (((1 - 3 * r + 3 * e) * t + (3 * r - 6 * e)) * t + 3 * e) * t;

            function t5(t, e, r, i) {
                if (t === e && r === i) return d;
                let n = e => (function(t, e, r, i, n) {
                    let s, o, a = 0;
                    do(s = t2(o = e + (r - e) / 2, i, n) - t) > 0 ? r = o : e = o; while (Math.abs(s) > 1e-7 && ++a < 12);
                    return o
                })(e, 0, 1, t, r);
                return t => 0 === t || 1 === t ? t : t2(n(t), e, i)
            }
            let t3 = t5(.42, 0, 1, 1),
                t6 = t5(0, 0, .58, 1),
                t8 = t5(.42, 0, .58, 1),
                t4 = t => Array.isArray(t) && "number" != typeof t[0],
                t9 = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
                t7 = t => e => 1 - t(1 - e),
                et = t5(.33, 1.53, .69, .99),
                ee = t7(et),
                er = t9(ee),
                ei = t => (t *= 2) < 1 ? .5 * ee(t) : .5 * (2 - Math.pow(2, -10 * (t - 1))),
                en = t => 1 - Math.sin(Math.acos(t)),
                es = t7(en),
                eo = t9(en),
                ea = t => Array.isArray(t) && "number" == typeof t[0],
                el = {
                    linear: d,
                    easeIn: t3,
                    easeInOut: t8,
                    easeOut: t6,
                    circIn: en,
                    circInOut: eo,
                    circOut: es,
                    backIn: ee,
                    backInOut: er,
                    backOut: et,
                    anticipate: ei
                },
                eu = t => "string" == typeof t,
                eh = t => {
                    if (ea(t)) {
                        tO(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
                        let [e, r, i, n] = t;
                        return t5(e, r, i, n)
                    }
                    return eu(t) ? (tO(void 0 !== el[t], `Invalid easing type '${t}'`), el[t]) : t
                };

            function ec({
                duration: t = 300,
                keyframes: e,
                times: r,
                ease: i = "easeInOut"
            }) {
                var n;
                let s = t4(i) ? i.map(eh) : eh(i),
                    o = {
                        done: !1,
                        value: e[0]
                    },
                    a = function(t, e, {
                        clamp: r = !0,
                        ease: i,
                        mixer: n
                    } = {}) {
                        let s = t.length;
                        if (tO(s === e.length, "Both input and output ranges must be the same length"), 1 === s) return () => e[0];
                        if (2 === s && e[0] === e[1]) return () => e[1];
                        let o = t[0] === t[1];
                        t[0] > t[s - 1] && (t = [...t].reverse(), e = [...e].reverse());
                        let a = function(t, e, r) {
                                let i = [],
                                    n = r || c.mix || tW,
                                    s = t.length - 1;
                                for (let r = 0; r < s; r++) {
                                    let s = n(t[r], t[r + 1]);
                                    e && (s = tF(Array.isArray(e) ? e[r] || d : e, s)), i.push(s)
                                }
                                return i
                            }(e, i, n),
                            l = a.length,
                            u = r => {
                                if (o && r < t[0]) return e[0];
                                let i = 0;
                                if (l > 1)
                                    for (; i < t.length - 2 && !(r < t[i + 1]); i++);
                                let n = t1(t[i], t[i + 1], r);
                                return a[i](n)
                            };
                        return r ? e => u(X(t[0], t[s - 1], e)) : u
                    }((n = r && r.length === e.length ? r : function(t) {
                        let e = [0];
                        return ! function(t, e) {
                            let r = t[t.length - 1];
                            for (let i = 1; i <= e; i++) {
                                let n = t1(0, e, i);
                                t.push(tP(r, 1, n))
                            }
                        }(e, t.length - 1), e
                    }(e), n.map(e => e * t)), e, {
                        ease: Array.isArray(s) ? s : e.map(() => s || t8).splice(0, e.length - 1)
                    });
                return {
                    calculatedDuration: t,
                    next: e => (o.value = a(e), o.done = e >= t, o)
                }
            }
            let ef = t => null !== t;

            function ed(t, {
                repeat: e,
                repeatType: r = "loop"
            }, i, n = 1) {
                let s = t.filter(ef),
                    o = n < 0 || e && "loop" !== r && e % 2 == 1 ? 0 : s.length - 1;
                return o && void 0 !== i ? i : s[o]
            }
            let ep = {
                decay: t0,
                inertia: t0,
                tween: ec,
                keyframes: ec,
                spring: tZ
            };

            function em(t) {
                "string" == typeof t.type && (t.type = ep[t.type])
            }
            class ey {
                constructor() {
                    this.updateFinished()
                }
                get finished() {
                    return this._finished
                }
                updateFinished() {
                    this._finished = new Promise(t => {
                        this.resolve = t
                    })
                }
                notifyFinished() {
                    this.resolve()
                }
                then(t, e) {
                    return this.finished.then(t, e)
                }
            }
            let eg = t => t / 100;
            class ev extends ey {
                constructor(t) {
                    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = (t = !0) => {
                        if (t) {
                            let {
                                motionValue: t
                            } = this.options;
                            t && t.updatedAt !== b.now() && this.tick(b.now())
                        }
                        this.isStopped = !0, "idle" !== this.state && (this.teardown(), this.options.onStop ? .())
                    }, z.mainThread++, this.options = t, this.initAnimation(), this.play(), !1 === t.autoplay && this.pause()
                }
                initAnimation() {
                    let {
                        options: t
                    } = this;
                    em(t);
                    let {
                        type: e = ec,
                        repeat: r = 0,
                        repeatDelay: i = 0,
                        repeatType: n,
                        velocity: s = 0
                    } = t, {
                        keyframes: o
                    } = t, a = e || ec;
                    a !== ec && "number" != typeof o[0] && (this.mixKeyframes = tF(eg, tW(o[0], o[1])), o = [0, 100]);
                    let l = a({ ...t,
                        keyframes: o
                    });
                    "mirror" === n && (this.mirroredGenerator = a({ ...t,
                        keyframes: [...o].reverse(),
                        velocity: -s
                    })), null === l.calculatedDuration && (l.calculatedDuration = tQ(l));
                    let {
                        calculatedDuration: u
                    } = l;
                    this.calculatedDuration = u, this.resolvedDuration = u + i, this.totalDuration = this.resolvedDuration * (r + 1) - i, this.generator = l
                }
                updateTime(t) {
                    let e = Math.round(t - this.startTime) * this.playbackSpeed;
                    null !== this.holdTime ? this.currentTime = this.holdTime : this.currentTime = e
                }
                tick(t, e = !1) {
                    let {
                        generator: r,
                        totalDuration: i,
                        mixKeyframes: n,
                        mirroredGenerator: s,
                        resolvedDuration: o,
                        calculatedDuration: a
                    } = this;
                    if (null === this.startTime) return r.next(0);
                    let {
                        delay: l = 0,
                        keyframes: u,
                        repeat: h,
                        repeatType: c,
                        repeatDelay: f,
                        type: d,
                        onUpdate: p,
                        finalKeyframe: m
                    } = this.options;
                    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - i / this.speed, this.startTime)), e ? this.currentTime = t : this.updateTime(t);
                    let y = this.currentTime - l * (this.playbackSpeed >= 0 ? 1 : -1),
                        g = this.playbackSpeed >= 0 ? y < 0 : y > i;
                    this.currentTime = Math.max(y, 0), "finished" === this.state && null === this.holdTime && (this.currentTime = i);
                    let v = this.currentTime,
                        b = r;
                    if (h) {
                        let t = Math.min(this.currentTime, i) / o,
                            e = Math.floor(t),
                            r = t % 1;
                        !r && t >= 1 && (r = 1), 1 === r && e--, (e = Math.min(e, h + 1)) % 2 && ("reverse" === c ? (r = 1 - r, f && (r -= f / o)) : "mirror" === c && (b = s)), v = X(0, 1, r) * o
                    }
                    let w = g ? {
                        done: !1,
                        value: u[0]
                    } : b.next(v);
                    n && (w.value = n(w.value));
                    let {
                        done: x
                    } = w;
                    g || null === a || (x = this.playbackSpeed >= 0 ? this.currentTime >= i : this.currentTime <= 0);
                    let E = null === this.holdTime && ("finished" === this.state || "running" === this.state && x);
                    return E && d !== t0 && (w.value = ed(u, this.options, m, this.speed)), p && p(w.value), E && this.finish(), w
                }
                then(t, e) {
                    return this.finished.then(t, e)
                }
                get duration() {
                    return N(this.calculatedDuration)
                }
                get time() {
                    return N(this.currentTime)
                }
                set time(t) {
                    t = _(t), this.currentTime = t, null === this.startTime || null !== this.holdTime || 0 === this.playbackSpeed ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed), this.driver ? .start(!1)
                }
                get speed() {
                    return this.playbackSpeed
                }
                set speed(t) {
                    this.updateTime(b.now());
                    let e = this.playbackSpeed !== t;
                    this.playbackSpeed = t, e && (this.time = N(this.currentTime))
                }
                play() {
                    if (this.isStopped) return;
                    let {
                        driver: t = tq,
                        startTime: e
                    } = this.options;
                    this.driver || (this.driver = t(t => this.tick(t))), this.options.onPlay ? .();
                    let r = this.driver.now();
                    "finished" === this.state ? (this.updateFinished(), this.startTime = r) : null !== this.holdTime ? this.startTime = r - this.holdTime : this.startTime || (this.startTime = e ? ? r), "finished" === this.state && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start()
                }
                pause() {
                    this.state = "paused", this.updateTime(b.now()), this.holdTime = this.currentTime
                }
                complete() {
                    "running" !== this.state && this.play(), this.state = "finished", this.holdTime = null
                }
                finish() {
                    this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete ? .()
                }
                cancel() {
                    this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel ? .()
                }
                teardown() {
                    this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null, z.mainThread--
                }
                stopDriver() {
                    this.driver && (this.driver.stop(), this.driver = void 0)
                }
                sample(t) {
                    return this.startTime = 0, this.tick(t, !0)
                }
                attachTimeline(t) {
                    return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver ? .stop(), t.observe(this)
                }
            }
            let eb = t => 180 * t / Math.PI,
                ew = t => eE(eb(Math.atan2(t[1], t[0]))),
                ex = {
                    x: 4,
                    y: 5,
                    translateX: 4,
                    translateY: 5,
                    scaleX: 0,
                    scaleY: 3,
                    scale: t => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
                    rotate: ew,
                    rotateZ: ew,
                    skewX: t => eb(Math.atan(t[1])),
                    skewY: t => eb(Math.atan(t[2])),
                    skew: t => (Math.abs(t[1]) + Math.abs(t[2])) / 2
                },
                eE = t => ((t %= 360) < 0 && (t += 360), t),
                eS = t => Math.sqrt(t[0] * t[0] + t[1] * t[1]),
                eT = t => Math.sqrt(t[4] * t[4] + t[5] * t[5]),
                eR = {
                    x: 12,
                    y: 13,
                    z: 14,
                    translateX: 12,
                    translateY: 13,
                    translateZ: 14,
                    scaleX: eS,
                    scaleY: eT,
                    scale: t => (eS(t) + eT(t)) / 2,
                    rotateX: t => eE(eb(Math.atan2(t[6], t[5]))),
                    rotateY: t => eE(eb(Math.atan2(-t[2], t[0]))),
                    rotateZ: ew,
                    rotate: ew,
                    skewX: t => eb(Math.atan(t[4])),
                    skewY: t => eb(Math.atan(t[1])),
                    skew: t => (Math.abs(t[1]) + Math.abs(t[4])) / 2
                };

            function eA(t) {
                return +!!t.includes("scale")
            }

            function eP(t, e) {
                let r, i;
                if (!t || "none" === t) return eA(e);
                let n = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
                if (n) r = eR, i = n;
                else {
                    let e = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
                    r = ex, i = e
                }
                if (!i) return eA(e);
                let s = r[e],
                    o = i[1].split(",").map(eO);
                return "function" == typeof s ? s(o) : o[s]
            }
            let eC = (t, e) => {
                let {
                    transform: r = "none"
                } = getComputedStyle(t);
                return eP(r, e)
            };

            function eO(t) {
                return parseFloat(t.trim())
            }
            let eM = t => t === Y || t === th,
                ej = new Set(["x", "y", "z"]),
                ek = k.filter(t => !ej.has(t)),
                eD = {
                    width: ({
                        x: t
                    }, {
                        paddingLeft: e = "0",
                        paddingRight: r = "0"
                    }) => t.max - t.min - parseFloat(e) - parseFloat(r),
                    height: ({
                        y: t
                    }, {
                        paddingTop: e = "0",
                        paddingBottom: r = "0"
                    }) => t.max - t.min - parseFloat(e) - parseFloat(r),
                    top: (t, {
                        top: e
                    }) => parseFloat(e),
                    left: (t, {
                        left: e
                    }) => parseFloat(e),
                    bottom: ({
                        y: t
                    }, {
                        top: e
                    }) => parseFloat(e) + (t.max - t.min),
                    right: ({
                        x: t
                    }, {
                        left: e
                    }) => parseFloat(e) + (t.max - t.min),
                    x: (t, {
                        transform: e
                    }) => eP(e, "x"),
                    y: (t, {
                        transform: e
                    }) => eP(e, "y")
                };
            eD.translateX = eD.x, eD.translateY = eD.y;
            let eL = new Set,
                eB = !1,
                eV = !1,
                eF = !1;

            function eU() {
                if (eV) {
                    let t = Array.from(eL).filter(t => t.needsMeasurement),
                        e = new Set(t.map(t => t.element)),
                        r = new Map;
                    e.forEach(t => {
                        let e = function(t) {
                            let e = [];
                            return ek.forEach(r => {
                                let i = t.getValue(r);
                                void 0 !== i && (e.push([r, i.get()]), i.set(+!!r.startsWith("scale")))
                            }), e
                        }(t);
                        e.length && (r.set(t, e), t.render())
                    }), t.forEach(t => t.measureInitialState()), e.forEach(t => {
                        t.render();
                        let e = r.get(t);
                        e && e.forEach(([e, r]) => {
                            t.getValue(e) ? .set(r)
                        })
                    }), t.forEach(t => t.measureEndState()), t.forEach(t => {
                        void 0 !== t.suspendedScrollY && window.scrollTo(0, t.suspendedScrollY)
                    })
                }
                eV = !1, eB = !1, eL.forEach(t => t.complete(eF)), eL.clear()
            }

            function eI() {
                eL.forEach(t => {
                    t.readKeyframes(), t.needsMeasurement && (eV = !0)
                })
            }
            class e_ {
                constructor(t, e, r, i, n, s = !1) {
                    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...t], this.onComplete = e, this.name = r, this.motionValue = i, this.element = n, this.isAsync = s
                }
                scheduleResolve() {
                    this.state = "scheduled", this.isAsync ? (eL.add(this), eB || (eB = !0, p.read(eI), p.resolveKeyframes(eU))) : (this.readKeyframes(), this.complete())
                }
                readKeyframes() {
                    let {
                        unresolvedKeyframes: t,
                        name: e,
                        element: r,
                        motionValue: i
                    } = this;
                    if (null === t[0]) {
                        let n = i ? .get(),
                            s = t[t.length - 1];
                        if (void 0 !== n) t[0] = n;
                        else if (r && e) {
                            let i = r.readValue(e, s);
                            null != i && (t[0] = i)
                        }
                        void 0 === t[0] && (t[0] = s), i && void 0 === n && i.set(t[0])
                    }
                    for (let e = 1; e < t.length; e++) t[e] ? ? (t[e] = t[e - 1])
                }
                setFinalKeyframe() {}
                measureInitialState() {}
                renderEndStyles() {}
                measureEndState() {}
                complete(t = !1) {
                    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t), eL.delete(this)
                }
                cancel() {
                    "scheduled" === this.state && (eL.delete(this), this.state = "pending")
                }
                resume() {
                    "pending" === this.state && this.scheduleResolve()
                }
            }
            let eN = t => t.startsWith("--");

            function ez(t) {
                let e;
                return () => (void 0 === e && (e = t()), e)
            }
            let eW = ez(() => void 0 !== window.ScrollTimeline),
                eq = {},
                e$ = function(t, e) {
                    let r = ez(t);
                    return () => eq[e] ? ? r()
                }(() => {
                    try {
                        document.createElement("div").animate({
                            opacity: 0
                        }, {
                            easing: "linear(0, 1)"
                        })
                    } catch (t) {
                        return !1
                    }
                    return !0
                }, "linearEasing"),
                eQ = ([t, e, r, i]) => `cubic-bezier(${t}, ${e}, ${r}, ${i})`,
                eH = {
                    linear: "linear",
                    ease: "ease",
                    easeIn: "ease-in",
                    easeOut: "ease-out",
                    easeInOut: "ease-in-out",
                    circIn: eQ([0, .65, .55, 1]),
                    circOut: eQ([.55, 0, 1, .45]),
                    backIn: eQ([.31, .01, .66, -.59]),
                    backOut: eQ([.33, 1.53, .69, .99])
                };

            function eX(t) {
                return "function" == typeof t && "applyToOptions" in t
            }
            class eY extends ey {
                constructor(t) {
                    if (super(), this.finishedTime = null, this.isStopped = !1, !t) return;
                    let {
                        element: e,
                        name: r,
                        keyframes: i,
                        pseudoElement: n,
                        allowFlatten: s = !1,
                        finalKeyframe: o,
                        onComplete: a
                    } = t;
                    this.isPseudoElement = !!n, this.allowFlatten = s, this.options = t, tO("string" != typeof t.type, 'animateMini doesn\'t support "type" as a string. Did you mean to import { spring } from "motion"?');
                    let l = function({
                        type: t,
                        ...e
                    }) {
                        return eX(t) && e$() ? t.applyToOptions(e) : (e.duration ? ? (e.duration = 300), e.ease ? ? (e.ease = "easeOut"), e)
                    }(t);
                    this.animation = function(t, e, r, {
                        delay: i = 0,
                        duration: n = 300,
                        repeat: s = 0,
                        repeatType: o = "loop",
                        ease: a = "easeOut",
                        times: l
                    } = {}, u) {
                        let c = {
                            [e]: r
                        };
                        l && (c.offset = l);
                        let f = function t(e, r) {
                            if (e) return "function" == typeof e ? e$() ? t$(e, r) : "ease-out" : ea(e) ? eQ(e) : Array.isArray(e) ? e.map(e => t(e, r) || eH.easeOut) : eH[e]
                        }(a, n);
                        Array.isArray(f) && (c.easing = f), h.value && z.waapi++;
                        let d = {
                            delay: i,
                            duration: n,
                            easing: Array.isArray(f) ? "linear" : f,
                            fill: "both",
                            iterations: s + 1,
                            direction: "reverse" === o ? "alternate" : "normal"
                        };
                        u && (d.pseudoElement = u);
                        let p = t.animate(c, d);
                        return h.value && p.finished.finally(() => {
                            z.waapi--
                        }), p
                    }(e, r, i, l, n), !1 === l.autoplay && this.animation.pause(), this.animation.onfinish = () => {
                        if (this.finishedTime = this.time, !n) {
                            let t = ed(i, this.options, o, this.speed);
                            this.updateMotionValue ? this.updateMotionValue(t) : function(t, e, r) {
                                eN(e) ? t.style.setProperty(e, r) : t.style[e] = r
                            }(e, r, t), this.animation.cancel()
                        }
                        a ? .(), this.notifyFinished()
                    }
                }
                play() {
                    this.isStopped || (this.animation.play(), "finished" === this.state && this.updateFinished())
                }
                pause() {
                    this.animation.pause()
                }
                complete() {
                    this.animation.finish ? .()
                }
                cancel() {
                    try {
                        this.animation.cancel()
                    } catch (t) {}
                }
                stop() {
                    if (this.isStopped) return;
                    this.isStopped = !0;
                    let {
                        state: t
                    } = this;
                    "idle" !== t && "finished" !== t && (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel())
                }
                commitStyles() {
                    this.isPseudoElement || this.animation.commitStyles ? .()
                }
                get duration() {
                    return N(Number(this.animation.effect ? .getComputedTiming ? .().duration || 0))
                }
                get time() {
                    return N(Number(this.animation.currentTime) || 0)
                }
                set time(t) {
                    this.finishedTime = null, this.animation.currentTime = _(t)
                }
                get speed() {
                    return this.animation.playbackRate
                }
                set speed(t) {
                    t < 0 && (this.finishedTime = null), this.animation.playbackRate = t
                }
                get state() {
                    return null !== this.finishedTime ? "finished" : this.animation.playState
                }
                get startTime() {
                    return Number(this.animation.startTime)
                }
                set startTime(t) {
                    this.animation.startTime = t
                }
                attachTimeline({
                    timeline: t,
                    observe: e
                }) {
                    return (this.allowFlatten && this.animation.effect ? .updateTiming({
                        easing: "linear"
                    }), this.animation.onfinish = null, t && eW()) ? (this.animation.timeline = t, d) : e(this)
                }
            }
            let eK = {
                anticipate: ei,
                backInOut: er,
                circInOut: eo
            };
            class eG extends eY {
                constructor(t) {
                    ! function(t) {
                        "string" == typeof t.ease && t.ease in eK && (t.ease = eK[t.ease])
                    }(t), em(t), super(t), t.startTime && (this.startTime = t.startTime), this.options = t
                }
                updateMotionValue(t) {
                    let {
                        motionValue: e,
                        onUpdate: r,
                        onComplete: i,
                        element: n,
                        ...s
                    } = this.options;
                    if (!e) return;
                    if (void 0 !== t) return void e.set(t);
                    let o = new ev({ ...s,
                            autoplay: !1
                        }),
                        a = _(this.finishedTime ? ? this.time);
                    e.setWithVelocity(o.sample(a - 10).value, o.sample(a).value, 10), o.stop()
                }
            }
            let eJ = (t, e) => "zIndex" !== e && !!("number" == typeof t || Array.isArray(t) || "string" == typeof t && (tT.test(t) || "0" === t) && !t.startsWith("url(")),
                eZ = new Set(["opacity", "clipPath", "filter", "transform"]),
                e0 = ez(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
            class e1 extends ey {
                constructor({
                    autoplay: t = !0,
                    delay: e = 0,
                    type: r = "keyframes",
                    repeat: i = 0,
                    repeatDelay: n = 0,
                    repeatType: s = "loop",
                    keyframes: o,
                    name: a,
                    motionValue: l,
                    element: u,
                    ...h
                }) {
                    super(), this.stop = () => {
                        this._animation && (this._animation.stop(), this.stopTimeline ? .()), this.keyframeResolver ? .cancel()
                    }, this.createdAt = b.now();
                    let c = {
                            autoplay: t,
                            delay: e,
                            type: r,
                            repeat: i,
                            repeatDelay: n,
                            repeatType: s,
                            name: a,
                            motionValue: l,
                            element: u,
                            ...h
                        },
                        f = u ? .KeyframeResolver || e_;
                    this.keyframeResolver = new f(o, (t, e, r) => this.onKeyframesResolved(t, e, c, !r), a, l, u), this.keyframeResolver ? .scheduleResolve()
                }
                onKeyframesResolved(t, e, r, i) {
                    this.keyframeResolver = void 0;
                    let {
                        name: n,
                        type: s,
                        velocity: o,
                        delay: a,
                        isHandoff: l,
                        onUpdate: u
                    } = r;
                    this.resolvedAt = b.now(), ! function(t, e, r, i) {
                        let n = t[0];
                        if (null === n) return !1;
                        if ("display" === e || "visibility" === e) return !0;
                        let s = t[t.length - 1],
                            o = eJ(n, e),
                            a = eJ(s, e);
                        return tC(o === a, `You are trying to animate ${e} from "${n}" to "${s}". ${n} is not an animatable value - to enable this animation set ${n} to a value animatable to ${s} via the \`style\` property.`), !!o && !!a && (function(t) {
                            let e = t[0];
                            if (1 === t.length) return !0;
                            for (let r = 0; r < t.length; r++)
                                if (t[r] !== e) return !0
                        }(t) || ("spring" === r || eX(r)) && i)
                    }(t, n, s, o) && ((c.instantAnimations || !a) && u ? .(ed(t, r, e)), t[0] = t[t.length - 1], r.duration = 0, r.repeat = 0);
                    let h = {
                            startTime: i ? this.resolvedAt && this.resolvedAt - this.createdAt > 40 ? this.resolvedAt : this.createdAt : void 0,
                            finalKeyframe: e,
                            ...r,
                            keyframes: t
                        },
                        f = !l && function(t) {
                            let {
                                motionValue: e,
                                name: r,
                                repeatDelay: i,
                                repeatType: n,
                                damping: s,
                                type: o
                            } = t;
                            if (!e || !e.owner || !(e.owner.current instanceof HTMLElement)) return !1;
                            let {
                                onUpdate: a,
                                transformTemplate: l
                            } = e.owner.getProps();
                            return e0() && r && eZ.has(r) && ("transform" !== r || !l) && !a && !i && "mirror" !== n && 0 !== s && "inertia" !== o
                        }(h) ? new eG({ ...h,
                            element: h.motionValue.owner.current
                        }) : new ev(h);
                    f.finished.then(() => this.notifyFinished()).catch(d), this.pendingTimeline && (this.stopTimeline = f.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = f
                }
                get finished() {
                    return this._animation ? this.animation.finished : this._finished
                }
                then(t, e) {
                    return this.finished.finally(t).then(() => {})
                }
                get animation() {
                    return this._animation || (this.keyframeResolver ? .resume(), eF = !0, eI(), eU(), eF = !1), this._animation
                }
                get duration() {
                    return this.animation.duration
                }
                get time() {
                    return this.animation.time
                }
                set time(t) {
                    this.animation.time = t
                }
                get speed() {
                    return this.animation.speed
                }
                get state() {
                    return this.animation.state
                }
                set speed(t) {
                    this.animation.speed = t
                }
                get startTime() {
                    return this.animation.startTime
                }
                attachTimeline(t) {
                    return this._animation ? this.stopTimeline = this.animation.attachTimeline(t) : this.pendingTimeline = t, () => this.stop()
                }
                play() {
                    this.animation.play()
                }
                pause() {
                    this.animation.pause()
                }
                complete() {
                    this.animation.complete()
                }
                cancel() {
                    this._animation && this.animation.cancel(), this.keyframeResolver ? .cancel()
                }
            }
            let e2 = (t, e, r, i = {}, n, s) => o => {
                    let a = I(i, t) || {},
                        l = a.delay || i.delay || 0,
                        {
                            elapsed: u = 0
                        } = i;
                    u -= _(l);
                    let h = {
                        keyframes: Array.isArray(r) ? r : [null, r],
                        ease: "easeOut",
                        velocity: e.getVelocity(),
                        ...a,
                        delay: -u,
                        onUpdate: t => {
                            e.set(t), a.onUpdate && a.onUpdate(t)
                        },
                        onComplete: () => {
                            o(), a.onComplete && a.onComplete()
                        },
                        name: t,
                        motionValue: e,
                        element: s ? void 0 : n
                    };
                    ! function({
                        when: t,
                        delay: e,
                        delayChildren: r,
                        staggerChildren: i,
                        staggerDirection: n,
                        repeat: s,
                        repeatType: o,
                        repeatDelay: a,
                        from: l,
                        elapsed: u,
                        ...h
                    }) {
                        return !!Object.keys(h).length
                    }(a) && Object.assign(h, U(t, h)), h.duration && (h.duration = _(h.duration)), h.repeatDelay && (h.repeatDelay = _(h.repeatDelay)), void 0 !== h.from && (h.keyframes[0] = h.from);
                    let f = !1;
                    if (!1 !== h.type && (0 !== h.duration || h.repeatDelay) || (h.duration = 0, 0 === h.delay && (f = !0)), (c.instantAnimations || c.skipAnimations) && (f = !0, h.duration = 0, h.delay = 0), h.allowFlatten = !a.type && !a.ease, f && !s && void 0 !== e.get()) {
                        let t = function(t, {
                            repeat: e,
                            repeatType: r = "loop"
                        }, i) {
                            let n = t.filter(j),
                                s = e && "loop" !== r && e % 2 == 1 ? 0 : n.length - 1;
                            return n[s]
                        }(h.keyframes, a);
                        if (void 0 !== t) return void p.update(() => {
                            h.onUpdate(t), h.onComplete()
                        })
                    }
                    return a.isSync ? new ev(h) : new e1(h)
                },
                e5 = new Set(["width", "height", "top", "left", "right", "bottom", ...k]);

            function e3(t, e, {
                delay: r = 0,
                transitionOverride: i,
                type: n
            } = {}) {
                let {
                    transition: s = t.getDefaultTransition(),
                    transitionEnd: o,
                    ...u
                } = e;
                i && (s = i);
                let h = [],
                    c = n && t.animationState && t.animationState.getState()[n];
                for (let e in u) {
                    let i = t.getValue(e, t.latestValues[e] ? ? null),
                        n = u[e];
                    if (void 0 === n || c && function({
                            protectedKeys: t,
                            needsAnimating: e
                        }, r) {
                            let i = t.hasOwnProperty(r) && !0 !== e[r];
                            return e[r] = !1, i
                        }(c, e)) continue;
                    let o = {
                            delay: r,
                            ...I(s || {}, e)
                        },
                        a = i.get();
                    if (void 0 !== a && !i.isAnimating && !Array.isArray(n) && n === a && !o.velocity) continue;
                    let l = !1;
                    if (window.MotionHandoffAnimation) {
                        let r = t.props[M];
                        if (r) {
                            let t = window.MotionHandoffAnimation(r, e, p);
                            null !== t && (o.startTime = t, l = !0)
                        }
                    }
                    C(t, e), i.start(e2(e, i, n, t.shouldReduceMotion && e5.has(e) ? {
                        type: !1
                    } : o, t, l));
                    let f = i.animation;
                    f && h.push(f)
                }
                return o && Promise.all(h).then(() => {
                    p.update(() => {
                        o && function(t, e) {
                            let {
                                transitionEnd: r = {},
                                transition: i = {},
                                ...n
                            } = a(t, e) || {};
                            for (let e in n = { ...n,
                                    ...r
                                }) {
                                var s;
                                let r = l(s = n[e]) ? s[s.length - 1] || 0 : s;
                                t.hasValue(e) ? t.getValue(e).set(r) : t.addValue(e, A(r))
                            }
                        }(t, o)
                    })
                }), h
            }

            function e6(t, e, r = {}) {
                let i = a(t, e, "exit" === r.type ? t.presenceContext ? .custom : void 0),
                    {
                        transition: n = t.getDefaultTransition() || {}
                    } = i || {};
                r.transitionOverride && (n = r.transitionOverride);
                let s = i ? () => Promise.all(e3(t, i, r)) : () => Promise.resolve(),
                    o = t.variantChildren && t.variantChildren.size ? (i = 0) => {
                        let {
                            delayChildren: s = 0,
                            staggerChildren: o,
                            staggerDirection: a
                        } = n;
                        return function(t, e, r = 0, i = 0, n = 1, s) {
                            let o = [],
                                a = (t.variantChildren.size - 1) * i,
                                l = 1 === n ? (t = 0) => t * i : (t = 0) => a - t * i;
                            return Array.from(t.variantChildren).sort(e8).forEach((t, i) => {
                                t.notify("AnimationStart", e), o.push(e6(t, e, { ...s,
                                    delay: r + l(i)
                                }).then(() => t.notify("AnimationComplete", e)))
                            }), Promise.all(o)
                        }(t, e, s + i, o, a, r)
                    } : () => Promise.resolve(),
                    {
                        when: l
                    } = n;
                if (!l) return Promise.all([s(), o(r.delay)]); {
                    let [t, e] = "beforeChildren" === l ? [s, o] : [o, s];
                    return t().then(() => e())
                }
            }

            function e8(t, e) {
                return t.sortNodePosition(e)
            }

            function e4(t, e) {
                if (!Array.isArray(e)) return !1;
                let r = e.length;
                if (r !== t.length) return !1;
                for (let i = 0; i < r; i++)
                    if (e[i] !== t[i]) return !1;
                return !0
            }

            function e9(t) {
                return "string" == typeof t || Array.isArray(t)
            }
            let e7 = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
                rt = ["initial", ...e7],
                re = rt.length,
                rr = [...e7].reverse(),
                ri = e7.length;

            function rn(t = !1) {
                return {
                    isActive: t,
                    protectedKeys: {},
                    needsAnimating: {},
                    prevResolvedValues: {}
                }
            }

            function rs() {
                return {
                    animate: rn(!0),
                    whileInView: rn(),
                    whileHover: rn(),
                    whileTap: rn(),
                    whileDrag: rn(),
                    whileFocus: rn(),
                    exit: rn()
                }
            }
            class ro {
                constructor(t) {
                    this.isMounted = !1, this.node = t
                }
                update() {}
            }
            class ra extends ro {
                constructor(t) {
                    super(t), t.animationState || (t.animationState = function(t) {
                        let e = e => Promise.all(e.map(({
                                animation: e,
                                options: r
                            }) => (function(t, e, r = {}) {
                                let i;
                                if (t.notify("AnimationStart", e), Array.isArray(e)) i = Promise.all(e.map(e => e6(t, e, r)));
                                else if ("string" == typeof e) i = e6(t, e, r);
                                else {
                                    let n = "function" == typeof e ? a(t, e, r.custom) : e;
                                    i = Promise.all(e3(t, n, r))
                                }
                                return i.then(() => {
                                    t.notify("AnimationComplete", e)
                                })
                            })(t, e, r))),
                            r = rs(),
                            i = !0,
                            s = e => (r, i) => {
                                let n = a(t, i, "exit" === e ? t.presenceContext ? .custom : void 0);
                                if (n) {
                                    let {
                                        transition: t,
                                        transitionEnd: e,
                                        ...i
                                    } = n;
                                    r = { ...r,
                                        ...i,
                                        ...e
                                    }
                                }
                                return r
                            };

                        function o(o) {
                            let {
                                props: u
                            } = t, h = function t(e) {
                                if (!e) return;
                                if (!e.isControllingVariants) {
                                    let r = e.parent && t(e.parent) || {};
                                    return void 0 !== e.props.initial && (r.initial = e.props.initial), r
                                }
                                let r = {};
                                for (let t = 0; t < re; t++) {
                                    let i = rt[t],
                                        n = e.props[i];
                                    (e9(n) || !1 === n) && (r[i] = n)
                                }
                                return r
                            }(t.parent) || {}, c = [], f = new Set, d = {}, p = 1 / 0;
                            for (let e = 0; e < ri; e++) {
                                var m, y;
                                let a = rr[e],
                                    g = r[a],
                                    v = void 0 !== u[a] ? u[a] : h[a],
                                    b = e9(v),
                                    w = a === o ? g.isActive : null;
                                !1 === w && (p = e);
                                let x = v === h[a] && v !== u[a] && b;
                                if (x && i && t.manuallyAnimateOnMount && (x = !1), g.protectedKeys = { ...d
                                    }, !g.isActive && null === w || !v && !g.prevProp || n(v) || "boolean" == typeof v) continue;
                                let E = (m = g.prevProp, "string" == typeof(y = v) ? y !== m : !!Array.isArray(y) && !e4(y, m)),
                                    S = E || a === o && g.isActive && !x && b || e > p && b,
                                    T = !1,
                                    R = Array.isArray(v) ? v : [v],
                                    A = R.reduce(s(a), {});
                                !1 === w && (A = {});
                                let {
                                    prevResolvedValues: P = {}
                                } = g, C = { ...P,
                                    ...A
                                }, O = e => {
                                    S = !0, f.has(e) && (T = !0, f.delete(e)), g.needsAnimating[e] = !0;
                                    let r = t.getValue(e);
                                    r && (r.liveStyle = !1)
                                };
                                for (let t in C) {
                                    let e = A[t],
                                        r = P[t];
                                    if (d.hasOwnProperty(t)) continue;
                                    let i = !1;
                                    (l(e) && l(r) ? e4(e, r) : e === r) ? void 0 !== e && f.has(t) ? O(t) : g.protectedKeys[t] = !0: null != e ? O(t) : f.add(t)
                                }
                                g.prevProp = v, g.prevResolvedValues = A, g.isActive && (d = { ...d,
                                    ...A
                                }), i && t.blockInitialAnimation && (S = !1);
                                let M = !(x && E) || T;
                                S && M && c.push(...R.map(t => ({
                                    animation: t,
                                    options: {
                                        type: a
                                    }
                                })))
                            }
                            if (f.size) {
                                let e = {};
                                if ("boolean" != typeof u.initial) {
                                    let r = a(t, Array.isArray(u.initial) ? u.initial[0] : u.initial);
                                    r && r.transition && (e.transition = r.transition)
                                }
                                f.forEach(r => {
                                    let i = t.getBaseTarget(r),
                                        n = t.getValue(r);
                                    n && (n.liveStyle = !0), e[r] = i ? ? null
                                }), c.push({
                                    animation: e
                                })
                            }
                            let g = !!c.length;
                            return i && (!1 === u.initial || u.initial === u.animate) && !t.manuallyAnimateOnMount && (g = !1), i = !1, g ? e(c) : Promise.resolve()
                        }
                        return {
                            animateChanges: o,
                            setActive: function(e, i) {
                                if (r[e].isActive === i) return Promise.resolve();
                                t.variantChildren ? .forEach(t => t.animationState ? .setActive(e, i)), r[e].isActive = i;
                                let n = o(e);
                                for (let t in r) r[t].protectedKeys = {};
                                return n
                            },
                            setAnimateFunction: function(r) {
                                e = r(t)
                            },
                            getState: () => r,
                            reset: () => {
                                r = rs(), i = !0
                            }
                        }
                    }(t))
                }
                updateAnimationControlsSubscription() {
                    let {
                        animate: t
                    } = this.node.getProps();
                    n(t) && (this.unmountControls = t.subscribe(this.node))
                }
                mount() {
                    this.updateAnimationControlsSubscription()
                }
                update() {
                    let {
                        animate: t
                    } = this.node.getProps(), {
                        animate: e
                    } = this.node.prevProps || {};
                    t !== e && this.updateAnimationControlsSubscription()
                }
                unmount() {
                    this.node.animationState.reset(), this.unmountControls ? .()
                }
            }
            let rl = 0;
            class ru extends ro {
                constructor() {
                    super(...arguments), this.id = rl++
                }
                update() {
                    if (!this.node.presenceContext) return;
                    let {
                        isPresent: t,
                        onExitComplete: e
                    } = this.node.presenceContext, {
                        isPresent: r
                    } = this.node.prevPresenceContext || {};
                    if (!this.node.animationState || t === r) return;
                    let i = this.node.animationState.setActive("exit", !t);
                    e && !t && i.then(() => {
                        e(this.id)
                    })
                }
                mount() {
                    let {
                        register: t,
                        onExitComplete: e
                    } = this.node.presenceContext || {};
                    e && e(this.id), t && (this.unmount = t(this.id))
                }
                unmount() {}
            }

            function rh(t, e, r, i = {
                passive: !0
            }) {
                return t.addEventListener(e, r, i), () => t.removeEventListener(e, r)
            }
            let rc = t => "mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : !1 !== t.isPrimary;

            function rf(t) {
                return {
                    point: {
                        x: t.pageX,
                        y: t.pageY
                    }
                }
            }
            let rd = t => e => rc(e) && t(e, rf(e));

            function rp(t, e, r, i) {
                return rh(t, e, rd(r), i)
            }

            function rm({
                top: t,
                left: e,
                right: r,
                bottom: i
            }) {
                return {
                    x: {
                        min: e,
                        max: r
                    },
                    y: {
                        min: t,
                        max: i
                    }
                }
            }

            function ry(t) {
                return t.max - t.min
            }

            function rg(t, e, r, i = .5) {
                t.origin = i, t.originPoint = tP(e.min, e.max, t.origin), t.scale = ry(r) / ry(e), t.translate = tP(r.min, r.max, t.origin) - t.originPoint, (t.scale >= .9999 && t.scale <= 1.0001 || isNaN(t.scale)) && (t.scale = 1), (t.translate >= -.01 && t.translate <= .01 || isNaN(t.translate)) && (t.translate = 0)
            }

            function rv(t, e, r, i) {
                rg(t.x, e.x, r.x, i ? i.originX : void 0), rg(t.y, e.y, r.y, i ? i.originY : void 0)
            }

            function rb(t, e, r) {
                t.min = r.min + e.min, t.max = t.min + ry(e)
            }

            function rw(t, e, r) {
                t.min = e.min - r.min, t.max = t.min + ry(e)
            }

            function rx(t, e, r) {
                rw(t.x, e.x, r.x), rw(t.y, e.y, r.y)
            }
            let rE = () => ({
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                }),
                rS = () => ({
                    x: rE(),
                    y: rE()
                }),
                rT = () => ({
                    min: 0,
                    max: 0
                }),
                rR = () => ({
                    x: rT(),
                    y: rT()
                });

            function rA(t) {
                return [t("x"), t("y")]
            }

            function rP(t) {
                return void 0 === t || 1 === t
            }

            function rC({
                scale: t,
                scaleX: e,
                scaleY: r
            }) {
                return !rP(t) || !rP(e) || !rP(r)
            }

            function rO(t) {
                return rC(t) || rM(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
            }

            function rM(t) {
                var e, r;
                return (e = t.x) && "0%" !== e || (r = t.y) && "0%" !== r
            }

            function rj(t, e, r, i, n) {
                return void 0 !== n && (t = i + n * (t - i)), i + r * (t - i) + e
            }

            function rk(t, e = 0, r = 1, i, n) {
                t.min = rj(t.min, e, r, i, n), t.max = rj(t.max, e, r, i, n)
            }

            function rD(t, {
                x: e,
                y: r
            }) {
                rk(t.x, e.translate, e.scale, e.originPoint), rk(t.y, r.translate, r.scale, r.originPoint)
            }

            function rL(t, e) {
                t.min = t.min + e, t.max = t.max + e
            }

            function rB(t, e, r, i, n = .5) {
                let s = tP(t.min, t.max, n);
                rk(t, e, r, s, i)
            }

            function rV(t, e) {
                rB(t.x, e.x, e.scaleX, e.scale, e.originX), rB(t.y, e.y, e.scaleY, e.scale, e.originY)
            }

            function rF(t, e) {
                return rm(function(t, e) {
                    if (!e) return t;
                    let r = e({
                            x: t.left,
                            y: t.top
                        }),
                        i = e({
                            x: t.right,
                            y: t.bottom
                        });
                    return {
                        top: r.y,
                        left: r.x,
                        bottom: i.y,
                        right: i.x
                    }
                }(t.getBoundingClientRect(), e))
            }
            let rU = ({
                current: t
            }) => t ? t.ownerDocument.defaultView : null;

            function rI(t) {
                return t && "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
            }
            let r_ = (t, e) => Math.abs(t - e);
            class rN {
                constructor(t, e, {
                    transformPagePoint: r,
                    contextWindow: i,
                    dragSnapToOrigin: n = !1
                } = {}) {
                    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
                            if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let t = rq(this.lastMoveEventInfo, this.history),
                                e = null !== this.startEvent,
                                r = function(t, e) {
                                    return Math.sqrt(r_(t.x, e.x) ** 2 + r_(t.y, e.y) ** 2)
                                }(t.offset, {
                                    x: 0,
                                    y: 0
                                }) >= 3;
                            if (!e && !r) return;
                            let {
                                point: i
                            } = t, {
                                timestamp: n
                            } = y;
                            this.history.push({ ...i,
                                timestamp: n
                            });
                            let {
                                onStart: s,
                                onMove: o
                            } = this.handlers;
                            e || (s && s(this.lastMoveEvent, t), this.startEvent = this.lastMoveEvent), o && o(this.lastMoveEvent, t)
                        }, this.handlePointerMove = (t, e) => {
                            this.lastMoveEvent = t, this.lastMoveEventInfo = rz(e, this.transformPagePoint), p.update(this.updatePoint, !0)
                        }, this.handlePointerUp = (t, e) => {
                            this.end();
                            let {
                                onEnd: r,
                                onSessionEnd: i,
                                resumeAnimation: n
                            } = this.handlers;
                            if (this.dragSnapToOrigin && n && n(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let s = rq("pointercancel" === t.type ? this.lastMoveEventInfo : rz(e, this.transformPagePoint), this.history);
                            this.startEvent && r && r(t, s), i && i(t, s)
                        }, !rc(t)) return;
                    this.dragSnapToOrigin = n, this.handlers = e, this.transformPagePoint = r, this.contextWindow = i || window;
                    let s = rz(rf(t), this.transformPagePoint),
                        {
                            point: o
                        } = s,
                        {
                            timestamp: a
                        } = y;
                    this.history = [{ ...o,
                        timestamp: a
                    }];
                    let {
                        onSessionStart: l
                    } = e;
                    l && l(t, rq(s, this.history)), this.removeListeners = tF(rp(this.contextWindow, "pointermove", this.handlePointerMove), rp(this.contextWindow, "pointerup", this.handlePointerUp), rp(this.contextWindow, "pointercancel", this.handlePointerUp))
                }
                updateHandlers(t) {
                    this.handlers = t
                }
                end() {
                    this.removeListeners && this.removeListeners(), m(this.updatePoint)
                }
            }

            function rz(t, e) {
                return e ? {
                    point: e(t.point)
                } : t
            }

            function rW(t, e) {
                return {
                    x: t.x - e.x,
                    y: t.y - e.y
                }
            }

            function rq({
                point: t
            }, e) {
                return {
                    point: t,
                    delta: rW(t, r$(e)),
                    offset: rW(t, e[0]),
                    velocity: function(t, e) {
                        if (t.length < 2) return {
                            x: 0,
                            y: 0
                        };
                        let r = t.length - 1,
                            i = null,
                            n = r$(t);
                        for (; r >= 0 && (i = t[r], !(n.timestamp - i.timestamp > _(.1)));) r--;
                        if (!i) return {
                            x: 0,
                            y: 0
                        };
                        let s = N(n.timestamp - i.timestamp);
                        if (0 === s) return {
                            x: 0,
                            y: 0
                        };
                        let o = {
                            x: (n.x - i.x) / s,
                            y: (n.y - i.y) / s
                        };
                        return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o
                    }(e, .1)
                }
            }

            function r$(t) {
                return t[t.length - 1]
            }

            function rQ(t, e, r) {
                return {
                    min: void 0 !== e ? t.min + e : void 0,
                    max: void 0 !== r ? t.max + r - (t.max - t.min) : void 0
                }
            }

            function rH(t, e) {
                let r = e.min - t.min,
                    i = e.max - t.max;
                return e.max - e.min < t.max - t.min && ([r, i] = [i, r]), {
                    min: r,
                    max: i
                }
            }

            function rX(t, e, r) {
                return {
                    min: rY(t, e),
                    max: rY(t, r)
                }
            }

            function rY(t, e) {
                return "number" == typeof t ? t : t[e] || 0
            }
            let rK = {
                    x: !1,
                    y: !1
                },
                rG = new WeakMap;
            class rJ {
                constructor(t) {
                    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
                        x: 0,
                        y: 0
                    }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = rR(), this.visualElement = t
                }
                start(t, {
                    snapToCursor: e = !1
                } = {}) {
                    let {
                        presenceContext: r
                    } = this.visualElement;
                    if (r && !1 === r.isPresent) return;
                    let {
                        dragSnapToOrigin: i
                    } = this.getProps();
                    this.panSession = new rN(t, {
                        onSessionStart: t => {
                            let {
                                dragSnapToOrigin: r
                            } = this.getProps();
                            r ? this.pauseAnimation() : this.stopAnimation(), e && this.snapToCursor(rf(t).point)
                        },
                        onStart: (t, e) => {
                            let {
                                drag: r,
                                dragPropagation: i,
                                onDragStart: n
                            } = this.getProps();
                            if (r && !i && (this.openDragLock && this.openDragLock(), this.openDragLock = function(t) {
                                    if ("x" === t || "y" === t)
                                        if (rK[t]) return null;
                                        else return rK[t] = !0, () => {
                                            rK[t] = !1
                                        };
                                    return rK.x || rK.y ? null : (rK.x = rK.y = !0, () => {
                                        rK.x = rK.y = !1
                                    })
                                }(r), !this.openDragLock)) return;
                            this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), rA(t => {
                                let e = this.getAxisMotionValue(t).get() || 0;
                                if (tu.test(e)) {
                                    let {
                                        projection: r
                                    } = this.visualElement;
                                    if (r && r.layout) {
                                        let i = r.layout.layoutBox[t];
                                        i && (e = ry(i) * (parseFloat(e) / 100))
                                    }
                                }
                                this.originPoint[t] = e
                            }), n && p.postRender(() => n(t, e)), C(this.visualElement, "transform");
                            let {
                                animationState: s
                            } = this.visualElement;
                            s && s.setActive("whileDrag", !0)
                        },
                        onMove: (t, e) => {
                            let {
                                dragPropagation: r,
                                dragDirectionLock: i,
                                onDirectionLock: n,
                                onDrag: s
                            } = this.getProps();
                            if (!r && !this.openDragLock) return;
                            let {
                                offset: o
                            } = e;
                            if (i && null === this.currentDirection) {
                                this.currentDirection = function(t, e = 10) {
                                    let r = null;
                                    return Math.abs(t.y) > e ? r = "y" : Math.abs(t.x) > e && (r = "x"), r
                                }(o), null !== this.currentDirection && n && n(this.currentDirection);
                                return
                            }
                            this.updateAxis("x", e.point, o), this.updateAxis("y", e.point, o), this.visualElement.render(), s && s(t, e)
                        },
                        onSessionEnd: (t, e) => this.stop(t, e),
                        resumeAnimation: () => rA(t => "paused" === this.getAnimationState(t) && this.getAxisMotionValue(t).animation ? .play())
                    }, {
                        transformPagePoint: this.visualElement.getTransformPagePoint(),
                        dragSnapToOrigin: i,
                        contextWindow: rU(this.visualElement)
                    })
                }
                stop(t, e) {
                    let r = this.isDragging;
                    if (this.cancel(), !r) return;
                    let {
                        velocity: i
                    } = e;
                    this.startAnimation(i);
                    let {
                        onDragEnd: n
                    } = this.getProps();
                    n && p.postRender(() => n(t, e))
                }
                cancel() {
                    this.isDragging = !1;
                    let {
                        projection: t,
                        animationState: e
                    } = this.visualElement;
                    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
                    let {
                        dragPropagation: r
                    } = this.getProps();
                    !r && this.openDragLock && (this.openDragLock(), this.openDragLock = null), e && e.setActive("whileDrag", !1)
                }
                updateAxis(t, e, r) {
                    let {
                        drag: i
                    } = this.getProps();
                    if (!r || !rZ(t, i, this.currentDirection)) return;
                    let n = this.getAxisMotionValue(t),
                        s = this.originPoint[t] + r[t];
                    this.constraints && this.constraints[t] && (s = function(t, {
                        min: e,
                        max: r
                    }, i) {
                        return void 0 !== e && t < e ? t = i ? tP(e, t, i.min) : Math.max(t, e) : void 0 !== r && t > r && (t = i ? tP(r, t, i.max) : Math.min(t, r)), t
                    }(s, this.constraints[t], this.elastic[t])), n.set(s)
                }
                resolveConstraints() {
                    let {
                        dragConstraints: t,
                        dragElastic: e
                    } = this.getProps(), r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection ? .layout, i = this.constraints;
                    t && rI(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && r ? this.constraints = function(t, {
                        top: e,
                        left: r,
                        bottom: i,
                        right: n
                    }) {
                        return {
                            x: rQ(t.x, r, n),
                            y: rQ(t.y, e, i)
                        }
                    }(r.layoutBox, t) : this.constraints = !1, this.elastic = function(t = .35) {
                        return !1 === t ? t = 0 : !0 === t && (t = .35), {
                            x: rX(t, "left", "right"),
                            y: rX(t, "top", "bottom")
                        }
                    }(e), i !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && rA(t => {
                        !1 !== this.constraints && this.getAxisMotionValue(t) && (this.constraints[t] = function(t, e) {
                            let r = {};
                            return void 0 !== e.min && (r.min = e.min - t.min), void 0 !== e.max && (r.max = e.max - t.min), r
                        }(r.layoutBox[t], this.constraints[t]))
                    })
                }
                resolveRefConstraints() {
                    var t;
                    let {
                        dragConstraints: e,
                        onMeasureDragConstraints: r
                    } = this.getProps();
                    if (!e || !rI(e)) return !1;
                    let i = e.current;
                    tO(null !== i, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                    let {
                        projection: n
                    } = this.visualElement;
                    if (!n || !n.layout) return !1;
                    let s = function(t, e, r) {
                            let i = rF(t, r),
                                {
                                    scroll: n
                                } = e;
                            return n && (rL(i.x, n.offset.x), rL(i.y, n.offset.y)), i
                        }(i, n.root, this.visualElement.getTransformPagePoint()),
                        o = (t = n.layout.layoutBox, {
                            x: rH(t.x, s.x),
                            y: rH(t.y, s.y)
                        });
                    if (r) {
                        let t = r(function({
                            x: t,
                            y: e
                        }) {
                            return {
                                top: e.min,
                                right: t.max,
                                bottom: e.max,
                                left: t.min
                            }
                        }(o));
                        this.hasMutatedConstraints = !!t, t && (o = rm(t))
                    }
                    return o
                }
                startAnimation(t) {
                    let {
                        drag: e,
                        dragMomentum: r,
                        dragElastic: i,
                        dragTransition: n,
                        dragSnapToOrigin: s,
                        onDragTransitionEnd: o
                    } = this.getProps(), a = this.constraints || {};
                    return Promise.all(rA(o => {
                        if (!rZ(o, e, this.currentDirection)) return;
                        let l = a && a[o] || {};
                        s && (l = {
                            min: 0,
                            max: 0
                        });
                        let u = {
                            type: "inertia",
                            velocity: r ? t[o] : 0,
                            bounceStiffness: i ? 200 : 1e6,
                            bounceDamping: i ? 40 : 1e7,
                            timeConstant: 750,
                            restDelta: 1,
                            restSpeed: 10,
                            ...n,
                            ...l
                        };
                        return this.startAxisValueAnimation(o, u)
                    })).then(o)
                }
                startAxisValueAnimation(t, e) {
                    let r = this.getAxisMotionValue(t);
                    return C(this.visualElement, t), r.start(e2(t, r, 0, e, this.visualElement, !1))
                }
                stopAnimation() {
                    rA(t => this.getAxisMotionValue(t).stop())
                }
                pauseAnimation() {
                    rA(t => this.getAxisMotionValue(t).animation ? .pause())
                }
                getAnimationState(t) {
                    return this.getAxisMotionValue(t).animation ? .state
                }
                getAxisMotionValue(t) {
                    let e = `_drag${t.toUpperCase()}`,
                        r = this.visualElement.getProps();
                    return r[e] || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
                }
                snapToCursor(t) {
                    rA(e => {
                        let {
                            drag: r
                        } = this.getProps();
                        if (!rZ(e, r, this.currentDirection)) return;
                        let {
                            projection: i
                        } = this.visualElement, n = this.getAxisMotionValue(e);
                        if (i && i.layout) {
                            let {
                                min: r,
                                max: s
                            } = i.layout.layoutBox[e];
                            n.set(t[e] - tP(r, s, .5))
                        }
                    })
                }
                scalePositionWithinConstraints() {
                    if (!this.visualElement.current) return;
                    let {
                        drag: t,
                        dragConstraints: e
                    } = this.getProps(), {
                        projection: r
                    } = this.visualElement;
                    if (!rI(e) || !r || !this.constraints) return;
                    this.stopAnimation();
                    let i = {
                        x: 0,
                        y: 0
                    };
                    rA(t => {
                        let e = this.getAxisMotionValue(t);
                        if (e && !1 !== this.constraints) {
                            let r = e.get();
                            i[t] = function(t, e) {
                                let r = .5,
                                    i = ry(t),
                                    n = ry(e);
                                return n > i ? r = t1(e.min, e.max - i, t.min) : i > n && (r = t1(t.min, t.max - n, e.min)), X(0, 1, r)
                            }({
                                min: r,
                                max: r
                            }, this.constraints[t])
                        }
                    });
                    let {
                        transformTemplate: n
                    } = this.visualElement.getProps();
                    this.visualElement.current.style.transform = n ? n({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), rA(e => {
                        if (!rZ(e, t, null)) return;
                        let r = this.getAxisMotionValue(e),
                            {
                                min: n,
                                max: s
                            } = this.constraints[e];
                        r.set(tP(n, s, i[e]))
                    })
                }
                addListeners() {
                    if (!this.visualElement.current) return;
                    rG.set(this.visualElement, this);
                    let t = rp(this.visualElement.current, "pointerdown", t => {
                            let {
                                drag: e,
                                dragListener: r = !0
                            } = this.getProps();
                            e && r && this.start(t)
                        }),
                        e = () => {
                            let {
                                dragConstraints: t
                            } = this.getProps();
                            rI(t) && t.current && (this.constraints = this.resolveRefConstraints())
                        },
                        {
                            projection: r
                        } = this.visualElement,
                        i = r.addEventListener("measure", e);
                    r && !r.layout && (r.root && r.root.updateScroll(), r.updateLayout()), p.read(e);
                    let n = rh(window, "resize", () => this.scalePositionWithinConstraints()),
                        s = r.addEventListener("didUpdate", ({
                            delta: t,
                            hasLayoutChanged: e
                        }) => {
                            this.isDragging && e && (rA(e => {
                                let r = this.getAxisMotionValue(e);
                                r && (this.originPoint[e] += t[e].translate, r.set(r.get() + t[e].translate))
                            }), this.visualElement.render())
                        });
                    return () => {
                        n(), t(), i(), s && s()
                    }
                }
                getProps() {
                    let t = this.visualElement.getProps(),
                        {
                            drag: e = !1,
                            dragDirectionLock: r = !1,
                            dragPropagation: i = !1,
                            dragConstraints: n = !1,
                            dragElastic: s = .35,
                            dragMomentum: o = !0
                        } = t;
                    return { ...t,
                        drag: e,
                        dragDirectionLock: r,
                        dragPropagation: i,
                        dragConstraints: n,
                        dragElastic: s,
                        dragMomentum: o
                    }
                }
            }

            function rZ(t, e, r) {
                return (!0 === e || e === t) && (null === r || r === t)
            }
            class r0 extends ro {
                constructor(t) {
                    super(t), this.removeGroupControls = d, this.removeListeners = d, this.controls = new rJ(t)
                }
                mount() {
                    let {
                        dragControls: t
                    } = this.node.getProps();
                    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || d
                }
                unmount() {
                    this.removeGroupControls(), this.removeListeners()
                }
            }
            let r1 = t => (e, r) => {
                t && p.postRender(() => t(e, r))
            };
            class r2 extends ro {
                constructor() {
                    super(...arguments), this.removePointerDownListener = d
                }
                onPointerDown(t) {
                    this.session = new rN(t, this.createPanHandlers(), {
                        transformPagePoint: this.node.getTransformPagePoint(),
                        contextWindow: rU(this.node)
                    })
                }
                createPanHandlers() {
                    let {
                        onPanSessionStart: t,
                        onPanStart: e,
                        onPan: r,
                        onPanEnd: i
                    } = this.node.getProps();
                    return {
                        onSessionStart: r1(t),
                        onStart: r1(e),
                        onMove: r,
                        onEnd: (t, e) => {
                            delete this.session, i && p.postRender(() => i(t, e))
                        }
                    }
                }
                mount() {
                    this.removePointerDownListener = rp(this.node.current, "pointerdown", t => this.onPointerDown(t))
                }
                update() {
                    this.session && this.session.updateHandlers(this.createPanHandlers())
                }
                unmount() {
                    this.removePointerDownListener(), this.session && this.session.end()
                }
            }
            var r5, r3, r6 = r(5155),
                r8 = r(2115),
                r4 = r(4905),
                r9 = r(7728);
            let r7 = (0, r8.createContext)({}),
                it = {
                    hasAnimatedSinceResize: !0,
                    hasEverUpdated: !1
                };

            function ie(t, e) {
                return e.max === e.min ? 0 : t / (e.max - e.min) * 100
            }
            let ir = {
                    correct: (t, e) => {
                        if (!e.target) return t;
                        if ("string" == typeof t)
                            if (!th.test(t)) return t;
                            else t = parseFloat(t);
                        let r = ie(t, e.target.x),
                            i = ie(t, e.target.y);
                        return `${r}% ${i}%`
                    }
                },
                ii = {},
                {
                    schedule: is
                } = f(queueMicrotask, !1);
            class io extends r8.Component {
                componentDidMount() {
                    let {
                        visualElement: t,
                        layoutGroup: e,
                        switchLayoutGroup: r,
                        layoutId: i
                    } = this.props, {
                        projection: n
                    } = t;
                    for (let t in il) ii[t] = il[t], q(t) && (ii[t].isCSSVariable = !0);
                    n && (e.group && e.group.add(n), r && r.register && i && r.register(n), n.root.didUpdate(), n.addEventListener("animationComplete", () => {
                        this.safeToRemove()
                    }), n.setOptions({ ...n.options,
                        onExitComplete: () => this.safeToRemove()
                    })), it.hasEverUpdated = !0
                }
                getSnapshotBeforeUpdate(t) {
                    let {
                        layoutDependency: e,
                        visualElement: r,
                        drag: i,
                        isPresent: n
                    } = this.props, {
                        projection: s
                    } = r;
                    return s && (s.isPresent = n, i || t.layoutDependency !== e || void 0 === e || t.isPresent !== n ? s.willUpdate() : this.safeToRemove(), t.isPresent !== n && (n ? s.promote() : s.relegate() || p.postRender(() => {
                        let t = s.getStack();
                        t && t.members.length || this.safeToRemove()
                    }))), null
                }
                componentDidUpdate() {
                    let {
                        projection: t
                    } = this.props.visualElement;
                    t && (t.root.didUpdate(), is.postRender(() => {
                        !t.currentAnimation && t.isLead() && this.safeToRemove()
                    }))
                }
                componentWillUnmount() {
                    let {
                        visualElement: t,
                        layoutGroup: e,
                        switchLayoutGroup: r
                    } = this.props, {
                        projection: i
                    } = t;
                    i && (i.scheduleCheckAfterUnmount(), e && e.group && e.group.remove(i), r && r.deregister && r.deregister(i))
                }
                safeToRemove() {
                    let {
                        safeToRemove: t
                    } = this.props;
                    t && t()
                }
                render() {
                    return null
                }
            }

            function ia(t) {
                let [e, r] = (0, r4.xQ)(), i = (0, r8.useContext)(r9.L);
                return (0, r6.jsx)(io, { ...t,
                    layoutGroup: i,
                    switchLayoutGroup: (0, r8.useContext)(r7),
                    isPresent: e,
                    safeToRemove: r
                })
            }
            let il = {
                    borderRadius: { ...ir,
                        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
                    },
                    borderTopLeftRadius: ir,
                    borderTopRightRadius: ir,
                    borderBottomLeftRadius: ir,
                    borderBottomRightRadius: ir,
                    boxShadow: {
                        correct: (t, {
                            treeScale: e,
                            projectionDelta: r
                        }) => {
                            let i = tT.parse(t);
                            if (i.length > 5) return t;
                            let n = tT.createTransformer(t),
                                s = +("number" != typeof i[0]),
                                o = r.x.scale * e.x,
                                a = r.y.scale * e.y;
                            i[0 + s] /= o, i[1 + s] /= a;
                            let l = tP(o, a, .5);
                            return "number" == typeof i[2 + s] && (i[2 + s] /= l), "number" == typeof i[3 + s] && (i[3 + s] /= l), n(i)
                        }
                    }
                },
                iu = (t, e) => t.depth - e.depth;
            class ih {
                constructor() {
                    this.children = [], this.isDirty = !1
                }
                add(t) {
                    w(this.children, t), this.isDirty = !0
                }
                remove(t) {
                    x(this.children, t), this.isDirty = !0
                }
                forEach(t) {
                    this.isDirty && this.children.sort(iu), this.isDirty = !1, this.children.forEach(t)
                }
            }

            function ic(t) {
                return P(t) ? t.get() : t
            }
            let id = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
                ip = id.length,
                im = t => "string" == typeof t ? parseFloat(t) : t,
                iy = t => "number" == typeof t || th.test(t);

            function ig(t, e) {
                return void 0 !== t[e] ? t[e] : t.borderRadius
            }
            let iv = iw(0, .5, es),
                ib = iw(.5, .95, d);

            function iw(t, e, r) {
                return i => i < t ? 0 : i > e ? 1 : r(t1(t, e, i))
            }

            function ix(t, e) {
                t.min = e.min, t.max = e.max
            }

            function iE(t, e) {
                ix(t.x, e.x), ix(t.y, e.y)
            }

            function iS(t, e) {
                t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin
            }

            function iT(t, e, r, i, n) {
                return t -= e, t = i + 1 / r * (t - i), void 0 !== n && (t = i + 1 / n * (t - i)), t
            }

            function iR(t, e, [r, i, n], s, o) {
                ! function(t, e = 0, r = 1, i = .5, n, s = t, o = t) {
                    if (tu.test(e) && (e = parseFloat(e), e = tP(o.min, o.max, e / 100) - o.min), "number" != typeof e) return;
                    let a = tP(s.min, s.max, i);
                    t === s && (a -= e), t.min = iT(t.min, e, r, a, n), t.max = iT(t.max, e, r, a, n)
                }(t, e[r], e[i], e[n], e.scale, s, o)
            }
            let iA = ["x", "scaleX", "originX"],
                iP = ["y", "scaleY", "originY"];

            function iC(t, e, r, i) {
                iR(t.x, e, iA, r ? r.x : void 0, i ? i.x : void 0), iR(t.y, e, iP, r ? r.y : void 0, i ? i.y : void 0)
            }

            function iO(t) {
                return 0 === t.translate && 1 === t.scale
            }

            function iM(t) {
                return iO(t.x) && iO(t.y)
            }

            function ij(t, e) {
                return t.min === e.min && t.max === e.max
            }

            function ik(t, e) {
                return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max)
            }

            function iD(t, e) {
                return ik(t.x, e.x) && ik(t.y, e.y)
            }

            function iL(t) {
                return ry(t.x) / ry(t.y)
            }

            function iB(t, e) {
                return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint
            }
            class iV {
                constructor() {
                    this.members = []
                }
                add(t) {
                    w(this.members, t), t.scheduleRender()
                }
                remove(t) {
                    if (x(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
                        let t = this.members[this.members.length - 1];
                        t && this.promote(t)
                    }
                }
                relegate(t) {
                    let e, r = this.members.findIndex(e => t === e);
                    if (0 === r) return !1;
                    for (let t = r; t >= 0; t--) {
                        let r = this.members[t];
                        if (!1 !== r.isPresent) {
                            e = r;
                            break
                        }
                    }
                    return !!e && (this.promote(e), !0)
                }
                promote(t, e) {
                    let r = this.lead;
                    if (t !== r && (this.prevLead = r, this.lead = t, t.show(), r)) {
                        r.instance && r.scheduleRender(), t.scheduleRender(), t.resumeFrom = r, e && (t.resumeFrom.preserveOpacity = !0), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
                        let {
                            crossfade: i
                        } = t.options;
                        !1 === i && r.hide()
                    }
                }
                exitAnimationComplete() {
                    this.members.forEach(t => {
                        let {
                            options: e,
                            resumingFrom: r
                        } = t;
                        e.onExitComplete && e.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete()
                    })
                }
                scheduleRender() {
                    this.members.forEach(t => {
                        t.instance && t.scheduleRender(!1)
                    })
                }
                removeLeadSnapshot() {
                    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
                }
            }
            let iF = {
                    nodes: 0,
                    calculatedTargetDeltas: 0,
                    calculatedProjections: 0
                },
                iU = ["", "X", "Y", "Z"],
                iI = {
                    visibility: "hidden"
                },
                i_ = 0;

            function iN(t, e, r, i) {
                let {
                    latestValues: n
                } = e;
                n[t] && (r[t] = n[t], e.setStaticValue(t, 0), i && (i[t] = 0))
            }

            function iz({
                attachResizeListener: t,
                defaultParent: e,
                measureScroll: r,
                checkIsScrollRoot: i,
                resetTransform: n
            }) {
                return class {
                    constructor(t = {}, r = e ? .()) {
                        this.id = i_++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
                            x: 1,
                            y: 1
                        }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                            this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
                        }, this.updateProjection = () => {
                            this.projectionUpdateScheduled = !1, h.value && (iF.nodes = iF.calculatedTargetDeltas = iF.calculatedProjections = 0), this.nodes.forEach(i$), this.nodes.forEach(iJ), this.nodes.forEach(iZ), this.nodes.forEach(iQ), h.addProjectionMetrics && h.addProjectionMetrics(iF)
                        }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = t, this.root = r ? r.root || r : this, this.path = r ? [...r.path, r] : [], this.parent = r, this.depth = r ? r.depth + 1 : 0;
                        for (let t = 0; t < this.path.length; t++) this.path[t].shouldResetTransform = !0;
                        this.root === this && (this.nodes = new ih)
                    }
                    addEventListener(t, e) {
                        return this.eventHandlers.has(t) || this.eventHandlers.set(t, new E), this.eventHandlers.get(t).add(e)
                    }
                    notifyListeners(t, ...e) {
                        let r = this.eventHandlers.get(t);
                        r && r.notify(...e)
                    }
                    hasListeners(t) {
                        return this.eventHandlers.has(t)
                    }
                    mount(e) {
                        if (this.instance) return;
                        this.isSVG = e instanceof SVGElement && "svg" !== e.tagName, this.instance = e;
                        let {
                            layoutId: r,
                            layout: i,
                            visualElement: n
                        } = this.options;
                        if (n && !n.current && n.mount(e), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (i || r) && (this.isLayoutDirty = !0), t) {
                            let r, i = () => this.root.updateBlockedByResize = !1;
                            t(e, () => {
                                this.root.updateBlockedByResize = !0, r && r(), r = function(t, e) {
                                    let r = b.now(),
                                        i = ({
                                            timestamp: n
                                        }) => {
                                            let s = n - r;
                                            s >= 250 && (m(i), t(s - e))
                                        };
                                    return p.setup(i, !0), () => m(i)
                                }(i, 250), it.hasAnimatedSinceResize && (it.hasAnimatedSinceResize = !1, this.nodes.forEach(iG))
                            })
                        }
                        r && this.root.registerSharedNode(r, this), !1 !== this.options.animate && n && (r || i) && this.addEventListener("didUpdate", ({
                            delta: t,
                            hasLayoutChanged: e,
                            hasRelativeLayoutChanged: r,
                            layout: i
                        }) => {
                            if (this.isTreeAnimationBlocked()) {
                                this.target = void 0, this.relativeTarget = void 0;
                                return
                            }
                            let s = this.options.transition || n.getDefaultTransition() || i6,
                                {
                                    onLayoutAnimationStart: o,
                                    onLayoutAnimationComplete: a
                                } = n.getProps(),
                                l = !this.targetLayout || !iD(this.targetLayout, i),
                                u = !e && r;
                            if (this.options.layoutRoot || this.resumeFrom || u || e && (l || !this.currentAnimation)) {
                                this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(t, u);
                                let e = { ...I(s, "layout"),
                                    onPlay: o,
                                    onComplete: a
                                };
                                (n.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0, e.type = !1), this.startAnimation(e)
                            } else e || iG(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                            this.targetLayout = i
                        })
                    }
                    unmount() {
                        this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
                        let t = this.getStack();
                        t && t.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), m(this.updateProjection)
                    }
                    blockUpdate() {
                        this.updateManuallyBlocked = !0
                    }
                    unblockUpdate() {
                        this.updateManuallyBlocked = !1
                    }
                    isUpdateBlocked() {
                        return this.updateManuallyBlocked || this.updateBlockedByResize
                    }
                    isTreeAnimationBlocked() {
                        return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
                    }
                    startUpdate() {
                        !this.isUpdateBlocked() && (this.isUpdating = !0, this.nodes && this.nodes.forEach(i0), this.animationId++)
                    }
                    getTransformTemplate() {
                        let {
                            visualElement: t
                        } = this.options;
                        return t && t.getProps().transformTemplate
                    }
                    willUpdate(t = !0) {
                        if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                            this.options.onExitComplete && this.options.onExitComplete();
                            return
                        }
                        if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && function t(e) {
                                if (e.hasCheckedOptimisedAppear = !0, e.root === e) return;
                                let {
                                    visualElement: r
                                } = e.options;
                                if (!r) return;
                                let i = r.props[M];
                                if (window.MotionHasOptimisedAnimation(i, "transform")) {
                                    let {
                                        layout: t,
                                        layoutId: r
                                    } = e.options;
                                    window.MotionCancelOptimisedAnimation(i, "transform", p, !(t || r))
                                }
                                let {
                                    parent: n
                                } = e;
                                n && !n.hasCheckedOptimisedAppear && t(n)
                            }(this), this.root.isUpdating || this.root.startUpdate(), this.isLayoutDirty) return;
                        this.isLayoutDirty = !0;
                        for (let t = 0; t < this.path.length; t++) {
                            let e = this.path[t];
                            e.shouldResetTransform = !0, e.updateScroll("snapshot"), e.options.layoutRoot && e.willUpdate(!1)
                        }
                        let {
                            layoutId: e,
                            layout: r
                        } = this.options;
                        if (void 0 === e && !r) return;
                        let i = this.getTransformTemplate();
                        this.prevTransformTemplateValue = i ? i(this.latestValues, "") : void 0, this.updateSnapshot(), t && this.notifyListeners("willUpdate")
                    }
                    update() {
                        if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                            this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(iX);
                            return
                        }
                        this.isUpdating || this.nodes.forEach(iY), this.isUpdating = !1, this.nodes.forEach(iK), this.nodes.forEach(iW), this.nodes.forEach(iq), this.clearAllSnapshots();
                        let t = b.now();
                        y.delta = X(0, 1e3 / 60, t - y.timestamp), y.timestamp = t, y.isProcessing = !0, g.update.process(y), g.preRender.process(y), g.render.process(y), y.isProcessing = !1
                    }
                    didUpdate() {
                        this.updateScheduled || (this.updateScheduled = !0, is.read(this.scheduleUpdate))
                    }
                    clearAllSnapshots() {
                        this.nodes.forEach(iH), this.sharedNodes.forEach(i1)
                    }
                    scheduleUpdateProjection() {
                        this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, p.preRender(this.updateProjection, !1, !0))
                    }
                    scheduleCheckAfterUnmount() {
                        p.postRender(() => {
                            this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                        })
                    }
                    updateSnapshot() {
                        !this.snapshot && this.instance && (this.snapshot = this.measure(), !this.snapshot || ry(this.snapshot.measuredBox.x) || ry(this.snapshot.measuredBox.y) || (this.snapshot = void 0))
                    }
                    updateLayout() {
                        if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
                        if (this.resumeFrom && !this.resumeFrom.instance)
                            for (let t = 0; t < this.path.length; t++) this.path[t].updateScroll();
                        let t = this.layout;
                        this.layout = this.measure(!1), this.layoutCorrected = rR(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
                        let {
                            visualElement: e
                        } = this.options;
                        e && e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : void 0)
                    }
                    updateScroll(t = "measure") {
                        let e = !!(this.options.layoutScroll && this.instance);
                        if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1), e && this.instance) {
                            let e = i(this.instance);
                            this.scroll = {
                                animationId: this.root.animationId,
                                phase: t,
                                isRoot: e,
                                offset: r(this.instance),
                                wasRoot: this.scroll ? this.scroll.isRoot : e
                            }
                        }
                    }
                    resetTransform() {
                        if (!n) return;
                        let t = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                            e = this.projectionDelta && !iM(this.projectionDelta),
                            r = this.getTransformTemplate(),
                            i = r ? r(this.latestValues, "") : void 0,
                            s = i !== this.prevTransformTemplateValue;
                        t && this.instance && (e || rO(this.latestValues) || s) && (n(this.instance, i), this.shouldResetTransform = !1, this.scheduleRender())
                    }
                    measure(t = !0) {
                        var e;
                        let r = this.measurePageBox(),
                            i = this.removeElementScroll(r);
                        return t && (i = this.removeTransform(i)), i9((e = i).x), i9(e.y), {
                            animationId: this.root.animationId,
                            measuredBox: r,
                            layoutBox: i,
                            latestValues: {},
                            source: this.id
                        }
                    }
                    measurePageBox() {
                        let {
                            visualElement: t
                        } = this.options;
                        if (!t) return rR();
                        let e = t.measureViewportBox();
                        if (!(this.scroll ? .wasRoot || this.path.some(nt))) {
                            let {
                                scroll: t
                            } = this.root;
                            t && (rL(e.x, t.offset.x), rL(e.y, t.offset.y))
                        }
                        return e
                    }
                    removeElementScroll(t) {
                        let e = rR();
                        if (iE(e, t), this.scroll ? .wasRoot) return e;
                        for (let r = 0; r < this.path.length; r++) {
                            let i = this.path[r],
                                {
                                    scroll: n,
                                    options: s
                                } = i;
                            i !== this.root && n && s.layoutScroll && (n.wasRoot && iE(e, t), rL(e.x, n.offset.x), rL(e.y, n.offset.y))
                        }
                        return e
                    }
                    applyTransform(t, e = !1) {
                        let r = rR();
                        iE(r, t);
                        for (let t = 0; t < this.path.length; t++) {
                            let i = this.path[t];
                            !e && i.options.layoutScroll && i.scroll && i !== i.root && rV(r, {
                                x: -i.scroll.offset.x,
                                y: -i.scroll.offset.y
                            }), rO(i.latestValues) && rV(r, i.latestValues)
                        }
                        return rO(this.latestValues) && rV(r, this.latestValues), r
                    }
                    removeTransform(t) {
                        let e = rR();
                        iE(e, t);
                        for (let t = 0; t < this.path.length; t++) {
                            let r = this.path[t];
                            if (!r.instance || !rO(r.latestValues)) continue;
                            rC(r.latestValues) && r.updateSnapshot();
                            let i = rR();
                            iE(i, r.measurePageBox()), iC(e, r.latestValues, r.snapshot ? r.snapshot.layoutBox : void 0, i)
                        }
                        return rO(this.latestValues) && iC(e, this.latestValues), e
                    }
                    setTargetDelta(t) {
                        this.targetDelta = t, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
                    }
                    setOptions(t) {
                        this.options = { ...this.options,
                            ...t,
                            crossfade: void 0 === t.crossfade || t.crossfade
                        }
                    }
                    clearMeasurements() {
                        this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
                    }
                    forceRelativeParentToResolveTarget() {
                        this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== y.timestamp && this.relativeParent.resolveTargetDelta(!0)
                    }
                    resolveTargetDelta(t = !1) {
                        let e = this.getLead();
                        this.isProjectionDirty || (this.isProjectionDirty = e.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = e.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = e.isSharedProjectionDirty);
                        let r = !!this.resumingFrom || this !== e;
                        if (!(t || r && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent ? .isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
                        let {
                            layout: i,
                            layoutId: n
                        } = this.options;
                        if (this.layout && (i || n)) {
                            if (this.resolvedRelativeTargetAt = y.timestamp, !this.targetDelta && !this.relativeTarget) {
                                let t = this.getClosestProjectingParent();
                                t && t.layout && 1 !== this.animationProgress ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = rR(), this.relativeTargetOrigin = rR(), rx(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox), iE(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                            }
                            if (this.relativeTarget || this.targetDelta) {
                                if (this.target || (this.target = rR(), this.targetWithTransforms = rR()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) {
                                    var s, o, a;
                                    this.forceRelativeParentToResolveTarget(), s = this.target, o = this.relativeTarget, a = this.relativeParent.target, rb(s.x, o.x, a.x), rb(s.y, o.y, a.y)
                                } else this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : iE(this.target, this.layout.layoutBox), rD(this.target, this.targetDelta)) : iE(this.target, this.layout.layoutBox);
                                if (this.attemptToResolveRelativeTarget) {
                                    this.attemptToResolveRelativeTarget = !1;
                                    let t = this.getClosestProjectingParent();
                                    t && !!t.resumingFrom == !!this.resumingFrom && !t.options.layoutScroll && t.target && 1 !== this.animationProgress ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = rR(), this.relativeTargetOrigin = rR(), rx(this.relativeTargetOrigin, this.target, t.target), iE(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                                }
                                h.value && iF.calculatedTargetDeltas++
                            }
                        }
                    }
                    getClosestProjectingParent() {
                        if (!(!this.parent || rC(this.parent.latestValues) || rM(this.parent.latestValues)))
                            if (this.parent.isProjecting()) return this.parent;
                            else return this.parent.getClosestProjectingParent()
                    }
                    isProjecting() {
                        return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
                    }
                    calcProjection() {
                        let t = this.getLead(),
                            e = !!this.resumingFrom || this !== t,
                            r = !0;
                        if ((this.isProjectionDirty || this.parent ? .isProjectionDirty) && (r = !1), e && (this.isSharedProjectionDirty || this.isTransformDirty) && (r = !1), this.resolvedRelativeTargetAt === y.timestamp && (r = !1), r) return;
                        let {
                            layout: i,
                            layoutId: n
                        } = this.options;
                        if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(i || n)) return;
                        iE(this.layoutCorrected, this.layout.layoutBox);
                        let s = this.treeScale.x,
                            o = this.treeScale.y;
                        ! function(t, e, r, i = !1) {
                            let n, s, o = r.length;
                            if (o) {
                                e.x = e.y = 1;
                                for (let a = 0; a < o; a++) {
                                    s = (n = r[a]).projectionDelta;
                                    let {
                                        visualElement: o
                                    } = n.options;
                                    (!o || !o.props.style || "contents" !== o.props.style.display) && (i && n.options.layoutScroll && n.scroll && n !== n.root && rV(t, {
                                        x: -n.scroll.offset.x,
                                        y: -n.scroll.offset.y
                                    }), s && (e.x *= s.x.scale, e.y *= s.y.scale, rD(t, s)), i && rO(n.latestValues) && rV(t, n.latestValues))
                                }
                                e.x < 1.0000000000001 && e.x > .999999999999 && (e.x = 1), e.y < 1.0000000000001 && e.y > .999999999999 && (e.y = 1)
                            }
                        }(this.layoutCorrected, this.treeScale, this.path, e), t.layout && !t.target && (1 !== this.treeScale.x || 1 !== this.treeScale.y) && (t.target = t.layout.layoutBox, t.targetWithTransforms = rR());
                        let {
                            target: a
                        } = t;
                        if (!a) {
                            this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
                            return
                        }
                        this.projectionDelta && this.prevProjectionDelta ? (iS(this.prevProjectionDelta.x, this.projectionDelta.x), iS(this.prevProjectionDelta.y, this.projectionDelta.y)) : this.createProjectionDeltas(), rv(this.projectionDelta, this.layoutCorrected, a, this.latestValues), this.treeScale.x === s && this.treeScale.y === o && iB(this.projectionDelta.x, this.prevProjectionDelta.x) && iB(this.projectionDelta.y, this.prevProjectionDelta.y) || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", a)), h.value && iF.calculatedProjections++
                    }
                    hide() {
                        this.isVisible = !1
                    }
                    show() {
                        this.isVisible = !0
                    }
                    scheduleRender(t = !0) {
                        if (this.options.visualElement ? .scheduleRender(), t) {
                            let t = this.getStack();
                            t && t.scheduleRender()
                        }
                        this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                    }
                    createProjectionDeltas() {
                        this.prevProjectionDelta = rS(), this.projectionDelta = rS(), this.projectionDeltaWithTransform = rS()
                    }
                    setAnimationOrigin(t, e = !1) {
                        let r, i = this.snapshot,
                            n = i ? i.latestValues : {},
                            s = { ...this.latestValues
                            },
                            o = rS();
                        this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !e;
                        let a = rR(),
                            l = (i ? i.source : void 0) !== (this.layout ? this.layout.source : void 0),
                            u = this.getStack(),
                            h = !u || u.members.length <= 1,
                            c = !!(l && !h && !0 === this.options.crossfade && !this.path.some(i3));
                        this.animationProgress = 0, this.mixTargetDelta = e => {
                            let i = e / 1e3;
                            if (i2(o.x, t.x, i), i2(o.y, t.y, i), this.setTargetDelta(o), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
                                var u, f, d, p, m, y;
                                rx(a, this.layout.layoutBox, this.relativeParent.layout.layoutBox), d = this.relativeTarget, p = this.relativeTargetOrigin, m = a, y = i, i5(d.x, p.x, m.x, y), i5(d.y, p.y, m.y, y), r && (u = this.relativeTarget, f = r, ij(u.x, f.x) && ij(u.y, f.y)) && (this.isProjectionDirty = !1), r || (r = rR()), iE(r, this.relativeTarget)
                            }
                            l && (this.animationValues = s, function(t, e, r, i, n, s) {
                                n ? (t.opacity = tP(0, r.opacity ? ? 1, iv(i)), t.opacityExit = tP(e.opacity ? ? 1, 0, ib(i))) : s && (t.opacity = tP(e.opacity ? ? 1, r.opacity ? ? 1, i));
                                for (let n = 0; n < ip; n++) {
                                    let s = `border${id[n]}Radius`,
                                        o = ig(e, s),
                                        a = ig(r, s);
                                    (void 0 !== o || void 0 !== a) && (o || (o = 0), a || (a = 0), 0 === o || 0 === a || iy(o) === iy(a) ? (t[s] = Math.max(tP(im(o), im(a), i), 0), (tu.test(a) || tu.test(o)) && (t[s] += "%")) : t[s] = a)
                                }(e.rotate || r.rotate) && (t.rotate = tP(e.rotate || 0, r.rotate || 0, i))
                            }(s, n, this.latestValues, i, c, h)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = i
                        }, this.mixTargetDelta(1e3 * !!this.options.layoutRoot)
                    }
                    startAnimation(t) {
                        this.notifyListeners("animationStart"), this.currentAnimation ? .stop(!1), this.resumingFrom ? .currentAnimation ? .stop(!1), this.pendingAnimation && (m(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = p.update(() => {
                            it.hasAnimatedSinceResize = !0, z.layout++, this.motionValue || (this.motionValue = A(0)), this.currentAnimation = function(t, e, r) {
                                let i = P(t) ? t : A(t);
                                return i.start(e2("", i, e, r)), i.animation
                            }(this.motionValue, [0, 1e3], { ...t,
                                isSync: !0,
                                onUpdate: e => {
                                    this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e)
                                },
                                onStop: () => {
                                    z.layout--
                                },
                                onComplete: () => {
                                    z.layout--, t.onComplete && t.onComplete(), this.completeAnimation()
                                }
                            }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
                        })
                    }
                    completeAnimation() {
                        this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
                        let t = this.getStack();
                        t && t.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
                    }
                    finishAnimation() {
                        this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop(!1)), this.completeAnimation()
                    }
                    applyTransformsToTarget() {
                        let t = this.getLead(),
                            {
                                targetWithTransforms: e,
                                target: r,
                                layout: i,
                                latestValues: n
                            } = t;
                        if (e && r && i) {
                            if (this !== t && this.layout && i && i7(this.options.animationType, this.layout.layoutBox, i.layoutBox)) {
                                r = this.target || rR();
                                let e = ry(this.layout.layoutBox.x);
                                r.x.min = t.target.x.min, r.x.max = r.x.min + e;
                                let i = ry(this.layout.layoutBox.y);
                                r.y.min = t.target.y.min, r.y.max = r.y.min + i
                            }
                            iE(e, r), rV(e, n), rv(this.projectionDeltaWithTransform, this.layoutCorrected, e, n)
                        }
                    }
                    registerSharedNode(t, e) {
                        this.sharedNodes.has(t) || this.sharedNodes.set(t, new iV), this.sharedNodes.get(t).add(e);
                        let r = e.options.initialPromotionConfig;
                        e.promote({
                            transition: r ? r.transition : void 0,
                            preserveFollowOpacity: r && r.shouldPreserveFollowOpacity ? r.shouldPreserveFollowOpacity(e) : void 0
                        })
                    }
                    isLead() {
                        let t = this.getStack();
                        return !t || t.lead === this
                    }
                    getLead() {
                        let {
                            layoutId: t
                        } = this.options;
                        return t && this.getStack() ? .lead || this
                    }
                    getPrevLead() {
                        let {
                            layoutId: t
                        } = this.options;
                        return t ? this.getStack() ? .prevLead : void 0
                    }
                    getStack() {
                        let {
                            layoutId: t
                        } = this.options;
                        if (t) return this.root.sharedNodes.get(t)
                    }
                    promote({
                        needsReset: t,
                        transition: e,
                        preserveFollowOpacity: r
                    } = {}) {
                        let i = this.getStack();
                        i && i.promote(this, r), t && (this.projectionDelta = void 0, this.needsReset = !0), e && this.setOptions({
                            transition: e
                        })
                    }
                    relegate() {
                        let t = this.getStack();
                        return !!t && t.relegate(this)
                    }
                    resetSkewAndRotation() {
                        let {
                            visualElement: t
                        } = this.options;
                        if (!t) return;
                        let e = !1,
                            {
                                latestValues: r
                            } = t;
                        if ((r.z || r.rotate || r.rotateX || r.rotateY || r.rotateZ || r.skewX || r.skewY) && (e = !0), !e) return;
                        let i = {};
                        r.z && iN("z", t, i, this.animationValues);
                        for (let e = 0; e < iU.length; e++) iN(`rotate${iU[e]}`, t, i, this.animationValues), iN(`skew${iU[e]}`, t, i, this.animationValues);
                        for (let e in t.render(), i) t.setStaticValue(e, i[e]), this.animationValues && (this.animationValues[e] = i[e]);
                        t.scheduleRender()
                    }
                    getProjectionStyles(t) {
                        if (!this.instance || this.isSVG) return;
                        if (!this.isVisible) return iI;
                        let e = {
                                visibility: ""
                            },
                            r = this.getTransformTemplate();
                        if (this.needsReset) return this.needsReset = !1, e.opacity = "", e.pointerEvents = ic(t ? .pointerEvents) || "", e.transform = r ? r(this.latestValues, "") : "none", e;
                        let i = this.getLead();
                        if (!this.projectionDelta || !this.layout || !i.target) {
                            let e = {};
                            return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, e.pointerEvents = ic(t ? .pointerEvents) || ""), this.hasProjected && !rO(this.latestValues) && (e.transform = r ? r({}, "") : "none", this.hasProjected = !1), e
                        }
                        let n = i.animationValues || i.latestValues;
                        this.applyTransformsToTarget(), e.transform = function(t, e, r) {
                            let i = "",
                                n = t.x.translate / e.x,
                                s = t.y.translate / e.y,
                                o = r ? .z || 0;
                            if ((n || s || o) && (i = `translate3d(${n}px, ${s}px, ${o}px) `), (1 !== e.x || 1 !== e.y) && (i += `scale(${1/e.x}, ${1/e.y}) `), r) {
                                let {
                                    transformPerspective: t,
                                    rotate: e,
                                    rotateX: n,
                                    rotateY: s,
                                    skewX: o,
                                    skewY: a
                                } = r;
                                t && (i = `perspective(${t}px) ${i}`), e && (i += `rotate(${e}deg) `), n && (i += `rotateX(${n}deg) `), s && (i += `rotateY(${s}deg) `), o && (i += `skewX(${o}deg) `), a && (i += `skewY(${a}deg) `)
                            }
                            let a = t.x.scale * e.x,
                                l = t.y.scale * e.y;
                            return (1 !== a || 1 !== l) && (i += `scale(${a}, ${l})`), i || "none"
                        }(this.projectionDeltaWithTransform, this.treeScale, n), r && (e.transform = r(n, e.transform));
                        let {
                            x: s,
                            y: o
                        } = this.projectionDelta;
                        for (let t in e.transformOrigin = `${100*s.origin}% ${100*o.origin}% 0`, i.animationValues ? e.opacity = i === this ? n.opacity ? ? this.latestValues.opacity ? ? 1 : this.preserveOpacity ? this.latestValues.opacity : n.opacityExit : e.opacity = i === this ? void 0 !== n.opacity ? n.opacity : "" : void 0 !== n.opacityExit ? n.opacityExit : 0, ii) {
                            if (void 0 === n[t]) continue;
                            let {
                                correct: r,
                                applyTo: s,
                                isCSSVariable: o
                            } = ii[t], a = "none" === e.transform ? n[t] : r(n[t], i);
                            if (s) {
                                let t = s.length;
                                for (let r = 0; r < t; r++) e[s[r]] = a
                            } else o ? this.options.visualElement.renderState.vars[t] = a : e[t] = a
                        }
                        return this.options.layoutId && (e.pointerEvents = i === this ? ic(t ? .pointerEvents) || "" : "none"), e
                    }
                    clearSnapshot() {
                        this.resumeFrom = this.snapshot = void 0
                    }
                    resetTree() {
                        this.root.nodes.forEach(t => t.currentAnimation ? .stop(!1)), this.root.nodes.forEach(iX), this.root.sharedNodes.clear()
                    }
                }
            }

            function iW(t) {
                t.updateLayout()
            }

            function iq(t) {
                let e = t.resumeFrom ? .snapshot || t.snapshot;
                if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
                    let {
                        layoutBox: r,
                        measuredBox: i
                    } = t.layout, {
                        animationType: n
                    } = t.options, s = e.source !== t.layout.source;
                    "size" === n ? rA(t => {
                        let i = s ? e.measuredBox[t] : e.layoutBox[t],
                            n = ry(i);
                        i.min = r[t].min, i.max = i.min + n
                    }) : i7(n, e.layoutBox, r) && rA(i => {
                        let n = s ? e.measuredBox[i] : e.layoutBox[i],
                            o = ry(r[i]);
                        n.max = n.min + o, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[i].max = t.relativeTarget[i].min + o)
                    });
                    let o = rS();
                    rv(o, r, e.layoutBox);
                    let a = rS();
                    s ? rv(a, t.applyTransform(i, !0), e.measuredBox) : rv(a, r, e.layoutBox);
                    let l = !iM(o),
                        u = !1;
                    if (!t.resumeFrom) {
                        let i = t.getClosestProjectingParent();
                        if (i && !i.resumeFrom) {
                            let {
                                snapshot: n,
                                layout: s
                            } = i;
                            if (n && s) {
                                let o = rR();
                                rx(o, e.layoutBox, n.layoutBox);
                                let a = rR();
                                rx(a, r, s.layoutBox), iD(o, a) || (u = !0), i.options.layoutRoot && (t.relativeTarget = a, t.relativeTargetOrigin = o, t.relativeParent = i)
                            }
                        }
                    }
                    t.notifyListeners("didUpdate", {
                        layout: r,
                        snapshot: e,
                        delta: a,
                        layoutDelta: o,
                        hasLayoutChanged: l,
                        hasRelativeLayoutChanged: u
                    })
                } else if (t.isLead()) {
                    let {
                        onExitComplete: e
                    } = t.options;
                    e && e()
                }
                t.options.transition = void 0
            }

            function i$(t) {
                h.value && iF.nodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
            }

            function iQ(t) {
                t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
            }

            function iH(t) {
                t.clearSnapshot()
            }

            function iX(t) {
                t.clearMeasurements()
            }

            function iY(t) {
                t.isLayoutDirty = !1
            }

            function iK(t) {
                let {
                    visualElement: e
                } = t.options;
                e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform()
            }

            function iG(t) {
                t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0
            }

            function iJ(t) {
                t.resolveTargetDelta()
            }

            function iZ(t) {
                t.calcProjection()
            }

            function i0(t) {
                t.resetSkewAndRotation()
            }

            function i1(t) {
                t.removeLeadSnapshot()
            }

            function i2(t, e, r) {
                t.translate = tP(e.translate, 0, r), t.scale = tP(e.scale, 1, r), t.origin = e.origin, t.originPoint = e.originPoint
            }

            function i5(t, e, r, i) {
                t.min = tP(e.min, r.min, i), t.max = tP(e.max, r.max, i)
            }

            function i3(t) {
                return t.animationValues && void 0 !== t.animationValues.opacityExit
            }
            let i6 = {
                    duration: .45,
                    ease: [.4, 0, .1, 1]
                },
                i8 = t => "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t),
                i4 = i8("applewebkit/") && !i8("chrome/") ? Math.round : d;

            function i9(t) {
                t.min = i4(t.min), t.max = i4(t.max)
            }

            function i7(t, e, r) {
                return "position" === t || "preserve-aspect" === t && !(.2 >= Math.abs(iL(e) - iL(r)))
            }

            function nt(t) {
                return t !== t.root && t.scroll ? .wasRoot
            }
            let ne = iz({
                    attachResizeListener: (t, e) => rh(t, "resize", e),
                    measureScroll: () => ({
                        x: document.documentElement.scrollLeft || document.body.scrollLeft,
                        y: document.documentElement.scrollTop || document.body.scrollTop
                    }),
                    checkIsScrollRoot: () => !0
                }),
                nr = {
                    current: void 0
                },
                ni = iz({
                    measureScroll: t => ({
                        x: t.scrollLeft,
                        y: t.scrollTop
                    }),
                    defaultParent: () => {
                        if (!nr.current) {
                            let t = new ne({});
                            t.mount(window), t.setOptions({
                                layoutScroll: !0
                            }), nr.current = t
                        }
                        return nr.current
                    },
                    resetTransform: (t, e) => {
                        t.style.transform = void 0 !== e ? e : "none"
                    },
                    checkIsScrollRoot: t => "fixed" === window.getComputedStyle(t).position
                });

            function nn(t, e) {
                let r = function(t, e, r) {
                        if (t instanceof EventTarget) return [t];
                        if ("string" == typeof t) {
                            let e = document,
                                r = (void 0) ? ? e.querySelectorAll(t);
                            return r ? Array.from(r) : []
                        }
                        return Array.from(t)
                    }(t),
                    i = new AbortController;
                return [r, {
                    passive: !0,
                    ...e,
                    signal: i.signal
                }, () => i.abort()]
            }

            function ns(t) {
                return !("touch" === t.pointerType || rK.x || rK.y)
            }

            function no(t, e, r) {
                let {
                    props: i
                } = t;
                t.animationState && i.whileHover && t.animationState.setActive("whileHover", "Start" === r);
                let n = i["onHover" + r];
                n && p.postRender(() => n(e, rf(e)))
            }
            class na extends ro {
                mount() {
                    let {
                        current: t
                    } = this.node;
                    t && (this.unmount = function(t, e, r = {}) {
                        let [i, n, s] = nn(t, r), o = t => {
                            if (!ns(t)) return;
                            let {
                                target: r
                            } = t, i = e(r, t);
                            if ("function" != typeof i || !r) return;
                            let s = t => {
                                ns(t) && (i(t), r.removeEventListener("pointerleave", s))
                            };
                            r.addEventListener("pointerleave", s, n)
                        };
                        return i.forEach(t => {
                            t.addEventListener("pointerenter", o, n)
                        }), s
                    }(t, (t, e) => (no(this.node, e, "Start"), t => no(this.node, t, "End"))))
                }
                unmount() {}
            }
            class nl extends ro {
                constructor() {
                    super(...arguments), this.isActive = !1
                }
                onFocus() {
                    let t = !1;
                    try {
                        t = this.node.current.matches(":focus-visible")
                    } catch (e) {
                        t = !0
                    }
                    t && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
                }
                onBlur() {
                    this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
                }
                mount() {
                    this.unmount = tF(rh(this.node.current, "focus", () => this.onFocus()), rh(this.node.current, "blur", () => this.onBlur()))
                }
                unmount() {}
            }
            let nu = (t, e) => !!e && (t === e || nu(t, e.parentElement)),
                nh = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
                nc = new WeakSet;

            function nf(t) {
                return e => {
                    "Enter" === e.key && t(e)
                }
            }

            function nd(t, e) {
                t.dispatchEvent(new PointerEvent("pointer" + e, {
                    isPrimary: !0,
                    bubbles: !0
                }))
            }
            let np = (t, e) => {
                let r = t.currentTarget;
                if (!r) return;
                let i = nf(() => {
                    if (nc.has(r)) return;
                    nd(r, "down");
                    let t = nf(() => {
                        nd(r, "up")
                    });
                    r.addEventListener("keyup", t, e), r.addEventListener("blur", () => nd(r, "cancel"), e)
                });
                r.addEventListener("keydown", i, e), r.addEventListener("blur", () => r.removeEventListener("keydown", i), e)
            };

            function nm(t) {
                return rc(t) && !(rK.x || rK.y)
            }

            function ny(t, e, r) {
                let {
                    props: i
                } = t;
                if (t.current instanceof HTMLButtonElement && t.current.disabled) return;
                t.animationState && i.whileTap && t.animationState.setActive("whileTap", "Start" === r);
                let n = i["onTap" + ("End" === r ? "" : r)];
                n && p.postRender(() => n(e, rf(e)))
            }
            class ng extends ro {
                mount() {
                    let {
                        current: t
                    } = this.node;
                    t && (this.unmount = function(t, e, r = {}) {
                        let [i, n, s] = nn(t, r), o = t => {
                            let i = t.currentTarget;
                            if (!nm(t)) return;
                            nc.add(i);
                            let s = e(i, t),
                                o = (t, e) => {
                                    window.removeEventListener("pointerup", a), window.removeEventListener("pointercancel", l), nc.has(i) && nc.delete(i), nm(t) && "function" == typeof s && s(t, {
                                        success: e
                                    })
                                },
                                a = t => {
                                    o(t, i === window || i === document || r.useGlobalTarget || nu(i, t.target))
                                },
                                l = t => {
                                    o(t, !1)
                                };
                            window.addEventListener("pointerup", a, n), window.addEventListener("pointercancel", l, n)
                        };
                        return i.forEach(t => {
                            ((r.useGlobalTarget ? window : t).addEventListener("pointerdown", o, n), t instanceof HTMLElement) && (t.addEventListener("focus", t => np(t, n)), nh.has(t.tagName) || -1 !== t.tabIndex || t.hasAttribute("tabindex") || (t.tabIndex = 0))
                        }), s
                    }(t, (t, e) => (ny(this.node, e, "Start"), (t, {
                        success: e
                    }) => ny(this.node, t, e ? "End" : "Cancel")), {
                        useGlobalTarget: this.node.props.globalTapTarget
                    }))
                }
                unmount() {}
            }
            let nv = new WeakMap,
                nb = new WeakMap,
                nw = t => {
                    let e = nv.get(t.target);
                    e && e(t)
                },
                nx = t => {
                    t.forEach(nw)
                },
                nE = {
                    some: 0,
                    all: 1
                };
            class nS extends ro {
                constructor() {
                    super(...arguments), this.hasEnteredView = !1, this.isInView = !1
                }
                startObserver() {
                    this.unmount();
                    let {
                        viewport: t = {}
                    } = this.node.getProps(), {
                        root: e,
                        margin: r,
                        amount: i = "some",
                        once: n
                    } = t, s = {
                        root: e ? e.current : void 0,
                        rootMargin: r,
                        threshold: "number" == typeof i ? i : nE[i]
                    };
                    return function(t, e, r) {
                        let i = function({
                            root: t,
                            ...e
                        }) {
                            let r = t || document;
                            nb.has(r) || nb.set(r, {});
                            let i = nb.get(r),
                                n = JSON.stringify(e);
                            return i[n] || (i[n] = new IntersectionObserver(nx, {
                                root: t,
                                ...e
                            })), i[n]
                        }(e);
                        return nv.set(t, r), i.observe(t), () => {
                            nv.delete(t), i.unobserve(t)
                        }
                    }(this.node.current, s, t => {
                        let {
                            isIntersecting: e
                        } = t;
                        if (this.isInView === e || (this.isInView = e, n && !e && this.hasEnteredView)) return;
                        e && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", e);
                        let {
                            onViewportEnter: r,
                            onViewportLeave: i
                        } = this.node.getProps(), s = e ? r : i;
                        s && s(t)
                    })
                }
                mount() {
                    this.startObserver()
                }
                update() {
                    if ("undefined" == typeof IntersectionObserver) return;
                    let {
                        props: t,
                        prevProps: e
                    } = this.node;
                    ["amount", "margin", "root"].some(function({
                        viewport: t = {}
                    }, {
                        viewport: e = {}
                    } = {}) {
                        return r => t[r] !== e[r]
                    }(t, e)) && this.startObserver()
                }
                unmount() {}
            }
            let nT = (0, r8.createContext)({
                strict: !1
            });
            var nR = r(7471);
            let nA = (0, r8.createContext)({});

            function nP(t) {
                return n(t.animate) || rt.some(e => e9(t[e]))
            }

            function nC(t) {
                return !!(nP(t) || t.variants)
            }

            function nO(t) {
                return Array.isArray(t) ? t.join(" ") : t
            }
            var nM = r(2801);
            let nj = {
                    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
                    exit: ["exit"],
                    drag: ["drag", "dragControls"],
                    focus: ["whileFocus"],
                    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
                    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
                    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
                    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
                    layout: ["layout", "layoutId"]
                },
                nk = {};
            for (let t in nj) nk[t] = {
                isEnabled: e => nj[t].some(t => !!e[t])
            };
            let nD = Symbol.for("motionComponentSymbol");
            var nL = r(430),
                nB = r(9025);

            function nV(t, {
                layout: e,
                layoutId: r
            }) {
                return D.has(t) || t.startsWith("origin") || (e || void 0 !== r) && (!!ii[t] || "opacity" === t)
            }
            let nF = (t, e) => e && "number" == typeof t ? e.transform(t) : t,
                nU = { ...Y,
                    transform: Math.round
                },
                nI = {
                    borderWidth: th,
                    borderTopWidth: th,
                    borderRightWidth: th,
                    borderBottomWidth: th,
                    borderLeftWidth: th,
                    borderRadius: th,
                    radius: th,
                    borderTopLeftRadius: th,
                    borderTopRightRadius: th,
                    borderBottomRightRadius: th,
                    borderBottomLeftRadius: th,
                    width: th,
                    maxWidth: th,
                    height: th,
                    maxHeight: th,
                    top: th,
                    right: th,
                    bottom: th,
                    left: th,
                    padding: th,
                    paddingTop: th,
                    paddingRight: th,
                    paddingBottom: th,
                    paddingLeft: th,
                    margin: th,
                    marginTop: th,
                    marginRight: th,
                    marginBottom: th,
                    marginLeft: th,
                    backgroundPositionX: th,
                    backgroundPositionY: th,
                    rotate: tl,
                    rotateX: tl,
                    rotateY: tl,
                    rotateZ: tl,
                    scale: G,
                    scaleX: G,
                    scaleY: G,
                    scaleZ: G,
                    skew: tl,
                    skewX: tl,
                    skewY: tl,
                    distance: th,
                    translateX: th,
                    translateY: th,
                    translateZ: th,
                    x: th,
                    y: th,
                    z: th,
                    perspective: th,
                    transformPerspective: th,
                    opacity: K,
                    originX: td,
                    originY: td,
                    originZ: th,
                    zIndex: nU,
                    fillOpacity: K,
                    strokeOpacity: K,
                    numOctaves: nU
                },
                n_ = {
                    x: "translateX",
                    y: "translateY",
                    z: "translateZ",
                    transformPerspective: "perspective"
                },
                nN = k.length;

            function nz(t, e, r) {
                let {
                    style: i,
                    vars: n,
                    transformOrigin: s
                } = t, o = !1, a = !1;
                for (let t in e) {
                    let r = e[t];
                    if (D.has(t)) {
                        o = !0;
                        continue
                    }
                    if (q(t)) {
                        n[t] = r;
                        continue
                    } {
                        let e = nF(r, nI[t]);
                        t.startsWith("origin") ? (a = !0, s[t] = e) : i[t] = e
                    }
                }
                if (!e.transform && (o || r ? i.transform = function(t, e, r) {
                        let i = "",
                            n = !0;
                        for (let s = 0; s < nN; s++) {
                            let o = k[s],
                                a = t[o];
                            if (void 0 === a) continue;
                            let l = !0;
                            if (!(l = "number" == typeof a ? a === +!!o.startsWith("scale") : 0 === parseFloat(a)) || r) {
                                let t = nF(a, nI[o]);
                                if (!l) {
                                    n = !1;
                                    let e = n_[o] || o;
                                    i += `${e}(${t}) `
                                }
                                r && (e[o] = t)
                            }
                        }
                        return i = i.trim(), r ? i = r(e, n ? "" : i) : n && (i = "none"), i
                    }(e, t.transform, r) : i.transform && (i.transform = "none")), a) {
                    let {
                        originX: t = "50%",
                        originY: e = "50%",
                        originZ: r = 0
                    } = s;
                    i.transformOrigin = `${t} ${e} ${r}`
                }
            }
            let nW = () => ({
                style: {},
                transform: {},
                transformOrigin: {},
                vars: {}
            });

            function nq(t, e, r) {
                for (let i in e) P(e[i]) || nV(i, r) || (t[i] = e[i])
            }
            let n$ = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

            function nQ(t) {
                return t.startsWith("while") || t.startsWith("drag") && "draggable" !== t || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || n$.has(t)
            }
            let nH = t => !nQ(t);
            try {
                ! function(t) {
                    t && (nH = e => e.startsWith("on") ? !nQ(e) : t(e))
                }(require("@emotion/is-prop-valid").default)
            } catch {}
            let nX = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

            function nY(t) {
                if ("string" != typeof t || t.includes("-"));
                else if (nX.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
                return !1
            }
            let nK = {
                    offset: "stroke-dashoffset",
                    array: "stroke-dasharray"
                },
                nG = {
                    offset: "strokeDashoffset",
                    array: "strokeDasharray"
                };

            function nJ(t, {
                attrX: e,
                attrY: r,
                attrScale: i,
                pathLength: n,
                pathSpacing: s = 1,
                pathOffset: o = 0,
                ...a
            }, l, u, h) {
                if (nz(t, a, u), l) {
                    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
                    return
                }
                t.attrs = t.style, t.style = {};
                let {
                    attrs: c,
                    style: f
                } = t;
                c.transform && (f.transform = c.transform, delete c.transform), (f.transform || c.transformOrigin) && (f.transformOrigin = c.transformOrigin ? ? "50% 50%", delete c.transformOrigin), f.transform && (f.transformBox = h ? .transformBox ? ? "fill-box", delete c.transformBox), void 0 !== e && (c.x = e), void 0 !== r && (c.y = r), void 0 !== i && (c.scale = i), void 0 !== n && function(t, e, r = 1, i = 0, n = !0) {
                    t.pathLength = 1;
                    let s = n ? nK : nG;
                    t[s.offset] = th.transform(-i);
                    let o = th.transform(e),
                        a = th.transform(r);
                    t[s.array] = `${o} ${a}`
                }(c, n, s, o, !1)
            }
            let nZ = () => ({ ...nW(),
                    attrs: {}
                }),
                n0 = t => "string" == typeof t && "svg" === t.toLowerCase();
            var n1 = r(6168);
            let n2 = t => (e, r) => {
                let i = (0, r8.useContext)(nA),
                    s = (0, r8.useContext)(nL.t),
                    a = () => (function({
                        scrapeMotionValuesFromProps: t,
                        createRenderState: e
                    }, r, i, s) {
                        return {
                            latestValues: function(t, e, r, i) {
                                let s = {},
                                    a = i(t, {});
                                for (let t in a) s[t] = ic(a[t]);
                                let {
                                    initial: l,
                                    animate: u
                                } = t, h = nP(t), c = nC(t);
                                e && c && !h && !1 !== t.inherit && (void 0 === l && (l = e.initial), void 0 === u && (u = e.animate));
                                let f = !!r && !1 === r.initial,
                                    d = (f = f || !1 === l) ? u : l;
                                if (d && "boolean" != typeof d && !n(d)) {
                                    let e = Array.isArray(d) ? d : [d];
                                    for (let r = 0; r < e.length; r++) {
                                        let i = o(t, e[r]);
                                        if (i) {
                                            let {
                                                transitionEnd: t,
                                                transition: e,
                                                ...r
                                            } = i;
                                            for (let t in r) {
                                                let e = r[t];
                                                if (Array.isArray(e)) {
                                                    let t = f ? e.length - 1 : 0;
                                                    e = e[t]
                                                }
                                                null !== e && (s[t] = e)
                                            }
                                            for (let e in t) s[e] = t[e]
                                        }
                                    }
                                }
                                return s
                            }(r, i, s, t),
                            renderState: e()
                        }
                    })(t, e, i, s);
                return r ? a() : (0, n1.M)(a)
            };

            function n5(t, e, r) {
                let {
                    style: i
                } = t, n = {};
                for (let s in i)(P(i[s]) || e.style && P(e.style[s]) || nV(s, t) || r ? .getValue(s) ? .liveStyle !== void 0) && (n[s] = i[s]);
                return n
            }
            let n3 = {
                useVisualState: n2({
                    scrapeMotionValuesFromProps: n5,
                    createRenderState: nW
                })
            };

            function n6(t, e, r) {
                let i = n5(t, e, r);
                for (let r in t)(P(t[r]) || P(e[r])) && (i[-1 !== k.indexOf(r) ? "attr" + r.charAt(0).toUpperCase() + r.substring(1) : r] = t[r]);
                return i
            }
            let n8 = {
                    useVisualState: n2({
                        scrapeMotionValuesFromProps: n6,
                        createRenderState: nZ
                    })
                },
                n4 = {
                    current: null
                },
                n9 = {
                    current: !1
                },
                n7 = new WeakMap,
                st = t => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),
                se = t => /^0[^.\s]+$/u.test(t),
                sr = t => e => e.test(t),
                si = [Y, th, tu, tl, tf, tc, {
                    test: t => "auto" === t,
                    parse: t => t
                }],
                sn = t => si.find(sr(t)),
                ss = [...si, tm, tT],
                so = t => ss.find(sr(t)),
                sa = new Set(["brightness", "contrast", "saturate", "opacity"]);

            function sl(t) {
                let [e, r] = t.slice(0, -1).split("(");
                if ("drop-shadow" === e) return t;
                let [i] = r.match(Z) || [];
                if (!i) return t;
                let n = r.replace(i, ""),
                    s = +!!sa.has(e);
                return i !== r && (s *= 100), e + "(" + s + n + ")"
            }
            let su = /\b([a-z-]*)\(.*?\)/gu,
                sh = { ...tT,
                    getAnimatableNone: t => {
                        let e = t.match(su);
                        return e ? e.map(sl).join(" ") : t
                    }
                },
                sc = { ...nI,
                    color: tm,
                    backgroundColor: tm,
                    outlineColor: tm,
                    fill: tm,
                    stroke: tm,
                    borderColor: tm,
                    borderTopColor: tm,
                    borderRightColor: tm,
                    borderBottomColor: tm,
                    borderLeftColor: tm,
                    filter: sh,
                    WebkitFilter: sh
                },
                sf = t => sc[t];

            function sd(t, e) {
                let r = sf(t);
                return r !== sh && (r = tT), r.getAnimatableNone ? r.getAnimatableNone(e) : void 0
            }
            let sp = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
            class sm {
                scrapeMotionValuesFromProps(t, e, r) {
                    return {}
                }
                constructor({
                    parent: t,
                    props: e,
                    presenceContext: r,
                    reducedMotionConfig: i,
                    blockInitialAnimation: n,
                    visualState: s
                }, o = {}) {
                    this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.KeyframeResolver = e_, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
                        this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
                    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
                        let t = b.now();
                        this.renderScheduledAt < t && (this.renderScheduledAt = t, p.render(this.render, !1, !0))
                    };
                    let {
                        latestValues: a,
                        renderState: l
                    } = s;
                    this.latestValues = a, this.baseTarget = { ...a
                    }, this.initialValues = e.initial ? { ...a
                    } : {}, this.renderState = l, this.parent = t, this.props = e, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = i, this.options = o, this.blockInitialAnimation = !!n, this.isControllingVariants = nP(e), this.isVariantNode = nC(e), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(t && t.current);
                    let {
                        willChange: u,
                        ...h
                    } = this.scrapeMotionValuesFromProps(e, {}, this);
                    for (let t in h) {
                        let e = h[t];
                        void 0 !== a[t] && P(e) && e.set(a[t], !1)
                    }
                }
                mount(t) {
                    this.current = t, n7.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((t, e) => this.bindToMotionValue(e, t)), n9.current || function() {
                        if (n9.current = !0, nM.B)
                            if (window.matchMedia) {
                                let t = window.matchMedia("(prefers-reduced-motion)"),
                                    e = () => n4.current = t.matches;
                                t.addListener(e), e()
                            } else n4.current = !1
                    }(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || n4.current), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
                }
                unmount() {
                    for (let t in this.projection && this.projection.unmount(), m(this.notifyUpdate), m(this.render), this.valueSubscriptions.forEach(t => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this), this.events) this.events[t].clear();
                    for (let t in this.features) {
                        let e = this.features[t];
                        e && (e.unmount(), e.isMounted = !1)
                    }
                    this.current = null
                }
                bindToMotionValue(t, e) {
                    let r;
                    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
                    let i = D.has(t);
                    i && this.onBindTransform && this.onBindTransform();
                    let n = e.on("change", e => {
                            this.latestValues[t] = e, this.props.onUpdate && p.preRender(this.notifyUpdate), i && this.projection && (this.projection.isTransformDirty = !0)
                        }),
                        s = e.on("renderRequest", this.scheduleRender);
                    window.MotionCheckAppearSync && (r = window.MotionCheckAppearSync(this, t, e)), this.valueSubscriptions.set(t, () => {
                        n(), s(), r && r(), e.owner && e.stop()
                    })
                }
                sortNodePosition(t) {
                    return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
                }
                updateFeatures() {
                    let t = "animation";
                    for (t in nk) {
                        let e = nk[t];
                        if (!e) continue;
                        let {
                            isEnabled: r,
                            Feature: i
                        } = e;
                        if (!this.features[t] && i && r(this.props) && (this.features[t] = new i(this)), this.features[t]) {
                            let e = this.features[t];
                            e.isMounted ? e.update() : (e.mount(), e.isMounted = !0)
                        }
                    }
                }
                triggerBuild() {
                    this.build(this.renderState, this.latestValues, this.props)
                }
                measureViewportBox() {
                    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : rR()
                }
                getStaticValue(t) {
                    return this.latestValues[t]
                }
                setStaticValue(t, e) {
                    this.latestValues[t] = e
                }
                update(t, e) {
                    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = e;
                    for (let e = 0; e < sp.length; e++) {
                        let r = sp[e];
                        this.propEventSubscriptions[r] && (this.propEventSubscriptions[r](), delete this.propEventSubscriptions[r]);
                        let i = t["on" + r];
                        i && (this.propEventSubscriptions[r] = this.on(r, i))
                    }
                    this.prevMotionValues = function(t, e, r) {
                        for (let i in e) {
                            let n = e[i],
                                s = r[i];
                            if (P(n)) t.addValue(i, n);
                            else if (P(s)) t.addValue(i, A(n, {
                                owner: t
                            }));
                            else if (s !== n)
                                if (t.hasValue(i)) {
                                    let e = t.getValue(i);
                                    !0 === e.liveStyle ? e.jump(n) : e.hasAnimated || e.set(n)
                                } else {
                                    let e = t.getStaticValue(i);
                                    t.addValue(i, A(void 0 !== e ? e : n, {
                                        owner: t
                                    }))
                                }
                        }
                        for (let i in r) void 0 === e[i] && t.removeValue(i);
                        return e
                    }(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
                }
                getProps() {
                    return this.props
                }
                getVariant(t) {
                    return this.props.variants ? this.props.variants[t] : void 0
                }
                getDefaultTransition() {
                    return this.props.transition
                }
                getTransformPagePoint() {
                    return this.props.transformPagePoint
                }
                getClosestVariantNode() {
                    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
                }
                addVariantChild(t) {
                    let e = this.getClosestVariantNode();
                    if (e) return e.variantChildren && e.variantChildren.add(t), () => e.variantChildren.delete(t)
                }
                addValue(t, e) {
                    let r = this.values.get(t);
                    e !== r && (r && this.removeValue(t), this.bindToMotionValue(t, e), this.values.set(t, e), this.latestValues[t] = e.get())
                }
                removeValue(t) {
                    this.values.delete(t);
                    let e = this.valueSubscriptions.get(t);
                    e && (e(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
                }
                hasValue(t) {
                    return this.values.has(t)
                }
                getValue(t, e) {
                    if (this.props.values && this.props.values[t]) return this.props.values[t];
                    let r = this.values.get(t);
                    return void 0 === r && void 0 !== e && (r = A(null === e ? void 0 : e, {
                        owner: this
                    }), this.addValue(t, r)), r
                }
                readValue(t, e) {
                    let r = void 0 === this.latestValues[t] && this.current ? this.getBaseTargetFromProps(this.props, t) ? ? this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t];
                    return null != r && ("string" == typeof r && (st(r) || se(r)) ? r = parseFloat(r) : !so(r) && tT.test(e) && (r = sd(t, e)), this.setBaseTarget(t, P(r) ? r.get() : r)), P(r) ? r.get() : r
                }
                setBaseTarget(t, e) {
                    this.baseTarget[t] = e
                }
                getBaseTarget(t) {
                    let e, {
                        initial: r
                    } = this.props;
                    if ("string" == typeof r || "object" == typeof r) {
                        let i = o(this.props, r, this.presenceContext ? .custom);
                        i && (e = i[t])
                    }
                    if (r && void 0 !== e) return e;
                    let i = this.getBaseTargetFromProps(this.props, t);
                    return void 0 === i || P(i) ? void 0 !== this.initialValues[t] && void 0 === e ? void 0 : this.baseTarget[t] : i
                }
                on(t, e) {
                    return this.events[t] || (this.events[t] = new E), this.events[t].add(e)
                }
                notify(t, ...e) {
                    this.events[t] && this.events[t].notify(...e)
                }
            }
            let sy = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
                sg = new Set(["auto", "none", "0"]);
            class sv extends e_ {
                constructor(t, e, r, i, n) {
                    super(t, e, r, i, n, !0)
                }
                readKeyframes() {
                    let {
                        unresolvedKeyframes: t,
                        element: e,
                        name: r
                    } = this;
                    if (!e || !e.current) return;
                    super.readKeyframes();
                    for (let r = 0; r < t.length; r++) {
                        let i = t[r];
                        if ("string" == typeof i && Q(i = i.trim())) {
                            let n = function t(e, r, i = 1) {
                                tO(i <= 4, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
                                let [n, s] = function(t) {
                                    let e = sy.exec(t);
                                    if (!e) return [, ];
                                    let [, r, i, n] = e;
                                    return [`--${r??i}`, n]
                                }(e);
                                if (!n) return;
                                let o = window.getComputedStyle(r).getPropertyValue(n);
                                if (o) {
                                    let t = o.trim();
                                    return st(t) ? parseFloat(t) : t
                                }
                                return Q(s) ? t(s, r, i + 1) : s
                            }(i, e.current);
                            void 0 !== n && (t[r] = n), r === t.length - 1 && (this.finalKeyframe = i)
                        }
                    }
                    if (this.resolveNoneKeyframes(), !e5.has(r) || 2 !== t.length) return;
                    let [i, n] = t, s = sn(i), o = sn(n);
                    if (s !== o)
                        if (eM(s) && eM(o))
                            for (let e = 0; e < t.length; e++) {
                                let r = t[e];
                                "string" == typeof r && (t[e] = parseFloat(r))
                            } else eD[r] && (this.needsMeasurement = !0)
                }
                resolveNoneKeyframes() {
                    let {
                        unresolvedKeyframes: t,
                        name: e
                    } = this, r = [];
                    for (let e = 0; e < t.length; e++) {
                        var i;
                        (null === t[e] || ("number" == typeof(i = t[e]) ? 0 === i : null === i || "none" === i || "0" === i || se(i))) && r.push(e)
                    }
                    r.length && function(t, e, r) {
                        let i, n = 0;
                        for (; n < t.length && !i;) {
                            let e = t[n];
                            "string" == typeof e && !sg.has(e) && tw(e).values.length && (i = t[n]), n++
                        }
                        if (i && r)
                            for (let n of e) t[n] = sd(r, i)
                    }(t, r, e)
                }
                measureInitialState() {
                    let {
                        element: t,
                        unresolvedKeyframes: e,
                        name: r
                    } = this;
                    if (!t || !t.current) return;
                    "height" === r && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = eD[r](t.measureViewportBox(), window.getComputedStyle(t.current)), e[0] = this.measuredOrigin;
                    let i = e[e.length - 1];
                    void 0 !== i && t.getValue(r, i).jump(i, !1)
                }
                measureEndState() {
                    let {
                        element: t,
                        name: e,
                        unresolvedKeyframes: r
                    } = this;
                    if (!t || !t.current) return;
                    let i = t.getValue(e);
                    i && i.jump(this.measuredOrigin, !1);
                    let n = r.length - 1,
                        s = r[n];
                    r[n] = eD[e](t.measureViewportBox(), window.getComputedStyle(t.current)), null !== s && void 0 === this.finalKeyframe && (this.finalKeyframe = s), this.removedTransforms ? .length && this.removedTransforms.forEach(([e, r]) => {
                        t.getValue(e).set(r)
                    }), this.resolveNoneKeyframes()
                }
            }
            class sb extends sm {
                constructor() {
                    super(...arguments), this.KeyframeResolver = sv
                }
                sortInstanceNodePosition(t, e) {
                    return 2 & t.compareDocumentPosition(e) ? 1 : -1
                }
                getBaseTargetFromProps(t, e) {
                    return t.style ? t.style[e] : void 0
                }
                removeValueFromRenderState(t, {
                    vars: e,
                    style: r
                }) {
                    delete e[t], delete r[t]
                }
                handleChildMotionValue() {
                    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
                    let {
                        children: t
                    } = this.props;
                    P(t) && (this.childSubscription = t.on("change", t => {
                        this.current && (this.current.textContent = `${t}`)
                    }))
                }
            }

            function sw(t, {
                style: e,
                vars: r
            }, i, n) {
                for (let s in Object.assign(t.style, e, n && n.getProjectionStyles(i)), r) t.style.setProperty(s, r[s])
            }
            class sx extends sb {
                constructor() {
                    super(...arguments), this.type = "html", this.renderInstance = sw
                }
                readValueFromInstance(t, e) {
                    if (D.has(e)) return eC(t, e); {
                        let r = window.getComputedStyle(t),
                            i = (q(e) ? r.getPropertyValue(e) : r[e]) || 0;
                        return "string" == typeof i ? i.trim() : i
                    }
                }
                measureInstanceViewportBox(t, {
                    transformPagePoint: e
                }) {
                    return rF(t, e)
                }
                build(t, e, r) {
                    nz(t, e, r.transformTemplate)
                }
                scrapeMotionValuesFromProps(t, e, r) {
                    return n5(t, e, r)
                }
            }
            let sE = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
            class sS extends sb {
                constructor() {
                    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = rR
                }
                getBaseTargetFromProps(t, e) {
                    return t[e]
                }
                readValueFromInstance(t, e) {
                    if (D.has(e)) {
                        let t = sf(e);
                        return t && t.default || 0
                    }
                    return e = sE.has(e) ? e : O(e), t.getAttribute(e)
                }
                scrapeMotionValuesFromProps(t, e, r) {
                    return n6(t, e, r)
                }
                build(t, e, r) {
                    nJ(t, e, this.isSVGTag, r.transformTemplate, r.style)
                }
                renderInstance(t, e, r, i) {
                    for (let r in sw(t, e, void 0, i), e.attrs) t.setAttribute(sE.has(r) ? r : O(r), e.attrs[r])
                }
                mount(t) {
                    this.isSVGTag = n0(t.tagName), super.mount(t)
                }
            }
            let sT = function(t) {
                if ("undefined" == typeof Proxy) return t;
                let e = new Map;
                return new Proxy((...e) => t(...e), {
                    get: (r, i) => "create" === i ? t : (e.has(i) || e.set(i, t(i)), e.get(i))
                })
            }((r5 = {
                animation: {
                    Feature: ra
                },
                exit: {
                    Feature: ru
                },
                inView: {
                    Feature: nS
                },
                tap: {
                    Feature: ng
                },
                focus: {
                    Feature: nl
                },
                hover: {
                    Feature: na
                },
                pan: {
                    Feature: r2
                },
                drag: {
                    Feature: r0,
                    ProjectionNode: ni,
                    MeasureLayout: ia
                },
                layout: {
                    ProjectionNode: ni,
                    MeasureLayout: ia
                }
            }, r3 = (t, e) => nY(t) ? new sS(e) : new sx(e, {
                allowProjection: t !== r8.Fragment
            }), function(t, {
                forwardMotionProps: e
            } = {
                forwardMotionProps: !1
            }) {
                return function(t) {
                    var e, r;
                    let {
                        preloadedFeatures: i,
                        createVisualElement: n,
                        useRender: s,
                        useVisualState: o,
                        Component: a
                    } = t;

                    function l(t, e) {
                        var r, i, l;
                        let u, h = { ...(0, r8.useContext)(nR.Q),
                                ...t,
                                layoutId: function(t) {
                                    let {
                                        layoutId: e
                                    } = t, r = (0, r8.useContext)(r9.L).id;
                                    return r && void 0 !== e ? r + "-" + e : e
                                }(t)
                            },
                            {
                                isStatic: c
                            } = h,
                            f = function(t) {
                                let {
                                    initial: e,
                                    animate: r
                                } = function(t, e) {
                                    if (nP(t)) {
                                        let {
                                            initial: e,
                                            animate: r
                                        } = t;
                                        return {
                                            initial: !1 === e || e9(e) ? e : void 0,
                                            animate: e9(r) ? r : void 0
                                        }
                                    }
                                    return !1 !== t.inherit ? e : {}
                                }(t, (0, r8.useContext)(nA));
                                return (0, r8.useMemo)(() => ({
                                    initial: e,
                                    animate: r
                                }), [nO(e), nO(r)])
                            }(t),
                            d = o(t, c);
                        if (!c && nM.B) {
                            i = 0, l = 0, (0, r8.useContext)(nT).strict;
                            let t = function(t) {
                                let {
                                    drag: e,
                                    layout: r
                                } = nk;
                                if (!e && !r) return {};
                                let i = { ...e,
                                    ...r
                                };
                                return {
                                    MeasureLayout: (null == e ? void 0 : e.isEnabled(t)) || (null == r ? void 0 : r.isEnabled(t)) ? i.MeasureLayout : void 0,
                                    ProjectionNode: i.ProjectionNode
                                }
                            }(h);
                            u = t.MeasureLayout, f.visualElement = function(t, e, r, i, n) {
                                let {
                                    visualElement: s
                                } = (0, r8.useContext)(nA), o = (0, r8.useContext)(nT), a = (0, r8.useContext)(nL.t), l = (0, r8.useContext)(nR.Q).reducedMotion, u = (0, r8.useRef)(null);
                                i = i || o.renderer, !u.current && i && (u.current = i(t, {
                                    visualState: e,
                                    parent: s,
                                    props: r,
                                    presenceContext: a,
                                    blockInitialAnimation: !!a && !1 === a.initial,
                                    reducedMotionConfig: l
                                }));
                                let h = u.current,
                                    c = (0, r8.useContext)(r7);
                                h && !h.projection && n && ("html" === h.type || "svg" === h.type) && function(t, e, r, i) {
                                    let {
                                        layoutId: n,
                                        layout: s,
                                        drag: o,
                                        dragConstraints: a,
                                        layoutScroll: l,
                                        layoutRoot: u,
                                        layoutCrossfade: h
                                    } = e;
                                    t.projection = new r(t.latestValues, e["data-framer-portal-id"] ? void 0 : function t(e) {
                                        if (e) return !1 !== e.options.allowProjection ? e.projection : t(e.parent)
                                    }(t.parent)), t.projection.setOptions({
                                        layoutId: n,
                                        layout: s,
                                        alwaysMeasureLayout: !!o || a && rI(a),
                                        visualElement: t,
                                        animationType: "string" == typeof s ? s : "both",
                                        initialPromotionConfig: i,
                                        crossfade: h,
                                        layoutScroll: l,
                                        layoutRoot: u
                                    })
                                }(u.current, r, n, c);
                                let f = (0, r8.useRef)(!1);
                                (0, r8.useInsertionEffect)(() => {
                                    h && f.current && h.update(r, a)
                                });
                                let d = r[M],
                                    p = (0, r8.useRef)(!!d && !window.MotionHandoffIsComplete ? .(d) && window.MotionHasOptimisedAnimation ? .(d));
                                return (0, nB.E)(() => {
                                    h && (f.current = !0, window.MotionIsMounted = !0, h.updateFeatures(), is.render(h.render), p.current && h.animationState && h.animationState.animateChanges())
                                }), (0, r8.useEffect)(() => {
                                    h && (!p.current && h.animationState && h.animationState.animateChanges(), p.current && (queueMicrotask(() => {
                                        window.MotionHandoffMarkAsComplete ? .(d)
                                    }), p.current = !1))
                                }), h
                            }(a, d, h, n, t.ProjectionNode)
                        }
                        return (0, r6.jsxs)(nA.Provider, {
                            value: f,
                            children: [u && f.visualElement ? (0, r6.jsx)(u, {
                                visualElement: f.visualElement,
                                ...h
                            }) : null, s(a, t, (r = f.visualElement, (0, r8.useCallback)(t => {
                                t && d.onMount && d.onMount(t), r && (t ? r.mount(t) : r.unmount()), e && ("function" == typeof e ? e(t) : rI(e) && (e.current = t))
                            }, [r])), d, c, f.visualElement)]
                        })
                    }
                    i && function(t) {
                        for (let e in t) nk[e] = { ...nk[e],
                            ...t[e]
                        }
                    }(i), l.displayName = "motion.".concat("string" == typeof a ? a : "create(".concat(null != (r = null != (e = a.displayName) ? e : a.name) ? r : "", ")"));
                    let u = (0, r8.forwardRef)(l);
                    return u[nD] = a, u
                }({ ...nY(t) ? n8 : n3,
                    preloadedFeatures: r5,
                    useRender: function(t = !1) {
                        return (e, r, i, {
                            latestValues: n
                        }, s) => {
                            let o = (nY(e) ? function(t, e, r, i) {
                                    let n = (0, r8.useMemo)(() => {
                                        let r = nZ();
                                        return nJ(r, e, n0(i), t.transformTemplate, t.style), { ...r.attrs,
                                            style: { ...r.style
                                            }
                                        }
                                    }, [e]);
                                    if (t.style) {
                                        let e = {};
                                        nq(e, t.style, t), n.style = { ...e,
                                            ...n.style
                                        }
                                    }
                                    return n
                                } : function(t, e) {
                                    let r = {},
                                        i = function(t, e) {
                                            let r = t.style || {},
                                                i = {};
                                            return nq(i, r, t), Object.assign(i, function({
                                                transformTemplate: t
                                            }, e) {
                                                return (0, r8.useMemo)(() => {
                                                    let r = nW();
                                                    return nz(r, e, t), Object.assign({}, r.vars, r.style)
                                                }, [e])
                                            }(t, e)), i
                                        }(t, e);
                                    return t.drag && !1 !== t.dragListener && (r.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = !0 === t.drag ? "none" : `pan-${"x"===t.drag?"y":"x"}`), void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (r.tabIndex = 0), r.style = i, r
                                })(r, n, s, e),
                                a = function(t, e, r) {
                                    let i = {};
                                    for (let n in t)("values" !== n || "object" != typeof t.values) && (nH(n) || !0 === r && nQ(n) || !e && !nQ(n) || t.draggable && n.startsWith("onDrag")) && (i[n] = t[n]);
                                    return i
                                }(r, "string" == typeof e, t),
                                l = e !== r8.Fragment ? { ...a,
                                    ...o,
                                    ref: i
                                } : {},
                                {
                                    children: u
                                } = r,
                                h = (0, r8.useMemo)(() => P(u) ? u.get() : u, [u]);
                            return (0, r8.createElement)(e, { ...l,
                                children: h
                            })
                        }
                    }(e),
                    createVisualElement: r3,
                    Component: t
                })
            }))
        },
        7471: (t, e, r) => {
            "use strict";
            r.d(e, {
                Q: () => i
            });
            let i = (0, r(2115).createContext)({
                transformPagePoint: t => t,
                isStatic: !1,
                reducedMotion: "never"
            })
        },
        7544: (t, e) => {
            "use strict";

            function r(t) {
                let {
                    ampFirst: e = !1,
                    hybrid: r = !1,
                    hasQuery: i = !1
                } = void 0 === t ? {} : t;
                return e || r && i
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "isInAmpMode", {
                enumerable: !0,
                get: function() {
                    return r
                }
            })
        },
        7728: (t, e, r) => {
            "use strict";
            r.d(e, {
                L: () => i
            });
            let i = (0, r(2115).createContext)({})
        },
        8883: (t, e, r) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "getImgProps", {
                enumerable: !0,
                get: function() {
                    return l
                }
            }), r(3230);
            let i = r(5100),
                n = r(5840),
                s = ["-moz-initial", "fill", "none", "scale-down", void 0];

            function o(t) {
                return void 0 !== t.default
            }

            function a(t) {
                return void 0 === t ? t : "number" == typeof t ? Number.isFinite(t) ? t : NaN : "string" == typeof t && /^[0-9]+$/.test(t) ? parseInt(t, 10) : NaN
            }

            function l(t, e) {
                var r, l;
                let u, h, c, {
                        src: f,
                        sizes: d,
                        unoptimized: p = !1,
                        priority: m = !1,
                        loading: y,
                        className: g,
                        quality: v,
                        width: b,
                        height: w,
                        fill: x = !1,
                        style: E,
                        overrideSrc: S,
                        onLoad: T,
                        onLoadingComplete: R,
                        placeholder: A = "empty",
                        blurDataURL: P,
                        fetchPriority: C,
                        decoding: O = "async",
                        layout: M,
                        objectFit: j,
                        objectPosition: k,
                        lazyBoundary: D,
                        lazyRoot: L,
                        ...B
                    } = t,
                    {
                        imgConf: V,
                        showAltText: F,
                        blurComplete: U,
                        defaultLoader: I
                    } = e,
                    _ = V || n.imageConfigDefault;
                if ("allSizes" in _) u = _;
                else {
                    let t = [..._.deviceSizes, ..._.imageSizes].sort((t, e) => t - e),
                        e = _.deviceSizes.sort((t, e) => t - e),
                        i = null == (r = _.qualities) ? void 0 : r.sort((t, e) => t - e);
                    u = { ..._,
                        allSizes: t,
                        deviceSizes: e,
                        qualities: i
                    }
                }
                if (void 0 === I) throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"), "__NEXT_ERROR_CODE", {
                    value: "E163",
                    enumerable: !1,
                    configurable: !0
                });
                let N = B.loader || I;
                delete B.loader, delete B.srcSet;
                let z = "__next_img_default" in N;
                if (z) {
                    if ("custom" === u.loader) throw Object.defineProperty(Error('Image with src "' + f + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'), "__NEXT_ERROR_CODE", {
                        value: "E252",
                        enumerable: !1,
                        configurable: !0
                    })
                } else {
                    let t = N;
                    N = e => {
                        let {
                            config: r,
                            ...i
                        } = e;
                        return t(i)
                    }
                }
                if (M) {
                    "fill" === M && (x = !0);
                    let t = {
                        intrinsic: {
                            maxWidth: "100%",
                            height: "auto"
                        },
                        responsive: {
                            width: "100%",
                            height: "auto"
                        }
                    }[M];
                    t && (E = { ...E,
                        ...t
                    });
                    let e = {
                        responsive: "100vw",
                        fill: "100vw"
                    }[M];
                    e && !d && (d = e)
                }
                let W = "",
                    q = a(b),
                    $ = a(w);
                if ((l = f) && "object" == typeof l && (o(l) || void 0 !== l.src)) {
                    let t = o(f) ? f.default : f;
                    if (!t.src) throw Object.defineProperty(Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(t)), "__NEXT_ERROR_CODE", {
                        value: "E460",
                        enumerable: !1,
                        configurable: !0
                    });
                    if (!t.height || !t.width) throw Object.defineProperty(Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(t)), "__NEXT_ERROR_CODE", {
                        value: "E48",
                        enumerable: !1,
                        configurable: !0
                    });
                    if (h = t.blurWidth, c = t.blurHeight, P = P || t.blurDataURL, W = t.src, !x)
                        if (q || $) {
                            if (q && !$) {
                                let e = q / t.width;
                                $ = Math.round(t.height * e)
                            } else if (!q && $) {
                                let e = $ / t.height;
                                q = Math.round(t.width * e)
                            }
                        } else q = t.width, $ = t.height
                }
                let Q = !m && ("lazy" === y || void 0 === y);
                (!(f = "string" == typeof f ? f : W) || f.startsWith("data:") || f.startsWith("blob:")) && (p = !0, Q = !1), u.unoptimized && (p = !0), z && !u.dangerouslyAllowSVG && f.split("?", 1)[0].endsWith(".svg") && (p = !0);
                let H = a(v),
                    X = Object.assign(x ? {
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        objectFit: j,
                        objectPosition: k
                    } : {}, F ? {} : {
                        color: "transparent"
                    }, E),
                    Y = U || "empty" === A ? null : "blur" === A ? 'url("data:image/svg+xml;charset=utf-8,' + (0, i.getImageBlurSvg)({
                        widthInt: q,
                        heightInt: $,
                        blurWidth: h,
                        blurHeight: c,
                        blurDataURL: P || "",
                        objectFit: X.objectFit
                    }) + '")' : 'url("' + A + '")',
                    K = s.includes(X.objectFit) ? "fill" === X.objectFit ? "100% 100%" : "cover" : X.objectFit,
                    G = Y ? {
                        backgroundSize: K,
                        backgroundPosition: X.objectPosition || "50% 50%",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: Y
                    } : {},
                    J = function(t) {
                        let {
                            config: e,
                            src: r,
                            unoptimized: i,
                            width: n,
                            quality: s,
                            sizes: o,
                            loader: a
                        } = t;
                        if (i) return {
                            src: r,
                            srcSet: void 0,
                            sizes: void 0
                        };
                        let {
                            widths: l,
                            kind: u
                        } = function(t, e, r) {
                            let {
                                deviceSizes: i,
                                allSizes: n
                            } = t;
                            if (r) {
                                let t = /(^|\s)(1?\d?\d)vw/g,
                                    e = [];
                                for (let i; i = t.exec(r);) e.push(parseInt(i[2]));
                                if (e.length) {
                                    let t = .01 * Math.min(...e);
                                    return {
                                        widths: n.filter(e => e >= i[0] * t),
                                        kind: "w"
                                    }
                                }
                                return {
                                    widths: n,
                                    kind: "w"
                                }
                            }
                            return "number" != typeof e ? {
                                widths: i,
                                kind: "w"
                            } : {
                                widths: [...new Set([e, 2 * e].map(t => n.find(e => e >= t) || n[n.length - 1]))],
                                kind: "x"
                            }
                        }(e, n, o), h = l.length - 1;
                        return {
                            sizes: o || "w" !== u ? o : "100vw",
                            srcSet: l.map((t, i) => a({
                                config: e,
                                src: r,
                                quality: s,
                                width: t
                            }) + " " + ("w" === u ? t : i + 1) + u).join(", "),
                            src: a({
                                config: e,
                                src: r,
                                quality: s,
                                width: l[h]
                            })
                        }
                    }({
                        config: u,
                        src: f,
                        unoptimized: p,
                        width: q,
                        quality: H,
                        sizes: d,
                        loader: N
                    });
                return {
                    props: { ...B,
                        loading: Q ? "lazy" : y,
                        fetchPriority: C,
                        width: q,
                        height: $,
                        decoding: O,
                        className: g,
                        style: { ...X,
                            ...G
                        },
                        sizes: J.sizes,
                        srcSet: J.srcSet,
                        src: S || J.src
                    },
                    meta: {
                        unoptimized: p,
                        priority: m,
                        placeholder: A,
                        fill: x
                    }
                }
            }
        },
        9025: (t, e, r) => {
            "use strict";
            r.d(e, {
                E: () => n
            });
            var i = r(2115);
            let n = r(2801).B ? i.useLayoutEffect : i.useEffect
        },
        9641: t => {
            ! function() {
                var e = {
                        675: function(t, e) {
                            "use strict";
                            e.byteLength = function(t) {
                                var e = l(t),
                                    r = e[0],
                                    i = e[1];
                                return (r + i) * 3 / 4 - i
                            }, e.toByteArray = function(t) {
                                var e, r, s = l(t),
                                    o = s[0],
                                    a = s[1],
                                    u = new n((o + a) * 3 / 4 - a),
                                    h = 0,
                                    c = a > 0 ? o - 4 : o;
                                for (r = 0; r < c; r += 4) e = i[t.charCodeAt(r)] << 18 | i[t.charCodeAt(r + 1)] << 12 | i[t.charCodeAt(r + 2)] << 6 | i[t.charCodeAt(r + 3)], u[h++] = e >> 16 & 255, u[h++] = e >> 8 & 255, u[h++] = 255 & e;
                                return 2 === a && (e = i[t.charCodeAt(r)] << 2 | i[t.charCodeAt(r + 1)] >> 4, u[h++] = 255 & e), 1 === a && (e = i[t.charCodeAt(r)] << 10 | i[t.charCodeAt(r + 1)] << 4 | i[t.charCodeAt(r + 2)] >> 2, u[h++] = e >> 8 & 255, u[h++] = 255 & e), u
                            }, e.fromByteArray = function(t) {
                                for (var e, i = t.length, n = i % 3, s = [], o = 0, a = i - n; o < a; o += 16383) s.push(function(t, e, i) {
                                    for (var n, s = [], o = e; o < i; o += 3) n = (t[o] << 16 & 0xff0000) + (t[o + 1] << 8 & 65280) + (255 & t[o + 2]), s.push(r[n >> 18 & 63] + r[n >> 12 & 63] + r[n >> 6 & 63] + r[63 & n]);
                                    return s.join("")
                                }(t, o, o + 16383 > a ? a : o + 16383));
                                return 1 === n ? s.push(r[(e = t[i - 1]) >> 2] + r[e << 4 & 63] + "==") : 2 === n && s.push(r[(e = (t[i - 2] << 8) + t[i - 1]) >> 10] + r[e >> 4 & 63] + r[e << 2 & 63] + "="), s.join("")
                            };
                            for (var r = [], i = [], n = "undefined" != typeof Uint8Array ? Uint8Array : Array, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = 0, a = s.length; o < a; ++o) r[o] = s[o], i[s.charCodeAt(o)] = o;

                            function l(t) {
                                var e = t.length;
                                if (e % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
                                var r = t.indexOf("="); - 1 === r && (r = e);
                                var i = r === e ? 0 : 4 - r % 4;
                                return [r, i]
                            }
                            i[45] = 62, i[95] = 63
                        },
                        72: function(t, e, r) {
                            "use strict";
                            var i = r(675),
                                n = r(783),
                                s = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;

                            function o(t) {
                                if (t > 0x7fffffff) throw RangeError('The value "' + t + '" is invalid for option "size"');
                                var e = new Uint8Array(t);
                                return Object.setPrototypeOf(e, a.prototype), e
                            }

                            function a(t, e, r) {
                                if ("number" == typeof t) {
                                    if ("string" == typeof e) throw TypeError('The "string" argument must be of type string. Received type number');
                                    return h(t)
                                }
                                return l(t, e, r)
                            }

                            function l(t, e, r) {
                                if ("string" == typeof t) {
                                    var i = t,
                                        n = e;
                                    if (("string" != typeof n || "" === n) && (n = "utf8"), !a.isEncoding(n)) throw TypeError("Unknown encoding: " + n);
                                    var s = 0 | d(i, n),
                                        l = o(s),
                                        u = l.write(i, n);
                                    return u !== s && (l = l.slice(0, u)), l
                                }
                                if (ArrayBuffer.isView(t)) return c(t);
                                if (null == t) throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
                                if (O(t, ArrayBuffer) || t && O(t.buffer, ArrayBuffer) || "undefined" != typeof SharedArrayBuffer && (O(t, SharedArrayBuffer) || t && O(t.buffer, SharedArrayBuffer))) return function(t, e, r) {
                                    var i;
                                    if (e < 0 || t.byteLength < e) throw RangeError('"offset" is outside of buffer bounds');
                                    if (t.byteLength < e + (r || 0)) throw RangeError('"length" is outside of buffer bounds');
                                    return Object.setPrototypeOf(i = void 0 === e && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, e) : new Uint8Array(t, e, r), a.prototype), i
                                }(t, e, r);
                                if ("number" == typeof t) throw TypeError('The "value" argument must not be of type number. Received type number');
                                var h = t.valueOf && t.valueOf();
                                if (null != h && h !== t) return a.from(h, e, r);
                                var p = function(t) {
                                    if (a.isBuffer(t)) {
                                        var e = 0 | f(t.length),
                                            r = o(e);
                                        return 0 === r.length || t.copy(r, 0, 0, e), r
                                    }
                                    return void 0 !== t.length ? "number" != typeof t.length || function(t) {
                                        return t != t
                                    }(t.length) ? o(0) : c(t) : "Buffer" === t.type && Array.isArray(t.data) ? c(t.data) : void 0
                                }(t);
                                if (p) return p;
                                if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof t[Symbol.toPrimitive]) return a.from(t[Symbol.toPrimitive]("string"), e, r);
                                throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t)
                            }

                            function u(t) {
                                if ("number" != typeof t) throw TypeError('"size" argument must be of type number');
                                if (t < 0) throw RangeError('The value "' + t + '" is invalid for option "size"')
                            }

                            function h(t) {
                                return u(t), o(t < 0 ? 0 : 0 | f(t))
                            }

                            function c(t) {
                                for (var e = t.length < 0 ? 0 : 0 | f(t.length), r = o(e), i = 0; i < e; i += 1) r[i] = 255 & t[i];
                                return r
                            }
                            e.Buffer = a, e.SlowBuffer = function(t) {
                                return +t != t && (t = 0), a.alloc(+t)
                            }, e.INSPECT_MAX_BYTES = 50, e.kMaxLength = 0x7fffffff, a.TYPED_ARRAY_SUPPORT = function() {
                                try {
                                    var t = new Uint8Array(1),
                                        e = {
                                            foo: function() {
                                                return 42
                                            }
                                        };
                                    return Object.setPrototypeOf(e, Uint8Array.prototype), Object.setPrototypeOf(t, e), 42 === t.foo()
                                } catch (t) {
                                    return !1
                                }
                            }(), a.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(a.prototype, "parent", {
                                enumerable: !0,
                                get: function() {
                                    if (a.isBuffer(this)) return this.buffer
                                }
                            }), Object.defineProperty(a.prototype, "offset", {
                                enumerable: !0,
                                get: function() {
                                    if (a.isBuffer(this)) return this.byteOffset
                                }
                            }), a.poolSize = 8192, a.from = function(t, e, r) {
                                return l(t, e, r)
                            }, Object.setPrototypeOf(a.prototype, Uint8Array.prototype), Object.setPrototypeOf(a, Uint8Array), a.alloc = function(t, e, r) {
                                return (u(t), t <= 0) ? o(t) : void 0 !== e ? "string" == typeof r ? o(t).fill(e, r) : o(t).fill(e) : o(t)
                            }, a.allocUnsafe = function(t) {
                                return h(t)
                            }, a.allocUnsafeSlow = function(t) {
                                return h(t)
                            };

                            function f(t) {
                                if (t >= 0x7fffffff) throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");
                                return 0 | t
                            }

                            function d(t, e) {
                                if (a.isBuffer(t)) return t.length;
                                if (ArrayBuffer.isView(t) || O(t, ArrayBuffer)) return t.byteLength;
                                if ("string" != typeof t) throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t);
                                var r = t.length,
                                    i = arguments.length > 2 && !0 === arguments[2];
                                if (!i && 0 === r) return 0;
                                for (var n = !1;;) switch (e) {
                                    case "ascii":
                                    case "latin1":
                                    case "binary":
                                        return r;
                                    case "utf8":
                                    case "utf-8":
                                        return R(t).length;
                                    case "ucs2":
                                    case "ucs-2":
                                    case "utf16le":
                                    case "utf-16le":
                                        return 2 * r;
                                    case "hex":
                                        return r >>> 1;
                                    case "base64":
                                        return P(t).length;
                                    default:
                                        if (n) return i ? -1 : R(t).length;
                                        e = ("" + e).toLowerCase(), n = !0
                                }
                            }

                            function p(t, e, r) {
                                var n, s, o, a = !1;
                                if ((void 0 === e || e < 0) && (e = 0), e > this.length || ((void 0 === r || r > this.length) && (r = this.length), r <= 0 || (r >>>= 0) <= (e >>>= 0))) return "";
                                for (t || (t = "utf8");;) switch (t) {
                                    case "hex":
                                        return function(t, e, r) {
                                            var i = t.length;
                                            (!e || e < 0) && (e = 0), (!r || r < 0 || r > i) && (r = i);
                                            for (var n = "", s = e; s < r; ++s) n += M[t[s]];
                                            return n
                                        }(this, e, r);
                                    case "utf8":
                                    case "utf-8":
                                        return v(this, e, r);
                                    case "ascii":
                                        return function(t, e, r) {
                                            var i = "";
                                            r = Math.min(t.length, r);
                                            for (var n = e; n < r; ++n) i += String.fromCharCode(127 & t[n]);
                                            return i
                                        }(this, e, r);
                                    case "latin1":
                                    case "binary":
                                        return function(t, e, r) {
                                            var i = "";
                                            r = Math.min(t.length, r);
                                            for (var n = e; n < r; ++n) i += String.fromCharCode(t[n]);
                                            return i
                                        }(this, e, r);
                                    case "base64":
                                        return n = this, s = e, o = r, 0 === s && o === n.length ? i.fromByteArray(n) : i.fromByteArray(n.slice(s, o));
                                    case "ucs2":
                                    case "ucs-2":
                                    case "utf16le":
                                    case "utf-16le":
                                        return function(t, e, r) {
                                            for (var i = t.slice(e, r), n = "", s = 0; s < i.length; s += 2) n += String.fromCharCode(i[s] + 256 * i[s + 1]);
                                            return n
                                        }(this, e, r);
                                    default:
                                        if (a) throw TypeError("Unknown encoding: " + t);
                                        t = (t + "").toLowerCase(), a = !0
                                }
                            }

                            function m(t, e, r) {
                                var i = t[e];
                                t[e] = t[r], t[r] = i
                            }

                            function y(t, e, r, i, n) {
                                var s;
                                if (0 === t.length) return -1;
                                if ("string" == typeof r ? (i = r, r = 0) : r > 0x7fffffff ? r = 0x7fffffff : r < -0x80000000 && (r = -0x80000000), (s = r *= 1) != s && (r = n ? 0 : t.length - 1), r < 0 && (r = t.length + r), r >= t.length)
                                    if (n) return -1;
                                    else r = t.length - 1;
                                else if (r < 0)
                                    if (!n) return -1;
                                    else r = 0;
                                if ("string" == typeof e && (e = a.from(e, i)), a.isBuffer(e)) return 0 === e.length ? -1 : g(t, e, r, i, n);
                                if ("number" == typeof e) {
                                    if (e &= 255, "function" == typeof Uint8Array.prototype.indexOf)
                                        if (n) return Uint8Array.prototype.indexOf.call(t, e, r);
                                        else return Uint8Array.prototype.lastIndexOf.call(t, e, r);
                                    return g(t, [e], r, i, n)
                                }
                                throw TypeError("val must be string, number or Buffer")
                            }

                            function g(t, e, r, i, n) {
                                var s, o = 1,
                                    a = t.length,
                                    l = e.length;
                                if (void 0 !== i && ("ucs2" === (i = String(i).toLowerCase()) || "ucs-2" === i || "utf16le" === i || "utf-16le" === i)) {
                                    if (t.length < 2 || e.length < 2) return -1;
                                    o = 2, a /= 2, l /= 2, r /= 2
                                }

                                function u(t, e) {
                                    return 1 === o ? t[e] : t.readUInt16BE(e * o)
                                }
                                if (n) {
                                    var h = -1;
                                    for (s = r; s < a; s++)
                                        if (u(t, s) === u(e, -1 === h ? 0 : s - h)) {
                                            if (-1 === h && (h = s), s - h + 1 === l) return h * o
                                        } else -1 !== h && (s -= s - h), h = -1
                                } else
                                    for (r + l > a && (r = a - l), s = r; s >= 0; s--) {
                                        for (var c = !0, f = 0; f < l; f++)
                                            if (u(t, s + f) !== u(e, f)) {
                                                c = !1;
                                                break
                                            }
                                        if (c) return s
                                    }
                                return -1
                            }
                            a.isBuffer = function(t) {
                                return null != t && !0 === t._isBuffer && t !== a.prototype
                            }, a.compare = function(t, e) {
                                if (O(t, Uint8Array) && (t = a.from(t, t.offset, t.byteLength)), O(e, Uint8Array) && (e = a.from(e, e.offset, e.byteLength)), !a.isBuffer(t) || !a.isBuffer(e)) throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                                if (t === e) return 0;
                                for (var r = t.length, i = e.length, n = 0, s = Math.min(r, i); n < s; ++n)
                                    if (t[n] !== e[n]) {
                                        r = t[n], i = e[n];
                                        break
                                    }
                                return r < i ? -1 : +(i < r)
                            }, a.isEncoding = function(t) {
                                switch (String(t).toLowerCase()) {
                                    case "hex":
                                    case "utf8":
                                    case "utf-8":
                                    case "ascii":
                                    case "latin1":
                                    case "binary":
                                    case "base64":
                                    case "ucs2":
                                    case "ucs-2":
                                    case "utf16le":
                                    case "utf-16le":
                                        return !0;
                                    default:
                                        return !1
                                }
                            }, a.concat = function(t, e) {
                                if (!Array.isArray(t)) throw TypeError('"list" argument must be an Array of Buffers');
                                if (0 === t.length) return a.alloc(0);
                                if (void 0 === e)
                                    for (r = 0, e = 0; r < t.length; ++r) e += t[r].length;
                                var r, i = a.allocUnsafe(e),
                                    n = 0;
                                for (r = 0; r < t.length; ++r) {
                                    var s = t[r];
                                    if (O(s, Uint8Array) && (s = a.from(s)), !a.isBuffer(s)) throw TypeError('"list" argument must be an Array of Buffers');
                                    s.copy(i, n), n += s.length
                                }
                                return i
                            }, a.byteLength = d, a.prototype._isBuffer = !0, a.prototype.swap16 = function() {
                                var t = this.length;
                                if (t % 2 != 0) throw RangeError("Buffer size must be a multiple of 16-bits");
                                for (var e = 0; e < t; e += 2) m(this, e, e + 1);
                                return this
                            }, a.prototype.swap32 = function() {
                                var t = this.length;
                                if (t % 4 != 0) throw RangeError("Buffer size must be a multiple of 32-bits");
                                for (var e = 0; e < t; e += 4) m(this, e, e + 3), m(this, e + 1, e + 2);
                                return this
                            }, a.prototype.swap64 = function() {
                                var t = this.length;
                                if (t % 8 != 0) throw RangeError("Buffer size must be a multiple of 64-bits");
                                for (var e = 0; e < t; e += 8) m(this, e, e + 7), m(this, e + 1, e + 6), m(this, e + 2, e + 5), m(this, e + 3, e + 4);
                                return this
                            }, a.prototype.toString = function() {
                                var t = this.length;
                                return 0 === t ? "" : 0 == arguments.length ? v(this, 0, t) : p.apply(this, arguments)
                            }, a.prototype.toLocaleString = a.prototype.toString, a.prototype.equals = function(t) {
                                if (!a.isBuffer(t)) throw TypeError("Argument must be a Buffer");
                                return this === t || 0 === a.compare(this, t)
                            }, a.prototype.inspect = function() {
                                var t = "",
                                    r = e.INSPECT_MAX_BYTES;
                                return t = this.toString("hex", 0, r).replace(/(.{2})/g, "$1 ").trim(), this.length > r && (t += " ... "), "<Buffer " + t + ">"
                            }, s && (a.prototype[s] = a.prototype.inspect), a.prototype.compare = function(t, e, r, i, n) {
                                if (O(t, Uint8Array) && (t = a.from(t, t.offset, t.byteLength)), !a.isBuffer(t)) throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
                                if (void 0 === e && (e = 0), void 0 === r && (r = t ? t.length : 0), void 0 === i && (i = 0), void 0 === n && (n = this.length), e < 0 || r > t.length || i < 0 || n > this.length) throw RangeError("out of range index");
                                if (i >= n && e >= r) return 0;
                                if (i >= n) return -1;
                                if (e >= r) return 1;
                                if (e >>>= 0, r >>>= 0, i >>>= 0, n >>>= 0, this === t) return 0;
                                for (var s = n - i, o = r - e, l = Math.min(s, o), u = this.slice(i, n), h = t.slice(e, r), c = 0; c < l; ++c)
                                    if (u[c] !== h[c]) {
                                        s = u[c], o = h[c];
                                        break
                                    }
                                return s < o ? -1 : +(o < s)
                            }, a.prototype.includes = function(t, e, r) {
                                return -1 !== this.indexOf(t, e, r)
                            }, a.prototype.indexOf = function(t, e, r) {
                                return y(this, t, e, r, !0)
                            }, a.prototype.lastIndexOf = function(t, e, r) {
                                return y(this, t, e, r, !1)
                            };

                            function v(t, e, r) {
                                r = Math.min(t.length, r);
                                for (var i = [], n = e; n < r;) {
                                    var s, o, a, l, u = t[n],
                                        h = null,
                                        c = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
                                    if (n + c <= r) switch (c) {
                                        case 1:
                                            u < 128 && (h = u);
                                            break;
                                        case 2:
                                            (192 & (s = t[n + 1])) == 128 && (l = (31 & u) << 6 | 63 & s) > 127 && (h = l);
                                            break;
                                        case 3:
                                            s = t[n + 1], o = t[n + 2], (192 & s) == 128 && (192 & o) == 128 && (l = (15 & u) << 12 | (63 & s) << 6 | 63 & o) > 2047 && (l < 55296 || l > 57343) && (h = l);
                                            break;
                                        case 4:
                                            s = t[n + 1], o = t[n + 2], a = t[n + 3], (192 & s) == 128 && (192 & o) == 128 && (192 & a) == 128 && (l = (15 & u) << 18 | (63 & s) << 12 | (63 & o) << 6 | 63 & a) > 65535 && l < 1114112 && (h = l)
                                    }
                                    null === h ? (h = 65533, c = 1) : h > 65535 && (h -= 65536, i.push(h >>> 10 & 1023 | 55296), h = 56320 | 1023 & h), i.push(h), n += c
                                }
                                var f = i,
                                    d = f.length;
                                if (d <= 4096) return String.fromCharCode.apply(String, f);
                                for (var p = "", m = 0; m < d;) p += String.fromCharCode.apply(String, f.slice(m, m += 4096));
                                return p
                            }

                            function b(t, e, r) {
                                if (t % 1 != 0 || t < 0) throw RangeError("offset is not uint");
                                if (t + e > r) throw RangeError("Trying to access beyond buffer length")
                            }

                            function w(t, e, r, i, n, s) {
                                if (!a.isBuffer(t)) throw TypeError('"buffer" argument must be a Buffer instance');
                                if (e > n || e < s) throw RangeError('"value" argument is out of bounds');
                                if (r + i > t.length) throw RangeError("Index out of range")
                            }

                            function x(t, e, r, i, n, s) {
                                if (r + i > t.length || r < 0) throw RangeError("Index out of range")
                            }

                            function E(t, e, r, i, s) {
                                return e *= 1, r >>>= 0, s || x(t, e, r, 4, 34028234663852886e22, -34028234663852886e22), n.write(t, e, r, i, 23, 4), r + 4
                            }

                            function S(t, e, r, i, s) {
                                return e *= 1, r >>>= 0, s || x(t, e, r, 8, 17976931348623157e292, -17976931348623157e292), n.write(t, e, r, i, 52, 8), r + 8
                            }
                            a.prototype.write = function(t, e, r, i) {
                                if (void 0 === e) i = "utf8", r = this.length, e = 0;
                                else if (void 0 === r && "string" == typeof e) i = e, r = this.length, e = 0;
                                else if (isFinite(e)) e >>>= 0, isFinite(r) ? (r >>>= 0, void 0 === i && (i = "utf8")) : (i = r, r = void 0);
                                else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                                var n, s, o, a, l, u, h, c, f = this.length - e;
                                if ((void 0 === r || r > f) && (r = f), t.length > 0 && (r < 0 || e < 0) || e > this.length) throw RangeError("Attempt to write outside buffer bounds");
                                i || (i = "utf8");
                                for (var d = !1;;) switch (i) {
                                    case "hex":
                                        return function(t, e, r, i) {
                                            r = Number(r) || 0;
                                            var n = t.length - r;
                                            i ? (i = Number(i)) > n && (i = n) : i = n;
                                            var s = e.length;
                                            i > s / 2 && (i = s / 2);
                                            for (var o = 0; o < i; ++o) {
                                                var a, l = parseInt(e.substr(2 * o, 2), 16);
                                                if ((a = l) != a) break;
                                                t[r + o] = l
                                            }
                                            return o
                                        }(this, t, e, r);
                                    case "utf8":
                                    case "utf-8":
                                        return n = e, s = r, C(R(t, this.length - n), this, n, s);
                                    case "ascii":
                                        return o = e, a = r, C(A(t), this, o, a);
                                    case "latin1":
                                    case "binary":
                                        return function(t, e, r, i) {
                                            return C(A(e), t, r, i)
                                        }(this, t, e, r);
                                    case "base64":
                                        return l = e, u = r, C(P(t), this, l, u);
                                    case "ucs2":
                                    case "ucs-2":
                                    case "utf16le":
                                    case "utf-16le":
                                        return h = e, c = r, C(function(t, e) {
                                            for (var r, i, n = [], s = 0; s < t.length && !((e -= 2) < 0); ++s) i = (r = t.charCodeAt(s)) >> 8, n.push(r % 256), n.push(i);
                                            return n
                                        }(t, this.length - h), this, h, c);
                                    default:
                                        if (d) throw TypeError("Unknown encoding: " + i);
                                        i = ("" + i).toLowerCase(), d = !0
                                }
                            }, a.prototype.toJSON = function() {
                                return {
                                    type: "Buffer",
                                    data: Array.prototype.slice.call(this._arr || this, 0)
                                }
                            }, a.prototype.slice = function(t, e) {
                                var r = this.length;
                                t = ~~t, e = void 0 === e ? r : ~~e, t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), e < t && (e = t);
                                var i = this.subarray(t, e);
                                return Object.setPrototypeOf(i, a.prototype), i
                            }, a.prototype.readUIntLE = function(t, e, r) {
                                t >>>= 0, e >>>= 0, r || b(t, e, this.length);
                                for (var i = this[t], n = 1, s = 0; ++s < e && (n *= 256);) i += this[t + s] * n;
                                return i
                            }, a.prototype.readUIntBE = function(t, e, r) {
                                t >>>= 0, e >>>= 0, r || b(t, e, this.length);
                                for (var i = this[t + --e], n = 1; e > 0 && (n *= 256);) i += this[t + --e] * n;
                                return i
                            }, a.prototype.readUInt8 = function(t, e) {
                                return t >>>= 0, e || b(t, 1, this.length), this[t]
                            }, a.prototype.readUInt16LE = function(t, e) {
                                return t >>>= 0, e || b(t, 2, this.length), this[t] | this[t + 1] << 8
                            }, a.prototype.readUInt16BE = function(t, e) {
                                return t >>>= 0, e || b(t, 2, this.length), this[t] << 8 | this[t + 1]
                            }, a.prototype.readUInt32LE = function(t, e) {
                                return t >>>= 0, e || b(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 0x1000000 * this[t + 3]
                            }, a.prototype.readUInt32BE = function(t, e) {
                                return t >>>= 0, e || b(t, 4, this.length), 0x1000000 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
                            }, a.prototype.readIntLE = function(t, e, r) {
                                t >>>= 0, e >>>= 0, r || b(t, e, this.length);
                                for (var i = this[t], n = 1, s = 0; ++s < e && (n *= 256);) i += this[t + s] * n;
                                return i >= (n *= 128) && (i -= Math.pow(2, 8 * e)), i
                            }, a.prototype.readIntBE = function(t, e, r) {
                                t >>>= 0, e >>>= 0, r || b(t, e, this.length);
                                for (var i = e, n = 1, s = this[t + --i]; i > 0 && (n *= 256);) s += this[t + --i] * n;
                                return s >= (n *= 128) && (s -= Math.pow(2, 8 * e)), s
                            }, a.prototype.readInt8 = function(t, e) {
                                return (t >>>= 0, e || b(t, 1, this.length), 128 & this[t]) ? -((255 - this[t] + 1) * 1) : this[t]
                            }, a.prototype.readInt16LE = function(t, e) {
                                t >>>= 0, e || b(t, 2, this.length);
                                var r = this[t] | this[t + 1] << 8;
                                return 32768 & r ? 0xffff0000 | r : r
                            }, a.prototype.readInt16BE = function(t, e) {
                                t >>>= 0, e || b(t, 2, this.length);
                                var r = this[t + 1] | this[t] << 8;
                                return 32768 & r ? 0xffff0000 | r : r
                            }, a.prototype.readInt32LE = function(t, e) {
                                return t >>>= 0, e || b(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
                            }, a.prototype.readInt32BE = function(t, e) {
                                return t >>>= 0, e || b(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
                            }, a.prototype.readFloatLE = function(t, e) {
                                return t >>>= 0, e || b(t, 4, this.length), n.read(this, t, !0, 23, 4)
                            }, a.prototype.readFloatBE = function(t, e) {
                                return t >>>= 0, e || b(t, 4, this.length), n.read(this, t, !1, 23, 4)
                            }, a.prototype.readDoubleLE = function(t, e) {
                                return t >>>= 0, e || b(t, 8, this.length), n.read(this, t, !0, 52, 8)
                            }, a.prototype.readDoubleBE = function(t, e) {
                                return t >>>= 0, e || b(t, 8, this.length), n.read(this, t, !1, 52, 8)
                            }, a.prototype.writeUIntLE = function(t, e, r, i) {
                                if (t *= 1, e >>>= 0, r >>>= 0, !i) {
                                    var n = Math.pow(2, 8 * r) - 1;
                                    w(this, t, e, r, n, 0)
                                }
                                var s = 1,
                                    o = 0;
                                for (this[e] = 255 & t; ++o < r && (s *= 256);) this[e + o] = t / s & 255;
                                return e + r
                            }, a.prototype.writeUIntBE = function(t, e, r, i) {
                                if (t *= 1, e >>>= 0, r >>>= 0, !i) {
                                    var n = Math.pow(2, 8 * r) - 1;
                                    w(this, t, e, r, n, 0)
                                }
                                var s = r - 1,
                                    o = 1;
                                for (this[e + s] = 255 & t; --s >= 0 && (o *= 256);) this[e + s] = t / o & 255;
                                return e + r
                            }, a.prototype.writeUInt8 = function(t, e, r) {
                                return t *= 1, e >>>= 0, r || w(this, t, e, 1, 255, 0), this[e] = 255 & t, e + 1
                            }, a.prototype.writeUInt16LE = function(t, e, r) {
                                return t *= 1, e >>>= 0, r || w(this, t, e, 2, 65535, 0), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
                            }, a.prototype.writeUInt16BE = function(t, e, r) {
                                return t *= 1, e >>>= 0, r || w(this, t, e, 2, 65535, 0), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
                            }, a.prototype.writeUInt32LE = function(t, e, r) {
                                return t *= 1, e >>>= 0, r || w(this, t, e, 4, 0xffffffff, 0), this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t, e + 4
                            }, a.prototype.writeUInt32BE = function(t, e, r) {
                                return t *= 1, e >>>= 0, r || w(this, t, e, 4, 0xffffffff, 0), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
                            }, a.prototype.writeIntLE = function(t, e, r, i) {
                                if (t *= 1, e >>>= 0, !i) {
                                    var n = Math.pow(2, 8 * r - 1);
                                    w(this, t, e, r, n - 1, -n)
                                }
                                var s = 0,
                                    o = 1,
                                    a = 0;
                                for (this[e] = 255 & t; ++s < r && (o *= 256);) t < 0 && 0 === a && 0 !== this[e + s - 1] && (a = 1), this[e + s] = (t / o | 0) - a & 255;
                                return e + r
                            }, a.prototype.writeIntBE = function(t, e, r, i) {
                                if (t *= 1, e >>>= 0, !i) {
                                    var n = Math.pow(2, 8 * r - 1);
                                    w(this, t, e, r, n - 1, -n)
                                }
                                var s = r - 1,
                                    o = 1,
                                    a = 0;
                                for (this[e + s] = 255 & t; --s >= 0 && (o *= 256);) t < 0 && 0 === a && 0 !== this[e + s + 1] && (a = 1), this[e + s] = (t / o | 0) - a & 255;
                                return e + r
                            }, a.prototype.writeInt8 = function(t, e, r) {
                                return t *= 1, e >>>= 0, r || w(this, t, e, 1, 127, -128), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1
                            }, a.prototype.writeInt16LE = function(t, e, r) {
                                return t *= 1, e >>>= 0, r || w(this, t, e, 2, 32767, -32768), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
                            }, a.prototype.writeInt16BE = function(t, e, r) {
                                return t *= 1, e >>>= 0, r || w(this, t, e, 2, 32767, -32768), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
                            }, a.prototype.writeInt32LE = function(t, e, r) {
                                return t *= 1, e >>>= 0, r || w(this, t, e, 4, 0x7fffffff, -0x80000000), this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24, e + 4
                            }, a.prototype.writeInt32BE = function(t, e, r) {
                                return t *= 1, e >>>= 0, r || w(this, t, e, 4, 0x7fffffff, -0x80000000), t < 0 && (t = 0xffffffff + t + 1), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
                            }, a.prototype.writeFloatLE = function(t, e, r) {
                                return E(this, t, e, !0, r)
                            }, a.prototype.writeFloatBE = function(t, e, r) {
                                return E(this, t, e, !1, r)
                            }, a.prototype.writeDoubleLE = function(t, e, r) {
                                return S(this, t, e, !0, r)
                            }, a.prototype.writeDoubleBE = function(t, e, r) {
                                return S(this, t, e, !1, r)
                            }, a.prototype.copy = function(t, e, r, i) {
                                if (!a.isBuffer(t)) throw TypeError("argument should be a Buffer");
                                if (r || (r = 0), i || 0 === i || (i = this.length), e >= t.length && (e = t.length), e || (e = 0), i > 0 && i < r && (i = r), i === r || 0 === t.length || 0 === this.length) return 0;
                                if (e < 0) throw RangeError("targetStart out of bounds");
                                if (r < 0 || r >= this.length) throw RangeError("Index out of range");
                                if (i < 0) throw RangeError("sourceEnd out of bounds");
                                i > this.length && (i = this.length), t.length - e < i - r && (i = t.length - e + r);
                                var n = i - r;
                                if (this === t && "function" == typeof Uint8Array.prototype.copyWithin) this.copyWithin(e, r, i);
                                else if (this === t && r < e && e < i)
                                    for (var s = n - 1; s >= 0; --s) t[s + e] = this[s + r];
                                else Uint8Array.prototype.set.call(t, this.subarray(r, i), e);
                                return n
                            }, a.prototype.fill = function(t, e, r, i) {
                                if ("string" == typeof t) {
                                    if ("string" == typeof e ? (i = e, e = 0, r = this.length) : "string" == typeof r && (i = r, r = this.length), void 0 !== i && "string" != typeof i) throw TypeError("encoding must be a string");
                                    if ("string" == typeof i && !a.isEncoding(i)) throw TypeError("Unknown encoding: " + i);
                                    if (1 === t.length) {
                                        var n, s = t.charCodeAt(0);
                                        ("utf8" === i && s < 128 || "latin1" === i) && (t = s)
                                    }
                                } else "number" == typeof t ? t &= 255 : "boolean" == typeof t && (t = Number(t));
                                if (e < 0 || this.length < e || this.length < r) throw RangeError("Out of range index");
                                if (r <= e) return this;
                                if (e >>>= 0, r = void 0 === r ? this.length : r >>> 0, t || (t = 0), "number" == typeof t)
                                    for (n = e; n < r; ++n) this[n] = t;
                                else {
                                    var o = a.isBuffer(t) ? t : a.from(t, i),
                                        l = o.length;
                                    if (0 === l) throw TypeError('The value "' + t + '" is invalid for argument "value"');
                                    for (n = 0; n < r - e; ++n) this[n + e] = o[n % l]
                                }
                                return this
                            };
                            var T = /[^+/0-9A-Za-z-_]/g;

                            function R(t, e) {
                                e = e || 1 / 0;
                                for (var r, i = t.length, n = null, s = [], o = 0; o < i; ++o) {
                                    if ((r = t.charCodeAt(o)) > 55295 && r < 57344) {
                                        if (!n) {
                                            if (r > 56319 || o + 1 === i) {
                                                (e -= 3) > -1 && s.push(239, 191, 189);
                                                continue
                                            }
                                            n = r;
                                            continue
                                        }
                                        if (r < 56320) {
                                            (e -= 3) > -1 && s.push(239, 191, 189), n = r;
                                            continue
                                        }
                                        r = (n - 55296 << 10 | r - 56320) + 65536
                                    } else n && (e -= 3) > -1 && s.push(239, 191, 189);
                                    if (n = null, r < 128) {
                                        if ((e -= 1) < 0) break;
                                        s.push(r)
                                    } else if (r < 2048) {
                                        if ((e -= 2) < 0) break;
                                        s.push(r >> 6 | 192, 63 & r | 128)
                                    } else if (r < 65536) {
                                        if ((e -= 3) < 0) break;
                                        s.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                                    } else if (r < 1114112) {
                                        if ((e -= 4) < 0) break;
                                        s.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                                    } else throw Error("Invalid code point")
                                }
                                return s
                            }

                            function A(t) {
                                for (var e = [], r = 0; r < t.length; ++r) e.push(255 & t.charCodeAt(r));
                                return e
                            }

                            function P(t) {
                                return i.toByteArray(function(t) {
                                    if ((t = (t = t.split("=")[0]).trim().replace(T, "")).length < 2) return "";
                                    for (; t.length % 4 != 0;) t += "=";
                                    return t
                                }(t))
                            }

                            function C(t, e, r, i) {
                                for (var n = 0; n < i && !(n + r >= e.length) && !(n >= t.length); ++n) e[n + r] = t[n];
                                return n
                            }

                            function O(t, e) {
                                return t instanceof e || null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === e.name
                            }
                            var M = function() {
                                for (var t = "0123456789abcdef", e = Array(256), r = 0; r < 16; ++r)
                                    for (var i = 16 * r, n = 0; n < 16; ++n) e[i + n] = t[r] + t[n];
                                return e
                            }()
                        },
                        783: function(t, e) {
                            e.read = function(t, e, r, i, n) {
                                var s, o, a = 8 * n - i - 1,
                                    l = (1 << a) - 1,
                                    u = l >> 1,
                                    h = -7,
                                    c = r ? n - 1 : 0,
                                    f = r ? -1 : 1,
                                    d = t[e + c];
                                for (c += f, s = d & (1 << -h) - 1, d >>= -h, h += a; h > 0; s = 256 * s + t[e + c], c += f, h -= 8);
                                for (o = s & (1 << -h) - 1, s >>= -h, h += i; h > 0; o = 256 * o + t[e + c], c += f, h -= 8);
                                if (0 === s) s = 1 - u;
                                else {
                                    if (s === l) return o ? NaN : 1 / 0 * (d ? -1 : 1);
                                    o += Math.pow(2, i), s -= u
                                }
                                return (d ? -1 : 1) * o * Math.pow(2, s - i)
                            }, e.write = function(t, e, r, i, n, s) {
                                var o, a, l, u = 8 * s - n - 1,
                                    h = (1 << u) - 1,
                                    c = h >> 1,
                                    f = 5960464477539062e-23 * (23 === n),
                                    d = i ? 0 : s - 1,
                                    p = i ? 1 : -1,
                                    m = +(e < 0 || 0 === e && 1 / e < 0);
                                for (isNaN(e = Math.abs(e)) || e === 1 / 0 ? (a = +!!isNaN(e), o = h) : (o = Math.floor(Math.log(e) / Math.LN2), e * (l = Math.pow(2, -o)) < 1 && (o--, l *= 2), o + c >= 1 ? e += f / l : e += f * Math.pow(2, 1 - c), e * l >= 2 && (o++, l /= 2), o + c >= h ? (a = 0, o = h) : o + c >= 1 ? (a = (e * l - 1) * Math.pow(2, n), o += c) : (a = e * Math.pow(2, c - 1) * Math.pow(2, n), o = 0)); n >= 8; t[r + d] = 255 & a, d += p, a /= 256, n -= 8);
                                for (o = o << n | a, u += n; u > 0; t[r + d] = 255 & o, d += p, o /= 256, u -= 8);
                                t[r + d - p] |= 128 * m
                            }
                        }
                    },
                    r = {};

                function i(t) {
                    var n = r[t];
                    if (void 0 !== n) return n.exports;
                    var s = r[t] = {
                            exports: {}
                        },
                        o = !0;
                    try {
                        e[t](s, s.exports, i), o = !1
                    } finally {
                        o && delete r[t]
                    }
                    return s.exports
                }
                i.ab = "//", t.exports = i(72)
            }()
        }
    }
]);