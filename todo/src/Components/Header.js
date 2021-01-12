import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <div>
                <div className='container mt-2 pb-2'>
                    <div className='row'>
                        <div className='col-sm-6 text-left'>
                            <h3 className='font-weight-bolder text-xs-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-ui-checks-grid mr-1" viewBox="0 0 16 16">
                                <path d="M2 10h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1zm9-9h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm0 9a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-3zm0-10a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-3zM2 9a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H2zm7 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3zM0 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.354.854a.5.5 0 1 0-.708-.708L3 3.793l-.646-.647a.5.5 0 1 0-.708.708l1 1a.5.5 0 0 0 .708 0l2-2z"/>
                            </svg>
                                TODO APP
                            </h3>
                        </div>
                        <div className='col-sm-6 text-right text-xs-center'>
                        <a href='https://cydev.net/' target='_blank'>
                            <img className='logo' src='logo.PNG'/>
                        </a>
                        </div>
                    </div>
                </div>
                <div className='container-fluid mb-5 header-container-line'></div>
            </div>
        )
    }
}

export default Header