(function(h, u, j) {
	h.fn.colorPickerAlp = function(H) {
		var G = {
			base: this,
			target: this,
			baseattr: "background-color",
			targetattr: "background-color",
			col1: ["#FCC02E", "#FED835", "#FFEB3C", "#FFF176", "#FFF59C", "origin"],
			col2: ["#F67C01", "#FB8C00", "#FFA727", "#FFB74E", "#FFCC80", "#FFFFFF"],
			col3: ["#E64A19", "#F5511E", "#FE5722", "#FF8A66", "#FFAB91", "#DEDEDE"],
			col4: ["#D81B43", "#EB1D4E", "#EB4165", "#F1627E", "#FB879E", "#A9A9A9"],
			col5: ["#8E24AA", "#9C28B1", "#AA47BC", "#B968C7", "#CF93D9", "#4B4B4B"],
			col6: ["#512DA7", "#5D35B0", "#673BB7", "#7986CC", "#9EA8DB", "#353535"],
			col7: ["#1F87E8", "#2097F3", "#42A5F6", "#64B5F6", "#90CAF8", "#212121"],
			col8: ["#008781", "#029688", "#26A59A", "#80CBC4", "#B2DFDC", "#000000"],
			col9: ["#05A045", "#4CB050", "#83C683", "#A5D6A7", "#C8E6CA", "advance"],
			advance: true,
			showInTop: false,
			appendToWeb: false,
			showStatus: 0,
			onShowStatus: h.noop,
			onchange: h.noop,
			inputHexStatus: h.noop,
			top: 0,
			left: 0,
			moduleId: 0,
			_top: 0,
			_left: 0,
			hideAfterSet: false,
			__top: 0,
			__left: 0,
			noAlpha: false,
			_onclick: h.noop
		};
		H = h.extend({}, G, H);
		if(H.showInTop) {
			H.$$ = Fai.top.$
		} else {
			H.$$ = h
		}
		H.base.bind("click", z(H))
	};

	function z(J) {
		var I = J.$$,
			N = window.event || I.event;
		if(N.stopPropagation) {
			N.stopPropagation()
		} else {
			if(window.event) {
				window.event.cancelBubble = true
			}
		}
		I(".J_faiColorPickerAlp").remove();
		I(".J_advanceColorPicker").remove();
		var L = (function() {
			var R = (function() {
					var S = [],
						T;
					for(T = 1; T < 10; T++) {
						S.push(J["col" + T])
					}
					return S
				})(),
				Q = J.advance,
				O = F(),
				P = J.target.css(J.targetattr) || "transparent";
			return D(R, Q, O, P, J.noAlpha)
		})();
		I(J.appendToWeb ? "#web" : "body").append(L);
		var H = {
			top: "",
			left: "",
			width: "225px",
			"z-index": 9999
		};
		h.extend(H, E(J));
		var G = F().length > 0 ? "235" : "190";
		G = J.noAlpha ? G - 35 : G;
		G = G + "px";
		I(".J_faiColorPickerAlp").css(H).show().animate({
			height: G
		});
		I(".J_faiColorPickerAlp").click(function(O) {
			O.stopPropagation()
		});
		I(".J_faiColorPickerAlp").find("#faiColorPicker-hidden").focus();
		var M = "",
			K = navigator.userAgent.toLowerCase();
		if(/msie/.test(K)) {
			M = "-ms-"
		} else {
			if(/chrome/.test(K) || /safari/.test(K) || /yandex/.test(K)) {
				M = "-webkit-"
			} else {
				if(/mozilla/.test(K)) {
					M = "-moz-"
				} else {
					if(/opera/.test(K)) {
						M = "-o-"
					} else {
						if(/konqueror/.test(K)) {
							M = "-khtml-"
						} else {
							M = ""
						}
					}
				}
			}
		}
		I(".J_faiColorPickerAlp").css(M + "user-select", "none").addClass("unselectable").attr("unselectable", "on").on("selectstart mousedown", false);
		J.showStatus = 1;
		e(J)
	}

	function D(M, L, H, K, J) {
		var I = [],
			G = Math.floor(Math.random() * 1000);
		I.push('<div class="J_faiColorPickerAlp fk-colorPickerAlp" id="faiColorPicker' + G + '">');
		(function() {
			var O, N, P;
			I.push('<div class="fk-colorPicker-colorcol J_colorPicker_colorcol">');
			for(O = 0; O < M.length; O++) {
				I.push('<div class="col">');
				for(N = 0, P = M[O]; N < P.length; N++) {
					if(P[N] == "origin") {
						I.push('<div class="J_original_clear f-original-clear" title="透明颜色"></div>')
					} else {
						if(L && P[N] == "advance") {
							I.push('<div class="J_coloradvance_btn f-coloradvance-btn"></div>')
						} else {
							I.push('<div class="col-color J_colorPicker_normal">');
							I.push('<div style="background-color:' + P[N] + '"></div>');
							I.push("</div>")
						}
					}
				}
				I.push("</div>")
			}
			I.push("</div>")
		})();
		(function() {
			var N = H.length,
				O;
			if(N != 0) {
				I.push('<div class="fk-colorPicker-recent J_colorPicker_colorcol">');
				for(O = 0; O < N; O++) {
					I.push('<div class="col-color J_colorPicker_normal">');
					I.push('<div style="background-color:' + H[O] + '"></div>');
					I.push("</div>")
				}
				I.push("</div>")
			}
		})();
		if(!J) {
			(function() {
				var N = m(K) ? "linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0))" : ("linear-gradient(to right, " + A(K) + ", rgba(0,0,0,0))"),
					N = N || "linear-gradient(to right, rgb(255, 255, 255), rgba(255, 255, 255, 0))",
					N = (h.browser.msie && h.browser.version == "9.0") ? "filter: progid:DXImageTransform.Microsoft.gradient(GradientType='1', startColorstr='" + q(K) + "', endColorstr='#ffffff')" : "background: " + N;
				alp = p(K), spAlphaHandleLeft = 160 * (1 - alp);
				I.push('<div class="fk-colorPicker-clearcolor">');
				I.push('<div class="f-original-color-bg">');
				I.push('<div class="J_original_color f-original-color" style="background-color:' + K + ';"></div>');
				I.push("</div>");
				I.push('<div class="J_sp_alpha fk-sp-alpha">');
				I.push('<div class="J_sp_alpha_inner fk-sp-alpha-inner" style="' + N + ';">');
				I.push('<div class="J_sp_alpha_handle fk-sp-alpha-handle" style="left: ' + spAlphaHandleLeft + 'px;"></div>');
				I.push("</div>");
				I.push("</div>");
				I.push("</div>")
			})()
		}
		I.push("</div>");
		return I.join("")
	}

	function E(V) {
		var R, L, T = V.$$;
		if(V.showInTop) {
			if(T(".formDialog").offset()) {
				var W = T(".formDialog:last").offset();
				L = V.left + W.left + V.base.offset().left + V.base.width() / 2 - 12;
				R = V.top + W.top + V.base.offset().top + V.base.height() / 2 + 27
			} else {
				L = V.left + V.base.offset().left + V.base.width() / 2 - 12;
				R = V.top + V.base.offset().top + V.base.height() / 2 + 15
			}
		} else {
			if(V.moduleId != 0) {
				L = V.left + V.base.offset().left + V.base.width() / 2 - 12;
				R = V.top + V.base.offset().top + V.base.height() / 2 - 22;
				L = L - 206 - 50;
				var J = (V.appendToWeb || !V.isSystemModule) ? h("#module" + V.moduleId) : h("#" + V.moduleId),
					S = J.width(),
					P = J.height(),
					N = J.offset().top,
					M = h(V.base).parent().width(),
					U = h(V.base).parent().offset().top - (V.appendToWeb ? T("#web").offset().top : 0),
					Q = h(V.base).parent().offset().left,
					O = P + (N - U),
					I = h(window).width(),
					G = h(window).height(),
					K = h(V.base).parent().offset().top + h("#g_main").scrollTop() + 255 - T("#web").height();
				if(250 > Q && (Q + S + 250) <= I) {
					if(V.appendToWeb) {
						R = K > 0 ? (U - K) : U
					} else {
						if(255 + U > G) {
							R = U - (G - 255)
						} else {
							R = U
						}
					}
					var H = 5;
					if(h(V.base).hasClass("border-tool-icon") || h(V.base).hasClass("shadow-tool-icon")) {
						H = 30
					}
					if(S > M) {
						L = Q + S + H
					} else {
						L = Q + M + H
					}
				} else {
					if(250 < Q) {
						if(V.appendToWeb) {
							R = K > 0 ? (U - K) : U
						} else {
							if(255 + U > G) {
								R = G - 255
							} else {
								R = U
							}
						}
						L = Q - 250;
						L += V.__left;
						R += V.__top
					} else {
						if(V.appendToWeb) {
							R = K > 0 ? (U - K) : U
						} else {
							if(255 + U > G) {
								R = G - 255
							} else {
								R = U
							}
						}
						if(S > M) {
							L = Q + (S - 250) / 2
						} else {
							L = Q + (M - 250) / 2
						}
					}
				}
				L = L + Fai.top.$("#g_main").scrollLeft()
			} else {
				L = V.left + V.base.offset().left + V.base.width() / 2 - 12;
				R = V.top + V.base.offset().top + V.base.height() / 2 - 22;
				L = L - 206 - 50;
				if(window === Fai.top) {
					R = R - Fai.top.$("#g_main").offset().top + Fai.top.$("#g_main").scrollTop() + 27 + 10 + 5;
					L = L + Fai.top.$("#g_main").scrollLeft()
				}
			}
		}
		return {
			top: R,
			left: L
		}
	}

	function e(J) {
		var H = J.$$,
			I = H(".J_faiColorPickerAlp"),
			K = J.target.css(J.targetattr) || "transparent";
		J.originalColor = K;
		J.elm = J.target;
		I.off(".cpa").on("click.cpa", ".J_colorPicker_normal", J, t).on("mouseenter.cpa", ".J_colorPicker_normal", J, w).on("mouseleave.cpa", ".J_colorPicker_normal, .J_original_clear", J, n).on("click.cpa", ".J_original_clear", J, x).on("mouseenter.cpa", ".J_original_clear", J, C).on("click.cpa", ".J_coloradvance_btn", J, f).on("touchstart.cpa mousedown.cpa", ".J_sp_alpha", J, a);
		if(J.hideAfterSet) {
			I.on("click.cpa", ".J_colorPicker_normal, .J_original_clear", J, i)
		}
		J.target.siblings(".tool").one("click", i);
		H("body").unbind("click", i).bind("click", {
			$$: H,
			elm: J.target,
			targetattr: J.targetattr,
			onchange: J.onchange,
			showStatus: J.showStatus,
			onShowStatus: J.onShowStatus
		}, i);
		Fai.top.$("body").unbind("click", i).bind("click", {
			$$: H,
			elm: J.target,
			targetattr: J.targetattr,
			onchange: J.onchange,
			showStatus: J.showStatus,
			onShowStatus: J.onShowStatus
		}, i);
		if(J.showInTop) {
			h("body").unbind("click", i).bind("click", {
				$$: H,
				elm: J.target,
				targetattr: J.targetattr,
				onchange: J.onchange
			}, i);
			var G = H(".faiColorPicker");
			G.mouseout(function() {
				G.attr("mouseIn", 0)
			}).mouseover(function() {
				G.attr("mouseIn", 1)
			}).focusout(function() {
				if(G.attr("mouseIn") == 1) {
					G.find("#faiColorPicker-hidden").focus();
					return
				}
				G.remove()
			})
		}
	}

	function t(I) {
		var J = I.data,
			H = J.$$,
			G = H(this).find("div").css("background-color");
		G = q(G);
		b(H, false, G);
		d(H, false, G);
		H(".J_colorPicker_normal").removeClass("current-col-color J_current_col_color");
		h(this).addClass("current-col-color J_current_col_color");
		J.onchange.call(J.elm, G);
		r(G);
		H(".J_faiColorPickerAlp").removeData("originalAlp").removeData("hasReset");
		if(J.noAlpha) {
			J._onclick.call(J.elm);
			H(".J_faiColorPickerAlp").remove()
		}
	}

	function x(H) {
		var I = H.data,
			G = I.$$;
		H.stopPropagation();
		b(G, true);
		G(".J_colorPicker_normal").removeClass("current-col-color J_current_col_color");
		G(".J_faiColorPickerAlp").data("hasReset", true);
		I.onchange.apply(I.elm, ["transparent", "transparent"]);
		if(I.noAlpha) {
			G(".J_faiColorPickerAlp").remove()
		}
	}

	function C(H) {
		var G = H.data.$$;
		b(G, true);
		d(G, true);
		g(G, 1)
	}

	function w(I) {
		var J = I.data,
			H = J.$$,
			G = h(this).find("div").css("background-color");
		b(H, false, G);
		d(H, false, G);
		g(H, 1);
		G = J.noAlpha ? q(G) : G;
		J.onchange.call(J.elm, G)
	}

	function n(L) {
		var N = L.data,
			J = N.$$,
			K = J(".J_faiColorPickerAlp"),
			G = J(".J_current_col_color").find("div").css(N.targetattr),
			M = N.originalColor,
			I = G || M,
			H = K.data("originalAlp") || p(I);
		I = K.data("hasReset") ? "transparent" : I == "transparent" ? "transparent" : y(I, H);
		if(m(I)) {
			b(J, true);
			d(J, true);
			g(J, 1)
		} else {
			b(J, false, I);
			d(J, false, I);
			g(J, H)
		}
		I = N.noAlpha ? q(I) : I;
		L.data.onchange.call(N.elm, I)
	}

	function i(H) {
		H.stopPropagation && H.stopPropagation();
		Fai.top.$("body").unbind("click", i);
		var G = H.data.$$;
		G(".J_faiColorPickerAlp").remove();
		if(typeof H.data.showStatus) {
			return
		}
		H.data.onShowStatus(H.data.showStatus);
		setTimeout(function() {
			H.data.showStatus = 0
		}, 300)
	}

	function f(L) {
		L.stopPropagation();
		var H = L.data.$$,
			G = L.data.elm.css(L.data.targetattr);
		if(!L.data.noAlpha) {
			L.data.inputHexStatus("1", G)
		}
		var M = H(".J_faiColorPickerAlp").offset().top,
			K = H(".J_faiColorPickerAlp").offset().left;
		if(L.data.appendToWeb) {
			M = parseInt(H(".J_faiColorPickerAlp").css("top")), K = parseInt(H(".J_faiColorPickerAlp").css("left"))
		}
		H(".J_faiColorPickerAlp").remove();
		H(".J_advanceColorPicker").remove();
		H(L.data.appendToWeb ? "#web" : "body").append("<div class='J_advanceColorPicker'></div>");
		if(m(G)) {
			G = "FFFFFF"
		} else {
			G = q(G)
		}
		H(".J_advanceColorPicker").faiColorPickerAdven({
			flat: true,
			color: G,
			onHide: function(N) {
				H(".J_advanceColorPicker").hide();
				setTimeout(function() {
					H(".J_advanceColorPicker").remove()
				}, 500);
				return false
			},
			onShow: function(N) {
				return false
			},
			inputHexChange: function(N, O) {
				L.data.inputHexStatus(N, "#" + O)
			},
			onChange: function(N, P, O) {
				L.data.onchange("#" + P);
				r("#" + P);
				L.stopPropagation()
			}
		});
		if(L.data.appendToWeb) {
			H(".J_colorPickerAdven").css({
				top: M,
				left: K,
			})
		} else {
			H(".J_colorPickerAdven").css({
				top: M + L.data._top,
				left: K + L.data._left
			})
		}
		H(".J_advanceColorPicker").data("open", true);
		var J = "",
			I = navigator.userAgent.toLowerCase();
		if(/msie/.test(I)) {
			J = "-ms-"
		} else {
			if(/chrome/.test(I) || /safari/.test(I) || /yandex/.test(I)) {
				J = "-webkit-"
			} else {
				if(/mozilla/.test(I)) {
					J = "-moz-"
				} else {
					if(/opera/.test(I)) {
						J = "-o-"
					} else {
						if(/konqueror/.test(I)) {
							J = "-khtml-"
						} else {
							J = ""
						}
					}
				}
			}
		}
		H(".J_colorpicker_color,.J_colorpicker_brt,.J_colorpicker_hex label").css(J + "user-select", "none").addClass("unselectable").attr("unselectable", "on").on("selectstart mousedown", false);
		H('.J_colorpicker_back').off('click').on('click', function (O) {
			H(".J_advanceColorPicker").remove();
			H(".J_faiColorPickerAlp ").remove();
			var noAlpha = true;
			var options = {
			"base":H('.J_color_bar_icon'),
			"target": H('.J_color_bar_icon'),
			"baseattr": "background-color",
			"targetattr": "background-color",
			"advance": true,
			"showInTop": true,
			"top": -15,
			"left": 15,
			"_top": 0,
			"_left": 2,
			"inputHexStatus": inputHexStatus,
			"onchange": onChange,
			"noAlpha": noAlpha
			};

			function refreshColor(iconColor) {
			if (iconColor == "transparent" && type != 0) {
				alert("颜色不能设置透明")
				return;
			}
			$("input[name=saveColor]").val(iconColor);
			$("#cartBut_list .styleScreen").css("background", iconColor)
			}
			function inputHexStatus(state, color) {
				refreshColor(color);
			}
			function onChange(color) {
				refreshColor(color);
			}
			jQuery.fn.colorPickerAlp(options);
			O.stopPropagation()
		})
	}

	function a(T, H, O, I) {
		var Z = T.data.elm.css(T.data.targetattr);
		if(m(Z)) {
			return
		}
		T.stopPropagation();
		var M = T.data.$$,
			G = M(this),
			T = T,
			W = T.data.onchange,
			L = T.data.elm,
			Y = T.data.targetattr,
			H = H || function() {},
			O = O || function() {},
			I = I || function() {},
			aa = document,
			Q = false,
			J = {},
			R = 0,
			V = 0;
		var X = {};
		X.selectstart = N, X.dragstart = N, X["touchmove mousemove"] = P, X["touchend mouseup"] = S;
		var U = (T.which) ? (T.which == 3) : (T.button == 2);
		var K = M(".J_faiColorPickerAlp");
		if(!U && !Q) {
			if(O.apply(G, arguments) !== false) {
				Q = true;
				R = h(G).height();
				V = h(G).width() - 10;
				J = h(G).offset();
				K.bind(X);
				h(aa.body).addClass("sp-dragging");
				P(T);
				N(T)
			}
		}

		function N(ab) {
			if(ab.stopPropagation) {
				ab.stopPropagation()
			}
			if(ab.preventDefault) {
				ab.preventDefault()
			}
			ab.returnValue = false
		}

		function P(af) {
			if(Q) {
				var ae = af.originalEvent && af.originalEvent.touches && af.originalEvent.touches[0],
					ad = ae && ae.pageX || af.pageX,
					ab = ae && ae.pageY || af.pageY,
					aj = Math.max(0, Math.min(ad - J.left, V)),
					ai = Math.max(0, Math.min(ab - J.top, R));
				G.find(".J_sp_alpha_handle").css({
					left: aj + "px"
				});
				var ag = (160 - G.find(".J_sp_alpha_handle").position().left) / 160;
				ag = ag < 0 ? 0 : ag;
				var ac = K.find(".J_original_color").css("background-color");
				if(h.browser.mozilla) {
					ac = m(ac) ? Z : ac
				}
				ac = y(ac, ag);
				K.find(".J_original_color").css("background-color", ac);
				var ah = T.data.noAlpha ? q(A(ac)) : A(ac);
				W.apply(L, [ah, ac])
			}
		}

		function S() {
			if(Q) {
				h(aa).unbind(X);
				h(aa.body).removeClass("sp-dragging");
				setTimeout(function() {
					I.apply(G, arguments)
				}, 0)
			}
			Q = false;
			var ab = (160 - G.find(".J_sp_alpha_handle").position().left) / 160;
			ab = ab < 0 ? 0 : ab;
			var ac = y(h(".J_original_color").css("background-color"), ab);
			M(".J_faiColorPickerAlp ").data("originalAlp", ab)
		}
	}

	function b(H, I, G) {
		G = I ? "transparent" : G;
		H(".J_original_color").css("background-color", G)
	}

	function d(H, I, G) {
		G = I ? "transparent" : A(G);
		if(h.browser.msie && h.browser.version == "9.0") {
			H(".J_sp_alpha_inner").css("filter", "progid:DXImageTransform.Microsoft.gradient(GradientType='1', startColorstr='" + q(G) + "', endColorstr='#ffffff')")
		} else {
			H(".J_sp_alpha_inner").css("background", "linear-gradient(to right, " + G + ", rgba(0,0,0,0))")
		}
	}

	function g(H, G) {
		H(".J_sp_alpha_handle").css("left", 160 * (1 - G) + "px")
	}
	var o = window.localStorage && window.localStorage.setItem,
		B = window.localStorage && window.localStorage.getItem,
		l = function() {},
		c = function() {};
	if(B) {
		l = function(G) {
			return window.localStorage.getItem(G)
		}
	}
	if(o) {
		c = function(G, H) {
			return window.localStorage.setItem(G, H)
		}
	}

	function F() {
		if(l("faiColorPickerAlp") == null) {
			return ""
		} else {
			var G = JSON.parse(l("faiColorPickerAlp"));
			return G
		}
	}

	function r(G) {
		if(l("faiColorPickerAlp") == null) {
			var I = new Array(G);
			c("faiColorPickerAlp", JSON.stringify(I))
		} else {
			var I = JSON.parse(l("faiColorPickerAlp"));
			for(var H = 0; H < I.length; H++) {
				if(I[H] == G) {
					return
				}
			}
			if(I.length == 9) {
				I.pop();
				I.unshift(G);
				c("faiColorPickerAlp", JSON.stringify(I))
			} else {
				I.unshift(G);
				c("faiColorPickerAlp", JSON.stringify(I))
			}
		}
	}

	function q(G) {
		if(!G) {
			return ""
		}
		if(/#/g.test(G)) {
			return G
		}
		G = (G.replace(/[rgba\(\)]/g, "")).split(",");
		var J = ["#"];
		for(var H = 0, I; H < 3; H++) {
			I = parseInt(G[H]).toString(16);
			if(I.length === 1) {
				I = "0" + I
			}
			J.push(I)
		}
		return J.join("")
	}

	function v(H) {
		if(/rgb/gi.test(H)) {
			return H
		}
		H = parseInt(H.substring(1), 16);
		var G = ["rgb(", H >> 16, ",", (H & 65280) >> 8, ",", (H & 255), ")"];
		return G.join("")
	}

	function s(I, G) {
		if(/rgba/gi.test(I)) {
			return I
		}
		var G = G || 0;
		I = parseInt(I.substring(1), 16);
		var H = ["rgba(", I >> 16, ",", (I & 65280) >> 8, ",", (I & 255), ",", G, ")"];
		return H.join("")
	}

	function y(H, G) {
		var G = G || 0;
		return s(q(H), G)
	}

	function A(I) {
		if(!I) {
			return ""
		}
		if(/#/g.test(I)) {
			return I
		}
		var H = I.split("(")[1].split(")")[0].split(",");
		var K = H[0],
			J = H[1],
			G = H[2];
		return "rgb(" + K + "," + J + "," + G + ")"
	}

	function m(G) {
		if(!!G && G.replace(/\s/g, "") == "rgba(0,0,0,0)" || G == "transparent") {
			return true
		}
		return false
	}

	function k(G) {
		if(/rgba/gi.test(G)) {
			return true
		}
		return false
	}

	function p(I) {
		if(k(I)) {
			var G = I.split("(")[1].split(")")[0].split(","),
				H = G[3];
			return H
		} else {
			return 1
		}
	}
})(jQuery);
(function(b) {
	var a = function() {
		var X = {},
			c, R = 65,
			y, T = '<div class="J_colorPickerAdven fk-colorPickerAdven"><div class="J_colorpicker_color fk-colorpicker-color"><div><div></div></div></div><div class="J_colorpicker_back fk-colorpicker-back"></div><div class="J_colorpicker_brt fk-colorpicker-brt"><div></div></div><div style="display:none;" class="J_colorpicker_new_color fk-colorpicker-new-color"></div><div style="display:none;" class="J_colorpicker_current_color fk-colorpicker-current-color"></div><div class="J_colorpicker_hex fk-colorpicker-hex"><label>请输入色值#</label><input type="text" maxlength="6" size="6"/></div><div style="display:none;" class="colorpicker_rgb_r colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div style="display:none;" class="colorpicker_rgb_g colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div style="display:none;" class="colorpicker_rgb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div style="display:none;" class="colorpicker_hsb_h colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div style="display:none;" class="colorpicker_hsb_s colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div style="display:none;" class="colorpicker_hsb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="J_colorpicker_submit"></div></div>',
			F = {
				eventName: "click",
				onShow: function() {},
				onBeforeShow: function() {},
				onHide: function() {},
				onChange: function() {},
				onSubmit: function() {},
				inputHexFocus: function() {},
				inputHexChange: function() {},
				inputHexBlur: function() {},
				color: "ff0000",
				livePreview: true,
				flat: false
			},
			N = function(Y, aa) {
				var Z = m(Y);
				b(aa).data("colorpicker").fields.eq(1).val(Z.r).end().eq(2).val(Z.g).end().eq(3).val(Z.b).end()
			},
			z = function(Y, Z) {
				b(Z).data("colorpicker").fields.eq(4).val(Y.h).end().eq(5).val(Y.s).end().eq(6).val(Y.b).end()
			},
			h = function(Y, Z) {
				b(Z).data("colorpicker").fields.eq(0).val(W(Y)).end()
			},
			o = function(Y, Z) {
				b(Z).data("colorpicker").fields.eq(0).val((Y.indexOf("#") > -1) ? Y.substring(1) : Y).end()
			},
			p = function(Z, aa) {
				var Y = n(Z);
				b(aa).data("colorpicker").selectorIndic.css({
					left: Y.left,
					top: Y.top
				})
			},
			r = function(Y, Z) {
				b(Z).data("colorpicker").brt.parent().css("backgroundColor", "#" + W({
					h: Y.h,
					s: Y.s,
					b: 100
				}));
				b(Z).data("colorpicker").brt.css("left", parseInt(173 - 164 * Y.b / 100, 10))
			},
			k = function(Y, Z) {
				b(Z).data("colorpicker").currentColor.css("backgroundColor", "#" + W(Y))
			},
			J = function(Y, Z) {
				b(Z).data("colorpicker").newColor.css("backgroundColor", "#" + W(Y))
			},
			t = function(Y) {
				Y.stopPropagation()
			},
			q = function(ac) {
				ac.stopPropagation();
				var ae = ac.charCode || ac.keyCode || -1;
				if(ae == 17) {
					return
				}
				if((ae < 48 || ae > 57) && (ae < 65 || ae > 70) && (ae < 96 || ae > 105) && ae != 8) {
					b(this).val(this.value.replace(/[^0-9^a-f^A-F]/g, ""))
				}
				var ad = b(this).parent().parent(),
					aa;
				var ab = "";
				if(ad.data("colorpicker").livePreview === true) {
					var Y = s(C(this.value));
					var Z = d(C(this.value));
					ad.data("colorpicker").fields.eq(1).val(Z.r).end().eq(2).val(Z.g).end().eq(3).val(Z.b).end().eq(4).val(Y.h).end().eq(5).val(Y.s).end().eq(6).val(Y.b);
					if(this.parentNode.className.indexOf("_hex") > 0) {
						ab = C(this.value);
						ad.data("colorpicker").color = aa = s(C(this.value))
					} else {
						if(this.parentNode.className.indexOf("_hsb") > 0) {
							ad.data("colorpicker").color = aa = g({
								h: parseInt(ad.data("colorpicker").fields.eq(4).val(), 10),
								s: parseInt(ad.data("colorpicker").fields.eq(5).val(), 10),
								b: parseInt(ad.data("colorpicker").fields.eq(6).val(), 10)
							})
						} else {
							ad.data("colorpicker").color = aa = l(P({
								r: parseInt(ad.data("colorpicker").fields.eq(1).val(), 10),
								g: parseInt(ad.data("colorpicker").fields.eq(2).val(), 10),
								b: parseInt(ad.data("colorpicker").fields.eq(3).val(), 10)
							}))
						}
					}
					if(ac && !ab) {
						N(aa, ad.get(0));
						h(aa, ad.get(0));
						z(aa, ad.get(0))
					}
					p(aa, ad.get(0));
					r(aa, ad.get(0));
					J(aa, ad.get(0));
					ab = ab ? ab : W(aa);
					ad.data("colorpicker").inputHexChange.apply(ad, ["2", ab])
				}
			},
			f = function(aa) {
				var ab = b(this).parent().parent(),
					Y;
				var Z = "";
				if(this.parentNode.className.indexOf("_hex") > 0) {
					Z = C(this.value);
					ab.data("colorpicker").color = Y = s(C(this.value))
				} else {
					if(this.parentNode.className.indexOf("_hsb") > 0) {
						ab.data("colorpicker").color = Y = g({
							h: parseInt(ab.data("colorpicker").fields.eq(4).val(), 10),
							s: parseInt(ab.data("colorpicker").fields.eq(5).val(), 10),
							b: parseInt(ab.data("colorpicker").fields.eq(6).val(), 10)
						})
					} else {
						ab.data("colorpicker").color = Y = l(P({
							r: parseInt(ab.data("colorpicker").fields.eq(1).val(), 10),
							g: parseInt(ab.data("colorpicker").fields.eq(2).val(), 10),
							b: parseInt(ab.data("colorpicker").fields.eq(3).val(), 10)
						}))
					}
				}
				if(aa && !Z) {
					N(Y, ab.get(0));
					h(Y, ab.get(0));
					z(Y, ab.get(0))
				}
				p(Y, ab.get(0));
				r(Y, ab.get(0));
				J(Y, ab.get(0));
				Z = Z ? Z : W(Y);
				ab.data("colorpicker").onChange.apply(ab, [Y, Z, m(Y)])
			},
			u = function(aa) {
				var ab = b(this).parent().parent(),
					Y;
				ab.data("colorpicker").fields.parent().removeClass("fk-colorpicker-focus");
				var Z = "";
				if(this.parentNode.className.indexOf("_hex") > 0) {
					Z = C(this.value);
					ab.data("colorpicker").color = Y = s(C(this.value))
				} else {
					if(this.parentNode.className.indexOf("_hsb") > 0) {
						ab.data("colorpicker").color = Y = g({
							h: parseInt(ab.data("colorpicker").fields.eq(4).val(), 10),
							s: parseInt(ab.data("colorpicker").fields.eq(5).val(), 10),
							b: parseInt(ab.data("colorpicker").fields.eq(6).val(), 10)
						})
					} else {
						ab.data("colorpicker").color = Y = l(P({
							r: parseInt(ab.data("colorpicker").fields.eq(1).val(), 10),
							g: parseInt(ab.data("colorpicker").fields.eq(2).val(), 10),
							b: parseInt(ab.data("colorpicker").fields.eq(3).val(), 10)
						}))
					}
				}
				ab.data("colorpicker").inputHexBlur.apply(ab, ["3", Z])
			},
			O = function() {
				var aa = b(this).parent().parent(),
					Y;
				var Z = "";
				if(this.parentNode.className.indexOf("_hex") > 0) {
					Z = C(this.value);
					aa.data("colorpicker").color = Y = s(C(this.value))
				} else {
					if(this.parentNode.className.indexOf("_hsb") > 0) {
						aa.data("colorpicker").color = Y = g({
							h: parseInt(aa.data("colorpicker").fields.eq(4).val(), 10),
							s: parseInt(aa.data("colorpicker").fields.eq(5).val(), 10),
							b: parseInt(aa.data("colorpicker").fields.eq(6).val(), 10)
						})
					} else {
						aa.data("colorpicker").color = Y = l(P({
							r: parseInt(aa.data("colorpicker").fields.eq(1).val(), 10),
							g: parseInt(aa.data("colorpicker").fields.eq(2).val(), 10),
							b: parseInt(aa.data("colorpicker").fields.eq(3).val(), 10)
						}))
					}
				}
				aa.data("colorpicker").inputHexFocus.apply(aa, ["1", Z]);
				R = this.parentNode.className.indexOf("_hex") > 0 ? 70 : 65;
				b(this).parent().parent().data("colorpicker").fields.parent().removeClass("fk-colorpicker-focus");
				b(this).parent().addClass("fk-colorpicker-focus")
			},
			M = function(Y) {
				var aa = b(this).parent().find("input").focus();
				var Z = {
					el: b(this).parent().addClass("colorpicker_slider"),
					max: this.parentNode.className.indexOf("_hsb_h") > 0 ? 360 : (this.parentNode.className.indexOf("_hsb") > 0 ? 100 : 255),
					y: Y.pageY,
					field: aa,
					val: parseInt(aa.val(), 10),
					preview: b(this).parent().parent().data("colorpicker").livePreview
				};
				b(document).bind("mouseup", Z, x);
				b(document).bind("mousemove", Z, Q)
			},
			Q = function(Y) {
				Y.data.field.val(Math.max(0, Math.min(Y.data.max, parseInt(Y.data.val + Y.pageY - Y.data.y, 10))));
				if(Y.data.preview) {
					f.apply(Y.data.field.get(0), [true])
				}
				return false
			},
			x = function(Y) {
				f.apply(Y.data.field.get(0), [true]);
				Y.data.el.removeClass("colorpicker_slider").find("input").focus();
				b(document).unbind("mouseup", x);
				b(document).unbind("mousemove", Q);
				return false
			},
			i = function(Y) {
				var Z = {
					cal: b(this).parent(),
					x: b(this).offset().left
				};
				Z.preview = Z.cal.data("colorpicker").livePreview;
				Y.data = {
					cal: Z.cal,
					x: Z.x,
					preview: Z.preview
				};
				f.apply(Y.data.cal.data("colorpicker").fields.eq(6).val(parseInt(100 * (173 - Math.max(9, Math.min(173, (Y.pageX - Y.data.x)))) / 164, 0)).get(0), [Y.data.preview]);
				Z.cal.unbind("mouseup.upBrt").bind("mouseup.upBrt", Z, U).unbind("mousemove.moveBrt").bind("mousemove.moveBrt", Z, H)
			},
			H = function(ab) {
				var ac = ab.data.cal,
					Z;
				var aa = "";
				var Y = ab.data.cal.data("colorpicker").fields.eq(6).val(parseInt(100 * (173 - Math.max(9, Math.min(173, (ab.pageX - ab.data.x)))) / 164, 0)).get(0);
				if(Y.parentNode.className.indexOf("_hex") > 0) {
					aa = C(Y.value);
					ac.data("colorpicker").color = Z = s(C(Y.value))
				} else {
					if(Y.parentNode.className.indexOf("_hsb") > 0) {
						ac.data("colorpicker").color = Z = g({
							h: parseInt(ac.data("colorpicker").fields.eq(4).val(), 10),
							s: parseInt(ac.data("colorpicker").fields.eq(5).val(), 10),
							b: parseInt(ac.data("colorpicker").fields.eq(6).val(), 10)
						})
					} else {
						ac.data("colorpicker").color = Z = l(P({
							r: parseInt(ac.data("colorpicker").fields.eq(1).val(), 10),
							g: parseInt(ac.data("colorpicker").fields.eq(2).val(), 10),
							b: parseInt(ac.data("colorpicker").fields.eq(3).val(), 10)
						}))
					}
				}
				if(ab && !aa) {
					N(Z, ac.get(0));
					h(Z, ac.get(0));
					z(Z, ac.get(0))
				}
				p(Z, ac.get(0));
				r(Z, ac.get(0));
				J(Z, ac.get(0));
				f.apply(ac.data("colorpicker").fields.eq(6).val(parseInt(100 * (173 - Math.max(9, Math.min(173, (ab.pageX - ab.data.x)))) / 164, 0)).get(0), [ab.data.preview]);
				return false
			},
			U = function(Y) {
				var Z = Y.data.cal;
				N(Z.data("colorpicker").color, Z.get(0));
				h(Z.data("colorpicker").color, Z.get(0));
				Z.unbind("mouseup.upBrt", U).unbind("mousemove.moveBrt", H);
				f.apply(Z.data("colorpicker").fields.eq(6).val(parseInt(100 * (173 - Math.max(9, Math.min(173, (Y.pageX - Y.data.x)))) / 164, 0)).get(0), [Y.data.preview]);
				return false
			},
			j = function(Z) {
				var Y = Z.pageX - Z.data.pos.left - 91,
					aa = Z.pageY - Z.data.pos.top - 91;
				return Math.sqrt(Y * Y + aa * aa)
			},
			e = function(aa) {
				var Y = aa.pageX - aa.data.pos.left - 91,
					ab = aa.pageY - aa.data.pos.top - 91;
				var Z = Math.round(Math.atan2(ab, Y) * 180 / Math.PI);
				if(ab < 0) {
					Z += 360
				}
				return Z
			},
			B = function(Y) {
				var Z = {
					cal: b(this).parent(),
					pos: b(this).offset()
				};
				Z.preview = Z.cal.data("colorpicker").livePreview;
				Y.data = {
					cal: Z.cal,
					pos: Z.pos,
					preview: Z.preview
				};
				f.apply(Y.data.cal.data("colorpicker").fields.eq(4).val(parseInt(e(Y), 0)).end().eq(5).val(parseInt(100 * j(Y) / 91, 0)).get(0), [Y.data.preview]);
				Z.cal.unbind("mouseup.upSelector").bind("mouseup.upSelector", Z, E).unbind("mousemove.moveSelector").bind("mousemove.moveSelector", Z, w)
			},
			w = function(Y) {
				f.apply(Y.data.cal.data("colorpicker").fields.eq(4).val(parseInt(e(Y), 0)).end().eq(5).val(parseInt(100 * j(Y) / 91, 0)).get(0), [Y.data.preview]);
				return false
			},
			E = function(Y) {
				var Z = Y.data.cal;
				N(Z.data("colorpicker").color, Z.get(0));
				h(Z.data("colorpicker").color, Z.get(0));
				Z.unbind("mouseup.upSelector", E).unbind("mousemove.moveSelector", w);
				return false
			},
			A = function(Y) {
				b(this).addClass("fk-colorpicker-focus")
			},
			V = function(Y) {
				b(this).removeClass("fk-colorpicker-focus")
			},
			v = function(Z) {
				var aa = b(this).parent();
				var Y = aa.data("colorpicker").color;
				aa.data("colorpicker").origColor = Y;
				k(Y, aa.get(0));
				aa.data("colorpicker").onSubmit(Y, W(Y), m(Y), aa.data("colorpicker").el)
			},
			I = function(Y) {
				var ac = b("#" + b(this).data("colorpickerId"));
				ac.data("colorpicker").onBeforeShow.apply(this, [ac.get(0)]);
				var ad = b(this).offset();
				var ab = D();
				var aa = ad.top + this.offsetHeight;
				var Z = ad.left;
				if(aa + 176 > ab.t + ab.h) {
					aa -= this.offsetHeight + 176
				}
				if(Z + 356 > ab.l + ab.w) {
					Z -= 356
				}
				ac.css({
					left: Z + "px",
					top: aa + "px"
				});
				if(ac.data("colorpicker").onShow.apply(this, [ac.get(0)]) != false) {
					ac.show()
				}
				b(document).unbind("mousedown.calHide").bind("mousedown.calHide", {
					cal: ac
				}, S);
				return false
			},
			S = function(Y) {
				if(!L(Y.data.cal.get(0), Y.target, Y.data.cal.get(0))) {
					if(Y.data.cal.data("colorpicker") && Y.data.cal.data("colorpicker").onHide.apply(this, [Y.data.cal.get(0)]) != false) {
						Y.data.cal.hide()
					}
					b(document).unbind("mousedown.calHide")
				}
			},
			L = function(aa, Z, Y) {
				if(aa == Z) {
					return true
				}
				if(aa.contains) {
					return aa.contains(Z)
				}
				if(aa.compareDocumentPosition) {
					return !!(aa.compareDocumentPosition(Z) & 16)
				}
				var ab = Z.parentNode;
				while(ab && ab != Y) {
					if(ab == aa) {
						return true
					}
					ab = ab.parentNode
				}
				return false
			},
			D = function() {
				var Y = document.compatMode == "CSS1Compat";
				return {
					l: window.pageXOffset || (Y ? document.documentElement.scrollLeft : document.body.scrollLeft),
					t: window.pageYOffset || (Y ? document.documentElement.scrollTop : document.body.scrollTop),
					w: window.innerWidth || (Y ? document.documentElement.clientWidth : document.body.clientWidth),
					h: window.innerHeight || (Y ? document.documentElement.clientHeight : document.body.clientHeight)
				}
			},
			g = function(Y) {
				return {
					h: Math.min(360, Math.max(0, Y.h)),
					s: Math.min(100, Math.max(0, Y.s)),
					b: Math.min(100, Math.max(0, Y.b))
				}
			},
			P = function(Y) {
				return {
					r: Math.min(255, Math.max(0, Y.r)),
					g: Math.min(255, Math.max(0, Y.g)),
					b: Math.min(255, Math.max(0, Y.b))
				}
			},
			C = function(aa) {
				var Y = 6 - aa.length;
				if(Y > 0) {
					var ab = [];
					for(var Z = 0; Z < Y; Z++) {
						ab.push("0")
					}
					ab.push(aa);
					aa = ab.join("")
				}
				return aa
			},
			d = function(Y) {
				var Y = parseInt(((Y.indexOf("#") > -1) ? Y.substring(1) : Y), 16);
				return {
					r: Y >> 16,
					g: (Y & 65280) >> 8,
					b: (Y & 255)
				}
			},
			s = function(Y) {
				return l(d(Y))
			},
			l = function(aa) {
				var Z = {
					h: 0,
					s: 0,
					b: 0
				};
				var ab = Math.min(aa.r, aa.g, aa.b);
				var Y = Math.max(aa.r, aa.g, aa.b);
				var ac = Y - ab;
				Z.b = Y;
				if(Y != 0) {}
				Z.s = Y != 0 ? 255 * ac / Y : 0;
				if(Z.s != 0) {
					if(aa.r == Y) {
						Z.h = (aa.g - aa.b) / ac
					} else {
						if(aa.g == Y) {
							Z.h = 2 + (aa.b - aa.r) / ac
						} else {
							Z.h = 4 + (aa.r - aa.g) / ac
						}
					}
				} else {
					Z.h = -1
				}
				Z.h *= 60;
				if(Z.h < 0) {
					Z.h += 360
				}
				Z.s *= 100 / 255;
				Z.b *= 100 / 255;
				return Z
			},
			m = function(Y) {
				var aa = {};
				var ae = Math.round(Y.h);
				var ad = Math.round(Y.s * 255 / 100);
				var Z = Math.round(Y.b * 255 / 100);
				if(ad == 0) {
					aa.r = aa.g = aa.b = Z
				} else {
					var af = Z;
					var ac = (255 - ad) * Z / 255;
					var ab = (af - ac) * (ae % 60) / 60;
					if(ae == 360) {
						ae = 0
					}
					if(ae < 60) {
						aa.r = af;
						aa.b = ac;
						aa.g = ac + ab
					} else {
						if(ae < 120) {
							aa.g = af;
							aa.b = ac;
							aa.r = af - ab
						} else {
							if(ae < 180) {
								aa.g = af;
								aa.r = ac;
								aa.b = ac + ab
							} else {
								if(ae < 240) {
									aa.b = af;
									aa.r = ac;
									aa.g = af - ab
								} else {
									if(ae < 300) {
										aa.b = af;
										aa.g = ac;
										aa.r = ac + ab
									} else {
										if(ae < 360) {
											aa.r = af;
											aa.g = ac;
											aa.b = af - ab
										} else {
											aa.r = 0;
											aa.g = 0;
											aa.b = 0
										}
									}
								}
							}
						}
					}
				}
				return {
					r: Math.round(aa.r),
					g: Math.round(aa.g),
					b: Math.round(aa.b)
				}
			},
			G = function(Y) {
				var Z = [Y.r.toString(16), Y.g.toString(16), Y.b.toString(16)];
				b.each(Z, function(aa, ab) {
					if(ab.length == 1) {
						Z[aa] = "0" + ab
					}
				});
				return Z.join("")
			},
			W = function(Y) {
				return G(m(Y))
			},
			n = function(aa) {
				var Z = {};
				var ac = (2 * Math.PI / 360) * aa.h,
					ab = aa.s;
				if(ab > 83) {
					ab = 83
				}
				var ad = Math.sin(ac) * ab + 91,
					Y = Math.cos(ac) * ab + 91;
				Z.left = Y;
				Z.top = ad;
				return Z
			},
			K = function() {
				var Z = b(this).parent();
				var Y = Z.data("colorpicker").origColor;
				Z.data("colorpicker").color = Y;
				N(Y, Z.get(0));
				h(Y, Z.get(0));
				z(Y, Z.get(0));
				p(Y, Z.get(0));
				r(Y, Z.get(0));
				J(Y, Z.get(0))
			};
		return {
			init: function(Y) {
				var Z = "";
				Y = b.extend({}, F, Y || {});
				if(typeof Y.color == "string") {
					Z = Y.color;
					Y.color = s(Y.color)
				} else {
					if(Y.color.r != undefined && Y.color.g != undefined && Y.color.b != undefined) {
						Y.color = l(Y.color)
					} else {
						if(Y.color.h != undefined && Y.color.s != undefined && Y.color.b != undefined) {
							Y.color = g(Y.color)
						} else {
							return this
						}
					}
				}
				return this.each(function() {
					
					var getAllPopupWindow = function() {
						var b = $(".popupWindowIframe");
						var a = [];
						$.each(b, function(d, c) {
							c = $(c);
							c.prop("contentWindow").document && a.push(c.prop("contentWindow").document)
						});
						return a
					};
					
					if(!b(this).data("colorpickerId")) {
						var aa = b.extend({}, Y);
						aa.origColor = Y.color;
						var ac = "collorpicker_" + parseInt(Math.random() * 1000);
						b(this).data("colorpickerId", ac);
						var ab = b(T).attr("id", ac);
						if(aa.flat) {
							ab.appendTo(this).show();
							b(document).unbind("mousedown.calHide").bind("mousedown.calHide", {
								cal: ab
							}, S);
							b.each(getAllPopupWindow, function(ad, ae) {
								b(ae).length && b(ae).unbind("mousedown.calHide").bind("mousedown.calHide", {
									cal: ab
								}, S)
							})
						} else {
							ab.appendTo(document.body)
						}
						aa.fields = ab.find("input").bind("keyup", q).bind("change", f).bind("blur", u).bind("focus", O).bind("keydown", t);
						ab.find("span").bind("mousedown", M).end().find(">div.J_colorpicker_current_color").bind("click", K);
						aa.selector = ab.find("div.J_colorpicker_color").unbind("mousedown.downSelector", B).bind("mousedown.downSelector", B);
						ab.find("div.J_colorpicker_color").on("click", function(ad) {
							ad.stopPropagation()
						});
						ab.on("mousedown click mouseup mouseout mouseover mouseenter mouseleave", function(ad) {
							ad.stopPropagation()
						});
						aa.selectorIndic = aa.selector.find("div div");
						aa.el = this;
						aa.brt = ab.find("div.J_colorpicker_brt div");
						ab.find("div.J_colorpicker_brt").unbind("mousedown.downBrt").bind("mousedown.downBrt", i);
						aa.newColor = ab.find("div.J_colorpicker_new_color");
						aa.currentColor = ab.find("div.J_colorpicker_current_color");
						ab.data("colorpicker", aa);
						ab.find("div.J_colorpicker_submit").bind("mouseenter", A).bind("mouseleave", V).bind("click", v);
						N(aa.color, ab.get(0));
						z(aa.color, ab.get(0));
						Z ? o(Z, ab.get(0)) : h(aa.color, ab.get(0));
						r(aa.color, ab.get(0));
						p(aa.color, ab.get(0));
						k(aa.color, ab.get(0));
						J(aa.color, ab.get(0));
						if(aa.flat) {
							ab.css({
								display: "block"
							})
						} else {
							b(this).bind(aa.eventName, I)
						}
					}
				})
			},
			showPicker: function() {
				return this.each(function() {
					if(b(this).data("colorpickerId")) {
						I.apply(this)
					}
				})
			},
			hidePicker: function() {
				return this.each(function() {
					if(b(this).data("colorpickerId")) {
						b("#" + b(this).data("colorpickerId")).hide()
					}
				})
			},
			setColor: function(Y) {
				var Z = "";
				if(typeof Y == "string") {
					Z = Y;
					Y = s(Y)
				} else {
					if(Y.r != undefined && Y.g != undefined && Y.b != undefined) {
						Y = l(Y)
					} else {
						if(Y.h != undefined && Y.s != undefined && Y.b != undefined) {
							Y = g(Y)
						} else {
							return this
						}
					}
				}
				return this.each(function() {
					if(b(this).data("colorpickerId")) {
						var aa = b("#" + b(this).data("colorpickerId"));
						aa.data("colorpicker").color = Y;
						aa.data("colorpicker").origColor = Y;
						N(Y, aa.get(0));
						z(Y, aa.get(0));
						Z ? o(Z, aa.get(0)) : h(options.color, aa.get(0));
						r(Y, aa.get(0));
						p(Y, aa.get(0));
						k(Y, aa.get(0));
						J(Y, aa.get(0))
					}
				})
			}
		}
	}();
	b.fn.extend({
		faiColorPickerAdven: a.init,
		faiColorPickerAdvenHide: a.hidePicker,
		faiColorPickerAdvenShow: a.showPicker,
		faiColorPickerAdvenSetColor: a.setColor
	})
})(jQuery);