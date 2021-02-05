import Card from '../src/Card/index'

export default function Playground() {
    return (
        <div className="container" >
            <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        
      `}</style>


        <Card height='300px' width="300px" backgroundColor='#A52A2A' image='engrenagem.png'> </Card>
        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}</style>

               
        </div >
    )
};