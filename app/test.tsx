import { View } from "react-native";
import { Text, Button } from "react-native";
import { router, useLocalSearchParams, Stack} from "expo-router";

export default function Test() {
    const { id, name } = useLocalSearchParams();

    return (
        <View>
            <Stack.Screen options={{title: "Funcionou!"}}/>
            <Text>
                id: {id},
                name: {name};

            </Text>
                <Button title="Home" onPress={() => {router.back()}}>
                </Button>
            
        </View>
    )
}