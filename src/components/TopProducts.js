import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    FlatList,
    Dimensions,
    TouchableOpacity,
 
} from 'react-native';
import React from 'react';

const TopProducts = () => {
    const DATA = [
        {
            id: '1',
            title: 'Second Item',
            img: require('../assets/img/image133.png'),
        },
        {
            id: '2',
            title: 'Third Item',
            img: require('../assets/img/image134.png'),

        },
        {
            id: '3',
            title: 'First Item',
            img: require('../assets/img/image135.png'),

        },
        {
            id: '4',
            title: 'Second Item',
            img: require('../assets/img/image20.png'),

        },
        {
            id: '5',
            title: 'Third Item',
            img: require('../assets/img/image21.png'),

        }, ,
        {
            id: '6',
            title: 'Third Item',
            img: require('../assets/img/image22.png'),

        }, ,
        {
            id: '7',
            title: 'Third Item',
            img: require('../assets/img/image23.png'),

        },
    ];


    return (
            <ScrollView style ={styles.container} horizontal showsHorizontalScrollIndicator={false} >
                {DATA.map((ele,index) => {
                    return (
                        <View key={index} style={styles.item}>
                            <Image
                                style={styles.picture}
                                source={ele.img}
                            />
                             
                            <Text style={styles.title}>{ele.title}</Text>
                        </View>
                    );
                })}
            </ScrollView>
    );
};
const styles = StyleSheet.create({
    
    container: {
      height: 200,
      top: 60,
    },
    item: {
        width:110,
        height:162,
        marginLeft: 10,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        backgroundColor:'#F5F7FA',
    

        
    },
    title: {
        textAlign: 'center',
        margin: 5,
    },
    picture: {
        width: 119,
        height: 100,
    },
});
export default TopProducts;