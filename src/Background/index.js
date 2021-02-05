export default function Background() {
    return (
        <div className="container">

            <svg className="svg_container">
                <defs>
                </defs>
                <radialGradient id="linear" cx="0%" cy="0%">
                    <animate attributeName="cx" attributeType="HTML" values="15%;85%;15%;" dur="10s" repeatCount="indefinite"></animate>
                    <animate attributeName="cy" attributeType="HTML" values="15%;85%;15%;" dur="10s" repeatCount="indefinite"></animate>
                    <stop offset="0%" stop-color="#a21a2e" />
                    <stop offset="50%" stop-color="#a21a2e" />
                    <stop offset="100%" stop-color="#321213" />
                </radialGradient>
                <path id="sec" d="M 0 0 Q 0 540 960 540 Q 1920 540 1920 1080"
                    stroke-width="80" fill="none" stroke="url(#linear)" />
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