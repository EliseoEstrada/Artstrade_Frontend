import React, { Component } from 'react'
import { Mod_SignUp } from '../modals/m_signup'
import { Mod_Login } from '../modals/m_login'
export default class But extends Component {
    render() {
        return (
            <div className='d-inline'>
                <Mod_SignUp>

                </Mod_SignUp>

                <Mod_Login></Mod_Login>
            </div>
        )
    }
}
