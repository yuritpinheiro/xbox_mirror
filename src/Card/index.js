import { loadGetInitialProps } from "next/dist/next-server/lib/utils";

export default function Background(props) {
  console.log(props.height)
    return (
      <div className='outter'>
        <style jsx>{`
          .outter{
            height: ${props.height + 13}px;
            width:${props.width +13}px;
            background-color: rgba(0,0,0,0); 
            display:flex;
            text-align: center;
            justify-content: center;
            align-items: center;
            opacity:1;
          }
          .outter:hover{
            border:5px solid rgba(255, 0, 0, 0.7);
            border-radius:10px;
            background-clip: padding-box;
            box-shadow: 1px 1px 20px 1px red;

          }
          .inner{
            display:inline-block;
            margin: 0;
            height: ${props.height}px;
            width:${props.width}px;
            border-radius:4px;
            background-color: ${props.backgroundColor};
            justify-content: center;
            align-items: center;
            text-align:center;
            position:relative;
          }
          
          .bottomBar{            
            height:auto;
            width:100%;
            border-radius:0 0 5px 5px;
            margin:0;
            display: flex;
            padding: 0.5rem 1rem  0.5rem 1rem;
            // flex-direction: column
            background: rgba(0, 0, 0, 0.7); 
            position:absolute;
            bottom:0;
            align-items: left;
            justify-content: center;
            color:#fff;
            word-wrap: break-word;
          }         
          `}</style>    
        <div className='inner'>
            <img src={`images/${props.image}`} alt='Settings icon' width='100%'/>       
            <div className='bottomBar'>
              <span>Configurações</span>
            </div>
        </div>
      </div>
    );
  }