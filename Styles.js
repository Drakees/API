import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: 'black',
        paddingTop:40,
    },
    line: {
        flex: 1,
        flexDirection: 'row',
        alignContent:'space-around',
        maxHeight: 170,
    },
    txt: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
    buttontxt: {
        color: 'white',
    },
    tinyLogo: {
        alignSelf: 'center',
        width: 50,
        height: 50,
    },
    filters: {
        height: '100%',
        width: '50%',
        flexBasis: 'auto',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    search: {
        height: '100%',
        width: '50%',
        flexBasis: 'auto',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    border: {
        borderColor: 'red',
        borderWidth: 5,
    },
    results: {
        alignItems:'center',
        flex:4 ,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    centerise: {
        alignItems: 'center',
    },
    input: {
        height: 20,
        minWidth: 80,
        backgroundColor:'white',
    },
    selector: {
        minHeight: 20,
        minWidth: 50,
        fontSize: 12,
        backgroundColor:'white',
        color: 'white',
        borderColor: 'red',
        borderRadius: 4,
        borderWidth: 2,
        paddingRight: 30,
    }
});

export default styles;