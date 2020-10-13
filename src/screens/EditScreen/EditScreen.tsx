import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import styles from './EditScreenStyle';
import { useDispatch } from 'react-redux';
import * as actions from '../../store/actions/books';
import Icon from 'react-native-vector-icons/FontAwesome';

export interface editbook {
    id: string,
    name: string,
    author: string,
    description: string
}

export default function EditScreen({ route, navigation } : {route: any, navigation: any}) {
    const [editBook, setEditBook] = useState<editbook>({ id: '', name: '', author: '', description: '' });
    const { id, name, author, description }: editbook = route.params;
    const dispatch = useDispatch();

    useEffect(() => {
        if (route.params) {
            setEditBook({ id: id, name: name, author: author, description: description })
        }
    }, [id, name, author, description]);

    const onSubmit = async () => {
        await dispatch(actions.editBook(editBook))
        navigation.navigate('Home', { editBook })
    }

    return (
        <View>
            <View>
                <Text style={styles.title}>Name: </Text>
                <TextInput
                    defaultValue={name}
                    onChangeText={name => setEditBook({ ...editBook, name: name })}
                    value={editBook.name}
                    style={styles.add}
                />
                <Text style={styles.title}>Author: </Text>
                <TextInput
                    defaultValue={author}
                    onChangeText={author => setEditBook({ ...editBook, author: author })}
                    value={editBook.author}
                    style={styles.add}
                />
                <Text style={styles.title}>Description: </Text>
                <TextInput
                    multiline={true}
                    numberOfLines={4}
                    defaultValue={description}
                    onChangeText={description => setEditBook({ ...editBook, description: description })}
                    value={editBook.description}
                    style={styles.desc}
                />
            </View>
            <View style={{ marginTop: 10, width: 100, marginLeft: 5 }}>
                <Icon.Button
                    name="check"
                    onPress={() => { onSubmit() }}
                >
                    Confirm
                </Icon.Button>
            </View>
        </View>
    )
}