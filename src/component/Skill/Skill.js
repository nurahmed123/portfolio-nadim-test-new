import React from "react"
import mypdf from '../pic/N.Shahriar.pdf';

import "./Skill.css"
const Skill = () => {
    return (
        <>
            <section className='Skill' id='skill'>
                <div className="container">
                    <div className='heading text-center'>
                        <h1 className="sub-title">
                            My
                            <span> Skills</span>
                        </h1>
                    </div>
                    <div className='d_flex'>
                        <div className="container1">
                            {/* <h1 className="heading1">Technical skill</h1> */}
                            <div className="Technical-bars">
                                <div className="bar"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
                                    <linearGradient id="3fGFTDt8GTtIeBARnD~Oya_Of4lZV2lwBQI_gr1" x1="21.175" x2="25.872" y1="10.027" y2="33.258" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#00b3ba"></stop><stop offset=".998" stop-color="#00979c"></stop></linearGradient><path fill="url(#3fGFTDt8GTtIeBARnD~Oya_Of4lZV2lwBQI_gr1)" d="M36,36c-5.018,0-9.425-3.859-12-7.714C21.425,32.141,17.018,36,12,36C5.383,36,0,30.617,0,24	s5.383-12,12-12c5.935,0,9.884,4.448,12,7.755C26.116,16.448,30.065,12,36,12c6.617,0,12,5.383,12,12S42.617,36,36,36z M26.181,24.037C27.828,27.614,32,32,36,32c4.411,0,8-3.589,8-8s-3.589-8-8-8C30.584,16,27.199,21.954,26.181,24.037z M12,16	c-4.411,0-8,3.589-8,8s3.589,8,8,8c4.017,0,8.206-4.422,9.823-7.963C20.837,22.018,17.445,16,12,16z M16,24.5v-1	c0-0.276-0.224-0.5-0.5-0.5h-7C8.224,23,8,23.224,8,23.5v1C8,24.776,8.224,25,8.5,25h7C15.776,25,16,24.776,16,24.5z M39.5,23H37	v-2.5c0-0.276-0.224-0.5-0.5-0.5h-1c-0.276,0-0.5,0.224-0.5,0.5V23h-2.5c-0.276,0-0.5,0.224-0.5,0.5v1c0,0.276,0.224,0.5,0.5,0.5H35	v2.5c0,0.276,0.224,0.5,0.5,0.5h1c0.276,0,0.5-0.224,0.5-0.5V25h2.5c0.276,0,0.5-0.224,0.5-0.5v-1C40,23.224,39.776,23,39.5,23z"></path>
                                </svg>
                                    <div className="indfo">
                                        <span>Arduino</span>
                                    </div>
                                    <div className="progress-line arduino">
                                        <span></span>
                                    </div>
                                </div>
                                <div className="bar"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
                                    <path fill="#37474F" d="M16.458,2.987c-0.212,0.007-0.441,0.086-0.701,0.29c-0.635-0.245-1.251-0.33-1.802,0.168c-0.852-0.109-1.128,0.118-1.337,0.383c-0.187-0.002-1.397-0.191-1.953,0.638C9.27,4.3,8.829,5.287,9.329,6.205c-0.285,0.441-0.58,0.877,0.086,1.719C9.179,8.394,9.325,8.9,9.88,9.516c-0.146,0.659,0.142,1.123,0.659,1.486c-0.097,0.9,0.826,1.424,1.102,1.61c0.106,0.526,0.326,1.021,1.38,1.295c0.174,0.784,0.808,0.917,1.421,1.083c-2.028,1.178-3.768,2.729-3.755,6.535l-0.297,0.529c-2.326,1.414-4.418,5.96-1.146,9.655c0.214,1.156,0.572,1.986,0.891,2.905c0.478,3.705,3.593,5.44,4.414,5.646c1.205,0.916,2.487,1.787,4.222,2.396c1.636,1.688,3.408,2.331,5.19,2.329c0.026,0,0.053,0.001,0.079,0c1.781,0.002,3.554-0.642,5.189-2.329c1.735-0.608,3.018-1.479,4.223-2.396c0.821-0.206,3.937-1.941,4.413-5.646c0.319-0.919,0.678-1.749,0.892-2.905c3.271-3.695,1.18-8.241-1.146-9.655l-0.297-0.53c0.012-3.805-1.729-5.356-3.756-6.534c0.613-0.166,1.247-0.3,1.421-1.084c1.055-0.272,1.275-0.769,1.381-1.295c0.276-0.186,1.198-0.709,1.103-1.611c0.517-0.361,0.805-0.826,0.657-1.484c0.557-0.615,0.702-1.124,0.466-1.592c0.667-0.842,0.371-1.277,0.087-1.719c0.499-0.918,0.059-1.905-1.337-1.739c-0.555-0.829-1.766-0.64-1.953-0.638c-0.209-0.265-0.486-0.492-1.337-0.383c-0.551-0.498-1.167-0.413-1.802-0.168c-0.756-0.596-1.256-0.119-1.826,0.062c-0.912-0.298-1.122,0.111-1.57,0.277c-0.997-0.211-1.299,0.247-1.777,0.731l-0.556-0.011c-1.503,0.886-2.249,2.69-2.514,3.616c-0.264-0.928-1.009-2.731-2.512-3.616l-0.556,0.011c-0.479-0.484-0.781-0.942-1.778-0.731c-0.448-0.166-0.657-0.575-1.571-0.277C17.208,3.22,16.863,2.975,16.458,2.987L16.458,2.987z"></path><path fill="#64DD17" d="M13.466 6.885c3.987 2.055 6.305 3.718 7.575 5.134-.65 2.607-4.042 2.726-5.283 2.653.254-.119.467-.26.541-.479-.311-.221-1.415-.023-2.186-.456.296-.062.435-.12.573-.339-.727-.232-1.511-.433-1.973-.817.249.003.481.055.806-.17-.652-.351-1.348-.629-1.888-1.166.337-.009.701-.004.806-.129-.596-.37-1.1-.78-1.518-1.23.472.058.671.009.786-.075-.452-.461-1.023-.85-1.294-1.421.35.121.671.168.902-.011-.154-.345-.81-.55-1.189-1.357.369.036.761.081.839 0-.172-.697-.465-1.089-.753-1.496.79-.01 1.985.004 1.931-.063l-.488-.499c.771-.207 1.561.034 2.133.213.257-.203-.005-.459-.318-.721.655.087 1.247.238 1.782.445.286-.258-.186-.516-.413-.773 1.012.191 1.44.46 1.866.73.31-.295.018-.548-.19-.807.764.283 1.156.648 1.57 1.009.141-.19.357-.328.096-.784.542.312.95.68 1.252 1.092.335-.214.2-.506.201-.775.563.459.921.946 1.358 1.423.088-.064.165-.282.233-.626 1.344 1.303 3.242 4.586.488 5.889C19.367 9.343 16.568 7.938 13.466 6.885L13.466 6.885zM34.623 6.885c-3.986 2.055-6.305 3.718-7.574 5.134.65 2.607 4.043 2.726 5.283 2.653-.254-.119-.466-.26-.542-.479.312-.221 1.415-.023 2.186-.456-.296-.062-.434-.12-.573-.339.729-.232 1.514-.433 1.974-.817-.249.003-.481.055-.806-.17.652-.351 1.348-.629 1.889-1.166-.338-.009-.701-.004-.807-.129.598-.37 1.1-.78 1.518-1.23-.473.058-.671.009-.785-.075.451-.461 1.021-.85 1.293-1.421-.35.121-.67.168-.9-.011.152-.345.811-.55 1.188-1.357-.369.036-.76.081-.838 0 .172-.697.465-1.089.754-1.496-.789-.012-1.985.004-1.932-.063l.488-.499c-.771-.207-1.56.034-2.133.213-.258-.203.005-.459.318-.721-.654.087-1.248.237-1.782.445-.286-.258.186-.516.414-.774-1.013.191-1.44.461-1.867.731-.31-.295-.018-.548.19-.807-.763.283-1.156.648-1.57 1.008-.14-.189-.356-.327-.095-.783-.542.311-.951.68-1.252 1.092-.335-.215-.2-.506-.202-.775-.563.459-.92.946-1.358 1.423-.088-.064-.165-.282-.232-.626-1.345 1.303-3.243 4.586-.488 5.889C28.723 9.342 31.521 7.938 34.623 6.885L34.623 6.885z"></path><g><path fill="#FF4081" d="M28.873 33.426c.014 2.433-2.113 4.414-4.75 4.428-2.638.012-4.788-1.948-4.801-4.381 0-.016 0-.031 0-.047-.014-2.433 2.112-4.414 4.75-4.428 2.638-.012 4.787 1.948 4.801 4.382C28.873 33.395 28.873 33.411 28.873 33.426zM21.333 20.846c1.979 1.296 2.335 4.234.797 6.563-1.539 2.329-4.391 3.165-6.37 1.868l0 0c-1.979-1.297-2.335-4.235-.797-6.563C16.502 20.385 19.355 19.549 21.333 20.846L21.333 20.846zM26.676 20.61c-1.98 1.295-2.337 4.235-.798 6.563 1.539 2.33 4.391 3.166 6.369 1.869l0 0c1.979-1.297 2.337-4.234.798-6.564C31.506 20.15 28.654 19.314 26.676 20.61L26.676 20.61zM11.443 22.966c2.136-.573.721 8.838-1.017 8.066C8.514 29.493 7.898 24.988 11.443 22.966zM36.135 22.848c-2.138-.572-.722 8.839 1.016 8.066C39.064 29.375 39.68 24.871 36.135 22.848zM28.875 15.839c3.687-.624 6.756 1.567 6.632 5.565C35.385 22.938 27.516 16.065 28.875 15.839zM18.687 15.72c-3.687-.621-6.755 1.57-6.631 5.567C12.177 22.821 20.045 15.949 18.687 15.72zM23.983 14.789c-2.2-.058-4.313 1.634-4.318 2.613-.006 1.19 1.741 2.412 4.333 2.442 2.648.019 4.337-.977 4.347-2.205C28.354 16.246 25.937 14.767 23.983 14.789L23.983 14.789zM24.118 39.221c1.919-.084 4.493.619 4.499 1.549.031.905-2.336 2.947-4.626 2.907-2.373.103-4.699-1.943-4.668-2.651C19.287 39.984 22.212 39.174 24.118 39.221zM17.031 33.703c1.366 1.646 1.988 4.539.849 5.39-1.079.652-3.698.384-5.56-2.29-1.255-2.245-1.094-4.527-.212-5.199C13.426 30.801 15.463 31.884 17.031 33.703L17.031 33.703zM30.932 33.183c-1.479 1.731-2.301 4.888-1.223 5.905 1.03.791 3.799.681 5.842-2.156 1.484-1.906.988-5.087.141-5.934C34.431 30.026 32.623 31.271 30.932 33.183L30.932 33.183z"></path></g>
                                </svg>
                                    <div className="indfo">
                                        <span>Raspberry pi</span>
                                    </div>
                                    <div className="progress-line raspberrypi">
                                        <span></span>
                                    </div>
                                </div>
                                <div className="bar"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                                    <path d="M 25.929688 0.57617188 C 22.408779 0.63419922 19.711484 1.3102344 19.365234 1.4121094 C 18.576234 1.6431094 16.987094 2.0801563 17.121094 2.6601562 C 17.207094 3.0311562 17.522187 3.2070781 19.367188 3.2050781 C 23.494187 3.2000781 26.703391 3.4692812 28.900391 3.8632812 C 33.368391 4.6702813 32.314922 6.9240312 31.044922 9.0820312 C 27.964922 14.335031 19.641203 20.245078 19.158203 20.580078 C 18.523203 21.017078 18.871781 21.272406 19.425781 21.066406 C 26.173781 18.556406 32.97275 14.228703 35.71875 8.9707031 C 38.04875 4.5107031 36.377172 2.3944844 32.826172 1.3964844 C 30.449797 0.72785938 28.042232 0.54135547 25.929688 0.57617188 z M 40.720703 17.056641 C 37.627078 17.062891 34.232281 17.576203 32.113281 19.408203 C 28.579281 22.464203 33.819203 27.500719 36.283203 30.386719 C 38.683203 33.192719 41.587656 36.753563 41.722656 37.976562 C 41.785656 38.537562 41.672 39.174797 41 39.591797 C 39.903 40.275797 35.370141 40.939641 25.994141 40.931641 C 23.959141 40.930641 23.545141 41.128187 23.494141 41.492188 C 23.465141 41.683188 23.402234 42.123438 25.990234 42.773438 C 26.061234 42.792437 36.735734 44.755438 42.427734 42.773438 C 48.243734 40.789437 46.779328 37.439859 45.736328 35.505859 C 44.130328 32.524859 36.716469 23.859641 36.105469 22.681641 C 35.533469 21.578641 36.367188 21.09375 36.367188 21.09375 C 36.367188 21.09375 37.607234 19.603453 47.490234 19.689453 C 49.526234 19.704453 49.950047 19.490047 49.998047 19.123047 C 50.038047 18.820047 49.456531 18.163047 47.519531 17.748047 C 46.606031 17.552047 43.814328 17.050391 40.720703 17.056641 z M 16.095703 23.578125 C 12.293008 23.623877 9.2364844 24.351953 8.5527344 24.533203 C 6.8967344 24.972203 5.9261406 25.415594 5.9941406 25.933594 C 6.0461406 26.316594 6.4689062 26.580297 8.5039062 26.529297 C 13.354906 26.411297 17.372109 26.576109 19.912109 27.287109 C 23.058109 28.165109 23.446672 29.786703 21.888672 32.970703 C 21.168672 34.441703 20.101281 35.961172 18.488281 37.576172 C 15.267281 40.808172 11.242609 42.909594 8.9746094 44.058594 C 6.7696094 45.177594 5.9639844 44.583469 6.2089844 43.480469 C 6.5109844 42.129469 12.765625 31.302734 12.765625 31.302734 C 13.235625 30.480734 13.319625 29.708516 12.765625 29.478516 C 12.291625 29.276516 11.432062 29.943563 10.539062 30.976562 C 6.8880625 35.216563 0.15429688 48.119969 0.029296875 48.542969 C -0.094703125 48.946969 0.22179688 48.997 0.34179688 49 C 3.1927969 48.978 20.694797 43.800703 26.341797 33.220703 C 29.318797 27.649703 27.812531 25.807047 23.394531 24.498047 C 20.927781 23.768672 18.37732 23.550674 16.095703 23.578125 z"></path>
                                </svg>
                                    {/* <div className="indfo">
                                        <span>SolidWorks</span>
                                    </div>
                                    <div className="progress-line solidworks">
                                        <span></span>
                                    </div>
                                </div>
                                <div className="bar"><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="IconChangeColor" height="28" width="28"><title>Altium Designer</title><path d="M19.14 5.876a1.012 1.012 0 00-.442-.442L9.744.171c-.329-.226-.843-.226-1.203-.01L5.148 2.145c-.051.041-.102.082-.144.123a1.086 1.086 0 00-.288.72l.01 6.569-.02.215.062.123a.478.478 0 00.195.206.516.516 0 00.555.01L8.859 8.2a.573.573 0 00.175-.175l.082-.165V4.643l2.251 1.326 3.536 2.077a.413.413 0 01.164.185.442.442 0 01.062.226v7.052a.52.52 0 01-.072.257c-.041.072-.082.123-.154.154l-4.225 2.488-1.573.925v-3.228l1.953-1.172 1.049-.627.185-.175.021-.051a.542.542 0 00.062-.247V9.999a.51.51 0 00-.092-.288l-.062-.123-.144-.072c-.093-.041-.175-.041-.247-.041l-.175.01-6.363 3.865a1.129 1.129 0 00-.442.463 1.281 1.281 0 00-.144.607v6.559c0 .257.103.514.329.75.082.062.154.113.236.164l3.341 1.943c.186.113.381.164.597.164.216 0 .422-.051.596-.164l8.882-5.212c.195-.103.36-.267.442-.432.113-.185.164-.401.164-.617V6.483a1.236 1.236 0 00-.153-.607zM8.387 7.624L5.447 9.32V2.988c0-.072.031-.154.092-.216l.216-.123 2.632 1.563v3.412zm-2.951 6.795c0-.093.021-.185.062-.278a.409.409 0 01.175-.175l5.973-3.629v3.392l-.956.576-2.313 1.388-2.94 1.778v-3.052zm0 6.559v-2.663l2.94-1.768v3.218l-2.632 1.552-.103-.062c-.051-.031-.093-.051-.103-.062-.061-.071-.102-.143-.102-.215zm13.128-3.403a.518.518 0 01-.072.257.342.342 0 01-.165.154l-8.892 5.222a.405.405 0 01-.452 0l-2.508-1.47 4.575-2.693v-.01l4.215-2.478a.998.998 0 00.432-.442 1.13 1.13 0 00.175-.606V8.457c0-.216-.062-.421-.165-.596a1.189 1.189 0 00-.432-.442l-3.536-2.077-3.352-1.974-1.923-1.141L8.911.788a.446.446 0 01.452 0l8.985 5.294a.319.319 0 01.154.154.517.517 0 01.062.247v11.092z" id="mainIconPathAttribute"></path></svg> */}
                                    {/* <div className="indfo">
                                        <span>Altium</span>
                                    </div>
                                    <div className="progress-line altium">
                                        <span></span>
                                    </div>
                                </div>
                                <div className="bar"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
                                    <linearGradient id="Z8bG89TnZW8~BwJjzqmnXa_r5Y16PcDkoWI_gr1" x1="22.645" x2="26.757" y1="10.881" y2="23.854" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4adddf"></stop><stop offset=".699" stop-color="#3f5352"></stop><stop offset=".863" stop-color="#442729"></stop></linearGradient><path fill="url(#Z8bG89TnZW8~BwJjzqmnXa_r5Y16PcDkoWI_gr1)" d="M21,27l-7-6c0,0,1-1.5,2.5-3s2.736-1.852,4.5-3c3.511-2.284,6.5-12,11-12L21,27z"></path><linearGradient id="Z8bG89TnZW8~BwJjzqmnXb_r5Y16PcDkoWI_gr2" x1="1" x2="37.775" y1="27.033" y2="27.033" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4adddf"></stop><stop offset=".792" stop-color="#3f5352"></stop><stop offset="1" stop-color="#442729"></stop></linearGradient><polygon fill="url(#Z8bG89TnZW8~BwJjzqmnXb_r5Y16PcDkoWI_gr2)" points="11,33.066 1,26 14,21 21.277,26.465 14,32.066"></polygon><linearGradient id="Z8bG89TnZW8~BwJjzqmnXc_r5Y16PcDkoWI_gr3" x1="11" x2="47" y1="24" y2="24" gradientUnits="userSpaceOnUse"><stop offset=".206" stop-color="#53140f"></stop><stop offset=".3" stop-color="#84360f"></stop><stop offset=".413" stop-color="#b85b10"></stop><stop offset=".511" stop-color="#df7610"></stop><stop offset=".59" stop-color="#f68710"></stop><stop offset=".639" stop-color="#ff8d10"></stop><stop offset=".729" stop-color="#fd8a10"></stop><stop offset=".8" stop-color="#f58010"></stop><stop offset=".865" stop-color="#e86f10"></stop><stop offset=".925" stop-color="#d65811"></stop><stop offset=".982" stop-color="#c03a11"></stop><stop offset="1" stop-color="#b72f11"></stop></linearGradient><path fill="url(#Z8bG89TnZW8~BwJjzqmnXc_r5Y16PcDkoWI_gr3)" d="M32,3c5,0,13,27,15,34c0,0-7.017-6.63-11-6s-5.47,6.548-9.725,10.756C23.5,44.5,21,45,21,45	s-0.206-8.124-5-11c-2.5-1.5-5-1-5-1s6.049-2.901,9.474-8.174S28.5,3,32,3z"></path>
                                </svg> */}
                                    {/* <div className="indfo">
                                        <span>Matlab</span>
                                    </div>
                                    <div className="progress-line matlab">
                                        <span></span>
                                    </div>
                                </div>
                                <div className="bar"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="29" height="29" viewBox="0 0 48 48">
                                    <linearGradient id="Ey3AfYdg0JtJGx7I73Eu7a_TpULddJc4gTh_gr1" x1="5" x2="43" y1="24" y2="24" gradientUnits="userSpaceOnUse"><stop offset=".002" stop-color="#427fdb"></stop><stop offset=".397" stop-color="#2668cb"></stop><stop offset=".763" stop-color="#1358bf"></stop><stop offset="1" stop-color="#0c52bb"></stop></linearGradient><path fill="url(#Ey3AfYdg0JtJGx7I73Eu7a_TpULddJc4gTh_gr1)" fill-rule="evenodd" d="M22.903,3.286c0.679-0.381,1.515-0.381,2.193,0	c3.355,1.883,13.451,7.551,16.807,9.434C42.582,13.1,43,13.804,43,14.566c0,3.766,0,15.101,0,18.867	c0,0.762-0.418,1.466-1.097,1.847c-3.355,1.883-13.451,7.551-16.807,9.434c-0.679,0.381-1.515,0.381-2.193,0	c-3.355-1.883-13.451-7.551-16.807-9.434C5.418,34.899,5,34.196,5,33.434c0-3.766,0-15.101,0-18.867	c0-0.762,0.418-1.466,1.097-1.847C9.451,10.837,19.549,5.169,22.903,3.286z" clip-rule="evenodd"></path><linearGradient id="Ey3AfYdg0JtJGx7I73Eu7b_TpULddJc4gTh_gr2" x1="5" x2="42.487" y1="18.702" y2="18.702" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#32bdef"></stop><stop offset="1" stop-color="#1ea2e4"></stop></linearGradient><path fill="url(#Ey3AfYdg0JtJGx7I73Eu7b_TpULddJc4gTh_gr2)" fill-rule="evenodd" d="M5.304,34.404C5.038,34.048,5,33.71,5,33.255c0-3.744,0-15.014,0-18.759c0-0.758,0.417-1.458,1.094-1.836	c3.343-1.872,13.405-7.507,16.748-9.38c0.677-0.379,1.594-0.371,2.271,0.008c3.343,1.872,13.371,7.459,16.714,9.331	c0.27,0.152,0.476,0.335,0.66,0.576L5.304,34.404z" clip-rule="evenodd"></path><path fill="#fff" fill-rule="evenodd" d="M24,10c7.727,0,14,6.273,14,14s-6.273,14-14,14s-14-6.273-14-14	S16.273,10,24,10z M24,17c3.863,0,7,3.136,7,7c0,3.863-3.137,7-7,7s-7-3.137-7-7C17,20.136,20.136,17,24,17z" clip-rule="evenodd"></path><linearGradient id="Ey3AfYdg0JtJGx7I73Eu7c_TpULddJc4gTh_gr3" x1="23.593" x2="43" y1="23.852" y2="23.852" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2aa4f4"></stop><stop offset="1" stop-color="#007ad9"></stop></linearGradient><path fill="url(#Ey3AfYdg0JtJGx7I73Eu7c_TpULddJc4gTh_gr3)" fill-rule="evenodd" d="M42.485,13.205c0.516,0.483,0.506,1.211,0.506,1.784c0,3.795-0.032,14.589,0.009,18.384c0.004,0.396-0.127,0.813-0.323,1.127	L23.593,24L42.485,13.205z" clip-rule="evenodd"></path><g opacity=".05"><path d="M33,21v2h2v2h-2v2h-2v-2h-2v-2h2v-2H33 M34,20h-1h-2h-1v1v1h-1h-1v1v2v1h1h1v1v1h1h2h1v-1v-1h1h1v-1v-2v-1h-1h-1v-1V20 L34,20z"></path><path d="M40,21v2h2v2h-2v2h-2v-2h-2v-2h2v-2H40 M41,20h-1h-2h-1v1v1h-1h-1v1v2v1h1h1v1v1h1h2h1v-1v-1h1h1v-1v-2v-1h-1h-1v-1V20 L41,20z"></path></g><g opacity=".07"><path d="M33,21v2h2v2h-2v2h-2v-2h-2v-2h2v-2H33 M33.5,20.5H33h-2h-0.5V21v1.5H29h-0.5V23v2v0.5H29h1.5V27v0.5H31h2h0.5V27v-1.5H35 h0.5V25v-2v-0.5H35h-1.5V21V20.5L33.5,20.5z"></path><path d="M40,21v2h2v2h-2v2h-2v-2h-2v-2h2v-2H40 M40.5,20.5H40h-2h-0.5V21v1.5H36h-0.5V23v2v0.5H36h1.5V27v0.5H38h2h0.5V27v-1.5H42 h0.5V25v-2v-0.5H42h-1.5V21V20.5L40.5,20.5z"></path></g><polygon fill="#fff" points="33,21 31,21 31,23 29,23 29,25 31,25 31,27 33,27 33,25 35,25 35,23 33,23"></polygon><polygon fill="#fff" points="42,23 40,23 40,21 38,21 38,23 36,23 36,25 38,25 38,27 40,27 40,25 42,25"></polygon><g><path d="M24,10c5.128,0,9.602,2.771,12.041,6.887l-6.073,3.47C28.737,18.347,26.527,17,24,17c-3.864,0-7,3.136-7,7 c0,3.863,3.137,7,7,7c2.57,0,4.812-1.392,6.029-3.459l6.132,3.374C33.75,35.142,29.21,38,24,38c-7.727,0-14-6.273-14-14 S16.273,10,24,10 M24,9C15.729,9,9,15.729,9,24s6.729,15,15,15c5.367,0,10.36-2.908,13.03-7.59l0.503-0.882l-0.89-0.49 l-6.132-3.374l-0.851-0.468l-0.493,0.837C28.09,28.863,26.11,30,24,30c-3.308,0-6-2.692-6-6s2.692-6,6-6 c2.099,0,4.011,1.076,5.115,2.879l0.507,0.828l0.842-0.481l6.073-3.47l0.882-0.504l-0.518-0.874C34.205,11.827,29.262,9,24,9L24,9 z" opacity=".05"></path><path d="M24,10c5.128,0,9.602,2.771,12.041,6.887l-6.073,3.47C28.737,18.347,26.527,17,24,17c-3.864,0-7,3.136-7,7 c0,3.863,3.137,7,7,7c2.57,0,4.812-1.392,6.029-3.459l6.132,3.374C33.75,35.142,29.21,38,24,38c-7.727,0-14-6.273-14-14 S16.273,10,24,10 M24,9.5C16.005,9.5,9.5,16.005,9.5,24S16.005,38.5,24,38.5c5.188,0,10.014-2.812,12.595-7.337l0.252-0.441 l-0.445-0.245l-6.132-3.374l-0.425-0.234l-0.246,0.418C28.431,29.269,26.286,30.5,24,30.5c-3.584,0-6.5-2.916-6.5-6.5 s2.916-6.5,6.5-6.5c2.275,0,4.346,1.166,5.542,3.118l0.253,0.414l0.421-0.241l6.073-3.47l0.441-0.252l-0.259-0.437 C33.864,12.233,29.086,9.5,24,9.5L24,9.5z" opacity=".07"></path></g>
                                </svg> */}
                                    <div className="indfo">
                                        <span>C++</span>
                                    </div>
                                    <div className="progress-line c">
                                        <span></span>
                                    </div>
                                </div>
                                <div className="bar"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
                                    <path fill="#0277BD" d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"></path><path fill="#FFC107" d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"></path>
                                </svg>
                                    <div className="indfo">
                                        <span>Python</span>
                                    </div>
                                    <div className="progress-line python">
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container1 ">
                            <h1 className="heading1">Professional Skills</h1>
                            <div className="radial-bars">
                                <div className="radial-bar">
                                    <svg x="0px" y="0px" viewBox="0 0 200 200">
                                        <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                                        <circle className="path path-1" cx="100" cy="100" r="80"></circle>
                                    </svg>
                                    <div className="percentage">90%</div>
                                    <div className="text"> Creativity</div>
                                </div>
                                <div className="radial-bar">
                                    <svg x="0px" y="0px" viewBox="0 0 200 200">
                                        <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                                        <circle className="path path-2" cx="100" cy="100" r="80"></circle>
                                    </svg>
                                    <div className="percentage">65%</div>
                                    <div className="text"> Comunication</div>
                                </div>
                                <div className="radial-bar">
                                    <svg x="0px" y="0px" viewBox="0 0 200 200">
                                        <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                                        <circle className="path path-3" cx="100" cy="100" r="80"></circle>
                                    </svg>
                                    <div className="percentage">80%</div>
                                    <div className="text"> Problem Solving</div>
                                </div>
                                <div className="radial-bar">
                                    <svg x="0px" y="0px" viewBox="0 0 200 200">
                                        <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                                        <circle className="path path-4" cx="100" cy="100" r="80"></circle>
                                    </svg>
                                    <div className="percentage">85%</div>
                                    <div className="text"> Team Work</div>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div class="call-to-action">
                        <h2>Interested to work together?</h2>
                        <a href={mypdf} onToggle="Nadim Shahriar-resume 2024.pdf">
                            <button id="resume-button">GRAB MY RESUME</button>
                        </a>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Skill
