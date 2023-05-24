import React, {useState, useEffect} from "react"
import CurrenciesSelect from "../components/CurrenciesSelect"
import CurrencyDetails from "../components/CurrencyDetails";
import Favourites from "../components/Favourites";
import Total from "../components/Total";
// import Chart from "../components/Chart";
import { Chart as Google } from "react-google-charts"


const CurrencyContainer = () => {


    const [currencies, setCurrencies] = useState([]);
    const [selectedCurrency, setSelectedCurrency] = useState(null)
    const [data, setData] = useState([]);
    // const [googleLoaded, setGoogleLoaded] = useState(false)

    useEffect(() => {
      getCurrencies();
      getChartData();
      // loadGoogleCharts();
  }, [])

//   const loadGoogleCharts = () => {
//     const script = document.createElement("script");
//     script.src = "https://www.gstatic.com/charts/loader.js";
//     script.onload = () => {
//       setGoogleLoaded(true)
//     }
//     document.body.appendChild(script)
// }

//     useEffect(() => {
//       if (googleLoaded) {
//         google.charts.load("current", {packages: ["line"]})
//         goog.charts.setOnLoadCallback(drawChart)
//       }
//     }, [googleLoaded])


const getChartData = function(){
  fetch("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=200&interval=daily")
  .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Failed to fetch data");
      }
    })
  .then((data) => {
    const chartData = [["Date", "Price"]]
    data.prices.forEach((priceData) => {
      chartData.push([new Date(priceData[0]), priceData[1] ])
    })
      setData(chartData);
    })
}
  
// const options = {
//   chart: {
//     title: "7day data on BTC",
//     subtitle: 'in dollars (USD)'
//   },
//   width: 900,
//   height: 500
// };
//     function drawChart() {

//       google.charts.load('current', {'packages':['line']});
//       google.charts.setOnLoadCallback(drawChart);
  
//       var data = new google.visualization.DataTable();
//       data.addColumn('number', 1);
//       data.addColumn('number', 2);
//       data.addColumn('number', 3);
//       data.addColumn('number', 4);
//       data.addColumn('number', 5);
//       data.addColumn('number', 6);
//       data.addColumn('number', 7);
  
//       data.addRows(
//         data.map((dat) => {
//             console.log(dat.price)
//         })
//       );

  
//       const chart = new google.charts.Line(document.getElementById('linechart_material'));
  
//       chart.draw(data, google.charts.Line.convertOptions(options));
//     }



    const getCurrencies = function(){
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C%2024h%2C%207d&locale=en",{
            headers: {
              "Access-Control-Allow-Origin": "*",
            },
          })
        .then((res) => {
            if (res.ok) {
              return res.json();
            } else {
              throw new Error("Failed to fetch currencies");
            }
          })
        .then((currencies) => {setCurrencies(currencies);
          })
    }

    const onCurrencySelected = function(currency) {
        setSelectedCurrency(currency)
        
    }
    return (
        <div>
          <div><Total
            currencies = {currencies}
            
          />
          </div>
        <h1>Favourites</h1>
            <Favourites
            selectedCurrency = {selectedCurrency}
            currencies = {currencies}
            onCurrencySelected={onCurrencySelected}
        />
        <h1>Top 100</h1>
            <CurrenciesSelect
            currencies = {currencies}
            onCurrencySelected={onCurrencySelected}
        />
        {selectedCurrency? 
        <CurrencyDetails
          currency = {selectedCurrency}/> : null}
        <Google
            chartType="LineChart"
            width={900}
            height={500}
            data={data} // Modify this to match your chart data
            options={{
          chart: {
            title: "7-day data on BTC",
            subtitle: "in dollars (USD)",
          },
        }}
            // chartPackages={["corechart", "line"]}
            loader={<div>Loading Chart</div>}
            rootProps={{ "data-testid": "1" }}
      />

        </div>
    )
}

export default CurrencyContainer