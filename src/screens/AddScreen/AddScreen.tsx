import React, { useState } from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import styles from './AddScreenStyle';
import { useDispatch } from 'react-redux';
import * as actions from '../../store/actions/books';
import Icon from 'react-native-vector-icons/FontAwesome';

export interface newbook {
    id: string,
    name: string,
    author: string,
    description: string
}

const generateID = () => {
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10);
}

export default function AddScreen({ navigation }) {
    const ID = generateID();
    const [newBook, setNewBook] = useState<newbook>({ id: ID, name: '', author: '', description: '' })
    const dispatch = useDispatch();

    const onSubmit = async () => {
        if (newBook.name !== '' && newBook.author !== '' && newBook.description !== '') {
            await dispatch(actions.addBook(newBook));
            navigation.navigate('Home', { status: ID })
        } else {
            Alert.alert('Please enter your full information');
        }
    }

    return (
        <View>
            <View>
                <Text style={styles.title}>Name: </Text>
                <TextInput
                    placeholder="Enter your new new book"
                    onChangeText={name => setNewBook({ ...newBook, name: name })}
                    value={newBook.name}
                    style={styles.add}
                />
            </View>
            <View>
                <Text style={styles.title}>Author: </Text>
                <TextInput
                    placeholder="Enter author"
                    onChangeText={author => setNewBook({ ...newBook, author: author })}
                    value={newBook.author}
                    style={styles.add}
                />
            </View>
            <View>
                <Text style={styles.title}>Description: </Text>
                <TextInput
                    multiline={true}
                    numberOfLines={4}
                    placeholder="description"
                    onChangeText={description => setNewBook({ ...newBook, description: description })}
                    value={newBook.description}
                    style={styles.desc}
                />
            </View>
            <View style={{ marginTop: 10, width: 90, marginLeft: 5 }}>
                <Icon.Button
                    name="check"
                    backgroundColor="#4BB543"
                    onPress={() => { onSubmit() }}
                >
                    Add
                </Icon.Button>
            </View>
        </View>
    )
}