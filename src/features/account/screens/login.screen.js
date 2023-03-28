import React, { useState } from "react";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
} from "../components/account.styles";
import { TextInput } from "react-native-paper";

import { Spacer } from "../../../components/spacer/spacer.component";

export const LoginScreen = () => {
  const [textEmail, setTextEmail] = useState("");
  const [textPass, setTextPass] = useState("");

  return (
    <AccountBackground>
      <AccountCover></AccountCover>
      <AccountContainer>
        <TextInput
          style={{ height: 60, width: 200 }}
          type="flat"
          label="Email"
          value={textEmail}
          onChangeText={(text) => setTextEmail(text)}
        />
        <Spacer size="large" />
        <TextInput
          style={{ height: 60, width: 200 }}
          type="flat"
          label="Password"
          value={textPass}
          onChangeText={(text) => setTextPass(text)}
        />
        <Spacer size="large" />
        <AuthButton
          icon="lock-open-outline"
          color="black"
          mode="contained"
          onPress={() => navigation.navigate("Register")}
        >
          Login
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
};
