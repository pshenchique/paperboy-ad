import { useState } from "react";
import styled from "styled-components";
import { Address, toNano } from "ton";
import { useTonConnect } from "../hooks/useTonConnect";
import { Card, FlexBoxCol, FlexBoxRow, Button, Input } from "./styled/styled";

export function TransferTon() {
  const { sender, connected } = useTonConnect();

  return (
    <Card>
      <FlexBoxCol>
        <h3>Заказать рекламу</h3>
        <Button
          disabled={!connected}
          style={{ marginTop: 18 }}
          onClick={async () => {
            sender.send({
              to: Address.parse("0QD9mlmw_gWQRdh7M_Ay3EV1f69PT6DJiLvmKyUJK1Tmnn3X"),
              value: toNano("0.1"),
            });
          }}
        >
          Заказать
        </Button>
      </FlexBoxCol>
    </Card>
  );
}
