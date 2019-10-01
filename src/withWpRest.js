import React from 'react';

/**
 * Follows the pattern of a Rest API HoC.
 * The argument url is expected to be the url of the Rest which would be supplied
 * by Wordpress as an argument.
 * 
 * When the data is fetched, it is written to state and supplied to Component passed in.
 * 
 * @param {*} url 
 */
const withRestData = url => Component => (

    class extends React.Component {
        constructor (props) {
            super (props);


        }

        componentDidMount () {
            fetch (url)
            .then ( response => response.json())
            .then ( responseData => {

                this.setState ( {products: responseData} );
                console.log (responseData);

            })
            .catch ( err => console.error(err) );
        }

        render () {
            //return <div></div>;
            return <Component {...this.props} {...this.state} />;
        }
    }

);

export default withRestData;