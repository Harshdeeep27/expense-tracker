"use strict";

function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// app.jsx - Minimal React UI (no build tool, uses CDN React + Babel)
var _React = React,
  useState = _React.useState,
  useEffect = _React.useEffect;
function App() {
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    users = _useState2[0],
    setUsers = _useState2[1];
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    groups = _useState4[0],
    setGroups = _useState4[1];
  var _useState5 = useState(null),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedGroup = _useState6[0],
    setSelectedGroup = _useState6[1];
  var _useState7 = useState([]),
    _useState8 = _slicedToArray(_useState7, 2),
    expenses = _useState8[0],
    setExpenses = _useState8[1];
  var _useState9 = useState(null),
    _useState0 = _slicedToArray(_useState9, 2),
    balances = _useState0[0],
    setBalances = _useState0[1];
  var _useState1 = useState(false),
    _useState10 = _slicedToArray(_useState1, 2),
    loadingExpenses = _useState10[0],
    setLoadingExpenses = _useState10[1];
  var _useState11 = useState(''),
    _useState12 = _slicedToArray(_useState11, 2),
    expenseError = _useState12[0],
    setExpenseError = _useState12[1];
  var _useState13 = useState(false),
    _useState14 = _slicedToArray(_useState13, 2),
    expenseSubmitting = _useState14[0],
    setExpenseSubmitting = _useState14[1];
  var _useState15 = useState(''),
    _useState16 = _slicedToArray(_useState15, 2),
    settleError = _useState16[0],
    setSettleError = _useState16[1];
  var _useState17 = useState(false),
    _useState18 = _slicedToArray(_useState17, 2),
    settleSubmitting = _useState18[0],
    setSettleSubmitting = _useState18[1];
  var _useState19 = useState(''),
    _useState20 = _slicedToArray(_useState19, 2),
    notifyMessage = _useState20[0],
    setNotifyMessage = _useState20[1];

  // forms
  var _useState21 = useState(''),
    _useState22 = _slicedToArray(_useState21, 2),
    name = _useState22[0],
    setName = _useState22[1];
  var _useState23 = useState(''),
    _useState24 = _slicedToArray(_useState23, 2),
    groupName = _useState24[0],
    setGroupName = _useState24[1];
  var _useState25 = useState([]),
    _useState26 = _slicedToArray(_useState25, 2),
    groupMembers = _useState26[0],
    setGroupMembers = _useState26[1];
  var _useState27 = useState(''),
    _useState28 = _slicedToArray(_useState27, 2),
    expDesc = _useState28[0],
    setExpDesc = _useState28[1];
  var _useState29 = useState(''),
    _useState30 = _slicedToArray(_useState29, 2),
    expAmount = _useState30[0],
    setExpAmount = _useState30[1];
  var _useState31 = useState(''),
    _useState32 = _slicedToArray(_useState31, 2),
    expPaidBy = _useState32[0],
    setExpPaidBy = _useState32[1];
  var _useState33 = useState([]),
    _useState34 = _slicedToArray(_useState33, 2),
    expParticipants = _useState34[0],
    setExpParticipants = _useState34[1];
  var _useState35 = useState('equal'),
    _useState36 = _slicedToArray(_useState35, 2),
    splitType = _useState36[0],
    setSplitType = _useState36[1];
  var _useState37 = useState([]),
    _useState38 = _slicedToArray(_useState37, 2),
    splitDetails = _useState38[0],
    setSplitDetails = _useState38[1];
  var _useState39 = useState(''),
    _useState40 = _slicedToArray(_useState39, 2),
    settleFrom = _useState40[0],
    setSettleFrom = _useState40[1];
  var _useState41 = useState(''),
    _useState42 = _slicedToArray(_useState41, 2),
    settleTo = _useState42[0],
    setSettleTo = _useState42[1];
  var _useState43 = useState(''),
    _useState44 = _slicedToArray(_useState43, 2),
    settleAmount = _useState44[0],
    setSettleAmount = _useState44[1];
  var _useState45 = useState(''),
    _useState46 = _slicedToArray(_useState45, 2),
    settleGroup = _useState46[0],
    setSettleGroup = _useState46[1];
  useEffect(function () {
    fetchAll();
  }, []);
  useEffect(function () {
    if (selectedGroup) {
      fetchExpenses(selectedGroup.id);
      fetchBalances(selectedGroup.id);
    }
  }, [selectedGroup]);

  // Keep splitDetails in sync with selected participants: maintain any entered values, and adjust length
  useEffect(function () {
    var n = expParticipants.length;
    var next = Array.from({
      length: n
    }, function (_, i) {
      return splitDetails[i] || '';
    });
    setSplitDetails(next);
  }, [expParticipants]);
  function fetchAll() {
    fetch('/api/users').then(function (r) {
      return r.json();
    }).then(setUsers)["catch"](function (e) {
      return console.error('fetch users', e);
    });
    fetch('/api/groups').then(function (r) {
      return r.json();
    }).then(function (gs) {
      setGroups(gs);
      setSelectedGroup(function (s) {
        return s || (gs && gs.length ? gs[0] : null);
      });
    })["catch"](function (e) {
      return console.error('fetch groups', e);
    });
    fetch('/api/balances').then(function (r) {
      return r.json();
    }).then(setBalances)["catch"](function (e) {
      return console.error('fetch balances', e);
    });
  }
  function fetchBalances(groupId) {
    fetch("/api/balances?groupId=".concat(groupId)).then(function (r) {
      return r.json();
    }).then(setBalances)["catch"](function (e) {
      return console.error('fetch balances', e);
    });
  }
  function fetchExpenses(groupId) {
    setLoadingExpenses(true);
    fetch("/api/groups/".concat(groupId, "/expenses")).then(function (r) {
      return r.json();
    }).then(function (data) {
      setExpenses(data);
      setLoadingExpenses(false);
      fetchBalances(groupId);
    })["catch"](function (e) {
      console.error('fetchExpenses', e);
      setLoadingExpenses(false);
    });
  }
  function addUser(_x) {
    return _addUser.apply(this, arguments);
  }
  function _addUser() {
    _addUser = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(e) {
      var res, u;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            e.preventDefault();
            if (name) {
              _context.n = 1;
              break;
            }
            return _context.a(2);
          case 1:
            _context.n = 2;
            return fetch('/api/users', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                name: name
              })
            });
          case 2:
            res = _context.v;
            _context.n = 3;
            return res.json();
          case 3:
            u = _context.v;
            setName('');
            fetchAll();
          case 4:
            return _context.a(2);
        }
      }, _callee);
    }));
    return _addUser.apply(this, arguments);
  }
  function addGroup(_x2) {
    return _addGroup.apply(this, arguments);
  }
  function _addGroup() {
    _addGroup = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(e) {
      var payload, res, g;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            e.preventDefault();
            if (groupName) {
              _context2.n = 1;
              break;
            }
            return _context2.a(2);
          case 1:
            payload = {
              name: groupName,
              members: groupMembers.map(Number)
            };
            _context2.n = 2;
            return fetch('/api/groups', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(payload)
            });
          case 2:
            res = _context2.v;
            _context2.n = 3;
            return res.json();
          case 3:
            g = _context2.v;
            setGroupName('');
            setGroupMembers([]);
            setSelectedGroup(g);
            fetchAll();
          case 4:
            return _context2.a(2);
        }
      }, _callee2);
    }));
    return _addGroup.apply(this, arguments);
  }
  function addExpense(_x3) {
    return _addExpense.apply(this, arguments);
  }
  function _addExpense() {
    _addExpense = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(e) {
      var vals, sum, _vals, _sum, payload, res, j, _t;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            e.preventDefault();
            setExpenseError('');
            if (selectedGroup) {
              _context3.n = 1;
              break;
            }
            setExpenseError('Please select a group');
            return _context3.a(2);
          case 1:
            if (!(!expDesc || !expAmount || Number(expAmount) <= 0)) {
              _context3.n = 2;
              break;
            }
            setExpenseError('Provide a valid description and positive amount');
            return _context3.a(2);
          case 2:
            if (expPaidBy) {
              _context3.n = 3;
              break;
            }
            setExpenseError('Select who paid');
            return _context3.a(2);
          case 3:
            if (!(!expParticipants || expParticipants.length === 0)) {
              _context3.n = 4;
              break;
            }
            setExpenseError('Select at least one participant');
            return _context3.a(2);
          case 4:
            if (!(splitType === 'exact')) {
              _context3.n = 6;
              break;
            }
            vals = splitDetails.map(Number);
            if (!(vals.length !== expParticipants.length)) {
              _context3.n = 5;
              break;
            }
            setExpenseError('Enter exact amounts for each participant');
            return _context3.a(2);
          case 5:
            sum = vals.reduce(function (s, v) {
              return s + v;
            }, 0);
            if (!(Math.abs(sum - Number(expAmount)) > 0.01)) {
              _context3.n = 6;
              break;
            }
            setExpenseError('Exact split values must sum to total amount');
            return _context3.a(2);
          case 6:
            if (!(splitType === 'percent')) {
              _context3.n = 8;
              break;
            }
            _vals = splitDetails.map(Number);
            if (!(_vals.length !== expParticipants.length)) {
              _context3.n = 7;
              break;
            }
            setExpenseError('Enter percent values for each participant');
            return _context3.a(2);
          case 7:
            _sum = _vals.reduce(function (s, v) {
              return s + v;
            }, 0);
            if (!(Math.abs(_sum - 100) > 0.01)) {
              _context3.n = 8;
              break;
            }
            setExpenseError('Percent values must sum to 100');
            return _context3.a(2);
          case 8:
            setExpenseSubmitting(true);
            _context3.p = 9;
            payload = {
              description: expDesc,
              amount: Number(expAmount),
              paidBy: Number(expPaidBy),
              participants: expParticipants.map(Number),
              splitType: splitType,
              splitDetails: splitType === 'equal' ? [] : splitDetails.map(Number)
            };
            _context3.n = 10;
            return fetch("/api/groups/".concat(selectedGroup.id, "/expenses"), {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(payload)
            });
          case 10:
            res = _context3.v;
            if (res.ok) {
              _context3.n = 12;
              break;
            }
            _context3.n = 11;
            return res.json();
          case 11:
            j = _context3.v;
            setExpenseError(j.error || 'Server error');
            return _context3.a(2);
          case 12:
            _context3.n = 13;
            return res.json();
          case 13:
            setExpDesc('');
            setExpAmount('');
            setExpParticipants([]);
            setSplitDetails([]);
            setNotifyMessage('Expense added');
            setTimeout(function () {
              return setNotifyMessage('');
            }, 3000);
            fetchExpenses(selectedGroup.id);
            fetchAll();
            _context3.n = 15;
            break;
          case 14:
            _context3.p = 14;
            _t = _context3.v;
            console.error('addExpense', _t);
            setExpenseError('Network error while adding expense');
          case 15:
            _context3.p = 15;
            setExpenseSubmitting(false);
            return _context3.f(15);
          case 16:
            return _context3.a(2);
        }
      }, _callee3, null, [[9, 14, 15, 16]]);
    }));
    return _addExpense.apply(this, arguments);
  }
  function doSettle(_x4) {
    return _doSettle.apply(this, arguments);
  } // helpers for split inputs
  function _doSettle() {
    _doSettle = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(e) {
      var payload, res, _t2;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            e.preventDefault();
            payload = {
              from: Number(settleFrom),
              to: Number(settleTo),
              amount: Number(settleAmount),
              groupId: settleGroup ? Number(settleGroup) : undefined
            };
            _context4.n = 1;
            return fetch('/api/settle', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(payload)
            });
          case 1:
            res = _context4.v;
            if (res.ok) {
              _context4.n = 3;
              break;
            }
            _t2 = alert;
            _context4.n = 2;
            return res.json().then(function (j) {
              return j.error;
            });
          case 2:
            _t2(_context4.v);
            return _context4.a(2);
          case 3:
            setSettleAmount('');
            fetchAll();
            if (selectedGroup) fetchExpenses(selectedGroup.id);
          case 4:
            return _context4.a(2);
        }
      }, _callee4);
    }));
    return _doSettle.apply(this, arguments);
  }
  function handleSplitDetailChange(idx, val) {
    var next = _toConsumableArray(splitDetails);
    next[idx] = val;
    setSplitDetails(next);
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("h1", null, "Expense Splitter (Minimal React)"), notifyMessage && /*#__PURE__*/React.createElement("div", {
    role: "status",
    "aria-live": "polite",
    style: {
      background: '#e6ffed',
      padding: 8,
      border: '1px solid #b7f0c0',
      marginBottom: 12
    }
  }, notifyMessage), /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col small"
  }, /*#__PURE__*/React.createElement("h2", null, "Users"), /*#__PURE__*/React.createElement("form", {
    onSubmit: addUser,
    "aria-label": "Create user"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "userName"
  }, "Name"), /*#__PURE__*/React.createElement("input", {
    id: "userName",
    name: "userName",
    value: name,
    onChange: function onChange(e) {
      return setName(e.target.value);
    },
    placeholder: "Name"
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Create")), /*#__PURE__*/React.createElement("ul", null, users.map(function (u) {
    return /*#__PURE__*/React.createElement("li", {
      key: u.id
    }, u.name, " (id:", u.id, ")");
  })), /*#__PURE__*/React.createElement("h2", null, "Groups"), /*#__PURE__*/React.createElement("form", {
    onSubmit: addGroup,
    "aria-label": "Create group"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "groupName"
  }, "Group name"), /*#__PURE__*/React.createElement("input", {
    id: "groupName",
    name: "groupName",
    value: groupName,
    onChange: function onChange(e) {
      return setGroupName(e.target.value);
    },
    placeholder: "Group name"
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "groupMembers"
  }, "Members (ctrl+click):"), /*#__PURE__*/React.createElement("select", {
    id: "groupMembers",
    name: "groupMembers",
    multiple: true,
    value: groupMembers,
    onChange: function onChange(e) {
      return setGroupMembers(Array.from(e.target.selectedOptions).map(function (o) {
        return o.value;
      }));
    }
  }, users.map(function (u) {
    return /*#__PURE__*/React.createElement("option", {
      key: u.id,
      value: u.id
    }, u.name);
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Create Group")), /*#__PURE__*/React.createElement("ul", null, groups.map(function (g) {
    return /*#__PURE__*/React.createElement("li", {
      key: g.id
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: function onClick(ev) {
        ev.preventDefault();
        setSelectedGroup(g);
      }
    }, g.name), " (members: ", g.members.join(','), ")");
  }))), /*#__PURE__*/React.createElement("div", {
    className: "col medium"
  }, /*#__PURE__*/React.createElement("h2", null, "Selected Group"), /*#__PURE__*/React.createElement("div", null, selectedGroup ? "".concat(selectedGroup.name, " (id:").concat(selectedGroup.id, ") members: ").concat(selectedGroup.members.join(',')) : 'No group selected'), /*#__PURE__*/React.createElement("h3", null, "Add Expense"), /*#__PURE__*/React.createElement("form", {
    onSubmit: addExpense,
    "aria-label": "Add expense"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "expDesc"
  }, "Description"), /*#__PURE__*/React.createElement("input", {
    id: "expDesc",
    name: "expDesc",
    value: expDesc,
    onChange: function onChange(e) {
      return setExpDesc(e.target.value);
    },
    placeholder: "Description",
    required: true
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "expAmount"
  }, "Amount"), /*#__PURE__*/React.createElement("input", {
    id: "expAmount",
    name: "expAmount",
    value: expAmount,
    onChange: function onChange(e) {
      return setExpAmount(e.target.value);
    },
    type: "number",
    step: "0.01",
    placeholder: "Amount",
    required: true
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "expPaidBy"
  }, "Paid by"), /*#__PURE__*/React.createElement("select", {
    id: "expPaidBy",
    name: "expPaidBy",
    value: expPaidBy,
    onChange: function onChange(e) {
      return setExpPaidBy(e.target.value);
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Select"), (selectedGroup ? selectedGroup.members : users.map(function (u) {
    return u.id;
  })).map(function (id) {
    var u = users.find(function (x) {
      return x.id === id;
    });
    return /*#__PURE__*/React.createElement("option", {
      key: id,
      value: id
    }, u ? u.name : "User ".concat(id));
  })), /*#__PURE__*/React.createElement("label", {
    htmlFor: "expParticipants"
  }, "Participants (ctrl+click)"), /*#__PURE__*/React.createElement("select", {
    id: "expParticipants",
    name: "expParticipants",
    multiple: true,
    value: expParticipants,
    onChange: function onChange(e) {
      return setExpParticipants(Array.from(e.target.selectedOptions).map(function (o) {
        return o.value;
      }));
    }
  }, (selectedGroup ? selectedGroup.members : users.map(function (u) {
    return u.id;
  })).map(function (id) {
    var u = users.find(function (x) {
      return x.id === id;
    });
    return /*#__PURE__*/React.createElement("option", {
      key: id,
      value: id
    }, u ? u.name : "User ".concat(id));
  })), /*#__PURE__*/React.createElement("label", {
    htmlFor: "splitType"
  }, "Split type"), /*#__PURE__*/React.createElement("select", {
    id: "splitType",
    name: "splitType",
    value: splitType,
    onChange: function onChange(e) {
      setSplitType(e.target.value);
      setSplitDetails([]);
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "equal"
  }, "Equal"), /*#__PURE__*/React.createElement("option", {
    value: "exact"
  }, "Exact"), /*#__PURE__*/React.createElement("option", {
    value: "percent"
  }, "Percent")), splitType !== 'equal' && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "Enter values for each selected participant in the same order:"), expParticipants.map(function (p, idx) {
    var u = users.find(function (x) {
      return x.id === Number(p);
    });
    return /*#__PURE__*/React.createElement("div", {
      key: p
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "split-".concat(p)
    }, u ? u.name : "User ".concat(p)), /*#__PURE__*/React.createElement("input", {
      id: "split-".concat(p),
      name: "split-".concat(p),
      value: splitDetails[idx] || '',
      onChange: function onChange(e) {
        return handleSplitDetailChange(idx, e.target.value);
      },
      placeholder: splitType === 'percent' ? 'percent' : 'amount'
    }));
  })), expenseError && /*#__PURE__*/React.createElement("div", {
    role: "alert",
    "aria-live": "assertive",
    style: {
      color: '#b00020',
      marginTop: 8
    }
  }, expenseError), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    disabled: expenseSubmitting
  }, expenseSubmitting ? 'Adding…' : 'Add Expense')), /*#__PURE__*/React.createElement("h3", null, "Expenses"), loadingExpenses ? /*#__PURE__*/React.createElement("div", null, "Loading expenses\u2026") : /*#__PURE__*/React.createElement("ul", null, expenses.length === 0 ? /*#__PURE__*/React.createElement("li", null, "No expenses for this group") : expenses.map(function (ex) {
    var payer = users.find(function (u) {
      return u.id === ex.paidBy;
    });
    return /*#__PURE__*/React.createElement("li", {
      key: ex.id
    }, /*#__PURE__*/React.createElement("strong", null, ex.description), " \u2014 ", /*#__PURE__*/React.createElement("span", {
      className: "expense-amount"
    }, Number(ex.amount).toFixed(2)), " \u2014 paid by ", payer ? payer.name : "User ".concat(ex.paidBy), " \u2014 split: ", ex.splitType);
  }))), /*#__PURE__*/React.createElement("div", {
    className: "col large"
  }, /*#__PURE__*/React.createElement("h2", null, "Balances"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return fetchAll();
    }
  }, "Refresh"), /*#__PURE__*/React.createElement("div", {
    style: {
      whiteSpace: 'pre-wrap',
      background: '#f7f7f7',
      padding: 8
    }
  }, balances ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Pairwise"), balances.pairwise.map(function (p) {
    var fromU = users.find(function (u) {
      return u.id === p.from;
    });
    var toU = users.find(function (u) {
      return u.id === p.to;
    });
    return /*#__PURE__*/React.createElement("div", {
      key: "".concat(p.from, "-").concat(p.to)
    }, fromU ? fromU.name : "User ".concat(p.from), " owes ", toU ? toU.name : "User ".concat(p.to), ": ", p.amount);
  }), /*#__PURE__*/React.createElement("h4", null, "Totals"), Object.keys(balances.perUser).map(function (uid) {
    var u = users.find(function (x) {
      return x.id === Number(uid);
    });
    return /*#__PURE__*/React.createElement("div", {
      key: uid
    }, u ? u.name : "User ".concat(uid), " owes ", balances.perUser[uid].owes, " / is owed ", balances.perUser[uid].owed);
  })) : 'No balances yet'), /*#__PURE__*/React.createElement("h3", null, "Settle"), /*#__PURE__*/React.createElement("form", {
    onSubmit: doSettle,
    "aria-label": "Settle amounts"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "settleFrom"
  }, "From"), /*#__PURE__*/React.createElement("select", {
    id: "settleFrom",
    name: "settleFrom",
    value: settleFrom,
    onChange: function onChange(e) {
      return setSettleFrom(e.target.value);
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "From"), users.map(function (u) {
    return /*#__PURE__*/React.createElement("option", {
      key: u.id,
      value: u.id
    }, u.name);
  })), /*#__PURE__*/React.createElement("label", {
    htmlFor: "settleTo"
  }, "To"), /*#__PURE__*/React.createElement("select", {
    id: "settleTo",
    name: "settleTo",
    value: settleTo,
    onChange: function onChange(e) {
      return setSettleTo(e.target.value);
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "To"), users.map(function (u) {
    return /*#__PURE__*/React.createElement("option", {
      key: u.id,
      value: u.id
    }, u.name);
  })), /*#__PURE__*/React.createElement("label", {
    htmlFor: "settleAmount"
  }, "Amount"), /*#__PURE__*/React.createElement("input", {
    id: "settleAmount",
    name: "settleAmount",
    value: settleAmount,
    onChange: function onChange(e) {
      return setSettleAmount(e.target.value);
    },
    placeholder: "Amount"
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "settleGroup"
  }, "Group (optional)"), /*#__PURE__*/React.createElement("select", {
    id: "settleGroup",
    name: "settleGroup",
    value: settleGroup,
    onChange: function onChange(e) {
      return setSettleGroup(e.target.value);
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "(none)"), groups.map(function (g) {
    return /*#__PURE__*/React.createElement("option", {
      key: g.id,
      value: g.id
    }, g.name);
  })), settleError && /*#__PURE__*/React.createElement("div", {
    role: "alert",
    "aria-live": "assertive",
    style: {
      color: '#b00020',
      marginTop: 8
    }
  }, settleError), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    disabled: settleSubmitting
  }, settleSubmitting ? 'Settling…' : 'Settle')))));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
