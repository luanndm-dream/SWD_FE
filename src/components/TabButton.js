export default function TabButton({children, onSelect}) {
    // console.log('APP COMPONENT EXECUTING');
    
    return <li>
     <row><img src=""></img></row>
      <button onClick={onSelect}>{children}</button>
      </li>;
  }
  