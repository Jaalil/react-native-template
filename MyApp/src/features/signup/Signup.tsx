import React from "react"
import { StackNavigationProp } from "@react-navigation/stack"
import { StyleSheet, View, Text } from "react-native"
import { TextInput, TouchableOpacity } from "react-native-gesture-handler"
import { SafeAreaView } from "react-native-safe-area-context"
import { RootStackParamsList } from "../navigation/Navigator"

interface Props {
    navigation: StackNavigationProp<RootStackParamsList, "Landing">
}

const Signup = ({}: Props) => {
    return(
    <SafeAreaView>
        <View style={{paddingTop:23}}>
            <TextInput 
                style={styles.input}
                placeholder="Username"
                defaultValue=""
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                defaultValue=""
            />
            <TouchableOpacity style={styles.submitButton}>
                <Text style={{color:"white"}}>Submit</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>)
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
     },
     submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
     },
})


export default Signup
