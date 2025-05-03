
interface IFooterProps {
  // Define any props if needed 
buttonName: string;
  onClick: () => void;
  onmouseOver?: () => void;
}

const Footer  = ({ buttonName, onClick, onmouseOver }: IFooterProps) => {
  return (
    <>
      <button onClick={onClick} onMouseOver={onmouseOver}>{buttonName}</button>
    </>
  );
}

export default Footer;
