import { View, Text } from "react-native";
import LoginForm from "../components/Auth/LoginForm";
import UserPanel from "../components/Auth/UserPanel";

export default function Account() {
  const auth = null;

  return <View>{auth ? <UserPanel /> : <LoginForm />}</View>;
}
