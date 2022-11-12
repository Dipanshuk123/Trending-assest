import { FunctionComponent } from "react";
import "./P2PMarkets.css";
import Data from "../data.json"

const P2PMarkets: FunctionComponent = () => {
  return (
    <div className="p2p-markets-div">
      <div className="trending-assets-div">
        <span className="t-span">t</span>rending Assets
      </div>
      <img
        className="vuesaxlinearactivity-icon"
        alt=""
        src="../vuesaxlinearactivity.svg"
      />
      <div className="rectangle-div" />
      {
        Data.map(curr=> {
          return(
            <div className="frame-div">
            <img className="vector-icon" alt="" src={curr.images} />
            <div className="bitcoin-btc-div">{curr.name}</div>
            <div className="tvl-div">tvl</div>
            <div className="price-div">Price</div>
            <div className="popular-pairs-div">
              <span className="t-span">p</span>
              <span className="opular-pairs-span">opular pairs</span>
            </div>
            <img className="vector-icon1" alt="" src={curr.subImages} />
            <img className="bitcoin-sv-bsv" alt="" src={curr.subImagesnew} />
            <div className="rectangle-div1" />
            <div className="rectangle-div2" />
            <div className="div">{curr.Price}</div>
            <div className="div1">{curr.Percentage}</div>
            <div className="div2">{curr.subPrice}</div>
            <img className="frame-icon" alt="" src={curr.iconImages} />
          </div>
          )
        })
}
      <img className="vector-icon10" alt="" src="../vector10.svg" />
      <img className="solana-sol-icon" alt="" src="../solana-sol.svg" />
      <img className="bitcoin-sv-bsv5" alt="" src="../bitcoin-sv-bsv4.svg" />
      <img className="ethereum-eth-icon" alt="" src="../ethereum-eth.svg" />
      <img className="binance-coin-bnb" alt="" src="../binance-coin-bnb.svg" />
      <img className="group-icon" alt="" src="../group-2720.svg" />
      <img className="vector-icon11" alt="" src="../vector11.svg" />
      <img className="ethereum-eth-icon1" alt="" src="../ethereum-eth1.svg" />
      <img
        className="binance-coin-bnb1"
        alt=""
        src="../binance-coin-bnb1.svg"
      />
      <img className="vector-icon12" alt="" src="../vector12.svg" />
      <img className="shiba-inu-shib" alt="" src="../shiba-inu-shib.svg" />
    </div>
  );
};

export default P2PMarkets;
