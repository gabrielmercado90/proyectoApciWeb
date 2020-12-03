import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            location: []
        }
    }

    componentDidMount() {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        let cont = 0
        fetch(proxyurl + 'http://ec2-54-152-27-105.compute-1.amazonaws.com:3000/Usuario')
            .then((response) => response.json())
            .then((json) => this.setState({ location: json })
            )
            .catch((error) => console.error(error))
            .finally()
    }


    marker() {
        let out = []
        for (let index = 0; index < this.state.location.length; index++) {
            console.log(index)

            let temp = (<Marker
                title={'The marker`s title will appear as a tooltip.'}
                name={`${index}`}
                //position={{ lat: 37.778519, lng: -122.405640 }}
                position={{ lat: this.state.location[index].Latitud, lng: this.state.location[index].Longitud }}
            />);

            out.push(temp);

        }
        console.log(out)
        return (<div>{out}</div>);
    }
    // name() {
    // }

    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: '6rem' }}>

                <Map google={this.props.google}
                    style={{ width: '80%', height: '80%', position: 'relative' }}
                    className={'map'}
                    zoom={14}>
                    {
                        this.state.location.map((location,index) =>
                            <Marker
                                title={'The marker`s title will appear as a tooltip.'}
                                name={`NAme`}
                                //position={{ lat: 37.778519, lng: -122.405640 }}
                                position={{ lat: this.state.location[index].Latitud, lng: this.state.location[index].Longitud }}
                            />
                        )}
                    {/* <Marker
                        title={'The marker`s title will appear as a tooltip.'}
                        name={'SOMA'}
                        position={{ lat: 37.778519, lng: -122.405640 }} />
                    <Marker
                        name={'Dolores park'}
                        position={{ lat: 37.759703, lng: -122.428093 }} />
                    <Marker />
                    <Marker
                        name={'Your position'}
                        position={{ lat: 37.762391, lng: -122.439192 }} /> */}
                </Map>
            </div>


        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBnxvCl7rUeGz8ahhD3pjsjAwaq39xC3Vc'
})(MapContainer)