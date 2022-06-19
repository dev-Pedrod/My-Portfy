import React from 'react'

// icons
import { IoPersonCircleOutline } from "react-icons/io5";
import { RiFileList2Line } from "react-icons/ri"
import { BsGear } from "react-icons/bs"
import { CgLogOut } from "react-icons/cg"

// styles
 import * as Styled from './SidabarOptionsStyles'

export const Dropdown = ({ toggle, isOpen, logout }) => {
  return (
    <Styled.Container isOpen={isOpen} onClick={toggle}>
        <Styled.DivArrow/>
        <Styled.DivWrap>

            <Styled.LinkOptions to={"#"}>
                <Styled.DivOptions>
                    <Styled.DivIcon>
                        <IoPersonCircleOutline/>
                    </Styled.DivIcon>
                    <Styled.DivText>
                        <Styled.P>Perfil</Styled.P>
                    </Styled.DivText>
                </Styled.DivOptions>
            </Styled.LinkOptions>

            <Styled.LinkOptions to={"#"}>
                <Styled.DivOptions>
                    <Styled.DivIcon>
                        <RiFileList2Line/>
                    </Styled.DivIcon>
                    <Styled.DivText>
                        <Styled.P>Portfólio</Styled.P>
                    </Styled.DivText>
                </Styled.DivOptions>
            </Styled.LinkOptions>

            <Styled.LinkOptions to={"#"}>
                <Styled.DivOptions>
                    <Styled.DivIcon>
                        <BsGear/>
                    </Styled.DivIcon>
                    <Styled.DivText>
                        <Styled.P>Configurações</Styled.P>
                    </Styled.DivText>
                </Styled.DivOptions>
            </Styled.LinkOptions>

            <Styled.LinkOptions to={"#"} onClick={logout}>
                <Styled.DivOptions>
                    <Styled.DivIcon>
                        <CgLogOut/>
                    </Styled.DivIcon>
                    <Styled.DivText>
                        <Styled.P>Sair</Styled.P>
                    </Styled.DivText>
                </Styled.DivOptions>
            </Styled.LinkOptions>

        </Styled.DivWrap>
        <Styled.Overlay/>
    </Styled.Container>
  )
}
