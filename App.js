import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  ActivityIndicator,
  ListView,
  ScrollView,
} from 'react-native';



import { StackNavigator,} from 'react-navigation';
import { TabNavigator } from 'react-navigation';


import EditStudentRecordActivity from './app/pages/displaychild';
import EditEmployeeRecordActivity from './app/pages/displayemployee';


 class Child extends Component {  


  constructor(props) {
    
        super(props);
    
        this.state = {
    
          isLoading: true
    
        }
      }
    
      static navigationOptions =
      {
         title: 'CHILD',
      };
    
      componentDidMount() {
    
          
             return fetch('http://192.168.1.11:8080/ShowAllParentList.php')
             .then((response) => response.json())
             .then((responseJson) => {
               let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
               this.setState({
                 isLoading: false,
                 dataSource: ds.cloneWithRows(responseJson),
               }, function() {
                 // In this block you can do something with new state.
               });
             })
             .catch((error) => {
               console.error(error);
             });

         }
    
         GetStudentIDFunction=(name,dob,gender,rollno,address,creche_id,current_status,attendance,father_name,father_contact,mother_name,mother_contact)=>{
    
              this.props.navigation.navigate('Second', {
    
                NAME : name,
                DOB : dob,
                GENDER : gender,
                ROLLNO : rollno,
                ADDRESS : address,
                CRECHE_ID : creche_id,
                CURRENT_STATUS : current_status,
                ATTENDANCE : attendance,

                FATHER_NAME : father_name,
                FATHER_CONTACT : father_contact,
                MOTHER_NAME : mother_name,
                MOTHER_CONTACT : mother_contact,
                // ROLLNO : rollno,
                // CRECHE_ID : creche_id,
                
              });
    
         }

         
         ListViewItemSeparator = () => {
           return (
             <View
               style={{
                 height: .5,
                 width: "100%",
                 backgroundColor: "#000",
               }}
             />
           );
         }



  render() {
    if (this.state.isLoading) {
    return (
  <ScrollView>
      <View style={styles.container}>
        
        


        <View style={{flex: 1, paddingTop: 20}}>
            <ActivityIndicator />
                     
        </View>
          <TouchableOpacity
        style={styles.ok}
         onPress={this.onPress}
       >
         <Text> OK </Text>
       </TouchableOpacity>       
       
       
      </View>
  </ScrollView>
    );
   }

   return (
    <ScrollView>
            <View style={styles.MainContainer_For_Show_StudentList_Activity}>
    
              <ListView
    
                dataSource={this.state.dataSource}
    
                renderSeparator= {this.ListViewItemSeparator}
    
                renderRow={ (rowData) => <Text style={styles.rowViewContainer}
    
                          onPress={this.GetStudentIDFunction.bind(
                            this,rowData.name, 
                            rowData.dob, 
                            rowData.gender, 
                            rowData.rollno,
                            rowData.address,
                            rowData.creche_id,
                            rowData.current_status,
                            rowData.attendance,
                            rowData.father_name,
                            rowData.father_contact,
                            rowData.mother_name,
                            rowData.mother_contact,
                            {/* rowData.rollno,
                            rowData.creche_id, */}
                            )} >
    
                            {'        '}{rowData.rollno<10?'00'+rowData.rollno:(rowData.rollno<100?'0'+rowData.rollno:rowData.rollno)}                                 {rowData.name} 
    
                          </Text> 
                          
                          }
    
              />
    
            </View>
    </ScrollView>
          );


  } 

}




class ShowStudentListActivity extends React.Component {
  
    constructor(props) {
  
      super(props);
  
      this.state = {
  
        isLoading: true
  
      }
    }
  
    static navigationOptions =
    {
       title: 'EMPLOYEE',
    };
  
    componentDidMount() {
  
         return fetch('http://192.168.1.11:8080/emp.php')
           .then((response) => response.json())
           .then((responseJson) => {
             let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
             this.setState({
               isLoading: false,
               dataSource: ds.cloneWithRows(responseJson),
             }, function() {
               // In this block you can do something with new state.
             });
           })
           .catch((error) => {
             console.error(error);
           });
       }
  
       GetStudentIDFunction=(emp_name,emp_dob,emp_gender,emp_rollno,emp_address,creche_id,emp_status,emp_attendance)=>{
  
            this.props.navigation.navigate('Third', {
  
              NAME : emp_name,
              DOB : emp_dob,
              GENDER : emp_gender,
              ROLLNO : emp_rollno,
              ADDRESS : emp_address,
              CRECHE_ID : creche_id,            
              CURRENT_STATUS : emp_status,
              ATTENDANCE : emp_attendance,
            });
  
       }
  
       ListViewItemSeparator = () => {
         return (
           <View
             style={{
               height: .5,
               width: "100%",
               backgroundColor: "#000",
             }}
           />
         );
       }
  
       render() {
        if (this.state.isLoading) {
          return (
            <ScrollView>
            <View style={{flex: 1, paddingTop: 20}}>
              <ActivityIndicator />
            </View>
            </ScrollView>
          );
        }
  
        return (
          <ScrollView>
          <View style={styles.MainContainer_For_Show_StudentList_Activity}>
  
            <ListView
  
              dataSource={this.state.dataSource}
  
              renderSeparator= {this.ListViewItemSeparator}
  
              renderRow={ (rowData) => <Text style={styles.rowViewContainer}
  
                        onPress={this.GetStudentIDFunction.bind(
                          this,rowData.emp_name, 
                          rowData.emp_dob, 
                          rowData.emp_gender, 
                          rowData.emp_rollno,                        
                          rowData.emp_address,
                          rowData.creche_id,
                          rowData.emp_status,
                          rowData.emp_attendance,
                           )} >
  
                           {'         '}{rowData.emp_rollno<10?'00'+rowData.emp_rollno:(rowData.emp_rollno<100?'0'+rowData.emp_rollno:rowData.emp_rollno)}                                 {rowData.emp_name} 
  
                        </Text> }
  
            />
  
          </View>
          </ScrollView>
        );
      }
  
}




 

export default Application = StackNavigator({
  First:   { screen: TabNavigator({
                     CHILD: { screen: Child },
                     EMPLOYEE: { screen: ShowStudentListActivity },
     }) 
    },

  Second: { screen: EditStudentRecordActivity },
  Third : { screen: EditEmployeeRecordActivity },
  
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',    
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
   },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    
  },
  ok:{
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 20,
    marginBottom:10,
    marginLeft: 10,
    marginRight: 40,
    marginTop: 370,
  },


  MainContainer :{
    
        alignItems: 'center',
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
    
      textAlign: 'center',
      width: '90%',
      marginBottom: 7,
      height: 40,
      borderWidth: 1,
      borderColor: '#FF5722',
      borderRadius: 5 ,
    
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
        marginLeft:  20,
        marginRight: 20,
      }
});
