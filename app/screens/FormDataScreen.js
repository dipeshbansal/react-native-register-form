import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FormDataScreen = ({ route }) => {
  // Extract the form data from the route params
  const { formData } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Form Data</Text>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>{formData.name}</Text>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Age:</Text>
        <Text style={styles.value}>{formData.age}</Text>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Gender:</Text>
        <Text style={styles.value}>{formData.gender}</Text>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{formData.email}</Text>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Password:</Text>
        <Text style={styles.value}>{formData.password}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#fff',
    },
    heading: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    fieldContainer: {
      flexDirection: 'row',
      marginBottom: 10,
    },
    label: {
      fontWeight: 'bold',
      marginRight: 5,
    },
    value: {
      flex: 1,
    },
  });

export default FormDataScreen;