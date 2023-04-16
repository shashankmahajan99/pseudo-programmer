const pseudoCodeJson = [
  {
    heading:
      "1. Introduction to YAML-Like Pseudo Language for Creating React Components",
    sections: {
      1.1: {
        subheading: "What is YAML?",
        body: 'YAML (short for "YAML Ain\'t Markup Language") is a human-readable data serialization language that is often used for configuration files.',
        examples: {},
      },
      1.2: {
        subheading:
          "What is the YAML-like pseudo language for creating React components?",
        body: "This pseudo language is designed to be easy to read and write, and it provides a more concise alternative to writing JSX code directly. It includes support for many of the key concepts in React, such as props, state, context, refs, component lifecycle methods, event handling, conditional rendering, forms, higher-order components, render props, hooks, virtual DOM, reconciliation, fragments, portals, and error boundaries.",
        examples: {},
      },
      1.3: {
        subheading: "What will be covered in this series?",
        body: "In each part of this series, we will focus on a different aspect of the YAML-like pseudo language, providing examples and explanations of how to use it to create React components. By the end of this series, you should have a good understanding of how to use this pseudo language to build complex React applications.",
        examples: {},
      },
    },
  },
  {
    heading: "2. Defining React Components with YAML",
    sections: {
      2.1: {
        subheading: "How to define a React component using YAML",
        body: "In YAML, you can define a React component using a YAML object. The keys of the object correspond to the component's properties, and the values correspond to the values of those properties.",
        examples: {
          "Here's an example: (2.1.1)": {
            code: '# Define a React component using YAML\nMyComponent:\n  props:\n    title: "Hello, world!"\n  render:\n    content:\n      - h1:\n          content: "{{props.title}}"',
            codeContent:
              "In this example, we define a component called MyComponent with a title prop. The component's render property specifies the component's output, which consists of an h1 element with the text Hello, world!.",
          },
        },
      },
    },
  },
  {
    heading: "3. Using Props in YAML",
    sections: {
      3.1: {
        subheading: "How to define and use props in YAML",
        body: "In React, props are used to pass data from a parent component to a child component. In YAML, you can define props using the `props` key in a component's object definition.",
        examples: {
          "Here's an example: (3.1.1)": {
            code: '# Define a component with props using YAML\nGreeting:\n  props:\n    name: "Alice"\n  render:\n    content:\n      - h1:\n          content: "Hello, {{props.name}}!"',
            codeContent:
              "In this example, we define a component called Greeting with a `name` prop. The component's render property includes an h1 element with the text `Hello, Alice!`.",
          },
          "To use the Greeting component in another component, we would simply include it in the other component's YAML object definition, and pass a value for the name prop: (3.1.2)":
            {
              code: '# Use the Greeting component in another component\nMyComponent:\n  render:\n    content:\n      - Greeting:\n          name: "Bob"\n      - Greeting:\n          name: "Carol"',
              codeContent:
                "This would render two instances of the Greeting component with different values for the `name` prop.",
            },
        },
      },
    },
  },
  {
    heading: "4. Using State in YAML",
    sections: {
      4.1: {
        subheading: "Defining State in YAML",
        body: "In React, state is used to store data that can change over time, and to trigger updates to a component's output when that data changes. In YAML, you can define state using the state key in a component's object definition. Here's an example:",
        examples: {
          "Here's an example: (4.1.1)": {
            code: '# Define a component with state using YAML\nCounter:\n  state:\n    count: 0\n  methods:\n    increment: |\n      function() {\n        this.setState({ count: this.state.count + 1 });\n      }\n  render:\n    content:\n      - div:\n          content:\n            - p:\n                content: "Count: {{state.count}}"\n            - button:\n                onClick: increment\n                content: "Increment"',
            codeContent:
              "In the example we have defined a component called Counter with a count state property that has an initial value of 0. The component's methods property includes a function called increment, which updates the state when called. The component's render property includes a div element with two child elements: a p element that displays the current value of the count state property, and a button element that calls the increment function when clicked.",
          },
        },
      },
      4.2: {
        subheading: "Using the Counter Component in Another Component",
        body: "To use the Counter component in another component, we would simply include it in the other component's YAML object definition:",
        examples: {
          "Here's an example: (4.2.1)": {
            code: "# Use the Counter component in another component\nMyComponent:\n  render:\n    content:\n      - Counter\n",
            codeContent:
              "This would render an instance of the Counter component with its default state.",
          },
        },
      },
    },
  },
  {
    heading: "5. Using Context in YAML",
    sections: {
      5.1: {
        subheading: "Defining Context in YAML",
        body: "In React, context is used to share data between components without the need to pass props through every level of the component hierarchy. In YAML, you can define context using the context key in a component's object definition.",
        examples: {
          "Here's an example: (5.1.1)": {
            code: '# Define a component with context using YAML\nThemeContext:\n  context:\n    darkMode: true\n\nTitle:\n  render:\n    content:\n      - ThemeContext.Provider:\n          value:\n            darkMode: false\n          content:\n            - h1:\n                content: "Light Mode"',
            codeContent:
              "In this example, we define a ThemeContext component with a darkMode context property that has an initial value of true. The Title component includes a ThemeContext.Provider component that sets the value of darkMode to false for all of its child components.\n\nThe Title component's render property includes an h1 element with the text Light Mode.",
          },
        },
      },
      5.2: {
        subheading: "Accessing Context in a Child Component",
        body: "To access the darkMode context property in a child component, we would use the ThemeContext.Consumer component:",
        examples: {
          "Here's an example: (5.2.1)": {
            code: '# Access context in a child component\nSubtitle:\n  render:\n    content:\n      - ThemeContext.Consumer:\n          children: |\n            function({ darkMode }) {\n              return { darkMode ? "Dark Mode" : "Light Mode" };\n            }',
            codeContent:
              "In this example, we define a Subtitle component that uses the ThemeContext.Consumer component to access the value of darkMode. The children property of the ThemeContext.Consumer component is a function that takes the context object as an argument and returns a string based on its value.",
          },
        },
      },
    },
  },
  {
    heading: "6. Using Refs in YAML",
    sections: {
      6.1: {
        subheading: "Defining Refs in YAML",
        body: "In React, refs are used to reference a DOM element or a component instance from within a component's code. In YAML, you can define refs using the refs key in a component's object definition.",
        examples: {
          "Here's an example: (6.1.1)": {
            code: "# Define a component with refs using YAML\nTextInput:\n refs:\n inputRef: null\n methods:\n focusInput: |\n function() {\n this.refs.inputRef.focus();\n }\n render:\n content:\n - input:\n ref: inputRef\n - button:\n onClick: focusInput\n content: 'Focus Input'",
            codeContent:
              "In this example, we define a TextInput component with an inputRef ref property that is initially set to null. The component's methods property includes a function called focusInput, which uses the inputRef ref to focus the input element when called.\n\nThe component's render property includes an input element with the ref property set to inputRef, and a button element that calls the focusInput function when clicked.",
          },
        },
      },
    },
  },
  {
    heading: "7. Handling Events in YAML",
    sections: {
      7.1: {
        subheading: "Defining Event Handlers in YAML",
        body: "To add interactivity to a React component, you can define event handlers that respond to user actions such as button clicks, form submissions, or keyboard input. In YAML, you can define event handlers using the onEventName property in a component's object definition.",
        examples: {
          "Here's an example of defining an event handler for a button click in YAML: (7.1.1)":
            {
              code: "MyButton: type: function props: onClick: | function(event) { console.log('Button clicked!'); } render: content: - button: onClick: onClick content: 'Click me'",
              codeContent:
                "In this example, we define a MyButton component that takes an onClick prop that is a function that logs a message to the console when the button is clicked. We then pass this prop to the button element's onClick property in the render method.",
            },
          "You can also define event handlers that take arguments or access the component's state or props. For example, to handle a form submission and update the component's state based on the input value, you could define a handleSubmit function like this: (7.1.2)":
            {
              code: "MyForm: type: class state: inputValue: '' methods: handleSubmit: | function(event) { event.preventDefault(); this.setState({ inputValue: event.target.value }); } render: content: - form: onSubmit: handleSubmit content: - input: type: 'text' value: '{{inputValue}}' onChange: | function(event) { this.setState({ inputValue: event.target.value }); } - button: type: 'submit' content: 'Submit'",
              codeContent:
                "In this example, we define a MyForm class component that maintains a inputValue state property that is updated when the input value changes or when the form is submitted. We define a handleSubmit method that prevents the default form submission behavior, updates the component's state, and logs the input value to the console.\n\nWe then define the form element in the render method with an onSubmit property that calls the handleSubmit method when the form is submitted. We also define an input element with a value property that is bound to the component's inputValue state property, and an onChange property that updates the inputValue state property when the input value changes.",
            },
        },
      },
    },
  },
  {
    heading: "8. Conditional Rendering in YAML",
    sections: {
      8.1: {
        subheading: "Conditionally Rendering Based on State",
        body: "In React, you can conditionally render components based on the component's state or props. In YAML, you can use the if and unless directives to conditionally render content based on a boolean expression.",
        examples: {
          "Example 1": {
            code: 'MyComponent:\n type: function\n state:\n isLoggedIn: true\n render:\n content:\n - h1:\n content: "Welcome!"\n if: "{{isLoggedIn}}"\n - p:\n content: "Please log in to continue."\n unless: "{{isLoggedIn}}"',
            codeContent:
              "In this example, we define a MyComponent function component that maintains a isLoggedIn state property that is set to true. We then define a render method that conditionally renders an h1 element with the text 'Welcome!' if isLoggedIn is true, and a p element with the text 'Please log in to continue.' if isLoggedIn is false.",
          },
          "Example 2": {
            code: "MyComponent:\n type: function\n state:\n isLoggedIn: true\n render:\n content:\n - div:\n content:\n - '{{isLoggedIn ? 'Welcome!' : 'Please log in to continue.'}}'",
            codeContent:
              "In this example, we define a MyComponent function component that maintains a isLoggedIn state property that is set to true. We then define a render method that uses the ternary operator to conditionally render either an h1 element with the text 'Welcome!' or a p element with the text 'Please log in to continue.' based on the value of isLoggedIn.",
          },
          "Example 3": {
            code: 'MyComponent:\n type: function\n state:\n isLoggedIn: false\n render:\n - div:\n className: "content"\n content:\n - isLoggedIn && h1:\n content: "Welcome!"\n - !isLoggedIn && p:\n content: "Please log in to continue."',
            codeContent:
              "In this example, we define a MyComponent function component that maintains a isLoggedIn state property that is set to false. We then define a render method that uses the logical && operator to conditionally render an h1 element with the text 'Welcome!' if isLoggedIn is true, and a p element with the text 'Please log in to continue.' if isLoggedIn is false. Note that in the second conditional render example, we used the negation operator (!) before the isLoggedIn state property to check if it is false. This is another way to conditionally render content in YAML.",
          },
        },
      },
    },
  },
  {
    heading: "9. Handling Forms in YAML",
    sections: {
      9.1: {
        subheading: "Defining Form Elements in YAML",
        body: "In React, forms are a common way for users to interact with an application. In YAML, you can define form elements like input, textarea, and select using the input, textarea, and select keys respectively.",
        examples: {},
      },
      9.2: {
        subheading: "Handling Form Submission in YAML",
        body: "Here's an example of how to handle form submission in YAML:",
        examples: {
          "9.2.1": {
            code: "MyFormComponent:\n type: class\n state:\n name: ''\n methods:\n handleInputChange: |\n function(event) {\n const { name, value } = event.target;\n this.setState({ [name]: value });\n }\n handleSubmit: |\n function(event) {\n event.preventDefault();\n console.log('Submitted form with name: ' + this.state.name);\n }\n render:\n - form:\n onSubmit: handleSubmit\n content:\n - label:\n content: 'Name:'\n - input:\n type: 'text'\n name: 'name'\n value: '{{this.state.name}}'\n onChange: handleInputChange\n - button:\n type: 'submit'\n content: 'Submit'",
            codeContent:
              "In this example, we define a MyFormComponent class component that maintains a name state property and includes two methods: handleInputChange and handleSubmit. The handleInputChange method is called whenever the user types in the input element with the name 'name' and updates the state with the new value. The handleSubmit method is called when the user submits the form and logs the name to the console. The render method defines a form element with an onSubmit event handler that calls the handleSubmit method when the form is submitted. It also includes an input element with the name 'name' and an onChange event handler that calls the handleInputChange method whenever the input changes, as well as a submit button.",
          },
        },
      },
    },
  },
  {
    heading: "10. Higher-Order Components in YAML",
    sections: {
      10.1: {
        subheading: "Defining Higher-Order Components in YAML",
        body: "In React, Higher-Order Components (HOCs) are a pattern for reusing component logic. In YAML, you can define a HOC by creating a function that returns a new component. Here's an example:",
        examples: {
          "Here's an example: (10.1.1)": {
            code: "function withHover(Component) {\n return class extends React.Component {\n state = { isHovered: false };\n\n handleMouseOver = () => this.setState({ isHovered: true });\n handleMouseOut = () => this.setState({ isHovered: false });\n\n render() {\n return (\n <div\n onMouseOver={this.handleMouseOver}\n onMouseOut={this.handleMouseOut}\n >\n <Component isHovered={this.state.isHovered} {...this.props} />\n </div>\n );\n }\n };\n}\n\nconst MyComponentWithHover = withHover(MyComponent);",
            codeContent:
              "In this example, we define a withHover function that takes a Component argument and returns a new class component that adds hover functionality to the wrapped component. The new component maintains an isHovered state property and includes two event handlers: handleMouseOver and handleMouseOut. It also renders the wrapped component with the isHovered state property and the props passed down from the parent.",
          },
        },
      },
    },
  },
  {
    heading: "11. Render Props in YAML",
    sections: {
      11.1: {
        subheading: "Defining Render Props in YAML",
        body: "In React, Render Props is another pattern for reusing component logic. In YAML, you can define a component that takes a render prop as a child component.",
        examples: {
          "Here's an example: (11.1.1)": {
            code: "function RenderPropsComponent(props) {\n  return <div>{props.render()}</div>;\n}\n\nfunction MyComponent() {\n  return (\n    <RenderPropsComponent\n      render={() => <h1>Hello, world!</h1>}\n    />\n  );\n}",
            codeContent:
              'In this example, we define a RenderPropsComponent function component that takes a render prop as a child component and renders it inside a div. We then define a MyComponent function component that renders the RenderPropsComponent with a render prop that returns an h1 element with the text "Hello, world!". This allows the child component to control what is rendered inside the div.',
          },
          "Another example: (11.1.2)": {
            code: "- MyComponent:\n    state:\n      count: 0\n    methods:\n      incrementCount: |\n        function() {\n          this.setState({ count: this.state.count + 1 });\n        }\n    content:\n      - Counter:\n          render: |\n            function({ count, incrementCount }) {\n              return (\n                <div>\n                  <h1>Count: {count}</h1>\n                  <button onClick={incrementCount}>Increment</button>\n                </div>\n              );\n            }",
            codeContent:
              "In this example, we define a Counter component that takes a render prop as a child component and renders it with the count and incrementCount properties as arguments. We then define a MyComponent function component that maintains a count state property and an incrementCount method that increments the count. MyComponent renders the Counter component with a render prop that returns an h1 element displaying the current count and a button that calls the incrementCount method when clicked. Using render props, we can create reusable components that allow child components to customize their rendering behavior and share state between components.",
          },
        },
      },
    },
  },
];
export default pseudoCodeJson;
