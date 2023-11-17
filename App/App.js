import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const url = 'https://6544e42e5a0b4b04436d29bc.mockapi.io/Todo/todo1';
export default function App() {
    const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(url)
      .then(Res => Res.json())
      .then(json => {
        setData(json)
        console.log(setData);
      })
  };

  useEffect(() => {
    fetchData();
  }, []);
    return ( 
        <View style = { styles.container } >
        <Text> Open up App.js to start working on your app!helo </Text>
         <StatusBar style = "auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});