import { View, Button } from "react-native";
import { router, Link, useRouter } from "expo-router";

export default function App() {
    
    const buttonGo = () => {router.push({
        pathname: '/test',
        params: {id: "1", name: "Acer nitro 5"},
    })}
    
    
    return (
        <View>
            <Button title="Test Screen" onPress={buttonGo}>
            </Button>

            <Link href={'/note/1'}> --Go to next page--</Link>
        </View>
    )


}

