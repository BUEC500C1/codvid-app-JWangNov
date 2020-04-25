import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import MapView, {Callout, Marker} from 'react-native-maps'

export default class Map extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            casesUS: '',
            recoveredUS: '',
            deathsUS: '',

            casesCN: '',
            recoveredCN: '',
            deathsCN: '',

            casesIN: '',
            recoveredIN: '',
            deathsIN: '',

            casesID: '',
            recoveredID: '',
            deathsID: '',

            casesPK: '',
            recoveredPK: '',
            deathsPK: '',

            casesBR: '',
            recoveredBR: '',
            deathsBR: '',

            casesNG: '',
            recoveredNG: '',
            deathsNG: '',

            casesRU: '',
            recoveredRU: '',
            deathsRU: '',

            casesMX: '',
            recoveredMX: '',
            deathsMX: '',
        };
    }

    componentDidMount() {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch('https://api.covid19api.com/summary', requestOptions)
            .then(response => response.json())
            .then(json => {

                this.setState({
                    casesCN: json['Countries'][45]['TotalConfirmed'],
                });
                this.setState({
                    recoveredCN: json['Countries'][45]['TotalRecovered'],
                });
                this.setState({
                    deathsCN: json['Countries'][45]['TotalDeaths'],
                });


                this.setState({
                    casesUS: json['Countries'][236]['TotalConfirmed'],
                });
                this.setState({
                    recoveredUS: json['Countries'][236]['TotalRecovered'],
                });
                this.setState({
                    deathsUS: json['Countries'][236]['TotalDeaths'],
                });


                this.setState({
                    casesIN: json['Countries'][101]['TotalConfirmed'],
                });
                this.setState({
                    recoveredIN: json['Countries'][101]['TotalRecovered'],
                });
                this.setState({
                    deathsIN: json['Countries'][101]['TotalDeaths'],
                });


                this.setState({
                    casesID: json['Countries'][102]['TotalConfirmed'],
                });
                this.setState({
                    recoveredID: json['Countries'][102]['TotalRecovered'],
                });
                this.setState({
                    deathsID: json['Countries'][102]['TotalDeaths'],
                });


                this.setState({
                    casesPK: json['Countries'][167]['TotalConfirmed'],
                });
                this.setState({
                    recoveredPK: json['Countries'][167]['TotalRecovered'],
                });
                this.setState({
                    deathsPK: json['Countries'][167]['TotalDeaths'],
                });


                this.setState({
                    casesBR: json['Countries'][30]['TotalConfirmed'],
                });
                this.setState({
                    recoveredBR: json['Countries'][30]['TotalRecovered'],
                });
                this.setState({
                    deathsBR: json['Countries'][30]['TotalDeaths'],
                });


                this.setState({
                    casesNG: json['Countries'][161]['TotalConfirmed'],
                });
                this.setState({
                    recoveredNG: json['Countries'][161]['TotalRecovered'],
                });
                this.setState({
                    deathsNG: json['Countries'][161]['TotalDeaths'],
                });


                this.setState({
                    casesRU: json['Countries'][182]['TotalConfirmed'],
                });
                this.setState({
                    recoveredRU: json['Countries'][182]['TotalRecovered'],
                });
                this.setState({
                    deathsRU: json['Countries'][182]['TotalDeaths'],
                });


                this.setState({
                    casesMX: json['Countries'][142]['TotalConfirmed'],
                });
                this.setState({
                    recoveredMX: json['Countries'][142]['TotalRecovered'],
                });
                this.setState({
                    deathsMX: json['Countries'][142]['TotalDeaths'],
                });


            })
            .catch(error => {
                console.error(error);
            });
    }

    render() {
        return (

            <View>
                <MapView
                    style={styles.map}
                    region={{
                        latitude: 40,
                        longitude: 116,
                        latitudeDelta: 50,
                        longitudeDelta: 50,
                    }}
                >


                    <Marker
                        coordinate={{
                            latitude: 40,
                            longitude: 116,
                        }}
                    >
                        <Callout>
                            <Text style={styles.title}>China</Text>
                            <Text style={styles.plainText}>Confirmed: {this.state.casesCN}</Text>
                            <Text style={styles.plainText}>Recovered: {this.state.recoveredCN}</Text>
                            <Text style={styles.plainText}>Deaths: {this.state.deathsCN}</Text>
                        </Callout>
                    </Marker>


                    <Marker
                        coordinate={{
                            latitude: 39,
                            longitude: -77,
                        }}
                    >
                        <Callout>
                            <Text style={styles.title}>United States</Text>
                            <Text style={styles.plainText}>Confirmed: {this.state.casesUS}</Text>
                            <Text style={styles.plainText}>Recovered: {this.state.recoveredUS}</Text>
                            <Text style={styles.plainText}>Deaths: {this.state.deathsUS}</Text>
                        </Callout>
                    </Marker>


                    <Marker
                        coordinate={{
                            latitude: 28,
                            longitude: 77,
                        }}
                    >
                        <Callout>
                            <Text style={styles.title}>India</Text>
                            <Text style={styles.plainText}>Confirmed: {this.state.casesIN}</Text>
                            <Text style={styles.plainText}>Recovered: {this.state.recoveredIN}</Text>
                            <Text style={styles.plainText}>Deaths: {this.state.deathsIN}</Text>
                        </Callout>
                    </Marker>


                    <Marker
                        coordinate={{
                            latitude: -6,
                            longitude: 107,
                        }}
                    >
                        <Callout>
                            <Text style={styles.title}>Indonesia</Text>
                            <Text style={styles.plainText}>Confirmed: {this.state.casesID}</Text>
                            <Text style={styles.plainText}>Recovered: {this.state.recoveredID}</Text>
                            <Text style={styles.plainText}>Deaths: {this.state.deathsID}</Text>
                        </Callout>
                    </Marker>


                    <Marker
                        coordinate={{
                            latitude: 34,
                            longitude: 73,
                        }}
                    >
                        <Callout>
                            <Text style={styles.title}>Pakistan</Text>
                            <Text style={styles.plainText}>Confirmed: {this.state.casesPK}</Text>
                            <Text style={styles.plainText}>Recovered: {this.state.recoveredPK}</Text>
                            <Text style={styles.plainText}>Deaths: {this.state.deathsPK}</Text>
                        </Callout>
                    </Marker>


                    <Marker
                        coordinate={{
                            latitude: -16,
                            longitude: -48,
                        }}
                    >
                        <Callout>
                            <Text style={styles.title}>Brazil</Text>
                            <Text style={styles.plainText}>Confirmed: {this.state.casesBR}</Text>
                            <Text style={styles.plainText}>Recovered: {this.state.recoveredBR}</Text>
                            <Text style={styles.plainText}>Deaths: {this.state.deathsBR}</Text>
                        </Callout>
                    </Marker>


                    <Marker
                        coordinate={{
                            latitude: 9,
                            longitude: 7,
                        }}
                    >
                        <Callout>
                            <Text style={styles.title}>Nigeria</Text>
                            <Text style={styles.plainText}>Confirmed: {this.state.casesNG}</Text>
                            <Text style={styles.plainText}>Recovered: {this.state.recoveredNG}</Text>
                            <Text style={styles.plainText}>Deaths: {this.state.deathsNG}</Text>
                        </Callout>
                    </Marker>


                    <Marker
                        coordinate={{
                            latitude: 56,
                            longitude: 38,
                        }}
                    >
                        <Callout>
                            <Text style={styles.title}>Russia</Text>
                            <Text style={styles.plainText}>Confirmed: {this.state.casesRU}</Text>
                            <Text style={styles.plainText}>Recovered: {this.state.recoveredRU}</Text>
                            <Text style={styles.plainText}>Deaths: {this.state.deathsRU}</Text>
                        </Callout>
                    </Marker>


                    <Marker
                        coordinate={{
                            latitude: 19,
                            longitude: -99,
                        }}
                    >
                        <Callout>
                            <Text style={styles.title}>Mexico</Text>
                            <Text style={styles.plainText}>Confirmed: {this.state.casesMX}</Text>
                            <Text style={styles.plainText}>Recovered: {this.state.recoveredMX}</Text>
                            <Text style={styles.plainText}>Deaths: {this.state.deathsMX}</Text>
                        </Callout>
                    </Marker>


                </MapView>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    map: {
        height: '100%',
        width: '100%'
    },

    plainText: {
        color: '#4f4f4f',
        fontSize: 15,
        fontFamily: 'Menlo',
    },

    title: {
        fontSize: 20,
        color: '#000000',
        textAlign: 'center',
        fontFamily: 'Menlo',
    },
});