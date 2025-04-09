interface ButtonProps {
    text: string;
    bgColor: string;
    color: string;
  }

  function Buttons({ text, bgColor, color }: ButtonProps) {
      return <button style={{ backgroundColor: bgColor, color: color }}>{text}</button>
  }
  export default Buttons