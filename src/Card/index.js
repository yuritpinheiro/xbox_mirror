import { loadGetInitialProps } from "next/dist/next-server/lib/utils";

export default function Background(props) {
    return (
      <div className='container'>
        <style jsx>{`
          .container {
            height: ${props.height};
            width:${props.width};
            border-radius:5px;
            background-color: ${props.backgroundColor};
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position:relative;
          }
          .container:hover{
            border:5px solid rgba(255, 0, 0, .7);
            border-radius:12px;
            background-clip: padding-box;
          }

          .bottomBar {
            height: 10% ;
            width:100%;
            border-radius:5px;
            display: flex;
            padding: 0 0.5rem;
            flex-direction: column;
            background: rgba(0, 0, 0, 0.5); 
            position:absolute;
            bottom:0;
            align-items: left;
            justify-content: center;
            color:#fff;
          }
          `}</style>

          <img src={`images/${props.image}`} alt='Settings icon' width='100%'/>
          
          <div className='bottomBar'>
            <span>Settings</span>
          </div>
      </div>
    )
  }