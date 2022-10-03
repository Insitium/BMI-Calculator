import { StatusBar } from 'expo-status-bar';
import { StyleSheet,TouchableOpacity, Text, View, TextInput } from 'react-native';
import React,{Component, useDebugValue} from 'react';

export default class App extends Component {
  // making the hook for BMI
  state = {
    heightmtr:0,
    weightmtr:0,
    bmimtr:0,
    commentmtr:'',
  }
 
  BMIfunction = ()=>{
    //finding the BMI number using the formula
    let ht = (this.state.heightmtr)
    let ht1 = ht/100
    let BMINumber = (this.state.weightmtr)/(ht1*ht1);
    BMINumber = BMINumber.toFixed(2);
    this.setState({  
      bmimtr: BMINumber
    });

    
   
    //to print the comments wether the person is fat or fit or underweight
    if(BMINumber<18.5){
      this.setState({BMINumber:'You are Underweight'})
    }
    else if(BMINumber>=18.5 && BMINumber<25){
      this.setState({commentmtr:'YAY! Normal Weight'})
    }
    else if(BMINumber>=25 && BMINumber<30){
      this.setState({commentmtr:'you are Overweight'})
    }
    else if(BMINumber>=30){
      this.setState({BMINumber:'You are Obese'})
    }
    else{
      this.setState({BMINumber:'Please input a valid number'})
    }
  }
  render(){return (
    <View style={styles.container}>
    
    {/**to put both height and box in straight line */}
    <View style={styles.hview}>          
      <Text style = {styles.infotHeading}>Height</Text>
      <TextInput style={styles.infoInput} 
      placeholder="In Centimeters"
  
      onChangeText={heightmtr => this.setState({ heightmtr })}/>
      </View>
      <View style={styles.hview2}>          
      <Text style = {styles.infotHeading}>Weight</Text>
      <TextInput style={styles.infoInput} 
      placeholder="In Kilograms"
 
      onChangeText={weightmtr => this.setState({ weightmtr })}/>
      </View>
      <View  style={styles.hview2}>
      <View style={styles.button}>
        <TouchableOpacity onPress={this.BMIfunction}>
        <Text style={styles.inSize}>Calculate BMI</Text>

        </TouchableOpacity>
        </View>
      </View>
    
      <Text style={styles.outputText}>
        {this.state.bmimtr}
      
      </Text>
      <Text style={styles.outputText}>
      {this.state.commentmtr}</Text>
     
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccccc',
    paddingTop:10,
    paddingHorizontal:20,
   
    backgroundColor:'antiquewhite'
  },
  infotHeading:{
    borderWidth:1,
    borderColor:'antiquewhite',
    width:'50%',
    marginRight:2,
    padding:7,
    fontWeight:'bold',
    fontSize:30
  },
  infoInput:{
    flexDirection:'row',
    justifyContent:'space-between',
    height:50,
    width:150,
    color:'black',
    borderColor:'white',
    textAlign:'center',
    backgroundColor:'white',
    borderRadius:15
  },
  hview:{
    flexDirection:'row',
    marginTop:200
  },
  hview2:{
    flexDirection:'row',
    marginTop:50
  },
  button: {
    alignItems: "center",
    backgroundColor: "#8b4513",
    marginTop:40,
    borderRadius:20,
    height:60,
    padding: 10,
    width:'90%'

  },
  inSize:{
    fontSize:30,
    color:'white'
  },
  outputText:{
    marginTop:10,
    textAlign:'center',
    fontSize:30
  }
}
);