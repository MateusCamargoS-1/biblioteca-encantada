import React from "react";
import ButtonDefault from "../ButtonDefault/ButtonDefault";
import ModalStyled from "./ModalStyled";

interface ModalProps {
  title: string;
  children: React.ReactNode;
  action: () => void;
  actionConfirm: () => void;
}

function Modal({ title, children, action, actionConfirm }: ModalProps) {
  return (
    <ModalStyled>
      <div
        style={{
          marginTop: '300px',
          height: "400px",
          width: "500px",
          backgroundColor: "#fff",
          color: "#333",
          padding: "20px",
          display: "flex",
          borderRadius: '8px',
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div style={{textAlign: 'center'}}>
          <h2>{title}</h2>
        </div>

        <div style={{marginLeft: '20px',}}>{children}</div>
        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
          <ButtonDefault action={action} label="Cancelar" classe="btn-cancel"/>
          <ButtonDefault label="Confirmar" action={actionConfirm} classe="fantasy-button"/>
        </div>
      </div>
    </ModalStyled>
  );
}

export default Modal;
