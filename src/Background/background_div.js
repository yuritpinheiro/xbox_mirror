export default function BackgroundDiv() {
    return (
        <div className="container">
            <div id="knee">knee</div>
            <div id="elbow">elbow</div>
            <style jsx>
                {`
                    #knee, #elbow {
                        width: 33vw;
                        height: 50vh;
                        background-color: red;
                        border-width: 0vh 0vw;
                    }

                    #knee {
                        border-radius: 0 0 0em 1em / 0 0 0 100%;
                    }

                    #elbow {

                    }


                    #shape:before {
                        content: "";
                        position: absolute;
                        top: 1vh;
                        left: 9vw;
                        background: #fff;
                        border-radius: 0em 0em 0em 5em / 0em 10em;
                        width: 90vw;
                        height: 40vh;
                    }
                    #shape:after {
                        content: "";
                        position: absolute;
                        top: 59vh;
                        left: 1vw;
                        background: #fff;
                        // border: 18px solid #eee;
                        border-radius: 0em 50em 0em 0em / 0em 9em 0em 0em;
                        width: 90vw;
                        height: 40vh;
                        box-sizing: content-box;
                    }
                `}
            </style>
        </div>
    );
};