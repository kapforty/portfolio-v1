function buttonCountReact() {
    const [count, setCount] = React.useState(0);
  
    const handleClick = () => {
        setCount(count + 1);
    };
  
    return React.createElement(
      'button',
      {
        onClick: () => handleClick(),
      },
      `Times Clicked: ${count}`
    );
  }

const rootNode = document.getElementById('button-count-react');
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(buttonCountReact));

