import React from 'react';
import './App.css';
import Product from './Product.js';
import withRestData from './withWpRest.js';

var product = [{
  name: "Sunscreen",
  subtitle: "With a convenient clips for hikers",
  url: '<a href="https://www.amazon.com/NAAWK-Sunscreen-Outdoor-Protection-Active/dp/B06XXPVLC1/ref=as_li_ss_il?keywords=hiking+sunscreen&amp;qid=1569259280&amp;s=hpc&amp;sr=1-8&amp;linkCode=li2&amp;tag=idc256-20&amp;linkId=d3ab116f97376c94ff7ae2d0c5a11853&amp;language=en_US" target="_blank" rel="noopener noreferrer"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&amp;ASIN=B06XXPVLC1&amp;Format=_SL160_&amp;ID=AsinImage&amp;MarketPlace=US&amp;ServiceVersion=20070822&amp;WS=1&amp;tag=idc256-20&amp;language=en_US"></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=idc256-20&amp;language=en_US&amp;l=li2&amp;o=1&amp;a=B06XXPVLC1" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;">',
  textUrl: 'https://amzn.to/2ldoOcp',
  site: 'amazon'

},{
  name: "Chapstick",
  subtitle: "A must-have for the Everest Base Camp Trek",
  url: '<a href="https://www.amazon.com/ChapStick-Ultra-0-15-Stick-Pack/dp/B00DWGBHKG/ref=as_li_ss_il?keywords=hiking+sunscreen&amp;qid=1569259280&amp;s=hpc&amp;sr=1-18&amp;linkCode=li2&amp;tag=idc256-20&amp;linkId=8a1242847734465d784dc0e0a52a54b7&amp;language=en_US" target="_blank" rel="noopener noreferrer"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&amp;ASIN=B00DWGBHKG&amp;Format=_SL160_&amp;ID=AsinImage&amp;MarketPlace=US&amp;ServiceVersion=20070822&amp;WS=1&amp;tag=idc256-20&amp;language=en_US"></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=idc256-20&amp;language=en_US&amp;l=li2&amp;o=1&amp;a=B00DWGBHKG" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;">',
  textUrl: 'https://amzn.to/2kLKwUU',
  site: 'amazon2'

},{
  name: "Sunscreen #2",
  subtitle: "For more sensitive skin",
  url: '<a href="https://www.amazon.com/Sun-Bum-Mineral-Based-SPF-Hypoallergenic/dp/B006OOLD2U/ref=as_li_ss_il?keywords=hiking+sunscreen&qid=1569304507&s=hpc&sr=1-31&linkCode=li2&tag=idc256-20&linkId=f6a583b8cb479d2e2d144b642f29971c&language=en_US" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B006OOLD2U&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=idc256-20&language=en_US" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=idc256-20&language=en_US&l=li2&o=1&a=B006OOLD2U" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',
  textUrl: 'https://amzn.to/2ldx648',
  site: 'amazon'

}

]

function App( props ) {

  const withProducts = withRestData('http://localhost/~nate/wp-json/idc_product_tabs/v1/get_menu/1');
  const ProductList = withProducts(Product);
  return <ProductList />;

}

class TextUrlClass extends React.Component {
  constructor (props) {
    super (props);
    this.state = { selected: 0 };
    console.log ( props );
  }
  
  render () {
    console.log (this.props);
    return <div>rendered</div>
  }
}

export default App;
