import React, { Component } from 'react';

import { StyleSheet, View, Alert, TextInput, Button, Text, Platform, TouchableOpacity, ListView, ActivityIndicator, ScrollView } from 'react-native';

import { StackNavigator } from 'react-navigation';

export default class EditEmployeeRecordActivity extends Component {

  constructor(props) {

       super(props)

       this.state = {

         TextInput_name: '',
         TextInput_dob: '',
         TextInput_gender: '',
         TextInput_rollno: '',
         TextInput_address: '',
         TextInput_creche_id: '',
         TextInput_current_status: '',
         TextInput_attendance: '',

       }

     }

     componentDidMount(){

      // Received Student Details Sent From Previous Activity and Set Into State.
      this.setState({
        TextInput_name: this.props.navigation.state.params.NAME,
        TextInput_dob: this.props.navigation.state.params.DOB,
        TextInput_gender: this.props.navigation.state.params.GENDER,
        TextInput_rollno: this.props.navigation.state.params.ROLLNO,
        TextInput_address: this.props.navigation.state.params.ADDRESS,
        TextInput_creche_id: this.props.navigation.state.params.CRECHE_ID,
        TextInput_current_status: this.props.navigation.state.params.CURRENT_STATUS,
        TextInput_attendance: this.props.navigation.state.params.ATTENDANCE,
        
      })

     }

    static navigationOptions =
    {
       title: 'VIEW DATA',
    };

    // UpdateStudentRecord = () =>{

    //         fetch('http://192.168.137.166:8080/UpdateStudentRecord.php', {
    //         method: 'POST',
    //         headers: {
    //           'Accept': 'application/json',
    //           'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({

    //           name : this.state.TextInput_name,

    //           dob : this.state.TextInput_dob,

    //           gender : this.state.TextInput_gender,

    //           rollno : this.state.TextInput_rollno,

    //           address: this.state.TextInput_address,

    //           creche_id : this.state.TextInput_creche_id,

    //           current_status : this.state.TextInput_current_status,

    //           attendance : this.state.TextInput_attendance,
              


    //         })

    //         }).then((response) => response.json())
    //             .then((responseJson) => {

    //               // Showing response message coming from server updating records.
    //               Alert.alert(responseJson);

    //             }).catch((error) => {
    //               console.error(error);
    //             });

    //   }


    // DeleteStudentRecord = () =>{

    //       fetch('http://192.168.137.166:8080/DeleteStudentRecord.php', {
    //       method: 'POST',
    //       headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({

    //         rollno : this.state.TextInput_rollno

    //       })

    //       }).then((response) => response.json())
    //       .then((responseJson) => {

    //         // Showing response message coming from server after inserting records.
    //         Alert.alert(responseJson);

    //       }).catch((error) => {
    //          console.error(error);
    //       });

    //       this.props.navigation.navigate('First');

    //   }

    render() {

      return (
          <ScrollView>

   <View style={styles.MainContainer}>
         <View style={{flexDirection:"row"}}>
         <Text style={styles.titleText}>Name : </Text>
         <TextInput
         editable={false}
            value={this.state.TextInput_name}

            onChangeText={ TextInputValue => this.setState({ TextInput_name : TextInputValue }) }

            underlineColorAndroid='transparent'

            style={styles.TextInputStyleClass}
          />
          </View>

          <View style={{flexDirection:"row"}}>
          <Text style={styles.titleText}>DOB : </Text>
         <TextInput
         editable={false}
            value={this.state.TextInput_dob}

            onChangeText={ TextInputValue => this.setState({ TextInput_dob : TextInputValue }) }

            underlineColorAndroid='transparent'

            style={styles.TextInputStyleClass}
          />
          </View>

          <View style={{flexDirection:"row"}}>
          <Text style={styles.titleText}>Gender : </Text>
         <TextInput
         editable={false}
            value={this.state.TextInput_gender}

            onChangeText={ TextInputValue => this.setState({ TextInput_gender : TextInputValue }) }

            underlineColorAndroid='transparent'

            style={styles.TextInputStyleClass}
          />
          </View>

          <View style={{flexDirection:"row"}}>
          <Text style={styles.titleText}>Rollno : </Text>
          <TextInput
          editable={false}
            value={this.state.TextInput_rollno}

            onChangeText={ TextInputValue => this.setState({ TextInput_rollno : TextInputValue }) }

            underlineColorAndroid='transparent'

            style={styles.TextInputStyleClass}
          />
          </View>

          <View style={{flexDirection:"row"}}>
          <Text style={styles.titleText}>Address : </Text>
          <TextInput
          editable={false}
            value={this.state.TextInput_address}

            onChangeText={ TextInputValue => this.setState({ TextInput_address : TextInputValue }) }

            underlineColorAndroid='transparent'

            style={styles.TextInputStyleClass}
          />
          </View>

          <View style={{flexDirection:"row"}}>
          <Text style={styles.titleText}>CrecheID: </Text>
          <TextInput
          editable={false}
            value={this.state.TextInput_creche_id}

            onChangeText={ TextInputValue => this.setState({ TextInput_creche_id : TextInputValue }) }

            underlineColorAndroid='transparent'

            style={styles.TextInputStyleClass}
          />
          </View>

          <View style={{flexDirection:"row"}}>
          <Text style={styles.titleText}>CurrentStatus : </Text>
          <TextInput
          editable={false}
            value={this.state.TextInput_current_status}

            onChangeText={ TextInputValue => this.setState({ TextInput_current_status : TextInputValue }) }

            underlineColorAndroid='transparent'

            style={styles.TextInputStyleClass}
          />
          </View>

          <View style={{flexDirection:"row" }}>
          <Text style={styles.titleText}>Attendance : </Text>
          <TextInput
          editable={false}

            value={this.state.TextInput_attendance}

            onChangeText={ TextInputValue => this.setState({ TextInput_attendance : TextInputValue }) }

            underlineColorAndroid='transparent'

            style={styles.TextInputStyleClass}
          />
          </View>
         {/* <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.UpdateStudentRecord} >

            <Text style={styles.TextStyle}> UPDATE STUDENT RECORD </Text>

         </TouchableOpacity>

         <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.DeleteStudentRecord} >

            <Text style={styles.TextStyle}> DELETE CURRENT RECORD </Text>

         </TouchableOpacity> */}


   </View>
   </ScrollView>

      );
    }

}
const styles = StyleSheet.create({

  MainContainer :{

    alignItems: 'flex-start',
    flex:1,
    paddingTop: 30,
    backgroundColor: '#fff'

  },

  MainContainer_For_Show_StudentList_Activity :{

    flex:1,
    paddingTop: (Platform.OS == 'ios') ? 20 : 0,
    marginLeft: 5,
    marginRight: 5

    },

  TextInputStyleClass: {
    fontSize: 18,
    fontWeight: 'bold',
  textAlign: 'center',
  width: '50%',
  marginBottom: 20,
  height: 40,
  borderWidth: 0.2 ,
  borderColor: '#FF5722',
  borderRadius: 2 ,

  },

  TouchableOpacityStyle: {

    paddingTop:10,
    paddingBottom:10,
    borderRadius:5,
    marginBottom:7,
    width: '90%',
    backgroundColor: '#00BCD4'

  },

  TextStyle:{
    color:'#fff',
    textAlign:'center',
  },

  rowViewContainer: {
    fontSize: 20,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    width:150,
    left:10,
  },

});
