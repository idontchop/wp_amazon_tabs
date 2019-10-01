import React from 'react';


/**
 * This was a learning class and not designed with best practices or patterns.
 */
class Product extends React.Component {

    constructor (props) {
        super(props);

        this.state = { selected: 0 };
        
        // init empty products state

        }

        componentDidMount () {
            
        }
    
        componentWillUpdate ( nextProps) {

            // inline CSS start
            this.menuStyle = {overflow: 'hidden', backgroundColor: '#fff'};

            // Define button styles and size
            let buttonWidth = (nextProps.products ? ((1.0 / nextProps.products.length) * 100) : 100);
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


    changeProduct = ( selected ) => {

        this.setState( { selected: selected } );

    }

    render () {
        if ( this.props.products == null)
            return <div></div>;
        else { return (
        <div style={ window.innerWidth < 721 ? this.paneStyleMobile: this.paneStyle}>
            <div style={this.menuStyle}>{/* Tab Buttons */}
                {this.props.products.map( (o, index) => 
                    <button style={ this.state.selected === index ? this.activeButtonStyle : this.buttonStyle } 
                    onClick={ (e) => this.changeProduct(index)} key={index}> {o.site} </button>)}
            </div>
            <div style={this.internalStyle}>
                {this.props.products && <Title name = {this.props.products[this.state.selected].name} /> }
                {this.props.products && <PicUrl url = {this.props.products[this.state.selected].url} /> }
                {this.props.products && <TextUrl url = {this.props.products[this.state.selected].text_url}
                    subtitle={this.props.products[this.state.selected].subtitle} /> }
            </div>
        </div>
        )};
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