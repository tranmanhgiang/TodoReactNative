import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    username: {
        height: 40,
        borderColor: 'gray', 
        borderWidth: 1, 
        borderRadius: 30,
        paddingHorizontal: 5,
        marginHorizontal: 20,
        // flex: 1
    },
    password: {
        height: 40,
        borderColor: 'gray', 
        borderWidth: 1, 
        borderRadius: 30, 
        marginTop: 10,
        paddingHorizontal: 5,
        marginHorizontal: 20,
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    passwordInput: {
        flex: 0.9
    },
    login: {
        marginTop: 10,
        marginHorizontal: 20,
        flex: 1
    },
    icon: {
        paddingVertical: 7,
    }
})