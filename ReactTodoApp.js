'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactTodoApp = function (_React$Component) {
  _inherits(ReactTodoApp, _React$Component);

  function ReactTodoApp(prop) {
    _classCallCheck(this, ReactTodoApp);

    var _this = _possibleConstructorReturn(this, (ReactTodoApp.__proto__ || Object.getPrototypeOf(ReactTodoApp)).call(this, prop));

    _this.state = {
      value: "",
      //container for new task 
      tasks: []
    };

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(ReactTodoApp, [{
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({ value: event.target.value });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      //condition for empty empty 
      if (!this.state.value) {
        return event.preventDefault();
      }
      //declare object to store 
      var newTask = {
        value: this.state.value,
        id: 1 + Math.random()
        //check input value
      };alert(newTask.value);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "form",
          { onSubmit: this.handleSubmit },
          React.createElement(
            "label",
            null,
            React.createElement("input", { onChange: this.handleChange, type: "text", value: this.state.value })
          ),
          React.createElement("input", { type: "submit", value: "add item" })
        ),
        React.createElement(TodoList, { value: this.state.value })
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
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "ul",
          null,
          React.createElement(
            "li",
            null,
            this.props.value
          )
        )
      );
    }
  }]);

  return TodoList;
}(React.Component);

var domContainer = document.querySelector('#reactTodoApp');
ReactDOM.render(React.createElement(ReactTodoApp, null), domContainer);