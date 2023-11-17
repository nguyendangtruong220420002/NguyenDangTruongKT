import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

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
  const Post = () => {
    fetch(url,
      {
        method: 'POST',
        boby: JSON.stringify({
          name: "Ronaldo",
          img: "https://media.bongda.com.vn/files/thach.pham/2022/11/05/r-0819.jpg"
        }),
        headers: {
          'Accept': 'application/json',
          'Content-type': "application/json; charset:UTF-8",
        },
      })
      .then((Res) => Res.json())
      .then((json => {
        setData([...data, json]);
        console.log(json);
      }))
  };
  const Delete = (id) => {
    fetch(url + '/' + id,
      // `${url}/${id}`
      {
        method: 'DELETE',
      })
      .then(() => {
        // Lọc mục đã xóa khỏi trạng thái
        setData(data.filter((item) => item.id !== id));
      })
      .catch((error) => console.error('Error deleting item:', error));
  };
  return (
    <View style={styles.container}>
      {
        data
          .map((item) => {                     
            console.log(item);
            return (
              <View key={item.id} >
                <Text style={{ fontSize: '20px' , color:'#000000', fontWeight:'bold' }}>
                  name :{item.name}
                  </Text>
                  <Text style={{ fontSize: '20px' , color:'#000000', fontWeight:'bold' }}>
                  id :{item.id}</Text>
                <Image
                  source={item.img}
                  style={{ width: '100px', height: '100px', resizeMode: 'contain', borderRadius: '10px', left: '40px' }}
                />
                <Pressable style={{ backgroundColor: "cyan", padding: '10px', borderRadius: '20px' }}
                  onPress={() => { Post(item.id)
                  }}
                >
                  <Text style={{ color: "black" }}>PUT</Text>
                </Pressable>
                <Pressable style={{ backgroundColor: "red", padding: '10px', borderRadius: '20px', marginTop: '10px' }}
                  onPress={() => { Delete(item.id) }}
                >
                  <Text style={{ color: "white" }}>Delete</Text>
                </Pressable>
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