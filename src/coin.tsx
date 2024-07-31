import React, { useEffect, useState } from "react";


export interface CoinInfo {
    rank: number
    name: string,
    symbol: string,
    price: number,
};


const Coin = () => {

    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState<any[]>([]);

    const coinAPI = async () => {

        const coinURL = await fetch("https://api.coinpaprika.com/v1/tickers?limit=10");

        const res = await coinURL.json();

        setCoins(res);
        setLoading(false);
    };




    useEffect(
        () => {
            coinAPI()
        }, []
    )

    return (
        <div>
            {loading ? "loading...." : null}
            {coins.map((value, index) => <CoinList key={index}
                rank={value.rank}
                name={value.name}
                symbol={value.symbol}
                price={value.quotes.USD.price}

            />)}
        </div>
    )

}

const CoinList: React.FC<CoinInfo> = ({ rank, name, symbol, price }) => {

    return (
        <div>
            <span>{rank}</span>
            <span>{name}</span>
            <span>{symbol}</span>
            <span>{Math.round(price)}USD</span>
        </div>
    )
}

export default Coin;