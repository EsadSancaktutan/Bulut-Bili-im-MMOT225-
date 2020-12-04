import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default class Haber extends React.Component {
    render() {

        const {type, title, description } = this.props;
        let buttonBackground;



       
         if (type === 'Sağlık') {
            buttonBackground = 'purple';
        } else if (type === 'Siyaset') {
            buttonBackground = 'blue';
        } else if (type === 'Spor') {
            buttonBackground = 'yellow';
        } else if (type === 'Ekonomi') {
            buttonBackground = 'steelblue'
        } else if (type === 'Magazin') {
            buttonBackground = 'cyan'
        }



        return (
            <TouchableOpacity
                style={{
                    backgroundColor: buttonBackground,
                    flex: 1,
                    height: 190,
                    width: 'auto',
                    marginTop: 50
                }}>

                <Text
                    style={{ color: 'black', fontSize: 20, textAlign: 'center' }}
                >{title}</Text>

                <Text
                    style={{ color: 'black', fontSize: 15, textAlign: 'center', marginTop: 20 }}


                >{description}</Text>

            </TouchableOpacity>
        )

    }


}

