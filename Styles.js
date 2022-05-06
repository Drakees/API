import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: 'black',
        paddingTop:40,
    },
    line: {
        flex: 2,
        flexDirection: 'row',
        alignContent:'space-around',
        maxHeight: 170,
    },
    txt: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
    noteTxt: {
        color: 'white',
        fontSize: 30,
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
    noteLogo: {
        alignSelf: 'center',
        width: 100,
        height: 100,
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
    noteResults: {
        alignItems:'center',
        flex:4 ,
        flexDirection: 'column',
        alignItems: 'center',
    },
    centerise: {
        alignItems: 'center',
        flex:1,
    },
    input: {
        height: 25,
        minWidth: 100,
        backgroundColor:'white',
        padding:4,
        borderRadius: 4,
    },
    noteInput: {
        height: 40,
        width: 50,
        fontSize: 30,
        backgroundColor:'white',
        padding:2,
        margin: 5,
        borderRadius: 4,
        alignSelf:'center',
    },
    wrongNoteInput: {
        height: 40,
        width: 50,
        fontSize: 30,
        backgroundColor:'#ff6961',
        borderColor: 'red',
        borderWidth: 2,
        padding:2,
        margin: 5,
        borderRadius: 4,
        alignSelf:'center',
    },
    title: {
        flex:1,
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width:180,
        paddingRight: 10
    }

});

export default styles;