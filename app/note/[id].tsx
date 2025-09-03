import { View, Text, Button } from "react-native";
import React from "react";
import { router, Stack, useLocalSearchParams } from "expo-router";

export default function note() {
    const params = useLocalSearchParams();

    return (
        <View>
            <Stack.Screen options={{title: `Note ${params.id}` }} />

            <Text>Your choice is: {params.id}</Text>

            <Button title="Return" onPress={() => router.back()} />
        </View>
    )
}