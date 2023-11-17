import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, } from 'react-native';

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
    <View style={styles.container}>
      {
        data
          // .filter((item ) => item.id === '1') // Xuất mot minh id tất cả data 
          .map((item) => {                     // xuat tat ca data
            console.log(item);
            return (
              <View key={item.id}>
                <Text style={{ fontSize: '20px' }}>
                  name :{item.name}
                  id :{item.id}</Text>
                <Image
                  source={item.img}
                  style={{ width: '100px', height: '100px', resizeMode: 'contain', borderRadius: '200px', left: '100px' }}
                />
                
              </View>
            )
          }
          )}

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