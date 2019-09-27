import React from 'react';


/**
 * This was a learning class and not designed with best practices or patterns.
 */
class Product extends React.Component {

    constructor (props) {
        super(props);
        this.state = this.props.product[0];
        this.state.selected = 0;
        
        // init empty products state


        // inline CSS start
        this.menuStyle = {overflow: 'hidden', backgroundColor: '#fff'};

        // Define button styles and size
        let buttonWidth = (1.0 /  this.props.product.length) * 100;
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

        // Define the main pane size
        this.paneStyle = {
            backgroundColor: '#fff',
            marginLeft: 'auto',
            marginRight: 'auto',
            border: '1px solid #000',
            display: 'block',
            width: '70%',
            minheight: '300px',
            maxWidth: '720px',
            padding: '0',
            writeable: true
        }

        this.paneStyleMobile = Object.assign ( {}, this.paneStyle );
        this.paneStyleMobile.width = '100%';

        // Used to resize, other setting: 'small' set in DidMount
        this.setState.view = 'large';

        // internal pain where props are printed
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

                this.setState ( {products: responseData} );

            })
            .catch ( err => console.error(err) );

            /* If we are mobile, we want to be 100% */
            if ( window.innerWidth < 721 ) {
                this.setState ({ view: 'small'} );
            }

        }


    changeProduct = ( selected ) => {

        this.setState( { selected: selected } );

    }

    render () {
        return (
        <div style={ this.state.view == 'small' ? this.paneStyleMobile: this.paneStyle}>
            <div style={this.menuStyle}>{/* Tab Buttons */}
                {this.props.product.map( (o, index) => 
                    <button style={ this.state.num === index ? this.activeButtonStyle : this.buttonStyle } 
                    onClick={ (e) => this.changeProduct(index)} key={index}>{o.site}</button>)}
            </div>
            <div style={this.internalStyle}>
                {this.state.products && <Title name = {this.state.products[this.state.selected].name} /> }
                {this.state.products && <PicUrl url = {this.state.products[this.state.selected].url} /> }
                {this.state.products && <TextUrl url = {this.state.products[this.state.selected].text_url}
                    subtitle={this.state.products[this.state.selected].subtitle} /> }
            </div>
        </div>
        );
    }
}

const Title = (props) => (
    <h2>{props.name}</h2>
)

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