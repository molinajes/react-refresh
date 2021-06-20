"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactList = function (_React$Component) {
  _inherits(ReactList, _React$Component);

  function ReactList(props) {
    _classCallCheck(this, ReactList);

    var _this = _possibleConstructorReturn(this, (ReactList.__proto__ || Object.getPrototypeOf(ReactList)).call(this, props));

    _this.state = {
      message: "Nothing to see here"
    };
    _this.handledClicked = _this.handledClicked.bind(_this);
    return _this;
  }

  _createClass(ReactList, [{
    key: "handledClicked",
    value: function handledClicked() {
      this.setState(function (prevState) {
        return {
          message: "Welcome to the club"
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "p",
          null,
          this.state.message
        ),
        React.createElement(
          "button",
          { onClick: this.handledClicked },
          "Don't Click"
        )
      );
    }
  }]);

  return ReactList;
}(React.Component);

var domContainer = document.querySelector('#react_itemList');
ReactDOM.render(React.createElement(ReactList, null), domContainer);