export default function Background() {

    let rows = []
    for (let i = 0; i < 16; i++) {
        rows.push(i)
    }

    return (
        <div className="container">
            <svg className="svg_container">
                {
                    rows.map((i) => {
                            return (
                                <>
                                    <radialGradient id={`linear${i}`} cx={`${200/16 * i}`} cy={`${200/16 * i}`}>
                                        <animate attributeName="cx" attributeType="HTML" values={`${200/16 * i - 200}%;${200/16 * i + 100}%;`} dur="20s" repeatCount="indefinite"></animate>
                                        <animate attributeName="cy" attributeType="HTML" values={`${200/16 * i - 200}%;${200/16 * i + 100}%;`} dur="20s" repeatCount="indefinite"></animate>
                                        <stop offset="0%" stop-color="#a21a2e" />
                                        <stop offset="50%" stop-color="#a21a2e" />
                                        <stop offset="100%" stop-color="#321213" />
                                    </radialGradient>
                                    <path d={`M ${i * 80 - 640} ${i * -80 + 640} c 0 540 0 540 960 540 c 960 0 960 0 960 540`}
                                        stroke-width="90" fill="none" stroke={`url(#linear${i})`} />
                                </>
                            );
                            
                    })
                }
            </svg>
            <style jsx>
                {`
                    @keyframes example {
                        0%   {cx: 0px; cy: 0px;}
                        50%  {cx: 1920px; cy: 1080px;}
                        100% {cx: 0px; cy: 0px;}
                    }
                    #linear {
                        stroke: radial-gradient("#321213", "#a21a2e");
                        animation: example 5s infinite linear;
                    }
                    .svg_container {
                        min-height: 100vh;
                        min-width: 100vw;
                    }
                    .container {
                        min-height: 100vh;
                        min-width: 100vw;
                        padding: 0;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    };
                `}
            </style>
        </div>
    );
};