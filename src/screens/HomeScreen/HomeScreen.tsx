import React, { useEffect } from 'react';
import { SafeAreaView, FlatList, ToastAndroid } from 'react-native';
import styles from './HomeScreenStyle';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/actions/books';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Item from '../../components/Item/Item';

export interface rec {
    status: boolean,
    editBook: object
}

export default function HomeScreen({ navigation, route } : {navigation: any, route: any}) {

    const book: Array<object> = useSelector(state => state.book);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actions.fetchBook());
    }, []);
    
    const { status, editBook } : rec = route.params;
    
    useEffect(() => {
        if (route.params?.status) {
            ToastAndroid.show("Successfully!", ToastAndroid.SHORT);
        }
    }, [status]);

    useEffect(() => {
        if (route.params?.editBook) {
            ToastAndroid.show("Edit Completed !", ToastAndroid.SHORT);
        }
    }, [editBook]);

    const renderItem = ({ item }) => (
        <Item description={item.description} id={item.id} author={item.author} name={item.name} navigation={navigation} dispatch={dispatch} /> 
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={book}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <Ionicons name="add-circle" size={70} color="#4BB543" style={{ alignSelf: 'center' }} onPress={() => { navigation.navigate('Add') }} />
        </SafeAreaView>
    );
}