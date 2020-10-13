import React from 'react';
import { View, Text, Alert } from 'react-native';
import styles from './ItemStyle';
import Feather from 'react-native-vector-icons/Feather';
import * as actions from '../../store/actions/books';

const Item = ({ name, author, description, id, navigation, dispatch } : {name: string, author: string, description: string, id: string, navigation: any, dispatch: any}) => (
    <View style={styles.item}>
        <View style={{ flex: 6, flexDirection: 'column' }}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.author}><Text style={{ fontWeight: 'bold' }}>Author:</Text> {author}</Text>
            <Text>{description}</Text>
        </View>
        <View style={styles.more}>
            <Feather
                name="edit-3"
                size={25}
                style={styles.edit}
                onPress={() => {
                    navigation.navigate('Edit', { id, name, author, description });
                }} />
            <Feather
                name="delete"
                size={25}
                style={styles.del}
                onPress={() => {
                    Alert.alert(
                        'Are you sure to delete?',
                        '',
                        [
                            { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                            {
                                text: 'Delete', onPress: () => {
                                    dispatch(actions.deleteBook(id))
                                },
                                style: 'destructive'
                            },
                        ],
                        { cancelable: false }
                    )
                }} />
        </View>
    </View>
);

export default Item;