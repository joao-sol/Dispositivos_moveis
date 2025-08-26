import { View, Button } from "react-native";
import { TextInput, StyleSheet } from "react-native";
import { useState } from "react";



export default function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => console.log(username, password)

    return (
        <view>
            <TextInput
            value={username}
            placeholder="Username"
            onChangeText={setUsername}
          />
            <TextInput
            value={password}
            placeholder="Password"
            onChangeText={setPassword}
            secureTextEntry={true}
          />
          <Button title="Retornar" onPress={handleLogin}>
          </Button>
        </view>
    );
}