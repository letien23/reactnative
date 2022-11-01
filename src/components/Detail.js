import { View, Text, Button } from 'react-native';
import Product from './Products';

function Detail({ navigation }) {
    return (
        
        <View style={{ flex: 1}}>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
            />
            <Product img={require('../../images/up.jpg')} starNumber={'⭐'} name='Sugar ' sale={true} />
            
        </View>
    );
}

export default Detail;
