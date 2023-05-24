'use client';
import { Roboto } from 'next/font/google';
import styles from 'src/app/page.module.scss'
import InputGeneric from "./components/InputGeneric/InputGeneric";
import ButtonGeneric from "./components/ButtonGeneric/ButtonGeneric";
import { useEffect, useState } from "react";
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from "@chakra-ui/theme";
import axios from "axios";

const roboto = Roboto({
    weight: '400', subsets: ['latin'],
});

export default function Home() {
    const [walletInput, setWalletInput] = useState("");
    const [nefturianInfo, setNefturianInfo] = useState("");
    const [warRecap, setWarRecap] = useState({FFA: { quantity: 0}, Samurians: { quantity: 0}, Cyberians: { quantity: 0}});

    async function _getWalletNefturian() {
        const res = await axios.get(`/api/nefturian/${walletInput}`);
        setNefturianInfo(res.data);
        console.log(res);
    }
    async function _getWarRecap() {
        const res = await axios.get(`/api/war`);
        console.log("Res", res);
        setWarRecap(res.data);
    }

    useEffect(() =>  { _getWarRecap() }, []);

    return (<ChakraProvider theme={theme}>
        <main className={`${styles.container} ${roboto.className}`}>
            <h1>Nefturian War ⚔️</h1>
            <InputGeneric value={walletInput} onChange={(e) => setWalletInput(e.target.value)}/>
            <ButtonGeneric onClick={_getWalletNefturian}>Get Nefturian</ButtonGeneric>
            <div>{nefturianInfo.id ? <div>
                <div>Id {nefturianInfo.id}</div>
                <div>Name {nefturianInfo.name}</div>
                <div>Alignment {nefturianInfo.alignment}</div>
                <div>STR {nefturianInfo.attributes.str}</div>
                <div>CHAR {nefturianInfo.attributes.char}</div>
                <div>MAG {nefturianInfo.attributes.mag}</div>
                <div>DEF {nefturianInfo.attributes.def}</div>
            </div>: nefturianInfo}</div>
            <div>FFA: {warRecap.FFA.quantity}</div>
            <div>Samurians: {warRecap.Samurians.quantity}</div>
            <div>Cyberians: {warRecap.Cyberians.quantity}</div>
        </main>
    </ChakraProvider>)
}
