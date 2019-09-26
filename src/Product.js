import React from 'react';


class Product extends React.Component {

    constructor (props) {
        super(props);
        this.state = this.props.product[0];
        this.state.num = 0;
        this.menuStyle = {overflow: 'hidden', backgroundColor: '#fff'};
        let buttonWidth = (1.0/  this.props.product.length) * 100;
        this.buttonStyle = {
            backgroundColor: '#ccc',
            float: 'left',
            border: 'none',
            outline: 'none',
            cursor: 'pointer',
            padding: '14px 16px',
            transition: '0.3s',
            minWidth: buttonWidth + '%'
        };
        this.activeButtonStyle = Object.assign ( {}, this.buttonStyle );
        this.activeButtonStyle.backgroundColor = '#fff';

        this.paneStyle = {
            backgroundColor: '#fff',
            marginLeft: 'auto',
            marginRight: 'auto',
            border: '1px solid #000',
            display: 'block',
            width: '70%',
            maxWidth: '600px',
            padding: '0'
        }

        this.internalStyle = {
            backgroundColor: '#fff',
            textAlign: 'center',
            marginBottom: '0'
        }
   

        }
    
        componentDidMount () {
            fetch ('http://localhost/~nate/wp-json/idc_product_tabs/v1/get_menu/1')
            .then ( response => response.json())
            .then ( responseData => {
                console.log(responseData);
                this.setState ( {subtitle: responseData[0].subtitle });

            })
            .catch ( err => console.error(err) );
        }


    changeProduct = ( selected ) => {

        this.setState( {...this.props.product[selected], num: selected} );

    }

    render () {
        return (
        <div style={this.paneStyle}>
        <div style={this.menuStyle}>{/* Tab Buttons */}
            {this.props.product.map( (o, index) => 
                <button style={ this.state.num === index ? this.activeButtonStyle : this.buttonStyle } 
                onClick={ (e) => this.changeProduct(index)} key={index}>{o.site}</button>)}
        </div>
        <div style={this.internalStyle}>
            <h1>This is a {this.state.name}</h1>
            <PicUrl url = {this.state.url} />
            <TextUrl url = {this.state.textUrl} subtitle={this.state.subtitle} />
        </div>
        </div>
        );
    }
}

/**
 * Accepts the text url and a subtitle
 */
const TextUrl = (props) => (
        <p><a href={props.url}>{props.subtitle}</a>
        </p>
)

/**
 * sets the html from amazon
 */
const PicUrl = (props) => (
    <div dangerouslySetInnerHTML = {{__html: props.url}} /> )
    
export default Product;