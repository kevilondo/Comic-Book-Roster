import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#282c34',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
    text: {
        color: '#fff',
    },
    logo: {
        width: 120,
        height: 120
    },
    logoContainer: {
        flex: 0,
        flexDirection: "row",
        marginLeft: 10,
        marginTop: 10
    },
    logoText: {
        marginTop: 25,
        fontSize: 24,
        fontWeight: "700",
        color: "#b0b1bf"
    },
    searchBar: {
        backgroundColor: "white",
        width: 280,
        height: 40,
        marginLeft: 10,
        borderRadius: 5
    },
    searchContainer: {
        flex: 0,
        flexDirection: "row"
    },
    searchButton: {
        backgroundColor: "#095385",
        paddingTop: 10,
        paddingRight: 20,
        paddingLeft: 15,
        borderRadius: 5
    },
    buttonCaption: {
        color: "#fff",
    },
    thumbnail: {
        width: 90,
        height: 90
    },
    resultContainer: {
        marginTop: 50,
        marginLeft: 10,
        flexGrow: 1,
        marginBottom: 150
    },
    characterCard: {
        flex:0,
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "rgb(9, 83, 133)",
        borderRadius: 5,
        paddingRight: 170,
        paddingBottom: 10,
        paddingTop: 10,
        paddingLeft: 10,
        backgroundColor: "rgba(9, 83, 133, 0.1)",
        marginBottom: 20

    },
    characterDetails: {
        flex: 0,
        flexDirection: "column",
        justifyContent: "space-between",
        marginLeft: 5,
    },
    details: {
        color: "rgba(203, 203, 218, 0.836)",
        fontStyle: "italic"
    },
    seeMore: {
        color: "#b0b1bf",
        fontSize: 18,
        fontStyle: "italic",
        marginBottom: 10
    },
    profilePicture: {
        width: 300,
        height:300
    },
    profileContainer: {
        marginLeft: 10,
        flex: 1,
        flexDirection: "column",
        marginBottom: 100,
    },
    stats: {
        fontSize: 18,
        fontWeight: "bold",
        paddingTop: 10,
    },
    statsGroup: {
        flex: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 0.5,
        borderColor: "#fff"
    },
    characterName: {
        fontSize: 30,
        fontWeight: "bold",
        fontStyle: "italic",
    },
    green: {
        color: "green"
    },
    red: {
        color: "red",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        paddingBottom: 20
    },
    biographyContainer: {
        flex: 0,
        flexDirection: "column",
        paddingBottom: 50,
        paddingLeft: 10,
        width: 340,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "rgb(9, 83, 133)",
        backgroundColor: "rgba(9, 83, 133, 0.1)",
        paddingTop: 20,
        paddingRight: 40,
        marginTop: 20,
        overflow: "hidden"
    },
    biographyValue: {
        color: "#fff",
        fontSize: 14,
        fontStyle: "italic",
        color: "rgba(203, 203, 218, 0.836)",
        textTransform: "capitalize"
    },
    biographyGroup: {
        borderBottomColor: "#fff",
        paddingBottom: 10,
        borderBottomWidth: 0.5,
    }
  });

export default globalStyles;