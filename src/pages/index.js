import React, {useState} from "react"
import Layout from "../components/Layout";
import {StaticImage} from "gatsby-plugin-image";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import MusicPlayer from "../components/MusicPlayer";
import {Link} from "gatsby";

function IndexPage (){
    const terraGradient = "text-transparent bg-clip-text bg-gradient-to-tr from-terra-blue via-terra-blue to-terra-yellow";
    const onHover = "hover:drop-shadow-sm";
    const [info, setInfo] = useState(0);

    function handleDecreaseInfo(){
        if (info > 0) {
            setInfo(info - 1);
        }
        else {
            setInfo(2);
        }
    }

    function handleIncreaseInfo(){
        if (info < 2) {
            setInfo(info + 1);
        } else {
            setInfo(0);
        }
    }

    var infoGraphic;
    switch (info){
        case 0:
            infoGraphic = <div className="flex h-full w-full">
                <StaticImage src="../images/about-mascot-1.png" alt="Do Kwon NFT" className="w-40"/>
                <p className="text-xl py-6 pl-4">9 per mint bc <span className="font-semibold">Greed is Good</span></p>
            </div>;
            break;
        case 1:
            infoGraphic = <div className="flex h-full w-full">
                <StaticImage src="../images/about-mascot-2.png" alt="Do Kwon NFT" className="w-40"/>
                <p className="text-xl py-6 pl-4">999 in the treasury because <span className="font-semibold">99.9</span> a <span className="font-red-300">good</span> number</p>
            </div>;
            break;
        case 2:
            infoGraphic = <div className="flex h-full w-full">
                <StaticImage src="../images/about-mascot-3.png" alt="Do Kwon NFT" className="w-40"/>
                <p className="text-xl py-6 pl-4">9 per mint bc <span className="font-semibold">Greed is Good</span></p>
            </div>;
        break;
    }

    return (
      <Layout>
        <div className="h-full max-h-screen overflow-hidden relative text-white">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
                <nav className="w-full flex items-center justify-center py-4">
                    <div className="text-5xl flex space-x-6">
                        <div className="cursor-pointer">
                            <a href="https://twitter.com/lunaticswtf/" target="_blank">
                                <i className={`fa-brands fa-twitter ${terraGradient} ${onHover}`} />
                            </a>
                        </div>

                        <a href="https://opensea.io/" target="_blank"><StaticImage src="../images/opensea.png" alt="Opensea" className={`w-12 ${onHover}`}  /></a>
                        <MusicPlayer />
                    </div>
                </nav>
            </div>
            <div className=" h-full flex justify-center items-center">
                <StaticImage src="../images/cover.png" alt="Kwon Town" className="min-h-screen bg-no-repeat" />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="flex flex-col items-center">
                    <h1 className="text-6xl mt-4 whitespace-nowrap">lunatics <span className="underline">wtf</span></h1>
                    <StaticImage src="../images/website-mascot.png" alt="Do Kwon Mascot" className="w-32" />
                </div>
            </div>

            <div className="absolute top-3/4 left-1/2 -translate-x-1/2">
                <div className="flex space-x-4 items-center justify-center">
                    <p className="text-2xl whitespace-nowrap font-semibold">200/9999 in Kwon Town</p>
                    <AnchorLink to="#about"><i className="fa-regular fa-circle-question text-2xl cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-dashed" /></AnchorLink>
                </div>
                <div className="flex justify-center pt-4 pb-6">
                    <Link to="/mint">
                        <div className="px-4 py-2 btn-gradient-border rounded-lg hover:drop-shadow-xl hover:bg-white">
                            Mint Now
                        </div>
                    </Link>
                </div>
                <h2 className="text-5xl font-light text-center">#GreedisGood</h2>
            </div>
        </div>
        <div className="h-full px-20 font-prata text-white bg-gradient-to-b from-purple to-green">
            <h1 className="text-5xl text-center py-12">10 Kwon Commandments</h1>
            <div className="flex flex-col space-y-12 items-center justify-between px-60">
                <div className="flex justify-start items-center space-x-6 w-full">
                    <StaticImage src="../images/faces/crown-1.png" alt="Kwon commandment 1" className="w-32"/>
                    <h4 className="text-5xl font-prata">1.</h4>
                    <p className="text-3xl font-light">Greed is Good</p>
                </div>
                <div className="flex justify-end items-center space-x-6 w-full text-right">
                    <p className="text-3xl font-light">99.99% is a good number whether red or green</p>
                    <h4 className="text-5xl font-prata">2.</h4>
                    <div className="flex justify-center items-center">
                        <StaticImage src="../images/faces/mcdonalds-2.png" alt="Kwon commandment 1" className="w-40"/>
                    </div>

                </div>
                <div className="flex justify-start items-center space-x-6 w-full">
                    <StaticImage src="../images/faces/moustache-3.png" alt="Kwon commandment 2" className="w-48"/>
                    <h4 className="text-5xl font-prata">3.</h4>
                    <p className="text-3xl font-light">Stable is a state of mind</p>
                </div>
                <div className="flex justify-end items-center space-x-6 w-full text-right">
                    <p className="text-3xl font-light">It’s not a crash, it’s a surprise free mint</p>
                    <h4 className="text-5xl font-prata">4.</h4>
                    <StaticImage src="../images/faces/aviators-4.png" alt="Kwon commandment 3" className="w-40"/>
                </div>
                <div className="flex justify-start items-center space-x-6 w-full">
                    <StaticImage src="../images/faces/luna-5.png" alt="Kwon commandment 1" className="w-40"/>
                    <h4 className="text-5xl font-prata">5.</h4>
                    <p className="text-3xl font-light">Watching companies burn is entertaining</p>
                </div>
                <div className="flex justify-end items-center space-x-6 w-full text-right">
                    <p className="text-3xl font-light">If not entertained, burn your own company</p>
                    <h4 className="text-5xl font-prata">6.</h4>
                    <StaticImage src="../images/faces/sad-6.png" alt="Kwon commandment 1" className="w-40"/>
                </div>
                <div className="flex justify-start items-center space-x-6 w-full">
                    <StaticImage src="../images/faces/mask-7.png" alt="Kwon commandment 1" className="w-40"/>
                    <h4 className="text-5xl font-prata">7.</h4>
                    <p className="text-3xl font-light">A utility is a Ponzi with extra steps</p>
                </div>
                <div className="flex justify-end items-center space-x-6 w-full text-right">
                    <p className="text-3xl font-light">There’s nothing an airdrop can’t fix</p>
                    <h4 className="text-5xl font-prata">8.</h4>
                    <StaticImage src="../images/faces/monocle-8.png" alt="Kwon commandment 1" className="w-40"/>
                </div>
                <div className="flex justify-start items-center space-x-6 w-full">
                    <StaticImage src="../images/faces/yolo-9.png" alt="Kwon commandment 1" className="w-40"/>
                    <h4 className="text-5xl font-prata">9.</h4>
                    <p className="text-3xl font-light">When price is 0 add a 2<span className="line-through">.0</span> to the front</p>
                </div>
                <div className="flex justify-end items-center space-x-6 w-full text-right">
                    <p className="text-3xl font-light">You can’t spell Treasury without Usery</p>
                    <h4 className="text-5xl font-prata">10.</h4>
                    <StaticImage src="../images/faces/lasers-10.png" alt="Kwon commandment 1" className="w-40"/>
                </div>
            </div>
        </div>
        <div id="about" className="h-full flex flex-col items-center bg-gradient-to-b from-green to-cream">
            <h2 className="text-5xl text-center py-20">Welcome to <span className="font-bold">Kwon Town</span></h2>
            <div className="flex space-x-6 justify-center items-center w-1/2">
                <i className="fa-solid fa-chevron-left" onClick={handleDecreaseInfo} />
                {
                    infoGraphic
                }
                <i className="fa-solid fa-chevron-right" onClick={handleIncreaseInfo} />
            </div>
            <Link to="/mint">
                <div className="px-4 py-2 bg-black text-white rounded-lg mt-4">
                    Enter Now
                </div>
            </Link>
        </div>
        <footer className="w-full flex items-center justify-center py-12 bg-cream">
          <div className="text-5xl flex space-x-6">
              <a href="https://twitter.com/lunaticswtf/" target="_blank"><i className={`fa-brands fa-twitter ${terraGradient} ${onHover}`} /></a>
              <a href="https://opensea.io/" target="_blank"><StaticImage src="../images/opensea.png" alt="Opensea" className={`w-12 ${onHover}`}  /></a>
              {/*<button onClick={start}>Play</button>*/}
              <MusicPlayer />
              {/*<i className={`fa-solid fa-boombox ${terraGradient} ${onHover}`} />*/}
          </div>
        </footer>
      </Layout>
    )
}

export default IndexPage
