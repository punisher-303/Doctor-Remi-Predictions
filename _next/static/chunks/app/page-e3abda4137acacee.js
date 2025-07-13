(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [974], {
        2984: (e, t, a) => {
            Promise.resolve().then(a.bind(a, 9889))
        },
        3676: (e, t, a) => {
            "use strict";
            a.d(t, {
                Y: () => i
            });
            let i = async e => {
                let t, a;
                if ("imdb_id" === e.variant) {
                    if (!(t = await fetch("https://api.themoviedb.org/3/find/".concat(e.id, "?external_source=imdb_id"), {
                            headers: {
                                Authorization: "Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzQ2ODgyOWNmMDYyODBhYjAyY2JlZTc2Y2M3ZTMzZiIsIm5iZiI6MS43NDYxNzEzNTI3MTUwMDAyZSs5LCJzdWIiOiI2ODE0NzVkOGE5Mjk3OGFmYzQ4YzdjYmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.h4sauAH76A5txdRdbDjjjM06vL2uiRKr4Ivh4RjnLLI")
                            }
                        })).ok) throw Error("Failed to fetch series info");
                    return await t.json()
                }
                let i = "movie" === e.type ? "https://api.themoviedb.org/3/movie/".concat(e.id, "?language=en-US") : "https://api.themoviedb.org/3/tv/".concat(e.id, "?language=en-US");
                if (!(t = await fetch(i, {
                        method: "GET",
                        headers: {
                            accept: "application/json",
                            Authorization: "Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzQ2ODgyOWNmMDYyODBhYjAyY2JlZTc2Y2M3ZTMzZiIsIm5iZiI6MS43NDYxNzEzNTI3MTUwMDAyZSs5LCJzdWIiOiI2ODE0NzVkOGE5Mjk3OGFmYzQ4YzdjYmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.h4sauAH76A5txdRdbDjjjM06vL2uiRKr4Ivh4RjnLLI")
                        }
                    })).ok) throw Error("Failed to fetch series info");
                if (a = await t.json(), "movie" === e.type) {
                    var s;
                    return {
                        id: a.id,
                        name: a.title,
                        original_name: a.original_title,
                        overview: a.overview,
                        poster_path: a.poster_path,
                        backdrop_path: a.backdrop_path,
                        vote_average: a.vote_average,
                        vote_count: a.vote_count,
                        first_air_date: a.release_date,
                        last_air_date: a.release_date,
                        number_of_seasons: 1,
                        number_of_episodes: 1,
                        status: a.status,
                        type: "movie",
                        genres: a.genres,
                        networks: (null == (s = a.production_companies) ? void 0 : s.map(e => ({
                            id: e.id,
                            name: e.name,
                            logo_path: e.logo_path,
                            origin_country: e.origin_country
                        }))) || [],
                        seasons: [{
                            id: a.id,
                            name: "Movie",
                            overview: a.overview,
                            poster_path: a.poster_path,
                            season_number: 1,
                            episode_count: 1,
                            air_date: a.release_date,
                            vote_average: a.vote_average
                        }]
                    }
                }
                return a
            }
        },
        3999: (e, t, a) => {
            "use strict";
            a.d(t, {
                cn: () => r
            });
            var i = a(2596),
                s = a(9688);

            function r() {
                for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                return (0, s.QP)((0, i.$)(t))
            }
        },
        4927: (e, t, a) => {
            "use strict";
            a.d(t, {
                U: () => u
            });
            var i = a(5155),
                s = a(1362),
                r = a(3509),
                l = a(2098),
                n = a(2115),
                o = a(3999),
                d = a(6997),
                c = a(5084);
            let u = e => {
                let {
                    className: t
                } = e, {
                    setTheme: a,
                    theme: u
                } = (0, s.D)(), [m, x] = (0, n.useState)(!1);
                if ((0, n.useEffect)(() => {
                        x(!0)
                    }, []), !m) return null;
                let p = "dark" === u;
                return (0, i.jsxs)(d.P.button, {
                    type: "button",
                    "aria-label": "Switch to ".concat(p ? "light" : "dark", " mode"),
                    onClick: () => a(p ? "light" : "dark"),
                    className: (0, o.cn)("relative h-8 w-16 rounded-full p-1 outline-none focus-visible:ring-2 focus-visible:ring-offset-2", p ? "bg-zinc-700 focus-visible:ring-zinc-500" : "bg-amber-100 focus-visible:ring-amber-500", "transition-colors duration-300", t),
                    children: [(0, i.jsx)("div", {
                        className: (0, o.cn)("absolute inset-0 rounded-full transition-colors duration-300", p ? "bg-gradient-to-r from-zinc-800 to-zinc-700" : "bg-gradient-to-r from-amber-200 to-amber-100")
                    }), (0, i.jsxs)(d.P.div, {
                        className: (0, o.cn)("relative z-10 h-6 w-6 rounded-full shadow-md", "flex items-center justify-center", p ? "bg-zinc-900" : "bg-amber-400"),
                        animate: {
                            x: 32 * !!p,
                            backgroundColor: p ? "#18181b" : "#fbbf24",
                            transition: {
                                duration: .3,
                                ease: "easeInOut"
                            }
                        },
                        children: [(0, i.jsx)(c.N, {
                            mode: "wait",
                            children: p ? (0, i.jsx)(d.P.div, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                exit: {
                                    opacity: 0
                                },
                                transition: {
                                    duration: .2
                                },
                                className: "absolute inset-0",
                                children: [{
                                    top: "30%",
                                    left: "25%",
                                    size: "2px"
                                }, {
                                    top: "40%",
                                    left: "55%",
                                    size: "3px"
                                }, {
                                    top: "60%",
                                    left: "40%",
                                    size: "2.5px"
                                }].map((e, t) => (0, i.jsx)(d.P.div, {
                                    className: "absolute rounded-full bg-zinc-700",
                                    style: {
                                        top: e.top,
                                        left: e.left,
                                        width: e.size,
                                        height: e.size
                                    },
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: .7
                                    },
                                    exit: {
                                        opacity: 0
                                    },
                                    transition: {
                                        delay: .05 * t,
                                        duration: .2
                                    }
                                }, t))
                            }, "moon-craters") : (0, i.jsx)(d.P.div, {
                                initial: {
                                    opacity: 0,
                                    scale: .5
                                },
                                animate: {
                                    opacity: 1,
                                    scale: 1
                                },
                                exit: {
                                    opacity: 0,
                                    scale: .5
                                },
                                transition: {
                                    duration: .2
                                },
                                className: "absolute",
                                children: [...Array(8)].map((e, t) => (0, i.jsx)(d.P.div, {
                                    className: "absolute bg-amber-500",
                                    style: {
                                        height: "1.5px",
                                        width: "4px",
                                        borderRadius: "1px",
                                        transformOrigin: "10px 0px",
                                        transform: "rotate(".concat(45 * t, "deg) translateX(8px)")
                                    },
                                    initial: {
                                        opacity: 0,
                                        scale: 0
                                    },
                                    animate: {
                                        opacity: 1,
                                        scale: 1
                                    },
                                    exit: {
                                        opacity: 0,
                                        scale: 0
                                    },
                                    transition: {
                                        delay: .05 * t,
                                        duration: .15
                                    }
                                }, t))
                            }, "sun-rays")
                        }), (0, i.jsx)(c.N, {
                            mode: "wait",
                            children: (0, i.jsx)(d.P.div, {
                                initial: {
                                    opacity: 0,
                                    scale: .5,
                                    rotate: p ? -45 : 45
                                },
                                animate: {
                                    opacity: 1,
                                    scale: 1,
                                    rotate: 0
                                },
                                exit: {
                                    opacity: 0,
                                    scale: .5,
                                    rotate: p ? 45 : -45
                                },
                                transition: {
                                    duration: .2
                                },
                                className: "text-white dark:text-zinc-300",
                                children: p ? (0, i.jsx)(r.A, {
                                    className: "h-3.5 w-3.5"
                                }) : (0, i.jsx)(l.A, {
                                    className: "h-3.5 w-3.5"
                                })
                            }, p ? "moon" : "sun")
                        })]
                    }), (0, i.jsx)(c.N, {
                        children: p ? (0, i.jsx)(d.P.div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            transition: {
                                duration: .3
                            },
                            className: "absolute inset-0 overflow-hidden rounded-full",
                            children: [{
                                left: "15%",
                                top: "20%",
                                size: "1px",
                                delay: .1
                            }, {
                                left: "30%",
                                top: "35%",
                                size: "1.5px",
                                delay: .15
                            }, {
                                left: "25%",
                                top: "55%",
                                size: "1px",
                                delay: .2
                            }, {
                                left: "10%",
                                top: "50%",
                                size: "1px",
                                delay: .25
                            }, {
                                left: "50%",
                                top: "15%",
                                size: "1px",
                                delay: .3
                            }, {
                                left: "75%",
                                top: "40%",
                                size: "1px",
                                delay: .35
                            }, {
                                left: "60%",
                                top: "60%",
                                size: "1.5px",
                                delay: .4
                            }].map((e, t) => (0, i.jsx)(d.P.div, {
                                className: "absolute bg-white",
                                style: {
                                    left: e.left,
                                    top: e.top,
                                    width: e.size,
                                    height: e.size,
                                    borderRadius: "50%"
                                },
                                initial: {
                                    opacity: 0,
                                    scale: 0
                                },
                                animate: {
                                    opacity: [0, 1, .5, 1],
                                    scale: 1,
                                    transition: {
                                        opacity: {
                                            repeat: Number.POSITIVE_INFINITY,
                                            repeatType: "reverse",
                                            duration: 2,
                                            delay: e.delay
                                        },
                                        scale: {
                                            duration: .3,
                                            delay: e.delay
                                        }
                                    }
                                },
                                exit: {
                                    opacity: 0,
                                    scale: 0
                                }
                            }, t))
                        }, "stars") : (0, i.jsx)(d.P.div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            transition: {
                                duration: .3
                            },
                            className: "absolute inset-0 overflow-hidden rounded-full",
                            children: [{
                                right: "20%",
                                top: "20%",
                                size: "8px",
                                delay: .1
                            }, {
                                right: "35%",
                                top: "50%",
                                size: "6px",
                                delay: .2
                            }, {
                                right: "10%",
                                top: "40%",
                                size: "5px",
                                delay: .15
                            }].map((e, t) => (0, i.jsx)(d.P.div, {
                                className: "absolute rounded-full bg-white/40",
                                style: {
                                    right: e.right,
                                    top: e.top,
                                    width: e.size,
                                    height: e.size
                                },
                                initial: {
                                    x: -10,
                                    opacity: 0
                                },
                                animate: {
                                    x: 0,
                                    opacity: .7
                                },
                                exit: {
                                    x: -10,
                                    opacity: 0
                                },
                                transition: {
                                    delay: e.delay,
                                    duration: .3
                                }
                            }, t))
                        }, "clouds")
                    })]
                })
            }
        },
        7168: (e, t, a) => {
            "use strict";
            a.d(t, {
                $: () => o
            });
            var i = a(5155);
            a(2115);
            var s = a(9708),
                r = a(2085),
                l = a(3999);
            let n = (0, r.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer", {
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

            function o(e) {
                let {
                    className: t,
                    variant: a,
                    size: r,
                    asChild: o = !1,
                    ...d
                } = e, c = o ? s.DX : "button";
                return (0, i.jsx)(c, {
                    "data-slot": "button",
                    className: (0, l.cn)(n({
                        variant: a,
                        size: r,
                        className: t
                    })),
                    ...d
                })
            }
        },
        9184: (e, t, a) => {
            "use strict";
            a.d(t, {
                v: () => r
            });
            let i = async () => {
                let e = await fetch("https://api.ipify.org?format=json");
                if (!e.ok) throw Error("Failed to fetch IP");
                return (await e.json()).ip
            };
            var s = a(2960);
            let r = () => (0, s.I)({
                queryKey: ["ip"],
                queryFn: i
            })
        },
        9242: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z9: () => d,
                D0: () => c,
                xF: () => o
            });
            var i = a(3464);
            let s = async e => {
                let {
                    limit: t,
                    query: a,
                    user_ip: s,
                    type: r,
                    offset: l
                } = e;
                try {
                    return (await i.A.get("/api/series", {
                        params: {
                            limit: String(t),
                            query: a,
                            user_ip: s,
                            type: r,
                            ..."number" == typeof l && {
                                offset: String(l)
                            }
                        }
                    })).data
                } catch (e) {
                    if (i.A.isAxiosError(e)) {
                        var n, o, d;
                        throw console.error("Axios fetch failed:", (null == (n = e.response) ? void 0 : n.data) || e.message), Error((null == (d = e.response) || null == (o = d.data) ? void 0 : o.error) || "Failed to fetch series: ".concat(e.message))
                    }
                    throw console.error("Unexpected error:", e), Error("An unexpected error occurred while fetching series.")
                }
            };
            var r = a(3676);
            let l = async e => {
                let {
                    imdb_id: t
                } = e, a = await fetch("https://api.t4tsa.cc/get-series/?imdb_id=".concat(t), {
                    headers: {
                        accept: "application/json"
                    }
                });
                if (!a.ok) throw Error("Fetch failed");
                return await a.json()
            };
            var n = a(2960);
            let o = e => (0, n.I)({
                    queryKey: ["series", e],
                    queryFn: () => s(e)
                }),
                d = e => (0, n.I)({
                    queryKey: ["series-info", e],
                    queryFn: () => (0, r.Y)(e)
                }),
                c = e => (0, n.I)({
                    queryKey: ["series-link", e],
                    queryFn: () => l(e)
                })
        },
        9852: (e, t, a) => {
            "use strict";
            a.d(t, {
                p: () => r
            });
            var i = a(5155);
            a(2115);
            var s = a(3999);

            function r(e) {
                let {
                    className: t,
                    type: a,
                    ...r
                } = e;
                return (0, i.jsx)("input", {
                    type: a,
                    "data-slot": "input",
                    className: (0, s.cn)("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", t),
                    ...r
                })
            }
        },
        9889: (e, t, a) => {
            "use strict";
            a.d(t, {
                default: () => L
            });
            var i = a(5155),
                s = a(3109),
                r = a(6997),
                l = a(1362),
                n = a(6766),
                o = a(4927),
                d = a(2115),
                c = a(2177),
                u = a(3999),
                m = a(7073);

            function x(e) {
                let {
                    className: t,
                    ...a
                } = e;
                return (0, i.jsx)(m.b, {
                    "data-slot": "label",
                    className: (0, u.cn)("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", t),
                    ...a
                })
            }
            let p = c.Op,
                h = d.createContext({}),
                b = e => {
                    let { ...t
                    } = e;
                    return (0, i.jsx)(h.Provider, {
                        value: {
                            name: t.name
                        },
                        children: (0, i.jsx)(c.xI, { ...t
                        })
                    })
                },
                g = () => {
                    let e = d.useContext(h),
                        t = d.useContext(v),
                        {
                            getFieldState: a
                        } = (0, c.xW)(),
                        i = (0, c.lN)({
                            name: e.name
                        }),
                        s = a(e.name, i);
                    if (!e) throw Error("useFormField should be used within <FormField>");
                    let {
                        id: r
                    } = t;
                    return {
                        id: r,
                        name: e.name,
                        formItemId: "".concat(r, "-form-item"),
                        formDescriptionId: "".concat(r, "-form-item-description"),
                        formMessageId: "".concat(r, "-form-item-message"),
                        ...s
                    }
                },
                v = d.createContext({});

            function f(e) {
                let {
                    className: t,
                    ...a
                } = e, s = d.useId();
                return (0, i.jsx)(v.Provider, {
                    value: {
                        id: s
                    },
                    children: (0, i.jsx)("div", {
                        "data-slot": "form-item",
                        className: (0, u.cn)("grid gap-2", t),
                        ...a
                    })
                })
            }

            function y(e) {
                let {
                    className: t,
                    ...a
                } = e, {
                    error: s,
                    formItemId: r
                } = g();
                return (0, i.jsx)(x, {
                    "data-slot": "form-label",
                    "data-error": !!s,
                    className: (0, u.cn)("data-[error=true]:text-destructive", t),
                    htmlFor: r,
                    ...a
                })
            }
            var j = a(9852),
                w = a(4732),
                N = a(9428);

            function k(e) {
                let {
                    className: t,
                    ...a
                } = e;
                return (0, i.jsx)(w.bL, {
                    "data-slot": "radio-group",
                    className: (0, u.cn)("grid gap-3", t),
                    ...a
                })
            }

            function _(e) {
                let {
                    className: t,
                    ...a
                } = e;
                return (0, i.jsx)(w.q7, {
                    "data-slot": "radio-group-item",
                    className: (0, u.cn)("border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50", t),
                    ...a,
                    children: (0, i.jsx)(w.C1, {
                        "data-slot": "radio-group-indicator",
                        className: "relative flex items-center justify-center",
                        children: (0, i.jsx)(N.A, {
                            className: "fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2"
                        })
                    })
                })
            }
            var z = a(9184),
                I = a(9242),
                A = a(3311),
                O = a(1066),
                P = a(6618),
                Y = a(7924),
                E = a(4416),
                M = a(5084),
                S = a(6874),
                F = a.n(S),
                C = a(3096),
                D = a(4692),
                T = a(7168);

            function J(e) {
                let {
                    className: t,
                    searchClassName: a
                } = e, s = (0, c.mN)({
                    defaultValues: {
                        query: "",
                        type: "all"
                    }
                }), [l, o] = (0, d.useState)(!1), [m] = (0, D.Q3)(s.watch("query"), 500), x = s.watch("type"), {
                    data: h
                } = (0, z.v)(), [g, v] = (0, d.useState)(8), [w, N] = (0, d.useState)([]);
                (0, d.useEffect)(() => {
                    v(8), N([])
                }, [m, x]);
                let S = m && m.trim().length >= 3 && h,
                    {
                        data: J,
                        isLoading: L,
                        isSuccess: q,
                        error: Z,
                        refetch: V
                    } = (0, I.xF)({
                        limit: S ? g : 0,
                        query: S ? m : "",
                        user_ip: h || "",
                        type: x
                    }),
                    {
                        ref: X,
                        inView: Q
                    } = (0, C.Wx)({
                        threshold: 0,
                        rootMargin: "100px"
                    });
                (0, d.useEffect)(() => {
                    Q && (null == J ? void 0 : J.result) && J.result.length >= g && v(e => e + 8)
                }, [Q, J, g]), (0, d.useEffect)(() => {
                    m && m.trim().length >= 3 ? o(!0) : o(!1)
                }, [m]), (0, d.useEffect)(() => {
                    (null == J ? void 0 : J.result) && Array.isArray(J.result) && N(e => {
                        let t = new Set(e.map(e => e.tmdb_id || e.imdb_id));
                        return [...e, ...J.result.filter(e => !t.has(e.tmdb_id || e.imdb_id))]
                    })
                }, [null == J ? void 0 : J.result]);
                let U = () => {
                        m.trim().length >= 3 && o(!0)
                    },
                    W = [{
                        id: "all",
                        label: "All",
                        icon: A.A
                    }, {
                        id: "movie",
                        label: "Movies",
                        icon: O.A
                    }, {
                        id: "series",
                        label: "TV Shows",
                        icon: P.A
                    }];
                return (0, i.jsx)("div", {
                    className: (0, u.cn)("w-full max-w-4xl mx-auto relative", t),
                    children: (0, i.jsx)(p, { ...s,
                        children: (0, i.jsxs)("div", {
                            className: "w-full space-y-6",
                            children: [(0, i.jsxs)(r.P.div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: .5
                                },
                                className: "space-y-6",
                                children: [(0, i.jsx)(b, {
                                    name: "query",
                                    render: e => {
                                        let {
                                            field: t
                                        } = e;
                                        return (0, i.jsx)(f, {
                                            className: "relative",
                                            children: (0, i.jsxs)("div", {
                                                className: "relative group",
                                                children: [(0, i.jsx)(Y.A, {
                                                    className: "absolute left-4 top-1/2 -translate-y-1/2 text-primary h-5 w-5 group-focus-within:text-primary transition-colors z-50"
                                                }), (0, i.jsx)(j.p, {
                                                    type: "text",
                                                    ...t,
                                                    placeholder: "Search for movies, TV shows, actors...",
                                                    onFocus: U,
                                                    className: (0, u.cn)("pl-12 pr-12 py-4 text-base rounded-2xl border-0 ring-1 ring-slate-200 dark:ring-slate-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all duration-200 placeholder:text-slate-400", a)
                                                }), L && (0, i.jsx)("div", {
                                                    className: "absolute right-4 top-1/2 -translate-y-1/2",
                                                    children: (0, i.jsx)("div", {
                                                        className: "animate-spin rounded-full h-5 w-5 border-2 border-slate-300 border-t-blue-500"
                                                    })
                                                })]
                                            })
                                        })
                                    }
                                }), (0, i.jsx)(b, {
                                    name: "type",
                                    render: e => {
                                        let {
                                            field: t
                                        } = e;
                                        return (0, i.jsx)(f, {
                                            className: "flex flex-col items-center",
                                            children: (0, i.jsx)(k, {
                                                onValueChange: t.onChange,
                                                defaultValue: t.value,
                                                className: "flex flex-wrap gap-3 justify-center",
                                                children: W.map(e => {
                                                    let a = e.icon,
                                                        s = t.value === e.id;
                                                    return (0, i.jsxs)("div", {
                                                        className: "relative",
                                                        children: [(0, i.jsx)(_, {
                                                            value: e.id,
                                                            id: e.id,
                                                            className: "peer sr-only"
                                                        }), (0, i.jsxs)(y, {
                                                            htmlFor: e.id,
                                                            className: (0, u.cn)("flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-800 cursor-pointer transition-all duration-200 hover:bg-slate-50 dark:hover:bg-slate-700", s ? "border-2 border-teal-500 text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/30" : "border-1"),
                                                            children: [(0, i.jsx)(a, {
                                                                className: "w-4 h-4"
                                                            }), (0, i.jsx)("span", {
                                                                className: "text-sm font-medium",
                                                                children: e.label
                                                            })]
                                                        })]
                                                    }, e.id)
                                                })
                                            })
                                        })
                                    }
                                })]
                            }), (0, i.jsx)(M.N, {
                                children: l && m.trim().length >= 3 && (0, i.jsx)(r.P.div, {
                                    initial: {
                                        opacity: 0,
                                        y: 10,
                                        scale: .98
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0,
                                        scale: 1
                                    },
                                    exit: {
                                        opacity: 0,
                                        y: 10,
                                        scale: .98
                                    },
                                    transition: {
                                        duration: .2,
                                        ease: "easeOut"
                                    },
                                    className: "absolute top-full left-0 right-0 mb-2 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200 dark:border-slate-700 rounded-2xl shadow-2xl shadow-slate-900/10 dark:shadow-slate-900/30 !z-50 max-h-[32rem] overflow-hidden",
                                    children: (0, i.jsx)("div", {
                                        className: "overflow-y-auto max-h-[25rem] custom-scrollbar",
                                        children: L && 0 === w.length ? (0, i.jsx)("div", {
                                            className: "flex items-center justify-center py-12",
                                            children: (0, i.jsxs)("div", {
                                                className: "flex items-center gap-3 text-slate-500",
                                                children: [(0, i.jsx)("div", {
                                                    className: "animate-spin rounded-full h-5 w-5 border-2 border-slate-300 border-t-blue-500"
                                                }), (0, i.jsx)("span", {
                                                    className: "text-sm",
                                                    children: "Searching..."
                                                })]
                                            })
                                        }) : Z ? (0, i.jsx)("div", {
                                            className: "flex items-center justify-center py-12",
                                            children: (0, i.jsx)("div", {
                                                className: "text-red-500 text-sm",
                                                children: "Failed to search. Please try again."
                                            })
                                        }) : w.length > 0 ? (0, i.jsxs)("div", {
                                            className: "p-4",
                                            children: [(0, i.jsxs)("div", {
                                                className: "relative",
                                                children: [(0, i.jsxs)("p", {
                                                    className: "text-xs font-medium text-slate-500 dark:text-slate-400 mb-4 px-2",
                                                    children: [w.length, " result", 1 !== w.length ? "s" : "", " found"]
                                                }), (0, i.jsx)(T.$, {
                                                    variant: "ghost",
                                                    onClick: () => {
                                                        setTimeout(() => o(!1), 200)
                                                    },
                                                    className: "absolute -top-2 right-2 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300",
                                                    children: (0, i.jsx)(E.A, {
                                                        className: "w-4 h-4"
                                                    })
                                                })]
                                            }), (0, i.jsx)("div", {
                                                className: "space-y-1",
                                                children: w.map((e, t) => (0, i.jsx)(r.P.div, {
                                                    initial: {
                                                        opacity: 0,
                                                        x: -10
                                                    },
                                                    animate: {
                                                        opacity: 1,
                                                        x: 0
                                                    },
                                                    transition: {
                                                        duration: .2,
                                                        delay: .03 * t
                                                    },
                                                    children: (0, i.jsxs)(F(), {
                                                        href: "/".concat(e.type, "/").concat(e.tmdb_id ? e.tmdb_id : e.imdb_id),
                                                        target: "_self",
                                                        className: "flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer transition-all duration-200 group w-full",
                                                        onClick: () => o(!1),
                                                        children: [(0, i.jsxs)("div", {
                                                            className: "flex-shrink-0 relative",
                                                            children: [e.poster ? (0, i.jsx)(n.default, {
                                                                src: e.poster,
                                                                alt: e.title,
                                                                width: 48,
                                                                height: 64,
                                                                className: "rounded-lg object-cover shadow-sm",
                                                                onError: e => {
                                                                    var t;
                                                                    e.currentTarget.style.display = "none", null == (t = e.currentTarget.nextElementSibling) || t.classList.remove("hidden")
                                                                }
                                                            }) : null, (0, i.jsx)("div", {
                                                                className: "".concat(e.poster ? "hidden" : "flex", " w-12 h-16 bg-slate-100 dark:bg-slate-800 rounded-lg items-center justify-center"),
                                                                children: "movie" === e.type ? (0, i.jsx)(O.A, {
                                                                    className: "h-6 w-6 text-slate-400"
                                                                }) : (0, i.jsx)(P.A, {
                                                                    className: "h-6 w-6 text-slate-400"
                                                                })
                                                            })]
                                                        }), (0, i.jsxs)("div", {
                                                            className: "",
                                                            children: [(0, i.jsx)("div", {
                                                                className: "font-medium text-slate-900 dark:text-white truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors",
                                                                children: e.title
                                                            }), (0, i.jsxs)("div", {
                                                                className: "text-sm text-slate-500 dark:text-slate-400 flex items-center gap-2 mt-1",
                                                                children: [(0, i.jsx)("span", {
                                                                    className: "capitalize font-medium",
                                                                    children: "series" === e.type ? "TV Show" : "Movie"
                                                                }), (0, i.jsx)("span", {
                                                                    className: "w-1 h-1 bg-slate-400 rounded-full"
                                                                }), (0, i.jsx)("span", {
                                                                    children: e.year
                                                                })]
                                                            })]
                                                        })]
                                                    })
                                                }, e.tmdb_id ? e.tmdb_id : e.imdb_id))
                                            }), (null == J ? void 0 : J.result) && J.result.length >= g && (0, i.jsx)("div", {
                                                ref: X,
                                                className: "flex items-center justify-center py-6 border-t border-slate-100 dark:border-slate-800 mt-4",
                                                children: L ? (0, i.jsxs)("div", {
                                                    className: "flex items-center gap-2 text-slate-500",
                                                    children: [(0, i.jsx)("div", {
                                                        className: "animate-spin rounded-full h-3 w-3 border-2 border-slate-300 border-t-blue-500"
                                                    }), (0, i.jsx)("span", {
                                                        className: "text-xs",
                                                        children: "Loading more..."
                                                    })]
                                                }) : (0, i.jsx)("span", {
                                                    className: "text-xs text-slate-400",
                                                    children: "Scroll to load more"
                                                })
                                            }), (null == J ? void 0 : J.result) && J.result.length < g && w.length > 0 && (0, i.jsx)("div", {
                                                className: "flex items-center justify-center py-6 border-t border-slate-100 dark:border-slate-800 mt-4",
                                                children: (0, i.jsx)("span", {
                                                    className: "text-xs text-slate-400",
                                                    children: "End of results"
                                                })
                                            })]
                                        }) : m.trim().length >= 3 && !L ? (0, i.jsxs)("div", {
                                            className: "flex flex-col items-center justify-center py-12",
                                            children: [(0, i.jsx)("div", {
                                                className: "text-slate-500 text-sm mb-2",
                                                children: "No results found"
                                            }), (0, i.jsx)("div", {
                                                className: "text-xs text-slate-400",
                                                children: "Try different keywords"
                                            })]
                                        }) : null
                                    })
                                })
                            })]
                        })
                    })
                })
            }

            function L() {
                let {
                    theme: e
                } = (0, l.D)(), t = {
                    hidden: {
                        opacity: 0,
                        y: 20
                    },
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: .5,
                            ease: "easeOut"
                        }
                    }
                };
                return (0, i.jsxs)("div", {
                    className: "relative min-h-screen w-full overflow-hidden",
                    children: [(0, i.jsxs)("div", {
                        className: "absolute inset-0 w-full h-full",
                        children: [(0, i.jsx)("div", {
                            className: "absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800"
                        }), (0, i.jsx)("div", {
                            className: "absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.05),rgba(0,0,0,0))]"
                        }), (0, i.jsx)(n.default, {
                            src: "/Background Poster.svg",
                            alt: "Background",
                            className: "w-full h-full object-cover opacity-50 dark:opacity-50",
                            width: 1920,
                            height: 1080,
                            priority: !0
                        })]
                    }), (0, i.jsxs)(r.P.header, {
                        initial: {
                            opacity: 0,
                            y: -20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .5,
                            ease: "easeOut"
                        },
                        className: "relative z-50 flex items-center justify-between p-6 lg:p-8",
                        children: [(0, i.jsx)("div", {
                            className: "flex items-center gap-3",
                            children: (0, i.jsx)(n.default, {
                                src: "light" === e ? "/logo-light.svg" : "dark" === e ? "/logo-dark.svg" : "/logo-light.svg",
                                alt: "Logo",
                                className: "h-20 w-auto",
                                width: 400,
                                height: 400
                            })
                        }), (0, i.jsx)(o.U, {})]
                    }), (0, i.jsx)("main", {
                        className: "relative z-50 flex flex-col items-center px-6 mb-96",
                        children: (0, i.jsxs)(r.P.div, {
                            variants: {
                                hidden: {
                                    opacity: 0
                                },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: .15,
                                        delayChildren: .3
                                    }
                                }
                            },
                            initial: "hidden",
                            animate: "visible",
                            className: "max-w-4xl mx-auto text-center space-y-8",
                            children: [(0, i.jsxs)("div", {
                                className: "space-y-6",
                                children: [(0, i.jsx)(r.P.div, {
                                    variants: t,
                                    children: (0, i.jsxs)("div", {
                                        className: "inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/50 rounded-full text-sm font-medium text-blue-700 dark:text-blue-300",
                                        children: [(0, i.jsx)(s.A, {
                                            className: "w-4 h-4"
                                        }), "Largest Collection Available"]
                                    })
                                }), (0, i.jsxs)(r.P.h1, {
                                    variants: t,
                                    className: "text-4xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white",
                                    children: ["Your Ultimate", (0, i.jsx)("span", {
                                        className: "block bg-gradient-to-r from-blue-600 via-teal-600 to-blue-800 bg-clip-text text-transparent",
                                        children: "Movie Library"
                                    })]
                                }), (0, i.jsx)(r.P.p, {
                                    variants: t,
                                    className: "text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed",
                                    children: "Discover thousands of movies and series directly through Telegram. No subscriptions, no limits."
                                })]
                            }), (0, i.jsx)(r.P.div, {
                                variants: t,
                                className: "w-full max-w-3xl mx-auto space-y-4",
                                children: (0, i.jsx)(J, {
                                    className: "w-full",
                                    searchClassName: "h-14 text-base bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-slate-200 dark:border-slate-700 shadow-lg shadow-slate-900/5 dark:shadow-slate-900/20 focus:shadow-xl focus:shadow-slate-900/10 dark:focus:shadow-slate-900/30 transition-all duration-200"
                                })
                            })]
                        })
                    }), (0, i.jsx)("div", {
                        className: "absolute top-1/4 left-10 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse"
                    }), (0, i.jsx)("div", {
                        className: "absolute bottom-1/4 right-10 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse delay-1000"
                    })]
                })
            }
        }
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, [669, 850, 406, 874, 386, 441, 684, 358], () => t(2984)), _N_E = e.O()
    }
]);