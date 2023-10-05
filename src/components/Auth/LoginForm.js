import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Keyboard,
} from "react-native";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { capitalize } from "lodash";
import { user, userDetails } from "../../utils/userDB";

export default function LoginForm() {
  const [error, setError] = useState("");
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: (formData) => {
      setError("");
      const { username, password } = formData;

      if (username !== user.username || password !== user.password) {
        setError("User or Password are incorrect");
      }
    },
  });

  return (
    <View>
      <Text style={styles.title}>Login</Text>
      <TextInput
        placeholder="Username"
        style={styles.input}
        autoCapitalize="none"
        value={formik.values.username}
        onChangeText={(text) => formik.setFieldValue("username", text)}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        autoCapitalize="none"
        secureTextEntry={true}
        value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue("password", text)}
      />
      <Button title="Submit" onPress={formik.handleSubmit} />
      <Text style={styles.error}>{capitalize(formik.errors.username)}</Text>
      <Text style={styles.error}>{capitalize(formik.errors.password)}</Text>
      <Text style={styles.error}>{error}</Text>
    </View>
  );
}

function initialValues() {
  return {
    username: "",
    password: "",
  };
}

function validationSchema() {
  return {
    username: Yup.string().required("User is required").min(8),
    password: Yup.string().required("Password is required").min(8),
  };
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  error: {
    textAlign: "center",
    color: "#f00",
    marginTop: 20,
  },
});
