import { StyleSheet, StatusBar } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: 'white',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    more: {
        flex: 2,
        flexDirection: 'row',
        height: 40,
        lineHeight: 40,
    },
    edit: {
        flex: 1,
        color: '#2196F3'
    },
    del: {
        flex: 1,
        color: 'red'
    },
    name: {
        fontWeight: 'bold',
        fontSize: 20

    },
    author: {

    },
    title: {
        flex: 5
    }
})