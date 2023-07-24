import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FormContainer = () => {
const navigation = useNavigation();

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (name, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const validateForm = () => {
    const { name, age, email, password, gender } = formData;
    const errors = {};

    // Perform validation using regular expressions or other methods
    // For example, validate name using /^[a-zA-Z\s]+$/

    if (!name) {
      errors.name = 'Name is required.';
    }
    if (!email) {
        errors.email = 'Email is required.';
    } else if (!isValidEmail(email)) {
        errors.email = 'Invalid email format.';
    }
    
    if (!age) {
        errors.age = 'Age is required.';
    } else if (!isValidAge(age)) {
        errors.age = 'Invalid age format.';
    }

    if (!gender) {
        errors.gender = 'Gender is required.';
    }
    
    if (!password) {
        errors.password = 'Password is required.';
    } else if (password.length < 6) {
        errors.password = 'Password must be at least 6 characters long.';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const isValidEmail = (email) => {
    // Perform email validation using regular expressions or other methods
    // For example, validate email using a regular expression pattern
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  };

  const isValidAge = (age) => {
    // Perform age validation using regular expressions or other methods
    // For example, validate age using a regular expression pattern
    const ageRegex = /^[0-9]{1,2}$/;
    return ageRegex.test(age);
  };


  const handleSubmit = () => {
    if (validateForm()) {
      // Move to the next screen using React Navigation or other navigation libraries
      // Pass the form data to the next screen
      navigation.navigate('FormData', { formData });
      // Reset the form fields
      setFormData({
        name: '',
        age: '',
        gender: '',
        email: '',
        password: ''
      });
    }
  };

  return (
    <View style={styles.container}>
        <Text style={styles.header}>Registration Form</Text>
        <TextInput
            style={styles.input}
            placeholder="Name"
            value={formData.name}
            onChangeText={(value) => handleInputChange('name', value)}
        />
        {errors.name && <Text style={styles.error}>{errors.name}</Text>}
        <TextInput
            style={styles.input}
            placeholder="Age"
            value={formData.age}
            onChangeText={(value) => handleInputChange('age', value)}
            keyboardType="numeric"
        />
        {errors.age && <Text style={styles.error}>{errors.age}</Text>}

        <TextInput
            style={styles.input}
            placeholder="Gender"
            value={formData.gender}
            onChangeText={(value) => handleInputChange('gender', value)}
        />
        {errors.gender && <Text style={styles.error}>{errors.gender}</Text>}

        <TextInput
            style={styles.input}
            placeholder="Email"
            value={formData.email}
            onChangeText={(value) => handleInputChange('email', value)}
            keyboardType="email-address"
        />
        {errors.email && <Text style={styles.error}>{errors.email}</Text>}

        <TextInput
            style={styles.input}
            placeholder="Password"
            value={formData.password}
            onChangeText={(value) => handleInputChange('password', value)}
            secureTextEntry
        />
        {errors.password && <Text style={styles.error}>{errors.password}</Text>}

        <Button title="Next" onPress={handleSubmit} />
  </View>

  );
};

export default FormContainer;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    header: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    input: {
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 5,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
    error: {
      color: 'red',
      marginBottom: 10,
    },
  });