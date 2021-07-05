'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactTodoApp = function (_React$Component) {
  _inherits(ReactTodoApp, _React$Component);

  function ReactTodoApp(props) {
    _classCallCheck(this, ReactTodoApp);

    var _this = _possibleConstructorReturn(this, (ReactTodoApp.__proto__ || Object.getPrototypeOf(ReactTodoApp)).call(this, props));

    _this.state = {
      //container for new task 
      input: "",
      tasks: []
    };

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleRemove = _this.handleRemove.bind(_this);
    return _this;
  }

  _createClass(ReactTodoApp, [{
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({ input: event.target.value });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      event.preventDefault();
      //condition for empty empty 
      if (!this.state.input) {
        return;
      }
      //declare object to store 
      var newTask = {
        input: this.state.input,
        id: 1 + Math.random()
        //request update to current tasks state
      };this.setState(function (state) {
        return {
          tasks: state.tasks.concat(newTask),
          input: ""
        };
      });
    }

    //updater function to remove task 

  }, {
    key: "handleRemove",
    value: function handleRemove() {
      alert("remove button clicked");
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
            React.createElement("input", { onChange: this.handleChange, type: "text", value: this.state.input, placeholder: "new item" })
          ),
          React.createElement("input", { type: "submit", value: "add item" })
        ),
        React.createElement(TodoList, { tasks: this.state.tasks, handleRemove: this.handleRemove })
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
      var _this3 = this;

      return React.createElement(
        "div",
        null,
        React.createElement(
          "ul",
          null,
          this.props.tasks.map(function (task) {
            return React.createElement(
              "li",
              { key: task.id },
              React.createElement("input", { type: "checkbox" }),
              React.createElement(
                "label",
                { className: "complete" },
                task.input
              ),
              React.createElement(
                "button",
                { onClick: _this3.props.handleRemove },
                "x"
              )
            );
          })
        )
      );
    }
  }]);

  return TodoList;
}(React.Component);

var domContainer = document.querySelector('#reactTodoApp');
ReactDOM.render(React.createElement(ReactTodoApp, null), domContainer);