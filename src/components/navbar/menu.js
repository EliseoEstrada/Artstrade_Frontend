import React, { Component } from 'react'
import { Breadcrumb, BreadcrumbItem} from 'reactstrap'
import { Mod_SignUp } from '../modals/m_signup'
import { Mod_Login } from '../modals/m_login'
import { Link} from 'react-router-dom';





export default class Menu extends Component {
    render() {
        return (
            <div style={{ backgroundColor:"#1F1F1F" }} class="d-flex justify-content-center">             
                   
                    <Breadcrumb  listTag="div" className='text-center' >
                        <BreadcrumbItem 
                        
                        className='text-light bg-dark' 
                        href="#"
                        tag="a"
                        style={{ textdecoration: "none" }}
                        >
                        Ilustration
                        </BreadcrumbItem>
                        <BreadcrumbItem
                        className='text-light bg-dark'
                        href="#"
                        tag="a"
                        >
                        Modelado 3D
                        </BreadcrumbItem>
                        <BreadcrumbItem
                        className='text-light bg-dark'
                        href="#"
                        tag="a"
                        >
                        Concept Art
                        </BreadcrumbItem>
                        <BreadcrumbItem
                        className='text-light bg-dark'
                        href="#"
                        tag="a"
                        >
                        Digital Art
                        </BreadcrumbItem>
                        <BreadcrumbItem
                        className='text-light bg-dark'
                        href="#"
                        tag="a"
                        >
                        Sketchs
                        </BreadcrumbItem>
                    </Breadcrumb>
            </div>
        )
    }
}