import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    globalMagin: {
        marginHorizontal: 20
    },
    title: {
        fontSize: 20,
        marginBottom: 10
    },
    bigButton: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10
    },
    bigButonTxt: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    avatarContainer: {
        marginTop: 5,
        alignItems: 'center'
    },
    avatar: {
        height: 150,
        width: 150,
        borderRadius: 100
    },
    menuContainer: {
        marginVertical: 20,
        marginHorizontal: 30,
        alignItems: 'flex-start'
    },
    menuButton: {
        marginTop: 10,
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center'
    },
    menuIcon:{
        height:20,
        width:20,
        color: 'black',
        marginRight: 20
    },
    menuText: {
        color: 'black',
        fontSize: 20
    }
});

export { styles }