'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactTodoApp = function (_React$Component) {
  _inherits(ReactTodoApp, _React$Component);

  function ReactTodoApp() {
    _classCallCheck(this, ReactTodoApp);

    return _possibleConstructorReturn(this, (ReactTodoApp.__proto__ || Object.getPrototypeOf(ReactTodoApp)).apply(this, arguments));
  }

  _createClass(ReactTodoApp, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        'App Component',
        React.createElement(TodoList, null)
      );
    }
  }]);

  return ReactTodoApp;
}(React.Component);

var TodoList = function (_React$Component2) {
  _inherits(TodoList, _React$Component2);

  function TodoList() {
    _classCallCheck(this, TodoList);

    return _possibleConstructorReturn(this, (TodoList.__proto__ || Object.getPrototypeOf(TodoList)).apply(this, arguments));
  }

  _createClass(TodoList, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        'Todo List Component'
      );
    }
  }]);

  return TodoList;
}(React.Component);

var domContainer = document.querySelector('#reactTodoApp');
ReactDOM.render(React.createElement(ReactTodoApp, null), domContainer);