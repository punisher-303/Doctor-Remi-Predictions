(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [177], {
        3999: (e, t, s) => {
            "use strict";
            s.d(t, {
                cn: () => r
            });
            var i = s(2596),
                a = s(9688);

            function r() {
                for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[s] = arguments[s];
                return (0, a.QP)((0, i.$)(t))
            }
        },
        5540: (e, t, s) => {
            Promise.resolve().then(s.t.bind(s, 9324, 23)), Promise.resolve().then(s.bind(s, 7778)), Promise.resolve().then(s.t.bind(s, 6874, 23)), Promise.resolve().then(s.bind(s, 7901))
        },
        7168: (e, t, s) => {
            "use strict";
            s.d(t, {
                $: () => u
            });
            var i = s(5155);
            s(2115);
            var a = s(9708),
                r = s(2085),
                n = s(3999);
            let o = (0, r.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer", {
                variants: {
                    variant: {
                        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
                        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
                        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
                        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
                        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
                        link: "text-primary underline-offset-4 hover:underline"
                    },
                    size: {
                        default: "h-9 px-4 py-2 has-[>svg]:px-3",
                        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
                        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
                        icon: "size-9"
                    }
                },
                defaultVariants: {
                    variant: "default",
                    size: "default"
                }
            });

            function u(e) {
                let {
                    className: t,
                    variant: s,
                    size: r,
                    asChild: u = !1,
                    ...l
                } = e, h = u ? a.DX : "button";
                return (0, i.jsx)(h, {
                    "data-slot": "button",
                    className: (0, n.cn)(o({
                        variant: s,
                        size: r,
                        className: t
                    })),
                    ...l
                })
            }
        },
        7778: (e, t, s) => {
            "use strict";
            s.d(t, {
                default: () => u
            });
            var i = s(5155),
                a = s(9946);
            let r = (0, a.A)("send", [
                    ["path", {
                        d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
                        key: "1ffxy3"
                    }],
                    ["path", {
                        d: "m21.854 2.147-10.94 10.939",
                        key: "12cjpa"
                    }]
                ]),
                n = (0, a.A)("heart", [
                    ["path", {
                        d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
                        key: "c3ymky"
                    }]
                ]);
            var o = s(7168);
            let u = () => {
                let e = new Date().getFullYear();
                return (0, i.jsxs)("footer", {
                    className: "relative bg-gradient-to-t from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 border-t border-slate-200 dark:border-slate-800",
                    children: [(0, i.jsx)("div", {
                        className: "absolute inset-0 bg-gradient-to-r from-blue-50/50 via-transparent to-purple-50/50 dark:from-blue-950/20 dark:via-transparent dark:to-purple-950/20"
                    }), (0, i.jsx)("div", {
                        className: "relative max-w-7xl mx-auto px-6 py-12",
                        children: (0, i.jsxs)("div", {
                            className: "flex flex-col items-center text-center space-y-8",
                            children: [(0, i.jsxs)("div", {
                                className: "space-y-4",
                                children: [(0, i.jsx)("div", {
                                    className: "flex items-center justify-center gap-3",
                                    children: (0, i.jsxs)("div", {
                                        children: [(0, i.jsx)("h3", {
                                            className: "text-xl font-bold text-slate-900 dark:text-white",
                                            children: "T4TSA"
                                        }), (0, i.jsx)("p", {
                                            className: "text-sm text-slate-500 dark:text-slate-400",
                                            children: "Movie Library"
                                        })]
                                    })
                                }), (0, i.jsx)("p", {
                                    className: "text-slate-600 dark:text-slate-300 max-w-md leading-relaxed",
                                    children: "Your ultimate destination for movies and TV shows. Stream thousands of titles directly through Telegram with no subscriptions required."
                                })]
                            }), (0, i.jsxs)(o.$, {
                                onClick: () => {
                                    window.open("https://t.me/T4TSA", "_blank")
                                },
                                className: "inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-colors group",
                                children: [(0, i.jsx)(r, {
                                    className: "w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                                }), "Join our Telegram"]
                            }), (0, i.jsxs)("div", {
                                className: "flex flex-col sm:flex-row items-center justify-center gap-4 text-center",
                                children: [(0, i.jsxs)("div", {
                                    className: "flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400",
                                    children: [(0, i.jsx)("span", {
                                        children: "Made with"
                                    }), (0, i.jsx)(n, {
                                        className: "w-4 h-4 text-red-500 fill-red-500 animate-pulse"
                                    }), (0, i.jsx)("span", {
                                        children: "by"
                                    }), (0, i.jsx)("span", {
                                        className: "font-medium text-slate-900 dark:text-white",
                                        children: "T4TSA Team"
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: "flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400",
                                    children: [(0, i.jsxs)("span", {
                                        children: ["\xa9 ", e, " T4TSA. All rights reserved."]
                                    }), (0, i.jsxs)("div", {
                                        className: "flex items-center gap-1",
                                        children: [(0, i.jsx)("div", {
                                            className: "w-2 h-2 bg-green-500 rounded-full animate-pulse"
                                        }), (0, i.jsx)("span", {
                                            children: "All systems operational"
                                        })]
                                    })]
                                })]
                            })]
                        })
                    })]
                })
            }
        },
        7901: (e, t, s) => {
            "use strict";
            s.d(t, {
                Providers: () => q
            });
            var i = s(5155),
                a = s(1362),
                r = s(2020),
                n = s(9853),
                o = s(7165),
                u = s(5910),
                l = class extends u.Q {
                    constructor(e = {}) {
                        super(), this.config = e, this.#e = new Map
                    }#
                    e;
                    build(e, t, s) {
                        let i = t.queryKey,
                            a = t.queryHash ? ? (0, r.F$)(i, t),
                            o = this.get(a);
                        return o || (o = new n.X({
                            client: e,
                            queryKey: i,
                            queryHash: a,
                            options: e.defaultQueryOptions(t),
                            state: s,
                            defaultOptions: e.getQueryDefaults(i)
                        }), this.add(o)), o
                    }
                    add(e) {
                        this.#e.has(e.queryHash) || (this.#e.set(e.queryHash, e), this.notify({
                            type: "added",
                            query: e
                        }))
                    }
                    remove(e) {
                        let t = this.#e.get(e.queryHash);
                        t && (e.destroy(), t === e && this.#e.delete(e.queryHash), this.notify({
                            type: "removed",
                            query: e
                        }))
                    }
                    clear() {
                        o.jG.batch(() => {
                            this.getAll().forEach(e => {
                                this.remove(e)
                            })
                        })
                    }
                    get(e) {
                        return this.#e.get(e)
                    }
                    getAll() {
                        return [...this.#e.values()]
                    }
                    find(e) {
                        let t = {
                            exact: !0,
                            ...e
                        };
                        return this.getAll().find(e => (0, r.MK)(t, e))
                    }
                    findAll(e = {}) {
                        let t = this.getAll();
                        return Object.keys(e).length > 0 ? t.filter(t => (0, r.MK)(e, t)) : t
                    }
                    notify(e) {
                        o.jG.batch(() => {
                            this.listeners.forEach(t => {
                                t(e)
                            })
                        })
                    }
                    onFocus() {
                        o.jG.batch(() => {
                            this.getAll().forEach(e => {
                                e.onFocus()
                            })
                        })
                    }
                    onOnline() {
                        o.jG.batch(() => {
                            this.getAll().forEach(e => {
                                e.onOnline()
                            })
                        })
                    }
                },
                h = s(7948),
                c = s(6784),
                d = class extends h.k {#
                    t;#
                    s;#
                    i;
                    constructor(e) {
                        super(), this.mutationId = e.mutationId, this.#s = e.mutationCache, this.#t = [], this.state = e.state || {
                            context: void 0,
                            data: void 0,
                            error: null,
                            failureCount: 0,
                            failureReason: null,
                            isPaused: !1,
                            status: "idle",
                            variables: void 0,
                            submittedAt: 0
                        }, this.setOptions(e.options), this.scheduleGc()
                    }
                    setOptions(e) {
                        this.options = e, this.updateGcTime(this.options.gcTime)
                    }
                    get meta() {
                        return this.options.meta
                    }
                    addObserver(e) {
                        this.#t.includes(e) || (this.#t.push(e), this.clearGcTimeout(), this.#s.notify({
                            type: "observerAdded",
                            mutation: this,
                            observer: e
                        }))
                    }
                    removeObserver(e) {
                        this.#t = this.#t.filter(t => t !== e), this.scheduleGc(), this.#s.notify({
                            type: "observerRemoved",
                            mutation: this,
                            observer: e
                        })
                    }
                    optionalRemove() {
                        this.#t.length || ("pending" === this.state.status ? this.scheduleGc() : this.#s.remove(this))
                    }
                    continue () {
                        return this.#i ? .continue() ? ? this.execute(this.state.variables)
                    }
                    async execute(e) {
                        let t = () => {
                            this.#a({
                                type: "continue"
                            })
                        };
                        this.#i = (0, c.II)({
                            fn: () => this.options.mutationFn ? this.options.mutationFn(e) : Promise.reject(Error("No mutationFn found")),
                            onFail: (e, t) => {
                                this.#a({
                                    type: "failed",
                                    failureCount: e,
                                    error: t
                                })
                            },
                            onPause: () => {
                                this.#a({
                                    type: "pause"
                                })
                            },
                            onContinue: t,
                            retry: this.options.retry ? ? 0,
                            retryDelay: this.options.retryDelay,
                            networkMode: this.options.networkMode,
                            canRun: () => this.#s.canRun(this)
                        });
                        let s = "pending" === this.state.status,
                            i = !this.#i.canStart();
                        try {
                            if (s) t();
                            else {
                                this.#a({
                                    type: "pending",
                                    variables: e,
                                    isPaused: i
                                }), await this.#s.config.onMutate ? .(e, this);
                                let t = await this.options.onMutate ? .(e);
                                t !== this.state.context && this.#a({
                                    type: "pending",
                                    context: t,
                                    variables: e,
                                    isPaused: i
                                })
                            }
                            let a = await this.#i.start();
                            return await this.#s.config.onSuccess ? .(a, e, this.state.context, this), await this.options.onSuccess ? .(a, e, this.state.context), await this.#s.config.onSettled ? .(a, null, this.state.variables, this.state.context, this), await this.options.onSettled ? .(a, null, e, this.state.context), this.#a({
                                type: "success",
                                data: a
                            }), a
                        } catch (t) {
                            try {
                                throw await this.#s.config.onError ? .(t, e, this.state.context, this), await this.options.onError ? .(t, e, this.state.context), await this.#s.config.onSettled ? .(void 0, t, this.state.variables, this.state.context, this), await this.options.onSettled ? .(void 0, t, e, this.state.context), t
                            } finally {
                                this.#a({
                                    type: "error",
                                    error: t
                                })
                            }
                        } finally {
                            this.#s.runNext(this)
                        }
                    }#
                    a(e) {
                        this.state = (t => {
                            switch (e.type) {
                                case "failed":
                                    return { ...t,
                                        failureCount: e.failureCount,
                                        failureReason: e.error
                                    };
                                case "pause":
                                    return { ...t,
                                        isPaused: !0
                                    };
                                case "continue":
                                    return { ...t,
                                        isPaused: !1
                                    };
                                case "pending":
                                    return { ...t,
                                        context: e.context,
                                        data: void 0,
                                        failureCount: 0,
                                        failureReason: null,
                                        error: null,
                                        isPaused: e.isPaused,
                                        status: "pending",
                                        variables: e.variables,
                                        submittedAt: Date.now()
                                    };
                                case "success":
                                    return { ...t,
                                        data: e.data,
                                        failureCount: 0,
                                        failureReason: null,
                                        error: null,
                                        status: "success",
                                        isPaused: !1
                                    };
                                case "error":
                                    return { ...t,
                                        data: void 0,
                                        error: e.error,
                                        failureCount: t.failureCount + 1,
                                        failureReason: e.error,
                                        isPaused: !1,
                                        status: "error"
                                    }
                            }
                        })(this.state), o.jG.batch(() => {
                            this.#t.forEach(t => {
                                t.onMutationUpdate(e)
                            }), this.#s.notify({
                                mutation: this,
                                type: "updated",
                                action: e
                            })
                        })
                    }
                },
                f = class extends u.Q {
                    constructor(e = {}) {
                        super(), this.config = e, this.#r = new Set, this.#n = new Map, this.#o = 0
                    }#
                    r;#
                    n;#
                    o;
                    build(e, t, s) {
                        let i = new d({
                            mutationCache: this,
                            mutationId: ++this.#o,
                            options: e.defaultMutationOptions(t),
                            state: s
                        });
                        return this.add(i), i
                    }
                    add(e) {
                        this.#r.add(e);
                        let t = p(e);
                        if ("string" == typeof t) {
                            let s = this.#n.get(t);
                            s ? s.push(e) : this.#n.set(t, [e])
                        }
                        this.notify({
                            type: "added",
                            mutation: e
                        })
                    }
                    remove(e) {
                        if (this.#r.delete(e)) {
                            let t = p(e);
                            if ("string" == typeof t) {
                                let s = this.#n.get(t);
                                if (s)
                                    if (s.length > 1) {
                                        let t = s.indexOf(e); - 1 !== t && s.splice(t, 1)
                                    } else s[0] === e && this.#n.delete(t)
                            }
                        }
                        this.notify({
                            type: "removed",
                            mutation: e
                        })
                    }
                    canRun(e) {
                        let t = p(e);
                        if ("string" != typeof t) return !0; {
                            let s = this.#n.get(t),
                                i = s ? .find(e => "pending" === e.state.status);
                            return !i || i === e
                        }
                    }
                    runNext(e) {
                        let t = p(e);
                        if ("string" != typeof t) return Promise.resolve(); {
                            let s = this.#n.get(t) ? .find(t => t !== e && t.state.isPaused);
                            return s ? .continue() ? ? Promise.resolve()
                        }
                    }
                    clear() {
                        o.jG.batch(() => {
                            this.#r.forEach(e => {
                                this.notify({
                                    type: "removed",
                                    mutation: e
                                })
                            }), this.#r.clear(), this.#n.clear()
                        })
                    }
                    getAll() {
                        return Array.from(this.#r)
                    }
                    find(e) {
                        let t = {
                            exact: !0,
                            ...e
                        };
                        return this.getAll().find(e => (0, r.nJ)(t, e))
                    }
                    findAll(e = {}) {
                        return this.getAll().filter(t => (0, r.nJ)(e, t))
                    }
                    notify(e) {
                        o.jG.batch(() => {
                            this.listeners.forEach(t => {
                                t(e)
                            })
                        })
                    }
                    resumePausedMutations() {
                        let e = this.getAll().filter(e => e.state.isPaused);
                        return o.jG.batch(() => Promise.all(e.map(e => e.continue().catch(r.lQ))))
                    }
                };

            function p(e) {
                return e.options.scope ? .id
            }
            var m = s(920),
                y = s(1239);

            function g(e) {
                return {
                    onFetch: (t, s) => {
                        let i = t.options,
                            a = t.fetchOptions ? .meta ? .fetchMore ? .direction,
                            n = t.state.data ? .pages || [],
                            o = t.state.data ? .pageParams || [],
                            u = {
                                pages: [],
                                pageParams: []
                            },
                            l = 0,
                            h = async () => {
                                let s = !1,
                                    h = e => {
                                        Object.defineProperty(e, "signal", {
                                            enumerable: !0,
                                            get: () => (t.signal.aborted ? s = !0 : t.signal.addEventListener("abort", () => {
                                                s = !0
                                            }), t.signal)
                                        })
                                    },
                                    c = (0, r.ZM)(t.options, t.fetchOptions),
                                    d = async (e, i, a) => {
                                        if (s) return Promise.reject();
                                        if (null == i && e.pages.length) return Promise.resolve(e);
                                        let n = {
                                            client: t.client,
                                            queryKey: t.queryKey,
                                            pageParam: i,
                                            direction: a ? "backward" : "forward",
                                            meta: t.options.meta
                                        };
                                        h(n);
                                        let o = await c(n),
                                            {
                                                maxPages: u
                                            } = t.options,
                                            l = a ? r.ZZ : r.y9;
                                        return {
                                            pages: l(e.pages, o, u),
                                            pageParams: l(e.pageParams, i, u)
                                        }
                                    };
                                if (a && n.length) {
                                    let e = "backward" === a,
                                        t = {
                                            pages: n,
                                            pageParams: o
                                        },
                                        s = (e ? function(e, {
                                            pages: t,
                                            pageParams: s
                                        }) {
                                            return t.length > 0 ? e.getPreviousPageParam ? .(t[0], t, s[0], s) : void 0
                                        } : v)(i, t);
                                    u = await d(t, s, e)
                                } else {
                                    let t = e ? ? n.length;
                                    do {
                                        let e = 0 === l ? o[0] ? ? i.initialPageParam : v(i, u);
                                        if (l > 0 && null == e) break;
                                        u = await d(u, e), l++
                                    } while (l < t)
                                }
                                return u
                            };
                        t.options.persister ? t.fetchFn = () => t.options.persister ? .(h, {
                            client: t.client,
                            queryKey: t.queryKey,
                            meta: t.options.meta,
                            signal: t.signal
                        }, s) : t.fetchFn = h
                    }
                }
            }

            function v(e, {
                pages: t,
                pageParams: s
            }) {
                let i = t.length - 1;
                return t.length > 0 ? e.getNextPageParam(t[i], t, s[i], s) : void 0
            }
            var b = class {#
                    u;#
                    s;#
                    l;#
                    h;#
                    c;#
                    d;#
                    f;#
                    p;
                    constructor(e = {}) {
                        this.#u = e.queryCache || new l, this.#s = e.mutationCache || new f, this.#l = e.defaultOptions || {}, this.#h = new Map, this.#c = new Map, this.#d = 0
                    }
                    mount() {
                        this.#d++, 1 === this.#d && (this.#f = m.m.subscribe(async e => {
                            e && (await this.resumePausedMutations(), this.#u.onFocus())
                        }), this.#p = y.t.subscribe(async e => {
                            e && (await this.resumePausedMutations(), this.#u.onOnline())
                        }))
                    }
                    unmount() {
                        this.#d--, 0 === this.#d && (this.#f ? .(), this.#f = void 0, this.#p ? .(), this.#p = void 0)
                    }
                    isFetching(e) {
                        return this.#u.findAll({ ...e,
                            fetchStatus: "fetching"
                        }).length
                    }
                    isMutating(e) {
                        return this.#s.findAll({ ...e,
                            status: "pending"
                        }).length
                    }
                    getQueryData(e) {
                        let t = this.defaultQueryOptions({
                            queryKey: e
                        });
                        return this.#u.get(t.queryHash) ? .state.data
                    }
                    ensureQueryData(e) {
                        let t = this.defaultQueryOptions(e),
                            s = this.#u.build(this, t),
                            i = s.state.data;
                        return void 0 === i ? this.fetchQuery(e) : (e.revalidateIfStale && s.isStaleByTime((0, r.d2)(t.staleTime, s)) && this.prefetchQuery(t), Promise.resolve(i))
                    }
                    getQueriesData(e) {
                        return this.#u.findAll(e).map(({
                            queryKey: e,
                            state: t
                        }) => [e, t.data])
                    }
                    setQueryData(e, t, s) {
                        let i = this.defaultQueryOptions({
                                queryKey: e
                            }),
                            a = this.#u.get(i.queryHash),
                            n = a ? .state.data,
                            o = (0, r.Zw)(t, n);
                        if (void 0 !== o) return this.#u.build(this, i).setData(o, { ...s,
                            manual: !0
                        })
                    }
                    setQueriesData(e, t, s) {
                        return o.jG.batch(() => this.#u.findAll(e).map(({
                            queryKey: e
                        }) => [e, this.setQueryData(e, t, s)]))
                    }
                    getQueryState(e) {
                        let t = this.defaultQueryOptions({
                            queryKey: e
                        });
                        return this.#u.get(t.queryHash) ? .state
                    }
                    removeQueries(e) {
                        let t = this.#u;
                        o.jG.batch(() => {
                            t.findAll(e).forEach(e => {
                                t.remove(e)
                            })
                        })
                    }
                    resetQueries(e, t) {
                        let s = this.#u;
                        return o.jG.batch(() => (s.findAll(e).forEach(e => {
                            e.reset()
                        }), this.refetchQueries({
                            type: "active",
                            ...e
                        }, t)))
                    }
                    cancelQueries(e, t = {}) {
                        let s = {
                            revert: !0,
                            ...t
                        };
                        return Promise.all(o.jG.batch(() => this.#u.findAll(e).map(e => e.cancel(s)))).then(r.lQ).catch(r.lQ)
                    }
                    invalidateQueries(e, t = {}) {
                        return o.jG.batch(() => (this.#u.findAll(e).forEach(e => {
                            e.invalidate()
                        }), e ? .refetchType === "none") ? Promise.resolve() : this.refetchQueries({ ...e,
                            type: e ? .refetchType ? ? e ? .type ? ? "active"
                        }, t))
                    }
                    refetchQueries(e, t = {}) {
                        let s = { ...t,
                            cancelRefetch: t.cancelRefetch ? ? !0
                        };
                        return Promise.all(o.jG.batch(() => this.#u.findAll(e).filter(e => !e.isDisabled()).map(e => {
                            let t = e.fetch(void 0, s);
                            return s.throwOnError || (t = t.catch(r.lQ)), "paused" === e.state.fetchStatus ? Promise.resolve() : t
                        }))).then(r.lQ)
                    }
                    fetchQuery(e) {
                        let t = this.defaultQueryOptions(e);
                        void 0 === t.retry && (t.retry = !1);
                        let s = this.#u.build(this, t);
                        return s.isStaleByTime((0, r.d2)(t.staleTime, s)) ? s.fetch(t) : Promise.resolve(s.state.data)
                    }
                    prefetchQuery(e) {
                        return this.fetchQuery(e).then(r.lQ).catch(r.lQ)
                    }
                    fetchInfiniteQuery(e) {
                        return e.behavior = g(e.pages), this.fetchQuery(e)
                    }
                    prefetchInfiniteQuery(e) {
                        return this.fetchInfiniteQuery(e).then(r.lQ).catch(r.lQ)
                    }
                    ensureInfiniteQueryData(e) {
                        return e.behavior = g(e.pages), this.ensureQueryData(e)
                    }
                    resumePausedMutations() {
                        return y.t.isOnline() ? this.#s.resumePausedMutations() : Promise.resolve()
                    }
                    getQueryCache() {
                        return this.#u
                    }
                    getMutationCache() {
                        return this.#s
                    }
                    getDefaultOptions() {
                        return this.#l
                    }
                    setDefaultOptions(e) {
                        this.#l = e
                    }
                    setQueryDefaults(e, t) {
                        this.#h.set((0, r.EN)(e), {
                            queryKey: e,
                            defaultOptions: t
                        })
                    }
                    getQueryDefaults(e) {
                        let t = [...this.#h.values()],
                            s = {};
                        return t.forEach(t => {
                            (0, r.Cp)(e, t.queryKey) && Object.assign(s, t.defaultOptions)
                        }), s
                    }
                    setMutationDefaults(e, t) {
                        this.#c.set((0, r.EN)(e), {
                            mutationKey: e,
                            defaultOptions: t
                        })
                    }
                    getMutationDefaults(e) {
                        let t = [...this.#c.values()],
                            s = {};
                        return t.forEach(t => {
                            (0, r.Cp)(e, t.mutationKey) && Object.assign(s, t.defaultOptions)
                        }), s
                    }
                    defaultQueryOptions(e) {
                        if (e._defaulted) return e;
                        let t = { ...this.#l.queries,
                            ...this.getQueryDefaults(e.queryKey),
                            ...e,
                            _defaulted: !0
                        };
                        return t.queryHash || (t.queryHash = (0, r.F$)(t.queryKey, t)), void 0 === t.refetchOnReconnect && (t.refetchOnReconnect = "always" !== t.networkMode), void 0 === t.throwOnError && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.queryFn === r.hT && (t.enabled = !1), t
                    }
                    defaultMutationOptions(e) {
                        return e ? ._defaulted ? e : { ...this.#l.mutations,
                            ...e ? .mutationKey && this.getMutationDefaults(e.mutationKey),
                            ...e,
                            _defaulted : !0
                        }
                    }
                    clear() {
                        this.#u.clear(), this.#s.clear()
                    }
                },
                x = s(6715);
            let w = new b,
                C = e => {
                    let {
                        children: t
                    } = e;
                    return (0, i.jsx)(x.Ht, {
                        client: w,
                        children: t
                    })
                };

            function q(e) {
                let {
                    children: t
                } = e;
                return (0, i.jsx)(a.N, {
                    attribute: "class",
                    defaultTheme: "light",
                    enableSystem: !0,
                    disableTransitionOnChange: !0,
                    children: (0, i.jsx)(C, {
                        children: t
                    })
                })
            }
        },
        9324: () => {}
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, [533, 669, 874, 441, 684, 358], () => t(5540)), _N_E = e.O()
    }
]);