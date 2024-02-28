import { StyleSheet } from 'react-native';
 
export const styles = StyleSheet.create({
 
    container: {
        flex: 1,
        // justifyContent: 'center',
    },
    centeredContent: {
        alignItems: 'center',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        // marginBottom: 20,
        alignSelf:"center",
        alignItems: 'center',
        marginTop: 50
    },
    input: {
        height: 40,
        width: '80%',
        borderColor: 'white',
        borderWidth: 5,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 20,
        color: 'white',
        alignSelf:'center',
        marginTop: 250,
        fontSize:18,
        fontWeight:'bold',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 10,
        fontWeight:'bold',
        color:'white'
    },
    buttonText: {
        color: 'black',
        marginLeft: 12,
        fontWeight:'bold'
    },
    weatherInfo: {
        marginTop: 20,
        alignItems: 'center',
        color:'white'
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 10,
    },
    subheading: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#228B22',
        marginTop: 10,
    },
    weatherText: {
        color: 'white',
        fontSize: 18,
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'orange',
    },
    inputFocused: {
        backgroundColor: 'rgba(0, 0, 0, 1)'
    }
});
