import * as React from 'react';
import {StyleSheet, Text, TextInput, TouchableHighlight, View, StatusBar} from 'react-native';

export default class App extends React.Component {

    state = {
        json: '',
        totalCases: '',
        totalRecovered: '',
        totalDeaths: '',
        newCases: '',
        newDeaths: '',
        newRecovered: '',
    };

    componentDidMount() {
        fetch('https://api.covid19api.com/total/country/united-states', {
            method: 'GET',
        })
            .then(response => response.json())
            .then(json => {
                var date = new Date().getDate() - 1;
                var month = new Date().getMonth() + 1;
                var year = new Date().getFullYear();
                if (month < 10)
                    month = "0" + month
                if (date < 10)
                    date = "0" + date
                var fullDate = year + "-" + month + "-" + date + "T00:00:00Z";

                for (let i = 0; i < json.length; i++) {
                    if (fullDate == json[i]['Date']) {
                        this.setState({
                            totalConfirmed: json[i]['Confirmed'],
                            totalRecovered: json[i]['Recovered'],
                            totalDeaths: json[i]['Deaths'],
                            latestConfirmed: parseInt(json[i]['Confirmed']) - parseInt(json[i - 1]['Confirmed']),
                            latestRecovered: parseInt(json[i]['Recovered']) - parseInt(json[i - 1]['Recovered']),
                            latestDeaths: parseInt(json[i]['Deaths']) - parseInt(json[i - 1]['Deaths']),
                        });
                        this.setState({
                            currDate: fullDate,
                        })
                    }
                }

            })
            .catch(error => {
                console.error(error);
            });
    }

    render() {
        return (
            <View style={styles.panel}>

                <Text style={styles.title}>CODVID-19 in US</Text>

                <Text style={styles.dateText}>Date of Latest Update: {this.state.currDate}</Text>

                <Text style={styles.plainText}>Total Confirmed:     {this.state.totalConfirmed}</Text>
                <Text style={styles.plainText}>Latest Confirmed:    {this.state.latestConfirmed}</Text>

                <Text style={styles.plainText}>Total Death:         {this.state.totalDeaths}</Text>
                <Text style={styles.plainText}>Latest Death:        {this.state.latestDeaths}</Text>

                <Text style={styles.plainText}>Total Recovered:     {this.state.totalRecovered}</Text>
                <Text style={styles.plainText}>Latest Recovered:    {this.state.latestRecovered}</Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    panel: {
        flex: 1,
        padding: 20,
        marginTop: 25,
        marginBottom: 25,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#888888',
    },

    title: {
        marginBottom: 20,
        fontSize: 30,
        color: '#ffffff',
        textAlign: 'center',
        fontFamily: 'Menlo',
    },

    plainText: {
        padding: 20,
        color: '#ffffff',
        fontSize: 20,
        fontFamily: 'Menlo',
    },

    dateText:{
        // padding: 20,
        color: '#ffffff',
        fontSize: 10,
        textAlign: 'center',
        fontFamily: 'Menlo',
    }
});