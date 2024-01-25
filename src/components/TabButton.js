export default function TabButton({children, onSelect, imgSrc}) {
    // console.log('APP COMPONENT EXECUTING');
    
    return <li>
    <row>{imgSrc && <img className="icon" src={imgSrc} alt="Icon" />}</row>
      <button onClick={onSelect}>{children}</button>
      </li>;
  }
  