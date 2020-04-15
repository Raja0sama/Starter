import {
  View,
  TextInput,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {connect, useSelector} from 'react-redux';
import React, {useState} from 'react';
import { addTodo,deleteTodo } from '_reducks/todo'


//A simple Todo example with Redux integretion, 
// that can manage all most anykind of problem we might 
// face along the way, Also it has a midleware integration
// middleware that is being used is SAGA



const Home = ({todo, dispatch}) => {
  const [text, setText] = useState();
 
  return (
    <View style={{flex: 1}}>
      <TextInput
        style={{borderWidth: 1, borderColor: 'black'}}
        onChangeText={e => {
          setText(e);
        }}
        value={text}
      />
      <View style={{flex: 1}}>
        <FlatList
        
          data={todo.todo}
          renderItem={({item}) => {
            return (
              <TouchableOpacity>
                <View
                  style={{
                      justifyContent:'space-between',
                      flexDirection:'row',
                    borderWidth: 1,
                    borderColor: 'grey',
                    padding: 10,
                    marginVertical: 10,
                  }}>
                  <Text>{item.todo}</Text>
                  <View style={{flexDirection:'row'}}>

                  <Button title={"X"} onPress={()=>{ dispatch(deleteTodo(item.id)) }}/>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View>
        <Button
          title={'Add'}
          onPress={() => {
            dispatch(addTodo(text));
            setText('');
          }}
        />
      </View>
    </View>
  );
};

const mapStateToProps = state => {
    
  return {
    todo: state.todo,
  };
};

export default connect(mapStateToProps)(Home);
