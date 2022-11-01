
import { View, Text, Button, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../styles';
import Banner from './Banner';

import Title from './Title';
import Products from './Products';





const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Banner
                img={require('../../images/banner.png')}
                title="Save extra on every oder"
                desc="Etiam olit I LOVE YOU HAHAHAHHA"
            ></Banner>
            <Title title="Diabetic Diet" ></Title>
            <ScrollView horizontal={true} >
                <TouchableOpacity onPress={() => navigation.navigate('Details')}>
                    <View >
                        <Products img={require('../../images/up.jpg')} starNumber={'⭐'} name='Sugar Substitute' sale={true} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Details')}>
                    <View >
                    <Products img={require('../../images/up.jpg')} price={580} name='Juices & Vinegars' sale={true} />
                    </View>
                </TouchableOpacity><TouchableOpacity onPress={() => navigation.navigate('Details')}>
                    <View >
                    <Products img={require('../../images/up.jpg')} starNumber={'⭐'} name='Vitamins Medicines' sale={true} />
                    </View>
                </TouchableOpacity><TouchableOpacity onPress={() => navigation.navigate('Details')}>
                    <View >
                    <Products img={require('../../images/up.jpg')} starNumber={'⭐'} name='Sugar ' sale={true} />
                    </View>
                </TouchableOpacity>
                
                
                
            </ScrollView>
        </View>
    );
}


export default Home;