import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import History from './History';
import RowText from './RowText';
import {openDatabase} from 'react-native-sqlite-storage';
const db = openDatabase({
  name: 'rn_sqlite',
});
function LargCard(props) {
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const createTables = () => {
    db.transaction(txn => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS Notes (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(20))`,
        [],
        (sqlTxn, res) => {
          console.log('table created successfully');
        },
        error => {
          console.log('error on creating table ' + error.message);
        },
      );
    });
  };

  const addCategory = () => {
    if (!category) {
      alert('Enter Note');
      return false;
    }

    db.transaction(txn => {
      txn.executeSql(
        `INSERT INTO Notes (name) VALUES (?)`,
        [category],
        (sqlTxn, res) => {
          console.log(`${category} category added successfully`);
          getCategories();
          setCategory('');
        },
        error => {
          console.log('error on adding category ' + error.message);
        },
      );
    });
  };

  const getCategories = () => {
    db.transaction(txn => {
      txn.executeSql(
        `SELECT * FROM Notes ORDER BY id DESC`,
        [],
        (sqlTxn, res) => {
          console.log('Notes retrieved successfully');
          let len = res.rows.length;

          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              results.push({id: item.id, name: item.name});
            }

            setCategories(results);
            console.log(categories);
          }
        },
        error => {
          console.log('error on getting categories ' + error.message);
        },
      );
    });
  };
  useEffect(() => {
    createTables();
    getCategories();
    console.log('Notes useeffect', categories);
  }, []);
  return (
    <View style={styles.LargCard}>
      <View style={styles.CardStyle}>
        <View style={styles.ImgCard}>
          <Image
            source={require('../../assets/Printer.png')}
            resizeMode="contain"
            style={{width: 150, height: 150, backgroundColor: 'white'}}
          />
        </View>
      </View>
      <View
        style={{
          borderWidth: 1,
          backgroundColor: '#FFFFFF',
          borderColor: '#DEDEDE',
          width: '90%',
          marginTop: 50,
        }}></View>
      <RowText head="Image Info" img="img" />
      <RowText left="Model" right="Gt2000" />
      <RowText left="Model Name" right="hello1" />
      <RowText left="Model Type" />
      <RowText left="Cost" />
      <RowText left="Category" />
      <RowText left="Additional Description" />
      <View
        style={{
          borderWidth: 1,
          backgroundColor: '#FFFFFF',
          borderColor: '#DEDEDE',
          width: '90%',
          marginTop: 25,
        }}></View>
      <RowText head="Notes" />
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          marginRight: 7,
          alignSelf: 'flex-end',
          marginRight: 40,
          marginTop: 15,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: -5,
        }}
        onPress={addCategory}>
        <Image
          source={require('../../assets/Info.png')}
          style={{
            width: 17.17,
            height: 11.45,
            marginRight: 6,
          }}
        />
        <Text style={{fontSize: 12, color: '#4E4E4E'}}>Save</Text>
      </TouchableOpacity>
      <View style={styles.sectionStyle}>
        <TextInput
          style={{color: '#B4B4B4', fontSize: 14}}
          placeholder="Add a Note..."
          placeholderTextColor={'#C1C1C1'}
          onChangeText={setCategory}
          value={category}
        />
      </View>
      <RowText head="History Notes" />
      <History notes={categories} />
    </View>
  );
}
const styles = StyleSheet.create({
  LargCard: {
    width: 330,
    flex: 1,
    backgroundColor: '#EAEAEA',
    marginTop: 21,
    borderWidth: 1,
    borderColor: '#CBCBCA',
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 15,
  },
  CardStyle: {
    width: '100%',
    height: 114,
    flexDirection: 'column',
    marginBottom: 30,
    alignItems: 'center',
  },
  ImgCard: {
    width: 224,
    height: 163,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 21,
    marginTop: 13,
  },
  row: {
    width: '90%',
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 15,
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#CBCBCA',
    borderWidth: 0.5,
    height: 50,
    borderRadius: 5,
    margin: 10,
    width: '90%',
    borderRadius: 35,
    paddingHorizontal: 20,
    marginBottom: 0,
  },
});
export default LargCard;
