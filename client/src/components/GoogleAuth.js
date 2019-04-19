import React from 'react';

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
              clientId:
                "701725262860-ukpdosfr0nf3rr2bi6nfe6u6qgfi9hbh.apps.googleusercontent.com",
            scope: 'email'
            });
        });
    }

    render() {
        return <div>Google Auth</div>
    } 
};

export default GoogleAuth; 